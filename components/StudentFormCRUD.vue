<template>
  <v-card class="student-form-crud">
    <v-card-title class="primary white--text d-flex justify-space-between align-center">
      <span>{{ isUpdate ? 'ແກ້ໄຂຂໍ້ມູນນັກຮຽນ (Edit Student)' : 'ເພີ່ມນັກຮຽນ (New Student)' }}</span>
      <v-btn icon dark @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Basic Info Section -->
        <h3 class="text-h6 mb-3 primary--text">ຂໍ້ມູນພື້ນຖານ (Basic Info)</h3>
        <v-row>
          <!-- Photo Column -->
          <v-col cols="12" md="3" class="d-flex flex-column align-center justify-center">
            <v-avatar size="150" class="elevation-2 mb-3 grey lighten-3 position-relative" rounded>
              <v-img v-if="form.photoPath" :src="getPhotoUrl(form.photoPath)" contain></v-img>
              <v-icon v-else size="80" color="grey lighten-1">mdi-account-circle</v-icon>
            </v-avatar>
            <v-btn color="primary" small outlined @click="triggerPhotoUpload" :loading="uploadingPhoto" class="mb-1">
              <v-icon left small>mdi-camera</v-icon>
              ເລືອກຮູບພາບ (Photo)
            </v-btn>
            <v-btn v-if="form.photoPath" color="error" x-small text @click="form.photoPath = ''">
              ລຶບຮູບ (Delete)
            </v-btn>
            <!-- Hidden input for file upload -->
            <input type="file" ref="photoInput" accept="image/*" style="display: none;" @change="onPhotoSelected">
          </v-col>

          <!-- Info Fields Column -->
          <v-col cols="12" md="9">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.studentId" :rules="[v => !!v || 'ກະລຸນາປ້ອນລະຫັດນັກຮຽນ']"
                  label="ລະຫັດນັກຮຽນ (Student ID) *" outlined dense :disabled="isUpdate"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select v-model="form.classId" :items="classesList" item-text="name" item-value="id"
                  label="ເລືອກຊັ້ນຮຽນ (Select Class)" outlined dense clearable></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.firstName" :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່']" label="ຊື່ (First Name) *"
                  outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.lastName" :rules="[v => !!v || 'ກະລຸນາປ້ອນນາມສະກຸນ']"
                  label="ນາມສະກຸນ (Last Name) *" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.phoneNumber" label="ເບີໂທຕິດຕໍ່ (Phone Number)" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.grade" label="ໝາຍເຫດຊັ້ນຮຽນ/ Grade (ມານູໂນ)" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select v-model="form.roomId" :items="filteredRooms" item-text="name" item-value="id"
                  label="ເລືອກຫ້ອງຮຽນ (Select Room)" outlined dense clearable :disabled="!form.classId"></v-select>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Parent Info Section -->
        <h3 class="text-h6 mb-3 primary--text">ຂໍ້ມູນຜູ້ປົກຄອງ (Parent Info)</h3>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="form.parentName" label="ຊື່ຜູ້ປົກຄອງ (Parent Name)" outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="form.parentPhone" label="ເບີໂທຜູ້ປົກຄອງ (Parent Phone)" outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="form.parentEmail" label="ອີເມວຜູ້ປົກຄອງ (Parent Email)" outlined dense></v-text-field>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Wallet Info Section -->
        <div v-if="isUpdate">
          <h3 class="text-h6 mb-3 primary--text">ຍອດເງິນກະເປົາ (Wallet Info)</h3>
          <v-alert type="info" text outlined icon="mdi-wallet">
            <div class="d-flex justify-space-between align-center">
              <span>ຍອດເງິນປັດຈຸບັນ (Current Balance):</span>
              <strong class="text-h6">{{ formatCurrency(balance) }} LAK</strong>
            </div>
          </v-alert>
        </div>

        <v-divider class="my-4" v-if="isUpdate"></v-divider>

        <!-- NFC Card Management Section -->
        <div v-if="isUpdate">
          <h3 class="text-h6 mb-3 primary--text">ບັດ NFC (NFC Card)</h3>

          <v-card outlined class="pa-3 mb-3 bg-grey-lighten-4">
            <div class="d-flex justify-space-between align-center">
              <div>
                <div class=" grey--text">ບັດປັດຈຸບັນ (Current Card UID)</div>
                <div class="text-h6" :class="activeCardUid ? 'primary--text' : 'grey--text'">
                  {{ activeCardUid || 'ບໍ່ມີບັດ (No active card)' }}
                </div>
              </div>
              <v-btn color="error" outlined small v-if="activeCardUid" @click="reportLost" :loading="cardLoading">
                ແຈ້ງບັດເສຍ (Report Lost)
              </v-btn>
            </div>
          </v-card>

          <v-row align="center">
            <v-col cols="12" md="8">
              <v-text-field v-model="newCardUid" label="ລະຫັດບັດໃໝ່ (New Card UID)"
                hint="Click here and tap card on reader" persistent-hint outlined dense hide-details
                append-icon="mdi-contactless-payment" @keyup.enter="assignCard" @input="logScanInput"
                id="nfc-input"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn color="primary" block @click="assignCard" :disabled="!newCardUid" :loading="cardLoading">
                ລົງທະບຽນບັດ (Assign Card)
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!-- Optional Fees Section -->
        <div>
          <v-divider class="my-4"></v-divider>
          <h3 class="text-h6 mb-3 primary--text">ຄ່າທໍານຽມສະເພາະ/ບຸກຄົນ (Optional Fees Enrolled)</h3>
          
          <v-alert v-if="optionalFeesList.length === 0" type="info" text outlined icon="mdi-information-outline">
            ບໍ່ມີຄ່າທໍານຽມສະເພາະກຳນົດໄວ້ໃນລະບົບ (No optional fees configured)
          </v-alert>
          
          <v-row v-else dense>
            <v-col cols="12" sm="6" v-for="fee in optionalFeesList" :key="fee.id">
              <v-checkbox
                v-model="form.optionalFeeItemIds"
                :value="fee.id"
                :label="`${fee.name} - ${formatCurrency(fee.amount)} LAK (${fee.className})`"
                dense
                hide-details
                color="primary"
                class="mt-1"
              ></v-checkbox>
              <div class="caption grey--text pl-8 mt-0">{{ fee.description || 'ບໍ່ມີຄຳອະທິບາຍ' }}</div>
            </v-col>
          </v-row>
        </div>

      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn color="grey" text @click="$emit('close')">ຍົກເລີກ (Cancel)</v-btn>
      <v-btn color="primary" @click="save" :loading="saving" :disabled="!valid">ບັນທຶກ (Save)</v-btn>
    </v-card-actions>
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
      const baseURL = this.$axios.defaults.baseURL || 'http://150.95.31.23:8007';
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
.student-form-crud * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
