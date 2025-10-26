<template>
  <div class="image-upload-component">
    <!-- Section Header -->
    <v-row v-if="showHeader">
      <v-col cols="12">
        <v-divider class="my-4"></v-divider>
        <v-subheader class="pl-0">
          <v-icon class="mr-2">{{ headerIcon }}</v-icon>
          {{ headerText }}
        </v-subheader>
      </v-col>
    </v-row>

    <v-row>
      <!-- Current Image Display -->
      <v-col cols="12" :md="showUploadSection ? 6 : 12">
        <div class="image-preview-container">
          <v-card
            v-if="currentImageUrl"
            class="mx-auto"
            :max-width="imageDisplaySize"
            elevation="2"
          >
            <v-img
              :src="currentImageUrl"
              :height="imageDisplayHeight"
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
            <v-card-actions v-if="allowDelete" class="justify-center">
              <v-btn
                color="error"
                text
                small
                @click="handleDelete"
                :loading="deleting"
              >
                <v-icon small>mdi-delete</v-icon>
                {{ deleteButtonText }}
              </v-btn>
            </v-card-actions>
          </v-card>

          <!-- No Image Placeholder -->
          <v-card
            v-else
            class="mx-auto d-flex align-center justify-center"
            :max-width="imageDisplaySize"
            :height="imageDisplayHeight"
            elevation="1"
            outlined
          >
            <div class="text-center">
              <v-icon size="48" color="grey lighten-2">{{ placeholderIcon }}</v-icon>
              <div class="text-caption grey--text">{{ placeholderText }}</div>
            </div>
          </v-card>
        </div>
      </v-col>

      <!-- Upload Section -->
      <v-col v-if="showUploadSection" cols="12" md="6">
        <!-- File Upload Input -->
        <v-file-input
          ref="fileInput"
          v-model="selectedFile"
          :accept="acceptedTypes"
          :label="uploadLabel"
          :prepend-icon="uploadIcon"
          show-size
          @change="onFileSelected"
          :disabled="uploading"
          clearable
        ></v-file-input>

        <!-- Preview Selected Image -->
        <div v-if="previewUrl" class="mt-3">
          <v-subheader class="pl-0">{{ previewLabel }}</v-subheader>
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
            @click="handleUpload"
            :disabled="!selectedFile || !canUpload"
            class="mr-2"
          >
            <v-icon left>mdi-upload</v-icon>
            {{ uploadButtonText }}
          </v-btn>

          <v-btn
            v-if="uploading"
            color="primary"
            loading
            disabled
          >
            {{ uploadingText }}
          </v-btn>

          <v-btn
            v-if="selectedFile"
            color="grey"
            text
            @click="clearSelectedFile"
            :disabled="uploading"
          >
            {{ cancelButtonText }}
          </v-btn>
        </div>

        <!-- Upload Guidelines -->
        <v-alert
          v-if="showGuidelines"
          type="info"
          text
          dense
          class="mt-3"
        >
          <small v-html="guidelines"></small>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  
  props: {
    // Image display
    imagePath: {
      type: String,
      default: null
    },
    baseUrl: {
      type: String,
      default: ''
    },
    imageDisplaySize: {
      type: [String, Number],
      default: 200
    },
    imageDisplayHeight: {
      type: [String, Number],
      default: 150
    },
    
    // Upload configuration
    entityId: {
      type: [String, Number],
      required: true
    },
    uploadEndpoint: {
      type: String,
      required: true
    },
    deleteEndpoint: {
      type: String,
      default: ''
    },
    acceptedTypes: {
      type: String,
      default: 'image/*'
    },
    maxSizeMB: {
      type: Number,
      default: 5
    },
    
    // UI Configuration
    showHeader: {
      type: Boolean,
      default: true
    },
    showUploadSection: {
      type: Boolean,
      default: true
    },
    allowDelete: {
      type: Boolean,
      default: true
    },
    showGuidelines: {
      type: Boolean,
      default: true
    },
    
    // Text customization
    headerText: {
      type: String,
      default: 'ຮູບໂປຣໄຟລ໌'
    },
    uploadLabel: {
      type: String,
      default: 'ເລືອກຮູບໃໝ່'
    },
    previewLabel: {
      type: String,
      default: 'ຕົວຢ່າງຮູບທີ່ເລືອກ:'
    },
    placeholderText: {
      type: String,
      default: 'ບໍ່ມີຮູບ'
    },
    uploadButtonText: {
      type: String,
      default: 'ອັບໂຫລດຮູບ'
    },
    deleteButtonText: {
      type: String,
      default: 'ລຶບ'
    },
    uploadingText: {
      type: String,
      default: 'ກຳລັງອັບໂຫລດ...'
    },
    cancelButtonText: {
      type: String,
      default: 'ຍົກເລີກ'
    },
    
    // Icons
    headerIcon: {
      type: String,
      default: 'mdi-image-outline'
    },
    uploadIcon: {
      type: String,
      default: 'mdi-camera'
    },
    placeholderIcon: {
      type: String,
      default: 'mdi-image-outline'
    }
  },

  data() {
    return {
      selectedFile: null,
      previewUrl: null,
      uploading: false,
      deleting: false
    }
  },

  computed: {
    currentImageUrl() {
      if (this.imagePath) {
        return this.baseUrl ? `${this.baseUrl}/${this.imagePath}` : `/${this.imagePath}`
      }
      return null
    },

    canUpload() {
      return this.entityId && this.uploadEndpoint
    },

    guidelines() {
      const types = this.acceptedTypes.replace('image/', '').replace('*', 'JPG, PNG, GIF').toUpperCase()
      return `• ຮອງຮັບໄຟລ໌: ${types}<br>• ຂະໜາດສູງສຸດ: ${this.maxSizeMB}MB<br>• ແນະນຳຂະໜາດ: 400x400px`
    }
  },

  methods: {
    onFileSelected(file) {
      if (file) {
        try {
          this.validateFile(file)
          this.previewUrl = URL.createObjectURL(file)
        } catch (error) {
          this.$toast.error(error.message)
          this.clearSelectedFile()
        }
      } else {
        this.clearSelectedFile()
      }
    },

    validateFile(file) {
      // Validate file type
      if (this.acceptedTypes !== 'image/*') {
        const allowedTypes = this.acceptedTypes.split(',').map(type => type.trim())
        if (!allowedTypes.includes(file.type)) {
          throw new Error('ປະເພດໄຟລ໌ບໍ່ຮອງຮັບ')
        }
      } else {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
        if (!allowedTypes.includes(file.type)) {
          throw new Error('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ (JPG, PNG, GIF)')
        }
      }

      // Validate file size
      const maxSize = this.maxSizeMB * 1024 * 1024
      if (file.size > maxSize) {
        throw new Error(`ຂະໜາດໄຟລ໌ໃຫຍ່ເກີນໄປ (ສູງສຸດ ${this.maxSizeMB}MB)`)
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

    async handleUpload() {
      if (!this.selectedFile || !this.canUpload) return

      this.uploading = true

      try {
        const formData = new FormData()
        formData.append('profile_image', this.selectedFile)

        const response = await this.$axios.post(
          this.uploadEndpoint.replace(':id', this.entityId),
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        this.$toast.success('ອັບໂຫລດຮູບສຳເລັດແລ້ວ')
        this.clearSelectedFile()
        
        // Emit success event with response data
        this.$emit('upload-success', response.data)

      } catch (error) {
        console.error('Upload error:', error)
        const errorMessage = error.response?.data?.message || 'ອັບໂຫລດຮູບບໍ່ສຳເລັດ'
        this.$toast.error(errorMessage)
        this.$emit('upload-error', error)
      } finally {
        this.uploading = false
      }
    },

    async handleDelete() {
      if (!this.deleteEndpoint) {
        this.$emit('delete-requested')
        return
      }

      try {
        const result = await this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: 'ທ່ານຕ້ອງການລຶບຮູບນີ້ແທ້ບໍ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ'
        })

        if (result.isConfirmed) {
          this.deleting = true

          await this.$axios.delete(this.deleteEndpoint.replace(':id', this.entityId))

          this.$toast.success('ລຶບຮູບສຳເລັດແລ້ວ')
          this.$emit('delete-success')
        }
      } catch (error) {
        console.error('Delete error:', error)
        const errorMessage = error.response?.data?.message || 'ລຶບຮູບບໍ່ສຳເລັດ'
        this.$toast.error(errorMessage)
        this.$emit('delete-error', error)
      } finally {
        this.deleting = false
      }
    }
  },

  beforeDestroy() {
    // Clean up preview URL
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl)
    }
  }
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