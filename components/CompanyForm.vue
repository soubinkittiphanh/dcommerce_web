<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    
    <!-- Add the dialog component -->
    <company-theme-dialog
      v-model="showThemeDialog"
      :company-id="form.id || recordId"
      @theme-updated="onThemeUpdated"
    />
    
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຈັດການ ສາຂາ
        </v-chip>
      </v-card-title>
      
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="6">
              <v-text-field
                :disabled="!isCreate"
                v-model="form.mnemonic"
                label="* Code"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.name"
                label="* ຊື່"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.tel"
                label=" ເບີໂທ"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.email"
                label=" ອີເມວ"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.address"
                label=" ທີ່ຢູ່"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.province"
                label=" ເມືອງ"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.district"
                label=" ແຂວງ"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-checkbox
                v-model.number="form.isActive"
                label="Is Active"
              ></v-checkbox>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.bank"
                label=" ຊື່ທະນາຄານ"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.accountName"
                label=" ຊື່ບັນຊີ"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="form.accounts"
                label="ເລກບັນຊີ (ຂັ້ນຫລາຍບັນຊີດ້ວຍ ເຄື່ອງໝາຍ | )"
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- Profile Image Section -->
          <v-row>
            <v-col cols="12">
              <v-divider class="my-4"></v-divider>
              <v-subheader class="pl-0">
                <v-icon class="mr-2">mdi-image-outline</v-icon>
                ຮູບໂປຣໄຟລ໌ບໍລິສັດ
              </v-subheader>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <!-- Current Image Display -->
              <div class="image-preview-container">
                <v-card
                  v-if="currentImageUrl"
                  class="mx-auto"
                  max-width="200"
                  elevation="2"
                >
                  <v-img
                    :src="currentImageUrl"
                    height="150"
                    cover
                    class="profile-image"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-card-actions class="justify-center">
                    <v-btn
                      color="error"
                      text
                      small
                      @click="deleteProfileImage"
                      :loading="deleting"
                    >
                      <v-icon small>mdi-delete</v-icon>
                      ລຶບ
                    </v-btn>
                  </v-card-actions>
                </v-card>

                <!-- No Image Placeholder -->
                <v-card
                  v-else
                  class="mx-auto d-flex align-center justify-center"
                  max-width="200"
                  height="150"
                  elevation="1"
                  outlined
                >
                  <div class="text-center">
                    <v-icon size="48" color="grey lighten-2">mdi-image-outline</v-icon>
                    <div class="text-caption grey--text">ບໍ່ມີຮູບໂປຣໄຟລ໌</div>
                  </div>
                </v-card>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <!-- File Upload Section -->
              <v-file-input
                ref="fileInput"
                v-model="selectedFile"
                accept="image/*"
                label="ເລືອກຮູບໂປຣໄຟລ໌ໃໝ່"
                prepend-icon="mdi-camera"
                show-size
                @change="onFileSelected"
                :disabled="uploading"
                clearable
              ></v-file-input>

              <!-- Preview Selected Image -->
              <div v-if="previewUrl" class="mt-3">
                <v-subheader class="pl-0">ຕົວຢ່າງຮູບທີ່ເລືອກ:</v-subheader>
                <v-img
                  :src="previewUrl"
                  max-width="150"
                  max-height="100"
                  class="preview-image"
                ></v-img>
              </div>

              <!-- Upload Controls -->
              <div class="mt-4">
                <v-btn
                  v-if="selectedFile && !uploading"
                  color="primary"
                  @click="uploadProfileImage"
                  :disabled="!selectedFile"
                  class="mr-2"
                >
                  <v-icon left>mdi-upload</v-icon>
                  ອັບໂຫລດຮູບ
                </v-btn>

                <v-btn v-if="uploading" color="primary" loading disabled>
                  ກຳລັງອັບໂຫລດ...
                </v-btn>

                <v-btn
                  v-if="selectedFile"
                  color="grey"
                  text
                  @click="clearSelectedFile"
                  :disabled="uploading"
                >
                  ຍົກເລີກ
                </v-btn>
              </div>

              <!-- Upload Guidelines -->
              <v-alert type="info" text dense class="mt-3">
                <small>
                  • ຮອງຮັບໄຟລ໌: JPG, PNG, GIF<br />
                  • ຂະໜາດສູງສຸດ: 5MB<br />
                  • ແນະນຳຂະໜາດ: 400x400px
                </small>
              </v-alert>
            </v-col>
          </v-row>

          <!-- Theme Management Button - MOVED HERE -->
          <v-row v-if="!isCreate && form.id">
            <v-col cols="12">
              <v-divider class="my-4"></v-divider>
              <v-btn
                color="primary"
                outlined
                block
                large
                @click="showThemeDialog = true"
              >
                <v-icon left>mdi-palette</v-icon>
                ຈັດການສີທີມບໍລິສັດ
              </v-btn>
            </v-col>
          </v-row>

        </v-form>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          rounded
          variant="text"
          @click="$emit('close-dialog')"
        >
          Close
        </v-btn>
        <v-btn color="primary" rounded variant="text" @click="commitRecord">
          Save
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
        profile_image_path: null,
        isActive: true,
      },
      items: ['Gold', 'Silver', 'Platinum', 'Diamond', 'Master'],
      isloading: false,
      // Image handling
      selectedFile: null,
      previewUrl: null,
      uploading: false,
      deleting: false,
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) =>
          (value && value.length <= 100) ||
          'Name must be less than 100 characters',
      ],
    }
  },
  computed: {
    currentImageUrl() {
      if (this.form.profile_image_path) {
        // Construct full URL for the image
        return `${this.$axios.defaults.baseURL || ''}/${
          this.form.profile_image_path
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
      // Optionally reload company data
      this.loadEntry()
    },
    
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        this.isloading = true
        let api = this.isCreate
          ? 'api/company/create'
          : `api/company/update/${this.recordId}`
        console.log('API => ', api)

        try {
          if (this.isCreate) {
            await this.$axios.post(api, this.form)
          } else {
            await this.$axios.put(api, this.form)
          }

          this.refreshData()
          swalSuccess(this.$swal, 'Succeed', 'Your transaction completed')
        } catch (error) {
          console.log('Error: ', error)
          swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')
        } finally {
          this.isloading = false
        }
      }
    },

    async loadEntry() {
      console.log(`===> Update form record load`)
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

    // Image handling methods
    onFileSelected(file) {
      if (file) {
        // Validate file type
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

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
          this.$toast.error('ຂະໜາດໄຟລ໌ໃຫຍ່ເກີນໄປ (ສູງສຸດ 5MB)')
          this.clearSelectedFile()
          return
        }

        // Create preview URL
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

        // Update form with new image path
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

          // Clear image path from form
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

    refreshData() {
      this.$emit('reload-data')
    },
  },
}
</script>

<style scoped>
.image-preview-container {
  min-height: 150px;
}

.profile-image {
  border-radius: 8px;
}

.preview-image {
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.v-file-input {
  margin-bottom: 0;
}
</style>