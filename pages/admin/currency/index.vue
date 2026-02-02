<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ສະກຸນເງິນ</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Local Currency Info Banner -->
    <v-alert
      v-if="localCurrency"
      type="success"
      prominent
      class="mb-4"
      icon="mdi-home-currency"
    >
      <div class="d-flex justify-space-between align-center">
        <div>
          <div class="text-h6">Current Local Currency</div>
          <div>
            {{ localCurrency.name }} ({{ localCurrency.code }}) - Rate:
            {{ getFormatNum(localCurrency.rate) }}
          </div>
        </div>
        <v-btn
          color="primary"
          variant="outlined"
          size="small"
          @click="showSwitchLocalDialog = true"
        >
          <v-icon start>mdi-swap-horizontal</v-icon>
          Switch Local
        </v-btn>
      </div>
    </v-alert>

    <!-- Switch Local Currency Dialog -->
    <v-dialog v-model="showSwitchLocalDialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">Switch Local Currency</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="selectedNewLocal"
            :items="nonLocalCurrencies"
            item-title="displayName"
            item-value="id"
            label="Select New Local Currency"
            outlined
            :rules="[(v) => !!v || 'Please select a currency']"
          ></v-select>
          <v-alert type="warning" class="mt-3" dense text>
            <strong>Warning:</strong> This will change your base currency for
            all exchange rate calculations.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            variant="text"
            @click="showSwitchLocalDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="switchLocalCurrency"
            :disabled="!selectedNewLocal"
            :loading="switchingLocal"
          >
            Switch
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="5zESPW16wgY"
      >
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <!-- Fixed dialog configuration with proper event handling -->
    <v-dialog v-model="currencyDialogForm">
      <currency-form
        @reload-data="handleReloadData"
        :isCreate="isCreate"
        :key="componentKey"
        :recordId="currencySelected"
        @close-dialog="handleCloseDialog"
      >
      </currency-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <!-- Currency Type Filter -->
            <v-chip-group v-model="currencyTypeFilter" mandatory class="mb-2">
              <v-chip value="all" size="small">All</v-chip>
              <v-chip value="local" size="small" color="success">Local</v-chip>
              <v-chip value="foreign" size="small" color="grey">Foreign</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-details
              clearable
            />
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn
              size="large"
              variant="outlined"
              @click="createRecord"
              class="primary"
              rounded
            >
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn
              size="large"
              variant="outlined"
              @click="loadData"
              class="primary"
              rounded
            >
              <span class="mdi mdi-cloud-download"></span>
              ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        v-if="filteredCurrencyList && filteredCurrencyList.length > 0"
        :headers="headers"
        :search="search"
        :items="filteredCurrencyList"
        :loading="isloading"
        class="elevation-1"
      >
        <template v-slot:[`item.code`]="{ item }">
          <div class="d-flex align-center">
            <span class="font-weight-bold">{{ item.code }}</span>
            <v-chip
              v-if="item.isLocalCCY"
              size="x-small"
              color="success"
              class="ml-2"
            >
              LOCAL
            </v-chip>
          </div>
        </template>

        <template v-slot:[`item.rate`]="{ item }">
          <div class="text-center">
            <div class="font-weight-medium">{{ getFormatNum(item.rate) }}</div>
            <div class="text-caption text-grey">
              {{ getRateDirection(item) }}
            </div>
          </div>
        </template>

        <template v-slot:[`item.exchangeDirection`]="{ item }">
          <v-chip
            :color="
              item.exchangeDirection === 'local_to_foreign' ? 'blue' : 'orange'
            "
            size="small"
            variant="flat"
          >
            <v-icon start size="small">
              {{
                item.exchangeDirection === 'local_to_foreign'
                  ? 'mdi-arrow-right'
                  : 'mdi-arrow-left'
              }}
            </v-icon>
            {{ getDirectionLabel(item) }}
          </v-chip>
        </template>

        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip
            :color="item.isActive ? 'success' : 'error'"
            size="small"
            variant="flat"
          >
            <v-icon start size="small">
              {{ item.isActive ? 'mdi-check' : 'mdi-close' }}
            </v-icon>
            {{ item.isActive ? 'Active' : 'Inactive' }}
          </v-chip>
        </template>

        <template v-slot:[`item.isLocalCCY`]="{ item }">
          <v-chip
            :color="item.isLocalCCY ? 'success' : 'grey'"
            size="small"
            variant="flat"
          >
            <v-icon start size="small">
              {{ item.isLocalCCY ? 'mdi-home-currency' : 'mdi-earth' }}
            </v-icon>
            {{ item.isLocalCCY ? 'Local' : 'Foreign' }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap-1">
            <v-btn
              color="primary"
              variant="text"
              size="small"
              @click="viewRecord(item)"
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>

            <v-btn
              v-if="!item.isLocalCCY"
              color="success"
              variant="text"
              size="small"
              @click="quickSetAsLocal(item)"
              :disabled="isloading"
            >
              <v-icon size="small">mdi-home-plus</v-icon>
            </v-btn>

            <v-btn
              v-if="!item.isLocalCCY"
              color="error"
              variant="text"
              size="small"
              @click="confirmDelete(item)"
              :disabled="isloading"
            >
              <v-icon size="small">mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
      
      <!-- Empty State -->
      <v-card-text v-else-if="!isloading && filteredCurrencyList && filteredCurrencyList.length === 0" class="text-center py-8">
        <v-icon size="64" color="grey">mdi-currency-usd-off</v-icon>
        <h3 class="text-h6 mt-4 mb-2">No currencies found</h3>
        <p class="text-body-2 text-grey">Start by creating your first currency</p>
        <v-btn color="primary" @click="createRecord" class="mt-4">
          <v-icon start>mdi-plus</v-icon>
          Create Currency
        </v-btn>
      </v-card-text>
    </v-card>

    <!-- Error State -->
    <!-- <v-alert v-if="pageError" type="error" class="mt-4">
      <v-alert-title>Error Loading Data</v-alert-title>
      <div>{{ errorMessage }}</div>
      <v-btn color="error" variant="outlined" @click="retryLoad" class="mt-2">
        <v-icon start>mdi-refresh</v-icon>
        Retry
      </v-btn>
    </v-alert> -->

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Confirm Delete</v-card-title>
        <v-card-text>
          Are you sure you want to delete
          <strong
            >{{ currencyToDelete?.name }} ({{ currencyToDelete?.code }})</strong
          >?
          <v-alert
            v-if="currencyToDelete?.isLocalCCY"
            type="error"
            class="mt-3"
          >
            This is your local currency and cannot be deleted!
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="deleteDialog = false"
            >Cancel</v-btn
          >
          <v-btn
            color="error"
            variant="text"
            @click="deleteCurrency"
            :disabled="currencyToDelete?.isLocalCCY"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common'
import CurrencyForm from '~/components/CurrencyForm.vue'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'

export default {
  components: {
    OrderDetailPos,
    OrderSumaryCardPos,
    OrderDetailPosCRUD,
    CurrencyForm,
  },
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      componentKey: 0,
      currencyDialogForm: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      search: '',
      currencyList: [],
      currencySelected: '',
      localCurrency: null,
      currencyTypeFilter: 'all',

      // Error handling
      pageError: false,
      errorMessage: '',

      // Local currency switching
      showSwitchLocalDialog: false,
      selectedNewLocal: null,
      switchingLocal: false,

      // Delete functionality
      deleteDialog: false,
      currencyToDelete: null,

      headers: [
        {
          text: '#',
          align: 'center',
          value: 'pk',
          sortable: true,
          width: '80px',
        },
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'code',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        {
          text: 'ອັດຕາແລກປ່ຽນ',
          align: 'center',
          value: 'rate',
          sortable: true,
          width: '200px',
        },
        {
          text: 'ທິດທາງການແລກປ່ຽນ',
          align: 'center',
          value: 'exchangeDirection',
          sortable: true,
          width: '180px',
        },
        {
          text: 'ສະຖານະ',
          align: 'center',
          value: 'isActive',
          sortable: true,
          width: '100px',
        },
        {
          text: 'ປະເພດ',
          align: 'center',
          value: 'isLocalCCY',
          sortable: true,
          width: '100px',
        },
        {
          text: 'Actions',
          align: 'center',
          value: 'actions',
          sortable: false,
          width: '150px',
        },
      ],
    }
  },

  async created() {
    try {
      await this.loadData()
      await this.loadLocalCurrency()
    } catch (error) {
      console.error('Error during component creation:', error)
      this.pageError = true
      this.errorMessage = 'Failed to initialize page data'
    }
  },

  computed: {
    filteredCurrencyList() {
      if (!this.currencyList || this.currencyList.length === 0) {
        return []
      }

      if (this.currencyTypeFilter === 'all') {
        return this.currencyList
      } else if (this.currencyTypeFilter === 'local') {
        return this.currencyList.filter((currency) => currency.isLocalCCY)
      } else if (this.currencyTypeFilter === 'foreign') {
        return this.currencyList.filter((currency) => !currency.isLocalCCY)
      }
      return this.currencyList
    },

    nonLocalCurrencies() {
      return this.currencyList
        .filter((currency) => !currency.isLocalCCY && currency.isActive)
        .map((currency) => ({
          ...currency,
          displayName: `${currency.name} (${currency.code})`,
        }))
    },
  },

  methods: {
    getFormatNum(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return new Intl.NumberFormat().format(val)
    },

    getRateDirection(item) {
      const localCode = this.localCurrency?.code || 'LOCAL'
      if (item.exchangeDirection === 'local_to_foreign') {
        return `1 ${localCode} = ${this.getFormatNum(item.rate)} ${item.code}`
      } else {
        return `1 ${item.code} = ${this.getFormatNum(item.rate)} ${localCode}`
      }
    },

    getDirectionLabel(item) {
      const localCode = this.localCurrency?.code || 'LOCAL'
      if (item.exchangeDirection === 'local_to_foreign') {
        return `${localCode} → ${item.code}`
      } else {
        return `${item.code} → ${localCode}`
      }
    },

    async loadLocalCurrency() {
      try {
        const response = await this.$axios.get('api/currency/findLocalCurrency')
        this.localCurrency = response.data
      } catch (error) {
        console.log('No local currency found:', error)
        this.localCurrency = null
      }
    },

    async switchLocalCurrency() {
      if (!this.selectedNewLocal) return

      this.switchingLocal = true
      try {
        await this.$axios.post('api/currency/switchLocalCurrency', {
          newLocalCurrencyId: this.selectedNewLocal,
        })

        await this.loadData()
        await this.loadLocalCurrency()

        swalSuccess(
          this.$swal,
          'Success',
          'Local currency switched successfully'
        )
        this.showSwitchLocalDialog = false
        this.selectedNewLocal = null
      } catch (error) {
        console.error('Switch local currency error:', error)
        swalError2(this.$swal, 'Error', 'Failed to switch local currency')
      }
      this.switchingLocal = false
    },

    async quickSetAsLocal(item) {
      try {
        await this.$axios.post('api/currency/switchLocalCurrency', {
          newLocalCurrencyId: item.id,
        })

        await this.loadData()
        await this.loadLocalCurrency()

        swalSuccess(
          this.$swal,
          'Success',
          `${item.name} is now your local currency`
        )
      } catch (error) {
        console.error('Quick set local error:', error)
        swalError2(this.$swal, 'Error', 'Failed to set as local currency')
      }
    },

    confirmDelete(item) {
      this.currencyToDelete = item
      this.deleteDialog = true
    },

    async deleteCurrency() {
      if (!this.currencyToDelete || this.currencyToDelete.isLocalCCY) return

      try {
        await this.$axios.delete(
          `api/currency/delete/${this.currencyToDelete.id}`
        )
        await this.loadData()
        swalSuccess(this.$swal, 'Success', 'Currency deleted successfully')
      } catch (error) {
        console.error('Delete currency error:', error)
        swalError2(this.$swal, 'Error', 'Failed to delete currency')
      }

      this.deleteDialog = false
      this.currencyToDelete = null
    },

    viewRecord(item) {
      this.componentKey += 1
      this.currencySelected = item.id
      this.isCreate = false
      this.currencyDialogForm = true
    },

    createRecord() {
      this.componentKey += 1
      this.currencySelected = 0
      this.isCreate = true
      this.currencyDialogForm = true
    },

    // Improved dialog handling
    async handleReloadData() {
      try {
        this.isloading = true
        console.log('Reloading data after currency save...')
        
        // Reload both currency list and local currency
        await Promise.all([
          this.loadData(),
          this.loadLocalCurrency()
        ])
        
        console.log('Data reloaded successfully')
      } catch (error) {
        console.error('Error reloading data:', error)
        swalError2(this.$swal, 'Error', 'Failed to reload currency data')
      } finally {
        this.isloading = false
      }
    },

    handleCloseDialog() {
      this.currencyDialogForm = false
    },

    async retryLoad() {
      this.pageError = false
      this.errorMessage = ''
      try {
        await this.loadData()
        await this.loadLocalCurrency()
      } catch (error) {
        this.pageError = true
        this.errorMessage = 'Failed to load data: ' + error.message
      }
    },

    async loadData() {
      if (this.isloading) return
      this.isloading = true
      this.pageError = false

      try {
        console.log('Loading currency data...')
        const res = await this.$axios.get('api/currency/findAll')
        
        // Ensure we have a valid response
        if (!res.data || !Array.isArray(res.data)) {
          throw new Error('Invalid response format')
        }

        this.currencyList = []

        for (const iterator of res.data) {
          // Validate required fields
          if (!iterator.id || !iterator.code || !iterator.name) {
            console.warn('Skipping invalid currency record:', iterator)
            continue
          }

          iterator.pk = iterator.id
          if (!iterator.exchangeDirection) {
            iterator.exchangeDirection = 'local_to_foreign'
          }
          
          // Ensure rate is a valid number
          if (iterator.rate === null || iterator.rate === undefined || isNaN(iterator.rate)) {
            iterator.rate = 1
          }

          this.currencyList.push(iterator)
        }

        console.log(`Loaded ${this.currencyList.length} currencies`)
      } catch (error) {
        console.error('Load data error:', error)
        this.pageError = true
        this.errorMessage = 'Could not load data: ' + (error.response?.data?.message || error.message)
        
        // Don't throw error here to prevent white page
        swalError2(this.$swal, 'Error', 'Could not load currency data')
      } finally {
        this.isloading = false
      }
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

.gap-1 > * + * {
  margin-left: 4px;
}

/* Additional styles for better error handling */
.retry-section {
  text-align: center;
  padding: 40px 20px;
}

.empty-state {
  padding: 60px 20px;
  text-align: center;
}

/* Loading overlay improvements */
.v-data-table__wrapper {
  position: relative;
  min-height: 300px;
}
</style>