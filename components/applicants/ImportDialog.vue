<template>
    <v-dialog v-model="value" max-width="1200" persistent>
        <v-card>
            <v-card-title class=" primary white--text">
                <v-icon left color="white">mdi-file-import</v-icon>
                ນຳເຂົ້າຂໍ້ມູນຜູ້ສະໝັກດ້ວຍ Excel
                <v-spacer />
                <v-btn icon dark @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="pt-6">
                <v-alert type="info" outlined dense dismissible class="mb-4">
                    ກະລຸນາດາວໂຫລດ Template ແລະ ກອກຂໍ້ມູນໃຫ້ຄົບຖ້ວນ ກ່ອນທີ່ຈະນຳເຂົ້າໄຟລ໌.
                </v-alert>

                <div class="d-flex align-center mb-6">
                    <v-btn color="success" class="mr-4" @click="downloadTemplate" :loading="downloading">
                        <v-icon left>mdi-download</v-icon>
                        ດາວໂຫລດ Template
                    </v-btn>

                    <v-file-input v-model="excelFile" label="ເລືອກໄຟລ໌ Excel ທີ່ກອກຂໍ້ມູນແລ້ວ" accept=".xlsx, .xls"
                        outlined dense hide-details prepend-icon="mdi-microsoft-excel" @change="handleFileUpload"
                        style="max-width: 400px" />

                    <v-btn v-if="importData.length" text color="error" class="ml-2" @click="reset">
                        <v-icon left>mdi-refresh</v-icon>
                        ລ້າງຂໍ້ມູນ
                    </v-btn>
                </div>

                <v-divider v-if="importData.length" class="my-4" />

                <div v-if="importData.length" class="preview-section">
                    <div class="d-flex align-center mb-2">
                        <h3 class="text-h6">ຕົວຢ່າງຂໍ້ມູນ ({{ importData.length }} ລາຍການ)</h3>
                        <v-spacer />
                        <v-chip v-if="invalidCount > 0" color="error" outlined small>
                            ມີ {{ invalidCount }} ລາຍການທີ່ບໍ່ຖືກຕ້ອງ
                        </v-chip>
                        <v-chip v-else color="success" outlined small>
                            ຂໍ້ມູນທັງໝົດຖືກຕ້ອງ ພ້ອມນຳເຂົ້າ
                        </v-chip>
                    </div>

                    <v-data-table :headers="previewHeaders" :items="importData" :items-per-page="10"
                        class="elevation-1">
                        <template v-slot:item.gender="{ item }">
                            <v-chip v-if="item.gender" small :color="item.gender === 'male' ? 'blue' : 'pink'" dark>
                                {{ item.gender === 'male' ? 'ຊາຍ' : 'ຍິງ' }}
                            </v-chip>
                            <span v-else>-</span>
                        </template>

                        <template v-slot:item.status_valid="{ item }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on" :color="item.isValid ? 'success' : 'error'">
                                        {{ item.isValid ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                                    </v-icon>
                                </template>
                                <span>{{ item.isValid ? 'ພ້ອມນຳເຂົ້າ' : item.validationError }}</span>
                            </v-tooltip>
                        </template>

                        <template v-slot:item.validationError="{ item }">
                            <span class="error--text ">{{ item.validationError }}</span>
                        </template>
                    </v-data-table>
                </div>
            </v-card-text>

            <v-card-actions class="pb-6 px-6">
                <v-spacer />
                <v-btn text @click="close">ຍົກເລີກ</v-btn>
                <v-btn color="primary" @click="startImport" :disabled="!isValidToImport || loading" :loading="loading"
                    min-width="150">
                    <v-icon left>mdi-upload</v-icon>
                    ນຳເຂົ້າຂໍ້ມູນ
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import * as XLSX from 'xlsx'
import ExcelJS from 'exceljs'

export default {
    name: 'ApplicantImportDialog',
    props: {
        value: Boolean,
        jobBatches: { type: Array, default: () => [] }
    },
    data() {
        return {
            excelFile: null,
            importData: [],
            loading: false,
            downloading: false,
            previewHeaders: [
                { text: 'ກວດສອບ', value: 'status_valid', width: '100', sortable: false },
                { text: 'ຊື່', value: 'firstName' },
                { text: 'ນາມສະກຸນ', value: 'lastName' },
                { text: 'ເພດ', value: 'gender' },
                { text: 'ເບີໂທ', value: 'phone' },
                { text: 'Job Batch', value: 'batchDisplay' },
                { text: 'ໝາຍເຫດຂໍ້ຜິດພາດ', value: 'validationError', color: 'error' }
            ]
        }
    },
    computed: {
        invalidCount() {
            return this.importData.filter(item => !item.isValid).length
        },
        isValidToImport() {
            return this.importData.length > 0 && this.invalidCount === 0
        }
    },
    methods: {
        close() {
            this.$emit('input', false)
            setTimeout(() => this.reset(), 300)
        },
        reset() {
            this.excelFile = null
            this.importData = []
        },
        async downloadTemplate() {
            this.downloading = true
            try {
                const workbook = new ExcelJS.Workbook()
                const worksheet = workbook.addWorksheet('ພື້ນຖານຂໍ້ມູນຜູ້ສະໝັກ')

                // Define columns
                worksheet.columns = [
                    { header: 'ຊື່ (First Name) *', key: 'firstName', width: 20 },
                    { header: 'ນາມສະກຸນ (Last Name)', key: 'lastName', width: 20 },
                    { header: 'ເພດ (Gender) * [male/female]', key: 'gender', width: 15 },
                    { header: 'ເບີໂທ (Phone) *', key: 'phone', width: 20 },
                    { header: 'Job Batch (ຊື່ຮອບງານ) *', key: 'batchCode', width: 35 },
                    { header: 'ອາຍຸ (Age)', key: 'age', width: 10 },
                    { header: 'ບ້ານ (Village)', key: 'village', width: 20 },
                    { header: 'ເມືອງ (City)', key: 'city', width: 20 },
                    { header: 'ແຂວງ (District)', key: 'district', width: 20 }
                ]

                // Add some style to header
                const headerRow = worksheet.getRow(1)
                headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
                headerRow.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FF1976D2' } // Vuetify primary blue
                }
                headerRow.alignment = { vertical: 'middle', horizontal: 'center' }

                // Instructions row (optional but helpful)
                // worksheet.addRow(['ກະລຸນາຢ່າປ່ຽນແປງຫົວຂໍ້ (Header) ແລະ ໃຫ້ກອກຂໍ້ມູນລົງໃນແຖວທີ 2 ເປັນຕົ້ນໄປ. ຊ່ອງທີ່ມີເຄື່ອງໝາຍ * ແມ່ນຈຳເປັນ.'])

                // Add Data Validation for Gender
                for (let i = 2; i <= 500; i++) {
                    worksheet.getCell(`C${i}`).dataValidation = {
                        type: 'list',
                        allowBlank: true,
                        formulae: ['"male,female"'],
                        showErrorMessage: true,
                        errorTitle: 'Invalid Gender',
                        error: 'ກະລຸນາເລືອກ male ຫຼື female'
                    }
                }

                // Add Data Validation for Job Batches
                const batchList = this.jobBatches
                    .filter(b => b.mou)
                    .map(b => `${b.mou.jobCode}-${b.runningNo}`)

                if (batchList.length > 0) {
                    const batchSheet = workbook.addWorksheet('JobBatchesData')
                    batchList.forEach((val, index) => {
                        batchSheet.getCell(`A${index + 1}`).value = val
                    })
                    batchSheet.state = 'hidden'

                    for (let i = 2; i <= 500; i++) {
                        worksheet.getCell(`E${i}`).dataValidation = {
                            type: 'list',
                            allowBlank: true,
                            formulae: [`JobBatchesData!$A$1:$A$${batchList.length}`]
                        }
                    }
                }

                // Generate buffer
                const buffer = await workbook.xlsx.writeBuffer()
                const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
                const url = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = `Applicant_Upload_Template_${new Date().toISOString().slice(0, 10)}.xlsx`
                link.click()
                URL.revokeObjectURL(url)

                this.$toast.success('ດາວໂຫລດ Template สำເລັດ')
            } catch (error) {
                console.error('Error generating template:', error)
                this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສ້າງ Template: ' + error.message)
            } finally {
                this.downloading = false
            }
        },
        handleFileUpload(file) {
            if (!file) {
                this.importData = []
                return
            }

            this.loading = true
            const reader = new FileReader()
            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result)
                    const workbook = XLSX.read(data, { type: 'array' })
                    const firstSheetName = workbook.SheetNames[0]
                    const worksheet = workbook.Sheets[firstSheetName]
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

                    this.processImportData(jsonData)
                } catch (err) {
                    console.error('Error reading Excel:', err)
                    this.$toast.error('ບໍ່ສາມາດເປີດໄຟລ໌ Excel ໄດ້: ' + err.message)
                } finally {
                    this.loading = false
                }
            }
            reader.onerror = (err) => {
                this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການອ່ານໄຟລ໌')
                this.loading = false
            }
            reader.readAsArrayBuffer(file)
        },
        processImportData(data) {
            if (!data || data.length === 0) {
                this.$toast.warning('ບໍ່ພົບຂໍ້ມູນໃນໄຟລ໌ Excel')
                this.importData = []
                return
            }

            this.importData = data.map((row) => {
                // Map Excel headers to database fields
                const firstName = row['ຊື່ (First Name) *'] || row['firstName'] || ''
                const lastName = row['ນາມສະກຸນ (Last Name)'] || row['lastName'] || ''
                const gender = (row['ເພດ (Gender) * [male/female]'] || row['gender'] || '').toLowerCase().trim()
                const phone = String(row['ເບີໂທ (Phone) *'] || row['phone'] || '').trim()
                const batchCode = row['Job Batch (ຊື່ຮອບງານ) *'] || row['batchCode'] || ''
                const age = parseInt(row['ອາຍຸ (Age)'] || row['age']) || null
                const village = row['ບ້ານ (Village)'] || row['village'] || ''
                const city = row['ເມືອງ (City)'] || row['city'] || ''
                const district = row['ແຂວງ (District)'] || row['district'] || ''

                const item = {
                    firstName,
                    lastName,
                    gender,
                    phone,
                    batchCode,
                    age,
                    village,
                    city,
                    district,
                    batchDisplay: batchCode,
                    isValid: true,
                    validationError: ''
                }

                // Validation logic
                if (!firstName) {
                    item.isValid = false
                    item.validationError = 'ຊື່ແມ່ນຈຳເປັນ'
                } else if (!gender || !['male', 'female'].includes(gender)) {
                    item.isValid = false
                    item.validationError = 'ເພດຕ້ອງເປັນ male ຫຼື female'
                } else if (!phone) {
                    item.isValid = false
                    item.validationError = 'ເບີໂທແມ່ນຈຳເປັນ'
                } else if (batchCode) {
                    const batch = this.jobBatches.find(b => b.mou && `${b.mou.jobCode}-${b.runningNo}` === batchCode)
                    if (batch) {
                        item.jobBatchId = batch.id
                    } else {
                        item.isValid = false
                        item.validationError = `ບໍ່ພົບ Job Batch: ${batchCode}`
                    }
                } else {
                    item.isValid = false
                    item.validationError = 'Job Batch ແມ່ນຈຳເປັນ'
                }

                return item
            })
        },
        async startImport() {
            if (!this.isValidToImport) {
                this.$toast.error('ກະລຸນາແກ້ໄຂຂໍ້ມູນໃຫ້ຖືກຕ້ອງກ່ອນ')
                return
            }

            this.loading = true
            try {
                const payload = this.importData.map(item => ({
                    firstName: item.firstName,
                    lastName: item.lastName,
                    gender: item.gender,
                    phone: item.phone,
                    jobBatchId: item.jobBatchId,
                    age: item.age,
                    village: item.village,
                    city: item.city,
                    district: item.district,
                    status: 'INTERVIEW'
                }))

                const response = await this.$axios.$post('/api/applicant/bulk', { applicants: payload })

                if (response.success) {
                    this.$toast.success(response.message || `ນຳເຂົ້າຂໍ້ມູນສຳເລັດ ${payload.length} ລາຍການ`)
                    this.$emit('imported')
                    this.close()
                } else {
                    this.$toast.error(response.message || 'ນຳເຂົ້າຂໍ້ມູນບໍ່ສຳເລັດ')
                }
            } catch (error) {
                console.error('Import error:', error)
                const errorMsg = error.response?.data?.message || error.message
                this.$toast.error('ຜິດພາດ: ' + errorMsg)
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style scoped>
.preview-section {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 12px;
    background: #fdfdfd;
}
</style>
