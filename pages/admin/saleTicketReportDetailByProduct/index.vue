<template>
  <div class="sales-report-container">
    <!-- ENHANCED HEADER SECTION -->
    <div class="header-section">
      <div class="header-chips-container">
        <v-chip 
          class="header-chip pa-5" 
          color="primary" 
          label 
          text-color="white"
          elevation="4"
        >
          <v-icon left>mdi-chart-line</v-icon>
          <h3>ລາຍງານການຂາຍບິນ</h3>
        </v-chip>
        <v-chip
          class="header-chip pa-5"
          color="secondary"
          label
          text-color="white"
          elevation="4"
          @click="guidelineDialog = true"
        >
          <v-icon left>mdi-help-circle</v-icon>
          <h3>ຄູ່ມືການນຳໃຊ້</h3>
        </v-chip>
        <v-chip
          class="header-chip pa-5"
          color="lightprimary"
          label
          text-color="white"
          elevation="4"
          @click="exportSimplePDFAudit"
        >
          <v-icon left>mdi-file-chart</v-icon>
          <h3>PDF Audit</h3>
        </v-chip>
      </div>
    </div>

    <!-- DIALOGS -->
    <v-dialog v-model="isloading" hide-overlay persistent width="320">
      <v-card class="loading-card">
        <v-card-text class="text-center pa-6">
          <v-progress-circular size="48" color="primary" indeterminate></v-progress-circular>
          <div class="mt-4 ">ກຳລັງໂຫຼດຂໍ້ມູນ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="W6KiQWtiqBM"
      >
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogTicketDetail" max-width="900">
      <v-card class="ticket-detail-card">
        <v-card-title class="ticket-header">
          <v-icon left color="white">mdi-receipt</v-icon>
          ລາຍລະອຽດບິນ: {{ selectedTicket.ticketNumber }}
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="dialogTicketDetail = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-6" v-if="selectedTicket">
          <!-- Enhanced ticket details layout -->
          <v-row class="mb-4">
            <v-col cols="12" md="6">
              <div class="detail-section">
                <h4 class="section-title">ຂໍ້ມູນພື້ນຖານ</h4>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">ເລກບິນ:</span>
                    <span class="detail-value">{{ selectedTicket.ticketNumber }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">ວັນທີ:</span>
                    <span class="detail-value">{{ formatDateTime(selectedTicket.createdAt) }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">ສະຖານະ:</span>
                    <v-chip :color="getStatusColor(selectedTicket.status)" small dark>
                      {{ getStatusText(selectedTicket.status) }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="detail-section">
                <h4 class="section-title">ຂໍ້ມູນການຊຳລະ</h4>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">ການຈ່າຍເງິນ:</span>
                    <v-chip :color="getPaymentStatusColor(selectedTicket.paymentStatus)" small dark>
                      {{ getPaymentStatusText(selectedTicket.paymentStatus) }}
                    </v-chip>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">ລູກຄ້າ:</span>
                    <span class="detail-value">{{ selectedTicket.client?.name || 'ບໍ່ລະບຸ' }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">ໂຕະ:</span>
                    <span class="detail-value">{{ selectedTicket.table?.name || 'ບໍ່ລະບຸ' }}</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Enhanced items table -->
          <div class="items-section">
            <h4 class="section-title mb-4">
              <v-icon left>mdi-cart</v-icon>
              ລາຍການສິນຄ້າ
            </h4>
            <v-card outlined>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr class="table-header">
                      <th class="text-left">ສິນຄ້າ</th>
                      <th class="text-center">ຈຳນວນ</th>
                      <th class="text-center">ລາຄາ/ໜ່ວຍ</th>
                      <th class="text-right">ລວມ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="line in selectedTicket.ticketLines" :key="line.id" class="table-row">
                      <td class="product-name">{{ line.product?.pro_name || 'ບໍ່ລະບຸ' }}</td>
                      <td class="text-center">
                        <v-chip color="blue" small dark>{{ line.quantity }}</v-chip>
                      </td>
                      <td class="text-center price-cell">
                        {{ numberWithCommas(line.unitPrice) }}
                      </td>
                      <td class="text-right total-cell">
                        {{ numberWithCommas(line.totalPrice) }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </div>

          <!-- Enhanced summary section -->
          <v-card outlined class="summary-card mt-6">
            <v-card-text>
              <v-row>
                <v-col cols="8"></v-col>
                <v-col cols="4">
                  <div class="summary-section">
                    <div class="summary-line">
                      <span>ລວມຍ່ອຍ:</span>
                      <span class="amount">{{ numberWithCommas(selectedTicket.subtotal) }}</span>
                    </div>
                    <div class="summary-line">
                      <span>ພາສີ:</span>
                      <span class="amount">{{ numberWithCommas(selectedTicket.tax) }}</span>
                    </div>
                    <div v-if="selectedTicket.promotionDiscount > 0" class="summary-line discount">
                      <span>ສ່ວນຫຼຸດ:</span>
                      <span class="amount">{{ numberWithCommas(selectedTicket.promotionDiscount) }}</span>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div class="summary-line total">
                      <span>ລວມທັງໝົດ:</span>
                      <span class="amount total-amount">{{ numberWithCommas(selectedTicket.total) }}</span>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4 justify-end">
          <v-btn color="primary" @click="printTicket" class="action-btn">
            <v-icon left>mdi-printer</v-icon>
            ພິມບິນ
          </v-btn>
          <v-btn outlined @click="dialogTicketDetail = false" class="action-btn">
            <v-icon left>mdi-close</v-icon>
            ປິດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- ENHANCED MAIN CONTENT -->
    <v-card class="main-card">
      <!-- Enhanced Filters Section -->
      <v-card-title class="filter-section pa-6">
        <v-container fluid>
          <v-row>
            <!-- Date Range Filters -->
            <v-col cols="12" md="6">
              <div class="filter-group">
                <h4 class="filter-title white--text mb-3">
                  <v-icon left color="white">mdi-calendar-range</v-icon>
                  ຊ່ວງເວລາ
                </h4>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-menu
                      ref="menu1"
                      v-model="menu1"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dateFormatted"
                          label="ຈາກວັນທີ"
                          hint="MM/DD/YYYY"
                          persistent-hint
                          prepend-icon="mdi-calendar-start"
                          outlined
                          dense
                          background-color="white"
                          v-bind="attrs"
                          @blur="date = parseDate(dateFormatted)"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        color="primary"
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dateFormatted2"
                          label="ຫາວັນທີ"
                          hint="MM/DD/YYYY"
                          persistent-hint
                          prepend-icon="mdi-calendar-end"
                          outlined
                          dense
                          background-color="white"
                          v-bind="attrs"
                          @blur="date2 = parseDate(dateFormatted2)"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date2"
                        no-title
                        color="primary"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <!-- Search and Status Filters -->
            <v-col cols="12" md="6">
              <div class="filter-group">
                <h4 class="filter-title white--text mb-3">
                  <v-icon left color="white">mdi-filter</v-icon>
                  ຟິລເຕີ
                </h4>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="search"
                      prepend-icon="mdi-magnify"
                      label="ຊອກຫາ"
                      outlined
                      dense
                      clearable
                      background-color="white"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="statusFilter"
                      :items="statusOptions"
                      label="ສະຖານະການຈ່າຍເງິນ"
                      prepend-icon="mdi-credit-card-check"
                      outlined
                      dense
                      clearable
                      background-color="white"
                      @change="loadData"
                    ></v-select>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>

          <!-- Action Buttons -->
          <v-row class="mt-3">
            <v-col cols="12">
              <div class="d-flex flex-wrap">
                <v-btn
                  class="ma-2"
                  color="white"
                  @click="loadData"
                  rounded
                  elevation="2"
                >
                  <v-icon left color="primary">mdi-refresh</v-icon>
                  <span class="primary--text font-weight-bold">ດຶງລາຍງານ</span>
                </v-btn>
                <v-btn
                  class="ma-2"
                  color="success"
                  @click="exportToExcel"
                  rounded
                  elevation="2"
                  dark
                >
                  <v-icon left>mdi-microsoft-excel</v-icon>
                  Excel
                </v-btn>
                <v-btn
                  class="ma-2"
                  color="info"
                  @click="exportSimplePDFAudit"
                  rounded
                  elevation="2"
                  dark
                >
                  <v-icon left>mdi-file-pdf</v-icon>
                  PDF Audit
                </v-btn>
                <v-btn
                  class="ma-2"
                  color="secondary"
                  @click="printSummaryReport"
                  rounded
                  elevation="2"
                  dark
                >
                  <v-icon left>mdi-printer</v-icon>
                  ພິມລາຍງານ
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Enhanced Summary Dashboard -->
      <v-card-text class="pa-6">
        <!-- Key Metrics Cards -->
        <v-row class="mb-6">
          <v-col cols="12">
            <h3 class="dashboard-title">
              <v-icon left color="primary">mdi-chart-box</v-icon>
              ສະຫຼຸບລາຍງານ
            </h3>
          </v-col>
        </v-row>

        <v-row class="mb-6">
          <v-col cols="12" md="4">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="primary">
                    <v-icon size="32" color="white">mdi-receipt-text</v-icon>
                  </v-avatar>
                </div>
                <div class=" primary--text font-weight-bold mb-2">
                  {{ ticketsSummary.totalTickets }}
                </div>
                <div class=" font-weight-medium mb-1">ຈຳນວນບິນທັງໝົດ</div>
                <div class=" grey--text">ໃນຊ່ວງເວລາທີ່ເລືອກ</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="success">
                    <v-icon size="32" color="white">mdi-check-circle</v-icon>
                  </v-avatar>
                </div>
                <div class=" success--text font-weight-bold mb-2">
                  {{ ticketsSummary.paidTickets }}
                </div>
                <div class=" font-weight-medium mb-1">ບິນທີ່ຊຳລະແລ້ວ</div>
                <div class=" grey--text">
                  {{ ticketsSummary.totalTickets > 0 ? 
                    ((ticketsSummary.paidTickets / ticketsSummary.totalTickets) * 100).toFixed(1) : 0 
                  }}% ຂອງທັງໝົດ
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="secondary">
                    <v-icon size="32" color="white">mdi-currency-usd</v-icon>
                  </v-avatar>
                </div>
                <div class=" secondary--text font-weight-bold mb-2">
                  {{ formatCurrency(ticketsSummary.totalRevenue) }}
                </div>
                <div class=" font-weight-medium mb-1">ລາຍຮັບລວມ</div>
                <div class=" grey--text">LAK</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Enhanced Payment Type Summary -->
        <div v-if="paymentTypeSummary.length > 0" class="mt-8">
          <v-row>
            <v-col cols="12">
              <h3 class="dashboard-title">
                <v-icon left color="secondary">mdi-credit-card-multiple</v-icon>
                ສະຫຼຸບຕາມປະເພດການຊຳລະ
              </h3>
            </v-col>
          </v-row>
          
          <v-row class="mt-4">
            <v-col
              v-for="(payment, index) in paymentTypeSummary"
              :key="payment.code"
              cols="12"
              sm="6"
              lg="3"
            >
              <v-card 
                class="payment-card" 
                elevation="6"
                shaped
                @click="filterByPaymentType(payment.code)"
                :ripple="true"
              >
                <v-card-text class="pa-4">
                  <div class="d-flex justify-space-between align-center mb-3">
                    <v-avatar 
                      :color="getPaymentCardVuetifyColor(index)" 
                      size="40"
                    >
                      <v-icon color="white" size="20">
                        {{ getPaymentIcon(payment.payment_code || payment.code) }}
                      </v-icon>
                    </v-avatar>
                    <v-chip 
                      :color="getPaymentCardVuetifyColor(index)" 
                      small 
                      dark
                      label
                    >
                      {{ payment.count }} ບິນ
                    </v-chip>
                  </div>
                  <div class="payment-card-content mb-3">
                    <div class=" font-weight-medium mb-1">
                      {{ payment.name || payment.code }}
                    </div>
                    <div class=" font-weight-bold primary--text">
                      {{ numberWithCommas(payment.amount) }}
                    </div>
                    <div class=" grey--text">LAK</div>
                  </div>
                  <v-progress-linear
                    :value="(payment.amount / ticketsSummary.totalRevenue) * 100"
                    :color="getPaymentCardVuetifyColor(index)"
                    height="6"
                    rounded
                    class="mb-2"
                  ></v-progress-linear>
                  <div class="text-center  grey--text">
                    {{ ((payment.amount / ticketsSummary.totalRevenue) * 100).toFixed(1) }}% ຂອງທັງໝົດ
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Enhanced Product Summary -->
        <div v-if="productSummary.length > 0" class="mt-8">
          <v-row>
            <v-col cols="12">
              <h3 class="dashboard-title">
                <v-icon left color="lightprimary">mdi-chart-bar</v-icon>
                ສິນຄ້າຂາຍດີ
              </h3>
            </v-col>
          </v-row>

          <v-card elevation="6" shaped>
            <v-card-title class="primary white--text">
              <v-icon left color="white">mdi-trophy</v-icon>
              <span>ອັນດັບສິນຄ້າຂາຍດີ</span>
              <v-spacer></v-spacer>
              <v-chip color="white" small label text-color="primary">
                <v-icon left small color="primary">mdi-package</v-icon>
                {{ productSummary.length }} ລາຍການ
              </v-chip>
            </v-card-title>

            <v-card-text class="pa-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr class="grey lighten-4">
                      <th class="text-center">ອັນດັບ</th>
                      <th class="text-left">ສິນຄ້າ</th>
                      <th class="text-center">ຈຳນວນ</th>
                      <th class="text-right">ຍອດຂາຍ</th>
                      <th class="text-center">ເປີເຊັນ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(product, index) in productSummary.slice(0, showAllProducts ? productSummary.length : 10)"
                      :key="product.id"
                      class="product-row"
                      :class="{ 'grey lighten-5': index % 2 === 0 }"
                    >
                      <td class="text-center">
                        <v-avatar
                          :color="getProductRankVuetifyColor(index)"
                          size="32"
                        >
                          <span class="white--text font-weight-bold">{{ index + 1 }}</span>
                        </v-avatar>
                      </td>
                      <td class="text-left">
                        <div class="font-weight-medium">{{ product.name }}</div>
                      </td>
                      <td class="text-center">
                        <v-chip color="primary" small dark outlined>
                          {{ product.quantity }}
                        </v-chip>
                      </td>
                      <td class="text-right">
                        <span class="font-weight-bold">{{ numberWithCommas(product.total) }}</span>
                      </td>
                      <td class="text-center">
                        <v-progress-circular
                          :value="(product.total / ticketsSummary.totalRevenue) * 100"
                          size="32"
                          width="4"
                          :color="getProductRankVuetifyColor(index)"
                        >
                          <span class="caption font-weight-bold">
                            {{ ((product.total / ticketsSummary.totalRevenue) * 100).toFixed(0) }}
                          </span>
                        </v-progress-circular>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <div v-if="productSummary.length > 10" class="text-center pa-4">
                <v-btn
                  text
                  color="primary"
                  @click="showAllProducts = !showAllProducts"
                  class="font-weight-medium"
                >
                  {{ showAllProducts ? 'ເບິ່ງໜ້ອຍ' : `ເບິ່ງທັງໝົດ (${productSummary.length})` }}
                  <v-icon>{{ showAllProducts ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>

      <!-- Enhanced Data Table -->
      <v-data-table
        v-if="filteredTickets"
        :headers="headers"
        :search="search"
        :items="filteredTickets"
        :items-per-page="25"
        class="tickets-table elevation-0"
        :loading="isloading"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
      >
        <template v-slot:top>
          <div class="table-toolbar pa-4">
            <h3 class="table-title">
              <v-icon left>mdi-table</v-icon>
              ລາຍການບິນທີ່ຟິລເຕີ
            </h3>
            <v-spacer></v-spacer>
            <v-chip color="primary" outlined>
              {{ filteredTickets.length }} ລາຍການ
            </v-chip>
          </div>
        </template>

        <!-- Enhanced table slots with better styling -->
        <template v-slot:[`item.createdAt`]="{ item }">
          <v-chip color="info" small dark>
            <v-icon left small>mdi-clock</v-icon>
            {{ formatDateTime(item.createdAt) }}
          </v-chip>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" small dark class="status-chip">
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <template v-slot:[`item.paymentStatus`]="{ item }">
          <v-chip :color="getPaymentStatusColor(item.paymentStatus)" small dark class="payment-status-chip">
            {{ getPaymentStatusText(item.paymentStatus) }}
          </v-chip>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="total-amount">{{ numberWithCommas(item.total) }}</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="action-buttons">
            <v-btn icon small color="info" @click="viewTicketDetail(item)" class="action-btn">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon small color="primary" @click="printSingleTicket(item)" class="action-btn">
              <v-icon>mdi-printer</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Hidden print area -->
    <div id="printArea" style="display: none">
      <div id="ticketPrint"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ticketPrinter } from '~/utils/ticketPrinter'
import {
  swalSuccess,
  swalError2,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common/index'

export default {
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      dialogTicketDetail: false,
      selectedTicket: {},
      isloading: false,
      search: '',
      ticketsList: [],
      statusFilter: 'paid',
      showAllProducts: false,

      statusOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ຈ່າຍແລ້ວ', value: 'paid' },
        { text: 'ຍັງບໍ່ຈ່າຍ', value: 'pending' },
        { text: 'ຍົກເລີກ', value: 'cancel' },
        { text: 'ຄືນເງິນ', value: 'refunded' },
      ],

      headers: [
        {
          text: 'ເລກບິນ',
          align: 'center',
          value: 'ticketNumber',
          sortable: true,
        },
        {
          text: 'ວັນທີ-ເວລາ',
          align: 'center',
          value: 'createdAt',
          sortable: true,
        },
        {
          text: 'ສະຖານະ',
          align: 'center',
          value: 'status',
          sortable: true,
        },
        {
          text: 'ການຊຳລະ',
          align: 'center',
          value: 'paymentStatus',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ໂຕະ',
          align: 'center',
          value: 'table.name',
          sortable: true,
        },
        {
          text: 'ລາຄາລວມ',
          align: 'right',
          value: 'total',
          sortable: true,
        },
        {
          text: 'ການດຳເນີນການ',
          align: 'center',
          value: 'actions',
          sortable: false,
        },
      ],

      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },

  async created() {
    await this.loadData()
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },

  computed: {
    ...mapGetters([
      'findAllTerminal',
      'findSelectedTerminal',
      'currentSelectedLocation',
      'findAllLocation',
    ]),

    user() {
      return this.$auth.user || ''
    },

    filteredTickets() {
      if (!this.statusFilter) {
        return this.ticketsList
      }
      return this.ticketsList.filter(
        (ticket) => ticket.paymentStatus === this.statusFilter
      )
    },

    ticketsSummary() {
      const summary = {
        totalTickets: this.ticketsList.length,
        paidTickets: this.ticketsList.filter((t) => t.paymentStatus === 'paid').length,
        totalRevenue: this.ticketsList
          .filter((t) => t.paymentStatus === 'paid')
          .reduce((sum, ticket) => sum + parseFloat(ticket.total || 0), 0),
      }
      return summary
    },

    paymentTypeSummary() {
      const paidTickets = this.ticketsList.filter((t) => t.paymentStatus === 'paid')
      const paymentSummary = {}

      paidTickets.forEach((ticket) => {
        const paymentType = ticket.payment?.payment_name || 'ບໍ່ລະບຸ'
        const paymentCode = ticket.payment?.payment_code || 'UNKNOWN'

        if (!paymentSummary[paymentCode]) {
          paymentSummary[paymentCode] = {
            name: paymentType,
            code: paymentCode,
            count: 0,
            amount: 0,
          }
        }

        paymentSummary[paymentCode].count += 1
        paymentSummary[paymentCode].amount += parseFloat(ticket.total || 0)
      })

      return Object.values(paymentSummary).sort((a, b) => b.amount - a.amount)
    },

    productSummary() {
      const paidTickets = this.ticketsList.filter((t) => t.paymentStatus === 'paid')
      const productSummary = {}

      paidTickets.forEach((ticket) => {
        if (ticket.ticketLines && ticket.ticketLines.length > 0) {
          ticket.ticketLines.forEach((line) => {
            const productName = line.product?.pro_name || 'ບໍ່ລະບຸ'
            const productId = line.product?.id || 'unknown'

            if (!productSummary[productId]) {
              productSummary[productId] = {
                name: productName,
                id: productId,
                quantity: 0,
                total: 0,
              }
            }

            productSummary[productId].quantity += parseInt(line.quantity || 0)
            productSummary[productId].total += parseFloat(line.totalPrice || 0)
          })
        }
      })

      return Object.values(productSummary).sort((a, b) => b.total - a.total)
    },
  },

  methods: {
    // Payment filter methods
    filterByPaymentType(paymentCode) {
      // Toggle behavior - if already selected, clear filter
      if (this.statusFilter === paymentCode) {
        this.statusFilter = null
      } else {
        // Find the corresponding status filter value
        const paymentMapping = {
          'CASH': 'paid',
          'QR': 'paid', 
          'TRANSFER': 'paid',
          'CARD': 'paid'
        }
        this.statusFilter = paymentMapping[paymentCode] || 'paid'
      }
      this.loadData()
    },

    // Enhanced export methods
    exportSimplePDFAudit() {
      try {
        const categoryCount = {}
        this.filteredTickets.forEach((ticket) => {
          ticket.ticketLines?.forEach((line) => {
            const category = line.product?.category?.categ_name || 'Unknown'
            categoryCount[category] = (categoryCount[category] || 0) + 1
          })
        })

        const auditData = {
          dateRange: `${this.dateFormatted} - ${this.dateFormatted2}`,
          totalTickets: this.filteredTickets.length,
          paidTickets: this.ticketsSummary.paidTickets,
          totalItems: this.productSummary.reduce((sum, p) => sum + p.quantity, 0),
          categoryCount,
          paymentTypeSummary: this.paymentTypeSummary,
          productSummary: this.productSummary.slice(0, 10),
          statusBreakdown: this.getTicketStatusBreakdown(),
        }

        ticketPrinter.printAudit(auditData)
        this.$toast.success('PDF audit report generated!')
      } catch (error) {
        console.error(error)
        this.$toast.error('Failed to generate audit.')
      }
    },

    getTicketStatusBreakdown() {
      const statusBreakdown = {}
      this.filteredTickets.forEach((ticket) => {
        const status = this.getPaymentStatusText(ticket.paymentStatus)
        statusBreakdown[status] = (statusBreakdown[status] || 0) + 1
      })
      return Object.entries(statusBreakdown).map(([name, count]) => ({ name, count }))
    },

    async loadData() {
      this.isloading = true
      try {
        const params = {
          startDate: this.date,
          endDate: this.date2,
          include: 'client,table,ticketLines,payment',
          locationId: this.currentSelectedLocation['id'] || 1,
        }

        const response = await this.$axios.get('api/ticket/find', { params })
        this.ticketsList = response.data.data || response.data || []
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could not load ticket data: ' + error.message)
        this.ticketsList = []
      }
      this.isloading = false
    },

    viewTicketDetail(ticket) {
      this.selectedTicket = ticket
      this.dialogTicketDetail = true
    },

    printSingleTicket(ticket) {
      this.selectedTicket = ticket
      this.printTicket()
    },

    printTicket() {
      ticketPrinter.printSingle(this.selectedTicket, {
        formatDateTime: this.formatDateTime,
        numberWithCommas: this.numberWithCommas,
      })
    },

    printSummaryReport() {
      const data = {
        startDate: this.dateFormatted,
        endDate: this.dateFormatted2,
        summary: this.ticketsSummary,
        paymentSummary: this.paymentTypeSummary,
        productSummary: this.productSummary.slice(0, 10),
        tickets: this.filteredTickets,
        formatDateTime: this.formatDateTime,
        numberWithCommas: this.numberWithCommas,
      }
      ticketPrinter.printSummary(data)
    },

    exportToExcel() {
      const tickets = this.filteredTickets

      const paymentSummaryData = this.paymentTypeSummary.map((payment) => ({
        ປະເພດການຊຳລະ: payment.name,
        ຈຳນວນບິນ: payment.count,
        ຍອດເງິນ: payment.amount,
      }))

      const productSummaryData = this.productSummary.map((product, index) => ({
        ອັນດັບ: index + 1,
        ສິນຄ້າ: product.name,
        ຈຳນວນ: product.quantity,
        ຍອດຂາຍ: product.total,
        ເປີເຊັນ: ((product.total / this.ticketsSummary.totalRevenue) * 100).toFixed(1) + '%',
      }))

      const ticketsData = tickets.map((ticket) => ({
        ເລກບິນ: ticket.ticketNumber,
        ວັນທີ: this.formatDateTime(ticket.createdAt),
        ສະຖານະ: this.getStatusText(ticket.status),
        ລູກຄ້າ: ticket.client?.name || 'ບໍ່ລະບຸ',
        ໂຕະ: ticket.table?.name || 'ບໍ່ລະບຸ',
        ລາຄາລວມ: ticket.total,
      }))

      const workbook = this.$xlsx.utils.book_new()
      const paymentSummarySheet = this.$xlsx.utils.json_to_sheet(paymentSummaryData)
      this.$xlsx.utils.book_append_sheet(workbook, paymentSummarySheet, 'Payment Summary')

      const productSummarySheet = this.$xlsx.utils.json_to_sheet(productSummaryData)
      this.$xlsx.utils.book_append_sheet(workbook, productSummarySheet, 'Product Summary')

      const ticketsSheet = this.$xlsx.utils.json_to_sheet(ticketsData)
      this.$xlsx.utils.book_append_sheet(workbook, ticketsSheet, 'Ticket Details')

      this.$xlsx.writeFile(workbook, `ticket_report_${this.date}_${this.date2}.xlsx`)
    },

    // Helper methods for Vuetify theme colors
    getPaymentCardVuetifyColor(index) {
      const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
      return colors[index % colors.length]
    },

    getProductRankVuetifyColor(index) {
      if (index === 0) return 'success'  // Gold equivalent
      if (index === 1) return 'secondary' // Silver equivalent  
      if (index === 2) return 'warning'  // Bronze equivalent
      if (index < 5) return 'primary'    // Top 5
      return 'info'                      // Others
    },

    formatCurrency(amount) {
      if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + 'M'
      } else if (amount >= 1000) {
        return (amount / 1000).toFixed(1) + 'K'
      }
      return this.numberWithCommas(amount)
    },

    // Payment filter methods
    getPaymentIcon(paymentCode) {
      const iconMap = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        BANK: 'mdi-bank-transfer',
        QR: 'mdi-qrcode',
        TRANSFER: 'mdi-bank-transfer',
        UNKNOWN: 'mdi-help-circle',
      }
      return iconMap[paymentCode] || 'mdi-currency-usd'
    },

    getPaymentCardColor(index) {
      const colors = ['teal', 'orange', 'purple', 'pink', 'cyan', 'indigo', 'deep-orange', 'light-green']
      return colors[index % colors.length]
    },

    getPaymentCardIconColor(index) {
      return 'white'
    },

    getProductRankColor(index) {
      if (index === 0) return 'amber'
      if (index === 1) return 'grey'
      if (index === 2) return 'deep-orange'
      if (index < 5) return 'blue'
      return 'teal'
    },

    // Helper methods
    formatDateTime(dateStr) {
      if (!dateStr) return '-'
      const date = new Date(dateStr)
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    getStatusText(status) {
      const statusMap = {
        pending: 'ລໍຖ້າ',
        preparing: 'ກຳລັງກະກຽມ',
        ready: 'ພ້ອມແລ້ວ',
        served: 'ສົ່ງແລ້ວ',
        paid: 'ຊຳລະແລ້ວ',
        cancel: 'ຍົກເລີກ',
        void: 'ບັດເຖິງ',
      }
      return statusMap[status] || status
    },

    getPaymentStatusText(status) {
      const statusMap = {
        pending: 'ຍັງບໍ່ຊຳລະ',
        paid: 'ຊຳລະແລ້ວ',
        refunded: 'ຄືນເງິນ',
        cancel: 'ຍົກເລີກ',
      }
      return statusMap[status] || status
    },

    getStatusColor(status) {
      const colorMap = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'purple',
        served: 'teal',
        paid: 'green',
        cancel: 'red',
        void: 'grey',
      }
      return colorMap[status] || 'grey'
    },

    getPaymentStatusColor(status) {
      const colorMap = {
        pending: 'orange',
        paid: 'green',
        refunded: 'blue',
        cancel: 'red',
      }
      return colorMap[status] || 'grey'
    },

    numberWithCommas(value) {
      return getFormatNum(value)
    },

    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },
}
</script>

<style scoped>
/* Enhanced Typography for Vuetify 2 + Nuxt 2 */
.sales-report-container {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 16px;
}

/* Header Section */
.header-section {
  margin-bottom: 24px;
}

.header-chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.header-chip {
  font-size: 16px !important;
  font-weight: 600 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.header-chip:hover {
  transform: translateY(-2px);
}

/* Main Card */
.main-card {
  border-radius: 8px !important;
  overflow: hidden;
}

/* Filter Section */
.filter-section {
  background-color: var(--v-primary-base) !important;
  color: white !important;
}

.filter-group {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.filter-title {
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

/* Dashboard Styling */
.dashboard-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

/* Metrics Cards */
.metric-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.metric-card:hover {
  transform: translateY(-4px);
}

/* Payment Cards */
.payment-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 2px solid transparent;
}

.payment-card:hover {
  transform: translateY(-4px);
  border-color: var(--v-primary-base);
}

/* Product Table */
.product-row {
  transition: background-color 0.2s ease;
}

.product-row:hover {
  background-color: var(--v-grey-lighten4) !important;
}

/* Enhanced Table */
.tickets-table {
  border-radius: 0 0 8px 8px;
  overflow: hidden;
}

.table-toolbar {
  background: var(--v-grey-lighten4);
  border-bottom: 1px solid var(--v-grey-lighten2);
  display: flex;
  align-items: center;
}

.table-title {
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.status-chip,
.payment-status-chip {
  font-weight: 600 !important;
}

.total-amount {
  font-weight: 600;
  font-size: 1rem;
}

.action-buttons {
  display: flex;
  gap: 4px;
}

.action-btn {
  transition: all 0.2s ease;
}

.action-btn:hover {
  transform: scale(1.1);
}

/* Ticket Detail Dialog */
.ticket-detail-card {
  border-radius: 8px !important;
  overflow: hidden;
}

.ticket-header {
  background-color: var(--v-primary-base) !important;
  color: white !important;
}

.detail-section {
  background: var(--v-grey-lighten4);
  border-radius: 8px;
  padding: 20px;
  height: 100%;
}

.section-title {
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.detail-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.detail-label {
  font-weight: 600;
  color: var(--v-grey-darken2);
}

.detail-value {
  font-weight: 600;
}

.items-section {
  margin-top: 24px;
}

.table-header th {
  background: var(--v-primary-base) !important;
  color: white !important;
  font-weight: 600;
  padding: 12px;
}

.table-row {
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background-color: var(--v-grey-lighten5) !important;
}

.product-name {
  font-weight: 600;
}

.price-cell,
.total-cell {
  font-weight: 600;
}

.summary-card {
  background: var(--v-grey-lighten4) !important;
  border-radius: 8px !important;
}

.summary-section {
  padding: 16px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-weight: 500;
}

.summary-line.discount {
  color: var(--v-success-base);
}

.summary-line.total {
  font-size: 1.125rem;
  font-weight: 700;
  border-top: 2px solid var(--v-grey-lighten2);
  padding-top: 12px;
  margin-top: 8px;
}

.amount {
  font-weight: 600;
}

.total-amount {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--v-primary-base) !important;
}

.action-btn {
  font-weight: 600;
  text-transform: none;
  border-radius: 4px;
  padding: 8px 24px;
  margin-left: 8px;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 960px) {
  .header-chips-container {
    flex-direction: column;
  }
  
  .header-chip {
    justify-content: center;
  }
  
  .filter-group {
    margin-bottom: 16px;
  }
}

@media (max-width: 600px) {
  .sales-report-container {
    padding: 8px;
  }
  
  .main-card {
    border-radius: 4px !important;
  }
  
  .metric-card {
    border-radius: 4px !important;
  }
  
  .detail-section {
    padding: 16px;
  }
  
  .detail-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}

/* Animation Classes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.metric-card,
.payment-card {
  animation: fadeInUp 0.6s ease-out;
}

.metric-card:nth-child(1) { animation-delay: 0.1s; }
.metric-card:nth-child(2) { animation-delay: 0.2s; }
.metric-card:nth-child(3) { animation-delay: 0.3s; }

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .sales-report-container {
    background: white;
    padding: 0;
  }
  
  .main-card {
    box-shadow: none;
    border: 1px solid #ccc;
  }
}

/* Vuetify 2 Compatibility */
.text-h5,
.grey {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
}

table {
  border: 1px solid var(--v-grey-lighten2);
}
</style>