# ShirazGo calendar data

The `iran-calendar-*.json` files are generated assets. Do not edit them by hand.

Generate the current and next Jalali years:

```bash
pip install -r requirements-calendar.txt
python scripts/generate_calendar.py
```

Generate a specific Jalali year:

```bash
python scripts/generate_calendar.py --year 1406
```

Runtime mapping:

- `REGULAR_WEEKDAY` → working-day timetable
- `THURSDAY` → working-day timetable until Shiraz Metro publishes a distinct Thursday schedule
- `FRIDAY` → weekend/holiday timetable
- `OFFICIAL_HOLIDAY` → weekend/holiday timetable
- `SPECIAL_CLOSURE` → weekend/holiday timetable only when `affectsMetroSchedule` is not `false`

Add verified exceptional dates to `overrides.json`. Use `overrides.example.json` as the template. An override can also set `timetableCategory` explicitly to `weekday` or `weekend` when an official operating notice requires it.
