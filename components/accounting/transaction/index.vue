<template>
  <v-card>
    <v-card-title class="primary white--text">
      <v-icon left color="white">mdi-code-tags</v-icon>
      {{ isEditMode ? 'ແກ້ໄຂລະຫັດການເງິນ' : 'ເພີ່ມລະຫັດການເງິນ' }}
      <v-spacer />
      <v-btn icon dark @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <!-- Code -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.code"
              label="ລະຫັດ (ຖ້າບໍ່ໃສ່ ລະບົບຈະສ້າງໃຫ້ອັດຕະໂນມັດ)"
              prepend-icon="mdi-barcode"
              :rules="codeRules"
              outlined
              dense
              :disabled="isEditMode"
              hint="ຕົວຢ່າງ: TRX-0001, INCOME-001"
              persistent-hint
            />
          </v-col>

          <!-- Type -->
          <v-col cols="12" md="6">
            <v-select
              v-model="formData.type"
              :items="typeOptions"
              label="ປະເພດ *"
              prepend-icon="mdi-swap-vertical"
              :rules="typeRules"
              outlined
              dense
              required
            >
              <template v-slot:selection="{ item }">
                <v-icon small left :color="item.value === 'INCOME' ? 'success' : 'error'">
                  {{ item.value === 'INCOME' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
                </v-icon>
                {{ item.text }}
              </template>
              <template v-slot:item="{ item }">
                <v-icon small left :color="item.value === 'INCOME' ? 'success' : 'error'">
                  {{ item.value === 'INCOME' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
                </v-icon>
                {{ item.text }}
              </template>
            </v-select>
          </v-col>

          <!-- Description -->
          <v-col cols="12">
            <v-textarea
              v-model="formData.description"
              label="ລາຍລະອຽດ"
              prepend-icon="mdi-text"
              outlined
              dense
              rows="3"
              counter="255"
              :rules="descriptionRules"
            />
          </v-col>

          <!-- Status -->
          <v-col cols="12">
            <v-switch
              v-model="formData.isActive"
              label="ສະຖານະການໃຊ້ງານ"
              color="success"
              class="mt-0"
              hide-details
            >
              <template v-slot:label>
                <div class="d-flex align-center">
                  <v-icon left :color="formData.isActive ? 'success' : 'grey'">
                    {{ formData.isActive ? 'mdi-check-circle' : 'mdi-close-circle' }}
                  </v-icon>
                  <span>{{ formData.isActive ? 'ໃຊ້ງານ' : 'ປິດການໃຊ້ງານ' }}</span>
                </div>
              </template>
            </v-switch>
          </v-col>

          <!-- Info Box -->
          <v-col cols="12">
            <v-alert
              type="info"
              dense
              outlined
              text
              class="mb-0"
            >
              <div class="caption">
                <v-icon small left>mdi-information</v-icon>
                ຊ່ອງ ປະເພດ ແມ່ນຈຳເປັນຕ້ອງໃສ່. ຖ້າບໍ່ໃສ່ລະຫັດ ລະບົບຈະສ້າງໃຫ້ອັດຕະໂນມັດ
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>

    <v-divider />

    <v-card-actions class="px-6 py-4">
      <v-spacer />
      <v-btn
        text
        @click="close"
        :disabled="saving"
      >
        <v-icon left>mdi-close</v-icon>
        ຍົກເລີກ
      </v-btn>
      <v-btn
        color="primary"
        @click="save"
        :loading="saving"
        :disabled="!valid"
      >
        <v-icon left>mdi-content-save</v-icon>
        ບັນທຶກ
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TransactionCodeDialog',

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    transaction: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      valid: false,
      saving: false,

      formData: {
        code: '',
        type: 'INCOME',
        description: '',
        isActive: true
      },

      typeOptions: [
        { text: 'ລາຍຮັບ', value: 'INCOME' },
        { text: 'ລາຍຈ່າຍ', value: 'EXPENSE' }
      ],

      codeRules: [
        v => !v || v.length >= 2 || 'ລະຫັດຕ້ອງມີຢ່າງໜ້ອຍ 2 ຕົວອັກສອນ',
        v => !v || v.length <= 50 || 'ລະຫັດຕ້ອງບໍ່ເກີນ 50 ຕົວອັກສອນ',
      ],

      typeRules: [
        v => !!v || 'ກະລຸນາເລືອກປະເພດ'
      ],

      descriptionRules: [
        v => !v || v.length <= 255 || 'ລາຍລະອຽດຕ້ອງບໍ່ເກີນ 255 ຕົວອັກສອນ'
      ]
    }
  },

  computed: {
    isEditMode() {
      return !!this.transaction?.id
    }
  },

  watch: {
    visible: {
      immediate: true,
      handler(val) {
        if (val) {
          this.initForm()
        }
      }
    }
  },

  methods: {
    initForm() {
      if (this.transaction) {
        this.formData = {
          id: this.transaction.id,
          code: this.transaction.code || '',
          type: this.transaction.type || 'INCOME',
          description: this.transaction.description || '',
          isActive: this.transaction.isActive !== undefined ? this.transaction.isActive : true
        }
      } else {
        this.resetForm()
      }
      this.$nextTick(() => {
        if (this.$refs.form) {
          this.$refs.form.resetValidation()
        }
      })
    },

    resetForm() {
      this.formData = {
        code: '',
        type: 'INCOME',
        description: '',
        isActive: true
      }
    },

    async save() {
      if (this.$refs.form.validate()) {
        this.saving = true
        try {
          // Prepare data - only send code if it's provided (not empty)
          const dataToSave = {
            type: this.formData.type,
            description: this.formData.description || ''
          }
          
          // Only include code for create, and only if provided
          if (!this.isEditMode && this.formData.code) {
            dataToSave.code = this.formData.code.trim()
          }
          
          // Include isActive only for update
          if (this.isEditMode) {
            dataToSave.isActive = this.formData.isActive
          }
          
          this.$emit('save', { ...this.formData, ...dataToSave })
        } catch (error) {
          console.error('Save error:', error)
        } finally {
          this.saving = false
        }
      }
    },

    close() {
      this.$refs.form.resetValidation()
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.v-card__title {
  font-size: 1.1rem;
  font-weight: 500;
}

.v-form {
  max-height: 60vh;
  overflow-y: auto;
}
</style>