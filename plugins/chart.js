
import Vue from 'vue';
import { Chart } from 'chart.js';
import VueChart from 'vue-chartjs';

Vue.use(VueChart);
Vue.component('chart', {
  extends: Chart,
  mixins: [VueChart.mixins.reactiveProp],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
});