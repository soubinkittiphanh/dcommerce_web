<template>
  <div class="text-left">
    <div class="mb-4">
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon left>mdi-label</v-icon>
        <h3>ລາຍການ ສະກຸນເງິນ</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon left>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

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
          outlined
          small
          @click="showSwitchLocalDialog = true"
        >
          <v-icon left>mdi-swap-horizontal</v-icon>
          Switch Local
        </v-btn>
      </div>
    </v-alert>

    <v-dialog v-model="showSwitchLocalDialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">Switch Local Currency</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="selectedNewLocal"
            :items="nonLocalCurrencies"
            item-text="displayName"
            item-value="id"
            label="Select New Local Currency"
            outlined
            :rules="[(v) => !!v || 'Please select a currency']"
          ></v-select>
          <v-alert type="warning" class="mt-3" dense text>
            <strong>Warning:</strong> This will change your base currency for all exchange rate calculations.
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="showSwitchLocalDialog = false">Cancel</v-btn>
          <v-btn
            color="primary"
            text
            @click="switchLocalCurrency"
            :disabled="!selectedNewLocal"
            :loading="switchingLocal"
          >Switch</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        v-if="guidelineDialog"
        @close-dialog="guidelineDialog = false"
        youtube-link="5zESPW16wgY"
      >
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="currencyDialogForm" persistent max-width="700px">
      <currency-form
        v-if="currencyDialogForm"
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
          <v-col cols="12" sm="6">
            <v-chip-group v-model="currencyTypeFilter" mandatory color="primary" class="mb-2">
              <v-chip value="all" small>All</v-chip>
              <v-chip value="local" small color="success" text-color="white">Local</v-chip>
              <v-chip value="foreign" small>Foreign</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-details
              clearable
              outlined
              dense
            />
          </v-col>
          <v-col cols="6">
            <v-btn large outlined color="primary" @click="createRecord" rounded>
              <v-icon left>mdi-plus</v-icon>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn large outlined color="primary" @click="loadData" rounded :loading="isloading">
              <v-icon left>mdi-cloud-download</v-icon>ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <v-data-table
        :headers="headers"
        :items="filteredCurrencyList"
        :search="search"
        :loading="isloading"
        class="elevation-1"
      >
        <template v-slot:[`item.code`]="{ item }">
          <div class="d-flex align-center">
            <span class="font-weight-bold">{{ item.code }}</span>
            <v-chip v-if="item.isLocalCCY" x-small color="success" class="ml-2">LOCAL</v-chip>
          </div>
        </template>

        <template v-slot:[`item.rate`]="{ item }">
          <div class="text-center">
            <div class="font-weight-medium">{{ getFormatNum(item.rate) }}</div>
            <div class="caption grey--text">{{ getRateDirection(item) }}</div>
          </div>
        </template>

        <template v-slot:[`item.exchangeDirection`]="{ item }">
          <v-chip :color="item.exchangeDirection === 'local_to_foreign' ? 'blue' : 'orange'" small dark>
            <v-icon left small>
              {{ item.exchangeDirection === 'local_to_foreign' ? 'mdi-arrow-right' : 'mdi-arrow-left' }}
            </v-icon>
            {{ getDirectionLabel(item) }}
          </v-chip>
        </template>

        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip :color="item.isActive ? 'success' : 'error'" x-small dark>
            {{ item.isActive ? 'Active' : 'Inactive' }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex">
            <v-btn icon color="primary" small @click="viewRecord(item)">
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn v-if="!item.isLocalCCY" icon color="success" small @click="quickSetAsLocal(item)">
              <v-icon small>mdi-home-plus</v-icon>
            </v-btn>
            <v-btn v-if="!item.isLocalCCY" icon color="error" small @click="confirmDelete(item)">
              <v-icon small>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Confirm Delete</v-card-title>
        <v-card-text>
          Are you sure you want to delete <strong>{{ currencyToDelete?.name }}</strong>?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" text @click="deleteCurrency">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import CurrencyForm from '~/components/CurrencyForm.vue'

export default {
  components: { CurrencyForm },
  data() {
    return {
      guidelineDialog: false,
      isloading: false,
      currencyDialogForm: false,
      currencyList: [],
      localCurrency: null,
      search: '',
      currencyTypeFilter: 'all',
      isCreate: true,
      currencySelected: 0,
      componentKey: 0,
      showSwitchLocalDialog: false,
      selectedNewLocal: null,
      switchingLocal: false,
      deleteDialog: false,
      currencyToDelete: null,
      headers: [
        { text: '#', value: 'pk', width: '80px' },
        { text: 'ລະຫັດ', value: 'code', width: '120px' },
        { text: 'ຊື່', value: 'name' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'rate', align: 'center' },
        { text: 'ທິດທາງ', value: 'exchangeDirection', align: 'center' },
        { text: 'ສະຖານະ', value: 'isActive', width: '100px' },
        { text: 'Actions', value: 'actions', sortable: false, width: '150px' }
      ]
    }
  },
  computed: {
    filteredCurrencyList() {
      if (this.currencyTypeFilter === 'local') return this.currencyList.filter(c => c.isLocalCCY)
      if (this.currencyTypeFilter === 'foreign') return this.currencyList.filter(c => !c.isLocalCCY)
      return this.currencyList
    },
    nonLocalCurrencies() {
      return this.currencyList.filter(c => !c.isLocalCCY && c.isActive).map(c => ({
        id: c.id, displayName: `${c.name} (${c.code})`
      }))
    }
  },
  async created() {
    await this.loadData()
    await this.loadLocalCurrency()
  },
  methods: {
    getFormatNum(val) { return getFormatNum(val) },
    getRateDirection(item) {
      const localCode = this.localCurrency?.code || 'LOCAL'
      return item.exchangeDirection === 'local_to_foreign' 
        ? `1 ${localCode} = ${this.getFormatNum(item.rate)} ${item.code}`
        : `1 ${item.code} = ${this.getFormatNum(item.rate)} ${localCode}`
    },
    getDirectionLabel(item) {
      const localCode = this.localCurrency?.code || 'LOCAL'
      return item.exchangeDirection === 'local_to_foreign' ? `${localCode} → ${item.code}` : `${item.code} → ${localCode}`
    },
    async loadData() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/currency/findAll')
        this.currencyList = res.data.map(i => ({ ...i, pk: i.id }))
      } catch (e) { swalError2(this.$swal, 'Error', 'Load failed') }
      this.isloading = false
    },
    async loadLocalCurrency() {
      try {
        const res = await this.$axios.get('api/currency/findLocalCurrency')
        this.localCurrency = res.data
      } catch (e) { this.localCurrency = null }
    },
    async switchLocalCurrency() {
      if (!this.selectedNewLocal) return
      this.switchingLocal = true
      try {
        await this.$axios.post('api/currency/switchLocalCurrency', { newLocalCurrencyId: this.selectedNewLocal })
        await this.loadData(); await this.loadLocalCurrency()
        swalSuccess(this.$swal, 'Success', 'Local currency switched')
        this.showSwitchLocalDialog = false
      } catch (e) { swalError2(this.$swal, 'Error', 'Failed') }
      this.switchingLocal = false
    },
    async quickSetAsLocal(item) {
      try {
        await this.$axios.post('api/currency/switchLocalCurrency', { newLocalCurrencyId: item.id })
        await this.loadData(); await this.loadLocalCurrency()
        swalSuccess(this.$swal, 'Success', `${item.name} set as Local`)
      } catch (e) { swalError2(this.$swal, 'Error', 'Failed') }
    },
    confirmDelete(item) { this.currencyToDelete = item; this.deleteDialog = true },
    async deleteCurrency() {
      try {
        await this.$axios.delete(`api/currency/delete/${this.currencyToDelete.id}`)
        await this.loadData()
        swalSuccess(this.$swal, 'Deleted', 'Success')
      } catch (e) { swalError2(this.$swal, 'Error', 'Delete failed') }
      this.deleteDialog = false
    },
    handleReloadData() { this.loadData(); this.loadLocalCurrency() },
    handleCloseDialog() { this.currencyDialogForm = false },
    createRecord() { this.isCreate = true; this.currencySelected = 0; this.componentKey++; this.currencyDialogForm = true },
    viewRecord(item) { this.isCreate = false; this.currencySelected = item.id; this.componentKey++; this.currencyDialogForm = true }
  }
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