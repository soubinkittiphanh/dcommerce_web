<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-school-outline</v-icon>
          ລະບົບຈັດການຄ່າຮຽນ (School Billing & Student Registry)
        </h1>
        <p class="text-subtitle-1 grey--text text--darken-1 mb-0">
          บริหารจัดการปีการศึกษา, ห้องเรียน, ค่าธรรมเนียม, การออกใบเสร็จรับเงิน และรายงานการจัดเก็บเงินรายวัน
        </p>
      </div>

      <!-- Active Shift Indicator -->
      <v-chip v-if="activeShift" color="success" dark class="px-4 py-2 font-weight-bold" elevation="1">
        <v-icon left>mdi-cash-register</v-icon>
        ຂາເຂົ້າເຮັດວຽກ: Shift #{{ activeShift.id }} | ຍອດເປີດ: {{ formatCurrency(activeShift.openingCash) }} LAK
      </v-chip>
      <v-chip v-else color="error" dark class="px-4 py-2 font-weight-bold" elevation="1" @click="activeTab = 4">
        <v-icon left>mdi-cash-register-off</v-icon>
        ບໍ່ມີກະເປົາເປີດ (No Active Shift)
      </v-chip>
    </div>

    <!-- Main Navigation Tabs -->
    <v-card class="elevation-2">
      <v-tabs v-model="activeTab" background-color="primary" dark slider-color="secondary" grow>
        <v-tab v-for="(tab, i) in tabs" :key="i">
          <v-icon left>{{ tab.icon }}</v-icon>
          {{ tab.text }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab">
        <!-- 1. INVOICES TAB -->
        <v-tab-item class="pa-4">
          <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="text-h6 font-weight-bold primary--text">ລາຍການໃບບິນຄ່າຮຽນ (School Invoices)</h2>
            <div class="d-flex">
              <v-btn color="secondary" @click="openBulkDialog" dark class="mr-2">
                <v-icon left>mdi-plus-box-multiple</v-icon>
                ສ້າງໃບບິນກຸ່ມ (Bulk Generate)
              </v-btn>
              <v-btn color="primary" outlined @click="loadInvoices">
                <v-icon left>mdi-refresh</v-icon>
                ໂຫຼດໃໝ່ (Refresh)
              </v-btn>
            </div>
          </div>

          <!-- Invoice Filter Toolbar -->
          <v-card outlined class="pa-4 mb-4 bg-light">
            <v-row dense>
              <v-col cols="12" sm="3">
                <v-select v-model="filters.academicYearId" :items="academicYears" item-text="name" item-value="id"
                  label="ປີການສຶກສາ (Academic Year)" outlined dense clearable @change="loadInvoices"></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select v-model="filters.classId" :items="classes" item-text="name" item-value="id"
                  label="ຊັ້ນຮຽນ/ຫ້ອງຮຽນ (Class)" outlined dense clearable @change="loadInvoices"></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select v-model="filters.status" :items="invoiceStatuses" label="ສະຖານະ (Status)" outlined dense
                  clearable @change="loadInvoices"></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field v-model="filters.search" label="ຄົ້ນຫາ (ເລກໃບບິນ, ລະຫັດນັກຮຽນ...)" outlined dense
                  append-icon="mdi-magnify" clearable @keyup.enter="loadInvoices"></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Class Payment Progress KPI Section -->
          <v-row dense class="mb-4" v-if="filters.classId">
            <v-col cols="12" sm="3">
              <v-card color="indigo lighten-5" class="pa-4 text-center elevation-1" outlined>
                <div class="text-overline mb-1 font-weight-bold grey--text text--darken-2">ນັກຮຽນທັງໝົດໃນຊັ້ນ (Total Students)</div>
                <div class="text-h4 font-weight-black primary--text">{{ classSummary.total }}</div>
                <div class="caption grey--text">ອອກໃບບິນແລ້ວທັງໝົດ</div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card color="green lighten-5" class="pa-4 text-center elevation-1" outlined>
                <div class="text-overline mb-1 font-weight-bold green--text text--darken-3">ຊຳລະຄົບຖ້ວນ (Fully Paid)</div>
                <div class="text-h4 font-weight-black green--text">{{ classSummary.paid }}</div>
                <div class="caption green--text text--darken-2">ຄິດເປັນ: {{ classSummary.paidPercent }}%</div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card color="orange lighten-5" class="pa-4 text-center elevation-1" outlined>
                <div class="text-overline mb-1 font-weight-bold orange--text text--darken-3">ຊຳລະບາງສ່ວນ (Partially Paid)</div>
                <div class="text-h4 font-weight-black orange--text">{{ classSummary.partial }}</div>
                <div class="caption orange--text text--darken-2">ຄິດເປັນ: {{ classSummary.partialPercent }}%</div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card color="red lighten-5" class="pa-4 text-center elevation-1" outlined>
                <div class="text-overline mb-1 font-weight-bold red--text text--darken-3">ຍັງບໍ່ຊຳລະ (Unpaid)</div>
                <div class="text-h4 font-weight-black red--text">{{ classSummary.unpaid }}</div>
                <div class="caption red--text text--darken-2">ຄິດເປັນ: {{ classSummary.unpaidPercent }}%</div>
              </v-card>
            </v-col>

            <!-- Progress Bar -->
            <v-col cols="12">
              <v-card outlined class="pa-3 bg-light">
                <div class="d-flex justify-space-between align-center mb-1">
                  <span class="caption font-weight-bold font-family-lao">ອັດຕາການຊຳລະຄົບຖ້ວນຂອງຊັ້ນຮຽນ (Class Payment Rate):</span>
                  <span class="caption font-weight-bold text-success">{{ classSummary.paidPercent }}%</span>
                </div>
                <v-progress-linear :value="classSummary.paidPercent" color="success" height="10" rounded reactive striped></v-progress-linear>
              </v-card>
            </v-col>
          </v-row>

          <!-- Invoices Data Table -->
          <v-data-table :headers="invoiceHeaders" :items="invoices" :loading="loadingInvoices"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນໃບບິນ..." no-data-text="ບໍ່ມີຂໍ້ມູນໃບບິນ" class="elevation-0" :items-per-page="15">
            <template v-slot:item.index="{ item }">
              {{ invoices.indexOf(item) + 1 }}
            </template>
            <template v-slot:item.student="{ item }">
              <div v-if="item.student">
                <span class="font-weight-bold">{{ item.student.firstName }} {{ item.student.lastName }}</span>
                <div class="caption grey--text">Code: {{ item.student.studentId }}</div>
              </div>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.class="{ item }">
              <span v-if="item.student && item.student.schoolClass">
                {{ item.student.schoolClass.name }}
              </span>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.totalAmount="{ item }">
              <span class="font-weight-bold">{{ formatCurrency(item.totalAmount) }}</span>
            </template>
            <template v-slot:item.paidAmount="{ item }">
              <span class="text-success font-weight-bold">{{ formatCurrency(item.paidAmount) }}</span>
            </template>
            <template v-slot:item.balanceAmount="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }}</span>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" dark small font-weight-bold>
                {{ getStatusText(item.status) }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn small color="primary" class="mr-2" @click="viewInvoiceDetails(item)">
                <v-icon left small>mdi-eye</v-icon>
                ລາຍລະອຽດ
              </v-btn>
            </template>
          </v-data-table>
        </v-tab-item>

        <!-- 2. RECONCILIATION & REPORTS TAB -->
        <v-tab-item class="pa-4">
          <h2 class="text-h6 font-weight-bold primary--text mb-4">ລາຍງານການເງິນ ແລະ ການກະທົບຍອດ (Financial Reconciliation)</h2>

          <v-row>
            <!-- Daily Cashier Summary -->
            <v-col cols="12" md="6">
              <v-card outlined class="h-100 pa-4 elevation-1">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div class="d-flex align-center">
                    <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
                    <span class="text-subtitle-1 font-weight-bold">ຍອດເກັບເງິນປະຈຳວັນ (Daily Collection Summary)</span>
                  </div>
                  <v-btn icon color="primary" @click="fetchDailyReport">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </div>

                <v-row align="center" class="mb-4">
                  <v-col cols="12" sm="8">
                    <v-text-field v-model="reportDate" type="date" label="ເລືອກວັນທີ (Select Date)" outlined dense
                      hide-details @change="fetchDailyReport"></v-text-field>
                  </v-col>
                </v-row>

                <v-divider class="mb-4"></v-divider>

                <!-- Daily Collections List -->
                <v-data-table :headers="dailyReportHeaders" :items="dailyCollections" :loading="loadingDailyReport"
                  no-data-text="ບໍ່ມີຍອດເກັບເງິນໃນວັນທີນີ້" class="elevation-0" dense hide-default-footer>
                  <template v-slot:item.cashier="{ item }">
                    <span class="font-weight-medium">{{ item.cashier }}</span>
                  </template>
                  <template v-slot:item.paymentMethod="{ item }">
                    <v-chip color="info" outlined small>{{ item.paymentMethod }}</v-chip>
                  </template>
                  <template v-slot:item.totalAmount="{ item }">
                    <span class="font-weight-bold">{{ formatCurrency(item.totalAmount) }} LAK</span>
                  </template>
                </v-data-table>

                <!-- Daily Total Summary Badge -->
                <v-alert type="success" text class="mt-4 mb-0" icon="mdi-cash">
                  <div class="d-flex justify-space-between align-center">
                    <span class="font-weight-bold text-subtitle-1">ຍອດເກັບລວມທັງໝົດ:</span>
                    <strong class="text-h6 text-success">{{ formatCurrency(dailyReportTotal) }} LAK</strong>
                  </div>
                </v-alert>
              </v-card>
            </v-col>

            <!-- Outstanding Balances Report -->
            <v-col cols="12" md="6">
              <v-card outlined class="h-100 pa-4 elevation-1">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div class="d-flex align-center">
                    <v-icon color="error" class="mr-2">mdi-account-cash</v-icon>
                    <span class="text-subtitle-1 font-weight-bold text-error">ຄ້າງຊຳລະສະສົມ (Outstanding Balances)</span>
                  </div>
                  <v-btn icon color="error" @click="fetchOutstandingReport">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </div>

                <v-divider class="mb-4"></v-divider>

                <!-- Outstanding Invoices List -->
                <v-data-table :headers="outstandingReportHeaders" :items="outstandingInvoices"
                  :loading="loadingOutstandingReport" no-data-text="ບໍ່ມີຍອດຄ້າງຊຳລະ" class="elevation-0" :items-per-page="10">
                  <template v-slot:item.student="{ item }">
                    <div class="font-weight-medium">
                      {{ item.studentName }}
                      <div class="caption grey--text">ID: {{ item.studentId }}</div>
                    </div>
                  </template>
                  <template v-slot:item.parent="{ item }">
                    <div v-if="item.parentName" class="caption">
                      {{ item.parentName }}
                      <div class="text-info font-weight-bold">{{ item.parentPhone }}</div>
                    </div>
                    <span v-else class="grey--text">-</span>
                  </template>
                  <template v-slot:item.balanceAmount="{ item }">
                    <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }} LAK</span>
                  </template>
                  <template v-slot:item.dueDate="{ item }">
                    <span :class="isOverdue(item.dueDate) ? 'text-error font-weight-bold' : ''">
                      {{ formatDate(item.dueDate) }}
                    </span>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- 3. ACADEMIC YEARS & CLASSES TAB -->
        <v-tab-item class="pa-4">
          <v-row>
            <!-- Academic Years Configuration -->
            <v-col cols="12" md="6">
              <v-card outlined class="pa-4 elevation-1">
                <div class="d-flex justify-space-between align-center mb-4">
                  <h3 class="text-subtitle-1 font-weight-bold primary--text">ປີການສຶກສາ (Academic Years)</h3>
                  <v-btn color="primary" small @click="openYearDialog">
                    <v-icon left small>mdi-plus</v-icon>
                    ເພີ່ມປີການສຶກສາ
                  </v-btn>
                </div>

                <v-data-table :headers="yearHeaders" :items="academicYears" :loading="loadingYears"
                  no-data-text="ບໍ່ພົບປີການສຶກສາ" class="elevation-0" dense hide-default-footer>
                  <template v-slot:item.startDate="{ item }">
                    {{ formatDate(item.startDate) }}
                  </template>
                  <template v-slot:item.endDate="{ item }">
                    {{ formatDate(item.endDate) }}
                  </template>
                </v-data-table>
              </v-card>
            </v-col>

            <!-- School Classes Configuration -->
            <v-col cols="12" md="6">
              <v-card outlined class="pa-4 elevation-1">
                <div class="d-flex justify-space-between align-center mb-4">
                  <h3 class="text-subtitle-1 font-weight-bold primary--text">ຊັ້ນຮຽນ/ຫ້ອງຮຽນ (School Classes)</h3>
                  <v-btn color="primary" small @click="openClassDialog">
                    <v-icon left small>mdi-plus</v-icon>
                    ເພີ່ມຊັ້ນຮຽນ
                  </v-btn>
                </div>

                <v-data-table :headers="classHeaders" :items="classes" :loading="loadingClasses"
                  no-data-text="ບໍ່ພົບຊັ້ນຮຽນ" class="elevation-0" dense hide-default-footer>
                  <template v-slot:item.academicYear="{ item }">
                    <span v-if="item.academicYear">{{ item.academicYear.name }}</span>
                    <span v-else class="grey--text">-</span>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- 4. FEE SETUP TAB -->
        <v-tab-item class="pa-4">
          <v-row>
            <!-- Fee Items List -->
            <v-col cols="12" md="5">
              <v-card outlined class="pa-4 elevation-1">
                <div class="d-flex justify-space-between align-center mb-4">
                  <h3 class="text-subtitle-1 font-weight-bold primary--text">ລາຍການຄ່າທໍານຽມ (Fee Items)</h3>
                  <v-btn color="primary" small @click="openFeeItemDialog">
                    <v-icon left small>mdi-plus</v-icon>
                    ເພີ່ມລາຍການ
                  </v-btn>
                </div>

                <v-data-table :headers="feeItemHeaders" :items="feeItems" :loading="loadingFeeItems"
                  no-data-text="ບໍ່ພົບລາຍການ" class="elevation-0" dense hide-default-footer></v-data-table>
              </v-card>
            </v-col>

            <!-- Fee Structures List -->
            <v-col cols="12" md="7">
              <v-card outlined class="pa-4 elevation-1">
                <div class="d-flex justify-space-between align-center mb-4">
                  <h3 class="text-subtitle-1 font-weight-bold primary--text">ກຳນົດອັດຕາຄ່າທໍານຽມ (Fee Structures)</h3>
                  <v-btn color="primary" small @click="openFeeStructureDialog">
                    <v-icon left small>mdi-plus</v-icon>
                    ຕັ້ງຄ່າອັດຕາໃໝ່
                  </v-btn>
                </div>

                <v-data-table :headers="feeStructureHeaders" :items="feeStructures" :loading="loadingFeeStructures"
                  no-data-text="ບໍ່ພົບອັດຕາທີ່ຕັ້ງໄວ້" class="elevation-0" :items-per-page="10">
                  <template v-slot:item.academicYear="{ item }">
                    <span v-if="item.academicYear">{{ item.academicYear.name }}</span>
                    <span v-else class="grey--text">-</span>
                  </template>
                  <template v-slot:item.class="{ item }">
                    <v-chip v-if="item.schoolClass" small outlined color="primary">{{ item.schoolClass.name }}</v-chip>
                    <v-chip v-else small color="teal" dark>ທຸກຊັ້ນຮຽນ (Global)</v-chip>
                  </template>
                  <template v-slot:item.feeItem="{ item }">
                    <span v-if="item.feeItem" class="font-weight-bold">{{ item.feeItem.name }}</span>
                    <span v-else class="grey--text">-</span>
                  </template>
                  <template v-slot:item.amount="{ item }">
                    <span class="font-weight-bold text-primary">{{ formatCurrency(item.amount) }} LAK</span>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- 5. CASHIER SHIFTS TAB -->
        <v-tab-item class="pa-4">
          <h2 class="text-h6 font-weight-bold primary--text mb-4">ຈັດການກະເປົາ/ກະລາເງິນ (Cashier Shifts Control)</h2>

          <v-row justify="center">
            <v-col cols="12" md="6">
              <!-- If active shift exists -->
              <v-card v-if="activeShift" class="pa-6 text-center elevation-2" outlined>
                <v-icon size="80" color="success" class="mb-4">mdi-cash-register</v-icon>
                <h3 class="text-h5 font-weight-bold success--text mb-2">ກະເປົາເງິນກຳລັງເປີດໃຊ້ງານ (Shift Open)</h3>
                <p class="grey--text text--darken-2">ທ່ານສາມາດຮັບຊຳລະຄ່າຮຽນຜ່ານໃບບິນໄດ້ຕາມປົກກະຕິ</p>

                <v-divider class="my-6"></v-divider>

                <div class="text-left px-6">
                  <v-row dense class="mb-2">
                    <v-col cols="6" class="font-weight-bold">Shift ID:</v-col>
                    <v-col cols="6" class="text-right">#{{ activeShift.id }}</v-col>
                  </v-row>
                  <v-row dense class="mb-2">
                    <v-col cols="6" class="font-weight-bold">ເວລາເປີດ (Open Time):</v-col>
                    <v-col cols="6" class="text-right">{{ formatDateTime(activeShift.openTime) }}</v-col>
                  </v-row>
                  <v-row dense class="mb-2">
                    <v-col cols="6" class="font-weight-bold">ເງິນເປີດກະເປົາ (Opening Cash):</v-col>
                    <v-col cols="6" class="text-right text-primary font-weight-bold">{{ formatCurrency(activeShift.openingCash) }} LAK</v-col>
                  </v-row>
                  <v-row dense class="mb-2">
                    <v-col cols="6" class="font-weight-bold">ສະຖານະ (Status):</v-col>
                    <v-col cols="6" class="text-right text-success font-weight-bold">OPEN</v-col>
                  </v-row>
                </div>

                <v-divider class="my-6"></v-divider>

                <v-btn color="error" block large @click="openCloseShiftDialog">
                  <v-icon left>mdi-lock</v-icon>
                  ປິດກະເປົາ/ສະຫຼຸບຍອດ (Close Cashier Shift)
                </v-btn>
              </v-card>

              <!-- If no active shift exists -->
              <v-card v-else class="pa-6 text-center elevation-2" outlined>
                <v-icon size="80" color="error" class="mb-4">mdi-cash-register-off</v-icon>
                <h3 class="text-h5 font-weight-bold error--text mb-2">ບໍ່ມີກະເປົາເງິນເປີດຢູ່ (No Active Shift)</h3>
                <p class="grey--text text--darken-2">
                  ກະລຸນາເປີດກະເປົາເງິນ (Cashier Shift) ກ່ອນ ເພື່ອບັນທຶກການຊຳລະເງິນ ແລະ ທຳທຸລະກຳ
                </p>

                <v-divider class="my-6"></v-divider>

                <v-btn color="primary" block large @click="shiftOpenDialog = true">
                  <v-icon left>mdi-key</v-icon>
                  `ເປີດກະເປົາເຮັດວຽກ (Open Cashier Shift)`
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- DIALOGS SECTION -->

    <!-- 1. Bulk Generate Invoices Dialog -->
    <v-dialog v-model="bulkDialog" max-width="500px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          <v-icon left color="white">mdi-plus-box-multiple</v-icon>
          ສ້າງໃບບິນກຸ່ມ (Bulk Generate Invoices)
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="bulkForm" v-model="bulkValid">
            <v-select v-model="bulkFormFields.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ເລືອກປີການສຶກສາ *" :rules="[v => !!v || 'ກະລຸນາເລືອກປີການສຶກສາ']" outlined dense></v-select>

            <v-select v-model="bulkFormFields.classId" :items="classes" item-text="name" item-value="id"
              label="ເລືອກຊັ້ນຮຽນ/ຫ້ອງຮຽນ *" :rules="[v => !!v || 'ກະລຸນາເລືອກຊັ້ນຮຽນ']" outlined dense></v-select>

            <v-text-field v-model="bulkFormFields.dueDate" type="date" label="ວັນຄົບກຳນົດຊຳລະ (Due Date)" outlined dense></v-text-field>

            <v-alert type="warning" text outlined icon="mdi-alert" class="mt-2 mb-0">
              ລະບົບຈະສ້າງໃບບິນຄ່າຮຽນໃຫ້ກັບ <strong>ນັກຮຽນທຸກຄົນ</strong> ທີ່ຢູ່ໃນຊັ້ນຮຽນນີ້ ໂດຍອີງຕາມອັດຕາຄ່າທໍານຽມທີ່ກຳນົດໄວ້.
            </v-alert>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="bulkDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="generateBulkInvoices" :loading="generatingBulk" :disabled="!bulkValid">ສ້າງໃບບິນ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 2. Invoice Details & Payment Dialog -->
    <v-dialog v-model="invoiceDetailDialog" max-width="800px" persistent scrollable>
      <v-card v-if="selectedInvoice">
        <v-card-title class="primary white--text d-flex justify-space-between align-center font-weight-bold">
          <span>ໃບບິນຄ່າຮຽນ: {{ selectedInvoice.invoiceNumber }}</span>
          <v-chip :color="getStatusColor(selectedInvoice.status)" dark small>
            {{ getStatusText(selectedInvoice.status) }}
          </v-chip>
        </v-card-title>

        <v-card-text class="pt-4" style="max-height: 70vh;">
          <v-row>
            <!-- Student Details -->
            <v-col cols="12" md="6">
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ຂໍ້ມູນນັກຮຽນ (Student details)</h3>
              <v-card outlined class="pa-3 bg-light">
                <div><strong>ຊື່ ແລະ ນາມສະກຸນ:</strong> {{ selectedInvoice.student ? selectedInvoice.student.firstName + ' ' + selectedInvoice.student.lastName : '-' }}</div>
                <div><strong>ລະຫັດນັກຮຽນ:</strong> {{ selectedInvoice.student ? selectedInvoice.student.studentId : '-' }}</div>
                <div><strong>ຊັ້ນຮຽນ/ Grade:</strong> {{ selectedInvoice.student && selectedInvoice.student.schoolClass ? selectedInvoice.student.schoolClass.name : (selectedInvoice.student ? selectedInvoice.student.grade : '-') }}</div>
                <div><strong>erໂທລະສັບ:</strong> {{ selectedInvoice.student ? selectedInvoice.student.phoneNumber : '-' }}</div>
              </v-card>
            </v-col>

            <!-- Invoice Metadata -->
            <v-col cols="12" md="6">
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ລາຍລະອຽດໃບບິນ (Invoice metadata)</h3>
              <v-card outlined class="pa-3 bg-light">
                <div><strong>ປີການສຶກສາ:</strong> {{ selectedInvoice.academicYear ? selectedInvoice.academicYear.name : '-' }}</div>
                <div><strong>ວັນທີສ້າງ:</strong> {{ formatDateTime(selectedInvoice.createdAt) }}</div>
                <div><strong>ວັນຄົບກຳນົດ:</strong> {{ formatDate(selectedInvoice.dueDate) }}</div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Itemized lines breakdown -->
          <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ລາຍການຄ່າທໍານຽມ (Items Breakdown)</h3>
          <v-simple-table outlined class="mb-4">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">ລາຍການຄ່າທໍານຽມ (Item Description)</th>
                  <th class="text-right">ຈຳນວນເງິນ (Amount)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(line, index) in selectedInvoice.lines" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ line.description || (line.feeItem ? line.feeItem.name : 'School Fee') }}</td>
                  <td class="text-right font-weight-bold">{{ formatCurrency(line.amount) }} LAK</td>
                </tr>
                <!-- Totals Summary row -->
                <tr class="grey lighten-4">
                  <td colspan="2" class="text-right font-weight-bold">ລວມທັງໝົດ (Total Amount):</td>
                  <td class="text-right font-weight-bold text-h6 primary--text">{{ formatCurrency(selectedInvoice.totalAmount) }} LAK</td>
                </tr>
                <tr class="grey lighten-4">
                  <td colspan="2" class="text-right font-weight-bold text-success">ຊຳລະແລ້ວ (Paid Amount):</td>
                  <td class="text-right font-weight-bold text-success">{{ formatCurrency(selectedInvoice.paidAmount) }} LAK</td>
                </tr>
                <tr class="grey lighten-4">
                  <td colspan="2" class="text-right font-weight-bold text-error">ຄ້າງຊຳລະ (Remaining Balance):</td>
                  <td class="text-right font-weight-bold text-error text-h6">{{ formatCurrency(selectedInvoice.balanceAmount) }} LAK</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <!-- Quick Payment Section if Unpaid / Partial -->
          <div v-if="selectedInvoice.status !== 'PAID'">
            <v-divider class="my-4"></v-divider>
            <div class="d-flex align-center justify-space-between mb-3">
              <h3 class="text-subtitle-1 font-weight-bold text-success">ຮັບຊຳລະເງິນ (Collect Payment)</h3>
              <v-chip v-if="!activeShift" color="error" small class="font-weight-bold">
                <v-icon left x-small>mdi-alert-circle</v-icon>
                ຕ້ອງເປີດ Shift ກ່ອນຈຶ່ງຮັບຊຳລະໄດ້
              </v-chip>
            </div>

            <!-- Collect Payment Form -->
            <v-card class="pa-4 bg-light-green" outlined>
              <v-form ref="paymentForm" v-model="paymentValid">
                <v-row dense>
                  <v-col cols="12" sm="4">
                    <v-text-field v-model.number="paymentFormFields.amount" type="number" label="ຈຳນວນເງິນຊຳລະ *"
                      :rules="[
                        v => !!v || 'ກະລຸນາປ້ອນຈຳນວນເງິນ',
                        v => v > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0'
                      ]" outlined dense suffix="LAK" @input="checkCappingRule"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-select v-model="paymentFormFields.paymentMethodId" :items="paymentMethods" item-text="payment_name"
                      item-value="id" label="ຊ່ອງທາງການຊຳລະ *" :rules="[v => !!v || 'ກະລຸນາເລືອກຊ່ອງທາງ']"
                      outlined dense></v-select>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field v-model="paymentFormFields.referenceNo" label="ເລກອ້າງອີງ (Ref No.)" outlined dense></v-text-field>
                  </v-col>
                </v-row>
              </v-form>

              <!-- Payment excess warning -->
              <v-alert v-if="paymentWarning" type="error" dense class="mt-2 mb-0" icon="mdi-alert-octagon">
                {{ paymentWarning }}
              </v-alert>

              <div class="d-flex justify-end mt-3">
                <v-btn color="success" :disabled="!paymentValid || !activeShift || !!paymentWarning"
                  :loading="submittingPayment" @click="submitPayment">
                  <v-icon left>mdi-check</v-icon>
                  ຢືນຢັນການຊຳລະເງິນ
                </v-btn>
              </div>
            </v-card>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="invoiceDetailDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 3. Open Cashier Shift Dialog -->
    <v-dialog v-model="shiftOpenDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          <v-icon left color="white">mdi-cash-register</v-icon>
          ເປີດກະເປົາເງິນ (Open Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="shiftOpenForm">
            <v-text-field v-model.number="shiftFormFields.openingCash" type="number" label="ເງິນສົດເລີ່ມຕົ້ນ (Opening Cash) *"
              outlined dense suffix="LAK" :rules="[v => v >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="shiftOpenDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="openShift" :loading="savingShift">ຢືນຢັນເປີດ Shift</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 4. Close Cashier Shift Dialog -->
    <v-dialog v-model="shiftCloseDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="error white--text font-weight-bold">
          <v-icon left color="white">mdi-lock</v-icon>
          ປິດກະເປົາເງິນ (Close Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="shiftCloseForm">
            <v-text-field v-model.number="shiftFormFields.closingCash" type="number" label="ເງິນສົດສະຫຼຸບປິດ (Closing Cash) *"
              outlined dense suffix="LAK" :rules="[v => v >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"></v-text-field>
          </v-form>
          <v-alert type="error" text outlined icon="mdi-alert" class="mt-2 mb-0">
            ເມື່ອປິດ Shift ແລ້ວ ທ່ານຈະບໍ່ສາມາດຮັບຊຳລະເງິນໄດ້ຈົນກວ່າຈະເປີດ Shift ໃໝ່.
          </v-alert>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="shiftCloseDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="error" @click="closeShift" :loading="savingShift">ຢືນຢັນປິດ Shift</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 5. Create Academic Year Dialog -->
    <v-dialog v-model="yearDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">ເພີ່ມປີການສຶກສາ (New Academic Year)</v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="yearForm" v-model="yearValid">
            <v-text-field v-model="yearFormFields.name" label="ຊື່ປີການສຶກສາ (e.g. 2026-2027) *"
              :rules="[v => !!v || 'กະລຸນາປ້ອນຊື່ປີການສຶກສາ']" outlined dense></v-text-field>
            <v-text-field v-model="yearFormFields.startDate" type="date" label="ວັນທີເລີ່ມຕົ້ນ *"
              :rules="[v => !!v || 'ກະລຸນາເລືອກວັນທີເລີ່ມຕົ້ນ']" outlined dense></v-text-field>
            <v-text-field v-model="yearFormFields.endDate" type="date" label="ວັນທີສິ້ນສຸດ *"
              :rules="[v => !!v || 'ກະລຸນາເລືອກວັນທີສິ້ນສຸດ']" outlined dense></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="yearDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveAcademicYear" :loading="savingYear" :disabled="!yearValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 6. Create Class Dialog -->
    <v-dialog v-model="classDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">ເພີ່ມຊັ້ນຮຽນ (New Class)</v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="classForm" v-model="classValid">
            <v-text-field v-model="classFormFields.name" label="ຊື່ຊັ້ນຮຽນ (e.g. Grade 1) *"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ຊັ້ນຮຽນ']" outlined dense></v-text-field>
            <v-select v-model="classFormFields.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ປີການສຶກສາ *" :rules="[v => !!v || 'ກະລຸນາເລືອກປີການສຶກສາ']" outlined dense></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="classDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveClass" :loading="savingClass" :disabled="!classValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 7. Create Fee Item Dialog -->
    <v-dialog v-model="feeItemDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">ເພີ່ມລາຍການຄ່າທໍານຽມ (New Fee Item)</v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="feeItemForm" v-model="feeItemValid">
            <v-text-field v-model="feeItemFormFields.name" label="ຊື່ຄ່າທໍານຽມ (e.g. Tuition, Books) *"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ຄ່າທໍານຽມ']" outlined dense></v-text-field>
            <v-textarea v-model="feeItemFormFields.description" label="ຄຳອະທິບາຍ (Description)" outlined dense rows="3"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="feeItemDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveFeeItem" :loading="savingFeeItem" :disabled="!feeItemValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 8. Create Fee Structure Dialog -->
    <v-dialog v-model="feeStructureDialog" max-width="500px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">ກຳນົດອັດຕາຄ່າທໍານຽມ (New Fee Structure)</v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="feeStructureForm" v-model="feeStructureValid">
            <v-select v-model="feeStructureFormFields.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ປີການສຶກສາ *" :rules="[v => !!v || 'ກະລຸນາເລືອກປີການສຶກສາ']" outlined dense></v-select>

            <v-select v-model="feeStructureFormFields.classId" :items="classes" item-text="name" item-value="id"
              label="ຊັ້ນຮຽນ (ເລືອກຫວ່າງຫາກເປັນຄ່າທໍານຽມທົ່ວໄປ/Global)" outlined dense clearable></v-select>

            <v-select v-model="feeStructureFormFields.feeItemId" :items="feeItems" item-text="name" item-value="id"
              label="ລາຍການຄ່າທໍານຽມ *" :rules="[v => !!v || 'ກະລຸນາເລືອກລາຍການຄ່າທໍານຽມ']" outlined dense></v-select>

            <v-text-field v-model.number="feeStructureFormFields.amount" type="number" label="ຈຳນວນເງິນອັດຕາ *"
              :rules="[
                v => !!v || 'ກະລຸນາປ້ອນຈຳນວນເງິນ',
                v => v > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0'
              ]" outlined dense suffix="LAK"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="feeStructureDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveFeeStructure" :loading="savingFeeStructure" :disabled="!feeStructureValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'SchoolBillingDashboard',
  middleware: 'auths',
  data() {
    return {
      activeTab: 0,
      activeShift: null,
      paymentWarning: null,

      tabs: [
        { text: 'ໃບບິນຄ່າຮຽນ (Invoices)', icon: 'mdi-file-document-outline' },
        { text: 'ລາຍງານ ແລະ ກະທົບຍອດ (Reports)', icon: 'mdi-finance' },
        { text: 'ປີການສຶກສາ & ຊັ້ນຮຽນ (Acad. & Classes)', icon: 'mdi-google-classroom' },
        { text: 'ຕັ້ງຄ່າຄ່າທໍານຽມ (Fee Setup)', icon: 'mdi-cash-cog' },
        { text: 'ຈັດການ Shift ເຮັດວຽກ (Shift Control)', icon: 'mdi-cash-register' }
      ],

      // Filters
      filters: {
        academicYearId: null,
        classId: null,
        status: null,
        search: ''
      },
      invoiceStatuses: ['UNPAID', 'PARTIAL', 'PAID'],

      // Lists
      invoices: [],
      academicYears: [],
      classes: [],
      feeItems: [],
      feeStructures: [],
      paymentMethods: [],
      dailyCollections: [],
      outstandingInvoices: [],

      // Loadings
      loadingInvoices: false,
      loadingYears: false,
      loadingClasses: false,
      loadingFeeItems: false,
      loadingFeeStructures: false,
      loadingDailyReport: false,
      loadingOutstandingReport: false,

      // Dialog controls
      bulkDialog: false,
      invoiceDetailDialog: false,
      shiftOpenDialog: false,
      shiftCloseDialog: false,
      yearDialog: false,
      classDialog: false,
      feeItemDialog: false,
      feeStructureDialog: false,

      // Dialog validations
      bulkValid: true,
      paymentValid: true,
      yearValid: true,
      classValid: true,
      feeItemValid: true,
      feeStructureValid: true,

      // Selected record
      selectedInvoice: null,

      // Generating/Saving Loadings
      generatingBulk: false,
      submittingPayment: false,
      savingShift: false,
      savingYear: false,
      savingClass: false,
      savingFeeItem: false,
      savingFeeStructure: false,

      // Form Models
      bulkFormFields: {
        classId: null,
        academicYearId: null,
        dueDate: ''
      },
      paymentFormFields: {
        amount: 0,
        paymentMethodId: null,
        referenceNo: ''
      },
      shiftFormFields: {
        openingCash: 0,
        closingCash: 0
      },
      yearFormFields: {
        name: '',
        startDate: '',
        endDate: ''
      },
      classFormFields: {
        name: '',
        academicYearId: null
      },
      feeItemFormFields: {
        name: '',
        description: ''
      },
      feeStructureFormFields: {
        academicYearId: null,
        classId: null,
        feeItemId: null,
        amount: 0
      },

      // Reports
      reportDate: new Date().toISOString().split('T')[0],
      dailyReportTotal: 0,

      // Headers
      invoiceHeaders: [
        { text: 'ລຳດັບ', value: 'index', width: '60px', sortable: false },
        { text: 'ເລກໃບບິນ (Invoice No)', value: 'invoiceNumber' },
        { text: 'ນັກຮຽນ (Student)', value: 'student' },
        { text: 'ຊັ້ນຮຽນ (Class)', value: 'class' },
        { text: 'ປີການສຶກສາ', value: 'academicYear.name' },
        { text: 'ວັນຄົບກຳນົດ', value: 'dueDate', sortable: true },
        { text: 'ຍອດລວມ', value: 'totalAmount', align: 'right' },
        { text: 'ชຳລະແລ້ວ', value: 'paidAmount', align: 'right' },
        { text: 'ຍອດຄ້າງຊຳລະ', value: 'balanceAmount', align: 'right' },
        { text: 'ສະຖານະ', value: 'status', align: 'center' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center' }
      ],
      dailyReportHeaders: [
        { text: 'ແຄັດເຊຍ (Cashier)', value: 'cashier' },
        { text: 'ຮູບແບບການຊຳລະ', value: 'paymentMethod', align: 'center' },
        { text: 'ຍອດເກັບລວມ', value: 'totalAmount', align: 'right' }
      ],
      outstandingReportHeaders: [
        { text: 'ນັກຮຽນ (Student)', value: 'student' },
        { text: 'ເລກໃບບິນ', value: 'invoiceNumber' },
        { text: 'ຜູ້ປົກຄອງ (Parent Contact)', value: 'parent' },
        { text: 'ຍອດຄ້າງຊຳລະ', value: 'balanceAmount', align: 'right' },
        { text: 'ວັນຄົບກຳນົດ', value: 'dueDate', align: 'center' }
      ],
      yearHeaders: [
        { text: 'ປີການສຶກສາ (Academic Period)', value: 'name' },
        { text: 'ວັນທີເລີ່ມຕົ້ນ', value: 'startDate' },
        { text: 'ວັນທີສິ້ນສຸດ', value: 'endDate' }
      ],
      classHeaders: [
        { text: 'ຊື່ຊັ້ນຮຽນ (Class Name)', value: 'name' },
        { text: 'ປີການສຶກສາ', value: 'academicYear' }
      ],
      feeItemHeaders: [
        { text: 'ຊື່ລາຍການຄ່າທໍານຽມ', value: 'name' },
        { text: 'ຄຳອະທິບາຍ', value: 'description' }
      ],
      feeStructureHeaders: [
        { text: 'ປີການສຶກສາ', value: 'academicYear.name' },
        { text: 'ຊັ້ນຮຽນ', value: 'class' },
        { text: 'ລາຍການ', value: 'feeItem' },
        { text: 'ຈຳນວນເງິນອັດຕາ', value: 'amount', align: 'right' }
      ]
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadFeeItems();
    this.loadFeeStructures();
    this.loadPaymentMethods();
    this.loadInvoices();
    this.fetchDailyReport();
    this.fetchOutstandingReport();
  },
  computed: {
    classSummary() {
      const total = this.invoices.length;
      if (total === 0) {
        return { total: 0, paid: 0, partial: 0, unpaid: 0, paidPercent: 0, partialPercent: 0, unpaidPercent: 0 };
      }
      const paid = this.invoices.filter(i => i.status === 'PAID').length;
      const partial = this.invoices.filter(i => i.status === 'PARTIAL').length;
      const unpaid = this.invoices.filter(i => i.status === 'UNPAID').length;

      return {
        total,
        paid,
        partial,
        unpaid,
        paidPercent: Math.round((paid / total) * 100),
        partialPercent: Math.round((partial / total) * 100),
        unpaidPercent: Math.round((unpaid / total) * 100)
      };
    }
  },
  methods: {
    // ---------------------------------
    // COMMON HELPERS
    // ---------------------------------
    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    formatDate(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleDateString('en-GB');
    },
    formatDateTime(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleString('en-GB');
    },
    getStatusColor(status) {
      if (status === 'PAID') return 'success';
      if (status === 'PARTIAL') return 'warning';
      return 'error';
    },
    getStatusText(status) {
      if (status === 'PAID') return 'ຊຳລະແລ້ວ';
      if (status === 'PARTIAL') return 'ຊຳລະບາງສ່ວນ';
      return 'ຍັງບໍ່ຊຳລະ';
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    },

    // ---------------------------------
    // ACTIVE SHIFT API BINDINGS
    // ---------------------------------
    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        this.activeShift = null;
      }
    },
    async openShift() {
      this.savingShift = true;
      try {
        const res = await this.$axios.post('/api/school/shifts/open', {
          openingCash: this.shiftFormFields.openingCash
        });
        this.activeShift = res.data.shift || res.data;
        this.$toast.success('ເປີດ Shift ສຳເລັດແລ້ວ');
        this.shiftOpenDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດເປີດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },
    openCloseShiftDialog() {
      this.shiftFormFields.closingCash = this.activeShift ? this.activeShift.openingCash : 0;
      this.shiftCloseDialog = true;
    },
    async closeShift() {
      if (!this.activeShift) return;
      this.savingShift = true;
      try {
        await this.$axios.put(`/api/school/shifts/close/${this.activeShift.id}`, {
          closingCash: this.shiftFormFields.closingCash
        });
        this.activeShift = null;
        this.$toast.success('ປິດ Shift ສຳເລັດແລ້ວ');
        this.shiftCloseDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດປິດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },

    // ---------------------------------
    // ACADEMIC YEARS API BINDINGS
    // ---------------------------------
    async loadAcademicYears() {
      this.loadingYears = true;
      try {
        const res = await this.$axios.get('/api/school/academic-years');
        this.academicYears = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingYears = false;
      }
    },
    openYearDialog() {
      this.yearFormFields = { name: '', startDate: '', endDate: '' };
      this.yearDialog = true;
    },
    async saveAcademicYear() {
      this.savingYear = true;
      try {
        await this.$axios.post('/api/school/academic-years', this.yearFormFields);
        this.$toast.success('ບັນທຶກປີການສຶກສາສຳເລັດ');
        this.loadAcademicYears();
        this.yearDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingYear = false;
      }
    },

    // ---------------------------------
    // CLASSES API BINDINGS
    // ---------------------------------
    async loadClasses() {
      this.loadingClasses = true;
      try {
        const res = await this.$axios.get('/api/school/classes');
        this.classes = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingClasses = false;
      }
    },
    openClassDialog() {
      this.classFormFields = { name: '', academicYearId: this.academicYears[0]?.id || null };
      this.classDialog = true;
    },
    async saveClass() {
      this.savingClass = true;
      try {
        await this.$axios.post('/api/school/classes', this.classFormFields);
        this.$toast.success('ບັນທຶກຊັ້ນຮຽນສຳເລັດ');
        this.loadClasses();
        this.classDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingClass = false;
      }
    },

    // ---------------------------------
    // FEE ITEMS API BINDINGS
    // ---------------------------------
    async loadFeeItems() {
      this.loadingFeeItems = true;
      try {
        const res = await this.$axios.get('/api/school/fee-items');
        this.feeItems = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingFeeItems = false;
      }
    },
    openFeeItemDialog() {
      this.feeItemFormFields = { name: '', description: '' };
      this.feeItemDialog = true;
    },
    async saveFeeItem() {
      this.savingFeeItem = true;
      try {
        await this.$axios.post('/api/school/fee-items', this.feeItemFormFields);
        this.$toast.success('ບັນທຶກລາຍການຄ່າທໍານຽມສຳເລັດ');
        this.loadFeeItems();
        this.feeItemDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingFeeItem = false;
      }
    },

    // ---------------------------------
    // FEE STRUCTURES API BINDINGS
    // ---------------------------------
    async loadFeeStructures() {
      this.loadingFeeStructures = true;
      try {
        const res = await this.$axios.get('/api/school/fee-structures');
        this.feeStructures = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingFeeStructures = false;
      }
    },
    openFeeStructureDialog() {
      this.feeStructureFormFields = {
        academicYearId: this.academicYears[0]?.id || null,
        classId: null,
        feeItemId: this.feeItems[0]?.id || null,
        amount: 0
      };
      this.feeStructureDialog = true;
    },
    async saveFeeStructure() {
      this.savingFeeStructure = true;
      try {
        await this.$axios.post('/api/school/fee-structures', this.feeStructureFormFields);
        this.$toast.success('ບັນທຶກອັດຕາຄ່າທໍານຽມສຳເລັດ');
        this.loadFeeStructures();
        this.feeStructureDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingFeeStructure = false;
      }
    },

    // ---------------------------------
    // INVOICES & BULK GENERATION API BINDINGS
    // ---------------------------------
    async loadInvoices() {
      this.loadingInvoices = true;
      try {
        const params = {};
        if (this.filters.academicYearId) params.academicYearId = this.filters.academicYearId;
        if (this.filters.classId) params.classId = this.filters.classId;
        if (this.filters.status) params.status = this.filters.status;

        const res = await this.$axios.get('/api/school/invoices', { params });
        let list = res.data || [];

        // Client-side search match in case backend doesn't support complex keyword search
        if (this.filters.search) {
          const keyword = this.filters.search.toLowerCase();
          list = list.filter(item => {
            const num = item.invoiceNumber.toLowerCase();
            const studentId = item.student?.studentId?.toLowerCase() || '';
            const fName = item.student?.firstName?.toLowerCase() || '';
            const lName = item.student?.lastName?.toLowerCase() || '';
            return num.includes(keyword) || studentId.includes(keyword) || fName.includes(keyword) || lName.includes(keyword);
          });
        }
        this.invoices = list;
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingInvoices = false;
      }
    },
    openBulkDialog() {
      this.bulkFormFields = {
        classId: this.classes[0]?.id || null,
        academicYearId: this.academicYears[0]?.id || null,
        dueDate: ''
      };
      this.bulkDialog = true;
    },
    async generateBulkInvoices() {
      this.generatingBulk = true;
      try {
        const res = await this.$axios.post('/api/school/invoices/bulk', this.bulkFormFields);
        this.$toast.success(res.data?.message || 'ສ້າງໃບບິນກຸ່ມສຳເລັດ');
        this.loadInvoices();
        this.bulkDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດສ້າງໃບບິນໄດ້');
      } finally {
        this.generatingBulk = false;
      }
    },
    async viewInvoiceDetails(item) {
      try {
        const res = await this.$axios.get(`/api/school/invoices/${item.id}`);
        this.selectedInvoice = res.data;
        this.paymentFormFields = {
          amount: this.selectedInvoice.balanceAmount,
          paymentMethodId: this.paymentMethods[0]?.id || null,
          referenceNo: ''
        };
        this.paymentWarning = null;
        this.invoiceDetailDialog = true;
      } catch (err) {
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍລະອຽດໄດ້');
      }
    },

    // ---------------------------------
    // PAYMENTS & CAPPING VALIDATIONS
    // ---------------------------------
    async loadPaymentMethods() {
      try {
        const res = await this.$axios.get('/api/paymentMethod');
        this.paymentMethods = res.data || [];
      } catch (err) {
        console.error('Error fetching payment methods:', err);
      }
    },
    checkCappingRule() {
      if (!this.selectedInvoice) return;
      const amt = Number(this.paymentFormFields.amount || 0);
      const limit = Number(this.selectedInvoice.balanceAmount || 0);
      if (amt > limit) {
        this.paymentWarning = `ຍອດເງິນທີ່ຊຳລະ (${this.formatCurrency(amt)}) ກາຍຍອດຄ້າງຊຳລະ (${this.formatCurrency(limit)})! ລະບົບບໍ່ອະນຸຍາດ.`;
      } else {
        this.paymentWarning = null;
      }
    },
    async submitPayment() {
      if (!this.selectedInvoice) return;
      this.checkCappingRule();
      if (this.paymentWarning) return;

      this.submittingPayment = true;
      try {
        await this.$axios.post('/api/school/payments', {
          schoolInvoiceId: this.selectedInvoice.id,
          amount: this.paymentFormFields.amount,
          paymentMethodId: this.paymentFormFields.paymentMethodId,
          referenceNo: this.paymentFormFields.referenceNo,
          cashierShiftId: this.activeShift ? this.activeShift.id : null
        });

        this.$toast.success('ບັນທຶກການຊຳລະເງິນສຳເລັດ');
        this.invoiceDetailDialog = false;
        this.loadInvoices();
        this.fetchDailyReport();
        this.fetchOutstandingReport();
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດຊຳລະເງິນໄດ້');
      } finally {
        this.submittingPayment = false;
      }
    },

    // ---------------------------------
    // REPORTS API BINDINGS
    // ---------------------------------
    async fetchDailyReport() {
      this.loadingDailyReport = true;
      try {
        const res = await this.$axios.get('/api/school/reports/daily-collections', {
          params: { date: this.reportDate }
        });
        const list = res.data?.collections || [];
        this.dailyCollections = list;
        this.dailyReportTotal = list.reduce((sum, item) => sum + Number(item.totalAmount || 0), 0);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingDailyReport = false;
      }
    },
    async fetchOutstandingReport() {
      this.loadingOutstandingReport = true;
      try {
        const res = await this.$axios.get('/api/school/reports/overdue-balances');
        this.outstandingInvoices = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingOutstandingReport = false;
      }
    }
  }
}
</script>

<style scoped>
.school-billing-dashboard * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
.bg-light {
  background-color: #f8f9fa !important;
}
.bg-light-green {
  background-color: #f1f8e9 !important;
}
.h-100 {
  height: 100%;
}
</style>
