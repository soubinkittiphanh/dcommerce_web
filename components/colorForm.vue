<template>
  <v-card class="mx-auto" max-width="800">
    <!-- Enhanced Header -->
    <v-card-title class="primary white--text py-4">
      <v-icon left color="white" size="24">mdi-palette</v-icon>
      <span class="text-h6">{{ isCreate ? 'ເພີ່ມສີໃໝ່' : 'ແກ້ໄຂສີ' }}</span>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click="$emit('close-dialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pa-4">
      <v-container fluid>
        <v-form ref="myform" @submit.prevent="submitForm">
          <v-row>
            <!-- Color Name -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ຊື່ສີ *"
                :rules="colorNameRules"
                hide-details="auto"
                v-model="formData.color_name"
                outlined
                dense
                prepend-inner-icon="mdi-palette"
                placeholder="ເຊັ່ນ: ແດງ, ຂຽວ, ຟ້າ"
                hint="ຊື່ສີທີ່ຈະສະແດງໃຫ້ລູກຄ້າເຫັນ"
                persistent-hint
              ></v-text-field>
            </v-col>

            <!-- Color Code -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ລະຫັດສີ *"
                :rules="colorCodeRules"
                hide-details="auto"
                v-model="formData.color_code"
                outlined
                dense
                prepend-inner-icon="mdi-identifier"
                placeholder="ເຊັ່ນ: RED, GRN, BLU"
                hint="ລະຫັດສັ້ນສຳລັບສີ"
                persistent-hint
                @input="formatColorCode"
              ></v-text-field>
            </v-col>

            <!-- Hex Code -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ລະຫັດສີ Hex (ທາງເລືອກ)"
                :rules="hexCodeRules"
                hide-details="auto"
                v-model="formData.hex_code"
                outlined
                dense
                prepend-inner-icon="mdi-pound"
                placeholder="#FF0000"
                hint="ລະຫັດສີແບບ Hex (ເຊັ່ນ: #FF0000)"
                persistent-hint
                @input="formatHexCode"
              >
                <template v-slot:append>
                  <div 
                    v-if="isValidHex"
                    class="color-preview-input"
                    :style="{ backgroundColor: formData.hex_code }"
                  ></div>
                </template>
              </v-text-field>
            </v-col>

            <!-- RGB Code -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ລະຫັດສີ RGB (ທາງເລືອກ)"
                :rules="rgbCodeRules"
                hide-details="auto"
                v-model="formData.rgb_code"
                outlined
                dense
                prepend-inner-icon="mdi-palette-advanced"
                placeholder="255,0,0"
                hint="ລະຫັດສີແບບ RGB (ເຊັ່ນ: 255,0,0)"
                persistent-hint
                @input="formatRgbCode"
              ></v-text-field>
            </v-col>

            <!-- Status -->
            <v-col cols="12" md="6">
              <v-switch
                v-model="formData.isActive"
                :label="formData.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ'"
                :color="formData.isActive ? 'success' : 'error'"
                inset
                class="mt-4"
              >
                <template v-slot:prepend>
                  <v-icon :color="formData.isActive ? 'success' : 'error'">
                    {{ formData.isActive ? 'mdi-check-circle' : 'mdi-close-circle' }}
                  </v-icon>
                </template>
              </v-switch>
            </v-col>

            <!-- Color Picker Helper -->
            <v-col cols="12" md="6">
              <v-btn
                v-if="$vuetify.theme.dark !== undefined"
                outlined
                color="primary"
                @click="showColorPicker = !showColorPicker"
                class="mt-4"
              >
                <v-icon left>mdi-eyedropper</v-icon>
                ເລືອກສີ
              </v-btn>
              <input
                v-show="showColorPicker"
                type="color"
                v-model="colorPickerValue"
                @change="onColorPickerChange"
                class="mt-2"
              >
            </v-col>

            <!-- Description -->
            <v-col cols="12">
              <v-textarea 
                label="ລາຍລະອຽດ (ທາງເລືອກ)"
                v-model="formData.description"
                outlined
                dense
                rows="3"
                prepend-inner-icon="mdi-text-long"
                placeholder="ລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບສີນີ້..."
                hint="ຂໍ້ມູນເພີ່ມເຕີມທີ່ຈະຊ່ວຍອະທິບາຍສີນີ້"
                persistent-hint
                counter="500"
                :rules="descriptionRules"
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Preview Card -->
          <v-row v-if="formData.color_name || formData.color_code">
            <v-col cols="12">
              <v-card outlined class="pa-3">
                <v-card-subtitle class="pa-0 mb-2">
                  <v-icon small>mdi-eye</v-icon>
                  ຕົວຢ່າງການສະແດງຜົນ
                </v-card-subtitle>
                
                <v-alert 
                  color="info" 
                  dense 
                  outlined 
                  class="mb-0"
                >
                  <div class="d-flex align-center">
                    <div 
                      v-if="formData.hex_code && isValidHex"
                      class="color-preview mr-2"
                      :style="{ backgroundColor: formData.hex_code }"
                    ></div>
                    <v-icon v-else small class="mr-2" color="grey">mdi-palette-outline</v-icon>
                    <strong>{{ formData.color_name || 'ຊື່ສີ' }}</strong>
                    <v-chip x-small class="ml-2" outlined color="secondary">
                      {{ formData.color_code || 'ລະຫັດ' }}
                    </v-chip>
                    <v-spacer></v-spacer>
                    <div v-if="formData.hex_code" class="d-flex align-center">
                      <v-chip x-small outlined color="info" class="mr-1">
                        {{ formData.hex_code }}
                      </v-chip>
                    </div>
                    <div v-if="formData.rgb_code">
                      <v-chip x-small outlined color="orange">
                        RGB: {{ formData.rgb_code }}
                      </v-chip>
                    </div>
                  </div>
                  <div v-if="formData.description" class="caption mt-1">
                    {{ formData.description }}
                  </div>
                </v-alert>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>

    <!-- Actions -->
    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn 
        outlined 
        color="grey" 
        @click="$emit('close-dialog')"
        :disabled="isSubmitting"
      >
        <v-icon left>mdi-close</v-icon>
        ຍົກເລີກ
      </v-btn>
      <v-btn 
        color="primary" 
        @click="submitForm"
        :loading="isSubmitting"
        :disabled="!isFormValid"
      >
        <v-icon left>mdi-content-save</v-icon>
        {{ isCreate ? 'ບັນທຶກ' : 'ອັບເດດ' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common/index'

export default {
  props: {
    recordId: {
      type: Number,
      default: 0,
    },
    isCreate: {
      type: Boolean,
      default: true,
    },
  },
  
  data() {
    return {
      isSubmitting: false,
      showColorPicker: false,
      colorPickerValue: '#000000',
      formData: {
        color_name: '',
        color_code: '',
        hex_code: '',
        rgb_code: '',
        description: '',
        isActive: true,
      },
    }
  },
  
  computed: {
    colorNameRules() {
      return [
        v => !!v || 'ກະລຸນາໃສ່ຊື່ສີ',
        v => (v && v.length >= 2) || 'ຊື່ສີຕ້ອງມີຢ່າງໜ້ອຍ 2 ຕົວອັກສອນ',
        v => (v && v.length <= 50) || 'ຊື່ສີຕ້ອງບໍ່ເກີນ 50 ຕົວອັກສອນ',
      ]
    },
    
    colorCodeRules() {
      return [
        v => !!v || 'ກະລຸນາໃສ່ລະຫັດສີ',
        v => (v && v.length >= 1) || 'ລະຫັດສີຕ້ອງມີຢ່າງໜ້ອຍ 1 ຕົວອັກສອນ',
        v => (v && v.length <= 10) || 'ລະຫັດສີຕ້ອງບໍ່ເກີນ 10 ຕົວອັກສອນ',
      ]
    },
    
    hexCodeRules() {
      return [
        v => !v || /^#[0-9A-Fa-f]{6}$/i.test(v) || 'ລະຫັດ Hex ບໍ່ຖືກຕ້ອງ (ຕົວຢ່າງ: #FF0000)',
      ]
    },
    
    rgbCodeRules() {
      return [
        v => !v || /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/.test(v) || 'ລະຫັດ RGB ບໍ່ຖືກຕ້ອງ (ຕົວຢ່າງ: 255,0,0)',
        v => !v || this.validateRgbValues(v) || 'ຄ່າ RGB ຕ້ອງຢູ່ລະຫວ່າງ 0-255',
      ]
    },
    
    descriptionRules() {
      return [
        v => !v || v.length <= 500 || 'ລາຍລະອຽດຕ້ອງບໍ່ເກີນ 500 ຕົວອັກສອນ',
      ]
    },
    
    user() {
      return this.$auth.user || {}
    },
    
    isValidHex() {
      return this.formData.hex_code && /^#[0-9A-Fa-f]{6}$/i.test(this.formData.hex_code)
    },
    
    isFormValid() {
      return this.formData.color_name && 
             this.formData.color_name.length >= 2 &&
             this.formData.color_code && 
             this.formData.color_code.length >= 1 &&
             !this.isSubmitting
    },
  },
  
  watch: {
    recordId: {
      immediate: true,
      handler(newVal) {
        if (newVal && newVal > 0 && !this.isCreate) {
          this.loadData()
        } else {
          this.resetForm()
        }
      }
    }
  },
  
  created() {
    if (this.recordId && this.recordId > 0 && !this.isCreate) {
      this.loadData()
    }
  },
  
  methods: {
    validateRgbValues(rgb) {
      if (!rgb) return true
      const values = rgb.split(',').map(v => parseInt(v.trim()))
      return values.every(v => v >= 0 && v <= 255)
    },
    
    formatColorCode() {
      // Auto-uppercase the color code
      if (this.formData.color_code) {
        this.formData.color_code = this.formData.color_code.toUpperCase()
      }
    },
    
    formatHexCode() {
      // Auto-format hex code
      if (this.formData.hex_code && !this.formData.hex_code.startsWith('#')) {
        this.formData.hex_code = '#' + this.formData.hex_code
      }
      if (this.formData.hex_code) {
        this.formData.hex_code = this.formData.hex_code.toUpperCase()
      }
    },
    
    formatRgbCode() {
      // Auto-format RGB code
      if (this.formData.rgb_code) {
        // Remove spaces and ensure proper format
        this.formData.rgb_code = this.formData.rgb_code.replace(/\s/g, '')
      }
    },
    
    onColorPickerChange() {
      this.formData.hex_code = this.colorPickerValue.toUpperCase()
      // Convert hex to RGB
      const hex = this.colorPickerValue.substring(1)
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)
      this.formData.rgb_code = `${r},${g},${b}`
    },
    
    resetForm() {
      this.formData = {
        color_name: '',
        color_code: '',
        hex_code: '',
        rgb_code: '',
        description: '',
        isActive: true,
      }
      this.showColorPicker = false
    },
    
    async loadData() {
      this.isSubmitting = true
      try {
        const res = await this.$axios.get(`api/color/${this.recordId}`)
        const data = res.data.success ? res.data.data : res.data
        
        this.formData = {
          color_name: data.color_name || '',
          color_code: data.color_code || '',
          hex_code: data.hex_code || '',
          rgb_code: data.rgb_code || '',
          description: data.description || '',
          isActive: data.isActive !== undefined ? data.isActive : true,
        }
        
        if (this.formData.hex_code) {
          this.colorPickerValue = this.formData.hex_code
        }
      } catch (error) {
        swalError2(this.$swal, 'Error', 'ບໍ່ສາມາດໂຫຼດຂໍ້ມູນໄດ້: ' + error.message)
      }
      this.isSubmitting = false
    },
    
    async submitForm() {
      if (this.$refs.myform.validate() && !this.isSubmitting) {
        this.isSubmitting = true
        
        const submitData = {
          ...this.formData,
          inputter: this.user.id,
          update_user: this.user.id,
        }
        
        try {
          let res
          if (this.isCreate) {
            res = await this.$axios.post('/api/color', submitData)
          } else {
            res = await this.$axios.put(`/api/color/${this.recordId}`, submitData)
          }
          
          swalSuccess(
            this.$swal, 
            'ສຳເລັດ', 
            `${this.isCreate ? 'ເພີ່ມ' : 'ອັບເດດ'}ສີ "${this.formData.color_name}" ສຳເລັດແລ້ວ`
          )
          this.$emit('reload-data')
        } catch (error) {
          console.error('Error submitting form:', error)
          let errorMessage = error.response?.data?.message || error.message
          
          if (error.response?.status === 400 && errorMessage.includes('already exists')) {
            errorMessage = 'ຊື່ສີ ຫຼື ລະຫັດນີ້ມີຢູ່ແລ້ວ'
          }
          
          swalError2(this.$swal, "Error", errorMessage)
        }
        
        this.isSubmitting = false
      }
    },
  },
}
</script>

<style scoped>
.v-card {
  border-radius: 12px !important;
}

.v-text-field.v-text-field--outlined > .v-input__control > .v-input__slot,
.v-textarea.v-textarea--outlined > .v-input__control > .v-input__slot {
  border-radius: 8px !important;
}

.v-alert {
  border-radius: 8px !important;
}

.caption {
  font-size: 0.75rem !important;
  color: rgba(0, 0, 0, 0.6) !important;
}

/* Color preview styles */
.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: inline-block;
}

.color-preview-input {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: inline-block;
}

input[type="color"] {
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>