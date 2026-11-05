<template>
  <div>
    <!-- Top Header Bar -->
    <div class="d-flex align-center justify-space-between mb-5 flex-wrap">
      <div class="d-flex align-center my-1 mr-4">
        <v-avatar color="primary lighten-5" rounded size="48" class="mr-4 elevation-0">
          <v-icon color="primary" large>mdi-file-invoice-dollar</v-icon>
        </v-avatar>
        <div>
          <div class="d-flex align-center flex-wrap">
            <h1 class="text-h5 font-weight-bold mb-0 primary--text mr-2">ລະບົບຈັດການໃບທວງໜີ້</h1>
            <v-chip x-small color="primary lighten-5" class="primary--text font-weight-bold" label>
              AR Invoices
            </v-chip>
          </div>
          <p class="text-caption grey--text text--darken-1 mb-0 mt-1">
            ຕິດຕາມຍອດຂາຍເຊື່ອ, ການຊຳລະເງິນ ແລະ ສະຖານະໃບທວງໜີ້ລູກຄ້າທັງໝົດ
          </p>
        </div>
      </div>

      <div class="d-flex align-center my-1 flex-wrap">
        <v-btn
          color="grey lighten-4"
          text
          class="mr-2 rounded-lg text--secondary font-weight-bold text-none"
          :loading="loading"
          @click="fetchInvoices"
        >
          <v-icon left small>mdi-refresh</v-icon>ໂຫຼດໃໝ່
        </v-btn>
        <v-btn
          color="success"
          outlined
          class="mr-2 rounded-lg font-weight-bold text-none"
          :disabled="loading || filteredInvoices.length === 0"
          @click="exportData"
        >
          <v-icon left small>mdi-file-excel</v-icon>Export CSV
        </v-btn>
        <v-btn
          color="primary"
          depressed
          class="rounded-lg font-weight-bold white--text text-none"
          @click="openCreateDialog"
        >
          <v-icon left small>mdi-plus</v-icon>ສ້າງໃບທວງໜີ້ໃໝ່
        </v-btn>
      </div>
    </div>

    <!-- Summary KPI Status Cards -->
    <v-row class="mb-5" dense>
      <!-- 1. All Invoices -->
      <v-col cols="12" sm="6" md="3">
        <v-card
          elevation="1"
          class="summary-card total-ap cursor-pointer fill-height"
          :class="{ 'card-active-primary': !filters.status }"
          @click="setStatusFilter('')"
        >
          <v-card-text class="pa-4 d-flex flex-column justify-space-between fill-height">
            <div class="d-flex align-center justify-space-between mb-2">
              <div class="d-flex align-center">
                <v-avatar color="primary lighten-5" rounded size="42" class="mr-3">
                  <v-icon color="primary">mdi-file-document-multiple</v-icon>
                </v-avatar>
                <div>
                  <div class="caption grey--text font-weight-bold text-uppercase">ລວມໃບແຈ້ງໜີ້ທັງໝົດ</div>
                  <div class="text-h6 font-weight-bold primary--text lh-tight mt-1">
                    {{ formatCurrency(summaryTotals.totalInvoices) }}
                    <span class="caption grey--text font-weight-regular">₭</span>
                  </div>
                </div>
              </div>
              <v-chip x-small color="primary lighten-5" class="primary--text font-weight-bold" label>
                {{ statusCounts.all }} ໃບ
              </v-chip>
            </div>
            <div class="d-flex align-center justify-space-between pt-2 border-top-subtle caption mt-2">
              <span class="grey--text">ຍອດລວມທັງໝົດ</span>
              <span v-if="!filters.status" class="primary--text font-weight-bold d-flex align-center">
                <v-icon x-small color="primary" class="mr-1">mdi-check-circle</v-icon>ສະແດງທັງໝົດ
              </span>
              <span v-else class="grey--text text--lighten-1">ຄລິກເພື່ອເບິ່ງ</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 2. Pending / Outstanding -->
      <v-col cols="12" sm="6" md="3">
        <v-card
          elevation="1"
          class="summary-card outstanding cursor-pointer fill-height"
          :class="{ 'card-active-warning': filters.status === 'pending' }"
          @click="setStatusFilter(filters.status === 'pending' ? '' : 'pending')"
        >
          <v-card-text class="pa-4 d-flex flex-column justify-space-between fill-height">
            <div class="d-flex align-center justify-space-between mb-2">
              <div class="d-flex align-center">
                <v-avatar color="warning lighten-5" rounded size="42" class="mr-3">
                  <v-icon color="warning darken-2">mdi-clock-alert</v-icon>
                </v-avatar>
                <div>
                  <div class="caption grey--text font-weight-bold text-uppercase">ຄ້າງຊຳລະ (Pending)</div>
                  <div class="text-h6 font-weight-bold warning--text text--darken-2 lh-tight mt-1">
                    {{ formatCurrency(summaryTotals.totalOutstanding) }}
                    <span class="caption grey--text font-weight-regular">₭</span>
                  </div>
                </div>
              </div>
              <v-chip x-small color="warning lighten-5" class="warning--text text--darken-3 font-weight-bold" label>
                {{ statusCounts.pending }} ໃບ
              </v-chip>
            </div>
            <div class="d-flex align-center justify-space-between pt-2 border-top-subtle caption mt-2">
              <span class="grey--text">ຍອດໜີ້ທີ່ລໍຖ້າຮັບ</span>
              <span v-if="filters.status === 'pending'" class="warning--text text--darken-2 font-weight-bold d-flex align-center">
                <v-icon x-small color="warning darken-2" class="mr-1">mdi-check-circle</v-icon>ກຳລັງສະແດງ
              </span>
              <span v-else class="grey--text text--lighten-1">ຄລິກເພື່ອຕົວກັ່ນຕອງ</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 3. Settled / Paid -->
      <v-col cols="12" sm="6" md="3">
        <v-card
          elevation="1"
          class="summary-card total-paid cursor-pointer fill-height"
          :class="{ 'card-active-success': filters.status === 'settled' }"
          @click="setStatusFilter(filters.status === 'settled' ? '' : 'settled')"
        >
          <v-card-text class="pa-4 d-flex flex-column justify-space-between fill-height">
            <div class="d-flex align-center justify-space-between mb-2">
              <div class="d-flex align-center">
                <v-avatar color="success lighten-5" rounded size="42" class="mr-3">
                  <v-icon color="success">mdi-cash-check</v-icon>
                </v-avatar>
                <div>
                  <div class="caption grey--text font-weight-bold text-uppercase">ຈ່າຍແລ້ວ (Settled)</div>
                  <div class="text-h6 font-weight-bold success--text lh-tight mt-1">
                    {{ formatCurrency(summaryTotals.totalSettled) }}
                    <span class="caption grey--text font-weight-regular">₭</span>
                  </div>
                </div>
              </div>
              <v-chip x-small color="success lighten-5" class="success--text text--darken-2 font-weight-bold" label>
                {{ statusCounts.settled }} ໃບ
              </v-chip>
            </div>
            <div class="d-flex align-center justify-space-between pt-2 border-top-subtle caption mt-2">
              <span class="grey--text">ຊຳລະຄົບຖ້ວນແລ້ວ</span>
              <span v-if="filters.status === 'settled'" class="success--text font-weight-bold d-flex align-center">
                <v-icon x-small color="success" class="mr-1">mdi-check-circle</v-icon>ກຳລັງສະແດງ
              </span>
              <span v-else class="grey--text text--lighten-1">ຄລິກເພື່ອຕົວກັ່ນຕອງ</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 4. Overdue -->
      <v-col cols="12" sm="6" md="3">
        <v-card
          elevation="1"
          class="summary-card overdue cursor-pointer fill-height"
          :class="{ 'card-active-error': filters.status === 'overdue' }"
          @click="setStatusFilter(filters.status === 'overdue' ? '' : 'overdue')"
        >
          <v-card-text class="pa-4 d-flex flex-column justify-space-between fill-height">
            <div class="d-flex align-center justify-space-between mb-2">
              <div class="d-flex align-center">
                <v-avatar color="error lighten-5" rounded size="42" class="mr-3">
                  <v-icon color="error">mdi-alert-circle</v-icon>
                </v-avatar>
                <div>
                  <div class="caption grey--text font-weight-bold text-uppercase">ເກີນກຳນົດ (Overdue)</div>
                  <div class="text-h6 font-weight-bold error--text lh-tight mt-1">
                    {{ formatCurrency(summaryTotals.totalOverdue) }}
                    <span class="caption grey--text font-weight-regular">₭</span>
                  </div>
                </div>
              </div>
              <v-chip x-small color="error lighten-5" class="error--text text--darken-2 font-weight-bold" label>
                {{ statusCounts.overdue }} ໃບ
              </v-chip>
            </div>
            <div class="d-flex align-center justify-space-between pt-2 border-top-subtle caption mt-2">
              <span class="grey--text">ກາຍກຳນົດຊຳລະ</span>
              <span v-if="filters.status === 'overdue'" class="error--text font-weight-bold d-flex align-center">
                <v-icon x-small color="error" class="mr-1">mdi-check-circle</v-icon>ກຳລັງສະແດງ
              </span>
              <span v-else class="grey--text text--lighten-1">ຄລິກເພື່ອຕົວກັ່ນຕອງ</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Clean Streamlined Filter Bar -->
    <v-card class="mb-5 filter-card" elevation="0">
      <v-card-text class="pa-4">
        <!-- Top Controls: Quick Presets, Cancelled, and Reset -->
        <div class="d-flex align-center justify-space-between mb-3 pb-3 border-bottom-subtle flex-wrap">
          <div class="d-flex align-center flex-wrap my-1">
            <span class="caption grey--text text--darken-2 font-weight-bold mr-2 d-flex align-center">
              <v-icon small color="grey darken-1" class="mr-1">mdi-calendar-clock</v-icon>
              ຊ່ວງເວລາ:
            </span>
            <v-btn-toggle
              v-model="selectedDatePreset"
              mandatory
              dense
              class="date-toggle-group rounded-lg"
            >
              <v-btn small value="thisMonth" class="px-3 caption text-none" @click="setDatePreset('thisMonth')">
                ເດືອນນີ້
              </v-btn>
              <v-btn small value="today" class="px-3 caption text-none" @click="setDatePreset('today')">
                ມື້ນີ້
              </v-btn>
              <v-btn small value="thisYear" class="px-3 caption text-none" @click="setDatePreset('thisYear')">
                ປີນີ້
              </v-btn>
              <v-btn small value="all" class="px-3 caption text-none" @click="setDatePreset('all')">
                ທັງໝົດ
              </v-btn>
            </v-btn-toggle>
          </div>

          <div class="d-flex align-center flex-wrap my-1">
            <v-checkbox
              v-model="showCancelled"
              label="ສະແດງໃບຍົກເລີກ"
              hide-details
              dense
              color="error"
              class="mt-0 pt-0 mr-4 caption"
              @change="onShowCancelledChange"
            />
            <v-btn
              color="grey darken-1"
              text
              small
              class="rounded-lg font-weight-bold text-none"
              @click="resetFilters"
            >
              <v-icon left small>mdi-refresh</v-icon>ຣີເຊັດ
            </v-btn>
          </div>
        </div>

        <!-- 6 Unified Input Controls -->
        <v-row dense align="center">
          <!-- Search -->
          <v-col cols="12" sm="6" md="2">
            <v-text-field
              v-model="filters.search"
              label="ຄົ້ນຫາ"
              placeholder="ເລກທີໃບແຈ້ງໜີ້, ລູກຄ້າ, Order..."
              outlined
              dense
              hide-details
              clearable
              prepend-inner-icon="mdi-magnify"
              class="rounded-lg"
              @input="applyFilters"
            />
          </v-col>

          <!-- Customer Filter -->
          <v-col cols="12" sm="6" md="2">
            <v-autocomplete
              v-model="filters.customerId"
              :items="customerFilterList"
              item-text="name"
              item-value="value"
              label="ລູກຄ້າ / ຮ້ານຄ້າ"
              placeholder="ທັງໝົດ"
              outlined
              dense
              hide-details
              clearable
              prepend-inner-icon="mdi-store-outline"
              class="rounded-lg"
              @change="applyFilters"
            />
          </v-col>

          <!-- Ministry / Agency Filter -->
          <v-col cols="12" sm="6" md="2">
            <v-autocomplete
              v-model="filters.agencyId"
              :items="ministryFilterList"
              item-text="name"
              item-value="id"
              :label="clientLabel"
              placeholder="ທັງໝົດ"
              outlined
              dense
              hide-details
              clearable
              :loading="loadingAgencies"
              prepend-inner-icon="mdi-domain"
              class="rounded-lg"
              @change="applyFilters"
            />
          </v-col>

          <!-- Status Dropdown -->
          <v-col cols="12" sm="6" md="2">
            <v-select
              v-model="filters.status"
              :items="statusOptions"
              label="ສະຖານະ (Status)"
              placeholder="ທັງໝົດ"
              outlined
              dense
              hide-details
              clearable
              prepend-inner-icon="mdi-filter-variant"
              class="rounded-lg"
              @change="onStatusFilterChange"
            >
              <template #selection="{ item }">
                <span class="font-weight-medium text-caption" :class="item.textColor || ''">
                  {{ item.text }}
                </span>
              </template>
              <template #item="{ item }">
                <v-list-item-content>
                  <div class="d-flex align-center justify-space-between">
                    <span :class="item.textColor || ''" class="font-weight-medium caption">{{ item.text }}</span>
                    <v-chip v-if="item.badgeCount !== undefined" x-small :color="item.color || 'grey'" dark class="ml-2 font-weight-bold">
                      {{ item.badgeCount }}
                    </v-chip>
                  </div>
                </v-list-item-content>
              </template>
            </v-select>
          </v-col>

          <!-- Date From -->
          <v-col cols="12" sm="3" md="2">
            <v-text-field
              v-model="filters.dateFrom"
              label="ວັນທີເລີ່ມຕົ້ນ"
              type="date"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-calendar-start"
              class="rounded-lg"
              @change="applyFilters"
            />
          </v-col>

          <!-- Date To -->
          <v-col cols="12" sm="3" md="2">
            <v-text-field
              v-model="filters.dateTo"
              label="ວັນທີສິ້ນສຸດ"
              type="date"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-calendar-end"
              class="rounded-lg"
              @change="applyFilters"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Table Section -->
    <v-card class="dashboard-card" elevation="0" outlined>
      <v-card-title class="py-3 px-4 bg-light border-bottom d-flex align-center justify-space-between flex-wrap">
        <div class="d-flex align-center flex-wrap">
          <v-icon color="primary" class="mr-2">mdi-table</v-icon>
          <span class="font-weight-bold text-subtitle-1">ລາຍການໃບແຈ້ງໜີ້ (Invoices List)</span>
          <v-chip
            v-if="filters.status"
            small
            :color="currentStatusColor"
            text-color="white"
            class="ml-2 font-weight-bold"
            close
            @click:close="setStatusFilter('')"
          >
            {{ currentStatusLabel }}
          </v-chip>
        </div>
        <div class="d-flex align-center my-1">
          <v-chip color="primary lighten-5" class="primary--text font-weight-bold" small>
            ທັງໝົດ {{ filteredInvoices.length }} ລາຍການ
          </v-chip>
        </div>
      </v-card-title>

      <v-data-table :headers="headers" :items="filteredInvoices" :loading="loading" :items-per-page="10"
        class="elevation-0 modernize-table notosans-lao" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..." no-data-text="ບໍ່ມີຂໍ້ມູນ">
        <template v-slot:item.invoiceNumber="{ item }">
          <div>
            <div class="font-weight-bold d-flex align-center flex-wrap">
              <span>{{ item.invoiceNumber }}</span>
              <v-chip
                v-if="item.saleOrder || item.sourceType === 'POS_ORDER' || item.saleHeaderId"
                x-small
                color="primary lighten-5"
                class="primary--text ml-2 font-weight-medium"
                label
              >
                <v-icon left x-small color="primary">mdi-cart</v-icon>
                Order #{{ item.saleHeaderId || item.saleOrder?.id }}
              </v-chip>
            </div>
            <div v-if="item.description" class=" grey--text text-truncate" style="max-width: 220px">
              {{ item.description }}
            </div>
          </div>
        </template>

        <template v-slot:item.invoiceDate="{ item }">
          <span class="">{{
            formatDate(item.invoiceDate)
          }}</span>
        </template>

        <template v-slot:item.customer="{ item }">
          <div v-if="item.client">
            <div class="font-weight-medium">
              <v-icon x-small class="mr-1" color="primary">mdi-store</v-icon>
              {{ item.client.name }}
              <v-chip x-small color="blue lighten-5" class="blue--text text--darken-2 ml-1" label>POS</v-chip>
            </div>
            <div v-if="item.client.company" class="grey--text caption">
              {{ item.client.company }}
            </div>
            <div v-else-if="item.client.telephone" class="grey--text caption">
              {{ item.client.telephone }}
            </div>
          </div>
          <div v-else-if="item.agency">
            <div class="font-weight-medium">
              <v-icon x-small class="mr-1">mdi-account</v-icon>
              {{ item.agency.agencyName }}
            </div>
            <div v-if="item.agency.email" class=" grey--text caption">
              {{ item.agency.email }}
            </div>
          </div>
          <span v-else class="grey--text ">N/A</span>
        </template>

        <template v-slot:item.dueDate="{ item }">
          <span class="" :class="{
            'error--text font-weight-bold':
              getDueDateClass(item.dueDate, item.status) ===
              'overdue-date',
            'warning--text font-weight-medium':
              getDueDateClass(item.dueDate, item.status) === 'due-soon',
          }">
            {{ formatDate(item.dueDate) }}
          </span>
        </template>

        <template v-slot:item.totalAmount="{ item }">
          <div class="text-right">
            <div class="font-weight-bold">
              {{ formatCurrency(item.totalAmount) }}
            </div>
            <div class=" grey--text">
              Net: {{ formatCurrency(item.netAmount) }}
              <span v-if="item.taxAmount > 0">
                | Tax: {{ formatCurrency(item.taxAmount) }}</span>
            </div>
          </div>
        </template>

        <template v-slot:item.settledAmount="{ item }">
          <div class="text-right font-weight-bold success--text">
            {{ formatCurrency(item.settledAmount) }}
          </div>
        </template>

        <template v-slot:item.outstandingAmount="{ item }">
          <div class="text-right font-weight-bold" :class="{
            'error--text': item.outstandingAmount > 0 && item.status !== 'paid',
          }">
            {{ formatCurrency(item.outstandingAmount) }}
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <div>
            <v-chip
              v-if="item.settledAmount > 0 && item.outstandingAmount > 0 && item.status !== 'cancelled'"
              x-small
              color="teal darken-1"
              text-color="white"
              class="font-weight-medium"
            >
              ຊຳລະບາງສ່ວນ ({{ Math.round((item.settledAmount / (item.totalAmount || 1)) * 100) }}%)
            </v-chip>
            <v-chip v-else x-small :color="getStatusColor(item.status)" text-color="white" class="font-weight-medium">
              {{ formatStatus(item.status) }}
            </v-chip>
          </div>
        </template>

        <template v-slot:item.maker="{ item }">
          <div class="">
            <div>{{ item.maker ? item.maker.cus_name : 'N/A' }}</div>
            <div v-if="item.createdAt" class="grey--text">
              {{ formatDate(item.createdAt) }}
            </div>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="d-flex align-center justify-center">
            <v-btn icon small color="primary" class="mr-1" @click="printInvoiceVoucher(item)">
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon small v-bind="attrs" v-on="on">
                  <v-icon small>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item @click="viewInvoice(item)">
                  <v-list-item-icon>
                    <v-icon small color="info">mdi-eye</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>ເບິ່ງລາຍລະອຽດ</v-list-item-title>
                </v-list-item>

                <v-list-item @click="editInvoice(item)">
                  <v-list-item-icon>
                    <v-icon small color="warning">mdi-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                </v-list-item>

                <v-divider v-if="!['cancelled', 'paid'].includes(item.status)" />

                <v-list-item v-if="!['cancelled', 'paid'].includes(item.status)" @click="cancelInvoice(item)">
                  <v-list-item-icon>
                    <v-icon small color="error">mdi-close-circle-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="error--text">ຍົກເລີກ</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <InvoiceHeaderMaintain :gl-accounts="glAccounts" :visible="showEditDialog" :invoice="selectedInvoice"
      :customers="customers"
      :agencies="agencies.filter(agency => agency.agencyType != 'Employee')" :jobBatches="jobBatches"
      :currencies="currencies" @close="closeEditDialog" @save="onInvoiceSave" />

    <client-only>
      <InvoiceHeaderView :visible="showViewDialog" :invoice="selectedInvoice" @close="closeViewDialog" @print="onPrintFromView" />
    </client-only>

    <!-- AR Invoice Printer Dialog -->
    <ARInvoicePrinter
      :visible="showPrintDialog"
      :invoice-data="selectedInvoice"
      :agencies="agencies"
      :currencies="currencies"
      @close="showPrintDialog = false"
    />
  </div>
</template>

<script>
import InvoiceHeaderMaintain from '~/components/accounting/ar/invoice/maintain'
import InvoiceHeaderView from '~/components/accounting/ar/invoice/view'
import ARInvoicePrinter from '~/components/accounting/ar/invoice/voucher'
import { swalConfirm } from '~/common'

export default {
  name: 'InvoiceHeaderSummary',
  components: {
    InvoiceHeaderMaintain,
    InvoiceHeaderView,
    ARInvoicePrinter,
  },

  data() {
    return {
      loading: false,
      loadingAgencies: false,
      glAccounts: [],
      showEditDialog: false,
      showViewDialog: false,
      showPrintDialog: false,
      selectedInvoice: null,
      invoices: [],
      filteredInvoices: [],
      showCancelled: false,
      customers: [],
      agencies: [],
      jobBatches: [],
      currencies: [],
      selectedDatePreset: 'thisMonth',
      filters: {
        search: '',
        customerId: null,
        agencyId: null,
        status: '',
        dateFrom: '',
        dateTo: '',
      },

      sort: {
        field: 'invoiceDate',
        direction: 'desc',
      },

      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      headers: [
        {
          text: 'ເລກທີໃບແຈ້ງໜີ້',
          value: 'invoiceNumber',
          sortable: true,
          width: '200px',
        },
        {
          text: 'ວັນທີແຈ້ງໜີ້',
          value: 'invoiceDate',
          sortable: true,
          width: '120px',
        },
        { text: 'ລູກຄ້າ', value: 'customer', sortable: false, width: '200px' },
        {
          text: 'ວັນທີຄົບກຳນົດ',
          value: 'dueDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ຍອດລວມ',
          value: 'totalAmount',
          sortable: true,
          align: 'end',
          width: '180px',
        },
        {
          text: 'ຍອດຊຳລະແລ້ວ',
          value: 'settledAmount',
          sortable: true,
          align: 'end',
          width: '180px',
        },
        {
          text: 'ຍອດຄ້າງຊຳລະ',
          value: 'outstandingAmount',
          sortable: true,
          align: 'end',
          width: '180px',
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          sortable: true,
          width: '120px',
          align: 'center',
        },
        { text: 'ຜູ້ສ້າງ', value: 'maker', sortable: false, width: '150px' },
        {
          text: 'ຟັງຊັ່ນ',
          value: 'actions',
          sortable: false,
          width: '80px',
          align: 'center',
        },
      ],
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    getSPF() {
      return this.$store.getters.findSPF || []
    },

    clientLabel() {
      const item = this.getSPF.find((spf) => spf.code === 'LABEL_AC_CUS')
      return item?.value || 'ກະຊວງ'
    },

    paginatedInvoices() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredInvoices.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.filteredInvoices.length / this.pagination.perPage)
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredInvoices.length
      )
      return {
        start: this.filteredInvoices.length > 0 ? start : 0,
        end,
        total: this.filteredInvoices.length,
      }
    },

    baseInvoices() {
      // Invoices filtered by customer, search, date range, and cancelled (without status filter)
      let base = [...this.invoices]

      if (!this.showCancelled && this.filters.status !== 'cancelled') {
        base = base.filter((inv) => inv.status !== 'cancelled')
      }

      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        base = base.filter(
          (inv) =>
            inv.invoiceNumber.toLowerCase().includes(search) ||
            inv.description?.toLowerCase().includes(search) ||
            inv.agency?.agencyName?.toLowerCase().includes(search) ||
            inv.agency?.agencyCode?.toLowerCase().includes(search) ||
            inv.client?.name?.toLowerCase().includes(search) ||
            inv.client?.company?.toLowerCase().includes(search) ||
            String(inv.saleHeaderId || '').includes(search)
        )
      }

      if (this.filters.customerId) {
        const filterVal = String(this.filters.customerId)
        if (filterVal.startsWith('client_')) {
          const cId = parseInt(filterVal.replace('client_', ''))
          base = base.filter((inv) => inv.clientId === cId)
        } else if (filterVal.startsWith('agency_')) {
          const aId = parseInt(filterVal.replace('agency_', ''))
          base = base.filter((inv) => inv.agencyId === aId)
        } else {
          const numId = parseInt(filterVal)
          base = base.filter((inv) => inv.clientId === numId)
        }
      }

      if (this.filters.agencyId) {
        const aId = parseInt(this.filters.agencyId)
        base = base.filter((inv) => Number(inv.agencyId) === aId)
      }

      if (this.filters.dateFrom || this.filters.dateTo) {
        base = base.filter((inv) => {
          const invoiceDate = new Date(inv.invoiceDate)
          const dateFrom = this.filters.dateFrom
            ? new Date(this.filters.dateFrom)
            : null
          const dateTo = this.filters.dateTo
            ? new Date(this.filters.dateTo)
            : null

          if (dateFrom && invoiceDate < dateFrom) return false
          if (dateTo && invoiceDate > dateTo) return false
          return true
        })
      }

      return base
    },

    statusCounts() {
      const counts = {
        all: 0,
        pending: 0,
        settled: 0,
        partially_paid: 0,
        overdue: 0,
        draft: 0,
        cancelled: 0,
      }

      this.baseInvoices.forEach((inv) => {
        counts.all++
        if (inv.status === 'cancelled') {
          counts.cancelled++
          return
        }
        if (inv.status === 'paid' || (inv.outstandingAmount <= 0 && inv.totalAmount > 0)) {
          counts.settled++
        } else {
          counts.pending++
          if (inv.settledAmount > 0 && inv.outstandingAmount > 0) {
            counts.partially_paid++
          }
          if (inv.status === 'overdue' || this.getDueDateClass(inv.dueDate, inv.status) === 'overdue-date') {
            counts.overdue++
          }
          if (inv.status === 'draft') {
            counts.draft++
          }
        }
      })

      return counts
    },

    statusOptions() {
      return [
        { text: 'ທັງໝົດ (All)', value: '', badgeCount: this.statusCounts.all, color: 'primary' },
        { text: 'ຄ້າງຊຳລະ (Pending / Outstanding)', value: 'pending', badgeCount: this.statusCounts.pending, textColor: 'warning--text text--darken-2', color: 'warning darken-1' },
        { text: 'ຊຳລະແລ້ວ (Settled / Paid)', value: 'settled', badgeCount: this.statusCounts.settled, textColor: 'success--text text--darken-2', color: 'success' },
        { text: 'ຊຳລະບາງສ່ວນ (Partially Settled)', value: 'partially_paid', badgeCount: this.statusCounts.partially_paid, textColor: 'teal--text text--darken-2', color: 'teal' },
        { text: 'ເກີນກຳນົດ (Overdue)', value: 'overdue', badgeCount: this.statusCounts.overdue, textColor: 'error--text text--darken-2', color: 'error' },
        { text: 'ແບບຮ່າງ (Draft)', value: 'draft', badgeCount: this.statusCounts.draft, textColor: 'grey--text text--darken-2', color: 'grey' },
        { text: 'ຍົກເລີກ (Cancelled)', value: 'cancelled', badgeCount: this.statusCounts.cancelled, textColor: 'grey--text text--darken-3', color: 'grey darken-2' },
      ]
    },

    currentStatusLabel() {
      if (!this.filters.status) return ''
      const opt = this.statusOptions.find((o) => o.value === this.filters.status)
      return opt ? opt.text : this.filters.status
    },

    currentStatusColor() {
      switch (this.filters.status) {
        case 'settled':
        case 'paid':
          return 'success'
        case 'pending':
        case 'outstanding':
          return 'warning darken-1'
        case 'partially_paid':
        case 'partial':
          return 'teal'
        case 'overdue':
          return 'error'
        case 'draft':
          return 'grey'
        case 'cancelled':
          return 'grey darken-2'
        default:
          return 'primary'
      }
    },

    summaryTotals() {
      return this.baseInvoices.reduce(
        (acc, invoice) => {
          acc.totalInvoices += (invoice.totalAmount || 0)
          acc.totalSettled += (invoice.settledAmount || 0)
          acc.totalOutstanding += (invoice.outstandingAmount || 0)

          if (this.getDueDateClass(invoice.dueDate, invoice.status) === 'overdue-date') {
            acc.totalOverdue += (invoice.outstandingAmount || 0)
          }

          return acc
        },
        { totalInvoices: 0, totalSettled: 0, totalOutstanding: 0, totalOverdue: 0 }
      )
    },

    customerFilterList() {
      const list = []
      if (this.customers && this.customers.length > 0) {
        this.customers.forEach((c) => {
          list.push({
            value: `client_${c.id}`,
            name: `${c.name} ${c.company ? '(' + c.company + ')' : ''}`,
          })
        })
      }
      return list
    },

    ministryFilterList() {
      if (!this.agencies || this.agencies.length === 0) return []
      return this.agencies
        .filter((a) => a.agencyType !== 'Employee')
        .map((a) => {
          const code = a.agencyCode || a.code
          const name = a.agencyName || a.name
          return {
            id: a.id,
            name: code ? `${code} - ${name}` : name,
          }
        })
    },
  },

  mounted() {
    this.setDefaultDates()
    if (this.$route.query.search) {
      this.filters.search = this.$route.query.search
    }
    if (this.$route.query.status) {
      this.filters.status = this.$route.query.status
    }
    this.fetchInvoices()
    this.fetchCustomers()
    this.fetchAgencies()
    this.fetchJobBatches()
    this.fetchCurrencies()
    this.fetchAccountCharts()
  },

  methods: {
    calculateAmounts(invoices) {
      return invoices.map((invoice) => {
        const activeReceiveHeaders = (invoice.receiveHeaders || []).filter(
          (header) =>
            header.status === 'active' ||
            (!header.status && header.status !== 'cancelled' && header.status !== 'voided')
        )

        const settledAmount = activeReceiveHeaders.reduce(
          (sum, header) => {
            const totalReceived = parseFloat(header.totalReceivedAmount || 0)
            return sum + totalReceived
          },
          0
        )

        const totalAmount = parseFloat(invoice.totalAmount || 0)
        const outstandingAmount = Math.max(0, totalAmount - settledAmount)

        let status = invoice.status
        if (invoice.status !== 'cancelled') {
          if (settledAmount >= totalAmount && totalAmount > 0) {
            status = 'paid'
          } else if (settledAmount > 0 && settledAmount < totalAmount) {
            const isOverdue = invoice.dueDate && new Date() > new Date(invoice.dueDate)
            status = isOverdue ? 'overdue' : 'partially_paid'
          } else if (invoice.status === 'paid' && settledAmount < totalAmount) {
            const isOverdue = invoice.dueDate && new Date() > new Date(invoice.dueDate)
            status = isOverdue ? 'overdue' : 'sent'
          }
        }

        return {
          ...invoice,
          status,
          settledAmount,
          outstandingAmount,
        }
      })
    },

    getCurrentMonthStart() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      const firstDay = new Date(year, month, 1)
      const yyyy = firstDay.getFullYear()
      const mm = String(firstDay.getMonth() + 1).padStart(2, '0')
      const dd = String(firstDay.getDate()).padStart(2, '0')
      return `${yyyy}-${mm}-${dd}`
    },

    getCurrentMonthEnd() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      const lastDay = new Date(year, month + 1, 0)
      const yyyy = lastDay.getFullYear()
      const mm = String(lastDay.getMonth() + 1).padStart(2, '0')
      const dd = String(lastDay.getDate()).padStart(2, '0')
      return `${yyyy}-${mm}-${dd}`
    },

    setDefaultDates() {
      this.filters.dateFrom = this.getCurrentMonthStart()
      this.filters.dateTo = this.getCurrentMonthEnd()
    },

    setDatePreset(preset) {
      this.selectedDatePreset = preset
      const now = new Date()
      if (preset === 'today') {
        const yyyy = now.getFullYear()
        const mm = String(now.getMonth() + 1).padStart(2, '0')
        const dd = String(now.getDate()).padStart(2, '0')
        const todayStr = `${yyyy}-${mm}-${dd}`
        this.filters.dateFrom = todayStr
        this.filters.dateTo = todayStr
      } else if (preset === 'thisMonth') {
        this.filters.dateFrom = this.getCurrentMonthStart()
        this.filters.dateTo = this.getCurrentMonthEnd()
      } else if (preset === 'thisYear') {
        const yyyy = now.getFullYear()
        this.filters.dateFrom = `${yyyy}-01-01`
        this.filters.dateTo = `${yyyy}-12-31`
      } else if (preset === 'all') {
        this.filters.dateFrom = ''
        this.filters.dateTo = ''
      }
      this.applyFilters()
    },

    async fetchAccountCharts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        this.glAccounts = data || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchInvoices() {
      this.loading = true
      try {
        const params = { page: 1, limit: 1000 }
        if (this.showCancelled || this.filters.status === 'cancelled') {
          params.includeCancelled = true
          params.showCancelled = true
        }
        const { data } = await this.$axios.get('/api/ar-invoices', {
          params,
        })

        if (data && data.success) {
          this.invoices = this.calculateAmounts(data.data.invoices || [])
        } else {
          this.invoices = []
        }

        this.applyFilters()
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
      }
    },

    async fetchCustomers() {
      try {
        const { data } = await this.$axios.get('/api/client/find')
        this.customers = data || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchAgencies() {
      this.loadingAgencies = true
      try {
        const response = await this.$axios.$get('/api/agency')
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data
        }
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast?.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ')
      } finally {
        this.loadingAgencies = false
      }
    },

    async fetchJobBatches() {
      try {
        const { data } = await this.$axios.get('/api/batch-job', {
          params: { include: 'mou' },
        })
        this.jobBatches = data.data.jobBatches || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/findAll')
        this.currencies = data || []
      } catch (error) {
        console.error(error)
      }
    },

    openCreateDialog() {
      this.selectedInvoice = null
      this.showEditDialog = true
    },

    editInvoice(invoice) {
      this.selectedInvoice = invoice
      this.showEditDialog = true
    },

    viewInvoice(invoice) {
      this.selectedInvoice = invoice
      this.showViewDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedInvoice = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedInvoice = null
    },

    async onInvoiceSave(invoiceData) {
      try {
        this.loading = true

        let payload = invoiceData
        const newFiles = invoiceData.documents ? invoiceData.documents.filter(doc => doc instanceof File || (doc && doc.rawFile instanceof File)) : []

        if (newFiles.length > 0) {
          const formData = new FormData()
          Object.keys(invoiceData).forEach(key => {
            if (key === 'lineItems') {
              formData.append(key, JSON.stringify(invoiceData[key]))
            } else if (key === 'documents') {
              const existingDocs = invoiceData.documents.filter(doc => !(doc instanceof File || (doc && doc.rawFile instanceof File)))
              formData.append(key, JSON.stringify(existingDocs))
            } else if (invoiceData[key] !== null && invoiceData[key] !== undefined) {
              formData.append(key, invoiceData[key])
            }
          })

          newFiles.forEach(fileDoc => {
            const rawFile = fileDoc instanceof File ? fileDoc : fileDoc.rawFile
            formData.append('documents', rawFile)
          })

          payload = formData
        }

        let response
        if (this.selectedInvoice?.id) {
          response = await this.$axios.put(
            `/api/ar-invoices/${this.selectedInvoice.id}`,
            payload
          )
        } else {
          response = await this.$axios.post('/api/ar-invoices', payload)
        }

        if (response.data?.success) {
          this.$toast.success('ບັນທຶກສຳເລັດ')
          this.closeEditDialog()
          await this.fetchInvoices()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      let filtered = [...this.baseInvoices]

      if (this.filters.status) {
        const s = this.filters.status.toLowerCase()
        if (s === 'settled' || s === 'paid') {
          filtered = filtered.filter(
            (inv) => inv.status === 'paid' || (inv.outstandingAmount <= 0 && inv.totalAmount > 0)
          )
        } else if (s === 'pending' || s === 'outstanding') {
          filtered = filtered.filter(
            (inv) => inv.outstandingAmount > 0 && inv.status !== 'cancelled'
          )
        } else if (s === 'partially_paid' || s === 'partial') {
          filtered = filtered.filter(
            (inv) => inv.settledAmount > 0 && inv.outstandingAmount > 0 && inv.status !== 'cancelled'
          )
        } else if (s === 'overdue') {
          filtered = filtered.filter(
            (inv) =>
              inv.status === 'overdue' ||
              this.getDueDateClass(inv.dueDate, inv.status) === 'overdue-date'
          )
        } else if (s === 'draft') {
          filtered = filtered.filter((inv) => inv.status === 'draft')
        } else if (s === 'sent') {
          filtered = filtered.filter((inv) => inv.status === 'sent')
        } else if (s === 'cancelled') {
          filtered = filtered.filter((inv) => inv.status === 'cancelled')
        } else {
          filtered = filtered.filter((inv) => inv.status === s)
        }
      }

      this.filteredInvoices = this.calculateAmounts(filtered)
      this.pagination.currentPage = 1
    },

    setStatusFilter(status) {
      this.filters.status = status || ''
      if (status === 'cancelled' && !this.showCancelled) {
        this.showCancelled = true
        this.fetchInvoices()
        return
      }
      this.applyFilters()
    },

    onStatusFilterChange() {
      if (this.filters.status === 'cancelled' && !this.showCancelled) {
        this.showCancelled = true
        this.fetchInvoices()
        return
      }
      this.applyFilters()
    },

    resetFilters() {
      this.showCancelled = false
      this.selectedDatePreset = 'thisMonth'
      this.filters = {
        search: '',
        customerId: null,
        agencyId: null,
        status: '',
        dateFrom: this.getCurrentMonthStart(),
        dateTo: this.getCurrentMonthEnd(),
      }
      this.applyFilters()
    },

    updatePagination() {
      this.pagination.currentPage = 1
    },

    exportData() {
      // NOTE: Update convertToCSV if you want to include Settle and Outstanding amounts in export
      const csvData = this.convertToCSV(this.filteredInvoices)
      this.downloadCSV(csvData, 'invoices-export.csv')
    },

    convertToCSV(data) {
      const headers = [
        'Invoice Number',
        'Invoice Date',
        'Due Date',
        'Customer',
        'Total Amount',
        'Settled Amount', // Added to export
        'Outstanding Amount', // Added to export
        'Status',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            `"${row.invoiceNumber}"`,
            row.invoiceDate,
            row.dueDate || '',
            `"${row.agency?.agencyName || ''}"`, // Changed from customer?.name to agency?.agencyName
            row.totalAmount,
            row.settledAmount, // Added to export
            row.outstandingAmount, // Added to export
            row.status,
          ].join(',')
        ),
      ].join('\n')
      return csvContent
    },

    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(url)
    },

    async printInvoiceVoucher(invoice) {
      this.loading = true
      try {
        const { data } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${invoice.id}`)
        const lineItems = data.data || []
        this.selectedInvoice = {
          ...invoice,
          lineItems,
        }
        this.showPrintDialog = true
      } catch (error) {
        console.error('Error loading lines for printing invoice:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນລາຍການໃບແຈ້ງໜີ້ເພື່ອພິມໄດ້')
      } finally {
        this.loading = false
      }
    },

    async cancelInvoice(invoice) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການຍົກເລີກ',
          `ທ່ານຕ້ອງການຍົກເລີກໃບແຈ້ງໜີ້ #${invoice.invoiceNumber} ແມ່ນບໍ່?`,
          'warning'
        )

        if (result.isConfirmed) {
          this.loading = true
          await this.$axios.put(`/api/ar-invoices/${invoice.id}`, {
            status: 'cancelled',
          })
          this.$toast.success('ຍົກເລີກໃບແຈ້ງໜີ້ສຳເລັດ')
          await this.fetchInvoices()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.loading = false
      }
    },

    onPrintFromView(invoice) {
      this.closeViewDialog()
      this.printInvoiceVoucher(invoice)
    },

    onShowCancelledChange() {
      this.fetchInvoices()
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-GB')
    },

    formatCurrency(amount) {
      if (amount === null || amount === undefined) return '0.00'
      // Ensure amount is a number before formatting
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatStatus(status) {
      const labels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        pending: 'ຄ້າງຊຳລະ',
        partially_paid: 'ຊຳລະບາງສ່ວນ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return labels[status] || status
    },

    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        sent: 'info',
        pending: 'warning darken-1',
        partially_paid: 'teal darken-1',
        paid: 'success',
        overdue: 'error',
        cancelled: 'grey darken-2',
      }
      return colors[status] || 'grey'
    },

    getDueDateClass(dueDate, status) {
      if (!dueDate || status === 'paid' || status === 'cancelled') return ''

      const today = new Date()
      today.setHours(0, 0, 0, 0) // Normalize today

      const due = new Date(dueDate)
      due.setHours(0, 0, 0, 0) // Normalize due date

      if (due < today) return 'overdue-date'
      // Due in 7 days or less
      if (due <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000))
        return 'due-soon'
      return ''
    },
  },
}
</script>

<style scoped>
/* Typography & Noto Sans Lao */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Lao:wght@300;400;500;600;700&display=swap');

.summary-card {
  border-radius: 14px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(226, 232, 240, 0.9);
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;
}

.summary-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: transparent;
  transition: all 0.25s ease-in-out;
}

.summary-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
  border-color: #cbd5e1;
}

.summary-card:hover::before {
  width: 6px;
}

.summary-card.total-ap::before { background: var(--v-primary-base, #01532b) !important; }
.summary-card.outstanding::before { background: var(--v-warning-base, #f59e0b) !important; }
.summary-card.total-paid::before { background: var(--v-success-base, #10b981) !important; }
.summary-card.overdue::before { background: var(--v-error-base, #ef4444) !important; }

/* Active card state indicators */
.card-active-primary {
  border: 1.5px solid var(--v-primary-base, #01532b) !important;
  background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%) !important;
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.12) !important;
}
.card-active-primary::before {
  width: 6px !important;
}

.card-active-warning {
  border: 1.5px solid #f59e0b !important;
  background: linear-gradient(180deg, #ffffff 0%, #fffbeb 100%) !important;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.12) !important;
}
.card-active-warning::before {
  width: 6px !important;
}

.card-active-success {
  border: 1.5px solid #10b981 !important;
  background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%) !important;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.12) !important;
}
.card-active-success::before {
  width: 6px !important;
}

.card-active-error {
  border: 1.5px solid #ef4444 !important;
  background: linear-gradient(180deg, #ffffff 0%, #fef2f2 100%) !important;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.12) !important;
}
.card-active-error::before {
  width: 6px !important;
}

.filter-card {
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  background: #ffffff !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.date-toggle-group {
  background-color: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
  height: 32px !important;
}

.date-toggle-group .v-btn {
  letter-spacing: normal !important;
  height: 30px !important;
  border: none !important;
  font-weight: 500 !important;
  color: #64748b !important;
}

.date-toggle-group .v-btn--active {
  background-color: #ffffff !important;
  color: var(--v-primary-base, #01532b) !important;
  font-weight: 700 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}

.border-top-subtle {
  border-top: 1px solid #f1f5f9;
}

.border-bottom-subtle {
  border-bottom: 1px solid #f1f5f9;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0;
}

.dashboard-card {
  border-radius: 14px;
  border: 1px solid #e2e8f0;
}

.modernize-table ::v-deep th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  border-bottom: 2px solid #e2e8f0 !important;
  padding: 14px 16px !important;
}

.modernize-table ::v-deep td {
  font-size: 0.875rem !important;
  padding: 14px 16px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.modernize-table ::v-deep tr:hover {
  background-color: #f8fafc !important;
}

.lh-tight {
  line-height: 1.25 !important;
}

.cursor-pointer {
  cursor: pointer;
}

.font-monospace {
  font-family: 'JetBrains Mono', 'Roboto Mono', monospace !important;
  font-size: 0.9rem;
}

.v-chip.font-weight-medium {
  font-size: 0.7rem !important;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 600;
}

.border-left {
  border-left: 1px solid #e2e8f0;
}

.bg-light {
  background-color: #f8fafc !important;
}

.opacity-80 {
  opacity: 0.8;
}

.uppercase {
  text-transform: uppercase;
}

/* Enhanced font weight for better Lao text readability */
.font-weight-bold {
  font-weight: 600 !important;
}

.font-weight-medium {
  font-weight: 500 !important;
}

/* Apply professional typography globally in current container */
div {
  font-family: 'Inter', 'Noto Sans Lao', sans-serif !important;
}
</style>