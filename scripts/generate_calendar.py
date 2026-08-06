#!/usr/bin/env python3
"""Generate static Iranian service-day calendars for ShirazGo."""

from __future__ import annotations

import argparse
import json
from datetime import date, timedelta
from pathlib import Path

import holidays
import jdatetime


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "data" / "calendar"
WEEKDAYS_FA = {
    0: "دوشنبه",
    1: "سه‌شنبه",
    2: "چهارشنبه",
    3: "پنج‌شنبه",
    4: "جمعه",
    5: "شنبه",
    6: "یکشنبه",
}


def jalali_year_range(year: int) -> tuple[date, date]:
    start = jdatetime.date(year, 1, 1).togregorian()
    end = jdatetime.date(year + 1, 1, 1).togregorian() - timedelta(days=1)
    return start, end


def service_day_type(day: date, is_holiday: bool) -> str:
    if is_holiday:
        return "OFFICIAL_HOLIDAY"
    if day.weekday() == 4:
        return "FRIDAY"
    if day.weekday() == 3:
        return "THURSDAY"
    return "REGULAR_WEEKDAY"


def generate_year(year: int, generated_at: str) -> dict:
    start, end = jalali_year_range(year)
    gregorian_years = range(start.year, end.year + 1)
    holidays_en = holidays.country_holidays("IR", years=gregorian_years, language="en_US")
    holidays_fa = holidays.country_holidays("IR", years=gregorian_years, language="fa_IR")
    dates = {}
    day = start

    while day <= end:
        jalali = jdatetime.date.fromgregorian(date=day)
        holiday_name_en = holidays_en.get(day)
        holiday_name_fa = holidays_fa.get(day)
        official_holiday = day in holidays_en
        dates[day.isoformat()] = {
            "jalali": f"{jalali.year:04d}-{jalali.month:02d}-{jalali.day:02d}",
            "weekday": day.strftime("%A"),
            "weekdayFa": WEEKDAYS_FA[day.weekday()],
            "isFriday": day.weekday() == 4,
            "isOfficialHoliday": official_holiday,
            "holidayNameFa": holiday_name_fa,
            "holidayNameEn": holiday_name_en,
            "isEstimatedHoliday": bool(holiday_name_en and "estimated" in holiday_name_en.lower()),
            "serviceDayType": service_day_type(day, official_holiday),
        }
        day += timedelta(days=1)

    return {
        "schemaVersion": 1,
        "calendarYear": year,
        "generatedAt": generated_at,
        "validFrom": start.isoformat(),
        "validThrough": end.isoformat(),
        "source": {
            "library": "holidays",
            "country": "IR",
            "note": "Islamic-calendar holidays marked as estimated should be reviewed when official dates are announced.",
        },
        "dates": dates,
    }


def write_json(path: Path, payload: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--year", type=int, action="append", help="Jalali year to generate; may be supplied more than once")
    args = parser.parse_args()

    today = date.today()
    current_jalali_year = jdatetime.date.fromgregorian(date=today).year
    years = sorted(set(args.year or [current_jalali_year, current_jalali_year + 1]))
    generated_at = today.isoformat()
    manifest = {"schemaVersion": 1, "generatedAt": generated_at, "calendars": []}

    for year in years:
        calendar = generate_year(year, generated_at)
        filename = f"iran-calendar-{year}.json"
        write_json(OUTPUT_DIR / filename, calendar)
        manifest["calendars"].append({
            "calendarYear": year,
            "file": filename,
            "validFrom": calendar["validFrom"],
            "validThrough": calendar["validThrough"],
        })

    write_json(OUTPUT_DIR / "index.json", manifest)
    overrides_path = OUTPUT_DIR / "overrides.json"
    if not overrides_path.exists():
        write_json(overrides_path, {})


if __name__ == "__main__":
    main()
