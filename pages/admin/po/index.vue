<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-shopping</v-icon>
        <h3>ລາຍການບິນສັ່ງຊື້</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon start>mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Dialogs -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <v-card class="loading-card" color="primary" dark>
        <v-card-text class="text-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="white"
            indeterminate
            class="mb-4"
          />
          <div class="text-h6">Loading...</div>
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
    
    <v-dialog v-model="dialog" fullscreen>
      <PurchasingFormCRUD
        @reload="loadTxn(); dialog = false"
        :key="apFormKey"
        :is-update="isEdit"
        :headerId="selectedId"
        @close-dialog="dialog = false"
      />
    </v-dialog>

    <v-dialog v-model="receivingDialog" width="90%">
      <ReceivingFormCRUD 
        :POTransaction="currentPO" 
        sourceAPLID="PO" 
        @close="triggerDialog" 
        :key="apFormKey"
        @close-dialog="receivingDialog = false" 
        @reload="loadTxn"
      />
    </v-dialog>

    <!-- Main Content -->
    <div>
      <v-card class="purchasing-dashboard">
        <v-card-title class="header-section primary white--text">
          <v-layout row wrap>
            <v-col cols="12" md="6">
              <div class="d-flex align-center">
                <v-icon large color="white" class="mr-3">mdi-clipboard-list</v-icon>
                <div>
                  <h2 class="text-h5 mb-0">Purchase Orders Dashboard</h2>
                  <div class=" opacity-80">Manage your purchase orders</div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="text-md-right">
              <v-btn @click="triggerDialog" color="white" large outlined>
                <v-icon left>mdi-plus</v-icon>
                New Purchase Order
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>

        <v-card-text class="pa-6">
          <!-- Enhanced Filter Section -->
          <v-card class="filter-card mb-6" elevation="2">
            <v-card-title class="text-h6 pb-2">
              <v-icon left color="primary">mdi-filter</v-icon>
              Filters & Search
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="3">
                  <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                      transition="scale-transition" offset-y max-width="290px" min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ: / From Date" 
                              hint="MM/DD/YYYY format"
                              persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                              @blur="date = parseDate(dateFormatted)" v-on="on" outlined dense></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                
                <v-col cols="12" md="3">
                  <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                      transition="scale-transition" offset-y max-width="290px" min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ: / To Date" 
                              hint="MM/DD/YYYY format"
                              persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                              @blur="date2 = parseDate(dateFormatted2)" v-on="on" outlined dense></v-text-field>
                      </template>
                      <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                
                <v-col cols="12" md="3">
                  <v-text-field v-model="search" append-icon="mdi-magnify" label="Search / ຊອກຫາ" 
                      single-line hide-details outlined dense />
                </v-col>
                
                <v-col cols="12" md="3">
                  <v-select
                    v-model="selectedStatusFilter"
                    :items="statusFilterOptions"
                    item-text="label"
                    item-value="value"
                    label="ກັ່ນຕອງຕາມສະຖານະ"
                    clearable
                    prepend-icon="mdi-filter"
                    outlined
                    dense
                    @change="applyStatusFilter"
                  />
                </v-col>
              </v-row>
              
              <v-row class="mt-3">
                <v-col cols="12" class="text-center">
                  <v-btn @click="loadTxn" color="primary" large rounded>
                    <v-icon left>mdi-refresh</v-icon>
                    Refresh Data / ດຶງລາຍງານ
                  </v-btn>
                  <v-btn @click="printPurchaseReport" color="success" large rounded class="ml-3">
                    <v-icon left>mdi-printer</v-icon>
                    Print Report / ພິມລາຍງານ
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- Purchase Order Summary Cards -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="mb-3">
                <v-icon left>mdi-chart-pie</v-icon>
                ສະຫຼຸບສະຖິຕິການສັ່ງຊື້
              </h3>
            </v-col>
          </v-row>

          <v-row>
            <!-- Total Orders Card -->
            <v-col cols="6" lg="3">
              <v-card class="summary-card pa-4 text-center" color="primary" dark elevation="4">
                <v-icon size="48" class="mb-3">mdi-file-document-multiple</v-icon>
                <h3 class=" font-weight-bold mb-2">{{ totalOrders }}</h3>
                <div class="text-subtitle-1">ໃບສັ່ງຊື້ທັງໝົດ</div>
                <div class="text-h5 font-weight-bold mt-2">{{ formatCurrency(totalOrderValue) }}</div>
                <div class="">ມູນຄ່າລວມ</div>
              </v-card>
            </v-col>

            <!-- Status Summary Cards -->
            <v-col cols="6" lg="9">
              <v-row>
                <v-col 
                  v-for="statusStat in statusStatistics" 
                  :key="statusStat.status"
                  cols="6" 
                  md="4" 
                  lg="3"
                >
                  <v-card 
                    outlined 
                    class="status-summary-card pa-3 text-center elevation-2"
                    :class="{ 'selected-status': selectedStatusFilter === statusStat.status }"
                    @click="filterByStatus(statusStat.status)"
                    style="cursor: pointer; transition: all 0.2s ease;"
                  >
                    <v-icon 
                      :color="statusStat.color" 
                      size="32" 
                      class="mb-2"
                    >
                      {{ statusStat.icon }}
                    </v-icon>
                    
                    <h3 :class="`${statusStat.color}--text mb-1`">
                      {{ formatNumber(statusStat.amount) }} LAK
                    </h3>
                    
                    <div class="text--secondary mb-1">
                      {{ statusStat.label }}
                    </div>
                    
                    <v-chip 
                      :color="statusStat.color" 
                      small 
                      outlined
                      class="font-weight-bold"
                    >
                      {{ statusStat.count }} ລາຍການ
                    </v-chip>
                    
                    <div class="mt-2">
                      <v-progress-linear
                        :value="statusStat.percentage"
                        :color="statusStat.color"
                        height="4"
                        rounded
                      ></v-progress-linear>
                      <div class=" mt-1">
                        {{ statusStat.percentage.toFixed(1) }}% ຂອງຍອດລວມ
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Currency Summary -->
          <v-row class="mt-4">
            <v-col cols="12">
              <v-card class="currency-summary-card" elevation="2">
                <v-card-title class="secondary white--text">
                  <v-icon left color="white">mdi-currency-usd</v-icon>
                  Currency Summary / ສະຫຼຸບຕາມສະກຸນເງິນ
                </v-card-title>
                <v-card-text class="pa-0" v-if="purchaseCurrencyGrouping.length > 0">
                  <v-simple-table>
                    <thead>
                      <tr>
                        <th class="text-left">Currency / ສະກຸນເງິນ</th>
                        <th class="text-center">Orders / ຈຳນວນໃບສັ່ງ</th>
                        <th class="text-right">Total Amount / ລວມຍອດ</th>
                        <th class="text-center">Percentage / ເປີເຊັນ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="currency in purchaseCurrencyGrouping" :key="currency.code">
                        <td>
                          <v-chip color="primary" outlined small class="font-weight-bold">
                            {{ currency.code }}
                          </v-chip>
                        </td>
                        <td class="text-center">
                          <v-chip color="info" small outlined>
                            {{ currency.count }} ລາຍການ
                          </v-chip>
                        </td>
                        <td class="text-right font-weight-bold text-h6">
                          {{ numberWithCommas(currency.amount) }}
                        </td>
                        <td class="text-center">
                          <v-progress-circular
                            :value="currency.percentage"
                            :color="getCurrencyColor(currency.code)"
                            size="40"
                            width="4"
                          >
                            <small>{{ currency.percentage.toFixed(0) }}%</small>
                          </v-progress-circular>
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Order Timeline Analysis -->
          <v-row class="mt-4">
            <v-col cols="12">
              <v-card outlined class="pa-4">
                <h4 class="mb-3">
                  <v-icon left>mdi-chart-timeline</v-icon>
                  ການວິເຄາະໄລຍະເວລາ
                </h4>
                <v-row>
                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="success--text">{{ pendingOrdersCount }}</h2>
                      <div class="text-subtitle-2">ລໍຖ້າອະນຸມັດ</div>
                      <v-progress-circular
                        :value="pendingOrdersPercentage"
                        color="orange"
                        size="60"
                        width="4"
                      >
                        <small>{{ pendingOrdersPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>
                  
                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="primary--text">{{ approvedOrdersCount }}</h2>
                      <div class="text-subtitle-2">ໄດ້ຮັບອະນຸມັດ</div>
                      <v-progress-circular
                        :value="approvedOrdersPercentage"
                        color="green"
                        size="60"
                        width="4"
                      >
                        <small>{{ approvedOrdersPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <h2 class="info--text">{{ receivedOrdersCount }}</h2>
                      <div class="text-subtitle-2">ຮັບເຄື່ອງແລ້ວ</div>
                      <v-progress-circular
                        :value="receivedOrdersPercentage"
                        color="success"
                        size="60"
                        width="4"
                      >
                        <small>{{ receivedOrdersPercentage.toFixed(0) }}%</small>
                      </v-progress-circular>
                    </div>
                  </v-col>

                  <v-col cols="6" md="3">
                    <div class="text-center">
                      <v-btn
                        outlined
                        color="primary"
                        @click="filterByStatus('Pending Approval')"
                        class="mb-2"
                        block
                        small
                      >
                        <v-icon left small>mdi-clock-alert</v-icon>
                        ສະແດງລໍຖ້າອະນຸມັດ
                      </v-btn>
                      
                      <v-btn
                        outlined
                        color="success"
                        @click="filterByStatus('Approved')"
                        class="mb-2"
                        block
                        small
                      >
                        <v-icon left small>mdi-check-circle</v-icon>
                        ສະແດງອະນຸມັດແລ້ວ
                      </v-btn>

                      <v-btn
                        outlined
                        color="grey"
                        @click="clearStatusFilter"
                        block
                        small
                      >
                        <v-icon left small>mdi-filter-off</v-icon>
                        ສະແດງທັງໝົດ
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>

        <!-- Enhanced Purchase Orders Table -->
        <v-data-table 
          v-if="txnList" 
          :headers="enhancedHeaders" 
          :search="search" 
          :items="filteredPurchaseOrders"
          :loading="isloading"
          loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
          class="elevation-1"
          :items-per-page="10"
        >
          <template v-slot:top>
            <div class="pa-3" v-if="selectedStatusFilter">
              <v-alert 
                type="info"
                dense 
                text 
                dismissible
                @input="clearStatusFilter"
              >
                <v-icon left>mdi-filter</v-icon>
                ກຳລັງສະແດງ: {{ getFilterDisplayName(selectedStatusFilter) }}
                ({{ filteredPurchaseOrders.length }} ລາຍການ)
              </v-alert>
            </div>
          </template>

          <!-- Status Column -->
          <template v-slot:[`item.status`]="{ item }">
            <v-chip 
              small 
              :color="getStatusColor(item.status)"
              :outlined="item.status === 'Draft'"
            >
              <v-icon left small>{{ getStatusIcon(item.status) }}</v-icon>
              {{ item.status }}
            </v-chip>
          </template>

          <!-- Date Column -->
          <template v-slot:[`item.bookingDate`]="{ item }">
            <v-chip 
              color="info" 
              small 
              dark 
            >
              <v-icon left small>mdi-calendar</v-icon>
              {{ item.bookingDate }}
            </v-chip>
          </template>

          <!-- Currency Column -->
          <template v-slot:[`item.currency.code`]="{ item }">
            <v-chip small color="secondary" outlined>
              {{ item.currency?.code || 'N/A' }}
            </v-chip>
          </template>

          <!-- Exchange Rate Column -->
          <template v-slot:[`item.exchangeRate`]="{ item }">
            <span class="font-weight-medium">
              {{ numberWithCommas(item.exchangeRate) }}
            </span>
          </template>

          <!-- Total Column -->
          <template v-slot:[`item.total`]="{ item }">
            <div class="total-display">
              <span class="text-h6 font-weight-bold success--text">
                {{ numberWithCommas(item.total) }}
              </span>
            </div>
          </template>

          <!-- Actions Column -->
          <template v-slot:[`item.function`]="{ item }">
            <div class="action-buttons">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    color="primary" 
                    icon 
                    small
                    @click="editItem(item)"
                    v-bind="attrs" 
                    v-on="on"
                  >
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Edit Purchase Order</span>
              </v-tooltip>
              
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    color="info" 
                    icon 
                    small
                    @click="printPurchaseOrder(item)"
                    v-bind="attrs" 
                    v-on="on"
                    :loading="printingId === item.id"
                  >
                    <v-icon small>mdi-printer</v-icon>
                  </v-btn>
                </template>
                <span>Print Purchase Order</span>
              </v-tooltip>
              
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    color="orange" 
                    icon 
                    small
                    @click="viewItem(item)"
                    v-bind="attrs" 
                    v-on="on"
                  >
                    <v-icon small>mdi-eye</v-icon>
                  </v-btn>
                </template>
                <span>View Details</span>
              </v-tooltip>
            </div>
          </template>

          <!-- Receive Goods Column -->
          <template v-slot:[`item.postReceiving`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  color="success" 
                  icon 
                  small
                  @click="receive(item)"
                  :disabled="!canReceiveGoods(item)"
                  v-bind="attrs" 
                  v-on="on"
                >
                  <v-icon small>mdi-check</v-icon>
                </v-btn>
              </template>
              <span>{{ canReceiveGoods(item) ? 'Receive Goods' : 'Cannot Receive' }}</span>
            </v-tooltip>
          </template>

          <!-- No Data State -->
          <template v-slot:no-data>
            <div class="text-center pa-8">
              <v-icon size="64" color="grey lighten-2">mdi-file-document-outline</v-icon>
              <div class="text-h6 mt-4 grey--text">No Purchase Orders Found</div>
              <div class="text-body-2 grey--text mb-4">Create your first purchase order to get started</div>
              <v-btn color="primary" @click="triggerDialog">
                <v-icon left>mdi-plus</v-icon>
                Create Purchase Order
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import PurchasingFormCRUD from '~/components/PurchasingFormCRUD.vue'
import ReceivingFormCRUD from '~/components/ReceivingFormCRUD.vue'
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'

export default {
    name: 'EnhancedPurchasingDashboard',
    components: { 
        PurchasingFormCRUD,
        ReceivingFormCRUD 
    },
    mounted() {
        this.loadTxn()
    },
    data() {
        return {
            userId: "",
            search: "",
            isEdit: false,
            dialog: false,
            receivingDialog: false,
            guidelineDialog: false,
            apFormKey: 1,
            isloading: false,
            printingId: null,
            menu1: false,
            menu2: false,
            txnList: [],
            selectedId: '',
            selectedStatusFilter: null,
            enhancedHeaders: [
                {
                    text: 'PO ID',
                    align: 'center',
                    value: 'id',
                    sortable: true,
                    width: 100
                },
                {
                    text: 'Date / ວັນທີ',
                    align: 'center',
                    value: 'bookingDate',
                    sortable: true,
                    width: 120
                },
                { 
                    text: 'Notes / ເນື້ອໃນ', 
                    align: 'left', 
                    value: 'notes',
                    width: 200
                },
                { 
                    text: 'Supplier / ຜູ້ຂາຍ', 
                    align: 'left', 
                    value: 'supplier.company',
                    width: 200
                },
                { 
                    text: 'Currency / ສະກຸນ', 
                    align: 'center', 
                    value: 'currency.code',
                    width: 100
                },
                { 
                    text: 'Rate / ອັດຕາແລກປ່ຽນ', 
                    align: 'right', 
                    value: 'exchangeRate',
                    width: 120
                },
                { 
                    text: 'Total / ຍອດລວມ', 
                    align: 'right', 
                    value: 'total',
                    width: 150
                },
                { 
                    text: 'Status / ສະຖານະ', 
                    align: 'center', 
                    value: 'status',
                    width: 120
                },
                { 
                    text: 'Created / ເວລາສ້າງ', 
                    align: 'center', 
                    value: 'createdAt',
                    width: 150
                },
                {
                    text: 'Actions / ຈັດການ',
                    align: 'center',
                    value: 'function',
                    sortable: false,
                    width: 150
                },
                {
                    text: 'Receive / ຮັບເຄື່ອງ',
                    align: 'center',
                    value: 'postReceiving',
                    sortable: false,
                    width: 100
                },
            ],
            date: getFirstDayOfMonth(),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            dateFormatted: this.formatDate(
                getFirstDayOfMonth()
            ),
            dateFormatted2: this.formatDate(
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
            ),
        }
    },
    computed: {
        currentPO() {
            return this.txnList.find(el => el.id == this.selectedId)
        },

        filteredPurchaseOrders() {
            if (!this.selectedStatusFilter) {
                return this.txnList
            }
            return this.txnList.filter(item => item.status === this.selectedStatusFilter)
        },

        totalOrders() {
            return this.txnList.length
        },

        totalOrderValue() {
            return this.txnList.reduce((sum, order) => sum + (order.total || 0), 0)
        },

        statusStatistics() {
            const stats = {}
            let totalAmount = 0

            this.txnList.forEach(item => {
                const status = item.status || 'Draft'
                const amount = item.total || 0

                if (!stats[status]) {
                    stats[status] = {
                        status: status,
                        label: this.getStatusLabel(status),
                        amount: 0,
                        count: 0,
                        color: this.getStatusColor(status),
                        icon: this.getStatusIcon(status)
                    }
                }
                stats[status].amount += amount
                stats[status].count += 1
                totalAmount += amount
            })

            Object.values(stats).forEach(stat => {
                stat.percentage = totalAmount > 0 ? (stat.amount / totalAmount) * 100 : 0
            })

            return Object.values(stats).sort((a, b) => b.amount - a.amount)
        },

        statusFilterOptions() {
            const options = [{ label: 'ທັງໝົດ', value: null }]
            
            // Add unique statuses from data
            const statuses = [...new Set(this.txnList.map(item => item.status).filter(Boolean))]
            statuses.forEach(status => {
                options.push({
                    label: this.getStatusLabel(status),
                    value: status
                })
            })
            
            return options
        },

        purchaseCurrencyGrouping() {
            const sumByCurrency = {}
            let totalAmount = 0

            this.txnList.forEach(transaction => {
                const { total, currency } = transaction
                const currencyCode = currency?.code || 'LAK'
                
                if (!sumByCurrency[currencyCode]) {
                    sumByCurrency[currencyCode] = {
                        code: currencyCode,
                        amount: 0,
                        count: 0
                    }
                }
                sumByCurrency[currencyCode].amount += total || 0
                sumByCurrency[currencyCode].count += 1
                totalAmount += total || 0
            })

            Object.values(sumByCurrency).forEach(currency => {
                currency.percentage = totalAmount > 0 ? (currency.amount / totalAmount) * 100 : 0
            })

            return Object.values(sumByCurrency).sort((a, b) => b.amount - a.amount)
        },

        pendingOrdersCount() {
            return this.txnList.filter(item => item.status === 'Pending Approval').length
        },

        approvedOrdersCount() {
            return this.txnList.filter(item => item.status === 'Approved').length
        },

        receivedOrdersCount() {
            return this.txnList.filter(item => 
                item.status === 'Fully Received' || item.status === 'Partially Received'
            ).length
        },

        pendingOrdersPercentage() {
            return this.totalOrders > 0 ? (this.pendingOrdersCount / this.totalOrders) * 100 : 0
        },

        approvedOrdersPercentage() {
            return this.totalOrders > 0 ? (this.approvedOrdersCount / this.totalOrders) * 100 : 0
        },

        receivedOrdersPercentage() {
            return this.totalOrders > 0 ? (this.receivedOrdersCount / this.totalOrders) * 100 : 0
        }
    },
    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date)
            this.loadTxn()
        },
        date2(val) {
            this.dateFormatted2 = this.formatDate(this.date2)
            this.loadTxn()
        },
    },
    methods: {
        numberWithCommas(value) {
            return getFormatNum(value)
        },

        formatNumber(val) {
            return new Intl.NumberFormat().format(val || 0)
        },

        formatCurrency(amount) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'LAK',
                minimumFractionDigits: 0,
            }).format(amount || 0)
        },

        triggerDialog() {
            this.apFormKey += 1
            this.selectedId = null
            this.isEdit = false
            this.dialog = true
        },

        editItem(item) {
            console.log(`PO HEADER ID ${item.id}`)
            this.selectedId = item.id
            this.isEdit = true
            this.apFormKey += 1
            this.dialog = true
        },

        viewItem(item) {
            console.log(`Viewing PO HEADER ID ${item.id}`)
            this.selectedId = item.id
            this.isEdit = true
            this.apFormKey += 1
            this.dialog = true
        },

        receive(item) {
            console.log(`PO HEADER ID ${item.id}`)
            this.selectedId = item.id
            this.isEdit = true
            this.apFormKey += 1
            this.receivingDialog = true
        },

        // Print functionality
        async printPurchaseOrder(item) {
            console.log(`Printing PO HEADER ID ${item.id}`)
            this.printingId = item.id
            
            try {
                const response = await this.$axios.get(`/api/purchasing/find/${item.id}`)
                const poData = response.data
                this.createAndPrintPurchaseOrder(poData)
            } catch (error) {
                console.error('Error printing purchase order:', error)
                swalError2(this.$swal, 'Error', 'Failed to print purchase order')
            } finally {
                this.printingId = null
            }
        },

        createAndPrintPurchaseOrder(poData) {
            try {
                const poHTML = this.generatePurchaseOrderHTML(poData)
                const printWindow = window.open('', '_blank', 'width=800,height=600')
                
                if (!printWindow) {
                    swalError2(this.$swal, 'Error', 'Unable to open print window.')
                    return
                }
                
                printWindow.document.open()
                printWindow.document.write(poHTML)
                printWindow.document.close()
                
                printWindow.onload = function() {
                    setTimeout(() => {
                        try {
                            printWindow.print()
                            setTimeout(() => printWindow.close(), 100)
                        } catch (e) {
                            console.error('Print error:', e)
                            printWindow.close()
                        }
                    }, 500)
                }
            } catch (error) {
                console.error('Error creating print PO:', error)
                swalError2(this.$swal, 'Error', 'Failed to generate purchase order for printing')
            }
        },

        generatePurchaseOrderHTML(header) {
            const formatNumber = (val) => new Intl.NumberFormat().format(val || 0)
            const linesHTML = header.lines?.map((line, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${line.product?.pro_name || 'Unknown Product'}</td>
                    <td>${formatNumber(line.quantity)}</td>
                    <td>${line.unit?.name || 'Unit'}</td>
                    <td>${formatNumber(line.unitPrice)}</td>
                    <td>${formatNumber(line.total)}</td>
                </tr>
            `).join('') || '<tr><td colspan="6">No items</td></tr>'
            
            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Purchase Order #${header.id}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .total { text-align: right; font-weight: bold; }
        @media print { body { margin: 0; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>PURCHASE ORDER</h1>
        <h2>PO #${header.id}</h2>
    </div>
    
    <table>
        <tr><td><strong>Supplier:</strong> ${header.supplier?.company || 'N/A'}</td></tr>
        <tr><td><strong>Date:</strong> ${header.bookingDate}</td></tr>
        <tr><td><strong>Status:</strong> ${header.status}</td></tr>
    </table>
    
    <table>
        <thead>
            <tr>
                <th>No.</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Unit Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            ${linesHTML}
        </tbody>
    </table>
    
    <div class="total">
        <h3>Total: ${formatNumber(header.total)} ${header.currency?.code || 'LAK'}</h3>
    </div>
</body>
</html>
            `
        },

        printPurchaseReport() {
            try {
                const reportHTML = this.generatePurchaseReportHTML()
                const printWindow = window.open('', '_blank', 'width=800,height=600')
                
                if (!printWindow) {
                    swalError2(this.$swal, 'Error', 'Unable to open print window.')
                    return
                }
                
                printWindow.document.open()
                printWindow.document.write(reportHTML)
                printWindow.document.close()
                
                printWindow.onload = function() {
                    setTimeout(() => {
                        try {
                            printWindow.print()
                            setTimeout(() => printWindow.close(), 100)
                        } catch (e) {
                            console.error('Print error:', e)
                            printWindow.close()
                        }
                    }, 500)
                }
            } catch (error) {
                console.error('Error printing report:', error)
                swalError2(this.$swal, 'Error', 'Failed to print report')
            }
        },

        generatePurchaseReportHTML() {
            const formatNumber = (val) => new Intl.NumberFormat().format(val || 0)
            
            const statusSummaryHTML = this.statusStatistics.map(stat => `
                <tr>
                    <td>${stat.label}</td>
                    <td style="text-align: center;">${stat.count}</td>
                    <td style="text-align: right;">${formatNumber(stat.amount)}</td>
                    <td style="text-align: center;">${stat.percentage.toFixed(1)}%</td>
                </tr>
            `).join('')

            const currencySummaryHTML = this.purchaseCurrencyGrouping.map(currency => `
                <tr>
                    <td>${currency.code}</td>
                    <td style="text-align: center;">${currency.count}</td>
                    <td style="text-align: right;">${formatNumber(currency.amount)}</td>
                    <td style="text-align: center;">${currency.percentage.toFixed(1)}%</td>
                </tr>
            `).join('')
            
            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Purchase Orders Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .period { background: #f5f5f5; padding: 10px; margin-bottom: 20px; text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; font-weight: bold; }
        .section-title { background: #2196F3; color: white; padding: 10px; margin: 20px 0 10px 0; }
        .summary-box { background: #e3f2fd; padding: 15px; margin-bottom: 20px; border-radius: 5px; }
        @media print { body { margin: 0; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>Purchase Orders Summary Report</h1>
        <h2>ລາຍງານສະຫຼຸບການສັ່ງຊື້</h2>
    </div>
    
    <div class="period">
        <strong>Period:</strong> ${this.dateFormatted} - ${this.dateFormatted2}
    </div>
    
    <div class="summary-box">
        <h3>Overview / ພາບລວມ</h3>
        <p><strong>Total Purchase Orders:</strong> ${this.totalOrders}</p>
        <p><strong>Total Value:</strong> ${formatNumber(this.totalOrderValue)} LAK</p>
        <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
    </div>
    
    <div class="section-title">Status Summary / ສະຫຼຸບຕາມສະຖານະ</div>
    <table>
        <thead>
            <tr>
                <th>Status</th>
                <th style="text-align: center;">Count</th>
                <th style="text-align: right;">Amount (LAK)</th>
                <th style="text-align: center;">Percentage</th>
            </tr>
        </thead>
        <tbody>
            ${statusSummaryHTML}
        </tbody>
    </table>
    
    <div class="section-title">Currency Summary / ສະຫຼຸບຕາມສະກຸນເງິນ</div>
    <table>
        <thead>
            <tr>
                <th>Currency</th>
                <th style="text-align: center;">Orders</th>
                <th style="text-align: right;">Amount</th>
                <th style="text-align: center;">Percentage</th>
            </tr>
        </thead>
        <tbody>
            ${currencySummaryHTML}
        </tbody>
    </table>
    
    <div style="margin-top: 50px; text-align: center; color: #666;">
        <p>Generated on ${new Date().toLocaleString()}</p>
    </div>
</body>
</html>
            `
        },

        // Filter methods
        filterByStatus(status) {
            if (this.selectedStatusFilter === status) {
                this.clearStatusFilter()
            } else {
                this.selectedStatusFilter = status
                this.applyStatusFilter()
            }
        },

        applyStatusFilter() {
            console.log('Applied status filter:', this.selectedStatusFilter)
        },

        clearStatusFilter() {
            this.selectedStatusFilter = null
        },

        getFilterDisplayName(filterValue) {
            return this.getStatusLabel(filterValue)
        },

        // Status and color methods
        getStatusLabel(status) {
            const statusLabels = {
                'Draft': 'ຮ່າງ',
                'Pending Approval': 'ລໍຖ້າອະນຸມັດ',
                'Approved': 'ໄດ້ຮັບອະນຸມັດ',
                'Sent to Supplier': 'ສົ່ງໃຫ້ຜູ້ຂາຍ',
                'Partially Received': 'ຮັບບາງສ່ວນ',
                'Fully Received': 'ຮັບຄົບ',
                'Cancelled': 'ຍົກເລີກ'
            }
            return statusLabels[status] || status
        },

        getStatusColor(status) {
            const colorMap = {
                'Draft': 'grey',
                'Pending Approval': 'orange',
                'Approved': 'green',
                'Sent to Supplier': 'blue',
                'Partially Received': 'purple',
                'Fully Received': 'success',
                'Cancelled': 'error'
            }
            return colorMap[status] || 'grey'
        },

        getStatusIcon(status) {
            const iconMap = {
                'Draft': 'mdi-file-document-edit',
                'Pending Approval': 'mdi-clock-alert',
                'Approved': 'mdi-check-circle',
                'Sent to Supplier': 'mdi-truck-delivery',
                'Partially Received': 'mdi-package-down',
                'Fully Received': 'mdi-package-check',
                'Cancelled': 'mdi-cancel'
            }
            return iconMap[status] || 'mdi-help-circle'
        },

        getCurrencyColor(currencyCode) {
            const colors = ['primary', 'success', 'warning', 'error', 'info']
            const index = currencyCode.charCodeAt(0) % colors.length
            return colors[index]
        },

        canReceiveGoods(item) {
            const receivableStatuses = ['Approved', 'Sent to Supplier', 'Partially Received']
            return receivableStatuses.includes(item.status)
        },

        // Date methods
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

        // Load data
        async loadTxn() {
            this.isloading = true
            try {
                const date = {
                    startDate: this.date,
                    endDate: this.date2,
                }
                const response = await this.$axios.get("/api/purchasing/findByDate", { params: { date } })
                this.txnList = []
                for (const iterator of response.data) {
                    iterator['bookingDate'] = iterator['bookingDate'].split('T')[0]
                    this.txnList.push(iterator)
                }
                console.log("====> " + this.txnList.length + " purchase orders loaded")
            } catch (error) {
                console.error('Error loading transactions:', error)
                swalError2(this.$swal, 'Error', 'Failed to load purchase orders')
            } finally {
                this.isloading = false
            }
        }
    }
}
</script>

<style scoped>
/* Global font family for all elements */
* {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.purchasing-dashboard {
  border-radius: 16px !important;
  overflow: hidden;
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.header-section {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken2) 100%);
  border-radius: 0 !important;
  padding: 24px !important;
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.header-section h2,
.header-section .text-h5,
.header-section . {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.loading-card {
  border-radius: 16px !important;
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.filter-card {
  border-radius: 12px !important;
  border: 1px solid rgba(var(--v-primary-base), 0.1);
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.filter-card .v-card-title,
.filter-card .v-text-field,
.filter-card .v-select,
.filter-card .v-btn {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.summary-card {
  border-radius: 12px !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.summary-card h3,
.summary-card .,
.summary-card .text-h5,
.summary-card .text-subtitle-1,
.summary-card . {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.summary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.currency-summary-card {
  border-radius: 12px !important;
  border: 1px solid rgba(var(--v-secondary-base), 0.1);
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.currency-summary-card .v-card-title,
.currency-summary-card th,
.currency-summary-card td {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.status-summary-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.status-summary-card h3,
.status-summary-card .text--secondary,
.status-summary-card .v-chip,
.status-summary-card . {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.status-summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.status-summary-card.selected-status {
  border: 3px solid #1976d2 !important;
  box-shadow: 0 0 0 1px rgba(25, 118, 210, 0.3);
}

.action-buttons {
  display: flex;
  gap: 4px;
  justify-content: center;
}

.total-display {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
  background: linear-gradient(135deg, rgba(var(--v-success-base), 0.1) 0%, rgba(var(--v-success-base), 0.05) 100%);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 4px solid var(--v-success-base);
  display: inline-block;
  min-width: 120px;
}

.total-display .text-h6 {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.purchasing-dashboard {
  animation: fadeInUp 0.5s ease-out;
}

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

.action-buttons .v-btn {
  transition: all 0.2s ease;
}

.action-buttons .v-btn:hover {
  transform: scale(1.1);
}

.status-summary-card .v-icon {
  margin-bottom: 8px;
}

.status-summary-card h3 {
  font-weight: 600;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.status-summary-card .v-progress-linear {
  border-radius: 4px;
}

/* Data Table styling with Noto Sans Lao */
.v-data-table th,
.v-data-table td {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

.v-data-table .v-chip {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Button styling */
.v-btn {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Input fields styling */
.v-text-field,
.v-text-field input,
.v-text-field label,
.v-select,
.v-select .v-select__selection,
.v-autocomplete {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Card titles and text */
.v-card-title,
.v-card-text,
.text-h6,
.text-h5,
.,
.text-h3,
.text-subtitle-1,
.text-subtitle-2,
.,
.text-body-1,
.text-body-2 {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Alert styling */
.v-alert {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Progress circular text */
.v-progress-circular small {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Tooltips */
.v-tooltip .v-tooltip__content {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Dialog content */
.v-dialog .v-card {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Table content in simple table */
.v-simple-table th,
.v-simple-table td,
.v-simple-table thead tr,
.v-simple-table tbody tr {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

/* Timeline analysis section */
.text-center h2,
.text-center .text-subtitle-2 {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}

@media (max-width: 768px) {
  .header-section .v-layout {
    flex-direction: column;
  }
  
  .header-section .text-md-right {
    text-align: center !important;
    margin-top: 16px;
  }
  
  .action-buttons {
    flex-direction: column;
    gap: 8px;
  }

  .status-summary-card {
    margin-bottom: 16px;
  }
  
  .status-summary-card h3 {
    font-size: 1.2rem;
    font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
  }
}

/* Ensure all child elements inherit the font */
.purchasing-dashboard * {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', 'Lao UI', 'Arial', sans-serif !important;
}
</style>