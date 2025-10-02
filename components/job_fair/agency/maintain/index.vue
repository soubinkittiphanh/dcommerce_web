<template>
  <v-dialog v-model="visible" persistent transition="dialog-bottom-transition">
    <v-card>
      <v-card-title class="primary white--text py-3">
        <v-icon class="mr-2" color="white">mdi-office-building</v-icon>
        {{ isEditMode ? 'ແກ້ໄຂບໍລິສັດ' : 'ເພີ່ມບໍລິສັດ' }}
        <v-spacer></v-spacer>
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-form ref="form" v-model="valid" @submit.prevent="saveAgency">
        <v-card-text class="py-4">
          <v-container class="py-0">
            <!-- Row 1: Company Name + Code -->
            <v-row dense>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="formData.agencyName"
                  label="ຊື່ບໍລິສັດ *"
                  :rules="nameRules"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="formData.agencyCode"
                  label="ລະຫັດ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="formData.agencyType"
                  :items="agencyTypeOptions"
                  label="ປະເພດ *"
                  :rules="typeRules"
                  outlined
                  dense
                  hide-details="auto"
                ></v-select>
              </v-col>
              <v-col cols="12" md="9">
                <v-radio-group v-model="radios" row class="mt-1">
                  <template v-slot:label> ສະຖານະ Agency</template>
                  <v-radio value="active">
                    <template v-slot:label>
                      <div class="primary--text">ເປີດ</div>
                    </template>
                  </v-radio>
                  <v-radio value="inactive">
                    <template v-slot:label>
                      <div class="red--text">
                       ປິດ
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <!-- Row 2: Phone + Email -->
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.phone"
                  label="ເບີໂທ *"
                  :rules="phoneRules"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" v-if="0 == 1">
                <v-text-field
                  v-model="formData.email"
                  label="ອີເມວ"
                  :rules="emailRules"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Row 3: Village + City + District -->
            <v-row dense>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="formData.village"
                  label="ບ້ານ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="formData.city"
                  label="ເມືອງ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="formData.district"
                  label="ແຂວງ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Row 4: Address -->
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="formData.address"
                  label="ທີ່ຢູ່"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Row 6: Registration Number + Date -->
            <v-row dense>
              <v-col cols="12" md="6" v-if="0 == 1">
                <v-text-field
                  v-model="formData.registrationNumber"
                  label="ເລກທະບຽນ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  v-model="registrationDateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formData.registrationDate"
                      label="ວັນທີເລີ່ມຕົ້ນສັນຍາ"
                      readonly
                      outlined
                      dense
                      hide-details="auto"
                      prepend-inner-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.registrationDate"
                    @input="registrationDateMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  v-model="licenseExpiryMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formData.licenseExpiryDate"
                      label="ວັນທີສິ້ນສຸດສັນຍາ"
                      readonly
                      outlined
                      dense
                      hide-details="auto"
                      prepend-inner-icon="mdi-calendar"
                      :color="isLicenseExpired ? 'error' : 'primary'"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <template v-slot:append v-if="formData.licenseExpiryDate">
                        <v-icon
                          small
                          :color="isLicenseExpired ? 'error' : 'success'"
                        >
                          {{
                            isLicenseExpired
                              ? 'mdi-alert-circle'
                              : 'mdi-check-circle'
                          }}
                        </v-icon>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.licenseExpiryDate"
                    @input="licenseExpiryMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <!-- Row 7: License Number + Expiry Date -->
            <v-row dense v-if="1 == 0">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.licenseNumber"
                  label="ເລກໃບອະນຸຍາດ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Row 8: Contact Person + Position -->
            <v-row dense>
              <v-col cols="12" md="6" v-if="0 == 1">
                <v-text-field
                  v-model="formData.contactPersonName"
                  label="ຜູ້ຕິດຕໍ່"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" v-if="0 == 1">
                <v-text-field
                  v-model="formData.contactPersonPosition"
                  label="ຕຳແໜ່ງ"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Row 9: Contact Phone + Status -->
            <v-row dense>
              <v-col cols="12" md="6" v-if="0 == 1">
                <v-text-field
                  v-model="formData.contactPersonPhone"
                  label="ເບີຜູ້ຕິດຕໍ່"
                  outlined
                  dense
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" v-if="0 == 1">
                <v-select
                  v-model="formData.status"
                  :items="statusOptions"
                  label="ສະຖານະ *"
                  :rules="statusRules"
                  outlined
                  dense
                  hide-details="auto"
                ></v-select>
              </v-col>
            </v-row>

            <!-- Row 10: Notes -->
            <v-row dense>
              <v-col cols="12" v-if="0 == 1">
                <v-textarea
                  v-model="formData.notes"
                  label="ໝາຍເຫດ"
                  outlined
                  rows="2"
                  hide-details="auto"
                  counter="200"
                  maxlength="200"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="px-6 py-3">
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog" :disabled="loading"> ຍົກເລີກ </v-btn>
          <v-btn
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="!valid || loading"
          >
            {{ isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AgencyDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    agency: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      valid: false,
      loading: false,
      registrationDateMenu: false,
      licenseExpiryMenu: false,
      agencyTypeOptions: ['Agency', 'Broker'],
      radios: 'active',
      formData: {
        agencyName: '',
        agencyCode: '',
        agencyType: '',
        phone: '',
        email: '',
        village: '',
        city: '',
        district: '',
        address: '',
        registrationNumber: '',
        registrationDate: '',
        licenseNumber: '',
        licenseExpiryDate: '',
        contactPersonName: '',
        contactPersonPosition: '',
        contactPersonPhone: '',
        status: 'active',
        notes: '',
      },

      statusOptions: [
        { text: 'ດຳເນີນງານ', value: 'active' },
        { text: 'ບໍ່ດຳເນີນງານ', value: 'inactive' },
        { text: 'ຖືກຢຸດ', value: 'suspended' },
      ],

      nameRules: [
        (v) => !!v || 'ຈຳເປັນ',
        (v) => v?.length >= 2 || 'ສັ້ນເກີນໄປ',
      ],
      phoneRules: [
        (v) => !!v || 'ຈຳເປັນ',
        (v) => v?.length >= 8 || 'ບໍ່ຖືກຕ້ອງ',
      ],
      emailRules: [(v) => !v || /.+@.+\..+/.test(v) || 'ບໍ່ຖືກຕ້ອງ'],
      statusRules: [(v) => !!v || 'ຈຳເປັນ'],
    }
  },

  computed: {
    isEditMode() {
      return this.agency?.id
    },
    isLicenseExpired() {
      return (
        this.formData.licenseExpiryDate &&
        new Date(this.formData.licenseExpiryDate) <= new Date()
      )
    },
    isContractExpired() {
      return (
        this.formData.contractEndDate &&
        new Date(this.formData.contractEndDate) <= new Date()
      )
    },
  },

  watch: {
    visible(val) {
      if (val) this.initializeForm()
      else this.resetForm()
    },
    agency: {
      handler() {
        if (this.visible) this.$nextTick(() => this.initializeForm())
      },
      deep: true,
    },
  },

  methods: {
    initializeForm() {
      if (this.agency?.id) {
        Object.keys(this.formData).forEach((key) => {
          this.formData[key] = this.agency[key] || ''
        })
        // Handle date formatting
        const dateFields = ['registrationDate', 'licenseExpiryDate']
        dateFields.forEach((field) => {
          if (this.agency[field]) {
            this.formData[field] = this.agency[field].split('T')[0]
          }
        })
      } else {
        this.resetFormData()
      }
      this.$nextTick(() => this.$refs.form?.resetValidation())
    },

    resetFormData() {
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = key === 'status' ? 'active' : ''
      })
    },

    resetForm() {
      this.resetFormData()
      this.valid = false
      this.loading = false
      this.registrationDateMenu = false
      this.licenseExpiryMenu = false
    },

    async saveAgency() {
      if (this.$refs.form.validate()) {
        this.loading = true
        try {
          const submitData = Object.fromEntries(
            Object.entries(this.formData).filter(
              ([_, v]) => v !== '' && v !== null
            )
          )
          this.$emit('save', submitData)
        } catch (error) {
          console.error('Form submission error:', error)
        } finally {
          this.loading = false
        }
      }
    },

    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.v-row.dense {
  margin-bottom: 8px;
}

.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}
</style>
