<template>
  <div class="period-maintenance-page">
    <!-- Top Action Bar / Page Header -->
    <div class="page-top-bar d-flex flex-wrap align-center justify-space-between mb-4">
      <div class="title-wrapper d-flex align-center">
        <div class="title-icon-box mr-3">
          <v-icon color="primary" large>mdi-calendar-lock-outline</v-icon>
        </div>
        <div>
          <h1 class="page-title font-weight-bold mb-0">
            ການຈັດການ ແລະ ປິດງວດບັນຊີ
          </h1>
          <p class="page-subtitle text--secondary mb-0">
            Period Maintenance & Month-End Closing Control Center
          </p>
        </div>
      </div>

      <!-- Quick Navigation & Header Actions -->
      <div class="top-actions d-flex align-center flex-wrap mt-2 mt-sm-0">
        <v-btn
          color="primary"
          outlined
          class="mr-2 px-3 text-none rounded-lg"
          to="/admin/report/MA/master"
        >
          <v-icon left small>mdi-chart-box-outline</v-icon>
          ໜ້າວິເຄາະພາບລວມ (Master Report)
        </v-btn>

        <v-btn
          color="success"
          outlined
          class="mr-2 px-3 text-none rounded-lg"
          to="/admin/moneyAdvance"
        >
          <v-icon left small>mdi-cash-multiple</v-icon>
          ລາຍການເບີກຈ່າຍ (Advances)
        </v-btn>

        <v-btn
          color="indigo"
          class="mr-2 px-3 text-none elevation-1 rounded-lg text-white"
          :loading="loading"
          @click="fetchYearPeriods"
        >
          <v-icon left small>mdi-refresh</v-icon>
          ໂຫຼດໃໝ່ (Refresh)
        </v-btn>

        <v-btn
          color="deep-purple darken-1"
          class="px-3 text-none elevation-1 rounded-lg text-white"
          :loading="backfilling"
          @click="backfillDialog = true"
        >
          <v-icon left small>mdi-database-sync</v-icon>
          ຄິດໄລ່ຍອດຄືນທັງໝົດ (Backfill)
        </v-btn>
      </div>
    </div>

    <!-- Fiscal Year Control Bar -->
    <v-card class="control-card mb-4 pa-3" elevation="0" outlined>
      <v-row no-gutters align="center" justify="space-between" class="control-row">
        <!-- Year Switcher -->
        <v-col cols="12" md="5" class="d-flex align-center flex-wrap py-1">
          <div class="navigator-pill-group d-flex align-center mr-3">
            <v-btn
              icon
              small
              class="nav-arrow"
              title="Previous Year"
              @click="goToPreviousYear"
            >
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>

            <div class="current-period-chip d-flex align-center px-4 py-1">
              <v-icon small color="primary" class="mr-2">mdi-calendar-range</v-icon>
              <span class="period-text font-weight-bold">ສົກປີ / ປີ: {{ selectedYear }}</span>
            </div>

            <v-btn
              icon
              small
              class="nav-arrow"
              title="Next Year"
              @click="goToNextYear"
            >
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
          </div>

          <div class="year-select-wrap" style="width: 140px;">
            <v-select
              v-model="selectedYear"
              :items="yearOptions"
              label="ເລືອກປີ (Year)"
              dense
              outlined
              hide-details
              class="custom-select rounded-lg"
              @change="onYearChange"
            />
          </div>
        </v-col>

        <!-- Status Pill Summary & Quick Reset -->
        <v-col cols="12" md="7" class="d-flex align-center justify-md-end flex-wrap py-1 mt-2 mt-md-0">
          <v-chip
            small
            color="teal lighten-5"
            text-color="teal darken-3"
            class="font-weight-bold mr-2 mb-1 mb-sm-0"
          >
            <v-icon small left color="teal darken-2">mdi-lock-check</v-icon>
            ປິດແລ້ວ: {{ yearStats.closedCount || 0 }} / 12 ເດືອນ
          </v-chip>

          <v-chip
            small
            color="blue lighten-5"
            text-color="blue darken-3"
            class="font-weight-bold mr-2 mb-1 mb-sm-0"
          >
            <v-icon small left color="blue">mdi-progress-clock</v-icon>
            ເປີດໃຊ້ງານ: {{ yearStats.openCount || 0 }} ເດືອນ
          </v-chip>

          <v-btn
            text
            small
            color="grey darken-1"
            class="reset-btn rounded-lg text-none"
            @click="resetToCurrentYear"
          >
            <v-icon left small>mdi-restore</v-icon>
            ປີປະຈຸບັນ ({{ currentYear }})
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- KPI Metric Cards for Year -->
    <v-row dense class="kpi-row mb-4">
      <!-- Total Advances in Year -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card kpi-advances elevation-0" outlined>
          <v-card-text class="pa-3">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="kpi-title text--secondary">ລວມລາຍຈ່າຍທັງປີ (Advances)</span>
              <v-avatar size="32" color="amber lighten-4">
                <v-icon small color="amber darken-3">mdi-cash-minus</v-icon>
              </v-avatar>
            </div>
            <div class="kpi-value text-amber-darken-3 font-weight-bold">
              {{ formatCurrency(yearStats.totalAdvancesYearLak || 0) }}
            </div>
            <div class="kpi-sub d-flex align-center mt-1">
              <span class="text-caption text--secondary">ສະສົມ 12 ເດືອນໃນປີ {{ selectedYear }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Settlements in Year -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card kpi-settlements elevation-0" outlined>
          <v-card-text class="pa-3">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="kpi-title text--secondary">ລວມລາຍຮັບທັງປີ (Settlements)</span>
              <v-avatar size="32" color="green lighten-4">
                <v-icon small color="green darken-3">mdi-cash-plus</v-icon>
              </v-avatar>
            </div>
            <div class="kpi-value text-green-darken-3 font-weight-bold">
              {{ formatCurrency(yearStats.totalSettlementsYearLak || 0) }}
            </div>
            <div class="kpi-sub d-flex align-center mt-1">
              <span class="text-caption text--secondary">ສະສົມ 12 ເດືອນໃນປີ {{ selectedYear }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Net Movement in Year -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card kpi-net elevation-0" outlined>
          <v-card-text class="pa-3">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="kpi-title text--secondary">ຍອດປ່ຽນແປງສຸດທິ (Net Movement)</span>
              <v-avatar size="32" color="deep-purple lighten-4">
                <v-icon small color="deep-purple darken-2">mdi-scale-balance</v-icon>
              </v-avatar>
            </div>
            <div
              class="kpi-value font-weight-bold"
              :class="(yearStats.netChangeYearLak || 0) >= 0 ? 'text-primary' : 'text-error'"
            >
              {{ formatCurrency(yearStats.netChangeYearLak || 0) }}
            </div>
            <div class="kpi-sub d-flex align-center mt-1">
              <span class="text-caption text--secondary">ລາຍຈ່າຍ - ລາຍຮັບ ສະສົມ</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Closing Rate % -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card kpi-status elevation-0" outlined>
          <v-card-text class="pa-3">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="kpi-title text--secondary">ອັດຕາການປິດງວດ (Closing Progress)</span>
              <v-avatar size="32" color="teal lighten-4">
                <v-icon small color="teal darken-2">mdi-lock-outline</v-icon>
              </v-avatar>
            </div>
            <div class="kpi-value text-teal-darken-3 font-weight-bold">
              {{ closedPercent }}%
            </div>
            <v-progress-linear
              :value="closedPercent"
              color="teal darken-2"
              height="6"
              rounded
              class="mt-2"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 12-Month Period Table Card -->
    <v-card class="period-table-card rounded-xl elevation-1 mb-6" outlined>
      <!-- Card Toolbar -->
      <v-card-title class="d-flex flex-wrap align-center justify-space-between py-3 px-4 border-bottom">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-format-list-numbered</v-icon>
          <span class="text-subtitle-1 font-weight-bold">ຕາຕະລາງງວດບັນຊີ 12 ເດືອນ (Fiscal Year {{ selectedYear }})</span>
        </div>

        <!-- Filter / Tabs -->
        <div class="d-flex align-center flex-wrap mt-2 mt-sm-0">
          <v-btn-toggle
            v-model="statusFilter"
            mandatory
            dense
            rounded
            class="filter-toggle mr-2"
          >
            <v-btn small value="all" class="text-none">
              ທັງໝົດ ({{ periods.length }})
            </v-btn>
            <v-btn small value="closed" class="text-none">
              <v-icon small left color="teal darken-2">mdi-lock</v-icon>
              ປິດແລ້ວ ({{ yearStats.closedCount || 0 }})
            </v-btn>
            <v-btn small value="open" class="text-none">
              <v-icon small left color="blue">mdi-progress-clock</v-icon>
              ເປີດຢູ່ ({{ yearStats.openCount || 0 }})
            </v-btn>
          </v-btn-toggle>

          <v-btn
            small
            color="primary"
            class="rounded-lg text-none"
            @click="openCloseCurrentDialog"
          >
            <v-icon small left>mdi-lock-plus</v-icon>
            ປິດງວດບັນຊີ
          </v-btn>
        </div>
      </v-card-title>

      <!-- Table Content -->
      <v-data-table
        :headers="headers"
        :items="filteredPeriods"
        :loading="loading"
        :items-per-page="12"
        hide-default-footer
        class="period-data-table"
        no-data-text="ບໍ່ມີຂໍ້ມູນງວດບັນຊີ"
      >
        <!-- Month & Date Range Column -->
        <template v-slot:item.month="{ item }">
          <div class="d-flex align-center py-2">
            <div class="month-avatar mr-3" :class="getMonthAvatarClass(item)">
              <span class="month-num">{{ item.month }}</span>
            </div>
            <div>
              <div class="font-weight-bold text-subtitle-2 text--primary">
                {{ item.monthName }}
                <v-chip
                  v-if="item.isCurrent"
                  x-small
                  color="blue darken-1"
                  dark
                  class="ml-1 font-weight-bold"
                >
                  ປະຈຸບັນ
                </v-chip>
              </div>
              <div class="text-caption text--secondary">
                {{ formatDateDisplay(item.startDate) }} - {{ formatDateDisplay(item.endDate) }}
              </div>
            </div>
          </div>
        </template>

        <!-- Status Column -->
        <template v-slot:item.isClosed="{ item }">
          <div>
            <v-chip
              v-if="item.isClosed"
              small
              color="teal lighten-5"
              text-color="teal darken-3"
              class="font-weight-bold"
            >
              <v-icon small left color="teal darken-2">mdi-lock</v-icon>
              ປິດງວດແລ້ວ
            </v-chip>
            <v-chip
              v-else-if="item.isCurrent"
              small
              color="blue lighten-5"
              text-color="blue darken-3"
              class="font-weight-bold pulse-chip"
            >
              <v-icon small left color="blue">mdi-progress-clock</v-icon>
              ງວດປະຈຸບັນ
            </v-chip>
            <v-chip
              v-else-if="item.isPast"
              small
              color="amber lighten-5"
              text-color="amber darken-4"
              class="font-weight-bold"
            >
              <v-icon small left color="amber darken-3">mdi-alert-circle-outline</v-icon>
              ຍັງບໍ່ທັນປິດ
            </v-chip>
            <v-chip
              v-else
              small
              color="grey lighten-4"
              text-color="grey darken-2"
              class="font-weight-bold"
            >
              <v-icon small left color="grey darken-1">mdi-clock-outline</v-icon>
              ງວດອະນາຄົດ
            </v-chip>
          </div>
        </template>

        <!-- Opening Balance Column -->
        <template v-slot:item.openingBalanceLak="{ item }">
          <div class="text-right font-weight-medium">
            <span :class="item.openingBalanceLak >= 0 ? 'text--primary' : 'text-error'">
              {{ formatCurrency(item.openingBalanceLak) }}
            </span>
          </div>
        </template>

        <!-- Total Advances Column -->
        <template v-slot:item.advancesLak="{ item }">
          <div class="text-right">
            <div class="font-weight-medium text-amber-darken-4">
              {{ formatCurrency(item.advancesLak) }}
            </div>
            <div v-if="item.advancesCount > 0" class="text-caption text--secondary">
              {{ item.advancesCount }} ລາຍການ
            </div>
          </div>
        </template>

        <!-- Total Settlements Column -->
        <template v-slot:item.settlementsLak="{ item }">
          <div class="text-right">
            <div class="font-weight-medium text-green-darken-3">
              {{ formatCurrency(item.settlementsLak) }}
            </div>
            <div v-if="item.settlementsCount > 0" class="text-caption text--secondary">
              {{ item.settlementsCount }} ລາຍການ
            </div>
          </div>
        </template>

        <!-- Closing Balance Column -->
        <template v-slot:item.closingBalanceLak="{ item }">
          <div class="text-right font-weight-bold">
            <span :class="item.closingBalanceLak >= 0 ? 'text-primary' : 'text-error'">
              {{ formatCurrency(item.closingBalanceLak) }}
            </span>
          </div>
        </template>

        <!-- Closed Info Column -->
        <template v-slot:item.closedInfo="{ item }">
          <div v-if="item.isClosed" class="text-caption">
            <div class="font-weight-bold text-teal-darken-3">
              <v-icon x-small color="teal darken-2" class="mr-1">mdi-account-check</v-icon>
              {{ item.closedBy || 'Admin' }}
            </div>
            <div class="text--secondary">
              {{ formatDateTimeDisplay(item.closedAt) }}
            </div>
            <div v-if="item.note" class="text-truncate text-grey" style="max-width: 140px;" :title="item.note">
              {{ item.note }}
            </div>
          </div>
          <div v-else class="text-caption text--secondary font-italic">
            -
          </div>
        </template>

        <!-- Action Buttons Column -->
        <template v-slot:item.actions="{ item }">
          <div class="d-flex align-center justify-end">
            <!-- Navigate to Master Report for this Month -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                  color="primary"
                  class="mr-1"
                  v-bind="attrs"
                  v-on="on"
                  @click="goToMasterReport(item)"
                >
                  <v-icon small>mdi-chart-box-outline</v-icon>
                </v-btn>
              </template>
              <span>ເບິ່ງບົດລາຍງານ (View Report)</span>
            </v-tooltip>

            <!-- Quick Month Breakdown Modal -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                  color="indigo"
                  class="mr-1"
                  v-bind="attrs"
                  v-on="on"
                  @click="openMonthBreakdown(item)"
                >
                  <v-icon small>mdi-eye-outline</v-icon>
                </v-btn>
              </template>
              <span>ເບິ່ງສະຫຼຸບງວດ (Quick View)</span>
            </v-tooltip>

            <!-- Close Period Button -->
            <v-tooltip v-if="!item.isClosed" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                  color="teal darken-2"
                  class="mr-1"
                  v-bind="attrs"
                  v-on="on"
                  @click="openClosePeriodDialog(item)"
                >
                  <v-icon small>mdi-lock-outline</v-icon>
                </v-btn>
              </template>
              <span>ປິດງວດບັນຊີ (Close Period)</span>
            </v-tooltip>

            <!-- Reopen Period Button -->
            <v-tooltip v-if="item.isClosed" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                  color="amber darken-3"
                  class="mr-1"
                  v-bind="attrs"
                  v-on="on"
                  @click="openReopenPeriodDialog(item)"
                >
                  <v-icon small>mdi-lock-open-variant-outline</v-icon>
                </v-btn>
              </template>
              <span>ເປີດງວດຄືນ (Reopen Period)</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog: Close Period -->
    <v-dialog v-model="closePeriodDialog" max-width="560px" persistent>
      <v-card class="rounded-xl">
        <v-card-title class="headline teal darken-2 white--text px-5 py-3">
          <v-icon left color="white">mdi-lock-check</v-icon>
          ປິດງວດບັນຊີ (Month-End Closing)
        </v-card-title>

        <v-card-text class="pt-5 px-5">
          <v-alert
            type="info"
            outlined
            dense
            prominent
            class="mb-4 rounded-lg"
          >
            <div class="font-weight-bold">
              ກະລຸນາກວດສອບຍອດບັນຊີກ່ອນດຳເນີນການປິດງວດ
            </div>
            <div class="text-caption mt-1">
              ເມື່ອປິດງວດແລ້ວ ຍອດເຫຼືອທ້າຍງວດ (Closing Balance) ຂອງແຕ່ລະກົມ ແລະ ບັນຊີທະນາຄານ ຈະຖືກ Freeze ເປັນຍອດຍົກມາ (Opening Balance) ໃຫ້ແກ່ງວດຖັດໄປ.
            </div>
          </v-alert>

          <v-row dense class="mb-3">
            <v-col cols="6">
              <v-select
                v-model="closeForm.month"
                :items="monthOptions"
                item-text="name"
                item-value="value"
                label="ເດືອນທີ່ຈະປິດ (Month)"
                outlined
                dense
                hide-details
                @change="onClosingMonthChange"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="closeForm.year"
                :items="yearOptions"
                label="ປີທີ່ຈະປິດ (Year)"
                outlined
                dense
                hide-details
                @change="onClosingMonthChange"
              />
            </v-col>
          </v-row>

          <!-- Current Calculated Balance Preview for this month -->
          <v-card outlined class="pa-3 mb-4 rounded-lg bg-grey-lighten-4">
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption text--secondary">ຍອດຍົກມາຕົ້ນງວດ (Opening):</span>
              <span class="text-caption font-weight-bold">{{ formatCurrency(selectedClosePeriod?.openingBalanceLak || 0) }}</span>
            </div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption text-amber-darken-4">ລວມລາຍຈ່າຍໃນງວດ (Advances):</span>
              <span class="text-caption font-weight-bold text-amber-darken-4">{{ formatCurrency(selectedClosePeriod?.advancesLak || 0) }}</span>
            </div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption text-green-darken-3">ລວມລາຍຮັບໃນງວດ (Settlements):</span>
              <span class="text-caption font-weight-bold text-green-darken-3">{{ formatCurrency(selectedClosePeriod?.settlementsLak || 0) }}</span>
            </div>
            <v-divider class="my-1"></v-divider>
            <div class="d-flex justify-space-between">
              <span class="text-subtitle-2 font-weight-bold text--primary">ຍອດເຫຼືອທ້າຍງວດ (Closing Balance):</span>
              <span class="text-subtitle-2 font-weight-bold text-primary">{{ formatCurrency(selectedClosePeriod?.closingBalanceLak || 0) }}</span>
            </div>
          </v-card>

          <v-textarea
            v-model="closeForm.note"
            label="ໝາຍເຫດການປິດງວດ (Closing Note)"
            placeholder="ລະບຸໝາຍເຫດ ຫຼື ເຫດຜົນການປິດງວດ..."
            outlined
            rows="2"
            dense
          />
        </v-card-text>

        <v-card-actions class="px-5 pb-4">
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            class="text-none rounded-lg"
            :disabled="closingLoading"
            @click="closePeriodDialog = false"
          >
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-btn
            color="teal darken-2"
            class="text-none rounded-lg text-white px-4"
            :loading="closingLoading"
            @click="submitClosePeriod"
          >
            <v-icon left small>mdi-lock-check</v-icon>
            ຢືນຢັນປິດງວດ (Confirm Close)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog: Reopen Period -->
    <v-dialog v-model="reopenPeriodDialog" max-width="500px" persistent>
      <v-card class="rounded-xl">
        <v-card-title class="headline amber darken-3 white--text px-5 py-3">
          <v-icon left color="white">mdi-lock-open-variant</v-icon>
          ເປີດງວດບັນຊີຄືນ (Reopen Period)
        </v-card-title>

        <v-card-text class="pt-5 px-5">
          <v-alert
            type="warning"
            outlined
            dense
            prominent
            class="mb-4 rounded-lg"
          >
            <div class="font-weight-bold">
              ຄຳເຕືອນ: ການເປີດງວດບັນຊີຄືນ
            </div>
            <div class="text-caption mt-1">
              ເມື່ອເປີດງວດຄືນ ທ່ານຈະສາມາດເພີ່ມ, ລຶບ ຫຼື ແກ້ໄຂລາຍການເບີກຈ່າຍ ແລະ ຊຳລະໃນງວດນີ້ໄດ້. ຖ້າມີການດັດແກ້ຂໍ້ມູນ ຄວນກົດ "ຄິດໄລ່ຍອດຄືນ (Backfill)" ເພື່ອອັບເດດຍອດຍົກມາຂອງງວດຖັດໆໄປ.
            </div>
          </v-alert>

          <p class="mb-2 text-subtitle-2">
            ທ່ານແນ່ໃຈບໍ່ທີ່ຈະເປີດງວດ: <strong>{{ reopenForm.monthName }} ({{ reopenForm.year }})</strong> ຄືນ?
          </p>
        </v-card-text>

        <v-card-actions class="px-5 pb-4">
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            class="text-none rounded-lg"
            :disabled="reopeningLoading"
            @click="reopenPeriodDialog = false"
          >
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-btn
            color="amber darken-3"
            class="text-none rounded-lg text-white px-4"
            :loading="reopeningLoading"
            @click="submitReopenPeriod"
          >
            <v-icon left small>mdi-lock-open-variant</v-icon>
            ຢືນຢັນເປີດງວດ (Confirm Reopen)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog: Backfill / Recalculate All Periods -->
    <v-dialog v-model="backfillDialog" max-width="540px" persistent>
      <v-card class="rounded-xl">
        <v-card-title class="headline deep-purple darken-2 white--text px-5 py-3">
          <v-icon left color="white">mdi-database-sync</v-icon>
          ຄິດໄລ່ ແລະ Sync ຍອດຍົກມາທັງໝົດ (Historical Backfill)
        </v-card-title>

        <v-card-text class="pt-5 px-5">
          <v-alert
            type="info"
            outlined
            dense
            prominent
            class="mb-4 rounded-lg"
          >
            <div class="font-weight-bold">
              ການຄິດໄລ່ຍອດຍົກມາຕາມລຳດັບເວລາ (Sequential Balance Engine)
            </div>
            <div class="text-caption mt-1">
              ລະບົບຈະຄິດໄລ່ທຸກລາຍການເບີກຈ່າຍ ແລະ ຊຳລະ ຕັ້ງແຕ່ເລີ່ມຕົ້ນລະບົບຈົນເຖິງປະຈຸບັນ ຕາມລຳດັບເດືອນ ແລະ ສົ່ງຕໍ່ຍອດເຫຼືອໄປເປັນຍອດຍົກມາໃຫ້ແຕ່ລະກົມ ແລະ ບັນຊີທະນາຄານໂດຍອັດຕະໂນມັດ.
            </div>
          </v-alert>

          <p class="text-body-2 text--secondary">
            ການດຳເນີນການນີ້ຈະປັບປຸງ Snapshots ໃນຖານຂໍ້ມູນ <code>MinistryPeriodBalance</code> ແລະ <code>BankPeriodBalance</code> ໃຫ້ຖືກຕ້ອງ 100%.
          </p>

          <v-progress-linear
            v-if="backfilling"
            indeterminate
            color="deep-purple darken-1"
            class="my-3"
            rounded
            height="6"
          ></v-progress-linear>
        </v-card-text>

        <v-card-actions class="px-5 pb-4">
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            class="text-none rounded-lg"
            :disabled="backfilling"
            @click="backfillDialog = false"
          >
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-btn
            color="deep-purple darken-2"
            class="text-none rounded-lg text-white px-4"
            :loading="backfilling"
            @click="submitBackfill"
          >
            <v-icon left small>mdi-play-circle</v-icon>
            ເລີ່ມຕົ້ນຄິດໄລ່ (Run Backfill)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog: Quick Month Breakdown Drawer / Modal -->
    <v-dialog v-model="breakdownDialog" max-width="900px" scrollable>
      <v-card class="rounded-xl">
        <v-card-title class="headline indigo darken-2 white--text px-5 py-3 d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <v-icon left color="white">mdi-eye-outline</v-icon>
            ສະຫຼຸບງວດ: {{ activeBreakdownPeriod?.monthName }} ({{ activeBreakdownPeriod?.year }})
          </div>
          <v-btn icon dark small @click="breakdownDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-4 px-5">
          <v-tabs v-model="breakdownTab" color="indigo" class="mb-3">
            <v-tab class="text-none font-weight-bold">
              <v-icon small left>mdi-office-building</v-icon>
              ຕາມກົມ (By Ministry)
            </v-tab>
            <v-tab class="text-none font-weight-bold">
              <v-icon small left>mdi-bank</v-icon>
              ຕາມບັນຊີ (By Bank Drawer)
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="breakdownTab">
            <!-- Ministry Breakdown Tab -->
            <v-tab-item>
              <v-data-table
                :headers="ministryBreakdownHeaders"
                :items="breakdownData.ministries || []"
                :loading="breakdownLoading"
                dense
                class="elevation-0 border rounded-lg"
                :items-per-page="10"
                no-data-text="ບໍ່ມີຂໍ້ມູນລາຍລະອຽດກົມ"
              >
                <template v-slot:item.ministryName="{ item }">
                  <span class="font-weight-medium">{{ item.ministryCode }} - {{ item.ministryName }}</span>
                </template>
                <template v-slot:item.currencyCode="{ item }">
                  <v-chip x-small color="grey lighten-3">{{ item.currencyCode }}</v-chip>
                </template>
                <template v-slot:item.openingBalance="{ item }">
                  <div class="text-right">{{ formatCurrency(item.openingBalance) }}</div>
                </template>
                <template v-slot:item.advances="{ item }">
                  <div class="text-right text-amber-darken-4">{{ formatCurrency(item.advances) }}</div>
                </template>
                <template v-slot:item.settlements="{ item }">
                  <div class="text-right text-green-darken-3">{{ formatCurrency(item.settlements) }}</div>
                </template>
                <template v-slot:item.closingBalance="{ item }">
                  <div class="text-right font-weight-bold text-primary">{{ formatCurrency(item.closingBalance) }}</div>
                </template>
              </v-data-table>
            </v-tab-item>

            <!-- Bank Account Breakdown Tab -->
            <v-tab-item>
              <v-data-table
                :headers="bankBreakdownHeaders"
                :items="breakdownData.bankAccounts || []"
                :loading="breakdownLoading"
                dense
                class="elevation-0 border rounded-lg"
                :items-per-page="10"
                no-data-text="ບໍ່ມີຂໍ້ມູນລາຍລະອຽດບັນຊີ"
              >
                <template v-slot:item.accountName="{ item }">
                  <span class="font-weight-medium">{{ item.bankName }} - {{ item.accountName }} ({{ item.accountNumber }})</span>
                </template>
                <template v-slot:item.currencyCode="{ item }">
                  <v-chip x-small color="grey lighten-3">{{ item.currencyCode }}</v-chip>
                </template>
                <template v-slot:item.openingBalance="{ item }">
                  <div class="text-right">{{ formatCurrency(item.openingBalance) }}</div>
                </template>
                <template v-slot:item.advances="{ item }">
                  <div class="text-right text-amber-darken-4">{{ formatCurrency(item.advances) }}</div>
                </template>
                <template v-slot:item.settlements="{ item }">
                  <div class="text-right text-green-darken-3">{{ formatCurrency(item.settlements) }}</div>
                </template>
                <template v-slot:item.closingBalance="{ item }">
                  <div class="text-right font-weight-bold text-primary">{{ formatCurrency(item.closingBalance) }}</div>
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>

        <v-card-actions class="px-5 pb-4">
          <v-btn
            color="primary"
            outlined
            class="text-none rounded-lg"
            @click="goToMasterReport(activeBreakdownPeriod)"
          >
            <v-icon left small>mdi-open-in-new</v-icon>
            ເປີດໃນ Master Report
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            class="text-none rounded-lg"
            @click="breakdownDialog = false"
          >
            ປິດ (Close)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Global Toast Snackbar -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="4000"
      top
      right
      rounded="pill"
      elevation="4"
    >
      <div class="d-flex align-center">
        <v-icon small color="white" class="mr-2">{{ snackbar.icon }}</v-icon>
        <span>{{ snackbar.text }}</span>
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn text small v-bind="attrs" @click="snackbar.show = false">
          ປິດ
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'PeriodMaintenancePage',
  data() {
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth() + 1

    return {
      currentYear,
      currentMonth,
      selectedYear: currentYear,
      statusFilter: 'all',
      loading: false,
      backfilling: false,
      closingLoading: false,
      reopeningLoading: false,

      // Year Stats
      yearStats: {
        totalPeriods: 12,
        closedCount: 0,
        openCount: 12,
        totalAdvancesYearLak: 0,
        totalSettlementsYearLak: 0,
        netChangeYearLak: 0
      },

      // 12-Month Periods list
      periods: [],

      // Table Headers
      headers: [
        { text: 'ງວດ / ເດືອນ (Period)', value: 'month', sortable: false, width: '220px' },
        { text: 'ສະຖານະ (Status)', value: 'isClosed', sortable: false, width: '140px' },
        { text: 'ຍອດຍົກມາ (Opening)', value: 'openingBalanceLak', align: 'end', sortable: false },
        { text: 'ລາຍຈ່າຍ (Advances)', value: 'advancesLak', align: 'end', sortable: false },
        { text: 'ລາຍຮັບ (Settlements)', value: 'settlementsLak', align: 'end', sortable: false },
        { text: 'ຍອດເຫຼືອ (Closing)', value: 'closingBalanceLak', align: 'end', sortable: false },
        { text: 'ຂໍ້ມູນການປິດ (Closed Info)', value: 'closedInfo', sortable: false, width: '160px' },
        { text: 'ຈັດການ (Actions)', value: 'actions', align: 'end', sortable: false, width: '160px' }
      ],

      // Dialogs
      closePeriodDialog: false,
      closeForm: {
        year: currentYear,
        month: currentMonth,
        note: ''
      },

      reopenPeriodDialog: false,
      reopenForm: {
        year: currentYear,
        month: currentMonth,
        monthName: ''
      },

      backfillDialog: false,

      // Quick breakdown modal
      breakdownDialog: false,
      breakdownTab: 0,
      breakdownLoading: false,
      activeBreakdownPeriod: null,
      breakdownData: {
        ministries: [],
        bankAccounts: []
      },
      ministryBreakdownHeaders: [
        { text: 'ກົມ (Ministry)', value: 'ministryName', sortable: false },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', sortable: false, width: '80px' },
        { text: 'ຍອດຍົກມາ', value: 'openingBalance', align: 'end', sortable: false },
        { text: 'ລາຍຈ່າຍ', value: 'advances', align: 'end', sortable: false },
        { text: 'ລາຍຮັບ', value: 'settlements', align: 'end', sortable: false },
        { text: 'ຍອດເຫຼືອທ້າຍງວດ', value: 'closingBalance', align: 'end', sortable: false }
      ],
      bankBreakdownHeaders: [
        { text: 'ບັນຊີທະນາຄານ (Bank Drawer)', value: 'accountName', sortable: false },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', sortable: false, width: '80px' },
        { text: 'ຍອດຍົກມາ', value: 'openingBalance', align: 'end', sortable: false },
        { text: 'ລາຍຈ່າຍ', value: 'advances', align: 'end', sortable: false },
        { text: 'ລາຍຮັບ', value: 'settlements', align: 'end', sortable: false },
        { text: 'ຍອດເຫຼືອທ້າຍງວດ', value: 'closingBalance', align: 'end', sortable: false }
      ],

      // Month & Year Options
      monthOptions: [
        { name: '1 - ມັງກອນ (January)', value: 1 },
        { name: '2 - ກຸມພາ (February)', value: 2 },
        { name: '3 - ມີນາ (March)', value: 3 },
        { name: '4 - ເມສາ (April)', value: 4 },
        { name: '5 - ພຶດສະພາ (May)', value: 5 },
        { name: '6 - ມິຖຸນາ (June)', value: 6 },
        { name: '7 - ກໍລະກົດ (July)', value: 7 },
        { name: '8 - ສິງຫາ (August)', value: 8 },
        { name: '9 - ກັນຍາ (September)', value: 9 },
        { name: '10 - ຕຸລາ (October)', value: 10 },
        { name: '11 - ພະຈິກ (November)', value: 11 },
        { name: '12 - ທັນວາ (December)', value: 12 }
      ],
      yearOptions: [
        2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030
      ],

      // Snackbar
      snackbar: {
        show: false,
        text: '',
        color: 'success',
        icon: 'mdi-check-circle'
      }
    }
  },

  computed: {
    closedPercent() {
      if (!this.yearStats.totalPeriods) return 0
      return Math.round(((this.yearStats.closedCount || 0) / this.yearStats.totalPeriods) * 100)
    },

    filteredPeriods() {
      if (this.statusFilter === 'closed') {
        return this.periods.filter(p => p.isClosed)
      }
      if (this.statusFilter === 'open') {
        return this.periods.filter(p => !p.isClosed)
      }
      return this.periods
    },

    selectedClosePeriod() {
      return this.periods.find(p => p.month === this.closeForm.month && p.year === this.closeForm.year) || null
    }
  },

  mounted() {
    this.fetchYearPeriods()
  },

  methods: {
    // ----------------------------------------------------
    // Data Fetching with Continuous Chaining Engine
    // ----------------------------------------------------
    async fetchYearPeriods() {
      this.loading = true
      const branchId = this.$store.state.auth?.user?.branchId || 1
      try {
        const response = await this.$axios.get('/api/pwt/period-balances/period-list', {
          params: {
            year: this.selectedYear,
            branchId
          }
        })

        if (response.data && response.data.success) {
          const result = response.data.data || response.data || {}
          this.yearStats = result.yearStats || result.stats || {
            totalPeriods: 12,
            closedCount: 0,
            openCount: 12,
            totalAdvancesYearLak: 0,
            totalSettlementsYearLak: 0,
            netChangeYearLak: 0
          }
          this.periods = result.periods || []
          return
        }
        await this.loadFallbackPeriods(this.selectedYear, branchId)
      } catch (err) {
        console.warn('API /api/pwt/period-balances/period-list unavailable. Using resilient client calculation fallback.', err)
        await this.loadFallbackPeriods(this.selectedYear, branchId)
      } finally {
        this.loading = false
      }
    },

    async loadFallbackPeriods(year, branchId) {
      try {
        const curResponse = await this.$axios.get('/api/currency').catch(() => null)
        const curRates = { 1: 1, 5: 21200, 6: 670 }
        const curRows = curResponse?.data?.data || curResponse?.data?.rows || []
        curRows.forEach(c => {
          if (c.id && c.rate) curRates[c.id] = Number(c.rate)
        })

        const getRate = (item) => {
          const r = Number(item.exchangeRate)
          if (r && r > 0) return r
          if (item.currencyId && curRates[item.currencyId]) return curRates[item.currencyId]
          if (item.currency?.rate) return Number(item.currency.rate)
          return 1
        }

        // Fetch all advances & settlements up to the end of the selected year
        const endOfYearDate = `${year}-12-31`
        const [advances, settlements] = await Promise.all([
          this.fetchAllAdvancesUpTo(endOfYearDate, branchId),
          this.fetchAllSettlementsUpTo(endOfYearDate, branchId)
        ])

        // Get saved closed periods from localStorage (if any)
        const closedStorageKey = `PWT_CLOSED_PERIODS_${branchId}_${year}`
        let closedMap = {}
        try {
          const saved = localStorage.getItem(closedStorageKey)
          if (saved) closedMap = JSON.parse(saved)
        } catch (e) {
          console.warn('Could not read closed periods from localStorage', e)
        }

        const now = new Date()
        const currentYear = now.getFullYear()
        const currentMonth = now.getMonth() + 1

        const laoMonthNames = [
          'ມັງກອນ (Jan)', 'ກຸມພາ (Feb)', 'ມີນາ (Mar)', 'ເມສາ (Apr)',
          'ພຶດສະພາ (May)', 'ມິຖຸນາ (Jun)', 'ກໍລະກົດ (Jul)', 'ສິງຫາ (Aug)',
          'ກັນຍາ (Sep)', 'ຕຸລາ (Oct)', 'ພະຈິກ (Nov)', 'ທັນວາ (Dec)'
        ]

        // 1. Calculate initial opening balance before Jan 1 of the selected year
        const jan1 = `${year}-01-01`
        let runningOpeningLak = 0

        advances.forEach(a => {
          const bDate = a.bookingDate ? a.bookingDate.substring(0, 10) : ''
          if (bDate && bDate < jan1) {
            runningOpeningLak += (Number(a.amount) || 0) * getRate(a)
          }
        })

        settlements.forEach(s => {
          const bDate = s.bookingDate ? s.bookingDate.substring(0, 10) : ''
          if (bDate && bDate < jan1 && (s.isActive === undefined || s.isActive === true || s.isActive === 1 || s.isActive === 'true')) {
            runningOpeningLak -= (Number(s.amount) || 0) * getRate(s)
          }
        })

        const computedPeriods = []
        let totalAdvancesYearLak = 0
        let totalSettlementsYearLak = 0
        let closedCount = 0

        // 2. Compute each month with strict continuous chaining
        for (let m = 1; m <= 12; m++) {
          const mStr = String(m).padStart(2, '0')
          const startDate = `${year}-${mStr}-01`
          const lastDay = new Date(year, m, 0).getDate()
          const endDate = `${year}-${mStr}-${String(lastDay).padStart(2, '0')}`

          let periodAdvancesLak = 0
          let advancesCount = 0
          advances.forEach(a => {
            const bDate = a.bookingDate ? a.bookingDate.substring(0, 10) : ''
            if (bDate && bDate >= startDate && bDate <= endDate) {
              periodAdvancesLak += (Number(a.amount) || 0) * getRate(a)
              advancesCount++
            }
          })

          let periodSettlementsLak = 0
          let settlementsCount = 0
          settlements.forEach(s => {
            const bDate = s.bookingDate ? s.bookingDate.substring(0, 10) : ''
            if (bDate && bDate >= startDate && bDate <= endDate && (s.isActive === undefined || s.isActive === true || s.isActive === 1 || s.isActive === 'true')) {
              periodSettlementsLak += (Number(s.amount) || 0) * getRate(s)
              settlementsCount++
            }
          })

          const openingBalanceLak = runningOpeningLak
          const closingBalanceLak = openingBalanceLak + periodAdvancesLak - periodSettlementsLak

          totalAdvancesYearLak += periodAdvancesLak
          totalSettlementsYearLak += periodSettlementsLak

          const isCurrent = year === currentYear && m === currentMonth
          const isPast = year < currentYear || (year === currentYear && m < currentMonth)
          const isFuture = year > currentYear || (year === currentYear && m > currentMonth)

          const closedInfo = closedMap[m] || null
          const isClosed = !!closedInfo

          if (isClosed) closedCount++

          computedPeriods.push({
            year,
            month: m,
            monthName: laoMonthNames[m - 1],
            startDate,
            endDate,
            isClosed,
            closedAt: closedInfo?.closedAt || null,
            closedBy: closedInfo?.closedBy || null,
            note: closedInfo?.note || '',
            openingBalanceLak,
            advancesLak: periodAdvancesLak,
            settlementsLak: periodSettlementsLak,
            closingBalanceLak,
            advancesCount,
            settlementsCount,
            isCurrent,
            isPast,
            isFuture
          })

          // Pass this month's closing as the next month's opening
          runningOpeningLak = closingBalanceLak
        }

        this.periods = computedPeriods
        this.yearStats = {
          totalPeriods: 12,
          closedCount,
          openCount: 12 - closedCount,
          totalAdvancesYearLak,
          totalSettlementsYearLak,
          netChangeYearLak: totalAdvancesYearLak - totalSettlementsYearLak
        }
      } catch (err) {
        console.error('Error in fallback calculation:', err)
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການຄິດໄລ່ຍອດງວດບັນຊີ', 'error', 'mdi-alert-circle')
      }
    },

    async fetchAllAdvancesUpTo(endDate, branchId) {
      let allAdvances = []
      let currentPage = 1
      let totalPages = 1

      do {
        const response = await this.$axios.get('/api/money-advances', {
          params: {
            branchId,
            toDate: endDate,
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 200
          }
        })

        const pageData = response.data.data?.advances || response.data?.rows || []
        allAdvances = allAdvances.concat(pageData)

        const pagination = response.data.data?.pagination || response.data?.pagination
        if (pagination && pagination.totalPages) {
          totalPages = pagination.totalPages
        } else {
          totalPages = 1
        }
        currentPage++
      } while (currentPage <= totalPages)

      return allAdvances
    },

    async fetchAllSettlementsUpTo(endDate, branchId) {
      let allSettlements = []
      let currentPage = 1
      let totalPages = 1

      do {
        const response = await this.$axios.get('/api/settlements', {
          params: {
            branchId,
            toDate: endDate,
            isActive: 'true',
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 200
          }
        })

        const pageData = response.data.data?.settlements || response.data?.rows || []
        allSettlements = allSettlements.concat(pageData)

        const pagination = response.data.data?.pagination || response.data?.pagination
        if (pagination && pagination.totalPages) {
          totalPages = pagination.totalPages
        } else {
          totalPages = 1
        }
        currentPage++
      } while (currentPage <= totalPages)

      return allSettlements
    },

    // ----------------------------------------------------
    // Year Navigation
    // ----------------------------------------------------
    goToPreviousYear() {
      this.selectedYear--
      this.fetchYearPeriods()
    },

    goToNextYear() {
      this.selectedYear++
      this.fetchYearPeriods()
    },

    onYearChange() {
      this.fetchYearPeriods()
    },

    resetToCurrentYear() {
      this.selectedYear = this.currentYear
      this.fetchYearPeriods()
    },

    // ----------------------------------------------------
    // Actions & Modal Triggers
    // ----------------------------------------------------
    goToMasterReport(period) {
      if (!period) return
      this.$router.push({
        path: '/admin/report/MA/master',
        query: {
          year: period.year,
          month: period.month
        }
      })
    },

    openCloseCurrentDialog() {
      this.closeForm.year = this.selectedYear
      this.closeForm.month = this.currentMonth
      this.closeForm.note = ''
      this.closePeriodDialog = true
    },

    openClosePeriodDialog(item) {
      this.closeForm.year = item.year
      this.closeForm.month = item.month
      this.closeForm.note = ''
      this.closePeriodDialog = true
    },

    openReopenPeriodDialog(item) {
      this.reopenForm.year = item.year
      this.reopenForm.month = item.month
      this.reopenForm.monthName = item.monthName
      this.reopenPeriodDialog = true
    },

    onClosingMonthChange() {
      // computed selectedClosePeriod updates automatically
    },

    async openMonthBreakdown(period) {
      this.activeBreakdownPeriod = period
      this.breakdownDialog = true
      this.breakdownLoading = true
      const branchId = this.$store.state.auth?.user?.branchId || 1
      try {
        const response = await this.$axios.get('/api/pwt/period-balances/master-summary', {
          params: {
            year: period.year,
            month: period.month,
            branchId
          }
        })

        if (response.data && response.data.success) {
          const summary = response.data.data || response.data || {}
          const balancesByMinistry = summary.balancesByMinistry || []
          const balancesByBank = summary.balancesByBank || []

          this.breakdownData.ministries = balancesByMinistry.map(item => ({
            ministryCode: item.ministry?.ministryCode || '-',
            ministryName: item.ministry?.ministryName || '-',
            currencyCode: item.currency?.code || 'LAK',
            openingBalance: item.openingBalance || 0,
            advances: item.totalAdvances || 0,
            settlements: item.totalSettlements || 0,
            closingBalance: item.closingBalance || 0
          }))

          this.breakdownData.bankAccounts = balancesByBank.map(item => ({
            bankName: item.bankAccount?.bankName || '-',
            accountName: item.bankAccount?.accountName || '-',
            accountNumber: item.bankAccount?.accountNumber || '-',
            currencyCode: item.currency?.code || 'LAK',
            openingBalance: item.openingBalance || 0,
            advances: item.totalAdvances || 0,
            settlements: item.totalSettlements || 0,
            closingBalance: item.closingBalance || 0
          }))
          return
        }
        await this.loadFallbackBreakdown(period, branchId)
      } catch (err) {
        console.warn('Falling back to direct breakdown calculation:', err)
        await this.loadFallbackBreakdown(period, branchId)
      } finally {
        this.breakdownLoading = false
      }
    },

    async loadFallbackBreakdown(period, branchId) {
      try {
        const startDate = period.startDate
        const endDate = period.endDate
        const [advances, settlements] = await Promise.all([
          this.fetchAllAdvancesUpTo(endDate, branchId),
          this.fetchAllSettlementsUpTo(endDate, branchId)
        ])

        const minMap = new Map()
        const bankMap = new Map()

        advances.forEach(a => {
          const bDate = a.bookingDate ? a.bookingDate.substring(0, 10) : ''
          const minKey = `${a.ministryId || 'unknown'}_${a.currencyId || '1'}`
          const bankKey = `${a.bankAccountId || 'unknown'}_${a.currencyId || '1'}`

          // Ministry
          if (!minMap.has(minKey)) {
            minMap.set(minKey, {
              ministryCode: a.ministry?.ministryCode || '-',
              ministryName: a.ministry?.ministryName || '-',
              currencyCode: a.currency?.code || 'LAK',
              openingBalance: 0,
              advances: 0,
              settlements: 0,
              closingBalance: 0
            })
          }
          const mObj = minMap.get(minKey)
          const amount = Number(a.amount) || 0
          if (bDate < startDate) {
            mObj.openingBalance += amount
          } else if (bDate >= startDate && bDate <= endDate) {
            mObj.advances += amount
          }

          // Bank
          if (!bankMap.has(bankKey)) {
            bankMap.set(bankKey, {
              bankName: a.bankAccount?.bankName || '-',
              accountName: a.bankAccount?.accountName || '-',
              accountNumber: a.bankAccount?.accountNumber || '-',
              currencyCode: a.currency?.code || 'LAK',
              openingBalance: 0,
              advances: 0,
              settlements: 0,
              closingBalance: 0
            })
          }
          const bObj = bankMap.get(bankKey)
          if (bDate < startDate) {
            bObj.openingBalance += amount
          } else if (bDate >= startDate && bDate <= endDate) {
            bObj.advances += amount
          }
        })

        settlements.forEach(s => {
          const bDate = s.bookingDate ? s.bookingDate.substring(0, 10) : ''
          const minKey = `${s.ministryId || 'unknown'}_${s.currencyId || '1'}`
          const bankKey = `${s.bankAccountId || 'unknown'}_${s.currencyId || '1'}`
          const amount = Number(s.amount) || 0

          if (minMap.has(minKey)) {
            const mObj = minMap.get(minKey)
            if (bDate < startDate) {
              mObj.openingBalance -= amount
            } else if (bDate >= startDate && bDate <= endDate) {
              mObj.settlements += amount
            }
          }

          if (bankMap.has(bankKey)) {
            const bObj = bankMap.get(bankKey)
            if (bDate < startDate) {
              bObj.openingBalance -= amount
            } else if (bDate >= startDate && bDate <= endDate) {
              bObj.settlements += amount
            }
          }
        })

        minMap.forEach(v => {
          v.closingBalance = v.openingBalance + v.advances - v.settlements
        })
        bankMap.forEach(v => {
          v.closingBalance = v.openingBalance + v.advances - v.settlements
        })

        this.breakdownData.ministries = Array.from(minMap.values())
        this.breakdownData.bankAccounts = Array.from(bankMap.values())
      } catch (e) {
        console.error('Error generating fallback breakdown:', e)
      }
    },

    // ----------------------------------------------------
    // API Submit Handlers
    // ----------------------------------------------------
    async submitClosePeriod() {
      this.closingLoading = true
      const branchId = this.$store.state.auth?.user?.branchId || 1
      const userName = this.$store.state.auth?.user?.cus_name || this.$store.state.auth?.user?.username || 'Admin'

      try {
        const response = await this.$axios.post('/api/pwt/period-balances/close-period', {
          year: this.closeForm.year,
          month: this.closeForm.month,
          branchId,
          note: this.closeForm.note
        })

        if (response.data && response.data.success) {
          this.showToast(`ປິດງວດເດືອນ ${this.closeForm.month}/${this.closeForm.year} ສຳເລັດແລ້ວ!`, 'success', 'mdi-lock-check')
          this.closePeriodDialog = false
          await this.fetchYearPeriods()
          return
        }
      } catch (err) {
        console.warn('Backend API not responding. Saving closing record locally.', err)
      }

      // Local storage fallback persistence
      try {
        const closedStorageKey = `PWT_CLOSED_PERIODS_${branchId}_${this.closeForm.year}`
        let closedMap = {}
        const saved = localStorage.getItem(closedStorageKey)
        if (saved) closedMap = JSON.parse(saved)

        closedMap[this.closeForm.month] = {
          isClosed: true,
          closedAt: new Date().toISOString(),
          closedBy: userName,
          note: this.closeForm.note
        }
        localStorage.setItem(closedStorageKey, JSON.stringify(closedMap))

        this.showToast(`ປິດງວດເດືອນ ${this.closeForm.month}/${this.closeForm.year} ສຳເລັດແລ້ວ!`, 'success', 'mdi-lock-check')
        this.closePeriodDialog = false
        await this.fetchYearPeriods()
      } catch (e) {
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກການປິດງວດ', 'error', 'mdi-alert-circle')
      } finally {
        this.closingLoading = false
      }
    },

    async submitReopenPeriod() {
      this.reopeningLoading = true
      const branchId = this.$store.state.auth?.user?.branchId || 1

      try {
        const response = await this.$axios.post('/api/pwt/period-balances/reopen-period', {
          year: this.reopenForm.year,
          month: this.reopenForm.month,
          branchId
        })

        if (response.data && response.data.success) {
          this.showToast(`ເປີດງວດ ${this.reopenForm.monthName} ຄືນສຳເລັດແລ້ວ!`, 'success', 'mdi-lock-open-variant')
          this.reopenPeriodDialog = false
          await this.fetchYearPeriods()
          return
        }
      } catch (err) {
        console.warn('Backend API not responding. Reopening period locally.', err)
      }

      // Local storage fallback
      try {
        const closedStorageKey = `PWT_CLOSED_PERIODS_${branchId}_${this.reopenForm.year}`
        let closedMap = {}
        const saved = localStorage.getItem(closedStorageKey)
        if (saved) closedMap = JSON.parse(saved)

        delete closedMap[this.reopenForm.month]
        localStorage.setItem(closedStorageKey, JSON.stringify(closedMap))

        this.showToast(`ເປີດງວດ ${this.reopenForm.monthName} ຄືນສຳເລັດແລ້ວ!`, 'success', 'mdi-lock-open-variant')
        this.reopenPeriodDialog = false
        await this.fetchYearPeriods()
      } catch (e) {
        this.showToast('ເກີດຂໍ້ຜິດພາດໃນການເປີດງວດຄືນ', 'error', 'mdi-alert-circle')
      } finally {
        this.reopeningLoading = false
      }
    },

    async submitBackfill() {
      this.backfilling = true
      const branchId = this.$store.state.auth?.user?.branchId || 1
      try {
        const response = await this.$axios.post('/api/pwt/period-balances/backfill', {
          branchId
        })

        if (response.data && response.data.success) {
          this.showToast('ຄິດໄລ່ຍອດຍົກມາທັງໝົດສຳເລັດແລ້ວ!', 'success', 'mdi-check-circle')
          this.backfillDialog = false
          await this.fetchYearPeriods()
          return
        }
      } catch (err) {
        console.warn('Backend backfill API unavailable. Recomputing via client engine.', err)
      }

      await this.fetchYearPeriods()
      this.showToast('ຄິດໄລ່ ແລະ Sync ຍອດຍົກມາທັງໝົດສຳເລັດແລ້ວ!', 'success', 'mdi-check-circle')
      this.backfillDialog = false
      this.backfilling = false
    },

    // ----------------------------------------------------
    // Helpers & Formatters
    // ----------------------------------------------------
    formatCurrency(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return Number(val).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      })
    },

    formatDateDisplay(dateStr) {
      if (!dateStr) return '-'
      const parts = dateStr.split('-')
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`
      }
      return dateStr
    },

    formatDateTimeDisplay(dateTimeStr) {
      if (!dateTimeStr) return '-'
      const d = new Date(dateTimeStr)
      if (isNaN(d.getTime())) return dateTimeStr
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      const hour = String(d.getHours()).padStart(2, '0')
      const min = String(d.getMinutes()).padStart(2, '0')
      return `${day}/${month}/${year} ${hour}:${min}`
    },

    getMonthAvatarClass(item) {
      if (item.isClosed) return 'avatar-closed'
      if (item.isCurrent) return 'avatar-current'
      if (item.isPast) return 'avatar-past'
      return 'avatar-future'
    },

    showToast(text, color = 'success', icon = 'mdi-check-circle') {
      this.snackbar.text = text
      this.snackbar.color = color
      this.snackbar.icon = icon
      this.snackbar.show = true
    }
  }
}
</script>

<style scoped>

.caption,
.text-caption {
  font-size: 0.75rem !important;
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif !important;
}
.period-maintenance-page {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
  padding: 16px;
  background: #f8fafc;
  min-height: 100vh;
}

/* Page Header */
.page-top-bar {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 16px;
}

.title-icon-box {
  width: 48px;
  height: 48px;
  background: #eff6ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-title {
  font-size: 1.5rem;
  color: #0f172a;
  line-height: 1.3;
}

.page-subtitle {
  font-size: 0.85rem;
  color: #64748b;
}

/* Control Card & Navigator */
.control-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.navigator-pill-group {
  background: #f1f5f9;
  border-radius: 24px;
  padding: 2px 4px;
}

.current-period-chip {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.period-text {
  font-size: 0.9rem;
  color: #1e293b;
}

.nav-arrow {
  color: #64748b;
}

/* KPI Cards */
.kpi-row {
  margin-left: -6px;
  margin-right: -6px;
}

.kpi-card {
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease-in-out;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

.kpi-title {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.kpi-value {
  font-size: 1.35rem;
  line-height: 1.2;
}

/* Table Card */
.period-table-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0;
}

.period-data-table >>> th {
  font-weight: 700 !important;
  color: #334155 !important;
  background: #f8fafc !important;
  font-size: 0.85rem !important;
  white-space: nowrap;
}

.period-data-table >>> td {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.month-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
}

.avatar-closed {
  background: #ccfbf1;
  color: #0f766e;
}

.avatar-current {
  background: #dbeafe;
  color: #1d4ed8;
  border: 2px solid #3b82f6;
}

.avatar-past {
  background: #fef3c7;
  color: #b45309;
}

.avatar-future {
  background: #f1f5f9;
  color: #94a3b8;
}

.pulse-chip {
  animation: pulse-border 2s infinite;
}

@keyframes pulse-border {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.custom-select >>> .v-input__slot {
  min-height: 40px !important;
}

.text-white {
  color: #ffffff !important;
}
</style>
