exports.ids = [234];
exports.modules = {

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/VCalendar.js + 16 modules
var VCalendar = __webpack_require__(840);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/reservation/index.vue?vue&type=template&id=33ba8540&scoped=true&





var reservationvue_type_template_id_33ba8540_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "fill-height"
  }, [_c(VCol["a" /* default */], [_c(VSheet["a" /* default */], {
    attrs: {
      "height": "600"
    }
  }, [_c(VCalendar["a" /* default */], {
    ref: "calendar",
    attrs: {
      "color": "primary",
      "type": "4day",
      "events": _vm.events,
      "event-color": _vm.getEventColor,
      "event-ripple": false
    },
    on: {
      "change": _vm.getEvents,
      "mousedown:event": _vm.startDrag,
      "mousedown:time": _vm.startTime,
      "mousemove:time": _vm.mouseMove,
      "mouseup:time": _vm.endDrag
    },
    nativeOn: {
      "mouseleave": function ($event) {
        return _vm.cancelDrag.apply(null, arguments);
      }
    },
    scopedSlots: _vm._u([{
      key: "event",
      fn: function ({
        event,
        timed,
        eventSummary
      }) {
        return [_c('div', {
          staticClass: "v-event-draggable"
        }, [_c({
          render: eventSummary
        }, {
          tag: "component"
        })], 1), _vm._v(" "), timed ? _c('div', {
          staticClass: "v-event-drag-bottom",
          on: {
            "mousedown": function ($event) {
              $event.stopPropagation();
              return _vm.extendBottom(event);
            }
          }
        }) : _vm._e()];
      }
    }]),
    model: {
      value: _vm.value,
      callback: function ($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/reservation/index.vue?vue&type=template&id=33ba8540&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/reservation/index.vue?vue&type=script&lang=js&
/* harmony default export */ var reservationvue_type_script_lang_js_ = ({
  data: () => ({
    value: '',
    events: [],
    colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null
  }),
  methods: {
    startDrag({
      event,
      timed
    }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;
        this.dragTime = mouse - start;
      } else {
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: `Event #${this.events.length}`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true
        };
        this.events.push(this.createEvent);
      }
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = this.roundTime(newStartTime);
        const newEnd = newStart + duration;
        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);
        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag() {
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }
      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 15; // minutes
      const roundDownTime = roundTo * 60 * 1000;
      return down ? time - time % roundDownTime : time + (roundDownTime - time % roundDownTime);
    },
    toTime(tms) {
      return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime();
    },
    getEventColor(event) {
      const rgb = parseInt(event.color.substring(1), 16);
      const r = rgb >> 16 & 0xFF;
      const g = rgb >> 8 & 0xFF;
      const b = rgb >> 0 & 0xFF;
      return event === this.dragEvent ? `rgba(${r}, ${g}, ${b}, 0.7)` : event === this.createEvent ? `rgba(${r}, ${g}, ${b}, 0.7)` : event.color;
    },
    getEvents({
      start,
      end
    }) {
      const events = [];
      const min = new Date(`${start.date}T00:00:00`).getTime();
      const max = new Date(`${end.date}T23:59:59`).getTime();
      const days = (max - min) / 86400000;
      const eventCount = this.rnd(days, days + 20);
      for (let i = 0; i < eventCount; i++) {
        const timed = this.rnd(0, 3) !== 0;
        const firstTimestamp = this.rnd(min, max);
        const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000;
        const start = firstTimestamp - firstTimestamp % 900000;
        const end = start + secondTimestamp;
        events.push({
          name: this.rndElement(this.names),
          color: this.rndElement(this.colors),
          start,
          end,
          timed
        });
      }
      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/reservation/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_reservationvue_type_script_lang_js_ = (reservationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/reservation/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(984)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_reservationvue_type_script_lang_js_,
  reservationvue_type_template_id_33ba8540_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "33ba8540",
  "c83551c4"
  
)

/* harmony default export */ var reservation = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("44d02f7c", content, true)

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(548);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("6bd7c8b4", content, true)

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-calendar-events .v-event-timed{border:1px solid!important}.theme--light.v-calendar-events .v-event-more{background-color:#fff}.theme--light.v-calendar-events .v-event-more.v-outside{background-color:#f7f7f7}.theme--dark.v-calendar-events .v-event-timed{border:1px solid!important}.theme--dark.v-calendar-events .v-event-more{background-color:#303030}.theme--dark.v-calendar-events .v-event-more.v-outside{background-color:#202020}.v-calendar .v-event{border-radius:4px;line-height:20px;margin-right:-1px}.v-calendar .v-event,.v-calendar .v-event-more{cursor:pointer;font-size:12px;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;z-index:1}.v-calendar .v-event-more{font-weight:700}.v-calendar .v-event-timed-container{bottom:0;left:0;margin-right:10px;pointer-events:none;position:absolute;right:0;top:0}.v-calendar .v-event-timed{border-radius:4px;cursor:pointer;font-size:12px;pointer-events:all;position:absolute;text-overflow:ellipsis;white-space:nowrap}.v-calendar .v-event-summary{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.v-calendar.v-calendar-events .v-calendar-weekly__head-weekday{margin-right:-1px}.v-calendar.v-calendar-events .v-calendar-weekly__day{margin-right:-1px;overflow:visible}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-calendar-weekly{background-color:#fff;border-left:1px solid #e0e0e0;border-top:1px solid #e0e0e0}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:rgba(0,0,0,.38)}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#f7f7f7}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weeknumber{background-color:#f1f3f4;border-right:1px solid #e0e0e0}.theme--light.v-calendar-weekly .v-calendar-weekly__day{border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#f7f7f7}.theme--light.v-calendar-weekly .v-calendar-weekly__weeknumber{background-color:#f1f3f4;border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0;color:#000}.theme--dark.v-calendar-weekly{background-color:#303030;border-left:1px solid #9e9e9e;border-top:1px solid #9e9e9e}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#202020}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weeknumber{background-color:#202020;border-right:1px solid #9e9e9e}.theme--dark.v-calendar-weekly .v-calendar-weekly__day{border-bottom:1px solid #9e9e9e;border-right:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#202020}.theme--dark.v-calendar-weekly .v-calendar-weekly__weeknumber{background-color:#202020;border-bottom:1px solid #9e9e9e;border-right:1px solid #9e9e9e;color:#fff}.v-calendar-weekly{display:flex;flex-direction:column;height:100%;min-height:0;width:100%}.v-calendar-weekly__head{display:flex}.v-calendar-weekly__head,.v-calendar-weekly__head-weekday{-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-calendar-weekly__head-weekday{flex:1 0 20px;font-size:11px;overflow:hidden;padding:0 4px;text-align:center;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.v-calendar-weekly__head-weeknumber{flex:0 0 24px;position:relative}.v-calendar-weekly__week{display:flex;flex:1;height:auto;min-height:0}.v-calendar-weekly__weeknumber{display:flex;flex:0 0 24px;height:auto;min-height:0;padding-top:14.5px;text-align:center}.v-calendar-weekly__weeknumber>small{width:100%!important}.v-calendar-weekly__day{flex:1;min-width:0;overflow:hidden;padding:0;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:0}.v-calendar-weekly__day.v-present .v-calendar-weekly__day-month{color:currentColor}.v-calendar-weekly__day-label{box-shadow:none;cursor:pointer;margin:4px 0 0;text-align:center;-webkit-text-decoration:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-calendar-weekly__day-label .v-btn{font-size:12px;text-transform:none}.v-calendar-weekly__day-month{box-shadow:none;height:32px;left:36px;line-height:32px;position:absolute;-webkit-text-decoration:none;text-decoration:none;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(551);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2f91f78c", content, true)

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-calendar-daily{background-color:#fff;border-left:1px solid #e0e0e0;border-top:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-head:after{background:#e0e0e0;background:linear-gradient(90deg,transparent,#e0e0e0)}.theme--light.v-calendar-daily .v-calendar-daily_head-day{border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:rgba(0,0,0,.38)}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#424242}.theme--light.v-calendar-daily .v-calendar-daily__day{border-bottom:1px solid #e0e0e0;border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.theme--light.v-calendar-daily .v-calendar-daily__interval:after{border-top:1px solid #e0e0e0}.theme--dark.v-calendar-daily{background-color:#303030;border-left:1px solid #9e9e9e;border-top:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-head:after{background:#9e9e9e;background:linear-gradient(90deg,transparent,#9e9e9e)}.theme--dark.v-calendar-daily .v-calendar-daily_head-day{border-bottom:1px solid #9e9e9e;border-right:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#eee}.theme--dark.v-calendar-daily .v-calendar-daily__day{border-bottom:1px solid #9e9e9e;border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.theme--dark.v-calendar-daily .v-calendar-daily__interval:after{border-top:1px solid #9e9e9e}.v-calendar-daily{display:flex;flex-direction:column;height:100%;overflow:hidden}.v-calendar-daily__head{display:flex;flex:none}.v-calendar-daily__intervals-head{flex:none;position:relative}.v-calendar-daily__intervals-head:after{bottom:0;content:\"\";height:1px;left:0;position:absolute;right:0}.v-calendar-daily_head-day{flex:1 1 auto;position:relative;width:0}.v-calendar-daily_head-weekday{font-size:11px;padding:3px 0 0;text-transform:uppercase}.v-calendar-daily_head-day-label,.v-calendar-daily_head-weekday{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-calendar-daily_head-day-label{cursor:pointer;padding:0 0 3px}.v-calendar-daily__body{display:flex;flex:1 1 60%;flex-direction:column;overflow:hidden;position:relative}.v-calendar-daily__scroll-area{align-items:flex-start;display:flex;flex:1 1 auto;overflow-y:scroll}.v-calendar-daily__pane{align-items:flex-start;display:flex;flex:none;overflow-y:hidden;width:100%}.v-calendar-daily__day-container{display:flex;flex:1;height:100%;width:100%}.v-calendar-daily__intervals-body{flex:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-calendar-daily__interval{border-bottom:none;padding-right:8px;position:relative;text-align:right}.v-calendar-daily__interval:after{bottom:-1px;content:\"\";display:block;height:1px;position:absolute;right:0;width:8px}.v-calendar-daily__interval-text{display:block;font-size:10px;padding-right:4px;position:relative;top:-6px}.v-calendar-daily__day{flex:1;position:relative;width:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(553);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("b9d8c43c", content, true)

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-calendar-category .v-calendar-category__column,.theme--light.v-calendar-category .v-calendar-category__column-header{border-right:1px solid #e0e0e0}.theme--light.v-calendar-category .v-calendar-daily__head,.theme--light.v-calendar-category .v-calendar-daily__intervals-body,.theme--light.v-calendar-category .v-calendar-daily__intervals-head{background:#fff}.theme--dark.v-calendar-category .v-calendar-category__column,.theme--dark.v-calendar-category .v-calendar-category__column-header{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-category .v-calendar-daily__head,.theme--dark.v-calendar-category .v-calendar-daily__intervals-body,.theme--dark.v-calendar-category .v-calendar-daily__intervals-head{background:#303030}.v-calendar-category{overflow:auto;position:relative}.v-calendar-category .v-calendar-category__category{text-align:center}.v-calendar-category .v-calendar-daily__day-container{width:-moz-min-content;width:min-content}.v-calendar-category .v-calendar-daily__day-container .v-calendar-category__columns{height:100%;position:absolute;top:0;width:100%}.v-calendar-category .v-calendar-daily__day-body{display:flex;flex:1;height:100%;width:100%}.v-calendar-category .v-calendar-daily__head{flex-direction:row;min-width:100%;position:sticky;top:0;width:-moz-min-content;width:min-content;z-index:2}.v-calendar-category .v-calendar-daily_head-day{position:static;width:auto}.v-calendar-category .v-calendar-daily__intervals-head{left:0;position:sticky;top:0;z-index:2}.v-calendar-category .v-calendar-daily_head-weekday{left:50%;position:sticky;width:50px}.v-calendar-category .v-calendar-daily_head-day-label{left:50%;position:sticky;width:56px}.v-calendar-category .v-calendar-daily__day{min-width:200px}.v-calendar-category .v-calendar-daily__intervals-body{left:0;position:sticky;z-index:1}.v-calendar-category .v-calendar-daily__interval:last-of-type:after{display:none}.v-calendar-category .v-calendar-daily__body{overflow:visible}.v-calendar-category .v-calendar-daily__body .v-calendar-daily__scroll-area{flex:none;overflow-y:visible}.v-calendar-category .v-calendar-daily__pane{overflow-y:visible}.v-calendar-category .v-calendar-category__columns{display:flex;min-width:100%;width:-moz-min-content;width:min-content}.v-calendar-category .v-calendar-category__columns .v-calendar-category__column,.v-calendar-category .v-calendar-category__columns .v-calendar-category__column-header{flex:1 1 auto;position:relative;width:0}.v-calendar-category .v-calendar-category__columns .v-calendar-category__column-header{min-width:200px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(985);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5f9d8dda", content, true, context)
};

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCalendar/mixins/calendar-with-events.sass
var calendar_with_events = __webpack_require__(547);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/localable/index.js
var localable = __webpack_require__(401);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/mixins/mouse.js

/* harmony default export */ var mouse = (external_vue_default.a.extend({
  name: 'mouse',
  methods: {
    getDefaultMouseEventHandlers(suffix, getEvent) {
      const listeners = Object.keys(this.$listeners).filter(key => key.endsWith(suffix)).reduce((acc, key) => {
        acc[key] = {
          event: key.slice(0, -suffix.length)
        };
        return acc;
      }, {});
      return this.getMouseEventHandlers({
        ...listeners,
        ['contextmenu' + suffix]: {
          event: 'contextmenu',
          prevent: true,
          result: false
        }
      }, getEvent);
    },
    getMouseEventHandlers(events, getEvent) {
      const on = {};
      for (const event in events) {
        const eventOptions = events[event];
        if (!this.$listeners[event]) continue; // TODO somehow pull in modifiers

        const prefix = eventOptions.passive ? '&' : (eventOptions.once ? '~' : '') + (eventOptions.capture ? '!' : '');
        const key = prefix + eventOptions.event;
        const handler = e => {
          var _a, _b;
          const mouseEvent = e;
          if (eventOptions.button === undefined || mouseEvent.buttons > 0 && mouseEvent.button === eventOptions.button) {
            if (eventOptions.prevent) {
              e.preventDefault();
            }
            if (eventOptions.stop) {
              e.stopPropagation();
            } // Due to TouchEvent target always returns the element that is first placed
            // Even if touch point has since moved outside the interactive area of that element
            // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Touch/target
            // This block of code aims to make sure touchEvent is always dispatched from the element that is being pointed at

            if (e && 'touches' in e) {
              const classSeparator = ' ';
              const eventTargetClasses = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.className.split(classSeparator);
              const currentTargets = document.elementsFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY); // Get "the same kind" current hovering target by checking
              // If element has the same class of initial touch start element (which has touch event listener registered)

              const currentTarget = currentTargets.find(t => t.className.split(classSeparator).some(c => eventTargetClasses.includes(c)));
              if (currentTarget && !((_b = e.target) === null || _b === void 0 ? void 0 : _b.isSameNode(currentTarget))) {
                currentTarget.dispatchEvent(new TouchEvent(e.type, {
                  changedTouches: e.changedTouches,
                  targetTouches: e.targetTouches,
                  touches: e.touches
                }));
                return;
              }
            }
            this.$emit(event, getEvent(e), e);
          }
          return eventOptions.result;
        };
        if (key in on) {
          /* istanbul ignore next */
          if (Array.isArray(on[key])) {
            on[key].push(handler);
          } else {
            on[key] = [on[key], handler];
          }
        } else {
          on[key] = handler;
        }
      }
      return on;
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/timestamp.js
var util_timestamp = __webpack_require__(406);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/mixins/times.js


/* harmony default export */ var mixins_times = (external_vue_default.a.extend({
  name: 'times',
  props: {
    now: {
      type: String,
      validator: util_timestamp["F" /* validateTimestamp */]
    }
  },
  data: () => ({
    times: {
      now: Object(util_timestamp["v" /* parseTimestamp */])('0000-00-00 00:00', true),
      today: Object(util_timestamp["v" /* parseTimestamp */])('0000-00-00', true)
    }
  }),
  computed: {
    parsedNow() {
      return this.now ? Object(util_timestamp["v" /* parseTimestamp */])(this.now, true) : null;
    }
  },
  watch: {
    parsedNow: 'updateTimes'
  },
  created() {
    this.updateTimes();
    this.setPresent();
  },
  methods: {
    setPresent() {
      this.times.now.present = this.times.today.present = true;
      this.times.now.past = this.times.today.past = false;
      this.times.now.future = this.times.today.future = false;
    },
    updateTimes() {
      const now = this.parsedNow || this.getNow();
      this.updateDay(now, this.times.now);
      this.updateTime(now, this.times.now);
      this.updateDay(now, this.times.today);
    },
    getNow() {
      return Object(util_timestamp["t" /* parseDate */])(new Date());
    },
    updateDay(now, target) {
      if (now.date !== target.date) {
        target.year = now.year;
        target.month = now.month;
        target.day = now.day;
        target.weekday = now.weekday;
        target.date = now.date;
      }
    },
    updateTime(now, target) {
      if (now.time !== target.time) {
        target.hour = now.hour;
        target.minute = now.minute;
        target.time = now.time;
      }
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/modes/common.js

const MILLIS_IN_DAY = 86400000;
function getVisuals(events, minStart = 0) {
  const visuals = events.map(event => ({
    event,
    columnCount: 0,
    column: 0,
    left: 0,
    width: 100
  }));
  visuals.sort((a, b) => {
    return Math.max(minStart, a.event.startTimestampIdentifier) - Math.max(minStart, b.event.startTimestampIdentifier) || b.event.endTimestampIdentifier - a.event.endTimestampIdentifier;
  });
  return visuals;
}
function hasOverlap(s0, e0, s1, e1, exclude = true) {
  return exclude ? !(s0 >= e1 || e0 <= s1) : !(s0 > e1 || e0 < s1);
}
function setColumnCount(groups) {
  groups.forEach(group => {
    group.visuals.forEach(groupVisual => {
      groupVisual.columnCount = groups.length;
    });
  });
}
function getRange(event) {
  return [event.startTimestampIdentifier, event.endTimestampIdentifier];
}
function getDayRange(event) {
  return [event.startIdentifier, event.endIdentifier];
}
function getNormalizedRange(event, dayStart) {
  return [Math.max(dayStart, event.startTimestampIdentifier), Math.min(dayStart + MILLIS_IN_DAY, event.endTimestampIdentifier)];
}
function getOpenGroup(groups, start, end, timed) {
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    let intersected = false;
    if (hasOverlap(start, end, group.start, group.end, timed)) {
      for (let k = 0; k < group.visuals.length; k++) {
        const groupVisual = group.visuals[k];
        const [groupStart, groupEnd] = timed ? getRange(groupVisual.event) : getDayRange(groupVisual.event);
        if (hasOverlap(start, end, groupStart, groupEnd, timed)) {
          intersected = true;
          break;
        }
      }
    }
    if (!intersected) {
      return i;
    }
  }
  return -1;
}
function getOverlapGroupHandler(firstWeekday) {
  const handler = {
    groups: [],
    min: -1,
    max: -1,
    reset: () => {
      handler.groups = [];
      handler.min = handler.max = -1;
    },
    getVisuals: (day, dayEvents, timed, reset = false) => {
      if (day.weekday === firstWeekday || reset) {
        handler.reset();
      }
      const dayStart = Object(util_timestamp["p" /* getTimestampIdentifier */])(day);
      const visuals = getVisuals(dayEvents, dayStart);
      visuals.forEach(visual => {
        const [start, end] = timed ? getRange(visual.event) : getDayRange(visual.event);
        if (handler.groups.length > 0 && !hasOverlap(start, end, handler.min, handler.max, timed)) {
          setColumnCount(handler.groups);
          handler.reset();
        }
        let targetGroup = getOpenGroup(handler.groups, start, end, timed);
        if (targetGroup === -1) {
          targetGroup = handler.groups.length;
          handler.groups.push({
            start,
            end,
            visuals: []
          });
        }
        const target = handler.groups[targetGroup];
        target.visuals.push(visual);
        target.start = Math.min(target.start, start);
        target.end = Math.max(target.end, end);
        visual.column = targetGroup;
        if (handler.min === -1) {
          handler.min = start;
          handler.max = end;
        } else {
          handler.min = Math.min(handler.min, start);
          handler.max = Math.max(handler.max, end);
        }
      });
      setColumnCount(handler.groups);
      if (timed) {
        handler.reset();
      }
      return visuals;
    }
  };
  return handler;
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/modes/stack.js


const FULL_WIDTH = 100;
const DEFAULT_OFFSET = 5;
const WIDTH_MULTIPLIER = 1.7;
/**
 * Variation of column mode where events can be stacked. The priority of this
 * mode is to stack events together taking up the least amount of space while
 * trying to ensure the content of the event is always visible as well as its
 * start and end. A sibling column has intersecting event content and must be
 * placed beside each other. Non-sibling columns are offset by 5% from the
 * previous column. The width is scaled by 1.7 so the events overlap and
 * whitespace is reduced. If there is a hole in columns the event width is
 * scaled up so it intersects with the next column. The columns have equal
 * width in the space they are given. If the event doesn't have any to the
 * right of it that intersect with it's content it's right side is extended
 * to the right side.
 */

const stack = (events, firstWeekday, overlapThreshold) => {
  const handler = getOverlapGroupHandler(firstWeekday); // eslint-disable-next-line max-statements

  return (day, dayEvents, timed, reset) => {
    if (!timed) {
      return handler.getVisuals(day, dayEvents, timed, reset);
    }
    const dayStart = Object(util_timestamp["p" /* getTimestampIdentifier */])(day);
    const visuals = getVisuals(dayEvents, dayStart);
    const groups = getGroups(visuals, dayStart);
    for (const group of groups) {
      const nodes = [];
      for (const visual of group.visuals) {
        const child = getNode(visual, dayStart);
        const index = getNextIndex(child, nodes);
        if (index === false) {
          const parent = getParent(child, nodes);
          if (parent) {
            child.parent = parent;
            child.sibling = hasOverlap(child.start, child.end, parent.start, addTime(parent.start, overlapThreshold));
            child.index = parent.index + 1;
            parent.children.push(child);
          }
        } else {
          const [parent] = getOverlappingRange(child, nodes, index - 1, index - 1);
          const children = getOverlappingRange(child, nodes, index + 1, index + nodes.length, true);
          child.children = children;
          child.index = index;
          if (parent) {
            child.parent = parent;
            child.sibling = hasOverlap(child.start, child.end, parent.start, addTime(parent.start, overlapThreshold));
            parent.children.push(child);
          }
          for (const grand of children) {
            if (grand.parent === parent) {
              grand.parent = child;
            }
            const grandNext = grand.index - child.index <= 1;
            if (grandNext && child.sibling && hasOverlap(child.start, addTime(child.start, overlapThreshold), grand.start, grand.end)) {
              grand.sibling = true;
            }
          }
        }
        nodes.push(child);
      }
      calculateBounds(nodes, overlapThreshold);
    }
    visuals.sort((a, b) => a.left - b.left || a.event.startTimestampIdentifier - b.event.startTimestampIdentifier);
    return visuals;
  };
};
function calculateBounds(nodes, overlapThreshold) {
  for (const node of nodes) {
    const {
      visual,
      parent
    } = node;
    const columns = getMaxChildIndex(node) + 1;
    const spaceLeft = parent ? parent.visual.left : 0;
    const spaceWidth = FULL_WIDTH - spaceLeft;
    const offset = Math.min(DEFAULT_OFFSET, FULL_WIDTH / columns);
    const columnWidthMultiplier = getColumnWidthMultiplier(node, nodes);
    const columnOffset = spaceWidth / (columns - node.index + 1);
    const columnWidth = spaceWidth / (columns - node.index + (node.sibling ? 1 : 0)) * columnWidthMultiplier;
    if (parent) {
      visual.left = node.sibling ? spaceLeft + columnOffset : spaceLeft + offset;
    }
    visual.width = hasFullWidth(node, nodes, overlapThreshold) ? FULL_WIDTH - visual.left : Math.min(FULL_WIDTH - visual.left, columnWidth * WIDTH_MULTIPLIER);
  }
}
function getColumnWidthMultiplier(node, nodes) {
  if (!node.children.length) {
    return 1;
  }
  const maxColumn = node.index + nodes.length;
  const minColumn = node.children.reduce((min, c) => Math.min(min, c.index), maxColumn);
  return minColumn - node.index;
}
function getOverlappingIndices(node, nodes) {
  const indices = [];
  for (const other of nodes) {
    if (hasOverlap(node.start, node.end, other.start, other.end)) {
      indices.push(other.index);
    }
  }
  return indices;
}
function getNextIndex(node, nodes) {
  const indices = getOverlappingIndices(node, nodes);
  indices.sort();
  for (let i = 0; i < indices.length; i++) {
    if (i < indices[i]) {
      return i;
    }
  }
  return false;
}
function getOverlappingRange(node, nodes, indexMin, indexMax, returnFirstColumn = false) {
  const overlapping = [];
  for (const other of nodes) {
    if (other.index >= indexMin && other.index <= indexMax && hasOverlap(node.start, node.end, other.start, other.end)) {
      overlapping.push(other);
    }
  }
  if (returnFirstColumn && overlapping.length > 0) {
    const first = overlapping.reduce((min, n) => Math.min(min, n.index), overlapping[0].index);
    return overlapping.filter(n => n.index === first);
  }
  return overlapping;
}
function getParent(node, nodes) {
  let parent = null;
  for (const other of nodes) {
    if (hasOverlap(node.start, node.end, other.start, other.end) && (parent === null || other.index > parent.index)) {
      parent = other;
    }
  }
  return parent;
}
function hasFullWidth(node, nodes, overlapThreshold) {
  for (const other of nodes) {
    if (other !== node && other.index > node.index && hasOverlap(node.start, addTime(node.start, overlapThreshold), other.start, other.end)) {
      return false;
    }
  }
  return true;
}
function getGroups(visuals, dayStart) {
  const groups = [];
  for (const visual of visuals) {
    const [start, end] = getNormalizedRange(visual.event, dayStart);
    let added = false;
    for (const group of groups) {
      if (hasOverlap(start, end, group.start, group.end)) {
        group.visuals.push(visual);
        group.end = Math.max(group.end, end);
        added = true;
        break;
      }
    }
    if (!added) {
      groups.push({
        start,
        end,
        visuals: [visual]
      });
    }
  }
  return groups;
}
function getNode(visual, dayStart) {
  const [start, end] = getNormalizedRange(visual.event, dayStart);
  return {
    parent: null,
    sibling: true,
    index: 0,
    visual,
    start,
    end,
    children: []
  };
}
function getMaxChildIndex(node) {
  let max = node.index;
  for (const child of node.children) {
    const childMax = getMaxChildIndex(child);
    if (childMax > max) {
      max = childMax;
    }
  }
  return max;
}
function addTime(identifier, minutes) {
  const removeMinutes = identifier % 100;
  const totalMinutes = removeMinutes + minutes;
  const addHours = Math.floor(totalMinutes / 60);
  const addMinutes = totalMinutes % 60;
  return identifier - removeMinutes + addHours * 100 + addMinutes;
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/modes/column.js

const column_FULL_WIDTH = 100;
const column = (events, firstWeekday, overlapThreshold) => {
  const handler = getOverlapGroupHandler(firstWeekday);
  return (day, dayEvents, timed, reset) => {
    const visuals = handler.getVisuals(day, dayEvents, timed, reset);
    if (timed) {
      visuals.forEach(visual => {
        visual.left = visual.column * column_FULL_WIDTH / visual.columnCount;
        visual.width = column_FULL_WIDTH / visual.columnCount;
      });
    }
    return visuals;
  };
};
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/modes/index.js


const CalendarEventOverlapModes = {
  stack: stack,
  column: column
};
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/props.js


/* harmony default export */ var props = ({
  base: {
    start: {
      type: [String, Number, Date],
      validate: util_timestamp["F" /* validateTimestamp */],
      default: () => Object(util_timestamp["t" /* parseDate */])(new Date()).date
    },
    end: {
      type: [String, Number, Date],
      validate: util_timestamp["F" /* validateTimestamp */]
    },
    weekdays: {
      type: [Array, String],
      default: () => [0, 1, 2, 3, 4, 5, 6],
      validate: validateWeekdays
    },
    hideHeader: {
      type: Boolean
    },
    shortWeekdays: {
      type: Boolean,
      default: true
    },
    weekdayFormat: {
      type: Function,
      default: null
    },
    dayFormat: {
      type: Function,
      default: null
    }
  },
  intervals: {
    maxDays: {
      type: Number,
      default: 7
    },
    shortIntervals: {
      type: Boolean,
      default: true
    },
    intervalHeight: {
      type: [Number, String],
      default: 48,
      validate: validateNumber
    },
    intervalWidth: {
      type: [Number, String],
      default: 60,
      validate: validateNumber
    },
    intervalMinutes: {
      type: [Number, String],
      default: 60,
      validate: validateNumber
    },
    firstInterval: {
      type: [Number, String],
      default: 0,
      validate: validateNumber
    },
    firstTime: {
      type: [Number, String, Object],
      validate: util_timestamp["E" /* validateTime */]
    },
    intervalCount: {
      type: [Number, String],
      default: 24,
      validate: validateNumber
    },
    intervalFormat: {
      type: Function,
      default: null
    },
    intervalStyle: {
      type: Function,
      default: null
    },
    showIntervalLabel: {
      type: Function,
      default: null
    }
  },
  weeks: {
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0
    },
    minWeeks: {
      validate: validateNumber,
      default: 1
    },
    shortMonths: {
      type: Boolean,
      default: true
    },
    showMonthOnFirst: {
      type: Boolean,
      default: true
    },
    showWeek: Boolean,
    monthFormat: {
      type: Function,
      default: null
    }
  },
  calendar: {
    type: {
      type: String,
      default: 'month'
    },
    value: {
      type: [String, Number, Date],
      validate: util_timestamp["F" /* validateTimestamp */]
    }
  },
  category: {
    categories: {
      type: [Array, String],
      default: ''
    },
    categoryText: {
      type: [String, Function]
    },
    categoryHideDynamic: {
      type: Boolean
    },
    categoryShowAll: {
      type: Boolean
    },
    categoryForInvalid: {
      type: String,
      default: ''
    },
    categoryDays: {
      type: [Number, String],
      default: 1,
      validate: x => isFinite(parseInt(x)) && parseInt(x) > 0
    }
  },
  events: {
    events: {
      type: Array,
      default: () => []
    },
    eventStart: {
      type: String,
      default: 'start'
    },
    eventEnd: {
      type: String,
      default: 'end'
    },
    eventTimed: {
      type: [String, Function],
      default: 'timed'
    },
    eventCategory: {
      type: [String, Function],
      default: 'category'
    },
    eventHeight: {
      type: Number,
      default: 20
    },
    eventColor: {
      type: [String, Function],
      default: 'primary'
    },
    eventTextColor: {
      type: [String, Function],
      default: 'white'
    },
    eventName: {
      type: [String, Function],
      default: 'name'
    },
    eventOverlapThreshold: {
      type: [String, Number],
      default: 60
    },
    eventOverlapMode: {
      type: [String, Function],
      default: 'stack',
      validate: mode => mode in CalendarEventOverlapModes || typeof mode === 'function'
    },
    eventMore: {
      type: Boolean,
      default: true
    },
    eventMoreText: {
      type: String,
      default: '$vuetify.calendar.moreEvents'
    },
    eventRipple: {
      type: [Boolean, Object],
      default: null
    },
    eventMarginBottom: {
      type: Number,
      default: 1
    }
  }
});
function validateNumber(input) {
  return isFinite(parseInt(input));
}
function validateWeekdays(input) {
  if (typeof input === 'string') {
    input = input.split(',');
  }
  if (Array.isArray(input)) {
    const ints = input.map(x => parseInt(x));
    if (ints.length > util_timestamp["b" /* DAYS_IN_WEEK */] || ints.length === 0) {
      return false;
    }
    const visited = {};
    let wrapped = false;
    for (let i = 0; i < ints.length; i++) {
      const x = ints[i];
      if (!isFinite(x) || x < 0 || x >= util_timestamp["b" /* DAYS_IN_WEEK */]) {
        return false;
      }
      if (i > 0) {
        const d = x - ints[i - 1];
        if (d < 0) {
          if (wrapped) {
            return false;
          }
          wrapped = true;
        } else if (d === 0) {
          return false;
        }
      }
      if (visited[x]) {
        return false;
      }
      visited[x] = true;
    }
    return true;
  }
  return false;
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/mixins/calendar-base.js
// Mixins





 // Directives

 // Util



/* harmony default export */ var calendar_base = (Object(mixins["a" /* default */])(colorable["a" /* default */], localable["a" /* default */], mouse, themeable["a" /* default */], mixins_times
/* @vue/component */).extend({
  name: 'calendar-base',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: props.base,
  computed: {
    parsedWeekdays() {
      return Array.isArray(this.weekdays) ? this.weekdays : (this.weekdays || '').split(',').map(x => parseInt(x, 10));
    },
    weekdaySkips() {
      return Object(util_timestamp["q" /* getWeekdaySkips */])(this.parsedWeekdays);
    },
    weekdaySkipsReverse() {
      const reversed = this.weekdaySkips.slice();
      reversed.reverse();
      return reversed;
    },
    parsedStart() {
      return Object(util_timestamp["v" /* parseTimestamp */])(this.start, true);
    },
    parsedEnd() {
      const start = this.parsedStart;
      const end = this.end ? Object(util_timestamp["v" /* parseTimestamp */])(this.end) || start : start;
      return Object(util_timestamp["p" /* getTimestampIdentifier */])(end) < Object(util_timestamp["p" /* getTimestampIdentifier */])(start) ? start : end;
    },
    days() {
      return Object(util_timestamp["f" /* createDayList */])(this.parsedStart, this.parsedEnd, this.times.today, this.weekdaySkips);
    },
    dayFormatter() {
      if (this.dayFormat) {
        return this.dayFormat;
      }
      const options = {
        timeZone: 'UTC',
        day: 'numeric'
      };
      return Object(util_timestamp["h" /* createNativeLocaleFormatter */])(this.currentLocale, (_tms, _short) => options);
    },
    weekdayFormatter() {
      if (this.weekdayFormat) {
        return this.weekdayFormat;
      }
      const longOptions = {
        timeZone: 'UTC',
        weekday: 'long'
      };
      const shortOptions = {
        timeZone: 'UTC',
        weekday: 'short'
      };
      return Object(util_timestamp["h" /* createNativeLocaleFormatter */])(this.currentLocale, (_tms, short) => short ? shortOptions : longOptions);
    }
  },
  methods: {
    getRelativeClasses(timestamp, outside = false) {
      return {
        'v-present': timestamp.present,
        'v-past': timestamp.past,
        'v-future': timestamp.future,
        'v-outside': outside
      };
    },
    getStartOfWeek(timestamp) {
      return Object(util_timestamp["o" /* getStartOfWeek */])(timestamp, this.parsedWeekdays, this.times.today);
    },
    getEndOfWeek(timestamp) {
      return Object(util_timestamp["m" /* getEndOfWeek */])(timestamp, this.parsedWeekdays, this.times.today);
    },
    getFormatter(options) {
      return Object(util_timestamp["h" /* createNativeLocaleFormatter */])(this.locale, (_tms, _short) => options);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/events.js

function parseEvent(input, index, startProperty, endProperty, timed = false, category = false) {
  const startInput = input[startProperty];
  const endInput = input[endProperty];
  const startParsed = Object(util_timestamp["v" /* parseTimestamp */])(startInput, true);
  const endParsed = endInput ? Object(util_timestamp["v" /* parseTimestamp */])(endInput, true) : startParsed;
  const start = Object(util_timestamp["r" /* isTimedless */])(startInput) ? Object(util_timestamp["A" /* updateHasTime */])(startParsed, timed) : startParsed;
  const end = Object(util_timestamp["r" /* isTimedless */])(endInput) ? Object(util_timestamp["A" /* updateHasTime */])(endParsed, timed) : endParsed;
  const startIdentifier = Object(util_timestamp["k" /* getDayIdentifier */])(start);
  const startTimestampIdentifier = Object(util_timestamp["p" /* getTimestampIdentifier */])(start);
  const endIdentifier = Object(util_timestamp["k" /* getDayIdentifier */])(end);
  const endOffset = start.hasTime ? 0 : 2359;
  const endTimestampIdentifier = Object(util_timestamp["p" /* getTimestampIdentifier */])(end) + endOffset;
  const allDay = !start.hasTime;
  return {
    input,
    start,
    startIdentifier,
    startTimestampIdentifier,
    end,
    endIdentifier,
    endTimestampIdentifier,
    allDay,
    index,
    category
  };
}
function isEventOn(event, dayIdentifier) {
  return dayIdentifier >= event.startIdentifier && dayIdentifier <= event.endIdentifier;
}
function isEventHiddenOn(event, day) {
  return event.end.time === '00:00' && event.end.date === day.date && event.start.date !== day.date;
}
function isEventStart(event, day, dayIdentifier, firstWeekday) {
  return dayIdentifier === event.startIdentifier || firstWeekday === day.weekday && isEventOn(event, dayIdentifier);
}
function isEventOverlapping(event, startIdentifier, endIdentifier) {
  return startIdentifier <= event.endIdentifier && endIdentifier >= event.startIdentifier;
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/mixins/calendar-with-events.js
// Styles
 // Directives

 // Mixins

 // Util





const WIDTH_FULL = 100;
const WIDTH_START = 95;
const MINUTES_IN_DAY = 1440;
/* @vue/component */

/* harmony default export */ var mixins_calendar_with_events = (calendar_base.extend({
  name: 'calendar-with-events',
  directives: {
    ripple: ripple["a" /* default */]
  },
  props: {
    ...props.events,
    ...props.calendar,
    ...props.category
  },
  computed: {
    noEvents() {
      return this.events.length === 0;
    },
    parsedEvents() {
      return this.events.map(this.parseEvent);
    },
    parsedEventOverlapThreshold() {
      return parseInt(this.eventOverlapThreshold);
    },
    eventTimedFunction() {
      return typeof this.eventTimed === 'function' ? this.eventTimed : event => !!event[this.eventTimed];
    },
    eventCategoryFunction() {
      return typeof this.eventCategory === 'function' ? this.eventCategory : event => event[this.eventCategory];
    },
    eventTextColorFunction() {
      return typeof this.eventTextColor === 'function' ? this.eventTextColor : () => this.eventTextColor;
    },
    eventNameFunction() {
      return typeof this.eventName === 'function' ? this.eventName : (event, timedEvent) => event.input[this.eventName] || '';
    },
    eventModeFunction() {
      return typeof this.eventOverlapMode === 'function' ? this.eventOverlapMode : CalendarEventOverlapModes[this.eventOverlapMode];
    },
    eventWeekdays() {
      return this.parsedWeekdays;
    },
    categoryMode() {
      return this.type === 'category';
    }
  },
  methods: {
    eventColorFunction(e) {
      return typeof this.eventColor === 'function' ? this.eventColor(e) : e.color || this.eventColor;
    },
    parseEvent(input, index = 0) {
      return parseEvent(input, index, this.eventStart, this.eventEnd, this.eventTimedFunction(input), this.categoryMode ? this.eventCategoryFunction(input) : false);
    },
    formatTime(withTime, ampm) {
      const formatter = this.getFormatter({
        timeZone: 'UTC',
        hour: 'numeric',
        minute: withTime.minute > 0 ? 'numeric' : undefined
      });
      return formatter(withTime, true);
    },
    updateEventVisibility() {
      if (this.noEvents || !this.eventMore) {
        return;
      }
      const eventHeight = this.eventHeight;
      const eventsMap = this.getEventsMap();
      for (const date in eventsMap) {
        const {
          parent,
          events,
          more
        } = eventsMap[date];
        if (!more) {
          break;
        }
        const parentBounds = parent.getBoundingClientRect();
        const last = events.length - 1;
        const eventsSorted = events.map(event => ({
          event,
          bottom: event.getBoundingClientRect().bottom
        })).sort((a, b) => a.bottom - b.bottom);
        let hidden = 0;
        for (let i = 0; i <= last; i++) {
          const bottom = eventsSorted[i].bottom;
          const hide = i === last ? bottom > parentBounds.bottom : bottom + eventHeight > parentBounds.bottom;
          if (hide) {
            eventsSorted[i].event.style.display = 'none';
            hidden++;
          }
        }
        if (hidden) {
          more.style.display = '';
          more.innerHTML = this.$vuetify.lang.t(this.eventMoreText, hidden);
        } else {
          more.style.display = 'none';
        }
      }
    },
    getEventsMap() {
      const eventsMap = {};
      const elements = this.$refs.events;
      if (!elements || !elements.forEach) {
        return eventsMap;
      }
      elements.forEach(el => {
        const date = el.getAttribute('data-date');
        if (el.parentElement && date) {
          if (!(date in eventsMap)) {
            eventsMap[date] = {
              parent: el.parentElement,
              more: null,
              events: []
            };
          }
          if (el.getAttribute('data-more')) {
            eventsMap[date].more = el;
          } else {
            eventsMap[date].events.push(el);
            el.style.display = '';
          }
        }
      });
      return eventsMap;
    },
    genDayEvent({
      event
    }, day) {
      const eventHeight = this.eventHeight;
      const eventMarginBottom = this.eventMarginBottom;
      const dayIdentifier = Object(util_timestamp["k" /* getDayIdentifier */])(day);
      const week = day.week;
      const start = dayIdentifier === event.startIdentifier;
      let end = dayIdentifier === event.endIdentifier;
      let width = WIDTH_START;
      if (!this.categoryMode) {
        for (let i = day.index + 1; i < week.length; i++) {
          const weekdayIdentifier = Object(util_timestamp["k" /* getDayIdentifier */])(week[i]);
          if (event.endIdentifier >= weekdayIdentifier) {
            width += WIDTH_FULL;
            end = end || weekdayIdentifier === event.endIdentifier;
          } else {
            end = true;
            break;
          }
        }
      }
      const scope = {
        eventParsed: event,
        day,
        start,
        end,
        timed: false
      };
      return this.genEvent(event, scope, false, {
        staticClass: 'v-event',
        class: {
          'v-event-start': start,
          'v-event-end': end
        },
        style: {
          height: `${eventHeight}px`,
          width: `${width}%`,
          'margin-bottom': `${eventMarginBottom}px`
        },
        attrs: {
          'data-date': day.date
        },
        key: event.index,
        ref: 'events',
        refInFor: true
      });
    },
    genTimedEvent({
      event,
      left,
      width
    }, day) {
      if (day.timeDelta(event.end) < 0 || day.timeDelta(event.start) >= 1 || isEventHiddenOn(event, day)) {
        return false;
      }
      const dayIdentifier = Object(util_timestamp["k" /* getDayIdentifier */])(day);
      const start = event.startIdentifier >= dayIdentifier;
      const end = event.endIdentifier > dayIdentifier;
      const top = start ? day.timeToY(event.start) : 0;
      const bottom = end ? day.timeToY(MINUTES_IN_DAY) : day.timeToY(event.end);
      const height = Math.max(this.eventHeight, bottom - top);
      const scope = {
        eventParsed: event,
        day,
        start,
        end,
        timed: true
      };
      return this.genEvent(event, scope, true, {
        staticClass: 'v-event-timed',
        style: {
          top: `${top}px`,
          height: `${height}px`,
          left: `${left}%`,
          width: `${width}%`
        }
      });
    },
    genEvent(event, scopeInput, timedEvent, data) {
      var _a;
      const slot = this.$scopedSlots.event;
      const text = this.eventTextColorFunction(event.input);
      const background = this.eventColorFunction(event.input);
      const overlapsNoon = event.start.hour < 12 && event.end.hour >= 12;
      const singline = Object(util_timestamp["j" /* diffMinutes */])(event.start, event.end) <= this.parsedEventOverlapThreshold;
      const formatTime = this.formatTime;
      const timeSummary = () => formatTime(event.start, overlapsNoon) + ' - ' + formatTime(event.end, true);
      const eventSummary = () => {
        const name = this.eventNameFunction(event, timedEvent);
        if (event.start.hasTime) {
          if (timedEvent) {
            const time = timeSummary();
            const delimiter = singline ? ', ' : this.$createElement('br');
            return this.$createElement('span', {
              staticClass: 'v-event-summary'
            }, [this.$createElement('strong', [name]), delimiter, time]);
          } else {
            const time = formatTime(event.start, true);
            return this.$createElement('span', {
              staticClass: 'v-event-summary'
            }, [this.$createElement('strong', [time]), ' ', name]);
          }
        }
        return this.$createElement('span', {
          staticClass: 'v-event-summary'
        }, [name]);
      };
      const scope = {
        ...scopeInput,
        event: event.input,
        outside: scopeInput.day.outside,
        singline,
        overlapsNoon,
        formatTime,
        timeSummary,
        eventSummary
      };
      return this.$createElement('div', this.setTextColor(text, this.setBackgroundColor(background, {
        on: this.getDefaultMouseEventHandlers(':event', nativeEvent => ({
          ...scope,
          nativeEvent
        })),
        directives: [{
          name: 'ripple',
          value: (_a = this.eventRipple) !== null && _a !== void 0 ? _a : true
        }],
        ...data
      })), slot ? slot(scope) : [this.genName(eventSummary)]);
    },
    genName(eventSummary) {
      return this.$createElement('div', {
        staticClass: 'pl-1'
      }, [eventSummary()]);
    },
    genPlaceholder(day) {
      const height = this.eventHeight + this.eventMarginBottom;
      return this.$createElement('div', {
        style: {
          height: `${height}px`
        },
        attrs: {
          'data-date': day.date
        },
        ref: 'events',
        refInFor: true
      });
    },
    genMore(day) {
      var _a;
      const eventHeight = this.eventHeight;
      const eventMarginBottom = this.eventMarginBottom;
      return this.$createElement('div', {
        staticClass: 'v-event-more pl-1',
        class: {
          'v-outside': day.outside
        },
        attrs: {
          'data-date': day.date,
          'data-more': 1
        },
        directives: [{
          name: 'ripple',
          value: (_a = this.eventRipple) !== null && _a !== void 0 ? _a : true
        }],
        on: this.getDefaultMouseEventHandlers(':more', nativeEvent => {
          return {
            nativeEvent,
            ...day
          };
        }),
        style: {
          display: 'none',
          height: `${eventHeight}px`,
          'margin-bottom': `${eventMarginBottom}px`
        },
        ref: 'events',
        refInFor: true
      });
    },
    getVisibleEvents() {
      const start = Object(util_timestamp["k" /* getDayIdentifier */])(this.days[0]);
      const end = Object(util_timestamp["k" /* getDayIdentifier */])(this.days[this.days.length - 1]);
      return this.parsedEvents.filter(event => isEventOverlapping(event, start, end));
    },
    isEventForCategory(event, category) {
      return !this.categoryMode || typeof category === 'object' && category.categoryName && category.categoryName === event.category || typeof event.category === 'string' && category === event.category || typeof event.category !== 'string' && category === null;
    },
    getEventsForDay(day) {
      const identifier = Object(util_timestamp["k" /* getDayIdentifier */])(day);
      const firstWeekday = this.eventWeekdays[0];
      return this.parsedEvents.filter(event => isEventStart(event, day, identifier, firstWeekday));
    },
    getEventsForDayAll(day) {
      const identifier = Object(util_timestamp["k" /* getDayIdentifier */])(day);
      const firstWeekday = this.eventWeekdays[0];
      return this.parsedEvents.filter(event => event.allDay && (this.categoryMode ? isEventOn(event, identifier) : isEventStart(event, day, identifier, firstWeekday)) && this.isEventForCategory(event, day.category));
    },
    getEventsForDayTimed(day) {
      const identifier = Object(util_timestamp["k" /* getDayIdentifier */])(day);
      return this.parsedEvents.filter(event => !event.allDay && isEventOn(event, identifier) && this.isEventForCategory(event, day.category));
    },
    getScopedSlots() {
      if (this.noEvents) {
        return {
          ...this.$scopedSlots
        };
      }
      const mode = this.eventModeFunction(this.parsedEvents, this.eventWeekdays[0], this.parsedEventOverlapThreshold);
      const isNode = input => !!input;
      const getSlotChildren = (day, getter, mapper, timed) => {
        const events = getter(day);
        const visuals = mode(day, events, timed, this.categoryMode);
        if (timed) {
          return visuals.map(visual => mapper(visual, day)).filter(isNode);
        }
        const children = [];
        visuals.forEach((visual, index) => {
          while (children.length < visual.column) {
            children.push(this.genPlaceholder(day));
          }
          const mapped = mapper(visual, day);
          if (mapped) {
            children.push(mapped);
          }
        });
        return children;
      };
      const slots = this.$scopedSlots;
      const slotDay = slots.day;
      const slotDayHeader = slots['day-header'];
      const slotDayBody = slots['day-body'];
      return {
        ...slots,
        day: day => {
          let children = getSlotChildren(day, this.getEventsForDay, this.genDayEvent, false);
          if (children && children.length > 0 && this.eventMore) {
            children.push(this.genMore(day));
          }
          if (slotDay) {
            const slot = slotDay(day);
            if (slot) {
              children = children ? children.concat(slot) : slot;
            }
          }
          return children;
        },
        'day-header': day => {
          let children = getSlotChildren(day, this.getEventsForDayAll, this.genDayEvent, false);
          if (slotDayHeader) {
            const slot = slotDayHeader(day);
            if (slot) {
              children = children ? children.concat(slot) : slot;
            }
          }
          return children;
        },
        'day-body': day => {
          const events = getSlotChildren(day, this.getEventsForDayTimed, this.genTimedEvent, true);
          let children = [this.$createElement('div', {
            staticClass: 'v-event-timed-container'
          }, events)];
          if (slotDayBody) {
            const slot = slotDayBody(day);
            if (slot) {
              children = children.concat(slot);
            }
          }
          return children;
        }
      };
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCalendar/VCalendarWeekly.sass
var VCalendarWeekly = __webpack_require__(502);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dateTimeUtils.js
var dateTimeUtils = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/VCalendarWeekly.js
// Styles
 // Components

 // Mixins

 // Util





/* @vue/component */

/* harmony default export */ var VCalendar_VCalendarWeekly = (calendar_base.extend({
  name: 'v-calendar-weekly',
  props: props.weeks,
  computed: {
    staticClass() {
      return 'v-calendar-weekly';
    },
    classes() {
      return this.themeClasses;
    },
    parsedMinWeeks() {
      return parseInt(this.minWeeks);
    },
    days() {
      const minDays = this.parsedMinWeeks * this.parsedWeekdays.length;
      const start = this.getStartOfWeek(this.parsedStart);
      const end = this.getEndOfWeek(this.parsedEnd);
      return Object(util_timestamp["f" /* createDayList */])(start, end, this.times.today, this.weekdaySkips, Number.MAX_SAFE_INTEGER, minDays);
    },
    todayWeek() {
      const today = this.times.today;
      const start = this.getStartOfWeek(today);
      const end = this.getEndOfWeek(today);
      return Object(util_timestamp["f" /* createDayList */])(start, end, today, this.weekdaySkips, this.parsedWeekdays.length, this.parsedWeekdays.length);
    },
    monthFormatter() {
      if (this.monthFormat) {
        return this.monthFormat;
      }
      const longOptions = {
        timeZone: 'UTC',
        month: 'long'
      };
      const shortOptions = {
        timeZone: 'UTC',
        month: 'short'
      };
      return Object(util_timestamp["h" /* createNativeLocaleFormatter */])(this.currentLocale, (_tms, short) => short ? shortOptions : longOptions);
    }
  },
  methods: {
    isOutside(day) {
      const dayIdentifier = Object(util_timestamp["k" /* getDayIdentifier */])(day);
      return dayIdentifier < Object(util_timestamp["k" /* getDayIdentifier */])(this.parsedStart) || dayIdentifier > Object(util_timestamp["k" /* getDayIdentifier */])(this.parsedEnd);
    },
    genHead() {
      return this.$createElement('div', {
        staticClass: 'v-calendar-weekly__head',
        attrs: {
          role: 'row'
        }
      }, this.genHeadDays());
    },
    genHeadDays() {
      const header = this.todayWeek.map(this.genHeadDay);
      if (this.showWeek) {
        header.unshift(this.$createElement('div', {
          staticClass: 'v-calendar-weekly__head-weeknumber'
        }));
      }
      return header;
    },
    genHeadDay(day, index) {
      const outside = this.isOutside(this.days[index]);
      const color = day.present ? this.color : undefined;
      return this.$createElement('div', this.setTextColor(color, {
        key: day.date,
        staticClass: 'v-calendar-weekly__head-weekday',
        class: this.getRelativeClasses(day, outside),
        attrs: {
          role: 'columnheader'
        }
      }), this.weekdayFormatter(day, this.shortWeekdays));
    },
    genWeeks() {
      const days = this.days;
      const weekDays = this.parsedWeekdays.length;
      const weeks = [];
      for (let i = 0; i < days.length; i += weekDays) {
        weeks.push(this.genWeek(days.slice(i, i + weekDays), this.getWeekNumber(days[i])));
      }
      return weeks;
    },
    genWeek(week, weekNumber) {
      const weekNodes = week.map((day, index) => this.genDay(day, index, week));
      if (this.showWeek) {
        weekNodes.unshift(this.genWeekNumber(weekNumber));
      }
      return this.$createElement('div', {
        key: week[0].date,
        staticClass: 'v-calendar-weekly__week',
        attrs: {
          role: 'row'
        }
      }, weekNodes);
    },
    getWeekNumber(determineDay) {
      return Object(dateTimeUtils["b" /* weekNumber */])(determineDay.year, determineDay.month - 1, determineDay.day, this.parsedWeekdays[0], parseInt(this.localeFirstDayOfYear));
    },
    genWeekNumber(weekNumber) {
      return this.$createElement('div', {
        staticClass: 'v-calendar-weekly__weeknumber'
      }, [this.$createElement('small', String(weekNumber))]);
    },
    genDay(day, index, week) {
      const outside = this.isOutside(day);
      return this.$createElement('div', {
        key: day.date,
        staticClass: 'v-calendar-weekly__day',
        class: this.getRelativeClasses(day, outside),
        attrs: {
          role: 'cell'
        },
        on: this.getDefaultMouseEventHandlers(':day', nativeEvent => {
          return {
            nativeEvent,
            ...day
          };
        })
      }, [this.genDayLabel(day), ...(Object(helpers["s" /* getSlot */])(this, 'day', () => ({
        outside,
        index,
        week,
        ...day
      })) || [])]);
    },
    genDayLabel(day) {
      return this.$createElement('div', {
        staticClass: 'v-calendar-weekly__day-label'
      }, Object(helpers["s" /* getSlot */])(this, 'day-label', day) || [this.genDayLabelButton(day)]);
    },
    genDayLabelButton(day) {
      const color = day.present ? this.color : 'transparent';
      const hasMonth = day.day === 1 && this.showMonthOnFirst;
      return this.$createElement(VBtn["a" /* default */], {
        props: {
          color,
          fab: true,
          depressed: true,
          small: true
        },
        on: this.getMouseEventHandlers({
          'click:date': {
            event: 'click',
            stop: true
          },
          'contextmenu:date': {
            event: 'contextmenu',
            stop: true,
            prevent: true,
            result: false
          }
        }, nativeEvent => ({
          nativeEvent,
          ...day
        }))
      }, hasMonth ? this.monthFormatter(day, this.shortMonths) + ' ' + this.dayFormatter(day, false) : this.dayFormatter(day, false));
    },
    genDayMonth(day) {
      const color = day.present ? this.color : undefined;
      return this.$createElement('div', this.setTextColor(color, {
        staticClass: 'v-calendar-weekly__day-month'
      }), Object(helpers["s" /* getSlot */])(this, 'day-month', day) || this.monthFormatter(day, this.shortMonths));
    }
  },
  render(h) {
    return h('div', {
      staticClass: this.staticClass,
      class: this.classes,
      on: {
        dragstart: e => {
          e.preventDefault();
        }
      }
    }, [!this.hideHeader ? this.genHead() : '', ...this.genWeeks()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/VCalendarMonthly.js
// Styles
 // Mixins

 // Util


/* @vue/component */

/* harmony default export */ var VCalendarMonthly = (VCalendar_VCalendarWeekly.extend({
  name: 'v-calendar-monthly',
  computed: {
    staticClass() {
      return 'v-calendar-monthly v-calendar-weekly';
    },
    parsedStart() {
      return Object(util_timestamp["n" /* getStartOfMonth */])(Object(util_timestamp["v" /* parseTimestamp */])(this.start, true));
    },
    parsedEnd() {
      return Object(util_timestamp["l" /* getEndOfMonth */])(Object(util_timestamp["v" /* parseTimestamp */])(this.end, true));
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCalendar/VCalendarDaily.sass
var VCalendarDaily = __webpack_require__(550);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/mixins/calendar-with-intervals.js
// Mixins
 // Util



/* @vue/component */

/* harmony default export */ var calendar_with_intervals = (calendar_base.extend({
  name: 'calendar-with-intervals',
  props: props.intervals,
  computed: {
    parsedFirstInterval() {
      return parseInt(this.firstInterval);
    },
    parsedIntervalMinutes() {
      return parseInt(this.intervalMinutes);
    },
    parsedIntervalCount() {
      return parseInt(this.intervalCount);
    },
    parsedIntervalHeight() {
      return parseFloat(this.intervalHeight);
    },
    parsedFirstTime() {
      return Object(util_timestamp["u" /* parseTime */])(this.firstTime);
    },
    firstMinute() {
      const time = this.parsedFirstTime;
      return time !== false && time >= 0 && time <= util_timestamp["d" /* MINUTES_IN_DAY */] ? time : this.parsedFirstInterval * this.parsedIntervalMinutes;
    },
    bodyHeight() {
      return this.parsedIntervalCount * this.parsedIntervalHeight;
    },
    days() {
      return Object(util_timestamp["f" /* createDayList */])(this.parsedStart, this.parsedEnd, this.times.today, this.weekdaySkips, this.maxDays);
    },
    intervals() {
      const days = this.days;
      const first = this.firstMinute;
      const minutes = this.parsedIntervalMinutes;
      const count = this.parsedIntervalCount;
      const now = this.times.now;
      return days.map(d => Object(util_timestamp["g" /* createIntervalList */])(d, first, minutes, count, now));
    },
    intervalFormatter() {
      if (this.intervalFormat) {
        return this.intervalFormat;
      }
      const longOptions = {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit'
      };
      const shortOptions = {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: '2-digit'
      };
      const shortHourOptions = {
        timeZone: 'UTC',
        hour: 'numeric'
      };
      return Object(util_timestamp["h" /* createNativeLocaleFormatter */])(this.currentLocale, (tms, short) => short ? tms.minute === 0 ? shortHourOptions : shortOptions : longOptions);
    }
  },
  methods: {
    showIntervalLabelDefault(interval) {
      const first = this.intervals[0][0];
      const isFirst = first.hour === interval.hour && first.minute === interval.minute;
      return !isFirst;
    },
    intervalStyleDefault(_interval) {
      return undefined;
    },
    getTimestampAtEvent(e, day) {
      const timestamp = Object(util_timestamp["e" /* copyTimestamp */])(day);
      const bounds = e.currentTarget.getBoundingClientRect();
      const baseMinutes = this.firstMinute;
      const touchEvent = e;
      const mouseEvent = e;
      const touches = touchEvent.changedTouches || touchEvent.touches;
      const clientY = touches && touches[0] ? touches[0].clientY : mouseEvent.clientY;
      const addIntervals = (clientY - bounds.top) / this.parsedIntervalHeight;
      const addMinutes = Math.floor(addIntervals * this.parsedIntervalMinutes);
      const minutes = baseMinutes + addMinutes;
      return Object(util_timestamp["B" /* updateMinutes */])(timestamp, minutes, this.times.now);
    },
    getSlotScope(timestamp) {
      const scope = Object(util_timestamp["e" /* copyTimestamp */])(timestamp);
      scope.timeToY = this.timeToY;
      scope.timeDelta = this.timeDelta;
      scope.minutesToPixels = this.minutesToPixels;
      scope.week = this.days;
      return scope;
    },
    scrollToTime(time) {
      const y = this.timeToY(time);
      const pane = this.$refs.scrollArea;
      if (y === false || !pane) {
        return false;
      }
      pane.scrollTop = y;
      return true;
    },
    minutesToPixels(minutes) {
      return minutes / this.parsedIntervalMinutes * this.parsedIntervalHeight;
    },
    timeToY(time, clamp = true) {
      let y = this.timeDelta(time);
      if (y !== false) {
        y *= this.bodyHeight;
        if (clamp) {
          if (y < 0) {
            y = 0;
          }
          if (y > this.bodyHeight) {
            y = this.bodyHeight;
          }
        }
      }
      return y;
    },
    timeDelta(time) {
      const minutes = Object(util_timestamp["u" /* parseTime */])(time);
      if (minutes === false) {
        return false;
      }
      const min = this.firstMinute;
      const gap = this.parsedIntervalCount * this.parsedIntervalMinutes;
      return (minutes - min) / gap;
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/VCalendarDaily.js
// Styles
 // Directives

 // Components

 // Mixins

 // Util


/* @vue/component */

/* harmony default export */ var VCalendar_VCalendarDaily = (calendar_with_intervals.extend({
  name: 'v-calendar-daily',
  directives: {
    Resize: resize["a" /* default */]
  },
  data: () => ({
    scrollPush: 0
  }),
  computed: {
    classes() {
      return {
        'v-calendar-daily': true,
        ...this.themeClasses
      };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(this.onResize);
    },
    onResize() {
      this.scrollPush = this.getScrollPush();
    },
    getScrollPush() {
      const area = this.$refs.scrollArea;
      const pane = this.$refs.pane;
      return area && pane ? area.offsetWidth - pane.offsetWidth : 0;
    },
    genHead() {
      return this.$createElement('div', {
        staticClass: 'v-calendar-daily__head',
        style: {
          marginRight: this.scrollPush + 'px'
        }
      }, [this.genHeadIntervals(), ...this.genHeadDays()]);
    },
    genHeadIntervals() {
      const width = Object(helpers["h" /* convertToUnit */])(this.intervalWidth);
      return this.$createElement('div', {
        staticClass: 'v-calendar-daily__intervals-head',
        style: {
          width
        }
      }, Object(helpers["s" /* getSlot */])(this, 'interval-header'));
    },
    genHeadDays() {
      return this.days.map(this.genHeadDay);
    },
    genHeadDay(day, index) {
      return this.$createElement('div', {
        key: day.date,
        staticClass: 'v-calendar-daily_head-day',
        class: this.getRelativeClasses(day),
        on: this.getDefaultMouseEventHandlers(':day', nativeEvent => {
          return {
            nativeEvent,
            ...this.getSlotScope(day)
          };
        })
      }, [this.genHeadWeekday(day), this.genHeadDayLabel(day), ...this.genDayHeader(day, index)]);
    },
    genDayHeader(day, index) {
      return Object(helpers["s" /* getSlot */])(this, 'day-header', () => ({
        week: this.days,
        ...day,
        index
      })) || [];
    },
    genHeadWeekday(day) {
      const color = day.present ? this.color : undefined;
      return this.$createElement('div', this.setTextColor(color, {
        staticClass: 'v-calendar-daily_head-weekday'
      }), this.weekdayFormatter(day, this.shortWeekdays));
    },
    genHeadDayLabel(day) {
      return this.$createElement('div', {
        staticClass: 'v-calendar-daily_head-day-label'
      }, Object(helpers["s" /* getSlot */])(this, 'day-label-header', day) || [this.genHeadDayButton(day)]);
    },
    genHeadDayButton(day) {
      const color = day.present ? this.color : 'transparent';
      return this.$createElement(VBtn["a" /* default */], {
        props: {
          color,
          fab: true,
          depressed: true
        },
        on: this.getMouseEventHandlers({
          'click:date': {
            event: 'click',
            stop: true
          },
          'contextmenu:date': {
            event: 'contextmenu',
            stop: true,
            prevent: true,
            result: false
          }
        }, nativeEvent => {
          return {
            nativeEvent,
            ...day
          };
        })
      }, this.dayFormatter(day, false));
    },
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-calendar-daily__body'
      }, [this.genScrollArea()]);
    },
    genScrollArea() {
      return this.$createElement('div', {
        ref: 'scrollArea',
        staticClass: 'v-calendar-daily__scroll-area'
      }, [this.genPane()]);
    },
    genPane() {
      return this.$createElement('div', {
        ref: 'pane',
        staticClass: 'v-calendar-daily__pane',
        style: {
          height: Object(helpers["h" /* convertToUnit */])(this.bodyHeight)
        }
      }, [this.genDayContainer()]);
    },
    genDayContainer() {
      return this.$createElement('div', {
        staticClass: 'v-calendar-daily__day-container'
      }, [this.genBodyIntervals(), ...this.genDays()]);
    },
    genDays() {
      return this.days.map(this.genDay);
    },
    genDay(day, index) {
      return this.$createElement('div', {
        key: day.date,
        staticClass: 'v-calendar-daily__day',
        class: this.getRelativeClasses(day),
        on: this.getDefaultMouseEventHandlers(':time', nativeEvent => {
          return {
            nativeEvent,
            ...this.getSlotScope(this.getTimestampAtEvent(nativeEvent, day))
          };
        })
      }, [...this.genDayIntervals(index), ...this.genDayBody(day)]);
    },
    genDayBody(day) {
      return Object(helpers["s" /* getSlot */])(this, 'day-body', () => this.getSlotScope(day)) || [];
    },
    genDayIntervals(index) {
      return this.intervals[index].map(this.genDayInterval);
    },
    genDayInterval(interval) {
      const height = Object(helpers["h" /* convertToUnit */])(this.intervalHeight);
      const styler = this.intervalStyle || this.intervalStyleDefault;
      const data = {
        key: interval.time,
        staticClass: 'v-calendar-daily__day-interval',
        style: {
          height,
          ...styler(interval)
        }
      };
      const children = Object(helpers["s" /* getSlot */])(this, 'interval', () => this.getSlotScope(interval));
      return this.$createElement('div', data, children);
    },
    genBodyIntervals() {
      const width = Object(helpers["h" /* convertToUnit */])(this.intervalWidth);
      const data = {
        staticClass: 'v-calendar-daily__intervals-body',
        style: {
          width
        },
        on: this.getDefaultMouseEventHandlers(':interval', nativeEvent => {
          return {
            nativeEvent,
            ...this.getTimestampAtEvent(nativeEvent, this.parsedStart)
          };
        })
      };
      return this.$createElement('div', data, this.genIntervalLabels());
    },
    genIntervalLabels() {
      if (!this.intervals.length) return null;
      return this.intervals[0].map(this.genIntervalLabel);
    },
    genIntervalLabel(interval) {
      const height = Object(helpers["h" /* convertToUnit */])(this.intervalHeight);
      const short = this.shortIntervals;
      const shower = this.showIntervalLabel || this.showIntervalLabelDefault;
      const show = shower(interval);
      const label = show ? this.intervalFormatter(interval, short) : undefined;
      return this.$createElement('div', {
        key: interval.time,
        staticClass: 'v-calendar-daily__interval',
        style: {
          height
        }
      }, [this.$createElement('div', {
        staticClass: 'v-calendar-daily__interval-text'
      }, label)]);
    }
  },
  render(h) {
    return h('div', {
      class: this.classes,
      on: {
        dragstart: e => {
          e.preventDefault();
        }
      },
      directives: [{
        modifiers: {
          quiet: true
        },
        name: 'resize',
        value: this.onResize
      }]
    }, [!this.hideHeader ? this.genHead() : '', this.genBody()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCalendar/VCalendarCategory.sass
var VCalendarCategory = __webpack_require__(552);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/util/parser.js
function parsedCategoryText(category, categoryText) {
  return typeof categoryText === 'string' && typeof category === 'object' && category ? category[categoryText] : typeof categoryText === 'function' ? categoryText(category) : category;
}
function getParsedCategories(categories, categoryText) {
  if (typeof categories === 'string') return categories.split(/\s*,\s/);
  if (Array.isArray(categories)) {
    return categories.map(category => {
      if (typeof category === 'string') return category;
      const categoryName = typeof category.categoryName === 'string' ? category.categoryName : parsedCategoryText(category, categoryText);
      return {
        ...category,
        categoryName
      };
    });
  }
  return [];
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/VCalendarCategory.js
// Styles
 // Mixins

 // Util




/* @vue/component */

/* harmony default export */ var VCalendar_VCalendarCategory = (VCalendar_VCalendarDaily.extend({
  name: 'v-calendar-category',
  props: props.category,
  computed: {
    classes() {
      return {
        'v-calendar-daily': true,
        'v-calendar-category': true,
        ...this.themeClasses
      };
    },
    parsedCategories() {
      return getParsedCategories(this.categories, this.categoryText);
    }
  },
  methods: {
    genDayHeader(day, index) {
      const data = {
        staticClass: 'v-calendar-category__columns'
      };
      const scope = {
        week: this.days,
        ...day,
        index
      };
      const children = this.parsedCategories.map(category => {
        return this.genDayHeaderCategory(day, this.getCategoryScope(scope, category));
      });
      return [this.$createElement('div', data, children)];
    },
    getCategoryScope(scope, category) {
      const cat = typeof category === 'object' && category && category.categoryName === this.categoryForInvalid ? null : category;
      return {
        ...scope,
        category: cat
      };
    },
    genDayHeaderCategory(day, scope) {
      const headerTitle = typeof scope.category === 'object' ? scope.category.categoryName : scope.category;
      return this.$createElement('div', {
        staticClass: 'v-calendar-category__column-header',
        on: this.getDefaultMouseEventHandlers(':day-category', e => {
          return this.getCategoryScope(this.getSlotScope(day), scope.category);
        })
      }, [Object(helpers["s" /* getSlot */])(this, 'category', scope) || this.genDayHeaderCategoryTitle(headerTitle), Object(helpers["s" /* getSlot */])(this, 'day-header', scope)]);
    },
    genDayHeaderCategoryTitle(categoryName) {
      return this.$createElement('div', {
        staticClass: 'v-calendar-category__category'
      }, categoryName === null ? this.categoryForInvalid : categoryName);
    },
    genDays() {
      const days = [];
      this.days.forEach((d, j) => {
        const day = new Array(this.parsedCategories.length || 1);
        day.fill(d);
        days.push(...day.map((v, i) => this.genDay(v, j, i)));
      });
      return days;
    },
    genDay(day, index, categoryIndex) {
      const category = this.parsedCategories[categoryIndex];
      return this.$createElement('div', {
        key: day.date + '-' + categoryIndex,
        staticClass: 'v-calendar-daily__day',
        class: this.getRelativeClasses(day),
        on: this.getDefaultMouseEventHandlers(':time', e => {
          return this.getSlotScope(this.getTimestampAtEvent(e, day));
        })
      }, [...this.genDayIntervals(index, category), ...this.genDayBody(day, category)]);
    },
    genDayIntervals(index, category) {
      return this.intervals[index].map(v => this.genDayInterval(v, category));
    },
    genDayInterval(interval, category) {
      const height = Object(helpers["h" /* convertToUnit */])(this.intervalHeight);
      const styler = this.intervalStyle || this.intervalStyleDefault;
      const data = {
        key: interval.time,
        staticClass: 'v-calendar-daily__day-interval',
        style: {
          height,
          ...styler({
            ...interval,
            category
          })
        }
      };
      const children = Object(helpers["s" /* getSlot */])(this, 'interval', () => this.getCategoryScope(this.getSlotScope(interval), category));
      return this.$createElement('div', data, children);
    },
    genDayBody(day, category) {
      const data = {
        staticClass: 'v-calendar-category__columns'
      };
      const children = [this.genDayBodyCategory(day, category)];
      return [this.$createElement('div', data, children)];
    },
    genDayBodyCategory(day, category) {
      const data = {
        staticClass: 'v-calendar-category__column',
        on: this.getDefaultMouseEventHandlers(':time-category', e => {
          return this.getCategoryScope(this.getSlotScope(this.getTimestampAtEvent(e, day)), category);
        })
      };
      const children = Object(helpers["s" /* getSlot */])(this, 'day-body', () => this.getCategoryScope(this.getSlotScope(day), category));
      return this.$createElement('div', data, children);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCalendar/VCalendar.js
// Styles
// import '../../stylus/components/_calendar-daily.styl'
// Mixins
 // Util


 // Calendars






/* @vue/component */

/* harmony default export */ var VCalendar = __webpack_exports__["a"] = (mixins_calendar_with_events.extend({
  name: 'v-calendar',
  props: {
    ...props.calendar,
    ...props.weeks,
    ...props.intervals,
    ...props.category
  },
  data: () => ({
    lastStart: null,
    lastEnd: null
  }),
  computed: {
    parsedValue() {
      return Object(util_timestamp["F" /* validateTimestamp */])(this.value) ? Object(util_timestamp["v" /* parseTimestamp */])(this.value, true) : this.parsedStart || this.times.today;
    },
    parsedCategoryDays() {
      return parseInt(this.categoryDays) || 1;
    },
    renderProps() {
      const around = this.parsedValue;
      let component = null;
      let maxDays = this.maxDays;
      let weekdays = this.parsedWeekdays;
      let categories = this.parsedCategories;
      let start = around;
      let end = around;
      switch (this.type) {
        case 'month':
          component = VCalendarMonthly;
          start = Object(util_timestamp["n" /* getStartOfMonth */])(around);
          end = Object(util_timestamp["l" /* getEndOfMonth */])(around);
          break;
        case 'week':
          component = VCalendar_VCalendarDaily;
          start = this.getStartOfWeek(around);
          end = this.getEndOfWeek(around);
          maxDays = 7;
          break;
        case 'day':
          component = VCalendar_VCalendarDaily;
          maxDays = 1;
          weekdays = [start.weekday];
          break;
        case '4day':
          component = VCalendar_VCalendarDaily;
          end = Object(util_timestamp["x" /* relativeDays */])(Object(util_timestamp["e" /* copyTimestamp */])(end), util_timestamp["s" /* nextDay */], 3);
          Object(util_timestamp["z" /* updateFormatted */])(end);
          maxDays = 4;
          weekdays = [start.weekday, (start.weekday + 1) % 7, (start.weekday + 2) % 7, (start.weekday + 3) % 7];
          break;
        case 'custom-weekly':
          component = VCalendar_VCalendarWeekly;
          start = this.parsedStart || around;
          end = this.parsedEnd;
          break;
        case 'custom-daily':
          component = VCalendar_VCalendarDaily;
          start = this.parsedStart || around;
          end = this.parsedEnd;
          break;
        case 'category':
          const days = this.parsedCategoryDays;
          component = VCalendar_VCalendarCategory;
          end = Object(util_timestamp["x" /* relativeDays */])(Object(util_timestamp["e" /* copyTimestamp */])(end), util_timestamp["s" /* nextDay */], days);
          Object(util_timestamp["z" /* updateFormatted */])(end);
          maxDays = days;
          weekdays = [];
          for (let i = 0; i < days; i++) {
            weekdays.push((start.weekday + i) % 7);
          }
          categories = this.getCategoryList(categories);
          break;
        default:
          throw new Error(this.type + ' is not a valid Calendar type');
      }
      return {
        component,
        start,
        end,
        maxDays,
        weekdays,
        categories
      };
    },
    eventWeekdays() {
      return this.renderProps.weekdays;
    },
    categoryMode() {
      return this.type === 'category';
    },
    title() {
      const {
        start,
        end
      } = this.renderProps;
      const spanYears = start.year !== end.year;
      const spanMonths = spanYears || start.month !== end.month;
      if (spanYears) {
        return this.monthShortFormatter(start, true) + ' ' + start.year + ' - ' + this.monthShortFormatter(end, true) + ' ' + end.year;
      }
      if (spanMonths) {
        return this.monthShortFormatter(start, true) + ' - ' + this.monthShortFormatter(end, true) + ' ' + end.year;
      } else {
        return this.monthLongFormatter(start, false) + ' ' + start.year;
      }
    },
    monthLongFormatter() {
      return this.getFormatter({
        timeZone: 'UTC',
        month: 'long'
      });
    },
    monthShortFormatter() {
      return this.getFormatter({
        timeZone: 'UTC',
        month: 'short'
      });
    },
    parsedCategories() {
      return getParsedCategories(this.categories, this.categoryText);
    }
  },
  watch: {
    renderProps: 'checkChange'
  },
  mounted() {
    this.updateEventVisibility();
    this.checkChange();
  },
  updated() {
    window.requestAnimationFrame(this.updateEventVisibility);
  },
  methods: {
    checkChange() {
      const {
        lastStart,
        lastEnd
      } = this;
      const {
        start,
        end
      } = this.renderProps;
      if (!lastStart || !lastEnd || start.date !== lastStart.date || end.date !== lastEnd.date) {
        this.lastStart = start;
        this.lastEnd = end;
        this.$emit('change', {
          start,
          end
        });
      }
    },
    move(amount = 1) {
      const moved = Object(util_timestamp["e" /* copyTimestamp */])(this.parsedValue);
      const forward = amount > 0;
      const mover = forward ? util_timestamp["s" /* nextDay */] : util_timestamp["w" /* prevDay */];
      const limit = forward ? util_timestamp["a" /* DAYS_IN_MONTH_MAX */] : util_timestamp["c" /* DAY_MIN */];
      let times = forward ? amount : -amount;
      while (--times >= 0) {
        switch (this.type) {
          case 'month':
            moved.day = limit;
            mover(moved);
            break;
          case 'week':
            Object(util_timestamp["x" /* relativeDays */])(moved, mover, util_timestamp["b" /* DAYS_IN_WEEK */]);
            break;
          case 'day':
            Object(util_timestamp["x" /* relativeDays */])(moved, mover, 1);
            break;
          case '4day':
            Object(util_timestamp["x" /* relativeDays */])(moved, mover, 4);
            break;
          case 'category':
            Object(util_timestamp["x" /* relativeDays */])(moved, mover, this.parsedCategoryDays);
            break;
        }
      }
      Object(util_timestamp["D" /* updateWeekday */])(moved);
      Object(util_timestamp["z" /* updateFormatted */])(moved);
      Object(util_timestamp["C" /* updateRelative */])(moved, this.times.now);
      if (this.value instanceof Date) {
        this.$emit('input', Object(util_timestamp["y" /* timestampToDate */])(moved));
      } else if (typeof this.value === 'number') {
        this.$emit('input', Object(util_timestamp["y" /* timestampToDate */])(moved).getTime());
      } else {
        this.$emit('input', moved.date);
      }
      this.$emit('moved', moved);
    },
    next(amount = 1) {
      this.move(amount);
    },
    prev(amount = 1) {
      this.move(-amount);
    },
    timeToY(time, clamp = true) {
      const c = this.$children[0];
      if (c && c.timeToY) {
        return c.timeToY(time, clamp);
      } else {
        return false;
      }
    },
    timeDelta(time) {
      const c = this.$children[0];
      if (c && c.timeDelta) {
        return c.timeDelta(time);
      } else {
        return false;
      }
    },
    minutesToPixels(minutes) {
      const c = this.$children[0];
      if (c && c.minutesToPixels) {
        return c.minutesToPixels(minutes);
      } else {
        return -1;
      }
    },
    scrollToTime(time) {
      const c = this.$children[0];
      if (c && c.scrollToTime) {
        return c.scrollToTime(time);
      } else {
        return false;
      }
    },
    parseTimestamp(input, required) {
      return Object(util_timestamp["v" /* parseTimestamp */])(input, required, this.times.now);
    },
    timestampToDate(timestamp) {
      return Object(util_timestamp["y" /* timestampToDate */])(timestamp);
    },
    getCategoryList(categories) {
      if (!this.noEvents) {
        const categoryMap = categories.reduce((map, category, index) => {
          if (typeof category === 'object' && category.categoryName) map[category.categoryName] = {
            index,
            count: 0
          };else if (typeof category === 'string') map[category] = {
            index,
            count: 0
          };
          return map;
        }, {});
        if (!this.categoryHideDynamic || !this.categoryShowAll) {
          let categoryLength = categories.length;
          this.parsedEvents.forEach(ev => {
            let category = ev.category;
            if (typeof category !== 'string') {
              category = this.categoryForInvalid;
            }
            if (!category) {
              return;
            }
            if (category in categoryMap) {
              categoryMap[category].count++;
            } else if (!this.categoryHideDynamic) {
              categoryMap[category] = {
                index: categoryLength++,
                count: 1
              };
            }
          });
        }
        if (!this.categoryShowAll) {
          for (const category in categoryMap) {
            if (categoryMap[category].count === 0) {
              delete categoryMap[category];
            }
          }
        }
        categories = categories.filter(category => {
          if (typeof category === 'object' && category.categoryName) {
            return categoryMap.hasOwnProperty(category.categoryName);
          } else if (typeof category === 'string') {
            return categoryMap.hasOwnProperty(category);
          }
          return false;
        });
      }
      return categories;
    }
  },
  render(h) {
    const {
      start,
      end,
      maxDays,
      component,
      weekdays,
      categories
    } = this.renderProps;
    return h(component, {
      staticClass: 'v-calendar',
      class: {
        'v-calendar-events': !this.noEvents
      },
      props: {
        ...this.$props,
        start: start.date,
        end: end.date,
        maxDays,
        weekdays,
        categories
      },
      attrs: {
        role: 'grid'
      },
      directives: [{
        modifiers: {
          quiet: true
        },
        name: 'resize',
        value: this.updateEventVisibility
      }],
      on: {
        ...this.$listeners,
        'click:date': (day, e) => {
          if (this.$listeners.input) {
            this.$emit('input', day.date);
          }
          if (this.$listeners['click:date']) {
            this.$emit('click:date', day, e);
          }
        }
      },
      scopedSlots: this.getScopedSlots()
    });
  }
}));

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ba8540_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(770);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ba8540_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ba8540_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ba8540_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_33ba8540_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-event-draggable[data-v-33ba8540]{padding-left:6px}.v-event-timed[data-v-33ba8540]{-moz-user-select:none;user-select:none;-webkit-user-select:none}.v-event-drag-bottom[data-v-33ba8540]{bottom:4px;cursor:ns-resize;height:4px;left:0;position:absolute;right:0}.v-event-drag-bottom[data-v-33ba8540]:after{border-bottom:1px solid #fff;border-top:1px solid #fff;content:\"\";display:none;height:4px;left:50%;margin-left:-8px;opacity:.8;position:absolute;width:16px}.v-event-drag-bottom[data-v-33ba8540]:hover:after{display:block}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map