// import Vue from 'vue';
// import GSTC from 'gantt-schedule-timeline-calendar';

// Vue.prototype.$gstc = GSTC;


// plugins/gantt-schedule-timeline-calendar.js
import Vue from 'vue';
import GSTC from 'gantt-schedule-timeline-calendar';

console.log(GSTC); // This should log the GSTC object to ensure it's imported correctly

Vue.prototype.$GSTC = GSTC;
