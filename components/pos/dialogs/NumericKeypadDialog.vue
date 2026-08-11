<template>
  <v-dialog v-model="internalValue" max-width="400px" persistent class="keypad-dialog">
    <v-card class="keypad-card rounded-xl overflow-hidden elevation-12">
      <!-- Title Header - Clean and Lightweight -->
      <v-card-title class="light-header py-3 px-5 d-flex align-center">
        <v-icon left color="primary" class="mr-2">mdi-calculator</v-icon>
        <span class="font-weight-bold text-subtitle-1 primary--text">{{ title }}</span>
        <v-spacer />
        <v-btn icon color="grey darken-1" class="close-btn" @click="handleCancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-4 bg-white">
        <!-- Display Screen (Calculator-Style - Light Minimal) -->
        <div class="display-screen mb-4 pa-4 rounded-xl d-flex flex-column align-end justify-center">
          <span class="display-label mb-1" style="font-size: 13px;">ຍອດປ້ອນ (Input Value)</span>
          <div class="d-flex align-center w-100 justify-end">
            <span class="display-value mr-2">{{ formattedInputValue }}</span>
            <span class="display-suffix text-h6 font-weight-bold">{{ suffix }}</span>
          </div>
        </div>

        <!-- Presets Row (Cash Notes / Disount Quick Choices) -->
        <div v-if="normalizedPresets && normalizedPresets.length > 0" class="presets-container mb-4">
          <div class="font-weight-medium grey--text text--darken-2 mb-2 d-flex align-center" style="font-size: 13px;">
            <v-icon small class="mr-1" color="primary">mdi-flash</v-icon> ປຸ່ມລັດ (Quick Presets)
          </div>
          <div class="d-flex flex-wrap gap-2">
            <v-btn
              v-for="(preset, idx) in normalizedPresets"
              :key="idx"
              small
              outlined
              :color="preset.action === 'add' ? 'success' : 'primary'"
              class="preset-chip rounded-lg"
              @click="applyPreset(preset)"
            >
              {{ preset.label }}
            </v-btn>
          </div>
        </div>

        <!-- Keypad Grid -->
        <div class="keypad-grid">
          <!-- Row 1 -->
          <v-btn class="keypad-btn" @click="appendDigit('7')">7</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('8')">8</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('9')">9</v-btn>
          <v-btn class="keypad-btn action-btn backspace-btn" color="amber lighten-4" @click="backspace">
            <v-icon color="amber darken-4">mdi-backspace-outline</v-icon>
          </v-btn>

          <!-- Row 2 -->
          <v-btn class="keypad-btn" @click="appendDigit('4')">4</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('5')">5</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('6')">6</v-btn>
          <v-btn class="keypad-btn action-btn clear-btn" color="red lighten-4" @click="clearAll">
            <span class="red--text text--darken-4 font-weight-bold">C</span>
          </v-btn>

          <!-- Row 3 -->
          <v-btn class="keypad-btn" @click="appendDigit('1')">1</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('2')">2</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('3')">3</v-btn>
          <v-btn class="keypad-btn confirm-btn" @click="handleConfirm">
            <div class="d-flex flex-column align-center">
              <v-icon dark class="mb-1">mdi-check-bold</v-icon>
              <span class="font-weight-bold text-subtitle-2">OK</span>
            </div>
          </v-btn>

          <!-- Row 4 -->
          <v-btn class="keypad-btn" @click="appendDigit('0')">0</v-btn>
          <v-btn class="keypad-btn" @click="appendDigit('000')">000</v-btn>
          <v-btn class="keypad-btn" @click="appendDecimal">.</v-btn>
        </div>
      </v-card-text>

      <v-card-actions class="px-5 py-3 bg-light border-top d-flex justify-space-between align-center">
        <span class="grey--text d-flex align-center" style="font-size: 12px; line-height: 1.4;">
          <v-icon x-small class="mr-1" color="grey darken-1">mdi-keyboard-outline</v-icon>
          ຮອງຮັບແປ້ນພິມຄອມພິວເຕີ (Supports physical keyboard)
        </span>
        <v-btn color="grey darken-1" text class="px-4 rounded-lg" @click="handleCancel">
          ຍົກເລີກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NumericKeypadDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'ປ້ອນຂໍ້ມູນ'
    },
    initialValue: {
      type: [Number, String],
      default: 0
    },
    suffix: {
      type: String,
      default: ''
    },
    presets: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      inputValue: ''
    }
  },

  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },

    normalizedPresets() {
      if (!this.presets) return []
      return this.presets.map((preset) => {
        if (typeof preset === 'object' && preset !== null) {
          return {
            label: preset.label || this.formatPresetValue(preset.value),
            value: Number(preset.value || 0),
            action: preset.action || 'set'
          }
        }
        const numericVal = Number(preset || 0)
        return {
          label: this.formatPresetValue(numericVal),
          value: numericVal,
          action: 'set'
        }
      })
    },

    formattedInputValue() {
      if (this.inputValue === '') return '0'
      
      const parts = this.inputValue.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  },

  watch: {
    value(newVal) {
      if (newVal) {
        // Reset or load initial value
        const initNum = Number(this.initialValue || 0)
        this.inputValue = initNum > 0 ? initNum.toString() : ''
        this.bindEvents()
      } else {
        this.unbindEvents()
      }
    }
  },

  mounted() {
    if (this.value) {
      this.bindEvents()
    }
  },

  beforeDestroy() {
    this.unbindEvents()
  },

  methods: {
    bindEvents() {
      window.addEventListener('keydown', this.handleKeyDown)
    },

    unbindEvents() {
      window.removeEventListener('keydown', this.handleKeyDown)
    },

    formatPresetValue(value) {
      if (value === null || value === undefined) return '0'
      // Simple abbreviation for large numbers
      if (value >= 1000000) {
        return (value / 1000000) + 'M'
      }
      return value.toLocaleString()
    },

    appendDigit(digit) {
      // Prevent leading multiple zeros
      if (this.inputValue === '' && (digit === '0' || digit === '00' || digit === '000')) {
        return
      }
      this.inputValue += digit
    },

    appendDecimal() {
      if (!this.inputValue.includes('.')) {
        if (this.inputValue === '') {
          this.inputValue = '0'
        }
        this.inputValue += '.'
      }
    },

    backspace() {
      if (this.inputValue.length > 0) {
        this.inputValue = this.inputValue.slice(0, -1)
      }
    },

    clearAll() {
      this.inputValue = ''
    },

    applyPreset(preset) {
      if (preset.action === 'add') {
        const current = parseFloat(this.inputValue) || 0
        this.inputValue = (current + preset.value).toString()
      } else {
        this.inputValue = preset.value.toString()
      }
    },

    handleConfirm() {
      const numericVal = parseFloat(this.inputValue) || 0
      this.$emit('confirm', numericVal)
      this.internalValue = false
    },

    handleCancel() {
      this.$emit('cancel')
      this.internalValue = false
    },

    handleKeyDown(event) {
      // Ignore key events if modifier keys are pressed
      if (event.ctrlKey || event.altKey || event.metaKey) return

      const key = event.key

      if (key >= '0' && key <= '9') {
        event.preventDefault()
        this.appendDigit(key)
      } else if (key === '.') {
        event.preventDefault()
        this.appendDecimal()
      } else if (key === 'Backspace') {
        event.preventDefault()
        this.backspace()
      } else if (key === 'Escape') {
        event.preventDefault()
        this.handleCancel()
      } else if (key === 'Enter') {
        event.preventDefault()
        this.handleConfirm()
      } else if (key === 'c' || key === 'C') {
        event.preventDefault()
        this.clearAll()
      }
    }
  }
}
</script>

<style scoped>
.light-header {
  background: #ffffff;
  border-bottom: 1px solid #f1f5f9;
}

.bg-white {
  background-color: #ffffff;
}

.bg-light {
  background-color: #f8fafc;
}

.border-top {
  border-top: 1px solid #f1f5f9;
}

.display-screen {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #1e293b;
  min-height: 72px;
}

.display-label {
  color: #64748b;
}

.display-value {
  font-size: 28px;
  font-weight: bold;
  color: var(--v-primary-base, #01532B);
  letter-spacing: 0.5px;
}

.display-suffix {
  color: var(--v-secondary-base, #337555);
}

.presets-container {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 10px 12px;
}

.preset-chip {
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  min-width: 65px;
  background: white !important;
}

.preset-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.keypad-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  background: white;
  padding: 8px 0 0 0;
}

.keypad-btn {
  height: 52px !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  border-radius: 10px !important;
  background-color: #f1f5f9 !important;
  color: #334155 !important;
  box-shadow: none !important;
  transition: all 0.15s ease !important;
  border: 1px solid #e2e8f0 !important;
}

.keypad-btn:hover {
  background-color: #f8fafc !important;
  border-color: var(--v-primary-base, #01532B) !important;
  color: var(--v-primary-base, #01532B) !important;
}

.keypad-btn:active {
  background-color: #e2e8f0 !important;
}

.action-btn {
  border: 1px solid transparent !important;
}

.backspace-btn {
  background-color: #fffbeb !important;
}

.backspace-btn:hover {
  background-color: #fef3c7 !important;
  border-color: #f59e0b !important;
}

.clear-btn {
  background-color: #fef2f2 !important;
}

.clear-btn:hover {
  background-color: #fee2e2 !important;
  border-color: #ef4444 !important;
}

.confirm-btn {
  grid-row: span 2;
  height: 100% !important;
  border-radius: 10px !important;
  background-color: var(--v-primary-base, #01532B) !important;
  color: white !important;
  box-shadow: none !important;
  border: 1px solid transparent !important;
  transition: all 0.15s ease !important;
}

.confirm-btn:hover {
  background-color: var(--v-secondary-base, #337555) !important;
}

.gap-2 {
  gap: 8px;
}
.w-100 {
  width: 100%;
}
</style>
