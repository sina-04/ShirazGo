'use strict';

const UI = {
  en: {
    pageTitle: 'ShirazGo — Shiraz Metro Journey Planner',
    pageDescription: 'ShirazGo — plan journeys on Shiraz Metro Lines 1 and 2, check upcoming trains, and compare station-to-station travel times.',
    skipLink: 'Skip to journey planner',
    brandTagline: 'Metro, made simple',
    primaryNavLabel: 'Primary navigation',
    navPlan: 'Plan a trip', navMatrix: 'From–To matrix', navStations: 'Stations',
    readableTimetable: 'PDF timetable', themeToggleLabel: 'Switch color theme',
    heroTitle: '<span class="hero-title-line hero-title-move">Move through</span><br><span class="hero-title-line hero-title-main">Shiraz</span><br><em class="hero-title-line hero-title-confidence">with</em><br><em class="hero-title-line hero-title-confidence">confidence.</em>',
    heroLead: 'Choose a metro line and two stations to see the next scheduled train and a clear station-by-station journey estimate.',
    chooseLineLabel: 'Choose metro line', serviceOverviewLabel: 'Service overview',
    stationsFact: 'stations', betweenStationsFact: 'between stations', frequencyFact: 'scheduled frequency',
    linePreviewLabel: 'Metro line preview',
    plannerEyebrow: 'Journey planner', plannerTitle: 'Where are you going?',
    metroLineLabel: 'Metro line', startingStationLabel: 'Starting station', swapStationsLabel: 'Swap starting point and destination',
    destinationLabel: 'Destination', dateLabel: 'Date', timeLabel: 'Time', serviceTypeLabel: 'Service type',
    weekdayLabel: 'Working day', weekendLabel: 'Weekend / holiday',
    automaticTimetableLabel: 'Today’s timetable', automaticTimetableHint: 'Selected automatically from the local Iranian calendar.',
    regularDayDescription: 'Regular working day', thursdayDescription: 'Thursday uses the working-day timetable',
    fridayDescription: 'Friday uses the weekend / holiday timetable',
    officialHolidayDescription: name => `${name || 'Official holiday'} · holiday timetable`,
    specialClosureDescription: (name, affected) => `${name || 'Special closure'} · ${affected ? 'holiday timetable' : 'metro timetable unchanged'}`,
    calendarFallbackHint: 'Calendar file unavailable; inferred from the weekday.',
    emptyResultTitle: 'Your route will appear here',
    emptyResultText: 'Select a line, starting station, and destination to view the next departure, live countdown, and every stop on the way.',
    estimatedJourneyLabel: 'Estimated journey', nextDepartureLabel: 'Next departure', estimatedArrivalLabel: 'Estimated arrival', departureCountdownLabel: 'Time to departure',
    departureCountdown: (minutes, seconds) => `${minutes} min ${seconds} sec`,
    upcomingTrains: 'Upcoming trains', networkExplorer: 'Network explorer', matrixTitle: 'From–To matrix',
    matrixDescription: 'Compare estimated travel duration or the next scheduled arrival for every station pair.',
    displayLabel: 'Display', travelTimeOption: 'Travel time', nextArrivalOption: 'Next arrival', lookupTimeLabel: 'Lookup time',
    legendShort: 'short-term trip (2 - 12 min)', legendMedium: 'mid-term trip (13 - 26 min)', legendLong: 'long-term trip (+27 min)', legendPlanned: 'Planned / no timetable',
    matrixHint: 'Select a cell to load that route in the planner.', matrixRegionLabel: 'Station-to-station travel matrix',
    allStations: 'All stations', stationListToggleLabel: 'Station list timetable type',
    bufferTitle: 'Plan with a small buffer',
    bufferText: 'Published timetables can change because of maintenance, special events, or operational conditions. Line 2 is partially operational, so planned stations do not show departure times.',
    openReadableTimetable: 'Download PDF timetable', footerTagline: 'Independent journey-planning interface',
    footerText: 'Built for clear access to Shiraz Metro Lines 1 and 2.', backToTop: 'Back to top ↑',
    languageTarget: 'فارسی', languageToggleLabel: 'Change language to Persian',
    lineAtGlance: line => `${line} at a glance`,
    line1StationDescription: 'First and last scheduled train times for today’s automatically selected timetable.',
    line2StationDescription: 'Operational status and modeled service windows for the current partial-service section.',
    plannedNoService: 'Planned / no service', sameStation: 'Same station',
    chooseDifferent: 'Choose two different stations.', unavailable: 'Unavailable', closed: 'Closed',
    noPassengerTimetable: 'No regular passenger timetable for this selection', noMoreTrains: 'No more scheduled trains today',
    minutes: n => `${n} min`, stops: n => `${n} ${n === 1 ? 'stop' : 'stops'}`,
    everyMinutes: n => `Every ${n} minutes`,
    estimatedArrivalAt: time => `Estimated arrival ${time}`,
    planDeparture: (departure, arrival) => `Plan this journey on the ${departure} train, arriving at approximately ${arrival}`,
    noRegularService: label => `No regular ${label.toLowerCase()} service`,
    noTrainAfter: time => `No scheduled train after ${time}`,
    matrixCorner: 'From ↓ / To →', noServiceShort: 'No svc', planned: 'Planned',
    plannedStation: 'Planned station', serviceTerminus: 'Service terminus', operationalStation: 'Operational station',
    noWeekendService: 'No regular weekend / holiday service', noPublishedTimetable: 'No published departure timetable', scheduledService: 'Scheduled passenger service',
    routeTitle: (from, to, duration, planned) => `${from} to ${to}: approximately ${duration} minutes${planned ? ' on the planned network; no current timetable' : ''}`,
    nextArrivalTitle: (departure, arrival) => `Next departure ${departure}; estimated arrival ${arrival}`,
    plannedNoTimetableTitle: 'Planned station with no regular timetable',
    endedMessage: (last, label, first) => `Service from this station ended at ${last}. The first ${label.toLowerCase()} train is at ${first}.`,
    noWindow: 'No regular service window is available for this station.',
    lineNoService: (line, label) => `${line} has no regular ${label.toLowerCase()} service in the published timetable model.`,
    plannedUnavailable: names => `${names} ${names.includes(' and ') ? 'are' : 'is'} shown as part of the planned Line 2 network, but no regular departure timetable is available yet.`,
    notConnected: 'The selected stations are not currently connected by the modeled passenger-service section.',
    cannotCalculate: 'No departure could be calculated for this selection.',
    stationPlannedTitle: name => `${name} — planned station`,
    toward: destination => `Toward ${destination}`
  },
  fa: {
    pageTitle: 'شیرازگو — برنامه‌ریز سفر متروی شیراز',
    pageDescription: 'با شیرازگو سفر در خطوط ۱ و ۲ متروی شیراز را برنامه‌ریزی کنید، زمان قطارهای بعدی را ببینید و زمان سفر میان ایستگاه‌ها را مقایسه کنید.',
    skipLink: 'رفتن به برنامه‌ریز سفر',
    brandTagline: 'مترو، ساده و روشن',
    primaryNavLabel: 'پیمایش اصلی',
    navPlan: 'برنامه‌ریزی سفر', navMatrix: 'ماتریس مبدأ–مقصد', navStations: 'ایستگاه‌ها',
    readableTimetable: 'جدول زمانی PDF', themeToggleLabel: 'تغییر حالت رنگی',
    heroTitle: '<span class="hero-title-line hero-title-main">در شیراز حرکت کنید؛</span><br><em class="hero-title-confidence">با اطمینان.</em>',
    heroLead: 'خط مترو، ایستگاه مبدأ و مقصد را انتخاب کنید تا نزدیک‌ترین قطار و برآورد مرحله‌به‌مرحله سفر را ببینید.',
    chooseLineLabel: 'انتخاب خط مترو', serviceOverviewLabel: 'نمای کلی خدمات',
    stationsFact: 'ایستگاه', betweenStationsFact: 'بین هر دو ایستگاه', frequencyFact: 'فاصله حرکت برنامه‌ریزی‌شده',
    linePreviewLabel: 'پیش‌نمایش خط مترو',
    plannerEyebrow: 'برنامه‌ریز سفر', plannerTitle: 'به کجا می‌روید؟',
    metroLineLabel: 'خط مترو', startingStationLabel: 'ایستگاه مبدأ', swapStationsLabel: 'جابجایی مبدأ و مقصد',
    destinationLabel: 'ایستگاه مقصد', dateLabel: 'تاریخ', timeLabel: 'زمان', serviceTypeLabel: 'نوع سرویس',
    weekdayLabel: 'روز کاری', weekendLabel: 'تعطیلات و آخر هفته',
    automaticTimetableLabel: 'جدول زمانی امروز', automaticTimetableHint: 'به‌صورت خودکار از تقویم محلی ایران انتخاب شده است.',
    regularDayDescription: 'روز کاری عادی', thursdayDescription: 'پنج‌شنبه از جدول روز کاری استفاده می‌کند',
    fridayDescription: 'جمعه از جدول تعطیلات و آخر هفته استفاده می‌کند',
    officialHolidayDescription: name => `${name || 'تعطیل رسمی'} · جدول تعطیلات`,
    specialClosureDescription: (name, affected) => `${name || 'تعطیلی ویژه'} · ${affected ? 'جدول تعطیلات' : 'جدول مترو بدون تغییر'}`,
    calendarFallbackHint: 'فایل تقویم در دسترس نبود؛ نوع سرویس از روز هفته تشخیص داده شد.',
    emptyResultTitle: 'مسیر شما اینجا نمایش داده می‌شود',
    emptyResultText: 'خط، مبدأ و مقصد را انتخاب کنید تا حرکت بعدی، شمارش معکوس زنده و تمام ایستگاه‌های مسیر نمایش داده شوند.',
    estimatedJourneyLabel: 'زمان تقریبی سفر', nextDepartureLabel: 'حرکت بعدی', estimatedArrivalLabel: 'زمان تقریبی رسیدن', departureCountdownLabel: 'زمان باقی‌مانده تا حرکت',
    departureCountdown: (minutes, seconds) => `${minutes} دقیقه و ${seconds} ثانیه`,
    upcomingTrains: 'قطارهای بعدی', networkExplorer: 'کاوش شبکه', matrixTitle: 'ماتریس مبدأ–مقصد',
    matrixDescription: 'زمان تقریبی سفر یا نزدیک‌ترین زمان رسیدن را برای همه جفت‌های ایستگاهی مقایسه کنید.',
    displayLabel: 'نوع نمایش', travelTimeOption: 'زمان سفر', nextArrivalOption: 'نزدیک‌ترین رسیدن', lookupTimeLabel: 'زمان جست‌وجو',
    legendShort: 'سفر کوتاه‌مدت (۲ تا ۱۲ دقیقه)', legendMedium: 'سفر میان‌مدت (۱۳ تا ۲۶ دقیقه)', legendLong: 'سفر بلندمدت (۲۷ دقیقه و بیشتر)', legendPlanned: 'برنامه‌ریزی‌شده / بدون جدول',
    matrixHint: 'با انتخاب هر خانه، همان مسیر در برنامه‌ریز بارگذاری می‌شود.', matrixRegionLabel: 'ماتریس زمان سفر میان ایستگاه‌ها',
    allStations: 'همه ایستگاه‌ها', stationListToggleLabel: 'نوع جدول زمانی فهرست ایستگاه‌ها',
    bufferTitle: 'زمان احتیاطی کوتاهی در نظر بگیرید',
    bufferText: 'جدول‌های زمانی ممکن است به‌دلیل تعمیرات، رویدادهای ویژه یا شرایط بهره‌برداری تغییر کنند. خط ۲ به‌صورت بخشی فعال است؛ بنابراین برای ایستگاه‌های برنامه‌ریزی‌شده زمان حرکت نمایش داده نمی‌شود.',
    openReadableTimetable: 'دانلود جدول زمانی PDF', footerTagline: 'رابط مستقل برنامه‌ریزی سفر',
    footerText: 'برای دسترسی روشن به خطوط ۱ و ۲ متروی شیراز ساخته شده است.', backToTop: 'بازگشت به بالا ↑',
    languageTarget: 'English', languageToggleLabel: 'تغییر زبان به انگلیسی',
    lineAtGlance: line => `نمای کلی ${line}`, line1StationDescription: 'زمان نخستین و آخرین قطار برای جدول زمانی انتخاب‌شده خودکار امروز.',
    line2StationDescription: 'وضعیت بهره‌برداری و بازه‌های زمانی برآوردی بخش فعال خط ۲.',
    plannedNoService: 'برنامه‌ریزی‌شده / بدون سرویس', sameStation: 'ایستگاه یکسان',
    chooseDifferent: 'دو ایستگاه متفاوت انتخاب کنید.', unavailable: 'در دسترس نیست', closed: 'پایان سرویس',
    noPassengerTimetable: 'برای این انتخاب جدول زمانی منظم مسافری وجود ندارد', noMoreTrains: 'امروز قطار برنامه‌ریزی‌شده دیگری وجود ندارد',
    minutes: n => `${n} دقیقه`, stops: n => `${n} ایستگاه`, everyMinutes: n => `هر ${n} دقیقه`,
    estimatedArrivalAt: time => `زمان تقریبی رسیدن: ${time}`, noRegularService: label => `سرویس منظم ${label} وجود ندارد`,
    planDeparture: (departure, arrival) => `برنامه‌ریزی این سفر با قطار ساعت ${departure} و رسیدن تقریبی در ساعت ${arrival}`,
    noTrainAfter: time => `پس از ساعت ${time} قطار برنامه‌ریزی‌شده‌ای وجود ندارد`,
    matrixCorner: 'مبدأ ↓ / مقصد ←', noServiceShort: 'بدون سرویس', planned: 'برنامه‌ریزی‌شده',
    plannedStation: 'ایستگاه برنامه‌ریزی‌شده', serviceTerminus: 'ایستگاه پایانی سرویس', operationalStation: 'ایستگاه فعال',
    noWeekendService: 'در تعطیلات و آخر هفته سرویس منظم وجود ندارد', noPublishedTimetable: 'جدول حرکت منتشرشده‌ای وجود ندارد', scheduledService: 'سرویس مسافری برنامه‌ریزی‌شده',
    routeTitle: (from, to, duration, planned) => `از ${from} تا ${to}: حدود ${duration} دقیقه${planned ? ' در شبکه برنامه‌ریزی‌شده؛ بدون جدول زمانی فعال' : ''}`,
    nextArrivalTitle: (departure, arrival) => `حرکت بعدی ${departure}؛ زمان تقریبی رسیدن ${arrival}`,
    plannedNoTimetableTitle: 'ایستگاه برنامه‌ریزی‌شده بدون جدول زمانی منظم',
    endedMessage: (last, label, first) => `سرویس این ایستگاه در ساعت ${last} پایان یافته است. نخستین قطار ${label} در ساعت ${first} حرکت می‌کند.`,
    noWindow: 'برای این ایستگاه بازه سرویس منظمی در دسترس نیست.',
    lineNoService: (line, label) => `${line} در مدل جدول زمانی منتشرشده، سرویس منظم ${label} ندارد.`,
    plannedUnavailable: names => `${names} بخشی از شبکه برنامه‌ریزی‌شده خط ۲ است، اما هنوز جدول حرکت منظم برای آن منتشر نشده است.`,
    notConnected: 'ایستگاه‌های انتخاب‌شده در بخش فعال مدل‌شده به یکدیگر متصل نیستند.',
    cannotCalculate: 'امکان محاسبه زمان حرکت برای این انتخاب وجود ندارد.',
    stationPlannedTitle: name => `${name} — ایستگاه برنامه‌ریزی‌شده`,
    toward: destination => `به‌سمت ${destination}`
  }
};

const text = (en, fa) => ({ en, fa });

const SERVICE_DAY_TYPES = Object.freeze({
  REGULAR_WEEKDAY: 'REGULAR_WEEKDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  OFFICIAL_HOLIDAY: 'OFFICIAL_HOLIDAY',
  SPECIAL_CLOSURE: 'SPECIAL_CLOSURE'
});

const LINES = {
  line1: {
    id: 'line1', number: 1,
    name: text('Line 1', 'خط ۱'), subtitle: text('Shahid Dastgheyb ↔ Ehsan', 'شهید دستغیب ↔ احسان'),
    status: text('Full service', 'سرویس کامل'), statusTone: 'active',
    averageTravelLabel: text('≈ 2 min', 'حدود ۲ دقیقه'), defaultFrom: 0, defaultTo: 19,
    stations: [
      ['Shahid Dastgheyb','شهید دستغیب',true,'Airport-side terminus','پایانه سمت فرودگاه'],
      ['Shahid Doran','شهید دوران',true], ['Forsat-e Shirazi','فرصت شیرازی',true], ['Janbazan','جانبازان',true],
      ['Ghadir','غدیر',true], ['Razi','رازی',true], ['Fazilat','فضیلت',true], ['Kaveh','کاوه',true],
      ['Valiasr','ولیعصر',true], ['Vakilorroaya','وکیل‌الرعایا',true], ['Zandiyeh','زندیه',true],
      ['Imam Hossein','امام حسین',true,null,null,'Line 2 interchange','تقاطع با خط ۲'],
      ['Namazi','نمازی',true], ['Shahid Avini','شهید آوینی',true], ['Shahid Motahari','شهید مطهری',true],
      ['Qasrodasht','قصردشت',true], ['Shahed','شاهد',true], ['Mirza-ye Shirazi','میرزای شیرازی',true],
      ["Shari'ati",'شریعتی',true], ['Ehsan','احسان',true,'North-west terminus','پایانه شمال‌غربی']
    ].map(([en,fa,active,noteEn,noteFa,interchangeEn,interchangeFa]) => ({ name:text(en,fa),active,note:noteEn?text(noteEn,noteFa):null,interchange:interchangeEn?text(interchangeEn,interchangeFa):null })),
    directions: {
      forward: { label:text('Toward Ehsan','به‌سمت احسان'), shortLabel:text('Ehsan','احسان'), originIndex:0, terminusIndex:19, offsets:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,32,35,39,40,42] },
      reverse: { label:text('Toward Shahid Dastgheyb','به‌سمت شهید دستغیب'), shortLabel:text('Dastgheyb','شهید دستغیب'), originIndex:19, terminusIndex:0, offsets:[43,41,39,37,35,33,31,29,27,25,23,21,18,16,14,10,8,4,2,0] }
    },
    services: {
      weekday:{ available:true,label:text('Working day','روز کاری'),frequency:15,forward:{first:'06:10',last:'22:10'},reverse:{first:'06:05',last:'22:05'} },
      weekend:{ available:true,label:text('Weekend / holiday','تعطیلات و آخر هفته'),frequency:15,forward:{first:'07:10',last:'21:10'},reverse:{first:'07:05',last:'21:05'} }
    },
    heroStops:[
      {index:0,label:text('Airport side','سمت فرودگاه')},{index:8,label:text('Central connection','اتصال مرکزی')},
      {index:12,label:text('City centre','مرکز شهر')},{index:19,label:text('North-west terminus','پایانه شمال‌غربی')}
    ],
    banner:text('Line 1 is fully operational across all 20 stations.','خط ۱ در تمام ۲۰ ایستگاه به‌طور کامل فعال است.'),
    formNote:text('Line 1 uses the supplied station timetable. Travel duration follows published station offsets.','خط ۱ از جدول زمانی ایستگاه‌های ارائه‌شده استفاده می‌کند و مدت سفر بر پایه فاصله زمانی منتشرشده میان ایستگاه‌ها محاسبه می‌شود.'),
    dataNote:text('Direction-aware timetable reconstructed from the supplied station schedules.','جدول زمانی جهت‌محور بر پایه برنامه حرکت ارائه‌شده برای ایستگاه‌ها بازسازی شده است.')
  },
  line2: {
    id:'line2', number:2,
    name:text('Line 2','خط ۲'), subtitle:text('Shokoufeh ↔ Fazilat','شکوفه ↔ فضیلت'),
    status:text('Partial service','سرویس محدود'), statusTone:'limited', averageTravelLabel:text('≈ 2 min','حدود ۲ دقیقه'),
    defaultFrom:1, defaultTo:7,
    stations:[
      ['Shokoufeh','شکوفه',false,'Planned','برنامه‌ریزی‌شده'],
      ['Ghahremanan','قهرمانان',true,'Current service terminus','پایانه فعلی سرویس'],
      ['Edalat','عدالت',true], ['Dowlat','دولت',true],
      ['Rahmat','رحمت',true,null,null,'Future Line 6 interchange','تقاطع آینده با خط ۶'],
      ['Basij','بسیج',true],
      ['Esteghlal','استقلال',true,null,null,'Future Line 4 interchange','تقاطع آینده با خط ۴'],
      ['Imam Hossein','امام حسین',true,'Current service terminus','پایانه فعلی سرویس','Line 1 interchange','تقاطع با خط ۱'],
      ['Azadi','آزادی',false,'Future phase','فاز آینده'], ['Atlasi','اطلسی',false,'Future phase','فاز آینده'],
      ['Hafezieh','حافظیه',false,'Future phase','فاز آینده'], ['Saadieh','سعدیه',false,'Future phase','فاز آینده'],
      ['Fazilat','فضیلت',false,'Future terminus','پایانه آینده']
    ].map(([en,fa,active,statusEn,statusFa,interchangeEn,interchangeFa]) => ({ name:text(en,fa),active,status:statusEn?text(statusEn,statusFa):null,note:active&&statusEn?text(statusEn,statusFa):null,interchange:interchangeEn?text(interchangeEn,interchangeFa):null })),
    directions:{
      forward:{ label:text('Toward Imam Hossein','به‌سمت امام حسین'),shortLabel:text('Imam Hossein','امام حسین'),originIndex:1,terminusIndex:7,offsets:[null,0,2,4,6,8,10,12,null,null,null,null,null] },
      reverse:{ label:text('Toward Ghahremanan','به‌سمت قهرمانان'),shortLabel:text('Ghahremanan','قهرمانان'),originIndex:7,terminusIndex:1,offsets:[null,12,10,8,6,4,2,0,null,null,null,null,null] }
    },
    services:{
      weekday:{available:true,label:text('Working day','روز کاری'),frequency:40,forward:{first:'06:00',last:'17:20'},reverse:{first:'06:20',last:'17:40'}},
      weekend:{available:false,label:text('Weekend / holiday','تعطیلات و آخر هفته'),frequency:40,forward:null,reverse:null}
    },
    heroStops:[
      {index:0,label:text('Planned terminus','پایانه برنامه‌ریزی‌شده'),planned:true},
      {index:1,label:text('Current service start','آغاز سرویس فعلی')},
      {index:7,label:text('Line 1 interchange','تقاطع با خط ۱')},
      {index:12,label:text('Future terminus','پایانه آینده'),planned:true}
    ],
    banner:text('Line 2 currently provides partial service. Planned stations remain visible but do not have departure times.','خط ۲ در حال حاضر به‌صورت بخشی فعال است. ایستگاه‌های برنامه‌ریزی‌شده نمایش داده می‌شوند، اما زمان حرکت ندارند.'),
    formNote:text('Line 2 planning uses a modeled 40-minute headway for the active Ghahremanan–Imam Hossein section. Verify station notices before travel.','برنامه‌ریزی خط ۲ برای بخش فعال قهرمانان تا امام حسین با فاصله حرکت برآوردی ۴۰ دقیقه انجام می‌شود. پیش از سفر اطلاعیه‌های ایستگاه را بررسی کنید.'),
    dataNote:text('Line 2 times are a planning model for the currently active section.','زمان‌های خط ۲ یک مدل برنامه‌ریزی برای بخش فعال کنونی هستند.')
  }
};

const dom = {
  html: document.documentElement, form: document.querySelector('#routeForm'), line: document.querySelector('#metroLine'),
  matrixLine: document.querySelector('#matrixLine'), from: document.querySelector('#fromStation'), to: document.querySelector('#toStation'),
  date: document.querySelector('#travelDate'), time: document.querySelector('#travelTime'), swap: document.querySelector('#swapStations'),
  lineServiceBanner: document.querySelector('#lineServiceBanner'), formNote: document.querySelector('#formNote'),
  resultEmpty: document.querySelector('#resultEmpty'), resultContent: document.querySelector('#resultContent'), resultDirection: document.querySelector('#resultDirection'),
  resultFrom: document.querySelector('#resultFrom'), resultTo: document.querySelector('#resultTo'), resultServiceBadge: document.querySelector('#resultServiceBadge'),
  journeyDuration: document.querySelector('#journeyDuration'), journeyStops: document.querySelector('#journeyStops'), nextDeparture: document.querySelector('#nextDeparture'), estimatedArrival: document.querySelector('#estimatedArrival'),
  departureCountdown: document.querySelector('#departureCountdown'), routeProgress: document.querySelector('#routeProgress'), departureList: document.querySelector('#departureList'),
  serviceMessage: document.querySelector('#serviceMessage'), frequencyLabel: document.querySelector('#frequencyLabel'), matrixTable: document.querySelector('#matrixTable'),
  matrixMode: document.querySelector('#matrixMode'), matrixTime: document.querySelector('#matrixTime'), stationList: document.querySelector('#stationList'),
  stationsTitle: document.querySelector('#stations-title'), stationsDescription: document.querySelector('#stationsDescription'), themeToggle: document.querySelector('#themeToggle'),
  languageToggle: document.querySelector('#languageToggle'), languageToggleLabel: document.querySelector('#languageToggleLabel'), toast: document.querySelector('#toast'),
  heroStationCount: document.querySelector('#heroStationCount'), heroTravelTime: document.querySelector('#heroTravelTime'), heroFrequency: document.querySelector('#heroFrequency'),
  previewLineName: document.querySelector('#previewLineName'), previewStatus: document.querySelector('#previewStatus'), previewNote: document.querySelector('#previewNote'),
  heroMiniMap: document.querySelector('#heroMiniMap'), backToTop: document.querySelector('#backToTop'),
  timetableDownloads: document.querySelectorAll('[data-timetable-download]'), serviceDaySummary: document.querySelector('#serviceDaySummary'),
  stationServiceSummary: document.querySelector('#stationServiceSummary')
};

let activeLineId = 'line1';
let currentLanguage = 'en';
let selectedMatrixCell = null;
let activeServiceType = 'weekday';
let currentServiceDay = null;
let departureCountdownTimer = null;
let departureCountdownTarget = null;

const storage = {
  get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { window.localStorage.setItem(key, value); } catch { /* storage may be disabled */ } }
};

function t(key, ...args) {
  const value = UI[currentLanguage][key] ?? UI.en[key] ?? key;
  return typeof value === 'function' ? value(...args) : value;
}
function local(value) { return typeof value === 'object' && value ? (value[currentLanguage] ?? value.en) : value; }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g,character=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[character]);
}
function localizeDigits(value) {
  const string = String(value);
  if (currentLanguage !== 'fa') return string;
  return string.replace(/[0-9]/g, digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
}
function formatNumber(value, padding = 0) { return localizeDigits(String(value).padStart(padding, '0')); }
function lineData(lineId = activeLineId) { return LINES[lineId] || LINES.line1; }
function stationName(line, index) { return local(line.stations[index].name); }
function normalizeTimeValue(value) {
  if (!value) return '';
  const latinDigits=String(value).trim()
    .replace(/[۰-۹]/g,digit=>String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
    .replace(/[٠-٩]/g,digit=>String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)));
  const match=latinDigits.match(/^(\d{1,2}):(\d{1,2})$/);
  if (!match) return '';
  const hours=Number(match[1]),minutes=Number(match[2]);
  if (hours>23||minutes>59) return '';
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
}
function minutesFromTime(timeString) {
  const normalized=normalizeTimeValue(timeString);
  if (!normalized) return 0;
  const [hours, minutes] = normalized.split(':').map(Number);
  return (hours * 60) + minutes;
}
function timeFromMinutes(totalMinutes) {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  return localizeDigits(`${String(Math.floor(normalized / 60)).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')}`);
}
function formatDateInput(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}
function createFallbackServiceDay(date = new Date()) {
  const weekday = date.getDay();
  const serviceDayType = weekday === 5 ? SERVICE_DAY_TYPES.FRIDAY : weekday === 4 ? SERVICE_DAY_TYPES.THURSDAY : SERVICE_DAY_TYPES.REGULAR_WEEKDAY;
  return { gregorian:formatDateInput(date), serviceDayType, baseServiceDayType:serviceDayType, calendarSource:'fallback', hasOverride:false };
}
function getTimetableCategory(serviceDay = currentServiceDay) {
  if (serviceDay?.timetableCategory === 'weekday' || serviceDay?.timetableCategory === 'weekend') return serviceDay.timetableCategory;
  if (serviceDay?.serviceDayType === SERVICE_DAY_TYPES.SPECIAL_CLOSURE && serviceDay.affectsMetroSchedule === false) {
    return getTimetableCategory({serviceDayType:serviceDay.baseServiceDayType});
  }
  switch (serviceDay?.serviceDayType) {
    case SERVICE_DAY_TYPES.FRIDAY:
    case SERVICE_DAY_TYPES.OFFICIAL_HOLIDAY:
    case SERVICE_DAY_TYPES.SPECIAL_CLOSURE:
      return 'weekend';
    default:
      return 'weekday';
  }
}
function getSelectedServiceType() { return activeServiceType; }
async function fetchCalendarJson(relativePath,{optional=false}={}) {
  try {
    const response=await fetch(new URL(relativePath,document.baseURI),{cache:'no-cache'});
    if (!response.ok) throw new Error(`Calendar request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    if (optional) return {};
    throw error;
  }
}
async function loadServiceDay(date = new Date()) {
  const dateKey=formatDateInput(date), fallback=createFallbackServiceDay(date);
  try {
    const manifest=await fetchCalendarJson('data/calendar/index.json');
    const calendarInfo=manifest.calendars?.find(item=>dateKey>=item.validFrom&&dateKey<=item.validThrough);
    if (!calendarInfo) throw new Error(`No calendar covers ${dateKey}`);
    const [calendar,overrides]=await Promise.all([
      fetchCalendarJson(`data/calendar/${calendarInfo.file}`),
      fetchCalendarJson('data/calendar/overrides.json',{optional:true})
    ]);
    const baseDate=calendar.dates?.[dateKey];
    if (!baseDate) throw new Error(`No calendar record for ${dateKey}`);
    const override=overrides[dateKey];
    currentServiceDay={...baseDate,...(override||{}),gregorian:dateKey,baseServiceDayType:baseDate.serviceDayType,calendarSource:'static',hasOverride:Boolean(override)};
  } catch {
    currentServiceDay=fallback;
  }
  activeServiceType=getTimetableCategory(currentServiceDay);
}
function serviceDayDescription() {
  const day=currentServiceDay||createFallbackServiceDay();
  if (day.serviceDayType===SERVICE_DAY_TYPES.THURSDAY) return t('thursdayDescription');
  if (day.serviceDayType===SERVICE_DAY_TYPES.FRIDAY) return t('fridayDescription');
  if (day.serviceDayType===SERVICE_DAY_TYPES.OFFICIAL_HOLIDAY) return t('officialHolidayDescription',currentLanguage==='fa'?day.holidayNameFa:day.holidayNameEn);
  if (day.serviceDayType===SERVICE_DAY_TYPES.SPECIAL_CLOSURE) return t('specialClosureDescription',currentLanguage==='fa'?day.titleFa:day.titleEn,day.affectsMetroSchedule!==false);
  return t('regularDayDescription');
}
function renderServiceDayStatus() {
  const serviceLabel=local(LINES.line1.services[activeServiceType].label);
  const fallback=currentServiceDay?.calendarSource==='fallback'?` ${t('calendarFallbackHint')}`:'';
  const summary=`<span>${escapeHtml(t('automaticTimetableLabel'))}</span><strong>${escapeHtml(serviceLabel)}</strong><small>${escapeHtml(`${serviceDayDescription()}. ${t('automaticTimetableHint')}${fallback}`)}</small>`;
  if (dom.serviceDaySummary) { dom.serviceDaySummary.dataset.service=activeServiceType; dom.serviceDaySummary.innerHTML=summary; }
  if (dom.stationServiceSummary) {
    dom.stationServiceSummary.dataset.service=activeServiceType;
    dom.stationServiceSummary.innerHTML=`<span>${escapeHtml(t('automaticTimetableLabel'))}</span><strong>${escapeHtml(serviceLabel)}</strong>`;
  }
}
function getDirection(fromIndex, toIndex) { return toIndex > fromIndex ? 'forward' : 'reverse'; }
function isOperationalStation(line, index) { return Boolean(line.stations[index]?.active); }
function isOperationalRoute(line, fromIndex, toIndex) {
  if (!isOperationalStation(line, fromIndex) || !isOperationalStation(line, toIndex)) return false;
  const offsets = line.directions[getDirection(fromIndex, toIndex)].offsets;
  return offsets[fromIndex] !== null && offsets[toIndex] !== null;
}
function getTripDuration(line, fromIndex, toIndex) {
  if (fromIndex === toIndex) return 0;
  const offsets = line.directions[getDirection(fromIndex, toIndex)].offsets;
  if (offsets[fromIndex] !== null && offsets[toIndex] !== null) return Math.abs(offsets[toIndex] - offsets[fromIndex]);
  return Math.abs(toIndex - fromIndex) * 2;
}
function getStationServiceWindow(line, stationIndex, directionKey, serviceType) {
  const service = line.services[serviceType];
  const direction = line.directions[directionKey];
  if (!service?.available || !service[directionKey]) return null;
  const offset = direction.offsets[stationIndex];
  if (offset === null || offset === undefined || !isOperationalStation(line, stationIndex)) return null;
  return { first:minutesFromTime(service[directionKey].first)+offset, last:minutesFromTime(service[directionKey].last)+offset, frequency:service.frequency };
}
function getUpcomingDepartures(line, stationIndex, directionKey, serviceType, lookupMinutes, count = 5) {
  const windowData = getStationServiceWindow(line, stationIndex, directionKey, serviceType);
  if (!windowData || lookupMinutes > windowData.last) return [];
  let next = windowData.first;
  if (lookupMinutes > windowData.first) next = windowData.first + Math.ceil((lookupMinutes-windowData.first)/windowData.frequency)*windowData.frequency;
  const departures = [];
  for (let departure=next; departure<=windowData.last && departures.length<count; departure+=windowData.frequency) departures.push(departure);
  return departures;
}
function getStationDirectionSummary(line,index,serviceType) {
  return { forward:getStationServiceWindow(line,index,'forward',serviceType), reverse:getStationServiceWindow(line,index,'reverse',serviceType) };
}

function renderLineOptions() {
  const options = Object.values(LINES).map(line => `<option value="${line.id}">${local(line.name)} · ${local(line.subtitle)}</option>`).join('');
  dom.line.innerHTML = options;
  dom.matrixLine.innerHTML = options;
  dom.line.value = activeLineId;
  dom.matrixLine.value = activeLineId;
  document.querySelectorAll('[data-line-label]').forEach(label => {
    const line = LINES[label.dataset.lineLabel];
    if (line) label.textContent = local(line.name);
  });
}
function stationOption(station,index) {
  const suffix = station.active ? '' : ` · ${t('plannedNoService')}`;
  return `<option value="${index}">${formatNumber(index+1,2)} · ${local(station.name)}${suffix}</option>`;
}
function populateStationSelects({ preserve = false } = {}) {
  const line = lineData();
  const currentFrom = dom.from.value, currentTo = dom.to.value;
  const options = line.stations.map(stationOption).join('');
  const placeholder = '<option value="">−</option>';
  dom.from.innerHTML = placeholder + options; dom.to.innerHTML = placeholder + options;
  dom.from.value = preserve && currentFrom !== '' && line.stations[Number(currentFrom)] ? currentFrom : '';
  dom.to.value = preserve && currentTo !== '' && line.stations[Number(currentTo)] ? currentTo : '';
}
function hasCompleteRoute() { return dom.from.value !== '' && dom.to.value !== ''; }
function stopDepartureCountdown({reset=true}={}) {
  if (departureCountdownTimer !== null) window.clearInterval(departureCountdownTimer);
  departureCountdownTimer=null; departureCountdownTarget=null;
  if (reset && dom.departureCountdown) dom.departureCountdown.textContent='—';
}
function updateDepartureCountdown() {
  if (departureCountdownTarget === null) return;
  const remainingMilliseconds=departureCountdownTarget-Date.now();
  if (remainingMilliseconds<=0) {
    dom.departureCountdown.textContent=t('departureCountdown',formatNumber(0),formatNumber(0,2));
    if (departureCountdownTimer !== null) window.clearInterval(departureCountdownTimer);
    departureCountdownTimer=null;
    return;
  }
  const totalSeconds=Math.ceil(remainingMilliseconds/1000);
  const minutes=Math.floor(totalSeconds/60), seconds=totalSeconds%60;
  dom.departureCountdown.textContent=t('departureCountdown',formatNumber(minutes),formatNumber(seconds,2));
}
function startDepartureCountdown(departureMinutes) {
  stopDepartureCountdown({reset:false});
  const [year,month,day]=(dom.date.value||formatDateInput(new Date())).split('-').map(Number);
  const departure=new Date(year,month-1,day,Math.floor(departureMinutes/60),departureMinutes%60,0,0);
  departureCountdownTarget=departure.getTime();
  updateDepartureCountdown();
  if (departureCountdownTarget>Date.now()) departureCountdownTimer=window.setInterval(updateDepartureCountdown,1000);
}
function renderHero() {
  const line = lineData();
  dom.heroStationCount.textContent = formatNumber(line.stations.length);
  dom.heroTravelTime.textContent = local(line.averageTravelLabel);
  dom.heroFrequency.textContent = t('minutes', formatNumber(line.services.weekday.frequency));
  dom.previewLineName.textContent = local(line.name);
  dom.previewStatus.className = `status-pill ${line.statusTone}`;
  dom.previewStatus.innerHTML = `<i></i> ${local(line.status)}`;
  dom.previewNote.textContent = local(line.dataNote);
  dom.heroMiniMap.innerHTML = line.heroStops.map((stop,visualIndex) => {
    const station = line.stations[stop.index];
    const terminal = visualIndex===0 || visualIndex===line.heroStops.length-1;
    return `<div class="mini-station ${visualIndex>0&&visualIndex<line.heroStops.length-1?'faint':''} ${stop.planned?'planned':''}">
      <span class="dot ${terminal?'terminal':''}"></span><div><strong>${local(station.name)}</strong><small>${local(stop.label)}</small></div></div>`;
  }).join('') + `<div class="train-chip" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="16" rx="4"/><path d="M8 7h8M8 12h3M13 12h3M8 22l2-3M16 22l-2-3"/></svg></div>`;
}
function renderLineControls() {
  const line = lineData();
  dom.html.dataset.line = activeLineId;
  renderLineOptions();
  document.querySelectorAll('[data-line-switch]').forEach(button => {
    const active = button.dataset.lineSwitch === activeLineId;
    button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active));
  });
  dom.lineServiceBanner.className = `line-service-banner ${line.statusTone} banner-${line.id}`;
  dom.lineServiceBanner.innerHTML = line.id === 'line1'
    ? `<strong>${local(line.name)}: ${local(line.status)}</strong><span>${local(line.banner)}</span>`
    : `<strong>${local(line.name)}: ${local(line.status)}</strong>`;
  dom.formNote.textContent = local(line.formNote);
  dom.stationsTitle.textContent = t('lineAtGlance',local(line.name));
  dom.stationsDescription.textContent = line.id==='line1' ? t('line1StationDescription') : t('line2StationDescription');
}
function setActiveLine(lineId,{preserveStations=false,updateResult=true}={}) {
  if (!LINES[lineId]) return;
  activeLineId=lineId; selectedMatrixCell=null;
  renderLineOptions(); populateStationSelects({preserve:preserveStations}); renderLineControls(); renderHero(); renderMatrix(); renderStationList();
  storage.set('shirazgo-active-line',activeLineId);
  if (updateResult) { stopDepartureCountdown(); dom.resultContent.hidden=true; dom.resultEmpty.hidden=false; }
}

function syncDateAndTimeToNow() {
  const now=new Date();
  dom.date.value=formatDateInput(now);
  dom.time.value=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  dom.matrixTime.value=dom.time.value;
}
function renderRouteProgress(line,fromIndex,toIndex) {
  const step=fromIndex<toIndex?1:-1, indices=[];
  for (let index=fromIndex; index!==toIndex+step; index+=step) indices.push(index);
  const lastVisualIndex=indices.length-1,cycles=indices.length>12?2:1.5;
  const stops=indices.map((stationIndex,visualIndex) => {
    const station=line.stations[stationIndex],terminal=visualIndex===0||visualIndex===lastVisualIndex;
    const progress=lastVisualIndex?visualIndex/lastVisualIndex:0;
    const waveY=Math.sin(progress*Math.PI*2*cycles)*46;
    const name=escapeHtml(local(station.name));
    const title=escapeHtml(station.active?local(station.name):t('stationPlannedTitle',local(station.name)));
    return `<div class="progress-stop ${waveY>8?'label-above':''} ${terminal?'terminal':''} ${station.active?'':'planned'}" style="--wave-x:${(4+progress*92).toFixed(3)}%;--wave-y:${waveY.toFixed(2)}px" title="${title}" aria-label="${title}" tabindex="0" role="group">
      <i aria-hidden="true"></i><span>${name}</span>
    </div>`;
  }).join('');
  dom.routeProgress.innerHTML=`<div class="route-wave-track" data-stop-count="${indices.length}" data-wave-cycles="${cycles}" style="--stop-count:${indices.length}">
    <canvas class="route-wave-canvas" aria-hidden="true"></canvas>${stops}
  </div>`;
  window.requestAnimationFrame(drawRouteWave);
}
function drawRouteWave() {
  const track=dom.routeProgress.querySelector('.route-wave-track'),canvas=dom.routeProgress.querySelector('.route-wave-canvas');
  if (!track||!canvas) return;
  const width=track.clientWidth,height=track.clientHeight,dpr=Math.min(window.devicePixelRatio||1,2);
  if (!width||!height) return;
  canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
  canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;
  const context=canvas.getContext('2d');
  context.setTransform(dpr,0,0,dpr,0,0);context.clearRect(0,0,width,height);
  const cycles=Number(track.dataset.waveCycles)||1.5,amplitude=46,center=height/2;
  context.beginPath();
  for(let sample=0;sample<=240;sample+=1){
    const progress=sample/240,x=width*(.04+progress*.92),y=center+Math.sin(progress*Math.PI*2*cycles)*amplitude;
    if(sample===0)context.moveTo(x,y);else context.lineTo(x,y);
  }
  context.strokeStyle=getComputedStyle(track).getPropertyValue('--route-line').trim()||'#d49a37';
  context.lineWidth=4;context.lineCap='round';context.lineJoin='round';context.stroke();
}
function showUnavailableResult(line,fromIndex,toIndex,serviceType) {
  const service=line.services[serviceType], fromStation=line.stations[fromIndex], toStation=line.stations[toIndex];
  stopDepartureCountdown(); dom.nextDeparture.textContent=t('unavailable'); dom.estimatedArrival.textContent='—';
  dom.departureList.innerHTML=`<div class="departure-time unavailable" style="grid-column:1/-1">${t('noPassengerTimetable')}</div>`;
  dom.serviceMessage.hidden=false;
  if (!service.available) dom.serviceMessage.textContent=t('lineNoService',local(line.name),local(service.label));
  else if (!fromStation.active||!toStation.active) {
    const names=[fromStation,toStation].filter(station=>!station.active).map(station=>local(station.name)).join(currentLanguage==='fa'?' و ':' and ');
    dom.serviceMessage.textContent=t('plannedUnavailable',names);
  } else if (!isOperationalRoute(line,fromIndex,toIndex)) dom.serviceMessage.textContent=t('notConnected');
  else dom.serviceMessage.textContent=t('cannotCalculate');
}
function showRouteResult({scroll=false}={}) {
  if (!hasCompleteRoute()) return false;
  const line=lineData(), fromIndex=Number(dom.from.value), toIndex=Number(dom.to.value);
  if (fromIndex===toIndex) { showToast(t('chooseDifferent')); dom.to.focus(); return false; }
  const serviceType=getSelectedServiceType(), service=line.services[serviceType], directionKey=getDirection(fromIndex,toIndex), direction=line.directions[directionKey];
  const duration=getTripDuration(line,fromIndex,toIndex), stopCount=Math.abs(toIndex-fromIndex), lookupMinutes=minutesFromTime(dom.time.value||'08:00');
  const routeOperational=service.available&&isOperationalRoute(line,fromIndex,toIndex);

  dom.resultEmpty.hidden=true; dom.resultContent.hidden=false;
  dom.resultDirection.textContent=local(direction.label);
  dom.resultFrom.textContent=stationName(line,fromIndex); dom.resultTo.textContent=stationName(line,toIndex);
  dom.resultServiceBadge.textContent=`${local(line.name)} · ${local(service.label)}`;
  dom.journeyDuration.textContent=t('minutes',formatNumber(duration));
  dom.journeyStops.textContent=t('stops',formatNumber(stopCount));
  dom.frequencyLabel.textContent=t('everyMinutes',formatNumber(service.frequency));

  if (!routeOperational) showUnavailableResult(line,fromIndex,toIndex,serviceType);
  else {
    const departures=getUpcomingDepartures(line,fromIndex,directionKey,serviceType,lookupMinutes,5);
    if (departures.length) {
      dom.nextDeparture.textContent=timeFromMinutes(departures[0]);
      dom.estimatedArrival.textContent=timeFromMinutes(departures[0]+duration);
      startDepartureCountdown(departures[0]);
      dom.departureList.innerHTML=departures.map((departure,index)=>{
        const departureTime=timeFromMinutes(departure),arrivalTime=timeFromMinutes(departure+duration);
        const label=escapeHtml(t('planDeparture',departureTime,arrivalTime));
        return `<button type="button" class="departure-time ${index===0?'next':''}" data-departure="${timeFromMinutes(departure)}" title="${label}" aria-label="${label}">${departureTime}</button>`;
      }).join('');
      dom.serviceMessage.hidden=true;
    } else {
      const windowData=getStationServiceWindow(line,fromIndex,directionKey,serviceType);
      stopDepartureCountdown(); dom.nextDeparture.textContent=t('closed'); dom.estimatedArrival.textContent='—';
      dom.departureList.innerHTML=`<div class="departure-time unavailable" style="grid-column:1/-1">${t('noMoreTrains')}</div>`;
      dom.serviceMessage.textContent=windowData?t('endedMessage',timeFromMinutes(windowData.last),local(service.label),timeFromMinutes(windowData.first)):t('noWindow');
      dom.serviceMessage.hidden=false;
    }
  }
  renderRouteProgress(line,fromIndex,toIndex); renderMatrix();
  if (scroll) document.querySelector('#resultCard').scrollIntoView({behavior:'smooth',block:'center'});
  return true;
}
function matrixCellClass(duration) { return duration<=12?'short':duration<=26?'medium':'long'; }
function getMatrixCellDisplay(line,fromIndex,toIndex,mode,lookupTime,serviceType) {
  if (fromIndex===toIndex) return {text:'—',title:t('sameStation'),className:'same'};
  const duration=getTripDuration(line,fromIndex,toIndex), directionKey=getDirection(fromIndex,toIndex), service=line.services[serviceType];
  const operational=service.available&&isOperationalRoute(line,fromIndex,toIndex), planned=!isOperationalStation(line,fromIndex)||!isOperationalStation(line,toIndex);
  if (mode==='duration') return {text:`${planned?'~':''}${formatNumber(duration)}${currentLanguage==='fa'?'د':'m'}`,title:t('routeTitle',stationName(line,fromIndex),stationName(line,toIndex),formatNumber(duration),planned),className:planned?'planned':matrixCellClass(duration)};
  if (!operational) return {text:service.available?t('noServiceShort'):t('closed'),title:planned?t('plannedNoTimetableTitle'):t('noRegularService',local(service.label)),className:'planned'};
  const departures=getUpcomingDepartures(line,fromIndex,directionKey,serviceType,lookupTime,1);
  if (!departures.length) return {text:t('closed'),title:t('noTrainAfter',timeFromMinutes(lookupTime)),className:matrixCellClass(duration)};
  return {text:timeFromMinutes(departures[0]+duration),title:t('nextArrivalTitle',timeFromMinutes(departures[0]),timeFromMinutes(departures[0]+duration)),className:matrixCellClass(duration)};
}
function renderMatrix() {
  const line=lineData(), mode=dom.matrixMode.value||'duration', lookupTime=minutesFromTime(dom.matrixTime.value||dom.time.value||'08:00'), serviceType=getSelectedServiceType();
  const header=`<thead><tr><th scope="col">${t('matrixCorner')}</th>${line.stations.map(station=>`<th scope="col" title="${local(station.name)}">${local(station.name)}</th>`).join('')}</tr></thead>`;
  const rows=line.stations.map((fromStation,fromIndex)=>{
    const cells=line.stations.map((_,toIndex)=>{
      const display=getMatrixCellDisplay(line,fromIndex,toIndex,mode,lookupTime,serviceType);
      const selected=selectedMatrixCell&&selectedMatrixCell.from===fromIndex&&selectedMatrixCell.to===toIndex;
      return `<td><button class="matrix-cell ${display.className} ${selected?'selected':''}" ${fromIndex===toIndex?'disabled':''} data-from="${fromIndex}" data-to="${toIndex}" title="${display.title}" aria-label="${display.title}">${display.text}</button></td>`;
    }).join('');
    const rowStatus=fromStation.active?'':`<span class="row-status">${t('planned')}</span>`;
    return `<tr><th scope="row">${formatNumber(fromIndex+1,2)} · ${local(fromStation.name)}${rowStatus}</th>${cells}</tr>`;
  }).join('');
  dom.matrixTable.innerHTML=`${header}<tbody>${rows}</tbody>`;
  dom.matrixTable.style.minWidth=`${Math.max(900,175+(line.stations.length*66))}px`;
}
function renderStationList() {
  const line=lineData(), service=line.services[activeServiceType];
  dom.stationList.innerHTML=line.stations.map((station,index)=>{
    const summary=getStationDirectionSummary(line,index,activeServiceType);
    const forward=summary.forward?`${timeFromMinutes(summary.forward.first)}–${timeFromMinutes(summary.forward.last)}`:'—';
    const reverse=summary.reverse?`${timeFromMinutes(summary.reverse.first)}–${timeFromMinutes(summary.reverse.last)}`:'—';
    const endpoint=index===line.directions.forward.originIndex||index===line.directions.forward.terminusIndex;
    const statusText=!station.active?(station.status?local(station.status):t('plannedStation')):(station.interchange?local(station.interchange):station.note?local(station.note):endpoint?t('serviceTerminus'):t('operationalStation'));
    const serviceText=!service.available?t('noWeekendService'):!station.active?t('noPublishedTimetable'):t('scheduledService');
    return `<article class="station-item ${endpoint?'terminal':''} ${station.active?'':'planned-station'}">
      <div class="station-number">${formatNumber(index+1,2)}</div>
      <div class="station-meta"><strong>${local(station.name)}</strong><span>${statusText} · ${serviceText}</span></div>
      <div class="station-times"><div><span>${currentLanguage==='fa'?'←':'→'} ${local(line.directions.forward.shortLabel)}</span><strong>${forward}</strong></div><div><span>${currentLanguage==='fa'?'←':'→'} ${local(line.directions.reverse.shortLabel)}</span><strong>${reverse}</strong></div></div>
    </article>`;
  }).join('');
}
function showToast(message) {
  dom.toast.textContent=message; dom.toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId); showToast.timeoutId=window.setTimeout(()=>dom.toast.classList.remove('show'),2500);
}
function applyTheme(theme) {
  dom.html.dataset.theme=theme; dom.themeToggle.setAttribute('aria-pressed',String(theme==='dark')); storage.set('shirazgo-theme',theme);
}
function initializeTheme() {
  const saved=storage.get('shirazgo-theme'), preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  applyTheme(saved||preferred);
}
function translateStaticContent() {
  document.querySelectorAll('[data-i18n]').forEach(element=>{ const key=element.dataset.i18n; if (key) element.textContent=t(key); });
  document.querySelectorAll('[data-i18n-html]').forEach(element=>{ const key=element.dataset.i18nHtml; if (key) element.innerHTML=t(key); });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element=>{ const key=element.dataset.i18nAriaLabel; if (key) element.setAttribute('aria-label',t(key)); });
  document.querySelectorAll('[data-i18n-title]').forEach(element=>{ const key=element.dataset.i18nTitle; if (key) element.setAttribute('title',t(key)); });
  document.title=t('pageTitle');
  const meta=document.querySelector('meta[name="description"]'); if (meta) meta.content=t('pageDescription');
  dom.languageToggleLabel.textContent=t('languageTarget');
  const targetLanguage=currentLanguage==='en'?'fa':'en';
  dom.languageToggleLabel.lang=targetLanguage;
  dom.languageToggleLabel.dir=targetLanguage==='fa'?'rtl':'ltr';
  dom.languageToggle.setAttribute('aria-label',t('languageToggleLabel'));
}
function applyLanguage(language,{persist=true}={}) {
  currentLanguage=language==='fa'?'fa':'en';
  dom.html.lang=currentLanguage; dom.html.dir=currentLanguage==='fa'?'rtl':'ltr'; dom.html.dataset.language=currentLanguage;
  const timetableFile=currentLanguage==='fa'?'shiraz-subway-timetable-fa.pdf':'shiraz-subway-timetable.pdf';
  const downloadName=currentLanguage==='fa'?'ShirazGo-metro-guide-fa.pdf':'ShirazGo-metro-guide.pdf';
  dom.timetableDownloads.forEach(link=>{link.href=`assets/${timetableFile}`;link.download=downloadName;});
  translateStaticContent(); renderLineOptions(); populateStationSelects({preserve:true}); renderLineControls(); renderHero(); renderServiceDayStatus(); renderMatrix(); renderStationList();
  if (!dom.resultContent.hidden && hasCompleteRoute() && dom.from.value!==dom.to.value) showRouteResult();
  if (persist) storage.set('shirazgo-language',currentLanguage);
}
function bindEvents() {
  dom.form.addEventListener('submit',event=>{event.preventDefault();showRouteResult({scroll:window.innerWidth<700});});
  dom.line.addEventListener('change',()=>setActiveLine(dom.line.value));
  dom.matrixLine.addEventListener('change',()=>setActiveLine(dom.matrixLine.value));
  document.querySelectorAll('[data-line-switch]').forEach(button=>button.addEventListener('click',()=>setActiveLine(button.dataset.lineSwitch)));
  dom.swap.addEventListener('click',()=>{const currentFrom=dom.from.value;dom.from.value=dom.to.value;dom.to.value=currentFrom;if(hasCompleteRoute())showRouteResult();});
  [dom.time,dom.matrixTime].forEach(input=>{
    input.addEventListener('input',()=>input.setCustomValidity(''));
    input.addEventListener('change',()=>{
      const normalized=normalizeTimeValue(input.value);
      if (normalized) input.value=normalized;
    });
  });
  dom.matrixMode.addEventListener('change',renderMatrix); dom.matrixTime.addEventListener('change',renderMatrix);
  dom.matrixTable.addEventListener('click',event=>{
    const button=event.target.closest('.matrix-cell:not(.same)'); if(!button)return;
    const from=Number(button.dataset.from),to=Number(button.dataset.to); selectedMatrixCell={from,to};
    dom.from.value=String(from);dom.to.value=String(to);dom.time.value=dom.matrixTime.value||dom.time.value;showRouteResult();
    document.querySelector('#planner').scrollIntoView({behavior:'smooth',block:'start'});
  });
  dom.departureList.addEventListener('click',event=>{
    const button=event.target.closest('button[data-departure]'); if(!button)return;
    const departure=normalizeTimeValue(button.dataset.departure); if(!departure)return;
    dom.time.value=departure;dom.matrixTime.value=departure;showRouteResult();
    const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
    document.querySelector('#planner').scrollIntoView({behavior,block:'start'});
  });
  dom.themeToggle.addEventListener('click',()=>applyTheme(dom.html.dataset.theme==='dark'?'light':'dark'));
  dom.languageToggle.addEventListener('click',()=>applyLanguage(currentLanguage==='en'?'fa':'en'));
  dom.backToTop.addEventListener('click',event=>{
    event.preventDefault();
    const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
    window.scrollTo({top:0,left:0,behavior});
  });
  window.addEventListener('resize',()=>window.requestAnimationFrame(drawRouteWave));
  dom.to.addEventListener('change',()=>{if(hasCompleteRoute())showRouteResult({scroll:window.innerWidth<700});});
  dom.from.addEventListener('change',()=>{if(hasCompleteRoute())showRouteResult({scroll:window.innerWidth<700});});
  dom.time.addEventListener('change',()=>{if(!dom.resultContent.hidden&&hasCompleteRoute()&&dom.from.value!==dom.to.value)showRouteResult();});
}
async function init() {
  initializeTheme();
  currentLanguage=storage.get('shirazgo-language')==='fa'?'fa':'en';
  activeLineId=LINES[storage.get('shirazgo-active-line')]?storage.get('shirazgo-active-line'):'line1';
  translateStaticContent(); setActiveLine(activeLineId,{updateResult:false});
  syncDateAndTimeToNow();
  await loadServiceDay(new Date());
  applyLanguage(currentLanguage,{persist:false}); renderLineControls(); renderHero(); renderServiceDayStatus(); renderMatrix(); renderStationList(); bindEvents();
}

init();
