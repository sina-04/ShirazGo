const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(bytes);
  } catch { res.writeHead(404).end(); }
});

async function ready(page) {
  await page.waitForSelector('#fromStation option:nth-child(2)', { state: 'attached' });
  // Language is applied after the asynchronous calendar load.
  await page.waitForFunction(() => Boolean(document.querySelector('#serviceDaySummary').dataset.service));
}
async function themeSettled(page, theme) {
  await page.waitForFunction(value => document.documentElement.dataset.theme === value && !document.documentElement.classList.contains('theme-transition') && !document.querySelector('.theme-veil'), theme);
}
async function journeyInView(page) {
  await page.waitForFunction(() => {
    const result = document.querySelector('#resultCard').getBoundingClientRect();
    const header = document.querySelector('.site-header').getBoundingClientRect();
    return result.top >= header.bottom && result.top <= 160;
  });
}

(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const url = `http://127.0.0.1:${server.address().port}`;
    browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {}) });
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', colorScheme: 'light' });
    // Deterministic working-day service, independent of the date/time of the test run.
    await context.addInitScript(() => {
      const NativeDate = Date;
      window.Date = class extends NativeDate {
        constructor(...args) { super(...(args.length ? args : [2026, 8, 6, 10, 0, 0])); }
        static now() { return new NativeDate(2026, 8, 6, 10, 0, 0).getTime(); }
      };
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url);
    await ready(page);
    assert.equal(await page.locator('#viewRoute').count(), 0);

    let layouts = 0;
    for (const width of [320, 360, 390, 430, 620, 768, 820, 980, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const language of ['en', 'fa']) {
        if (await page.locator('html').getAttribute('lang') !== language) await page.locator('#languageToggle').click();
        for (const line of ['line1', 'line2']) {
          await page.locator('#metroLine').selectOption(line);
          await page.locator('#fromStation').selectOption('0');
          await page.locator('#toStation').selectOption(line === 'line1' ? '19' : '4');
          await journeyInView(page);
          const before = [await page.locator('#fromStation').inputValue(), await page.locator('#toStation').inputValue()];
          // Center explicitly: browser visibility checks do not account for the sticky header.
          await page.locator('#swapStations').evaluate(element => element.scrollIntoView({ block: 'center', behavior: 'instant' }));
          const geometry = await page.evaluate(() => {
            const swap = document.querySelector('#swapStations');
            const rect = swap.getBoundingClientRect();
            const fields = [...document.querySelectorAll('.station-fields .field-group, .destination-label, .destination-select')].map(el => el.getBoundingClientRect());
            const from = document.querySelector('#fromStation').getBoundingClientRect();
            const to = document.querySelector('#toStation').getBoundingClientRect();
            return {
              overlap: fields.some(field => rect.left < field.right && rect.right > field.left && rect.top < field.bottom && rect.bottom > field.top),
              height: rect.height,
              gapAbove: rect.top - from.bottom,
              gapBelow: to.top - rect.bottom,
              hit: swap.contains(document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)),
              overflow: document.documentElement.scrollWidth > innerWidth + 1
            };
          });
          assert.equal(geometry.overlap, false, `Swap overlaps a field: ${width}/${language}/${line}`);
          assert.equal(geometry.hit, true, `Swap hit target obstructed: ${width}/${language}/${line}`);
          assert.ok(geometry.height >= 44, 'Swap touch target is too small');
          assert.ok(geometry.gapAbove > 0 && Math.abs(geometry.gapAbove - geometry.gapBelow) < 1, `Unequal swap spacing: ${width}/${language}/${line}`);
          assert.equal(geometry.overflow, false, `Page overflow: ${width}/${language}/${line}`);
          await page.locator('#swapStations').click();
          await journeyInView(page);
          assert.equal(await page.locator('#fromStation').inputValue(), before[1]);
          assert.equal(await page.locator('#toStation').inputValue(), before[0]);
          assert.equal(await page.locator('#resultContent').isVisible(), true);
          // A same-station selection must not leave the previous journey visible.
          await page.locator('#toStation').selectOption(before[1]);
          assert.equal(await page.locator('#resultContent').isVisible(), false);
          layouts++;
        }
      }
    }
    console.log(`PASS ${layouts} responsive layouts: equal swap spacing, no overlap or overflow, automatic result scrolling, correct reversal and invalid-route clearing`);

    await page.locator('#languageToggle').click(); // Last layout is Persian.
    await page.locator('#metroLine').selectOption('line2');
    await page.locator('#fromStation').selectOption('2');
    await page.locator('#toStation').selectOption('3');
    assert.equal(await page.locator('#journeyDuration').innerText(), '3 min');
    await page.locator('#swapStations').click();
    assert.equal(await page.locator('#journeyDuration').innerText(), '3 min');
    await page.locator('.matrix-cell[data-from="0"][data-to="4"]').click();
    await journeyInView(page);
    assert.equal(await page.locator('#fromStation').inputValue(), '0');
    assert.equal(await page.locator('#toStation').inputValue(), '4');
    assert.equal(await page.locator('#journeyDuration').innerText(), '16 min');
    assert.equal(await page.locator('#matrixTable tbody tr').count(), 5);
    console.log('PASS Line 2 durations in both directions and matrix-to-planner navigation');

    await page.locator('#themeToggle').focus();
    await page.keyboard.press('Enter');
    await themeSettled(page, 'dark');
    assert.equal(await page.locator('#themeToggle').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#themeToggle').getAttribute('aria-label'), 'Switch to light mode');
    assert.equal(await page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length), 0);
    await page.reload(); await ready(page);
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
    console.log('PASS keyboard theme toggle, reduced motion, accessible label and persistence');

    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.locator('#fromStation').selectOption('0');
    await page.locator('#toStation').selectOption('4');
    await journeyInView(page);
    console.log('PASS smooth automatic scrolling to the result');
    for (const theme of ['light', 'dark']) {
      await page.locator('#themeToggle').click();
      await page.waitForFunction(() => document.getAnimations().some(a => a.animationName === 'theme-expand'));
      const reveal = await page.evaluate(() => {
        const animation = document.getAnimations().find(a => a.animationName === 'theme-expand');
        return { duration: animation.effect.getTiming().duration, frames: animation.effect.getKeyframes().map(frame => frame.clipPath) };
      });
      assert.equal(reveal.duration, 620);
      assert.ok(reveal.frames[0].startsWith('circle(0px'));
      assert.ok(!reveal.frames[1].startsWith('circle(0px'));
      await themeSettled(page, theme);
    }
    // Repeated clicks during a capture must leave a usable control and no stray overlay.
    await page.evaluate(() => { const button = document.querySelector('#themeToggle'); button.click(); button.click(); button.click(); });
    await themeSettled(page, 'light');
    await page.locator('#themeToggle').click();
    await themeSettled(page, 'dark');
    console.log('PASS expanding theme reveal in both directions and rapid repeated clicks');

    await page.evaluate(() => { document.startViewTransition = undefined; });
    await page.locator('#themeToggle').click();
    await page.waitForSelector('.theme-veil', { state: 'attached' });
    await themeSettled(page, 'light');
    await page.locator('#themeToggle').click();
    await themeSettled(page, 'dark');
    console.log('PASS fallback animation and cleanup without View Transitions');

    await page.locator('#languageToggle').click();
    await page.reload(); await ready(page);
    await page.waitForFunction(() => document.documentElement.lang === 'fa');
    assert.equal(await page.locator('html').getAttribute('dir'), 'rtl');
    assert.match(await page.locator('[data-timetable-download]').getAttribute('href'), /-fa\.pdf$/);
    const pdf = await page.request.get(new URL(await page.locator('[data-timetable-download]').getAttribute('href'), url).href);
    assert.equal(pdf.status(), 200);
    assert.deepEqual(errors, []);
    console.log('PASS Persian persistence, correct PDF download and zero JavaScript errors');
  } finally {
    await browser?.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
