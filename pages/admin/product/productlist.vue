<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການສິນຄ້າ</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Main Content with Tabs -->
    <v-card class="mt-4">
      <v-tabs v-model="activeTab" background-color="primary" dark>
        <v-tab>
          <v-icon left>mdi-package</v-icon>
          ລາຍການສິນຄ້າ
        </v-tab>
        <v-tab>
          <v-icon left>mdi-book-open-variant</v-icon>
          ສູດອາຫານ / Recipes
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab">
        <!-- Product List Tab -->
        <v-tab-item>
          <v-card-text>
            <v-card>
              <v-card-title>
                <v-row>
                  <v-col cols="6" sm="6" md="6">
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="ຊອກຫາ"
                      single-line
                      hide-detailsx
                    />
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <v-btn
                      class="primary"
                      size="large"
                      variant="outlined"
                      @click="rebuildStock"
                      rounded
                    >
                      <span class="mdi mdi-update"></span>
                      Rebuild stock
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-data-table
                v-if="loaddata"
                :headers="headers"
                :search="search"
                :items="loaddata"
                :items-per-page="pageLine"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title
                      >ສິນຄ້າທັງຫມົດ: {{ loaddata.length }}</v-toolbar-title
                    >
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-btn
                      size="large"
                      variant="outlined"
                      @click="exportToExcel"
                      class="primary"
                      rounded
                    >
                      <span class="mdi mdi-microsoft-excel"></span>Generate
                      excel file
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn
                      size="large"
                      variant="outlined"
                      @click="productFormCreate = true"
                      class="primary"
                      rounded
                    >
                      <span class="mdi mdi-note-plus-outline"></span>
                      ສ້າງສິນຄ້າໃຫມ່
                    </v-btn>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.functionEdit`]="{ item }">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      editItem(item)
                      wallet = true
                    "
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </v-btn>
                </template>
                <template v-slot:[`item.functionStock`]="{ item }">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      triggerCardForm(item)
                      wallet = true
                    "
                  >
                    <i class="fa fa-cart-plus"></i>
                  </v-btn>
                </template>
                <template v-slot:[`item.pricing`]="{ item }">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      triggerPriceListForm(item)
                      wallet = true
                    "
                  >
                    <v-icon>mdi mdi-currency-usd</v-icon>
                  </v-btn>
                </template>
                <template v-slot:[`item.functionStockView`]="{ item }">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      editStock(item)
                      wallet = true
                    "
                  >
                    <i class="fa fa-eye"></i>
                  </v-btn>
                </template>
                <!-- UPDATED: Recipe function with multiple buttons -->
                <template v-slot:[`item.functionRecipe`]="{ item }">
                  <div v-if="(item._category = 'stock')" class="recipe-buttons">
                    <!-- View existing recipes button -->
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="primary"
                          icon
                          small
                          @click="viewProductRecipes(item)"
                          v-on="on"
                        >
                          <v-icon small>mdi-book-open-variant</v-icon>
                        </v-btn>
                      </template>
                      <span>View Recipes</span>
                    </v-tooltip>

                    <!-- Create new recipe button -->
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="success"
                          icon
                          small
                          @click="createRecipeFromProductList(item)"
                          v-on="on"
                          class="ml-1"
                        >
                          <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                      </template>
                      <span>Create Recipe</span>
                    </v-tooltip>
                  </div>
                  <span v-else class="text-grey">N/A</span>
                </template>
                <template v-slot:[`item.pro_cost_price`]="{ item }">
                  {{ formatNumber(item.pro_cost_price) }}
                </template>
                <template v-slot:[`item.pro_price`]="{ item }">
                  {{ formatNumber(item.pro_price) }}
                </template>
                <template v-slot:[`item.pro_card_count`]="{ item }">
                  {{ item.pro_card_count }}
                </template>
                <template v-slot:[`item.minStock`]="{ item }">
                  {{ formatNumber(item.minStock) }}
                </template>
                <template v-slot:[`item.status`]="{ item }">
                  <v-chip
                    class="ma-2"
                    :color="
                      getStatusChipColor(item.minStock, item.pro_card_count)
                    "
                    text-color="white"
                  >
                    {{ verifyStockStatus(item.minStock, item.pro_card_count) }}
                  </v-chip>
                </template>
              </v-data-table>
            </v-card>
          </v-card-text>
        </v-tab-item>

        <!-- Recipe Management Tab -->
        <v-tab-item>
          <v-card-text>
            <RecipeManagement ref="recipeManagement" />
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Product Recipe Details Dialog -->
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
          <!-- Product Info Summary -->
          <v-row class="mb-4">
            <v-col cols="12">
              <v-alert type="info" outlined>
                <div class="d-flex align-center">
                  <div class="flex-grow-1">
                    <h4>{{ selectedProductForRecipe.pro_name }}</h4>
                    <p class="mb-0">{{ selectedProductForRecipe.pro_desc }}</p>
                    <small
                      >Category:
                      {{ selectedProductForRecipe.pro_category_desc }}</small
                    >
                  </div>
                  <div class="text-right">
                    <div>
                      <strong>ລາຄາ:</strong>
                      {{ formatNumber(selectedProductForRecipe.pro_price) }} LAK
                    </div>
                    <div>
                      <strong>ຕົ້ນທຶນ:</strong>
                      {{
                        formatNumber(selectedProductForRecipe.pro_cost_price)
                      }}
                      LAK
                    </div>
                  </div>
                </div>
              </v-alert>
            </v-col>
          </v-row>

          <!-- Recipe Cost Summary -->
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

          <!-- Recipe Details Table -->
          <v-data-table
            :headers="recipeHeaders"
            :items="productRecipes"
            :loading="loadingRecipes"
            class="elevation-1"
            hide-default-footer
            v-if="productRecipes.length > 0"
          >
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
                {{ formatNumber(item.ingredient?.pro_price || 0) }} LAK
              </div>
            </template>

            <template v-slot:item.totalCost="{ item }">
              <div class="total-cost-display">
                <strong
                  >{{
                    formatNumber(
                      (item.ingredient?.pro_price || 0) * item.quantity
                    )
                  }}
                  LAK</strong
                >
              </div>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-btn small color="primary" @click="editRecipeFromProduct(item)">
                <v-icon small>mdi-pencil</v-icon>
                Edit
              </v-btn>
            </template>
          </v-data-table>

          <!-- No Recipes Message -->
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

          <!-- Loading State -->
          <div v-if="loadingRecipes" class="text-center py-4">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
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

    <!-- Existing Dialogs -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="5yMsQ6gRSkI"
      >
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
      <card-form
        :key="stockFormKey"
        :product-id="selectedProductId"
        :id="selectedId"
        :cost="selectedProductCost"
        :product-name="selectedProductName"
        @close-dialog="isstock = false"
        @reload="rebuildStock"
      ></card-form>
    </v-dialog>

    <v-dialog
      v-model="editProductForm"
      fullscreen
      persistent
      scrollable
      transition="dialog-bottom-transition"
    >
      <product-form
        :key="productFormKey"
        @close-dialog="editProductForm = false"
        :header-id="selectedProductId"
        @refresh="fetchData"
        :isEdit="editProductForm"
      ></product-form>
    </v-dialog>

    <v-dialog
      v-model="productFormCreate"
      fullscreen
      persistent
      scrollable
      transition="dialog-bottom-transition"
    >
      <product-form-create
        @close-dialog="productFormCreate = false"
        @refresh="fetchData"
      >
      </product-form-create>
    </v-dialog>

    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form
        :key="priceListFormKey"
        @close-dialog="priceListDialog = false"
        :record-id="pricingRecordId"
        @refresh="fetchData"
      >
      </price-list-form>
    </v-dialog>
  </div>
</template>

<script>
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import { getFormatNum } from '~/common'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapActions, mapGetters } from 'vuex'
import RecipeManagement from '~/components/pos/recipe'

export default {
  components: {
    ProductForm,
    ProductFormCreate,
    PriceListForm,
    RecipeManagement,
  },
  middleware: 'auths',

  data() {
    return {
      // Tab management
      activeTab: 0,

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
        {
          text: 'RECID',
          align: 'center',
          value: 'id',
        },
        {
          text: 'Company',
          align: 'center',
          value: 'co_name',
        },
        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        { text: 'ບາໂຄດ', align: 'center', value: 'barCode' },
        { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'pro_category_desc' },
        { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
        { text: 'minStock', align: 'center', value: 'minStock' },
        { text: 'Stock', align: 'center', value: 'pro_card_count' },
        { text: 'Status', align: 'center', value: 'status' },
        { text: 'Vendor', align: 'center', value: 'vendorName' },
        { text: 'cost', align: 'center', value: 'pro_cost_price' },
        {
          text: 'ສູດອາຫານ',
          align: 'center',
          value: 'functionRecipe',
          sortable: false,
        },
        {
          text: 'ເພີ່ມສະຕັອກ',
          align: 'center',
          value: 'functionStock',
          sortable: false,
        },
        {
          text: 'ເບິ່ງສະຕັອກ',
          align: 'center',
          value: 'functionStockView',
          sortable: false,
        },
        {
          text: 'ຈັດການລາຄາ',
          align: 'center',
          value: 'pricing',
          sortable: false,
        },
        {
          text: 'ແກ້ໄຂ',
          align: 'center',
          value: 'functionEdit',
          sortable: false,
        },
      ],
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
  },

  async mounted() {
    await this.loadCardCategory()
    await this.fetchData()
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),
  },

  methods: {
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
        pro_id: 'Product Code',
        pro_name: 'Product Name',
        barCode: 'Barcode',
        pro_cost_price: 'Cost Price',
        pro_price: 'Base Price',
        effectivePrice: 'Current Price',
        pro_desc: 'Product Description',
        categ_name: 'Category',
        card_count: 'Stock',
        minStock: 'Minimum Stock',
      }

      // Add dynamic price list columns
      sortedGrades.forEach((grade) => {
        headerMap[`price_${grade}`] = `Price ${grade}`
      })

      // Transform data with dynamic price list fields
      const transformedData = this.loaddata.map((item) => {
        let newItem = {}

        // Map base fields
        Object.keys(headerMap).forEach((key) => {
          if (key.startsWith('price_')) {
            // Handle dynamic price list fields
            const grade = key.replace('price_', '')
            const priceList = item.priceLists?.find((pl) => pl.grade === grade)
            newItem[headerMap[key]] = priceList ? priceList.amount : ''
          } else if (item.hasOwnProperty(key)) {
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
          params: { include: 'priceList' },
        })
        .then((res) => {
          this.initProduct(res.data.data)
          this.loaddata = res.data.data.map((el) => {
            console.log(el.co_name)
            return {
              id: el.id,
              co_name: el.co_name,
              pro_id: el.pro_id,
              pro_name: el.pro_name,
              pro_price: el.pro_price,
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
              functionEdit: el.pro_id,
              functionStock: el.pro_id,
              functionRecipe: el.pro_id, // Added recipe function
              pricing: el.pro_id,
              priceLists: el.priceLists,
              functionStockView: el.pro_id,
              status: el.pro_id,
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
      console.log('OBJ ' + Object.keys(idx))
      // this.$router.push(`/admin/stock/${idx.pro_id}`)
      // this.$router.push(`/admin/stock/${idx.pro_id}/${encodeURIComponent(idx.pro_name)}`)
      this.$router.push({
        path: `/admin/stock/${idx.pro_id}`,
        query: {
          name: idx.pro_name,
          // You can add more query params
          category: idx.category || '',
          price: idx.price || '',
        },
      })
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
  },
}
</script>

<style scoped>
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
}
</style>