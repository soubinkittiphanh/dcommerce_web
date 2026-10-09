<template>
  <div class="shelf-tag-container">
    <!-- Loading Overlay -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator />
    </v-dialog>

    <!-- Top Header Bar -->
    <v-row align="center" class="mb-3">
      <v-col cols="12" sm="7" class="py-1">
        <div class="d-flex align-center">
          <v-btn icon color="primary" class="mr-2" @click="$router.push('/admin/product/productlist')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-avatar color="primary" size="42" class="mr-3 elevation-3">
            <v-icon color="white">mdi-tag-text-outline</v-icon>
          </v-avatar>
          <div>
            <h2 class="font-weight-bold text-h6 grey--text text--darken-4 mb-0 d-flex align-center">
              ພິມປ້າຍລາຄາຕິດຊັ້ນວາງ (Shelf Tag Printing)
              <v-chip x-small color="primary lighten-4" text-color="primary" class="ml-2 font-weight-bold">
                Batch Scanner
              </v-chip>
            </h2>
            <p class="grey--text text--darken-1 mb-0 caption">
              ຍິງ Barcode ຫຼື ຄົ້ນຫາສິນຄ້າ (ຂະໜາດ {{ currentSelectedSizeName }}, {{ isRollMode ? 'ມ້ວນສະຕິກເກີ 1 ໃບ/ໜ້າ' : `${activeTagsPerSheet} ໃບ/ໜ້າ A4` }})
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="5" class="py-1 text-sm-right d-flex justify-sm-end align-center flex-wrap" style="gap: 8px;">
        <v-btn
          small
          outlined
          :color="soundEnabled ? 'success' : 'grey'"
          class="rounded-lg font-weight-bold text-none"
          @click="soundEnabled = !soundEnabled"
        >
          <v-icon left small>{{ soundEnabled ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
          {{ soundEnabled ? 'Sound On' : 'Muted' }}
        </v-btn>

        <v-btn small outlined color="primary" class="rounded-lg font-weight-bold" :loading="isloading" @click="fetchProducts">
          <v-icon left small>mdi-refresh</v-icon>
          Reload Products
        </v-btn>

        <v-btn
          small
          color="primary"
          dark
          class="rounded-lg font-weight-bold"
          @click="categoryDialog = true"
        >
          <v-icon left small>mdi-shape-plus</v-icon>
          ເລືອກຈາກໝວດໝູ່
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tag Size & Paper Format Selector Bar -->
    <v-card outlined class="rounded-xl pa-2 mb-3 bg-white elevation-1 border-light">
      <v-row align="center" no-gutters class="flex-wrap" style="gap: 8px;">
        <!-- Size Selector Menu -->
        <v-col cols="12" sm="auto" class="d-flex align-center">
          <span class="caption font-weight-bold grey--text text--darken-2 mr-2 d-none d-md-inline">
            <v-icon small color="primary" class="mr-1">mdi-aspect-ratio</v-icon>
            ຂະໜາດປ້າຍ:
          </span>
          <v-menu offset-y transition="slide-y-transition" rounded="lg">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                depressed
                color="indigo lighten-5"
                class="rounded-lg font-weight-bold indigo--text text--darken-4 text-none"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon left small color="indigo">mdi-tag-outline</v-icon>
                <span>{{ currentSelectedSizeName }}</span>
                <v-chip x-small color="indigo" text-color="white" class="ml-2 font-weight-bold">
                  {{ isRollMode ? 'Roll' : `${activeTagsPerSheet} ໃບ/A4` }}
                </v-chip>
                <v-icon right small color="indigo">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                v-for="preset in sizePresetsList"
                :key="preset.key"
                :class="sizePreset === preset.key ? 'indigo lighten-5 font-weight-bold' : ''"
                @click="setSizePreset(preset.key)"
              >
                <v-list-item-icon class="mr-2">
                  <v-icon small :color="sizePreset === preset.key ? 'indigo' : 'grey'">
                    {{ sizePreset === preset.key ? 'mdi-check-circle' : 'mdi-tag-outline' }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">
                    {{ preset.width }}x{{ preset.height }}mm – {{ preset.labelLao }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="caption grey--text">
                    {{ preset.tagsPerA4 }} ໃບ/ໜ້າ A4
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="customSizeDialog = true">
                <v-list-item-icon class="mr-2">
                  <v-icon small color="orange darken-2">mdi-ruler-square</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="font-weight-bold">
                  ກຳນົດຂະໜາດເອງ (Custom Size)...
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <!-- Paper Mode Toggle -->
        <v-col cols="12" sm="auto" class="d-flex align-center">
          <v-btn-toggle v-model="paperType" mandatory dense color="primary" class="rounded-lg bg-slate-50 border-light">
            <v-btn value="a4" small class="text-none font-weight-bold px-3">
              <v-icon left small color="primary">mdi-file-document-outline</v-icon>
              <span>A4 Sheet</span>
            </v-btn>
            <v-btn value="roll" small class="text-none font-weight-bold px-3">
              <v-icon left small color="orange darken-2">mdi-receipt-text-outline</v-icon>
              <span>Thermal Roll</span>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <v-spacer></v-spacer>

        <!-- Display Options Button -->
        <v-col cols="12" sm="auto" class="d-flex align-center justify-sm-end">
          <v-btn
            small
            outlined
            color="grey darken-2"
            class="rounded-lg font-weight-bold text-none"
            @click="optionsDialog = true"
          >
            <v-icon left small color="primary">mdi-tune</v-icon>
            ຕັ້ງຄ່າການສະແດງຜົນ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Metrics & Sheet Estimator Cards -->
    <v-row class="mb-3">
      <v-col cols="6" sm="3" class="py-1">
        <v-card outlined class="rounded-xl pa-3 stat-card stat-card-primary elevation-1">
          <div class="d-flex align-center justify-space-between">
            <div>
              <div class="text-caption font-weight-bold text-uppercase primary--text text--darken-2">ສິນຄ້າທີ່ເລືອກ</div>
              <div class="text-h5 font-weight-black grey--text text--darken-4 mt-1 font-mono">
                {{ queue.length }}
                <span class="text-caption grey--text">ລາຍການ</span>
              </div>
            </div>
            <v-avatar color="primary lighten-5" size="38">
              <v-icon color="primary">mdi-package-variant-closed</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="6" sm="3" class="py-1">
        <v-card outlined class="rounded-xl pa-3 stat-card stat-card-primary elevation-1">
          <div class="d-flex align-center justify-space-between">
            <div>
              <div class="text-caption font-weight-bold text-uppercase primary--text text--darken-2">ຈຳນວນປ້າຍທັງໝົດ</div>
              <div class="text-h5 font-weight-black primary--text mt-1 font-mono">
                {{ totalCopies }}
                <span class="text-caption grey--text">ໃບ</span>
              </div>
            </div>
            <v-avatar color="primary lighten-5" size="38">
              <v-icon color="primary">mdi-tag-multiple</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="6" sm="3" class="py-1">
        <v-card outlined class="rounded-xl pa-3 stat-card bg-gradient-purple elevation-1">
          <div class="d-flex align-center justify-space-between">
            <div>
              <div class="text-caption font-weight-bold text-uppercase purple--text text--darken-3">
                {{ isRollMode ? 'ຈຳນວນສະຕິກເກີ' : 'ຈຳນວນໜ້າ A4' }}
              </div>
              <div class="text-h5 font-weight-black purple--text text--darken-4 mt-1 font-mono">
                {{ isRollMode ? totalCopies : totalA4Sheets }}
                <span class="text-caption grey--text">{{ isRollMode ? 'ໃບ' : 'ໜ້າ' }}</span>
              </div>
            </div>
            <v-avatar color="purple lighten-5" size="38">
              <v-icon color="purple darken-2">{{ isRollMode ? 'mdi-receipt-text-outline' : 'mdi-file-document-outline' }}</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="6" sm="3" class="py-1">
        <v-card outlined class="rounded-xl pa-3 stat-card stat-card-primary elevation-1">
          <div class="d-flex align-center justify-space-between">
            <div style="width: 100%;">
              <div class="text-caption font-weight-bold text-uppercase primary--text text--darken-2 d-flex justify-space-between">
                <span>{{ isRollMode ? 'ຮູບແບບມ້ວນຕໍ່ເນື່ອງ' : 'ສະຖານະເຕັມໜ້າ A4' }}</span>
                <span class="font-weight-bold">{{ isRollMode ? '1 ໃບ/ໜ້າ' : `${filledOnLastSheet}/${activeTagsPerSheet}` }}</span>
              </div>
              <v-progress-linear
                :value="isRollMode ? 100 : (filledOnLastSheet / activeTagsPerSheet) * 100"
                color="primary"
                height="8"
                rounded
                class="mt-2"
              ></v-progress-linear>
              <div class="caption grey--text mt-1 text-truncate">
                {{ slotsRemainingText }}
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Barcode Scanner & Search Input Card -->
    <v-card class="rounded-xl mb-4 pa-4 elevation-2 border-primary-light">
      <v-row align="center">
        <!-- Scan Box -->
        <v-col cols="12" md="6" class="py-1">
          <div class="scanner-input-wrap">
            <v-text-field
              ref="scannerInput"
              v-model="scanBarcode"
              placeholder="ຍິງ Barcode ຫຼື ພິມລະຫັດ ແລ້ວກົດ Enter..."
              prepend-inner-icon="mdi-barcode-scan"
              clearable
              outlined
              dense
              hide-details
              autofocus
              class="rounded-lg scanner-field font-weight-bold font-mono"
              @keyup.enter="onManualScanEnter"
            >
              <template v-slot:append>
                <v-btn
                  small
                  depressed
                  color="primary"
                  class="rounded font-weight-bold"
                  :disabled="!scanBarcode"
                  @click="onManualScanEnter"
                >
                  ເພີ່ມ
                </v-btn>
              </template>
            </v-text-field>
          </div>
        </v-col>

        <!-- Product Autocomplete Search Dropdown -->
        <v-col cols="12" md="6" class="py-1">
          <v-autocomplete
            v-model="selectedSearchProduct"
            :items="productList"
            :loading="isloading"
            item-text="pro_name"
            return-object
            outlined
            dense
            hide-details
            clearable
            placeholder="ຄົ້ນຫາຊື່ສິນຄ້າ / Barcode / SKU ເພື່ອເພີ່ມ..."
            prepend-inner-icon="mdi-magnify"
            class="rounded-lg bg-white"
            @change="onAutocompleteSelect"
          >
            <template v-slot:item="{ item }">
              <v-list-item-avatar size="32" rounded class="border-light">
                <v-img v-if="item.img_path && item.img_name !== 'No image'" :src="`${$axios.defaults.baseURL}/${item.img_path}`">
                  <template v-slot:placeholder>
                    <v-icon color="grey lighten-3">mdi-package-variant</v-icon>
                  </template>
                </v-img>
                <v-icon v-else small color="primary">mdi-package-variant</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{ item.pro_name }}</v-list-item-title>
                <v-list-item-subtitle class="caption grey--text">
                  <span v-if="item.barCode" class="mr-2 primary--text font-mono">BC: {{ item.barCode }}</span>
                  <span v-if="item.product_code" class="mr-2 orange--text text--darken-3 font-mono">[{{ item.product_code }}]</span>
                  <span class="font-weight-bold text-success">{{ formatNumber(item.pro_price) }} {{ currencySymbol }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-card>

    <!-- Batch Queue Table Card -->
    <v-card class="rounded-xl overflow-hidden elevation-3 border-light">
      <!-- Toolbar Actions -->
      <v-card-title class="pa-3 bg-slate-50 border-bottom d-flex align-center justify-space-between flex-wrap" style="gap: 8px;">
        <div class="d-flex align-center flex-wrap" style="gap: 8px;">
          <span class="font-weight-bold text-subtitle-1 grey--text text--darken-3">
            <v-icon left color="primary">mdi-format-list-bulleted-type</v-icon>
            ລາຍການປ້າຍລາຄາທີ່ຈະພິມ ({{ queue.length }})
          </span>

          <v-chip x-small outlined color="grey darken-1" class="font-weight-bold">
            Auto-saved
          </v-chip>
        </div>

        <div class="d-flex align-center flex-wrap" style="gap: 6px;">
          <!-- Quick Preset Batch Actions -->
          <v-menu offset-y transition="slide-y-transition" rounded="lg">
            <template v-slot:activator="{ on, attrs }">
              <v-btn small outlined color="grey darken-3" class="rounded-lg font-weight-bold" v-bind="attrs" v-on="on" :disabled="queue.length === 0">
                <v-icon left small>mdi-numeric</v-icon>
                ປັບຈຳນວນທັງໝົດ
                <v-icon right small>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="setAllCopies(1)">
                <v-list-item-icon class="mr-2"><v-icon small color="primary">mdi-numeric-1-box</v-icon></v-list-item-icon>
                <v-list-item-title>ຕັ້ງທຸກລາຍການເປັນ 1 ໃບ</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setAllCopies(halfSheetQty)">
                <v-list-item-icon class="mr-2"><v-icon small color="primary darken-1">mdi-numeric</v-icon></v-list-item-icon>
                <v-list-item-title>ຕັ້ງທຸກລາຍການເປັນ {{ halfSheetQty }} ໃບ (ເຄິ່ງໜ້າ A4)</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setAllCopies(activeTagsPerSheet)">
                <v-list-item-icon class="mr-2"><v-icon small color="primary darken-2">mdi-file-document-outline</v-icon></v-list-item-icon>
                <v-list-item-title>ຕັ້ງທຸກລາຍການເປັນ {{ activeTagsPerSheet }} ໃບ ({{ isRollMode ? 'ມ້ວນສະຕິກເກີ' : 'ເຕັມ 1 ໜ້າ A4' }})</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            small
            outlined
            color="red darken-1"
            class="rounded-lg font-weight-bold"
            :disabled="queue.length === 0"
            @click="clearQueueConfirm"
          >
            <v-icon left small>mdi-trash-can-outline</v-icon>
            ລ້າງລາຍການ
          </v-btn>

          <v-btn
            color="primary"
            dark
            depressed
            class="rounded-lg font-weight-bold px-4"
            :disabled="queue.length === 0"
            @click="printAllShelfTags"
          >
            <v-icon left>mdi-printer</v-icon>
            ພິມປ້າຍລາຄາ Shelf Tags ({{ totalCopies }} ໃບ)
          </v-btn>
        </div>
      </v-card-title>

      <!-- Table Content -->
      <v-data-table
        :headers="headers"
        :items="queue"
        :items-per-page="50"
        class="shelf-table elevation-0"
        no-data-text="ຍັງບໍ່ມີລາຍການປ້າຍລາຄາ, ກະລຸນາຍິງ Barcode ຫຼື ຄົ້ນຫາສິນຄ້າດ້ານເທິງ"
        :footer-props="{ 'items-per-page-options': [25, 50, 100, -1] }"
      >
        <!-- Index Slot -->
        <template v-slot:item.index="{ index }">
          <span class="caption grey--text font-weight-bold font-mono">{{ index + 1 }}</span>
        </template>

        <!-- Thumbnail Slot -->
        <template v-slot:item.thumbnail="{ item }">
          <v-avatar size="38" rounded class="border-light elevation-1 bg-white my-1">
            <v-img
              v-if="item.img_path && item.img_name !== 'No image'"
              :src="`${$axios.defaults.baseURL}/${item.img_path}`"
            >
              <template v-slot:placeholder>
                <v-icon color="grey lighten-3">mdi-package-variant</v-icon>
              </template>
            </v-img>
            <v-icon v-else color="primary lighten-3" small>mdi-image-outline</v-icon>
          </v-avatar>
        </template>

        <!-- Product Name Slot -->
        <template v-slot:item.pro_name="{ item }">
          <div class="d-flex flex-column py-1">
            <div class="d-flex align-center">
              <span class="font-weight-bold text-body-2 text-dark">{{ item.pro_name }}</span>
              <v-chip
                v-if="item.justAdded"
                x-small
                color="green"
                text-color="white"
                class="ml-2 font-weight-bold animate-pulse"
              >
                +1 Scanned
              </v-chip>
            </div>
            <div class="d-flex align-center flex-wrap caption grey--text" style="gap: 6px;">
              <span v-if="item.product_code" class="font-weight-bold orange--text text--darken-3 font-mono">
                [{{ item.product_code }}]
              </span>
              <span class="font-mono">#{{ item.pro_id }}</span>
              <span v-if="item.pro_category_desc" class="badge-cat">
                {{ item.pro_category_desc }}
              </span>
            </div>
          </div>
        </template>

        <!-- Barcode Slot -->
        <template v-slot:item.barCode="{ item }">
          <div class="d-flex align-center">
            <v-icon small color="primary" class="mr-1">mdi-barcode</v-icon>
            <span class="font-mono font-weight-bold primary--text text--darken-1">
              {{ item.barCode || '-' }}
            </span>
          </div>
        </template>

        <!-- Price Slot -->
        <template v-slot:item.pro_price="{ item }">
          <div class="font-weight-bold font-mono text-body-2 text-right">
            {{ formatNumber(item.pro_price) }}
            <span class="caption grey--text text--darken-1">{{ item.currency || currencySymbol }}</span>
          </div>
        </template>

        <!-- Print Copies / Quantity Slot -->
        <template v-slot:item.printQty="{ item }">
          <div class="d-flex align-center justify-center flex-wrap" style="gap: 6px;">
            <!-- Stepper -->
            <div class="qty-stepper-box">
              <v-btn icon x-small class="stepper-btn" @click="decreaseQty(item)">
                <v-icon small>mdi-minus</v-icon>
              </v-btn>
              <input
                v-model.number="item.printQty"
                type="number"
                min="1"
                class="stepper-input font-mono font-weight-bold"
                @change="validateQty(item)"
              />
              <v-btn icon x-small class="stepper-btn" @click="increaseQty(item)">
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </div>

            <!-- Quick Preset Chips -->
            <div class="d-flex align-center" style="gap: 3px;">
              <v-chip
                x-small
                outlined
                :color="item.printQty === 1 ? 'primary' : 'grey'"
                class="cursor-pointer font-weight-bold"
                @click="item.printQty = 1"
              >
                1
              </v-chip>
              <v-chip
                x-small
                outlined
                :color="item.printQty === halfSheetQty ? 'primary' : 'grey'"
                class="cursor-pointer font-weight-bold"
                @click="item.printQty = halfSheetQty"
              >
                {{ halfSheetQty }}
              </v-chip>
              <v-chip
                x-small
                :color="item.printQty === activeTagsPerSheet ? 'primary' : 'grey lighten-3'"
                :dark="item.printQty === activeTagsPerSheet"
                class="cursor-pointer font-weight-bold"
                @click="item.printQty = activeTagsPerSheet"
              >
                {{ activeTagsPerSheet }} {{ isRollMode ? '' : '(A4)' }}
              </v-chip>
            </div>
          </div>
        </template>

        <!-- Total Sub-tags Slot -->
        <template v-slot:item.total="{ item }">
          <div class="text-right font-mono font-weight-bold primary--text">
            {{ item.printQty }} ໃບ
          </div>
        </template>

        <!-- Actions Slot -->
        <template v-slot:item.actions="{ index }">
          <v-btn icon small color="red lighten-1" @click="removeItem(index)">
            <v-icon small>mdi-delete-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Category Import Dialog -->
    <v-dialog v-model="categoryDialog" max-width="600px" scrollable>
      <v-card class="rounded-xl">
        <v-card-title class="primary white--text py-3">
          <v-icon left color="white">mdi-shape-plus</v-icon>
          <span>ເລືອກສິນຄ້າຈາກໝວດໝູ່ເຂົ້າ Queue</span>
          <v-spacer></v-spacer>
          <v-btn icon dark small @click="categoryDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-4">
          <v-select
            v-model="selectedCategoryToImport"
            :items="categoryList"
            item-text="categ_name"
            item-value="id"
            label="ເລືອກໝວດໝູ່ສິນຄ້າ"
            outlined
            dense
            clearable
            placeholder="-- ເລືອກໝວດໝູ່ --"
            prepend-inner-icon="mdi-format-list-bulleted"
          ></v-select>

          <v-text-field
            v-model.number="categoryDefaultQty"
            type="number"
            min="1"
            label="ຈຳນວນໃບຕໍ່ 1 ລາຍການ (Default Copies)"
            outlined
            dense
            prepend-inner-icon="mdi-numeric"
          ></v-text-field>

          <div v-if="selectedCategoryToImport" class="pa-3 bg-slate-50 rounded-lg border-light">
            <div class="font-weight-bold grey--text text--darken-3">
              ພົບເຫັນສິນຄ້າ: <span class="primary--text font-mono">{{ getProductsForSelectedCategory.length }}</span> ລາຍການ
            </div>
            <div class="caption grey--text mt-1">
              ສິນຄ້າທັງໝົດໃນໝວດໝູ່ນີ້ຈະຖືກເພີ່ມເຂົ້າໃນ Queue ພິມປ້າຍລາຄາ
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn text color="grey darken-1" @click="categoryDialog = false">ຍົກເລີກ</v-btn>
          <v-btn
            color="primary"
            dark
            depressed
            :disabled="!selectedCategoryToImport || getProductsForSelectedCategory.length === 0"
            @click="importCategoryProducts"
          >
            <v-icon left>mdi-plus-box-multiple</v-icon>
            ເພີ່ມເຂົ້າ Queue ({{ getProductsForSelectedCategory.length }} ລາຍການ)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Display Options Dialog -->
    <v-dialog v-model="optionsDialog" max-width="500px">
      <v-card class="rounded-xl">
        <v-card-title class="primary white--text py-3">
          <v-icon left color="white">mdi-tune</v-icon>
          <span>ຕັ້ງຄ່າການສະແດງຜົນປ້າຍລາຄາ</span>
          <v-spacer></v-spacer>
          <v-btn icon dark small @click="optionsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4">
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-switch
                v-model="displayOptions.showLogo"
                label="ໂລໂກ້ / ຊື່ຮ້ານ (Logo)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="6">
              <v-switch
                v-model="displayOptions.showCategory"
                label="ໝວດໝູ່ (Category)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="6">
              <v-switch
                v-model="displayOptions.showSku"
                label="ລະຫັດສິນຄ້າ (SKU)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="6">
              <v-switch
                v-model="displayOptions.showBarcode"
                label="ບາໂຄດ (Barcode)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="6">
              <v-switch
                v-model="displayOptions.showPrice"
                label="ລາຄາຂາຍ (Price)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
            <v-col cols="12" sm="6">
              <v-switch
                v-model="displayOptions.showDesc"
                label="ລາຍລະອຽດ (Description)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
            <v-col cols="12">
              <v-switch
                v-model="displayOptions.showCutLines"
                label="ເສັ້ນປະຕັດເຈ້ຍ A4 (Cut Lines)"
                color="primary"
                dense
                hide-details
                class="mt-1 font-weight-bold"
              ></v-switch>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed class="font-weight-bold rounded-lg px-4" @click="optionsDialog = false">
            ຕົກລົງ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Custom Size Dialog -->
    <v-dialog v-model="customSizeDialog" max-width="450px">
      <v-card class="rounded-xl">
        <v-card-title class="primary white--text py-3">
          <v-icon left color="white">mdi-ruler-square</v-icon>
          <span>ກຳນົດຂະໜາດປ້າຍເອງ (Custom Size)</span>
          <v-spacer></v-spacer>
          <v-btn icon dark small @click="customSizeDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4">
          <p class="caption grey--text text--darken-1 mb-3">
            ກຳນົດຂະໜາດລວງກວ້າງ ແລະ ລວງສູງ (ຫົວໜ່ວຍ mm) ລະບົບຈະຄຳນວນຈຳນວນປ້າຍຕໍ່ໜ້າ A4 ອັດຕະໂນມັດ
          </p>
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model.number="customWidth"
                label="ລວງກວ້າງ (Width mm)"
                type="number"
                min="20"
                max="200"
                outlined
                dense
                suffix="mm"
                prepend-inner-icon="mdi-arrow-expand-horizontal"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model.number="customHeight"
                label="ລວງສູງ (Height mm)"
                type="number"
                min="15"
                max="150"
                outlined
                dense
                suffix="mm"
                prepend-inner-icon="mdi-arrow-expand-vertical"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="pa-3 bg-slate-50 rounded-lg border-light mt-1">
            <div class="caption font-weight-bold grey--text text--darken-3">
              ຄຳນວນໄດ້: <span class="primary--text font-mono">{{ activeTagsPerSheet }}</span> ໃບ/ໜ້າ A4
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn text color="grey darken-1" @click="customSizeDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" depressed class="font-weight-bold rounded-lg px-4" @click="applyCustomSize">
            ນຳໃຊ້ຂະໜາດນີ້
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFormatNum, swalSuccess, swalError2 } from '~/common'
import { mainCompanyInfo } from '~/common/api'
import {
  SHELF_TAG_SIZES,
  generateShelfPriceTagHTML,
  executeTraditionalPrint,
} from '~/common/printTemplates'

export default {
  name: 'ShelfTagPage',
  middleware: 'auths',

  data() {
    return {
      isloading: false,
      scanBarcode: '',
      selectedSearchProduct: null,
      soundEnabled: true,
      audioCtx: null,

      // Hardware Barcode Scanner keydown buffer
      barcodeBuffer: '',
      barcodeTimeout: null,

      // Staging Queue
      queue: [],

      // Product List Cache
      productList: [],
      categoryList: [],

      // Category Import Dialog
      categoryDialog: false,
      selectedCategoryToImport: null,
      categoryDefaultQty: 1,

      // Tag Size & Output Format Configuration
      sizePreset: '80x38',
      customWidth: 80,
      customHeight: 38,
      paperType: 'a4',
      optionsDialog: false,
      customSizeDialog: false,
      displayOptions: {
        showLogo: true,
        showCategory: true,
        showSku: true,
        showBarcode: true,
        showPrice: true,
        showDesc: false,
        showCutLines: true,
      },
      sizePresetsList: [
        { key: '80x38', width: 80, height: 38, labelLao: 'ມາດຕະຖານຊັ້ນວາງ', tagsPerA4: 12 },
        { key: '80x40', width: 80, height: 40, labelLao: 'ປ້າຍລາຄາໃຫຍ່', tagsPerA4: 12 },
        { key: '58x38', width: 58, height: 38, labelLao: 'ຂະໜາດກາງ / ມ້ວນ 58mm', tagsPerA4: 21 },
        { key: '58x30', width: 58, height: 30, labelLao: 'ຂະໜາດກະທັດຮັດ', tagsPerA4: 27 },
        { key: '40x30', width: 40, height: 30, labelLao: 'ປ້າຍຂະໜາດນ້ອຍ Mini', tagsPerA4: 36 },
        { key: '100x50', width: 100, height: 50, labelLao: 'ປ້າຍໃຫຍ່ Jumbo', tagsPerA4: 10 },
      ],

      // Table Headers
      headers: [
        { text: '#', value: 'index', width: '40px', sortable: false, align: 'center' },
        { text: 'ຮູບ', value: 'thumbnail', width: '60px', sortable: false, align: 'center' },
        { text: 'ຊື່ສິນຄ້າ / ລາຍລະອຽດ', value: 'pro_name', minWidth: '220px' },
        { text: 'ບາໂຄດ (Barcode)', value: 'barCode', width: '160px' },
        { text: 'ລາຄາຂາຍ', value: 'pro_price', width: '130px', align: 'right' },
        { text: 'ຈຳນວນພິມ (ໃບ)', value: 'printQty', width: '220px', align: 'center' },
        { text: 'ລວມ', value: 'total', width: '90px', align: 'right' },
        { text: '', value: 'actions', width: '50px', sortable: false, align: 'center' },
      ],
    }
  },

  computed: {
    ...mapGetters([
      'currentSelectedLocation',
      'findAllCurrency',
      'findAllCompany',
      'findAllProduct',
    ]),

    currencySymbol() {
      const defaultCcy = this.findAllCurrency?.find(
        (c) => c.isLocalCCY === true || c.isLocalCCY === 1
      )
      return defaultCcy ? defaultCcy.symbol || defaultCcy.code : '₭'
    },

    activeTagsPerSheet() {
      if (this.sizePreset === 'custom') {
        const w = Math.max(10, parseFloat(this.customWidth) || 80)
        const h = Math.max(10, parseFloat(this.customHeight) || 38)
        const cols = Math.floor(198 / w) || 1
        const rows = Math.floor(281 / h) || 1
        return cols * rows
      }
      return SHELF_TAG_SIZES[this.sizePreset]?.tagsPerA4 || 12
    },

    isRollMode() {
      return this.paperType === 'roll'
    },

    currentSelectedSizeName() {
      if (this.sizePreset === 'custom') {
        return `${this.customWidth}x${this.customHeight}mm (Custom)`
      }
      const preset = SHELF_TAG_SIZES[this.sizePreset]
      return preset ? `${preset.width}x${preset.height}mm` : '80x38mm'
    },

    halfSheetQty() {
      return Math.max(1, Math.floor(this.activeTagsPerSheet / 2))
    },

    totalCopies() {
      return this.queue.reduce((sum, item) => sum + (parseInt(item.printQty, 10) || 0), 0)
    },

    totalA4Sheets() {
      if (this.totalCopies === 0) return 0
      return Math.ceil(this.totalCopies / this.activeTagsPerSheet)
    },

    filledOnLastSheet() {
      if (this.totalCopies === 0) return 0
      const rem = this.totalCopies % this.activeTagsPerSheet
      return rem === 0 ? this.activeTagsPerSheet : rem
    },

    slotsRemainingText() {
      if (this.isRollMode) {
        return 'ພິມແບບມ້ວນສະຕິກເກີ (1 ໃບ/ໜ້າ)'
      }
      if (this.totalCopies === 0) return 'ຍັງບໍ່ມີປ້າຍໃນ Queue'
      const rem = this.totalCopies % this.activeTagsPerSheet
      if (rem === 0) return `ເຕັມໜ້າ A4 ພໍດີ (${this.activeTagsPerSheet}/${this.activeTagsPerSheet})`
      const needed = this.activeTagsPerSheet - rem
      return `ຍັງອີກ ${needed} ໃບ ຈະເຕັມໜ້າ A4 (${rem}/${this.activeTagsPerSheet})`
    },

    getProductsForSelectedCategory() {
      if (!this.selectedCategoryToImport) return []
      return this.productList.filter(
        (p) =>
          p.pro_category === this.selectedCategoryToImport ||
          p.categ_id === this.selectedCategoryToImport
      )
    },
  },

  watch: {
    queue: {
      deep: true,
      handler(newVal) {
        try {
          if (process.client) {
            localStorage.setItem('shelf_tag_queue', JSON.stringify(newVal))
          }
        } catch (e) {
          console.error('Error saving shelf tag queue to localStorage:', e)
        }
      },
    },
    sizePreset(val) {
      if (process.client) {
        localStorage.setItem('shelf_tag_size_preset', val)
      }
    },
    paperType(val) {
      if (process.client) {
        localStorage.setItem('shelf_tag_paper_type', val)
      }
    },
    displayOptions: {
      deep: true,
      handler(val) {
        if (process.client) {
          localStorage.setItem('shelf_tag_display_options', JSON.stringify(val))
        }
      },
    },
  },

  async mounted() {
    this.restoreQueueFromStorage()
    await this.loadCategories()
    await this.fetchProducts()

    // Add global keydown listener for hardware barcode scanner guns
    window.addEventListener('keydown', this.handleHardwareBarcodeScan)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.handleHardwareBarcodeScan)
    if (this.barcodeTimeout) {
      clearTimeout(this.barcodeTimeout)
    }
  },

  methods: {
    formatNumber(val) {
      return getFormatNum(val)
    },

    setSizePreset(key) {
      this.sizePreset = key
      if (key !== 'custom' && SHELF_TAG_SIZES[key]) {
        this.customWidth = SHELF_TAG_SIZES[key].width
        this.customHeight = SHELF_TAG_SIZES[key].height
      }
    },

    applyCustomSize() {
      this.sizePreset = 'custom'
      this.customSizeDialog = false
    },

    restoreQueueFromStorage() {
      try {
        if (process.client) {
          const saved = localStorage.getItem('shelf_tag_queue')
          if (saved) {
            const parsed = JSON.parse(saved)
            if (Array.isArray(parsed)) {
              this.queue = parsed.map((p) => ({ ...p, justAdded: false }))
            }
          }
          const savedPreset = localStorage.getItem('shelf_tag_size_preset')
          if (savedPreset) {
            this.sizePreset = savedPreset
          }
          const savedPaper = localStorage.getItem('shelf_tag_paper_type')
          if (savedPaper) {
            this.paperType = savedPaper
          }
          const savedDisplay = localStorage.getItem('shelf_tag_display_options')
          if (savedDisplay) {
            const parsed = JSON.parse(savedDisplay)
            this.displayOptions = { ...this.displayOptions, ...parsed }
          }
        }
      } catch (e) {
        console.error('Error restoring shelf tag queue:', e)
      }
    },

    // Audio Feedback Synthesis
    playAudioFeedback(type = 'success') {
      if (!this.soundEnabled || !process.client) return
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        if (!AudioContext) return
        if (!this.audioCtx) {
          this.audioCtx = new AudioContext()
        }
        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume()
        }

        const now = this.audioCtx.currentTime
        const osc = this.audioCtx.createOscillator()
        const gain = this.audioCtx.createGain()
        osc.connect(gain)
        gain.connect(this.audioCtx.destination)

        if (type === 'success') {
          // Upward high chime (880Hz -> 1320Hz)
          osc.type = 'sine'
          osc.frequency.setValueAtTime(880, now)
          osc.frequency.exponentialRampToValueAtTime(1320, now + 0.1)
          gain.gain.setValueAtTime(0.2, now)
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
          osc.start(now)
          osc.stop(now + 0.15)
        } else if (type === 'duplicate') {
          // Double chirp
          osc.type = 'triangle'
          osc.frequency.setValueAtTime(1200, now)
          osc.frequency.exponentialRampToValueAtTime(1600, now + 0.08)
          gain.gain.setValueAtTime(0.2, now)
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12)
          osc.start(now)
          osc.stop(now + 0.12)
        } else {
          // Low error buzz (220Hz -> 150Hz)
          osc.type = 'sawtooth'
          osc.frequency.setValueAtTime(220, now)
          osc.frequency.linearRampToValueAtTime(150, now + 0.2)
          gain.gain.setValueAtTime(0.2, now)
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2)
          osc.start(now)
          osc.stop(now + 0.2)
        }
      } catch (err) {
        console.warn('Web Audio synthesis error:', err)
      }
    },

    async loadCategories() {
      try {
        const res = await this.$axios.get('category_f')
        this.categoryList = res.data?.data || res.data || []
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    },

    async fetchProducts() {
      this.isloading = true
      try {
        const locId = this.currentSelectedLocation?.id || 1
        const res = await this.$axios.get(`product_f/${locId}`)
        const raw = res.data?.data || res.data || []
        this.productList = raw.map((p) => ({
          ...p,
          pro_price: parseFloat(p.pro_price || 0),
          barCode: (p.barCode || '').trim(),
        }))
      } catch (err) {
        console.error('Error fetching products for shelf tags:', err)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນສິນຄ້າ')
      } finally {
        this.isloading = false
      }
    },

    // Global Hardware Scanner Listener
    handleHardwareBarcodeScan(e) {
      if (this.categoryDialog || this.optionsDialog || this.customSizeDialog) return

      // If user is typing inside an input/textarea (other than our scan field), let native handler do it
      const target = e.target
      if (
        target &&
        target !== this.$refs.scannerInput?.$el?.querySelector('input') &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return
      }

      if (e.key === 'Enter') {
        if (this.barcodeBuffer && this.barcodeBuffer.length >= 2) {
          e.preventDefault()
          this.processBarcode(this.barcodeBuffer)
        }
        this.barcodeBuffer = ''
        return
      }

      if (e.key.length === 1) {
        this.barcodeBuffer += e.key
      }

      if (this.barcodeTimeout) clearTimeout(this.barcodeTimeout)
      this.barcodeTimeout = setTimeout(() => {
        this.barcodeBuffer = ''
      }, 500)
    },

    onManualScanEnter() {
      if (!this.scanBarcode || !this.scanBarcode.trim()) return
      this.processBarcode(this.scanBarcode.trim())
      this.scanBarcode = ''
    },

    onAutocompleteSelect(product) {
      if (!product) return
      this.addProductToQueue(product)
      this.$nextTick(() => {
        this.selectedSearchProduct = null
        if (this.$refs.scannerInput) {
          this.$refs.scannerInput.focus()
        }
      })
    },

    processBarcode(barcodeValue) {
      const code = String(barcodeValue || '').trim().toLowerCase()
      if (!code) return

      // Find in local products
      const found = this.productList.find(
        (p) =>
          (p.barCode && p.barCode.toLowerCase() === code) ||
          String(p.pro_id) === code ||
          (p.product_code && p.product_code.toLowerCase() === code)
      )

      if (found) {
        this.addProductToQueue(found)
      } else {
        this.playAudioFeedback('error')
        if (this.$toast) {
          this.$toast.error(`ບໍ່ພົບສິນຄ້າສຳລັບ Barcode: ${barcodeValue}`, {
            position: 'top-center',
            duration: 2500,
          })
        }
      }
    },

    addProductToQueue(product, defaultQty = 1) {
      const existingIndex = this.queue.findIndex(
        (item) => item.id === product.id || (item.pro_id && item.pro_id === product.pro_id)
      )

      if (existingIndex > -1) {
        // Increment quantity
        this.queue[existingIndex].printQty = (parseInt(this.queue[existingIndex].printQty, 10) || 1) + 1
        this.queue[existingIndex].justAdded = true
        this.playAudioFeedback('duplicate')

        if (this.$toast) {
          this.$toast.success(`${product.pro_name} (+1 ໃບ, ລວມ ${this.queue[existingIndex].printQty})`, {
            position: 'bottom-center',
            duration: 1500,
          })
        }

        setTimeout(() => {
          if (this.queue[existingIndex]) {
            this.queue[existingIndex].justAdded = false
          }
        }, 1200)
      } else {
        // Add new row to top of queue
        const foundCat = this.categoryList.find(
          (c) => c.id === product.pro_category || c.categ_id === product.pro_category
        )
        const categoryDesc = foundCat ? foundCat.categ_name : (product.pro_category_desc || '')

        const newItem = {
          id: product.id,
          pro_id: product.pro_id,
          pro_name: product.pro_name || 'Product',
          pro_desc: product.pro_desc || '',
          product_code: product.product_code || '',
          barCode: product.barCode || product.pro_id || '',
          pro_price: parseFloat(product.pro_price || 0),
          img_path: product.img_path || '',
          img_name: product.img_name || '',
          pro_category_desc: categoryDesc,
          currency: this.currencySymbol,
          printQty: defaultQty,
          justAdded: true,
        }

        this.queue.unshift(newItem)
        this.playAudioFeedback('success')

        if (this.$toast) {
          this.$toast.success(`ເພີ່ມ ${product.pro_name} ເຂົ້າ Queue ແລ້ວ`, {
            position: 'bottom-center',
            duration: 1500,
          })
        }

        setTimeout(() => {
          if (this.queue[0]) {
            this.queue[0].justAdded = false
          }
        }, 1200)
      }
    },

    increaseQty(item) {
      item.printQty = (parseInt(item.printQty, 10) || 0) + 1
    },

    decreaseQty(item) {
      if (item.printQty > 1) {
        item.printQty = parseInt(item.printQty, 10) - 1
      }
    },

    validateQty(item) {
      if (!item.printQty || item.printQty < 1) {
        item.printQty = 1
      }
    },

    removeItem(index) {
      this.queue.splice(index, 1)
    },

    setAllCopies(qty) {
      this.queue.forEach((item) => {
        item.printQty = qty
      })
      if (this.$toast) {
        this.$toast.info(`ຕັ້ງຄ່າທຸກລາຍການເປັນ ${qty} ໃບແລ້ວ`)
      }
    },

    clearQueueConfirm() {
      this.$swal({
        title: 'ຢືນຢັນການລ້າງລາຍການ?',
        text: 'ທ່ານຕ້ອງການລຶບສິນຄ້າທັງໝົດອອກຈາກ Queue ພິມປ້າຍລາຄາແທ້ບໍ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ແມ່ນ, ລ້າງທັງໝົດ',
        cancelButtonText: 'ຍົກເລີກ',
      }).then((result) => {
        if (result.isConfirmed) {
          this.queue = []
          if (this.$toast) {
            this.$toast.info('ລ້າງລາຍການສຳເລັດແລ້ວ')
          }
        }
      })
    },

    importCategoryProducts() {
      const products = this.getProductsForSelectedCategory
      if (!products || products.length === 0) return

      let addedCount = 0
      products.forEach((p) => {
        this.addProductToQueue(p, this.categoryDefaultQty || 1)
        addedCount++
      })

      this.categoryDialog = false
      swalSuccess(this.$swal, 'ສຳເລັດ', `ເພີ່ມສິນຄ້າຈາກໝວດໝູ່ຈຳນວນ ${addedCount} ລາຍການແລ້ວ`)
    },

    printAllShelfTags() {
      if (!this.queue || this.queue.length === 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາເພີ່ມສິນຄ້າເຂົ້າໃນລາຍການກ່ອນພິມ')
        return
      }

      try {
        const companyBase = this.$store.getters.findAllCompany?.[0] || mainCompanyInfo() || {}
        const companyData = {
          ...companyBase,
          primaryColor: this.$store?.state?.theme?.primary_color || '#01532B',
        }
        const defaultCcy = this.findAllCurrency?.find(
          (c) => c.isLocalCCY === true || c.isLocalCCY === 1
        )
        const currencyStr = defaultCcy ? defaultCcy.symbol || defaultCcy.code : 'LAK'

        const productsForTags = this.queue.map((p) => ({
          pro_name: p.pro_name,
          pro_desc: p.pro_desc || (p.product_code ? `SKU: ${p.product_code}` : ''),
          pro_price: p.pro_price,
          formattedPrice: this.formatNumber(p.pro_price),
          barCode: p.barCode || p.pro_id,
          pro_category_desc: p.pro_category_desc || '',
          product_code: p.product_code || '',
          currency: p.currency || currencyStr,
          printQty: parseInt(p.printQty, 10) || 1,
        }))

        const printOptions = {
          sizePreset: this.sizePreset,
          customWidth: this.customWidth,
          customHeight: this.customHeight,
          paperType: this.paperType,
          showLogo: this.displayOptions.showLogo,
          showCategory: this.displayOptions.showCategory,
          showSku: this.displayOptions.showSku,
          showBarcode: this.displayOptions.showBarcode,
          showPrice: this.displayOptions.showPrice,
          showDesc: this.displayOptions.showDesc,
          showCutLines: this.displayOptions.showCutLines,
        }

        const htmlContent = generateShelfPriceTagHTML(
          productsForTags,
          companyData,
          currencyStr,
          1,
          printOptions
        )

        executeTraditionalPrint(htmlContent)
      } catch (err) {
        console.error('Error generating shelf price tags batch HTML:', err)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການພິມປ້າຍລາຄາ')
      }
    },
  },
}
</script>

<style scoped>
.shelf-tag-container {
  padding: 8px 4px;
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif !important;
}

.shelf-tag-container * {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
}

.shelf-tag-container .caption,
.shelf-tag-container .text-caption,
.shelf-tag-container .text-h6,
.shelf-tag-container .text-body-2,
.shelf-tag-container .text-subtitle-1,
.shelf-tag-container h2,
.shelf-tag-container h3,
.shelf-tag-container p,
.shelf-tag-container span,
.shelf-tag-container div,
.shelf-tag-container .v-chip,
.shelf-tag-container .v-btn,
.shelf-tag-container .v-data-table {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif !important;
}

.font-mono {
  font-family: 'Courier New', Courier, monospace !important;
}

.v-icon {
  font-family: 'Material Design Icons' !important;
}

.stat-card {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border-width: 1.5px !important;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

.stat-card-primary {
  background: linear-gradient(135deg, rgba(var(--v-primary-base), 0.07) 0%, #ffffff 100%) !important;
  border-color: rgba(var(--v-primary-base), 0.25) !important;
}

.bg-gradient-purple {
  background: linear-gradient(135deg, #faf5ff 0%, #ffffff 100%);
  border-color: #e9d5ff !important;
}

.border-primary-light {
  border: 1.5px solid rgba(var(--v-primary-base), 0.35) !important;
  background: #fcfdfd;
}

.border-light {
  border: 1px solid #e2e8f0;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0;
}

.bg-slate-50 {
  background-color: #f8fafc;
}

.scanner-field {
  background: #ffffff;
  border-radius: 8px;
}

.badge-cat {
  background: #e2e8f0;
  color: #475569;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
}

.qty-stepper-box {
  display: inline-flex;
  align-items: center;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  overflow: hidden;
}

.stepper-btn {
  width: 26px !important;
  height: 26px !important;
}

.stepper-input {
  width: 44px;
  height: 26px;
  text-align: center;
  border: none;
  background: transparent;
  font-size: 13px;
  color: #1e293b;
  outline: none;
}

.stepper-input::-webkit-inner-spin-button,
.stepper-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.animate-pulse {
  animation: pulse-badge 1s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.08);
  }
}

.cursor-pointer {
  cursor: pointer;
}

</style>
