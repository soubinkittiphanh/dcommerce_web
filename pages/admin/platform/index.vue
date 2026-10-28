<template>
  <div class="pa-4">
    <!-- Loading Overlay -->
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator v-if="$options.components['loading-indicator']"></loading-indicator>
      <v-card v-else color="primary" dark class="pa-4 text-center">
        <v-progress-circular indeterminate color="white" class="mr-3"></v-progress-circular>
        <span>ກຳລັງໂຫລດຂໍ້ມູນ...</span>
      </v-card>
    </v-dialog>

    <!-- Header Section -->
    <v-row class="mb-3" align="center" justify="space-between">
      <v-col cols="12" md="7">
        <div class="d-flex align-center">
          <v-avatar color="primary lighten-4" size="48" class="mr-3">
            <v-icon color="primary" size="28">mdi-share-variant-outline</v-icon>
          </v-avatar>
          <div>
            <h1 class="text-h5 font-weight-bold grey--text text--darken-3 mb-1">
              ຈັດການຊ່ອງທາງເຊື່ອມຕໍ່ (Platforms & Social Pages)
            </h1>
            <p class="text-caption grey--text text--darken-1 mb-0">
              ເຊື່ອມຕໍ່ Facebook, TikTok, Shopee, Lazada ແລະ ຄວບຄຸມໂຄຕ້າໜ້າ (Page Quota)
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="d-flex justify-md-end align-center flex-wrap">
        <v-btn outlined color="purple" class="mr-2 mb-2" @click="openQuotaDialog">
          <v-icon left>mdi-arrow-up-bold-box-outline</v-icon>
          ຈັດການໂຄຕ້າ (Quota)
        </v-btn>
        <v-btn color="primary" class="mb-2 elevation-2" @click="openConnectDialog(null)">
          <v-icon left>mdi-plus-circle</v-icon>
          ເຊື່ອມຕໍ່ໜ້າໃໝ່ (Connect Page)
        </v-btn>
        <v-btn icon color="grey darken-2" class="mb-2 ml-1" @click="refreshAll">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Quota KPI Summary Cards -->
    <v-row dense class="mb-4">
      <!-- Card 1: Total Allowed Quota -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="elevation-1 rounded-lg pa-4 h-100">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption grey--text text--darken-1 font-weight-medium">ໂຄຕ້າໜ້າທີ່ອະນຸຍາດ</span>
            <v-chip x-small color="primary" label class="font-weight-bold">
              {{ quotaData.planName || 'FREE' }}
            </v-chip>
          </div>
          <div class="d-flex align-baseline">
            <span class="text-h4 font-weight-bold primary--text mr-2">{{ quotaData.maxAllowed || 0 }}</span>
            <span class="text-caption grey--text">ໜ້າ (Pages Allowed)</span>
          </div>
          <div class="text-caption grey--text text--darken-1 mt-1">
            ແຜນປັດຈຸບັນຂອງຮ້ານທ່ານ
          </div>
        </v-card>
      </v-col>

      <!-- Card 2: Active Connected Pages -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="elevation-1 rounded-lg pa-4 h-100">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption grey--text text--darken-1 font-weight-medium">ໜ້າທີ່ກຳລັງໃຊ້ງານ</span>
            <v-icon size="20" color="info">mdi-check-circle-outline</v-icon>
          </div>
          <div class="d-flex align-baseline">
            <span class="text-h4 font-weight-bold info--text mr-2">{{ quotaData.activeCount || 0 }}</span>
            <span class="text-caption grey--text">/ {{ quotaData.maxAllowed || 0 }} ໜ້າ</span>
          </div>
          <v-progress-linear
            :value="quotaPercent"
            height="6"
            rounded
            :color="quotaPercent >= 100 ? 'error' : (quotaPercent >= 80 ? 'warning' : 'info')"
            class="mt-2"
          ></v-progress-linear>
        </v-card>
      </v-col>

      <!-- Card 3: Remaining Slots -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="elevation-1 rounded-lg pa-4 h-100">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption grey--text text--darken-1 font-weight-medium">ໂຄຕ້າທີ່ຍັງເຫຼືອ</span>
            <v-icon size="20" :color="quotaData.remainingSlots > 0 ? 'success' : 'error'">
              {{ quotaData.remainingSlots > 0 ? 'mdi-ticket-percent-outline' : 'mdi-alert-circle-outline' }}
            </v-icon>
          </div>
          <div class="d-flex align-baseline">
            <span class="text-h4 font-weight-bold mr-2" :class="quotaData.remainingSlots > 0 ? 'success--text' : 'error--text'">
              {{ quotaData.remainingSlots || 0 }}
            </span>
            <span class="text-caption grey--text">ຊ່ອງວ່າງ (Slots Left)</span>
          </div>
          <div class="mt-1">
            <v-chip v-if="quotaData.isLimitReached" x-small color="error" label class="font-weight-bold">
              ໂຄຕ້າເຕັມແລ້ວ (Limit Reached)
            </v-chip>
            <v-chip v-else x-small color="success" label class="font-weight-bold">
              ພ້ອມເຊື່ອມຕໍ່ໄດ້ອີກ {{ quotaData.remainingSlots }} ໜ້າ
            </v-chip>
          </div>
        </v-card>
      </v-col>

      <!-- Card 4: Estimated Monthly Platform Cost -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="elevation-1 rounded-lg pa-4 h-100">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-caption grey--text text--darken-1 font-weight-medium">ຄ່າບໍລິການລວມຕໍ່ເດືອນ</span>
            <v-icon size="20" color="purple">mdi-cash-multiple</v-icon>
          </div>
          <div class="d-flex align-baseline">
            <span class="text-h4 font-weight-bold purple--text mr-2">{{ formatNumber(monthlyEstimatedTotal) }}</span>
            <span class="text-caption grey--text">₭ (LAK/mo)</span>
          </div>
          <div class="text-caption grey--text text--darken-1 mt-1">
            ຄິດໄລ່ຕາມຈຳນວນໜ້າທີ່ເປີດໃຊ້
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Quota Alert Banner when limit is reached -->
    <v-alert
      v-if="quotaData.isLimitReached"
      dense
      prominent
      type="warning"
      class="rounded-lg mb-4"
    >
      <v-row align="center">
        <v-col class="grow text-body-2">
          <strong>ແຈ້ງເຕືອນໂຄຕ້າເຕັມ:</strong> ທ່ານໄດ້ເຊື່ອມຕໍ່ຄົບຕາມໂຄຕ້າ <strong>{{ quotaData.maxAllowed }} ໜ້າ</strong> ແລ້ວ. ຖ້າຕ້ອງການເຊື່ອມຕໍ່ໜ້າເພີ່ມເຕີມ ກະລຸນາອັບເກຣດແຜນບໍລິການ.
        </v-col>
        <v-col class="shrink">
          <v-btn small color="white" class="warning--text font-weight-bold elevation-1" @click="openQuotaDialog">
            <v-icon left small>mdi-arrow-up-bold-circle</v-icon>
            ອັບເກຣດໂຄຕ້າ
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>

    <!-- Main Navigation Tabs -->
    <v-card class="elevation-1 rounded-lg overflow-hidden">
      <v-tabs v-model="activeTab" background-color="grey lighten-4" color="primary" slider-color="primary">
        <v-tab class="font-weight-medium">
          <v-icon left>mdi-view-grid-plus-outline</v-icon>
          ໜ້າ & ບັນຊີທີ່ເຊື່ອມຕໍ່ແລ້ວ (Connected Pages)
          <v-chip x-small color="primary" class="ml-2 font-weight-bold">{{ connectedAccounts.length }}</v-chip>
        </v-tab>
        <v-tab class="font-weight-medium">
          <v-icon left>mdi-layers-outline</v-icon>
          ລາຍການເວທີທັງໝົດ (Platform Catalog)
          <v-chip x-small color="grey darken-1" dark class="ml-2 font-weight-bold">{{ platformList.length }}</v-chip>
        </v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <!-- TAB 1: Connected Accounts -->
      <v-card-text v-if="activeTab === 0" class="pa-4">
        <!-- Filter and Search Row -->
        <v-row dense class="mb-3" align="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="searchAccount"
              label="ຄົ້ນຫາຊື່ໜ້າ ຫຼື ລະຫັດ ID..."
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-magnify"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="6" md="3">
            <v-select
              v-model="filterPlatformId"
              :items="platformFilterOptions"
              label="ກັ່ນຕອງຕາມເວທີ (Platform)"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-filter-variant"
            ></v-select>
          </v-col>

          <v-col cols="6" md="3">
            <v-select
              v-model="filterStatus"
              :items="statusFilterOptions"
              label="ສະຖານະ (Status)"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-toggle-switch-outline"
            ></v-select>
          </v-col>

          <v-col cols="12" md="2" class="text-right">
            <v-btn outlined color="grey darken-2" dense @click="resetFilters">
              <v-icon left small>mdi-filter-remove-outline</v-icon>
              ລ້າງຕົວກອງ
            </v-btn>
          </v-col>
        </v-row>

        <!-- Empty State -->
        <div v-if="filteredAccounts.length === 0" class="text-center py-10">
          <v-icon size="64" color="grey lighten-1">mdi-link-variant-off</v-icon>
          <h3 class="text-subtitle-1 grey--text text--darken-2 mt-3 font-weight-bold">
            ບໍ່ພົບໜ້າ ຫຼື ບັນຊີທີ່ເຊື່ອມຕໍ່
          </h3>
          <p class="text-caption grey--text mb-4">
            ທ່ານຍັງບໍ່ໄດ້ເຊື່ອມຕໍ່ Facebook Page, TikTok ຫຼື Shopee ເທື່ອ
          </p>
          <v-btn color="primary" @click="openConnectDialog(null)">
            <v-icon left>mdi-plus</v-icon>
            ເລີ່ມເຊື່ອມຕໍ່ໜ້າທຳອິດ
          </v-btn>
        </div>

        <!-- Connected Accounts Grid -->
        <v-row v-else dense>
          <v-col
            v-for="acc in filteredAccounts"
            :key="acc.id"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="elevation-1 rounded-lg pa-3 h-100 d-flex flex-column border-card" :class="{ 'inactive-card': acc.status === 'DISCONNECTED' }">
              <!-- Platform Header & Status Badge -->
              <div class="d-flex align-center justify-space-between mb-2">
                <div class="d-flex align-center">
                  <v-avatar size="32" class="mr-2 elevation-1" :color="getPlatformBgColor(acc.platform ? acc.platform.code : '')">
                    <img v-if="acc.platform && acc.platform.logoUrl" :src="acc.platform.logoUrl" :alt="acc.platform.name" />
                    <v-icon v-else small dark>{{ getPlatformIcon(acc.platform ? acc.platform.code : '') }}</v-icon>
                  </v-avatar>
                  <div>
                    <span class="text-caption font-weight-bold grey--text text--darken-3">
                      {{ acc.platform ? acc.platform.name : 'Platform' }}
                    </span>
                  </div>
                </div>

                <v-chip
                  x-small
                  label
                  :color="acc.status === 'ACTIVE' ? 'success' : 'grey'"
                  class="font-weight-bold"
                >
                  {{ acc.status }}
                </v-chip>
              </div>

              <!-- Account Name and ID -->
              <div class="d-flex align-center my-2">
                <v-avatar size="44" color="grey lighten-3" class="mr-3 elevation-1">
                  <img v-if="acc.avatarUrl" :src="acc.avatarUrl" :alt="acc.accountName" />
                  <v-icon v-else color="grey darken-1">mdi-storefront-outline</v-icon>
                </v-avatar>
                <div class="flex-grow-1 overflow-hidden">
                  <h4 class="text-subtitle-2 font-weight-bold text-truncate mb-0 grey--text text--darken-4">
                    {{ acc.accountName }}
                  </h4>
                  <div class="d-flex align-center mt-1">
                    <v-chip x-small outlined color="grey darken-1" class="mr-1 text-caption">
                      ID: {{ acc.externalAccountId }}
                    </v-chip>
                    <v-tooltip bottom>
                      <template #activator="{ on, attrs }">
                        <v-btn icon x-small v-bind="attrs" v-on="on" @click="copyToClipboard(acc.externalAccountId)">
                          <v-icon x-small>mdi-content-copy</v-icon>
                        </v-btn>
                      </template>
                      <span>ຄັດລອກ ID</span>
                    </v-tooltip>
                  </div>
                </div>
              </div>

              <v-divider class="my-2"></v-divider>

              <!-- Feature Switches inside Card -->
              <div class="pa-1">
                <div class="d-flex align-center justify-space-between mb-1">
                  <span class="text-caption d-flex align-center">
                    <v-icon x-small color="primary" class="mr-1">mdi-chat-processing-outline</v-icon>
                    ແຊັດສົດໃນ POS (Chat)
                  </span>
                  <v-switch
                    v-model="acc.isChatEnabled"
                    dense
                    hide-details
                    class="mt-0 pt-0"
                    color="primary"
                    :disabled="acc.status !== 'ACTIVE'"
                    @change="toggleFeature(acc, 'isChatEnabled')"
                  ></v-switch>
                </div>

                <div v-if="acc.platform && acc.platform.hasOrderSync" class="d-flex align-center justify-space-between mb-1">
                  <span class="text-caption d-flex align-center">
                    <v-icon x-small color="orange darken-2" class="mr-1">mdi-cart-arrow-down</v-icon>
                    ດຶງອໍເດີອັດຕະໂນມັດ (Order Sync)
                  </span>
                  <v-switch
                    v-model="acc.isOrderSyncEnabled"
                    dense
                    hide-details
                    class="mt-0 pt-0"
                    color="orange darken-2"
                    :disabled="acc.status !== 'ACTIVE'"
                    @change="toggleFeature(acc, 'isOrderSyncEnabled')"
                  ></v-switch>
                </div>

                <div v-if="acc.platform && acc.platform.hasInventorySync" class="d-flex align-center justify-space-between mb-1">
                  <span class="text-caption d-flex align-center">
                    <v-icon x-small color="teal" class="mr-1">mdi-warehouse</v-icon>
                    ຊິງຄ໌ສະຕັອກສິນຄ້າ (Stock Sync)
                  </span>
                  <v-switch
                    v-model="acc.isInventorySyncEnabled"
                    dense
                    hide-details
                    class="mt-0 pt-0"
                    color="teal"
                    :disabled="acc.status !== 'ACTIVE'"
                    @change="toggleFeature(acc, 'isInventorySyncEnabled')"
                  ></v-switch>
                </div>
              </div>

              <v-spacer></v-spacer>
              <v-divider class="my-2"></v-divider>

              <!-- Card Footer Actions -->
              <div class="d-flex align-center justify-space-between pt-1">
                <span class="text-caption grey--text">
                  <v-icon x-small color="grey">mdi-key-outline</v-icon>
                  {{ acc.tokenMasked || '****' }}
                </span>

                <div>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-btn icon small color="primary" v-bind="attrs" v-on="on" @click="openEditDialog(acc)">
                        <v-icon small>mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>ແກ້ໄຂ / ຕັ້ງຄ່າ</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-btn
                        icon
                        small
                        :color="acc.status === 'ACTIVE' ? 'warning' : 'success'"
                        v-bind="attrs"
                        v-on="on"
                        @click="toggleAccountStatus(acc)"
                      >
                        <v-icon small>{{ acc.status === 'ACTIVE' ? 'mdi-pause-circle-outline' : 'mdi-play-circle-outline' }}</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ acc.status === 'ACTIVE' ? 'ຢຸດການເຊື່ອມຕໍ່ຊົ່ວຄາວ' : 'ເປີດການເຊື່ອມຕໍ່ຄືນ' }}</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-btn icon small color="error" v-bind="attrs" v-on="on" @click="confirmDeleteAccount(acc)">
                        <v-icon small>mdi-delete-outline</v-icon>
                      </v-btn>
                    </template>
                    <span>ລົບການເຊື່ອມຕໍ່ (Free Quota)</span>
                  </v-tooltip>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- TAB 2: Master Platform Catalog -->
      <v-card-text v-else class="pa-4">
        <v-row dense class="mb-3" align="center" justify="space-between">
          <v-col cols="12" md="6">
            <h3 class="text-subtitle-1 font-weight-bold grey--text text--darken-3">
              ເວທີ ແລະ ຊ່ອງທາງທີ່ຮອງຮັບ (Supported Integration Platforms)
            </h3>
            <p class="text-caption grey--text mb-0">
              ເລືອກເວທີທີ່ຕ້ອງການເຊື່ອມຕໍ່ກັບລະບົບ DCommerce POS ຂອງທ່ານ
            </p>
          </v-col>
          <v-col cols="12" md="6" class="text-right">
            <v-btn small color="primary" outlined @click="openAddPlatformDialog">
              <v-icon left small>mdi-plus</v-icon>
              ເພີ່ມເວທີໃໝ່ (Add Custom Platform)
            </v-btn>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col
            v-for="plat in platformList"
            :key="plat.id"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card class="elevation-1 rounded-lg pa-4 h-100 border-card d-flex flex-column">
              <div class="d-flex align-center justify-space-between mb-3">
                <div class="d-flex align-center">
                  <v-avatar size="40" class="mr-3 elevation-1" :color="getPlatformBgColor(plat.code)">
                    <img v-if="plat.logoUrl" :src="plat.logoUrl" :alt="plat.name" />
                    <v-icon v-else dark>{{ getPlatformIcon(plat.code) }}</v-icon>
                  </v-avatar>
                  <div>
                    <h4 class="text-subtitle-2 font-weight-bold grey--text text--darken-3 mb-0">{{ plat.name }}</h4>
                    <span class="text-caption grey--text">Code: {{ plat.code }}</span>
                  </div>
                </div>

                <v-chip x-small label color="primary lighten-4" class="primary--text font-weight-bold">
                  {{ plat.category }}
                </v-chip>
              </div>

              <!-- Capability Tags -->
              <div class="mb-3">
                <v-chip v-if="plat.hasChat" x-small color="blue lighten-5" class="blue--text text--darken-3 mr-1 mb-1 font-weight-medium">
                  <v-icon left x-small>mdi-chat</v-icon> ແຊັດ (Live Chat)
                </v-chip>
                <v-chip v-if="plat.hasOrderSync" x-small color="orange lighten-5" class="orange--text text--darken-3 mr-1 mb-1 font-weight-medium">
                  <v-icon left x-small>mdi-cart</v-icon> ຊິງຄ໌ອໍເດີ (Order Sync)
                </v-chip>
                <v-chip v-if="plat.hasInventorySync" x-small color="teal lighten-5" class="teal--text text--darken-3 mr-1 mb-1 font-weight-medium">
                  <v-icon left x-small>mdi-warehouse</v-icon> ຊິງຄ໌ສະຕັອກ (Stock Sync)
                </v-chip>
              </div>

              <v-spacer></v-spacer>

              <div class="d-flex align-center justify-space-between pt-2">
                <div>
                  <span class="text-caption grey--text">ຄ່າບໍລິການ:</span>
                  <div class="text-body-2 font-weight-bold purple--text">
                    {{ formatNumber(plat.defaultMonthlyPrice) }} ₭/ເດືອນ
                  </div>
                </div>

                <v-btn
                  small
                  color="primary"
                  class="elevation-1"
                  :disabled="quotaData.isLimitReached"
                  @click="openConnectDialog(plat)"
                >
                  <v-icon left small>mdi-link-variant</v-icon>
                  ເຊື່ອມຕໍ່
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- =================================================================== -->
    <!-- DIALOG 1: Connect New Page / Account                                -->
    <!-- =================================================================== -->
    <v-dialog v-model="connectDialog" max-width="600" persistent>
      <v-card class="rounded-lg">
        <v-card-title class="primary white--text d-flex align-center">
          <v-icon color="white" class="mr-2">mdi-link-variant-plus</v-icon>
          <span>ເຊື່ອມຕໍ່ໜ້າ / ບັນຊີໃໝ່</span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="connectDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-form ref="connectForm" v-model="isConnectFormValid" @submit.prevent="submitConnect">
          <v-card-text class="pa-4">
            <!-- Quota Notice inside Dialog -->
            <v-alert
              v-if="quotaData.isLimitReached"
              dense
              type="error"
              class="mb-3 text-caption"
            >
              ໂຄຕ້າຂອງທ່ານເຕັມແລ້ວ ({{ quotaData.activeCount }}/{{ quotaData.maxAllowed }} ໜ້າ). ທ່ານຕ້ອງອັບເກຣດແຜນກ່ອນຈຶ່ງສາມາດເຊື່ອມຕໍ່ໜ້າໃໝ່ໄດ້.
            </v-alert>

            <!-- 1. Select Platform -->
            <label class="text-caption font-weight-bold grey--text text--darken-3 mb-1 d-block">
              1. ເລືອກເວທີ (Select Platform) *
            </label>
            <v-row dense class="mb-3">
              <v-col
                v-for="plat in platformList"
                :key="plat.id"
                cols="6"
                sm="4"
              >
                <v-card
                  outlined
                  class="pa-2 text-center clickable-card rounded-lg"
                  :class="{ 'selected-platform': connectForm.platformId === plat.id }"
                  @click="selectPlatform(plat)"
                >
                  <v-avatar size="32" class="mb-1" :color="getPlatformBgColor(plat.code)">
                    <img v-if="plat.logoUrl" :src="plat.logoUrl" :alt="plat.name" />
                    <v-icon v-else small dark>{{ getPlatformIcon(plat.code) }}</v-icon>
                  </v-avatar>
                  <div class="text-caption font-weight-bold text-truncate">{{ plat.name }}</div>
                </v-card>
              </v-col>
            </v-row>

            <!-- 2. Account Details -->
            <label class="text-caption font-weight-bold grey--text text--darken-3 mb-1 d-block">
              2. ຂໍ້ມູນບັນຊີ ແລະ ລະຫັດການເຊື່ອມຕໍ່ (Credentials)
            </label>

            <v-text-field
              v-model="connectForm.accountName"
              label="ຊື່ໜ້າ ຫຼື ຊື່ຮ້ານ (Account Name) *"
              outlined
              dense
              prepend-inner-icon="mdi-format-title"
              placeholder="ຕົວຢ່າງ: ຮ້ານກາເຟ Sengdao Coffee"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ໜ້າ ຫຼື ຊື່ຮ້ານ']"
            ></v-text-field>

            <v-text-field
              v-model="connectForm.externalAccountId"
              label="ລະຫັດໜ້າ ຫຼື Shop ID (External Account ID) *"
              outlined
              dense
              prepend-inner-icon="mdi-identifier"
              placeholder="ຕົວຢ່າງ: 10928374928172"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນ ID ຂອງໜ້າ']"
            ></v-text-field>

            <v-text-field
              v-model="connectForm.accessToken"
              :type="showToken ? 'text' : 'password'"
              label="Access Token / Token ການເຊື່ອມຕໍ່ *"
              outlined
              dense
              prepend-inner-icon="mdi-key-outline"
              :append-icon="showToken ? 'mdi-eye-off' : 'mdi-eye'"
              placeholder="ປ້ອນ Page Access Token ຫຼື API Key"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນ Access Token']"
              @click:append="showToken = !showToken"
            ></v-text-field>

            <!-- Refresh Token (for TikTok, Lazada) -->
            <v-text-field
              v-if="selectedPlatformCode === 'tiktok' || selectedPlatformCode === 'lazada'"
              v-model="connectForm.refreshToken"
              type="password"
              label="Refresh Token (ສຳລັບ Auto-Renew)"
              outlined
              dense
              prepend-inner-icon="mdi-refresh-circle"
              placeholder="ປ້ອນ Refresh Token"
            ></v-text-field>

            <!-- Avatar URL -->
            <v-text-field
              v-model="connectForm.avatarUrl"
              label="ລິ້ງຮູບໂລໂກ້ / ໂປຣຟາຍ (Avatar URL - ຖ້າມີ)"
              outlined
              dense
              prepend-inner-icon="mdi-image-outline"
              placeholder="https://..."
            ></v-text-field>

            <!-- Feature Toggles -->
            <label class="text-caption font-weight-bold grey--text text--darken-3 mb-1 d-block">
              3. ເລືອກເປີດຄຸນສົມບັດ (Enable Features)
            </label>
            <div class="pa-2 grey lighten-4 rounded-lg">
              <v-checkbox
                v-model="connectForm.isChatEnabled"
                label="ເປີດໃຊ້ງານລະບົບແຊັດໃນ POS (Live Chat)"
                dense
                hide-details
                color="primary"
                class="mb-2"
              ></v-checkbox>
              <v-checkbox
                v-if="selectedPlatformHasOrderSync"
                v-model="connectForm.isOrderSyncEnabled"
                label="ດຶງອໍເດີອັດຕະໂນມັດມາ POS (Auto Order Sync)"
                dense
                hide-details
                color="orange darken-2"
                class="mb-2"
              ></v-checkbox>
              <v-checkbox
                v-if="selectedPlatformHasInventorySync"
                v-model="connectForm.isInventorySyncEnabled"
                label="ຊິງຄ໌ສະຕັອກສິນຄ້າ (Stock Sync)"
                dense
                hide-details
                color="teal"
              ></v-checkbox>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn outlined color="grey darken-2" @click="connectDialog = false">
              ຍົກເລີກ
            </v-btn>
            <v-btn
              color="primary"
              type="submit"
              class="elevation-2 px-6"
              :loading="isSaving"
              :disabled="quotaData.isLimitReached || !isConnectFormValid"
            >
              <v-icon left>mdi-check</v-icon>
              ຢືນຢັນການເຊື່ອມຕໍ່
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- =================================================================== -->
    <!-- DIALOG 2: Edit Account Settings                                     -->
    <!-- =================================================================== -->
    <v-dialog v-model="editDialog" max-width="500" persistent>
      <v-card class="rounded-lg">
        <v-card-title class="primary white--text d-flex align-center">
          <v-icon color="white" class="mr-2">mdi-cog-outline</v-icon>
          <span>ແກ້ໄຂການຕັ້ງຄ່າບັນຊີ</span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="editDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-text-field
            v-model="editForm.accountName"
            label="ຊື່ໜ້າ ຫຼື ຊື່ຮ້ານ *"
            outlined
            dense
            prepend-inner-icon="mdi-format-title"
          ></v-text-field>

          <v-text-field
            v-model="editForm.avatarUrl"
            label="ລິ້ງຮູບໂລໂກ້ (Avatar URL)"
            outlined
            dense
            prepend-inner-icon="mdi-image-outline"
          ></v-text-field>

          <v-text-field
            v-model="editForm.accessToken"
            type="password"
            label="ອັບເດດ Access Token ໃໝ່ (ປະວ່າງໄວ້ຖ້າບໍ່ປ່ຽນ)"
            outlined
            dense
            prepend-inner-icon="mdi-key-outline"
            placeholder="ໃສ່ Token ໃໝ່ຖ້າໝົດອາຍຸ"
          ></v-text-field>

          <div class="pa-3 grey lighten-4 rounded-lg">
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-medium">ແຊັດໃນ POS:</span>
              <v-switch v-model="editForm.isChatEnabled" dense hide-details class="mt-0 pt-0"></v-switch>
            </div>
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="text-caption font-weight-medium">ດຶງອໍເດີ:</span>
              <v-switch v-model="editForm.isOrderSyncEnabled" dense hide-details class="mt-0 pt-0"></v-switch>
            </div>
            <div class="d-flex align-center justify-space-between">
              <span class="text-caption font-weight-medium">ຊິງຄ໌ສະຕັອກ:</span>
              <v-switch v-model="editForm.isInventorySyncEnabled" dense hide-details class="mt-0 pt-0"></v-switch>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn outlined color="grey darken-2" @click="editDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" :loading="isSaving" @click="submitEdit">
            <v-icon left>mdi-content-save</v-icon> ບັນທຶກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- =================================================================== -->
    <!-- DIALOG 3: Manage / Upgrade Page Quota                               -->
    <!-- =================================================================== -->
    <v-dialog v-model="quotaDialog" max-width="600" persistent>
      <v-card class="rounded-lg">
        <v-card-title class="purple white--text d-flex align-center">
          <v-icon color="white" class="mr-2">mdi-arrow-up-bold-box-outline</v-icon>
          <span>ຈັດການໂຄຕ້າໜ້າ (Page Quota & Subscription)</span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="quotaDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <div class="pa-3 grey lighten-4 rounded-lg mb-4">
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption grey--text text--darken-2">ແຜນບໍລິການປັດຈຸບັນ:</span>
              <span class="font-weight-bold primary--text">{{ quotaData.planName || 'FREE' }}</span>
            </div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption grey--text text--darken-2">ຈຳນວນໜ້າທີ່ອະນຸຍາດ:</span>
              <span class="font-weight-bold">{{ quotaData.maxAllowed || 0 }} ໜ້າ</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-caption grey--text text--darken-2">ກຳລັງໃຊ້ງານ:</span>
              <span class="font-weight-bold info--text">{{ quotaData.activeCount || 0 }} ໜ້າ</span>
            </div>
          </div>

          <h4 class="text-subtitle-2 font-weight-bold grey--text text--darken-3 mb-2">
            ເລືອກແພັກເກດເພີ່ມໂຄຕ້າໜ້າ (Add-on Page Slots):
          </h4>

          <v-row dense class="mb-3">
            <v-col cols="12" md="4">
              <v-card outlined class="pa-3 text-center rounded-lg clickable-card" @click="upgradePlan(3, 'BASIC_3_PAGES')">
                <v-icon color="primary" class="mb-1">mdi-numeric-3-box-outline</v-icon>
                <div class="text-subtitle-2 font-weight-bold">3 Pages</div>
                <div class="text-caption purple--text font-weight-bold">50,000 ₭/mo</div>
                <v-btn x-small color="primary" class="mt-2">ເລືອກແຜນນີ້</v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card outlined class="pa-3 text-center rounded-lg clickable-card primary lighten-5" @click="upgradePlan(5, 'PRO_5_PAGES')">
                <v-icon color="primary" class="mb-1">mdi-numeric-5-box-outline</v-icon>
                <div class="text-subtitle-2 font-weight-bold">5 Pages</div>
                <div class="text-caption purple--text font-weight-bold">120,000 ₭/mo</div>
                <v-btn x-small color="primary" class="mt-2">ຍອດນິຍົມ ⭐</v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card outlined class="pa-3 text-center rounded-lg clickable-card" @click="upgradePlan(10, 'BUSINESS_10_PAGES')">
                <v-icon color="primary" class="mb-1">mdi-numeric-9-plus-box-outline</v-icon>
                <div class="text-subtitle-2 font-weight-bold">10 Pages</div>
                <div class="text-caption purple--text font-weight-bold">200,000 ₭/mo</div>
                <v-btn x-small color="primary" class="mt-2">ເລືອກແຜນນີ້</v-btn>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-3"></v-divider>

          <!-- Admin Direct Quota Override -->
          <div v-if="isAdmin">
            <h5 class="text-caption font-weight-bold grey--text text--darken-3 mb-2">
              🛠️ ສຳລັບ Admin: ປັບໂຄຕ້າໜ້າໂດຍກົງ (Direct Override)
            </h5>
            <v-row dense align="center">
              <v-col cols="6">
                <v-text-field
                  v-model.number="adminMaxPages"
                  type="number"
                  label="ຈຳນວນໜ້າສູງສຸດ (Max Pages)"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-btn color="purple" dark block :loading="isSaving" @click="submitAdminQuota">
                  ບັນທຶກໂຄຕ້າ
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn outlined color="grey darken-2" @click="quotaDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- =================================================================== -->
    <!-- DIALOG 4: Add New Master Platform (For Admin)                       -->
    <!-- =================================================================== -->
    <v-dialog v-model="addPlatformDialog" max-width="550" persistent>
      <v-card class="rounded-lg">
        <v-card-title class="primary white--text d-flex align-center">
          <v-icon color="white" class="mr-2">mdi-plus-box-outline</v-icon>
          <span>ເພີ່ມເວທີໃໝ່ໃນລະບົບ (Add Custom Platform)</span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="addPlatformDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-text-field
            v-model="newPlatform.code"
            label="ລະຫັດເວທີ (Platform Code) *"
            outlined
            dense
            placeholder="ຕົວຢ່າງ: telegram, whatsapp, woocommerce"
          ></v-text-field>

          <v-text-field
            v-model="newPlatform.name"
            label="ຊື່ເວທີ (Platform Name) *"
            outlined
            dense
            placeholder="ຕົວຢ່າງ: Telegram Bot, WooCommerce"
          ></v-text-field>

          <v-select
            v-model="newPlatform.category"
            :items="['SOCIAL_CHAT', 'ECOMMERCE_MARKETPLACE', 'MESSAGING_APP']"
            label="ປະເພດ (Category)"
            outlined
            dense
          ></v-select>

          <v-text-field
            v-model="newPlatform.logoUrl"
            label="ລິ້ງໂລໂກ້ (Logo URL)"
            outlined
            dense
            placeholder="https://..."
          ></v-text-field>

          <v-text-field
            v-model.number="newPlatform.defaultMonthlyPrice"
            type="number"
            label="ຄ່າບໍລິການພື້ນຖານ (LAK/ເດືອນ)"
            outlined
            dense
          ></v-text-field>

          <div class="pa-2 grey lighten-4 rounded-lg">
            <v-checkbox v-model="newPlatform.hasChat" label="ຮອງຮັບການແຊັດ (Chat)" dense hide-details color="primary" class="mb-1"></v-checkbox>
            <v-checkbox v-model="newPlatform.hasOrderSync" label="ຮອງຮັບການດຶງອໍເດີ (Order Sync)" dense hide-details color="orange darken-2" class="mb-1"></v-checkbox>
            <v-checkbox v-model="newPlatform.hasInventorySync" label="ຮອງຮັບການຊິງຄ໌ສະຕັອກ (Stock Sync)" dense hide-details color="teal"></v-checkbox>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn outlined color="grey darken-2" @click="addPlatformDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" :loading="isSaving" @click="submitNewPlatform">
            <v-icon left>mdi-check</v-icon> ບັນທຶກເວທີໃໝ່
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { swalSuccess, swalError2, confirmSwal } from '~/util/myUtil'

export default {
  name: 'PlatformManagementPage',
  data() {
    return {
      isLoading: false,
      isSaving: false,
      activeTab: 0,
      showToken: false,

      // Quota Data
      quotaData: {
        maxAllowed: 2,
        activeCount: 0,
        remainingSlots: 2,
        isLimitReached: false,
        planName: 'FREE'
      },

      // Lists
      connectedAccounts: [],
      platformList: [],

      // Filters
      searchAccount: '',
      filterPlatformId: null,
      filterStatus: null,

      // Dialog Controls
      connectDialog: false,
      isConnectFormValid: false,
      editDialog: false,
      quotaDialog: false,
      addPlatformDialog: false,

      // Forms
      connectForm: {
        platformId: null,
        accountName: '',
        externalAccountId: '',
        accessToken: '',
        refreshToken: '',
        avatarUrl: '',
        isChatEnabled: true,
        isOrderSyncEnabled: false,
        isInventorySyncEnabled: false
      },

      editForm: {
        id: null,
        accountName: '',
        avatarUrl: '',
        accessToken: '',
        isChatEnabled: true,
        isOrderSyncEnabled: false,
        isInventorySyncEnabled: false
      },

      adminMaxPages: 2,

      newPlatform: {
        code: '',
        name: '',
        category: 'SOCIAL_CHAT',
        logoUrl: '',
        hasChat: true,
        hasOrderSync: false,
        hasInventorySync: false,
        defaultMonthlyPrice: 50000
      }
    }
  },

  computed: {
    quotaPercent() {
      if (!this.quotaData.maxAllowed || this.quotaData.maxAllowed <= 0) return 0
      return Math.min(100, Math.round((this.quotaData.activeCount / this.quotaData.maxAllowed) * 100))
    },

    monthlyEstimatedTotal() {
      return this.connectedAccounts
        .filter(acc => acc.status === 'ACTIVE')
        .reduce((sum, acc) => {
          const price = acc.platform && acc.platform.defaultMonthlyPrice ? Number(acc.platform.defaultMonthlyPrice) : 0
          return sum + price
        }, 0)
    },

    platformFilterOptions() {
      const options = [{ text: 'ທັງໝົດ (All Platforms)', value: null }]
      this.platformList.forEach(p => {
        options.push({ text: p.name, value: p.id })
      })
      return options
    },

    statusFilterOptions() {
      return [
        { text: 'ທັງໝົດ (All Status)', value: null },
        { text: 'ກຳລັງໃຊ້ງານ (Active)', value: 'ACTIVE' },
        { text: 'ຢຸດການເຊື່ອມຕໍ່ (Disconnected)', value: 'DISCONNECTED' }
      ]
    },

    filteredAccounts() {
      return this.connectedAccounts.filter(acc => {
        // Search
        if (this.searchAccount) {
          const q = this.searchAccount.toLowerCase()
          const nameMatch = acc.accountName && acc.accountName.toLowerCase().includes(q)
          const idMatch = acc.externalAccountId && acc.externalAccountId.toLowerCase().includes(q)
          if (!nameMatch && !idMatch) return false
        }
        // Platform Filter
        if (this.filterPlatformId && acc.platformId !== this.filterPlatformId) {
          return false
        }
        // Status Filter
        if (this.filterStatus && acc.status !== this.filterStatus) {
          return false
        }
        return true
      })
    },

    selectedPlatform() {
      if (!this.connectForm.platformId) return null
      return this.platformList.find(p => p.id === this.connectForm.platformId) || null
    },

    selectedPlatformCode() {
      return this.selectedPlatform ? this.selectedPlatform.code : ''
    },

    selectedPlatformHasOrderSync() {
      return this.selectedPlatform ? !!this.selectedPlatform.hasOrderSync : false
    },

    selectedPlatformHasInventorySync() {
      return this.selectedPlatform ? !!this.selectedPlatform.hasInventorySync : false
    },

    isAdmin() {
      return true // Available for management
    }
  },

  async mounted() {
    await this.refreshAll()
  },

  methods: {
    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return new Intl.NumberFormat('lo-LA').format(val)
    },

    async refreshAll() {
      this.isLoading = true
      try {
        await Promise.all([
          this.loadQuota(),
          this.loadPlatforms(),
          this.loadConnectedAccounts()
        ])
      } finally {
        this.isLoading = false
      }
    },

    async loadQuota() {
      try {
        const res = await this.$axios.get('/api/platform-accounts/quota')
        if (res.data && res.data.success && res.data.data) {
          this.quotaData = res.data.data
          this.adminMaxPages = this.quotaData.maxAllowed || 2
        }
      } catch (err) {
        console.error('Failed to load quota', err)
      }
    },

    async loadPlatforms() {
      try {
        const res = await this.$axios.get('/api/platforms')
        const list = Array.isArray(res.data?.data) ? res.data.data : (Array.isArray(res.data) ? res.data : [])
        this.platformList = list
        if (list.length > 0 && !this.connectForm.platformId) {
          this.connectForm.platformId = list[0].id
        }
      } catch (err) {
        console.error('Failed to load platforms', err)
      }
    },

    async loadConnectedAccounts() {
      try {
        const res = await this.$axios.get('/api/platform-accounts')
        this.connectedAccounts = Array.isArray(res.data?.data) ? res.data.data : []
      } catch (err) {
        console.error('Failed to load connected accounts', err)
      }
    },

    resetFilters() {
      this.searchAccount = ''
      this.filterPlatformId = null
      this.filterStatus = null
    },

    getPlatformIcon(code) {
      const map = {
        facebook: 'mdi-facebook',
        tiktok: 'mdi-music-note',
        shopee: 'mdi-shopping',
        lazada: 'mdi-store',
        line: 'mdi-chat'
      }
      return map[code] || 'mdi-share-variant'
    },

    getPlatformBgColor(code) {
      const map = {
        facebook: '#1877F2',
        tiktok: '#000000',
        shopee: '#EE4D2D',
        lazada: '#0F146D',
        line: '#00B900'
      }
      return map[code] || '#1976D2'
    },

    selectPlatform(plat) {
      this.connectForm.platformId = plat.id
      this.connectForm.isOrderSyncEnabled = !!plat.hasOrderSync
      this.connectForm.isInventorySyncEnabled = !!plat.hasInventorySync
    },

    openConnectDialog(preselectedPlatform) {
      if (this.quotaData.isLimitReached) {
        swalError2(this.$swal, 'ໂຄຕ້າເຕັມແລ້ວ!', `ທ່ານໄດ້ເຊື່ອມຕໍ່ຄົບຕາມໂຄຕ້າ ${this.quotaData.maxAllowed} ໜ້າແລ້ວ. ກະລຸນາອັບເກຣດແຜນໂຄຕ້າກ່ອນ.`)
        return
      }

      const defaultPlat = preselectedPlatform || (this.platformList.length > 0 ? this.platformList[0] : null)
      this.connectForm = {
        platformId: defaultPlat ? defaultPlat.id : null,
        accountName: '',
        externalAccountId: '',
        accessToken: '',
        refreshToken: '',
        avatarUrl: '',
        isChatEnabled: true,
        isOrderSyncEnabled: defaultPlat ? !!defaultPlat.hasOrderSync : false,
        isInventorySyncEnabled: defaultPlat ? !!defaultPlat.hasInventorySync : false
      }
      this.showToken = false
      this.connectDialog = true
    },

    async submitConnect() {
      if (!this.$refs.connectForm.validate()) return

      this.isSaving = true
      try {
        const payload = { ...this.connectForm }
        const res = await this.$axios.post('/api/platform-accounts/connect', payload)
        if (res.data && res.data.success) {
          swalSuccess(this.$swal, 'ສຳເລັດ!', res.data.message || 'ເຊື່ອມຕໍ່ໜ້າສຳເລັດແລ້ວ')
          this.connectDialog = false
          await this.refreshAll()
        } else {
          swalError2(this.$swal, 'ບໍ່ສຳເລັດ', res.data?.message || 'ມີຂໍ້ຜິດພາດໃນການເຊື່ອມຕໍ່')
        }
      } catch (err) {
        const msg = err.response?.data?.message || err.message
        swalError2(this.$swal, 'ຜິດພາດ', msg)
      } finally {
        this.isSaving = false
      }
    },

    openEditDialog(acc) {
      this.editForm = {
        id: acc.id,
        accountName: acc.accountName,
        avatarUrl: acc.avatarUrl || '',
        accessToken: '',
        isChatEnabled: acc.isChatEnabled,
        isOrderSyncEnabled: acc.isOrderSyncEnabled,
        isInventorySyncEnabled: acc.isInventorySyncEnabled
      }
      this.editDialog = true
    },

    async submitEdit() {
      this.isSaving = true
      try {
        const payload = {
          accountName: this.editForm.accountName,
          avatarUrl: this.editForm.avatarUrl,
          isChatEnabled: this.editForm.isChatEnabled,
          isOrderSyncEnabled: this.editForm.isOrderSyncEnabled,
          isInventorySyncEnabled: this.editForm.isInventorySyncEnabled
        }
        if (this.editForm.accessToken) {
          payload.accessToken = this.editForm.accessToken
        }

        const res = await this.$axios.put(`/api/platform-accounts/update/${this.editForm.id}`, payload)
        if (res.data && res.data.success) {
          swalSuccess(this.$swal, 'ສຳເລັດ!', 'ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ')
          this.editDialog = false
          await this.refreshAll()
        }
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', err.response?.data?.message || err.message)
      } finally {
        this.isSaving = false
      }
    },

    async toggleFeature(acc, featureName) {
      try {
        const payload = {}
        payload[featureName] = acc[featureName]
        await this.$axios.put(`/api/platform-accounts/update/${acc.id}`, payload)
      } catch (err) {
        console.error('Failed to update toggle', err)
        acc[featureName] = !acc[featureName] // Revert on failure
      }
    },

    toggleAccountStatus(acc) {
      const isPausing = acc.status === 'ACTIVE'
      confirmSwal(this.$swal, 'warning', async () => {
        try {
          if (isPausing) {
            await this.$axios.post(`/api/platform-accounts/disconnect/${acc.id}`)
          } else {
            await this.$axios.put(`/api/platform-accounts/update/${acc.id}`, { status: 'ACTIVE' })
          }
          await this.refreshAll()
          swalSuccess(this.$swal, 'ສຳເລັດ!', 'ປ່ຽນສະຖານະສຳເລັດແລ້ວ')
        } catch (err) {
          swalError2(this.$swal, 'ຜິດພາດ', err.response?.data?.message || err.message)
        }
      })
    },

    confirmDeleteAccount(acc) {
      confirmSwal(this.$swal, 'error', async () => {
        try {
          await this.$axios.delete(`/api/platform-accounts/delete/${acc.id}`)
          swalSuccess(this.$swal, 'ສຳເລັດ!', `ລົບການເຊື່ອມຕໍ່ '${acc.accountName}' ສຳເລັດ. ໂຄຕ້າຂອງທ່ານຖືກຄືນແລ້ວ 1 ຊ່ອງ.`)
          await this.refreshAll()
        } catch (err) {
          swalError2(this.$swal, 'ຜິດພາດ', err.response?.data?.message || err.message)
        }
      })
    },

    openQuotaDialog() {
      this.adminMaxPages = this.quotaData.maxAllowed || 2
      this.quotaDialog = true
    },

    async upgradePlan(slots, planName) {
      this.isSaving = true
      try {
        const res = await this.$axios.post('/api/platform-accounts/admin/quota', {
          maxSocialPages: slots,
          socialPlanName: planName
        })
        if (res.data && res.data.success) {
          swalSuccess(this.$swal, 'ອັບເກຣດສຳເລັດ!', `ທ່ານສາມາດເຊື່ອມຕໍ່ໄດ້ສູງສຸດ ${slots} ໜ້າແລ້ວ!`)
          this.quotaDialog = false
          await this.refreshAll()
        }
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', err.response?.data?.message || err.message)
      } finally {
        this.isSaving = false
      }
    },

    async submitAdminQuota() {
      if (!this.adminMaxPages || this.adminMaxPages < 1) return
      this.isSaving = true
      try {
        const res = await this.$axios.post('/api/platform-accounts/admin/quota', {
          maxSocialPages: this.adminMaxPages,
          socialPlanName: `CUSTOM_${this.adminMaxPages}_PAGES`
        })
        if (res.data && res.data.success) {
          swalSuccess(this.$swal, 'ສຳເລັດ!', `ປັບໂຄຕ້າເປັນ ${this.adminMaxPages} ໜ້າສຳເລັດແລ້ວ`)
          this.quotaDialog = false
          await this.refreshAll()
        }
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', err.response?.data?.message || err.message)
      } finally {
        this.isSaving = false
      }
    },

    openAddPlatformDialog() {
      this.newPlatform = {
        code: '',
        name: '',
        category: 'SOCIAL_CHAT',
        logoUrl: '',
        hasChat: true,
        hasOrderSync: false,
        hasInventorySync: false,
        defaultMonthlyPrice: 50000
      }
      this.addPlatformDialog = true
    },

    async submitNewPlatform() {
      if (!this.newPlatform.code || !this.newPlatform.name) {
        swalError2(this.$swal, 'ແຈ້ງເຕືອນ', 'ກະລຸນາປ້ອນລະຫັດ ແລະ ຊື່ເວທີ')
        return
      }

      this.isSaving = true
      try {
        const res = await this.$axios.post('/api/platforms/create', this.newPlatform)
        if (res.data && res.data.success) {
          swalSuccess(this.$swal, 'ສຳເລັດ!', `ເພີ່ມເວທີ '${this.newPlatform.name}' ເຂົ້າໃນລະບົບສຳເລັດແລ້ວ`)
          this.addPlatformDialog = false
          await this.loadPlatforms()
        }
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', err.response?.data?.message || err.message)
      } finally {
        this.isSaving = false
      }
    },

    copyToClipboard(text) {
      if (!text) return
      navigator.clipboard.writeText(text).then(() => {
        if (this.$toast) {
          this.$toast.success('ຄັດລອກສຳເລັດ!')
        }
      }).catch(err => {
        if (err) {
          // Ignore copy error
        }
      })
    }
  }
}
</script>

<style scoped>
.border-card {
  border: 1px solid #e0e0e0;
  transition: all 0.25s ease-in-out;
}
.border-card:hover {
  border-color: #1976D2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}
.inactive-card {
  opacity: 0.75;
  background-color: #f9f9f9;
}
.clickable-card {
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.clickable-card:hover {
  transform: translateY(-2px);
  border-color: #1976D2;
}
.selected-platform {
  border: 2px solid #1976D2 !important;
  background-color: #E3F2FD !important;
}
</style>
