exports.ids = [80,82];
exports.modules = {

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'localable',
  props: {
    locale: String
  },
  computed: {
    currentLocale() {
      return this.locale || this.$vuetify.lang.current;
    }
  }
}));

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeapYear; });
function createUTCDate(year, month = 0, day = 1) {
  let date;
  if (year < 100 && year >= 0) {
    date = new Date(Date.UTC(year, month, day));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(year);
    }
  } else {
    date = new Date(Date.UTC(year, month, day));
  }
  return date;
}
function firstWeekOffset(year, firstDayOfWeek, firstDayOfYear) {
  const firstWeekDayInFirstWeek = 7 + firstDayOfWeek - firstDayOfYear;
  const firstWeekDayOfYear = (7 + createUTCDate(year, 0, firstWeekDayInFirstWeek).getUTCDay() - firstDayOfWeek) % 7;
  return -firstWeekDayOfYear + firstWeekDayInFirstWeek - 1;
}
function dayOfYear(year, month, day, firstDayOfWeek) {
  let dayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month];
  if (month > 1 && isLeapYear(year)) {
    dayOfYear++;
  }
  return dayOfYear + day;
}
function weeksInYear(year, firstDayOfWeek, firstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, firstDayOfYear);
  const weekOffsetNext = firstWeekOffset(year + 1, firstDayOfWeek, firstDayOfYear);
  const daysInYear = isLeapYear(year) ? 366 : 365;
  return (daysInYear - weekOffset + weekOffsetNext) / 7;
}
function weekNumber(year, month, day, firstDayOfWeek, localeFirstDayOfYear) {
  const weekOffset = firstWeekOffset(year, firstDayOfWeek, localeFirstDayOfYear);
  const week = Math.ceil((dayOfYear(year, month, day, firstDayOfWeek) - weekOffset) / 7);
  if (week < 1) {
    return week + weeksInYear(year - 1, firstDayOfWeek, localeFirstDayOfYear);
  } else if (week > weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear)) {
    return week - weeksInYear(year, firstDayOfWeek, localeFirstDayOfYear);
  } else {
    return week;
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PARSE_REGEX */
/* unused harmony export PARSE_TIME */
/* unused harmony export DAYS_IN_MONTH */
/* unused harmony export DAYS_IN_MONTH_LEAP */
/* unused harmony export DAYS_IN_MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAYS_IN_MONTH_MAX; });
/* unused harmony export MONTH_MAX */
/* unused harmony export MONTH_MIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DAY_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DAYS_IN_WEEK; });
/* unused harmony export MINUTES_IN_HOUR */
/* unused harmony export MINUTE_MAX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINUTES_IN_DAY; });
/* unused harmony export HOURS_IN_DAY */
/* unused harmony export HOUR_MAX */
/* unused harmony export FIRST_HOUR */
/* unused harmony export OFFSET_YEAR */
/* unused harmony export OFFSET_MONTH */
/* unused harmony export OFFSET_HOUR */
/* unused harmony export OFFSET_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getStartOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getEndOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getStartOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getEndOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return validateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return parseTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return validateTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getDayIdentifier; });
/* unused harmony export getTimeIdentifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTimestampIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return updateRelative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isTimedless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return updateHasTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return updateMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return updateWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateFormatted; });
/* unused harmony export getWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyTimestamp; });
/* unused harmony export padNumber */
/* unused harmony export getDate */
/* unused harmony export getTime */
/* unused harmony export nextMinutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nextDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return prevDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return relativeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return diffMinutes; });
/* unused harmony export findWeekday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getWeekdaySkips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return timestampToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createDayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createIntervalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createNativeLocaleFormatter; });
/* harmony import */ var _util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);

const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_MIN = 28;
const DAYS_IN_MONTH_MAX = 31;
const MONTH_MAX = 12;
const MONTH_MIN = 1;
const DAY_MIN = 1;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_HOUR = 60;
const MINUTE_MAX = 59;
const MINUTES_IN_DAY = 24 * 60;
const HOURS_IN_DAY = 24;
const HOUR_MAX = 23;
const FIRST_HOUR = 0;
const OFFSET_YEAR = 10000;
const OFFSET_MONTH = 100;
const OFFSET_HOUR = 100;
const OFFSET_TIME = 10000;
function getStartOfWeek(timestamp, weekdays, today) {
  const start = copyTimestamp(timestamp);
  findWeekday(start, weekdays[0], prevDay);
  updateFormatted(start);
  if (today) {
    updateRelative(start, today, start.hasTime);
  }
  return start;
}
function getEndOfWeek(timestamp, weekdays, today) {
  const end = copyTimestamp(timestamp);
  findWeekday(end, weekdays[weekdays.length - 1]);
  updateFormatted(end);
  if (today) {
    updateRelative(end, today, end.hasTime);
  }
  return end;
}
function getStartOfMonth(timestamp) {
  const start = copyTimestamp(timestamp);
  start.day = DAY_MIN;
  updateWeekday(start);
  updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  const end = copyTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  updateWeekday(end);
  updateFormatted(end);
  return end;
}
function validateTime(input) {
  return typeof input === 'number' && isFinite(input) || !!PARSE_TIME.exec(input) || typeof input === 'object' && isFinite(input.hour) && isFinite(input.minute);
}
function parseTime(input) {
  if (typeof input === 'number') {
    // when a number is given, it's minutes since 12:00am
    return input;
  } else if (typeof input === 'string') {
    // when a string is given, it's a hh:mm:ss format where seconds are optional
    const parts = PARSE_TIME.exec(input);
    if (!parts) {
      return false;
    }
    return parseInt(parts[1]) * 60 + parseInt(parts[3] || 0);
  } else if (typeof input === 'object') {
    // when an object is given, it must have hour and minute
    if (typeof input.hour !== 'number' || typeof input.minute !== 'number') {
      return false;
    }
    return input.hour * 60 + input.minute;
  } else {
    // unsupported type
    return false;
  }
}
function validateTimestamp(input) {
  return typeof input === 'number' && isFinite(input) || typeof input === 'string' && !!PARSE_REGEX.exec(input) || input instanceof Date;
}
function parseTimestamp(input, required = false, now) {
  if (typeof input === 'number' && isFinite(input)) {
    input = new Date(input);
  }
  if (input instanceof Date) {
    const date = parseDate(input);
    if (now) {
      updateRelative(date, now, date.hasTime);
    }
    return date;
  }
  if (typeof input !== 'string') {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  } // YYYY-MM-DD hh:mm:ss

  const parts = PARSE_REGEX.exec(input);
  if (!parts) {
    if (required) {
      throw new Error(`${input} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    }
    return null;
  }
  const timestamp = {
    date: input,
    time: '',
    year: parseInt(parts[1]),
    month: parseInt(parts[2]),
    day: parseInt(parts[4]) || 1,
    hour: parseInt(parts[6]) || 0,
    minute: parseInt(parts[8]) || 0,
    weekday: 0,
    hasDay: !!parts[4],
    hasTime: !!(parts[6] && parts[8]),
    past: false,
    present: false,
    future: false
  };
  updateWeekday(timestamp);
  updateFormatted(timestamp);
  if (now) {
    updateRelative(timestamp, now, timestamp.hasTime);
  }
  return timestamp;
}
function parseDate(date) {
  return updateFormatted({
    date: '',
    time: '',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    hasDay: true,
    hasTime: true,
    past: false,
    present: true,
    future: false
  });
}
function getDayIdentifier(timestamp) {
  return timestamp.year * OFFSET_YEAR + timestamp.month * OFFSET_MONTH + timestamp.day;
}
function getTimeIdentifier(timestamp) {
  return timestamp.hour * OFFSET_HOUR + timestamp.minute;
}
function getTimestampIdentifier(timestamp) {
  return getDayIdentifier(timestamp) * OFFSET_TIME + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now, time = false) {
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(timestamp);
  let present = a === b;
  if (timestamp.hasTime && time && present) {
    a = getTimeIdentifier(now);
    b = getTimeIdentifier(timestamp);
    present = a === b;
  }
  timestamp.past = b < a;
  timestamp.present = present;
  timestamp.future = b > a;
  return timestamp;
}
function isTimedless(input) {
  return input instanceof Date || typeof input === 'number' && isFinite(input);
}
function updateHasTime(timestamp, hasTime, now) {
  if (timestamp.hasTime !== hasTime) {
    timestamp.hasTime = hasTime;
    if (!hasTime) {
      timestamp.hour = HOUR_MAX;
      timestamp.minute = MINUTE_MAX;
      timestamp.time = getTime(timestamp);
    }
    if (now) {
      updateRelative(timestamp, now, timestamp.hasTime);
    }
  }
  return timestamp;
}
function updateMinutes(timestamp, minutes, now) {
  timestamp.hasTime = true;
  timestamp.hour = Math.floor(minutes / MINUTES_IN_HOUR);
  timestamp.minute = minutes % MINUTES_IN_HOUR;
  timestamp.time = getTime(timestamp);
  if (now) {
    updateRelative(timestamp, now, true);
  }
  return timestamp;
}
function updateWeekday(timestamp) {
  timestamp.weekday = getWeekday(timestamp);
  return timestamp;
}
function updateFormatted(timestamp) {
  timestamp.time = getTime(timestamp);
  timestamp.date = getDate(timestamp);
  return timestamp;
}
function getWeekday(timestamp) {
  if (timestamp.hasDay) {
    const _ = Math.floor;
    const k = timestamp.day;
    const m = (timestamp.month + 9) % MONTH_MAX + 1;
    const C = _(timestamp.year / 100);
    const Y = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    return ((k + _(2.6 * m - 0.2) - 2 * C + Y + _(Y / 4) + _(C / 4)) % 7 + 7) % 7;
  }
  return timestamp.weekday;
}
function daysInMonth(year, month) {
  return Object(_util_dateTimeUtils__WEBPACK_IMPORTED_MODULE_0__[/* isLeapYear */ "a"])(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
  const {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  } = timestamp;
  return {
    date,
    time,
    year,
    month,
    day,
    weekday,
    hour,
    minute,
    hasDay,
    hasTime,
    past,
    present,
    future
  };
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) {
    padded = '0' + padded;
  }
  return padded;
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) {
    return '';
  }
  return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function nextMinutes(timestamp, minutes) {
  timestamp.minute += minutes;
  while (timestamp.minute > MINUTES_IN_HOUR) {
    timestamp.minute -= MINUTES_IN_HOUR;
    timestamp.hour++;
    if (timestamp.hour >= HOURS_IN_DAY) {
      nextDay(timestamp);
      timestamp.hour = FIRST_HOUR;
    }
  }
  return timestamp;
}
function nextDay(timestamp) {
  timestamp.day++;
  timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;
  if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
    timestamp.day = DAY_MIN;
    timestamp.month++;
    if (timestamp.month > MONTH_MAX) {
      timestamp.month = MONTH_MIN;
      timestamp.year++;
    }
  }
  return timestamp;
}
function prevDay(timestamp) {
  timestamp.day--;
  timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;
  if (timestamp.day < DAY_MIN) {
    timestamp.month--;
    if (timestamp.month < MONTH_MIN) {
      timestamp.year--;
      timestamp.month = MONTH_MAX;
    }
    timestamp.day = daysInMonth(timestamp.year, timestamp.month);
  }
  return timestamp;
}
function relativeDays(timestamp, mover = nextDay, days = 1) {
  while (--days >= 0) mover(timestamp);
  return timestamp;
}
function diffMinutes(min, max) {
  const Y = (max.year - min.year) * 525600;
  const M = (max.month - min.month) * 43800;
  const D = (max.day - min.day) * 1440;
  const h = (max.hour - min.hour) * 60;
  const m = max.minute - min.minute;
  return Y + M + D + h + m;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  while (timestamp.weekday !== weekday && --maxDays >= 0) mover(timestamp);
  return timestamp;
}
function getWeekdaySkips(weekdays) {
  const skips = [1, 1, 1, 1, 1, 1, 1];
  const filled = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < weekdays.length; i++) {
    filled[weekdays[i]] = 1;
  }
  for (let k = 0; k < DAYS_IN_WEEK; k++) {
    let skip = 1;
    for (let j = 1; j < DAYS_IN_WEEK; j++) {
      const next = (k + j) % DAYS_IN_WEEK;
      if (filled[next]) {
        break;
      }
      skip++;
    }
    skips[k] = filled[k] * skip;
  }
  return skips;
}
function timestampToDate(timestamp) {
  const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
  const date = timestamp.date;
  return new Date(`${date}T${time}:00+00:00`);
}
function createDayList(start, end, now, weekdaySkips, max = 42, min = 0) {
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < getDayIdentifier(start)) {
    throw new Error('End date is earlier than start date.');
  }
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier === stop;
    if (weekdaySkips[current.weekday] === 0) {
      current = nextDay(current);
      continue;
    }
    const day = copyTimestamp(current);
    updateFormatted(day);
    updateRelative(day, now);
    days.push(day);
    current = relativeDays(current, nextDay, weekdaySkips[current.weekday]);
  }
  if (!days.length) throw new Error('No dates found using specified start date, end date, and weekdays.');
  return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
  const intervals = [];
  for (let i = 0; i < count; i++) {
    const mins = first + i * minutes;
    const int = copyTimestamp(timestamp);
    intervals.push(updateMinutes(int, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatter(locale, getOptions) {
  const emptyFormatter = (_t, _s) => '';
  if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
    return emptyFormatter;
  }
  return (timestamp, short) => {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
      return intlFormatter.format(timestampToDate(timestamp));
    } catch (e) {
      return '';
    }
  };
}

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(413);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("265ccd52", content, true)

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ec842454", content, true)

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-title{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between;line-height:1}.v-application--is-ltr .v-date-picker-title .v-picker__title__btn{text-align:left}.v-application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;font-weight:500;margin-bottom:-8px;overflow:hidden;padding-bottom:8px;position:relative;text-align:left}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("075924a4", content, true)

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{align-items:center;display:flex;justify-content:space-between;padding:4px 16px;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;overflow:hidden;position:relative;text-align:center}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(419);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0f7d136a", content, true)

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{height:242px;padding:0 12px;position:relative}.v-date-picker-table table{table-layout:fixed;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-table td,.v-date-picker-table th{position:relative;text-align:center}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{font-size:12px;margin:0;z-index:auto}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{height:56px;text-align:center;vertical-align:middle;width:33.333333%}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:140px;min-width:40px;width:100%}.v-date-picker-table--date th{font-weight:600;padding:8px 0}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table__current .v-date-picker-table__events{margin-bottom:-1px}.v-date-picker-table--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(421);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4dc2915a", content, true)

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-date-picker-years{font-size:16px;font-weight:400;height:290px;list-style-type:none;overflow:auto;text-align:center}.v-date-picker-years.v-date-picker-years{padding:0}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:290px;padding:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTitle.sass
var VDatePickerTitle = __webpack_require__(414);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker-button/index.js
// Mixins
 // Utilities



/* @vue/component */

/* harmony default export */ var picker_button = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  methods: {
    genPickerButton(prop, value, content, readonly = false, staticClass = '') {
      const active = this[prop] === value;
      const click = event => {
        event.stopPropagation();
        this.$emit(`update:${Object(helpers["x" /* kebabCase */])(prop)}`, value);
      };
      return this.$createElement('div', {
        staticClass: `v-picker__title__btn ${staticClass}`.trim(),
        class: {
          'v-picker__title__btn--active': active,
          'v-picker__title__btn--readonly': readonly
        },
        on: active || readonly ? undefined : {
          click
        }
      }, Array.isArray(content) ? content : [content]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerTitle.js
 // Components

 // Mixins

 // Utils


/* harmony default export */ var VDatePicker_VDatePickerTitle = (Object(mixins["a" /* default */])(picker_button
/* @vue/component */).extend({
  name: 'v-date-picker-title',
  props: {
    date: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    readonly: Boolean,
    selectingYear: Boolean,
    value: {
      type: String
    },
    year: {
      type: [Number, String],
      default: ''
    },
    yearIcon: {
      type: String
    }
  },
  data: () => ({
    isReversing: false
  }),
  computed: {
    computedTransition() {
      return this.isReversing ? 'picker-reverse-transition' : 'picker-transition';
    }
  },
  watch: {
    value(val, prev) {
      this.isReversing = val < prev;
    }
  },
  methods: {
    genYearIcon() {
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          dark: true
        }
      }, this.yearIcon);
    },
    getYearBtn() {
      return this.genPickerButton('selectingYear', true, [String(this.year), this.yearIcon ? this.genYearIcon() : null], false, 'v-date-picker-title__year');
    },
    genTitleText() {
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('div', {
        domProps: {
          innerHTML: this.date || '&nbsp;'
        },
        key: this.value
      })]);
    },
    genTitleDate() {
      return this.genPickerButton('selectingYear', false, [this.genTitleText()], false, 'v-date-picker-title__date');
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-date-picker-title',
      class: {
        'v-date-picker-title--disabled': this.disabled
      }
    }, [this.getYearBtn(), this.genTitleDate()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerHeader.sass
var VDatePickerHeader = __webpack_require__(416);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/localable/index.js
var localable = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/pad.js
const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0;
  string = String(string);
  padString = String(padString);
  if (string.length > targetLength) {
    return String(string);
  }
  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + String(string);
};
/* harmony default export */ var pad = ((n, length = 2) => padStart(n, length, '0'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/createNativeLocaleFormatter.js

function createNativeLocaleFormatter(locale, options, substrOptions = {
  start: 0,
  length: 0
}) {
  const makeIsoString = dateString => {
    const [year, month, date] = dateString.trim().split(' ')[0].split('-');
    return [pad(year, 4), pad(month || 1), pad(date || 1)].join('-');
  };
  try {
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);
    return dateString => intlFormatter.format(new Date(`${makeIsoString(dateString)}T00:00:00+00:00`));
  } catch (e) {
    return substrOptions.start || substrOptions.length ? dateString => makeIsoString(dateString).substr(substrOptions.start || 0, substrOptions.length) : undefined;
  }
}
/* harmony default export */ var util_createNativeLocaleFormatter = (createNativeLocaleFormatter);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/monthChange.js

/**
 * @param {String} value YYYY-MM format
 * @param {Number} sign -1 or +1
 */

/* harmony default export */ var monthChange = ((value, sign) => {
  const [year, month] = value.split('-').map(Number);
  if (month + sign === 0) {
    return `${year - 1}-12`;
  } else if (month + sign === 13) {
    return `${year + 1}-01`;
  } else {
    return `${year}-${pad(month + sign)}`;
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerHeader.js
 // Components


 // Mixins



 // Utils



/* harmony default export */ var VDatePicker_VDatePickerHeader = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-header',
  props: {
    disabled: Boolean,
    format: Function,
    min: String,
    max: String,
    nextAriaLabel: String,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevAriaLabel: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    readonly: Boolean,
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isReversing: false
    };
  },
  computed: {
    formatter() {
      if (this.format) {
        return this.format;
      } else if (String(this.value).split('-')[1]) {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 7
        });
      } else {
        return util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        });
      }
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  methods: {
    genBtn(change) {
      const ariaLabelId = change > 0 ? this.nextAriaLabel : this.prevAriaLabel;
      const ariaLabel = ariaLabelId ? this.$vuetify.lang.t(ariaLabelId) : undefined;
      const disabled = this.disabled || change < 0 && this.min && this.calculateChange(change) < this.min || change > 0 && this.max && this.calculateChange(change) > this.max;
      return this.$createElement(VBtn["a" /* default */], {
        attrs: {
          'aria-label': ariaLabel
        },
        props: {
          dark: this.dark,
          disabled,
          icon: true,
          light: this.light
        },
        on: {
          click: e => {
            e.stopPropagation();
            this.$emit('input', this.calculateChange(change));
          }
        }
      }, [this.$createElement(VIcon["a" /* default */], change < 0 === !this.$vuetify.rtl ? this.prevIcon : this.nextIcon)]);
    },
    calculateChange(sign) {
      const [year, month] = String(this.value).split('-').map(Number);
      if (month == null) {
        return `${year + sign}`;
      } else {
        return monthChange(String(this.value), sign);
      }
    },
    genHeader() {
      const color = !this.disabled && (this.color || 'accent');
      const header = this.$createElement('div', this.setTextColor(color, {
        key: String(this.value)
      }), [this.$createElement('button', {
        attrs: {
          type: 'button'
        },
        on: {
          click: () => this.$emit('toggle')
        }
      }, [this.$slots.default || this.formatter(String(this.value))])]);
      const transition = this.$createElement('transition', {
        props: {
          name: this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition'
        }
      }, [header]);
      return this.$createElement('div', {
        staticClass: 'v-date-picker-header__value',
        class: {
          'v-date-picker-header__value--disabled': this.disabled
        }
      }, [transition]);
    }
  },
  render() {
    return this.$createElement('div', {
      staticClass: 'v-date-picker-header',
      class: {
        'v-date-picker-header--disabled': this.disabled,
        ...this.themeClasses
      }
    }, [this.genBtn(-1), this.genHeader(), this.genBtn(+1)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerTable.sass
var VDatePickerTable = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(135);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/eventHelpers.js
function createItemTypeNativeListeners(instance, itemTypeSuffix, value) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName.slice(0, -itemTypeSuffix.length)] = event => instance.$emit(eventName, value, event);
    }
    return on;
  }, {});
}
function createItemTypeListeners(instance, itemTypeSuffix) {
  return Object.keys(instance.$listeners).reduce((on, eventName) => {
    if (eventName.endsWith(itemTypeSuffix)) {
      on[eventName] = instance.$listeners[eventName];
    }
    return on;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/sanitizeDateString.js
// Adds leading zero to month/day if necessary, returns 'YYYY' if type = 'year',
// 'YYYY-MM' if 'month' and 'YYYY-MM-DD' if 'date'

/* harmony default export */ var sanitizeDateString = ((dateString, type) => {
  const [year, month = 1, date = 1] = dateString.split('-');
  return `${year}-${pad(month)}-${pad(date)}`.substr(0, {
    date: 10,
    month: 7,
    year: 4
  }[type]);
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/util/isDateAllowed.js
function isDateAllowed(date, min, max, allowedFn) {
  return (!allowedFn || allowedFn(date)) && (!min || date >= min.substr(0, 10)) && (!max || date <= max);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/mixins/date-picker-table.js
 // Directives

 // Mixins



 // Utils






/* harmony default export */ var date_picker_table = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    allowedDates: Function,
    current: String,
    disabled: Boolean,
    format: Function,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    min: String,
    max: String,
    range: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    tableDate: {
      type: String,
      required: true
    },
    value: [String, Array]
  },
  data: () => ({
    isReversing: false,
    wheelThrottle: null
  }),
  computed: {
    computedTransition() {
      return this.isReversing === !this.$vuetify.rtl ? 'tab-reverse-transition' : 'tab-transition';
    },
    displayedMonth() {
      return Number(this.tableDate.split('-')[1]) - 1;
    },
    displayedYear() {
      return Number(this.tableDate.split('-')[0]);
    }
  },
  watch: {
    tableDate(newVal, oldVal) {
      this.isReversing = newVal < oldVal;
    }
  },
  mounted() {
    this.wheelThrottle = Object(helpers["G" /* throttle */])(this.wheel, 250);
  },
  methods: {
    genButtonClasses(isAllowed, isFloating, isSelected, isCurrent, isFirst, isLast) {
      return {
        'v-size--default': !isFloating,
        'v-date-picker-table__current': isCurrent,
        'v-btn--active': isSelected,
        'v-btn--flat': !isAllowed || this.disabled,
        'v-btn--text': isSelected === isCurrent,
        'v-btn--rounded': isFloating,
        'v-btn--disabled': !isAllowed || this.disabled,
        'v-btn--outlined': isCurrent && !isSelected,
        'v-date-picker--first-in-range': isFirst,
        'v-date-picker--last-in-range': isLast,
        ...this.themeClasses
      };
    },
    genButtonEvents(value, isAllowed, mouseEventType) {
      if (this.disabled) return undefined;
      return Object(mergeData["c" /* mergeListeners */])({
        click: () => {
          if (isAllowed && !this.readonly) this.$emit('input', value);
        }
      }, createItemTypeNativeListeners(this, `:${mouseEventType}`, value));
    },
    genButton(value, isFloating, mouseEventType, formatter, isOtherMonth = false) {
      const isAllowed = isDateAllowed(value, this.min, this.max, this.allowedDates);
      const isSelected = this.isSelected(value) && isAllowed;
      const isCurrent = value === this.current;
      const setColor = isSelected ? this.setBackgroundColor : this.setTextColor;
      const color = (isSelected || isCurrent) && (this.color || 'accent');
      let isFirst = false;
      let isLast = false;
      if (this.range && !!this.value && Array.isArray(this.value)) {
        isFirst = value === this.value[0];
        isLast = value === this.value[this.value.length - 1];
      }
      return this.$createElement('button', setColor(color, {
        staticClass: 'v-btn',
        class: this.genButtonClasses(isAllowed && !isOtherMonth, isFloating, isSelected, isCurrent, isFirst, isLast),
        attrs: {
          type: 'button'
        },
        domProps: {
          disabled: this.disabled || !isAllowed || isOtherMonth
        },
        on: this.genButtonEvents(value, isAllowed, mouseEventType)
      }), [this.$createElement('div', {
        staticClass: 'v-btn__content'
      }, [formatter(value)]), this.genEvents(value)]);
    },
    getEventColors(date) {
      const arrayize = v => Array.isArray(v) ? v : [v];
      let eventData;
      let eventColors = [];
      if (Array.isArray(this.events)) {
        eventData = this.events.includes(date);
      } else if (this.events instanceof Function) {
        eventData = this.events(date) || false;
      } else if (this.events) {
        eventData = this.events[date] || false;
      } else {
        eventData = false;
      }
      if (!eventData) {
        return [];
      } else if (eventData !== true) {
        eventColors = arrayize(eventData);
      } else if (typeof this.eventColor === 'string') {
        eventColors = [this.eventColor];
      } else if (typeof this.eventColor === 'function') {
        eventColors = arrayize(this.eventColor(date));
      } else if (Array.isArray(this.eventColor)) {
        eventColors = this.eventColor;
      } else {
        eventColors = arrayize(this.eventColor[date]);
      }
      return eventColors.filter(v => v);
    },
    genEvents(date) {
      const eventColors = this.getEventColors(date);
      return eventColors.length ? this.$createElement('div', {
        staticClass: 'v-date-picker-table__events'
      }, eventColors.map(color => this.$createElement('div', this.setBackgroundColor(color)))) : null;
    },
    isValidScroll(value, calculateTableDate) {
      const tableDate = calculateTableDate(value); // tableDate is 'YYYY-MM' for DateTable and 'YYYY' for MonthTable

      const sanitizeType = tableDate.split('-').length === 1 ? 'year' : 'month';
      return value < 0 && (this.min ? tableDate >= sanitizeDateString(this.min, sanitizeType) : true) || value > 0 && (this.max ? tableDate <= sanitizeDateString(this.max, sanitizeType) : true);
    },
    wheel(e, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(e.deltaY));
    },
    touch(value, calculateTableDate) {
      this.$emit('update:table-date', calculateTableDate(value));
    },
    genTable(staticClass, children, calculateTableDate) {
      const transition = this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [this.$createElement('table', {
        key: this.tableDate
      }, children)]);
      const touchDirective = {
        name: 'touch',
        value: {
          left: e => e.offsetX < -15 && this.isValidScroll(1, calculateTableDate) && this.touch(1, calculateTableDate),
          right: e => e.offsetX > 15 && this.isValidScroll(-1, calculateTableDate) && this.touch(-1, calculateTableDate)
        }
      };
      return this.$createElement('div', {
        staticClass,
        class: {
          'v-date-picker-table--disabled': this.disabled,
          ...this.themeClasses
        },
        on: !this.disabled && this.scrollable ? {
          wheel: e => {
            e.preventDefault();
            if (this.isValidScroll(e.deltaY, calculateTableDate)) {
              this.wheelThrottle(e, calculateTableDate);
            }
          }
        } : undefined,
        directives: [touchDirective]
      }, [transition]);
    },
    isSelected(value) {
      if (Array.isArray(this.value)) {
        if (this.range && this.value.length === 2) {
          const [from, to] = [...this.value].sort();
          return from <= value && value <= to;
        } else {
          return this.value.indexOf(value) !== -1;
        }
      }
      return value === this.value;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dateTimeUtils.js
var dateTimeUtils = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerDateTable.js
// Mixins
 // Utils





/* harmony default export */ var VDatePickerDateTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-date-table',
  props: {
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    weekdayFormat: Function
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        day: 'numeric',
        timeZone: 'UTC'
      }, {
        start: 8,
        length: 2
      });
    },
    weekdayFormatter() {
      return this.weekdayFormat || util_createNativeLocaleFormatter(this.currentLocale, {
        weekday: 'narrow',
        timeZone: 'UTC'
      });
    },
    weekDays() {
      const first = parseInt(this.firstDayOfWeek, 10);
      return this.weekdayFormatter ? Object(helpers["i" /* createRange */])(7).map(i => this.weekdayFormatter(`2017-01-${first + i + 15}`)) // 2017-01-15 is Sunday
      : Object(helpers["i" /* createRange */])(7).map(i => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][(i + first) % 7]);
    }
  },
  methods: {
    calculateTableDate(delta) {
      return monthChange(this.tableDate, Math.sign(delta || 1));
    },
    genTHead() {
      const days = this.weekDays.map(day => this.$createElement('th', day));
      if (this.showWeek) {
        days.unshift(this.$createElement('th'));
      }
      return this.$createElement('thead', this.genTR(days));
    },
    // Returns number of the days from the firstDayOfWeek to the first day of the current month
    weekDaysBeforeFirstDayOfTheMonth() {
      const firstDayOfTheMonth = new Date(`${this.displayedYear}-${pad(this.displayedMonth + 1)}-01T00:00:00+00:00`);
      const weekDay = firstDayOfTheMonth.getUTCDay();
      return (weekDay - parseInt(this.firstDayOfWeek) + 7) % 7;
    },
    getWeekNumber(dayInMonth) {
      return Object(dateTimeUtils["b" /* weekNumber */])(this.displayedYear, this.displayedMonth, dayInMonth, parseInt(this.firstDayOfWeek), parseInt(this.localeFirstDayOfYear));
    },
    genWeekNumber(weekNumber) {
      return this.$createElement('td', [this.$createElement('small', {
        staticClass: 'v-date-picker-table--date__week'
      }, String(weekNumber).padStart(2, '0'))]);
    },
    // eslint-disable-next-line max-statements
    genTBody() {
      const children = [];
      const daysInMonth = new Date(this.displayedYear, this.displayedMonth + 1, 0).getDate();
      let rows = [];
      let day = this.weekDaysBeforeFirstDayOfTheMonth();
      if (this.showWeek) {
        rows.push(this.genWeekNumber(this.getWeekNumber(1)));
      }
      const prevMonthYear = this.displayedMonth ? this.displayedYear : this.displayedYear - 1;
      const prevMonth = (this.displayedMonth + 11) % 12;
      const firstDayFromPreviousMonth = new Date(this.displayedYear, this.displayedMonth, 0).getDate();
      const cellsInRow = this.showWeek ? 8 : 7;
      while (day--) {
        const date = `${prevMonthYear}-${pad(prevMonth + 1)}-${pad(firstDayFromPreviousMonth - day)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      for (day = 1; day <= daysInMonth; day++) {
        const date = `${this.displayedYear}-${pad(this.displayedMonth + 1)}-${pad(day)}`;
        rows.push(this.$createElement('td', [this.genButton(date, true, 'date', this.formatter)]));
        if (rows.length % cellsInRow === 0) {
          children.push(this.genTR(rows));
          rows = [];
          if (this.showWeek && (day < daysInMonth || this.showAdjacentMonths)) {
            rows.push(this.genWeekNumber(this.getWeekNumber(day + 7)));
          }
        }
      }
      const nextMonthYear = this.displayedMonth === 11 ? this.displayedYear + 1 : this.displayedYear;
      const nextMonth = (this.displayedMonth + 1) % 12;
      let nextMonthDay = 1;
      while (rows.length < cellsInRow) {
        const date = `${nextMonthYear}-${pad(nextMonth + 1)}-${pad(nextMonthDay++)}`;
        rows.push(this.$createElement('td', this.showAdjacentMonths ? [this.genButton(date, true, 'date', this.formatter, true)] : []));
      }
      if (rows.length) {
        children.push(this.genTR(rows));
      }
      return this.$createElement('tbody', children);
    },
    genTR(children) {
      return [this.$createElement('tr', children)];
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--date', [this.genTHead(), this.genTBody()], this.calculateTableDate);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerMonthTable.js
// Mixins
 // Utils



/* harmony default export */ var VDatePickerMonthTable = (Object(mixins["a" /* default */])(date_picker_table
/* @vue/component */).extend({
  name: 'v-date-picker-month-table',
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        month: 'short',
        timeZone: 'UTC'
      }, {
        start: 5,
        length: 2
      });
    }
  },
  methods: {
    calculateTableDate(delta) {
      return `${parseInt(this.tableDate, 10) + Math.sign(delta || 1)}`;
    },
    genTBody() {
      const children = [];
      const cols = Array(3).fill(null);
      const rows = 12 / cols.length;
      for (let row = 0; row < rows; row++) {
        const tds = cols.map((_, col) => {
          const month = row * cols.length + col;
          const date = `${this.displayedYear}-${pad(month + 1)}`;
          return this.$createElement('td', {
            key: month
          }, [this.genButton(date, false, 'month', this.formatter)]);
        });
        children.push(this.$createElement('tr', {
          key: row
        }, tds));
      }
      return this.$createElement('tbody', children);
    }
  },
  render() {
    return this.genTable('v-date-picker-table v-date-picker-table--month', [this.genTBody()], this.calculateTableDate);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDatePicker/VDatePickerYears.sass
var VDatePickerYears = __webpack_require__(420);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePickerYears.js
 // Mixins


 // Utils




/* harmony default export */ var VDatePicker_VDatePickerYears = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-date-picker-years',
  props: {
    format: Function,
    min: [Number, String],
    max: [Number, String],
    readonly: Boolean,
    value: [Number, String]
  },
  data() {
    return {
      defaultColor: 'primary'
    };
  },
  computed: {
    formatter() {
      return this.format || util_createNativeLocaleFormatter(this.currentLocale, {
        year: 'numeric',
        timeZone: 'UTC'
      }, {
        length: 4
      });
    }
  },
  mounted() {
    setTimeout(() => {
      const activeItem = this.$el.getElementsByClassName('active')[0];
      if (activeItem) {
        this.$el.scrollTop = activeItem.offsetTop - this.$el.offsetHeight / 2 + activeItem.offsetHeight / 2;
      } else if (this.min && !this.max) {
        this.$el.scrollTop = this.$el.scrollHeight;
      } else if (!this.min && this.max) {
        this.$el.scrollTop = 0;
      } else {
        this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
      }
    });
  },
  methods: {
    genYearItem(year) {
      const formatted = this.formatter(`${year}`);
      const active = parseInt(this.value, 10) === year;
      const color = active && (this.color || 'primary');
      return this.$createElement('li', this.setTextColor(color, {
        key: year,
        class: {
          active
        },
        on: Object(mergeData["c" /* mergeListeners */])({
          click: () => this.$emit('input', year)
        }, createItemTypeNativeListeners(this, ':year', year))
      }), formatted);
    },
    genYearItems() {
      const children = [];
      const selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
      const maxYear = this.max ? parseInt(this.max, 10) : selectedYear + 100;
      const minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : selectedYear - 100);
      for (let year = maxYear; year >= minYear; year--) {
        children.push(this.genYearItem(year));
      }
      return children;
    }
  },
  render() {
    return this.$createElement('ul', {
      staticClass: 'v-date-picker-years',
      ref: 'years'
    }, this.genYearItems());
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VPicker/VPicker.sass
var VPicker = __webpack_require__(412);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCard/VCard.sass
var VCard = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/VPicker.js

 // Mixins



 // Helpers



/* @vue/component */

/* harmony default export */ var VPicker_VPicker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    landscape: Boolean,
    noTitle: Boolean,
    transition: {
      type: String,
      default: 'fade-transition'
    },
    width: {
      type: [Number, String],
      default: 290
    }
  },
  computed: {
    computedTitleColor() {
      const defaultTitleColor = this.isDark ? false : this.color || 'primary';
      return this.color || defaultTitleColor;
    }
  },
  methods: {
    genTitle() {
      return this.$createElement('div', this.setBackgroundColor(this.computedTitleColor, {
        staticClass: 'v-picker__title',
        class: {
          'v-picker__title--landscape': this.landscape
        }
      }), this.$slots.title);
    },
    genBodyTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, this.$slots.default);
    },
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-picker__body',
        class: {
          'v-picker__body--no-title': this.noTitle,
          ...this.themeClasses
        },
        style: this.fullWidth ? undefined : {
          width: Object(helpers["h" /* convertToUnit */])(this.width)
        }
      }, [this.genBodyTransition()]);
    },
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-picker__actions v-card__actions',
        class: {
          'v-picker__actions--no-title': this.noTitle
        }
      }, this.$slots.actions);
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-picker v-card',
      class: {
        'v-picker--flat': this.flat,
        'v-picker--landscape': this.landscape,
        'v-picker--full-width': this.fullWidth,
        ...this.themeClasses,
        ...this.elevationClasses
      }
    }, [this.$slots.title ? this.genTitle() : null, this.genBody(), this.$slots.actions ? this.genActions() : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPicker/index.js


/* harmony default export */ var components_VPicker = (VPicker_VPicker);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/picker/index.js
// Components
 // Mixins



 // Utils


/* harmony default export */ var picker = (Object(mixins["a" /* default */])(colorable["a" /* default */], elevatable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'picker',
  props: {
    flat: Boolean,
    fullWidth: Boolean,
    headerColor: String,
    landscape: Boolean,
    noTitle: Boolean,
    width: {
      type: [Number, String],
      default: 290
    }
  },
  methods: {
    genPickerTitle() {
      return null;
    },
    genPickerBody() {
      return null;
    },
    genPickerActionsSlot() {
      return this.$scopedSlots.default ? this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      }) : this.$slots.default;
    },
    genPicker(staticClass) {
      const children = [];
      if (!this.noTitle) {
        const title = this.genPickerTitle();
        title && children.push(title);
      }
      const body = this.genPickerBody();
      body && children.push(body);
      children.push(this.$createElement('template', {
        slot: 'actions'
      }, [this.genPickerActionsSlot()]));
      return this.$createElement(components_VPicker, {
        staticClass,
        props: {
          color: this.headerColor || this.color,
          dark: this.dark,
          elevation: this.elevation,
          flat: this.flat,
          fullWidth: this.fullWidth,
          landscape: this.landscape,
          light: this.light,
          width: this.width,
          noTitle: this.noTitle
        }
      }, children);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/timestamp.js
var timestamp = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js
// Components




 // Mixins


 // Utils







/* harmony default export */ var VDatePicker = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(localable["a" /* default */], picker).extend({
  name: 'v-date-picker',
  props: {
    activePicker: String,
    allowedDates: Function,
    // Function formatting the day in date picker table
    dayFormat: Function,
    disabled: Boolean,
    events: {
      type: [Array, Function, Object],
      default: () => null
    },
    eventColor: {
      type: [Array, Function, Object, String],
      default: () => 'warning'
    },
    firstDayOfWeek: {
      type: [String, Number],
      default: 0
    },
    // Function formatting the tableDate in the day/month table header
    headerDateFormat: Function,
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    max: String,
    min: String,
    // Function formatting month in the months table
    monthFormat: Function,
    multiple: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    nextMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextMonthAriaLabel'
    },
    nextYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.nextYearAriaLabel'
    },
    pickerDate: String,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    prevMonthAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevMonthAriaLabel'
    },
    prevYearAriaLabel: {
      type: String,
      default: '$vuetify.datePicker.prevYearAriaLabel'
    },
    range: Boolean,
    reactive: Boolean,
    readonly: Boolean,
    scrollable: Boolean,
    showCurrent: {
      type: [Boolean, String],
      default: true
    },
    selectedItemsText: {
      type: String,
      default: '$vuetify.datePicker.itemsSelected'
    },
    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    // Function formatting currently selected date in the picker title
    titleDateFormat: Function,
    type: {
      type: String,
      default: 'date',
      validator: type => ['date', 'month'].includes(type) // TODO: year
    },

    value: [Array, String],
    weekdayFormat: Function,
    // Function formatting the year in table header and pickup title
    yearFormat: Function,
    yearIcon: String
  },
  data() {
    const now = new Date();
    return {
      internalActivePicker: this.type.toUpperCase(),
      inputDay: null,
      inputMonth: null,
      inputYear: null,
      isReversing: false,
      now,
      // tableDate is a string in 'YYYY' / 'YYYY-M' format (leading zero for month is not required)
      tableDate: (() => {
        if (this.pickerDate) {
          return this.pickerDate;
        }
        const multipleValue = Object(helpers["I" /* wrapInArray */])(this.value);
        const date = multipleValue[multipleValue.length - 1] || (typeof this.showCurrent === 'string' ? this.showCurrent : `${now.getFullYear()}-${now.getMonth() + 1}`);
        return sanitizeDateString(date, this.type === 'date' ? 'month' : 'year');
      })()
    };
  },
  computed: {
    multipleValue() {
      return Object(helpers["I" /* wrapInArray */])(this.value);
    },
    isMultiple() {
      return this.multiple || this.range;
    },
    lastValue() {
      return this.isMultiple ? this.multipleValue[this.multipleValue.length - 1] : this.value;
    },
    selectedMonths() {
      if (!this.value || this.type === 'month') {
        return this.value;
      } else if (this.isMultiple) {
        return this.multipleValue.map(val => val.substr(0, 7));
      } else {
        return this.value.substr(0, 7);
      }
    },
    current() {
      if (this.showCurrent === true) {
        return sanitizeDateString(`${this.now.getFullYear()}-${this.now.getMonth() + 1}-${this.now.getDate()}`, this.type);
      }
      return this.showCurrent || null;
    },
    inputDate() {
      return this.type === 'date' ? `${this.inputYear}-${pad(this.inputMonth + 1)}-${pad(this.inputDay)}` : `${this.inputYear}-${pad(this.inputMonth + 1)}`;
    },
    tableMonth() {
      return Number((this.pickerDate || this.tableDate).split('-')[1]) - 1;
    },
    tableYear() {
      return Number((this.pickerDate || this.tableDate).split('-')[0]);
    },
    minMonth() {
      return this.min ? sanitizeDateString(this.min, 'month') : null;
    },
    maxMonth() {
      return this.max ? sanitizeDateString(this.max, 'month') : null;
    },
    minYear() {
      return this.min ? sanitizeDateString(this.min, 'year') : null;
    },
    maxYear() {
      return this.max ? sanitizeDateString(this.max, 'year') : null;
    },
    formatters() {
      return {
        year: this.yearFormat || util_createNativeLocaleFormatter(this.currentLocale, {
          year: 'numeric',
          timeZone: 'UTC'
        }, {
          length: 4
        }),
        titleDate: this.titleDateFormat || (this.isMultiple ? this.defaultTitleMultipleDateFormatter : this.defaultTitleDateFormatter)
      };
    },
    defaultTitleMultipleDateFormatter() {
      return dates => {
        if (!dates.length) {
          return '-';
        }
        if (dates.length === 1) {
          return this.defaultTitleDateFormatter(dates[0]);
        }
        return this.$vuetify.lang.t(this.selectedItemsText, dates.length);
      };
    },
    defaultTitleDateFormatter() {
      const titleFormats = {
        year: {
          year: 'numeric',
          timeZone: 'UTC'
        },
        month: {
          month: 'long',
          timeZone: 'UTC'
        },
        date: {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          timeZone: 'UTC'
        }
      };
      const titleDateFormatter = util_createNativeLocaleFormatter(this.currentLocale, titleFormats[this.type], {
        start: 0,
        length: {
          date: 10,
          month: 7,
          year: 4
        }[this.type]
      });
      const landscapeFormatter = date => titleDateFormatter(date).replace(/([^\d\s])([\d])/g, (match, nonDigit, digit) => `${nonDigit} ${digit}`).replace(', ', ',<br>');
      return this.landscape ? landscapeFormatter : titleDateFormatter;
    }
  },
  watch: {
    internalActivePicker: {
      immediate: true,
      handler(val) {
        this.$emit('update:active-picker', val);
      }
    },
    activePicker(val) {
      this.internalActivePicker = val;
    },
    tableDate(val, prev) {
      // Make a ISO 8601 strings from val and prev for comparision, otherwise it will incorrectly
      // compare for example '2000-9' and '2000-10'
      const sanitizeType = this.type === 'month' ? 'year' : 'month';
      this.isReversing = sanitizeDateString(val, sanitizeType) < sanitizeDateString(prev, sanitizeType);
      this.$emit('update:picker-date', val);
    },
    pickerDate(val) {
      if (val) {
        this.tableDate = val;
      } else if (this.lastValue && this.type === 'date') {
        this.tableDate = sanitizeDateString(this.lastValue, 'month');
      } else if (this.lastValue && this.type === 'month') {
        this.tableDate = sanitizeDateString(this.lastValue, 'year');
      }
    },
    value(newValue, oldValue) {
      this.checkMultipleProp();
      this.setInputDate();
      if (!this.isMultiple && this.value && !this.pickerDate || this.isMultiple && this.multipleValue.length && (!oldValue || !oldValue.length) && !this.pickerDate) {
        this.tableDate = sanitizeDateString(this.inputDate, this.type === 'month' ? 'year' : 'month');
      }
    },
    type(type) {
      this.internalActivePicker = type.toUpperCase();
      if (this.value && this.value.length) {
        const output = this.multipleValue.map(val => sanitizeDateString(val, type)).filter(this.isDateAllowed);
        this.$emit('input', this.isMultiple ? output : output[0]);
      }
    }
  },
  created() {
    this.checkMultipleProp();
    if (this.pickerDate !== this.tableDate) {
      this.$emit('update:picker-date', this.tableDate);
    }
    this.setInputDate();
  },
  methods: {
    emitInput(newInput) {
      if (this.range) {
        if (this.multipleValue.length !== 1) {
          this.$emit('input', [newInput]);
        } else {
          const output = [this.multipleValue[0], newInput];
          this.$emit('input', output);
          this.$emit('change', output);
        }
        return;
      }
      const output = this.multiple ? this.multipleValue.indexOf(newInput) === -1 ? this.multipleValue.concat([newInput]) : this.multipleValue.filter(x => x !== newInput) : newInput;
      this.$emit('input', output);
      this.multiple || this.$emit('change', newInput);
    },
    checkMultipleProp() {
      if (this.value == null) return;
      const valueType = this.value.constructor.name;
      const expected = this.isMultiple ? 'Array' : 'String';
      if (valueType !== expected) {
        Object(console["c" /* consoleWarn */])(`Value must be ${this.isMultiple ? 'an' : 'a'} ${expected}, got ${valueType}`, this);
      }
    },
    isDateAllowed(value) {
      return isDateAllowed(value, this.min, this.max, this.allowedDates);
    },
    yearClick(value) {
      this.inputYear = value;
      if (this.type === 'month') {
        this.tableDate = `${value}`;
      } else {
        this.tableDate = `${value}-${pad((this.tableMonth || 0) + 1)}`;
      }
      this.internalActivePicker = 'MONTH';
      if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
        this.$emit('input', this.inputDate);
      }
    },
    monthClick(value) {
      const [year, month] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      if (this.type === 'date') {
        if (this.inputDay) {
          this.inputDay = Math.min(this.inputDay, Object(timestamp["i" /* daysInMonth */])(this.inputYear, this.inputMonth + 1));
        }
        this.tableDate = value;
        this.internalActivePicker = 'DATE';
        if (this.reactive && !this.readonly && !this.isMultiple && this.isDateAllowed(this.inputDate)) {
          this.$emit('input', this.inputDate);
        }
      } else {
        this.emitInput(this.inputDate);
      }
    },
    dateClick(value) {
      const [year, month, day] = value.split('-');
      this.inputYear = parseInt(year, 10);
      this.inputMonth = parseInt(month, 10) - 1;
      this.inputDay = parseInt(day, 10);
      this.emitInput(this.inputDate);
    },
    genPickerTitle() {
      return this.$createElement(VDatePicker_VDatePickerTitle, {
        props: {
          date: this.value ? this.formatters.titleDate(this.isMultiple ? this.multipleValue : this.value) : '',
          disabled: this.disabled,
          readonly: this.readonly,
          selectingYear: this.internalActivePicker === 'YEAR',
          year: this.formatters.year(this.multipleValue.length ? `${this.inputYear}` : this.tableDate),
          yearIcon: this.yearIcon,
          value: this.multipleValue[0]
        },
        slot: 'title',
        on: {
          'update:selecting-year': value => this.internalActivePicker = value ? 'YEAR' : this.type.toUpperCase()
        }
      });
    },
    genTableHeader() {
      return this.$createElement(VDatePicker_VDatePickerHeader, {
        props: {
          nextIcon: this.nextIcon,
          color: this.color,
          dark: this.dark,
          disabled: this.disabled,
          format: this.headerDateFormat,
          light: this.light,
          locale: this.locale,
          min: this.internalActivePicker === 'DATE' ? this.minMonth : this.minYear,
          max: this.internalActivePicker === 'DATE' ? this.maxMonth : this.maxYear,
          nextAriaLabel: this.internalActivePicker === 'DATE' ? this.nextMonthAriaLabel : this.nextYearAriaLabel,
          prevAriaLabel: this.internalActivePicker === 'DATE' ? this.prevMonthAriaLabel : this.prevYearAriaLabel,
          prevIcon: this.prevIcon,
          readonly: this.readonly,
          value: this.internalActivePicker === 'DATE' ? `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}` : `${pad(this.tableYear, 4)}`
        },
        on: {
          toggle: () => this.internalActivePicker = this.internalActivePicker === 'DATE' ? 'MONTH' : 'YEAR',
          input: value => this.tableDate = value
        }
      });
    },
    genDateTable() {
      return this.$createElement(VDatePickerDateTable, {
        props: {
          allowedDates: this.allowedDates,
          color: this.color,
          current: this.current,
          dark: this.dark,
          disabled: this.disabled,
          events: this.events,
          eventColor: this.eventColor,
          firstDayOfWeek: this.firstDayOfWeek,
          format: this.dayFormat,
          light: this.light,
          locale: this.locale,
          localeFirstDayOfYear: this.localeFirstDayOfYear,
          min: this.min,
          max: this.max,
          range: this.range,
          readonly: this.readonly,
          scrollable: this.scrollable,
          showAdjacentMonths: this.showAdjacentMonths,
          showWeek: this.showWeek,
          tableDate: `${pad(this.tableYear, 4)}-${pad(this.tableMonth + 1)}`,
          value: this.value,
          weekdayFormat: this.weekdayFormat
        },
        ref: 'table',
        on: {
          input: this.dateClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':date')
        }
      });
    },
    genMonthTable() {
      return this.$createElement(VDatePickerMonthTable, {
        props: {
          allowedDates: this.type === 'month' ? this.allowedDates : null,
          color: this.color,
          current: this.current ? sanitizeDateString(this.current, 'month') : null,
          dark: this.dark,
          disabled: this.disabled,
          events: this.type === 'month' ? this.events : null,
          eventColor: this.type === 'month' ? this.eventColor : null,
          format: this.monthFormat,
          light: this.light,
          locale: this.locale,
          min: this.minMonth,
          max: this.maxMonth,
          range: this.range,
          readonly: this.readonly && this.type === 'month',
          scrollable: this.scrollable,
          value: this.selectedMonths,
          tableDate: `${pad(this.tableYear, 4)}`
        },
        ref: 'table',
        on: {
          input: this.monthClick,
          'update:table-date': value => this.tableDate = value,
          ...createItemTypeListeners(this, ':month')
        }
      });
    },
    genYears() {
      return this.$createElement(VDatePicker_VDatePickerYears, {
        props: {
          color: this.color,
          format: this.yearFormat,
          locale: this.locale,
          min: this.minYear,
          max: this.maxYear,
          value: this.tableYear
        },
        on: {
          input: this.yearClick,
          ...createItemTypeListeners(this, ':year')
        }
      });
    },
    genPickerBody() {
      const children = this.internalActivePicker === 'YEAR' ? [this.genYears()] : [this.genTableHeader(), this.internalActivePicker === 'DATE' ? this.genDateTable() : this.genMonthTable()];
      return this.$createElement('div', {
        key: this.internalActivePicker
      }, children);
    },
    setInputDate() {
      if (this.lastValue) {
        const array = this.lastValue.split('-');
        this.inputYear = parseInt(array[0], 10);
        this.inputMonth = parseInt(array[1], 10) - 1;
        if (this.type === 'date') {
          this.inputDay = parseInt(array[2], 10);
        }
      } else {
        this.inputYear = this.inputYear || this.now.getFullYear();
        this.inputMonth = this.inputMonth == null ? this.inputMonth : this.now.getMonth();
        this.inputDay = this.inputDay || this.now.getDate();
      }
    }
  },
  render() {
    return this.genPicker('v-picker--date');
  }
}));

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(500);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("89a841e4", content, true, context)
};

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("33c9f604", content, true, context)
};

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=template&id=99e2760e&scoped=true&



var settlementVouchervue_type_template_id_99e2760e_scoped_true_render = function render() {
  var _vm$voucherData$curre, _vm$voucherData$curre2, _vm$voucherData$curre3, _vm$voucherData$curre4, _vm$voucherData$curre5, _vm$voucherData$minis, _vm$voucherData$proce, _vm$voucherData$proce2, _vm$voucherData$check;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showPrintDialog ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-99e2760e><h3 data-v-99e2760e>ພິມໃບຮັບເງິນ</h3> <button class=\"close-btn\" data-v-99e2760e><i class=\"fas fa-times\" data-v-99e2760e></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div id=\"voucher-print\" class=\"voucher-container\" data-v-99e2760e>", "</div>", [_vm._ssrNode("<div class=\"voucher-header\" data-v-99e2760e><div class=\"company-info\" data-v-99e2760e><div class=\"company-name\" data-v-99e2760e><img" + _vm._ssrAttr("src", __webpack_require__(168)) + " alt=\"Ministry Logo\" class=\"voucher-logo-gov\" data-v-99e2760e></div> <div class=\"company-name\" data-v-99e2760e>\n                ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ\n              </div> <div class=\"company-name\" data-v-99e2760e>\n                ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ\n              </div></div></div> "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('img', {
    staticClass: "voucher-logo",
    attrs: {
      "src": __webpack_require__(167),
      "alt": "Ministry Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ.")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ກົມແຜນການ ແລະ ການເງິນ")]), _vm._v(" "), _c('div', {
    staticClass: "voucher-title"
  }, [_vm._v("ພະແນກຄຸ້ມຄອງລາຍຮັບ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "number-box"
  }, [_c('span', {
    staticClass: "number-label"
  }, [_vm._v("No")]), _vm._v(" "), _c('span', {
    staticClass: "number-value"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatVoucherNumber(_vm.voucherData.id)) + "\n                ")])])])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "ministry-voucher-section",
    attrs: {
      "align": "end",
      "justify": "space-between",
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-start pa-0",
    attrs: {
      "cols": "6"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "d-flex flex-column align-end pa-0",
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "voucher-title"
  }, [_c('span', {
    staticClass: "label",
    staticStyle: {
      "font-size": "14px !important"
    }
  }, [_vm._v("ນະຄອນຫຼວງວຽງຈັນ ວັນທີ")]), _vm._v(" "), _c('span', {
    staticClass: "dotted-line"
  }, [_vm._v("\n                  " + _vm._s(_vm.formatDateLao(_vm.voucherData.bookingDate)) + "\n                ")])])])], 1), _vm._ssrNode(" <div class=\"voucher-title-main\" data-v-99e2760e>ໃບຮັບເງິນ</div> <div class=\"voucher-details\" data-v-99e2760e><div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ອີງຕາມ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRef || '')) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ສະບັບ ເລກທີ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.externalRefNo || '')) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ພະແນກຄັງເງິນສົດໄດ້ຮັບເງິນ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cash') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ສົດ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'cheque') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ເຊັກ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.voucherData.method === 'bank_transfer') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ໂອນທະນາຄານ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre = _vm.voucherData.currency) === null || _vm$voucherData$curre === void 0 ? void 0 : _vm$voucherData$curre.code) === 'LAK') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ກີບ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre2 = _vm.voucherData.currency) === null || _vm$voucherData$curre2 === void 0 ? void 0 : _vm$voucherData$curre2.code) === 'THB') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ບາດ/ </span> <label data-v-99e2760e><input type=\"checkbox\"" + _vm._ssrAttr("checked", ((_vm$voucherData$curre3 = _vm.voucherData.currency) === null || _vm$voucherData$curre3 === void 0 ? void 0 : _vm$voucherData$curre3.code) === 'USD') + " data-v-99e2760e></label> <span class=\"label\" data-v-99e2760e> ໂດລາ </span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ຈຳນວນເງິນ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.amount)) + "\n                " + _vm._s(_vm.getCurrencyWord((_vm$voucherData$curre4 = _vm.voucherData.currency) === null || _vm$voucherData$curre4 === void 0 ? void 0 : _vm$voucherData$curre4.code))) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ຂຽນເປັນຕົວຫນັງສື</span> <span class=\"amount-words\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.convertToWords(_vm.voucherData.amount, (_vm$voucherData$curre5 = _vm.voucherData.currency) === null || _vm$voucherData$curre5 === void 0 ? void 0 : _vm$voucherData$curre5.code))) + "</span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ຈາກທ່ານ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.fromPersonName || '')) + "</span> <span class=\"label\" data-v-99e2760e>ຊື່ງແມ່ນພະນັກງານສັງກັດຢູ່</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(((_vm$voucherData$minis = _vm.voucherData.ministry) === null || _vm$voucherData$minis === void 0 ? void 0 : _vm$voucherData$minis.ministryName) || '')) + "</span></div> " + (_vm.voucherData.method === 'bank_transfer' && _vm.voucherData.bankAccount ? "<div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ບັນຊີທະນາຄານ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.bankName)) + "</span> <span class=\"label\" data-v-99e2760e>ເລກບັນຊີ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.bankAccount.accountNumber)) + "</span></div>" : "<!---->") + " " + (_vm.voucherData.method === 'cheque' && _vm.voucherData.chequeNo ? "<div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ເລກເຊັກ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.chequeNo)) + "</span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-99e2760e><span class=\"dotted-line\" data-v-99e2760e></span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ເນື້ອໃນລາຍຮັບ</span> <span class=\"dotted-line\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.voucherData.notes || _vm.voucherData.purpose || 'ບໍ່ມີຫມາຍເຫດ')) + "</span></div> " + (_vm.voucherData.moneyAdvance ? "<div class=\"detail-row\" data-v-99e2760e><span class=\"label\" data-v-99e2760e>ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ</span> <span class=\"value\" data-v-99e2760e>" + _vm._ssrEscape("#" + _vm._s(_vm.voucherData.moneyAdvance.id)) + "</span> <span class=\"label\" data-v-99e2760e>ຈຳນວນ</span> <span class=\"value\" data-v-99e2760e>" + _vm._ssrEscape(_vm._s(_vm.formatAmount(_vm.voucherData.moneyAdvance.amount)) + "\n              ") + "</span> <span class=\"dotted-line\" data-v-99e2760e></span></div>" : "<!---->") + " <div class=\"detail-row\" data-v-99e2760e><span class=\"dotted-line\" data-v-99e2760e></span></div> <div class=\"detail-row\" data-v-99e2760e><span class=\"dotted-line\" data-v-99e2760e></span></div></div> <div class=\"voucher-title-main\" data-v-99e2760e>\n            ດັ່ງນັ້ນ ຈິ່ງໄດ້ພ້ອມກັນລົງລາຍເຊັນ ຢັ້ງຢືນໄວ້ເປັນຫຫຼັກຖານ\n          </div> <div class=\"signature-section\" data-v-99e2760e><div class=\"signature-box\" data-v-99e2760e><div class=\"signature-title\" data-v-99e2760e>ພະແນກຄຸ້ມຄອງລາຍຮັບ</div> <div class=\"signature-name\" data-v-99e2760e></div></div> <div class=\"signature-box\" data-v-99e2760e><div class=\"signature-title\" data-v-99e2760e>ຜູ້ຮັບ</div> <div class=\"signature-name\" data-v-99e2760e>" + _vm._ssrEscape("\n                " + _vm._s(((_vm$voucherData$proce = _vm.voucherData.proceeder) === null || _vm$voucherData$proce === void 0 ? void 0 : _vm$voucherData$proce.cus_name) || ((_vm$voucherData$proce2 = _vm.voucherData.proceeder) === null || _vm$voucherData$proce2 === void 0 ? void 0 : _vm$voucherData$proce2.name) || '') + "\n              ") + "</div></div> <div class=\"signature-box\" data-v-99e2760e><div class=\"signature-title\" data-v-99e2760e>ຜູ້ມອບ</div> <div class=\"signature-name\" data-v-99e2760e>" + _vm._ssrEscape("\n                " + _vm._s(_vm.voucherData.fromPersonName || ((_vm$voucherData$check = _vm.voucherData.checker) === null || _vm$voucherData$check === void 0 ? void 0 : _vm$voucherData$check.cus_name) || '') + "\n              ") + "</div></div></div>")], 2)]), _vm._ssrNode(" <div class=\"modal-footer\" data-v-99e2760e><button class=\"btn btn-secondary\" data-v-99e2760e><i class=\"fas fa-times\" data-v-99e2760e></i>\n          ຍົກເລີກ\n        </button> <button class=\"btn btn-primary\" data-v-99e2760e><i class=\"fas fa-print\" data-v-99e2760e></i>\n          ພິມ\n        </button></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=template&id=99e2760e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settlementVouchervue_type_script_lang_js_ = ({
  name: 'SettlementVoucherPrintComponent',
  props: {
    voucherData: {
      type: Object,
      default: () => ({
        id: 5,
        amount: 4000000,
        purpose: 'Settlement payment',
        notes: '',
        method: 'cash',
        status: 'completed',
        bookingDate: '2025-01-20T00:00:00.000Z',
        settlementDate: '2025-01-20T00:00:00.000Z',
        createdAt: '2025-01-20T15:12:51.000Z',
        updateTimestamp: '2025-01-20T15:12:51.000Z',
        exchangeRate: 1,
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: '',
        proceeder: {
          id: 2,
          cus_id: 1001,
          cus_name: 'CASHIER01',
          name: 'CASHIER01'
        },
        checker: null,
        updateUser: null,
        currency: {
          id: 5,
          code: 'USD',
          name: 'US Dollar',
          currencyName: 'US Dollar',
          rate: 1,
          isActive: true,
          isLocalCCY: false
        },
        bankAccount: null,
        ministry: null,
        chartAccount: null,
        moneyAdvance: null
      })
    }
  },
  data() {
    return {
      showPrintDialog: false
    };
  },
  watch: {
    voucherData: {
      handler(newValue) {
        if (newValue && newValue.id) {
          this.showPrintDialog = true;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    openPrintDialog() {
      this.showPrintDialog = true;
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      this.$emit('close');
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    formatDate(dateString) {
      if (!dateString) return {
        day: '',
        month: '',
        year: ''
      };
      const date = new Date(dateString);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    },
    formatDateLao(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    formatTime(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    formatAmount(amount) {
      if (!amount) return '0';
      return new Intl.NumberFormat('en-US').format(amount);
    },
    getCurrencyWord(currencyCode) {
      let result = '';
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += 'ກີບ';
      }
      return result;
    },
    formatExchangeRate(rate) {
      if (!rate || rate === 1) return '1.0000';
      return parseFloat(rate).toFixed(4);
    },
    getPaymentMethodText(method) {
      const methodTexts = {
        cash: 'ເງິນສົດ',
        cheque: 'ເຊັກ',
        bank_transfer: 'ໂອນຜ່ານທະນາຄານ',
        deduction: 'ຫັກລົບ'
      };
      return methodTexts[method] || method || 'N/A';
    },
    convertToWords(amount, currencyCode) {
      if (!amount) return '';
      const numbers = ['', 'ໜຶ່ງ', 'ສອງ', 'ສາມ', 'ສີ່', 'ຫ້າ', 'ຫົກ', 'ເຈັດ', 'ແປດ', 'ເກົ້າ'];

      // Convert number to string and process
      const amountStr = amount.toString();
      const length = amountStr.length;
      if (length > 10) {
        // For very large numbers (over 10 billion), just return formatted number
        return this.formatAmount(amount) + ' ' + (currencyCode || '');
      }
      let result = '';

      // Helper function to convert a 3-digit group
      const convertThreeDigits = num => {
        let text = '';
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        const tens = Math.floor(remainder / 10);
        const ones = remainder % 10;

        // Hundreds place
        if (hundreds > 0) {
          text += numbers[hundreds] + 'ຮ້ອຍ';
        }

        // Tens and ones place
        if (remainder === 20) {
          // Special case: 20 = ຊາວ
          text += 'ຊາວ';
        } else if (tens >= 2) {
          // 30, 40, 50, etc.
          text += numbers[tens] + 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (tens === 1) {
          // 10-19
          text += 'ສິບ';
          if (ones > 0) {
            text += numbers[ones];
          }
        } else if (ones > 0) {
          // 1-9
          text += numbers[ones];
        }
        return text;
      };

      // Convert based on number size
      if (length <= 3) {
        // 1 - 999
        result = convertThreeDigits(amount);
      } else if (length <= 6) {
        // 1,000 - 999,999
        if (amount >= 100000) {
          // Handle ແສນ (100,000) unit for 100,000 - 999,999
          const saen = Math.floor(amount / 100000);
          const remainder = amount % 100000;
          if (saen === 10) {
            // Special case: 1,000,000 should be handled in millions section
            // This shouldn't happen in this range, but keeping for safety
            result = 'ສິບແສນ';
          } else {
            result = numbers[saen] + 'ແສນ';
          }
          if (remainder > 0) {
            if (remainder >= 1000) {
              const thousands = Math.floor(remainder / 1000);
              const finalRemainder = remainder % 1000;
              if (thousands === 10) {
                result += 'ສິບພັນ';
              } else if (thousands === 20) {
                result += 'ຊາວພັນ';
              } else {
                result += convertThreeDigits(thousands) + 'ພັນ';
              }
              if (finalRemainder > 0) {
                result += convertThreeDigits(finalRemainder);
              }
            } else {
              result += convertThreeDigits(remainder);
            }
          }
        } else {
          // Handle ພັນ (1,000) unit for 1,000 - 99,999
          const thousands = Math.floor(amount / 1000);
          const remainder = amount % 1000;
          if (thousands === 10) {
            // Special case: 10,000 = ສິບພັນ
            result = 'ສິບພັນ';
          } else if (thousands === 20) {
            // Special case: 20,000 = ຊາວພັນ
            result = 'ຊາວພັນ';
          } else {
            result = convertThreeDigits(thousands) + 'ພັນ';
          }
          if (remainder > 0) {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 9) {
        // 1,000,000 - 999,999,999 (millions)
        const millions = Math.floor(amount / 1000000);
        const remainder = amount % 1000000;

        // Handle millions part
        if (millions === 10) {
          result = 'ສິບລ້ານ';
        } else if (millions === 20) {
          result = 'ຊາວລ້ານ';
        } else {
          result = convertThreeDigits(millions) + 'ລ້ານ';
        }

        // Handle remainder (saen, thousands and hundreds)
        if (remainder > 0) {
          if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      } else if (length <= 10) {
        // 1,000,000,000 - 9,999,999,999 (billions)
        const billions = Math.floor(amount / 1000000000);
        const remainder = amount % 1000000000;

        // Handle billions part
        result = numbers[billions] + 'ພັນລ້ານ';

        // Handle remainder (millions, saen, thousands, hundreds)
        if (remainder > 0) {
          if (remainder >= 1000000) {
            const millions = Math.floor(remainder / 1000000);
            const millionRemainder = remainder % 1000000;
            if (millions === 10) {
              result += 'ສິບລ້ານ';
            } else if (millions === 20) {
              result += 'ຊາວລ້ານ';
            } else {
              result += convertThreeDigits(millions) + 'ລ້ານ';
            }
            if (millionRemainder > 0) {
              if (millionRemainder >= 100000) {
                // Handle ແສນ unit in remainder
                const saen = Math.floor(millionRemainder / 100000);
                const saenRemainder = millionRemainder % 100000;
                result += numbers[saen] + 'ແສນ';
                if (saenRemainder > 0) {
                  if (saenRemainder >= 1000) {
                    const thousands = Math.floor(saenRemainder / 1000);
                    const finalRemainder = saenRemainder % 1000;
                    if (thousands === 10) {
                      result += 'ສິບພັນ';
                    } else if (thousands === 20) {
                      result += 'ຊາວພັນ';
                    } else {
                      result += convertThreeDigits(thousands) + 'ພັນ';
                    }
                    if (finalRemainder > 0) {
                      result += convertThreeDigits(finalRemainder);
                    }
                  } else {
                    result += convertThreeDigits(saenRemainder);
                  }
                }
              } else if (millionRemainder >= 1000) {
                const thousands = Math.floor(millionRemainder / 1000);
                const finalRemainder = millionRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(millionRemainder);
              }
            }
          } else if (remainder >= 100000) {
            // Handle ແສນ unit in remainder
            const saen = Math.floor(remainder / 100000);
            const saenRemainder = remainder % 100000;
            result += numbers[saen] + 'ແສນ';
            if (saenRemainder > 0) {
              if (saenRemainder >= 1000) {
                const thousands = Math.floor(saenRemainder / 1000);
                const finalRemainder = saenRemainder % 1000;
                if (thousands === 10) {
                  result += 'ສິບພັນ';
                } else if (thousands === 20) {
                  result += 'ຊາວພັນ';
                } else {
                  result += convertThreeDigits(thousands) + 'ພັນ';
                }
                if (finalRemainder > 0) {
                  result += convertThreeDigits(finalRemainder);
                }
              } else {
                result += convertThreeDigits(saenRemainder);
              }
            }
          } else if (remainder >= 1000) {
            const thousands = Math.floor(remainder / 1000);
            const finalRemainder = remainder % 1000;
            if (thousands === 10) {
              result += 'ສິບພັນ';
            } else if (thousands === 20) {
              result += 'ຊາວພັນ';
            } else {
              result += convertThreeDigits(thousands) + 'ພັນ';
            }
            if (finalRemainder > 0) {
              result += convertThreeDigits(finalRemainder);
            }
          } else {
            result += convertThreeDigits(remainder);
          }
        }
      }

      // Add currency
      switch (currencyCode) {
        case 'LAK':
          result += ' ກີບ';
          break;
        case 'USD':
          result += ' ໂດລາ';
          break;
        case 'THB':
          result += ' ບາດ';
          break;
        default:
          result += currencyCode ? ' ' + currencyCode : '';
      }
      return result;
    },
    printVoucher() {
      // Clone the voucher content to avoid modifying the original
      const voucherElement = this.$refs.voucherContent.cloneNode(true);

      // Get all checkboxes in the cloned element
      const checkboxes = voucherElement.querySelectorAll('input[type="checkbox"]');

      // Manually set the checked state based on data
      checkboxes.forEach((checkbox, index) => {
        let shouldBeChecked = false;

        // The checkboxes appear in this order: cash, cheque, bank_transfer, LAK, THB, USD
        if (index === 0) {
          // First checkbox - Cash
          shouldBeChecked = this.voucherData.method === 'cash';
        } else if (index === 1) {
          // Second checkbox - Cheque
          shouldBeChecked = this.voucherData.method === 'cheque';
        } else if (index === 2) {
          // Third checkbox - Bank Transfer
          shouldBeChecked = this.voucherData.method === 'bank_transfer';
        } else if (index === 3) {
          var _this$voucherData$cur;
          // Fourth checkbox - LAK (ກີບ)
          shouldBeChecked = ((_this$voucherData$cur = this.voucherData.currency) === null || _this$voucherData$cur === void 0 ? void 0 : _this$voucherData$cur.code) === 'LAK';
        } else if (index === 4) {
          var _this$voucherData$cur2;
          // Fifth checkbox - THB (ບາດ)
          shouldBeChecked = ((_this$voucherData$cur2 = this.voucherData.currency) === null || _this$voucherData$cur2 === void 0 ? void 0 : _this$voucherData$cur2.code) === 'THB';
        } else if (index === 5) {
          var _this$voucherData$cur3;
          // Sixth checkbox - USD (ໂດລາ)
          shouldBeChecked = ((_this$voucherData$cur3 = this.voucherData.currency) === null || _this$voucherData$cur3 === void 0 ? void 0 : _this$voucherData$cur3.code) === 'USD';
        }

        // Set the checked attribute
        if (shouldBeChecked) {
          checkbox.setAttribute('checked', 'checked');
          checkbox.checked = true;
        } else {
          checkbox.removeAttribute('checked');
          checkbox.checked = false;
        }
      });

      // Get the processed HTML content
      const printContent = voucherElement.innerHTML;
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      printWindow.document.write(`
    <html>
      <head>
        <title>ໃບຮັບເງິນ - Settlement Receipt</title>
        <style>
          body { 
            font-family: 'Phetsarath OT', 'Noto Sans Lao', Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            line-height: 1.4;
            font-weight: bold !important;
          }

          * {
            font-weight: bold !important;
          }

          .voucher-logo {
            width: 110px;
            height: 110px;
            object-fit: contain;
            margin-bottom: 1px !important;
            line-height: 1 !important;
          }
          .voucher-logo-gov {
            max-width: 80px;
            max-height: 80px;
            width: auto;
            height: auto;
            object-fit: contain;
            margin-top: 30px !important;
            margin-bottom: 4px !important;
            line-height: 1 !important;
          }
          .voucher-container { 
            border: 2px solid #000; 
            padding: 15px; 
            font-size: 12px; 
            line-height: 1.4; 
            max-width: 210mm;
            margin: 0 auto;
            font-weight: bold;
          }
          .voucher-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: flex-start; 
            margin-bottom: 10px; 
            padding-bottom: 5px; 
          }
          .ministry-voucher-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 !important;
            padding: 0 !important;
            margin-bottom: 10px !important;
          }
          .ministry-voucher-section .col,
          .ministry-voucher-section > div {
            padding: 0 !important;
            margin: 0 !important;
          }
          .voucher-title {
            font-size: 16px !important;
            margin: 0 !important;
            margin-bottom: 2px !important;
            line-height: 1.2 !important;
            text-align: left;
            text-decoration: none;
            font-weight: bold !important;
          }
          .voucher-title-main {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin: 20px 0;
            text-decoration: underline;
          }
          .company-info { 
            flex: 1; 
            text-align: center; 
          }
          .company-name { 
            font-weight: bold !important; 
            font-size: 14px; 
            margin-bottom: 3px; 
          }
          .department { 
            font-size: 12px; 
            margin-bottom: 3px; 
            font-weight: bold !important;
          }
          .sub-department { 
            font-size: 10px; 
            margin-bottom: 10px; 
            font-weight: bold !important;
          }
          .amount-line { 
            font-size: 10px; 
            letter-spacing: 2px; 
            font-weight: bold !important;
          }
          .number-box { 
            border: 2px solid #000; 
            padding: 5px 8px; 
            text-align: center; 
            background: #f9f9f9; 
            margin-bottom: 5px;
          }
          .number-label { 
            font-weight: bold !important; 
            margin-right: 10px; 
          }
          .number-value { 
            font-weight: bold !important; 
            color: #d32f2f;
          }
          .detail-row { 
            display: flex; 
            align-items: center; 
            margin-bottom: 8px; 
            min-height: 20px; 
          }
          .label { 
            font-weight: bold !important; 
            margin-right: 8px; 
            white-space: nowrap; 
          }
          .value { 
            margin-right: 15px; 
            border-bottom: 1px solid #000; 
            min-width: 35px; 
            text-align: center; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          .dotted-line { 
            flex: 1; 
            border-bottom: 1px dotted #000; 
            margin: 0 8px; 
            min-height: 18px; 
            padding: 1px 3px; 
            font-weight: bold !important;
          }
          .currency-options { 
            display: flex; 
            gap: 15px; 
            margin-left: 8px; 
          }
          .currency-options label { 
            display: flex; 
            align-items: center; 
            gap: 3px; 
            font-weight: bold !important; 
          }
          .amount-display { 
            font-weight: bold !important; 
            font-size: 14px; 
            margin: 0 8px; 
            color: #d32f2f;
          }
          .amount-words { 
            flex: 1; 
            border-bottom: 1px solid #000; 
            margin-left: 8px; 
            padding: 1px 8px; 
            font-style: italic; 
            font-weight: bold !important;
          }
          .signature-section { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 30px; 
            gap: 8px; 
          }
          .signature-box { 
            flex: 1; 
            text-align: center; 
          }
          .signature-title { 
            font-size: 14px; 
            margin-bottom: 25px;
            margin-bottom: 100px; 
            font-weight: bold !important; 
          }
          .signature-name { 
            font-size: 14px; 
            margin-top: 5px; 
            font-weight: bold !important; 
          }

          /* Ensure checkboxes are visible and properly styled */
          input[type="checkbox"] {
            width: 14px;
            height: 14px;
            margin-right: 4px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Force checkbox states to be visible in print */
          input[type="checkbox"]:checked {
            accent-color: black;
          }

          @media print {
            input[type="checkbox"] {
              -webkit-appearance: checkbox;
              appearance: checkbox;
            }
          }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementVouchervue_type_script_lang_js_ = (settlementVouchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementVoucher/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(499)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementVouchervue_type_script_lang_js_,
  settlementVouchervue_type_template_id_99e2760e_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "99e2760e",
  "42cd2c00"
  
)

/* harmony default export */ var settlementVoucher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_99e2760e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".voucher-logo[data-v-99e2760e]{height:110px;line-height:1!important;margin-bottom:1px!important;-o-object-fit:contain;object-fit:contain;width:110px}.voucher-logo-gov[data-v-99e2760e]{height:auto;line-height:1!important;margin-bottom:4px!important;margin-top:40px!important;max-height:80px;max-width:80px;-o-object-fit:contain;object-fit:contain;width:auto}.modal-overlay[data-v-99e2760e]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}.modal-content[data-v-99e2760e]{background:#fff;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-99e2760e]{align-items:center;border-bottom:1px solid #eee;display:flex;justify-content:space-between;padding:20px}.modal-header h3[data-v-99e2760e]{color:#333;margin:0}.close-btn[data-v-99e2760e]{background:none;border:none;color:#666;cursor:pointer;font-size:18px}.close-btn[data-v-99e2760e]:hover{color:#333}.modal-body[data-v-99e2760e]{padding:20px}.modal-footer[data-v-99e2760e]{border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;padding:20px}.btn[data-v-99e2760e]{align-items:center;border:none;border-radius:4px;cursor:pointer;display:inline-flex;font-size:14px;gap:8px;padding:10px 20px;transition:all .2s}.btn-primary[data-v-99e2760e]{background:#007bff;color:#fff}.btn-primary[data-v-99e2760e]:hover{background:#0056b3}.btn-secondary[data-v-99e2760e]{background:#6c757d;color:#fff}.btn-secondary[data-v-99e2760e]:hover{background:#545b62}.voucher-container[data-v-99e2760e]{background:#fff;border:2px solid #333;font-family:\"Phetsarath OT\",\"Noto Sans Lao\",Arial,sans-serif;font-size:14px;font-weight:700;line-height:1.3;margin:0 auto;max-width:700px;padding:15px;width:100%}.voucher-container *[data-v-99e2760e]{font-weight:700!important}.voucher-header[data-v-99e2760e]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:10px;padding-bottom:5px}.ministry-voucher-section[data-v-99e2760e]{margin:0 0 10px!important;padding:0!important}.ministry-voucher-section .col[data-v-99e2760e],.ministry-voucher-section .v-col[data-v-99e2760e]{margin:0!important;padding:0!important}.row[data-v-99e2760e]{margin:0!important}.col[data-v-99e2760e]{padding:0!important}.company-info[data-v-99e2760e]{flex:1;text-align:center}.company-name[data-v-99e2760e]{font-size:16px;margin-bottom:3px}.company-name[data-v-99e2760e],.department[data-v-99e2760e]{font-weight:700!important}.department[data-v-99e2760e]{font-size:14px;margin-bottom:3px}.sub-department[data-v-99e2760e]{font-size:12px;margin-bottom:8px}.amount-line[data-v-99e2760e],.sub-department[data-v-99e2760e]{font-weight:700!important}.amount-line[data-v-99e2760e]{font-size:12px;letter-spacing:2px}.number-box[data-v-99e2760e]{background:#f9f9f9;border:2px solid #333;margin-bottom:5px;padding:6px 10px;text-align:center}.number-label[data-v-99e2760e]{margin-right:8px}.number-label[data-v-99e2760e],.number-value[data-v-99e2760e]{font-weight:700!important}.number-value[data-v-99e2760e]{color:#d32f2f}.voucher-title[data-v-99e2760e]{font-size:18px;font-weight:700!important;margin:15px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-title[data-v-99e2760e]:not(.voucher-container>.voucher-title){font-size:16px!important;font-weight:700!important;line-height:1.2!important;margin:0 0 2px!important;text-align:left!important;-webkit-text-decoration:none!important;text-decoration:none!important}.voucher-title-main[data-v-99e2760e]{font-size:18px;font-weight:700!important;margin:20px 0;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.voucher-details[data-v-99e2760e]{margin-bottom:25px}.detail-row[data-v-99e2760e]{align-items:center;display:flex;margin-bottom:10px;min-height:22px}.detail-row.description[data-v-99e2760e]{align-items:flex-start;flex-direction:column}.label[data-v-99e2760e]{margin-right:8px;white-space:nowrap}.label[data-v-99e2760e],.value[data-v-99e2760e]{font-weight:700!important}.value[data-v-99e2760e]{border-bottom:1px solid #333;margin-right:15px;min-width:35px;padding:2px 4px;text-align:center}.dotted-line[data-v-99e2760e]{border-bottom:1px dotted #333;flex:1;font-weight:700!important;margin:0 8px;min-height:18px;padding:2px 4px}.currency-options[data-v-99e2760e]{display:flex;gap:15px;margin-left:8px}.currency-options label[data-v-99e2760e]{align-items:center;display:flex;gap:4px}.amount-display[data-v-99e2760e],.currency-options label[data-v-99e2760e]{font-weight:700!important}.amount-display[data-v-99e2760e]{color:#d32f2f;font-size:16px;margin:0 8px}.description-content[data-v-99e2760e]{background:#fafafa;border:1px solid #333;margin-top:4px;min-height:50px;padding:8px;width:100%}.amount-words[data-v-99e2760e],.description-content[data-v-99e2760e]{font-weight:700!important}.amount-words[data-v-99e2760e]{border-bottom:1px solid #333;flex:1;font-style:italic;margin-left:8px;padding:2px 8px}.signature-section[data-v-99e2760e]{display:flex;gap:8px;justify-content:space-between;margin-top:30px}.signature-box[data-v-99e2760e]{flex:1;text-align:center}.signature-title[data-v-99e2760e]{font-size:14px;font-weight:700!important;margin-bottom:100px}.signature-line[data-v-99e2760e]{border-bottom:1px solid #333;height:1px;margin-top:15px}.signature-name[data-v-99e2760e]{color:#666;font-size:14px;font-weight:700!important;margin-top:4px}@media print{*[data-v-99e2760e],.print-only[data-v-99e2760e],.print-only *[data-v-99e2760e],body *[data-v-99e2760e]{font-weight:700!important}.print-only[data-v-99e2760e],.print-only *[data-v-99e2760e]{visibility:visible}.print-only[data-v-99e2760e]{left:0;position:absolute;top:0;width:100%}.voucher-container.print-version[data-v-99e2760e]{border:2px solid #000!important;font-size:12px!important;font-weight:700!important;margin:0!important;max-width:none!important;padding:15px!important;width:100%!important}}.print-only[data-v-99e2760e]{left:-9999px;position:absolute;top:-9999px}@media print{.print-only[data-v-99e2760e]{left:auto;position:static;top:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(487);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_216c16b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".compact-date-field[data-v-216c16b2]{font-size:13px!important}.compact-date-field .v-input__control[data-v-216c16b2],.compact-date-field .v-input__slot[data-v-216c16b2]{max-height:40px!important;min-height:40px!important}.compact-date-field .v-input__slot[data-v-216c16b2]{align-items:center!important;padding:0 12px!important}.compact-date-field .v-text-field__details[data-v-216c16b2]{display:none!important}.compact-date-field .v-input__icon--prepend-inner[data-v-216c16b2]{align-self:center!important;margin-right:8px!important;margin-top:0!important}.compact-date-field .v-input__icon--append[data-v-216c16b2]{align-self:center!important;margin-left:8px!important;margin-top:0!important}.compact-date-field .v-text-field__slot[data-v-216c16b2]{align-items:center!important;max-height:38px!important;min-height:38px!important}.compact-date-field input[data-v-216c16b2]{font-size:13px!important;height:38px!important;line-height:1.2!important;margin:0!important;padding:0!important}.compact-date-field .v-text-field--outlined .v-input__control .v-input__slot[data-v-216c16b2],.compact-date-field.v-text-field--outlined .v-input__control .v-input__slot[data-v-216c16b2]{background:#fafafa!important;border:2px solid #e5e7eb!important;border-radius:6px!important}.compact-date-field .v-text-field--outlined.v-input--is-focused .v-input__control .v-input__slot[data-v-216c16b2],.compact-date-field.v-input--is-focused .v-input__slot[data-v-216c16b2]{background:#fff!important;border-color:#667eea!important;box-shadow:0 0 0 2px rgba(102,126,234,.1)!important}.compact-date-field .v-text-field--outlined.v-input--is-disabled .v-input__control .v-input__slot[data-v-216c16b2],.compact-date-field.v-input--is-disabled .v-input__slot[data-v-216c16b2]{background-color:#f3f4f6!important;border-color:#d1d5db!important}.compact-date-field.error--text .v-text-field--outlined .v-input__control .v-input__slot[data-v-216c16b2]{border-color:#e74c3c!important}.compact-date-field .v-text-field--outlined fieldset[data-v-216c16b2]{border:none!important}.compact-date-field .v-text-field--outlined .v-text-field__details[data-v-216c16b2]{display:none!important}.v-menu__content[data-v-216c16b2]{border-radius:8px!important;box-shadow:0 8px 32px rgba(0,0,0,.12)!important;overflow:hidden!important}.v-date-picker[data-v-216c16b2]{box-shadow:none!important}.modal-header-right[data-v-216c16b2]{align-items:center;display:flex;gap:15px}.voucher-number[data-v-216c16b2]{color:#fff;font-size:14px;font-weight:600;opacity:.9}.modal-overlay[data-v-216c16b2]{align-items:center;animation:fadeIn-216c16b2 .3s ease-out;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.enhanced-dialog[data-v-216c16b2]{animation:slideIn-216c16b2 .3s ease-out;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);display:flex;flex-direction:column;height:95vh;margin:0 auto;max-height:95vh;max-width:95vw;overflow:hidden;width:95%}.modal-header[data-v-216c16b2]{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e9ecef;color:#fff;display:flex;flex-shrink:0;justify-content:space-between;padding:16px 24px}.modal-title-section[data-v-216c16b2]{align-items:center;display:flex;gap:12px}.modal-icon[data-v-216c16b2]{font-size:18px;opacity:.9}.modal-title[data-v-216c16b2]{font-size:18px;font-weight:600;margin:0}.close-btn[data-v-216c16b2]{background:none;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;opacity:.8;padding:6px;transition:opacity .2s}.close-btn[data-v-216c16b2]:hover{background:hsla(0,0%,100%,.1);opacity:1}.close-btn[data-v-216c16b2]:disabled{cursor:not-allowed;opacity:.5}.modal-body[data-v-216c16b2]{flex:1;min-height:0;overflow-y:auto;padding:16px 24px}.form-loading[data-v-216c16b2]{align-items:center;color:#666;display:flex;justify-content:center;padding:40px}.spinner-small[data-v-216c16b2]{animation:spin-216c16b2 1s linear infinite;border:2px solid #f3f3f3;border-radius:50%;border-top-color:#3498db;height:20px;margin-right:10px;width:20px}@keyframes spin-216c16b2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.form-grid.compact[data-v-216c16b2]{grid-gap:12px;align-content:start;display:grid;gap:12px;grid-template-columns:repeat(4,1fr);height:100%}.form-group[data-v-216c16b2]{margin-bottom:0}.form-group.full-width[data-v-216c16b2]{grid-column:1/-1}.form-label[data-v-216c16b2]{align-items:center;color:#374151;display:flex;font-size:12px;font-weight:600;gap:6px;margin-bottom:4px}.form-label.required[data-v-216c16b2]:after{color:#e74c3c;content:\"*\";margin-left:2px}.form-label i[data-v-216c16b2]{color:#6b7280;font-size:10px}.form-control.compact[data-v-216c16b2]{background:#fafafa;border:2px solid #e5e7eb;border-radius:6px;box-sizing:border-box;font-size:13px;padding:8px 12px;transition:all .2s ease;width:100%}.form-control.compact[data-v-216c16b2]:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,.1);outline:none}.form-control.compact[data-v-216c16b2]:disabled{background-color:#f3f4f6;border-color:#d1d5db;color:#6b7280;cursor:not-allowed}.form-control.is-invalid[data-v-216c16b2]{border-color:#e74c3c}.invalid-feedback[data-v-216c16b2]{color:#e74c3c;display:block;font-size:10px;margin-top:2px}.input-group.compact[data-v-216c16b2]{border-radius:6px;display:flex;overflow:hidden}.input-group.compact .form-control[data-v-216c16b2]{border-radius:0;border-right:none}.input-group-append[data-v-216c16b2]{display:flex}.input-group-text.compact[data-v-216c16b2]{background:#f8f9fa;border:2px solid #e5e7eb;border-left:none;color:#6b7280;font-size:12px;font-weight:600;padding:8px 12px}.custom-select-wrapper[data-v-216c16b2]{position:relative}.custom-select.compact[data-v-216c16b2]{appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:30px}.select-icon[data-v-216c16b2]{color:#6b7280;font-size:10px;pointer-events:none;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.link-advance-options.compact[data-v-216c16b2]{display:flex;gap:12px;margin-top:4px}.radio-option[data-v-216c16b2]{align-items:center;color:#374151;cursor:pointer;display:flex;font-size:12px;gap:4px}.radio-option input[type=radio][data-v-216c16b2]{margin:0;transform:scale(.8)}.radio-label[data-v-216c16b2]{font-weight:500}.compact-advance[data-v-216c16b2]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border:1px solid #e2e8f0;border-radius:8px;margin:8px 0;padding:12px}.advance-toggle[data-v-216c16b2]{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.advance-selection.compact[data-v-216c16b2]{margin-top:8px}.advance-selection-container.compact[data-v-216c16b2]{align-items:flex-start;display:flex;gap:8px;margin-bottom:8px}.flex-1[data-v-216c16b2]{flex:1}.btn.compact[data-v-216c16b2]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:12px;font-weight:600;gap:4px;padding:6px 12px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn-sm.compact[data-v-216c16b2]{font-size:11px;padding:4px 8px}.advance-info.compact[data-v-216c16b2]{background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;margin-top:8px;padding:8px}.advance-summary[data-v-216c16b2]{align-items:center;display:flex;flex-wrap:wrap;font-size:11px;gap:8px}.advance-id[data-v-216c16b2]{background:#e2e8f0;color:#1e293b;font-family:\"Courier New\",monospace}.advance-amount[data-v-216c16b2],.advance-id[data-v-216c16b2]{border-radius:4px;font-size:10px;font-weight:700;padding:2px 6px}.advance-amount[data-v-216c16b2]{background:#d1fae5;color:#059669}.advance-purpose[data-v-216c16b2]{color:#6b7280;font-size:10px;font-style:italic}.status-badge[data-v-216c16b2]{border-radius:8px;font-size:9px;font-weight:600;letter-spacing:.3px;padding:2px 6px;text-transform:uppercase}.status-badge.pending[data-v-216c16b2]{background:#fef3c7;color:#92400e}.status-badge.approved[data-v-216c16b2]{background:#d1fae5;color:#065f46}.status-badge.settled[data-v-216c16b2]{background:#dbeafe;color:#1e40af}.field-hint[data-v-216c16b2]{align-items:center;display:flex;font-size:10px;gap:4px;justify-content:space-between;margin-top:4px}.field-hint.error[data-v-216c16b2]{color:#e74c3c}.field-hint.warning[data-v-216c16b2]{color:#f39c12}.field-hint.info[data-v-216c16b2]{color:#0ea5e9}.text-counter[data-v-216c16b2]{color:#9ca3af;font-size:9px;margin-left:auto}.form-errors.compact[data-v-216c16b2]{background:#fef2f2;border:1px solid #fecaca;border-radius:6px;margin-top:12px;padding:12px}.form-errors.compact h6[data-v-216c16b2]{align-items:center;color:#dc2626;display:flex;font-size:12px;gap:4px;margin:0 0 6px}.form-errors.compact ul[data-v-216c16b2]{color:#dc2626;font-size:11px;margin:0;padding-left:16px}.enhanced-footer.compact[data-v-216c16b2],.modal-footer.compact[data-v-216c16b2]{background:#f8f9fa;border-top:1px solid #e9ecef;display:flex;flex-shrink:0;gap:8px;justify-content:flex-end;padding:12px 24px}.btn[data-v-216c16b2]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:inline-flex;font-size:13px;font-weight:600;gap:6px;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease}.btn[data-v-216c16b2]:hover:not(:disabled){box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-1px)}.btn[data-v-216c16b2]:active:not(:disabled){transform:translateY(0)}.btn-primary[data-v-216c16b2]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.btn-secondary[data-v-216c16b2]{background:#6c757d;color:#fff}.btn-outline-primary[data-v-216c16b2]{background:transparent;border:2px solid #667eea;color:#667eea}.btn-outline-primary[data-v-216c16b2]:hover{background:#667eea;color:#fff}.btn[data-v-216c16b2]:disabled{box-shadow:none!important;cursor:not-allowed;opacity:.6;transform:none!important}.fa-spin[data-v-216c16b2]{animation:spin-216c16b2 1s linear infinite}.advance-filters.compact[data-v-216c16b2]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:12px;padding:12px}.filter-row.compact[data-v-216c16b2]{grid-gap:12px;align-items:center;display:grid;gap:12px;grid-template-columns:1fr auto}.advances-list.compact[data-v-216c16b2]{background:#fff;border:1px solid #e2e8f0;border-radius:8px;max-height:300px;overflow-y:auto}.advance-items.compact[data-v-216c16b2]{display:flex;flex-direction:column;padding:8px}.advance-item.compact[data-v-216c16b2]{background:#fff;border:1px solid #e5e7eb;border-radius:6px;cursor:pointer;margin-bottom:8px;padding:12px;transition:all .2s ease}.advance-item.compact[data-v-216c16b2]:hover{background:#f0f9ff;border-color:#60a5fa}.advance-item.compact.selected[data-v-216c16b2]{background:#dbeafe;border-color:#3b82f6}.advance-item-content.compact[data-v-216c16b2]{display:flex;flex-direction:column;gap:8px}.advance-item-header.compact[data-v-216c16b2]{align-items:center;display:flex;justify-content:space-between}.advance-item-body.compact[data-v-216c16b2]{grid-gap:8px;display:grid;font-size:11px;gap:8px;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.empty-state[data-v-216c16b2],.loading-state[data-v-216c16b2]{align-items:center;color:#666;display:flex;flex-direction:column;justify-content:center;padding:40px}.empty-state i[data-v-216c16b2]{color:#ccc;font-size:48px;margin-bottom:16px}@media (max-width:1200px){.form-grid.compact[data-v-216c16b2]{grid-template-columns:repeat(3,1fr)}}@media (max-width:768px){.enhanced-dialog[data-v-216c16b2]{height:98vh;margin:1vh auto;max-height:98vh;width:98%}.form-grid.compact[data-v-216c16b2]{gap:8px;grid-template-columns:repeat(2,1fr)}.modal-body[data-v-216c16b2],.modal-header[data-v-216c16b2]{padding:12px 16px}.enhanced-footer.compact[data-v-216c16b2],.modal-footer.compact[data-v-216c16b2]{flex-direction:column-reverse;padding:12px 16px}.enhanced-footer.compact .btn[data-v-216c16b2],.modal-footer.compact .btn[data-v-216c16b2]{justify-content:center;width:100%}.compact-date-field .v-input__slot[data-v-216c16b2]{padding:0 8px!important}}@media (max-width:480px){.form-grid.compact[data-v-216c16b2]{grid-template-columns:1fr}.advance-toggle[data-v-216c16b2]{align-items:flex-start;gap:8px}.advance-selection-container.compact[data-v-216c16b2],.advance-toggle[data-v-216c16b2]{flex-direction:column}}@keyframes fadeIn-216c16b2{0%{opacity:0}to{opacity:1}}@keyframes slideIn-216c16b2{0%{opacity:0;transform:translateY(-50px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js + 16 modules
var VDatePicker = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=template&id=216c16b2&scoped=true&




var settlementDialogvue_type_template_id_216c16b2_scoped_true_render = function render() {
  var _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.visible ? _vm._ssrNode("<div class=\"modal-overlay\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog enhanced-dialog\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-216c16b2><div class=\"modal-title-section\" data-v-216c16b2><i class=\"fas fa-money-bill-wave modal-icon\" data-v-216c16b2></i> <h5 class=\"modal-title\" data-v-216c16b2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ລົງລາຍຮັບ ການຊຳລະ') + "\n          ") + "</h5></div> <div class=\"modal-header-right\" data-v-216c16b2><span class=\"voucher-number\" data-v-216c16b2>" + _vm._ssrEscape("\n            ເລກທີ:\n            " + _vm._s(_vm.formData.id ? _vm.formatVoucherNumber(_vm.formData.id) : '000000') + "\n          ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " class=\"close-btn\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i></button></div></div> "), _vm._ssrNode("<form data-v-216c16b2>", "</form>", [_vm._ssrNode("<div class=\"modal-body\" data-v-216c16b2>", "</div>", [_vm.loading || _vm.isSubmitting ? _vm._ssrNode("<div class=\"form-loading\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"spinner-small\" data-v-216c16b2></div> <p data-v-216c16b2>" + _vm._ssrEscape("\n              " + _vm._s(_vm.isSubmitting ? 'ກຳລັງບັນທຶກຂໍ້ມູນ...' : 'ກຳລັງໂຫຼດຂໍ້ມູນ...') + "\n            ") + "</p>")], 2) : _vm._ssrNode("<div class=\"form-grid compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-calendar\" data-v-216c16b2></i>\n                ວັນທີລົງຊຳລະ\n              </label> "), _c(VMenu["a" /* default */], {
    ref: "bookingDateMenu",
    attrs: {
      "close-on-content-click": false,
      "transition": "scale-transition",
      "offset-y": "",
      "max-width": "290px",
      "min-width": "auto",
      "disabled": _vm.isFormDisabled
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on,
        attrs
      }) {
        return [_c(VTextField["a" /* default */], _vm._g(_vm._b({
          class: {
            'compact-date-field': true
          },
          attrs: {
            "outlined": "",
            "dense": "",
            "clearable": "",
            "hide-details": "",
            "prepend-inner-icon": "mdi-calendar",
            "error": !!_vm.errors.bookingDate,
            "error-messages": _vm.errors.bookingDate,
            "disabled": _vm.isFormDisabled
          },
          on: {
            "click:clear": _vm.clearBookingDate
          },
          model: {
            value: _vm.formattedBookingDate,
            callback: function ($$v) {
              _vm.formattedBookingDate = $$v;
            },
            expression: "formattedBookingDate"
          }
        }, 'v-text-field', attrs, false), on))];
      }
    }], null, false, 2723088033),
    model: {
      value: _vm.bookingDateMenu,
      callback: function ($$v) {
        _vm.bookingDateMenu = $$v;
      },
      expression: "bookingDateMenu"
    }
  }, [_vm._v(" "), _c(VDatePicker["a" /* default */], {
    attrs: {
      "no-title": "",
      "max": _vm.today,
      "disabled": _vm.isFormDisabled
    },
    on: {
      "input": _vm.setBookingDate
    },
    model: {
      value: _vm.pickerBookingDate,
      callback: function ($$v) {
        _vm.pickerBookingDate = $$v;
      },
      expression: "pickerBookingDate"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-credit-card\" data-v-216c16b2></i>\n                ວິທີການຊຳລະ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.method,
      expression: "formData.method"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.method
    },
    attrs: {
      "disabled": _vm.isFormDisabled,
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleMethodChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກວິທີການຊຳລະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cash"
    }
  }, [_vm._v("ເງິນສົດ (Cash)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cheque"
    }
  }, [_vm._v("ເຊັກ (Cheque)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v("\n                    ໂອນທະນາຄານ (Bank Transfer)\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "deduction"
    }
  }, [_vm._v("ຫັກລົບ (Deduction)")])]), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.method ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.method) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-hashtag\" data-v-216c16b2></i>\n                ອີງຕາມ\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"ອີງຕາມ ການຕົກລົງ ເຫັນດີ...\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.formData.externalRef) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.externalRef
  }) + " data-v-216c16b2> " + (_vm.errors.externalRef ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.externalRef) + "\n              ") + "</div>" : "<!---->") + "</div> <div class=\"form-group\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-hashtag\" data-v-216c16b2></i>\n                ເລກອ້າງອິງພາຍນອກ\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"REF-001, TXN-123...\" maxlength=\"50\"" + _vm._ssrAttr("value", _vm.formData.externalRefNo) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.externalRefNo
  }) + " data-v-216c16b2> " + (_vm.errors.externalRefNo ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.externalRefNo) + "\n              ") + "</div>" : "<!---->") + "</div> " + (_vm.formData.method === 'cheque' ? "<div class=\"form-group\" data-v-216c16b2><label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-money-check\" data-v-216c16b2></i>\n                ເລກເຊັກ\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"ໃສ່ເລກເຊັກ...\" maxlength=\"20\"" + _vm._ssrAttr("required", _vm.formData.method === 'cheque') + _vm._ssrAttr("value", _vm.formData.chequeNo) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.chequeNo
  }) + " data-v-216c16b2> " + (_vm.errors.chequeNo ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.chequeNo) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-coins\" data-v-216c16b2></i>\n                ສະກຸນເງິນ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.currencyId,
      expression: "formData.currencyId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.currencyId
    },
    attrs: {
      "disabled": _vm.isFormDisabled || _vm.isLinkedToAdvance,
      "required": ""
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "currencyId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedCurrency]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກສະກຸນເງິນ")]), _vm._v(" "), _vm._l(_vm.currencies, function (currency) {
    return _c('option', {
      key: currency.id,
      domProps: {
        "value": currency.id
      }
    }, [_vm._v("\n                    " + _vm._s(currency.code || currency.currencyCode) + " -\n                    " + _vm._s(currency.name || currency.currencyName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.currencyId ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.currencyId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"form-group\" data-v-216c16b2><label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-dollar-sign\" data-v-216c16b2></i>\n                ຈຳນວນເງິນ\n              </label> <div class=\"input-group compact\" data-v-216c16b2><input type=\"number\" step=\"0.01\" min=\"0\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"0.00\" required=\"required\"" + _vm._ssrAttr("value", _vm.formData.amount) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.amount
  }) + " data-v-216c16b2> <div class=\"input-group-append\" data-v-216c16b2><span class=\"input-group-text compact\" data-v-216c16b2>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.selectedCurrencyCode) + "\n                  ") + "</span></div></div> " + (_vm.errors.amount ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.amount) + "\n              ") + "</div>" : "<!---->") + "</div> " + (_vm.formData.method === 'cash' || _vm.formData.method === 'cheque' ? "<div class=\"form-group\" data-v-216c16b2><label" + _vm._ssrClass("form-label", {
    required: _vm.formData.method === 'cash' || _vm.formData.method === 'cheque'
  }) + " data-v-216c16b2><i class=\"fas fa-user-circle\" data-v-216c16b2></i>\n                ຈາກທ່ານ (ຜູ້ຈ່າຍ)\n              </label> <input type=\"text\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"ຊື່ຜູ້ຈ່າຍເງິນ...\" maxlength=\"100\"" + _vm._ssrAttr("required", _vm.formData.method === 'cash' || _vm.formData.method === 'cheque') + _vm._ssrAttr("value", _vm.formData.fromPersonName) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.fromPersonName
  }) + " data-v-216c16b2> " + (_vm.errors.fromPersonName ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.fromPersonName) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-building\" data-v-216c16b2></i>\n                ສັງກັດຢູ່ (ກະຊວງ)\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ministryId,
      expression: "formData.ministryId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.ministryId
    },
    attrs: {
      "disabled": _vm.isFormDisabled
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "ministryId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedMinistry]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກກະຊວງ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.ministries, function (ministry) {
    return _c('option', {
      key: ministry.id,
      domProps: {
        "value": ministry.id
      }
    }, [_vm._v("\n                    " + _vm._s(ministry.ministryCode) + " - " + _vm._s(ministry.ministryName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm.formData.method === 'bank_transfer' ? _vm._ssrNode("<div class=\"form-group full-width\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-university\" data-v-216c16b2></i>\n                ບັນຊີທະນາຄານ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.bankAccountId,
      expression: "formData.bankAccountId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.bankAccountId
    },
    attrs: {
      "disabled": _vm.isFormDisabled,
      "required": _vm.formData.method === 'bank_transfer'
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "bankAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedBankAccount]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີທະນາຄານ")]), _vm._v(" "), _vm._l(_vm.filteredBankAccounts, function (account) {
    return _c('option', {
      key: account.id,
      domProps: {
        "value": account.id
      }
    }, [_vm._v("\n                    " + _vm._s(account.bankName) + " - " + _vm._s(account.accountNumber) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.bankAccountId ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.bankAccountId) + "\n              ") + "</div>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" <div class=\"form-group\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-exchange-alt\" data-v-216c16b2></i>\n                ອັດຕາແລກປ່ຽນ\n              </label> <div class=\"input-group compact\" data-v-216c16b2><input type=\"number\" step=\"0.0001\" min=\"0\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " placeholder=\"1.0000\"" + _vm._ssrAttr("value", _vm.formData.exchangeRate) + _vm._ssrClass("form-control compact", {
    'is-invalid': _vm.errors.exchangeRate
  }) + " data-v-216c16b2> <div class=\"input-group-append\" data-v-216c16b2><span class=\"input-group-text compact\" data-v-216c16b2><i class=\"fas fa-calculator\" data-v-216c16b2></i></span></div></div> " + (_vm.errors.exchangeRate ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.exchangeRate) + "\n              ") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-chart-line\" data-v-216c16b2></i>\n                ບັນຊີລວມ\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.chartAccountId,
      expression: "formData.chartAccountId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.chartAccountId
    },
    attrs: {
      "disabled": _vm.isFormDisabled
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "chartAccountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກບັນຊີລວມ (ທາງເລືອກ)")]), _vm._v(" "), _vm._l(_vm.chartAccounts, function (chartAccount) {
    return _c('option', {
      key: chartAccount.id,
      domProps: {
        "value": chartAccount.id
      }
    }, [_vm._v("\n                    " + _vm._s(chartAccount.accountNumber) + " -\n                    " + _vm._s(chartAccount.accountName) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<label class=\"form-label required\" data-v-216c16b2><i class=\"fas fa-user\" data-v-216c16b2></i>\n                ຜູ້ລົງບັນຊີ (ຜູ້ຮັບ)\n              </label> "), _vm._ssrNode("<div class=\"custom-select-wrapper\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.userId,
      expression: "formData.userId"
    }],
    staticClass: "form-control custom-select compact",
    class: {
      'is-invalid': _vm.errors.userId
    },
    attrs: {
      "disabled": true,
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "userId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກຜູ້ລົງບັນຊີ")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c('option', {
      key: user.id,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n                    " + _vm._s(user.cus_name || user.name || user.username) + "\n                  ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" " + (_vm.errors.userId ? "<div class=\"invalid-feedback\" data-v-216c16b2>" + _vm._ssrEscape("\n                " + _vm._s(_vm.errors.userId) + "\n              ") + "</div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group full-width compact-advance\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"advance-toggle\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-link\" data-v-216c16b2></i>\n                  ອ້າງອິງລາຍຈ່າຍລ່ວງໜ້າ\n                </label> <div class=\"link-advance-options compact\" data-v-216c16b2><label class=\"radio-option\" data-v-216c16b2><input type=\"radio\" value=\"false\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "false")) + " data-v-216c16b2> <span class=\"radio-label\" data-v-216c16b2>ບໍ່ເຊື່ອມຕໍ່</span></label> <label class=\"radio-option\" data-v-216c16b2><input type=\"radio\" value=\"true\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + _vm._ssrAttr("checked", _vm._q(_vm.formData.linkToAdvance, "true")) + " data-v-216c16b2> <span class=\"radio-label\" data-v-216c16b2>ເຊື່ອມຕໍ່</span></label></div></div> "), _vm.formData.linkToAdvance === 'true' ? _vm._ssrNode("<div class=\"advance-selection compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"advance-selection-container compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"custom-select-wrapper flex-1\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.moneyAdvanceId,
      expression: "formData.moneyAdvanceId"
    }],
    staticClass: "form-control custom-select compact",
    attrs: {
      "disabled": _vm.isFormDisabled
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "moneyAdvanceId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateSelectedAdvance]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ເລືອກລາຍຈ່າຍລ່ວງໜ້າ")]), _vm._v(" "), _vm._l(_vm.availableAdvances, function (advance) {
    var _advance$ministry;
    return _c('option', {
      key: advance.id,
      domProps: {
        "value": advance.id
      }
    }, [_vm._v("\n                        #" + _vm._s(advance.id) + " - #" + _vm._s(advance.receiveName) + " - #" + _vm._s(((_advance$ministry = advance.ministry) === null || _advance$ministry === void 0 ? void 0 : _advance$ministry.ministryName) || '') + "\n                        -\n                        " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                      ")]);
  })], 2), _vm._ssrNode(" <div class=\"select-icon\" data-v-216c16b2><i class=\"fas fa-chevron-down\" data-v-216c16b2></i></div>")], 2), _vm._ssrNode(" <button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled || _vm.loadingAdvances) + " class=\"btn btn-outline-primary btn-sm compact\" data-v-216c16b2>" + (_vm.loadingAdvances ? "<i class=\"fas fa-spinner fa-spin\" data-v-216c16b2></i>" : "<i class=\"fas fa-search\" data-v-216c16b2></i>") + "</button>")], 2), _vm._ssrNode(" " + (_vm.selectedAdvance ? "<div class=\"advance-info compact\" data-v-216c16b2><div class=\"advance-summary\" data-v-216c16b2><span class=\"advance-id\" data-v-216c16b2>" + _vm._ssrEscape("#" + _vm._s(_vm.selectedAdvance.id)) + "</span> <span class=\"advance-amount\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(_vm.formatCurrency(_vm.selectedAdvance.amount, _vm.selectedAdvance.currency.code))) + "</span> <span class=\"advance-purpose\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(_vm.selectedAdvance.purpose || 'No purpose')) + "</span> <span" + _vm._ssrClass(null, ['status-badge', _vm.selectedAdvance.status]) + " data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatStatus(_vm.selectedAdvance.status)) + "\n                    ") + "</span></div></div>" : "<!---->"))], 2) : _vm._e()], 2), _vm._ssrNode(" <div class=\"form-group full-width\" data-v-216c16b2><label class=\"form-label\" data-v-216c16b2><i class=\"fas fa-sticky-note\" data-v-216c16b2></i>\n                ເນື້ອໃນລາຍຮັບ (ໝາຍເຫດ)\n              </label> <textarea" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " rows=\"3\" placeholder=\"ເນື້ອໃນລາຍຮັບ / ລາຍລະອຽດເພີ່ມເຕີມ...\" maxlength=\"500\" class=\"form-control compact\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(_vm.formData.notes)) + "</textarea> <div class=\"field-hint\" data-v-216c16b2><span class=\"text-counter\" data-v-216c16b2>" + _vm._ssrEscape(_vm._s(((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) || 0) + "/500") + "</span></div></div>")], 2), _vm._ssrNode(" " + (_vm.formErrors.length > 0 ? "<div class=\"form-errors compact\" data-v-216c16b2><h6 data-v-216c16b2><i class=\"fas fa-exclamation-circle\" data-v-216c16b2></i>\n              ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ:\n            </h6> <ul data-v-216c16b2>" + _vm._ssrList(_vm.formErrors, function (error) {
    return "<li data-v-216c16b2>" + _vm._ssrEscape(_vm._s(error)) + "</li>";
  }) + "</ul></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"modal-footer enhanced-footer compact\" data-v-216c16b2><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled) + " class=\"btn btn-secondary compact\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i>\n            ຍົກເລີກ\n          </button> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled || !_vm.isFormValid) + " class=\"btn btn-primary compact\" data-v-216c16b2>" + (_vm.isSubmitting ? "<i class=\"fas fa-spinner fa-spin\" data-v-216c16b2></i>" : "<i" + _vm._ssrClass("fas", _vm.isEditMode ? 'fa-save' : 'fa-plus') + " data-v-216c16b2></i>") + _vm._ssrEscape("\n            " + _vm._s(_vm.isSubmitting ? 'ກຳລັງບັນທຶກ...' : _vm.isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ') + "\n          ") + "</button> <button type=\"button\" title=\"Save & Print\"" + _vm._ssrAttr("disabled", _vm.isFormDisabled || !_vm.isFormValid) + " class=\"btn btn-sm btn-outline-secondary\" data-v-216c16b2><i class=\"fas fa-print\" data-v-216c16b2></i>\n            Save &amp; Print\n          </button></div>")], 2)], 2), _vm._ssrNode(" "), _vm.showAdvanceBrowser ? _vm._ssrNode("<div class=\"modal-overlay browser-overlay\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog advance-browser-dialog\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"modal-header\" data-v-216c16b2><div class=\"modal-title-section\" data-v-216c16b2><i class=\"fas fa-search modal-icon\" data-v-216c16b2></i> <h5 class=\"modal-title\" data-v-216c16b2>ເລືອກລາຍຈ່າຍລ່ວງໜ້າ</h5></div> <button class=\"close-btn\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i></button></div> "), _vm._ssrNode("<div class=\"modal-body\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"advance-filters compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"filter-row compact\" data-v-216c16b2>", "</div>", [_vm._ssrNode("<div class=\"filter-group\" data-v-216c16b2><input type=\"text\" placeholder=\"ຄົ້ນຫາຕາມຈຸດປະສົງ, ໝາຍເຫດ...\"" + _vm._ssrAttr("value", _vm.advanceSearch.query) + " class=\"form-control compact\" data-v-216c16b2></div> "), _vm._ssrNode("<div class=\"filter-group\" data-v-216c16b2>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.advanceSearch.status,
      expression: "advanceSearch.status"
    }],
    staticClass: "form-control compact",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.advanceSearch, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.filterAdvances]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ທຸກສະຖານະ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("ລໍຖ້າ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "approved"
    }
  }, [_vm._v("ອະນຸມັດ")])])])], 2)]), _vm._ssrNode(" <div class=\"advances-list compact\" data-v-216c16b2>" + (_vm.loadingAdvances ? "<div class=\"loading-state\" data-v-216c16b2><div class=\"spinner-small\" data-v-216c16b2></div> <p data-v-216c16b2>ກຳລັງໂຫຼດ...</p></div>" : _vm.filteredAdvances.length === 0 ? "<div class=\"empty-state\" data-v-216c16b2><i class=\"fas fa-inbox\" data-v-216c16b2></i> <p data-v-216c16b2>ບໍ່ພົບລາຍຈ່າຍລ່ວງໜ້າ</p></div>" : "<div class=\"advance-items compact\" data-v-216c16b2>" + _vm._ssrList(_vm.filteredAdvances, function (advance) {
    var _vm$selectedAdvanceFo;
    return "<div" + _vm._ssrClass("advance-item compact", {
      selected: ((_vm$selectedAdvanceFo = _vm.selectedAdvanceForBrowser) === null || _vm$selectedAdvanceFo === void 0 ? void 0 : _vm$selectedAdvanceFo.id) === advance.id
    }) + " data-v-216c16b2><div class=\"advance-item-content compact\" data-v-216c16b2><div class=\"advance-item-header compact\" data-v-216c16b2><span class=\"advance-id\" data-v-216c16b2>" + _vm._ssrEscape("#" + _vm._s(advance.id)) + "</span> <span" + _vm._ssrClass(null, ['status-badge', advance.status]) + " data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatStatus(advance.status)) + "\n                    ") + "</span></div> <div class=\"advance-item-body compact\" data-v-216c16b2><div class=\"advance-amount\" data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatCurrency(advance.amount, advance.currency.code)) + "\n                    ") + "</div> <div class=\"advance-date\" data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.formatDate(advance.bookingDate)) + "\n                    ") + "</div> " + (advance.purpose ? "<div class=\"advance-purpose\" data-v-216c16b2>" + _vm._ssrEscape("\n                      " + _vm._s(advance.purpose) + "\n                    ") + "</div>" : "<!---->") + "</div></div></div>";
  }) + "</div>") + "</div>")], 2), _vm._ssrNode(" <div class=\"modal-footer compact\" data-v-216c16b2><button type=\"button\" class=\"btn btn-secondary compact\" data-v-216c16b2><i class=\"fas fa-times\" data-v-216c16b2></i>\n            ຍົກເລີກ\n          </button> <button type=\"button\"" + _vm._ssrAttr("disabled", !_vm.selectedAdvanceForBrowser) + " class=\"btn btn-primary compact\" data-v-216c16b2><i class=\"fas fa-check\" data-v-216c16b2></i>\n            ເລືອກ\n          </button></div>")], 2)]) : _vm._e()], 2) : _vm._e(), _vm._ssrNode(" "), _vm.showPrintVoucher && _vm.settlementDetail ? _c('VoucherPrintComponent', {
    key: _vm.settlementDetail.id,
    attrs: {
      "voucher-data": _vm.settlementDetail
    },
    on: {
      "close": _vm.closePrintVoucher
    }
  }) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=template&id=216c16b2&scoped=true&

// EXTERNAL MODULE: ./components/MA/settlementVoucher/index.vue + 4 modules
var settlementVoucher = __webpack_require__(498);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var settlementDialogvue_type_script_lang_js_ = ({
  name: 'SettlementDialog',
  components: {
    VoucherPrintComponent: settlementVoucher["default"]
  },
  props: {
    paymentMethod: {
      type: String,
      default: 'cash'
    },
    visible: {
      type: Boolean,
      default: false
    },
    settlement: {
      type: Object,
      default: null
    },
    outstandingInvoices: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    bankAccounts: {
      type: Array,
      default: () => []
    },
    ministries: {
      type: Array,
      default: () => []
    },
    chartAccounts: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  emits: ['close', 'save', 'created', 'updated'],
  data() {
    return {
      bookingDateMenu: false,
      pickerBookingDate: null,
      // for v-date-picker (YYYY-MM-DD format)
      formattedBookingDate: null,
      // for display (DD/MM/YYYY format)
      showPrintVoucher: false,
      settlementDetail: null,
      loading: false,
      isSubmitting: false,
      // New flag for submission state
      justCreated: false,
      // NEW: Flag to prevent form reset after creation
      loadingAdvances: false,
      showAdvanceBrowser: false,
      selectedAdvanceForBrowser: null,
      availableAdvances: [],
      filteredAdvances: [],
      advanceSearch: {
        query: '',
        status: ''
      },
      formData: {
        bookingDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: ''
      },
      errors: {},
      formErrors: []
    };
  },
  computed: {
    isEditMode() {
      return this.settlement && this.settlement.id || this.formData.id && this.justCreated;
    },
    isLinkedToAdvance() {
      return this.formData.linkToAdvance === 'true' && this.formData.moneyAdvanceId;
    },
    isBaseCurrency() {
      return this.selectedCurrencyCode === 'LAK';
    },
    showEquivalentAmount() {
      return !this.isBaseCurrency && this.formData.amount > 0 && this.formData.exchangeRate > 0;
    },
    equivalentAmountLAK() {
      if (!this.showEquivalentAmount) return 0;
      return this.formData.amount * this.formData.exchangeRate;
    },
    selectedInvoicesTotal() {
      return this.outstandingInvoices.filter(invoice => this.formData.selectedInvoices.includes(invoice.id)).reduce((total, invoice) => total + (invoice.outstandingAmount || 0), 0);
    },
    selectedCurrencyCode() {
      if (!this.formData.currencyId) return 'LAK';
      const currency = this.currencies.find(c => c.id == this.formData.currencyId);
      if (!this._isInitializing) this.formData.exchangeRate = (currency === null || currency === void 0 ? void 0 : currency.rate) || 1;
      return currency ? currency.code || currency.currencyCode : 'LAK';
    },
    selectedBankAccount() {
      if (!this.formData.bankAccountId) return null;
      return this.bankAccounts.find(account => account.id == this.formData.bankAccountId);
    },
    selectedMinistry() {
      if (!this.formData.ministryId) return null;
      return this.ministries.find(ministry => ministry.id == this.formData.ministryId);
    },
    selectedCurrency() {
      if (!this.formData.currencyId) return null;
      return this.currencies.find(currency => currency.id == this.formData.currencyId);
    },
    selectedAdvance() {
      if (!this.formData.moneyAdvanceId) return null;
      return this.availableAdvances.find(advance => advance.id == this.formData.moneyAdvanceId);
    },
    user() {
      return this.$auth.user || '';
    },
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts.filter(account => account.isActive !== false);
      }
      const currencyCode = this.selectedCurrency.code || this.selectedCurrency.currencyCode;
      const filtered = this.bankAccounts.filter(account => (account.currency === currencyCode || !account.currency) && account.isActive !== false);
      return filtered.length > 0 ? filtered : this.bankAccounts.filter(account => account.isActive !== false);
    },
    today() {
      return new Date().toISOString().split('T')[0];
    },
    isFormValid() {
      const validations = {
        hasAmount: !!(this.formData.amount && parseFloat(this.formData.amount) > 0),
        hasCurrency: !!this.formData.currencyId,
        hasUser: !!this.formData.userId,
        hasSettlementDate: !!this.formData.bookingDate,
        hasMethod: !!this.formData.method,
        hasUsers: this.users.length > 0,
        hasCurrencies: this.currencies.length > 0,
        bankAccountValid: this.formData.method !== 'bank_transfer' || !!this.formData.bankAccountId,
        exchangeRateValid: !this.formData.exchangeRate || this.formData.exchangeRate > 0,
        chequeNoValid: this.formData.method !== 'cheque' || !!this.formData.chequeNo,
        fromPersonNameValid: this.formData.method !== 'cash' && this.formData.method !== 'cheque' || !!this.formData.fromPersonName
      };
      return Object.values(validations).every(v => v === true);
    },
    isFormDisabled() {
      return this.loading || this.isSubmitting;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.justCreated = false; // Reset flag when dialog opens
        this.initializeForm();
        this.loadMoneyAdvances();
      } else {
        this.resetForm();
      }
    },
    'formData.currencyId'(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (!this._isInitializing || !this.isEditMode) {
          this.handleCurrencyChange();
        }
      }
    },
    settlement: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal && !this.isSubmitting && !this.justCreated) {
          this.$nextTick(() => {
            this.initializeForm();
          });
        }
      },
      deep: true,
      immediate: false
    },
    'formData.moneyAdvanceId'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    'formData.linkToAdvance'(newVal, oldVal) {
      if (newVal === 'false' && oldVal === 'true') {
        this.clearAdvanceSelection();
      }
    },
    availableAdvances: {
      handler(newAdvances) {
        if (newAdvances.length > 0 && this.formData.moneyAdvanceId && this.formData.linkToAdvance === 'true') {
          this.$nextTick(() => {
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          });
        }
      },
      immediate: false
    }
  },
  mounted() {
    // Debug carousel references
    console.log('Refs available:', Object.keys(this.$refs));
    this.checkForCarouselCode();
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto';
    this.isSubmitting = false;
    this.loading = false;
    this.cleanupEventListeners();
  },
  methods: {
    // Date formatting method
    formatDateForDisplay(date) {
      if (!date) return null;
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    // Set booking date from picker
    setBookingDate(val) {
      this.pickerBookingDate = val;
      this.formData.bookingDate = val; // Keep YYYY-MM-DD format for backend
      this.formattedBookingDate = this.formatDateForDisplay(val);
      this.bookingDateMenu = false;

      // Clear any existing error
      this.clearFieldError('bookingDate');
    },
    // Clear booking date
    clearBookingDate() {
      this.pickerBookingDate = null;
      this.formData.bookingDate = '';
      this.formattedBookingDate = null;
      this.clearFieldError('bookingDate');
    },
    // Debug methods for carousel issue
    checkForCarouselCode() {
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      const carouselMethods = methods.filter(method => method.toLowerCase().includes('carousel') || method.toLowerCase().includes('next') || method.toLowerCase().includes('prev'));
      if (carouselMethods.length > 0) {
        console.warn('Found potential carousel-related methods:', carouselMethods);
      }
    },
    cleanupEventListeners() {
      try {
        document.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('resize', this.handleResize);
      } catch (error) {
        console.warn('Error cleaning up event listeners:', error);
      }
    },
    // Override potential carousel methods
    nextSlide() {
      console.warn('nextSlide called but no carousel exists');
    },
    prevSlide() {
      console.warn('prevSlide called but no carousel exists');
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0');
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message);
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success'
        });
      } else {
        alert(`${type.toUpperCase()}: ${message}`);
      }
    },
    async fetchSettlementByid() {
      if (!this.formData.id) return this.showToast('ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'error');
      this.loading = true;
      try {
        const {
          data
        } = await this.$axios.get(`/api/settlements/${this.formData.id}`);
        this.settlementDetail = data.data;
        console.info(`Settlement detail ${JSON.stringify(this.settlementDetail)}`);
      } catch (error) {
        this.showToast('Error fetching settlement details', 'error');
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    closePrintVoucher() {
      this.showPrintVoucher = false;
      setTimeout(() => {
        this.settlementDetail = null;
      }, 100);
    },
    async printSettlement() {
      await this.saveSettlement();
      await this.fetchSettlementByid();
      this.showPrintVoucher = true;
    },
    initializeForm() {
      console.info(`INITIALY DATA BEING CALLED ..... `);
      if (this.isSubmitting) {
        return;
      }

      // Don't reinitialize if we just created a record
      if (this.justCreated && this.formData.id) {
        console.log('Skipping form initialization - record was just created');
        return;
      }
      this._isInitializing = true;
      try {
        if (this.settlement && (this.settlement.id || this.settlement.moneyAdvanceId)) {
          const hasMoneyAdvance = this.settlement.moneyAdvanceId && this.settlement.moneyAdvanceId !== null && this.settlement.moneyAdvanceId !== '' && this.settlement.moneyAdvanceId !== '0' && this.settlement.moneyAdvanceId !== 0;
          this.formData = {
            id: this.settlement.id,
            bookingDate: this.settlement.bookingDate ? this.settlement.bookingDate.split('T')[0] : '',
            method: this.settlement.method || '',
            amount: this.settlement.amount || null,
            currencyId: this.settlement.currencyId || '',
            exchangeRate: this.settlement.exchangeRate !== undefined && this.settlement.exchangeRate !== null ? this.settlement.exchangeRate : 1,
            bankAccountId: this.settlement.bankAccountId || '',
            ministryId: this.settlement.ministryId || '',
            chartAccountId: this.settlement.chartAccountId || '',
            userId: this.settlement.userId || '',
            notes: this.settlement.notes || '',
            selectedInvoices: [],
            linkToAdvance: hasMoneyAdvance || this.settlement.linkToAdvance === 'true' ? 'true' : 'false',
            moneyAdvanceId: hasMoneyAdvance ? this.settlement.moneyAdvanceId.toString() : '',
            externalRef: this.settlement.externalRef || '',
            externalRefNo: this.settlement.externalRefNo || '',
            chequeNo: this.settlement.chequeNo || '',
            fromPersonName: this.settlement.fromPersonName || ''
          };

          // Set date picker values for existing settlement
          if (this.formData.bookingDate) {
            this.pickerBookingDate = this.formData.bookingDate;
            this.formattedBookingDate = this.formatDateForDisplay(this.formData.bookingDate);
          }
          if (this.formData.linkToAdvance === 'true') {
            this.$nextTick(() => {
              this.waitForAdvancesAndSync();
            });
          }
        } else {
          var _this$user;
          // New settlement
          const todayDate = this.today;
          this.formData = {
            bookingDate: todayDate,
            method: this.paymentMethod,
            amount: null,
            currencyId: '',
            exchangeRate: 1,
            bankAccountId: '',
            ministryId: '',
            chartAccountId: '',
            userId: ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id) || '',
            notes: '',
            selectedInvoices: [],
            linkToAdvance: 'false',
            moneyAdvanceId: '',
            externalRef: '',
            externalRefNo: '',
            chequeNo: '',
            fromPersonName: ''
          };

          // Set date picker values for new settlement
          this.pickerBookingDate = todayDate;
          this.formattedBookingDate = this.formatDateForDisplay(todayDate);
          if (this.currencies.length > 0) {
            const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
            this.formData.currencyId = defaultCurrency.id;
          }
        }
        this.errors = {};
        this.formErrors = [];
      } catch (error) {
        console.error('Error initializing form:', error);
        this.showToast('Error initializing form', 'error');
      } finally {
        this.$nextTick(() => {
          this._isInitializing = false;
        });
      }
      console.info(`SETTLEMENT AFTER INITIALIZATION: ${JSON.stringify(this.formData)}`);
    },
    // Update your resetForm method to clear date picker values
    resetForm() {
      var _this$user2;
      if (this.isSubmitting) {
        return;
      }
      this.formData = {
        bookingDate: '',
        method: '',
        amount: null,
        currencyId: '',
        exchangeRate: 1,
        bankAccountId: '',
        ministryId: '',
        chartAccountId: '',
        userId: ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.id) || '',
        notes: '',
        selectedInvoices: [],
        linkToAdvance: 'false',
        moneyAdvanceId: '',
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        fromPersonName: ''
      };

      // Clear date picker values
      this.pickerBookingDate = null;
      this.formattedBookingDate = null;
      this.bookingDateMenu = false;
      this.errors = {};
      this.formErrors = [];
      this.loading = false;
      this.isSubmitting = false;
      this.justCreated = false;
      if (this.showAdvanceBrowser) {
        this.closeAdvanceBrowser();
      }
    },
    waitForAdvancesAndSync() {
      const checkAndSync = () => {
        if (this.availableAdvances.length > 0 && this.formData.moneyAdvanceId) {
          const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
          if (foundAdvance) {
            this.syncCurrencyFromAdvance();
            this.syncAmountFromAdvance();
          }
        } else if (!this.loadingAdvances) {
          setTimeout(checkAndSync, 200);
        }
      };
      checkAndSync();
    },
    handleCurrencyChange() {
      if (this.isBaseCurrency) {
        if (!this.isEditMode || this.formData.exchangeRate === null || this.formData.exchangeRate === undefined) {
          this.formData.exchangeRate = 1;
        }
      } else if (!this.formData.exchangeRate || this.formData.exchangeRate === 1) {
        if (!this.isEditMode) {
          this.formData.exchangeRate = null;
        }
      }
    },
    calculateEquivalentAmount() {
      // Placeholder for calculation logic
    },
    async loadMoneyAdvances() {
      this.loadingAdvances = true;
      try {
        const params = {
          status: ['pending', 'approved'],
          available_for_settlement: true
        };
        if (this.formData.moneyAdvanceId) {
          params.include_advance_id = this.formData.moneyAdvanceId;
        }
        const {
          data
        } = await this.$axios.get('/api/money-advances', {
          params
        });
        if (data && data.success) {
          this.availableAdvances = data.data || [];
          if (this.formData.moneyAdvanceId) {
            const foundAdvance = this.availableAdvances.find(advance => advance.id.toString() === this.formData.moneyAdvanceId.toString());
            if (!foundAdvance) {
              try {
                const {
                  data: advanceData
                } = await this.$axios.get(`/api/money-advances/${this.formData.moneyAdvanceId}`);
                if (advanceData && advanceData.success) {
                  this.availableAdvances.unshift(advanceData.data);
                }
              } catch (error) {
                console.error('Error fetching individual advance:', error);
              }
            }
          }
        } else {
          this.availableAdvances = [];
        }
        this.filteredAdvances = [...this.availableAdvances];
      } catch (error) {
        console.error('Error loading money advances:', error);
        this.availableAdvances = [];
        this.filteredAdvances = [];
      } finally {
        this.loadingAdvances = false;
      }
    },
    handleMethodChange() {
      if (this.formData.method !== 'bank_transfer') {
        this.formData.bankAccountId = '';
      }
      if (this.formData.method !== 'deduction') {
        this.formData.selectedInvoices = [];
      }
      if (this.formData.method !== 'cheque') {
        this.formData.chequeNo = '';
      }
      if (this.formData.method !== 'cash' && this.formData.method !== 'cheque') {
        this.formData.fromPersonName = '';
      }
      this.clearFieldError('bankAccountId');
      this.clearFieldError('chequeNo');
      this.clearFieldError('fromPersonName');
    },
    updateSelectedInvoicesAmount() {
      if (this.formData.method === 'deduction') {
        this.formData.amount = this.selectedInvoicesTotal;
      }
    },
    updateSelectedCurrency() {
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency;
        const selectedCurrency = this.selectedCurrency.code || this.selectedCurrency.currencyCode;
        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.formData.bankAccountId = '';
        }
      }
    },
    updateSelectedBankAccount() {
      // Any additional logic when bank account changes
    },
    updateSelectedMinistry() {
      // Any additional logic when ministry changes
    },
    clearAdvanceSelection() {
      this.formData.moneyAdvanceId = '';
      this.formData.linkToAdvance = 'false';
      if (this.currencies.length > 0) {
        const defaultCurrency = this.currencies.find(c => (c.code || c.currencyCode) === 'LAK') || this.currencies[0];
        this.formData.currencyId = defaultCurrency.id;
        this.formData.exchangeRate = 1;
      }
      this.formData.amount = null;
    },
    updateSelectedAdvance() {
      if (this.selectedAdvance) {
        this.syncCurrencyFromAdvance();
        this.syncAmountFromAdvance();
      }
    },
    syncCurrencyFromAdvance() {
      if (!this.selectedAdvance) return;
      const advanceCurrency = this.getAdvanceCurrency();
      if (advanceCurrency) {
        this.formData.currencyId = advanceCurrency.id;
        if (this.selectedAdvance.exchangeRate && this.selectedAdvance.exchangeRate !== null) {
          this.formData.exchangeRate = this.selectedAdvance.exchangeRate;
        } else {
          if (this.isBaseCurrency && (this.formData.exchangeRate === null || this.formData.exchangeRate === undefined)) {
            this.formData.exchangeRate = 1;
          }
        }
      }
    },
    syncAmountFromAdvance() {
      if (this.selectedAdvance && this.selectedAdvance.amount) {
        this.formData.amount = this.selectedAdvance.amount;
      }
    },
    getAdvanceCurrency() {
      if (!this.selectedAdvance) return null;
      if (this.selectedAdvance.currencyId) {
        return this.currencies.find(c => c.id == this.selectedAdvance.currencyId);
      }
      if (this.selectedAdvance.currencyCode) {
        return this.currencies.find(c => (c.code || c.currencyCode) === this.selectedAdvance.currencyCode);
      }
      if (this.selectedAdvance.currency) {
        if (typeof this.selectedAdvance.currency === 'object') {
          return this.currencies.find(c => c.id == this.selectedAdvance.currency.id);
        } else {
          return this.currencies.find(c => (c.code || c.currencyCode) === this.selectedAdvance.currency);
        }
      }
      return null;
    },
    browseMoneyAdvances() {
      this.showAdvanceBrowser = true;
      this.selectedAdvanceForBrowser = this.selectedAdvance;
      document.body.style.overflow = 'hidden';
    },
    closeAdvanceBrowser() {
      this.showAdvanceBrowser = false;
      this.selectedAdvanceForBrowser = null;
      this.advanceSearch.query = '';
      this.advanceSearch.status = '';
      this.filteredAdvances = [...this.availableAdvances];
      document.body.style.overflow = 'auto';
    },
    handleAdvanceBrowserOverlayClick(event) {
      if (event.target === event.currentTarget) {
        this.closeAdvanceBrowser();
      }
    },
    selectAdvanceFromBrowser(advance) {
      this.selectedAdvanceForBrowser = advance;
    },
    confirmAdvanceSelection() {
      if (this.selectedAdvanceForBrowser) {
        this.formData.moneyAdvanceId = this.selectedAdvanceForBrowser.id;
        this.closeAdvanceBrowser();
        this.$nextTick(() => {
          this.syncCurrencyFromAdvance();
          this.syncAmountFromAdvance();
        });
      }
    },
    searchAdvances() {
      this.filterAdvances();
    },
    filterAdvances() {
      let filtered = [...this.availableAdvances];
      if (this.advanceSearch.status) {
        filtered = filtered.filter(advance => advance.status === this.advanceSearch.status);
      }
      if (this.advanceSearch.query) {
        const query = this.advanceSearch.query.toLowerCase();
        filtered = filtered.filter(advance => advance.purpose && advance.purpose.toLowerCase().includes(query) || advance.note && advance.note.toLowerCase().includes(query) || advance.id.toString().includes(query));
      }
      this.filteredAdvances = filtered;
    },
    validateForm() {
      this.errors = {};
      this.formErrors = [];
      try {
        // Required fields validation
        if (!this.formData.bookingDate) {
          this.errors.bookingDate = 'ກະລຸນາເລືອກວັນທີ';
          this.formErrors.push('ວັນທີລົງຊຳລະ ແມ່ນຈຳເປັນ');
        }
        if (!this.formData.method) {
          this.errors.method = 'ກະລຸນາເລືອກວິທີການຊຳລະ';
          this.formErrors.push('ວິທີການຊຳລະ ແມ່ນຈຳເປັນ');
        }
        if (!this.formData.amount || this.formData.amount <= 0) {
          this.errors.amount = 'ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ';
          this.formErrors.push('ຈຳນວນເງິນ ແມ່ນຈຳເປັນ ແລະ ຕ້ອງຫຼາຍກວ່າ 0');
        }
        if (!this.formData.currencyId) {
          this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ';
          this.formErrors.push('ສະກຸນເງິນ ແມ່ນຈຳເປັນ');
        }
        if (this.formData.exchangeRate && this.formData.exchangeRate <= 0) {
          this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0';
          this.formErrors.push('ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0');
        }
        if (!this.formData.userId) {
          this.errors.userId = 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ';
          this.formErrors.push('ຜູ້ລົງບັນຊີ ແມ່ນຈຳເປັນ');
        }

        // Conditional validation
        if (this.formData.method === 'bank_transfer' && !this.formData.bankAccountId) {
          this.errors.bankAccountId = 'ກະລຸນາເລືອກບັນຊີທະນາຄານ';
          this.formErrors.push('ບັນຊີທະນາຄານ ແມ່ນຈຳເປັນສຳລັບການໂອນທະນາຄານ');
        }
        if (this.formData.method === 'cheque' && !this.formData.chequeNo) {
          this.errors.chequeNo = 'ກະລຸນາໃສ່ເລກເຊັກ';
          this.formErrors.push('ເລກເຊັກ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເຊັກ');
        }
        if ((this.formData.method === 'cash' || this.formData.method === 'cheque') && !this.formData.fromPersonName) {
          this.errors.fromPersonName = 'ກະລຸນາໃສ່ຊື່ຜູ້ຈ່າຍ';
          this.formErrors.push('ຊື່ຜູ້ຈ່າຍ ແມ່ນຈຳເປັນສຳລັບການຊຳລະດ້ວຍເງິນສົດ ແລະ ເຊັກ');
        }

        // Special validation for linked advances
        if (this.isLinkedToAdvance && this.selectedAdvance) {
          const advanceCurrency = this.getAdvanceCurrency();
          if (advanceCurrency && this.formData.currencyId != advanceCurrency.id) {
            this.errors.currencyId = 'ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ';
            this.formErrors.push('ສະກຸນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ');
          }

          // Check if advance amount matches
          if (this.selectedAdvance.amount && Math.abs(this.formData.amount - this.selectedAdvance.amount) > 0.01) {
            this.errors.amount = 'ຈຳນວນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າ';
            this.formErrors.push('ຈຳນວນເງິນຕ້ອງກົງກັບລາຍຈ່າຍລ່ວງໜ້າທີ່ເລືອກ');
          }
        }
        if (this.formData.notes && this.formData.notes.length > 500) {
          this.formErrors.push('ໝາຍເຫດຕ້ອງບໍ່ເກີນ 500 ຕົວອັກສອນ');
        }
        if (this.users.length === 0) {
          this.formErrors.push('ບໍ່ມີຜູ້ໃຊ້ງານ. ກະລຸນາຕິດຕໍ່ຜູ້ຄຸ້ມຄອງລະບົບ.');
        }
        if (this.currencies.length === 0) {
          this.formErrors.push('ບໍ່ມີສະກຸນເງິນ. ກະລຸນາຕິດຕໍ່ຜູ້ຄຸ້ມຄອງລະບົບ.');
        }
        return this.formErrors.length === 0;
      } catch (error) {
        console.error('Validation error:', error);
        this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການກວດສອບຟອມ');
        return false;
      }
    },
    clearFieldError(fieldName) {
      if (this.errors[fieldName]) {
        this.$delete(this.errors, fieldName);
      }
    },
    // FIXED saveSettlement method
    async saveSettlement() {
      if (!this.validateForm() || this.isSubmitting) {
        return;
      }

      // Prevent double submission
      this.isSubmitting = true;
      this.loading = true;
      try {
        const submitData = {
          ...this.formData,
          selectedInvoices: this.formData.method === 'deduction' ? this.formData.selectedInvoices : [],
          bookingDate: this.formData.bookingDate
        };

        // Remove empty values and unused fields
        Object.keys(submitData).forEach(key => {
          if (submitData[key] === '' || submitData[key] === null) {
            delete submitData[key];
          }
        });

        // Remove advance-related fields if not linking
        if (submitData.linkToAdvance !== 'true') {
          delete submitData.moneyAdvanceId;
        }
        delete submitData.linkToAdvance;
        console.log('📤 Submitting settlement data:', submitData);
        let response;
        let isNewRecord = !this.formData.id;
        if (isNewRecord) {
          // Creating new settlement
          console.info(`SETTLEMENT BEFORE SAVE ${JSON.stringify(this.formData)}`);
          response = await this.$axios.post('/api/settlements', submitData);
          console.info(`RESPONSE DATA ${JSON.stringify(response.data)}`);
          if (response.data && response.data.data) {
            // Update form data with the new ID
            this.formData.id = response.data.data.id;
            this.formData.bookingDate = response.data.data.bookingDate;

            // Emit created event to parent component
            this.$emit('created', response.data.data);
            this.showToast('Money settlement created successfully', 'success');
          }
          console.info(`SETTLEMENT AFTER SAVE ${JSON.stringify(this.formData)}`);
        } else {
          // Updating existing settlement
          response = await this.$axios.put(`/api/settlements/${this.formData.id}`, submitData);
          console.info(`UPDATE RESPONSE DATA ${JSON.stringify(response.data)}`);
          if (response.data && response.data.data) {
            // Emit updated event to parent with updated data
            this.$emit('updated', response.data.data);
            this.showToast('Money settlement updated successfully', 'success');
          }
        }

        // Clear any validation errors on successful save
        this.errors = {};
        this.formErrors = [];
      } catch (error) {
        console.error('Form submission error:', error);

        // Clear previous form errors
        this.formErrors = [];

        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          const errorData = error.response.data;
          if (status === 422 && errorData.errors) {
            // Validation errors from server
            Object.keys(errorData.errors).forEach(field => {
              this.errors[field] = errorData.errors[field][0];
              this.formErrors.push(`${field}: ${errorData.errors[field][0]}`);
            });
          } else if (status === 409) {
            // Conflict error
            this.formErrors.push('ມີການຂັດແຍ້ງກັບຂໍ້ມູນທີ່ມີຢູ່ແລ້ວ. ກະລຸນາລອງໃໝ່.');
          } else if (status === 404) {
            // Not found error
            this.formErrors.push('ບໍ່ພົບຂໍ້ມູນທີ່ຕ້ອງການ. ກະລຸນາລອງໃໝ່.');
          } else {
            // Other server errors
            this.formErrors.push(errorData.message || 'ເກີດຂໍ້ຜິດພາດຈາກເຊີເວີ. ກະລຸນາລອງໃໝ່.');
          }
        } else if (error.request) {
          // Network error
          this.formErrors.push('ບໍ່ສາມາດເຊື່ອມຕໍ່ເຊີເວີໄດ້. ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດ.');
        } else {
          // Other errors
          this.formErrors.push('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ. ກະລຸນາລອງໃໝ່.');
        }

        // Show error toast
        this.showToast(this.formErrors[0] || 'ເກີດຂໍ້ຜິດພາດ', 'error');
      } finally {
        this.loading = false;
        this.isSubmitting = false;
      }
    },
    closeDialog() {
      if (this.isSubmitting) {
        // Confirm if user wants to cancel during submission
        if (confirm('Are you sure you want to cancel? The form is currently being submitted.')) {
          this.isSubmitting = false;
          this.loading = false;
          this.justCreated = false; // Reset flag when closing
        } else {
          return;
        }
      } else {
        this.justCreated = false; // Reset flag when closing
      }

      this.$emit('close');
    },
    handleOverlayClick(event) {
      // Only close if clicking directly on overlay, not on child elements
      if (event.target === event.currentTarget && !this.isSubmitting) {
        this.closeDialog();
      }
    },
    // Utility methods
    formatCurrency(amount, currency = 'LAK', locale = 'en-US', options = {}) {
      if (typeof amount !== 'number' && amount !== null && amount !== undefined) {
        amount = 0;
      }
      const defaultOptions = {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        ...options
      };
      try {
        return new Intl.NumberFormat(locale, defaultOptions).format(amount || 0);
      } catch (error) {
        return `${currency.toUpperCase()} ${(amount || 0).toLocaleString()}`;
      }
    },
    formatDate(date) {
      if (!date) return 'ບໍ່ລະບຸ';
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    formatAdvanceOption(advance) {
      return `#${advance.id} - ${this.formatCurrency(advance.amount, advance.currency.code)} - ${advance.purpose || 'No purpose'}`;
    },
    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ'
      };
      return statusLabels[status] || status;
    }
  }
});
// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var MA_settlementDialogvue_type_script_lang_js_ = (settlementDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MA/settlementDialog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(518)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MA_settlementDialogvue_type_script_lang_js_,
  settlementDialogvue_type_template_id_216c16b2_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "216c16b2",
  "6aebe1cc"
  
)

/* harmony default export */ var settlementDialog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=m-a-settlement-dialog.js.map