<template>
  <v-card class="student-form-sheet d-flex flex-column" flat tile>
    <!-- Top Drag Handle & Header -->
    <div class="sheet-drag-handle-wrapper pt-2 pb-1 d-flex justify-center">
      <div class="sheet-drag-handle"></div>
    </div>

    <!-- Header Toolbar -->
    <div class="sheet-header px-4 px-md-6 pb-3 pt-1 d-flex align-center justify-space-between border-b">
      <div class="d-flex align-center">
        <v-avatar color="primary lighten-5" size="44" class="mr-3">
          <v-icon color="primary">{{ isUpdate ? 'mdi-account-edit' : 'mdi-account-plus' }}</v-icon>
        </v-avatar>
        <div>
          <h2 class="text-h6 font-weight-bold text-left mb-0 primary--text">
            {{ isUpdate ? 'ແກ້ໄຂຂໍ້ມູນນັກຮຽນ (Edit Student)' : 'ເພີ່ມນັກຮຽນໃໝ່ (New Student)' }}
          </h2>
          <span class="text-caption grey--text text--darken-1 text-left d-block">
            {{ isUpdate ? `ລະຫັດນັກຮຽນ: ${form.studentId || ''}` : 'ປ້ອນຂໍ້ມູນນັກຮຽນ ແລະ ລົງທະບຽນບັດ NFC' }}
          </span>
        </div>
      </div>
      <div class="d-flex align-center">
        <v-btn icon color="grey darken-2" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Scrollable Form Body -->
    <div class="sheet-body flex-grow-1 overflow-y-auto px-4 px-md-8 py-5">
      <div class="form-content-container">
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- Section 1: Basic Info -->
          <v-card outlined class="mb-5 rounded-lg pa-4 pa-md-5 info-section-card">
            <div class="d-flex align-center mb-4 section-heading">
              <v-icon color="primary" class="mr-2">mdi-account-details</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-0">ຂໍ້ມູນພື້ນຖານ (Basic Information)</h3>
            </div>

            <v-row>
              <!-- Photo Column -->
              <v-col cols="12" md="3" class="d-flex flex-column align-center justify-center photo-col pr-md-4">
                <v-avatar size="140" class="elevation-2 mb-3 grey lighten-3 photo-avatar" rounded>
                  <v-img v-if="form.photoPath" :src="getPhotoUrl(form.photoPath)" contain></v-img>
                  <v-icon v-else size="80" color="grey lighten-1">mdi-account-circle</v-icon>
                </v-avatar>
                <div class="d-flex flex-column align-center">
                  <v-btn color="primary" small outlined @click="triggerPhotoUpload" :loading="uploadingPhoto" class="mb-1">
                    <v-icon left small>mdi-camera</v-icon>
                    ເລືອກຮູບພາບ (Photo)
                  </v-btn>
                  <v-btn v-if="form.photoPath" color="error" x-small text @click="form.photoPath = ''">
                    ລຶບຮູບ (Delete)
                  </v-btn>
                </div>
                <input type="file" ref="photoInput" accept="image/*" style="display: none;" @change="onPhotoSelected">
              </v-col>

              <!-- Info Fields Column -->
              <v-col cols="12" md="9" class="pl-md-4">
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.studentId"
                      :rules="[v => !!v || 'ກະລຸນາປ້ອນລະຫັດນັກຮຽນ']"
                      label="ລະຫັດນັກຮຽນ (Student ID) *"
                      outlined
                      dense
                      :disabled="isUpdate"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="form.classId"
                      :items="classesList"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກຊັ້ນຮຽນ (Select Class)"
                      outlined
                      dense
                      clearable
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.firstName"
                      :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່']"
                      label="ຊື່ (First Name) *"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.lastName"
                      :rules="[v => !!v || 'ກະລຸນາປ້ອນນາມສະກຸນ']"
                      label="ນາມສະກຸນ (Last Name) *"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.phoneNumber"
                      label="ເບີໂທຕິດຕໍ່ (Phone Number)"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="form.roomId"
                      :items="filteredRooms"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກຫ້ອງຮຽນ (Select Room)"
                      outlined
                      dense
                      clearable
                      :disabled="!form.classId"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.grade"
                      label="ໝາຍເຫດຊັ້ນຮຽນ/ Grade (ມານູໂນ)"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>

          <!-- Section 2: Parent Info -->
          <v-card outlined class="mb-5 rounded-lg pa-4 pa-md-5 info-section-card">
            <div class="d-flex align-center mb-4 section-heading">
              <v-icon color="primary" class="mr-2">mdi-account-group</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-0">ຂໍ້ມູນຜູ້ປົກຄອງ (Parent Information)</h3>
            </div>
            <v-row dense>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.parentName"
                  label="ຊື່ຜູ້ປົກຄອງ (Parent Name)"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account-outline"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.parentPhone"
                  label="ເບີໂທຜູ້ປົກຄອງ (Parent Phone)"
                  outlined
                  dense
                  prepend-inner-icon="mdi-phone-outline"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.parentEmail"
                  label="ອີເມວຜູ້ປົກຄອງ (Parent Email)"
                  outlined
                  dense
                  prepend-inner-icon="mdi-email-outline"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Section 3: Wallet & NFC Card (Update mode) -->
          <v-row v-if="isUpdate" class="mb-5">
            <!-- Wallet Card -->
            <v-col cols="12" md="5">
              <v-card outlined class="rounded-lg pa-4 pa-md-5 info-section-card h-100 d-flex flex-column justify-space-between">
                <div class="d-flex align-center mb-3 section-heading">
                  <v-icon color="success" class="mr-2">mdi-wallet</v-icon>
                  <h3 class="text-subtitle-1 font-weight-bold text-success mb-0">ຍອດເງິນກະເປົາ (Wallet Balance)</h3>
                </div>
                <div class="wallet-balance-box pa-4 rounded-lg text-center my-2">
                  <div class="caption grey--text text--darken-1 mb-1">ຍອດເງິນປັດຈຸບັນ (Current Balance)</div>
                  <div class="text-h4 font-weight-bold text-success">
                    {{ formatCurrency(balance) }} <span class="text-body-1 font-weight-medium">LAK</span>
                  </div>
                </div>
                <div class="caption grey--text text-center mt-2">
                  <v-icon small color="grey">mdi-information-outline</v-icon> ຍອດເງິນກະເປົາສຳລັບການຊື້-ຂາຍໃນໂຮງຮຽນ
                </div>
              </v-card>
            </v-col>

            <!-- NFC Card -->
            <v-col cols="12" md="7">
              <v-card outlined class="rounded-lg pa-4 pa-md-5 info-section-card h-100">
                <div class="d-flex align-center justify-space-between mb-3 section-heading">
                  <div class="d-flex align-center">
                    <v-icon color="primary" class="mr-2">mdi-contactless-payment</v-icon>
                    <h3 class="text-subtitle-1 font-weight-bold primary--text mb-0">ບັດ NFC (NFC Card)</h3>
                  </div>
                  <v-chip v-if="activeCardUid" color="primary" small outlined>
                    <v-icon left x-small>mdi-check-circle</v-icon> ບັດພ້ອມໃຊ້ງານ
                  </v-chip>
                  <v-chip v-else color="grey" small outlined>
                    ຍັງບໍ່ມີບັດ
                  </v-chip>
                </div>

                <div class="card-status-box pa-3 rounded-lg mb-3 d-flex justify-space-between align-center">
                  <div>
                    <div class="caption grey--text">ບັດປັດຈຸບັນ (Current Card UID)</div>
                    <div class="text-subtitle-1 font-weight-bold" :class="activeCardUid ? 'primary--text' : 'grey--text'">
                      {{ activeCardUid || 'ບໍ່ມີບັດ (No active card)' }}
                    </div>
                  </div>
                  <v-btn color="error" outlined small v-if="activeCardUid" @click="reportLost" :loading="cardLoading">
                    <v-icon left small>mdi-card-remove</v-icon> ແຈ້ງບັດເສຍ (Report Lost)
                  </v-btn>
                </div>

                <v-row dense align="center">
                  <v-col cols="12" sm="8">
                    <v-text-field
                      v-model="newCardUid"
                      label="ລະຫັດບັດໃໝ່ (New Card UID)"
                      hint="ແຕະບັດໃສ່ເຄື່ອງສະແກນ ຫຼື ປ້ອນເລກບັດ"
                      persistent-hint
                      outlined
                      dense
                      append-icon="mdi-contactless-payment"
                      @keyup.enter="assignCard"
                      @input="logScanInput"
                      id="nfc-input"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-btn color="primary" block @click="assignCard" :disabled="!newCardUid" :loading="cardLoading" height="40">
                      <v-icon left small>mdi-plus-circle</v-icon> ລົງທະບຽນບັດ
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <!-- Section 4: Optional Fees -->
          <v-card outlined class="mb-4 rounded-lg pa-4 pa-md-5 info-section-card">
            <div class="d-flex align-center mb-3 section-heading">
              <v-icon color="primary" class="mr-2">mdi-cash-register</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-0">ຄ່າທໍານຽມສະເພາະ/ບຸກຄົນ (Optional Fees Enrolled)</h3>
            </div>

            <v-alert v-if="optionalFeesList.length === 0" type="info" text outlined dense icon="mdi-information-outline">
              ບໍ່ມີຄ່າທໍານຽມສະເພາະກຳນົດໄວ້ໃນລະບົບ (No optional fees configured)
            </v-alert>

            <v-row v-else dense>
              <v-col cols="12" sm="6" v-for="fee in optionalFeesList" :key="fee.id">
                <div class="fee-item-box pa-3 rounded-lg mb-2">
                  <v-checkbox
                    v-model="form.optionalFeeItemIds"
                    :value="fee.id"
                    :label="`${fee.name} - ${formatCurrency(fee.amount)} LAK (${fee.className})`"
                    dense
                    hide-details
                    color="primary"
                    class="mt-0 font-weight-medium"
                  ></v-checkbox>
                  <div class="caption grey--text text--darken-1 pl-8 mt-1">{{ fee.description || 'ບໍ່ມີຄຳອະທິບາຍ' }}</div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </div>
    </div>

    <!-- Fixed Bottom Footer Action Bar -->
    <div class="sheet-footer px-4 px-md-8 py-3 d-flex justify-space-between align-center">
      <div class="grey--text caption d-none d-sm-block">
        * ກະລຸນາກວດສອບຂໍ້ມູນໃຫ້ຖືກຕ້ອງກ່ອນບັນທຶກ
      </div>
      <div class="d-flex align-center ml-auto">
        <v-btn color="grey darken-1" text class="mr-2 px-4" @click="$emit('close')">
          <v-icon left>mdi-close</v-icon> ຍົກເລີກ (Cancel)
        </v-btn>
        <v-btn color="primary" depressed class="px-6 font-weight-bold" @click="save" :loading="saving" :disabled="!valid">
          <v-icon left>mdi-content-save</v-icon> ບັນທຶກ (Save)
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'StudentFormCRUD',
  props: {
    isUpdate: {
      type: Boolean,
      default: false
    },
    studentId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      valid: true,
      saving: false,
      cardLoading: false,
      uploadingPhoto: false,
      optionalFeesList: [],
      form: {
        studentId: '',
        firstName: '',
        lastName: '',
        grade: '',
        room: '',
        roomId: null,
        phoneNumber: '',
        classId: null,
        parentName: '',
        parentPhone: '',
        parentEmail: '',
        photoPath: '',
        optionalFeeItemIds: []
      },
      classesList: [],
      roomsList: [],
      balance: 0,
      activeCardUid: null,
      newCardUid: ''
    }
  },
  mounted() {
    this.loadClasses();
    this.loadRooms();
    this.loadOptionalFees();
    if (this.isUpdate && this.studentId) {
      this.loadStudent();
    }

    // Listen for native Electron hardware NFC scans (Automatically overrides any background zombie listener)
    if (typeof window !== 'undefined' && window.posApi && window.posApi.onNfcScan) {
      window.posApi.onNfcScan((uid) => {
        if (this.isUpdate) {
          console.log('Hardware NFC Scan received:', uid);
          this.newCardUid = uid;
          this.assignCard();
        }
      });
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined' && window.posApi && window.posApi.removeNfcListener) {
      window.posApi.removeNfcListener();
    }
  },
  computed: {
    filteredRooms() {
      if (!this.form.classId) return [];
      return this.roomsList.filter(r => r.classId === this.form.classId);
    }
  },
  methods: {
    async loadRooms() {
      try {
        const res = await this.$axios.get('/api/school/rooms');
        this.roomsList = res.data || [];
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    },
    async loadClasses() {
      try {
        const res = await this.$axios.get('/api/school/classes');
        this.classesList = res.data || [];
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    },
    async loadStudent() {
      this.saving = true;
      try {
        const res = await this.$axios.get(`/api/student/${this.studentId}`);
        const data = res.data;

        this.form = {
          studentId: data.studentId,
          firstName: data.firstName,
          lastName: data.lastName,
          grade: data.grade,
          room: data.room || '',
          roomId: data.roomId || null,
          phoneNumber: data.phoneNumber,
          classId: data.classId,
          parentName: data.parentName || '',
          parentPhone: data.parentPhone || '',
          parentEmail: data.parentEmail || '',
          photoPath: data.photoPath || '',
          optionalFeeItemIds: data.studentFeeItems ? data.studentFeeItems.map(item => item.feeItemId) : []
        };

        if (data.bankAccount) {
          this.balance = data.bankAccount.balance;
        }

        if (data.nfcCards && data.nfcCards.length > 0) {
          this.activeCardUid = data.nfcCards[0].cardUid;
        } else {
          this.activeCardUid = null;
        }
      } catch (error) {
        console.error(error);
        this.$toast.error('Failed to load student details');
      } finally {
        this.saving = false;
      }
    },

    async save() {
      if (!this.$refs.form.validate()) return;

      this.saving = true;
      try {
        if (this.isUpdate) {
          await this.$axios.put(`/api/student/update/${this.studentId}`, this.form);
          this.$toast.success('Student updated successfully');
        } else {
          await this.$axios.post('/api/student', this.form);
          this.$toast.success('Student created successfully');
        }
        this.$emit('reload');
        this.$emit('close');
      } catch (error) {
        console.error(error);
        this.$toast.error(error.response?.data?.message || 'Failed to save student');
      } finally {
        this.saving = false;
      }
    },

    logScanInput(val) {
      console.log('NFC Scanner receiving input directly:', val);
    },

    async assignCard() {
      console.log('=== NFC ASSIGN CARD ENTER EVENT FIRED ===');
      console.log('Current value of newCardUid:', this.newCardUid);

      if (!this.newCardUid.trim()) {
        console.log('Assign aborted: newCardUid is empty.');
        return;
      }

      this.cardLoading = true;
      try {
        console.log('Sending API request to /api/nfc-cards/register...');
        await this.$axios.post('/api/nfc-cards/register', {
          cardUid: this.newCardUid.trim(),
          studentId: this.studentId
        });

        this.$toast.success('NFC Card registered successfully!');
        this.newCardUid = '';
        await this.loadStudent(); // Reload to show new active card
        this.$emit('reload'); // Reload list in parent
      } catch (error) {
        console.error(error);
        this.$toast.error(error.response?.data?.message || 'Failed to register card');
      } finally {
        this.cardLoading = false;
        // Keep focus on input just in case they want to scan again
        setTimeout(() => {
          const input = document.getElementById('nfc-input');
          if (input) input.focus();
        }, 100);
      }
    },

    async reportLost() {
      if (!this.activeCardUid) return;

      if (!confirm('Are you sure you want to deactivate this card? They will not be able to use it.')) return;

      this.cardLoading = true;
      try {
        await this.$axios.put('/api/nfc-cards/report-lost', {
          cardUid: this.activeCardUid
        });

        this.$toast.success('Card deactivated (reported lost)');
        await this.loadStudent();
        this.$emit('reload'); // Reload list in parent
      } catch (error) {
        console.error(error);
        this.$toast.error('Failed to deactivate card');
      } finally {
        this.cardLoading = false;
      }
    },

    triggerPhotoUpload() {
      this.$refs.photoInput.click();
    },

    async onPhotoSelected(e) {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        this.$toast.error('Only image files are allowed');
        return;
      }

      this.uploadingPhoto = true;
      const formData = new FormData();
      formData.append('images', file);

      try {
        const res = await this.$axios.post('/api/student/upload-photo', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        this.form.photoPath = res.data.photoPath;
        this.$toast.success('Photo uploaded successfully');
      } catch (error) {
        console.error(error);
        this.$toast.error('Failed to upload student photo');
      } finally {
        this.uploadingPhoto = false;
      }
    },

    getPhotoUrl(photoPath) {
      if (!photoPath) return '';
      const baseURL = this.$axios.defaults.baseURL || 'http://150.95.31.23:8011';
      return `${baseURL.replace(/\/$/, '')}${photoPath}`;
    },

    async loadOptionalFees() {
      try {
        const res = await this.$axios.get('/api/school/fee-structures');
        const structures = res.data || [];
        const optionals = structures.filter(s => s.isOptional && s.feeItem);

        const distinctItems = [];
        const seenIds = new Set();
        for (const s of optionals) {
          if (!seenIds.has(s.feeItem.id)) {
            seenIds.add(s.feeItem.id);
            distinctItems.push({
              id: s.feeItem.id,
              name: s.feeItem.name,
              description: s.feeItem.description,
              amount: s.amount,
              className: s.schoolClass ? s.schoolClass.name : 'Global'
            });
          }
        }
        this.optionalFeesList = distinctItems;
      } catch (error) {
        console.error('Error fetching optional fees:', error);
      }
    },

    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    }
  }
}
</script>

<style scoped>
.student-form-sheet * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.student-form-sheet {
  height: 100vh;
  max-height: 100vh;
  background-color: #f8fafc !important;
}

.sheet-drag-handle-wrapper {
  background: #ffffff;
}

.sheet-drag-handle {
  width: 44px;
  height: 5px;
  background-color: #cbd5e1;
  border-radius: 9999px;
}

.sheet-header {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
}

.sheet-body {
  background-color: #f8fafc;
}

.form-content-container {
  max-width: 1050px;
  margin: 0 auto;
}

.info-section-card {
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  transition: all 0.2s ease;
}

.info-section-card:hover {
  border-color: #cbd5e1 !important;
}

.section-heading {
  border-bottom: 1px dashed #e2e8f0;
  padding-bottom: 8px;
}

.photo-avatar {
  border: 2px dashed #cbd5e1;
}

@media (min-width: 960px) {
  .photo-col {
    border-right: 1px solid #f1f5f9;
  }
}

.wallet-balance-box {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}

.card-status-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.fee-item-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: background-color 0.2s ease;
}

.fee-item-box:hover {
  background: #f1f5f9;
}

.sheet-footer {
  background: #ffffff;
  border-top: 1px solid #e2e8f0;
  flex-shrink: 0;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}
</style>
