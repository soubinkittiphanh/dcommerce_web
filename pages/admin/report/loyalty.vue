<template>
  <div class="loyalty-report-container">
    <!-- Header Section -->
    <div class="report-header mb-6">
      <div class="d-flex align-center">
        <v-avatar color="amber lighten-4" size="56" class="mr-4">
          <v-icon color="amber darken-3" size="32">mdi-star-circle</v-icon>
        </v-avatar>
        <div>
          <h1 class="text-h4 font-weight-bold grey--text text--darken-3">ລາຍງານຄະແນນສະສົມ</h1>
          <p class="grey--text text--darken-1 mb-0">ຕິດຕາມການໃຫ້ ແລະ ການນຳໃຊ້ຄະແນນສະສົມຂອງລູກຄ້າ</p>
        </div>
      </div>
    </div>

    <!-- Filters and Summary Section -->
    <v-row>
      <v-col cols="12" lg="4">
        <v-card class="filter-card elevation-2 rounded-xl pa-4 mb-6">
          <h3 class="text-h6 font-weight-bold mb-4 d-flex align-center">
            <v-icon left color="primary">mdi-filter-variant</v-icon>
            ຕົວກອງຂໍ້ມູນ
          </h3>
          
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="ຈາກວັນທີ"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                rounded
                v-bind="attrs"
                v-on="on"
                class="mb-2"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted2"
                label="ຫາວັນທີ"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                rounded
                v-bind="attrs"
                v-on="on"
                class="mb-4"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>

          <v-btn
            block
            x-large
            color="primary"
            rounded
            elevation="4"
            @click="fetchData"
            :loading="isloading"
          >
            <v-icon left>mdi-magnify</v-icon>
            ດຶງລາຍງານ
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" lg="8">
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="summary-card awarded rounded-xl pa-4 text-center">
              <v-icon color="success" size="48" class="mb-2">mdi-plus-circle-outline</v-icon>
              <div class="text-overline grey--text">ຄະແນນທີ່ມອບໃຫ້ (Awarded)</div>
              <div class="text-h4 font-weight-black success--text">{{ formatNumber(summary.totalAwarded) }}</div>
              <div class="text-subtitle-2 grey--text">≈ {{ formatNumber(summary.totalAwarded * config.redeemRate) }} ກີບ</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="summary-card redeemed rounded-xl pa-4 text-center">
              <v-icon color="error" size="48" class="mb-2">mdi-minus-circle-outline</v-icon>
              <div class="text-overline grey--text">ຄະແນນທີ່ໃຊ້ໄປ (Redeemed)</div>
              <div class="text-h4 font-weight-black error--text">{{ formatNumber(summary.totalRedeemed) }}</div>
              <div class="text-subtitle-2 grey--text">≈ {{ formatNumber(summary.totalRedeemed * config.redeemRate) }} ກີບ</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="summary-card net rounded-xl pa-4 text-center">
              <v-icon color="info" size="48" class="mb-2">mdi-swap-horizontal-circle-outline</v-icon>
              <div class="text-overline grey--text">ຄະແນນສຸດທິ (Net Change)</div>
              <div class="text-h4 font-weight-black info--text">{{ formatNumber(summary.totalAwarded - summary.totalRedeemed) }}</div>
              <div class="text-subtitle-2 grey--text">≈ {{ formatNumber((summary.totalAwarded - summary.totalRedeemed) * config.redeemRate) }} ກີບ</div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Data Table Section -->
    <v-card class="report-table-card elevation-2 rounded-xl mt-6 overflow-hidden">
      <v-toolbar flat color="white" class="px-4 py-2">
        <v-toolbar-title class="font-weight-bold grey--text text--darken-3">
          ລາຍລະອຽດທຸລະກຳຄະແນນ
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາລູກຄ້າ..."
          single-line
          hide-details
          outlined
          rounded
          dense
          style="max-width: 300px"
        ></v-text-field>
        <v-btn icon color="primary" class="ml-2" @click="exportToExcel">
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </v-toolbar>
      
      <v-data-table
        :headers="headers"
        :items="loaddata"
        :search="search"
        :loading="isloading"
        class="loyalty-table"
        :items-per-page="15"
      >
        <template v-slot:[`item.points`]="{ item }">
          <div class="d-flex flex-column align-center">
            <span :class="item.points > 0 ? 'success--text font-weight-bold' : 'error--text font-weight-bold'">
              {{ item.points > 0 ? '+' : '' }}{{ formatNumber(item.points) }}
            </span>
            <span class="text-caption grey--text">
              ≈ {{ formatNumber(Math.abs(item.points) * config.redeemRate) }}
            </span>
          </div>
        </template>
        
        <template v-slot:[`item.type`]="{ item }">
          <v-chip :color="getTypeColor(item.type)" x-small label text-color="white" class="font-weight-bold">
            {{ item.type }}
          </v-chip>
        </template>

        <template v-slot:[`item.createdAt`]="{ item }">
          <div class="d-flex flex-column">
            <span class="font-weight-medium">{{ formatDate(item.createdAt) }}</span>
            <span class="text-caption grey--text">{{ formatTime(item.createdAt) }}</span>
          </div>
        </template>

        <template v-slot:[`item.client.name`]="{ item }">
          <div class="d-flex align-center">
            <v-avatar color="primary lighten-4" size="32" class="mr-2">
              <span class="primary--text font-weight-bold text-caption">{{ item.client?.name?.charAt(0) }}</span>
            </v-avatar>
            <div class="d-flex flex-column">
              <span class="font-weight-bold grey--text text--darken-3">{{ item.client?.name }}</span>
              <span class="text-caption grey--text">{{ item.client?.telephone }}</span>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  middleware: 'auths',
  data() {
    const today = new Date().toISOString().substr(0, 10);
    return {
      isloading: false,
      search: '',
      date: today,
      date2: today,
      menu1: false,
      menu2: false,
      summary: {
        totalAwarded: 0,
        totalRedeemed: 0,
        totalCancelled: 0
      },
      config: {
        redeemRate: 0
      },
      loaddata: [],
      headers: [
        { text: 'ວັນທີ', value: 'createdAt', width: '150px' },
        { text: 'ລູກຄ້າ', value: 'client.name' },
        { text: 'ຄະແນນ', value: 'points', align: 'center', width: '120px' },
        { text: 'ປະເພດ', value: 'type', align: 'center', width: '120px' },
        { text: 'ໝາຍເຫດ', value: 'remark' },
      ],
    }
  },
  computed: {
    dateFormatted() {
      return this.formatDisplayDate(this.date)
    },
    dateFormatted2() {
      return this.formatDisplayDate(this.date2)
    }
  },
  watch: {
    date(val) {
      this.fetchData()
    },
    date2(val) {
      this.fetchData()
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.isloading = true
      try {
        const response = await this.$axios.get('api/loyalty/report', {
          params: {
            fromDate: this.date,
            toDate: this.date2
          }
        })
        this.loaddata = response.data.transactions
        this.summary = {
          totalAwarded: response.data.totalAwarded,
          totalRedeemed: response.data.totalRedeemed,
          totalCancelled: response.data.totalCancelled
        }
        this.config = response.data.config || { redeemRate: 0 }
      } catch (error) {
        console.error("Error fetching loyalty report:", error)
        if (this.$toast) this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນ')
      } finally {
        this.isloading = false
      }
    },
    formatNumber(val) {
      return new Intl.NumberFormat().format(val || 0)
    },
    formatDisplayDate(date) {
      if (!date || typeof date !== 'string' || !date.includes('-')) return date
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('lo-LA')
    },
    formatTime(date) {
      return new Date(date).toLocaleTimeString('lo-LA', { hour: '2-digit', minute: '2-digit' })
    },
    getTypeColor(type) {
      switch (type) {
        case 'AWARDED': return 'success darken-1';
        case 'REDEEMED': return 'warning darken-1';
        case 'CANCELLED': return 'error darken-1';
        case 'ADJUSTED': return 'info darken-1';
        default: return 'grey';
      }
    },
    exportToExcel() {
        // Basic export logic could go here, or just a toast for now
        if (this.$toast) this.$toast.info('ກຳລັງພັດທະນາລະບົບ Export')
    }
  }
}
</script>

<style scoped>
.loyalty-report-container {
  font-family: 'NotoSansLaoUI-Regular', sans-serif !important;
}

.loyalty-report-container :deep(*) {
  font-family: 'NotoSansLaoUI-Regular', sans-serif !important;
}

.report-header h1 {
  letter-spacing: -0.5px;
}

.filter-card {
  border: 1px solid #eef2f6;
  background: white;
}

.summary-card {
  height: 100%;
  border: 1px solid #eef2f6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -8px rgba(0,0,0,0.1) !important;
}

.summary-card.awarded { border-left: 6px solid #4caf50; }
.summary-card.redeemed { border-left: 6px solid #ff5252; }
.summary-card.net { border-left: 6px solid #2196f3; }

.report-table-card {
  background: white;
}

.loyalty-table :deep(th) {
  text-transform: uppercase;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  color: #64748b !important;
  background: #f8fafc !important;
}

.loyalty-table :deep(td) {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}

/* Transitions */
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
