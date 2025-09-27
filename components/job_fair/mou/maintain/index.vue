<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card class="maintenance-dialog">
      <!-- Header -->
      <v-toolbar color="primary" dark flat class="dialog-toolbar">
        <v-btn icon @click="cancel" class="close-btn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="toolbar-title">
          <v-icon left class="mr-2">mdi-file-document-edit</v-icon>
          {{ isEditing ? 'ແກ້ໄຂ MOU' : 'ສ້າງ MOU ໃໝ່' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="save"
          :loading="saving"
          :disabled="!isFormValid"
          class="save-btn"
        >
          <v-icon left>mdi-content-save</v-icon>
          ບັນທຶກ
        </v-btn>
      </v-toolbar>

      <!-- Form Content -->
      <v-card-text class="dialog-content pa-0">
        <v-container fluid class="form-container">
          <v-form ref="form" v-model="isFormValid" lazy-validation>
            <v-row dense>
              <!-- Basic Information Section -->
              <v-col cols="12" class="pb-0">
                <div class="section-header compact">
                  <v-icon color="primary" small class="mr-2">mdi-information</v-icon>
                  <h3 class="section-title">ຂໍ້ມູນພື້ນຖານ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="4" md="3">
                <v-text-field
                  v-model="form.jobCode"
                  label="ລະຫັດວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-identifier"
                  :disabled="isEditing"
                />
              </v-col>

              <v-col cols="12" sm="4" md="3">
                <v-text-field
                  v-model="form.projectAmount"
                  label="ມູນຄ່າ Order"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-file-document"
                />
              </v-col>

              <v-col cols="12" sm="4" md="3">
                <v-select
                  v-model="form.jobStatus"
                  :items="statusOptions"
                  label="ສະຖານະວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-flag"
                >
                  <template v-slot:selection="{ item }">
                    <v-chip :color="getStatusColor(item.value)" x-small text-color="white">
                      {{ item.text }}
                    </v-chip>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="4" md="4">
                <v-text-field
                  v-model="form.jobTitle"
                  label="ໜ້າວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-briefcase"
                />
              </v-col>

              <!-- Company & Location Section -->
              <v-col cols="4" class="pb-0 pt-2">
                <div class="section-header compact">
                  <v-icon color="primary" small class="mr-2">mdi-domain</v-icon>
                  <h3 class="section-title">ບໍລິສັດ & ສະຖານທີ່</h3>
                </div>
              </v-col>

              <v-col cols="4" md="4">
                <v-text-field
                  v-model="form.employerCompany"
                  label="ບໍລິສັດນາຍຈ້າງ"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-office-building"
                />
              </v-col>

              <v-col cols="4" md="4">
                <v-text-field
                  v-model="form.workLocation"
                  label="ສະຖານທີ່ເຮັດວຽກ"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-map-marker"
                />
              </v-col>

              <!-- Worker & Financial Information -->
              <v-col cols="12" class="pb-0 pt-2">
                <div class="section-header compact">
                  <v-icon color="primary" small class="mr-2">mdi-account-group</v-icon>
                  <h3 class="section-title">ແຮງງານ & ການເງິນ</h3>
                </div>
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-text-field
                  v-model.number="form.numberOfWorkers"
                  label="ຈຳນວນແຮງງານ *"
                  :rules="[rules.required, rules.positiveNumber]"
                  outlined
                  dense
                  hide-details="auto"
                  type="number"
                  min="1"
                  prepend-inner-icon="mdi-counter"
                />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-select
                  v-model="form.workerType"
                  :items="workerTypeOptions"
                  label="ປະເພດແຮງງານ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-account"
                />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-text-field
                  v-model.number="form.pmCharge"
                  label="ຄ່າບໍລິຫານ PM"
                  outlined
                  dense
                  hide-details="auto"
                  type="number"
                  min="0"
                  step="0.01"
                  prepend-inner-icon="mdi-cash"
                  :suffix="selectedCurrency?.code || 'USD'"
                />
              </v-col>

              <v-col cols="6" sm="3" md="2">
                <v-text-field
                  v-model.number="form.exchangeRate"
                  label="ອັດຕາແລກປ່ຽນ"
                  outlined
                  dense
                  hide-details="auto"
                  type="number"
                  min="0"
                  step="0.001"
                  prepend-inner-icon="mdi-swap-horizontal"
                />
              </v-col>

              <v-col cols="6" sm="4" md="2">
                <v-select
                  v-model="form.currencyId"
                  :items="currencies"
                  item-text="code"
                  item-value="id"
                  label="ສະກຸນເງິນ"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-currency-usd"
                  :loading="loadingCurrencies"
                />
              </v-col>

              <v-col cols="6" sm="8" md="2">
                <v-select
                  v-model="form.agencyId"
                  :items="agencies"
                  item-text="agencyName"
                  item-value="id"
                  label="ຕົວແທນ"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-domain"
                  :loading="loadingAgencies"
                  clearable
                />
              </v-col>

              <!-- Notes Section -->
              <v-col cols="12" class="pb-0 pt-2">
                <div class="section-header compact">
                  <v-icon color="primary" small class="mr-2">mdi-note-text</v-icon>
                  <h3 class="section-title">ໝາຍເຫດ</h3>
                </div>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.notes"
                  label="ໝາຍເຫດ"
                  outlined
                  dense
                  rows="2"
                  hide-details="auto"
                  prepend-inner-icon="mdi-note"
                />
              </v-col>

              <!-- Files Section -->
              <v-col cols="12" class="pb-0 pt-2">
                <div class="section-header compact">
                  <v-icon color="primary" small class="mr-2">mdi-file-multiple</v-icon>
                  <h3 class="section-title">ໄຟລ໌ແນບ</h3>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-file-input
                  ref="imageInput"
                  v-model="selectedImages"
                  label="ຮູບພາບ (5MB)"
                  multiple
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  outlined
                  dense
                  hide-details="auto"
                  :clearable="false"
                  @change="handleImageSelection"
                  :disabled="processingFiles"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip x-small label color="primary">
                      {{ selectedImages ? selectedImages.length : 0 }} ຮູບ
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>

              <v-col cols="12" md="6">
                <v-file-input
                  ref="documentInput"
                  v-model="selectedDocuments"
                  label="ເອກະສານ (10MB)"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                  prepend-icon="mdi-file-document"
                  outlined
                  dense
                  hide-details="auto"
                  :clearable="false"
                  @change="handleDocumentSelection"
                  :disabled="processingFiles"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip x-small label color="primary">
                      {{ selectedDocuments ? selectedDocuments.length : 0 }} ເອກະສານ
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>

              <!-- File Progress -->
              <v-col cols="12" v-if="processingFiles && fileProgress.total > 0">
                <v-progress-linear
                  :value="(fileProgress.current / fileProgress.total) * 100"
                  color="primary"
                  height="3"
                >
                  <template v-slot:default>
                    <small>{{ fileProgress.current }}/{{ fileProgress.total }}</small>
                  </template>
                </v-progress-linear>
              </v-col>

              <!-- File Preview -->
              <v-col cols="12" v-if="(form.images && form.images.length > 0) || (form.documents && form.documents.length > 0)">
                <v-expansion-panels flat>
                  <v-expansion-panel>
                    <v-expansion-panel-header class="pa-2">
                      <div class="d-flex align-center">
                        <v-icon small class="mr-2">mdi-paperclip</v-icon>
                        <span class="text-caption">
                          {{ form.images.length }} ຮູບພາບ, {{ form.documents.length }} ເອກະສານ
                        </span>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!-- Images -->
                      <div v-if="form.images.length > 0" class="mb-2">
                        <v-chip-group column>
                          <v-chip
                            v-for="(image, index) in form.images"
                            :key="`img-${index}`"
                            small
                            close
                            @click:close="removeImage(index)"
                            @click="openImagePreview(image, index)"
                          >
                            <v-icon small left>mdi-image</v-icon>
                            {{ image.name }}
                          </v-chip>
                        </v-chip-group>
                      </div>
                      
                      <!-- Documents -->
                      <div v-if="form.documents.length > 0">
                        <v-chip-group column>
                          <v-chip
                            v-for="(doc, index) in form.documents"
                            :key="`doc-${index}`"
                            small
                            close
                            @click:close="removeDocument(index)"
                          >
                            <v-icon small left :color="getDocumentTypeColor(doc.name)">
                              {{ getDocumentTypeIcon(doc.name) }}
                            </v-icon>
                            {{ doc.name }}
                            <v-btn
                              v-if="isPdfFile(doc.name) && doc.url"
                              icon
                              x-small
                              @click.stop="viewPdf(doc)"
                              class="ml-1"
                            >
                              <v-icon x-small>mdi-eye</v-icon>
                            </v-btn>
                            <v-btn
                              v-if="doc.url"
                              icon
                              x-small
                              @click.stop="downloadDocument(doc)"
                              class="ml-1"
                            >
                              <v-icon x-small>mdi-download</v-icon>
                            </v-btn>
                          </v-chip>
                        </v-chip-group>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <!-- Footer -->
      <v-card-actions class="dialog-actions pa-3">
        <v-spacer></v-spacer>
        <v-btn text @click="cancel" class="mr-2">
          <v-icon left small>mdi-cancel</v-icon>
          ຍົກເລີກ
        </v-btn>
        <v-btn
          color="primary"
          @click="save"
          :loading="saving"
          :disabled="!isFormValid"
        >
          <v-icon left small>mdi-content-save</v-icon>
          {{ isEditing ? 'ອັບເດດ' : 'ສ້າງ' }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Image Preview Dialog -->
    <v-dialog v-model="imagePreviewDialog" max-width="90vw">
      <v-card v-if="previewImage">
        <v-card-title class="d-flex justify-space-between align-center">
          <span>{{ previewImage.name }}</span>
          <v-btn icon @click="imagePreviewDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-img
            :src="previewImage.preview || previewImage.url"
            contain
            max-height="70vh"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="downloadImage(previewImage)"
            v-if="previewImage.url"
          >
            <v-icon left>mdi-download</v-icon>
            ດາວໂຫລດ
          </v-btn>
          <v-btn
            color="red"
            text
            @click="removeImageFromPreview"
          >
            <v-icon left>mdi-delete</v-icon>
            ລຶບ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- PDF Viewer Dialog -->
    <v-dialog 
      v-model="pdfViewerDialog" 
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click="pdfViewerDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>
            <v-icon left>mdi-file-pdf-box</v-icon>
            {{ currentPdfName }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn 
            text 
            @click="downloadCurrentPdf"
            v-if="currentPdfUrl"
          >
            <v-icon left>mdi-download</v-icon>
            ດາວໂຫລດ
          </v-btn>
        </v-toolbar>
        
        <v-card-text class="pa-0 pdf-viewer-content">
          <div class="pdf-container">
            <iframe
              v-if="currentPdfUrl"
              :src="currentPdfUrl + '#toolbar=1&navpanes=1&scrollbar=1'"
              width="100%"
              height="100%"
              frameborder="0"
              class="pdf-iframe"
            >
              <p>Your browser does not support iframes.</p>
            </iframe>
            
            <div v-else class="pdf-loading">
              <v-progress-circular
                indeterminate
                size="64"
                color="primary"
              ></v-progress-circular>
              <p class="mt-4">ກຳລັງໂຫລດ PDF...</p>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
export default {
  name: 'MouMaintenanceDialog',
  props: {
    value: { type: Boolean, default: false },
    editingItem: { type: Object, default: null },
  },
  data() {
    return {
      isFormValid: false,
      saving: false,
      loadingAgencies: false,
      loadingCurrencies: false,
      processingFiles: false,
      fileProgress: { current: 0, total: 0 },
      agencies: [],
      currencies: [],
      selectedImages: [],
      selectedDocuments: [],
      imagePreviewDialog: false,
      previewImage: null,
      previewImageIndex: null,
      pdfViewerDialog: false,
      currentPdfUrl: null,
      currentPdfName: null,
      form: {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        projectAmount: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        images: [],
        notes: '',
        currencyId: null,
      },
      statusOptions: [
        { value: 'draft', text: 'ຮ່າງ' },
        { value: 'open', text: 'ເປີດ' },
        { value: 'in_progress', text: 'ກຳລັງດຳເນີນການ' },
        { value: 'completed', text: 'ສຳເລັດແລ້ວ' },
        { value: 'cancelled', text: 'ຍົກເລີກແລ້ວ' },
      ],
      workerTypeOptions: [
        { value: 'Any', text: 'ເພດໃດກໍໄດ້' },
        { value: 'Man', text: 'ຜູ້ຊາຍເທົ່ານັ້ນ' },
        { value: 'Woman', text: 'ຜູ້ຍິງເທົ່ານັ້ນ' },
        { value: 'Spous', text: 'ຄູ່ສົມລົດ' },
      ],
      rules: {
        required: (v) => !!v || 'ຈຳເປັນຕ້ອງໃສ່ຂໍ້ມູນ',
        positiveNumber: (v) => v > 0 || 'ຕ້ອງໃຫ່ຍກວ່າ 0',
      },
    }
  },
  computed: {
    isEditing() {
      return !!this.editingItem
    },
    selectedCurrency() {
      return this.currencies.find((c) => c.id === this.form.currencyId)
    },
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.initForm()
        this.fetchDropdownData()
      }
    },
    editingItem: {
      handler() {
        if (this.editingItem) {
          this.populateForm()
        }
      },
      deep: true,
    },
  },
  methods: {
    initForm() {
      if (this.isEditing) {
        this.populateForm()
      } else {
        this.resetForm()
      }
    },
    resetForm() {
      this.form = {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
        projectAmount: 0,
        exchangeRate: 1,
        agencyId: null,
        employerCompany: '',
        workLocation: '',
        jobTitle: '',
        numberOfWorkers: 1,
        workerType: 'Any',
        jobStatus: 'draft',
        documents: [],
        images: [],
        notes: '',
        currencyId: null,
      }
      this.selectedImages = []
      this.selectedDocuments = []
      this.$nextTick(() => {
        this.$refs.form?.resetValidation()
      })
    },
    populateForm() {
      if (this.editingItem) {
        const transformedImages = (this.editingItem.images || []).map((img) => ({
          id: img.id,
          name: img.orgName || img.img_path,
          size: img.imageSize || img.size,
          type: img.imageMimeType || img.type,
          url: this.getFileUrl('images', img.img_name || img.img_path),
          preview: this.getFileUrl('images', img.img_name || img.img_path),
          isExisting: true,
        }))

        const transformedDocuments = (this.editingItem.documents || []).map((doc, index) => ({
          id: doc.id || index,
          name: doc.name,
          size: doc.size,
          type: doc.mimetype || doc.type,
          url: doc.path ? this.getDocumentDownloadUrl(this.editingItem.id, index) : null,
          path: doc.path,
          filename: doc.filename,
          isExisting: true,
        }))

        this.form = {
          ...this.form,
          ...this.editingItem,
          agencyId: this.editingItem.agency?.id || null,
          currencyId: this.editingItem.currency?.id || null,
          documents: transformedDocuments,
          images: transformedImages,
        }
      }
    },
    async handleImageSelection(files) {
      if (!files || files.length === 0) return
      const maxSize = 5 * 1024 * 1024
      const validFiles = Array.from(files).filter(file => {
        if (!file.type.startsWith('image/')) {
          this.$toast.error(`${file.name} ບໍ່ແມ່ນໄຟລ໌ຮູບພາບ`)
          return false
        }
        if (file.size > maxSize) {
          this.$toast.error(`${file.name} ມີຂະໜາດໃຫຍ່ເກີນ 5MB`)
          return false
        }
        return true
      })

      if (validFiles.length === 0) {
        this.selectedImages = []
        return
      }

      this.processingFiles = true
      this.fileProgress = { current: 0, total: validFiles.length }

      try {
        for (let i = 0; i < validFiles.length; i++) {
          const file = validFiles[i]
          this.fileProgress.current = i
          try {
            const preview = await this.readFileAsDataURL(file)
            this.form.images.push({
              name: file.name,
              size: file.size,
              type: file.type,
              file: file,
              preview: preview,
              isNew: true
            })
            await this.delay(10)
          } catch (error) {
            console.error(`Error processing image ${file.name}:`, error)
            this.$toast.error(`ໂຫລດຮູບພາບ ${file.name} ບໍ່ສຳເລັດ`)
          }
        }
        this.fileProgress.current = validFiles.length
        this.$toast.success(`ໂຫລດຮູບພາບ ${validFiles.length} ໄຟລ໌ສຳເລັດ`)
      } catch (error) {
        console.error('Error in handleImageSelection:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫລດຮູບພາບ')
      } finally {
        this.processingFiles = false
        this.fileProgress = { current: 0, total: 0 }
        this.selectedImages = []
        this.$nextTick(() => {
          if (this.$refs.imageInput) {
            this.$refs.imageInput.reset()
          }
        })
      }
    },
    async handleDocumentSelection(files) {
      if (!files || files.length === 0) return
      const maxSize = 10 * 1024 * 1024
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain'
      ]

      const validFiles = Array.from(files).filter(file => {
        if (!allowedTypes.includes(file.type) && !this.isValidDocumentExtension(file.name)) {
          this.$toast.error(`${file.name} ບໍ່ແມ່ນໄຟລ໌ເອກະສານທີ່ຮອງຮັບ`)
          return false
        }
        if (file.size > maxSize) {
          this.$toast.error(`${file.name} ມີຂະໜາດໃຫຍ່ເກີນ 10MB`)
          return false
        }
        return true
      })

      if (validFiles.length === 0) {
        this.selectedDocuments = []
        return
      }

      this.processingFiles = true
      this.fileProgress = { current: 0, total: validFiles.length }

      try {
        for (let i = 0; i < validFiles.length; i++) {
          const file = validFiles[i]
          this.fileProgress.current = i + 1
          this.form.documents.push({
            name: file.name,
            size: file.size,
            type: file.type,
            file: file,
            isNew: true
          })
          await this.delay(5)
        }
        this.$toast.success(`ໂຫລດເອກະສານ ${validFiles.length} ໄຟລ໌ສຳເລັດ`)
      } catch (error) {
        console.error('Error in handleDocumentSelection:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫລດເອກະສານ')
      } finally {
        this.processingFiles = false
        this.fileProgress = { current: 0, total: 0 }
        this.selectedDocuments = []
        this.$nextTick(() => {
          if (this.$refs.documentInput) {
            this.$refs.documentInput.reset()
          }
        })
      }
    },
    readFileAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target.result)
        reader.onerror = (e) => reject(new Error('Failed to read file'))
        reader.onabort = (e) => reject(new Error('File reading aborted'))
        if (file.size > 1024 * 1024) {
          this.createImageThumbnail(file, 300, 300).then(resolve).catch(() => {
            reader.readAsDataURL(file)
          })
        } else {
          reader.readAsDataURL(file)
        }
      })
    },
    createImageThumbnail(file, maxWidth, maxHeight) {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.onload = () => {
          let { width, height } = img
          if (width > height) {
            if (width > maxWidth) {
              height = (height * maxWidth) / width
              width = maxWidth
            }
          } else {
            if (height > maxHeight) {
              width = (width * maxHeight) / height
              height = maxHeight
            }
          }
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0, width, height)
          resolve(canvas.toDataURL('image/jpeg', 0.8))
        }
        img.onerror = reject
        img.src = URL.createObjectURL(file)
      })
    },
    isValidDocumentExtension(filename) {
      const validExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt']
      const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
      return validExtensions.includes(ext)
    },
    isPdfFile(filename) {
      if (!filename) return false
      const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
      return ext === '.pdf'
    },
    async viewPdf(doc) {
      try {
        this.currentPdfName = doc.name
        if (doc.isExisting && doc.url) {
          const response = await this.$axios({
            method: 'GET',
            url: doc.url,
            responseType: 'blob',
          })
          const blob = new Blob([response.data], { type: 'application/pdf' })
          this.currentPdfUrl = window.URL.createObjectURL(blob)
        } else if (doc.file && doc.isNew) {
          this.currentPdfUrl = URL.createObjectURL(doc.file)
        }
        this.pdfViewerDialog = true
      } catch (error) {
        console.error('Error viewing PDF:', error)
        this.$toast.error('ເປີດ PDF ບໍ່ສຳເລັດ')
      }
    },
    async downloadCurrentPdf() {
      if (this.currentPdfUrl && this.currentPdfName) {
        try {
          const link = document.createElement('a')
          link.href = this.currentPdfUrl
          link.download = this.currentPdfName
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          this.$toast.success('ດາວໂຫລດ PDF ສຳເລັດ')
        } catch (error) {
          console.error('Error downloading PDF:', error)
          this.$toast.error('ດາວໂຫລດ PDF ບໍ່ສຳເລັດ')
        }
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    removeImage(index) {
      const imageToRemove = this.form.images[index]
      if (imageToRemove.isExisting && imageToRemove.id) {
        this.deleteExistingImage(imageToRemove.id)
      }
      this.form.images.splice(index, 1)
    },
    async removeDocument(index) {
      const docToRemove = this.form.documents[index]
      if (docToRemove.isExisting && this.editingItem?.id) {
        await this.deleteExistingDocument(this.editingItem.id, index)
      }
      this.form.documents.splice(index, 1)
    },
    openImagePreview(image, index) {
      this.previewImage = image
      this.previewImageIndex = index
      this.imagePreviewDialog = true
    },
    removeImageFromPreview() {
      if (this.previewImageIndex !== null) {
        this.removeImage(this.previewImageIndex)
        this.imagePreviewDialog = false
        this.previewImage = null
        this.previewImageIndex = null
      }
    },
    async downloadDocument(doc) {
      if (doc.url) {
        try {
          const response = await this.$axios({
            method: 'GET',
            url: doc.url,
            responseType: 'blob',
          })
          const blob = new Blob([response.data])
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = doc.name || 'document'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
          this.$toast.success('ດາວໂຫລດເອກະສານສຳເລັດ')
        } catch (error) {
          console.error('Download error:', error)
          this.$toast.error('ດາວໂຫລດເອກະສານບໍ່ສຳເລັດ')
        }
      } else {
        this.$toast.warning('ເອກະສານຍັງບໍ່ໄດ້ຖືກບັນທຶກ')
      }
    },
    async downloadImage(image) {
      if (image.url) {
        try {
          const response = await this.$axios({
            method: 'GET',
            url: image.url,
            responseType: 'blob',
          })
          const blob = new Blob([response.data])
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = image.name || 'image'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
          this.$toast.success('ດາວໂຫລດຮູບພາບສຳເລັດ')
        } catch (error) {
          console.error('Download error:', error)
          this.$toast.error('ດາວໂຫລດຮູບພາບບໍ່ສຳເລັດ')
        }
      } else if (image.preview) {
        this.downloadDataURL(image.preview, image.name)
        this.$toast.success('ດາວໂຫລດຮູບພາບສຳເລັດ')
      }
    },
    downloadDataURL(dataURL, filename) {
      const link = document.createElement('a')
      link.href = dataURL
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    async deleteExistingImage(imageId) {
      try {
        const response = await this.$axios.$delete(`/api/mous/image/${imageId}`)
        if (response.success) {
          this.$toast.success('ລຶບຮູບພາບສຳເລັດແລ້ວ')
        }
      } catch (error) {
        console.error('Error deleting image:', error)
        this.$toast.error('ລຶບຮູບພາບບໍ່ສຳເລັດ')
      }
    },
    async deleteExistingDocument(mouId, documentIndex) {
      try {
        const response = await this.$axios.$delete(`/api/mous/${mouId}/document/${documentIndex}`)
        if (response.success) {
          this.$toast.success('ລຶບເອກະສານສຳເລັດແລ້ວ')
        }
      } catch (error) {
        console.error('Error deleting document:', error)
        this.$toast.error('ລຶບເອກະສານບໍ່ສຳເລັດ')
      }
    },
    getFileUrl(type, filename) {
      if (!filename) return ''
      const baseUrl = this.$axios.defaults.baseURL || ''
      return `${baseUrl}/uploads/${type}/${filename}`.replace(/\/+/g, '/').replace(':/', '://')
    },
    getDocumentDownloadUrl(mouId, documentIndex) {
      const baseUrl = this.$axios.defaults.baseURL || ''
      return `${baseUrl}/api/mous/download/document/${mouId}/${documentIndex}`.replace(/\/+/g, '/').replace(':/', '://')
    },
    getImageDownloadUrl(imageId) {
      const baseUrl = this.$axios.defaults.baseURL || ''
      return `${baseUrl}/api/mous/download/image/${imageId}`.replace(/\/+/g, '/').replace(':/', '://')
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    getDocumentTypeIcon(filename) {
      const ext = filename.split('.').pop().toLowerCase()
      const iconMap = {
        pdf: 'mdi-file-pdf-box',
        doc: 'mdi-file-word-box',
        docx: 'mdi-file-word-box',
        xls: 'mdi-file-excel-box',
        xlsx: 'mdi-file-excel-box',
        txt: 'mdi-file-document-outline',
        default: 'mdi-file-document'
      }
      return iconMap[ext] || iconMap.default
    },
    getDocumentTypeColor(filename) {
      const ext = filename.split('.').pop().toLowerCase()
      const colorMap = {
        pdf: 'red',
        doc: 'blue',
        docx: 'blue',
        xls: 'green',
        xlsx: 'green',
        txt: 'grey',
        default: 'primary'
      }
      return colorMap[ext] || colorMap.default
    },
    async fetchDropdownData() {
      await Promise.all([this.fetchAgencies(), this.fetchCurrencies()])
    },
    async fetchAgencies() {
      this.loadingAgencies = true
      try {
        const response = await this.$axios.$get('/api/agency')
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data
        }
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ')
      } finally {
        this.loadingAgencies = false
      }
    },
    async fetchCurrencies() {
      this.loadingCurrencies = true
      try {
        const response = await this.$axios.$get('/api/currency/find')
        if (Array.isArray(response)) {
          this.currencies = response
        } else if (response.success && response.data) {
          this.currencies = response.data
        } else if (response && !response.success) {
          this.currencies = response
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
        this.$toast.error('ໂຫລດຂໍ້ມູນສະກຸນເງິນບໍ່ສຳເລັດ')
      } finally {
        this.loadingCurrencies = false
      }
    },
    async save() {
      if (!this.$refs.form.validate()) {
        this.$toast.error('ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດໃນແບບຟອມກ່ອນບັນທຶກ')
        return
      }
      this.saving = true
      try {
        const payload = { ...this.form }
        if (!payload.pmCharge) payload.pmCharge = 0
        if (!payload.exchangeRate) payload.exchangeRate = 1
        if (!payload.numberOfWorkers) payload.numberOfWorkers = 1
        const formData = new FormData()
        Object.keys(payload).forEach(key => {
          if (key !== 'images' && key !== 'documents') {
            formData.append(key, payload[key])
          }
        })
        payload.images.forEach((image) => {
          if (image.isNew && image.file) {
            formData.append(`images`, image.file)
          }
        })
        payload.documents.forEach((doc) => {
          if (doc.isNew && doc.file) {
            formData.append(`documents`, doc.file)
          }
        })
        let response
        if (this.isEditing) {
          response = await this.$axios.$put(`/api/mous/${this.editingItem.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
        } else {
          response = await this.$axios.$post('/api/mous', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
        }
        if (response.success) {
          this.$toast.success(`MOU ${this.isEditing ? 'ອັບເດດ' : 'ສ້າງ'}ສຳເລັດແລ້ວ`)
          this.$emit('saved', response.data)
        }
      } catch (error) {
        console.error('Error saving MOU:', error)
        const errorMessage = error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ'
        this.$toast.error(errorMessage)
      } finally {
        this.saving = false
      }
    },
    cancel() {
      this.$emit('cancelled')
    },
    getStatusColor(status) {
      const colorMap = {
        draft: 'grey',
        open: 'blue',
        in_progress: 'orange',
        completed: 'green',
        cancelled: 'red',
      }
      return colorMap[status] || 'grey'
    },
    getWorkerTypeColor(type) {
      const colorMap = {
        Man: 'blue',
        Woman: 'pink',
        Spous: 'purple',
        Any: 'green',
      }
      return colorMap[type] || 'grey'
    },
    getWorkerTypeIcon(type) {
      const iconMap = {
        Man: 'mdi-account',
        Woman: 'mdi-account-outline',
        Spous: 'mdi-account-heart',
        Any: 'mdi-account-group',
      }
      return iconMap[type] || 'mdi-account'
    },
  },
}
</script>

<style scoped>
.maintenance-dialog {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dialog-toolbar {
  flex-shrink: 0;
  border-radius: 0 !important;
  min-height: 56px !important;
}

.toolbar-title {
  font-size: 1.1rem;
  font-weight: 500;
}

.dialog-content {
  flex: 1;
  overflow-y: auto;
  background-color: #fafafa;
  padding: 12px 8px !important;
}

.form-container {
  max-width: 1400px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 16px !important;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e3f2fd;
}

.section-header.compact {
  margin-bottom: 8px;
  padding-bottom: 4px;
}

.section-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1976d2;
  margin: 0;
}

.dialog-actions {
  flex-shrink: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
}

/* Compact form fields */
.v-text-field--outlined >>> .v-input__control > .v-input__slot,
.v-select--outlined >>> .v-input__control > .v-input__slot,
.v-textarea >>> .v-input__control > .v-input__slot {
  min-height: 40px !important;
}

.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) >>> .v-input__prepend-inner {
  margin-top: 8px !important;
}

/* Compact expansion panel */
.v-expansion-panel-header {
  min-height: 40px !important;
  padding: 8px 16px !important;
}

.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 8px 16px !important;
}

/* Compact chips */
.v-chip-group {
  gap: 4px;
}

.v-chip.v-size--small {
  height: 24px !important;
  font-size: 0.75rem;
}

.v-chip.v-size--x-small {
  height: 20px !important;
  font-size: 0.7rem;
}

/* PDF Viewer */
.pdf-viewer-content {
  height: calc(100vh - 64px);
}

.pdf-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f5f5f5;
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

.pdf-loading,
.pdf-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .form-container {
    padding: 12px !important;
    margin: 0 4px;
    border-radius: 6px;
  }

  .toolbar-title {
    font-size: 1rem;
  }

  .pdf-viewer-content {
    height: calc(100vh - 56px);
  }
}

/* Remove extra spacing */
.v-input--dense >>> .v-messages {
  min-height: 0 !important;
}

.v-text-field >>> .v-text-field__details {
  margin-bottom: 0 !important;
  padding-top: 2px !important;
}
</style>