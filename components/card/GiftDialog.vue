<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-card class="elevation-12 gift-dialog">
      <!-- Header -->
      <v-card-title class="pink white--text py-4">
        <v-icon left size="28" color="white">mdi-gift</v-icon>
        <span class="text-h6">{{ isEditMode ? 'ແກ້ໄຂຂອງຂວັນ' : 'ກຳນົດຂອງຂວັນ' }}</span>
        <v-spacer></v-spacer>
        <v-icon color="white">mdi-heart</v-icon>
      </v-card-title>
      
      <v-divider class="pink darken-1"></v-divider>

      <!-- Content -->
      <v-card-text class="pa-6">
        <!-- Product Info -->
        <div class="product-info mb-4">
          <v-row align="center" no-gutters>
            <v-col cols="auto" class="mr-3">
              <v-avatar color="pink lighten-4" size="48">
                <v-icon color="pink">mdi-gift</v-icon>
              </v-avatar>
            </v-col>
            <v-col>
              <div class="font-weight-bold text-h6">{{ item?.pro_name }}</div>
              <div class="text-caption grey--text">ສິນຄ້າທີ່ຈະກຳນົດເປັນຂອງຂວັນ</div>
              <div class="text-caption blue--text mt-1">
                ລາຄາເດີມ: {{ formatNumber(item?.localPrice || 0) }} × {{ item?.qty || 0 }}
              </div>
            </v-col>
          </v-row>
        </div>

        <v-divider class="mb-4"></v-divider>

        <!-- Gift Mode Selection -->
        <div class="gift-mode-selection mb-4">
          <v-row>
            <v-col cols="12">
              <div class="text-subtitle-2 mb-2">ເລືອກແບບຂອງຂວັນ:</div>
              <v-btn-toggle
                v-model="giftMode"
                color="pink"
                dense
                rounded
                mandatory
                class="gift-mode-toggle"
              >
                <v-btn value="partial" small>
                  <v-icon small left>mdi-gift-outline</v-icon>
                  ບາງສ່ວນ
                </v-btn>
                <v-btn value="all" small>
                  <v-icon small left>mdi-gift</v-icon>
                  ທັງໝົດ
                </v-btn>
                <v-btn value="none" small color="grey">
                  <v-icon small left>mdi-close</v-icon>
                  ຍົກເລີກຂອງຂວັນ
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </div>

        <!-- Gift Settings (show when not removing gift) -->
        <div v-if="giftMode !== 'none'" class="gift-settings">
          <!-- Gift Quantity (only for partial mode) -->
          <v-row v-if="giftMode === 'partial'">
            <v-col cols="12">
              <v-text-field
                v-model.number="giftForm.quantity"
                label="ຈຳນວນຂອງຂວັນ"
                type="number"
                outlined
                dense
                min="1"
                :max="item?.qty || 1"
                prepend-inner-icon="mdi-numeric"
                :rules="quantityRules"
                class="gift-input"
                hint="ຈຳນວນທີ່ຈະກຳນົດເປັນຂອງຂວັນ"
                persistent-hint
              >
                <template v-slot:append-outer>
                  <v-btn
                    icon
                    small
                    @click="setMaxQuantity"
                    title="ເລືອກທັງໝົດ"
                    color="pink"
                  >
                    <v-icon small>mdi-plus-circle</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Gift Amount -->
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model.number="giftForm.giftAmount"
                label="ມູນຄ່າຂອງຂວັນ (ລາຄາທີ່ບັນທຶກ)"
                type="number"
                outlined
                dense
                min="0"
                prepend-inner-icon="mdi-currency-usd"
                :rules="amountRules"
                class="gift-input"
                hint="ລາຄາທີ່ຈະສະແດງໃນລາຍງານ (ຖ້າເປັນ 0 = ຟຣີ)"
                persistent-hint
              >
                <template v-slot:append-outer>
                  <v-btn
                    icon
                    small
                    @click="setZeroAmount"
                    title="ກຳນົດເປັນ 0 (ຟຣີ)"
                    color="pink"
                  >
                    <v-icon small>mdi-gift-outline</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Gift Summary -->
          <v-card color="pink lighten-5" outlined class="mt-4">
            <v-card-text class="pa-4">
              <div class="text-subtitle-2 pink--text text--darken-2 mb-2">
                <v-icon small color="pink darken-2" class="mr-1">mdi-information</v-icon>
                ສະຫຼຸບຂອງຂວັນ
              </div>
              
              <v-row dense v-if="giftMode === 'partial'">
                <v-col cols="6">
                  <div class="text-caption grey--text">ຈຳນວນປົກກະຕິ:</div>
                  <div class="font-weight-bold">{{ remainingQuantity }} ລາຍການ</div>
                </v-col>
                <v-col cols="6">
                  <div class="text-caption grey--text">ຈຳນວນຂອງຂວັນ:</div>
                  <div class="font-weight-bold pink--text">{{ effectiveGiftQuantity }} ລາຍການ</div>
                </v-col>
              </v-row>
              
              <v-row dense v-else>
                <v-col cols="12">
                  <div class="text-caption grey--text">ຈຳນວນທັງໝົດ (ເປັນຂອງຂວັນ):</div>
                  <div class="font-weight-bold pink--text">{{ item?.qty || 0 }} ລາຍການ</div>
                </v-col>
              </v-row>
              
              <v-divider class="my-2"></v-divider>
              
              <v-row dense v-if="giftMode === 'partial'">
                <v-col cols="6">
                  <div class="text-caption grey--text">ລາຄາປົກກະຕິ:</div>
                  <div class="font-weight-bold">{{ formatNumber(remainingQuantity * (item?.localPrice || 0)) }}</div>
                </v-col>
                <v-col cols="6">
                  <div class="text-caption grey--text">ລາຄາຂອງຂວັນ:</div>
                  <div class="font-weight-bold pink--text">
                    {{ giftForm.giftAmount === 0 ? 'ຟຣີ' : formatNumber(effectiveGiftQuantity * giftForm.giftAmount) }}
                  </div>
                </v-col>
              </v-row>
              
              <v-row dense v-else>
                <v-col cols="6">
                  <div class="text-caption grey--text">ລາຄາເດີມ:</div>
                  <div class="text-decoration-line-through">{{ formatNumber((item?.qty || 0) * (item?.localPrice || 0)) }}</div>
                </v-col>
                <v-col cols="6">
                  <div class="text-caption grey--text">ລາຄາຂອງຂວັນ:</div>
                  <div class="font-weight-bold pink--text">
                    {{ giftForm.giftAmount === 0 ? 'ຟຣີ' : formatNumber((item?.qty || 0) * giftForm.giftAmount) }}
                  </div>
                </v-col>
              </v-row>

              <v-divider class="my-2"></v-divider>
              
              <!-- Total -->
              <v-row dense>
                <v-col cols="12">
                  <div class="text-subtitle-2 font-weight-bold">
                    <span class="grey--text">ລວມທັງໝົດ: </span>
                    <span class="pink--text text--darken-2">{{ getTotalPrice() }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- Gift Note -->
          <v-row class="mt-3">
            <v-col cols="12">
              <v-textarea
                v-model="giftForm.giftNote"
                label="ບັນທຶກຂອງຂວັນ (ທາງເລືອກ)"
                outlined
                dense
                rows="2"
                prepend-inner-icon="mdi-note-text"
                placeholder="ເຊັ່ນ: ຂອງຂວັນສຳລັບລູກຄ້າພິເສດ..."
                class="gift-input"
              ></v-textarea>
            </v-col>
          </v-row>
        </div>

        <!-- Remove Gift Confirmation -->
        <div v-else class="remove-gift-confirmation">
          <v-alert
            type="warning"
            outlined
            class="mt-4"
          >
            <div class="font-weight-bold mb-2">ຢືນຢັນການຍົກເລີກຂອງຂວັນ</div>
            <div class="text-body-2">
              ສິນຄ້ານີ້ຈະກັບໄປເປັນລາຄາປົກກະຕິ: 
              <strong>{{ formatNumber((item?.qty || 0) * (item?.localPrice || 0)) }}</strong>
            </div>
          </v-alert>
        </div>
      </v-card-text>

      <!-- Actions -->
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          color="grey"
          text
          large
          @click="cancelGift"
          class="px-6"
        >
          <v-icon left>mdi-close</v-icon>
          ຍົກເລີກ
        </v-btn>
        <v-btn
          :color="giftMode === 'none' ? 'orange' : 'pink'"
          large
          @click="confirmGift"
          :disabled="!isValidGift"
          class="px-6 ml-2"
        >
          <v-icon left>{{ giftMode === 'none' ? 'mdi-delete' : 'mdi-gift' }}</v-icon>
          {{ giftMode === 'none' ? 'ຍົກເລີກຂອງຂວັນ' : 'ຢືນຢັນຂອງຂວັນ' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'GiftDialog',
  
  props: {
    value: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: null
    },
    formatNumber: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      giftMode: 'partial', // 'partial', 'all', 'none'
      giftForm: {
        quantity: 1,
        giftAmount: 0,
        giftNote: ''
      },
      quantityRules: [
        v => !!v || 'ກະລຸນາໃສ່ຈຳນວນ',
        v => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0',
        v => v <= (this.item?.qty || 1) || `ຈຳນວນສູງສຸດ ${this.item?.qty || 1}`
      ],
      amountRules: [
        v => v >= 0 || 'ລາຄາຕ້ອງມາກກວ່າ ຫຼື ເທົ່າກັບ 0'
      ]
    }
  },

  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },

    isEditMode() {
      return this.item?.isGift || (this.item?.giftQuantity > 0)
    },

    effectiveGiftQuantity() {
      return this.giftMode === 'all' ? (this.item?.qty || 0) : this.giftForm.quantity
    },

    remainingQuantity() {
      return Math.max(0, (this.item?.qty || 0) - this.effectiveGiftQuantity)
    },

    isValidGift() {
      if (this.giftMode === 'none') return true
      
      if (this.giftMode === 'partial') {
        return this.giftForm.quantity > 0 && 
               this.giftForm.quantity <= (this.item?.qty || 0) &&
               this.giftForm.giftAmount >= 0
      }
      
      return this.giftForm.giftAmount >= 0
    }
  },

  watch: {
    value(newVal) {
      if (newVal && this.item) {
        this.initializeGiftForm()
      }
    },

    item(newItem) {
      if (newItem) {
        this.initializeGiftForm()
      }
    },

    giftMode(newMode) {
      if (newMode === 'all') {
        this.giftForm.quantity = this.item?.qty || 1
      } else if (newMode === 'partial' && this.giftForm.quantity === (this.item?.qty || 1)) {
        this.giftForm.quantity = Math.min(1, this.item?.qty || 1)
      }
    }
  },

  methods: {
    initializeGiftForm() {
      // Initialize based on existing gift settings
      if (this.item?.isGift) {
        this.giftMode = 'all'
        this.giftForm = {
          quantity: this.item.qty || 1,
          giftAmount: this.item.giftAmount || 0,
          giftNote: this.item.giftNote || ''
        }
      } else if (this.item?.giftQuantity > 0) {
        this.giftMode = 'partial'
        this.giftForm = {
          quantity: this.item.giftQuantity,
          giftAmount: this.item.giftAmount || 0,
          giftNote: this.item.giftNote || ''
        }
      } else {
        this.giftMode = 'partial'
        this.giftForm = {
          quantity: Math.min(1, this.item?.qty || 1),
          giftAmount: 0,
          giftNote: ''
        }
      }
    },

    setMaxQuantity() {
      this.giftForm.quantity = this.item?.qty || 1
      this.giftMode = 'all'
    },

    setZeroAmount() {
      this.giftForm.giftAmount = 0
    },

    getTotalPrice() {
      if (this.giftMode === 'none') {
        return this.formatNumber((this.item?.qty || 0) * (this.item?.localPrice || 0))
      }
      
      const regularPrice = this.remainingQuantity * (this.item?.localPrice || 0)
      const giftPrice = this.effectiveGiftQuantity * this.giftForm.giftAmount
      
      return this.formatNumber(regularPrice + giftPrice)
    },

    cancelGift() {
      this.dialog = false
      this.initializeGiftForm()
    },

    confirmGift() {
      if (!this.isValidGift) return

      let giftData
      
      if (this.giftMode === 'none') {
        // Remove gift settings
        giftData = {
          item: this.item,
          action: 'remove-gift'
        }
      } else {
        // Configure gift
        giftData = {
          item: this.item,
          action: 'configure-gift',
          giftConfig: {
            isFullGift: this.giftMode === 'all',
            originalQuantity: this.item.qty,
            giftQuantity: this.effectiveGiftQuantity,
            regularQuantity: this.remainingQuantity,
            giftAmount: this.giftForm.giftAmount,
            giftNote: this.giftForm.giftNote,
            originalPrice: this.item.localPrice
          }
        }
      }

      console.warn(`GIFT MODEL DETAIL ${JSON.stringify(giftData)}`)
    //   TODO: Gift source maintenance 
      this.$emit('confirm-gift', giftData)
      this.dialog = false
      this.initializeGiftForm()
    }
  }
}
</script>

<style scoped>
.gift-dialog {
  border-radius: 16px !important;
  overflow: hidden;
}

.gift-input {
  margin-bottom: 8px;
}

.gift-input .v-input__control {
  min-height: 48px;
}

.product-info {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  border-radius: 12px;
  padding: 16px;
}

.gift-settings {
  animation: fadeInUp 0.5s ease-out;
}

.gift-mode-toggle {
  width: 100%;
}

.gift-mode-toggle .v-btn {
  flex: 1;
  text-transform: none;
}

.remove-gift-confirmation {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-card__title {
  background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%) !important;
}

/* Enhanced input styling */
.gift-input .v-text-field--outlined fieldset {
  border-color: #e91e63 !important;
  border-width: 2px;
}

.gift-input .v-text-field--outlined.v-input--is-focused fieldset {
  border-color: #c2185b !important;
}

/* Button styling */
.v-btn.pink {
  background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%) !important;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3) !important;
}

.v-btn.pink:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4) !important;
}

.v-btn.orange {
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%) !important;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3) !important;
  color: white !important;
}

.v-btn.orange:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4) !important;
}
</style>