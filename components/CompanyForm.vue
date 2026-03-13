<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <company-theme-dialog v-model="showThemeDialog" :company-id="form.id || recordId" @theme-updated="onThemeUpdated" />

    <v-card class="pa-3 mx-auto" max-width="800">
      <v-card-title class="pb-2">
        <v-chip color="primary" label text-color="white" small>
          <v-icon left small>mdi-office-building</v-icon>
          ຈັດການສາຂາ
        </v-chip>
      </v-card-title>

      <v-card-text class="py-2">
        <v-form ref="form">
          <!-- Basic Info Section -->
          <v-row dense>
            <v-col cols="12" sm="6" md="4">
              <v-text-field :disabled="!isCreate" v-model="form.mnemonic" label="ລະຫັດ *" dense outlined
                hide-details="auto" :rules="nameRules"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="8">
              <v-text-field v-model="form.name" label="ຊື່ສາຂາ *" dense outlined hide-details="auto"
                :rules="nameRules"></v-text-field>
            </v-col>
          </v-row>

          <v-row dense class="mt-2">
            <v-col cols="12" sm="6">
              <v-text-field v-model="form.tel" label="ເບີໂທ" dense outlined hide-details="auto"
                prepend-inner-icon="mdi-phone"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="form.email" label="ອີເມວ" dense outlined hide-details="auto"
                prepend-inner-icon="mdi-email"></v-text-field>
            </v-col>
          </v-row>

          <v-row dense class="mt-2">
            <v-col cols="12">
              <v-text-field v-model="form.address" label="ທີ່ຢູ່" dense outlined hide-details="auto"
                prepend-inner-icon="mdi-map-marker"></v-text-field>
            </v-col>
          </v-row>

          <v-row dense class="mt-2">
            <v-col cols="12" sm="4">
              <v-text-field v-model="form.province" label="ແຂວງ" dense outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="form.district" label="ເມືອງ" dense outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" class="d-flex align-center">
              <v-switch v-model="form.isActive" label="ເປີດໃຊ້ງານ" color="primary" dense hide-details
                class="mt-0 pt-0"></v-switch>
            </v-col>
            <v-col cols="12" sm="4" class="d-flex align-center">
              <v-switch v-model="form.ticketQRcode" label="ສະແດງ QR ໃນໃບບິນ" color="primary" dense hide-details
                class="mt-0 pt-0"></v-switch>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select v-model="form.ticketLayout" :items="[
                { text: 'Classic (Default)', value: 'classic' },
                { text: 'Modern (Premium)', value: 'modern' }
              ]" label="ຮູບແບບໃບບິນ (Layout)" dense outlined hide-details="auto"
                prepend-inner-icon="mdi-format-paint"></v-select>
            </v-col>
          </v-row>

          <!-- Banking Info (Collapsible) -->
          <v-expansion-panels flat class="mt-4">
            <v-expansion-panel>
              <v-expansion-panel-header class="px-0 py-2">
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-bank</v-icon>
                  <span class="text-subtitle2">ຂໍ້ມູນທະນາຄານ</span>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="px-0">
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="form.bank" label="ຊື່ທະນາຄານ" dense outlined hide-details="auto"
                      prepend-inner-icon="mdi-bank"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="form.accountName" label="ຊື່ບັນຊີ" dense outlined hide-details="auto"
                      prepend-inner-icon="mdi-account"></v-text-field>
                  </v-col>
                </v-row>
                <v-row dense class="mt-2">
                  <v-col cols="12">
                    <v-text-field v-model="form.accounts" label="ເລກບັນຊີ (ຂັ້ນດ້ວຍ | ຖ້າມີຫຼາຍບັນຊີ)" dense outlined
                      hide-details="auto" prepend-inner-icon="mdi-credit-card"></v-text-field>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Profile Image (Collapsible) -->
          <v-expansion-panels flat class="mt-2">
            <v-expansion-panel>
              <v-expansion-panel-header class="px-0 py-2">
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-image</v-icon>
                  <span class="text-subtitle2">ຮູບໂປຣໄຟລ໌</span>
                  <v-chip v-if="form.profile_image_path" x-small color="success" class="ml-2">
                    ມີຮູບແລ້ວ
                  </v-chip>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="px-0">
                <v-row>
                  <v-col cols="12" sm="6">
                    <!-- Current Image -->
                    <div v-if="currentImageUrl" class="text-center">
                      <v-avatar size="120" class="mb-2">
                        <v-img :src="currentImageUrl" cover></v-img>
                      </v-avatar>
                      <br />
                      <v-btn color="error" text x-small @click="deleteProfileImage" :loading="deleting">
                        <v-icon small>mdi-delete</v-icon>
                        ລຶບ
                      </v-btn>
                    </div>

                    <div v-else class="text-center">
                      <v-avatar size="120" color="grey lighten-3" class="mb-2">
                        <v-icon size="40" color="grey">mdi-image-outline</v-icon>
                      </v-avatar>
                      <div class="grey--text">ບໍ່ມີຮູບ</div>
                    </div>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-file-input ref="fileInput" v-model="selectedFile" accept="image/*" label="ເລືອກຮູບ"
                      prepend-icon="" prepend-inner-icon="mdi-camera" dense outlined hide-details="auto"
                      @change="onFileSelected" :disabled="uploading" clearable></v-file-input>

                    <!-- Preview -->
                    <div v-if="previewUrl" class="mt-2 text-center">
                      <v-img :src="previewUrl" max-width="80" max-height="60" class="mx-auto rounded"></v-img>
                    </div>

                    <!-- Upload Button -->
                    <div class="mt-3">
                      <v-btn v-if="selectedFile && !uploading" color="primary" small block @click="uploadProfileImage">
                        <v-icon left small>mdi-upload</v-icon>
                        ອັບໂຫລດ
                      </v-btn>

                      <v-btn v-if="uploading" color="primary" small block loading disabled>
                        ກຳລັງອັບໂຫລດ...
                      </v-btn>
                    </div>

                    <v-alert type="info" text dense class="mt-2" border="left">
                      <small> JPG, PNG, GIF • ສູງສຸດ 5MB </small>
                    </v-alert>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- NEW: Bank QR Code (Collapsible) -->
          <v-expansion-panels flat class="mt-2">
            <v-expansion-panel>
              <v-expansion-panel-header class="px-0 py-2">
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-qrcode</v-icon>
                  <span class="text-subtitle2">QR ໂຄ້ດທະນາຄານ</span>
                  <v-chip v-if="form.bank_qr_image_path || form.bank_qr_image_path_2" x-small color="success"
                    class="ml-2">
                    ມີ QR ແລ້ວ
                  </v-chip>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="px-0">
                <div class="mb-2 primary--text">
                  QR ໂຄ້ດທີ 1
                </div>
                <v-row>
                  <v-col cols="12" sm="6">
                    <div v-if="currentQRImageUrl" class="text-center">
                      <v-img :src="currentQRImageUrl" max-width="140" max-height="140" class="mx-auto rounded qr-shadow"
                        contain></v-img>
                      <v-btn color="error" text x-small @click="deleteQRImage(1)" :loading="deletingQR">
                        <v-icon small>mdi-delete</v-icon> ລຶບ QR 1
                      </v-btn>
                    </div>
                    <div v-else class="qr-placeholder mb-2">
                      <v-icon size="40" color="grey">mdi-qrcode-scan</v-icon>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-file-input v-model="selectedQRFile" accept="image/*" label="ເລືອກ QR 1"
                      prepend-inner-icon="mdi-qrcode" dense outlined hide-details="auto"
                      @change="onQRFileSelected($event, 1)" :disabled="uploadingQR"></v-file-input>
                    <v-btn v-if="selectedQRFile && !uploadingQR" color="success" small block class="mt-2"
                      @click="uploadQRImage(1)">
                      <v-icon left small>mdi-upload</v-icon> ອັບໂຫລດ QR 1
                    </v-btn>
                  </v-col>
                </v-row>

                <v-divider class="my-4"></v-divider>

                <div class="mb-2 primary--text">
                  QR ໂຄ້ດທີ 2
                </div>
                <v-row>
                  <v-col cols="12" sm="6">
                    <div v-if="currentQRImageUrl2" class="text-center">
                      <v-img :src="currentQRImageUrl2" max-width="140" max-height="140"
                        class="mx-auto rounded qr-shadow" contain></v-img>
                      <v-btn color="error" text x-small @click="deleteQRImage(2)" :loading="deletingQR2">
                        <v-icon small>mdi-delete</v-icon> ລຶບ QR 2
                      </v-btn>
                    </div>
                    <div v-else class="qr-placeholder mb-2">
                      <v-icon size="40" color="grey">mdi-qrcode-scan</v-icon>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-file-input v-model="selectedQRFile2" accept="image/*" label="ເລືອກ QR 2"
                      prepend-inner-icon="mdi-qrcode" dense outlined hide-details="auto"
                      @change="onQRFileSelected($event, 2)" :disabled="uploadingQR2"></v-file-input>
                    <v-btn v-if="selectedQRFile2 && !uploadingQR2" color="success" small block class="mt-2"
                      @click="uploadQRImage(2)">
                      <v-icon left small>mdi-upload</v-icon> ອັບໂຫລດ QR 2
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Theme Management -->
          <v-row v-if="!isCreate && form.id" class="mt-3">
            <v-col cols="12">
              <v-btn color="primary" outlined small block @click="showThemeDialog = true">
                <v-icon left small>mdi-palette</v-icon>
                ຈັດການສີທີມ
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <div class="grey--text mt-3">
          <v-icon x-small>mdi-asterisk</v-icon> ຟິວທີ່ຈຳເປັນຕ້ອງໃສ່
        </div>
      </v-card-text>

      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="grey" text small @click="$emit('close-dialog')">
          <v-icon left small>mdi-close</v-icon>
          ປິດ
        </v-btn>
        <v-btn color="primary" small @click="commitRecord" :loading="isloading">
          <v-icon left small>mdi-content-save</v-icon>
          ບັນທຶກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
import CompanyThemeDialog from '~/components/company/theme'

export default {
  components: {
    CompanyThemeDialog,
  },
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true,
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  data() {
    return {
      showThemeDialog: false,
      form: {
        id: null,
        mnemonic: 'BNK',
        name: 'Dcommerce',
        tel: '123-456-7890',
        email: 'info@abccorp.com',
        address: '123 Main St',
        province: 'Ontario',
        district: 'Toronto',
        village: 'Downtown',
        remark: 'This is a sample company',
        bank: 'ທະນາຄານ BCEL',
        accounts: '',
        accountName: '',
        profile_image_path: null,
        bank_qr_image_path: null,
        bank_qr_image_path_2: null, // Ensure this is here
        isActive: true,
        ticketQRcode: false,
        ticketLayout: 'classic',
      },
      isloading: false,
      // Profile image related
      selectedFile: null,
      previewUrl: null,
      uploading: false,
      deleting: false,
      // NEW: QR image related
      selectedQRFile: null,
      qrPreviewUrl: null,
      uploadingQR: false,
      deletingQR: false,

      // NEW: QR 2 State
      selectedQRFile2: null,
      qrPreviewUrl2: null,
      uploadingQR2: false,
      deletingQR2: false,
      nameRules: [
        (value) => !!value || 'ຈຳເປັນຕ້ອງໃສ່',
        (value) =>
          (value && value.length <= 100) || 'ຕ້ອງນ້ອຍກວ່າ 100 ຕົວອັກສອນ',
      ],
    }
  },

  computed: {
    currentQRImageUrl() {
      return this.form.bank_qr_image_path
        ? `${this.$axios.defaults.baseURL}/${this.form.bank_qr_image_path}`
        : null
    },
    // NEW: QR 2 computed
    currentQRImageUrl2() {
      return this.form.bank_qr_image_path_2
        ? `${this.$axios.defaults.baseURL}/${this.form.bank_qr_image_path_2}`
        : null
    },
    currentImageUrl() {
      if (this.form.profile_image_path) {
        return `${this.$axios.defaults.baseURL || ''}/${this.form.profile_image_path
          }`
      }
      return null
    },
    // NEW: QR image computed property
    currentQRImageUrl() {
      if (this.form.bank_qr_image_path) {
        return `${this.$axios.defaults.baseURL || ''}/${this.form.bank_qr_image_path
          }`
      }
      return null
    },
  },

  async created() {
    this.loadEntry()
  },

  methods: {
    onThemeUpdated() {
      this.$toast.success('ອັບເດດສີທີມສຳເລັດ')
      this.loadEntry()
    },

    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        this.isloading = true
        let api = this.isCreate
          ? 'api/company/create'
          : `api/company/update/${this.recordId}`

        try {
          if (this.isCreate) {
            await this.$axios.post(api, this.form)
          } else {
            await this.$axios.put(api, this.form)
          }

          this.refreshData()
          swalSuccess(this.$swal, 'Succeed', 'Your transaction completed')
        } catch (error) {
          console.error('Error: ', error)

          const status = error.response?.status
          const data = error.response?.data

          // 🔐 License limit reached
          if (status === 403 && data?.code === 'LICENSE_LIMIT_REACHED') {
            this.$swal.fire({
              icon: 'warning',
              title: 'ຈຳກັດສິດການໃຊ້ງານ',
              html: `
        <p>${data.message}</p>
        <p><strong>ຈຳນວນສູງສຸດ:</strong> ${data.limit}</p>
        <p><strong>ປັດຈຸບັນ:</strong> ${data.current}</p>
      `,
              confirmButtonText: 'ຕົກລົງ',
            })
            return
          }

          // ❌ Other errors
          swalError2(
            this.$swal,
            'Error',
            data?.message || 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່'
          )
        } finally {
          this.isloading = false
        }
      }
    },

    async loadEntry() {
      if (this.recordId && !this.isCreate) {
        try {
          const response = await this.$axios.get(
            `api/company/find/${this.recordId}`
          )
          this.form = response.data
        } catch (error) {
          console.log('Cannot fetch data ' + error)
        }
      }
    },

    // Profile image methods
    onFileSelected(file) {
      if (file) {
        const allowedTypes = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/gif',
        ]
        if (!allowedTypes.includes(file.type)) {
          this.$toast.error('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ (JPG, PNG, GIF)')
          this.clearSelectedFile()
          return
        }

        const maxSize = 5 * 1024 * 1024
        if (file.size > maxSize) {
          this.$toast.error('ຂະໜາດໄຟລ໌ໃຫຍ່ເກີນໄປ (ສູງສຸດ 5MB)')
          this.clearSelectedFile()
          return
        }

        this.previewUrl = URL.createObjectURL(file)
      } else {
        this.clearSelectedFile()
      }
    },

    clearSelectedFile() {
      this.selectedFile = null
      if (this.previewUrl) {
        URL.revokeObjectURL(this.previewUrl)
        this.previewUrl = null
      }
      if (this.$refs.fileInput) {
        this.$refs.fileInput.reset()
      }
    },

    async uploadProfileImage() {
      if (!this.selectedFile) {
        this.$toast.error('ກະລຸນາເລືອກໄຟລ໌ກ່ອນ')
        return
      }

      if (!this.form.id && this.isCreate) {
        this.$toast.error('ກະລຸນາບັນທຶກຂໍ້ມູນບໍລິສັດກ່ອນອັບໂຫລດຮູບ')
        return
      }

      this.uploading = true

      try {
        const formData = new FormData()
        formData.append('profile_image', this.selectedFile)

        const companyId = this.form.id || this.recordId
        const response = await this.$axios.post(
          `api/company/upload-profile-image/${companyId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        this.form.profile_image_path = response.data.profile_image_path
        this.$toast.success('ອັບໂຫລດຮູບສຳເລັດແລ້ວ')
        this.clearSelectedFile()
        this.refreshData()
      } catch (error) {
        console.error('Upload error:', error)
        const errorMessage =
          error.response?.data?.message || 'ອັບໂຫລດຮູບບໍ່ສຳເລັດ'
        this.$toast.error(errorMessage)
      } finally {
        this.uploading = false
      }
    },

    async deleteProfileImage() {
      if (!this.form.profile_image_path) return

      try {
        const result = await this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: 'ທ່ານຕ້ອງການລຶບຮູບໂປຣໄຟລ໌ນີ້ແທ້ບໍ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ',
        })

        if (result.isConfirmed) {
          this.deleting = true
          const companyId = this.form.id || this.recordId
          await this.$axios.delete(
            `api/company/delete-profile-image/${companyId}`
          )
          this.form.profile_image_path = null
          this.$toast.success('ລຶບຮູບສຳເລັດແລ້ວ')
          this.refreshData()
        }
      } catch (error) {
        console.error('Delete error:', error)
        const errorMessage = error.response?.data?.message || 'ລຶບຮູບບໍ່ສຳເລັດ'
        this.$toast.error(errorMessage)
      } finally {
        this.deleting = false
      }
    },

    // NEW: QR image methods
    onQRFileSelected(file, index) {
      if (!file) {
        index === 1 ? this.clearSelectedQRFile() : this.clearSelectedQRFile2()
        return
      }
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
      if (!allowedTypes.includes(file.type)) {
        this.$toast.error('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ (JPG, PNG)')
        index === 1 ? this.clearSelectedQRFile() : this.clearSelectedQRFile2()
        return
      }
      // Preview logic
      if (index === 1) this.qrPreviewUrl = URL.createObjectURL(file)
      else this.qrPreviewUrl2 = URL.createObjectURL(file)
    },

    clearSelectedQRFile() {
      this.selectedQRFile = null
      if (this.qrPreviewUrl) {
        URL.revokeObjectURL(this.qrPreviewUrl)
        this.qrPreviewUrl = null
      }
      if (this.$refs.qrFileInput) {
        this.$refs.qrFileInput.reset()
      }
    },
    clearSelectedQRFile2() {
      this.selectedQRFile2 = null
      if (this.qrPreviewUrl2) URL.revokeObjectURL(this.qrPreviewUrl2)
      this.qrPreviewUrl2 = null
    },
    async uploadQRImage(index) {
      const file = index === 1 ? this.selectedQRFile : this.selectedQRFile2
      const fieldName = index === 1 ? 'bank_qr_image' : 'bank_qr_image_2'
      const endpoint =
        index === 1 ? 'upload-bank-qr-image' : 'upload-bank-qr-image-2'

      if (index === 1) this.uploadingQR = true
      else this.uploadingQR2 = true

      try {
        const formData = new FormData()
        formData.append(fieldName, file)

        const companyId = this.form.id || this.recordId
        const response = await this.$axios.post(
          `api/company/${endpoint}/${companyId}`,
          formData
        )

        if (index === 1) {
          this.form.bank_qr_image_path = response.data.bank_qr_image_path
          this.clearSelectedQRFile()
        } else {
          this.form.bank_qr_image_path_2 = response.data.bank_qr_image_path_2
          this.clearSelectedQRFile2()
        }

        this.$toast.success(`ອັບໂຫລດ QR ${index} ສຳເລັດ`)
        this.refreshData()
      } catch (error) {
        this.$toast.error('ອັບໂຫລດ QR ບໍ່ສຳເລັດ')
      } finally {
        if (index === 1) this.uploadingQR = false
        else this.uploadingQR2 = false
      }
    },

    async deleteQRImage(index) {
      const result = await this.$swal.fire({
        title: 'ຢືນຢັນການລຶບ',
        text: `ທ່ານຕ້ອງການລຶບ QR ໂຄ້ດທີ ${index} ນີ້ແທ້ບໍ?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ລຶບ',
      })

      if (result.isConfirmed) {
        if (index === 1) this.deletingQR = true
        else this.deletingQR2 = true
        const endpoint =
          index === 1 ? 'delete-bank-qr-image' : 'delete-bank-qr-image-2'

        try {
          const companyId = this.form.id || this.recordId
          await this.$axios.delete(`api/company/${endpoint}/${companyId}`)

          if (index === 1) this.form.bank_qr_image_path = null
          else this.form.bank_qr_image_path_2 = null

          this.$toast.success('ລຶບສຳເລັດ')
          this.refreshData()
        } catch (error) {
          this.$toast.error('ລຶບບໍ່ສຳເລັດ')
        } finally {
          if (index === 1) this.deletingQR = false
          else this.deletingQR2 = false
        }
      }
    },

    refreshData() {
      this.$emit('reload-data')
    },
  },
}
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}

.v-expansion-panel-header {
  min-height: 40px !important;
}

.v-expansion-panel-content>>>.v-expansion-panel-content__wrap {
  padding-top: 8px;
  padding-bottom: 8px;
}

.rounded {
  border-radius: 4px !important;
}

.v-file-input>>>.v-file-input__text {
  font-size: 0.875rem;
}

.v-text-field--outlined.v-input--dense .v-label {
  top: 8px;
}

/* NEW: QR Code specific styles */
.qr-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px;
}

.qr-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px;
  background: #f5f5f5;
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 160px;
}

.qr-shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.qr-preview {
  border: 2px solid #4caf50;
  box-shadow: 0 2px 4px rgba(76, 175, 80, 0.3);
}
</style>