<template>
  <v-container fluid class="pa-0 fill-height">
    <!-- Print Dialog -->
    <PrintTicketDialog
      :show="showCustomerPrint"
      :ticket="selectedTicket"
      :restaurant-info="restaurantConfig"
      @close="closePrintDialog"
      @printed="onPrintSuccess"
    />

    <!-- Notes Dialog Component -->
    <NotesDialog
      :show="showNotesDialog"
      :notes="orderNotes"
      :existing-notes="currentTicket?.notes"
      title="Add Notes to Order"
      label="Order Notes"
      placeholder="Enter any special instructions or notes for this order..."
      hint="These notes will be saved with the ticket"
      :max-length="500"
      :show-quick-notes="true"
      :quick-notes="quickNotes"
      :loading="savingNotes"
      @close="closeNotesDialog"
      @save="handleSaveNotes"
      @show-message="showMessage"
    />

    <!-- Payment Dialog -->
    <PaymentDialog
      :show="showPaymentDialog"
      :table-number="tableId"
      :ticket-id="existingTicket?.id || currentTicket?.id || null"
      :amount="paymentAmount"
      :payment-methods="paymentList"
      :payment-loading="paymentLoading"
      :action-loading="actionLoading"
      :enable-q-r="true"
      :show-q-r-details="false"
      @close="closePaymentDialog"
      @confirm-payment="handlePaymentConfirm"
      @reload-payment-methods="loadPaymentMethods"
      @show-message="showMessage"
    />

    <!-- ✅ NEW: Price Override Dialog -->
    <v-dialog v-model="showPriceOverrideDialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-cash-edit</v-icon>
          Price Selection & Override
        </v-card-title>

        <v-card-text class="pt-4">
          <!-- Product Info -->
          <v-alert color="info" text dense class="mb-3">
            <div class="font-weight-bold">{{ selectedProduct?.pro_name }}</div>
            <div class="caption">
              Base Price: {{ formatPrice(selectedProduct?.pro_price) }}
            </div>
            <div v-if="selectedCustomer && selectedCustomer.grade" class="caption">
              Customer Grade: {{ selectedCustomer.grade }}
            </div>
          </v-alert>

          <!-- Current Customer Grade Price (if available) -->
          <v-alert 
            v-if="getCustomerGradePrice(selectedProduct)"
            color="success" 
            text 
            dense 
            class="mb-3"
          >
            <div class="font-weight-bold">
              Grade {{ selectedCustomer.grade }} Price: {{ formatPrice(getCustomerGradePrice(selectedProduct)) }}
            </div>
            <div class="caption">
              This price will be used automatically
            </div>
          </v-alert>

          <!-- Price List Selection -->
          <v-select
            v-if="getProductPriceLists(selectedProduct).length > 0"
            v-model="selectedPriceListId"
            :items="getPriceListOptions(selectedProduct)"
            item-text="label"
            item-value="id"
            label="Select Price Grade"
            outlined
            dense
            clearable
            @change="onPriceListSelection"
            class="mb-3"
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-tag-multiple</v-icon>
            </template>
            <template v-slot:item="{ item }">
              <div
                class="d-flex justify-space-between align-center"
                style="width: 100%"
              >
                <span>
                  <v-chip
                    x-small
                    :color="getGradeColor(item.grade)"
                    class="mr-2"
                  >
                    {{ item.grade }}
                  </v-chip>
                  {{ item.label }}
                </span>
                <span class="font-weight-bold primary--text">
                  {{ formatPrice(item.price) }}
                </span>
              </div>
            </template>
          </v-select>

          <!-- Current Effective Price Display -->
          <div
            class="text-center mb-3 pa-3"
            style="background: #f5f5f5; border-radius: 8px"
          >
            <div class="caption grey--text">Current Price</div>
            <div class="text-h5 primary--text font-weight-bold">
              {{ formatPrice(effectivePriceInDialog) }}
            </div>
            <div v-if="selectedPriceListId" class="caption success--text">
              <v-icon x-small color="success">mdi-tag</v-icon>
              Price list applied
            </div>
            <div v-else-if="getCustomerGradePrice(selectedProduct)" class="caption success--text">
              <v-icon x-small color="success">mdi-account</v-icon>
              Customer grade price applied
            </div>
          </div>

          <v-divider class="my-3"></v-divider>

          <!-- Custom Price Override -->
          <div class="text-subtitle-2 mb-2">
            <v-icon small class="mr-1">mdi-pencil</v-icon>
            Or Enter Custom Price
          </div>

          <v-text-field
            v-model.number="customPriceInput"
            label="Custom Price"
            type="number"
            step="100"
            min="0"
            outlined
            dense
            suffix="₭"
            :rules="[
              (v) =>
                v === null || v === '' || v >= 0 || 'Price must be positive',
            ]"
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-cash</v-icon>
            </template>
          </v-text-field>

          <!-- Price Difference Alert -->
          <v-alert
            v-if="
              customPriceInput &&
              customPriceInput !== getDefaultProductPrice(selectedProduct)
            "
            type="info"
            dense
            text
            class="mb-3"
          >
            Difference from default:
            <strong>{{
              formatPriceDifference(
                customPriceInput - getDefaultProductPrice(selectedProduct)
              )
            }}</strong>
          </v-alert>

          <!-- Override Reason -->
          <v-textarea
            v-if="customPriceInput || selectedPriceListId || !getCustomerGradePrice(selectedProduct)"
            v-model="priceOverrideReason"
            label="Reason (optional)"
            outlined
            dense
            rows="2"
            counter="200"
            placeholder="Enter reason for price change..."
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-note-text</v-icon>
            </template>
          </v-textarea>
        </v-card-text>

        <v-card-actions class="px-4 pb-4">
          <v-spacer></v-spacer>
          <v-btn text @click="closePriceOverrideDialog"> Cancel </v-btn>
          <v-btn
            color="primary"
            @click="applyPriceSelection"
            :disabled="!isValidPriceSelection"
          >
            <v-icon left small>mdi-check</v-icon>
            Apply & Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Print Confirmation Dialog -->
    <v-dialog v-model="showPrintConfirmDialog" max-width="400" persistent>
      <v-card>
        <v-card-title class="headline d-flex align-center">
          <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
          Payment Successful!
        </v-card-title>

        <v-card-text class="text-center py-4">
          <v-icon size="64" color="success" class="mb-3"
            >mdi-credit-card-check</v-icon
          >
          <div class="text-h6 mb-2">
            Payment has been processed successfully
          </div>
          <div class="text-subtitle-1 mb-4">
            Amount: <strong>{{ formatPrice(paymentAmount) }}</strong>
          </div>
          <div class="text-body-1">
            Would you like to print the receipt now?
          </div>
        </v-card-text>

        <v-card-actions class="justify-center pb-4">
          <v-btn
            color="grey"
            text
            @click="handlePrintConfirmation(false)"
            class="mr-2"
          >
            <v-icon left>mdi-close</v-icon>
            No, Skip
          </v-btn>
          <v-btn
            color="primary"
            @click="handlePrintConfirmation(true)"
            class="ml-2"
          >
            <v-icon left>mdi-printer</v-icon>
            Yes, Print Receipt
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Customer Dialog -->
    <CustomerDialog
      :show="showCustomerDialog"
      :customers="customers"
      :selected-customer="selectedCustomer"
      :loading-customers="loadingCustomers"
      @close="closeCustomerDialog"
      @customer-selected="handleCustomerSelected"
      @walk-in-selected="handleWalkInSelected"
      @save-customer="handleSaveCustomer"
      @show-message="showMessage"
    />

    <!-- Main Content -->
    <v-row no-gutters class="fill-height pos-main-container">
      <!-- Left Panel - Menu -->
      <v-col cols="8" class="left-panel">
        <!-- Header with Search and Filters (FIXED) -->
        <v-card class="menu-header">
          <v-card-title class="primary white--text">
            <v-icon class="mr-2" color="white">mdi-storefront</v-icon>
            Product Menu
            <v-spacer></v-spacer>
            <!-- Table Info Display -->
            <v-chip
              color="accent"
              class="mr-2"
              v-if="tableId && tableId !== 'walk-in'"
            >
              <v-icon class="mr-1" small>mdi-table-furniture</v-icon>
              Table {{ displayTableId }}
            </v-chip>
            <v-chip v-else-if="isWalkIn" color="orange" class="mr-2">
              <v-icon class="mr-1" small>mdi-walk</v-icon>
              Walk-in
            </v-chip>
            <!-- Customer Grade Display -->
            <v-chip 
              v-if="selectedCustomer && selectedCustomer.grade" 
              :color="getGradeColor(selectedCustomer.grade)" 
              class="mr-2"
            >
              <v-icon class="mr-1" small>mdi-account-star</v-icon>
              Grade {{ selectedCustomer.grade }}
            </v-chip>
            <v-chip color="white" class="mr-2">
              <v-icon class="mr-1" small>mdi-package-variant</v-icon>
              {{ filteredProducts.length }} items
            </v-chip>
            <v-btn color="white" text @click="fetchProducts" :loading="loading">
              <v-icon class="mr-2">mdi-refresh</v-icon>
              Refresh
            </v-btn>
          </v-card-title>

          <!-- Search and Filter Row -->
          <v-card-text class="pa-3">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="searchQuery"
                  prepend-inner-icon="mdi-magnify"
                  label="Search products..."
                  outlined
                  dense
                  clearable
                  hide-details
                />
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  v-model="categoryFilter"
                  :items="categoryOptions"
                  item-text="categ_name"
                  item-value="categ_id"
                  label="Filter by Category"
                  outlined
                  dense
                  clearable
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Loading State -->
        <div v-if="loading" class="menu-loading">
          <div class="text-center">
            <v-progress-circular
              size="64"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <p class="mt-4 text-h6">Loading products...</p>
          </div>
        </div>

        <!-- Menu Items Grid (SCROLLABLE ONLY) -->
        <div v-else class="menu-content">
          <div class="pa-4">
            <v-row v-if="filteredProducts.length > 0">
              <v-col
                v-for="product in filteredProducts"
                :key="product.id"
                cols="4"
                class="pa-2"
              >
                <v-card
                  elevation="2"
                  hover
                  class="text-center pa-4 cursor-pointer product-card"
                  height="auto"
                  min-height="180"
                  :disabled="
                    (!product.isActive || product.stock_count <= 0) &&
                    product.validateStockOnSale
                  "
                  :class="{
                    'product-disabled':
                      (!product.isActive || product.stock_count <= 0) &&
                      product.validateStockOnSale,
                    'promotion-eligible': isProductInPromotion(product),
                    'customer-grade-pricing': getCustomerGradePrice(product)
                  }"
                >
                  <!-- Promotion indicator -->
                  <v-icon
                    v-if="isProductInPromotion(product)"
                    color="success"
                    class="promotion-badge"
                    small
                  >
                    mdi-tag
                  </v-icon>

                  <!-- ✅ Customer Grade Badge -->
                  <v-chip
                    v-if="getCustomerGradePrice(product)"
                    x-small
                    :color="getGradeColor(selectedCustomer.grade)"
                    text-color="white"
                    class="grade-price-badge"
                  >
                    <v-icon x-small left>mdi-account-star</v-icon>
                    Grade {{ selectedCustomer.grade }}
                  </v-chip>

                  <!-- ✅ Price List Badge (if available) -->
                  <v-chip
                    v-else-if="hasAvailablePriceLists(product)"
                    x-small
                    color="purple"
                    text-color="white"
                    class="price-list-badge"
                  >
                    <v-icon x-small left>mdi-tag-multiple</v-icon>
                    {{ getProductPriceLists(product).length }} prices
                  </v-chip>

                  <v-card-title
                    class="justify-center text-subtitle-1 pa-1"
                    style="line-height: 1.2"
                  >
                    {{ product.pro_name }}
                  </v-card-title>

                  <v-card-text class="pa-2">
                    <!-- ✅ Enhanced Price Display with Customer Grade -->
                    <div class="price-section mb-2">
                      <!-- Show customer grade price if available -->
                      <div v-if="getCustomerGradePrice(product)" class="text-center">
                        <!-- Base price (struck through) -->
                        <div class="text-body-2 grey--text text-decoration-line-through">
                          {{ formatPrice(product.pro_price) }}
                        </div>
                        <!-- Customer grade price (highlighted) -->
                        <div class="text-h5 primary--text font-weight-bold">
                          {{ formatPrice(getCustomerGradePrice(product)) }}
                        </div>
                        <!-- Grade indicator -->
                        <div class="caption success--text mt-1">
                          <v-icon x-small color="success">mdi-account-check</v-icon>
                          Grade {{ selectedCustomer.grade }} Price
                        </div>
                      </div>
                      <!-- Default price display -->
                      <div v-else>
                        <div class="text-h5 primary--text font-weight-bold">
                          {{ formatPrice(product.pro_price) }}
                        </div>
                        <!-- Show price range if price lists available -->
                        <div
                          v-if="hasAvailablePriceLists(product)"
                          class="caption grey--text"
                        >
                          {{ getPriceRangeText(product) }}
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-space-between align-center mb-2">
                      <v-chip
                        :color="getCategoryColor(product.categ_name)"
                        text-color="white"
                        x-small
                      >
                        {{ product.categ_name }}
                      </v-chip>
                      <v-chip
                        :color="getStockColor(product.stock_count)"
                        text-color="white"
                        x-small
                      >
                        {{ product.stock_count }} left
                      </v-chip>
                    </div>

                    <!-- ✅ Action Buttons -->
                    <div class="d-flex gap-1 mt-2">
                      <!-- Quick Add Button -->
                      <v-btn
                        @click.stop="addToCart(product)"
                        color="primary"
                        small
                        block
                        :disabled="
                          (!product.isActive || product.stock_count <= 0) &&
                          product.validateStockOnSale
                        "
                      >
                        <v-icon small left>mdi-cart-plus</v-icon>
                        {{ getCustomerGradePrice(product) ? 'Add (Grade)' : 'Add' }}
                      </v-btn>

                      <!-- ✅ Price Selection Button (if price lists available OR no customer grade match) -->
                      <v-btn
                        v-if="hasAvailablePriceLists(product) || !getCustomerGradePrice(product)"
                        @click.stop="openPriceSelector(product)"
                        color="purple"
                        small
                        icon
                        :disabled="
                          (!product.isActive || product.stock_count <= 0) &&
                          product.validateStockOnSale
                        "
                      >
                        <v-icon small>mdi-tag-multiple</v-icon>
                      </v-btn>
                    </div>

                    <div
                      v-if="!product.isActive"
                      class="caption mt-1 error--text font-weight-bold"
                    >
                      INACTIVE
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- No Products State -->
            <div v-else class="text-center pa-8">
              <v-icon size="64" color="grey">mdi-package-variant-closed</v-icon>
              <p class="text-h6 mt-4 grey--text">No products found</p>
              <p class="grey--text">Try adjusting your search or filters</p>
              <v-btn color="primary" @click="fetchProducts" class="mt-2">
                <v-icon left>mdi-refresh</v-icon>
                Refresh Products
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>

      <!-- Right Panel - Cart (FIXED POSITION) -->
      <v-col cols="4" class="right-panel">
        <div class="cart-container">
          <!-- Cart Header (FIXED) -->
          <v-card-title class="cart-header secondary white--text">
            <v-icon class="mr-2" color="white">mdi-cart</v-icon>
            Order Cart 
            <v-spacer></v-spacer>
            <v-chip color="white" class="accent--text">
              {{ cart.length }} items
            </v-chip>
          </v-card-title>

          <!-- Customer Section (FIXED) -->
          <div class="customer-section">
            <v-row dense align="center">
              <v-col>
                <div class="d-flex align-center">
                  <v-icon class="mr-2" color="primary">mdi-account</v-icon>
                  <div class="flex-grow-1">
                    <div class="text-subtitle-2 font-weight-medium">
                      {{ selectedCustomer?.name || 'Walk-in Customer' }}
                    </div>
                    <div class="caption grey--text">
                      <span v-if="selectedCustomer?.phone">{{ selectedCustomer.phone }}</span>
                      <span v-if="selectedCustomer?.grade" class="ml-2">
                        • Grade {{ selectedCustomer.grade }}
                      </span>
                    </div>
                  </div>
                  <v-btn @click="openCustomerDialog" icon small color="primary">
                    <v-icon small>{{
                      selectedCustomer ? 'mdi-account-edit' : 'mdi-account-plus'
                    }}</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>

          <!-- Cart Items (SCROLLABLE) -->
          <div class="cart-items-section">
            <!-- Empty State -->
            <div v-if="cart.length === 0" class="cart-empty-state">
              <v-icon size="48" color="grey lighten-1">mdi-cart-outline</v-icon>
              <p class="grey--text caption mt-2">No items in cart</p>
              <p class="grey--text caption">Add items from the menu</p>
            </div>

            <!-- Cart Items (More Compact) -->
            <div v-else class="cart-items-list">
              <v-card
                v-for="item in cart"
                :key="item.id"
                class="cart-item"
                outlined
                elevation="0"
                :class="{ 'ticket-line-item': item.isFromTicketLine }"
              >
                <!-- Product Name & Controls in one row -->
                <div class="d-flex justify-space-between align-center mb-1">
                  <div class="flex-grow-1 mr-2">
                    <div
                      class="text-subtitle-2 font-weight-medium line-clamp-1"
                    >
                      {{ getProductName(item.pro_id) }}
                    </div>
                    <div class="caption grey--text">
                      {{ item.categ_name }} •
                      {{ formatPrice(item.pro_price) }}/each
                      <!-- Show if customer grade price was used -->
                      <span v-if="item.isCustomerGradePrice" class="success--text">
                        • Grade {{ selectedCustomer?.grade }}
                      </span>
                      <!-- Show if price was overridden -->
                      <span v-else-if="item.priceOverridden" class="warning--text">
                        • Modified
                      </span>
                    </div>
                    <!-- Show indicators for ticket line items -->
                    <div
                      v-if="item.isFromTicketLine"
                      class="caption info--text"
                    >
                      <v-icon x-small color="info">mdi-history</v-icon>
                      Saved item
                    </div>
                  </div>
                  <v-btn
                    @click="removeFromCart(item.id)"
                    icon
                    x-small
                    color="error"
                  >
                    <v-icon x-small>mdi-delete</v-icon>
                  </v-btn>
                </div>

                <!-- Quantity Controls & Total -->
                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center">
                    <v-btn
                      @click="updateQuantity(item.id, -1)"
                      icon
                      x-small
                      color="grey"
                    >
                      <v-icon x-small>mdi-minus</v-icon>
                    </v-btn>
                    <span class="mx-2 font-weight-bold">{{
                      item.quantity
                    }}</span>
                    <v-btn
                      @click="updateQuantity(item.id, 1)"
                      icon
                      x-small
                      color="grey"
                      :disabled="
                        item.quantity >= item.stock_count &&
                        item.validateStockOnSale
                      "
                    >
                      <v-icon x-small>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                  <div class="font-weight-bold primary--text">
                    {{ formatPrice(item.pro_price * item.quantity) }}
                  </div>
                </div>

                <!-- Warnings (Compact) -->
                <div
                  v-if="
                    item.quantity >= item.stock_count &&
                    item.validateStockOnSale
                  "
                  class="caption error--text mt-1"
                >
                  Max stock reached
                </div>
                <div
                  v-if="item.isFromTicketLine && !item.isActive"
                  class="caption warning--text mt-1"
                >
                  <v-icon x-small color="warning">mdi-alert</v-icon>
                  Product is currently inactive
                </div>
              </v-card>
            </div>
          </div>

          <!-- Cart Summary & Actions (FIXED AT BOTTOM) -->
          <div class="cart-footer">
            <!-- Compact Cart Summary -->
            <div class="cart-summary">
              <v-card
                v-if="cart.length > 0"
                class="pa-2"
                outlined
                elevation="0"
              >
                <!-- Cart summary content -->
                <div class="d-flex justify-space-between caption mb-1">
                  <span>Total (with tax):</span>
                  <span>{{ formatPrice(getTotalPrice()) }}</span>
                </div>

                <!-- Show base amount (price without tax) -->
                <div
                  class="d-flex justify-space-between caption mb-1 text--secondary"
                >
                  <span>Base amount:</span>
                  <span>{{ formatPrice(getBaseAmount) }}</span>
                </div>

                <!-- Promotions (applied to base amount) -->
                <div v-if="appliedPromotions.length > 0">
                  <div
                    v-for="(applied, index) in appliedPromotions"
                    :key="index"
                    class="d-flex justify-space-between caption success--text"
                  >
                    <span>{{ applied.promotion.name }}:</span>
                    <span>-{{ formatPrice(applied.discount.amount) }}</span>
                  </div>
                </div>

                <!-- Tax breakdown showing actual tax amounts -->
                <div v-if="getTaxBreakdown().length > 0">
                  <div
                    v-for="taxItem in getTaxBreakdown()"
                    :key="taxItem.code"
                    class="d-flex justify-space-between caption mb-1"
                  >
                    <span
                      >{{ taxItem.name }} ({{
                        (taxItem.rate * 100).toFixed(2)
                      }}% {{ taxItem.type }}):</span
                    >
                    <span>{{ formatPrice(taxItem.taxAmount) }}</span>
                  </div>
                </div>

                <v-divider class="mb-2"></v-divider>

                <div
                  class="d-flex justify-space-between text-subtitle-1 font-weight-bold"
                >
                  <span>Final Total:</span>
                  <span class="primary--text">{{
                    formatPrice(getFinalTotal)
                  }}</span>
                </div>
              </v-card>
            </div>

            <!-- Action buttons -->
            <div v-if="cart.length > 0" class="cart-actions">
              <v-row dense no-gutters class="mb-1">
                <v-col cols="6" class="pr-1">
                  <v-btn
                    @click="openNotesDialog"
                    color="orange"
                    block
                    small
                    outlined
                  >
                    <v-icon small class="mr-1">mdi-note-plus</v-icon>
                    Notes
                  </v-btn>
                </v-col>
                <v-col cols="6" class="pl-1">
                  <v-btn
                    @click="saveTicket"
                    color="info"
                    block
                    small
                    :loading="savingTicket"
                  >
                    <v-icon small class="mr-1">mdi-content-save</v-icon>
                    Save
                  </v-btn>
                </v-col>
              </v-row>
              <v-row dense no-gutters class="mb-1">
                <v-col cols="6" class="pr-1">
                  <v-btn
                    @click="processPayment"
                    color="primary"
                    block
                    :disabled="!currentTicket"
                  >
                    <v-icon small class="mr-1">mdi-credit-card</v-icon>
                    Payment
                  </v-btn>
                </v-col>
                <v-col cols="6" class="pl-1">
                  <v-btn
                    @click="printCustomerReceipt"
                    color="green"
                    block
                    :disabled="!currentTicket"
                  >
                    <v-icon small class="mr-1">mdi-printer</v-icon>
                    Print
                  </v-btn>
                </v-col>
              </v-row>
              <v-btn @click="clearCart" color="grey" block small>
                <v-icon small class="mr-1">mdi-cart-remove</v-icon>
                Clear Cart
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Snackbar for Messages -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      top
      right
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2">{{ snackbar.icon }}</v-icon>
        {{ snackbar.message }}
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import PrintTicketDialog from '@/components/CAFE/printdialog'
import PaymentDialog from '@/components/CAFE/paymentDialogFront'
import CustomerDialog from '@/components/CAFE/customerDialog'
import NotesDialog from '~/components/tickets/NotesDialog.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    NotesDialog,
    PrintTicketDialog,
    PaymentDialog,
    CustomerDialog,
  },
  name: 'MenuPOSScreen',
  props: {
    tableId: {
      type: [String, Number],
      required: false,
      default: null,
    },
    existingTicket: {
      type: Object,
      default: null,
    },
    dialogMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPriceOverrideDialog: false,
      selectedProduct: null,
      selectedPriceListId: null,
      customPriceInput: null,
      priceOverrideReason: '',
      taxes: [], // Add taxes array to store tax configurations
      defaultTax: null, // Store default tax configuration
      promotions: [],
      appliedPromotions: [],
      loadingPromotions: false,

      // Notes related data
      showNotesDialog: false,
      orderNotes: '',
      savingNotes: false,
      quickNotes: [
        'No ice',
        'Extra spicy',
        'Less sugar',
        'Allergic to nuts',
        'Take away',
        'Urgent order',
        'VIP customer',
        'No MSG',
      ],

      // Restaurant configuration
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address:
          '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567',
      },

      // Print related
      showCustomerPrint: false,
      selectedTicket: null,
      showPrintConfirmDialog: false,

      // Cart and products
      cart: [],
      products: [],
      currentTicket: null,
      loading: false,
      savingTicket: false,

      // Search and filters
      searchQuery: '',
      categoryFilter: '',
      categoryOptions: [],

      // Payment dialog
      showPaymentDialog: false,
      paymentAmount: 0,
      actionLoading: false,
      paymentLoading: false,
      paymentList: [],

      // Customer management
      customers: [],
      selectedCustomer: null,
      showCustomerDialog: false,
      loadingCustomers: false,

      // Snackbar
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check-circle',
        timeout: 4000,
      },

      // Auto-save timeout
      autoSaveTimeout: null,
    }
  },

  computed: {
    ...mapGetters([
      'findAllTerminal',
      'findSelectedTerminal',
      'currentSelectedLocation',
      'findAllLocation',
    ]),
      currentTerminal() {
      console.log(
        `ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`
      )
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },
    user() {
      return this.$auth.user || null
    },
    getFinalTotal() {
      const baseAfterPromotions = this.getBaseAfterPromotions
      const tax = this.calculatedTax
      return baseAfterPromotions + tax
    },
    // ✅ NEW: Effective price in dialog with customer grade consideration
    effectivePriceInDialog() {
      if (!this.selectedProduct) return 0

      // Custom price takes precedence
      if (this.customPriceInput !== null && this.customPriceInput !== '') {
        return this.customPriceInput
      }

      // Price list selected
      if (this.selectedPriceListId) {
        const priceList = this.getProductPriceLists(this.selectedProduct).find(
          (pl) => pl.id === this.selectedPriceListId
        )

        if (priceList) {
          return this.calculatePriceListAmount(
            priceList,
            this.selectedProduct.pro_price
          )
        }
      }

      // ✅ If customer has grade and product has matching price list, use it
      const customerGradePrice = this.getCustomerGradePrice(this.selectedProduct)
      if (customerGradePrice) {
        return customerGradePrice
      }

      // Default to base price
      return this.selectedProduct.pro_price
    },

    // ✅ NEW: Check if price selection is valid
    isValidPriceSelection() {
      if (!this.selectedProduct) return false

      // Always allow if there's a customer grade price available (auto-applied)
      if (this.getCustomerGradePrice(this.selectedProduct)) {
        return true
      }

      // Allow if price list is selected or custom price is entered
      if (
        this.selectedPriceListId ||
        (this.customPriceInput !== null &&
          this.customPriceInput !== '' &&
          this.customPriceInput >= 0)
      ) {
        return true
      }

      return false
    },
    getBaseAmount() {
      if (!this.cart.length || !this.taxes.length) {
        return this.getTotalPrice()
      }

      let totalBaseAmount = 0

      this.cart.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id)
        const tax = this.getProductTax(product)
        const itemTotal = item.pro_price * item.quantity

        if (tax && tax.isActive && tax.taxType === 'INC') {
          // For tax inclusive: base = total / (1 + tax_rate)
          const baseAmount = itemTotal / (1 + parseFloat(tax.rate))
          totalBaseAmount += baseAmount
        } else {
          // For tax exclusive or no tax: base = total
          totalBaseAmount += itemTotal
        }
      })

      return totalBaseAmount
    },
    getBaseAfterPromotions() {
      const baseAmount = this.getBaseAmount
      const promotionDiscount = this.getTotalPromotionDiscount()
      return Math.max(0, baseAmount - promotionDiscount)
    },

    calculatedTax() {
      if (!this.cart.length || !this.taxes.length) return 0

      const baseAfterPromotions = this.getBaseAfterPromotions
      let totalTax = 0

      // Group items by their tax configuration
      const taxGroups = new Map()

      this.cart.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id)
        const tax = this.getProductTax(product)

        if (tax && tax.isActive) {
          const taxKey = tax.id
          const itemTotal = item.pro_price * item.quantity

          let itemBaseAmount
          if (tax.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(tax.rate))
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal
          }

          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              tax: tax,
              baseAmount: 0,
              items: [],
            })
          }

          const group = taxGroups.get(taxKey)
          group.baseAmount += itemBaseAmount
          group.items.push(item)
        }
      })

      // Calculate tax for each group based on base amounts
      taxGroups.forEach((group) => {
        const { tax, baseAmount } = group

        // Apply proportional discount to this tax group's base amount
        const totalBaseAmount = this.getBaseAmount
        const promotionDiscount = this.getTotalPromotionDiscount()
        const discountRatio = promotionDiscount / totalBaseAmount
        const adjustedBaseAmount = baseAmount * (1 - discountRatio)

        // Calculate tax on the adjusted base amount
        const taxAmount = adjustedBaseAmount * parseFloat(tax.rate)
        totalTax += taxAmount
      })

      return totalTax
    },

    isWalkIn() {
      return !this.tableId || this.tableId === 'walk-in'
    },

    displayTableId() {
      return this.isWalkIn ? 'Walk-in' : this.tableId
    },

    filteredProducts() {
      let filtered = this.products

      // Search filter
      if (this.searchQuery) {
        const searchTerm = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (product) =>
            product.pro_name.toLowerCase().includes(searchTerm) ||
            product.pro_desc?.toLowerCase().includes(searchTerm) ||
            product.pro_id.toString().includes(searchTerm) ||
            product.barCode?.toLowerCase().includes(searchTerm)
        )
      }

      // Category filter
      if (this.categoryFilter) {
        filtered = filtered.filter(
          (product) => product.pro_category === this.categoryFilter
        )
      }

      // Sort by name
      return filtered.sort((a, b) => a.pro_name.localeCompare(b.pro_name))
    },
  },

  async mounted() {
    await this.fetchProducts()
    await this.loadCategory()
    await this.fetchCustomers()
    await this.fetchPromotions()
    await this.fetchTaxes() // Add tax fetching

    // Load existing or provided ticket after all data is loaded
    if (this.existingTicket) {
      console.info(
        `LOAD PROVIDEDTICKETD ${JSON.stringify(this.existingTicket)}`
      )
      await this.loadProvidedTicket()
    } else {
      await this.loadExistingTicket()
    }
  },

  watch: {
    cart: {
      handler() {
        // Apply promotions whenever cart changes
        this.applyPromotions()

        // Auto-save logic
        if (!this.dialogMode && this.currentTicket && this.cart.length > 0) {
          clearTimeout(this.autoSaveTimeout)
          this.autoSaveTimeout = setTimeout(() => {
            this.saveTicket(true)
          }, 2000)
        }
      },
      deep: true,
    },

    // ✅ NEW: Watch for customer changes and update cart pricing
    selectedCustomer: {
      handler(newCustomer, oldCustomer) {
        // If customer grade changed, update existing cart items
        if (newCustomer?.grade !== oldCustomer?.grade) {
          this.updateCartPricesForCustomerGrade()
        }
      },
      deep: true
    }
  },

  methods: {
    // ✅ NEW: Get customer grade specific price for a product
    getCustomerGradePrice(product) {
      if (!this.selectedCustomer?.grade || !product) {
        return null
      }

      const priceLists = this.getProductPriceLists(product)
      const matchingPriceList = priceLists.find(
        (pl) => pl.grade === this.selectedCustomer.grade
      )

      if (matchingPriceList) {
        return this.calculatePriceListAmount(matchingPriceList, product.pro_price)
      }

      return null
    },

    // ✅ NEW: Get default product price (considering customer grade)
    getDefaultProductPrice(product) {
      const customerGradePrice = this.getCustomerGradePrice(product)
      return customerGradePrice || product.pro_price
    },

    // ✅ NEW: Update cart prices when customer grade changes
    updateCartPricesForCustomerGrade() {
      this.cart.forEach(item => {
        // Only update if item wasn't manually overridden
        if (!item.priceOverridden && !item.isFromTicketLine) {
          const product = this.products.find(p => p.id === item.id)
          if (product) {
            const customerGradePrice = this.getCustomerGradePrice(product)
            if (customerGradePrice) {
              item.pro_price = customerGradePrice
              item.isCustomerGradePrice = true
            } else {
              item.pro_price = product.pro_price
              item.isCustomerGradePrice = false
            }
          }
        }
      })

      // Show message about price updates
      if (this.selectedCustomer?.grade) {
        this.showMessage(
          `Prices updated for Grade ${this.selectedCustomer.grade} customer`,
          'info',
          'mdi-account-star'
        )
      }
    },

    formatPriceDifference(diff) {
      const sign = diff >= 0 ? '+' : ''
      return sign + this.formatPrice(Math.abs(diff))
    },

    openCustomerDialog() {
      this.showCustomerDialog = true
    },

    async fetchTaxes() {
      try {
        const response = await this.$axios.get('/api/tax/active')
        console.log('Taxes response:', response.data)
        const taxData = response.data.data || response.data
        this.taxes = taxData.filter((tax) => {
          const now = new Date()
          const effectiveFrom = new Date(tax.effectiveFrom)
          const effectiveTo = tax.effectiveTo ? new Date(tax.effectiveTo) : null
          return (
            tax.isActive &&
            effectiveFrom <= now &&
            (!effectiveTo || effectiveTo >= now)
          )
        })
        this.defaultTax =
          this.taxes.find((tax) => tax.isDefault) || this.taxes[0] || null
        console.log(
          `Loaded ${this.taxes.length} active taxes, default:`,
          this.defaultTax?.name
        )
      } catch (error) {
        console.error('Error fetching taxes:', error)
        this.showMessage(
          'Failed to load tax configurations',
          'error',
          'mdi-alert'
        )
        this.taxes = []
        this.defaultTax = null
      }
    },

    getProductTax(product) {
      if (!product || !this.taxes.length) {
        return this.defaultTax
      }
      if (product.taxId) {
        const productTax = this.taxes.find((tax) => tax.id === product.taxId)
        if (productTax) {
          return productTax
        }
      }
      return this.defaultTax
    },

    calculateTaxAmount(subtotal, tax) {
      if (!tax || !tax.isActive) {
        return 0
      }
      const taxRate = parseFloat(tax.rate)
      if (tax.taxType === 'INC') {
        return (subtotal * taxRate) / (1 + taxRate)
      } else {
        return subtotal * taxRate
      }
    },

    getTaxBreakdown() {
      if (!this.cart.length || !this.taxes.length) return []
      const breakdown = []
      const taxGroups = new Map()
      const totalBaseAmount = this.getBaseAmount
      const promotionDiscount = this.getTotalPromotionDiscount()
      const discountRatio = promotionDiscount / totalBaseAmount

      this.cart.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id)
        const tax = this.getProductTax(product)
        if (tax && tax.isActive) {
          const taxKey = tax.id
          const itemTotal = item.pro_price * item.quantity
          let itemBaseAmount
          if (tax.taxType === 'INC') {
            itemBaseAmount = itemTotal / (1 + parseFloat(tax.rate))
          } else {
            itemBaseAmount = itemTotal
          }
          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              tax: tax,
              baseAmount: 0,
              items: [],
            })
          }
          const group = taxGroups.get(taxKey)
          group.baseAmount += itemBaseAmount
          group.items.push(item)
        }
      })

      taxGroups.forEach((group) => {
        const { tax, baseAmount } = group
        const adjustedBaseAmount = baseAmount * (1 - discountRatio)
        const taxAmount = adjustedBaseAmount * parseFloat(tax.rate)
        breakdown.push({
          name: tax.name,
          code: tax.code,
          rate: tax.rate,
          type: tax.taxType,
          baseAmount: adjustedBaseAmount,
          taxAmount: taxAmount,
          itemCount: group.items.length,
        })
      })
      return breakdown
    },

    async loadCategory() {
      this.isloading = true
      this.categoryOptions = []
      await this.$axios
        .get('/api/category/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.categoryOptions.push(iterator)
          }
        })
        .catch((er) => {
          console.error('Error loading categories:', er)
          this.showMessage('Failed to load categories', 'error', 'mdi-alert')
        })
      this.isloading = false
    },

    isProductInPromotion(product) {
      return this.promotions.some((promotion) => {
        if (!promotion.is_active) return false
        const conditions = promotion.conditions
        if (!conditions) return false
        const inCategories = conditions.applicable_categories?.includes(
          product.pro_category
        )
        const inProducts = conditions.applicable_products?.includes(product.id)
        const noRestrictions =
          !conditions.applicable_categories?.length &&
          !conditions.applicable_products?.length
        return inCategories || inProducts || noRestrictions
      })
    },

    getTotalAfterPromotions() {
      const subtotal = this.getTotalPrice()
      const totalDiscount = this.appliedPromotions.reduce(
        (sum, applied) => sum + applied.discount.amount,
        0
      )
      return Math.max(0, subtotal - totalDiscount)
    },

    getTotalPromotionDiscount() {
      return this.appliedPromotions.reduce(
        (sum, applied) => sum + applied.discount.amount,
        0
      )
    },

    calculateApplicablePromotions() {
      const applicablePromotions = []
      const now = new Date()
      for (const promotion of this.promotions) {
        if (!promotion.is_active) continue
        if (new Date(promotion.start_date) > now) continue
        if (new Date(promotion.end_date) < now) continue
        if (promotion.max_uses && promotion.current_uses >= promotion.max_uses)
          continue
        if (this.isPromotionApplicable(promotion)) {
          applicablePromotions.push(promotion)
        }
      }
      return applicablePromotions.sort(
        (a, b) => (b.priority || 1) - (a.priority || 1)
      )
    },

    isPromotionApplicable(promotion) {
      const conditions = promotion.conditions
      if (!conditions) return false
      const applicableItems = this.cart.filter((item) => {
        if (
          conditions.applicable_categories &&
          conditions.applicable_categories.length > 0
        ) {
          const product = this.products.find((p) => p.id === item.id)
          if (
            product &&
            conditions.applicable_categories.includes(product.pro_category)
          ) {
            return true
          }
        }
        if (
          conditions.applicable_products &&
          conditions.applicable_products.length > 0
        ) {
          if (conditions.applicable_products.includes(item.id)) {
            return true
          }
        }
        if (
          (!conditions.applicable_categories ||
            conditions.applicable_categories.length === 0) &&
          (!conditions.applicable_products ||
            conditions.applicable_products.length === 0)
        ) {
          return true
        }
        return false
      })
      if (applicableItems.length === 0) return false
      switch (promotion.type) {
        case 'buy_x_get_y':
          const totalQuantity = applicableItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          )
          return totalQuantity >= (conditions.buy_quantity || 0)
        case 'percentage':
        case 'fixed_amount':
          if (conditions.minimum_order) {
            const applicableTotal = applicableItems.reduce(
              (sum, item) => sum + item.pro_price * item.quantity,
              0
            )
            return applicableTotal >= conditions.minimum_order
          }
          return true
        default:
          return true
      }
    },

    applyPromotions() {
      const applicablePromotions = this.calculateApplicablePromotions()
      this.appliedPromotions = []
      for (const promotion of applicablePromotions) {
        const discount = this.calculatePromotionDiscount(promotion)
        if (discount.amount > 0) {
          this.appliedPromotions.push({
            promotion: promotion,
            discount: discount,
          })
        }
      }
    },

    calculatePromotionDiscount(promotion) {
      const applicableItems = this.getApplicableItems(promotion)
      switch (promotion.type) {
        case 'buy_x_get_y':
          return this.calculateBuyXGetYDiscount(promotion, applicableItems)
        case 'percentage':
          return this.calculatePercentageDiscount(promotion, applicableItems)
        case 'fixed_amount':
          return this.calculateFixedAmountDiscount(promotion, applicableItems)
        default:
          return { amount: 0, description: '', items: [] }
      }
    },

    getApplicableItems(promotion) {
      const conditions = promotion.conditions
      return this.cart.filter((item) => {
        if (
          conditions.applicable_categories &&
          conditions.applicable_categories.length > 0
        ) {
          const product = this.products.find((p) => p.id === item.id)
          if (
            product &&
            conditions.applicable_categories.includes(product.pro_category)
          ) {
            return true
          }
        }
        if (
          conditions.applicable_products &&
          conditions.applicable_products.length > 0
        ) {
          if (conditions.applicable_products.includes(item.id)) {
            return true
          }
        }
        if (
          (!conditions.applicable_categories ||
            conditions.applicable_categories.length === 0) &&
          (!conditions.applicable_products ||
            conditions.applicable_products.length === 0)
        ) {
          return true
        }
        return false
      })
    },

    calculateBuyXGetYDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions
      const buyQty = conditions.buy_quantity || 0
      const getQty = conditions.get_quantity || 0
      const totalQuantity = applicableItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
      const eligibleSets = Math.floor(totalQuantity / buyQty)
      if (eligibleSets === 0) return { amount: 0, description: '', items: [] }
      let freeItems = eligibleSets * getQty
      if (conditions.max_free_items && freeItems > conditions.max_free_items) {
        freeItems = conditions.max_free_items
      }
      const itemPrices = applicableItems
        .flatMap((item) => Array(item.quantity).fill(item.pro_price))
        .sort((a, b) => a - b)
      const discountAmount = itemPrices
        .slice(0, freeItems)
        .reduce((sum, price) => sum + price, 0)
      return {
        amount: discountAmount,
        description: `Buy ${buyQty} Get ${getQty} Free`,
        items: applicableItems,
        freeItems: freeItems,
      }
    },

    calculatePercentageDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions
      const percentage = (conditions.discount_percentage || 0) / 100
      const subtotal = applicableItems.reduce(
        (sum, item) => sum + item.pro_price * item.quantity,
        0
      )
      let discountAmount = subtotal * percentage
      if (
        conditions.max_discount_amount &&
        discountAmount > conditions.max_discount_amount
      ) {
        discountAmount = conditions.max_discount_amount
      }
      return {
        amount: discountAmount,
        description: `${conditions.discount_percentage}% off`,
        items: applicableItems,
      }
    },

    calculateFixedAmountDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions
      const discountAmount = conditions.discount_amount || 0
      return {
        amount: discountAmount,
        description: `${discountAmount} ₭ off`,
        items: applicableItems,
      }
    },

    async fetchPromotions() {
      this.loadingPromotions = true
      try {
        const response = await this.$axios.get('/api/promotions')
        const allPromotions = response.data.data || response.data || []
        this.promotions = allPromotions.filter((promotion) => {
          const now = new Date()
          return (
            promotion.is_active &&
            new Date(promotion.start_date) <= now &&
            new Date(promotion.end_date) >= now
          )
        })
        console.log('Active promotions loaded:', this.promotions.length)
      } catch (error) {
        console.error('Error fetching promotions:', error)
        this.promotions = []
      } finally {
        this.loadingPromotions = false
      }
    },

    openNotesDialog() {
      this.orderNotes = this.currentTicket?.notes || this.orderNotes || ''
      this.showNotesDialog = true
    },

    closeNotesDialog() {
      this.showNotesDialog = false
    },

    async handleSaveNotes(notes) {
      this.orderNotes = notes
      if (this.currentTicket) {
        this.savingNotes = true
        try {
          await this.saveTicket(false)
          this.closeNotesDialog()
        } catch (error) {
          console.error('Error saving notes:', error)
        } finally {
          this.savingNotes = false
        }
      } else {
        this.closeNotesDialog()
        this.showMessage(
          'Notes will be saved with the ticket',
          'info',
          'mdi-information'
        )
      }
    },

    async loadProvidedTicket() {
      try {
        console.log('Loading provided ticket:', this.existingTicket)
        this.currentTicket = this.existingTicket
        this.orderNotes = this.currentTicket.notes || ''
        if (this.currentTicket.clientId) {
          await this.loadTicketCustomer(this.currentTicket.clientId)
        }
        await this.loadTicketLines()
        this.showMessage('Ticket loaded successfully', 'success', 'mdi-check')
      } catch (error) {
        console.error('Error loading provided ticket:', error)
        this.showMessage('Failed to load ticket', 'error', 'mdi-alert')
      }
    },

    getProductName(productId) {
      try {
        const product = this.products.find(
          (el) => el.id === parseInt(productId)
        )
        return product?.pro_name || `Product ${productId}`
      } catch (error) {
        console.error('Error getting product name:', error)
        return `Product ${productId}`
      }
    },

    // ✅ FIXED: Include price lists in query
    async fetchProducts() {
      this.loading = true
      try {
        const locationId = this.currentSelectedLocation['id'] || 1
        const companyId = this.currentSelectedLocation['companyId']

        // ✅ Include priceList in query
        let queryString = '?include=tax,priceList'
        if (companyId) {
          queryString += `&companyId=${companyId}`
        }

        const response = await this.$axios.get(
          `product_f/${locationId}${queryString}`
        )

        console.log('Products response:', response.data)
        const productData = response.data.data || response.data

        this.products = productData.map((product) => ({
          id: product.id,
          pro_id: product.pro_id,
          pro_name: product.pro_name,
          pro_price: product.pro_price,
          duration_minutes: product.duration_minutes || 0,
          pro_desc: product.pro_desc || '',
          pro_status: product.pro_status,
          pro_image_path: product.img_path,
          retail_cost_percent: product.retail_cost_percent || 0,
          cost_price: product.cost_price,
          stock_count: product.card_count || 0,
          minStock: product.minStock || 0,
          locking_session_id: product.locking_session_id,
          barCode: product.barCode,
          vendorName: product.vendorName,
          isActive: product.isActive === 1,
          _category: 'product',
          categ_name: product.categ_name,
          co_name: product.co_name,
          companyId: product.companyId,
          img_name: product.img_name,
          receiveUnitId: product.receiveUnitId,
          stockUnitId: product.stockUnitId,
          pro_category: product.pro_category,
          validateStockOnSale: product.validateStockOnSale === 1,
          saleCurrencyId: product.saleCurrencyId,
          costCurrencyId: product.costCurrencyId,
          taxId: product.taxId,
          tax: product.tax,
          // ✅ ADD: Price list data
          priceLists: Array.isArray(product.priceLists)
            ? product.priceLists
            : [],
          priceList: product.priceList || null,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        }))

        console.log(
          `✅ Loaded ${this.products.length} products with price lists`
        )
        this.showMessage(
          `Loaded ${this.products.length} products successfully!`
        )
      } catch (error) {
        console.error('Error fetching products:', error)
        this.showMessage(
          'Failed to load products. Please try again.',
          'error',
          'mdi-alert'
        )
      } finally {
        this.loading = false
      }
    },

    async fetchCustomers() {
      this.loadingCustomers = true
      try {
        const response = await this.$axios.get('api/client/find')
        console.log('Customers response:', response.data)
        const customerData = response.data.data || response.data
        this.customers = customerData.map((customer) => ({
          id: customer.id,
          name: customer.name,
          company: customer.company,
          email: customer.email,
          address: customer.address,
          telephone: customer.telephone,
          credit: customer.credit,
          lateChargePercent: customer.lateChargePercent,
          grade: customer.grade,
          isActive: customer.isActive,
          createdAt: customer.createdAt,
          updatedAt: customer.updatedAt,
        }))
        console.log(`Loaded ${this.customers.length} customers`)
      } catch (error) {
        console.error('Error fetching customers:', error)
        this.showMessage('Failed to load customers', 'error', 'mdi-alert')
      } finally {
        this.loadingCustomers = false
      }
    },

    async loadExistingTicket() {
      if (this.isWalkIn) {
        console.log('Walk-in mode - no existing ticket to load')
        return
      }
      try {
        const response = await this.$axios.get(
          `api/ticket/table/${this.tableId}/pending`
        )
        if (response.data && response.data.length > 0) {
          this.currentTicket = response.data[0]
          if (this.currentTicket.clientId) {
            await this.loadTicketCustomer(this.currentTicket.clientId)
          }
          await this.loadTicketLines()
        }
      } catch (error) {
        console.log('No existing ticket found or error:', error)
      }
    },

    async loadTicketCustomer(clientId) {
      try {
        const response = await this.$axios.get(`api/client/find/${clientId}`)
        this.selectedCustomer = response.data.data || response.data
        console.log('Loaded ticket customer:', this.selectedCustomer.name)
      } catch (error) {
        console.error('Error loading ticket customer:', error)
      }
    },

    async loadTicketLines() {
      if (!this.currentTicket) return
      try {
        const response = await this.$axios.get(
          `api/ticketLine/ticket/${this.currentTicket.id}`
        )
        const ticketLines = response.data.data || response.data
        this.cart = ticketLines
          .map((line) => {
            const product = this.products.find((p) => p.id === line.productId)
            return {
              id: line.productId,
              pro_id: line.productId,
              pro_name:
                line.product?.name ||
                product?.pro_name ||
                `Product ${line.productId}`,
              categ_name: product?.categ_name || 'Unknown Category',
              stock_count: product?.stock_count || 0,
              isActive: product?.isActive || false,
              pro_price: line.unitPrice,
              quantity: line.quantity,
              ticketLineId: line.id,
              totalPrice: line.totalPrice || line.unitPrice * line.quantity,
              isFromTicketLine: true,
              originalTicketLinePrice: line.unitPrice,
            }
          })
          .filter((item) => item.pro_name)
        console.info(`Loaded ${this.cart.length} items from ticket lines`)
        this.applyPromotions()
      } catch (error) {
        console.error('Error loading ticket lines:', error)
        this.showMessage(
          'Failed to load saved ticket items',
          'error',
          'mdi-alert'
        )
      }
    },

    async saveTicket(silent = false) {
      if (this.cart.length === 0) {
        if (!silent) this.showMessage('Cart is empty', 'warning', 'mdi-alert')
        return
      }
      this.savingTicket = true
      try {
        const subtotal = this.getTotalPrice()
        const promotionDiscount = this.getTotalPromotionDiscount()
        const afterPromotions = subtotal - promotionDiscount
        const tax = this.calculatedTax
        const total = afterPromotions
        const taxBreakdown = this.getTaxBreakdown()
        const promotionItemsMap = new Map()

        this.appliedPromotions.forEach((applied) => {
          const promotion = applied.promotion
          const discount = applied.discount
          const affectedItems = this.getApplicableItems(promotion)

          if (promotion.type === 'buy_x_get_y' && discount.freeItems > 0) {
            const sortedItems = affectedItems
              .flatMap((item) =>
                Array(item.quantity).fill({
                  id: item.id,
                  price: item.pro_price,
                })
              )
              .sort((a, b) => a.price - b.price)
            for (
              let i = 0;
              i < discount.freeItems && i < sortedItems.length;
              i++
            ) {
              const itemId = sortedItems[i].id
              const currentData = promotionItemsMap.get(itemId) || {
                promotionId: promotion.id,
                is_promotion_item: false,
                discount_amount: 0,
                promotion_note: '',
              }
              currentData.is_promotion_item = true
              currentData.discount_amount += sortedItems[i].price
              currentData.promotion_note = discount.description
              promotionItemsMap.set(itemId, currentData)
            }
          } else {
            affectedItems.forEach((item) => {
              const itemSubtotal = item.pro_price * item.quantity
              const itemDiscountRatio =
                itemSubtotal / this.getApplicableItemsTotal(promotion)
              const itemDiscount = discount.amount * itemDiscountRatio
              const currentData = promotionItemsMap.get(item.id) || {
                promotionId: promotion.id,
                is_promotion_item: false,
                discount_amount: 0,
                promotion_note: '',
              }
              if (itemDiscount > 0) {
                currentData.is_promotion_item = true
                currentData.discount_amount += itemDiscount
                currentData.promotion_note = discount.description
              }
              promotionItemsMap.set(item.id, currentData)
            })
          }
        })

        let ticketData = {
          tableId:
            this.tableId && this.tableId !== 'walk-in'
              ? parseInt(this.tableId)
              : null,
          clientId: this.selectedCustomer ? this.selectedCustomer.id : null,
          locationId: this.currentSelectedLocation['id'] || 1,
          status: 'pending',
          subtotal: parseFloat(subtotal.toFixed(2) - tax.toFixed(2)),
          promotionDiscount: parseFloat(promotionDiscount.toFixed(2)),
          tax: parseFloat(tax.toFixed(2)),
          taxType: this.defaultTax?.taxType || null,
          total: parseFloat(total.toFixed(2)),
          paymentStatus: 'pending',
          notes:
            this.orderNotes ||
            (this.selectedCustomer
              ? `Customer: ${this.selectedCustomer.name}`
              : 'Walk-in customer'),
          taxBreakdown: taxBreakdown,
          appliedPromotions: this.appliedPromotions.map((applied) => ({
            promotionId: applied.promotion.id,
            promotionName: applied.promotion.name,
            discountAmount: applied.discount.amount,
            description: applied.discount.description,
          })),
          ticketLines: this.cart.map((item) => {
            const promotionData = promotionItemsMap.get(item.id)
            const product = this.products.find((p) => p.id === item.id)
            const productTax = this.getProductTax(product)
            return {
              id: item.ticketLineId || undefined,
              productId: item.id,
              quantity: item.quantity,
              unitPrice: parseFloat(item.pro_price),
              totalPrice: parseFloat(
                (item.pro_price * item.quantity).toFixed(2)
              ),
              status: 'ordered',
              taxId: productTax?.id || null,
              taxRate: productTax?.rate || 0,
              taxType: productTax?.taxType || 'INC',
              promotionId: promotionData?.promotionId || null,
              is_promotion_item: promotionData?.is_promotion_item || false,
              original_price: promotionData?.is_promotion_item
                ? item.pro_price
                : null,
              discount_amount: promotionData?.discount_amount || 0,
              promotion_note: promotionData?.promotion_note || null,
              // ✅ ADD: Price override fields
              priceListId: item.priceListId || null,
              priceOverridden: item.priceOverridden || item.isCustomerGradePrice || false,
              priceOverrideReason: item.priceOverrideReason || 
                (item.isCustomerGradePrice ? `Customer Grade ${this.selectedCustomer?.grade} pricing` : null),
            }
          }),
        }

        let response
        if (this.currentTicket) {
         
          ticketData.updateUserId = this.user.id
          response = await this.$axios.put(
            `api/ticket/${this.currentTicket.id}`,
            ticketData
          )
          this.currentTicket = response.data.data || response.data
          this.$emit('ticket-updated', this.currentTicket)
          if (!this.dialogMode) {
            this.$emit('reload-data')
          }
          if (!silent) {
            this.showMessage(
              'Ticket updated successfully!',
              'success',
              'mdi-content-save'
            )
            if (this.$toast) {
              this.$toast.success('Ticket saved successfully')
            }
          }
        } else {
          ticketData.createUserId = this.user.id
          response = await this.$axios.post('api/ticket/', ticketData)
          this.currentTicket = response.data.data || response.data
          this.$emit('ticket-updated', this.currentTicket)
          if (!this.dialogMode) {
            this.$emit('reload-data')
          }
          if (!silent) {
            this.showMessage(
              'Ticket saved successfully!',
              'success',
              'mdi-content-save'
            )
          }
        }
      } catch (error) {
        console.error('Error saving ticket:', error)
        if (!silent) {
          this.showMessage(
            'Failed to save ticket. Please try again.',
            'error',
            'mdi-alert'
          )
        }
      } finally {
        this.savingTicket = false
      }
    },

    getApplicableItemsTotal(promotion) {
      const applicableItems = this.getApplicableItems(promotion)
      return applicableItems.reduce(
        (sum, item) => sum + item.pro_price * item.quantity,
        0
      )
    },

    // ✅ ENHANCED: Add to cart with customer grade pricing
    addToCart(product) {
      console.log('Adding product to cart:', product)

      if (!product.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert')
        return
      }

      if (product.stock_count <= 0 && product.validateStockOnSale) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert')
        return
      }

      // ✅ Get customer grade price if available
      const customerGradePrice = this.getCustomerGradePrice(product)
      const priceToUse = customerGradePrice || product.pro_price

      const existingItem = this.cart.find((item) => item.id === product.id)

      if (existingItem) {
        const canAddMore =
          !product.validateStockOnSale ||
          existingItem.quantity < product.stock_count

        if (canAddMore) {
          existingItem.quantity += 1
          // Only update price if not from ticket line and not manually overridden
          if (!existingItem.isFromTicketLine && !existingItem.priceOverridden) {
            existingItem.pro_price = parseFloat(priceToUse)
            existingItem.isCustomerGradePrice = !!customerGradePrice
          }
        } else {
          this.showMessage('Maximum stock reached', 'warning', 'mdi-alert')
        }
      } else {
        this.cart.push({
          id: product.id,
          pro_id: product.id,
          pro_name: product.pro_name,
          pro_price: parseFloat(priceToUse),
          categ_name: product.categ_name,
          stock_count: product.stock_count,
          isActive: product.isActive,
          validateStockOnSale: product.validateStockOnSale,
          quantity: 1,
          isFromTicketLine: false,
          priceOverridden: false,
          originalPrice: parseFloat(product.pro_price),
          isCustomerGradePrice: !!customerGradePrice,
        })
      }

      // Show appropriate message
      const priceMessage = customerGradePrice 
        ? `with Grade ${this.selectedCustomer.grade} price (${this.formatPrice(priceToUse)})` 
        : `(${this.formatPrice(priceToUse)})`
      
      this.showMessage(
        `${product.pro_name} added ${priceMessage}`,
        'success',
        'mdi-cart-plus'
      )
    },

    // ✅ Enhanced price selection with customer grade consideration
    applyPriceSelection() {
      if (!this.selectedProduct) return

      const effectivePrice = this.effectivePriceInDialog

      if (!this.selectedProduct.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert')
        return
      }

      if (
        this.selectedProduct.stock_count <= 0 &&
        this.selectedProduct.validateStockOnSale
      ) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert')
        return
      }

      const existingItem = this.cart.find(
        (item) => item.id === this.selectedProduct.id
      )

      const isCustomerGrade = this.getCustomerGradePrice(this.selectedProduct) && 
        !this.customPriceInput && !this.selectedPriceListId

      if (existingItem) {
        const canAddMore =
          !this.selectedProduct.validateStockOnSale ||
          existingItem.quantity < this.selectedProduct.stock_count

        if (canAddMore) {
          existingItem.quantity += 1
          // Update price details
          existingItem.pro_price = effectivePrice
          existingItem.priceOverridden = !!(this.customPriceInput || this.selectedPriceListId)
          existingItem.priceListId = this.selectedPriceListId
          existingItem.priceOverrideReason = this.priceOverrideReason || null
          existingItem.isCustomerGradePrice = isCustomerGrade
        } else {
          this.showMessage('Maximum stock reached', 'warning', 'mdi-alert')
          return
        }
      } else {
        this.cart.push({
          id: this.selectedProduct.id,
          pro_id: this.selectedProduct.id,
          pro_name: this.selectedProduct.pro_name,
          pro_price: effectivePrice,
          categ_name: this.selectedProduct.categ_name,
          stock_count: this.selectedProduct.stock_count,
          isActive: this.selectedProduct.isActive,
          validateStockOnSale: this.selectedProduct.validateStockOnSale,
          quantity: 1,
          isFromTicketLine: false,
          priceOverridden: !!(this.customPriceInput || this.selectedPriceListId),
          priceListId: this.selectedPriceListId,
          originalPrice: this.selectedProduct.pro_price,
          priceOverrideReason: this.priceOverrideReason || null,
          isCustomerGradePrice: isCustomerGrade,
        })
      }

      let message = `${this.selectedProduct.pro_name} added with ${this.formatPrice(effectivePrice)}`
      if (isCustomerGrade) {
        message += ` (Grade ${this.selectedCustomer.grade})`
      } else if (this.selectedPriceListId) {
        message += ` (Price List Applied)`
      } else if (this.customPriceInput) {
        message += ` (Custom Price)`
      }

      this.showMessage(message, 'success', 'mdi-cart-plus')
      this.closePriceOverrideDialog()
    },

    onPriceListSelection() {
      this.customPriceInput = null
    },

    closePriceOverrideDialog() {
      this.showPriceOverrideDialog = false
      this.selectedProduct = null
      this.selectedPriceListId = null
      this.customPriceInput = null
      this.priceOverrideReason = ''
    },

    hasAvailablePriceLists(product) {
      return this.getProductPriceLists(product).length > 0
    },

    getProductPriceLists(product) {
      if (!product) return []

      if (Array.isArray(product.priceLists)) {
        return product.priceLists.filter((pl) => pl.isActive)
      }

      if (product.priceList && product.priceList.isActive) {
        return [product.priceList]
      }

      return []
    },

    // ✅ FIXED: Include base price option
    getPriceListOptions(product) {
      if (!product) return []

      const options = []
      const priceLists = this.getProductPriceLists(product)

      // Always show base price as first option
      options.push({
        id: null,
        label: 'Base Price',
        grade: 'BASE',
        price: product.pro_price,
        type: 'Price',
        amount: product.pro_price,
      })

      // Add all price list options
      priceLists.forEach((pl) => {
        options.push({
          id: pl.id,
          label: `${pl.grade} - ${pl.name}`,
          grade: pl.grade,
          price: this.calculatePriceListAmount(pl, product.pro_price),
          type: pl.type,
          amount: pl.amount,
        })
      })

      return options
    },

    calculatePriceListAmount(priceList, basePrice) {
      if (!priceList) return basePrice

      if (priceList.type === 'Price') {
        return priceList.amount
      } else if (priceList.type === 'Percent') {
        return basePrice * (1 + priceList.amount / 100)
      }

      return basePrice
    },

    getPriceRangeText(product) {
      const priceLists = this.getProductPriceLists(product)
      if (priceLists.length === 0) return ''

      const prices = priceLists.map((pl) =>
        this.calculatePriceListAmount(pl, product.pro_price)
      )

      const minPrice = Math.min(...prices, product.pro_price)
      const maxPrice = Math.max(...prices, product.pro_price)

      if (minPrice === maxPrice) return ''

      return `${this.formatPrice(minPrice)} - ${this.formatPrice(maxPrice)}`
    },

    openPriceSelector(product) {
      this.selectedProduct = product
      this.selectedPriceListId = null
      this.customPriceInput = null
      this.priceOverrideReason = ''
      this.showPriceOverrideDialog = true
    },

    updateQuantity(itemId, change) {
      const item = this.cart.find((i) => i.id === itemId)
      if (!item) return

      const newQuantity = item.quantity + change
      if (newQuantity <= 0) {
        this.removeFromCart(itemId)
        return
      }

      if (newQuantity > item.stock_count && item.validateStockOnSale) {
        this.showMessage('Maximum stock reached', 'warning', 'mdi-alert')
        return
      }

      item.quantity = newQuantity
    },

    removeFromCart(itemId) {
      const itemIndex = this.cart.findIndex((item) => item.id === itemId)
      if (itemIndex > -1) {
        const item = this.cart[itemIndex]
        this.cart.splice(itemIndex, 1)
        this.showMessage(
          `${item.pro_name} removed from cart`,
          'info',
          'mdi-information'
        )
      }
    },

    clearCart() {
      if (this.cart.length === 0) {
        this.showMessage('Cart is already empty', 'info', 'mdi-information')
        return
      }
      const itemCount = this.getTotalItems()
      const totalAmount = this.getTotalPrice()
      this.cart = []
      this.currentTicket = null
      this.selectedCustomer = null
      this.appliedPromotions = []
      this.showMessage(
        `Cart cleared - ${itemCount} items (${this.formatPrice(
          totalAmount
        )}) removed`,
        'info',
        'mdi-cart-remove'
      )
    },

    async loadPaymentMethods() {
      this.paymentLoading = true
      this.paymentList = []
      try {
        const response = await this.$axios.get('/api/paymentMethod/find')
        this.paymentList = response.data.filter((payment) => payment.isActive)
        console.log('Payment methods loaded:', this.paymentList)
      } catch (error) {
        console.error('Error loading payment methods:', error)
        this.showMessage('Failed to load payment methods', 'error', 'mdi-alert')
      } finally {
        this.paymentLoading = false
      }
    },

    async processPayment() {
      const total = this.getFinalTotal || 0
      if (total <= 0) {
        this.showMessage('No amount to process', 'warning', 'mdi-alert')
        return
      }
      this.paymentAmount = total
      await this.loadPaymentMethods()
      this.showPaymentDialog = true
    },

    async handlePaymentConfirm(selectedPaymentMethod) {
      this.actionLoading = true
      try {
        if (this.currentTicket?.id) {
          await this.$axios.patch(
            `/api/ticket/${this.currentTicket.id}/payment-status`,
            {
              paymentStatus: 'paid',
              paymentId: selectedPaymentMethod.id,
            }
          )
        }
        this.closePaymentDialog()
        this.showPrintConfirmDialog = true
        if (!this.isWalkIn) {
          await this.updateTableStatus('cleaning')
        }
        this.$emit('ticket-updated', this.currentTicket)
        this.$emit('reload-data')
      } catch (error) {
        console.error('Payment processing error:', error)
        this.showMessage('Failed to process payment', 'error', 'mdi-alert')
      } finally {
        this.actionLoading = false
      }
    },

    handlePrintConfirmation(shouldPrint) {
      this.showPrintConfirmDialog = false
      if (shouldPrint) {
        this.printCustomerReceipt()
      } else {
        this.showMessage(
          `Payment of ${this.formatPrice(
            this.paymentAmount
          )} processed successfully`,
          'success',
          'mdi-check-circle'
        )
      }
      this.paymentAmount = 0
    },

    closePaymentDialog() {
      this.showPaymentDialog = false
      this.paymentAmount = 0
    },

    async updateTableStatus(status) {
      if (this.isWalkIn) {
        console.log('Walk-in ticket - skipping table status update')
        return
      }
      try {
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId: status === 'occupied' ? this.currentTicket?.id : null,
        }
        await this.$axios.patch(`api/tables/${this.tableId}/status`, payload)
        await this.loadExistingTicket()
        this.$emit('reload-data')
        this.$emit('reload-table')
      } catch (error) {
        console.error('Error updating table status:', error)
      }
    },

    handleCustomerSelected(customer) {
      this.selectedCustomer = customer
      this.showMessage(
        `Customer ${customer.name} selected`,
        'success',
        'mdi-account-check'
      )
    },

    handleWalkInSelected() {
      this.selectedCustomer = null
      this.showMessage('Walk-in customer selected', 'info', 'mdi-walk')
    },

    async handleSaveCustomer(customerData) {
      try {
        console.log('Saving customer:', customerData)
        const response = await this.$axios.post(
          'api/client/create',
          customerData
        )
        const savedCustomer = response.data.data || response.data
        this.customers.unshift(savedCustomer)
        this.selectedCustomer = savedCustomer
        this.showMessage(
          `Customer ${savedCustomer.name} created successfully!`,
          'success',
          'mdi-account-plus'
        )
      } catch (error) {
        console.error('Error saving customer:', error)
        if (error.response?.status === 400) {
          this.showMessage(
            'Invalid customer data. Please check all fields.',
            'error',
            'mdi-alert'
          )
        } else {
          this.showMessage(
            'Failed to save customer. Please try again.',
            'error',
            'mdi-alert'
          )
        }
      }
    },

    closeCustomerDialog() {
      this.showCustomerDialog = false
    },

    async printCustomerReceipt() {
      console.log('Print button clicked')
      if (!this.currentTicket) {
        this.showMessage(
          'Please save the ticket first before printing',
          'warning',
          'mdi-alert'
        )
        return
      }
      try {
        this.loading = true
        const ticketResponse = await this.$axios.get(
          `api/ticket/${this.currentTicket.id}`
        )
        const latestTicket = ticketResponse.data.data || ticketResponse.data
        let customerData = null
        if (latestTicket.clientId) {
          try {
            const customerResponse = await this.$axios.get(
              `api/client/find/${latestTicket.clientId}`
            )
            customerData = customerResponse.data.data || customerResponse.data
          } catch (error) {
            console.warn('Could not fetch customer data:', error)
            customerData = this.selectedCustomer
          }
        }
        const ticketLinesResponse = await this.$axios.get(
          `api/ticketLine/ticket/${latestTicket.id}`
        )
        const ticketLines =
          ticketLinesResponse.data.data || ticketLinesResponse.data
        const mappedTicketLines = ticketLines
          .map((line) => {
            const product = this.products.find((p) => p.id === line.productId)
            return {
              id: line.productId,
              pro_id: line.productId,
              pro_name:
                line.product?.name ||
                product?.pro_name ||
                `Product ${line.productId}`,
              categ_name: product?.categ_name || 'Unknown Category',
              stock_count: product?.stock_count || 0,
              isActive: product?.isActive || false,
              pro_price: line.unitPrice,
              quantity: line.quantity,
              ticketLineId: line.id,
              totalPrice: line.totalPrice || line.unitPrice * line.quantity,
              isFromTicketLine: true,
              originalTicketLinePrice: line.unitPrice,
            }
          })
          .filter((item) => item.pro_name)
        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: this.isWalkIn
            ? { id: null, number: null, name: 'Walk-in' }
            : {
                id: this.tableId,
                number: this.tableId,
                name: `Table ${this.tableId}`,
              },
          ticketLines: mappedTicketLines,
        }
        if (!ticketForPrint.subtotal || !ticketForPrint.promotionDiscount) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity
          }, 0)
          if (!ticketForPrint.promotionDiscount) {
            const promotionDiscount = this.getTotalPromotionDiscount()
            ticketForPrint.promotionDiscount = promotionDiscount
            ticketForPrint.subtotal = subtotal
          }
        }
        console.log('Updated ticket for print:', ticketForPrint)
        this.currentTicket = latestTicket
        this.selectedTicket = ticketForPrint
        this.showCustomerPrint = true
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error)
        this.showMessage(
          'Failed to load latest ticket data. Using current data for printing.',
          'warning',
          'mdi-alert'
        )
        const ticketForPrint = {
          ...this.currentTicket,
          client: this.selectedCustomer || null,
          table: this.isWalkIn
            ? { id: null, number: null, name: 'Walk-in' }
            : {
                id: this.tableId,
                number: this.tableId,
                name: `Table ${this.tableId}`,
              },
          ticketLines: this.cart,
          subtotal: this.getTotalPrice(),
          promotionDiscount: this.getTotalPromotionDiscount(),
          tax: this.getTotalAfterPromotions() * 0.085,
          total: this.getFinalTotal,
        }
        this.selectedTicket = ticketForPrint
        this.showCustomerPrint = true
      } finally {
        this.loading = false
      }
    },

    closePrintDialog() {
      this.showCustomerPrint = false
      this.selectedTicket = null
    },

    onPrintSuccess(ticket) {
      console.log('Ticket printed successfully:', ticket.id)
      this.showMessage('Ticket printed successfully!', 'success', 'mdi-printer')
    },

    showMessage(message, color = 'success', icon = 'mdi-check-circle') {
      this.snackbar = {
        show: true,
        message,
        color,
        icon,
        timeout: 4000,
      }
    },

    getCurrentProductPrice(productId) {
      const product = this.products.find((p) => p.id === productId)
      return product ? parseFloat(product.pro_price) : 0
    },

    getTotalPrice() {
      return this.cart.reduce((total, item) => {
        return total + parseFloat(item.pro_price) * item.quantity
      }, 0)
    },

    getTotalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0)
    },

    formatTaxDisplay(tax) {
      if (!tax) return 'No Tax'
      const percentage = (parseFloat(tax.rate) * 100).toFixed(2)
      return `${tax.name} (${percentage}% ${tax.taxType})`
    },

    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber
    },

    formatDateTime(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleString()
    },

    getCategoryColor(categoryName) {
      if (categoryName && categoryName.includes('Engine')) return 'primary'
      if (categoryName && categoryName.includes('ຄາແຄຣ')) return 'purple'
      return 'info'
    },

    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error'
      if (stockCount <= 5) return 'warning'
      return 'success'
    },

    getTicketStatusColor(status) {
      const colors = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'green',
        served: 'purple',
        paid: 'success',
      }
      return colors[status] || 'grey'
    },

    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error',
        BASE: 'grey',
      }
      return colors[grade] || 'grey'
    },
  },

  beforeDestroy() {
    if (this.autoSaveTimeout) {
      clearTimeout(this.autoSaveTimeout)
    }
  },
}
</script>
<style scoped>
/* ========================================
   🔧 MAIN LAYOUT FIXES
   ======================================== */

/* ✅ NEW: Price list badge */
.price-list-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
}

/* ✅ NEW: Adjust promotion badge position */
.promotion-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}

/* ✅ NEW: Price section styling */
.price-section {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

/* ✅ NEW: Button gap */
.gap-1 {
  gap: 4px;
}

/* Main container */
.pos-main-container {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

/* ========================================
   📱 LEFT PANEL (MENU SECTION)
   ======================================== */

.left-panel {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* Fixed header */
.menu-header {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 0 !important;
}

/* Loading state */
.menu-loading {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

/* Scrollable menu content */
.menu-content {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  scroll-behavior: smooth;
}

/* Custom scrollbar for menu */
.menu-content::-webkit-scrollbar {
  width: 8px;
}

.menu-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.menu-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.menu-content::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* ========================================
   🛒 RIGHT PANEL (CART SECTION)
   ======================================== */

.right-panel {
  height: 100vh;
  overflow: hidden;
}

.cart-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: white;
  border-left: 1px solid #e0e0e0;
}

/* Fixed cart header */
.cart-header {
  flex-shrink: 0;
  min-height: 64px !important;
  border-radius: 0 !important;
}

/* Fixed customer section */
.customer-section {
  flex-shrink: 0;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

/* Scrollable cart items */
.cart-items-section {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  min-height: 0;
  /* Important for flex child to scroll */
}

/* Cart empty state */
.cart-empty-state {
  text-align: center;
  padding: 48px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Cart items list */
.cart-items-list {
  padding: 16px;
}

.cart-item {
  margin-bottom: 8px;
  padding: 8px;
}

/* Custom scrollbar for cart */
.cart-items-section::-webkit-scrollbar {
  width: 6px;
}

.cart-items-section::-webkit-scrollbar-track {
  background: #f8f8f8;
}

.cart-items-section::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 3px;
}

.cart-items-section::-webkit-scrollbar-thumb:hover {
  background: #b0b0b0;
}

/* Fixed cart footer */
.cart-footer {
  flex-shrink: 0;
  border-top: 1px solid #e0e0e0;
  background-color: #fafafa;
}

.cart-summary {
  padding: 16px;
}

.cart-actions {
  padding: 0 16px 16px 16px;
}

/* ========================================
   🎨 PRODUCT CARD STYLES
   ======================================== */

.promotion-eligible {
  border: 2px solid #4caf50 !important;
}

.promotion-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #4caf50;
  border-radius: 50%;
  padding: 4px;
}

.cursor-pointer {
  cursor: pointer;
}

.w-100 {
  width: 100%;
}

.product-card:hover:not(.product-disabled) {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.product-disabled {
  opacity: 0.6;
  cursor: not-allowed !important;
}

.product-disabled:hover {
  transform: none !important;
  box-shadow: none !important;
}

/* ========================================
   🎫 TICKET LINE ITEMS
   ======================================== */

.ticket-line-item {
  background-color: rgba(33, 150, 243, 0.05);
  border-left: 3px solid #2196f3;
}

/* ========================================
   📝 TEXT UTILITIES
   ======================================== */

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ========================================
   📱 RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 1024px) {
  .left-panel {
    flex: 0 0 60%;
  }

  .right-panel {
    flex: 0 0 40%;
  }
}

@media (max-width: 768px) {
  .pos-main-container {
    flex-direction: column;
  }

  .left-panel,
  .right-panel {
    height: 50vh;
  }
}

/* ========================================
   🔧 EXPANSION PANELS (if used)
   ======================================== */

.v-expansion-panel-header {
  min-height: 36px !important;
  padding: 8px 12px !important;
}

.v-expansion-panel-content__wrap {
  padding: 8px 12px 12px !important;
}

/* ========================================
   🎯 PERFORMANCE OPTIMIZATIONS
   ======================================== */

/* GPU acceleration for smooth scrolling */
.menu-content,
.cart-items-section {
  transform: translateZ(0);
  will-change: scroll-position;
}

/* Smooth transitions */
.cart-item {
  transition: all 0.2s ease;
}

.cart-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

/* ========================================
   🔍 ACCESSIBILITY
   ======================================== */

/* Focus indicators */
.product-card:focus {
  outline: 2px solid #1976d2;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .cart-container {
    border-left: 2px solid #000;
  }

  .customer-section {
    border-bottom: 2px solid #000;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .product-card:hover:not(.product-disabled) {
    transform: none;
  }

  .menu-content,
  .cart-items-section {
    scroll-behavior: auto;
  }
}
</style>