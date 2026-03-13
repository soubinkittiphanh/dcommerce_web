<template>
  <div class="line-chart-container">
    <canvas ref="chart" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
export default {
  name: 'LineChart',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        labels: [],
        datasets: []
      })
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      })
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    if (process.client) {
      this.createChart()
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy()
    }
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.updateChart()
      }
    }
  },
  methods: {
    async createChart() {
      if (!process.client) return
      
      try {
        // Dynamically import Chart.js to avoid SSR issues
        const { default: Chart } = await import('chart.js/auto')
        
        const ctx = this.$refs.chart.getContext('2d')
        
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: this.options
        })
      } catch (error) {
        console.error('Failed to create chart:', error)
      }
    },
    updateChart() {
      if (this.chart) {
        this.chart.data = this.data
        this.chart.update()
      }
    }
  }
}
</script>

<style scoped>
.line-chart-container {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>