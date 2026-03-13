<template>
  <div class="recipe-management pa-4">
    <!-- Statistics Cards -->
    <v-row class="mb-4">
      <v-col cols="12" md="3" v-for="(stat, index) in statistics" :key="index">
        <v-card class="stat-card" elevation="2">
          <v-card-text>
            <div class="d-flex align-center">
              <v-avatar :color="stat.color" class="mr-3">
                <v-icon color="white">{{ stat.icon }}</v-icon>
              </v-avatar>
              <div>
                <h3 class="stat-value">{{ formatNumber(stat.value) }}</h3>
                <p class="stat-label">{{ stat.label }}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters -->
    <v-card class="filter-card mb-4" elevation="1">
      <v-card-title class="filter-title primary">
        <v-icon class="mr-2">mdi-filter</v-icon>
        Filters
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-autocomplete v-model="filters.productId" :items="finishedProducts" item-text="pro_name" item-value="id"
              label="Filter by Product" clearable outlined dense prepend-inner-icon="mdi-magnify"
              placeholder="Search products..." @change="loadRecipes">
              <template v-slot:selection="{ item }">
                {{ item.pro_name }}
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.pro_name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.pro_desc }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-autocomplete v-model="filters.ingredientId" :items="stockItems" item-text="pro_name" item-value="id"
              label="Filter by Ingredient" clearable outlined dense prepend-inner-icon="mdi-magnify"
              placeholder="Search ingredients..." @change="loadRecipes">
              <template v-slot:selection="{ item }">
                {{ item.pro_name }}
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.pro_name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.pro_desc }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="filters.search" label="Search recipes..." outlined dense clearable
              append-icon="mdi-magnify" @input="debounceSearch" placeholder="Type to search..."></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Recipes Table -->
    <v-card elevation="2">
      <v-card-title>
        <span class="title">Recipes</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="loadRecipes">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-card-title>

      <v-data-table :headers="headers" :items="recipes" :loading="loading" :server-items-length="totalItems"
        :options.sync="options" class="recipe-table" @update:options="loadRecipes">
        <!-- Product Column -->
        <template v-slot:item.product="{ item }">
          <div class="product-info">
            <strong>{{ item.product?.pro_name || 'N/A' }}</strong>
            <br>
            <small class="text-grey">{{ item.product?.pro_desc }}</small>
          </div>
        </template>

        <!-- Ingredient Column -->
        <template v-slot:item.ingredient="{ item }">
          <div class="ingredient-info">
            <strong>{{ item.ingredient?.pro_name || 'N/A' }}</strong>
            <br>
            <small class="text-grey">Price: {{ formatCurrency(item.ingredient?.pro_price) }}</small>
          </div>
        </template>

        <!-- Quantity Column -->
        <template v-slot:item.quantity="{ item }">
          <div class="quantity-info">
            <span class="quantity-value">{{ formatNumber(item.quantity) }}</span>
            <span v-if="item.unit" class="quantity-unit">{{ item.unit.symbol }}</span>
          </div>
        </template>

        <!-- Cost Column -->
        <template v-slot:item.cost="{ item }">
          <div class="cost-info">
            <strong class="cost-value">
              {{ formatCurrency((item.ingredient?.pro_price || 0) * item.quantity) }}
            </strong>
          </div>
        </template>

        <!-- Actions Column -->
        <template v-slot:item.actions="{ item }">
          <div class="action-buttons">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon small class="primary" @click="editRecipe(item)" v-on="on">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Edit Recipe</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon small class="primary" @click="viewRecipe(item)" v-on="on">
                  <v-icon small>mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>View Details</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon small color="error" @click="deleteRecipe(item)" v-on="on">
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Delete Recipe</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Product Recipe Builder Dialog -->
    <v-dialog v-model="recipeDialog" fullscreen persistent>
      <v-card>
        <v-card-title class="dialog-title">
          <v-icon class="mr-2">mdi-book-open-variant</v-icon>
          {{ isEditing ? 'Edit Product Recipe' : 'Create Product Recipe' }}
        </v-card-title>

        <v-form ref="recipeForm" v-model="formValid" lazy-validation>
          <v-card-text>
            <!-- Recipe Name Input -->
            <v-row class="mb-4">
              <v-col cols="12">
                <v-text-field v-model="currentRecipe.recipeName" label="Recipe Name" :rules="[rules.required]" outlined
                  required prepend-inner-icon="mdi-tag" placeholder="Enter a name for this recipe..."
                  hint="Give your recipe a descriptive name" persistent-hint>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- Product Selection with Autocomplete -->
            <v-row class="mb-4">
              <v-col cols="12">
                <v-autocomplete v-model="currentRecipe.productId" :items="finishedProducts" item-text="pro_name"
                  item-value="id" label="Select Product (What are you making?)" :rules="[rules.required]" outlined
                  required clearable :search-input.sync="productSearch" @change="onProductChange"
                  placeholder="Type to search products..." prepend-inner-icon="mdi-magnify"
                  :disabled="productPreSelected">
                  <template v-slot:item="{ item }">
                    <v-list-item-avatar>
                      <v-icon color="primary">mdi-package-variant</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.pro_name }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ item.pro_desc }} - Category: {{ item.pro_category || item._category }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-chip small color="primary" outlined>
                        {{ formatCurrency(item.pro_price) }}
                      </v-chip>
                    </v-list-item-action>
                  </template>
                  <template v-slot:selection="{ item }">
                    <v-chip color="primary" outlined>
                      <v-icon left small>mdi-package-variant</v-icon>
                      {{ item.pro_name }}
                    </v-chip>
                  </template>
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          No products found matching "{{ productSearch }}"
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>

            <!-- Product Info Display -->
            <v-row v-if="selectedProduct" class="mb-4">
              <v-col cols="12">
                <v-alert type="info" outlined>
                  <div class="d-flex align-center">
                    <div class="flex-grow-1">
                      <h4>{{ selectedProduct.pro_name }}</h4>
                      <p class="mb-0">{{ selectedProduct.pro_desc }}</p>
                    </div>
                    <div class="text-right">
                      <div><strong>Selling Price:</strong> {{ formatCurrency(selectedProduct.pro_price) }}</div>
                      <div><strong>Current Cost:</strong> {{ formatCurrency(selectedProduct.pro_cost_price || 0) }}
                      </div>
                    </div>
                  </div>
                </v-alert>
              </v-col>
            </v-row>

            <!-- Ingredients Table -->
            <v-row v-if="currentRecipe.productId">
              <v-col cols="12">
                <h4>Recipe Ingredients</h4>
                <v-data-table :headers="ingredientHeaders" :items="currentRecipe.ingredients" hide-default-footer
                  class="ingredient-builder-table">
                  <template v-slot:item.name="{ item, index }">
                    <v-text-field v-model="item.customName" dense outlined placeholder="Custom ingredient name..."
                      prepend-inner-icon="mdi-tag" @input="generateIngredientName(index)"></v-text-field>
                  </template>

                  <template v-slot:item.ingredientId="{ item, index }">
                    <v-autocomplete v-model="item.ingredientId" :items="getAvailableIngredients(index)"
                      item-text="pro_name" item-value="id" label="Select Ingredient" dense outlined clearable
                      :search-input.sync="ingredientSearchInputs[index]" placeholder="Search ingredients..."
                      prepend-inner-icon="mdi-leaf" @change="updateIngredientName(index)"
                      :key="`ingredient-${index}-${item.ingredientId}`">
                      <template v-slot:item="{ item: ingredient }">
                        <v-list-item-avatar size="32">
                          <v-icon color="success">mdi-leaf</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{ ingredient.pro_name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            Price: {{ formatCurrency(ingredient.pro_price) }} |
                            Stock: {{ formatNumber(ingredient.pro_card_count || 0) }}
                            <span v-if="getIngredientUnit(ingredient.id)"> | Unit: {{ getIngredientUnit(ingredient.id)
                            }}</span>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-chip x-small color="success" outlined>
                            {{ ingredient._category || 'STOCK' }}
                          </v-chip>
                        </v-list-item-action>
                      </template>
                      <template v-slot:selection="{ item: ingredient }">
                        <v-chip small color="success" outlined>
                          <v-icon left x-small>mdi-leaf</v-icon>
                          {{ ingredient.pro_name }}
                        </v-chip>
                      </template>
                      <template v-slot:no-data>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              No ingredients found matching "{{ ingredientSearchInputs[index] || '' }}"
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </template>
                    </v-autocomplete>
                  </template>

                  <template v-slot:item.quantity="{ item }">
                    <v-text-field v-model.number="item.quantity" type="number" step="0.01" min="0" dense outlined
                      placeholder="0.00" @input="calculateTotalCost"></v-text-field>
                  </template>

                  <template v-slot:item.unitId="{ item, index }">
                    <v-text-field :value="getAutoSelectedUnitName(item.ingredientId)" label="Unit (Auto)" dense outlined
                      readonly disabled
                      :hint="item.ingredientId ? 'Auto-selected from ingredient' : 'Select ingredient first'"
                      persistent-hint prepend-inner-icon="mdi-scale">
                    </v-text-field>
                  </template>

                  <template v-slot:item.unitCost="{ item }">
                    <span class="font-weight-medium">{{ formatCurrency(getIngredientPrice(item.ingredientId)) }}</span>
                  </template>

                  <template v-slot:item.totalCost="{ item }">
                    <strong class="primary--text">{{ formatCurrency(getIngredientPrice(item.ingredientId) *
                      (item.quantity || 0)) }}</strong>
                  </template>

                  <template v-slot:item.actions="{ index }">
                    <v-btn icon small color="error" @click="removeIngredient(index)">
                      <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                </v-data-table>

                <!-- Add Ingredient Button -->
                <v-btn color="primary" text @click="addIngredient" class="mt-2">
                  <v-icon left>mdi-plus</v-icon>
                  Add Ingredient
                </v-btn>
              </v-col>
            </v-row>

            <!-- Cost Summary -->
            <v-row v-if="currentRecipe.ingredients.length > 0" class="mt-4">
              <v-col cols="12">
                <v-alert type="success" outlined>
                  <div class="cost-summary">
                    <div class="d-flex justify-space-between align-center">
                      <div>
                        <strong>Total Recipe Cost:</strong>
                        <span class="text-h6 primary--text ml-2">{{ formatCurrency(totalRecipeCost) }}</span>
                      </div>
                      <div v-if="selectedProduct" class="text-right">
                        <strong>Profit Margin:</strong>
                        <span :class="profitMargin >= 0 ? 'success--text text-h6' : 'error--text text-h6'" class="ml-2">
                          {{ formatCurrency(profitMargin) }}
                        </span>
                        <br>
                        <small class="">
                          ({{ Math.round((profitMargin / (selectedProduct.pro_price || 1)) * 100) }}% margin)
                        </small>
                      </div>
                    </div>
                  </div>
                </v-alert>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="closeDialog">Cancel</v-btn>
            <v-btn color="primary" :loading="saving" :disabled="!formValid || currentRecipe.ingredients.length === 0"
              @click="saveRecipe">
              {{ isEditing ? 'Update Recipe' : 'Create Recipe' }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- Bulk Create Dialog -->
    <v-dialog v-model="bulkDialog" max-width="900px" persistent>
      <v-card>
        <v-card-title class="dialog-title">
          <v-icon class="mr-2">mdi-upload</v-icon>
          Bulk Add Recipes
        </v-card-title>

        <v-card-text>
          <!-- Recipe Name for Bulk -->
          <v-row class="mb-4">
            <v-col cols="12">
              <v-text-field v-model="bulkRecipes.recipeName" label="Recipe Name" :rules="[rules.required]" outlined
                prepend-inner-icon="mdi-tag" placeholder="Enter a name for this recipe..."
                hint="This name will be used as the base for all ingredients" persistent-hint></v-text-field>
            </v-col>
          </v-row>

          <v-autocomplete v-model="bulkRecipes.productId" :items="finishedProducts" item-text="pro_name" item-value="id"
            label="Select Product" :rules="[rules.required]" outlined class="mb-4" placeholder="Search products..."
            prepend-inner-icon="mdi-magnify">
            <template v-slot:item="{ item }">
              <v-list-item-content>
                <v-list-item-title>{{ item.pro_name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.pro_desc }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>

          <v-data-table :headers="bulkHeaders" :items="bulkRecipes.recipes" hide-default-footer class="bulk-table">
            <template v-slot:item.name="{ item, index }">
              <v-text-field v-model="item.customName" dense outlined placeholder="Custom ingredient name..."
                @input="generateBulkIngredientName(index)"></v-text-field>
            </template>

            <template v-slot:item.ingredientId="{ item, index }">
              <v-autocomplete v-model="item.ingredientId" :items="stockItems" item-text="pro_name" item-value="id" dense
                placeholder="Search ingredients..."
                @change="updateBulkRecipe(index, 'ingredientId', item.ingredientId)">
                <template v-slot:item="{ item: ingredient }">
                  <v-list-item-content>
                    <v-list-item-title>{{ ingredient.pro_name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ ingredient.pro_desc }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </template>

            <template v-slot:item.quantity="{ item, index }">
              <v-text-field v-model.number="item.quantity" type="number" step="0.01" dense placeholder="0.00"
                @input="updateBulkRecipe(index, 'quantity', item.quantity)"></v-text-field>
            </template>

            <template v-slot:item.unitId="{ item, index }">
              <v-text-field :value="getBulkAutoSelectedUnitName(item.ingredientId)" dense readonly disabled
                placeholder="Auto unit"></v-text-field>
            </template>

            <template v-slot:item.actions="{ index }">
              <v-btn icon small color="error" @click="removeBulkRecipe(index)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>

          <v-btn color="primary" text @click="addBulkRecipe" class="mt-2">
            <v-icon left>mdi-plus</v-icon>
            Add Row
          </v-btn>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeBulkDialog">Cancel</v-btn>
          <v-btn color="primary" :loading="saving"
            :disabled="!bulkRecipes.productId || !bulkRecipes.recipeName || bulkRecipes.recipes.length === 0"
            @click="saveBulkRecipes">
            Create Recipes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- View Recipe Dialog -->
    <v-dialog v-model="viewDialog" max-width="500px">
      <v-card v-if="selectedRecipe">
        <v-card-title class="dialog-title">
          <v-icon class="mr-2">mdi-eye</v-icon>
          Recipe Details
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Name</v-list-item-title>
                <v-list-item-subtitle>{{ selectedRecipe.name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Product</v-list-item-title>
                <v-list-item-subtitle>{{ selectedRecipe.product?.pro_name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Ingredient</v-list-item-title>
                <v-list-item-subtitle>{{ selectedRecipe.ingredient?.pro_name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Quantity</v-list-item-title>
                <v-list-item-subtitle>
                  {{ formatNumber(selectedRecipe.quantity) }}
                  {{ selectedRecipe.unit?.symbol || '' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Cost per Unit</v-list-item-title>
                <v-list-item-subtitle>
                  {{ formatCurrency((selectedRecipe.ingredient?.pro_price || 0) * selectedRecipe.quantity) }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Created</v-list-item-title>
                <v-list-item-subtitle>{{ formatDate(selectedRecipe.createdAt) }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="viewDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400px">
      <v-card>
        <v-card-title class="dialog-title error--text">
          <v-icon color="error" class="mr-2">mdi-delete</v-icon>
          Confirm Delete
        </v-card-title>

        <v-card-text>
          Are you sure you want to delete this recipe?
          <br><br>
          <strong>{{ recipeToDelete?.name }}</strong>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" :loading="deleting" @click="confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'RecipeManagement',

  data() {
    return {
      // Loading states
      loading: false,
      saving: false,
      deleting: false,

      // Search inputs
      productSearch: '',
      ingredientSearchInputs: [],

      // Pre-selection state
      productPreSelected: false,

      // Data
      recipes: [],
      products: [],
      finishedProducts: [], // Products that can have recipes (non-stock)
      stockItems: [], // Products that are ingredients (stock)
      units: [],
      statistics: [
        { label: 'Total Recipes', value: 0, icon: 'mdi-book-open', color: 'primary' },
        { label: 'Products', value: 0, icon: 'mdi-package', color: 'primary' },
        { label: 'Ingredients', value: 0, icon: 'mdi-leaf', color: 'primary' },
        { label: 'Avg Ingredients', value: 0, icon: 'mdi-chart-line', color: 'primary' }
      ],

      // Pagination
      options: {},
      totalItems: 0,

      // Filters
      filters: {
        productId: null,
        ingredientId: null,
        search: ''
      },

      // Dialogs
      recipeDialog: false,
      bulkDialog: false,
      viewDialog: false,
      deleteDialog: false,

      // Forms
      formValid: false,
      isEditing: false,
      currentRecipe: this.getEmptyRecipe(),
      selectedRecipe: null,
      recipeToDelete: null,
      selectedProduct: null,
      totalRecipeCost: 0,

      // Ingredient builder
      ingredientHeaders: [
        { text: 'Custom Name', value: 'name', width: '20%' },
        { text: 'Ingredient', value: 'ingredientId', width: '25%' },
        { text: 'Quantity', value: 'quantity', width: '15%' },
        { text: 'Unit', value: 'unitId', width: '15%' },
        { text: 'Unit Cost', value: 'unitCost', width: '15%' },
        { text: 'Total Cost', value: 'totalCost', width: '15%' },
        { text: 'Actions', value: 'actions', width: '10%', sortable: false }
      ],

      // Bulk creation
      bulkRecipes: {
        recipeName: '',
        productId: null,
        recipes: []
      },

      // Table headers
      headers: [
        { text: 'Name', value: 'name', width: '200px' },
        { text: 'Product', value: 'product', width: '200px', sortable: false },
        { text: 'Ingredient', value: 'ingredient', width: '200px', sortable: false },
        { text: 'Quantity', value: 'quantity', width: '120px', align: 'center' },
        { text: 'Cost', value: 'cost', width: '120px', align: 'right', sortable: false },
        { text: 'Actions', value: 'actions', width: '150px', sortable: false, align: 'center' }
      ],

      bulkHeaders: [
        { text: 'Custom Name', value: 'name', width: '25%' },
        { text: 'Ingredient', value: 'ingredientId', width: '30%' },
        { text: 'Quantity', value: 'quantity', width: '15%' },
        { text: 'Unit', value: 'unitId', width: '15%' },
        { text: 'Actions', value: 'actions', width: '15%', sortable: false }
      ],

      // Validation rules
      rules: {
        required: value => !!value || 'This field is required',
        positiveNumber: value => (value > 0) || 'Must be greater than 0'
      },

      // Debounced search
      debounceSearch: null
    }
  },

  computed: {
    profitMargin() {
      if (!this.selectedProduct) return 0
      return (this.selectedProduct.pro_price || 0) - this.totalRecipeCost
    }
  },

  created() {
    this.debounceSearch = debounce(this.loadRecipes, 500)
    this.loadInitialData()
  },

  methods: {
    async loadInitialData() {
      try {
        await Promise.all([
          this.loadProducts(),
          this.loadUnits(),
          this.loadStatistics()
        ])
        await this.loadRecipes()
      } catch (error) {
        this.$toast.error('Error loading initial data')
        console.error(error)
      }
    },

    async loadProducts() {
      try {
        const response = await this.$axios.get('/api/product/find/active')
        const productData = response.data.data || response.data
        this.products = Array.isArray(productData.products) ? productData.products : (Array.isArray(productData) ? productData : [])

        // Separate products by category
        this.finishedProducts = this.products.filter(p =>
          p._category != 'stock'
        )
        this.stockItems = this.products.filter(p =>
          p._category === 'stock'
        )
      } catch (error) {
        console.error('Error loading products:', error)
        this.products = []
        this.finishedProducts = []
        this.stockItems = []
      }
    },

    // NEW: Get ingredient unit information
    getIngredientUnit(ingredientId) {
      const ingredient = this.stockItems.find(item => item.id === ingredientId)
      if (!ingredient || !ingredient.stockUnitId) return null

      const unit = this.units.find(u => u.id === ingredient.stockUnitId)
      return unit ? unit.symbol || unit.name : null
    },

    // NEW: Get auto-selected unit name for display
    getAutoSelectedUnitName(ingredientId) {
      if (!ingredientId) return 'Select ingredient first'

      const ingredient = this.stockItems.find(item => item.id === ingredientId)
      if (!ingredient || !ingredient.stockUnitId) return 'No unit defined'

      const unit = this.units.find(u => u.id === ingredient.stockUnitId)
      return unit ? `${unit.name} (${unit.symbol || ''})` : 'Unknown unit'
    },

    // NEW: Get auto-selected unit for bulk operations
    getBulkAutoSelectedUnitName(ingredientId) {
      if (!ingredientId) return ''
      return this.getAutoSelectedUnitName(ingredientId)
    },

    // NEW: Auto-select unit based on ingredient
    autoSelectIngredientUnit(index) {
      const ingredient = this.currentRecipe.ingredients[index]
      if (!ingredient.ingredientId) {
        ingredient.unitId = null
        return
      }

      const stockItem = this.stockItems.find(item => item.id === ingredient.ingredientId)
      if (stockItem && stockItem.stockUnitId) {
        ingredient.unitId = stockItem.stockUnitId
        console.log(`Auto-selected unit ${stockItem.stockUnitId} for ingredient ${stockItem.pro_name}`)
      } else {
        ingredient.unitId = null
        console.log(`No unit defined for ingredient ${stockItem?.pro_name || 'unknown'}`)
      }
    },

    // NEW: Auto-select unit for bulk operations
    autoSelectBulkIngredientUnit(index) {
      const recipe = this.bulkRecipes.recipes[index]
      if (!recipe.ingredientId) {
        recipe.unitId = null
        return
      }

      const stockItem = this.stockItems.find(item => item.id === recipe.ingredientId)
      if (stockItem && stockItem.stockUnitId) { // Fixed: was unitId
        recipe.unitId = stockItem.stockUnitId
      } else {
        recipe.unitId = null
      }
    },

    onProductChange() {
      this.selectedProduct = this.finishedProducts.find(p => p.id === this.currentRecipe.productId)
      this.productSearch = '' // Clear search after selection

      // Auto-generate recipe name if not manually set
      if (!this.currentRecipe.recipeName && this.selectedProduct) {
        this.currentRecipe.recipeName = `${this.selectedProduct.pro_name} Recipe`
      }

      this.calculateTotalCost()
    },

    addIngredient() {
      const index = this.currentRecipe.ingredients.length
      this.currentRecipe.ingredients.push({
        ingredientId: null,
        quantity: null,
        unitId: null,
        customName: '',
        name: ''
      })
      // Initialize search input for new ingredient
      this.$nextTick(() => {
        this.$set(this.ingredientSearchInputs, index, '')
      })
    },

    removeIngredient(index) {
      this.currentRecipe.ingredients.splice(index, 1)
      this.ingredientSearchInputs.splice(index, 1)
      this.calculateTotalCost()
    },

    updateIngredientName(index) {
      const ingredient = this.stockItems.find(item =>
        item.id === this.currentRecipe.ingredients[index].ingredientId
      )
      if (ingredient) {
        // Auto-generate name if custom name is not provided
        if (!this.currentRecipe.ingredients[index].customName) {
          this.currentRecipe.ingredients[index].name = `${this.selectedProduct?.pro_name} - ${ingredient.pro_name}`
        }

        // NEW: Auto-select unit based on ingredient
        this.autoSelectIngredientUnit(index)
      }
      // Clear search input after selection using $nextTick for proper reactive update
      this.$nextTick(() => {
        this.$set(this.ingredientSearchInputs, index, '')
      })
      this.calculateTotalCost()
    },

    generateIngredientName(index) {
      const ingredient = this.currentRecipe.ingredients[index]
      const selectedIngredient = this.stockItems.find(item => item.id === ingredient.ingredientId)

      if (ingredient.customName) {
        // Use custom name if provided
        ingredient.name = ingredient.customName
      } else if (selectedIngredient) {
        // Auto-generate name
        ingredient.name = `${this.selectedProduct?.pro_name} - ${selectedIngredient.pro_name}`
      }
    },

    // Fixed method to get available ingredients for each row
    getAvailableIngredients(currentIndex) {
      // Get all selected ingredient IDs except for the current row
      const selectedIds = this.currentRecipe.ingredients
        .map((ing, index) => index !== currentIndex ? ing.ingredientId : null)
        .filter(id => id !== null)

      // Return all stock items that aren't selected in other rows
      return this.stockItems.filter(item =>
        !selectedIds.includes(item.id)
      )
    },

    clearSearchInput(index) {
      this.$set(this.ingredientSearchInputs, index, '')
    },

    getIngredientPrice(ingredientId) {
      const ingredient = this.stockItems.find(item => item.id === ingredientId)
      return ingredient ? (ingredient.pro_price || 0) : 0
    },

    calculateTotalCost() {
      this.totalRecipeCost = this.currentRecipe.ingredients.reduce((total, ingredient) => {
        const price = this.getIngredientPrice(ingredient.ingredientId)
        return total + (price * (ingredient.quantity || 0))
      }, 0)
    },

    async loadUnits() {
      try {
        const response = await this.$axios.get('/api/unit/find')
        this.units = response.data.data || response.data
      } catch (error) {
        console.error('Error loading units:', error)
      }
    },

    async loadRecipes() {
      this.loading = true
      try {
        const { page = 1, itemsPerPage = 10, sortBy = [], sortDesc = [] } = this.options

        const params = {
          page,
          limit: itemsPerPage,
          ...(this.filters.productId && { productId: this.filters.productId }),
          ...(this.filters.ingredientId && { ingredientId: this.filters.ingredientId }),
          ...(this.filters.search && { search: this.filters.search }),
          ...(sortBy.length && { sortBy: sortBy[0] }),
          ...(sortDesc.length && { sortOrder: sortDesc[0] ? 'DESC' : 'ASC' })
        }

        const response = await this.$axios.get('/api/recipes', { params })

        if (response.data.success) {
          this.recipes = response.data.data.recipes
          this.totalItems = response.data.data.pagination.totalItems
        }
      } catch (error) {
        this.$toast.error('Error loading recipes')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async loadStatistics() {
      try {
        const response = await this.$axios.get('/api/recipes/stats')
        if (response.data.success) {
          const stats = response.data.data
          this.statistics[0].value = stats.totalRecipes
          this.statistics[1].value = stats.totalProducts
          this.statistics[2].value = stats.totalIngredients
          this.statistics[3].value = stats.averageIngredientsPerProduct.toFixed(1)
        }
      } catch (error) {
        console.error('Error loading statistics:', error)
      }
    },

    openCreateDialog() {
      this.isEditing = false
      this.currentRecipe = this.getEmptyRecipe()
      this.selectedProduct = null
      this.totalRecipeCost = 0
      this.productSearch = ''
      this.ingredientSearchInputs = []
      this.productPreSelected = false
      this.recipeDialog = true
    },

    // NEW: Open create dialog with pre-selected product
    openCreateDialogWithProduct(product) {
      this.isEditing = false
      this.selectedProduct = product
      this.productPreSelected = true

      // Set up the form with pre-selected product
      this.currentRecipe = {
        recipeName: `${product.pro_name} Recipe`,
        productId: product.id,
        ingredients: []
      }

      // Clear search inputs
      this.productSearch = ''
      this.ingredientSearchInputs = []
      this.totalRecipeCost = 0

      // Open the dialog
      this.recipeDialog = true

      // Show success message
      this.$toast.info(`Creating recipe for ${product.pro_name}`)
    },

    // NEW: Open edit dialog for specific recipe
    openEditDialog(recipe) {
      this.editRecipe(recipe)
    },

    async openMaintainDialog(product) {
      this.isEditing = false // We'll use bulk create/update logic
      this.selectedProduct = product
      this.productPreSelected = true

      this.loading = true
      try {
        const response = await this.$axios.get(`/api/recipes/product/${product.id}`)
        const existingRecipes = response.data.data.recipes || []

        this.currentRecipe = {
          recipeName: existingRecipes.length > 0 ? existingRecipes[0].name : `${product.pro_name} Recipe`,
          productId: product.id,
          ingredients: existingRecipes.map(r => ({
            id: r.id, // Keep ID for potential updates if needed
            ingredientId: r.ingredientId,
            quantity: r.quantity,
            unitId: r.unitId,
            customName: r.name.includes(' - ') ? r.name.split(' - ').slice(1).join(' - ') : r.name,
            name: r.name
          }))
        }

        // If no ingredients, add one empty row
        if (this.currentRecipe.ingredients.length === 0) {
          this.addIngredient()
        }

        this.ingredientSearchInputs = this.currentRecipe.ingredients.map(() => '')
        this.calculateTotalCost()
        this.recipeDialog = true
      } catch (error) {
        this.$toast.error('Error loading product recipe')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async editRecipe(recipe) {
      // For maintaining a unified recipe, we redirect to openMaintainDialog
      const product = recipe.product || { id: recipe.productId, pro_name: recipe.name.split(' - ')[0] }
      this.openMaintainDialog(product)
    },

    viewRecipe(recipe) {
      this.selectedRecipe = recipe
      this.viewDialog = true
    },

    deleteRecipe(recipe) {
      this.recipeToDelete = recipe
      this.deleteDialog = true
    },

    async confirmDelete() {
      this.deleting = true
      try {
        const response = await this.$axios.delete(`/api/recipes/${this.recipeToDelete.id}`)
        if (response.data.success) {
          this.$toast.success('Recipe deleted successfully')
          await this.loadRecipes()
          await this.loadStatistics()
        }
      } catch (error) {
        this.$toast.error('Error deleting recipe')
        console.error(error)
      } finally {
        this.deleting = false
        this.deleteDialog = false
      }
    },

    async saveRecipe() {
      if (!this.$refs.recipeForm.validate()) return

      if (this.currentRecipe.ingredients.length === 0) {
        this.$toast.warning('Please add at least one ingredient')
        return
      }

      // Validate all ingredients have required fields
      const invalidIngredients = this.currentRecipe.ingredients.filter(ing =>
        !ing.ingredientId || !ing.quantity || ing.quantity <= 0
      )

      if (invalidIngredients.length > 0) {
        this.$toast.warning('Please fill all ingredient details')
        return
      }

      this.saving = true
      try {
        if (this.isEditing) {
          await this.updateSingleRecipe()
        } else {
          // Create or Update recipe entries using bulk create (which should handle clearing old ones if implemented that way)
          const bulkData = {
            recipeName: this.currentRecipe.recipeName,
            productId: this.currentRecipe.productId,
            recipes: this.currentRecipe.ingredients.map(ingredient => ({
              name: ingredient.name || ingredient.customName || `${this.selectedProduct?.pro_name} - ${this.getIngredientName(ingredient.ingredientId)}`,
              ingredientId: ingredient.ingredientId,
              quantity: ingredient.quantity,
              unitId: ingredient.unitId
            }))
          }

          // We use the bulk endpoint which should handle the "Maintain" logic (Overwriting or Syncing)
          const response = await this.$axios.post('/api/recipes/bulk', bulkData)

          if (response.data.success) {
            this.$toast.success(`Recipe for "${this.selectedProduct?.pro_name}" updated successfully`)
            await this.loadRecipes()
            await this.loadStatistics()
            this.closeDialog()
          }
        }
      } catch (error) {
        const message = error.response?.data?.message || 'Error saving recipe'
        this.$toast.error(message)
        console.error(error)
      } finally {
        this.saving = false
      }
    },

    async updateSingleRecipe() {
      try {
        // Since we're editing a single recipe record, we only update the first ingredient
        const ingredient = this.currentRecipe.ingredients[0]

        const updateData = {
          name: ingredient.name || ingredient.customName || this.currentRecipe.recipeName,
          productId: this.currentRecipe.productId,
          ingredientId: ingredient.ingredientId,
          quantity: ingredient.quantity,
          unitId: ingredient.unitId // Use auto-selected or existing unit
        }

        const response = await this.$axios.put(`/api/recipes/${this.selectedRecipe.id}`, updateData)

        if (response.data.success) {
          this.$toast.success('Recipe updated successfully')
          await this.loadRecipes()
          await this.loadStatistics()
          this.closeDialog()
        }
      } catch (error) {
        const message = error.response?.data?.message || 'Error updating recipe'
        this.$toast.error(message)
        console.error(error)
      }
    },

    getIngredientName(ingredientId) {
      const ingredient = this.stockItems.find(item => item.id === ingredientId)
      return ingredient ? ingredient.pro_name : 'Unknown'
    },

    closeDialog() {
      this.recipeDialog = false
      this.$refs.recipeForm?.reset()
      this.currentRecipe = this.getEmptyRecipe()
      this.selectedProduct = null
      this.totalRecipeCost = 0
      this.productSearch = ''
      this.ingredientSearchInputs = []
      this.productPreSelected = false
      this.$emit('close') // Signal to parent to close the dialog
    },

    // Bulk operations
    openBulkDialog() {
      this.bulkRecipes = {
        recipeName: '',
        productId: null,
        recipes: [this.getEmptyBulkRecipe()]
      }
      this.bulkDialog = true
    },

    addBulkRecipe() {
      this.bulkRecipes.recipes.push(this.getEmptyBulkRecipe())
    },

    removeBulkRecipe(index) {
      this.bulkRecipes.recipes.splice(index, 1)
    },

    updateBulkRecipe(index, field, value) {
      this.bulkRecipes.recipes[index][field] = value

      // Auto-generate name if ingredient is selected and no custom name
      if (field === 'ingredientId' && value) {
        const ingredient = this.stockItems.find(ing => ing.id === value)
        const product = this.finishedProducts.find(prod => prod.id === this.bulkRecipes.productId)
        if (ingredient && product && !this.bulkRecipes.recipes[index].customName) {
          this.bulkRecipes.recipes[index].name = `${this.bulkRecipes.recipeName} - ${ingredient.pro_name}`
        }

        // NEW: Auto-select unit for bulk operations
        this.autoSelectBulkIngredientUnit(index)
      }
    },

    generateBulkIngredientName(index) {
      const recipe = this.bulkRecipes.recipes[index]
      const selectedIngredient = this.stockItems.find(item => item.id === recipe.ingredientId)

      if (recipe.customName) {
        // Use custom name if provided
        recipe.name = recipe.customName
      } else if (selectedIngredient && this.bulkRecipes.recipeName) {
        // Auto-generate name
        recipe.name = `${this.bulkRecipes.recipeName} - ${selectedIngredient.pro_name}`
      }
    },

    async saveBulkRecipes() {
      this.saving = true
      try {
        const response = await this.$axios.post('/api/recipes/bulk', this.bulkRecipes)

        if (response.data.success) {
          this.$toast.success(`Recipe "${this.bulkRecipes.recipeName}" with ${response.data.data.createdCount} ingredients created successfully`)
          await this.loadRecipes()
          await this.loadStatistics()
          this.closeBulkDialog()
        }
      } catch (error) {
        const message = error.response?.data?.message || 'Error creating bulk recipes'
        this.$toast.error(message)
        console.error(error)
      } finally {
        this.saving = false
      }
    },

    closeBulkDialog() {
      this.bulkDialog = false
      this.bulkRecipes = {
        recipeName: '',
        productId: null,
        recipes: []
      }
    },

    // Utility methods
    getEmptyRecipe() {
      return {
        recipeName: '',
        productId: null,
        ingredients: []
      }
    },

    getEmptyBulkRecipe() {
      return {
        name: '',
        customName: '',
        ingredientId: null,
        quantity: null,
        unitId: null
      }
    },

    // Updated formatting methods with thousand separators
    formatCurrency(amount) {
      return parseFloat(amount || 0).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },

    formatNumber(amount) {
      const num = parseFloat(amount || 0)
      return num.toLocaleString('en-US', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
      })
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.recipe-management {
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  min-height: 120px;
  flex-wrap: nowrap;
}

.header-content {
  flex: 1;
  min-width: 0;
  color: white;
}

.page-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: visible;
}

.page-subtitle {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 16px;
  white-space: nowrap;
}

.header-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.stat-card {
  transition: transform 0.2s ease;
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.stat-label {
  color: #666;
  margin: 4px 0 0 0;
  font-size: 14px;
}

.filter-card {
  background: #f8f9fa;
}

.filter-title {
  color: white;
  font-weight: 600;
}

.product-info,
.ingredient-info {
  min-height: 40px;
}

.quantity-info {
  text-align: center;
  font-weight: 600;
}

.quantity-unit {
  color: #666;
  font-size: 12px;
  margin-left: 4px;
}

.cost-info {
  text-align: right;
}

.cost-value {
  color: var(--v-primary-base);
  font-family: monospace;
}

.action-buttons {
  display: flex;
  gap: 4px;
  justify-content: center;
}

.dialog-title {
  background: var(--v-primary-base);
  color: white;
  font-weight: 600;
}

.bulk-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.ingredient-builder-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

/* Auto-unit field styling */
.v-text-field--outlined.v-text-field--disabled {
  background-color: #f5f5f5;
}

.v-text-field--outlined.v-text-field--disabled .v-label {
  color: #757575 !important;
}

/* Responsive Design */
@media (max-width: 960px) {
  .page-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    min-height: auto;
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
    justify-content: center;
  }

  .page-subtitle {
    text-align: center;
  }

  .header-actions {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .recipe-management {
    padding: 16px;
  }

  .page-title {
    font-size: 20px;
    flex-direction: column;
    gap: 8px;
  }

  .header-actions {
    flex-direction: column;
    width: 100%;
  }

  .action-buttons {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .page-title {
    white-space: normal;
  }

  .page-subtitle {
    white-space: normal;
  }
}
</style>

<style scoped>
.recipe-management {
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  background: var(--v-primary-base);
  color: white;
  border-radius: 8px;
  min-height: 120px;
  /* Ensure minimum height */
  flex-wrap: nowrap;
  /* Prevent wrapping on larger screens */
}

.header-content {
  flex: 1;
  min-width: 0;
  /* Allow content to shrink if needed */
}

.page-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
  /* Prevent title from wrapping */
  overflow: visible;
  /* Ensure text is visible */
}

.page-subtitle {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 16px;
  white-space: nowrap;
  /* Prevent subtitle from wrapping */
}

.header-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  /* Prevent buttons from shrinking */
}

.stat-card {
  transition: transform 0.2s ease;
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.stat-label {
  color: #666;
  margin: 4px 0 0 0;
  font-size: 14px;
}

.filter-card {
  background: #f8f9fa;
}

.filter-title {
  background: var(--v-primary-base);
  color: white;
  font-weight: 600;
}

.product-info,
.ingredient-info {
  min-height: 40px;
}

.quantity-info {
  text-align: center;
  font-weight: 600;
}

.quantity-unit {
  color: #666;
  font-size: 12px;
  margin-left: 4px;
}

.cost-info {
  text-align: right;
}

.cost-value {
  color: var(--v-primary-base);
  font-family: monospace;
}

.action-buttons {
  display: flex;
  gap: 4px;
  justify-content: center;
}

.dialog-title {
  background: var(--v-primary-base);
  color: white;
  font-weight: 600;
}

.bulk-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.ingredient-builder-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

/* Responsive Design */
@media (max-width: 960px) {
  .page-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    min-height: auto;
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
    justify-content: center;
  }

  .page-subtitle {
    text-align: center;
  }

  .header-actions {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .recipe-management {
    padding: 16px;
  }

  .page-header {
    padding: 16px;
  }

  .page-title {
    font-size: 20px;
    flex-direction: column;
    gap: 8px;
  }

  .header-actions {
    flex-direction: column;
    width: 100%;
  }

  .action-buttons {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .page-title {
    white-space: normal;
    /* Allow wrapping on very small screens */
  }

  .page-subtitle {
    white-space: normal;
    /* Allow wrapping on very small screens */
  }
}
</style>