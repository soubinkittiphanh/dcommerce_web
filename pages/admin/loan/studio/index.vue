<template>
  <div class="loan-studio-container pa-4">
    <!-- Loading Overlay -->
    <v-dialog v-model="loading" hide-overlay persistent width="320">
      <v-card color="primary" dark rounded="xl">
        <v-card-text class="text-center pa-6">
          <v-progress-circular :size="50" :width="5" color="white" indeterminate class="mb-3" />
          <div class="text-h6 font-weight-bold">ກຳລັງປະມວນຜົນ...</div>
          <div class="text-caption">Processing Loan Parameters</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Prominent Warning Banner if UNCONFIRMED -->
    <v-alert
      v-if="warningBannerActive"
      prominent
      type="warning"
      elevation="4"
      rounded="lg"
      class="mb-6 white--text"
      color="amber darken-3"
      border="left"
    >
      <v-row align="center">
        <v-col class="grow">
          <div class="text-h6 font-weight-black mb-1">
            <v-icon left color="white">mdi-alert-octagon</v-icon>
            ແຈ້ງເຕືອນ: ໂປຣໄຟລ໌ອາກອນ ແລະ ພາຣາມິເຕີ Go-Live ຍັງບໍ່ທັນໄດ້ຮັບການຢືນຢັນ (UNCONFIRMED)
          </div>
          <div class="text-body-2 font-weight-medium">
            ລະບົບຈະລັອກການເບີກຈ່າຍເງິນກູ້ (Production Disbursement) ແລະ ການຮຽກເກັບດອກເບ້ຍ/ຄ່າທຳນຽມ ຈົນກວ່າຜູ້ບໍລິຫານຈະກວດສອບ ແລະ ກົດຢືນຢັນ.
            <br />
            <em>Production disbursement and fee/interest billing are blocked until an authorized manager confirms the tax profile.</em>
          </div>
        </v-col>
        <v-col class="shrink">
          <v-btn
            color="white"
            class="amber--text text--darken-4 font-weight-bold elevation-2 text-none"
            large
            rounded
            @click="activeTab = 0"
          >
            <v-icon left>mdi-clipboard-check</v-icon>
            ໄປທີ່ລາຍການກວດສອບ Go-Live
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>

    <!-- Studio Header Card -->
    <v-card class="elevation-2 rounded-lg mb-6 border-subtle">
      <v-card-title class="pa-4 d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-avatar color="primary lighten-5" size="48" class="mr-3">
            <v-icon color="primary" large>mdi-car-key</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-black primary--text">
              ສູນຕັ້ງຄ່າພາຣາມິເຕີສິນເຊື່ອເຊົ່າຊື້ລົດ (Vehicle Financing Studio)
            </div>
            <div class="text-caption grey--text text--darken-1 font-weight-medium">
              Lao Micro-SME Car Dealership • Parameter-Driven Strategy Engine
            </div>
          </div>
        </div>

        <div class="d-flex align-center gap-2 mt-2 mt-sm-0">
          <v-chip
            :color="canDisburse ? 'success' : 'error'"
            text-color="white"
            class="font-weight-bold px-3"
          >
            <v-icon left small>{{ canDisburse ? 'mdi-lock-open-variant' : 'mdi-lock' }}</v-icon>
            {{ canDisburse ? 'ປົດລັອກການເບີກຈ່າຍແລ້ວ (Disbursement Unlocked)' : 'ລັອກການເບີກຈ່າຍ (Disbursement Locked)' }}
          </v-chip>

          <v-btn color="primary" outlined class="text-none ml-2" @click="refreshAllData" :loading="loading">
            <v-icon left small>mdi-refresh</v-icon>
            ໂຫຼດຄືນໃໝ່
          </v-btn>
        </div>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Navigation Tabs -->
      <v-tabs v-model="activeTab" background-color="grey lighten-4" color="primary" slider-color="primary" show-arrows>
        <v-tab class="text-none font-weight-bold">
          <v-icon left small>mdi-clipboard-check-outline</v-icon>
          1. ລາຍການກວດສອບ Go-Live (Checklist)
          <v-badge
            v-if="warningBannerActive"
            color="amber darken-3"
            content="!"
            inline
            class="ml-1"
          ></v-badge>
        </v-tab>
        <v-tab class="text-none font-weight-bold">
          <v-icon left small>mdi-receipt-text-check-outline</v-icon>
          2. ອາກອນມູນຄ່າເພີ່ມ VAT & Tax Profile
        </v-tab>
        <v-tab class="text-none font-weight-bold">
          <v-icon left small>mdi-car-multiple</v-icon>
          3. ສາງຜະລິດຕະພັນ (Product Factory)
        </v-tab>
        <v-tab class="text-none font-weight-bold">
          <v-icon left small>mdi-shield-alert-outline</v-icon>
          4. ນະໂຍບາຍສຳຮອງໜີ້ & ຊັ້ນໜີ້ (Provisioning & Risk)
        </v-tab>
        <v-tab class="text-none font-weight-bold">
          <v-icon left small>mdi-calendar-clock</v-icon>
          5. ປະຕິທິນ & ລະຫັດລະບົບ (System Master)
        </v-tab>
      </v-tabs>
    </v-card>

    <!-- Tab Items Content -->
    <v-tabs-items v-model="activeTab">
      <!-- ========================================== -->
      <!-- TAB 1: GO-LIVE CHECKLIST -->
      <!-- ========================================== -->
      <v-tab-item>
        <v-card class="elevation-1 rounded-lg pa-4">
          <div class="d-flex justify-space-between align-center mb-4">
            <div>
              <div class="text-h6 font-weight-bold primary--text">
                ລາຍການກວດສອບພາຣາມິເຕີກ່ອນເປີດໃຊ້ງານ (Pre-Go-Live Parameter Verification)
              </div>
              <div class="text-caption grey--text">
                ກວດສອບພາຣາມິເຕີຫຼັກທັງ 5 ດ້ານ. ການຢືນຢັນ Tax Profile ແມ່ນເງື່ອນໄຂບັງຄັບໃນການປົດລັອກການເບີກຈ່າຍເງິນກູ້.
              </div>
            </div>
            <v-chip
              :color="allChecklistConfirmed ? 'success' : 'warning'"
              text-color="white"
              class="font-weight-bold"
            >
              {{ allChecklistConfirmed ? 'ຢືນຢັນຄົບຖ້ວນ (All Confirmed)' : 'ຍັງມີລາຍການລໍຖ້າຢືນຢັນ (Action Required)' }}
            </v-chip>
          </div>

          <v-row dense>
            <v-col v-for="(item, idx) in checklistItems" :key="idx" cols="12" class="mb-3">
              <v-card outlined rounded="lg" :class="item.status === 'CONFIRMED' ? 'confirmed-border' : 'unconfirmed-border'">
                <v-card-text class="d-flex justify-space-between align-center flex-wrap pa-4">
                  <div class="d-flex align-start" style="max-width: 80%;">
                    <v-avatar
                      :color="item.status === 'CONFIRMED' ? 'success lighten-5' : 'amber lighten-5'"
                      size="40"
                      class="mr-3 mt-1"
                    >
                      <v-icon :color="item.status === 'CONFIRMED' ? 'success' : 'amber darken-3'">
                        {{ item.status === 'CONFIRMED' ? 'mdi-check-circle' : 'mdi-alert' }}
                      </v-icon>
                    </v-avatar>
                    <div>
                      <div class="text-caption font-weight-bold grey--text text--darken-2">
                        {{ item.category }}
                      </div>
                      <div class="text-subtitle-1 font-weight-bold">
                        {{ item.title }}
                      </div>
                      <div class="text-body-2 grey--text text--darken-3 mt-1">
                        {{ item.description }}
                      </div>
                      <div v-if="item.confirmedAt" class="text-caption success--text font-weight-medium mt-1">
                        ✓ ຢືນຢັນແລ້ວເມື່ອ: {{ formatDate(item.confirmedAt) }} (ໂດຍ User ID: {{ item.confirmedBy || 'Admin' }})
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-center flex-column align-end mt-2 mt-sm-0">
                    <v-chip
                      :color="item.status === 'CONFIRMED' ? 'success' : (item.status === 'HELD_PENDING_REV5' ? 'grey darken-1' : 'amber darken-3')"
                      text-color="white"
                      small
                      class="font-weight-bold mb-2"
                    >
                      {{ item.status }}
                    </v-chip>

                    <!-- Action Buttons -->
                    <v-btn
                      v-if="item.itemKey === 'TAX_PROFILE'"
                      color="primary"
                      depressed
                      small
                      class="text-none font-weight-bold"
                      @click="activeTab = 1"
                    >
                      {{ item.actionLabel }}
                    </v-btn>
                    <v-btn
                      v-else-if="item.itemKey === 'FEE_TREATMENT'"
                      color="primary"
                      outlined
                      small
                      class="text-none font-weight-bold"
                      @click="activeTab = 2"
                    >
                      {{ item.actionLabel }}
                    </v-btn>
                    <v-btn
                      v-else-if="item.itemKey === 'PROVISION_POLICY'"
                      color="primary"
                      outlined
                      small
                      class="text-none font-weight-bold"
                      @click="activeTab = 3"
                    >
                      {{ item.actionLabel }}
                    </v-btn>
                    <v-btn
                      v-else-if="item.itemKey === 'DPD_CLASSIFICATION'"
                      color="primary"
                      outlined
                      small
                      class="text-none font-weight-bold"
                      @click="activeTab = 3"
                    >
                      {{ item.actionLabel }}
                    </v-btn>
                    <v-btn
                      v-else-if="item.itemKey === 'GL_ROLE_MAPPINGS'"
                      color="grey darken-2"
                      outlined
                      small
                      class="text-none font-weight-bold"
                      @click="activeTab = 4"
                    >
                      {{ item.actionLabel }}
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

      <!-- ========================================== -->
      <!-- TAB 2: TAX PROFILE & VAT ENGINE -->
      <!-- ========================================== -->
      <v-tab-item>
        <v-row dense>
          <!-- VAT Company Settings -->
          <v-col cols="12" md="5">
            <v-card class="elevation-1 rounded-lg pa-4 mb-4">
              <div class="d-flex justify-space-between align-center mb-3">
                <div class="text-h6 font-weight-bold primary--text">
                  ໂປຣໄຟລ໌ອາກອນ (Tax & VAT Profile)
                </div>
                <v-chip
                  :color="taxProfile.confirmationStatus === 'CONFIRMED' ? 'success' : 'amber darken-3'"
                  text-color="white"
                  small
                  class="font-weight-bold"
                >
                  {{ taxProfile.confirmationStatus }}
                </v-chip>
              </div>

              <v-divider class="mb-4"></v-divider>

              <v-switch
                v-model="taxProfile.companyVatRegistered"
                color="primary"
                label="ບໍລິສັດຈົດທະບຽນອາກອນມູນຄ່າເພີ່ມ (Company VAT Registered)"
                dense
                class="mb-2"
              ></v-switch>

              <v-text-field
                v-model="taxRateDisplay"
                label="ອັດຕາອາກອນມູນຄ່າເພີ່ມເລີ່ມຕົ້ນ (% Default VAT Rate)"
                outlined
                dense
                suffix="%"
                hint="ດຶງມາຈາກຕາຕະລາງອາກອນ POS ເລີ່ມຕົ້ນ (ບໍ່ໄດ້ Fix 7% ຫຼື 10%)"
                persistent-hint
                class="mb-3"
              ></v-text-field>

              <v-textarea
                v-model="taxProfile.notes"
                label="ໝາຍເຫດນະໂຍບາຍອາກອນ (Management Tax Policy Notes)"
                outlined
                dense
                rows="3"
                class="mb-3"
              ></v-textarea>

              <div v-if="taxProfile.confirmedAt" class="mb-4 pa-3 grey lighten-4 rounded">
                <div class="text-caption font-weight-bold grey--text text--darken-2">ຂໍ້ມູນການຢືນຢັນ (Audit Trail):</div>
                <div class="text-caption">ວັນທີຢືນຢັນ: {{ formatDate(taxProfile.confirmedAt) }}</div>
                <div class="text-caption">User ID: {{ taxProfile.confirmedBy || 'Admin' }}</div>
              </div>

              <div class="d-flex flex-column gap-2">
                <v-btn
                  color="success"
                  depressed
                  large
                  block
                  class="text-none font-weight-bold mb-2"
                  @click="confirmTaxProfile"
                  :loading="loading"
                >
                  <v-icon left>mdi-check-decagram</v-icon>
                  ຢືນຢັນໂປຣໄຟລ໌ອາກອນ (Confirm Tax Profile)
                </v-btn>

                <v-btn
                  color="primary"
                  outlined
                  block
                  class="text-none font-weight-bold"
                  @click="saveTaxProfileSettings"
                  :loading="loading"
                >
                  <v-icon left small>mdi-content-save</v-icon>
                  ບັນທຶກການຕັ້ງຄ່າ (Save Draft)
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <!-- Component Taxability Matrix -->
          <v-col cols="12" md="7">
            <v-card class="elevation-1 rounded-lg pa-4 mb-4">
              <div class="d-flex justify-space-between align-center mb-3">
                <div>
                  <div class="text-h6 font-weight-bold primary--text">
                    ກຳນົດອາກອນແຍກຕາມອົງປະກອບ (Component Taxability Matrix)
                  </div>
                  <div class="text-caption grey--text">
                    ຄ່າທຳນຽມ ແລະ ຂາຍລົດຍຶດເສຍອາກອນ, ດອກເບ້ຍ ແລະ ປະກັນໄພສົ່ງຕໍ່ບໍ່ເສຍອາກອນ
                  </div>
                </div>
              </div>

              <v-divider class="mb-3"></v-divider>

              <v-data-table
                :headers="componentTaxHeaders"
                :items="components"
                dense
                class="elevation-0"
                :items-per-page="10"
                hide-default-footer
              >
                <template v-slot:[`item.isTaxable`]="{ item }">
                  <v-switch
                    v-model="item.isTaxable"
                    color="primary"
                    dense
                    hide-details
                    class="ma-0 pa-0"
                    @change="updateComponentTax(item)"
                  ></v-switch>
                </template>

                <template v-slot:[`item.taxInclusive`]="{ item }">
                  <v-chip x-small :color="item.taxInclusive ? 'info' : 'grey lighten-1'" text-color="white">
                    {{ item.taxInclusive ? 'Inclusive (ລວມ)' : 'Exclusive (ແຍກ)' }}
                  </v-chip>
                </template>

                <template v-slot:[`item.taxPointEvent`]="{ item }">
                  <v-chip x-small color="purple lighten-4" class="purple--text text--darken-3 font-weight-bold">
                    {{ item.taxPointEvent }}
                  </v-chip>
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn icon small color="primary" @click="editComponentDialog(item)">
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- ========================================== -->
      <!-- TAB 3: PRODUCT FACTORY -->
      <!-- ========================================== -->
      <v-tab-item>
        <v-card class="elevation-1 rounded-lg pa-4">
          <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
            <div>
              <div class="text-h6 font-weight-bold primary--text">
                ສາງຜະລິດຕະພັນສິນເຊື່ອເຊົ່າຊື້ລົດ (Vehicle Financing Product Catalog)
              </div>
              <div class="text-caption grey--text">
                ຜະລິດຕະພັນມາດຕະຖານ: Declining Balance (EMI), Flat Rate, ແລະ Balloon Payment
              </div>
            </div>

            <v-btn color="primary" depressed class="text-none font-weight-bold" @click="openCreateProductDialog">
              <v-icon left small>mdi-plus-circle</v-icon>
              ສ້າງຜະລິດຕະພັນໃໝ່
            </v-btn>
          </div>

          <v-row dense>
            <v-col v-for="prod in products" :key="prod.id" cols="12" md="4" class="mb-3">
              <v-card outlined rounded="lg" class="product-card pa-4 h-100 d-flex flex-column justify-space-between">
                <div>
                  <div class="d-flex justify-space-between align-center mb-2">
                    <v-chip color="primary lighten-5" class="primary--text font-weight-bold" small>
                      {{ prod.productCode }} (v{{ prod.version }})
                    </v-chip>
                    <v-chip color="success" text-color="white" x-small class="font-weight-bold">
                      {{ prod.status }}
                    </v-chip>
                  </div>

                  <div class="text-subtitle-1 font-weight-bold mb-2">
                    {{ prod.name }}
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="text-body-2 mb-1">
                    <span class="grey--text">Tenor Range:</span> <strong>{{ prod.minTenorMonths }} - {{ prod.maxTenorMonths }} ເດືອນ</strong>
                  </div>
                  <div class="text-body-2 mb-1">
                    <span class="grey--text">Interest Rate:</span> <strong>{{ (parseFloat(prod.minInterestRate)*100).toFixed(1) }}% - {{ (parseFloat(prod.maxInterestRate)*100).toFixed(1) }}%</strong>
                  </div>
                  <div class="text-body-2 mb-1">
                    <span class="grey--text">Min Down Payment:</span> <strong>{{ (parseFloat(prod.minDownPaymentPct)*100).toFixed(0) }}%</strong>
                  </div>
                  <div class="text-body-2 mb-1">
                    <span class="grey--text">Max LTV:</span> <strong>{{ (parseFloat(prod.maxLtvPct)*100).toFixed(0) }}%</strong>
                  </div>
                  <div class="text-body-2 mb-1">
                    <span class="grey--text">Disbursement:</span> <strong>{{ prod.disbursementTargetCode }}</strong>
                  </div>
                  <div class="text-body-2 mb-1">
                    <span class="grey--text">Fee Financing:</span> <v-chip x-small color="blue lighten-4" class="blue--text font-weight-bold">{{ prod.feeFinancingMode }}</v-chip>
                  </div>
                  <div class="text-body-2 mb-2">
                    <span class="grey--text">Fee Presentation:</span> <v-chip x-small color="teal lighten-4" class="teal--text font-weight-bold">{{ prod.deferredFeePresentation }}</v-chip>
                  </div>
                </div>

                <div class="d-flex justify-space-between align-center mt-3 pt-2 border-top">
                  <v-btn text small color="primary" class="text-none font-weight-bold" @click="viewProductDetails(prod)">
                    <v-icon left small>mdi-eye</v-icon>
                    ເບິ່ງລາຍລະອຽດ
                  </v-btn>
                  <v-btn outlined small color="secondary" class="text-none font-weight-bold" @click="cloneProductDialog(prod)">
                    <v-icon left small>mdi-content-copy</v-icon>
                    Clone
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

      <!-- ========================================== -->
      <!-- TAB 4: PROVISIONING & RISK RULES -->
      <!-- ========================================== -->
      <v-tab-item>
        <v-card class="elevation-1 rounded-lg pa-4">
          <!-- Policy Notice Alert -->
          <v-alert
            dense
            outlined
            type="info"
            class="mb-4"
            color="primary"
          >
            <strong>ນະໂຍບາຍບໍລິສັດ (Company Management Policy):</strong>
            ອັດຕາການຕັ້ງສຳຮອງໜີ້ສິນເຊື່ອ ແລະ ວັນຄ້າງຊຳລະ DPD ແມ່ນກຳນົດຕາມນະໂຍບາຍບໍລິຫານພາຍໃນຂອງຕົວແທນຈຳໜ່າຍລົດ (ບໍ່ໄດ້ສົມມຸດຕາມເກນ ທຫລ ໂດຍອັດຕະໂນມັດ). ຝ່າຍບໍລິຫານສາມາດປັບປຸງ ແລະ ກຳນົດອັດຕາໄດ້ຕາມຄວາມເໝາະສົມ.
          </v-alert>

          <v-row dense>
            <!-- Provision Rules Table -->
            <v-col cols="12" md="7">
              <v-card outlined rounded="lg" class="pa-3 mb-4">
                <div class="text-subtitle-1 font-weight-bold primary--text mb-2">
                  ອັດຕາສຳຮອງໜີ້ແຍກຕາມຊັ້ນໜີ້ (Provision Rates by Regulatory Class)
                </div>
                <v-data-table
                  :headers="provisionHeaders"
                  :items="provisionRules"
                  dense
                  hide-default-footer
                  class="elevation-0"
                >
                  <template v-slot:[`item.provisionRate`]="{ item }">
                    <strong>{{ (parseFloat(item.provisionRate) * 100).toFixed(1) }}%</strong>
                  </template>
                  <template v-slot:[`item.collateralHaircutPct`]="{ item }">
                    {{ (parseFloat(item.collateralHaircutPct) * 100).toFixed(0) }}% Haircut
                  </template>
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn icon small color="primary" @click="openEditProvisionDialog(item)">
                      <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>

            <!-- Status Movement Rules Table -->
            <v-col cols="12" md="5">
              <v-card outlined rounded="lg" class="pa-3 mb-4">
                <div class="text-subtitle-1 font-weight-bold primary--text mb-2">
                  ເກນການຍ້າຍສະຖານະໜີ້ (DPD Movement Rules)
                </div>
                <v-data-table
                  :headers="movementHeaders"
                  :items="statusMovements"
                  dense
                  hide-default-footer
                  class="elevation-0"
                >
                  <template v-slot:[`item.range`]="{ item }">
                    <v-chip x-small color="amber lighten-4" class="amber--text text--darken-4 font-weight-bold">
                      {{ item.minDpd }} - {{ item.maxDpd }} ວັນ
                    </v-chip>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

      <!-- ========================================== -->
      <!-- TAB 5: SYSTEM MASTER & ACCOUNTING METADATA -->
      <!-- ========================================== -->
      <v-tab-item>
        <v-card class="elevation-1 rounded-lg pa-4">
          <div class="text-h6 font-weight-bold primary--text mb-3">
            ຂໍ້ມູນລະຫັດລະບົບ ແລະ ຜັງບັນຊີ (System Master & Accounting Catalog)
          </div>

          <v-row dense>
            <!-- Numbering Sequences -->
            <v-col cols="12" md="6">
              <v-card outlined rounded="lg" class="pa-3 mb-4">
                <div class="text-subtitle-1 font-weight-bold primary--text mb-2">
                  <v-icon left small color="primary">mdi-numeric</v-icon>
                  ຮູບແບບເລກທີສັນຍາ ແລະ ທຸລະກຳ (Numbering Sequences)
                </div>
                <v-data-table
                  :headers="sequenceHeaders"
                  :items="sequences"
                  dense
                  hide-default-footer
                  class="elevation-0"
                >
                  <template v-slot:[`item.formatPattern`]="{ item }">
                    <code>{{ item.formatPattern }}</code>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>

            <!-- Accounting Roles (Phase 2A metadata inspection) -->
            <v-col cols="12" md="6">
              <v-card outlined rounded="lg" class="pa-3 mb-4">
                <div class="d-flex justify-space-between align-center mb-2">
                  <div class="text-subtitle-1 font-weight-bold primary--text">
                    <v-icon left small color="primary">mdi-book-account</v-icon>
                    ບົດບາດບັນຊີ (Accounting Roles - {{ accountingRoles.length }} Roles)
                  </div>
                  <v-chip x-small color="grey darken-2" text-color="white">
                    Phase 2B Hold
                  </v-chip>
                </div>
                <v-data-table
                  :headers="roleHeaders"
                  :items="accountingRoles"
                  dense
                  :items-per-page="5"
                  class="elevation-0"
                >
                  <template v-slot:[`item.expectedType`]="{ item }">
                    <v-chip x-small :color="getTypeColor(item.expectedType)" text-color="white">
                      {{ item.expectedType }}
                    </v-chip>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <!-- Dialog: Edit Component Tax -->
    <v-dialog v-model="compDialog" max-width="500">
      <v-card rounded="lg" v-if="selectedComponent">
        <v-card-title class="primary white--text py-3">
          <v-icon left color="white">mdi-receipt</v-icon>
          ຕັ້ງຄ່າອາກອນ: {{ selectedComponent.name }}
        </v-card-title>
        <v-card-text class="pa-4 pt-6">
          <v-switch
            v-model="selectedComponent.isTaxable"
            color="primary"
            label="ເສຍອາກອນມູນຄ່າເພີ່ມ (Taxable Component)"
            dense
          ></v-switch>

          <v-text-field
            v-model="selectedComponent.taxCode"
            label="ລະຫັດອາກອນ (Tax Code)"
            outlined
            dense
          ></v-text-field>

          <v-select
            v-model="selectedComponent.taxPointEvent"
            :items="['DISB', 'BILL', 'COLLECTION']"
            label="ຈຸດເກີດພັນທະອາກອນ (Tax Point Event)"
            outlined
            dense
            hint="DISB: ເມື່ອເບີກຈ່າຍ, BILL: ເມື່ອຮຽກເກັບ, COLLECTION: ເມື່ອໄດ້ຮັບຊຳລະເງິນ"
            persistent-hint
          ></v-select>

          <v-switch
            v-model="selectedComponent.taxInclusive"
            color="primary"
            label="ລາຄາລວມອາກອນແລ້ວ (Tax Inclusive)"
            dense
            class="mt-3"
          ></v-switch>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn text @click="compDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" depressed @click="saveComponentTaxModal">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog: Edit Provision Rule -->
    <v-dialog v-model="provisionDialog" max-width="450">
      <v-card rounded="lg" v-if="selectedProvision">
        <v-card-title class="primary white--text py-3">
          <v-icon left color="white">mdi-percent</v-icon>
          ແກ້ໄຂອັດຕາສຳຮອງ: {{ selectedProvision.regulatoryClassCode }}
        </v-card-title>
        <v-card-text class="pa-4 pt-6">
          <v-text-field
            v-model="provisionRateDisplay"
            label="ອັດຕາສຳຮອງໜີ້ (% Provision Rate)"
            outlined
            dense
            suffix="%"
          ></v-text-field>
          <v-text-field
            v-model="haircutRateDisplay"
            label="ອັດຕາຕັດມູນຄ່າຫຼັກຊັບ (% Collateral Haircut)"
            outlined
            dense
            suffix="%"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn text @click="provisionDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" depressed @click="saveProvisionRuleModal">ບັນທຶກນະໂຍບາຍ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog: View Product Details -->
    <v-dialog v-model="productDialog" max-width="700">
      <v-card rounded="lg" v-if="selectedProduct">
        <v-card-title class="primary white--text py-3 d-flex justify-space-between align-center">
          <div>
            <v-icon left color="white">mdi-car-info</v-icon>
            {{ selectedProduct.name }} ({{ selectedProduct.productCode }})
          </div>
          <v-chip color="white" class="primary--text font-weight-bold" small>
            Version {{ selectedProduct.version }}
          </v-chip>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-tabs v-model="productDetailTab" dense color="primary">
            <v-tab class="text-none">ຂໍ້ມູນທົ່ວໄປ (General)</v-tab>
            <v-tab class="text-none">ອົງປະກອບ (Components)</v-tab>
            <v-tab class="text-none">ລຳດັບຕັດຊຳລະ (Waterfall)</v-tab>
          </v-tabs>

          <v-tabs-items v-model="productDetailTab" class="mt-3">
            <v-tab-item>
              <v-row dense class="text-body-2">
                <v-col cols="6"><strong>ປະເພດເງິນກູ້:</strong> {{ selectedProduct.loanTypeCode }}</v-col>
                <v-col cols="6"><strong>ເປົ້າໝາຍເບີກຈ່າຍ:</strong> {{ selectedProduct.disbursementTargetCode }}</v-col>
                <v-col cols="6"><strong>ວົງເງິນ:</strong> {{ formatNumber(selectedProduct.minAmount) }} - {{ formatNumber(selectedProduct.maxAmount) }}</v-col>
                <v-col cols="6"><strong>ໄລຍະເວລາ:</strong> {{ selectedProduct.minTenorMonths }} - {{ selectedProduct.maxTenorMonths }} ເດືອນ</v-col>
                <v-col cols="6"><strong>ດອກເບ້ຍ:</strong> {{ (parseFloat(selectedProduct.minInterestRate)*100).toFixed(1) }}% - {{ (parseFloat(selectedProduct.maxInterestRate)*100).toFixed(1) }}%</v-col>
                <v-col cols="6"><strong>ເງິນດາວຂັ້ນຕ່ຳ:</strong> {{ (parseFloat(selectedProduct.minDownPaymentPct)*100).toFixed(0) }}%</v-col>
                <v-col cols="6"><strong>LTV ສູງສຸດ:</strong> {{ (parseFloat(selectedProduct.maxLtvPct)*100).toFixed(0) }}%</v-col>
                <v-col cols="6"><strong>ຮູບແບບຄ່າທຳນຽມ:</strong> {{ selectedProduct.feeFinancingMode }} ({{ selectedProduct.deferredFeePresentation }})</v-col>
                <v-col cols="6"><strong>ການຄິດໄລ່ດອກເບ້ຍ:</strong> {{ selectedProduct.accrualMethodCode }}</v-col>
                <v-col cols="6"><strong>Day Count:</strong> {{ selectedProduct.dayCountCode }}</v-col>
              </v-row>
            </v-tab-item>

            <v-tab-item>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Formula</th>
                    <th>Default</th>
                    <th>Timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pc in (selectedProduct.productComponents || [])" :key="pc.id">
                    <td>{{ (pc.component && pc.component.name) || pc.componentId }}</td>
                    <td><code>{{ pc.formulaCode }}</code></td>
                    <td>{{ pc.defaultValue }}</td>
                    <td><v-chip x-small>{{ pc.timing }}</v-chip></td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <v-tab-item>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th>Priority</th>
                    <th>Component</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="wf in (selectedProduct.waterfallRules || [])" :key="wf.id">
                    <td><strong>#{{ wf.priorityOrder }}</strong></td>
                    <td>{{ (wf.component && wf.component.name) || wf.componentId }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="productDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common';

export default {
  name: 'LoanParameterStudio',
  data() {
    return {
      loading: false,
      activeTab: 0,
      warningBannerActive: true,
      canDisburse: false,
      allChecklistConfirmed: false,

      // Checklist data
      checklistItems: [],

      // Tax profile data
      taxProfile: {
        companyVatRegistered: true,
        confirmationStatus: 'UNCONFIRMED',
        defaultVatRate: 0.100000,
        notes: '',
        confirmedBy: null,
        confirmedAt: null
      },
      taxRateDisplay: '10.0',
      components: [],

      // Products data
      products: [],
      selectedProduct: null,
      productDialog: false,
      productDetailTab: 0,

      // Provisioning data
      provisionRules: [],
      statusMovements: [],
      selectedProvision: null,
      provisionDialog: false,
      provisionRateDisplay: '1.0',
      haircutRateDisplay: '30.0',

      // System data
      sequences: [],
      accountingRoles: [],

      // Component tax modal
      compDialog: false,
      selectedComponent: null,

      // Table Headers
      componentTaxHeaders: [
        { text: 'Component (ອົງປະກອບ)', value: 'name' },
        { text: 'Taxable (ເສຍອາກອນ)', value: 'isTaxable', width: '120px' },
        { text: 'Tax Code', value: 'taxCode' },
        { text: 'Treatment', value: 'taxInclusive' },
        { text: 'Tax Point Event', value: 'taxPointEvent' },
        { text: 'Actions', value: 'actions', sortable: false, width: '60px' }
      ],
      provisionHeaders: [
        { text: 'Regulatory Class (ຊັ້ນໜີ້)', value: 'regulatoryClassCode' },
        { text: 'Provision Rate (ອັດຕາສຳຮອງ)', value: 'provisionRate' },
        { text: 'Collateral Haircut', value: 'collateralHaircutPct' },
        { text: 'Provision Base', value: 'provisionBase' },
        { text: 'Actions', value: 'actions', sortable: false, width: '60px' }
      ],
      movementHeaders: [
        { text: 'From Status', value: 'fromStatus' },
        { text: 'To Status', value: 'toStatus' },
        { text: 'DPD Aging Range (ວັນຄ້າງຊຳລະ)', value: 'range' }
      ],
      sequenceHeaders: [
        { text: 'Sequence Code', value: 'sequenceCode' },
        { text: 'Prefix', value: 'prefix' },
        { text: 'Pattern Pattern', value: 'formatPattern' },
        { text: 'Next Number', value: 'nextNumber' }
      ],
      roleHeaders: [
        { text: 'Role Code', value: 'roleCode' },
        { text: 'Name', value: 'name' },
        { text: 'Expected Type', value: 'expectedType' }
      ]
    };
  },
  mounted() {
    // If URL has query ?tab=...
    if (this.$route.query.tab) {
      const tabMap = { checklist: 0, vat: 1, tax: 1, products: 2, provision: 3, system: 4 };
      if (tabMap[this.$route.query.tab] !== undefined) {
        this.activeTab = tabMap[this.$route.query.tab];
      }
    }
    this.refreshAllData();
  },
  methods: {
    async refreshAllData() {
      this.loading = true;
      try {
        await Promise.all([
          this.loadChecklist(),
          this.loadTaxProfile(),
          this.loadProducts(),
          this.loadProvisionRules(),
          this.loadSystemData()
        ]);
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', 'ບໍ່ສາມາດດຶງຂໍ້ມູນພາຣາມິເຕີ: ' + (err.message || err));
      } finally {
        this.loading = false;
      }
    },

    async loadChecklist() {
      const res = await this.$axios.get('/api/loan/checklist');
      if (res.data && res.data.status) {
        this.checklistItems = res.data.data.checklistItems || [];
        this.allChecklistConfirmed = res.data.data.allConfirmed;
        this.canDisburse = res.data.data.canDisburse;
        this.warningBannerActive = res.data.data.warningBannerActive;
      }
    },

    async loadTaxProfile() {
      const res = await this.$axios.get('/api/loan/tax-profile');
      if (res.data && res.data.status) {
        this.taxProfile = res.data.data.taxProfile || {};
        this.taxRateDisplay = (parseFloat(this.taxProfile.defaultVatRate || 0.1) * 100).toFixed(1);
        this.components = res.data.data.components || [];
        this.warningBannerActive = res.data.data.warningBannerActive;
      }
    },

    async loadProducts() {
      const res = await this.$axios.get('/api/loan/products');
      if (res.data && res.data.status) {
        this.products = res.data.data || [];
      }
    },

    async loadProvisionRules() {
      const [resProv, resStat] = await Promise.all([
        this.$axios.get('/api/loan/provision-rules'),
        this.$axios.get('/api/loan/status-rules')
      ]);
      if (resProv.data && resProv.data.status) {
        this.provisionRules = resProv.data.data.rules || [];
      }
      if (resStat.data && resStat.data.status) {
        this.statusMovements = resStat.data.data.movements || [];
      }
    },

    async loadSystemData() {
      const [resSeq, resAcc] = await Promise.all([
        this.$axios.get('/api/loan/sequences'),
        this.$axios.get('/api/loan/accounting-metadata')
      ]);
      if (resSeq.data && resSeq.data.status) {
        this.sequences = resSeq.data.data || [];
      }
      if (resAcc.data && resAcc.data.status) {
        this.accountingRoles = resAcc.data.data.roles || [];
      }
    },

    async confirmTaxProfile() {
      try {
        const confirm = await this.$swal({
          title: 'ຢືນຢັນໂປຣໄຟລ໌ອາກອນ?',
          text: `ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການຢືນຢັນອັດຕາອາກອນ ${(parseFloat(this.taxRateDisplay)).toFixed(1)}% ແລະ ການກຳນົດຄ່າອາກອນຂອງອົງປະກອບສິນເຊື່ອທັງໝົດ? ການຢືນຢັນນີ້ຈະປົດລັອກການເບີກຈ່າຍເງິນກູ້.`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#2e7d32',
          cancelButtonColor: '#757575',
          confirmButtonText: 'ຢືນຢັນ (Confirm)',
          cancelButtonText: 'ຍົກເລີກ'
        });

        if (confirm.isConfirmed) {
          this.loading = true;
          const res = await this.$axios.post('/api/loan/tax-profile/confirm');
          if (res.data && res.data.status) {
            swalSuccess(this.$swal, 'ສຳເລັດ', 'ຢືນຢັນໂປຣໄຟລ໌ອາກອນຮຽບຮ້ອຍແລ້ວ! ປົດລັອກການເບີກຈ່າຍສິນເຊື່ອ.');
            await this.refreshAllData();
          }
        }
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', 'ການຢືນຢັນບໍ່ສຳເລັດ: ' + (err.message || err));
      } finally {
        this.loading = false;
      }
    },

    async saveTaxProfileSettings() {
      this.loading = true;
      try {
        const rate = parseFloat(this.taxRateDisplay) / 100.0;
        const payload = {
          companyVatRegistered: this.taxProfile.companyVatRegistered,
          defaultVatRate: rate,
          notes: this.taxProfile.notes
        };
        const res = await this.$axios.put('/api/loan/tax-profile', payload);
        if (res.data && res.data.status) {
          swalSuccess(this.$swal, 'ສຳເລັດ', 'ບັນທຶກໂປຣໄຟລ໌ອາກອນຮຽບຮ້ອຍແລ້ວ');
          await this.loadTaxProfile();
          await this.loadChecklist();
        }
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', 'ບໍ່ສາມາດບັນທຶກ: ' + (err.message || err));
      } finally {
        this.loading = false;
      }
    },

    async updateComponentTax(item) {
      try {
        await this.$axios.put(`/api/loan/components/${item.id}/tax`, {
          isTaxable: item.isTaxable,
          taxCode: item.taxCode,
          taxInclusive: item.taxInclusive,
          taxPointEvent: item.taxPointEvent
        });
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', 'ບໍ່ສາມາດປັບປຸງອາກອນອົງປະກອບ: ' + (err.message || err));
      }
    },

    editComponentDialog(item) {
      this.selectedComponent = { ...item };
      this.compDialog = true;
    },

    async saveComponentTaxModal() {
      if (!this.selectedComponent) return;
      this.loading = true;
      try {
        await this.$axios.put(`/api/loan/components/${this.selectedComponent.id}/tax`, {
          isTaxable: this.selectedComponent.isTaxable,
          taxCode: this.selectedComponent.taxCode,
          taxInclusive: this.selectedComponent.taxInclusive,
          taxPointEvent: this.selectedComponent.taxPointEvent
        });
        swalSuccess(this.$swal, 'ສຳເລັດ', 'ອັບເດດອາກອນອົງປະກອບສຳເລັດ');
        this.compDialog = false;
        await this.loadTaxProfile();
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', 'ບັນທຶກບໍ່ສຳເລັດ: ' + (err.message || err));
      } finally {
        this.loading = false;
      }
    },

    viewProductDetails(prod) {
      this.selectedProduct = prod;
      this.productDetailTab = 0;
      this.productDialog = true;
    },

    async cloneProductDialog(prod) {
      const input = await this.$swal({
        title: `Clone ${prod.productCode}?`,
        input: 'text',
        inputLabel: 'ລະຫັດຜະລິດຕະພັນໃໝ່ (New Product Code)',
        inputValue: `${prod.productCode}-COPY`,
        showCancelButton: true,
        confirmButtonText: 'Clone',
        cancelButtonText: 'ຍົກເລີກ'
      });

      if (input.isConfirmed && input.value) {
        this.loading = true;
        try {
          const res = await this.$axios.post(`/api/loan/products/${prod.id}/clone`, {
            productCode: input.value.trim().toUpperCase(),
            name: `${prod.name} (Copy)`
          });
          if (res.data && res.data.status) {
            swalSuccess(this.$swal, 'ສຳເລັດ', 'Clone ຜະລິດຕະພັນສຳເລັດ');
            await this.loadProducts();
          }
        } catch (err) {
          swalError2(this.$swal, 'ຜິດພາດ', 'Clone ບໍ່ສຳເລັດ: ' + (err.message || err));
        } finally {
          this.loading = false;
        }
      }
    },

    openCreateProductDialog() {
      swalSuccess(this.$swal, 'ແຈ້ງເຕືອນ', 'ສາມາດນຳໃຊ້ຟັງຊັນ Clone ເພື່ອສ້າງຜະລິດຕະພັນໃໝ່ຈາກຜະລິດຕະພັນມາດຕະຖານໄດ້ທັນທີ.');
    },

    openEditProvisionDialog(rule) {
      this.selectedProvision = { ...rule };
      this.provisionRateDisplay = (parseFloat(rule.provisionRate) * 100).toFixed(1);
      this.haircutRateDisplay = (parseFloat(rule.collateralHaircutPct) * 100).toFixed(0);
      this.provisionDialog = true;
    },

    async saveProvisionRuleModal() {
      if (!this.selectedProvision) return;
      this.loading = true;
      try {
        const provRate = parseFloat(this.provisionRateDisplay) / 100.0;
        const haircutRate = parseFloat(this.haircutRateDisplay) / 100.0;
        await this.$axios.put(`/api/loan/provision-rules/${this.selectedProvision.id}`, {
          provisionRate: provRate,
          collateralHaircutPct: haircutRate
        });
        swalSuccess(this.$swal, 'ສຳເລັດ', 'ບັນທຶກອັດຕາສຳຮອງໜີ້ຕາມນະໂຍບາຍບໍລິສັດສຳເລັດ');
        this.provisionDialog = false;
        await this.loadProvisionRules();
        await this.loadChecklist();
      } catch (err) {
        swalError2(this.$swal, 'ຜິດພາດ', 'ບໍ່ສາມາດບັນທຶກ: ' + (err.message || err));
      } finally {
        this.loading = false;
      }
    },

    getTypeColor(type) {
      const map = {
        Asset: 'primary',
        'Contra-Asset': 'deep-orange',
        Liability: 'warning darken-2',
        Revenue: 'success',
        Expense: 'error',
        'Off-Balance': 'purple'
      };
      return map[type] || 'grey';
    },

    formatNumber(val) {
      if (!val) return '0';
      return Number(val).toLocaleString('en-US');
    },

    formatDate(dateStr) {
      if (!dateStr) return '';
      return new Date(dateStr).toLocaleString('lo-LA');
    }
  }
};
</script>

<style scoped>
.loan-studio-container {
  max-width: 1400px;
  margin: 0 auto;
}

.border-subtle {
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.confirmed-border {
  border-left: 5px solid #2e7d32 !important;
}

.unconfirmed-border {
  border-left: 5px solid #f57f17 !important;
}

.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
