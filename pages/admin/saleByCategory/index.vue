<template>
  <div class="report-container">
    <!-- Loading Overlay -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator />
    </v-dialog>

    <!-- Header Section -->
    <v-card outlined class="rounded-lg mb-6 header-bar">
      <v-card-title class="pa-4 d-flex align-center grey lighten-5">
        <v-avatar color="primary lighten-5" size="48" class="mr-4">
          <v-icon color="primary">mdi-shape-outline</v-icon>
        </v-avatar>
        <div class="d-flex flex-column">
          <span class="text-h6 font-weight-bold grey--text text--darken-3">Category Sales Report</span>
          <span class="caption grey--text">ລາຍງານຍອດຂາຍ ຕາມປະເພດສິນຄ້າ</span>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-btn color="info" dark class="mr-2 action-btn" small depressed @click="printA4">
            <v-icon left small>mdi-printer</v-icon>
            ພິມ A4 (Print)
          </v-btn>
          <v-btn color="success" dark class="mr-2 action-btn" small depressed @click="exportToExcel">
            <v-icon left small>mdi-microsoft-excel</v-icon>
            Export Excel
          </v-btn>
          <v-btn color="primary" :loading="isloading" class="action-btn" small depressed @click="loadData">
            <v-icon left small>mdi-refresh</v-icon>
            ດຶງລາຍງານ
          </v-btn>
        </div>
      </v-card-title>
    </v-card>

    <!-- Date Filters Card -->
    <v-card outlined class="rounded-lg mb-6">
      <v-card-text class="pa-4 grey lighten-4">
        <v-row dense class="align-center">
          <v-col cols="12" md="3">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
              <template #activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ (From Date)" prepend-inner-icon="mdi-calendar-start" v-bind="attrs" outlined dense hide-details readonly class="white-input" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title color="primary" @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
              <template #activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ (To Date)" prepend-inner-icon="mdi-calendar-end" v-bind="attrs" outlined dense hide-details readonly class="white-input" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title color="primary" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="search" label="ຄົ້ນຫາ ປະເພດ/ສິນຄ້າ..." prepend-inner-icon="mdi-magnify" outlined dense hide-details clearable class="white-input"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- KPI Summary and Chart Section -->
    <v-row class="mb-6">
      <!-- KPI Stats List -->
      <v-col cols="12" md="6">
        <v-row dense>
          <!-- Total Categories Card -->
          <v-col cols="12" sm="6">
            <v-card outlined class="metric-card pa-4 rounded-lg h-100 border-left-primary">
              <div class="d-flex align-center justify-space-between mb-2">
                <span class="grey--text font-weight-bold text-caption text-uppercase">ໝວດໝູ່ທີ່ຂາຍໄດ້</span>
                <v-avatar color="primary lighten-5" size="36">
                  <v-icon color="primary" small>mdi-shape</v-icon>
                </v-avatar>
              </div>
              <div class="text-h5 font-weight-black mb-1">{{ activeCategoryList.length }}</div>
              <div class="text-caption grey--text">ໝວດໝູ່ທັງໝົດໃນໄລຍະນີ້</div>
            </v-card>
          </v-col>

          <!-- Total QTY Card -->
          <v-col cols="12" sm="6">
            <v-card outlined class="metric-card pa-4 rounded-lg h-100 border-left-secondary">
              <div class="d-flex align-center justify-space-between mb-2">
                <span class="grey--text font-weight-bold text-caption text-uppercase">ຈຳນວນສິນຄ້າທັງໝົດ</span>
                <v-avatar color="secondary lighten-5" size="36">
                  <v-icon color="secondary" small>mdi-cart-arrow-down</v-icon>
                </v-avatar>
              </div>
              <div class="text-h5 font-weight-black mb-1">{{ formatNum(totalQTY) }}</div>
              <div class="text-caption grey--text">ຈຳນວນຊິ້ນທີ່ຂາຍອອກ</div>
            </v-card>
          </v-col>

          <!-- Net Revenue Card -->
          <v-col cols="12" sm="6">
            <v-card outlined class="metric-card pa-4 rounded-lg h-100 border-left-success">
              <div class="d-flex align-center justify-space-between mb-2">
                <span class="grey--text font-weight-bold text-caption text-uppercase">ຍອດຂາຍສຸດທິ</span>
                <v-avatar color="success lighten-5" size="36">
                  <v-icon color="success" small>mdi-cash-multiple</v-icon>
                </v-avatar>
              </div>
              <div class="text-h5 font-weight-black mb-1 success--text">{{ formatNum(totalRevenue) }} ₭</div>
              <div class="text-caption grey--text">ຄຳນວນໃນສະກຸນເງິນ LAK</div>
            </v-card>
          </v-col>

          <!-- Top Selling Category Card -->
          <v-col cols="12" sm="6">
            <v-card outlined class="metric-card pa-4 rounded-lg h-100 border-left-warning">
              <div class="d-flex align-center justify-space-between mb-2">
                <span class="grey--text font-weight-bold text-caption text-uppercase">ໝວດໝູ່ຂາຍດີສຸດ</span>
                <v-avatar color="warning lighten-5" size="36">
                  <v-icon color="warning" small>mdi-trophy-outline</v-icon>
                </v-avatar>
              </div>
              <div class="text-subtitle-1 font-weight-black mb-1 text-truncate warning--text" style="max-width: 190px;">
                {{ topCategoryName }}
              </div>
              <div class="text-caption grey--text">ມູນຄ່າ: {{ formatNum(topCategoryRevenue) }} ₭</div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Pie Chart of Top Categories -->
      <v-col cols="12" md="6">
        <v-card outlined class="rounded-lg h-100 d-flex flex-column">
          <v-card-title class="subtitle-2 font-weight-bold py-3 grey lighten-5">
            <v-icon left small color="primary">mdi-chart-pie</v-icon>
            ອັດຕາສ່ວນຍອດຂາຍຕາມປະເພດ (Top 5 Categories)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="flex-grow-1 d-flex align-center justify-center pa-4">
            <client-only>
              <div v-if="activeCategoryList.length > 0" class="w-100" style="max-width: 100%;">
                <apexchart type="donut" height="240" :options="chartOptions" :series="chartSeries"></apexchart>
              </div>
              <div v-else class="text-center grey--text">
                <v-icon size="48" color="grey lighten-2">mdi-chart-donut</v-icon>
                <div class="mt-2">ບໍ່ມີຂໍ້ມູນສະແດງໃນຕາຕະລາງ</div>
              </div>
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Categories Data Table -->
    <v-card outlined class="rounded-lg shadow-sm">
      <v-card-title class="pa-4 grey lighten-5 font-weight-bold d-flex align-center">
        <v-icon left color="primary" small>mdi-format-list-bulleted</v-icon>
        ລາຍລະອຽດຍອດຂາຍ ຕາມປະເພດສິນຄ້າ
        <v-spacer></v-spacer>
        <v-chip color="primary lighten-5" small label text-color="primary" class="font-weight-bold">
          ທັງໝົດ {{ activeCategoryList.length }} ປະເພດ
        </v-chip>
      </v-card-title>
      <v-divider></v-divider>

      <v-data-table
        v-if="activeCategoryList"
        :headers="headers"
        :items="activeCategoryList"
        :search="search"
        show-expand
        single-expand
        item-key="categoryId"
        class="compact-table"
        :items-per-page="15"
      >
        <!-- Expanded Category Products Slot -->
        <template #expanded-item="{ headers: tableHeaders, item }">
          <td :colspan="tableHeaders.length" class="expanded-row-cell pa-4">
            <v-card flat outlined class="rounded-lg">
              <v-card-title class="subtitle-2 font-weight-bold py-2 px-4 grey lighten-4 d-flex align-center">
                <v-icon left small color="secondary">mdi-cube-outline</v-icon>
                ລາຍການສິນຄ້າໃນໝວດ: {{ item.categoryName }} ({{ item.products.length }} ລາຍການ)
              </v-card-title>
              <v-divider></v-divider>
              <v-data-table
                :headers="productHeaders"
                :items="item.products"
                dense
                hide-default-footer
                :items-per-page="-1"
                class="inner-table"
              >
                <!-- Formatting values inside nested table -->
                <template #[`item.totalQTY`]="{ item: prodItem }">
                  <v-chip x-small color="grey lighten-3" class="font-weight-bold text--darken-3" label>{{ formatNum(prodItem.totalQTY) }}</v-chip>
                </template>
                <template #[`item.avgPrice`]="{ item: prodItem }">
                  <span>{{ formatNum(Math.round(prodItem.totalPriceLocal / prodItem.totalQTY)) }} ₭</span>
                </template>
                <template #[`item.totalAmountLocal`]="{ item: prodItem }">
                  <span class="secondary--text font-weight-bold">{{ formatNum(Math.round(prodItem.totalAmountLocal)) }} ₭</span>
                </template>
              </v-data-table>
            </v-card>
          </td>
        </template>

        <!-- Main Categories formatting -->
        <template #[`item.uniqueProductsCount`]="{ item }">
          <v-chip small color="info lighten-5" class="info--text font-weight-bold" label>{{ item.uniqueProductsCount }} ລາຍການ</v-chip>
        </template>
        <template #[`item.totalQTY`]="{ item }">
          <span class="font-weight-bold">{{ formatNum(item.totalQTY) }}</span>
        </template>
        <template #[`item.totalAmountLocal`]="{ item }">
          <span class="primary--text font-weight-black">{{ formatNum(Math.round(item.totalAmountLocal)) }} ₭</span>
        </template>

        <template #no-data>
          <div class="empty-state pa-8 text-center">
            <v-icon size="64" color="grey lighten-3" class="mb-2">mdi-database-off</v-icon>
            <h3 class="text-subtitle-1 grey--text">ບໍ່ພົບຂໍ້ມູນການຂາຍ</h3>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  swalError2,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common/index'
import { mainCompanyInfo } from '~/common/api'
import { generateCategorySalesReportHTML } from '~/common/printTemplates'

export default {
  middleware: 'auths',
  data() {
    return {
      isloading: false,
      search: '',
      categoryList: [],
      orderHeaderList: [],
      headers: [
        { text: 'ລະຫັດໝວດໝູ່ (ID)', align: 'center', value: 'categoryId', sortable: true, class: 'table-header' },
        { text: 'ຊື່ໝວດໝູ່ (Category Name)', align: 'left', value: 'categoryName', sortable: true, class: 'table-header' },
        { text: 'ຈຳນວນສິນຄ້າທີ່ຂາຍ', align: 'center', value: 'uniqueProductsCount', sortable: true, class: 'table-header' },
        { text: 'ຈຳນວນຂາຍລວມ (Qty)', align: 'end', value: 'totalQTY', sortable: true, class: 'table-header' },
        { text: 'ຍອດຂາຍລວມ (Revenue LAK)', align: 'end', value: 'totalAmountLocal', sortable: true, class: 'table-header' },
        { text: 'ລາຍລະອຽດ', value: 'data-table-expand', class: 'table-header' },
      ],
      productHeaders: [
        { text: 'ID ສິນຄ້າ', value: 'productId', align: 'center', class: 'subtable-header' },
        { text: 'ຊື່ສິນຄ້າ (Product Name)', value: 'productName', align: 'left', class: 'subtable-header' },
        { text: 'ຈຳນວນຂາຍ (QTY)', value: 'totalQTY', align: 'center', class: 'subtable-header' },
        { text: 'ລາຄາສະເລ່ຍ (Avg Price)', value: 'avgPrice', align: 'right', class: 'subtable-header' },
        { text: 'ຍອດຂາຍລວມ (Total Sales)', value: 'totalAmountLocal', align: 'right', class: 'subtable-header' },
      ],
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: '',
      dateFormatted2: '',
      menu1: false,
      menu2: false,
    }
  },

  computed: {
    ...mapGetters([
      'findAllCurrency',
      'currentSelectedLocation',
      'findAllProduct',
    ]),

    localCurrency() {
      return this.findAllCurrency?.find(c => c.isLocalCCY === true || c.isLocalCCY === 1);
    },

    categoryMapLookup() {
      const map = new Map();
      if (Array.isArray(this.categoryList)) {
        this.categoryList.forEach(c => {
          const id = c.categ_id ?? c.id;
          if (id !== undefined && id !== null && id !== -1 && id !== '-1') {
            map.set(String(id), c);
            map.set(Number(id), c);
          }
        });
      }
      return map;
    },

    activeCategoryList() {
      const categoryMap = {};

      this.orderHeaderList.forEach((order) => {
        if (!order.isActive) return;
        if (order.status?.toLowerCase() === 'cancel' || order.status?.toLowerCase() === 'canceled') return;

        order.lines?.forEach((line) => {
          const product = line.product || this.findAllProduct?.find(p => String(p.id) === String(line.productId) || String(p.pro_id) === String(line.productId));
          if (!product && !line.productId) return;

          const { categoryId, categoryName, categoryObj } = this.getCategoryForProduct(product, line);

          const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
          const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
          const rate = isLocal ? 1 : (line.exchangeRate || 1);

          const qty = Number(line.quantity) || 0;
          const lineTotal = ((Number(line.price) || 0) * qty) * rate;
          const lineDiscount = (Number(line.discount) || 0) * rate;
          const lineAmount = (Number(line.total) || 0) * rate;

          if (!categoryMap[categoryId]) {
            categoryMap[categoryId] = {
              categoryId,
              categoryName,
              category: categoryObj,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
              productsMap: {}
            };
          }

          const cat = categoryMap[categoryId];
          cat.totalQTY += qty;
          cat.totalPriceLocal += lineTotal;
          cat.totalDiscountLocal += lineDiscount;
          cat.totalAmountLocal += lineAmount;

          const productId = product?.id || product?.pro_id || line.productId || 'unknown';
          const productName = product?.pro_name || product?.name || line.pro_name || 'ບໍ່ມີຊື່';

          if (!cat.productsMap[productId]) {
            cat.productsMap[productId] = {
              productId,
              productName,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
            };
          }

          const prod = cat.productsMap[productId];
          prod.totalQTY += qty;
          prod.totalPriceLocal += lineTotal;
          prod.totalDiscountLocal += lineDiscount;
          prod.totalAmountLocal += lineAmount;
        });
      });

      const result = Object.values(categoryMap).map((cat) => {
        const productsList = Object.values(cat.productsMap).sort((a, b) => b.totalQTY - a.totalQTY);
        const searchIndex = `${cat.categoryId} ${cat.categoryName} ${productsList.map(p => `${p.productId} ${p.productName}`).join(' ')}`.toLowerCase();
        return {
          ...cat,
          products: productsList,
          uniqueProductsCount: productsList.length,
          searchIndex
        };
      }).sort((a, b) => b.totalAmountLocal - a.totalAmountLocal);

      return result;
    },

    totalQTY() {
      return this.activeCategoryList.reduce((sum, c) => sum + c.totalQTY, 0);
    },

    totalRevenue() {
      return this.activeCategoryList.reduce((sum, c) => sum + c.totalAmountLocal, 0);
    },

    topCategory() {
      if (this.activeCategoryList.length === 0) return null;
      return this.activeCategoryList[0];
    },

    topCategoryName() {
      return this.topCategory ? this.topCategory.categoryName : 'N/A';
    },

    topCategoryRevenue() {
      return this.topCategory ? this.topCategory.totalAmountLocal : 0;
    },

    // Chart configs
    chartOptions() {
      return {
        chart: {
          type: 'donut',
          height: 250,
          toolbar: { show: false },
          fontFamily: 'Noto Sans Lao, sans-serif'
        },
        labels: this.topCategories.map(c => c.categoryName),
        dataLabels: { enabled: true },
        stroke: { show: true, width: 2, colors: ['#ffffff'] },
        plotOptions: {
          pie: {
            donut: {
              size: '60%',
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'ຍອດຂາຍລວມ',
                  formatter: () => this.formatNum(Math.round(this.totalRevenue)) + ' ₭'
                }
              }
            }
          }
        },
        legend: {
          position: 'right',
          fontSize: '11px',
          markers: { radius: 12 }
        },
        tooltip: {
          y: {
            formatter: (val) => `${this.formatNum(val)} ₭`
          }
        },
        colors: ['#01532B', '#337555', '#80a995', '#F59E0B', '#3B82F6', '#8B5CF6', '#EC4899']
      }
    },

    chartSeries() {
      return this.topCategories.map(c => Math.round(c.totalAmountLocal));
    },

    topCategories() {
      const sorted = [...this.activeCategoryList];
      if (sorted.length <= 5) return sorted;

      const top5 = sorted.slice(0, 5);
      const othersAmt = sorted.slice(5).reduce((sum, c) => sum + c.totalAmountLocal, 0);
      const othersQty = sorted.slice(5).reduce((sum, c) => sum + c.totalQTY, 0);

      top5.push({
        categoryName: 'ອື່ນໆ (Others)',
        totalAmountLocal: othersAmt,
        totalQTY: othersQty
      });
      return top5;
    }
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
    currentSelectedLocation() {
      this.loadData()
    }
  },

  async created() {
    this.dateFormatted = this.formatDate(this.date)
    this.dateFormatted2 = this.formatDate(this.date2)
    await Promise.all([
      this.loadCategories(),
      this.loadData()
    ])
  },

  methods: {
    formatNum(val) {
      return getFormatNum(val)
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

    getCategoryForProduct(product, line) {
      let prod = product;
      const pId = prod?.id || prod?.pro_id || line?.productId;
      if ((!prod || (!prod.pro_category && !prod.category && !prod.categ_id)) && this.findAllProduct?.length && pId) {
        const matched = this.findAllProduct.find(p => String(p.id) === String(pId) || String(p.pro_id) === String(pId));
        if (matched) {
          prod = { ...matched, ...(prod || {}) };
        }
      }

      if (!prod) {
        return {
          categoryId: 'uncategorized',
          categoryName: 'ບໍ່ມີໝວດໝູ່ (No Category)',
          categoryObj: null,
        };
      }

      // Check direct product category fields: pro_category, categoryCategId, categoryId, category_id, etc.
      const catId = prod.pro_category ??
        prod.categoryCategId ??
        prod.categoryId ??
        prod.category_id ??
        prod.categ_id ??
        (prod.category ? (prod.category.categ_id ?? prod.category.id) : null);

      let categoryId = 'uncategorized';
      let categoryName = 'ບໍ່ມີໝວດໝູ່ (No Category)';
      let categoryObj = null;

      if (catId !== null && catId !== undefined && catId !== '' && catId !== 0 && catId !== '0') {
        categoryId = catId;
        const foundCategory = this.categoryMapLookup.get(String(catId)) || this.categoryMapLookup.get(Number(catId));
        if (foundCategory) {
          categoryName = foundCategory.categ_name || foundCategory.name || `ໝວດ #${catId}`;
          categoryObj = foundCategory;
        } else if (prod.categ_name) {
          categoryName = prod.categ_name;
        } else if (prod.category && (prod.category.categ_name || prod.category.name)) {
          categoryName = prod.category.categ_name || prod.category.name;
          categoryObj = prod.category;
        } else {
          categoryName = `ໝວດ #${catId}`;
        }
      } else if (prod.category && (prod.category.categ_name || prod.category.name)) {
        categoryName = prod.category.categ_name || prod.category.name;
        categoryId = prod.category.categ_id ?? prod.category.id ?? 'uncategorized';
        categoryObj = prod.category;
      } else if (prod.categ_name) {
        categoryName = prod.categ_name;
      }

      return { categoryId, categoryName, categoryObj };
    },

    async loadCategories() {
      try {
        let categories = []
        try {
          const response = await this.$axios.get('/api/category/findAll')
          categories = response.data?.data || response.data || []
        } catch (e) {
          const response = await this.$axios.get('api/category/find')
          categories = response.data?.data || response.data || []
        }

        this.categoryList = (Array.isArray(categories) ? categories : []).map(c => ({
          categ_id: c.categ_id ?? c.id,
          categ_name: c.categ_name ?? c.name ?? `ໝວດ #${c.categ_id || c.id}`,
          ...c
        }))
      } catch (error) {
        console.error('Category load error:', error)
        this.categoryList = []
      }
    },

    async loadData() {
      this.isloading = true
      if (!this.categoryList || this.categoryList.length === 0) {
        await this.loadCategories()
      }
      const locationId = this.currentSelectedLocation?.id || 1
      const date = {
        startDate: this.date,
        endDate: this.date2,
        locationId,
      }

      try {
        const response = await this.$axios.get('api/sale/findByDate', { params: { date } })
        this.orderHeaderList = response.data || []
      } catch (error) {
        console.error('Category report load error:', error)
        swalError2(
          this.$swal,
          'Error',
          'Could not load sales data: ' + (error.message || JSON.stringify(error))
        )
      }
      this.isloading = false
    },

    exportToExcel() {
      try {
        const exportData = []
        this.activeCategoryList.forEach((cat) => {
          // Add Category Row
          exportData.push({
            'ID / Code': cat.categoryId,
            'ລາຍການ (Category/Product Name)': cat.categoryName,
            'ຈຳນວນສິນຄ້າ': cat.uniqueProductsCount,
            'ຈຳນວນຂາຍລວມ (Qty)': cat.totalQTY,
            'ຍອດຂາຍລວມ (Revenue LAK)': Math.round(cat.totalAmountLocal),
            'ປະເພດ': 'ໝວດໝູ່ (Category)'
          })

          // Add nested products
          cat.products.forEach((prod) => {
            exportData.push({
              'ID / Code': prod.productId,
              'ລາຍການ (Category/Product Name)': `   ↳ ${prod.productName}`,
              'ຈຳນວນສິນຄ້າ': '',
              'ຈຳນວນຂາຍລວມ (Qty)': prod.totalQTY,
              'ຍອດຂາຍລວມ (Revenue LAK)': Math.round(prod.totalAmountLocal),
              'ປະເພດ': 'ສິນຄ້າ (Product)'
            })
          })
        })

        const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Category Report')
        this.$xlsx.writeFile(workbook, `category_sales_report_${this.date}_to_${this.date2}.xlsx`)
        this.$toast.success('Excel report exported successfully!')
      } catch (error) {
        console.error('Excel export error:', error)
        this.$toast.error('Could not export to Excel: ' + error.message)
      }
    },

    printA4() {
      try {
        const companyData = this.$store.getters.findAllCompany?.[0] || mainCompanyInfo() || {}
        if (this.$auth && this.$auth.user) {
          companyData.user = this.$auth.user.cus_name
        }

        const htmlContent = generateCategorySalesReportHTML(
          this.activeCategoryList,
          companyData,
          this.date,
          this.date2,
          this.localCurrency
        )

        const printWindow = window.open('', '_blank')
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        
        printWindow.onload = function () {
          printWindow.print()
          printWindow.close()
        }

        setTimeout(() => {
          if (!printWindow.closed) {
            printWindow.print()
          }
        }, 800)

        this.$toast.success('ກຳລັງເປີດໜ້າພິມລາຍງານ A4...')
      } catch (error) {
        console.error('Print A4 error:', error)
        this.$toast.error('ບໍ່ສາມາດພິມລາຍງານໄດ້: ' + error.message)
      }
    }
  }
}
</script>

<style scoped>
.report-container {
  font-family: 'Noto Sans Lao', sans-serif !important;
  background-color: #fafafa;
  min-height: 100vh;
  padding: 8px 4px;
}

.report-container * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.header-bar {
  border-top: 4px solid var(--v-primary-base) !important;
}

.action-btn {
  text-transform: none;
  font-weight: 700;
  border-radius: 8px;
}

.white-input >>> .v-input__control > .v-input__slot {
  background-color: white !important;
}

/* KPI metric cards style */
.metric-card {
  transition: all 0.2s ease-in-out;
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05) !important;
}

.border-left-primary {
  border-left: 4px solid var(--v-primary-base) !important;
}

.border-left-secondary {
  border-left: 4px solid var(--v-secondary-base) !important;
}

.border-left-success {
  border-left: 4px solid #4CAF50 !important;
}

.border-left-warning {
  border-left: 4px solid #FF9800 !important;
}

/* Compact Table Layout styling */
.compact-table >>> .v-data-table__wrapper {
  border-radius: 0 0 8px 8px;
}

.compact-table >>> thead th.table-header {
  background-color: #f8f9fa !important;
  text-transform: uppercase;
  font-size: 0.75rem !important;
  font-weight: bold !important;
  color: #5f6368 !important;
}

.compact-table >>> tbody td {
  font-size: 0.875rem !important;
}

/* Inner nesting table formatting */
.expanded-row-cell {
  background-color: #fcfcfc !important;
}

.inner-table >>> thead th.subtable-header {
  background-color: #f1f3f4 !important;
  font-size: 0.7rem !important;
  font-weight: bold !important;
  color: #70757a !important;
}

.inner-table >>> tbody td {
  font-size: 0.8rem !important;
}
</style>
