<template>
  <div class="db-management-container">
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <div class="loading-container text-center">
        <v-progress-circular indeterminate size="64" color="primary" class="mb-4"></v-progress-circular>
        <p class="loading-text">{{ loadingMessage }}</p>
      </div>
    </v-dialog>

    <!-- Confirmation Dialog for Restore -->
    <v-dialog v-model="confirmDialog" max-width="500">
      <v-card class="restore-confirm-dialog">
        <v-card-title class="headline error--text">
          <v-icon left color="error">mdi-alert-octagon</v-icon>
          ຢືນຢັນການກູ້ຄືນຂໍ້ມູນ (Confirm Restore)
        </v-card-title>
        <v-card-text class="pt-4">
          <p class="warning-text">
            <strong>ຄຳເຕືອນ:</strong> ການກູ້ຄືນຂໍ້ມູນຈະຂຽນທັບຖານຂໍ້ມູນປັດຈຸບັນທັງໝົດ.
            ຂໍ້ມູນທີ່ບໍ່ໄດ້ສຳຮອງໄວ້ຈະສູນຫາຍ ແລະ ບໍ່ສາມາດກູ້ຄືນໄດ້.
          </p>
          <p class="mt-4">ທ່ານແນ່ໃຈຫຼືບໍ່ວ່າຕ້ອງການດຳເນີນການຕໍ່?</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="confirmDialog = false">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="error" elevation="2" @click="executeRestore">
            ຢືນຢັນການກູ້ຄືນ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="page-header mb-8">
      <div class="header-content">
        <h1 class="page-title">ຈັດການຖານຂໍ້ມູນ (Database Management)</h1>
        <p class="page-subtitle">ສຳຮອງຂໍ້ມູນ ແລະ ກູ້ຄືນລະບົບຂອງທ່ານ</p>
      </div>
    </div>

    <v-row>
      <!-- Backup Section -->
      <v-col cols="12" md="6">
        <v-card class="operation-card backup-card" elevation="2">
          <div class="card-gradient backup-gradient"></div>
          <div class="card-content-wrapper">
            <div class="icon-wrapper mb-4">
              <v-icon size="48" color="primary">mdi-database-export</v-icon>
            </div>
            <h2 class="section-title mb-2">ສຳຮອງຂໍ້ມູນ (Backup)</h2>
            <p class="section-desc mb-6">
              ດາວໂຫລດໄຟລ໌ SQL ທີ່ບັນຈຸຂໍ້ມູນທັງໝົດຂອງລະບົບ. ຄວນເຮັດເປັນປະຈຳເພື່ອປ້ອງກັນຂໍ້ມູນສູນຫາຍ.
            </p>
            <v-btn
              block
              x-large
              color="primary"
              class="action-button"
              @click="downloadBackup"
              :loading="exportLoading"
            >
              <v-icon left>mdi-download</v-icon>
              ດາວໂຫລດໄຟລ໌ສຳຮອງ (.sql)
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Restore Section -->
      <v-col cols="12" md="6">
        <v-card class="operation-card restore-card" elevation="2">
          <div class="card-gradient restore-gradient"></div>
          <div class="card-content-wrapper">
            <div class="icon-wrapper mb-4">
              <v-icon size="48" color="error">mdi-database-import</v-icon>
            </div>
            <h2 class="section-title mb-2">ກູ້ຄືນຂໍ້ມູນ (Restore)</h2>
            <p class="section-desc mb-4 text-error">
              <strong>ໝາຍເຫດ:</strong> ການກູ້ຄືນຂໍ້ມູນຈະປ່ຽນແທນຂໍ້ມູນປັດຈຸບັນດ້ວຍຂໍ້ມູນຈາກໄຟລ໌ທີ່ທ່ານເລືອກ.
            </p>
            
            <v-file-input
              v-model="sqlFile"
              label="ເລືອກໄຟລ໌ SQL (.sql)"
              accept=".sql"
              outlined
              dense
              prepend-icon="mdi-file-code"
              class="mb-4"
              :rules="[v => !!v || 'ກະລຸນາເລືອກໄຟລ໌']"
            ></v-file-input>

            <v-btn
              block
              x-large
              color="error"
              class="action-button"
              @click="confirmRestore"
              :disabled="!sqlFile"
              :loading="importLoading"
            >
              <v-icon left>mdi-backup-restore</v-icon>
              ເລີ່ມການກູ້ຄືນຂໍ້ມູນ
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Info Section -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-alert
          type="info"
          border="left"
          colored-border
          elevation="1"
          class="info-alert"
        >
          <div class="font-weight-bold mb-2">ຂໍ້ແນະນຳເພີ່ມເຕີມ:</div>
          <ul class="guideline-list">
            <li>ແນະນຳໃຫ້ສຳຮອງຂໍ້ມູນກ່ອນການປິດຮ້ານ ຫຼື ກ່ອນການປັບປຸງລະບົບຄັ້ງໃຫຍ່.</li>
            <li>ໄຟລ໌ທີ່ສຳຮອງຄວນເກັບໄວ້ໃນບ່ອນທີ່ປອດໄພ ຫຼື ອັບໂຫລດຂຶ້ນ Cloud ເພື່ອຄວາມປອດໄພສູງສຸດ.</li>
            <li>ໄຟລ໌ທີ່ໃຊ້ໃນການກູ້ຄືນຕ້ອງເປັນໄຟລ໌ .sql ທີ່ໄດ້ມາຈາກການສຳຮອງຂໍ້ມູນຂອງລະບົບນີ້ເທົ່ານັ້ນ.</li>
          </ul>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  middleware: 'auths',
  layout: 'default',
  data() {
    return {
      loading: false,
      loadingMessage: 'ກຳລັງປະມວນຜົນ...',
      confirmDialog: false,
      sqlFile: null,
      exportLoading: false,
      importLoading: false,
    }
  },
  methods: {
    async downloadBackup() {
      this.exportLoading = true;
      this.loading = true;
      this.loadingMessage = 'ກຳລັງສ້າງໄຟລ໌ສຳຮອງ...';
      
      try {
        const response = await this.$axios.get('/api/database/export', {
          responseType: 'blob'
        });
        
        // Create a link element to trigger download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        
        // Get filename from response headers or use default
        const contentDisposition = response.headers['content-disposition'];
        let fileName = `backup_${new Date().getTime()}.sql`;
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
          if (fileNameMatch.length === 2) fileName = fileNameMatch[1];
        }
        
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        if (this.$toast) {
          this.$toast.success('ສຳຮອງຂໍ້ມູນສຳເລັດແລ້ວ');
        }
      } catch (error) {
        console.error('Backup error:', error);
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສຳຮອງຂໍ້ມູນ');
        }
      } finally {
        this.exportLoading = false;
        this.loading = false;
      }
    },

    confirmRestore() {
      if (!this.sqlFile) return;
      this.confirmDialog = true;
    },

    async executeRestore() {
      this.confirmDialog = false;
      this.importLoading = true;
      this.loading = true;
      this.loadingMessage = 'ກຳລັງກູ້ຄືນຂໍ້ມູນ, ກະລຸນາລໍຖ້າ...';
      
      try {
        const formData = new FormData();
        formData.append('file', this.sqlFile);
        
        const response = await this.$axios.post('/api/database/import', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        if (response.data && response.data.success) {
          if (this.$toast) {
            this.$toast.success('ກູ້ຄືນຂໍ້ມູນສຳເລັດແລ້ວ');
          }
          this.sqlFile = null;
          
          // Optional: Force reload to clear cache/states
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          throw new Error(response.data?.message || 'Restore failed');
        }
      } catch (error) {
        console.error('Restore error:', error);
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດ: ' + (error.response?.data?.message || error.message));
        }
      } finally {
        this.importLoading = false;
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.db-management-container {
  padding: 24px;
  background-color: #f8fafc;
  min-height: calc(100vh - 100px);
  font-family: 'Inter', 'Noto Sans Lao', sans-serif;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.page-subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

.operation-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.operation-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.1) !important;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
}

.backup-gradient {
  background: linear-gradient(90deg, #3b82f6, #6366f1);
}

.restore-gradient {
  background: linear-gradient(90deg, #ef4444, #f43f5e);
}

.card-content-wrapper {
  padding: 32px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
}

.section-desc {
  color: #64748b;
  line-height: 1.6;
  flex-grow: 1;
}

.text-error {
  color: #ef4444;
}

.action-button {
  border-radius: 12px;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.info-alert {
  background-color: white !important;
  border-radius: 12px;
}

.guideline-list {
  padding-left: 20px;
  color: #475569;
}

.guideline-list li {
  margin-bottom: 8px;
}

.loading-container {
  padding: 40px;
  border-radius: 16px;
  background: white;
}

.loading-text {
  font-weight: 500;
  color: #334155;
  font-size: 1.1rem;
}

.warning-text {
  background-color: #fff1f2;
  color: #991b1b;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #ef4444;
}

.restore-confirm-dialog .v-card-title {
  font-weight: 700;
}
</style>
