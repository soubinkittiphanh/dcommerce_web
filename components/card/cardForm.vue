<template>
    <div>
        <v-dialog v-model="isSubmitting" hide-overlay persistent width="300">
            <loading-indicator></loading-indicator>
        </v-dialog>
        
        <v-card class="mx-auto">
            <!-- Enhanced Header -->
            <v-card-title class="primary white--text py-4">
                <v-icon left color="white" size="24">mdi-package-variant-plus</v-icon>
                <span class="text-h6">Add Stock</span>
                <v-spacer></v-spacer>
                <v-btn icon color="white" @click="$emit('close-dialog')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>

            <!-- Product Info -->
            <v-card-subtitle class="pa-4 pb-2">
                <v-chip 
                    class="ma-1" 
                    color="primary" 
                    label 
                    outlined
                    prepend-icon="mdi-tag"
                >
                    {{ productName }}
                </v-chip>
                <v-chip 
                    class="ma-1" 
                    color="secondary" 
                    label 
                    outlined
                    prepend-icon="mdi-identifier"
                >
                    ID: {{ productId }}
                </v-chip>
            </v-card-subtitle>

            <v-card-text class="pa-4">
                <v-container fluid>
                    <v-form ref="myform" @submit.prevent="submitForm">
                        <v-row>
                            <!-- Location Selection -->
                            <v-col cols="12">
                                <v-autocomplete 
                                    item-text="name" 
                                    item-value="id" 
                                    :items="locationList" 
                                    label="Source Location"
                                    v-model="srcLocationId"
                                    outlined
                                    dense
                                    prepend-inner-icon="mdi-map-marker"
                                    :rules="[v => !!v || 'Please select a location']"
                                ></v-autocomplete>
                            </v-col>

                            <!-- Color Selection -->
                            <v-col cols="12" md="6">
                                <v-autocomplete 
                                    item-text="color_name" 
                                    item-value="id" 
                                    :items="colorList" 
                                    label="Color (Optional)"
                                    v-model="colorId"
                                    outlined
                                    dense
                                    clearable
                                    prepend-inner-icon="mdi-palette"
                                    :loading="loadingColors"
                                >
                                    <template v-slot:item="{ item }">
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="d-flex align-center">
                                                    <div 
                                                        v-if="item.hex_code"
                                                        class="color-preview mr-2"
                                                        :style="{ backgroundColor: item.hex_code }"
                                                    ></div>
                                                    <v-icon v-else small class="mr-2" color="grey">mdi-palette-outline</v-icon>
                                                    {{ item.color_name }}
                                                    <v-chip x-small class="ml-2" outlined>{{ item.color_code }}</v-chip>
                                                </div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <template v-slot:selection="{ item }">
                                        <div class="d-flex align-center">
                                            <div 
                                                v-if="item.hex_code"
                                                class="color-preview-small mr-2"
                                                :style="{ backgroundColor: item.hex_code }"
                                            ></div>
                                            <v-icon v-else x-small class="mr-2" color="grey">mdi-palette-outline</v-icon>
                                            {{ item.color_name }}
                                        </div>
                                    </template>
                                </v-autocomplete>
                            </v-col>

                            <!-- Size Selection -->
                            <v-col cols="12" md="6">
                                <v-autocomplete 
                                    item-text="size_name" 
                                    item-value="id" 
                                    :items="sizeList" 
                                    label="Size (Optional)"
                                    v-model="sizeId"
                                    outlined
                                    dense
                                    clearable
                                    prepend-inner-icon="mdi-ruler"
                                    :loading="loadingSizes"
                                >
                                    <template v-slot:item="{ item }">
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="d-flex align-center">
                                                    <v-icon small class="mr-2">mdi-ruler</v-icon>
                                                    {{ item.size_name }}
                                                    <v-chip x-small class="ml-2" outlined>{{ item.size_code }}</v-chip>
                                                </div>
                                            </v-list-item-title>
                                            <v-list-item-subtitle v-if="item.description">
                                                {{ item.description }}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </template>
                                    <template v-slot:selection="{ item }">
                                        <div class="d-flex align-center">
                                            <v-icon x-small class="mr-2">mdi-ruler</v-icon>
                                            {{ item.size_name }}
                                        </div>
                                    </template>
                                </v-autocomplete>
                            </v-col>

                            <!-- Quantity -->
                            <v-col cols="12" md="6">
                                <v-text-field 
                                    label="Quantity"
                                    :rules="quantityRules"
                                    hide-details="auto"
                                    v-model="stockQty"
                                    outlined
                                    dense
                                    type="number"
                                    min="1"
                                    prepend-inner-icon="mdi-counter"
                                    suffix="units"
                                ></v-text-field>
                            </v-col>

                            <!-- Currency -->
                            <v-col cols="12" md="6">
                                <v-autocomplete 
                                    item-text="code" 
                                    item-value="id" 
                                    :items="findAllCurrency" 
                                    label="Currency"
                                    v-model="currencyId"
                                    outlined
                                    dense
                                    prepend-inner-icon="mdi-currency-usd"
                                    :rules="[v => !!v || 'Please select currency']"
                                ></v-autocomplete>
                            </v-col>

                            <!-- Lot Number -->
                            <v-col cols="12" md="6">
                                <v-text-field 
                                    label="Lot Number (Optional)"
                                    v-model="lotNumber"
                                    outlined
                                    dense
                                    prepend-inner-icon="mdi-barcode"
                                    placeholder="e.g., LOT2024001"
                                    hint="Batch/Lot identification number"
                                    persistent-hint
                                ></v-text-field>
                            </v-col>

                            <!-- Serial Number -->
                            <v-col cols="12" md="6">
                                <v-text-field 
                                    label="Serial Number (Optional)"
                                    v-model="serialNo"
                                    outlined
                                    dense
                                    prepend-inner-icon="mdi-numeric"
                                    placeholder="e.g., SER001, DEVICE2024"
                                    hint="Individual item serial number"
                                    persistent-hint
                                ></v-text-field>
                            </v-col>

                            <!-- Expiry Date -->
                            <v-col cols="12" md="6">
                                <v-menu
                                    v-model="expiryMenu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="expiryDateFormatted"
                                            label="Expiry Date (Optional)"
                                            prepend-inner-icon="mdi-calendar-clock"
                                            outlined
                                            dense
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            :color="expiryStatus.color"
                                            :hint="expiryStatus.message"
                                            persistent-hint
                                            clearable
                                            @click:clear="clearExpiryDate"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="expiryDate"
                                        :min="minDate"
                                        @input="expiryMenu = false"
                                        color="primary"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>

                        <!-- Cost Calculation Section -->
                        <v-row>
                            <v-col cols="12">
                                <v-card outlined class="pa-3">
                                    <v-card-subtitle class="pa-0 mb-2">
                                        <v-icon small>mdi-calculator</v-icon>
                                        Cost Calculation
                                    </v-card-subtitle>

                                    <!-- Cost Type Toggle -->
                                    <v-btn-toggle 
                                        v-model="costType" 
                                        exclusive 
                                        dense 
                                        class="mb-3"
                                        color="primary"
                                    >
                                        <v-btn value="perUnit" small>
                                            <v-icon left small>mdi-numeric-1-circle</v-icon>
                                            Per Unit
                                        </v-btn>
                                        <v-btn value="total" small>
                                            <v-icon left small>mdi-sigma</v-icon>
                                            Total Cost
                                        </v-btn>
                                    </v-btn-toggle>

                                    <v-row>
                                        <!-- Cost Input -->
                                        <v-col cols="12" md="6">
                                            <v-text-field 
                                                :label="costType === 'perUnit' ? 'Cost Per Unit' : 'Total Cost'"
                                                :rules="numberRule"
                                                hide-details="auto"
                                                v-model="costInput"
                                                outlined
                                                dense
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                :prepend-inner-icon="costType === 'perUnit' ? 'mdi-tag' : 'mdi-calculator'"
                                                :suffix="selectedCurrencyCode"
                                                @input="calculateCosts"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- Calculated Display -->
                                        <v-col cols="12" md="6">
                                            <v-text-field 
                                                :label="costType === 'perUnit' ? 'Total Cost' : 'Cost Per Unit'"
                                                :value="calculatedCost"
                                                outlined
                                                dense
                                                readonly
                                                :prepend-inner-icon="costType === 'perUnit' ? 'mdi-calculator' : 'mdi-tag'"
                                                :suffix="selectedCurrencyCode"
                                                class="grey--text"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <!-- Cost Summary -->
                                    <v-alert 
                                        v-if="stockQty && costInput" 
                                        color="info" 
                                        dense 
                                        outlined 
                                        class="mt-2"
                                    >
                                        <v-row align="center">
                                            <v-col>
                                                <strong>Cost Summary:</strong> 
                                                {{ stockQty }} units × {{ formatPrice(costPerUnit) }} {{ selectedCurrencyCode }} 
                                                = {{ formatPrice(totalCost) }} {{ selectedCurrencyCode }}
                                            </v-col>
                                        </v-row>
                                    </v-alert>

                                    <!-- Stock Info Summary -->
                                    <v-alert 
                                        v-if="lotNumber || serialNo || expiryDate || colorId || sizeId" 
                                        :color="expiryStatus.color || 'primary'" 
                                        dense 
                                        outlined 
                                        class="mt-2"
                                    >
                                        <div class="d-flex align-center">
                                            <v-icon small class="mr-2">mdi-information</v-icon>
                                            <div>
                                                <strong>Stock Information:</strong>
                                                <span v-if="selectedColor" class="ml-2">
                                                    <v-chip x-small color="secondary" outlined>
                                                        <div 
                                                            v-if="selectedColor.hex_code"
                                                            class="color-preview-tiny mr-1"
                                                            :style="{ backgroundColor: selectedColor.hex_code }"
                                                        ></div>
                                                        <v-icon v-else x-small left>mdi-palette</v-icon>
                                                        {{ selectedColor.color_name }}
                                                    </v-chip>
                                                </span>
                                                <span v-if="selectedSize" class="ml-2">
                                                    <v-chip x-small color="secondary" outlined>
                                                        <v-icon x-small left>mdi-ruler</v-icon>
                                                        {{ selectedSize.size_name }}
                                                    </v-chip>
                                                </span>
                                                <span v-if="lotNumber" class="ml-2">
                                                    <v-chip x-small color="secondary" outlined>
                                                        <v-icon x-small left>mdi-barcode</v-icon>
                                                        {{ lotNumber }}
                                                    </v-chip>
                                                </span>
                                                <span v-if="serialNo" class="ml-2">
                                                    <v-chip x-small color="info" outlined>
                                                        <v-icon x-small left>mdi-numeric</v-icon>
                                                        {{ serialNo }}
                                                    </v-chip>
                                                </span>
                                                <span v-if="expiryDate" class="ml-2">
                                                    <v-chip x-small :color="expiryStatus.color" outlined>
                                                        <v-icon x-small left>mdi-calendar</v-icon>
                                                        {{ expiryDateFormatted }}
                                                    </v-chip>
                                                </span>
                                            </div>
                                        </div>
                                        <div v-if="expiryDate" class="caption mt-1">
                                            {{ expiryStatus.message }}
                                        </div>
                                    </v-alert>
                                </v-card>
                            </v-col>
                        </v-row>

                        <!-- Exchange Rate Info -->
                        <v-row v-if="currencyExchangeRate !== 1">
                            <v-col cols="12">
                                <v-alert color="warning" dense outlined>
                                    <v-icon small left>mdi-swap-horizontal</v-icon>
                                    Exchange Rate: 1 {{ selectedCurrencyCode }} = {{ currencyExchangeRate }} 
                                    (Base Currency)
                                </v-alert>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card-text>

            <!-- Enhanced Actions -->
            <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn 
                    outlined 
                    color="grey" 
                    @click="$emit('close-dialog')"
                    :disabled="isSubmitting"
                >
                    <v-icon left>mdi-close</v-icon>
                    Cancel
                </v-btn>
                <v-btn 
                    color="primary" 
                    @click="stockSubmit"
                    :loading="isSubmitting"
                    :disabled="!isFormValid"
                >
                    <v-icon left>mdi-content-save</v-icon>
                    Add Stock
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common/index'
import { mapGetters } from 'vuex'

export default {
    props: {
        id: {
            type: Number,
            default: 0,
        },
        productId: {
            type: Number,
            default: '',
        },
        productName: {
            type: String,
            default: '',
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
        cost: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            stockQty: 1,
            costInput: 0,
            costType: 'perUnit', // 'perUnit' or 'total'
            isSubmitting: false,
            locationList: [],
            srcLocationId: null,
            currencyId: 1,
            lotNumber: '',
            serialNo: '',
            expiryDate: null,
            expiryMenu: false,
            
            // New fields for Color and Size
            colorId: null,
            sizeId: null,
            colorList: [],
            sizeList: [],
            loadingColors: false,
            loadingSizes: false,
        }
    },
    computed: {
        ...mapGetters(['findAllCurrency', 'findSelectedTerminal', 'findAllTerminal']),
        
        quantityRules() {
            return [
                v => !!v || 'Please enter quantity',
                v => /^[0-9]+$/.test(v) || 'Only numbers allowed',
                v => parseInt(v) > 0 || 'Quantity must be greater than 0'
            ]
        },
        
        numberRule() {
            return [
                v => !!v || 'Please enter amount',
                v => /^[0-9]+\.?[0-9]*$/.test(v) || 'Invalid number format',
                v => parseFloat(v) >= 0 || 'Amount must be positive'
            ]
        },
        
        user() {
            return this.$auth.user || ''
        },
        
        currencyExchangeRate() {
            const currency = this.findAllCurrency.find(el => el.id == this.currencyId)
            return currency ? currency.rate : 1
        },

        selectedCurrencyCode() {
            const currency = this.findAllCurrency.find(el => el.id == this.currencyId)
            return currency ? currency.code : ''
        },

        selectedColor() {
            return this.colorList.find(color => color.id === this.colorId)
        },

        selectedSize() {
            return this.sizeList.find(size => size.id === this.sizeId)
        },

        costPerUnit() {
            if (this.costType === 'perUnit') {
                return parseFloat(this.costInput) || 0
            } else {
                return this.stockQty > 0 ? (parseFloat(this.costInput) || 0) / this.stockQty : 0
            }
        },

        totalCost() {
            if (this.costType === 'total') {
                return parseFloat(this.costInput) || 0
            } else {
                return (parseFloat(this.costInput) || 0) * (this.stockQty || 0)
            }
        },

        calculatedCost() {
            if (this.costType === 'perUnit') {
                return this.formatPrice(this.totalCost)
            } else {
                return this.formatPrice(this.costPerUnit)
            }
        },

        isFormValid() {
            return this.stockQty > 0 && 
                   this.costInput >= 0 && 
                   this.srcLocationId && 
                   this.currencyId &&
                   !this.isSubmitting
        },

        // Date handling
        minDate() {
            return new Date().toISOString().substr(0, 10)
        },

        expiryDateFormatted() {
            return this.expiryDate ? this.formatDate(this.expiryDate) : ''
        },

        expiryStatus() {
            if (!this.expiryDate) {
                return { color: '', message: 'No expiry date set' }
            }

            const today = new Date()
            const expiry = new Date(this.expiryDate)
            const diffTime = expiry.getTime() - today.getTime()
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            if (diffDays < 0) {
                return { color: 'error', message: 'Already expired!' }
            } else if (diffDays <= 30) {
                return { color: 'warning', message: `Expires in ${diffDays} days` }
            } else if (diffDays <= 90) {
                return { color: 'orange', message: `Expires in ${diffDays} days` }
            } else {
                return { color: 'success', message: `Expires in ${diffDays} days` }
            }
        }
    },
    
    watch: {
        cost: {
            immediate: true,
            handler(newVal) {
                if (newVal > 0) {
                    this.costInput = newVal
                }
            }
        },

        stockQty() {
            this.calculateCosts()
        }
    },
    
    created() {
        console.log(`Location in terminal ${this.findSelectedTerminal}`)
        const terminal = this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        if (terminal) {
            this.srcLocationId = terminal['locationId']
        }

        this.loadLocation()
        this.loadProduct()
        this.loadColors()
        this.loadSizes()
    },
    
    methods: {
        calculateCosts() {
            // This method is called when input changes to trigger reactivity
            // The actual calculations are handled by computed properties
        },

        formatPrice(amount) {
            return new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(amount || 0)
        },

        formatDate(date) {
            if (!date) return ''
            const d = new Date(date)
            const day = String(d.getDate()).padStart(2, '0')
            const month = String(d.getMonth() + 1).padStart(2, '0')
            const year = d.getFullYear()
            return `${day}/${month}/${year}`
        },

        clearExpiryDate() {
            this.expiryDate = null
        },

        validateExpiryDate() {
            if (this.expiryDate) {
                const today = new Date()
                const expiry = new Date(this.expiryDate)
                
                if (expiry < today) {
                    this.$emit('show-message', 
                        'Warning: Adding stock with expired date!', 
                        'warning', 
                        'mdi-calendar-alert'
                    )
                }
            }
        },

        async loadLocation() {
            try {
                const res = await this.$axios.get(`api/location/find`)
                this.locationList = res.data.map(el => el)
            } catch (error) {
                swalError2(this.$swal, 'Error', 'Failed to load locations: ' + error.message)
            }
        },

        async loadColors() {
            this.loadingColors = true
            try {
                const res = await this.$axios.get(`api/color`)
                this.colorList = res.data.data || res.data || []
                console.log('Colors loaded:', this.colorList.length)
            } catch (error) {
                console.error('Failed to load colors:', error)
                swalError2(this.$swal, 'Warning', 'Failed to load colors: ' + error.message)
                this.colorList = []
            }
            this.loadingColors = false
        },

        async loadSizes() {
            this.loadingSizes = true
            try {
                const res = await this.$axios.get(`api/size`)
                this.sizeList = res.data.data || res.data || []
                console.log('Sizes loaded:', this.sizeList.length)
            } catch (error) {
                console.error('Failed to load sizes:', error)
                swalError2(this.$swal, 'Warning', 'Failed to load sizes: ' + error.message)
                this.sizeList = []
            }
            this.loadingSizes = false
        },

        async loadProduct() {
            this.isSubmitting = true
            try {
                const res = await this.$axios.get(`api/product/find/${this.id}`)
                if (res.data.costCurrency) {
                    console.log(`Cost info available`)
                    this.currencyId = res.data.costCurrency.id
                } else {
                    console.log(`Cost info not available`)
                }
            } catch (error) {
                swalError2(this.$swal, 'Error', 'Failed to load product: ' + error.message)
            }
            this.isSubmitting = false
        },

        async stockSubmit() {
            if (this.$refs.myform.validate() && !this.isSubmitting) {
                // Validate expiry date
                this.validateExpiryDate()
                
                this.isSubmitting = true
                
                const stockData = {
                    inputter: this.user.id,
                    product_id: this.productId,
                    stockCardQty: parseInt(this.stockQty),
                    totalCost: this.totalCost,
                    costPerUnit: this.costPerUnit,
                    productId: this.id,
                    srcLocationId: this.srcLocationId,
                    currencyId: this.currencyId,
                    exchangeRate: this.currencyExchangeRate,
                    costType: this.costType,
                    lotNumber: this.lotNumber || null,
                    serialNo: this.serialNo || null,
                    expiryDate: this.expiryDate || null,
                    hasExpiry: !!this.expiryDate,
                    hasLot: !!this.lotNumber,
                    // New fields for Color and Size
                    colorId: this.colorId || null,
                    sizeId: this.sizeId || null,
                }
                
                console.log("Stock data:", stockData)
                
                try {
                    const res = await this.$axios.post('/api/card/bulkCreate', stockData)
                    console.log(res.data)
                    
                    let successMessage = 'Stock added successfully!'
                    const details = []
                    
                    if (this.selectedColor) details.push(`Color: ${this.selectedColor.color_name}`)
                    if (this.selectedSize) details.push(`Size: ${this.selectedSize.size_name}`)
                    if (this.lotNumber) details.push(`Lot: ${this.lotNumber}`)
                    if (this.serialNo) details.push(`Serial: ${this.serialNo}`)
                    if (this.expiryDate) details.push(`Expires: ${this.expiryDateFormatted}`)
                    
                    if (details.length > 0) {
                        successMessage += ` (${details.join(', ')})`
                    }
                    
                    swalSuccess(this.$swal, 'Success', successMessage)
                    this.$emit('reload')
                    this.$emit('close-dialog')
                } catch (error) {
                    console.log(error)
                    swalError2(this.$swal, "Error", error.response?.data || error.message)
                }
                
                this.isSubmitting = false
            }
        }
    }
}
</script>

<style scoped>
.v-card {
    border-radius: 12px !important;
}

.v-btn-toggle .v-btn {
    border-radius: 8px !important;
}

.v-alert {
    border-radius: 8px !important;
}

.v-text-field.v-text-field--outlined > .v-input__control > .v-input__slot {
    border-radius: 8px !important;
}

.grey--text .v-input__slot {
    background-color: #f5f5f5 !important;
}

/* Color preview styles */
.color-preview {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #ddd;
    display: inline-block;
}

.color-preview-small {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    border: 1px solid #ddd;
    display: inline-block;
}

.color-preview-tiny {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid #ddd;
    display: inline-block;
}
</style>