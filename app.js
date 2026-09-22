'use strict';

const UI = {
  en: {
    pageTitle: 'ShirazGo — Shiraz Metro Journey Planner',
    pageDescription: 'ShirazGo — plan journeys on Shiraz Metro Lines 1 and 2, check upcoming trains, and compare station-to-station travel times.',
    skipLink: 'Skip to journey planner',
    brandTagline: 'Metro, made simple',
    primaryNavLabel: 'Primary navigation',
    navPlan: 'Plan a trip', navNearby: 'Nearby', navMap: 'Map', navMatrix: 'From–To matrix', navStations: 'Stations',
    readableTimetable: 'PDF timetable', themeToggleLabel: 'Switch color theme',
    heroEyebrow: 'Your city. Your next stop.', exploreStations: 'Explore stations',
    networkPreview: 'SHIRAZ METRO / NETWORK PREVIEW', swapAction: 'Swap stations',
    fromPlaceholder: 'Choose starting station', toPlaceholder: 'Choose destination',
    lightThemeLabel: 'Switch to light mode', darkThemeLabel: 'Switch to dark mode',
    heroTitle: '<span class="hero-title-line hero-title-move">Move through</span><br><span class="hero-title-line hero-title-main">Shiraz.</span><br><em class="hero-title-line hero-title-confidence">With confidence.</em>',
    heroLead: 'Choose a metro line and two stations to see the next scheduled train and a clear station-by-station journey estimate.',
    chooseLineLabel: 'Choose metro line', serviceOverviewLabel: 'Service overview',
    stationsFact: 'stations', betweenStationsFact: 'between stations', frequencyFact: 'scheduled frequency',
    linePreviewLabel: 'Metro line preview',
    plannerEyebrow: 'Journey planner', plannerTitle: 'Where are you going?',
    metroLineLabel: 'Metro line', startingStationLabel: 'Starting station', swapStationsLabel: 'Swap starting point and destination',
    destinationLabel: 'Destination', dateLabel: 'Date', timeLabel: 'Device time', serviceTypeLabel: 'Service type',
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
    displayLabel: 'Display', travelTimeOption: 'Travel time', nextArrivalOption: 'Next arrival', lookupTimeLabel: 'Device time',
    legendShort: 'short-term trip (2 - 12 min)', legendMedium: 'mid-term trip (13 - 26 min)', legendLong: 'long-term trip (+27 min)', legendPlanned: 'Planned / no timetable',
    matrixHint: 'Select a cell to load that route in the planner.', matrixRegionLabel: 'Station-to-station travel matrix',
    allStations: 'All stations', stationListToggleLabel: 'Station list timetable type',
    bufferTitle: 'Plan with a small buffer',
    bufferText: 'Published timetables can change because of maintenance, special events, or operational conditions. Line 2 follows the supplied working-day timetable and has no published regular weekend or official-holiday service.',
    openReadableTimetable: 'Download PDF timetable', footerTagline: 'Independent journey-planning interface',
    footerText: 'Built for clear access to Shiraz Metro Lines 1 and 2.', backToTop: 'Back to top ↑',
    languageTarget: 'فارسی', languageToggleLabel: 'Change language to Persian',
    lineAtGlance: line => `${line} at a glance`,
    line1StationDescription: 'First and last scheduled train times for today’s automatically selected timetable.',
    line2StationDescription: 'First and last trains from the supplied working-day timetable for the five-station operating section.',
    plannedNoService: 'Planned / no service', sameStation: 'Same station',
    chooseDifferent: 'Choose two different stations.', unavailable: 'Unavailable', closed: 'Closed',
    noPassengerTimetable: 'No regular passenger timetable for this selection', noMoreTrains: 'No more scheduled trains today',
    minutes: n => `${n} min`, stops: n => `${n} ${Number(n) === 1 ? 'stop' : 'stops'}`,
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
    lineNoService: (line, label) => `${line} has no regular ${label.toLowerCase()} service in the supplied timetable.`,
    plannedUnavailable: names => `${names} ${names.includes(' and ') ? 'are' : 'is'} shown as part of the planned Line 2 network, but no regular departure timetable is available yet.`,
    notConnected: 'The selected stations are not currently connected by the published passenger-service section.',
    cannotCalculate: 'No departure could be calculated for this selection.',
    stationPlannedTitle: name => `${name} — planned station`,
    toward: destination => `Toward ${destination}`,
    nearbyEyebrow: 'Nearby', nearbyTitle: 'Find the closest station',
    nearbyDescription: 'Use your location, or choose a station as a reference point, to compare the nearest metro entrances.',
    nearbyCardTitle: 'What is near you?', nearbyPrivacy: 'Your location stays in this browser and is used only to calculate distance.',
    useMyLocation: 'Use my location', findingLocation: 'Finding your location…', locationUnavailable: 'Location is unavailable. Choose a station below instead.',
    locationDenied: 'Location access was not allowed. Choose a station below instead.', orChooseStation: 'or choose a station',
    referenceStation: 'Reference station', chooseReference: 'Choose a reference station', nearbyEmptyTitle: 'Nearest stations will appear here',
    nearbyEmptyText: 'Allow location access or select a reference station to see walking estimates and quick route actions.',
    closestStations: 'Closest stations', away: distance => `${distance} away`, walkEstimate: minutes => `≈ ${minutes} min walk`,
    setDestination: 'Use as destination', showOnMap: 'Show on map',
    mapEyebrow: 'Network map', mapTitle: 'See Shiraz at a glance',
    mapDescription: 'A focused map of Lines 1 and 2, based on station locations listed by Balad.',
    mapLegendLabel: 'Map legend', line1Label: 'Line 1', line2Label: 'Line 2', mapRegionLabel: 'Interactive map of Shiraz Metro stations',
    mapLoading: 'Loading station map…', mapUnavailable: 'The interactive map could not load. Station locations remain available in Nearby.',
    selectedStation: 'Selected station', chooseMapStation: 'Choose a station on the map', chooseMapStationHint: 'Select a marker to view its lines and plan a journey.',
    startHere: 'Start here', endHere: 'End here', mapSourcePrefix: 'Station locations:', mapSourceLink: 'Balad map listings'
  },
  fa: {
    pageTitle: 'شیرازگو — برنامه‌ریز سفر متروی شیراز',
    pageDescription: 'با شیرازگو سفر در خطوط ۱ و ۲ متروی شیراز را برنامه‌ریزی کنید، زمان قطارهای بعدی را ببینید و زمان سفر میان ایستگاه‌ها را مقایسه کنید.',
    skipLink: 'رفتن به برنامه‌ریز سفر',
    brandTagline: 'مترو، ساده و روشن',
    primaryNavLabel: 'پیمایش اصلی',
    navPlan: 'برنامه‌ریزی سفر', navNearby: 'نزدیک من', navMap: 'نقشه', navMatrix: 'ماتریس مبدأ–مقصد', navStations: 'ایستگاه‌ها',
    readableTimetable: 'جدول زمانی PDF', themeToggleLabel: 'تغییر حالت رنگی',
    heroEyebrow: 'شهر شما، ایستگاه بعدی شما', exploreStations: 'کاوش ایستگاه‌ها',
    networkPreview: 'متروی شیراز / نمای شبکه', swapAction: 'جابجایی ایستگاه‌ها',
    fromPlaceholder: 'انتخاب ایستگاه مبدأ', toPlaceholder: 'انتخاب ایستگاه مقصد',
    lightThemeLabel: 'تغییر به حالت روشن', darkThemeLabel: 'تغییر به حالت تاریک',
    heroTitle: '<span class="hero-title-line hero-title-main">در شیراز حرکت کنید؛</span><br><em class="hero-title-confidence">با اطمینان.</em>',
    heroLead: 'خط مترو، ایستگاه مبدأ و مقصد را انتخاب کنید تا نزدیک‌ترین قطار و برآورد مرحله‌به‌مرحله سفر را ببینید.',
    chooseLineLabel: 'انتخاب خط مترو', serviceOverviewLabel: 'نمای کلی خدمات',
    stationsFact: 'ایستگاه', betweenStationsFact: 'بین هر دو ایستگاه', frequencyFact: 'فاصله حرکت برنامه‌ریزی‌شده',
    linePreviewLabel: 'پیش‌نمایش خط مترو',
    plannerEyebrow: 'برنامه‌ریز سفر', plannerTitle: 'به کجا می‌روید؟',
    metroLineLabel: 'خط مترو', startingStationLabel: 'ایستگاه مبدأ', swapStationsLabel: 'جابجایی مبدأ و مقصد',
    destinationLabel: 'ایستگاه مقصد', dateLabel: 'تاریخ', timeLabel: 'زمان دستگاه', serviceTypeLabel: 'نوع سرویس',
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
    displayLabel: 'نوع نمایش', travelTimeOption: 'زمان سفر', nextArrivalOption: 'نزدیک‌ترین رسیدن', lookupTimeLabel: 'زمان دستگاه',
    legendShort: 'سفر کوتاه‌مدت (۲ تا ۱۲ دقیقه)', legendMedium: 'سفر میان‌مدت (۱۳ تا ۲۶ دقیقه)', legendLong: 'سفر بلندمدت (۲۷ دقیقه و بیشتر)', legendPlanned: 'برنامه‌ریزی‌شده / بدون جدول',
    matrixHint: 'با انتخاب هر خانه، همان مسیر در برنامه‌ریز بارگذاری می‌شود.', matrixRegionLabel: 'ماتریس زمان سفر میان ایستگاه‌ها',
    allStations: 'همه ایستگاه‌ها', stationListToggleLabel: 'نوع جدول زمانی فهرست ایستگاه‌ها',
    bufferTitle: 'زمان احتیاطی کوتاهی در نظر بگیرید',
    bufferText: 'جدول‌های زمانی ممکن است به‌دلیل تعمیرات، رویدادهای ویژه یا شرایط بهره‌برداری تغییر کنند. خط ۲ از جدول روز کاری ارائه‌شده استفاده می‌کند و برای پایان هفته یا تعطیلات رسمی سرویس منظم منتشرشده‌ای ندارد.',
    openReadableTimetable: 'دانلود جدول زمانی PDF', footerTagline: 'رابط مستقل برنامه‌ریزی سفر',
    footerText: 'برای دسترسی روشن به خطوط ۱ و ۲ متروی شیراز ساخته شده است.', backToTop: 'بازگشت به بالا ↑',
    languageTarget: 'English', languageToggleLabel: 'تغییر زبان به انگلیسی',
    lineAtGlance: line => `نمای کلی ${line}`, line1StationDescription: 'زمان نخستین و آخرین قطار برای جدول زمانی انتخاب‌شده خودکار امروز.',
    line2StationDescription: 'زمان نخستین و آخرین قطار بر پایه جدول روز کاری ارائه‌شده برای بخش فعال پنج‌ایستگاهی.',
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
    lineNoService: (line, label) => `${line} در جدول زمانی ارائه‌شده، سرویس منظم ${label} ندارد.`,
    plannedUnavailable: names => `${names} بخشی از شبکه برنامه‌ریزی‌شده خط ۲ است، اما هنوز جدول حرکت منظم برای آن منتشر نشده است.`,
    notConnected: 'ایستگاه‌های انتخاب‌شده در بخش فعال دارای جدول منتشرشده به یکدیگر متصل نیستند.',
    cannotCalculate: 'امکان محاسبه زمان حرکت برای این انتخاب وجود ندارد.',
    stationPlannedTitle: name => `${name} — ایستگاه برنامه‌ریزی‌شده`,
    toward: destination => `به‌سمت ${destination}`,
    nearbyEyebrow: 'نزدیک من', nearbyTitle: 'نزدیک‌ترین ایستگاه را پیدا کنید',
    nearbyDescription: 'با موقعیت مکانی خود یا انتخاب یک ایستگاه مرجع، نزدیک‌ترین ورودی‌های مترو را مقایسه کنید.',
    nearbyCardTitle: 'چه ایستگاه‌هایی نزدیک شماست؟', nearbyPrivacy: 'موقعیت شما در همین مرورگر می‌ماند و فقط برای محاسبه فاصله استفاده می‌شود.',
    useMyLocation: 'استفاده از موقعیت من', findingLocation: 'در حال یافتن موقعیت…', locationUnavailable: 'موقعیت مکانی در دسترس نیست؛ یک ایستگاه را از فهرست انتخاب کنید.',
    locationDenied: 'دسترسی به موقعیت داده نشد؛ یک ایستگاه را از فهرست انتخاب کنید.', orChooseStation: 'یا یک ایستگاه انتخاب کنید',
    referenceStation: 'ایستگاه مرجع', chooseReference: 'انتخاب ایستگاه مرجع', nearbyEmptyTitle: 'نزدیک‌ترین ایستگاه‌ها اینجا نمایش داده می‌شوند',
    nearbyEmptyText: 'دسترسی موقعیت را بدهید یا یک ایستگاه مرجع انتخاب کنید تا زمان تقریبی پیاده‌روی و میانبرهای سفر را ببینید.',
    closestStations: 'نزدیک‌ترین ایستگاه‌ها', away: distance => `${distance} فاصله`, walkEstimate: minutes => `حدود ${minutes} دقیقه پیاده`,
    setDestination: 'انتخاب به‌عنوان مقصد', showOnMap: 'نمایش روی نقشه',
    mapEyebrow: 'نقشه شبکه', mapTitle: 'شیراز را یک‌جا ببینید',
    mapDescription: 'نقشه‌ای خلوت از خطوط ۱ و ۲، بر پایه موقعیت ایستگاه‌های ثبت‌شده در بلد.',
    mapLegendLabel: 'راهنمای نقشه', line1Label: 'خط ۱', line2Label: 'خط ۲', mapRegionLabel: 'نقشه تعاملی ایستگاه‌های متروی شیراز',
    mapLoading: 'در حال بارگذاری نقشه ایستگاه‌ها…', mapUnavailable: 'نقشه تعاملی بارگذاری نشد؛ موقعیت ایستگاه‌ها همچنان در بخش نزدیک من در دسترس است.',
    selectedStation: 'ایستگاه انتخاب‌شده', chooseMapStation: 'یک ایستگاه را روی نقشه انتخاب کنید', chooseMapStationHint: 'برای دیدن خطوط و برنامه‌ریزی سفر، یک نشانگر را انتخاب کنید.',
    startHere: 'شروع از اینجا', endHere: 'پایان در اینجا', mapSourcePrefix: 'موقعیت ایستگاه‌ها:', mapSourceLink: 'فهرست‌های نقشه بلد'
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
    name:text('Line 2','خط ۲'), subtitle:text('Ghahremanan ↔ Imam Hossein','قهرمانان ↔ امام حسین'),
    status:text('Operating section','بخش فعال'), statusTone:'limited', averageTravelLabel:text('3–7 min','۳ تا ۷ دقیقه'),
    defaultFrom:0, defaultTo:4,
    stations:[
      ['Ghahremanan','قهرمانان',true,'Service terminus','پایانه سرویس'],
      ['Shohada-ye Adelabad','شهدای عادل‌آباد',true],
      ['Basij','بسیج',true],
      ['Esteghlal','استقلال',true,null,null,'Future Line 4 interchange','تقاطع آینده با خط ۴'],
      ['Imam Hossein','امام حسین (ع)',true,'Service terminus','پایانه سرویس','Line 1 interchange','تقاطع با خط ۱']
    ].map(([en,fa,active,statusEn,statusFa,interchangeEn,interchangeFa]) => ({ name:text(en,fa),active,status:statusEn?text(statusEn,statusFa):null,note:active&&statusEn?text(statusEn,statusFa):null,interchange:interchangeEn?text(interchangeEn,interchangeFa):null })),
    directions:{
      forward:{ label:text('Toward Imam Hossein','به‌سمت امام حسین'),shortLabel:text('Imam Hossein','امام حسین'),originIndex:0,terminusIndex:4,offsets:[0,3,10,13,16] },
      reverse:{ label:text('Toward Ghahremanan','به‌سمت قهرمانان'),shortLabel:text('Ghahremanan','قهرمانان'),originIndex:4,terminusIndex:0,offsets:[16,13,6,3,0] }
    },
    services:{
      weekday:{available:true,label:text('Working day','روز کاری'),frequency:40,forward:{first:'06:00',last:'18:00'},reverse:{first:'06:20',last:'17:40'}},
      weekend:{available:false,label:text('Weekend / holiday','تعطیلات و آخر هفته'),frequency:40,forward:null,reverse:null}
    },
    heroStops:[
      {index:0,label:text('Service start','آغاز سرویس')},
      {index:1,label:text('Shohada-ye Adelabad','شهدای عادل‌آباد')},
      {index:3,label:text('Line 4 interchange','تقاطع با خط ۴')},
      {index:4,label:text('Line 1 interchange','تقاطع با خط ۱')}
    ],
    banner:text('Line 2 operates across five published-timetable stations from Ghahremanan to Imam Hossein. No regular weekend or official-holiday service is published.','خط ۲ در پنج ایستگاه دارای جدول زمانی از قهرمانان تا امام حسین فعال است. برای پایان هفته یا تعطیلات رسمی سرویس منظم منتشرشده‌ای وجود ندارد.'),
    formNote:text('Line 2 uses the supplied working-day timetable: departures every 40 minutes with published station-specific travel offsets.','خط ۲ از جدول روز کاری ارائه‌شده استفاده می‌کند: حرکت‌ها هر ۴۰ دقیقه و زمان سفر بر پایه فاصله‌های زمانی منتشرشده برای هر ایستگاه است.'),
    dataNote:text('Line 2 times are reconstructed from the supplied 18-page working-day timetable.','زمان‌های خط ۲ از جدول روز کاری ۱۸ صفحه‌ای ارائه‌شده بازسازی شده‌اند.')
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
  languageToggle: document.querySelector('#languageToggle'), languageToggleLabel: document.querySelector('#languageToggleLabel'),
  heroStationCount: document.querySelector('#heroStationCount'), heroTravelTime: document.querySelector('#heroTravelTime'), heroFrequency: document.querySelector('#heroFrequency'),
  previewLineName: document.querySelector('#previewLineName'), previewStatus: document.querySelector('#previewStatus'), previewNote: document.querySelector('#previewNote'),
  heroMiniMap: document.querySelector('#heroMiniMap'), backToTop: document.querySelector('#backToTop'),
  timetableDownloads: document.querySelectorAll('[data-timetable-download]'), serviceDaySummary: document.querySelector('#serviceDaySummary'),
  stationServiceSummary: document.querySelector('#stationServiceSummary'), scrollProgress: document.querySelector('#scrollProgress'),
  useLocation: document.querySelector('#useLocation'), nearbyReference: document.querySelector('#nearbyReference'), nearbyResults: document.querySelector('#nearbyResults'),
  metroMap: document.querySelector('#metroMap'), mapLoading: document.querySelector('#mapLoading'), mapStationCard: document.querySelector('#mapStationCard'),
  mapStationName: document.querySelector('#mapStationName'), mapStationAddress: document.querySelector('#mapStationAddress'),
  mapStationLines: document.querySelector('#mapStationLines'), mapStationActions: document.querySelector('#mapStationActions')
};

let activeLineId = 'line1';
let currentLanguage = 'en';
let selectedMatrixCell = null;
let activeServiceType = 'weekday';
let currentServiceDay = null;
let departureCountdownTimer = null;
let departureCountdownTarget = null;
let deviceClockTimer = null;
let metroLocations = [];
let nearbyOrigin = null;
let nearbyOriginStationId = null;
let metroMap = null;
let mapTileLayer = null;
let mapMarkers = [];
let selectedMapStation = null;

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
  dom.from.innerHTML = `<option value="" disabled>${t('fromPlaceholder')}</option>` + options;
  dom.to.innerHTML = `<option value="" disabled>${t('toPlaceholder')}</option>` + options;
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
  if (updateResult) {
    stopDepartureCountdown(); dom.resultContent.hidden=true; dom.resultEmpty.hidden=false;
  }
}

function syncDateAndTimeToNow(now=new Date()) {
  dom.date.value=formatDateInput(now);
  dom.time.value=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  dom.matrixTime.value=dom.time.value;
}
async function refreshDeviceClock() {
  const previousDate=dom.date.value, now=new Date();
  syncDateAndTimeToNow(now);
  if (previousDate && previousDate!==dom.date.value) {
    await loadServiceDay(now);
    renderServiceDayStatus();
    renderStationList();
  }
  renderMatrix();
  if (!dom.resultContent.hidden && hasCompleteRoute() && dom.from.value!==dom.to.value) showRouteResult();
}
function startDeviceClock() {
  if (deviceClockTimer !== null) window.clearTimeout(deviceClockTimer);
  const delayUntilNextMinute=60000-(Date.now()%60000)+50;
  deviceClockTimer=window.setTimeout(async()=>{
    await refreshDeviceClock();
    startDeviceClock();
  },delayUntilNextMinute);
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
function showRouteResult({scroll=false,animate=false}={}) {
  if (!hasCompleteRoute()) return false;
  const line=lineData(), fromIndex=Number(dom.from.value), toIndex=Number(dom.to.value);
  if (fromIndex===toIndex) {
    stopDepartureCountdown(); dom.resultContent.hidden=true; dom.resultEmpty.hidden=false;
    showToast(t('chooseDifferent')); dom.to.focus(); return false;
  }
  dom.to.setCustomValidity('');
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
        return `<div class="departure-time ${index===0?'next':''}" title="${label}" aria-label="${label}">${departureTime}</div>`;
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
  if (animate) animateIn(dom.resultContent);
  if (scroll) document.querySelector('#resultCard').scrollIntoView({behavior:motionBehavior(),block:'start'});
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
  const names=line.stations.map(station=>local(station.name));
  const longestNameLength=Math.max(...names.map(name=>[...name].length));
  const labelWidth=Math.min(220,Math.max(currentLanguage==='fa'?175:190,Math.round(longestNameLength*(currentLanguage==='fa'?7:7.5)+48)));
  const stationWidth=currentLanguage==='fa'?68:72;
  const headerHeight=Math.min(190,Math.max(currentLanguage==='fa'?145:150,Math.round(longestNameLength*(currentLanguage==='fa'?6.5:7)+28)));
  const matrixWidth=labelWidth+(line.stations.length*stationWidth);
  const columns=`<colgroup><col class="matrix-label-column">${line.stations.map(()=>'<col class="matrix-station-column">').join('')}</colgroup>`;
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
  dom.matrixTable.innerHTML=`${columns}${header}<tbody>${rows}</tbody>`;
  dom.matrixTable.style.setProperty('--matrix-label-width',`${labelWidth}px`);
  dom.matrixTable.style.setProperty('--matrix-station-width',`${stationWidth}px`);
  dom.matrixTable.style.setProperty('--matrix-header-height',`${headerHeight}px`);
  dom.matrixTable.style.setProperty('--matrix-width',`${matrixWidth}px`);
}

async function loadMetroLocations() {
  try {
    const response=await fetch(new URL('data/shiraz-metro-stations.json',document.baseURI),{cache:'no-cache'});
    if (!response.ok) throw new Error(`Station location request failed: ${response.status}`);
    const data=await response.json();
    metroLocations=Array.isArray(data.stations)?data.stations:[];
  } catch {
    metroLocations=[];
  }
}
function locationName(station) { return station?.name?.[currentLanguage]??station?.name?.en??''; }
function locationAddress(station) { return station?.address?.[currentLanguage]??station?.address?.en??''; }
function renderNearbySelect() {
  if (!dom.nearbyReference) return;
  const selected=dom.nearbyReference.value;
  dom.nearbyReference.innerHTML=`<option value="">${escapeHtml(t('chooseReference'))}</option>${metroLocations.map(station=>`<option value="${station.id}">${escapeHtml(locationName(station))}</option>`).join('')}`;
  if (metroLocations.some(station=>station.id===selected)) dom.nearbyReference.value=selected;
}
function distanceMetres(origin,station) {
  const radius=6371000,toRadians=value=>value*Math.PI/180;
  const deltaLat=toRadians(station.lat-origin.lat),deltaLng=toRadians(station.lng-origin.lng);
  const a=Math.sin(deltaLat/2)**2+Math.cos(toRadians(origin.lat))*Math.cos(toRadians(station.lat))*Math.sin(deltaLng/2)**2;
  return radius*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function formatDistance(metres) {
  if (metres<1000) return `${formatNumber(Math.max(10,Math.round(metres/10)*10))} m`;
  return `${localizeDigits((metres/1000).toFixed(1))} km`;
}
function lineBadge(lineId) { return `<span class="mini-line-badge ${lineId}">${escapeHtml(local(LINES[lineId].name))}</span>`; }
function renderNearbyResults() {
  if (!dom.nearbyResults || !nearbyOrigin || !metroLocations.length) return;
  const nearest=metroLocations
    .filter(station=>station.id!==nearbyOriginStationId)
    .map(station=>({...station,distance:distanceMetres(nearbyOrigin,station)}))
    .sort((a,b)=>a.distance-b.distance).slice(0,5);
  dom.nearbyResults.innerHTML=`<div class="nearby-results-head"><div><span>${escapeHtml(t('nearbyEyebrow'))}</span><h3>${escapeHtml(t('closestStations'))}</h3></div><span class="result-count">${formatNumber(nearest.length)}</span></div>
    <div class="nearby-list">${nearest.map((station,index)=>`<article class="nearby-station-card" style="--item-index:${index}">
      <div class="nearby-rank">${formatNumber(index+1,2)}</div>
      <div class="nearby-station-copy"><h4>${escapeHtml(locationName(station))}</h4><p>${escapeHtml(locationAddress(station))}</p><div class="nearby-meta">${station.lines.map(lineBadge).join('')}<span>${escapeHtml(t('away',formatDistance(station.distance)))}</span><span>${escapeHtml(t('walkEstimate',formatNumber(Math.max(1,Math.ceil(station.distance/75)))))}</span></div></div>
      <div class="nearby-actions"><button type="button" data-nearby-route="${station.id}">${escapeHtml(t('setDestination'))}</button><button type="button" data-nearby-map="${station.id}">${escapeHtml(t('showOnMap'))}</button></div>
    </article>`).join('')}</div>`;
}
function useLocation() {
  if (!navigator.geolocation) {
    dom.useLocation.querySelector('span').textContent=t('locationUnavailable'); return;
  }
  dom.useLocation.disabled=true;
  dom.useLocation.classList.add('is-loading');
  dom.useLocation.querySelector('span').textContent=t('findingLocation');
  navigator.geolocation.getCurrentPosition(position=>{
    nearbyOrigin={lat:position.coords.latitude,lng:position.coords.longitude}; nearbyOriginStationId=null;
    dom.nearbyReference.value=''; renderNearbyResults();
    dom.useLocation.disabled=false; dom.useLocation.classList.remove('is-loading'); dom.useLocation.querySelector('span').textContent=t('useMyLocation');
  },error=>{
    dom.useLocation.disabled=false; dom.useLocation.classList.remove('is-loading');
    dom.useLocation.querySelector('span').textContent=t(error.code===1?'locationDenied':'locationUnavailable');
  },{enableHighAccuracy:true,timeout:10000,maximumAge:300000});
}
function choosePlannerStation(station,field='to') {
  if (!station) return;
  const preferredLine=station.lines.includes(activeLineId)?activeLineId:station.lines[0];
  setActiveLine(preferredLine,{updateResult:false});
  dom[field].value=String(station.indices[preferredLine]);
  if (hasCompleteRoute() && dom.from.value!==dom.to.value) showRouteResult({scroll:true,animate:true});
  else document.querySelector('#planner').scrollIntoView({behavior:motionBehavior(),block:'start'});
  dom[field].focus({preventScroll:true});
}
function mapTilesForTheme() {
  return 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
}
function updateMapTheme() { metroMap?.invalidateSize({pan:false}); }
function mapMarkerHtml(station) {
  const classes=station.lines.length>1?'interchange':station.lines[0];
  return `<span class="metro-map-marker ${classes}"><i></i></span>`;
}
function updateMapLanguage() {
  mapMarkers.forEach(({marker,station})=>{
    marker.options.alt=locationName(station);
    marker.setTooltipContent(locationName(station));
  });
  if (selectedMapStation) showMapStation(selectedMapStation,false);
}
function showMapStation(station,move=true) {
  selectedMapStation=station;
  dom.mapStationName.textContent=locationName(station);
  dom.mapStationAddress.textContent=locationAddress(station);
  dom.mapStationLines.innerHTML=station.lines.map(lineBadge).join('');
  dom.mapStationActions.hidden=false;
  dom.mapStationActions.dataset.stationId=station.id;
  mapMarkers.forEach(({marker,station:entry})=>marker.getElement()?.classList.toggle('is-selected',entry.id===station.id));
  if (move && metroMap) metroMap.flyTo([station.lat,station.lng],Math.max(metroMap.getZoom(),14),{duration:reducedMotion.matches?0:.65});
}
function showStationOnMap(station) {
  if (!station) return;
  document.querySelector('#map').scrollIntoView({behavior:motionBehavior(),block:'start'});
  window.setTimeout(()=>{ metroMap?.invalidateSize(); showMapStation(station); },reducedMotion.matches?0:450);
}
function initializeMap() {
  if (!dom.metroMap) return;
  if (!window.L || !metroLocations.length) {
    dom.mapLoading.textContent=t('mapUnavailable'); dom.mapLoading.classList.add('map-error'); return;
  }
  metroMap=L.map(dom.metroMap,{zoomControl:true,scrollWheelZoom:false,minZoom:10,maxZoom:18}).setView([29.618,52.53],12);
  mapTileLayer=L.tileLayer(mapTilesForTheme(),{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(metroMap);
  ['line1','line2'].forEach(lineId=>{
    const points=metroLocations.filter(station=>station.lines.includes(lineId)).sort((a,b)=>a.indices[lineId]-b.indices[lineId]).map(station=>[station.lat,station.lng]);
    L.polyline(points,{color:lineId==='line1'?'#d49a37':'#4b9bb8',weight:5,opacity:.9,lineCap:'round',lineJoin:'round'}).addTo(metroMap);
  });
  mapMarkers=metroLocations.map(station=>{
    const marker=L.marker([station.lat,station.lng],{title:locationName(station),alt:locationName(station),keyboard:true,riseOnHover:true,
      icon:L.divIcon({className:'metro-marker-shell',html:mapMarkerHtml(station),iconSize:[28,28],iconAnchor:[14,14]})}).addTo(metroMap);
    marker.bindTooltip(locationName(station),{direction:'top',offset:[0,-10],opacity:.96});
    marker.on('click',()=>showMapStation(station,false));
    return {marker,station};
  });
  const bounds=L.latLngBounds(metroLocations.map(station=>[station.lat,station.lng]));
  metroMap.fitBounds(bounds,{padding:[32,32]});
  dom.mapLoading.hidden=true;
  const enableWheel=()=>metroMap.scrollWheelZoom.enable();
  const disableWheel=()=>metroMap.scrollWheelZoom.disable();
  dom.metroMap.addEventListener('focusin',enableWheel); dom.metroMap.addEventListener('focusout',disableWheel);
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
  dom.to.setCustomValidity(message);
  dom.to.reportValidity();
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId=window.setTimeout(()=>dom.to.setCustomValidity(''),2500);
}
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionBehavior=()=>reducedMotion.matches?'auto':'smooth';
function animateIn(element) {
  if (reducedMotion.matches || !element.animate) return;
  element.getAnimations().forEach(animation=>animation.cancel());
  element.animate([{opacity:.35,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],
    {duration:380,easing:'cubic-bezier(.2,.8,.2,1)'});
}
function updateThemeLabel() {
  const label=t(dom.html.dataset.theme==='dark'?'lightThemeLabel':'darkThemeLabel');
  dom.themeToggle.setAttribute('aria-label',label);
  dom.themeToggle.title=label;
}
function applyTheme(theme) {
  dom.html.dataset.theme=theme; dom.themeToggle.setAttribute('aria-pressed',String(theme==='dark')); storage.set('shirazgo-theme',theme);
  document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#0b211c':'#f3f8f5';
  updateThemeLabel(); updateMapTheme();
}
function initializeTheme() {
  const saved=storage.get('shirazgo-theme'), preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  applyTheme(saved==='dark'||saved==='light'?saved:preferred);
}
let themeTransitionRunning=false;
async function toggleTheme() {
  if (themeTransitionRunning) return;
  const nextTheme=dom.html.dataset.theme==='dark'?'light':'dark';
  if (reducedMotion.matches) { applyTheme(nextTheme); return; }
  themeTransitionRunning=true;
  const bounds=dom.themeToggle.getBoundingClientRect();
  const x=bounds.left+bounds.width/2, y=bounds.top+bounds.height/2;
  const radius=Math.ceil(Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y)));
  let transition,veil;
  try {
    if (document.startViewTransition) {
      dom.html.style.setProperty('--theme-origin',`${x}px ${y}px`);
      dom.html.style.setProperty('--theme-radius',`${radius}px`);
      dom.html.classList.add('theme-transition');
      transition=document.startViewTransition(()=>applyTheme(nextTheme));
      await transition.ready;
      await transition.finished;
    } else {
      // Older browsers get a lightweight expanding veil; no duplicate interactive DOM.
      veil=document.createElement('div');
      veil.className='theme-veil'; veil.setAttribute('aria-hidden','true');
      veil.style.background=nextTheme==='dark'?'#0b211c':'#f3f8f5';
      document.body.append(veil);
      await veil.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${radius}px at ${x}px ${y}px)`]},
        {duration:420,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'}).finished;
      applyTheme(nextTheme);
      await veil.animate({opacity:[1,0]},{duration:180,fill:'forwards'}).finished;
    }
  } catch (_) {
    // A hidden tab, interrupted capture, or unsupported animation must never block the toggle.
    if (transition) {
      transition.skipTransition();
      await transition.finished.catch(()=>{});
    }
    applyTheme(nextTheme);
  } finally {
    veil?.remove();
    dom.html.classList.remove('theme-transition');
    themeTransitionRunning=false;
  }
}
function initializeMotion() {
  const revealTargets=document.querySelectorAll('.section-heading, .planner-card, .result-card, .nearby-card, .nearby-results, .map-shell, .matrix-shell, .service-note-card');
  revealTargets.forEach(element=>element.classList.add('scroll-reveal'));
  if ('IntersectionObserver' in window) {
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },{threshold:.08});
    revealTargets.forEach(element=>revealObserver.observe(element));
  } else revealTargets.forEach(element=>element.classList.add('is-visible'));

  const links=[...document.querySelectorAll('.desktop-nav a')];
  const sections=links.map(link=>document.querySelector(link.hash));
  let scheduled=false;
  function updateNavigation() {
    scheduled=false;
    const maximum=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    dom.scrollProgress?.style.setProperty('--scroll-progress',String(Math.min(1,Math.max(0,scrollY/maximum))));
    const active=sections.filter(section=>section.getBoundingClientRect().top<=180).at(-1);
    links.forEach(link=>{
      if (active && link.hash===`#${active.id}`) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll',()=>{
    if (!scheduled) { scheduled=true; requestAnimationFrame(updateNavigation); }
  },{passive:true});
  updateNavigation();
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
  updateThemeLabel();
}
function applyLanguage(language,{persist=true}={}) {
  currentLanguage=language==='fa'?'fa':'en';
  dom.html.lang=currentLanguage; dom.html.dir=currentLanguage==='fa'?'rtl':'ltr'; dom.html.dataset.language=currentLanguage;
  const timetableFile=currentLanguage==='fa'?'shiraz-subway-timetable-fa.pdf':'shiraz-subway-timetable.pdf';
  const downloadName=currentLanguage==='fa'?'ShirazGo-metro-guide-fa.pdf':'ShirazGo-metro-guide.pdf';
  dom.timetableDownloads.forEach(link=>{link.href=`assets/${timetableFile}`;link.download=downloadName;});
  translateStaticContent(); renderLineOptions(); populateStationSelects({preserve:true}); renderLineControls(); renderHero(); renderServiceDayStatus(); renderMatrix(); renderStationList(); renderNearbySelect();
  if (nearbyOrigin) renderNearbyResults(); updateMapLanguage();
  if (!dom.resultContent.hidden && hasCompleteRoute() && dom.from.value!==dom.to.value) showRouteResult();
  if (persist) storage.set('shirazgo-language',currentLanguage);
}
function bindEvents() {
  dom.form.addEventListener('submit',event=>{event.preventDefault();showRouteResult({scroll:true,animate:true});});
  dom.line.addEventListener('change',()=>setActiveLine(dom.line.value));
  dom.matrixLine.addEventListener('change',()=>setActiveLine(dom.matrixLine.value));
  document.querySelectorAll('[data-line-switch]').forEach(button=>button.addEventListener('click',()=>setActiveLine(button.dataset.lineSwitch)));
  dom.swap.addEventListener('click',()=>{
    const currentFrom=dom.from.value; dom.from.value=dom.to.value; dom.to.value=currentFrom;
    if (!reducedMotion.matches) {
      const icon=dom.swap.querySelector('svg');
      icon.getAnimations().forEach(animation=>animation.cancel());
      icon.animate({transform:['rotate(90deg)','rotate(270deg)']},{duration:350,easing:'ease-out'});
      animateIn(dom.from); animateIn(dom.to);
    }
    if(hasCompleteRoute())showRouteResult({scroll:true,animate:true});
  });
  dom.matrixMode.addEventListener('change',renderMatrix);
  dom.matrixTable.addEventListener('click',event=>{
    const button=event.target.closest('.matrix-cell:not(.same)'); if(!button)return;
    const from=Number(button.dataset.from),to=Number(button.dataset.to); selectedMatrixCell={from,to};
    dom.from.value=String(from);dom.to.value=String(to);showRouteResult({scroll:true,animate:true});
  });
  dom.themeToggle.addEventListener('click',toggleTheme);
  dom.languageToggle.addEventListener('click',()=>applyLanguage(currentLanguage==='en'?'fa':'en'));
  dom.useLocation.addEventListener('click',useLocation);
  dom.nearbyReference.addEventListener('change',()=>{
    const station=metroLocations.find(entry=>entry.id===dom.nearbyReference.value);
    if (!station) return;
    nearbyOrigin={lat:station.lat,lng:station.lng}; nearbyOriginStationId=station.id; renderNearbyResults();
  });
  dom.nearbyResults.addEventListener('click',event=>{
    const routeButton=event.target.closest('[data-nearby-route]'),mapButton=event.target.closest('[data-nearby-map]');
    if (routeButton) choosePlannerStation(metroLocations.find(station=>station.id===routeButton.dataset.nearbyRoute),'to');
    if (mapButton) showStationOnMap(metroLocations.find(station=>station.id===mapButton.dataset.nearbyMap));
  });
  dom.mapStationActions.addEventListener('click',event=>{
    const button=event.target.closest('[data-map-route]'); if (!button) return;
    choosePlannerStation(metroLocations.find(station=>station.id===dom.mapStationActions.dataset.stationId),button.dataset.mapRoute);
  });
  dom.backToTop.addEventListener('click',event=>{
    event.preventDefault();
    const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
    window.scrollTo({top:0,left:0,behavior});
  });
  window.addEventListener('resize',()=>window.requestAnimationFrame(drawRouteWave));
  dom.to.addEventListener('change',()=>{if(hasCompleteRoute())showRouteResult({scroll:true,animate:true});});
  dom.from.addEventListener('change',()=>{if(hasCompleteRoute())showRouteResult({scroll:true,animate:true});});
}
async function init() {
  initializeTheme();
  currentLanguage=storage.get('shirazgo-language')==='fa'?'fa':'en';
  activeLineId=LINES[storage.get('shirazgo-active-line')]?storage.get('shirazgo-active-line'):'line1';
  translateStaticContent(); setActiveLine(activeLineId,{updateResult:false});
  syncDateAndTimeToNow();
  await Promise.all([loadServiceDay(new Date()),loadMetroLocations()]);
  applyLanguage(currentLanguage,{persist:false}); renderLineControls(); renderHero(); renderServiceDayStatus(); renderMatrix(); renderStationList(); renderNearbySelect(); bindEvents(); startDeviceClock(); initializeMap();
  initializeMotion();
}

init();
