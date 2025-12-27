<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍງານຍອດຂາຍຕາມເກຣດລູກຄ້າ (A-F) + ຂອງຂວັນ</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="exportToExcel"
      >
        <v-icon start>mdi-microsoft-excel</v-icon>
        <h3>Export Excel</h3>
      </v-chip>
    </div>

    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Main Content -->
    <div>
      <v-card>
        <v-card-title>
          <v-layout row wrap>
            <v-col cols="6">
              <!-- Date Filters -->
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <v-date-picker
                  v-model="fromDate"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="fromDateLabel"
                    label="ຈາກວັນທີ:"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="fromDate = parseDate(fromDateLabel)"
                    v-on="on"
                  ></v-text-field>
                </template>
              </v-menu>

              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <v-date-picker
                  v-model="toDate"
                  no-title
                  @input="menu2 = false"
                ></v-date-picker>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="toDateLabel"
                    label="ຫາວັນທີ:"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="toDate = parseDate(toDateLabel)"
                    v-on="on"
                  ></v-text-field>
                </template>
              </v-menu>
            </v-col>

            <v-col cols="6">
              <!-- Grade Filter -->
              <v-select
                v-model="selectedGradeFilter"
                :items="gradeFilterOptions"
                item-text="label"
                item-value="value"
                label="ຟິລເຕີເກຣດລູກຄ້າ"
                clearable
                prepend-icon="mdi-filter"
                @change="applyGradeFilter"
              ></v-select>

              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="customTerminalList"
                label="ເລືອກຕາມ ຮ້ານ*"
                v-model="terminalId"
              ></v-autocomplete>
            </v-col>

            <v-col cols="6" class="text-left">
              <v-btn
                size="large"
                variant="outlined"
                @click="exportToExcel"
                class="primary"
                rounded
              >
                <span class="mdi mdi-microsoft-excel"></span>Generate Excel
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                @click="printReport"
                class="primary"
                rounded
              >
                <span class="mdi mdi-printer"></span>Print Report
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
                ດຶງລາຍງານ
              </v-btn>
            </v-col>
          </v-layout>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <!-- Grade Summary Cards -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="mb-3">
                <v-icon left>mdi-chart-bar</v-icon>
                ສະຫຼຸບຕາມເກຣດລູກຄ້າ (A-F) + ຂອງຂວັນ
              </h3>
            </v-col>
          </v-row>

          <v-row>
            <!-- Grade Summary Cards -->
            <v-col
              v-for="gradeStat in gradeStatistics"
              :key="gradeStat.grade"
              cols="6"
              md="4"
              lg="2"
            >
              <v-card
                outlined
                class="grade-summary-card pa-3 text-center elevation-2"
                :class="{ 'selected-grade': selectedGradeFilter === gradeStat.grade }"
                @click="filterByGrade(gradeStat.grade)"
                style="cursor: pointer; transition: all 0.2s ease"
              >
                <v-icon :color="gradeStat.color" size="32" class="mb-2">
                  {{ gradeStat.icon }}
                </v-icon>

                <div class="grade-badge mb-2">
                  <v-chip :color="gradeStat.color" dark small label>
                    <strong>GRADE {{ gradeStat.grade }}</strong>
                  </v-chip>
                </div>

                <h3 :class="`${gradeStat.color}--text mb-1`">
                  {{ formatNumber(gradeStat.revenue) }} LAK
                </h3>

                <div class=" text--secondary mb-1">
                  {{ formatNumber(gradeStat.quantity) }} ລາຍການ
                </div>

                <v-chip
                  :color="gradeStat.color"
                  small
                  outlined
                  class="font-weight-bold"
                >
                  {{ gradeStat.orderCount }} ບິນ
                </v-chip>

                <div class="mt-2">
                  <v-progress-linear
                    :value="gradeStat.percentage"
                    :color="gradeStat.color"
                    height="4"
                    rounded
                  ></v-progress-linear>
                  <div class=" mt-1">
                    {{ gradeStat.percentage.toFixed(1) }}% ຂອງຍອດລວມ
                  </div>
                </div>
              </v-card>
            </v-col>

            <!-- NEW: Base Price Summary Card -->
            <v-col cols="6" md="4" lg="2">
              <v-card
                outlined
                class="grade-summary-card pa-3 text-center elevation-2"
                :class="{ 'selected-grade': selectedGradeFilter === 'BASE' }"
                @click="filterByGrade('BASE')"
                style="cursor: pointer; transition: all 0.2s ease"
              >
                <v-icon color="green" size="32" class="mb-2">
                  mdi-currency-usd
                </v-icon>

                <div class="grade-badge mb-2">
                  <v-chip color="green" dark small label>
                    <strong>ລາຄາມາດຕະຖານ</strong>
                  </v-chip>
                </div>

                <h3 class="green--text mb-1">
                  {{ formatNumber(basePriceSummary.revenue) }} LAK
                </h3>

                <div class=" text--secondary mb-1">
                  {{ formatNumber(basePriceSummary.qty) }} ລາຍການ
                </div>

                <v-chip
                  color="green"
                  small
                  outlined
                  class="font-weight-bold"
                >
                  {{ basePriceSummary.orderCount }} ບິນ
                </v-chip>

                <div class="mt-2">
                  <v-progress-linear
                    :value="basePricePercentage"
                    color="green"
                    height="4"
                    rounded
                  ></v-progress-linear>
                  <div class=" mt-1">
                    {{ basePricePercentage.toFixed(1) }}% ຂອງຍອດລວມ
                  </div>
                </div>

                <div class="caption mt-2 grey--text">
                  (priceListId = null)
                </div>
              </v-card>
            </v-col>

            <!-- NEW: Gift Summary Card -->
            <v-col cols="6" md="4" lg="2">
              <v-card
                outlined
                class="grade-summary-card pa-3 text-center elevation-2"
                :class="{ 'selected-grade': selectedGradeFilter === 'GIFT' }"
                @click="filterByGrade('GIFT')"
                style="cursor: pointer; transition: all 0.2s ease"
              >
                <v-icon color="amber" size="32" class="mb-2">
                  mdi-gift
                </v-icon>

                <div class="grade-badge mb-2">
                  <v-chip color="amber" dark small label>
                    <strong>ຂອງຂວັນ</strong>
                  </v-chip>
                </div>

                <!-- FIXED: Show original value (savings) instead of revenue for gifts -->
                <h3 class="amber--text mb-1">
                  {{ formatNumber(giftSummary.originalValue) }} LAK
                </h3>

                <div class=" text--secondary mb-1">
                  {{ formatNumber(giftSummary.qty) }} ລາຍການ
                </div>

                <v-chip
                  color="amber"
                  small
                  outlined
                  class="font-weight-bold"
                >
                  {{ giftSummary.orderCount }} ບິນ
                </v-chip>

                <div class="mt-2">
                  <v-progress-linear
                    :value="giftSummary.percentage"
                    color="amber"
                    height="4"
                    rounded
                  ></v-progress-linear>
                  <div class=" mt-1">
                    {{ giftSummary.percentage.toFixed(1) }}% ຂອງຈຳນວນ
                  </div>
                </div>

                <!-- ADDED: Show revenue vs savings info -->
                <div class="caption mt-2">
                  <div v-if="giftSummary.revenue > 0" class="success--text">
                    ລາຄາ: {{ formatNumber(giftSummary.revenue) }}
                  </div>
                  <div class="error--text">
                    ປະຫຍັດ: {{ formatNumber(giftSummary.originalValue - giftSummary.revenue) }}
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Enhanced Total Summary Card -->
          <v-row class="mt-4">
            <v-col cols="12">
              <v-card outlined class="pa-4" color="success" dark>
                <h4 class="mb-3">
                  <v-icon left>mdi-calculator</v-icon>
                  ສະຫຼຸບລວມທັງໝົດ (ລວມຂອງຂວັນ)
                </h4>
                <v-row>
                  <v-col cols="6" md="2">
                    <div class="text-center">
                      <h2>{{ formatNumber(totalRevenue) }} LAK</h2>
                      <div class="">ຍອດລວມທັງໝົດ</div>
                    </div>
                  </v-col>

                  <v-col cols="6" md="2">
                    <div class="text-center">
                      <h2>{{ formatNumber(totalQuantity) }}</h2>
                      <div class="">ຈຳນວນສິນຄ້າ</div>
                    </div>
                  </v-col>

                  <v-col cols="6" md="2">
                    <div class="text-center">
                      <h2>{{ formatNumber(giftSummary.qty) }}</h2>
                      <div class="">ຂອງຂວັນ</div>
                    </div>
                  </v-col>

                  <v-col cols="6" md="2">
                    <div class="text-center">
                      <h2>{{ formatNumber(totalOrders) }}</h2>
                      <div class="">ຈຳນວນບິນ</div>
                    </div>
                  </v-col>

                  <v-col cols="6" md="2">
                    <div class="text-center">
                      <h2>{{ formatNumber(averageOrderValue) }} LAK</h2>
                      <div class="">ຄ່າສະເລ່ຍຕໍ່ບິນ</div>
                    </div>
                  </v-col>

                  <v-col cols="6" md="2">
                    <div class="text-center">
                      <h2>{{ formatNumber(giftPercentage) }}%</h2>
                      <div class="">ອັດຕາຂອງຂວັນ</div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <!-- Filter Alert -->
          <v-row class="mt-4" v-if="selectedGradeFilter">
            <v-col cols="12">
              <v-alert
                type="info"
                dense
                text
                dismissible
                @input="clearGradeFilter"
              >
                <v-icon left>mdi-filter</v-icon>
                <span v-if="selectedGradeFilter === 'GIFT'">
                  ກຳລັງສະແດງ: ຂອງຂວັນ
                  ({{ filteredProductSummary.length }} ສິນຄ້າ)
                </span>
                <span v-else-if="selectedGradeFilter === 'BASE'">
                  ກຳລັງສະແດງ: ລາຄາມາດຕະຖານ (priceListId = null)
                  ({{ filteredProductSummary.length }} ສິນຄ້າ)
                </span>
                <span v-else>
                  ກຳລັງສະແດງ: ເກຣດ {{ selectedGradeFilter }}
                  ({{ filteredProductSummary.length }} ສິນຄ້າ)
                </span>
              </v-alert>
            </v-col>
          </v-row>
        </v-card-text>

        <!-- Product Summary Table -->
        <v-card-title>
          <h3>
            <v-icon left>mdi-table</v-icon>
            ລາຍລະອຽດສິນຄ້າຕາມເກຣດ + ຂອງຂວັນ
          </h3>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="ຊອກຫາສິນຄ້າ"
            single-line
            hide-details
          />
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="filteredProductSummary"
          :search="search"
          :loading="isloading"
          loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
          class="elevation-1"
        >
          <template v-slot:[`item.productName`]="{ item }">
            <div>
              <strong>{{ item.productName }}</strong>
              <div class=" grey--text">ID: {{ item.productId }}</div>
            </div>
          </template>

          <template v-slot:[`item.basePriceDisplay`]="{ item }">
            <div class="text-center">
              <v-chip color="grey darken-1" small dark outlined>
                {{ formatCurrency(item.basePrice) }}
              </v-chip>
              <div class=" grey--text mt-1">ລາຄາມາດຕະຖານ</div>
            </div>
          </template>

          <template v-slot:[`item.gradeA`]="{ item }">
            <v-chip color="purple" small dark v-if="item.grades.A.qty > 0">
              {{ formatNumber(item.grades.A.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.A.revenue > 0">
              {{ formatCurrency(item.grades.A.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.grades.A.priceUsed">
              @ {{ formatCurrency(item.grades.A.priceUsed) }}/ຊິ້ນ
            </div>
            <div 
              class="" 
              v-if="item.grades.A.priceUsed && item.basePrice"
              :class="getPriceDifferenceClass(item.grades.A.priceUsed, item.basePrice)"
            >
              {{ getPriceDifferenceText(item.grades.A.priceUsed, item.basePrice) }}
            </div>
            <span v-if="item.grades.A.qty === 0" class="grey--text">-</span>
          </template>

          <template v-slot:[`item.gradeB`]="{ item }">
            <v-chip color="blue" small dark v-if="item.grades.B.qty > 0">
              {{ formatNumber(item.grades.B.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.B.revenue > 0">
              {{ formatCurrency(item.grades.B.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.grades.B.priceUsed">
              @ {{ formatCurrency(item.grades.B.priceUsed) }}/ຊິ້ນ
            </div>
            <div 
              class="" 
              v-if="item.grades.B.priceUsed && item.basePrice"
              :class="getPriceDifferenceClass(item.grades.B.priceUsed, item.basePrice)"
            >
              {{ getPriceDifferenceText(item.grades.B.priceUsed, item.basePrice) }}
            </div>
            <span v-if="item.grades.B.qty === 0" class="grey--text">-</span>
          </template>

          <template v-slot:[`item.gradeC`]="{ item }">
            <v-chip color="orange" small dark v-if="item.grades.C.qty > 0">
              {{ formatNumber(item.grades.C.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.C.revenue > 0">
              {{ formatCurrency(item.grades.C.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.grades.C.priceUsed">
              @ {{ formatCurrency(item.grades.C.priceUsed) }}/ຊິ້ນ
            </div>
            <div 
              class="" 
              v-if="item.grades.C.priceUsed && item.basePrice"
              :class="getPriceDifferenceClass(item.grades.C.priceUsed, item.basePrice)"
            >
              {{ getPriceDifferenceText(item.grades.C.priceUsed, item.basePrice) }}
            </div>
            <span v-if="item.grades.C.qty === 0" class="grey--text">-</span>
          </template>

          <template v-slot:[`item.gradeD`]="{ item }">
            <v-chip color="red" small dark v-if="item.grades.D.qty > 0">
              {{ formatNumber(item.grades.D.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.D.revenue > 0">
              {{ formatCurrency(item.grades.D.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.grades.D.priceUsed">
              @ {{ formatCurrency(item.grades.D.priceUsed) }}/ຊິ້ນ
            </div>
            <div 
              class="" 
              v-if="item.grades.D.priceUsed && item.basePrice"
              :class="getPriceDifferenceClass(item.grades.D.priceUsed, item.basePrice)"
            >
              {{ getPriceDifferenceText(item.grades.D.priceUsed, item.basePrice) }}
            </div>
            <span v-if="item.grades.D.qty === 0" class="grey--text">-</span>
          </template>

          <template v-slot:[`item.gradeE`]="{ item }">
            <v-chip color="pink" small dark v-if="item.grades.E.qty > 0">
              {{ formatNumber(item.grades.E.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.E.revenue > 0">
              {{ formatCurrency(item.grades.E.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.grades.E.priceUsed">
              @ {{ formatCurrency(item.grades.E.priceUsed) }}/ຊິ້ນ
            </div>
            
            <div 
              class="" 
              v-if="item.grades.E.priceUsed && item.basePrice"
              :class="getPriceDifferenceClass(item.grades.E.priceUsed, item.basePrice)"
            >
              {{ getPriceDifferenceText(item.grades.E.priceUsed, item.basePrice) }}
            </div>
            <span v-if="item.grades.E.qty === 0" class="grey--text">-</span>
          </template>

          <template v-slot:[`item.gradeF`]="{ item }">
            <v-chip color="grey" small dark v-if="item.grades.F.qty > 0">
              {{ formatNumber(item.grades.F.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.F.revenue > 0">
              {{ formatCurrency(item.grades.F.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.grades.F.priceUsed">
              @ {{ formatCurrency(item.grades.F.priceUsed) }}/ຊິ້ນ
            </div>
            <div 
              class="" 
              v-if="item.grades.F.priceUsed && item.basePrice"
              :class="getPriceDifferenceClass(item.grades.F.priceUsed, item.basePrice)"
            >
              {{ getPriceDifferenceText(item.grades.F.priceUsed, item.basePrice) }}
            </div>
            <span v-if="item.grades.F.qty === 0" class="grey--text">-</span>
          </template>

          <!-- NEW: Base Price Sales Column Template -->
          <template v-slot:[`item.basePriceSales`]="{ item }">
            <v-chip color="green" small dark v-if="item.basePriceSales.qty > 0">
              {{ formatNumber(item.basePriceSales.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.basePriceSales.revenue > 0">
              {{ formatCurrency(item.basePriceSales.revenue) }}
            </div>
            <div class=" grey--text" v-if="item.basePriceSales.priceUsed">
              @ {{ formatCurrency(item.basePriceSales.priceUsed) }}/ຊິ້ນ
            </div>
            <div class="caption grey--text" v-if="item.basePriceSales.qty > 0">
              (ລາຄາມາດຕະຖານ)
            </div>
            <span v-if="item.basePriceSales.qty === 0" class="grey--text">-</span>
          </template>

          <!-- Gift Column Template -->
          <template v-slot:[`item.gifts`]="{ item }">
            <div v-if="item.gifts.qty > 0">
              <v-chip color="amber" small dark>
                {{ formatNumber(item.gifts.qty) }} ຊິ້ນ
              </v-chip>
              <div class="amber--text mt-1">
                <v-icon small color="amber">mdi-gift</v-icon>
                ຂອງຂວັນ
              </div>
              
              <!-- Show actual gift revenue if exists -->
              <div class="success--text" v-if="item.gifts.revenue > 0">
                ລາຄາ: {{ formatCurrency(item.gifts.revenue) }}
              </div>
              <div class="grey--text" v-else>
                ຟຣີ (0 LAK)
              </div>
              
              <!-- Show original value for comparison -->
              <div class=" grey--text" v-if="item.gifts.originalValue > 0">
                ມູນຄ່າເຕັມ: {{ formatCurrency(item.gifts.originalValue) }}
              </div>
              
              <!-- Show savings calculation -->
              <div class="error--text font-weight-bold" v-if="item.gifts.originalValue > item.gifts.revenue">
                ປະຫຍັດ: {{ formatCurrency(item.gifts.originalValue - item.gifts.revenue) }}
              </div>
            </div>
            <span v-else class="grey--text">-</span>
          </template>

          <template v-slot:[`item.totalQty`]="{ item }">
            <strong>{{ formatNumber(item.totalQty) }}</strong>
            <div class=" grey--text" v-if="item.gifts.qty > 0">
              (+{{ item.gifts.qty }} ຂອງຂວັນ)
            </div>
          </template>

          <template v-slot:[`item.totalRevenue`]="{ item }">
            <strong class="success--text">
              {{ formatCurrency(item.totalRevenue) }}
            </strong>
            <div class="amber--text" v-if="item.gifts.originalValue > 0">
              +{{ formatCurrency(item.gifts.originalValue) }} (ຂອງຂວັນ)
            </div>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import {
  swalSuccess,
  swalError2,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auths',
  
  data() {
    return {
      terminalId: 999,
      isloading: false,
      search: '',
      salesData: [],
      productSummary: [],
      priceListData: [], // Store price list data
      
      // Grade filters - ENHANCED with Gift and Base Price filters
      selectedGradeFilter: null,
      gradeFilterOptions: [
        { label: 'ທັງໝົດ', value: null },
        { label: 'ເກຣດ A', value: 'A' },
        { label: 'ເກຣດ B', value: 'B' },
        { label: 'ເກຣດ C', value: 'C' },
        { label: 'ເກຣດ D', value: 'D' },
        { label: 'ເກຣດ E', value: 'E' },
        { label: 'ເກຣດ F', value: 'F' },
        { label: 'ລາຄາມາດຕະຖານ', value: 'BASE' }, // NEW: Base Price filter
        { label: 'ຂອງຂວັນ', value: 'GIFT' }, // Gift filter
      ],
      
      gradeSummary: {
        A: { qty: 0, revenue: 0, orderCount: 0 },
        B: { qty: 0, revenue: 0, orderCount: 0 },
        C: { qty: 0, revenue: 0, orderCount: 0 },
        D: { qty: 0, revenue: 0, orderCount: 0 },
        E: { qty: 0, revenue: 0, orderCount: 0 },
        F: { qty: 0, revenue: 0, orderCount: 0 },
      },

      // NEW: Base Price Summary (priceListId = null)
      basePriceSummary: {
        qty: 0,
        revenue: 0,
        orderCount: 0,
      },

      // NEW: Gift Summary
      giftSummary: {
        qty: 0,
        revenue: 0, // Always 0 for gifts
        originalValue: 0, // What the gifts would have cost
        orderCount: 0,
        percentage: 0,
      },
      
      // ENHANCED headers with Gift column and Base Price column
      headers: [
        {
          text: 'ສິນຄ້າ',
          align: 'left',
          value: 'productName',
          sortable: true,
        },
        {
          text: 'ລາຄາຖານ (ລາຄາເບື້ອງຕົ້ນ)',
          align: 'center',
          value: 'basePriceDisplay',
          sortable: true,
        },
        {
          text: 'ເກຣດ A',
          align: 'center',
          value: 'gradeA',
          sortable: false,
        },
        {
          text: 'ເກຣດ B',
          align: 'center',
          value: 'gradeB',
          sortable: false,
        },
        {
          text: 'ເກຣດ C',
          align: 'center',
          value: 'gradeC',
          sortable: false,
        },
        {
          text: 'ເກຣດ D',
          align: 'center',
          value: 'gradeD',
          sortable: false,
        },
        {
          text: 'ເກຣດ E',
          align: 'center',
          value: 'gradeE',
          sortable: false,
        },
        {
          text: 'ເກຣດ F',
          align: 'center',
          value: 'gradeF',
          sortable: false,
        },
        {
          text: 'ລາຄາມາດຕະຖານ (ບໍ່ມີ PriceList)',
          align: 'center',
          value: 'basePriceSales',
          sortable: false,
        },
        {
          text: 'ຂອງຂວັນ (Gift)',
          align: 'center',
          value: 'gifts',
          sortable: false,
        },
        {
          text: 'ລວມຈຳນວນ',
          align: 'center',
          value: 'totalQty',
          sortable: true,
        },
        {
          text: 'ລວມລາຄາ',
          align: 'right',
          value: 'totalRevenue',
          sortable: true,
        },
      ],
      
      fromDate: getFirstDayOfMonth(),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fromDateLabel: this.formatDate(getFirstDayOfMonth()),
      toDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },

  async created() {
    this.terminalId = this.findSelectedTerminal
    await this.loadPriceList()
    await this.loadData()
  },

  watch: {
    fromDate(val) {
      this.fromDateLabel = this.formatDate(this.fromDate)
      this.loadData()
    },
    toDate(val) {
      this.toDateLabel = this.formatDate(this.toDate)
      this.loadData()
    },
  },

  computed: {
    ...mapGetters([
      'findAllProduct',
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
    ]),

    customTerminalList() {
      let originalTerminalList = JSON.parse(
        JSON.stringify(this.findAllTerminal)
      )
      const extraTerminal = {
        id: 999,
        code: 1999,
        name: 'ທັງໝົດ',
        description: '',
        locationId: 1,
      }
      originalTerminalList.push(extraTerminal)
      return originalTerminalList
    },

    filteredSalesData() {
      const terminal = this.findAllTerminal.find(
        (el) => el['id'] == this.terminalId
      )
      
      if (!terminal || this.terminalId === 999) {
        return this.salesData
      }
      
      return this.salesData.filter(
        (el) => el['locationId'] == terminal['locationId']
      )
    },

    // ENHANCED: Gift and Base Price filtering support
    filteredProductSummary() {
      if (!this.selectedGradeFilter) {
        return this.productSummary
      }
      
      if (this.selectedGradeFilter === 'GIFT') {
        return this.productSummary.filter(product => product.gifts.qty > 0)
      }
      
      if (this.selectedGradeFilter === 'BASE') {
        return this.productSummary.filter(product => product.basePriceSales.qty > 0)
      }
      
      return this.productSummary.filter(
        (product) => product.grades[this.selectedGradeFilter].qty > 0
      )
    },

    gradeStatistics() {
      const stats = []
      const grades = ['A', 'B', 'C', 'D', 'E', 'F']
      const colors = ['purple', 'blue', 'orange', 'red', 'pink', 'grey']
      const icons = [
        'mdi-star',
        'mdi-star-half-full',
        'mdi-star-outline',
        'mdi-minus-circle',
        'mdi-alert-circle',
        'mdi-close-circle',
      ]

      grades.forEach((grade, index) => {
        const data = this.gradeSummary[grade]
        const percentage =
          this.totalRevenue > 0 ? (data.revenue / this.totalRevenue) * 100 : 0

        stats.push({
          grade: grade,
          quantity: data.qty,
          revenue: data.revenue,
          orderCount: data.orderCount,
          percentage: percentage,
          color: colors[index],
          icon: icons[index],
        })
      })

      return stats
    },

    totalRevenue() {
      const gradeRevenue = Object.values(this.gradeSummary).reduce(
        (sum, grade) => sum + grade.revenue,
        0
      )
      return gradeRevenue + this.basePriceSummary.revenue // Include base price revenue
    },

    totalQuantity() {
      return Object.values(this.gradeSummary).reduce(
        (sum, grade) => sum + grade.qty,
        0
      ) + this.basePriceSummary.qty + this.giftSummary.qty // Include base price and gift quantities
    },

    // NEW: Base price percentage
    basePricePercentage() {
      return this.totalRevenue > 0 ? (this.basePriceSummary.revenue / this.totalRevenue) * 100 : 0
    },

    totalOrders() {
      return this.filteredSalesData.length
    },

    averageOrderValue() {
      return this.totalOrders > 0 ? this.totalRevenue / this.totalOrders : 0
    },

    // NEW: Gift percentage
    giftPercentage() {
      const totalItems = this.totalQuantity
      return totalItems > 0 ? (this.giftSummary.qty / totalItems) * 100 : 0
    },

    user() {
      return this.$auth.user || ''
    },
  },

  methods: {
    // ENHANCED: Gift filtering support
    filterByGrade(grade) {
      if (this.selectedGradeFilter === grade) {
        this.clearGradeFilter()
      } else {
        this.selectedGradeFilter = grade
        this.applyGradeFilter()
      }
    },

    applyGradeFilter() {
      console.log('Applied grade filter:', this.selectedGradeFilter)
    },

    clearGradeFilter() {
      this.selectedGradeFilter = null
    },

    // Load Price List Data
    async loadPriceList() {
      try {
        const response = await this.$axios.get('/api/priceList/find')
        this.priceListData = response.data
        console.log('Price list loaded:', this.priceListData.length, 'items')
      } catch (error) {
        console.error('Error loading price list:', error)
      }
    },

    // Get price for specific product and grade
    getPriceForGrade(productId, grade, defaultPrice) {
      const priceList = this.priceListData.find(
        (pl) => pl.productId === productId && pl.grade === grade && pl.isActive
      )
      
      if (!priceList) {
        return defaultPrice
      }

      if (priceList.type === 'Price') {
        return priceList.amount
      } else if (priceList.type === 'Percent') {
        return defaultPrice * (1 + priceList.amount / 100)
      }
      
      return defaultPrice
    },

    async loadData() {
      this.isloading = true
      try {
        const date = {
          startDate: this.fromDate,
          endDate: this.toDate,
        }

        const response = await this.$axios.get('api/sale/findByDate', {
          params: { date },
        })

        this.salesData = response.data
        this.processSalesData()
        
        // Debug: Check gift data after processing
        this.$nextTick(() => {
          this.debugGiftData()
        })
      } catch (error) {
        console.error('Error loading sales data:', error)
        swalError2(this.$swal, 'Error', 'ບໍ່ສາມາດໂຫລດຂໍ້ມູນໄດ້')
      } finally {
        this.isloading = false
      }
    },

    // ENHANCED: Process sales data with gift tracking
    processSalesData() {
      // Reset summaries
      this.productSummary = []
      this.gradeSummary = {
        A: { qty: 0, revenue: 0, orderCount: 0 },
        B: { qty: 0, revenue: 0, orderCount: 0 },
        C: { qty: 0, revenue: 0, orderCount: 0 },
        D: { qty: 0, revenue: 0, orderCount: 0 },
        E: { qty: 0, revenue: 0, orderCount: 0 },
        F: { qty: 0, revenue: 0, orderCount: 0 },
      }

      // RESET: Base Price and Gift summaries
      this.basePriceSummary = {
        qty: 0,
        revenue: 0,
        orderCount: 0,
      }

      this.giftSummary = {
        qty: 0,
        revenue: 0,
        originalValue: 0,
        orderCount: 0,
        percentage: 0,
      }

      const productMap = new Map()
      const gradeOrderCount = {}
      const basePriceOrderCount = new Set() // NEW: Track base price orders
      const giftOrderCount = new Set()

      console.log('📊 Processing sales data with gift tracking...')
      console.log('📝 Total sales to process:', this.filteredSalesData.length)

      this.filteredSalesData.forEach((sale, saleIndex) => {
        const customerGrade = sale.client?.grade || 'F'
        
        console.log(`\n🏪 Sale ${saleIndex + 1} (ID: ${sale.id}):`)
        console.log(`   👤 Customer Grade: ${customerGrade}`)
        console.log(`   📦 Lines: ${sale.lines?.length || 0}`)

        sale.lines?.forEach((line, lineIndex) => {
          const productId = line.productId
          const productName = line.product?.pro_name || 'Unknown Product'
          const basePrice = line.product?.pro_price || 0
          const quantity = line.quantity || 0
          const revenue = line.total || 0
          const priceListId = line.priceListId
          const isGift = line.isGift === true // EXPLICIT boolean check

          console.log(`     📋 Line ${lineIndex + 1}: ${productName}`)
          console.log(`        🎁 isGift: ${isGift}`)
          console.log(`        📊 Quantity: ${quantity}`)
          console.log(`        💰 Revenue: ${revenue}`)
          console.log(`        🏷️ Base Price: ${basePrice}`)
          console.log(`        🔗 PriceListId: ${priceListId}`)

          if (!productMap.has(productId)) {
            productMap.set(productId, {
              productId,
              productName,
              basePrice: basePrice,
              grades: {
                A: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
                B: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
                C: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
                D: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
                E: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
                F: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
              },
              // NEW: Base price sales tracking (priceListId = null)
              basePriceSales: {
                qty: 0,
                revenue: 0,
                priceUsed: 0,
                count: 0,
              },
              // Gift tracking
              gifts: {
                qty: 0,
                revenue: 0, // Always 0 for gifts
                originalValue: 0, // What it would have cost
              },
              totalQty: 0,
              totalRevenue: 0,
            })
            console.log(`        ✨ Created new product entry for: ${productName}`)
          }

          const product = productMap.get(productId)

          // CRITICAL: Handle gift items FIRST and separately
          if (isGift) {
            console.log(`        🎁 PROCESSING AS GIFT`)
            
            product.gifts.qty += quantity
            product.gifts.revenue += revenue // FIXED: Track actual gift revenue (may not be 0)
            product.gifts.originalValue += quantity * basePrice // What it would have cost at base price

            // Add to global gift summary
            this.giftSummary.qty += quantity
            this.giftSummary.revenue += revenue // FIXED: Track actual gift revenue
            this.giftSummary.originalValue += quantity * basePrice

            // Track gift orders
            giftOrderCount.add(sale.id)

            console.log(`        ✅ Gift processed:`)
            console.log(`           📦 Product Gift Qty: ${product.gifts.qty}`)
            console.log(`           💰 Product Gift Revenue: ${product.gifts.revenue}`) // NEW: Log actual revenue
            console.log(`           💎 Product Gift Value: ${product.gifts.originalValue}`)
            console.log(`           🌟 Global Gift Qty: ${this.giftSummary.qty}`)
            console.log(`           💸 Global Gift Revenue: ${this.giftSummary.revenue}`) // NEW: Log actual revenue
            console.log(`           💰 Global Gift Value: ${this.giftSummary.originalValue}`)
          } else {
            console.log(`        💼 PROCESSING AS REGULAR SALE`)
            
            // CORRECTED LOGIC: Separate tracking for different sale types
            // - priceListId exists -> Grade-based sale
            // - priceListId = null -> Base price sale (separate category)
            
            let saleType = 'UNKNOWN'
            let appliedGrade = null
            const unitPrice = line.price || (quantity > 0 ? revenue / quantity : 0)
            
            if (priceListId && this.priceListData.length > 0) {
              // CASE 1: Has priceListId - this is a GRADE-BASED sale
              const priceListEntry = this.priceListData.find(
                pl => pl.id === priceListId
              )
              if (priceListEntry && priceListEntry.grade) {
                appliedGrade = priceListEntry.grade
                saleType = 'GRADE_BASED'
                console.log(`           🎯 GRADE-BASED: Grade ${appliedGrade} (priceListId: ${priceListId})`)
                
                // Track in grade summary
                if (appliedGrade in product.grades) {
                  product.grades[appliedGrade].qty += quantity
                  product.grades[appliedGrade].revenue += revenue
                  
                  product.grades[appliedGrade].priceUsed = 
                    ((product.grades[appliedGrade].priceUsed * product.grades[appliedGrade].count) + unitPrice) / 
                    (product.grades[appliedGrade].count + 1)
                  product.grades[appliedGrade].count += 1
                }

                // Track unique orders per grade
                if (!gradeOrderCount[appliedGrade]) {
                  gradeOrderCount[appliedGrade] = new Set()
                }
                gradeOrderCount[appliedGrade].add(sale.id)

                if (appliedGrade in this.gradeSummary) {
                  this.gradeSummary[appliedGrade].qty += quantity
                  this.gradeSummary[appliedGrade].revenue += revenue
                }
                
              } else {
                console.log(`           ⚠️ PriceList ID ${priceListId} not found - treating as BASE PRICE`)
                saleType = 'BASE_PRICE'
              }
            } else {
              // CASE 2: No priceListId - this is a BASE PRICE sale
              saleType = 'BASE_PRICE'
              console.log(`           💰 BASE PRICE: priceListId = null`)
            }

            // Handle BASE PRICE sales separately
            if (saleType === 'BASE_PRICE') {
              product.basePriceSales.qty += quantity
              product.basePriceSales.revenue += revenue
              
              product.basePriceSales.priceUsed = 
                ((product.basePriceSales.priceUsed * product.basePriceSales.count) + unitPrice) / 
                (product.basePriceSales.count + 1)
              product.basePriceSales.count += 1

              // Track base price summary
              this.basePriceSummary.qty += quantity
              this.basePriceSummary.revenue += revenue
              
              // Track base price orders
              basePriceOrderCount.add(sale.id)
            }
            
            console.log(`           ✅ PROCESSED AS: ${saleType} | Grade: ${appliedGrade || 'N/A'}`)
          }

          // Update product totals (both gifts and regular sales)
          product.totalQty += quantity
          product.totalRevenue += revenue
        })
      })

      // Count orders per grade
      Object.keys(gradeOrderCount).forEach((grade) => {
        if (gradeOrderCount[grade]) {
          this.gradeSummary[grade].orderCount = gradeOrderCount[grade].size
        }
      })

      // Set base price and gift order counts
      this.basePriceSummary.orderCount = basePriceOrderCount.size
      this.giftSummary.orderCount = giftOrderCount.size

      // Calculate percentages
      const totalRegularQty = Object.values(this.gradeSummary).reduce((sum, grade) => sum + grade.qty, 0)
      const totalItems = totalRegularQty + this.basePriceSummary.qty + this.giftSummary.qty
      this.giftSummary.percentage = totalItems > 0 ? (this.giftSummary.qty / totalItems) * 100 : 0

      this.productSummary = Array.from(productMap.values()).sort(
        (a, b) => b.totalRevenue - a.totalRevenue
      )

      console.log('\n📈 FINAL PROCESSING RESULTS:')
      console.log('   📦 Total Products:', this.productSummary.length)
      console.log('   🎁 Gift Summary:', this.giftSummary)
      console.log('   💰 Base Price Summary:', this.basePriceSummary)
      console.log('   🏆 Grade Summary:', this.gradeSummary)
      
      // Log products with gifts and base price sales
      const productsWithGifts = this.productSummary.filter(p => p.gifts.qty > 0)
      const productsWithBasePriceSales = this.productSummary.filter(p => p.basePriceSales.qty > 0)
      console.log('   🎁 Products with gifts:', productsWithGifts.length)
      console.log('   💰 Products with base price sales:', productsWithBasePriceSales.length)
      
      productsWithGifts.forEach(p => {
        console.log(`      - ${p.productName}: ${p.gifts.qty} gifts worth ${p.gifts.originalValue}`)
      })
      
      productsWithBasePriceSales.forEach(p => {
        console.log(`      - ${p.productName}: ${p.basePriceSales.qty} base price sales worth ${p.basePriceSales.revenue}`)
      })
    },

    formatNumber(value) {
      if (!value && value !== 0) return '0'
      return new Intl.NumberFormat('en-US').format(value)
    },

    formatCurrency(value) {
      if (!value && value !== 0) return '0'
      return new Intl.NumberFormat('en-US').format(Math.round(value))
    },

    // Calculate price difference from base price
    getPriceDifference(gradePrice, basePrice) {
      if (!gradePrice || !basePrice) return 0
      return gradePrice - basePrice
    },

    // Get percentage difference
    getPriceDifferencePercent(gradePrice, basePrice) {
      if (!basePrice || basePrice === 0) return 0
      return ((gradePrice - basePrice) / basePrice) * 100
    },

    // Get CSS class based on price difference
    getPriceDifferenceClass(gradePrice, basePrice) {
      const diff = this.getPriceDifference(gradePrice, basePrice)
      if (diff > 0) return 'success--text font-weight-bold' // Higher than base
      if (diff < 0) return 'error--text font-weight-bold' // Lower than base (discount)
      return 'grey--text' // Same as base
    },

    // Get display text for price difference
    getPriceDifferenceText(gradePrice, basePrice) {
      const diff = this.getPriceDifference(gradePrice, basePrice)
      const percent = this.getPriceDifferencePercent(gradePrice, basePrice)
      
      if (diff === 0) return '(= ລາຄາພື້ນຖານ)'
      
      if (diff > 0) {
        return `(+${this.formatCurrency(diff)} / +${percent.toFixed(1)}%)`
      } else {
        return `(${this.formatCurrency(diff)} / ${percent.toFixed(1)}%)`
      }
    },

    // ENHANCED: Export with gift data
    exportToExcel() {
      const exportData = this.productSummary.map((product) => ({
        'ສິນຄ້າ': product.productName,
        'Product ID': product.productId,
        'ລາຄາພື້ນຖານ (Base Price)': product.basePrice,
        'Grade A Qty': product.grades.A.qty,
        'Grade A Revenue': product.grades.A.revenue,
        'Grade A Avg Price': product.grades.A.priceUsed,
        'Grade A Diff': this.getPriceDifference(product.grades.A.priceUsed, product.basePrice),
        'Grade A %': this.getPriceDifferencePercent(product.grades.A.priceUsed, product.basePrice).toFixed(2),
        'Grade B Qty': product.grades.B.qty,
        'Grade B Revenue': product.grades.B.revenue,
        'Grade B Avg Price': product.grades.B.priceUsed,
        'Grade B Diff': this.getPriceDifference(product.grades.B.priceUsed, product.basePrice),
        'Grade B %': this.getPriceDifferencePercent(product.grades.B.priceUsed, product.basePrice).toFixed(2),
        'Grade C Qty': product.grades.C.qty,
        'Grade C Revenue': product.grades.C.revenue,
        'Grade C Avg Price': product.grades.C.priceUsed,
        'Grade C Diff': this.getPriceDifference(product.grades.C.priceUsed, product.basePrice),
        'Grade C %': this.getPriceDifferencePercent(product.grades.C.priceUsed, product.basePrice).toFixed(2),
        'Grade D Qty': product.grades.D.qty,
        'Grade D Revenue': product.grades.D.revenue,
        'Grade D Avg Price': product.grades.D.priceUsed,
        'Grade D Diff': this.getPriceDifference(product.grades.D.priceUsed, product.basePrice),
        'Grade D %': this.getPriceDifferencePercent(product.grades.D.priceUsed, product.basePrice).toFixed(2),
        'Grade E Qty': product.grades.E.qty,
        'Grade E Revenue': product.grades.E.revenue,
        'Grade E Avg Price': product.grades.E.priceUsed,
        'Grade E Diff': this.getPriceDifference(product.grades.E.priceUsed, product.basePrice),
        'Grade E %': this.getPriceDifferencePercent(product.grades.E.priceUsed, product.basePrice).toFixed(2),
        'Grade F Qty': product.grades.F.qty,
        'Grade F Revenue': product.grades.F.revenue,
        'Grade F Avg Price': product.grades.F.priceUsed,
        'Grade F Diff': this.getPriceDifference(product.grades.F.priceUsed, product.basePrice),
        'Grade F %': this.getPriceDifferencePercent(product.grades.F.priceUsed, product.basePrice).toFixed(2),
        // NEW: Gift data in export
        'Gift Qty': product.gifts.qty,
        'Gift Revenue': product.gifts.revenue,
        'Gift Original Value': product.gifts.originalValue,
        'Gift Savings': product.gifts.originalValue,
        'Total Qty': product.totalQty,
        'Total Revenue': product.totalRevenue,
        'Total with Gift Value': product.totalRevenue + product.gifts.originalValue,
      }))

      const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Grade + Gift Report')
      this.$xlsx.writeFile(
        workbook,
        `grade-gift-report-${this.fromDate}-${this.toDate}.xlsx`
      )
    },

    printReport() {
      window.print()
    },

    // NEW: Debug method to check gift data
    debugGiftData() {
      console.log('🐛 DEBUG: Gift Data Check');
      console.log('Gift Summary:', this.giftSummary);
      console.log('Products with gifts:', this.productSummary.filter(p => p.gifts && p.gifts.qty > 0));
      console.log('Filtered sales data:', this.filteredSalesData.length);
      
      // Check each sale for gifts
      this.filteredSalesData.forEach((sale, index) => {
        const giftLines = sale.lines?.filter(line => line.isGift === true) || [];
        if (giftLines.length > 0) {
          console.log(`Sale ${index + 1} (ID: ${sale.id}) has ${giftLines.length} gift lines:`);
          giftLines.forEach((line, lineIndex) => {
            console.log(`  Gift Line ${lineIndex + 1}:`, {
              productName: line.product?.pro_name,
              quantity: line.quantity,
              price: line.price,
              total: line.total,
              revenue: line.total,
              basePrice: line.product?.pro_price,
              isGift: line.isGift
            });
          });
        }
      });
      
      // Show gift summary breakdown
      console.log('\n🎁 Gift Summary Breakdown:');
      console.log('   📦 Total Gift Quantity:', this.giftSummary.qty);
      console.log('   💰 Total Gift Revenue:', this.giftSummary.revenue);
      console.log('   💎 Total Gift Original Value:', this.giftSummary.originalValue);
      console.log('   💸 Total Savings:', this.giftSummary.originalValue - this.giftSummary.revenue);
      console.log('   📊 Gift Percentage:', this.giftSummary.percentage.toFixed(2) + '%');
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
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

/* Grade Summary Cards Styling */
.grade-summary-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.grade-summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.grade-summary-card.selected-grade {
  border: 3px solid #1976d2 !important;
  box-shadow: 0 0 0 1px rgba(25, 118, 210, 0.3);
}

.grade-badge {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grade-summary-card .v-icon {
  margin-bottom: 8px;
}

.grade-summary-card h3 {
  font-weight: 600;
  letter-spacing: -0.5px;
}

.grade-summary-card .v-progress-linear {
  border-radius: 4px;
}

/* Responsive design improvements */
@media (max-width: 600px) {
  .grade-summary-card {
    margin-bottom: 16px;
  }

  .grade-summary-card h3 {
    font-size: 1.2rem;
  }
}

@media print {
  .v-btn,
  .v-text-field,
  .v-select {
    display: none !important;
  }
}
</style>