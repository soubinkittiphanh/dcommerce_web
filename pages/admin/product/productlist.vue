<template>
  <div class="product-list-wrapper pa-4 grey lighten-5">
    <!-- Modern Header Section -->
    <v-row align="center" class="mb-6">
      <v-col>
        <div class="d-flex align-center">
          <v-avatar color="primary" size="48" class="mr-4 elevation-2">
            <v-icon color="white">mdi-package-variant</v-icon>
          </v-avatar>
          <div>
            <h1 class=" font-weight-bold grey--text text--darken-4 mb-0">ລາຍການສິນຄ້າ</h1>
            <p class=" grey--text mb-0">Manage your product inventory and stock levels</p>
          </div>
        </div>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" large depressed @click="createProduct" class="px-6 rounded-lg font-weight-bold">
          <v-icon left>mdi-plus</v-icon>
          ສ້າງສິນຄ້າໃຫມ່
        </v-btn>
        <v-btn icon color="grey darken-1" class="ml-2" @click="guidelineDialog = true">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="rounded-xl overflow-hidden elevation-3 border-light">
      <v-tabs v-model="activeTab" background-color="white" color="primary" class="px-4">
        <v-tab class="text-none font-weight-bold py-4">
          <v-icon left>mdi-package-variant-closed</v-icon>
          All Products
        </v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <v-tabs-items v-model="activeTab" class="bg-slate-50">
        <v-tab-item>
          <v-card-text class="pa-6">
            <v-card flat class="transparent">
              <v-card-title class="px-0 pb-6 pt-0">
                <v-row align="center">
                  <v-col cols="12" sm="4">
                    <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search products..." outlined
                      dense hide-details class="rounded-lg bg-white" />
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="auto">
                    <div class="d-flex align-center gap-2 flex-wrap">
                      <v-btn outlined color="success" class="rounded-lg" @click="exportToExcel">
                        <v-icon left small>mdi-microsoft-excel</v-icon>
                        Export
                      </v-btn>

                      <!-- Import Actions Dropdown Menu -->
                      <v-menu offset-y transition="slide-y-transition" rounded="lg">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn outlined color="indigo" class="rounded-lg" v-bind="attrs" v-on="on">
                            <v-icon left small>mdi-file-upload</v-icon>
                            Imports
                            <v-icon right small>mdi-chevron-down</v-icon>
                          </v-btn>
                        </template>
                        <v-list dense class="py-2">
                          <v-list-item @click="importDialog = true">
                            <v-list-item-icon class="mr-2">
                              <v-icon small color="indigo">mdi-file-upload</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Import Excel</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="priceImportDialog = true">
                            <v-list-item-icon class="mr-2">
                              <v-icon small color="purple">mdi-currency-usd</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Import Price Update</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="stockImportDialog = true">
                            <v-list-item-icon class="mr-2">
                              <v-icon small color="orange darken-2">mdi-clipboard-arrow-down</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Import Stock Adjust</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>

                      <v-btn outlined color="primary" class="rounded-lg" @click="printBarcodeList">
                        <v-icon left small>mdi-barcode-scan</v-icon>
                        Barcodes
                      </v-btn>
                      <v-btn outlined color="grey darken-2" class="rounded-lg" @click="rebuildStock">
                        <v-icon left small>mdi-refresh</v-icon>
                        Fix Stock
                      </v-btn>
                      <v-checkbox v-model.number="showActive" label="ສະແດງລາຍການຖືກປິດ" dense hide-details class="mt-0 pt-0 ml-2"></v-checkbox>
                    </div>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-data-table v-if="loaddata" :headers="headers" :items="filteredProducts" :items-per-page="pageLine"
                class="compact-table rounded-xl elevation-0 border-light">
                <!-- Thumbnail Slot -->
                <template v-slot:item.thumbnail="{ item }">
                  <v-avatar size="40" rounded class="border-light elevation-1 bg-white">
                    <v-img v-if="item.img_path && item.img_name !== 'No image'"
                      :src="`${$axios.defaults.baseURL}/${item.img_path}`">
                      <template v-slot:placeholder>
                        <v-icon color="grey lighten-3">mdi-package-variant</v-icon>
                      </template>
                    </v-img>
                    <v-icon v-else color="primary lighten-3">mdi-image-outline</v-icon>
                  </v-avatar>
                </template>

                <!-- Product Name Slot -->
                <template v-slot:item.pro_name="{ item }">
                  <div class="d-flex flex-column py-2">
                    <span class="font-weight-bold ">{{ item.pro_name }}</span>
                    <div class="d-flex align-center flex-wrap gap-1">
                      <span v-if="item.product_code" class="caption font-weight-bold orange--text text--darken-3 mr-1">[{{ item.product_code }}]</span>
                      <span class=" grey--text font-mono font-weight-medium">#{{ item.pro_id }}</span>
                    </div>
                    <span v-if="item.barCode" class=" secondary--text">
                      <v-icon x-small color="secondary">mdi-barcode</v-icon>
                      {{ item.barCode }}
                    </span>
                  </div>
                </template>

                <!-- Cost / Price Slots -->
                <template v-slot:item.pro_cost_price="{ item }">
                  <div class="text-right">
                    <span class="grey--text font-weight-medium">{{ formatNumber(item.pro_cost_price) }}</span>
                    <v-chip v-if="getCurrencyCode(item.costCurrencyId)" x-small outlined label class="ml-1 px-1 py-0 height-auto font-weight-bold" color="grey darken-1">
                      {{ getCurrencyCode(item.costCurrencyId) }}
                    </v-chip>
                  </div>
                </template>
                <template v-slot:item.pro_price="{ item }">
                  <div class="text-right">
                    <span class="primary--text font-weight-black">{{ formatNumber(item.pro_price) }}</span>
                    <v-chip v-if="getCurrencyCode(item.saleCurrencyId)" x-small label class="ml-1 px-1 py-0 height-auto font-weight-bold" color="primary" outlined>
                      {{ getCurrencyCode(item.saleCurrencyId) }}
                    </v-chip>
                  </div>
                </template>

                <!-- Stock Level Slot -->
                <template v-slot:item.pro_card_count="{ item }">
                  <div class="d-flex align-center justify-center">
                    <div class="text-center mr-2">
                      <div class="text-h6 font-weight-black line-height-1 mb-1">{{ item.pro_card_count }}</div>
                      <div class=" grey--text text-uppercase line-height-1">Actual</div>
                    </div>
                    <v-divider vertical class="mx-2 my-2"></v-divider>
                    <div class="text-center ml-2">
                      <div class="text-h6 grey--text line-height-1 mb-1">{{ item.minStock }}</div>
                      <div class=" grey--text text-uppercase line-height-1">Min</div>
                    </div>
                  </div>
                </template>

                <!-- Status Slot -->
                <template v-slot:item.status="{ item }">
                  <v-chip small :color="getStatusChipColor(item.minStock, item.pro_card_count)" text-color="white"
                    class="font-weight-bold text-uppercase" style="min-width: 90px; justify-content: center">
                    {{ verifyStockStatus(item.minStock, item.pro_card_count) }}
                  </v-chip>
                </template>

                <!-- Actions Menu Slot -->
                <template v-slot:item.actions="{ item }">
                  <v-menu offset-y transition="slide-y-transition" rounded="lg">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on" color="grey darken-1">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list dense class="py-2">
                      <v-list-item @click="editItem(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="primary">mdi-pencil-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Edit Details</v-list-item-title>
                      </v-list-item>

                      <v-list-item @click="triggerCardForm(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="success">mdi-plus-box-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Add Stock</v-list-item-title>
                      </v-list-item>

                      <v-list-item @click="openStockAdjustDialog(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="warning">mdi-scale-balance</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Adjust Stock</v-list-item-title>
                      </v-list-item>

                      <v-list-item @click="editStock(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="info">mdi-eye-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Stock History</v-list-item-title>
                      </v-list-item>

                      <v-list-item @click="triggerPriceListForm(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="orange darken-2">mdi-currency-usd</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Pricing Grades</v-list-item-title>
                      </v-list-item>

                      <v-divider v-if="item._category !== 'stock'" class="my-1"></v-divider>
                      
                      <v-list-item @click="openProductAudit(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="grey darken-2">mdi-history</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Change History</v-list-item-title>
                      </v-list-item>

                      <v-list-item v-if="item._category !== 'stock'" @click="manageRecipe(item)">
                        <v-list-item-icon class="mr-2">
                          <v-icon small color="purple">mdi-book-open-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>ຈັດການສູດ (Manage Recipe)</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-card>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Recipe Management Dialog -->
    <v-dialog v-model="recipeManagementDialog" fullscreen transition="dialog-bottom-transition" persistent>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="recipeManagementDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>ຈັດການສູດ (Recipe Management)</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text class="pa-0">
          <RecipeManagement ref="recipeManagement" @close="recipeManagementDialog = false" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="productRecipeDialog" fullscreen scrollable>
      <v-card v-if="selectedProductForRecipe">
        <v-card-title class="primary white--text">
          <v-icon color="white" class="mr-2">mdi-book-open-variant</v-icon>
          ສູດອາຫານສຳລັບ: {{ selectedProductForRecipe.pro_name }}
          <v-spacer></v-spacer>
          <v-btn icon @click="closeProductRecipeDialog" class="white--text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-row class="mb-4">
            <v-col cols="12">
              <v-alert type="info" outlined>
                <div class="d-flex align-center">
                  <div class="flex-grow-1">
                    <h4>{{ selectedProductForRecipe.pro_name }}</h4>
                    <p class="mb-0">{{ selectedProductForRecipe.pro_desc }}</p>
                    <small>Category:
                      {{ selectedProductForRecipe.pro_category_desc }}</small>
                  </div>
                  <div class="text-right">
                    <div>
                      <strong>ລາຄາ:</strong>
                      {{ formatNumber(selectedProductForRecipe.pro_price) }} {{ getCurrencyCode(selectedProductForRecipe.saleCurrencyId) || 'LAK' }}
                    </div>
                    <div>
                      <strong>ຕົ້ນທຶນ:</strong>
                      {{
                        formatNumber(selectedProductForRecipe.pro_cost_price)
                      }}
                      {{ getCurrencyCode(selectedProductForRecipe.costCurrencyId) || 'LAK' }}
                    </div>
                  </div>
                </div>
              </v-alert>
            </v-col>
          </v-row>

          <v-row class="mb-4" v-if="productRecipes.length > 0">
            <v-col cols="12" md="4">
              <v-card color="primary" dark>
                <v-card-text>
                  <div class="text-center">
                    <h3>{{ productRecipes.length }}</h3>
                    <p>ວັດຖຸດິບທັງໝົດ</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card color="primary" dark style="opacity: 0.8">
                <v-card-text>
                  <div class="text-center">
                    <h3>{{ formatNumber(totalRecipeCost) }}</h3>
                    <p>ຕົ້ນທຶນລວມ (LAK)</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card color="primary" dark style="opacity: 0.6">
                <v-card-text>
                  <div class="text-center">
                    <h3>{{ formatNumber(profitMargin) }}</h3>
                    <p>ກຳໄລ (LAK)</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-data-table :headers="recipeHeaders" :items="productRecipes" :loading="loadingRecipes" class="elevation-1"
            hide-default-footer v-if="productRecipes.length > 0">
            <template v-slot:item.ingredient="{ item }">
              <div class="ingredient-info">
                <strong>{{ item.ingredient?.pro_name || 'N/A' }}</strong>
                <br />
                <small class="text-grey">{{ item.ingredient?.pro_desc }}</small>
              </div>
            </template>

            <template v-slot:item.quantity="{ item }">
              <div class="quantity-display">
                {{ item.quantity }}
                <span v-if="item.unit" class="text-grey ml-1">{{
                  item.unit.name
                }}</span>
              </div>
            </template>

            <template v-slot:item.unitCost="{ item }">
              <div class="cost-display">
                {{ formatNumber(item.ingredient?.pro_price || 0) }} {{ getCurrencyCode(item.ingredient?.saleCurrencyId) || 'LAK' }}
              </div>
            </template>

            <template v-slot:item.totalCost="{ item }">
              <div class="total-cost-display">
                <strong>{{
                  formatNumber(
                    (item.ingredient?.pro_price || 0) * item.quantity
                  )
                }}
                  {{ getCurrencyCode(item.ingredient?.saleCurrencyId) || 'LAK' }}</strong>
              </div>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-btn small color="primary" @click="editRecipeFromProduct(item)">
                <v-icon small>mdi-pencil</v-icon>
                Edit
              </v-btn>
            </template>
          </v-data-table>

          <v-alert v-else-if="!loadingRecipes" type="info" outlined>
            <div class="text-center">
              <v-icon size="48" color="info">mdi-information</v-icon>
              <h4 class="mt-2">ບໍ່ມີສູດອາຫານ</h4>
              <p>
                ສິນຄ້ານີ້ຍັງບໍ່ມີສູດອາຫານ. ກົດປຸ່ມຂ້າງລຸ່ມເພື່ອສ້າງສູດອາຫານໃຫມ່.
              </p>
              <v-btn class="primary" @click="createRecipeForProduct">
                <v-icon left>mdi-plus</v-icon>
                ສ້າງສູດອາຫານ
              </v-btn>
            </div>
          </v-alert>

          <div v-if="loadingRecipes" class="text-center py-4">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
            <p class="mt-2">ກຳລັງໂຫລດສູດອາຫານ...</p>
          </div>
        </v-card-text>

        <v-card-actions v-if="productRecipes.length > 0">
          <v-btn class="primary" @click="createRecipeForProduct">
            <v-icon left>mdi-plus</v-icon>
            ເພີ່ມວັດຖຸດິບ
          </v-btn>
          <v-btn class="primary" outlined @click="calculateProductionCost">
            <v-icon left>mdi-calculator</v-icon>
            ຄິດໄລ່ຕົ້ນທຶນ
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="closeProductRecipeDialog">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <v-dialog v-model="isstock" fullscreen>
      <card-form :key="stockFormKey" :product-id="selectedProductId" :id="selectedId" :cost="selectedProductCost"
        :product-name="selectedProductName" @close-dialog="isstock = false" @reload="rebuildStock"></card-form>
    </v-dialog>

    <!-- Stock Adjustment Dialog -->
    <stock-adjustment-dialog
      :dialog.sync="stockAdjustDialog"
      :selected-product="selectedProductForAdjust"
      :saving="isSavingAdjust"
      @save="saveStockAdjustment"
      @close="closeStockAdjustDialog"
    />

    <v-dialog v-model="editProductForm" fullscreen persistent scrollable transition="dialog-bottom-transition">
      <product-form :key="productFormKey" @close-dialog="editProductForm = false" :header-id="selectedProductId"
        @refresh="fetchData" :isEdit="editProductForm"></product-form>
    </v-dialog>

    <v-dialog v-model="productFormCreate" fullscreen persistent scrollable transition="dialog-bottom-transition">
      <product-form-create :key="productFormKey" @close-dialog="productFormCreate = false" @refresh="fetchData">
      </product-form-create>
    </v-dialog>

    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form :key="priceListFormKey" @close-dialog="priceListDialog = false" :record-id="pricingRecordId"
        @refresh="fetchData">
      </price-list-form>
    </v-dialog>

    <!-- Import Dialog -->
    <product-import-dialog v-model="importDialog" :products="loaddata" @imported="fetchData" />
    <price-import-dialog v-model="priceImportDialog" :products="loaddata" @imported="fetchData" />
    <stock-import-dialog v-model="stockImportDialog" :location-id="currentSelectedLocation ? currentSelectedLocation.id : null" @imported="fetchData" />

    <!-- Dialog for Stock Details (Fullscreen) -->
    <v-dialog
      v-model="showStockBottomSheet"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card class="noto-sans-lao">
        <v-card-title class="primary white--text d-flex justify-space-between align-center py-3 px-4">
          <div class="d-flex align-center">
            <v-icon color="white" class="mr-2">mdi-chart-line</v-icon>
            <span class="font-weight-medium">ລາຍລະອຽດສະຕັອກສິນຄ້າ (Stock Details)</span>
          </div>
          <v-btn icon dark @click="showStockBottomSheet = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-4" style="background-color: #f5f5f5;">
          <stock-details
            v-if="showStockBottomSheet"
            :is-embedded="true"
            :embedded-product-id="selectedEmbeddedProductId"
            :embedded-product-name="selectedEmbeddedProductName"
            :embedded-category="selectedEmbeddedCategory"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="printDialog" max-width="900px" scrollable>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" class="mr-2">mdi-printer</v-icon>
          Print Barcode List Preview
          <v-spacer></v-spacer>
          <v-btn icon @click="printDialog = false" class="white--text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <div class="print-options mb-4">
            <v-row>
              <v-col cols="12" sm="6">
                <v-select v-model="selectedPrintFormat" :items="printFormats" label="Barcode Format" item-text="label"
                  item-value="value" outlined></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="labelsPerRow" label="Labels per row" type="number" min="1" max="6"
                  outlined></v-text-field>
              </v-col>
            </v-row>
          </div>

          <v-divider class="mb-4"></v-divider>

          <div id="printContent" class="print-content">
            <div class="barcode-grid">
              <div v-for="product in filteredProducts" :key="product.id" class="barcode-label" :style="getLabelStyle()">
                <div class="barcode-svg-container">
                  <svg :id="`barcode-${product.id}`" class="barcode-svg"></svg>
                </div>
                <div class="barcode-text">
                  {{ product.barCode || product.pro_id }}
                </div>
                <div class="product-name">
                  {{ truncateText(product.pro_name, 25) }}
                </div>
                <div class="product-price">
                  {{ formatNumber(product.pro_price) }} {{ getCurrencyCode(product.saleCurrencyId) || 'LAK' }}
                </div>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" @click="doPrint">
            <v-icon left>mdi-printer</v-icon>
            Print
          </v-btn>
          <v-btn text @click="printDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Audit Trail Dialog -->
    <v-dialog v-model="auditDialog" max-width="900">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-history</v-icon>
          ປະຫວັດການປ່ຽນແປງ (Audit Trail)
          <v-spacer></v-spacer>
          <v-btn icon dark @click="auditDialog = false" class="white--text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4">
          <v-data-table
            :headers="auditHeaders"
            :items="auditLogs"
            :loading="isAuditLoading"
            class="elevation-1"
            show-expand
            single-expand
            :expanded.sync="expandedAudit"
          >
            <template v-slot:[`item.auditDate`]="{ item }">
              {{ formatDateTime(item.auditDate) }}
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-chip small :color="getActionColor(item.action)" dark label>
                {{ item.action }}
              </v-chip>
            </template>
            <template v-slot:[`item.user`]="{ item }">
              {{ item.user ? item.user.cus_name : 'Unknown' }}
            </template>

            <!-- Expansion Slot for Details -->
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="bg-grey-lighten-4 pa-0">
                <v-card flat color="grey lighten-4">
                  <v-card-text>
                    <div class="subtitle-2 font-weight-bold mb-2 primary--text">ລາຍລະອຽດການປ່ຽນແປງ (Change Details)</div>
                    <v-simple-table dense class="transparent">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">ຟິວ (Field)</th>
                            <th class="text-left">ກ່ອນ (Before/From)</th>
                            <th class="text-center" width="50"></th>
                            <th class="text-left">ຫຼັງ (After/To)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="change in getAuditDiff(item)" :key="change.field">
                            <td class="font-weight-medium">{{ formatFieldName(change.field) }}</td>
                            <td>
                              <v-chip x-small color="red lighten-5" class="red--text text--darken-2" label>{{ change.from }}</v-chip>
                            </td>
                            <td class="text-center"><v-icon small>mdi-arrow-right</v-icon></td>
                            <td>
                              <v-chip x-small color="green lighten-5" class="green--text text--darken-2" label>{{ change.to }}</v-chip>
                            </td>
                          </tr>
                          <tr v-if="getAuditDiff(item).length === 0">
                            <td colspan="4" class="text-center grey--text py-2">ບໍ່ມີຂໍ້ມູນການປ່ຽນແປງ (No specific field changes detected)</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </td>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="auditDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import { getFormatNum } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import RecipeManagement from '~/components/pos/recipe'
import StockDetails from '~/pages/admin/stock/_id/index.vue'
import ProductImportDialog from '~/components/product/ProductImportDialog.vue'
import StockImportDialog from '~/components/product/StockImportDialog.vue'
import PriceImportDialog from '~/components/product/PriceImportDialog.vue'
import StockAdjustmentDialog from '~/components/card/stockAdjustMent.vue'

export default {
  components: {
    ProductForm,
    ProductFormCreate,
    PriceListForm,
    RecipeManagement,
    StockDetails,
    ProductImportDialog,
    StockImportDialog,
    PriceImportDialog,
    StockAdjustmentDialog,
  },
  middleware: 'auths',

  data() {
    return {
      // Tab management
      activeTab: 0,
      recipeManagementDialog: false,
      showActive: false,

      // Print-related data
      printDialog: false,
      selectedPrintFormat: 'standard',
      labelsPerRow: 3,
      printFormats: [
        { label: 'Standard (3x3 cm)', value: 'standard' },
        { label: 'Large (4x3 cm)', value: 'large' },
        { label: 'Small (2.5x2 cm)', value: 'small' },
      ],

      // Recipe-related data
      productRecipeDialog: false,
      selectedProductForRecipe: null,
      productRecipes: [],
      loadingRecipes: false,
      totalRecipeCost: 0,
      profitMargin: 0,

      recipeHeaders: [
        { text: 'ວັດຖຸດິບ', value: 'ingredient', width: '30%' },
        { text: 'ປະລິມານ', value: 'quantity', width: '15%', align: 'center' },
        {
          text: 'ລາຄາຕໍ່ຫົວໜ່ວຍ',
          value: 'unitCost',
          width: '20%',
          align: 'right',
        },
        {
          text: 'ຕົ້ນທຶນລວມ',
          value: 'totalCost',
          width: '20%',
          align: 'right',
        },
        {
          text: 'ຈັດການ',
          value: 'actions',
          width: '15%',
          align: 'center',
          sortable: false,
        },
      ],

      // Existing data
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      showStockBottomSheet: false,
      selectedEmbeddedProductId: null,
      selectedEmbeddedProductName: '',
      selectedEmbeddedCategory: '',
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      timer: null,
      headers: [
        { text: '', value: 'thumbnail', sortable: false, width: '60px', align: 'center' },
        { text: 'ຂໍ້ມູນສິນຄ້າ', align: 'start', value: 'pro_name' },
        { text: 'ຫມວດສິນຄ້າ', align: 'start', value: 'pro_category_desc' },
        { text: 'ຕົ້ນທຶນ', align: 'end', value: 'pro_cost_price', width: '120px' },
        { text: 'ລາຄາຂາຍ', align: 'end', value: 'pro_price', width: '120px' },
        { text: 'ລະດັບສະຕັອກ', align: 'center', value: 'pro_card_count', width: '140px' },
        { text: 'ສະຖານະ', align: 'center', value: 'status', width: '120px' },
        { text: 'ຈັດການ', align: 'center', value: 'actions', sortable: false, width: '80px' },
      ],
      barcodeBuffer: '',
      barcodeTimeout: null,

      // Audit Trail
      auditDialog: false,
      auditLogs: [],
      isAuditLoading: false,
      expandedAudit: [],
      auditHeaders: [
        { text: 'ວັນທີ (Date)', value: 'auditDate', sortable: true },
        { text: 'ການກະທຳ (Action)', value: 'action' },
        { text: 'ຜູ້ໃຊ້ (User)', value: 'user' },
        { text: 'ໝາຍເຫດ (Reason)', value: 'reason' },
        { text: '', value: 'data-table-expand' },
      ],
      importDialog: false,
      stockImportDialog: false,
      priceImportDialog: false,
      stockAdjustDialog: false,
      selectedProductForAdjust: null,
      isSavingAdjust: false,
    }
  },

  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },

    printDialog(val) {
      if (val) {
        // Generate barcodes when dialog opens
        this.$nextTick(() => {
          this.generateBarcodes()
        })
      }
    },

    selectedPrintFormat() {
      // Regenerate barcodes when format changes
      this.$nextTick(() => {
        this.generateBarcodes()
      })
    },

    labelsPerRow() {
      // Regenerate barcodes when layout changes
      this.$nextTick(() => {
        this.generateBarcodes()
      })
    },
  },

  async mounted() {
    // Load barcode library first
    // this.loadBarcodeLibrary() // Removed in favor of static import

    // Ensure currency list is loaded
    if (!this.findAllCurrency || this.findAllCurrency.length === 0) {
      this.$axios.get('api/currency/findAll').then(res => {
        let data = res.data?.data ?? res.data
        if (Array.isArray(data)) {
          data = data.filter(c => c.isActive === true || c.isActive === 1)
        }
        this.$store.commit('SetCurrencyList', data)
      }).catch(err => {
        console.error('Error fetching currency:', err)
      })
    }

    await this.loadCardCategory()
    await this.fetchData()
    window.addEventListener('keydown', this.handleBarcodeScanner)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.handleBarcodeScanner)
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation', 'findAllprinters', 'findAllCurrency']),

    filteredProducts() {
      // 1. Safety check: ensure loaddata exists
      // let products = this.loaddata.filter((product)=>product.co_name==this.currentSelectedLocation.company.name) || []
      let products = this.loaddata || []
      console.info(`PRODUCT MODEL ${JSON.stringify(products[0])} current location ${JSON.stringify(this.currentSelectedLocation)}`)

      // 2. Perform filter if search exists
      if (this.search) {
        const searchTerm = this.search.toLowerCase().trim()

        products = products.filter((product) => {
          // 3. Safely convert fields to String to avoid "toUpperCase/toLowerCase" errors on Numbers
          const name = String(product.pro_name || '').toLowerCase()
          const barcode = String(product.barCode || '').toLowerCase()
          const proId = String(product.pro_id || '').toLowerCase()
          const productCode = String(product.product_code || '').toLowerCase()

          // 4. Return true if any field matches
          return (
            name.includes(searchTerm) ||
            barcode.includes(searchTerm) ||
            proId.includes(searchTerm) ||
            productCode.includes(searchTerm)
          )
        })
      }
      return products.filter((product) => product.isActive === this.showActive == 0 ? '1' : '0')
    },
  },

  methods: {
    handleBarcodeScanner(e) {
      // If user is already focused on an input/textarea (like the search bar), let the native input handle the scan
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
        return
      }

      // Ignore scanner if any dialog or loading indicator is open
      if (this.productFormCreate || this.editProductForm || this.isstock || this.printDialog || this.priceListDialog || this.recipeManagementDialog || this.productRecipeDialog || this.isloading || this.showStockBottomSheet) {
        return
      }

      if (e.key === 'Enter') {
        if (this.barcodeBuffer && this.barcodeBuffer.length > 2) {
          // If buffered string looks like a barcode, set it to search
          this.search = this.barcodeBuffer
        }
        this.barcodeBuffer = ''
        return
      }

      // Keep alphanumeric and common characters
      const isCharacter = e.key.length === 1
      if (!isCharacter) return

      this.barcodeBuffer += e.key

      // Clear buffer if typing stops (1 second gap)
      if (this.barcodeTimeout) clearTimeout(this.barcodeTimeout)
      this.barcodeTimeout = setTimeout(() => {
        this.barcodeBuffer = ''
      }, 1000) // Increased to 1000ms to allow all hardware scanners to finish
    },
    createProduct() {
      this.productFormKey++
      this.productFormCreate = true
    },
    // Print-related methods
    printBarcodeList() {
      this.printDialog = true
    },

    generateBarcodes() {
      // Wait for DOM elements to be available
      setTimeout(() => {
        this.filteredProducts.forEach((product) => {
          // FIX: Convert to String() explicitly
          const barcodeValue = String(
            product.barCode || product.pro_id || '000000'
          )
          const element = document.getElementById(`barcode-${product.id}`)

          if (element && window.JsBarcode) {
            try {
              // Clear previous barcode
              element.innerHTML = ''

              // Determine barcode size based on format
              const formats = {
                small: { width: 1, height: 30, fontSize: 8 },
                standard: { width: 1.2, height: 40, fontSize: 10 },
                large: { width: 1.5, height: 50, fontSize: 12 },
              }

              const format = formats[this.selectedPrintFormat]

              // Generate barcode
              JsBarcode(element, barcodeValue, {
                format: this.getBarcodeFormat(barcodeValue),
                width: format.width,
                height: format.height,
                displayValue: false, // We'll show the text separately
                margin: 2,
                background: '#ffffff',
                lineColor: '#000000',
              })
            } catch (error) {
              console.error(
                'Barcode generation failed for:',
                barcodeValue,
                error
              )
              // Fallback: show text if barcode generation fails
              element.innerHTML =
                '<text x="50%" y="50%" text-anchor="middle" font-family="monospace" font-size="12">' +
                barcodeValue +
                '</text>'
            }
          }
        })
      }, 100)
    },

    getBarcodeFormat(value) {
      // Force value to string to avoid "toUpperCase is not a function" error
      const strValue = String(value)

      // Auto-detect barcode format based on the value
      if (!strValue) return 'CODE128'

      // EAN-13 (13 digits)
      if (/^\d{13}$/.test(strValue)) return 'EAN13'

      // EAN-8 (8 digits)
      if (/^\d{8}$/.test(strValue)) return 'EAN8'

      // UPC-A (12 digits)
      if (/^\d{12}$/.test(strValue)) return 'UPC'

      // Code 39 (alphanumeric)
      if (/^[A-Z0-9\-. $/+%]*$/.test(strValue.toUpperCase())) return 'CODE39'

      // Default to Code 128 (most versatile)
      return 'CODE128'
    },

    truncateText(text, maxLength) {
      if (!text) return ''
      return text.length > maxLength
        ? text.substring(0, maxLength) + '...'
        : text
    },

    // Removed loadBarcodeLibrary in favor of static import

    getLabelStyle() {
      const formats = {
        small: { width: '2.5cm', height: '2cm', fontSize: '8px' },
        standard: { width: '3cm', height: '3cm', fontSize: '10px' },
        large: { width: '4cm', height: '3cm', fontSize: '12px' },
      }

      const format = formats[this.selectedPrintFormat]
      return {
        width: format.width,
        height: format.height,
        fontSize: format.fontSize,
        gridTemplateColumns: 'repeat(' + this.labelsPerRow + ', 1fr)',
      }
    },

    async doPrint() {
      // Hide the dialog during printing
      this.printDialog = false

      // Generate the print document HTML first
      const windowContent = await this.generateStaticPrintHtml()

      // Bridge for Electron
      if (window.posApi) {
        let printerList = this.findAllprinters || []
        const barcodePrinter = printerList.find((p) => p.type === 'barcode')
        const printerName = barcodePrinter
          ? barcodePrinter.printerName || barcodePrinter.printer_name || ''
          : ''

        if (!printerName) {
          const msg = "Error: No printer name found for 'barcode' type in settings!"
          this.$toast.error(msg)
          return
        }

        const payload = {
          html: windowContent,
          printerName: printerName,
          copies: 1, // HTML already contains all labels
        }
        window.posApi.printBarcode(payload)
        this.$toast.success(`Printing barcodes to ${printerName}`)
      } else {
        // Fallback for browser
        const printWindow = window.open('', '_blank')
        printWindow.document.write(windowContent)
        printWindow.document.close()

        // Since we removed onload from the HTML template, 
        // we trigger print manually for the browser fallback case.
        setTimeout(() => {
          if (printWindow) {
            printWindow.print()
            printWindow.close()
          }
        }, 1000)
      }
    },

    async generateStaticPrintHtml() {
      const labelStyle = this.getLabelStyle()
      let labelsHtml = ''

      // For each product, generate a base64 barcode
      for (const product of this.filteredProducts) {
        const barcodeValue = String(product.barCode || product.pro_id || '000000')
        const productName = this.escapeHtml(this.truncateText(product.pro_name, 25))
        const productPrice = this.formatNumber(product.pro_price)

        // Generate base64 barcode image
        const barcodeDataUrl = await this.generateBarcodeDataUrl(barcodeValue)

        labelsHtml += `
          <div class="barcode-label" style="width: ${labelStyle.width}; height: ${labelStyle.height}; break-inside: avoid;">
            <div class="barcode-svg-container" style="text-align: center;">
              <img src="${barcodeDataUrl}" style="max-width: 100%; height: auto;" />
            </div>
            <div class="barcode-text" style="font-size: 8pt; text-align: center;">${barcodeValue}</div>
            <div class="product-name" style="font-size: ${labelStyle.fontSize}; text-align: center;">${productName}</div>
            <div class="product-price" style="font-size: ${labelStyle.fontSize}; font-weight: bold; text-align: center;">${productPrice} LAK</div>
          </div>
        `
      }

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Barcode Print</title>
          <style>
            @font-face {
              font-family: 'DM Sans';
              src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'DM Sans', sans-serif;
            }
            .print-grid {
              display: grid;
              grid-template-columns: ${labelStyle.gridTemplateColumns};
              gap: 2mm;
              padding: 2mm;
            }
            .barcode-label {
              border: 0.1mm solid #eee;
              padding: 1mm;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              overflow: hidden;
            }
            @media print {
              .barcode-label { border: none; }
            }
          </style>
        </head>
        <body>
          <div class="print-grid">
            ${labelsHtml}
          </div>
        </body>
        </html>
      `
      return html
    },

    generateBarcodeDataUrl(value) {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas')
        const formats = {
          small: { width: 1, height: 30 },
          standard: { width: 1.2, height: 40 },
          large: { width: 1.5, height: 50 },
        }
        const format = formats[this.selectedPrintFormat]

        JsBarcode(canvas, value, {
          format: 'CODE128',
          width: format.width,
          height: format.height,
          displayValue: false,
          margin: 0
        })
        resolve(canvas.toDataURL())
      })
    },

    escapeHtml(text) {
      if (!text) return ''
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    },

    escapeJs(text) {
      if (!text) return ''
      return text
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/'/g, "\\'")
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t')
    },

    generatePrintDocument(printWindow) {
      const labelsPerRow = this.labelsPerRow
      const labelStyle = this.getLabelStyle()

      // Generate HTML content for labels
      let labelsHtml = ''
      this.filteredProducts.forEach((product) => {
        // FIX: Convert to String() explicitly
        const barcodeValue = String(
          product.barCode || product.pro_id || '000000'
        )
        const productName = this.escapeHtml(
          this.truncateText(product.pro_name, 25)
        )
        const productPrice = this.formatNumber(product.pro_price)

        labelsHtml += '<div class="barcode-label">'
        labelsHtml += '<div class="barcode-svg-container">'
        labelsHtml +=
          '<svg id="print-barcode-' +
          product.id +
          '" class="barcode-svg"></svg>'
        labelsHtml += '</div>'
        labelsHtml += '<div class="barcode-text">' + barcodeValue + '</div>'
        labelsHtml += '<div class="product-name">' + productName + '</div>'
        labelsHtml +=
          '<div class="product-price">' + productPrice + ' LAK</div>'
        labelsHtml += '</div>'
      })

      // Generate JavaScript for barcodes
      const formats = {
        small: { width: 1, height: 30 },
        standard: { width: 1.2, height: 40 },
        large: { width: 1.5, height: 50 },
      }

      const format = formats[this.selectedPrintFormat]

      let barcodeScript = ''
      this.filteredProducts.forEach((product) => {
        // FIX: Convert to String() explicitly
        const rawValue = String(product.barCode || product.pro_id || '000000')
        const barcodeValue = this.escapeJs(rawValue)
        const barcodeFormat = this.getBarcodeFormat(rawValue)

        barcodeScript += 'try {'
        barcodeScript +=
          'JsBarcode("#print-barcode-' +
          product.id +
          '", "' +
          barcodeValue +
          '", {'
        barcodeScript += 'format: "' + barcodeFormat + '",'
        barcodeScript += 'width: ' + format.width + ','
        barcodeScript += 'height: ' + format.height + ','
        barcodeScript += 'displayValue: false,'
        barcodeScript += 'margin: 2,'
        barcodeScript += 'background: "#ffffff",'
        barcodeScript += 'lineColor: "#000000"'
        barcodeScript += '});'
        barcodeScript += '} catch(e) {'
        barcodeScript += 'console.error("Failed to generate barcode:", e);'
        barcodeScript +=
          'var elem = document.getElementById("print-barcode-' +
          product.id +
          '");'
        barcodeScript += 'if(elem) {'
        barcodeScript +=
          'elem.innerHTML = \'<text x="50%" y="50%" text-anchor="middle" font-family="monospace" font-size="12">' +
          barcodeValue +
          "</text>';"
        barcodeScript += '}'
        barcodeScript += '}'
      })

      // Build complete HTML document
      const printDocument =
        '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<title>Barcode Labels</title>' +
        '<scr' +
        'ipt src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></scr' +
        'ipt>' +
        '<sty' +
        'le>' +
        '@page { margin: 10mm; size: A4; }' +
        'body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }' +
        '.barcode-grid { display: grid; grid-template-columns: repeat(' +
        labelsPerRow +
        ', 1fr); gap: 5mm; width: 100%; }' +
        '.barcode-label { border: 1px solid #333; padding: 2mm; text-align: center; page-break-inside: avoid; display: flex; flex-direction: column; justify-content: center; align-items: center; width: ' +
        labelStyle.width +
        '; height: ' +
        labelStyle.height +
        '; box-sizing: border-box; font-size: ' +
        labelStyle.fontSize +
        '; }' +
        '.barcode-svg-container { display: flex; justify-content: center; align-items: center; margin-bottom: 2px; flex-shrink: 0; }' +
        '.barcode-svg { max-width: 100%; height: auto; }' +
        '.barcode-text { font-family: "Courier New", monospace; font-weight: bold; font-size: 0.8em; margin-bottom: 2px; word-break: break-all; }' +
        '.product-name { font-size: 0.8em; margin-bottom: 2px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.1; text-align: center; }' +
        '.product-price { font-weight: bold; color: #d32f2f; font-size: 0.9em; }' +
        '@media print { body { margin: 0; padding: 0; } .barcode-grid { gap: 3mm; } }' +
        '</sty' +
        'le>' +
        '</head>' +
        '<body>' +
        '<div class="barcode-grid">' +
        labelsHtml +
        '</div>' +
        '<scr' +
        'ipt>' +
        'window.onload = function() {' +
        barcodeScript +
        'setTimeout(function() { window.print(); setTimeout(function() { window.close(); }, 1000); }, 500);' +
        '};' +
        '</scr' +
        'ipt>' +
        '</body>' +
        '</html>'

      printWindow.document.write(printDocument)
      printWindow.document.close()
    },

    // Recipe-related methods
    async viewProductRecipes(product) {
      this.selectedProductForRecipe = product
      this.productRecipeDialog = true
      await this.loadProductRecipes(product.id)
    },

    async loadProductRecipes(productId) {
      this.loadingRecipes = true
      try {
        const response = await this.$axios.get(
          `/api/recipes/product/${productId}`
        )

        if (response.data.success) {
          this.productRecipes = response.data.data.recipes || []
          this.calculateRecipeTotals()
        }
      } catch (error) {
        console.error('Error loading product recipes:', error)
        this.$toast.error('Error loading recipes')
        this.productRecipes = []
      } finally {
        this.loadingRecipes = false
      }
    },

    calculateRecipeTotals() {
      this.totalRecipeCost = this.productRecipes.reduce((total, recipe) => {
        const ingredientCost =
          (recipe.ingredient?.pro_price || 0) * recipe.quantity
        return total + ingredientCost
      }, 0)

      this.profitMargin =
        (this.selectedProductForRecipe?.pro_price || 0) - this.totalRecipeCost
    },

    createRecipeForProduct() {
      // Switch to recipe tab and trigger create with pre-selected product
      this.activeTab = 1
      this.productRecipeDialog = false

      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openCreateDialogWithProduct(
            this.selectedProductForRecipe
          )
        }
      })
    },

    // NEW: Direct create recipe from product list
    createRecipeFromProductList(product) {
      // Switch to recipe tab
      this.activeTab = 1

      // Wait for the RecipeManagement component to be rendered
      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openCreateDialogWithProduct(product)
        }
      })
    },

    manageRecipe(product) {
      this.recipeManagementDialog = true
      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openMaintainDialog(product)
        }
      })
    },

    editRecipeFromProduct(recipe) {
      // Switch to recipe tab and trigger edit
      this.activeTab = 1
      this.productRecipeDialog = false

      this.$nextTick(() => {
        if (this.$refs.recipeManagement) {
          this.$refs.recipeManagement.openEditDialog(recipe)
        }
      })
    },

    async calculateProductionCost() {
      if (!this.selectedProductForRecipe) return

      try {
        const response = await this.$axios.get(
          `/api/recipes/product/${this.selectedProductForRecipe.id}/cost`,
          {
            params: { quantity: 1 },
          }
        )

        if (response.data.success) {
          const costData = response.data.data

          // Show detailed cost breakdown
          this.$toast.success(
            `Production Cost: ${this.formatNumber(costData.totalCost)} LAK`
          )

          // You could also show a detailed dialog here with the cost breakdown
          console.log('Cost breakdown:', costData.costBreakdown)
        }
      } catch (error) {
        console.error('Error calculating production cost:', error)
        this.$toast.error('Error calculating production cost')
      }
    },

    closeProductRecipeDialog() {
      this.productRecipeDialog = false
      this.selectedProductForRecipe = null
      this.productRecipes = []
      this.totalRecipeCost = 0
      this.profitMargin = 0
    },

    // Existing methods (keeping all your original functionality)
    exportToExcel() {
      // Get all unique price list grades from the data
      const allGrades = new Set()
      this.loaddata.forEach((item) => {
        console.info(`Additional product ${JSON.stringify(item)}`)
        if (item.priceLists && item.priceLists.length > 0) {
          item.priceLists.forEach((priceList) => {
            if (priceList.grade) {
              allGrades.add(priceList.grade)
            }
          })
        }
      })

      // Convert to sorted array for consistent column order
      const sortedGrades = Array.from(allGrades).sort()

      // Base header map
      const headerMap = {
        id: 'ID',
        co_name: 'Company Name',
        pro_id: 'Product ID (Seq)',
        product_code: 'Product Code',
        pro_name: 'Product Name',
        barCode: 'Barcode',
        pro_cost_price: 'Cost Price',
        costCurrency: 'Cost Currency',
        pro_price: 'Base Price',
        saleCurrency: 'Sale Currency',
        effectivePrice: 'Current Price',
        pro_desc: 'Product Description',
        categ_name: 'Category',
        card_count: 'Stock',
        minStock: 'Minimum Stock',
        pro_card_count: 'Stock',
        stockStatus: 'Stock Status',
      }

      // Add dynamic price list columns
      sortedGrades.forEach((grade) => {
        headerMap[`price_${grade}`] = `Price ${grade}`
      })

      // Transform data with dynamic price list fields
      const transformedData = this.loaddata.map((item) => {
        const newItem = {}

        // Map base fields
        Object.keys(headerMap).forEach((key) => {
          if (key.startsWith('price_')) {
            // Handle dynamic price list fields
            const grade = key.replace('price_', '')
            const priceList = item.priceLists?.find((pl) => pl.grade === grade)
            newItem[headerMap[key]] = priceList ? priceList.amount : ''
          } else if (key === 'stockStatus') {
            // Calculate stock status dynamically
            newItem[headerMap[key]] = this.verifyStockStatus(item.minStock, item.pro_card_count)
          } else if (key === 'costCurrency') {
            newItem[headerMap[key]] = this.getCurrencyCode(item.costCurrencyId)
          } else if (key === 'saleCurrency') {
            newItem[headerMap[key]] = this.getCurrencyCode(item.saleCurrencyId)
          } else if (Object.prototype.hasOwnProperty.call(item, key)) {
            newItem[headerMap[key]] = item[key]
          }
        })

        return newItem
      })

      // Create Excel file
      const worksheet = this.$xlsx.utils.json_to_sheet(transformedData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(
        workbook,
        worksheet,
        'Products with Price Lists'
      )

      // Generate filename with timestamp
      const timestamp = new Date().toISOString().slice(0, 10)
      this.$xlsx.writeFile(
        workbook,
        `products_with_pricelists_${timestamp}.xlsx`
      )
    },

    ...mapActions([
      'setSelectedTerminal',
      'setSelectedLocation',
      'initProduct',
    ]),

    triggerPriceListForm(item) {
      this.pricingRecordId = item.id
      this.priceListFormKey += 1
      this.priceListDialog = true
    },

    formatNumber(value) {
      return getFormatNum(value)
    },

    getCurrencyCode(currencyId) {
      if (!currencyId) return ''
      const currency = this.findAllCurrency.find((c) => c.id === currencyId)
      return currency ? currency.code : ''
    },

    getStatusChipColor(minStock, curStock) {
      if (curStock == 0) {
        return 'error' // Out of stock - use error theme color
      } else if (minStock < curStock) {
        return 'primary' // In stock - use primary theme color
      } else {
        return 'warning' // Low stock - use warning theme color
      }
    },

    verifyStockStatus(minStock, CurStock) {
      let statusStock = ''
      CurStock == 0
        ? (statusStock = 'Out of stock')
        : minStock < CurStock
          ? (statusStock = 'In stock')
          : (statusStock = 'Low stock')
      return statusStock
    },

    triggerCardForm(payload) {
      this.stockFormKey += 1
      this.selectedProductId = payload.pro_id
      this.selectedId = payload.id
      this.selectedProductCost = payload.pro_cost_price
      this.selectedProductName = payload.pro_name
      this.isstock = true
    },

    async fetchData() {
      console.log(`PRODUCT LIST ===>`)
      this.isloading = true

      await this.$axios
        .get(`product_f/${this.currentSelectedLocation['id']}`, {
          params: { include: 'priceList', isActive: false },
        })
        .then((res) => {
          this.initProduct(res.data.data)
          this.loaddata = res.data.data.map((el) => {
            console.log(el.co_name)
            return {
              id: el.id,
              co_name: el.co_name,
              pro_id: el.pro_id,
              product_code: el.product_code,
              pro_name: el.pro_name,
              pro_price: el.pro_price,
              saleCurrencyId: el.saleCurrencyId,
              costCurrencyId: el.costCurrencyId,
              img_path: el.img_path, // ✅ Corrected from pro_image_path
              img_name: el.img_name,
              _category: el._category,
              pro_desc: el.pro_desc,
              pro_status: el.pro_status,
              pro_category: el.pro_category,
              pro_category_desc: el.pro_category + ' - ' + el.categ_name,
              pro_card_count: el.card_count,
              pro_cost_price: el.cost_price,
              pro_outlet: el.outlet,
              vendorName: el.vendorName,
              pro_outlet_name: el.outlet_name,
              barCode: el.barCode,
              minStock: el.minStock,
              priceLists: el.priceLists,
              receiveUnitId: el.receiveUnitId,
              stockUnitId: el.stockUnitId,
              baseUnitId: el.baseUnitId,
              actions: el.pro_id, // ✅ Unified actions
              status: el.pro_id,
              isActive: el.isActive,
            }
          })
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },

    editItem(item) {
      this.productFormKey += 1
      this.selectedProductId = item.pro_id
      this.editProductForm = true
    },

    editStock(idx) {
      console.log('ID ' + idx.pro_id)
      console.log('NAME ' + idx.pro_name)
      this.selectedEmbeddedProductId = idx.pro_id
      this.selectedEmbeddedProductName = idx.pro_name
      this.selectedEmbeddedCategory = idx.pro_category_desc || ''
      this.showStockBottomSheet = true
    },

    loadCardCategory() {
      this.isloading = true
      this.$axios
        .get('stockcate_f')
        .then((res) => {
          this.cardType = res.data.map((el) => {
            return {
              card_type_code: el.card_type_code,
              card_type_name: el.card_type_name,
            }
          })
          this.selectedCardType = this.cardType[0].card_type_code
          console.log('CARD LEN: ' + this.cardType.length)
          console.log('CARD LEN: ' + this.cardType[0].card_type_code)
          this.isloading = false
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.isloading = false
        })
    },

    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true
        await this.$axios
          .put('/api/product/stockcount')
          .then((response) => {
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
            this.fetchData()
          })
          .catch((error) => {
            swalError2(this.$swal, 'Error', error.response.data)
          })
        this.isloading = false
      }
    },

    openStockAdjustDialog(item) {
      this.selectedProductForAdjust = {
        ...item,
        stock_count: item.pro_card_count
      }
      this.stockAdjustDialog = true
    },

    closeStockAdjustDialog() {
      this.stockAdjustDialog = false
      this.selectedProductForAdjust = null
    },

    async saveStockAdjustment(data) {
      this.isSavingAdjust = true
      try {
        const payload = {
          inputter: this.$auth.user?.id || '',
          locationId: this.currentSelectedLocation ? this.currentSelectedLocation.id : null,
          adjustments: [
            {
              productId: data.productId,
              actualQty: data.newQuantity
            }
          ]
        }
        const response = await this.$axios.post('/api/card/adjustStockBulk', payload)
        if (response.data.success) {
          swalSuccess(this.$swal, 'Succeed', `Stock adjusted successfully for ${this.selectedProductForAdjust.pro_name}`)
          await this.fetchData()
          this.closeStockAdjustDialog()
        } else {
          throw new Error(response.data.message || 'Failed to adjust stock')
        }
      } catch (error) {
        const msg = error.response?.data?.message || error.message || 'Error adjusting stock'
        swalError2(this.$swal, 'Error', msg)
      } finally {
        this.isSavingAdjust = false
      }
    },

    // Audit Trail Methods
    async fetchProductAudit(productId) {
      this.isAuditLoading = true
      try {
        const res = await this.$axios.get(`api/product/audit/${productId}`)
        this.auditLogs = res.data.data || []
      } catch (er) {
        swalError2(this.$swal, 'Error', 'Could not load audit data: ' + er.message)
      } finally {
        this.isAuditLoading = false
      }
    },
    openProductAudit(item) {
      this.auditLogs = []
      this.auditDialog = true
      this.expandedAudit = []
      this.fetchProductAudit(item.id)
    },
    formatDateTime(val) {
      if (!val) return '-'
      return new Date(val).toLocaleString('en-GB')
    },
    getActionColor(action) {
      const colors = {
        'CREATE': 'success',
        'UPDATE': 'info',
        'DELETE': 'error'
      }
      return colors[action] || 'grey'
    },
    getAuditDiff(item) {
      const currentSnapshot = item.recordData || {};
      let nextSnapshot = {};

      const actualIndex = this.auditLogs.findIndex(log => log.id === item.id);

      if (actualIndex === 0) {
        const product = this.loaddata.find(p => p.id === item.productId);
        nextSnapshot = product || {};
      } else if (actualIndex > 0) {
        const nextLog = this.auditLogs[actualIndex - 1];
        nextSnapshot = nextLog ? (nextLog.recordData || {}) : {};
      }

      const trackedFields = [
        'pro_id', 'pro_name', 'pro_price', 'pro_desc', 'pro_status', 
        'barCode', 'vendorName', 'cost_price', 'stock_count', 'minStock',
        'isActive', '_category', 'pro_category', 'saleCurrencyId', 'costCurrencyId'
      ];

      if (item.action === 'CREATE') {
        return trackedFields
          .filter(k => currentSnapshot[k] !== undefined)
          .map(k => ({
            field: k,
            from: '-',
            to: (currentSnapshot[k] === null || currentSnapshot[k] === undefined) ? '-' : currentSnapshot[k]
          }));
      }

      const changes = [];
      trackedFields.forEach(field => {
        let oldVal = currentSnapshot[field];
        let newVal = nextSnapshot[field];
        
        // Handle potential field name mismatches between model and list projection
        if (field === 'pro_category' && nextSnapshot.hasOwnProperty('pro_category_desc')) {
          // Simplification: we compare IDs from recordData
        }

        if (oldVal != newVal && newVal !== undefined) {
          changes.push({
            field,
            from: (oldVal === null || oldVal === undefined) ? '-' : oldVal,
            to: (newVal === null || newVal === undefined) ? '-' : newVal
          });
        }
      });

      return changes;
    },
    formatFieldName(field) {
      const mapping = {
        pro_id: 'ID ສິນຄ້າ',
        pro_name: 'ຊື່ສິນຄ້າ',
        pro_price: 'ລາຄາຂາຍ',
        pro_desc: 'ລາຍລະອຽດ',
        pro_status: 'ສະຖານະສິນຄ້າ',
        barCode: 'ບາໂຄດ',
        vendorName: 'ຊື່ຜູ້ສະໜອງ',
        cost_price: 'ຕົ້ນທຶນ',
        stock_count: 'ຈຳນວນໃນສາງ',
        minStock: 'ຈຳນວນຕ່ຳສຸດ',
        isActive: 'ເປີດໃຊ້ງານ',
        _category: 'ປະເພດ (Enum)',
        pro_category: 'ໝວດໝູ່ (ID)',
        saleCurrencyId: 'ສະກຸນເງິນຂາຍ',
        costCurrencyId: 'ສະກຸນເງິນຕົ້ນທຶນ'
      };
      return mapping[field] || field;
    }
  },
}
</script>

<style scoped>
/* UI Enhancements */
.bg-slate-50 {
  background-color: #f8fafc;
}

.border-light {
  border: 1px solid #e2e8f0 !important;
}

.gap-2 {
  gap: 8px;
}

.line-height-1 {
  line-height: 1;
}

.font-mono {
  font-family: monospace;
}

.letter-spacing-1 {
  letter-spacing: 1px;
}

.compact-table :deep(th) {
  text-transform: uppercase;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  color: #64748b !important;
  letter-spacing: 0.5px;
  background-color: #f1f5f9 !important;
}

.compact-table :deep(td) {
  height: 64px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.compact-table :deep(tr:hover) {
  background-color: #f8fafc !important;
}

/* Print-specific styles */
.print-content {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
}

.barcode-grid {
  display: grid;
  gap: 5mm;
  width: 100%;
}

.barcode-label {
  border: 1px solid #333;
  padding: 2mm;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: white;
}

.barcode-svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  flex-shrink: 0;
  width: 100%;
}

.barcode-svg {
  max-width: 100%;
  height: auto;
}

.barcode-text {
  font-weight: bold;
  font-family: 'Courier New', monospace;
  margin-bottom: 2px;
  word-break: break-all;
  font-size: 0.8em;
}

.product-name {
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.8em;
  line-height: 1.1;
  text-align: center;
}

.product-price {
  font-weight: bold;
  color: #d32f2f;
  font-size: 0.9em;
}

.print-options {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
}

/* Existing styles */
.ingredient-info {
  min-width: 200px;
}

.quantity-display {
  font-family: monospace;
  font-weight: 600;
  text-align: center;
}

.cost-display,
.total-cost-display {
  font-family: monospace;
  font-weight: 600;
  text-align: right;
}

.total-cost-display strong {
  color: var(--v-primary-base);
}

/* Recipe buttons styling */
.recipe-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* Tab styling */
.v-tabs {
  margin-bottom: 0;
}

.v-tab {
  text-transform: none !important;
  font-weight: 600;
}

/* Recipe dialog styling */
.primary.white--text {
  background: var(--v-primary-base);
}

/* Responsive design */
@media (max-width: 768px) {
  .recipeHeaders {
    font-size: 12px;
  }

  .ingredient-info {
    min-width: 150px;
  }

  .recipe-buttons {
    flex-direction: column;
    gap: 2px;
  }

  .barcode-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Print media query */
@media print {

  .v-dialog,
  .v-overlay,
  .print-options {
    display: none !important;
  }

  .print-content {
    max-height: none !important;
    overflow: visible !important;
    border: none !important;
  }

  .barcode-grid {
    gap: 3mm;
  }

  .barcode-label {
    page-break-inside: avoid;
  }
}
</style>