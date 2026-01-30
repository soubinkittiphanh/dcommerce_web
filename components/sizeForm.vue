<template>
  <v-card class="mx-auto" max-width="800">
    <!-- Enhanced Header -->
    <v-card-title class="primary white--text py-4">
      <v-icon left color="white" size="24">mdi-ruler</v-icon>
      <span class="text-h6">{{ isCreate ? 'ເພີ່ມຂະໜາດໃໝ່' : 'ແກ້ໄຂຂະໜາດ' }}</span>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click="$emit('close-dialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pa-4">
      <v-container fluid>
        <v-form ref="myform" @submit.prevent="submitForm">
          <v-row>
            <!-- Size Name -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ຊື່ຂະໜາດ *"
                :rules="sizeNameRules"
                hide-details="auto"
                v-model="formData.size_name"
                outlined
                dense
                prepend-inner-icon="mdi-ruler"
                placeholder="ເຊັ່ນ: Small, Medium, Large"
                hint="ຊື່ຂະໜາດທີ່ຈະສະແດງໃຫ້ລູກຄ້າເຫັນ"
                persistent-hint
              ></v-text-field>
            </v-col>

            <!-- Size Code -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ລະຫັດຂະໜາດ *"
                :rules="sizeCodeRules"
                hide-details="auto"
                v-model="formData.size_code"
                outlined
                dense
                prepend-inner-icon="mdi-identifier"
                placeholder="ເຊັ່ນ: S, M, L, XL"
                hint="ລະຫັດສັ້ນສຳລັບຂະໜາດ"
                persistent-hint
                @input="formatSizeCode"
              ></v-text-field>
            </v-col>

            <!-- Size Order -->
            <v-col cols="12" md="6">
              <v-text-field 
                label="ລຳດັບການຈັດລຽງ *"
                :rules="sizeOrderRules"
                hide-details="auto"
                v-model.number="formData.size_order"
                outlined
                dense
                type="number"
                min="0"
                prepend-inner-icon="mdi-sort-numeric-ascending"
                hint="ເລກສຳລັບຈັດລຳດັບ (ນ້ອຍທີ່ສຸດຈະສະແດງກ່ອນ)"
                persistent-hint
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

            <!-- Description -->
            <v-col cols="12">
              <v-textarea 
                label="ລາຍລະອຽດ (ທາງເລືອກ)"
                v-model="formData.description"
                outlined
                dense
                rows="3"
                prepend-inner-icon="mdi-text-long"
                placeholder="ລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບຂະໜາດນີ້..."
                hint="ຂໍ້ມູນເພີ່ມເຕີມທີ່ຈະຊ່ວຍອະທິບາຍຂະໜາດນີ້"
                persistent-hint
                counter="500"
                :rules="descriptionRules"
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Preview Card -->
          <v-row v-if="formData.size_name || formData.size_code">
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
                    <v-icon small class="mr-2">mdi-ruler</v-icon>
                    <strong>{{ formData.size_name || 'ຊື່ຂະໜາດ' }}</strong>
                    <v-chip x-small class="ml-2" outlined color="secondary">
                      {{ formData.size_code || 'ລະຫັດ' }}
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-chip 
                      x-small 
                      :color="getSizeOrderColor(formData.size_order)" 
                      outlined
                    >
                      ລຳດັບ: {{ formData.size_order || 0 }}
                    </v-chip>
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
      formData: {
        size_name: '',
        size_code: '',
        size_order: 0,
        description: '',
        isActive: true,
      },
    }
  },
  
  computed: {
    sizeNameRules() {
      return [
        v => !!v || 'ກະລຸນາໃສ່ຊື່ຂະໜາດ',
        v => (v && v.length >= 2) || 'ຊື່ຂະໜາດຕ້ອງມີຢ່າງໜ້ອຍ 2 ຕົວອັກສອນ',
        v => (v && v.length <= 50) || 'ຊື່ຂະໜາດຕ້ອງບໍ່ເກີນ 50 ຕົວອັກສອນ',
      ]
    },
    
    sizeCodeRules() {
      return [
        v => !!v || 'ກະລຸນາໃສ່ລະຫັດຂະໜາດ',
        v => (v && v.length >= 1) || 'ລະຫັດຂະໜາດຕ້ອງມີຢ່າງໜ້ອຍ 1 ຕົວອັກສອນ',
        v => (v && v.length <= 10) || 'ລະຫັດຂະໜາດຕ້ອງບໍ່ເກີນ 10 ຕົວອັກສອນ',
      ]
    },
    
    sizeOrderRules() {
      return [
        v => v !== null && v !== undefined && v !== '' || 'ກະລຸນາໃສ່ລຳດັບ',
        v => v >= 0 || 'ລຳດັບຕ້ອງເປັນເລກບວກ',
        v => Number.isInteger(Number(v)) || 'ລຳດັບຕ້ອງເປັນເລກເຕັມ',
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
    
    isFormValid() {
      return this.formData.size_name && 
             this.formData.size_name.length >= 2 &&
             this.formData.size_code && 
             this.formData.size_code.length >= 1 &&
             this.formData.size_order !== null &&
             this.formData.size_order !== undefined &&
             this.formData.size_order >= 0 &&
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
    getSizeOrderColor(order) {
      if (order >= 0 && order <= 2) return 'info';
      if (order >= 3 && order <= 5) return 'warning';
      if (order >= 6) return 'success';
      return 'grey';
    },
    
    formatSizeCode() {
      // Auto-uppercase the size code
      if (this.formData.size_code) {
        this.formData.size_code = this.formData.size_code.toUpperCase()
      }
    },
    
    resetForm() {
      this.formData = {
        size_name: '',
        size_code: '',
        size_order: 0,
        description: '',
        isActive: true,
      }
    },
    
    async loadData() {
      this.isSubmitting = true
      try {
        const res = await this.$axios.get(`api/size/${this.recordId}`)
        const data = res.data.success ? res.data.data : res.data
        
        this.formData = {
          size_name: data.size_name || '',
          size_code: data.size_code || '',
          size_order: data.size_order || 0,
          description: data.description || '',
          isActive: data.isActive !== undefined ? data.isActive : true,
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
            res = await this.$axios.post('/api/size', submitData)
          } else {
            res = await this.$axios.put(`/api/size/${this.recordId}`, submitData)
          }
          
          swalSuccess(
            this.$swal, 
            'ສຳເລັດ', 
            `${this.isCreate ? 'ເພີ່ມ' : 'ອັບເດດ'}ຂະໜາດ "${this.formData.size_name}" ສຳເລັດແລ້ວ`
          )
          this.$emit('reload-data')
        } catch (error) {
          console.error('Error submitting form:', error)
          let errorMessage = error.response?.data?.message || error.message
          
          if (error.response?.status === 400 && errorMessage.includes('already exists')) {
            errorMessage = 'ຊື່ຂະໜາດ ຫຼື ລະຫັດນີ້ມີຢູ່ແລ້ວ'
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
</style>