<template>
  <div class="loan-page pa-4">
    <loan-banner />
    <page-title icon="mdi-calendar-clock" title="ປິດທ້າຍວັນສິນເຊື່ອ" subtitle="Loan end of day · never moves the POS business date">
      <v-btn icon :loading="loading" @click="load"><v-icon>mdi-refresh</v-icon></v-btn>
    </page-title>

    <v-progress-linear v-if="!ready" indeterminate color="primary" />
    <v-alert v-else-if="!can('VIEW')" type="info" text>ທ່ານບໍ່ມີສິດ (No VIEW permission for LN_EOD).</v-alert>

    <template v-else-if="status">
      <v-row dense>
        <v-col cols="12" md="4">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ວັນທຸລະກິດສິນເຊື່ອ (Loan business date)</div>
            <div class="text-h6 font-weight-bold">{{ status.loanBusinessDate }}</div>
            <div class="text-caption grey--text mt-2">ວັນທຸລະກິດ POS (POS business date)</div>
            <div class="font-weight-bold">{{ status.posBusinessDate || '-' }}</div>
            <div class="text-caption grey--text mt-2">ວັນທີປະຕິທິນ ວຽງຈັນ (Vientiane calendar date)</div>
            <div class="font-weight-bold">{{ status.cob.calendarToday }}</div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ໂໝດປິດວັນ (Close-of-business mode)</div>
            <div class="font-weight-bold">
              {{ status.cob.mode === 'MANUAL_COB' ? 'USE_BUSINESS_DATE = Y: ລໍຖ້າ POS ປິດວັນ (waits for the POS COB)' : 'USE_BUSINESS_DATE = N: ຕາມປະຕິທິນ (follows the calendar)' }}
            </div>
            <v-alert :type="status.cob.canRun ? 'success' : 'warning'" text dense class="mt-2 mb-0">
              {{ status.cob.canRun ? 'ພ້ອມແລ່ນ (EOD can run)' : status.cob.reason }}
            </v-alert>
            <div v-if="status.running" class="orange--text mt-2">ກຳລັງແລ່ນ (EOD is running)</div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined class="pa-3 fill-height">
            <div class="text-caption grey--text">ອັດຕາທີ່ EOD ຈະໃຊ້ (Rates EOD will use for {{ logs ? logs.businessDate : '' }})</div>
            <div v-if="logs && !logs.rates.length" class="text-caption">ບໍ່ມີບັນຊີສະກຸນຕ່າງປະເທດ (No open foreign-currency accounts)</div>
            <div v-for="r in (logs ? logs.rates : [])" :key="r.currency" class="mt-1">
              <span class="font-weight-bold">{{ r.currency }}</span>
              <span v-if="r.rate"> {{ fmtRate(r.rate) }} ({{ r.rateDate }})</span>
              <span v-else class="red--text"> ບໍ່ມີອັດຕາ (no rate)</span>
              <div v-if="r.warning" class="text-caption amber--text text--darken-3">{{ r.warning }}</div>
            </div>
            <v-btn v-if="can('CREATE')" block color="primary" class="text-none mt-3" :disabled="!status.cob.canRun || status.running" @click="confirm = true">
              <v-icon left>mdi-play</v-icon>ແລ່ນ EOD (Run EOD for {{ status.loanBusinessDate }})
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-alert type="info" text dense class="mt-2">
        {{ status.cob.warning }}
      </v-alert>

      <v-card v-if="logs" outlined class="mt-3">
        <v-tabs v-model="tab" background-color="grey lighten-4" color="primary">
          <v-tab class="text-none">ວຽກ (Jobs)</v-tab>
          <v-tab class="text-none">ບັນທຶກ (Job log)</v-tab>
          <v-tab class="text-none">ຊຸດບັນຊີ (GL batches)</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-data-table :headers="jobHeaders" :items="logs.jobs" dense hide-default-footer :items-per-page="-1">
              <template #[`item.isEnabled`]="{ item }"><v-icon small :color="item.isEnabled ? 'green' : 'grey'">{{ item.isEnabled ? 'mdi-check' : 'mdi-close' }}</v-icon></template>
              <template #[`item.authStatus`]="{ item }"><v-chip x-small dark :color="item.authStatus === 'AUTHORIZED' ? 'green' : 'orange'">{{ item.authStatus }}</v-chip></template>
            </v-data-table>
            <div class="text-caption grey--text pa-2">EOD ແລ່ນສະເພາະວຽກທີ່ເປີດ ແລະ ອະນຸມັດແລ້ວ (EOD runs only jobs that are enabled and AUTHORIZED.)</div>
          </v-tab-item>
          <v-tab-item>
            <v-data-table :headers="logHeaders" :items="logs.logs" dense :items-per-page="15" />
          </v-tab-item>
          <v-tab-item>
            <v-data-table :headers="batchHeaders" :items="logs.batches" dense :items-per-page="15">
              <template #[`item.totalDebit`]="{ item }">{{ fmtMoney(item.totalDebit, item.currency) }}</template>
            </v-data-table>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>

    <v-dialog v-model="confirm" max-width="520">
      <v-card>
        <v-card-title class="text-subtitle-1 font-weight-bold">ແລ່ນ EOD {{ status && status.loanBusinessDate }}?</v-card-title>
        <v-card-text>
          ຄ້າງຮັບດອກເບ້ຍ, ຈັດຊັ້ນໜີ້, ສຳຮອງ ແລະ ເລື່ອນວັນສິນເຊື່ອ. ວັນ POS ບໍ່ປ່ຽນ.
          (Accrues interest, classifies, provisions and moves the loan date. The POS date does not change.)
          <v-alert v-if="runError" type="error" text dense class="mt-2">{{ runError }}</v-alert>
          <v-alert v-if="runResult" type="success" text dense class="mt-2">{{ runResult }}</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text class="text-none" @click="confirm = false">ປິດ (Close)</v-btn>
          <v-btn color="primary" class="text-none" :loading="running" :disabled="!!runResult" @click="run">ຢືນຢັນ (Confirm)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LoanBanner from '~/components/loan/LoanBanner.vue'
import PageTitle from '~/components/loan/PageTitle.vue'
import { errMsg } from '~/common/loan/loanApi'
import { fmtMoney, fmtRate } from '~/common/loan/format'

export default {
  name: 'LoanEod',
  components: { LoanBanner, PageTitle },
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      ready: false,
      loading: false,
      status: null,
      logs: null,
      tab: 0,
      confirm: false,
      running: false,
      runError: null,
      runResult: null,
      jobHeaders: [
        { text: '#', value: 'executionOrder' }, { text: 'ວຽກ (Job)', value: 'jobCode' }, { text: 'ຊື່ (Name)', value: 'name' },
        { text: 'ເປີດ (Enabled)', value: 'isEnabled' }, { text: 'ອະນຸມັດ (Auth)', value: 'authStatus' },
        { text: 'ແລ່ນລ່າສຸດ (Last run)', value: 'lastRunDate' }, { text: 'ຜົນ (Last status)', value: 'lastStatus' }
      ],
      logHeaders: [
        { text: 'ວັນທີ (Date)', value: 'businessDate' }, { text: 'ວຽກ (Job)', value: 'jobCode' }, { text: 'ຜົນ (Status)', value: 'status' },
        { text: 'ລາຍການ (Records)', value: 'recordsProcessed' }, { text: 'ລົ້ມເຫຼວ (Failed)', value: 'recordsFailed' }, { text: 'ຂໍ້ຄວາມ (Message)', value: 'logMessage' }, { text: 'ms', value: 'executionTimeMs' }
      ],
      batchHeaders: [
        { text: 'ຊຸດ (Batch)', value: 'batchNumber' }, { text: 'ວັນທີ (Date)', value: 'businessDate' }, { text: 'ວຽກ (Job)', value: 'jobCode' },
        { text: 'ສະກຸນ (Currency)', value: 'currency' }, { text: 'Dr = Cr', value: 'totalDebit', align: 'end' }, { text: 'ສະຖານະ (Status)', value: 'status' }
      ]
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/init')
      if (this.can('VIEW')) await this.load()
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.ready = true
    }
  },
  methods: {
    fmtMoney,
    fmtRate,
    can (action) { return this.$store.getters['loan/can']('LN_EOD', action) },
    async load () {
      this.loading = true
      try {
        const [s, l] = await Promise.all([this.$axios.$get('/api/loan/eod/status'), this.$axios.$get('/api/loan/eod/logs')])
        this.status = s.data
        this.logs = l.data
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.loading = false
      }
    },
    async run () {
      this.running = true
      this.runError = null
      try {
        const res = await this.$axios.$post('/api/loan/eod/run', {})
        this.runResult = `${res.message}: ${res.data.businessDate} -> ${res.data.nextBusinessDate}`
        await this.load()
      } catch (err) {
        this.runError = errMsg(err)
      } finally {
        this.running = false
      }
    }
  }
}
</script>
