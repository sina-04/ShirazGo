# ShirazGo

A responsive, dependency-free Shiraz Metro journey planner for **Lines 1 and 2**, built with semantic HTML, modern CSS, and vanilla JavaScript. The interface supports persistent English and Persian modes, complete RTL layout mirroring, and Persian numerals.

## Information architecture

1. **Bilingual interface** — persistent English/Persian switching, RTL support, Persian numerals, and Vazirmatn/Sahel typography.
2. **Line-aware hero** — network summary, current line status, and route preview.
3. **Journey planner** — metro line, origin, destination, date, time, and service type.
4. **Journey result** — next departure, estimated arrival, duration, route stops, and upcoming trains.
5. **From–To matrix** — travel-time and next-arrival modes for the selected line.
6. **Station directory** — service windows, operational status, planned stations, and interchange notes.
7. **Readable timetable** — a Markdown reference optimized for phones, tablets, and desktop screens.

## Timetable model

### Line 1

- Full service across 20 stations.
- Working-day terminal departures:
  - Shahid Dastgheyb → Ehsan: 06:10–22:10
  - Ehsan → Shahid Dastgheyb: 06:05–22:05
- Weekend/holiday terminal departures:
  - Shahid Dastgheyb → Ehsan: 07:10–21:10
  - Ehsan → Shahid Dastgheyb: 07:05–21:05
- Scheduled interval: 15 minutes.
- Station offsets were reconstructed from the supplied 20-page timetable.

### Line 2

- Complete planned route: Shokoufeh → Fazilat, 13 stations.
- Current modeled service section: Ghahremanan ↔ Imam Hossein.
- Working-day first departures:
  - Ghahremanan → Imam Hossein: 06:00
  - Imam Hossein → Ghahremanan: 06:20
- Approximate scheduled interval: 40 minutes.
- Modeled final terminal departures: 17:20 and 17:40, allowing service to finish close to 18:00.
- No regular weekend/holiday service is modeled.
- Planned stations remain visible in the selectors, matrix, and station directory, but correctly show no timetable.

## Data limitations

The supplied Shiraz Metro PDF covers Line 1. Line 2 was added from the station list provided for this project and publicly published operating information. The official Line 2 webpage was not consistently reachable during development, so Line 2 departure calculations are explicitly presented as a planning model and should be checked against station notices.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Files

- `index.html` — semantic page structure
- `styles.css` — responsive design system, Persian font stack, and RTL component rules
- `app.js` — multi-line timetable engine, bilingual content, localization, and interaction logic
- `assets/shiraz-subway-timetable.md` — accessible timetable reference for Lines 1 and 2
