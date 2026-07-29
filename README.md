# ShirazGo

A responsive, dependency-free Shiraz Metro Line 1 journey planner built with semantic HTML, modern CSS, and vanilla JavaScript.

## Information architecture

1. **Hero / service overview** — brand, network scope, and line identity.
2. **Journey planner** — origin, destination, date, time, and service type.
3. **Journey result** — next departure, estimated arrival, duration, route stops, and upcoming trains.
4. **From–To matrix** — all 20×20 station pairs with a travel-time and next-arrival mode.
5. **Station directory** — first/last service windows in both directions.
6. **Operational disclaimer** — links to an accessible Markdown version of the supplied source timetable.

## Timetable model

- Working-day terminal departures:
  - Shahid Dastgheyb → Ehsan: 06:10–22:10
  - Ehsan → Shahid Dastgheyb: 06:05–22:05
- Weekend/holiday terminal departures:
  - Shahid Dastgheyb → Ehsan: 07:10–21:10
  - Ehsan → Shahid Dastgheyb: 07:05–21:05
- Scheduled interval: 15 minutes.
- Station offsets were reconstructed from the supplied 20-page timetable.
- The terminal arrival offsets that are not printed as departure columns are estimated from the adjacent station using the requested ~2-minute inter-station assumption.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Files

- `index.html` — semantic page structure
- `styles.css` — responsive design system and component styles
- `app.js` — timetable engine and interaction logic
- `assets/shiraz-subway-timetable.md` — accessible, mobile-friendly timetable converted from the supplied PDF
