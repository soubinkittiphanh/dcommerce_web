<template>
  <div class="metric-card" :class="{ 'metric-card--alert': alert }">
    <div class="metric-card__content">
      <div class="metric-card__header">
        <div class="metric-card__text">
          <h3 class="metric-card__title">{{ title }}</h3>
          <p class="metric-card__value">{{ value }}</p>
          <p v-if="subtitle" class="metric-card__subtitle">{{ subtitle }}</p>
        </div>
        METRIC
        <div class="metric-card__icon-container" :style="{ backgroundColor: `${color}15` }">
          <component 
            :is="iconComponent" 
            class="metric-card__icon"
            :style="{ color: color }"
          />
        </div>
      </div>
      
      <div v-if="trend !== null && trend !== undefined" class="metric-card__trend">
        <TrendingUpIcon 
          v-if="trend >= 0" 
          class="metric-card__trend-icon metric-card__trend-icon--positive" 
        />
        <TrendingDownIcon 
          v-else 
          class="metric-card__trend-icon metric-card__trend-icon--negative" 
        />
        <span 
          class="metric-card__trend-text"
          :class="{
            'metric-card__trend-text--positive': trend >= 0,
            'metric-card__trend-text--negative': trend < 0
          }"
        >
          {{ Math.abs(trend).toFixed(1) }}% vs last period
        </span>
      </div>
    </div>
    
    <!-- Alert indicator -->
    <div v-if="alert" class="metric-card__alert-indicator">
      <AlertTriangleIcon class="metric-card__alert-icon" />
    </div>
  </div>
</template>

<script>
import { 
  DollarSignIcon, 
  ShoppingCartIcon, 
  TrendingUpIcon, 
  TrendingDownIcon,
  AlertTriangleIcon,
  UsersIcon,
  PackageIcon,
  ClockIcon,
  BarChart3Icon,
  PieChartIcon
} from 'vue-feather-icons'

export default {
  name: 'MetricCard',
  components: {
    DollarSignIcon,
    ShoppingCartIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    AlertTriangleIcon,
    UsersIcon,
    PackageIcon,
    ClockIcon,
    BarChart3Icon,
    PieChartIcon
  },
  
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'bar-chart-3'
    },
    color: {
      type: String,
      default: '#3B82F6'
    },
    trend: {
      type: Number,
      default: null
    },
    alert: {
      type: Boolean,
      default: false
    }
  },
  
  computed: {
    iconComponent() {
      const iconMap = {
        'dollar-sign': 'DollarSignIcon',
        'shopping-cart': 'ShoppingCartIcon',
        'trending-up': 'TrendingUpIcon',
        'alert-triangle': 'AlertTriangleIcon',
        'users': 'UsersIcon',
        'package': 'PackageIcon',
        'clock': 'ClockIcon',
        'bar-chart-3': 'BarChart3Icon',
        'pie-chart': 'PieChartIcon'
      }
      
      return iconMap[this.icon] || 'BarChart3Icon'
    }
  }
}
</script>

<style scoped>
.metric-card {
  position: relative;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-left: 4px solid transparent;
  transition: all 0.2s ease;
  overflow: hidden;
}

.metric-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.metric-card--alert {
  border-left-color: #f59e0b;
  background: linear-gradient(135deg, #fffbeb 0%, white 100%);
}

.metric-card__content {
  padding: 1.5rem;
}

.metric-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.metric-card__text {
  flex: 1;
}

.metric-card__title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.metric-card__value {
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin: 0 0 0.25rem 0;
  line-height: 1.1;
}

.metric-card__subtitle {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.3;
}

.metric-card__icon-container {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}

.metric-card__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.metric-card__trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
}

.metric-card__trend-icon {
  width: 1rem;
  height: 1rem;
}

.metric-card__trend-icon--positive {
  color: #059669;
}

.metric-card__trend-icon--negative {
  color: #dc2626;
}

.metric-card__trend-text {
  font-size: 0.75rem;
  font-weight: 500;
}

.metric-card__trend-text--positive {
  color: #059669;
}

.metric-card__trend-text--negative {
  color: #dc2626;
}

.metric-card__alert-indicator {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #f59e0b;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

.metric-card__alert-icon {
  width: 0.875rem;
  height: 0.875rem;
  color: white;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .metric-card__content {
    padding: 1rem;
  }
  
  .metric-card__header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .metric-card__icon-container {
    align-self: flex-end;
    margin-left: 0;
  }
  
  .metric-card__value {
    font-size: 1.5rem;
  }
}

/* Dark mode support (if needed) */
@media (prefers-color-scheme: dark) {
  .metric-card {
    background: #1f2937;
    border-color: #374151;
  }
  
  .metric-card__title {
    color: #9ca3af;
  }
  
  .metric-card__value {
    color: #f9fafb;
  }
  
  .metric-card__subtitle {
    color: #9ca3af;
  }
  
  .metric-card__trend {
    border-top-color: #374151;
  }
}
</style>