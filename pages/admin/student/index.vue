<template>
  <div class="student-summary pa-4">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <h1 class="text-h5 font-weight-bold primary--text">
          <v-icon color="primary" class="mr-2">mdi-account-school</v-icon>
          ຂໍ້ມູນນັກຮຽນ (Student Management)
        </h1>
        <div class="text-subtitle-2 grey--text">
          Manage students, NFC cards, and wallets
        </div>
      </div>
      <div>
        <v-btn color="primary" @click="openDialog()">
          <v-icon left>mdi-plus</v-icon> ເພີ່ມນັກຮຽນ (New Student)
        </v-btn>
      </div>
    </div>

    <!-- Search / Filter -->
    <v-card class="mb-4" elevation="1">
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຄົ້ນຫາ (Search)"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Table -->
    <v-card elevation="1">
      <v-data-table
        :headers="headers"
        :items="students"
        :search="search"
        :loading="loading"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
        no-data-text="ບໍ່ພົບຂໍ້ມູນ"
        :items-per-page="50"
        :footer-props="{'items-per-page-options': [25, 50, 100, -1]}"
        class="elevation-0"
      >
        <template v-slot:item.index="{ item }">
          {{ students.indexOf(item) + 1 }}
        </template>
        
        <template v-slot:item.name="{ item }">
          <div class="font-weight-medium">{{ item.firstName }} {{ item.lastName }}</div>
        </template>

        <template v-slot:item.bankAccount="{ item }">
          <div class="font-weight-bold text-success" v-if="item.bankAccount">
            {{ formatCurrency(item.bankAccount.balance) }}
          </div>
          <div v-else class="grey--text">-</div>
        </template>

        <template v-slot:item.nfcCard="{ item }">
          <v-chip
            v-if="item.nfcCards && item.nfcCards.length > 0"
            color="primary"
            small
            outlined
          >
            <v-icon left small>mdi-contactless-payment</v-icon>
            {{ item.nfcCards[0].cardUid }}
          </v-chip>
          <v-chip v-else color="grey" small outlined>
            ບໍ່ມີບັດ (No Card)
          </v-chip>
        </template>

        <template v-slot:item.isActive="{ item }">
          <v-chip :color="item.isActive ? 'success' : 'error'" small dark>
            {{ item.isActive ? 'ເປີດໃຊ້ງານ (Active)' : 'ປິດໃຊ້ງານ (Inactive)' }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn icon color="primary" @click="openDialog(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="confirmDelete(item)" v-if="item.isActive">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Student Form Dialog -->
    <v-dialog v-model="dialog" max-width="800px" persistent scrollable>
      <StudentFormCRUD
        v-if="dialog"
        :is-update="isEdit"
        :student-id="selectedId"
        @close="dialog = false"
        @reload="fetchData"
      />
    </v-dialog>
  </div>
</template>

<script>
import StudentFormCRUD from '~/components/StudentFormCRUD.vue';

export default {
  name: 'StudentSummary',
  components: {
    StudentFormCRUD
  },
  data() {
    return {
      search: '',
      loading: false,
      dialog: false,
      isEdit: false,
      selectedId: null,
      students: [],
      headers: [
        { text: 'ລຳດັບ', value: 'index', width: '60px', sortable: false },
        { text: 'ລະຫັດນັກຮຽນ (Student ID)', value: 'studentId' },
        { text: 'ຊື່ ແລະ ນາມສະກຸນ (Name)', value: 'name' },
        { text: 'ຊັ້ນຮຽນ (Grade)', value: 'grade' },
        { text: 'ເບີໂທ (Phone)', value: 'phoneNumber' },
        { text: 'ບັດ NFC (Card UID)', value: 'nfcCard', sortable: false },
        { text: 'ຍອດເງິນກະເປົາ (Wallet Balance)', value: 'bankAccount', align: 'right' },
        { text: 'ສະຖານະ (Status)', value: 'isActive', align: 'center' },
        { text: 'ຈັດການ (Action)', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await this.$axios.get('/api/student/find');
        this.students = response.data.data || response.data || [];
      } catch (error) {
        console.error('Error fetching students:', error);
        this.$toast.error('Failed to load students');
      } finally {
        this.loading = false;
      }
    },
    openDialog(item = null) {
      if (item) {
        this.isEdit = true;
        this.selectedId = item.id;
      } else {
        this.isEdit = false;
        this.selectedId = null;
      }
      this.dialog = true;
    },
    async confirmDelete(item) {
      if (confirm(`Are you sure you want to deactivate student ${item.firstName} ${item.lastName}?`)) {
        try {
          await this.$axios.delete(`/api/student/delete/${item.id}`);
          this.$toast.success('Student deactivated successfully');
          this.fetchData();
        } catch (error) {
          console.error(error);
          this.$toast.error('Failed to deactivate student');
        }
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
.student-summary * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
