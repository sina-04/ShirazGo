'use strict';

const STATIONS = [
  'Shahid Dastgheyb',
  'Shahid Doran',
  'Forsat-e Shirazi',
  'Janbazan',
  'Ghadir',
  'Razi',
  'Fazilat',
  'Kaveh',
  'Valiasr',
  'Vakilorroaya',
  'Zandiyeh',
  'Imam Hossein',
  'Namazi',
  'Shahid Avini',
  'Shahid Motahari',
  'Qasrodasht',
  'Shahed',
  "Mirza-ye Shirazi",
  "Shari'ati",
  'Ehsan'
];

// Scheduled minutes from each terminus, reconstructed from the supplied station timetable.
// The two terminal-arrival values not printed as departure columns are estimated at ~2 minutes
// from the adjacent station, consistent with the project requirement.
const OFFSET_TOWARD_EHSAN = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 35, 39, 40, 42];
const OFFSET_TOWARD_DASTGHEYB = [43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 18, 16, 14, 10, 8, 4, 2, 0];

const SERVICE = {
  weekday: {
    label: 'Working day',
    firstTowardEhsan: '06:10',
    firstTowardDastgheyb: '06:05',
    spanMinutes: 16 * 60,
    frequency: 15
  },
  weekend: {
    label: 'Weekend / holiday',
    firstTowardEhsan: '07:10',
    firstTowardDastgheyb: '07:05',
    spanMinutes: 14 * 60,
    frequency: 15
  }
};

const dom = {
  form: document.querySelector('#routeForm'),
  from: document.querySelector('#fromStation'),
  to: document.querySelector('#toStation'),
  date: document.querySelector('#travelDate'),
  time: document.querySelector('#travelTime'),
  swap: document.querySelector('#swapStations'),
  leaveNow: document.querySelector('#leaveNowButton'),
  resultEmpty: document.querySelector('#resultEmpty'),
  resultContent: document.querySelector('#resultContent'),
  resultDirection: document.querySelector('#resultDirection'),
  resultFrom: document.querySelector('#resultFrom'),
  resultTo: document.querySelector('#resultTo'),
  resultServiceBadge: document.querySelector('#resultServiceBadge'),
  journeyDuration: document.querySelector('#journeyDuration'),
  journeyStops: document.querySelector('#journeyStops'),
  nextDeparture: document.querySelector('#nextDeparture'),
  estimatedArrival: document.querySelector('#estimatedArrival'),
  routeProgress: document.querySelector('#routeProgress'),
  departureList: document.querySelector('#departureList'),
  serviceMessage: document.querySelector('#serviceMessage'),
  matrixTable: document.querySelector('#matrixTable'),
  matrixMode: document.querySelector('#matrixMode'),
  matrixTime: document.querySelector('#matrixTime'),
  stationList: document.querySelector('#stationList'),
  themeToggle: document.querySelector('#themeToggle'),
  toast: document.querySelector('#toast')
};

let selectedMatrixCell = null;
let stationListService = 'weekday';
let serviceTypeManuallyChanged = false;

const storage = {
  get(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* Storage can be unavailable in privacy/file contexts. */ }
  }
};

function minutesFromTime(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  return (hours * 60) + minutes;
}

function timeFromMinutes(totalMinutes) {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function formatDateInput(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function isFriday(dateString) {
  if (!dateString) return false;
  const date = new Date(`${dateString}T12:00:00`);
  return date.getDay() === 5;
}

function getSelectedServiceType() {
  return document.querySelector('input[name="serviceType"]:checked').value;
}

function setServiceType(type) {
  const input = document.querySelector(`input[name="serviceType"][value="${type}"]`);
  if (input) input.checked = true;
}

function getDirection(fromIndex, toIndex) {
  return toIndex > fromIndex ? 'ehsan' : 'dastgheyb';
}

function getTripDuration(fromIndex, toIndex) {
  if (fromIndex === toIndex) return 0;
  if (toIndex > fromIndex) {
    return OFFSET_TOWARD_EHSAN[toIndex] - OFFSET_TOWARD_EHSAN[fromIndex];
  }
  return OFFSET_TOWARD_DASTGHEYB[toIndex] - OFFSET_TOWARD_DASTGHEYB[fromIndex];
}

function getStationServiceWindow(stationIndex, direction, serviceType) {
  const service = SERVICE[serviceType];
  const base = direction === 'ehsan'
    ? minutesFromTime(service.firstTowardEhsan)
    : minutesFromTime(service.firstTowardDastgheyb);
  const offset = direction === 'ehsan'
    ? OFFSET_TOWARD_EHSAN[stationIndex]
    : OFFSET_TOWARD_DASTGHEYB[stationIndex];
  const first = base + offset;
  return {
    first,
    last: first + service.spanMinutes,
    frequency: service.frequency
  };
}

function getUpcomingDepartures(stationIndex, direction, serviceType, lookupMinutes, count = 5) {
  const { first, last, frequency } = getStationServiceWindow(stationIndex, direction, serviceType);
  if (lookupMinutes > last) return [];
  let next = first;
  if (lookupMinutes > first) {
    next = first + Math.ceil((lookupMinutes - first) / frequency) * frequency;
  }
  const departures = [];
  for (let departure = next; departure <= last && departures.length < count; departure += frequency) {
    departures.push(departure);
  }
  return departures;
}

function getStationDirectionSummary(stationIndex, serviceType) {
  const towardEhsan = stationIndex < STATIONS.length - 1
    ? getStationServiceWindow(stationIndex, 'ehsan', serviceType)
    : null;
  const towardDastgheyb = stationIndex > 0
    ? getStationServiceWindow(stationIndex, 'dastgheyb', serviceType)
    : null;
  return { towardEhsan, towardDastgheyb };
}

function populateStationSelects() {
  const options = STATIONS.map((station, index) => `<option value="${index}">${String(index + 1).padStart(2, '0')} · ${station}</option>`).join('');
  dom.from.innerHTML = options;
  dom.to.innerHTML = options;
  dom.from.value = '0';
  dom.to.value = '19';
}

function syncDateAndTimeToNow() {
  const now = new Date();
  dom.date.value = formatDateInput(now);
  dom.time.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  dom.matrixTime.value = dom.time.value;
  if (!serviceTypeManuallyChanged) {
    setServiceType(isFriday(dom.date.value) ? 'weekend' : 'weekday');
  }
}

function persistRoute() {
  const route = {
    from: dom.from.value,
    to: dom.to.value,
    date: dom.date.value,
    time: dom.time.value,
    serviceType: getSelectedServiceType()
  };
  storage.set('shirazgo-route', JSON.stringify(route));
}

function restoreRoute() {
  try {
    const saved = JSON.parse(storage.get('shirazgo-route'));
    if (!saved) return false;
    if (STATIONS[Number(saved.from)] && STATIONS[Number(saved.to)]) {
      dom.from.value = saved.from;
      dom.to.value = saved.to;
    }
    if (saved.date) dom.date.value = saved.date;
    if (saved.time) {
      dom.time.value = saved.time;
      dom.matrixTime.value = saved.time;
    }
    if (SERVICE[saved.serviceType]) setServiceType(saved.serviceType);
    return true;
  } catch {
    return false;
  }
}

function renderRouteProgress(fromIndex, toIndex) {
  const step = fromIndex < toIndex ? 1 : -1;
  const indices = [];
  for (let index = fromIndex; index !== toIndex + step; index += step) indices.push(index);

  const maxVisibleLabels = 6;
  dom.routeProgress.innerHTML = indices.map((stationIndex, visualIndex) => {
    const terminal = visualIndex === 0 || visualIndex === indices.length - 1;
    const showLabel = indices.length <= maxVisibleLabels || terminal || visualIndex === Math.floor(indices.length / 2);
    return `
      <div class="progress-stop ${terminal ? 'terminal' : ''} ${showLabel ? '' : 'hidden-label'}" title="${STATIONS[stationIndex]}">
        <i></i>
        <span>${STATIONS[stationIndex]}</span>
      </div>`;
  }).join('');
}

function showRouteResult({ scroll = false } = {}) {
  const fromIndex = Number(dom.from.value);
  const toIndex = Number(dom.to.value);

  if (fromIndex === toIndex) {
    showToast('Choose two different stations.');
    dom.to.focus();
    return false;
  }

  const serviceType = getSelectedServiceType();
  const direction = getDirection(fromIndex, toIndex);
  const lookup = minutesFromTime(dom.time.value);
  const duration = getTripDuration(fromIndex, toIndex);
  const departures = getUpcomingDepartures(fromIndex, direction, serviceType, lookup, 5);

  dom.resultEmpty.hidden = true;
  dom.resultContent.hidden = false;
  dom.resultDirection.textContent = direction === 'ehsan' ? 'Toward Ehsan' : 'Toward Shahid Dastgheyb';
  dom.resultFrom.textContent = STATIONS[fromIndex];
  dom.resultTo.textContent = STATIONS[toIndex];
  dom.resultServiceBadge.textContent = SERVICE[serviceType].label;
  dom.journeyDuration.textContent = `${duration} min`;
  dom.journeyStops.textContent = `${Math.abs(toIndex - fromIndex)} ${Math.abs(toIndex - fromIndex) === 1 ? 'stop' : 'stops'}`;

  if (departures.length) {
    dom.nextDeparture.textContent = timeFromMinutes(departures[0]);
    dom.estimatedArrival.textContent = timeFromMinutes(departures[0] + duration);
    dom.departureList.innerHTML = departures.map((departure, index) => `
      <div class="departure-time ${index === 0 ? 'next' : ''}" title="Arrives ${timeFromMinutes(departure + duration)}">
        ${timeFromMinutes(departure)}
      </div>`).join('');
    dom.serviceMessage.hidden = true;
  } else {
    const window = getStationServiceWindow(fromIndex, direction, serviceType);
    dom.nextDeparture.textContent = 'Closed';
    dom.estimatedArrival.textContent = '—';
    dom.departureList.innerHTML = '<div class="departure-time" style="grid-column:1/-1">No more scheduled trains today</div>';
    dom.serviceMessage.textContent = `Service from this station ended at ${timeFromMinutes(window.last)}. The first ${SERVICE[serviceType].label.toLowerCase()} train is at ${timeFromMinutes(window.first)}.`;
    dom.serviceMessage.hidden = false;
  }

  renderRouteProgress(fromIndex, toIndex);
  persistRoute();
  renderMatrix();

  if (scroll) {
    document.querySelector('#resultCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return true;
}

function matrixCellClass(duration) {
  if (duration <= 12) return 'short';
  if (duration <= 26) return 'medium';
  return 'long';
}

function getMatrixCellDisplay(fromIndex, toIndex, mode, lookupTime, serviceType) {
  if (fromIndex === toIndex) return { text: '—', title: 'Same station', className: 'same' };
  const duration = getTripDuration(fromIndex, toIndex);
  const direction = getDirection(fromIndex, toIndex);
  const className = matrixCellClass(duration);
  if (mode === 'duration') {
    return {
      text: `${duration}m`,
      title: `${STATIONS[fromIndex]} to ${STATIONS[toIndex]}: approximately ${duration} minutes`,
      className
    };
  }
  const departures = getUpcomingDepartures(fromIndex, direction, serviceType, lookupTime, 1);
  if (!departures.length) {
    return { text: 'Closed', title: `No scheduled train after ${timeFromMinutes(lookupTime)}`, className };
  }
  return {
    text: timeFromMinutes(departures[0] + duration),
    title: `Next departure ${timeFromMinutes(departures[0])}; estimated arrival ${timeFromMinutes(departures[0] + duration)}`,
    className
  };
}

function renderMatrix() {
  const mode = dom.matrixMode.value;
  const lookupTime = minutesFromTime(dom.matrixTime.value || dom.time.value || '08:00');
  const serviceType = getSelectedServiceType();

  const header = `<thead><tr><th scope="col">From ↓ / To →</th>${STATIONS.map(station => `<th scope="col" title="${station}">${station}</th>`).join('')}</tr></thead>`;
  const rows = STATIONS.map((fromStation, fromIndex) => {
    const cells = STATIONS.map((_, toIndex) => {
      const display = getMatrixCellDisplay(fromIndex, toIndex, mode, lookupTime, serviceType);
      const isSelected = selectedMatrixCell && selectedMatrixCell.from === fromIndex && selectedMatrixCell.to === toIndex;
      const disabled = fromIndex === toIndex ? 'disabled' : '';
      return `<td><button class="matrix-cell ${display.className} ${isSelected ? 'selected' : ''}" ${disabled} data-from="${fromIndex}" data-to="${toIndex}" title="${display.title}" aria-label="${display.title}">${display.text}</button></td>`;
    }).join('');
    return `<tr><th scope="row">${String(fromIndex + 1).padStart(2, '0')} · ${fromStation}</th>${cells}</tr>`;
  }).join('');

  dom.matrixTable.innerHTML = `${header}<tbody>${rows}</tbody>`;
}

function renderStationList() {
  dom.stationList.innerHTML = STATIONS.map((station, index) => {
    const summary = getStationDirectionSummary(index, stationListService);
    const towardEhsan = summary.towardEhsan
      ? `${timeFromMinutes(summary.towardEhsan.first)}–${timeFromMinutes(summary.towardEhsan.last)}`
      : 'Terminus';
    const towardDastgheyb = summary.towardDastgheyb
      ? `${timeFromMinutes(summary.towardDastgheyb.first)}–${timeFromMinutes(summary.towardDastgheyb.last)}`
      : 'Terminus';
    const directionText = index === 0 ? 'Toward Ehsan only' : index === STATIONS.length - 1 ? 'Toward Shahid Dastgheyb only' : 'Both directions';
    return `
      <article class="station-item ${index === 0 || index === STATIONS.length - 1 ? 'terminal' : ''}">
        <div class="station-number">${String(index + 1).padStart(2, '0')}</div>
        <div class="station-meta"><strong>${station}</strong><span>${directionText}</span></div>
        <div class="station-times">
          <div><span>→ Ehsan</span><strong>${towardEhsan}</strong></div>
          <div><span>→ Dastgheyb</span><strong>${towardDastgheyb}</strong></div>
        </div>
      </article>`;
  }).join('');
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => dom.toast.classList.remove('show'), 2500);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  dom.themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  storage.set('shirazgo-theme', theme);
}

function initializeTheme() {
  const saved = storage.get('shirazgo-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved || preferred);
}

function bindEvents() {
  dom.form.addEventListener('submit', event => {
    event.preventDefault();
    showRouteResult({ scroll: window.innerWidth < 700 });
  });

  dom.swap.addEventListener('click', () => {
    const currentFrom = dom.from.value;
    dom.from.value = dom.to.value;
    dom.to.value = currentFrom;
    showRouteResult();
  });

  dom.leaveNow.addEventListener('click', () => {
    syncDateAndTimeToNow();
    showRouteResult({ scroll: window.innerWidth < 700 });
  });

  dom.date.addEventListener('change', () => {
    if (!serviceTypeManuallyChanged) setServiceType(isFriday(dom.date.value) ? 'weekend' : 'weekday');
    renderMatrix();
  });

  document.querySelectorAll('input[name="serviceType"]').forEach(input => {
    input.addEventListener('change', () => {
      serviceTypeManuallyChanged = true;
      renderMatrix();
      if (!dom.resultContent.hidden) showRouteResult();
    });
  });

  dom.matrixMode.addEventListener('change', renderMatrix);
  dom.matrixTime.addEventListener('change', renderMatrix);

  dom.matrixTable.addEventListener('click', event => {
    const button = event.target.closest('.matrix-cell:not(.same)');
    if (!button) return;
    const from = Number(button.dataset.from);
    const to = Number(button.dataset.to);
    selectedMatrixCell = { from, to };
    dom.from.value = String(from);
    dom.to.value = String(to);
    dom.time.value = dom.matrixTime.value || dom.time.value;
    showRouteResult();
    document.querySelector('#planner').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelectorAll('[data-station-service]').forEach(button => {
    button.addEventListener('click', () => {
      stationListService = button.dataset.stationService;
      document.querySelectorAll('[data-station-service]').forEach(item => item.classList.toggle('active', item === button));
      renderStationList();
    });
  });

  dom.themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  [dom.from, dom.to, dom.time].forEach(element => {
    element.addEventListener('change', () => {
      if (!dom.resultContent.hidden && dom.from.value !== dom.to.value) showRouteResult();
    });
  });
}

function init() {
  initializeTheme();
  populateStationSelects();
  const restored = restoreRoute();
  if (!restored) syncDateAndTimeToNow();
  if (!dom.date.value || !dom.time.value) syncDateAndTimeToNow();
  renderMatrix();
  renderStationList();
  bindEvents();
  if (restored && dom.from.value !== dom.to.value) showRouteResult();
}

init();
