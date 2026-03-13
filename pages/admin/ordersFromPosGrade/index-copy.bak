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

    <!-- NEW: Add TicketDetailsDialog -->
    <ticket-details-dialog
      v-model="ticketDetailsDialog"
      :ticket-data="selectedTicketForDetails"
      :company-logo="companyLogo"
      :ticket-common="ticketCommon"
      :show-print-button="true"
      @close="onTicketDialogClose"
      @print-ticket="onPrintTicket"
      @print-payment-details="onPrintPaymentDetails"
    />

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

              <!-- NEW: Add button to show sample transactions -->
              <v-btn
                size="large"
                variant="outlined"
                @click="showSampleTransactions"
                class="info ml-2"
                rounded
                v-if="filteredSalesData.length > 0"
              >
                <span class="mdi mdi-receipt-text"></span>
                ເບິ່ງລາຍການບິນ ({{ filteredSalesData.length }})
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
                :class="{
                  'selected-grade': selectedGradeFilter === gradeStat.grade,
                }"
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

                <div class="text--secondary mb-1">
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
                  <div class="mt-1">
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

                <div class="text--secondary mb-1">
                  {{ formatNumber(basePriceSummary.qty) }} ລາຍການ
                </div>

                <v-chip color="green" small outlined class="font-weight-bold">
                  {{ basePriceSummary.orderCount }} ບິນ
                </v-chip>

                <div class="mt-2">
                  <v-progress-linear
                    :value="basePricePercentage"
                    color="green"
                    height="4"
                    rounded
                  ></v-progress-linear>
                  <div class="mt-1">
                    {{ basePricePercentage.toFixed(1) }}% ຂອງຍອດລວມ
                  </div>
                </div>

                <div class="caption mt-2 grey--text">(priceListId = null)</div>
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
                <v-icon color="amber" size="32" class="mb-2"> mdi-gift </v-icon>

                <div class="grade-badge mb-2">
                  <v-chip color="amber" dark small label>
                    <strong>ຂອງຂວັນ</strong>
                  </v-chip>
                </div>

                <!-- FIXED: Show original value (savings) instead of revenue for gifts -->
                <h3 class="amber--text mb-1">
                  {{ formatNumber(giftSummary.originalValue) }} LAK
                </h3>

                <div class="text--secondary mb-1">
                  {{ formatNumber(giftSummary.qty) }} ລາຍການ
                </div>

                <v-chip color="amber" small outlined class="font-weight-bold">
                  {{ giftSummary.orderCount }} ບິນ
                </v-chip>

                <div class="mt-2">
                  <v-progress-linear
                    :value="giftSummary.percentage"
                    color="amber"
                    height="4"
                    rounded
                  ></v-progress-linear>
                  <div class="mt-1">
                    {{ giftSummary.percentage.toFixed(1) }}% ຂອງຈຳນວນ
                  </div>
                </div>

                <!-- ADDED: Show revenue vs savings info -->
                <div class="caption mt-2">
                  <div v-if="giftSummary.revenue > 0" class="success--text">
                    ລາຄາ: {{ formatNumber(giftSummary.revenue) }}
                  </div>
                  <div class="error--text">
                    ປະຫຍັດ:
                    {{
                      formatNumber(
                        giftSummary.originalValue - giftSummary.revenue
                      )
                    }}
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
                  ກຳລັງສະແດງ: ຂອງຂວັນ ({{ filteredProductSummary.length }}
                  ສິນຄ້າ)
                </span>
                <span v-else-if="selectedGradeFilter === 'BASE'">
                  ກຳລັງສະແດງ: ລາຄາມາດຕະຖານ (priceListId = null) ({{
                    filteredProductSummary.length
                  }}
                  ສິນຄ້າ)
                </span>
                <span v-else>
                  ກຳລັງສະແດງ: ເກຣດ {{ selectedGradeFilter }} ({{
                    filteredProductSummary.length
                  }}
                  ສິນຄ້າ)
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
          <!-- NEW: Enhanced product name template with transaction viewing -->
          <template v-slot:[`item.productName`]="{ item }">
            <div>
              <strong>{{ item.productName }}</strong>
              <div class="grey--text">ID: {{ item.productId }}</div>
              <!-- NEW: Button to view transactions for this product -->
              <v-btn
                x-small
                text
                color="info"
                @click="showProductTransactions(item)"
                class="mt-1"
              >
                <v-icon x-small left>mdi-receipt</v-icon>
                ເບິ່ງບິນ
              </v-btn>
            </div>
          </template>

          <template v-slot:[`item.basePriceDisplay`]="{ item }">
            <div class="text-center">
              <v-chip color="grey darken-1" small dark outlined>
                {{ formatCurrency(item.basePrice) }}
              </v-chip>
              <div class="grey--text mt-1">ລາຄາມາດຕະຖານ</div>
            </div>
          </template>

          <template v-slot:[`item.gradeA`]="{ item }">
            <v-chip color="purple" small dark v-if="item.grades.A.qty > 0">
              {{ formatNumber(item.grades.A.qty) }} ຊິ້ນ
            </v-chip>
            <div class="" v-if="item.grades.A.revenue > 0">
              {{ formatCurrency(item.grades.A.revenue) }}
            </div>
            <div class="grey--text" v-if="item.grades.A.priceUsed">
              @ {{ formatCurrency(item.grades.A.priceUsed) }}/ຊິ້ນ
            </div>
            <div
              class=""
              v-if="item.grades.A.priceUsed && item.basePrice"
              :class="
                getPriceDifferenceClass(item.grades.A.priceUsed, item.basePrice)
              "
            >
              {{
                getPriceDifferenceText(item.grades.A.priceUsed, item.basePrice)
              }}
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
            <div class="grey--text" v-if="item.grades.B.priceUsed">
              @ {{ formatCurrency(item.grades.B.priceUsed) }}/ຊິ້ນ
            </div>
            <div
              class=""
              v-if="item.grades.B.priceUsed && item.basePrice"
              :class="
                getPriceDifferenceClass(item.grades.B.priceUsed, item.basePrice)
              "
            >
              {{
                getPriceDifferenceText(item.grades.B.priceUsed, item.basePrice)
              }}
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
            <div class="grey--text" v-if="item.grades.C.priceUsed">
              @ {{ formatCurrency(item.grades.C.priceUsed) }}/ຊິ້ນ
            </div>
            <div
              class=""
              v-if="item.grades.C.priceUsed && item.basePrice"
              :class="
                getPriceDifferenceClass(item.grades.C.priceUsed, item.basePrice)
              "
            >
              {{
                getPriceDifferenceText(item.grades.C.priceUsed, item.basePrice)
              }}
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
            <div class="grey--text" v-if="item.grades.D.priceUsed">
              @ {{ formatCurrency(item.grades.D.priceUsed) }}/ຊິ້ນ
            </div>
            <div
              class=""
              v-if="item.grades.D.priceUsed && item.basePrice"
              :class="
                getPriceDifferenceClass(item.grades.D.priceUsed, item.basePrice)
              "
            >
              {{
                getPriceDifferenceText(item.grades.D.priceUsed, item.basePrice)
              }}
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
            <div class="grey--text" v-if="item.grades.E.priceUsed">
              @ {{ formatCurrency(item.grades.E.priceUsed) }}/ຊິ້ນ
            </div>

            <div
              class=""
              v-if="item.grades.E.priceUsed && item.basePrice"
              :class="
                getPriceDifferenceClass(item.grades.E.priceUsed, item.basePrice)
              "
            >
              {{
                getPriceDifferenceText(item.grades.E.priceUsed, item.basePrice)
              }}
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
            <div class="grey--text" v-if="item.grades.F.priceUsed">
              @ {{ formatCurrency(item.grades.F.priceUsed) }}/ຊິ້ນ
            </div>
            <div
              class=""
              v-if="item.grades.F.priceUsed && item.basePrice"
              :class="
                getPriceDifferenceClass(item.grades.F.priceUsed, item.basePrice)
              "
            >
              {{
                getPriceDifferenceText(item.grades.F.priceUsed, item.basePrice)
              }}
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
            <div class="grey--text" v-if="item.basePriceSales.priceUsed">
              @ {{ formatCurrency(item.basePriceSales.priceUsed) }}/ຊິ້ນ
            </div>
            <div class="caption grey--text" v-if="item.basePriceSales.qty > 0">
              (ລາຄາມາດຕະຖານ)
            </div>
            <span v-if="item.basePriceSales.qty === 0" class="grey--text"
              >-</span
            >
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
              <div class="grey--text" v-else>ຟຣີ (0 LAK)</div>

              <!-- Show original value for comparison -->
              <div class="grey--text" v-if="item.gifts.originalValue > 0">
                ມູນຄ່າເຕັມ: {{ formatCurrency(item.gifts.originalValue) }}
              </div>

              <!-- Show savings calculation -->
              <div
                class="error--text font-weight-bold"
                v-if="item.gifts.originalValue > item.gifts.revenue"
              >
                ປະຫຍັດ:
                {{
                  formatCurrency(item.gifts.originalValue - item.gifts.revenue)
                }}
              </div>
            </div>
            <span v-else class="grey--text">-</span>
          </template>

          <template v-slot:[`item.totalQty`]="{ item }">
            <strong>{{ formatNumber(item.totalQty) }}</strong>
            <div class="grey--text" v-if="item.gifts.qty > 0">
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

    <!-- NEW: Simple Transactions Dialog -->
    <v-dialog v-model="transactionsDialog" max-width="1200" scrollable>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-receipt-text</v-icon>
          ລາຍການບິນ
          {{
            selectedProductForTransactions
              ? `- ${selectedProductForTransactions.productName}`
              : ''
          }}
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="transactionsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-data-table
            :headers="transactionHeaders"
            :items="sampleTransactions"
            hide-default-footer
            :items-per-page="20"
            class="elevation-0"
          >
            <template v-slot:item.ticketId="{ item }">
              <v-chip color="primary" small dark>{{ item.id }}</v-chip>
            </template>

            <template v-slot:item.client.name="{ item }">
              {{ item.client?.name || 'Walk-in Customer' }}
            </template>

            <template v-slot:item.bookingDate="{ item }">
              {{ formatDate(item.bookingDate) }}
            </template>

            <template v-slot:item.total="{ item }">
              {{ formatNumber(item.total) }} LAK
            </template>

            <!-- NEW: Action to show TicketDetailsDialog -->
            <template v-slot:item.actions="{ item }">
              <v-btn color="info" text small @click="showTicketDetails(item)">
                <v-icon small>mdi-receipt</v-icon>
                ລາຍລະອຽດ
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  
import {
  swalSuccess,
  swalError2,
  getFirstDayOfMonth,
  getFormatNum,
  ticketHtml,
} from '~/common'
import { mainCompanyInfo } from '~/common/api'
import { printEnhancedSalesReportSummary } from '~/common/enhanced-sales-report-printer.js'
import TicketDetailsDialog from '~/components/pos/dialogs/TicketDetailsDialog.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TicketDetailsDialog,
  },
  middleware: 'auths',

  data() {
    return {
      terminalId: 999,
      isloading: false,
      search: '',
      salesData: [],
      productSummary: [],
      priceListData: [],

      // TicketDetailsDialog integration
      ticketDetailsDialog: false,
      selectedTicketForDetails: null,
      transactionsDialog: false,
      selectedProductForTransactions: null,
      sampleTransactions: [],

      // Grade filters
      selectedGradeFilter: null,
      gradeFilterOptions: [
        { label: 'ທັງໝົດ', value: null },
        { label: 'ເກຣດ A', value: 'A' },
        { label: 'ເກຣດ B', value: 'B' },
        { label: 'ເກຣດ C', value: 'C' },
        { label: 'ເກຣດ D', value: 'D' },
        { label: 'ເກຣດ E', value: 'E' },
        { label: 'ເກຣດ F', value: 'F' },
        { label: 'ລາຄາມາດຕະຖານ', value: 'BASE' },
        { label: 'ຂອງຂວັນ', value: 'GIFT' },
      ],

      gradeSummary: {
        A: { qty: 0, revenue: 0, orderCount: 0 },
        B: { qty: 0, revenue: 0, orderCount: 0 },
        C: { qty: 0, revenue: 0, orderCount: 0 },
        D: { qty: 0, revenue: 0, orderCount: 0 },
        E: { qty: 0, revenue: 0, orderCount: 0 },
        F: { qty: 0, revenue: 0, orderCount: 0 },
      },

      basePriceSummary: {
        qty: 0,
        revenue: 0,
        orderCount: 0,
      },

      giftSummary: {
        qty: 0,
        revenue: 0,
        originalValue: 0,
        orderCount: 0,
        percentage: 0,
      },

      headers: [
        { text: 'ສິນຄ້າ', align: 'left', value: 'productName', sortable: true },
        { text: 'ລາຄາຖານ (ລາຄາເບື້ອງຕົ້ນ)', align: 'center', value: 'basePriceDisplay', sortable: true },
        { text: 'ເກຣດ A', align: 'center', value: 'gradeA', sortable: false },
        { text: 'ເກຣດ B', align: 'center', value: 'gradeB', sortable: false },
        { text: 'ເກຣດ C', align: 'center', value: 'gradeC', sortable: false },
        { text: 'ເກຣດ D', align: 'center', value: 'gradeD', sortable: false },
        { text: 'ເກຣດ E', align: 'center', value: 'gradeE', sortable: false },
        { text: 'ເກຣດ F', align: 'center', value: 'gradeF', sortable: false },
        { text: 'ລາຄາມາດຕະຖານ (ບໍ່ມີ PriceList)', align: 'center', value: 'basePriceSales', sortable: false },
        { text: 'ຂອງຂວັນ (Gift)', align: 'center', value: 'gifts', sortable: false },
        { text: 'ລວມຈຳນວນ', align: 'center', value: 'totalQty', sortable: true },
        { text: 'ລວມລາຄາ', align: 'right', value: 'totalRevenue', sortable: true },
      ],

      transactionHeaders: [
        { text: 'ເລກບິນ', value: 'ticketId', sortable: true },
        { text: 'ວັນທີ', value: 'bookingDate', sortable: true },
        { text: 'ລູກຄ້າ', value: 'client.name', sortable: true },
        { text: 'ຍອດລວມ', value: 'total', align: 'right', sortable: true },
        { text: 'ການດຳເນີນການ', value: 'actions', align: 'center', sortable: false },
      ],

      fromDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fromDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
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
    // FIXED: Added missing payment getter
    ...mapGetters([
      'findAllProduct',
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
      'findAllPayment', // FIXED: This was missing
    ]),

    companyLogo() {
      const company = mainCompanyInfo()
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${company.apiData.profile_image_path}`
      }
      return '/static/images/default-logo.png'
    },

    ticketCommon() {
      return ticketHtml()
    },

    customTerminalList() {
      let originalTerminalList = JSON.parse(JSON.stringify(this.findAllTerminal))
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
      const terminal = this.findAllTerminal.find((el) => el['id'] == this.terminalId)
      if (!terminal || this.terminalId === 999) {
        return this.salesData.filter((el) => el.isActive === true)
      }
      return this.salesData.filter(
        (el) => el['locationId'] == terminal['locationId'] && el.isActive === true
      )
    },

    // FIXED: Payment Statistics with corrected logic
    paymentStatistics() {
      const stats = {}
      let totalAmount = 0

      this.filteredSalesData.forEach((sale) => {
        const itemTotal = sale.total - (sale.discount || 0)

        // Multi-payment check
        if (sale.payments && Array.isArray(sale.payments) && sale.payments.length > 1) {
          sale.payments.forEach((payment) => {
            const code = payment.paymentMethod?.payment_code || 'UNKNOWN'
            const amount = payment.amount || 0
            
            if (!stats[code]) {
              stats[code] = {
                code: code,
                name: payment.paymentMethod?.payment_name || 'Unknown',
                amount: 0,
                count: 0,
                color: this.getPaymentColor(code),
                icon: this.getPaymentIcon(code)
              }
            }
            stats[code].amount += amount
            stats[code].count += 1
            totalAmount += amount
          })
        } 
        // Single payment using payment object
        else if (sale.payment && sale.paymentId) {
          const code = sale.payment.payment_code
          const name = sale.payment.payment_name
          
          if (!stats[code]) {
            stats[code] = {
              code: code,
              name: name,
              amount: 0,
              count: 0,
              color: this.getPaymentColor(code),
              icon: this.getPaymentIcon(code)
            }
          }
          stats[code].amount += itemTotal
          stats[code].count += 1
          totalAmount += itemTotal
        }
        // Fallback: lookup from store
        else if (sale.paymentId && this.findAllPayment) {
          const paymentMethod = this.findAllPayment.find(p => p.id === sale.paymentId)
          
          if (paymentMethod) {
            const code = paymentMethod.payment_code
            const name = paymentMethod.payment_name
            
            if (!stats[code]) {
              stats[code] = {
                code: code,
                name: name,
                amount: 0,
                count: 0,
                color: this.getPaymentColor(code),
                icon: this.getPaymentIcon(code)
              }
            }
            stats[code].amount += itemTotal
            stats[code].count += 1
            totalAmount += itemTotal
          }
        }
      })

      // Calculate percentages
      Object.values(stats).forEach(stat => {
        stat.percentage = totalAmount > 0 ? (stat.amount / totalAmount) * 100 : 0
      })

      return Object.values(stats).sort((a, b) => b.amount - a.amount)
    },

    singlePaymentCount() {
      return this.filteredSalesData.filter(sale => {
        const hasMultiPayments = sale.payments && Array.isArray(sale.payments) && sale.payments.length > 1
        return !hasMultiPayments
      }).length
    },

    multiPaymentCount() {
      return this.filteredSalesData.filter(sale => {
        const hasMultiPayments = sale.payments && Array.isArray(sale.payments) && sale.payments.length > 1
        return hasMultiPayments
      }).length
    },

    filteredProductSummary() {
      if (!this.selectedGradeFilter) {
        return this.productSummary
      }
      if (this.selectedGradeFilter === 'GIFT') {
        return this.productSummary.filter((product) => product.gifts.qty > 0)
      }
      if (this.selectedGradeFilter === 'BASE') {
        return this.productSummary.filter((product) => product.basePriceSales.qty > 0)
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
      return gradeRevenue + this.basePriceSummary.revenue + this.giftSummary.revenue
    },

    totalQuantity() {
      return (
        Object.values(this.gradeSummary).reduce((sum, grade) => sum + grade.qty, 0) +
        this.basePriceSummary.qty +
        this.giftSummary.qty
      )
    },

    basePricePercentage() {
      return this.totalRevenue > 0
        ? (this.basePriceSummary.revenue / this.totalRevenue) * 100
        : 0
    },

    totalOrders() {
      return this.filteredSalesData.length
    },

    averageOrderValue() {
      return this.totalOrders > 0 ? this.totalRevenue / this.totalOrders : 0
    },

    giftPercentage() {
      const totalItems = this.totalQuantity
      return totalItems > 0 ? (this.giftSummary.qty / totalItems) * 100 : 0
    },

    totalCustomerSavings() {
      return this.giftSummary.originalValue - this.giftSummary.revenue
    },

    totalGiftValue() {
      return this.giftSummary.originalValue
    },

    user() {
      return this.$auth.user || ''
    },
  },

  methods: {
    // FIXED: Helper functions for payment processing
    getPaymentColor(paymentCode) {
      const colorMap = {
        'CASH': 'green',
        'QR': 'purple',
        'TRANSFER': 'blue',
        'TRANSFER_BCEL': 'blue',
        'BCEL': 'blue',
        'BCEL_TRANSFER': 'blue',
        'COD': 'orange',
        'CREDIT': 'red',
        'CREDIT_CARD': 'red',
        'DEBIT_CARD': 'indigo',
        'CARD': 'indigo',
        'BANK': 'teal',
        'BANK_TRANSFER': 'teal',
        'MOBILE': 'pink',
        'MOBILE_MONEY': 'pink',
        'WALLET': 'amber',
        'DIGITAL_WALLET': 'amber'
      }
      
      if (colorMap[paymentCode]) {
        return colorMap[paymentCode]
      }
      
      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'green'
      if (code.includes('QR') || code.includes('SCAN')) return 'purple'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
      if (code.includes('CARD') || code.includes('CREDIT') || code.includes('DEBIT')) return 'indigo'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'
      if (code.includes('WALLET')) return 'amber'
      
      return 'primary'
    },

    getPaymentIcon(paymentCode) {
      const iconMap = {
        'CASH': 'mdi-cash',
        'QR': 'mdi-qrcode',
        'TRANSFER': 'mdi-bank-transfer',
        'TRANSFER_BCEL': 'mdi-bank-transfer',
        'BCEL': 'mdi-bank',
        'BCEL_TRANSFER': 'mdi-bank-transfer',
        'COD': 'mdi-truck-delivery',
        'CREDIT': 'mdi-credit-card-outline',
        'CREDIT_CARD': 'mdi-credit-card',
        'DEBIT_CARD': 'mdi-credit-card-outline',
        'CARD': 'mdi-credit-card',
        'BANK': 'mdi-bank',
        'BANK_TRANSFER': 'mdi-bank-transfer',
        'MOBILE': 'mdi-cellphone',
        'MOBILE_MONEY': 'mdi-cellphone-wireless',
        'WALLET': 'mdi-wallet',
        'DIGITAL_WALLET': 'mdi-wallet-outline'
      }
      
      if (iconMap[paymentCode]) {
        return iconMap[paymentCode]
      }
      
      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
      if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer'
      if (code.includes('CARD') || code.includes('CREDIT') || code.includes('DEBIT')) return 'mdi-credit-card'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'mdi-truck-delivery'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'mdi-cellphone'
      if (code.includes('WALLET')) return 'mdi-wallet'
      
      return 'mdi-cash-multiple'
    },

    isMultiPayment(item) {
      return item.payments && Array.isArray(item.payments) && item.payments.length > 1
    },

    // TicketDetailsDialog methods
    showTicketDetails(transaction) {
      this.selectedTicketForDetails = transaction
      this.ticketDetailsDialog = true
      this.transactionsDialog = false
    },

    onTicketDialogClose() {
      this.ticketDetailsDialog = false
      this.selectedTicketForDetails = null
    },

    onPrintTicket(ticketData) {
      console.log('Printing ticket from grade report:', ticketData.id)
    },

    onPrintPaymentDetails(ticketData) {
      console.log('Payment details printed for transaction:', ticketData.id)
    },

    // Transaction methods
    showSampleTransactions() {
      this.sampleTransactions = this.filteredSalesData.slice(0, 50)
      this.selectedProductForTransactions = null
      this.transactionsDialog = true
    },

    showProductTransactions(product) {
      const productTransactions = this.filteredSalesData.filter((sale) => {
        return sale.lines && sale.lines.some((line) => line.productId === product.productId)
      })
      this.sampleTransactions = productTransactions.slice(0, 20)
      this.selectedProductForTransactions = product
      this.transactionsDialog = true
    },

    // Filter methods
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

    // Data loading methods
    async loadPriceList() {
      try {
        const response = await this.$axios.get('/api/priceList/find')
        this.priceListData = response.data
        console.log('Price list loaded:', this.priceListData.length, 'items')
      } catch (error) {
        console.error('Error loading price list:', error)
      }
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

        this.salesData = response.data.filter((sale) => sale.isActive === true)
        this.processSalesData()

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

    // Sales data processing - keeping your existing logic
    processSalesData() {
      // [Your existing processSalesData method - unchanged]
      // This method is correct as written in your original code
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

      this.basePriceSummary = { qty: 0, revenue: 0, orderCount: 0 }
      this.giftSummary = { qty: 0, revenue: 0, originalValue: 0, orderCount: 0, percentage: 0 }

      const productMap = new Map()
      const gradeOrderCount = {}
      const basePriceOrderCount = new Set()
      const giftOrderCount = new Set()

      this.filteredSalesData.forEach((sale) => {
        sale.lines?.forEach((line) => {
          const productId = line.productId
          const productName = line.product?.pro_name || 'Unknown Product'
          const basePrice = line.product?.pro_price || 0
          const quantity = line.quantity || 0
          const revenue = line.total || 0
          const priceListId = line.priceListId
          const isGift = line.isGift === true

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
              basePriceSales: { qty: 0, revenue: 0, priceUsed: 0, count: 0 },
              gifts: { qty: 0, revenue: 0, originalValue: 0 },
              totalQty: 0,
              totalRevenue: 0,
            })
          }

          const product = productMap.get(productId)

          if (isGift) {
            product.gifts.qty += quantity
            product.gifts.revenue += revenue
            product.gifts.originalValue += quantity * basePrice
            this.giftSummary.qty += quantity
            this.giftSummary.revenue += revenue
            this.giftSummary.originalValue += quantity * basePrice
            giftOrderCount.add(sale.id)
          } else {
            let saleType = 'UNKNOWN'
            let appliedGrade = null
            const unitPrice = line.price || (quantity > 0 ? revenue / quantity : 0)

            if (priceListId === null || priceListId === undefined) {
              saleType = 'BASE_PRICE'
            } else {
              const priceListEntry = this.priceListData.find((pl) => pl.id === priceListId)
              if (priceListEntry && priceListEntry.grade) {
                appliedGrade = priceListEntry.grade
                saleType = 'GRADE_BASED'

                if (appliedGrade in product.grades) {
                  product.grades[appliedGrade].qty += quantity
                  product.grades[appliedGrade].revenue += revenue
                  const currentCount = product.grades[appliedGrade].count
                  const currentAvgPrice = product.grades[appliedGrade].priceUsed
                  product.grades[appliedGrade].priceUsed =
                    (currentAvgPrice * currentCount + unitPrice) / (currentCount + 1)
                  product.grades[appliedGrade].count += 1
                }

                if (!gradeOrderCount[appliedGrade]) {
                  gradeOrderCount[appliedGrade] = new Set()
                }
                gradeOrderCount[appliedGrade].add(sale.id)

                if (appliedGrade in this.gradeSummary) {
                  this.gradeSummary[appliedGrade].qty += quantity
                  this.gradeSummary[appliedGrade].revenue += revenue
                }
              } else {
                saleType = 'BASE_PRICE'
              }
            }

            if (saleType === 'BASE_PRICE') {
              product.basePriceSales.qty += quantity
              product.basePriceSales.revenue += revenue
              const currentCount = product.basePriceSales.count
              const currentAvgPrice = product.basePriceSales.priceUsed
              product.basePriceSales.priceUsed =
                (currentAvgPrice * currentCount + unitPrice) / (currentCount + 1)
              product.basePriceSales.count += 1
              this.basePriceSummary.qty += quantity
              this.basePriceSummary.revenue += revenue
              basePriceOrderCount.add(sale.id)
            }
          }

          product.totalQty += quantity
          product.totalRevenue += revenue
        })
      })

      Object.keys(gradeOrderCount).forEach((grade) => {
        if (gradeOrderCount[grade]) {
          this.gradeSummary[grade].orderCount = gradeOrderCount[grade].size
        }
      })

      this.basePriceSummary.orderCount = basePriceOrderCount.size
      this.giftSummary.orderCount = giftOrderCount.size

      const totalRegularQty = Object.values(this.gradeSummary).reduce(
        (sum, grade) => sum + grade.qty,
        0
      )
      const totalItems = totalRegularQty + this.basePriceSummary.qty + this.giftSummary.qty
      this.giftSummary.percentage = totalItems > 0 ? (this.giftSummary.qty / totalItems) * 100 : 0

      this.productSummary = Array.from(productMap.values()).sort(
        (a, b) => b.totalRevenue - a.totalRevenue
      )
    },

    // ENHANCED: Print Report with complete payment statistics
    printReport() {
      try {
        console.log('🖨️ Printing enhanced sales report with product details and payment statistics...')

        const terminalInfo =
          this.terminalId === 999
            ? { name: 'ທັງໝົດ', id: 999 }
            : this.customTerminalList.find((terminal) => terminal.id === this.terminalId)

        const companyData = mainCompanyInfo()?.apiData || mainCompanyInfo() || {}

        // FIXED: Pass all required data to printer
        printEnhancedSalesReportSummary({
          orderHeaderList: this.salesData,
          filteredOrderHeaderList: this.filteredSalesData,
          fromDate: this.fromDate,
          toDate: this.toDate,
          terminalInfo: terminalInfo,
          companyData: companyData,
          companyLogo: this.companyLogo,
          formatNumber: this.formatNumber,
          user: this.user,
          gradeSummary: this.gradeSummary,
          basePriceSummary: this.basePriceSummary,
          giftSummary: this.giftSummary,
          productSummary: this.productSummary,
          paymentStatistics: this.paymentStatistics, // FIXED: Now properly computed
          singlePaymentCount: this.singlePaymentCount,
          multiPaymentCount: this.multiPaymentCount,
        })

        if (this.$toast) {
          this.$toast.success('ລາຍງານລະອຽດກຳລັງພິມ... (ລວມເກຣດ + ຂອງຂວັນ + ການຊຳລະ)', {
            position: 'bottom-center',
            duration: 3000,
          })
        }
      } catch (error) {
        console.error('Error printing enhanced sales report:', error)
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານລະອຽດ', {
            position: 'bottom-center',
          })
        }
      }
    },

    // Utility methods
    formatNumber(value) {
      if (!value && value !== 0) return '0'
      return new Intl.NumberFormat('en-US').format(value)
    },

    formatCurrency(value) {
      if (!value && value !== 0) return '0'
      return new Intl.NumberFormat('en-US').format(Math.round(value))
    },

    getPriceDifference(gradePrice, basePrice) {
      if (!gradePrice || !basePrice) return 0
      return gradePrice - basePrice
    },

    getPriceDifferencePercent(gradePrice, basePrice) {
      if (!basePrice || basePrice === 0) return 0
      return ((gradePrice - basePrice) / basePrice) * 100
    },

    getPriceDifferenceClass(gradePrice, basePrice) {
      const diff = this.getPriceDifference(gradePrice, basePrice)
      if (diff > 0) return 'success--text font-weight-bold'
      if (diff < 0) return 'error--text font-weight-bold'
      return 'grey--text'
    },

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

    exportToExcel() {
      const exportData = this.productSummary.map((product) => ({
        ສິນຄ້າ: product.productName,
        'Product ID': product.productId,
        'ລາຄາພື້ນຖານ (Base Price)': product.basePrice,
        'Grade A Qty': product.grades.A.qty,
        'Grade A Revenue': product.grades.A.revenue,
        'Gift Qty': product.gifts.qty,
        'Gift Revenue': product.gifts.revenue,
        'Gift Original Value': product.gifts.originalValue,
        'Gift Savings': product.gifts.originalValue - product.gifts.revenue,
        'Total Qty': product.totalQty,
        'Total Revenue': product.totalRevenue,
      }))

      const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Grade + Gift + Payment Report')
      this.$xlsx.writeFile(workbook, `grade-gift-payment-report-${this.fromDate}-${this.toDate}.xlsx`)
    },

    debugGiftData() {
      console.log('🐛 DEBUG: Gift Data Check')
      console.log('Gift Summary:', this.giftSummary)
      console.log('Payment Statistics:', this.paymentStatistics)
      console.log('Single Payment Count:', this.singlePaymentCount)
      console.log('Multi Payment Count:', this.multiPaymentCount)
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