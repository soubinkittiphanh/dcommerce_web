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
      <v-card-text class="dialog-content">
        <v-container fluid class="form-container">
          <v-form ref="form" v-model="isFormValid" lazy-validation>
            <v-row>
              <!-- Basic Information Section -->
              <v-col cols="12">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-information</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນພື້ນຖານ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.jobCode"
                  label="ລະຫັດວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-identifier"
                  :disabled="isEditing"
                  hint="ລະຫັດງານເອກະລັກສຳລັບ MOU ນີ້"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="form.mouNumber"
                  label="ເລກທີ MOU"
                  outlined
                  dense
                  prepend-inner-icon="mdi-file-document"
                  hint="ເລກທີເອກະສານ MOU ທາງການ"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="form.jobStatus"
                  :items="statusOptions"
                  label="ສະຖານະວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-flag"
                >
                  <template v-slot:selection="{ item }">
                    <v-chip
                      :color="getStatusColor(item.value)"
                      small
                      text-color="white"
                    >
                      {{ item.text }}
                    </v-chip>
                  </template>
                  <template v-slot:item="{ item }">
                    <v-chip
                      :color="getStatusColor(item.value)"
                      small
                      text-color="white"
                      class="mr-2"
                    >
                      {{ item.text }}
                    </v-chip>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.jobTitle"
                  label="ຫົວຂໍ້ວຽກ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-briefcase"
                  hint="ລາຍລະອຽດຂອງຕຳແໜ່ງວຽກ"
                  persistent-hint
                />
              </v-col>

              <!-- Company & Location Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-domain</v-icon
                  >
                  <h3 class="section-title">ບໍລິສັດ & ສະຖານທີ່</h3>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.employerCompany"
                  label="ບໍລິສັດນາຍຈ້າງ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-office-building"
                  hint="ຊື່ບໍລິສັດທີ່ຈ້າງງານ"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.workLocation"
                  label="ສະຖານທີ່ເຮັດວຽກ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-map-marker"
                  hint="ບ່ອນທີ່ຈະປະຕິບັດວຽກ"
                  persistent-hint
                />
              </v-col>

              <!-- Worker Information Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-account-group</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນແຮງງານ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model.number="form.numberOfWorkers"
                  label="ຈຳນວນແຮງງານ *"
                  :rules="[rules.required, rules.positiveNumber]"
                  outlined
                  dense
                  type="number"
                  min="1"
                  prepend-inner-icon="mdi-counter"
                />
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="form.workerType"
                  :items="workerTypeOptions"
                  label="ປະເພດແຮງງານ *"
                  :rules="[rules.required]"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                >
                  <template v-slot:selection="{ item }">
                    <v-icon
                      small
                      :color="getWorkerTypeColor(item.value)"
                      class="mr-2"
                    >
                      {{ getWorkerTypeIcon(item.value) }}
                    </v-icon>
                    {{ item.text }}
                  </template>
                  <template v-slot:item="{ item }">
                    <v-icon
                      small
                      :color="getWorkerTypeColor(item.value)"
                      class="mr-3"
                    >
                      {{ getWorkerTypeIcon(item.value) }}
                    </v-icon>
                    {{ item.text }}
                  </template>
                </v-select>
              </v-col>

              <!-- Financial Information Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-currency-usd</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນການເງິນ</h3>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-model.number="form.pmCharge"
                  label="ຄ່າບໍລິຫານ PM"
                  outlined
                  dense
                  type="number"
                  min="0"
                  step="0.01"
                  prepend-inner-icon="mdi-cash"
                  :suffix="selectedCurrency?.code || 'USD'"
                />
              </v-col>

              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  v-model.number="form.exchangeRate"
                  label="ອັດຕາແລກປ່ຽນ"
                  outlined
                  dense
                  type="number"
                  min="0"
                  step="0.001"
                  prepend-inner-icon="mdi-swap-horizontal"
                  hint="ຄ່າເລີ່ມຕົ້ນ: 1.0"
                  persistent-hint
                />
              </v-col>

              <v-col cols="12" sm="6" md="3">
                <v-select
                  v-model="form.currencyId"
                  :items="currencies"
                  item-text="name"
                  item-value="id"
                  label="ສະກຸນເງິນ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-currency-usd"
                  :loading="loadingCurrencies"
                >
                  <template v-slot:selection="{ item }">
                    {{ item.code }} - {{ item.name }}
                  </template>
                  <template v-slot:item="{ item }">
                    <strong>{{ item.code }}</strong> - {{ item.name }}
                  </template>
                </v-select>
              </v-col>

              <!-- Agency Selection -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-account-tie</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນຕົວແທນ</h3>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  v-model="form.agencyId"
                  :items="agencies"
                  item-text="agencyName"
                  item-value="id"
                  label="ຕົວແທນ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-domain"
                  :loading="loadingAgencies"
                  clearable
                >
                  <template v-slot:selection="{ item }">
                    {{ item.agencyName }}
                    <small class="ml-2">({{ item.agencyCode }})</small>
                  </template>
                  <template v-slot:item="{ item }">
                    <div>
                      <div class="font-weight-medium">
                        {{ item.agencyName }}
                      </div>
                      <small class="text--secondary"
                        >{{ item.agencyCode }} - {{ item.address }}</small
                      >
                    </div>
                  </template>
                </v-select>
              </v-col>

              <!-- Notes Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-note-text</v-icon
                  >
                  <h3 class="section-title">ຂໍ້ມູນເພີ່ມເຕີມ</h3>
                </div>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.notes"
                  label="ໝາຍເຫດ"
                  outlined
                  rows="3"
                  prepend-inner-icon="mdi-note"
                  hint="ໝາຍເຫດ ຫຼື ຄຳອະທິບາຍເພີ່ມເຕີມກ່ຽວກັບ MOU ນີ້"
                  persistent-hint
                />
              </v-col>

              <!-- Images Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-image-multiple</v-icon
                  >
                  <h3 class="section-title">ຮູບພາບ</h3>
                </div>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  ref="imageInput"
                  v-model="selectedImages"
                  label="ເລືອກຮູບພາບ"
                  multiple
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  outlined
                  dense
                  :clearable="false"
                  show-size
                  @change="handleImageSelection"
                  :disabled="processingFiles"
                  hint="ສາມາດເລືອກຮູບພາບໄດ້ຫຼາຍໄຟລ໌ (JPG, PNG, GIF, ຂະໜາດສູງສຸດ 5MB ຕໍ່ໄຟລ໌)"
                  persistent-hint
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ selectedImages ? selectedImages.length : 0 }} ຮູບພາບ
                    </v-chip>
                  </template>
                </v-file-input>

                <!-- File Processing Progress -->
                <v-progress-linear
                  v-if="processingFiles && fileProgress.total > 0"
                  :value="(fileProgress.current / fileProgress.total) * 100"
                  color="primary"
                  height="4"
                  class="mt-2"
                >
                  <template v-slot:default>
                    <small>ກຳລັງປະມວນຜົນ {{ fileProgress.current }} / {{ fileProgress.total }} ໄຟລ໌...</small>
                  </template>
                </v-progress-linear>
              </v-col>

              <!-- Image Preview Grid -->
              <v-col cols="12" v-if="form.images && form.images.length > 0">
                <div class="image-gallery">
                  <v-row>
                    <v-col
                      cols="6"
                      sm="4"
                      md="3"
                      lg="2"
                      v-for="(image, index) in form.images"
                      :key="`image-${index}`"
                    >
                      <v-card class="image-card" elevation="2">
                        <div class="image-container">
                          <v-img
                            :src="image.preview || image.url"
                            :alt="image.name"
                            aspect-ratio="1"
                            class="image-preview"
                            @click="openImagePreview(image, index)"
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                          
                          <!-- Image overlay actions -->
                          <v-overlay absolute class="image-overlay">
                            <div class="image-actions">
                              <v-btn
                                icon
                                small
                                color="white"
                                @click="openImagePreview(image, index)"
                              >
                                <v-icon>mdi-eye</v-icon>
                              </v-btn>
                              <v-btn
                                icon
                                small
                                color="white"
                                @click="removeImage(index)"
                              >
                                <v-icon>mdi-delete</v-icon>
                              </v-btn>
                            </div>
                          </v-overlay>
                        </div>
                        
                        <!-- Image info -->
                        <v-card-text class="pa-2">
                          <div class="text-caption text-truncate">
                            {{ image.name }}
                          </div>
                          <div class="text-caption text--secondary">
                            {{ formatFileSize(image.size) }}
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>

              <!-- Documents Section -->
              <v-col cols="12" class="pt-6">
                <div class="section-header">
                  <v-icon color="primary" class="section-icon"
                    >mdi-file-multiple</v-icon
                  >
                  <h3 class="section-title">ເອກະສານ</h3>
                </div>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  ref="documentInput"
                  v-model="selectedDocuments"
                  label="ເລືອກເອກະສານ"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                  prepend-icon="mdi-file-document"
                  outlined
                  dense
                  :clearable="false"
                  show-size
                  @change="handleDocumentSelection"
                  :disabled="processingFiles"
                  hint="ສາມາດເລືອກເອກະສານໄດ້ຫຼາຍໄຟລ໌ (PDF, DOC, DOCX, XLS, XLSX, TXT, ຂະໜາດສູງສຸດ 10MB ຕໍ່ໄຟລ໌)"
                  persistent-hint
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ selectedDocuments ? selectedDocuments.length : 0 }} ເອກະສານ
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>

              <!-- Documents List -->
              <v-col cols="12" v-if="form.documents && form.documents.length > 0">
                <div class="documents-list">
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      v-for="(doc, index) in form.documents"
                      :key="`doc-${index}`"
                    >
                      <v-card class="document-card" elevation="1">
                        <v-card-text class="pa-3">
                          <div class="d-flex align-center">
                            <v-icon
                              large
                              :color="getDocumentTypeColor(doc.name)"
                              class="mr-3"
                            >
                              {{ getDocumentTypeIcon(doc.name) }}
                            </v-icon>
                            <div class="flex-grow-1">
                              <div class="font-weight-medium text-truncate">
                                {{ doc.name }}
                              </div>
                              <div class="text-caption text--secondary">
                                {{ formatFileSize(doc.size) }}
                              </div>
                            </div>
                            <div class="document-actions">
                              <!-- View PDF Button -->
                              <v-btn
                                icon
                                small
                                color="green"
                                @click="viewPdf(doc)"
                                v-if="doc.url && isPdfFile(doc.name)"
                                :title="'ເບິ່ງ PDF'"
                              >
                                <v-icon>mdi-eye</v-icon>
                              </v-btn>
                              <!-- Download Button -->
                              <v-btn
                                icon
                                small
                                color="primary"
                                @click="downloadDocument(doc)"
                                v-if="doc.url"
                                :title="'ດາວໂຫລດ'"
                              >
                                <v-icon>mdi-download</v-icon>
                              </v-btn>
                              <!-- Delete Button -->
                              <v-btn
                                icon
                                small
                                color="red"
                                @click="removeDocument(index)"
                                :title="'ລຶບ'"
                              >
                                <v-icon>mdi-delete</v-icon>
                              </v-btn>
                            </div>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <!-- Footer Actions -->
      <v-card-actions class="dialog-actions">
        <v-container fluid>
          <v-row justify="end">
            <v-col cols="auto">
              <v-btn text large @click="cancel" class="mr-3">
                <v-icon left>mdi-cancel</v-icon>
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="primary"
                large
                @click="save"
                :loading="saving"
                :disabled="!isFormValid"
              >
                <v-icon left>mdi-content-save</v-icon>
                {{ isEditing ? 'ອັບເດດ MOU' : 'ສ້າງ MOU' }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
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
          <!-- {{ previewImage.preview || previewImage.url }} -->
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
            <!-- PDF Viewer using iframe -->
            <iframe
              v-if="currentPdfUrl"
              :src="currentPdfUrl + '#toolbar=1&navpanes=1&scrollbar=1'"
              width="100%"
              height="100%"
              frameborder="0"
              class="pdf-iframe"
            >
              <p>Your browser does not support iframes. Please download the PDF to view it.</p>
            </iframe>
            
            <!-- Loading state -->
            <div v-else class="pdf-loading">
              <v-progress-circular
                indeterminate
                size="64"
                color="primary"
              ></v-progress-circular>
              <p class="mt-4">ກຳລັງໂຫລດ PDF...</p>
            </div>
            
            <!-- Error state -->
            <div v-if="pdfViewerDialog && !currentPdfUrl" class="pdf-error">
              <v-icon size="64" color="error">mdi-alert-circle</v-icon>
              <p class="mt-4">ໂຫລດ PDF ບໍ່ສຳເລັດ</p>
              <v-btn 
                color="primary" 
                @click="pdfViewerDialog = false"
                class="mt-2"
              >
                ປິດ
              </v-btn>
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
    value: {
      type: Boolean,
      default: false,
    },
    editingItem: {
      type: Object,
      default: null,
    },
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
      pdfViewerDialog: false,
      currentPdfUrl: null,
      currentPdfName: null,
      form: {
        jobCode: '',
        mouNumber: '',
        pmCharge: 0,
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
        // Transform existing images from database format to frontend format
        const transformedImages = (this.editingItem.images || []).map(
          (img) => ({
            id: img.id,
            name: img.orgName || img.img_path,
            size: img.imageSize || img.size,
            type: img.imageMimeType || img.type,
            url: this.getFileUrl('images', img.img_name || img.img_path),
            preview: this.getFileUrl('images', img.img_name || img.img_path),
            isExisting: true,
          })
        )

        // Transform existing documents from database format to frontend format
        const transformedDocuments = (this.editingItem.documents || []).map(
          (doc, index) => ({
            id: doc.id || index,
            name: doc.name,
            size: doc.size,
            type: doc.mimetype || doc.type,
            url: doc.path
              ? this.getDocumentDownloadUrl(this.editingItem.id, index)
              : null,
            path: doc.path,
            filename: doc.filename,
            isExisting: true,
          })
        )

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

    // File handling methods - IMPROVED TO PREVENT FREEZING
    async handleImageSelection(files) {
      if (!files || files.length === 0) return

      // File size validation (5MB per image)
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

      // Set processing state
      this.processingFiles = true
      this.fileProgress = { current: 0, total: validFiles.length }

      try {
        // Process files sequentially to avoid freezing
        for (let i = 0; i < validFiles.length; i++) {
          const file = validFiles[i]
          
          // Update progress
          this.fileProgress.current = i

          // Use async file reading with proper error handling
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

            // Add small delay to prevent UI blocking
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
        // Reset processing state
        this.processingFiles = false
        this.fileProgress = { current: 0, total: 0 }
        this.selectedImages = []
        
        // Reset file input
        this.$nextTick(() => {
          if (this.$refs.imageInput) {
            this.$refs.imageInput.reset()
          }
        })
      }
    },

    async handleDocumentSelection(files) {
      if (!files || files.length === 0) return

      // File size validation (10MB per document)
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
        if (!allowedTypes.includes(file.mimetype) && !this.isValidDocumentExtension(file.name)) {
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

      // Set processing state
      this.processingFiles = true
      this.fileProgress = { current: 0, total: validFiles.length }

      try {
        // Process documents (no preview needed, faster processing)
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

          // Small delay to keep UI responsive
          await this.delay(5)
        }

        this.$toast.success(`ໂຫລດເອກະສານ ${validFiles.length} ໄຟລ໌ສຳເລັດ`)

      } catch (error) {
        console.error('Error in handleDocumentSelection:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫລດເອກະສານ')
      } finally {
        // Reset processing state
        this.processingFiles = false
        this.fileProgress = { current: 0, total: 0 }
        this.selectedDocuments = []
        
        // Reset file input
        this.$nextTick(() => {
          if (this.$refs.documentInput) {
            this.$refs.documentInput.reset()
          }
        })
      }
    },

    // Helper method for async file reading
    readFileAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        
        reader.onload = (e) => resolve(e.target.result)
        reader.onerror = (e) => reject(new Error('Failed to read file'))
        reader.onabort = (e) => reject(new Error('File reading aborted'))
        
        // For large images, consider using a smaller canvas for thumbnails
        if (file.size > 1024 * 1024) { // 1MB
          this.createImageThumbnail(file, 300, 300).then(resolve).catch(() => {
            // Fallback to full image if thumbnail creation fails
            reader.readAsDataURL(file)
          })
        } else {
          reader.readAsDataURL(file)
        }
      })
    },

    // Create thumbnail to reduce memory usage
    createImageThumbnail(file, maxWidth, maxHeight) {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()
        
        img.onload = () => {
          // Calculate new dimensions
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
          
          // Resize canvas and draw image
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0, width, height)
          
          // Convert to data URL with compression
          resolve(canvas.toDataURL('image/jpeg', 0.8))
        }
        
        img.onerror = reject
        img.src = URL.createObjectURL(file)
      })
    },

    // Check document file extension
    isValidDocumentExtension(filename) {
      const validExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt']
      const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
      return validExtensions.includes(ext)
    },

    // Check if file is PDF
    isPdfFile(filename) {
      if (!filename) return false
      const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
      return ext === '.pdf'
    },

    // View PDF in dialog
    async viewPdf(doc) {
      try {
        this.currentPdfName = doc.name
        
        if (doc.isExisting && doc.url) {
          // For existing PDFs, we need to get the file content via axios
          const response = await this.$axios({
            method: 'GET',
            url: doc.url,
            responseType: 'blob',
          })

          // Create blob URL for PDF viewing
          const blob = new Blob([response.data], { type: 'application/pdf' })
          this.currentPdfUrl = window.URL.createObjectURL(blob)
          
        } else if (doc.file && doc.isNew) {
          // For newly uploaded PDFs, create object URL directly
          this.currentPdfUrl = URL.createObjectURL(doc.file)
        }
        
        this.pdfViewerDialog = true
        
      } catch (error) {
        console.error('Error viewing PDF:', error)
        this.$toast.error('ເປີດ PDF ບໍ່ສຳເລັດ')
      }
    },

    // Download current PDF being viewed
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

    // Add small delay to prevent UI blocking
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },

    removeImage(index) {
      const imageToRemove = this.form.images[index]
      
      // If it's an existing image from database, call delete API
      if (imageToRemove.isExisting && imageToRemove.id) {
        this.deleteExistingImage(imageToRemove.id)
      }
      
      // Remove from form array
      this.form.images.splice(index, 1)
    },

    async removeDocument(index) {
      const docToRemove = this.form.documents[index]
      
      // If it's an existing document from database, call delete API
      if (docToRemove.isExisting && this.editingItem?.id) {
        await this.deleteExistingDocument(this.editingItem.id, index)
      }
      
      // Remove from form array
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
          // Use axios to download with authentication headers
          const response = await this.$axios({
            method: 'GET',
            url: doc.url,
            responseType: 'blob', // Important for file download
            headers: {
              // Your existing auth headers will be automatically included by axios
            }
          })

          // Create blob URL and download
          const blob = new Blob([response.data])
          const url = window.URL.createObjectURL(blob)
          
          // Create temporary download link
          const link = document.createElement('a')
          link.href = url
          link.download = doc.name || 'document'
          document.body.appendChild(link)
          link.click()
          
          // Cleanup
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
          
          this.$toast.success('ດາວໂຫລດເອກະສານສຳເລັດ')
          
        } catch (error) {
          console.error('Download error:', error)
          this.$toast.error('ດາວໂຫລດເອກະສານບໍ່ສຳເລັດ')
        }
      } else {
        this.$toast.warning('ເອກະສານຍັງບໍ່ໄດ້ຖືກບັນທຶກ, ກະລຸນາບັນທຶກ MOU ກ່ອນ')
      }
    },

    async downloadImage(image) {
      if (image.url) {
        try {
          // Use axios to download with authentication headers
          const response = await this.$axios({
            method: 'GET',
            url: image.url,
            responseType: 'blob',
          })

          // Create blob URL and download
          const blob = new Blob([response.data])
          const url = window.URL.createObjectURL(blob)
          
          const link = document.createElement('a')
          link.href = url
          link.download = image.name || 'image'
          document.body.appendChild(link)
          link.click()
          
          // Cleanup
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
          
          this.$toast.success('ດາວໂຫລດຮູບພາບສຳເລັດ')
          
        } catch (error) {
          console.error('Download error:', error)
          this.$toast.error('ດາວໂຫລດຮູບພາບບໍ່ສຳເລັດ')
        }
      } else if (image.preview) {
        // For new images, download the preview data URL
        this.downloadDataURL(image.preview, image.name)
        this.$toast.success('ດາວໂຫລດຮູບພາບສຳເລັດ')
      }
    },

    // Helper method to download data URL as file
    downloadDataURL(dataURL, filename) {
      const link = document.createElement('a')
      link.href = dataURL
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },

    // Delete existing image from database
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

    // Delete existing document from database  
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

    // Get file URL for display
    getFileUrl(type, filename) {
      console.info(`Getting file URL for ${type}: ${filename}`)
      if (!filename) return ''
      const baseUrl = this.$axios.defaults.baseURL || ''
      console.info(`Base URL: ${baseUrl}`)
      return `${baseUrl}/uploads/${type}/${filename}`
        .replace(/\/+/g, '/')
        .replace(':/', '://')
    },

    // Get download URL for documents
    getDocumentDownloadUrl(mouId, documentIndex) {
      const baseUrl = this.$axios.defaults.baseURL || ''
      return `${baseUrl}/api/mous/download/document/${mouId}/${documentIndex}`.replace(/\/+/g, '/').replace(':/', '://')
    },

    // Get download URL for images  
    getImageDownloadUrl(imageId) {
      const baseUrl = this.$axios.defaults.baseURL || ''
      return `${baseUrl}/api/mous/download/image/${imageId}`.replace(/\/+/g, '/').replace(':/', '://')
    },

    // Utility methods
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
        console.info(`AGENCY ${JSON.stringify(response)}`)
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data
        }
        console.log('Agencies loaded:', this.agencies)
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

        console.log('Currencies loaded:', this.currencies)
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

        // Clean up the payload
        if (!payload.pmCharge) payload.pmCharge = 0
        if (!payload.exchangeRate) payload.exchangeRate = 1
        if (!payload.numberOfWorkers) payload.numberOfWorkers = 1

        // Handle file uploads if needed
        const formData = new FormData()
        
        // Add form data
        Object.keys(payload).forEach(key => {
          if (key !== 'images' && key !== 'documents') {
            formData.append(key, payload[key])
          }
        })

        // Add new images
        payload.images.forEach((image, index) => {
          if (image.isNew && image.file) {
            formData.append(`images`, image.file)
          }
        })

        // Add new documents
        payload.documents.forEach((doc, index) => {
          if (doc.isNew && doc.file) {
            formData.append(`documents`, doc.file)
          }
        })

        let response
        if (this.isEditing) {
          response = await this.$axios.$put(
            `/api/mous/${this.editingItem.id}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
        } else {
          response = await this.$axios.$post('/api/mous', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        }

        if (response.success) {
          this.$toast.success(
            `MOU ${this.isEditing ? 'ອັບເດດ' : 'ສ້າງ'}ສຳເລັດແລ້ວ`
          )
          this.$emit('saved', response.data)
        }
      } catch (error) {
        console.error('Error saving MOU:', error)
        const errorMessage =
          error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ'
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
}

.toolbar-title {
  font-size: 1.25rem;
  font-weight: 500;
}

.dialog-content {
  flex: 1;
  overflow-y: auto;
  background-color: #fafafa;
}

.form-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 32px !important;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e3f2fd;
}

.section-icon {
  font-size: 24px !important;
  margin-right: 12px;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;
  margin: 0;
}

.dialog-actions {
  flex-shrink: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 16px 0 !important;
}

.documents-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  min-height: 60px;
  border: 1px solid #e0e0e0;
}

/* Image Gallery Styles */
.image-gallery {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #e0e0e0;
}

.image-card {
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.image-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
}

.image-preview {
  border-radius: 8px 8px 0 0;
}

.image-overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px 8px 0 0;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.image-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Document Card Styles */
.document-card {
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.document-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.document-actions {
  display: flex;
  gap: 4px;
}

/* Form field customization */
.v-text-field--outlined >>> .v-input__control > .v-input__slot {
  min-height: 48px;
}

.v-select--outlined >>> .v-input__control > .v-input__slot {
  min-height: 48px;
}

/* File input styling */
.v-file-input >>> .v-file-input__text {
  max-width: 200px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-container {
    padding: 20px !important;
    margin: 0 8px;
    border-radius: 8px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .section-icon {
    margin-right: 8px;
    margin-bottom: 4px;
  }

  .toolbar-title {
    font-size: 1.1rem;
  }

  .image-actions {
    gap: 4px;
  }
}

/* Enhanced visual feedback */
.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.v-card {
  transition: all 0.3s ease;
}

/* Status chip styling in select */
.v-chip.v-size--small {
  font-size: 0.75rem;
  height: 24px;
}

/* Loading states */
.v-select.v-select--is-loading >>> .v-input__append-inner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Image preview dialog */
.v-dialog >>> .v-card {
  overflow: visible;
}

/* PDF Viewer Styles */
.pdf-viewer-content {
  height: calc(100vh - 64px); /* Full height minus toolbar */
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
  font-size: 16px;
}

.pdf-loading {
  background: white;
}

.pdf-error {
  background: #f8f8f8;
}

@media (max-width: 768px) {
  .pdf-viewer-content {
    height: calc(100vh - 56px); /* Adjust for smaller mobile toolbar */
  }
  
  .pdf-loading,
  .pdf-error {
    font-size: 14px;
  }
}
</style>