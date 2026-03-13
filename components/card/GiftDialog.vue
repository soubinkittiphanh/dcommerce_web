<template>
  <v-dialog v-model="dialog" max-width="480" persistent>
    <v-card class="elevation-8">
      <!-- Compact Header -->
      <v-card-title class="pink darken-1 white--text py-3">
        <v-icon left color="white">mdi-gift</v-icon>
        <span class="">{{ isEditMode ? 'ແກ້ໄຂຂອງຂວັນ' : 'ກຳນົດຂອງຂວັນ' }}</span>
        <v-spacer></v-spacer>
        <v-btn icon small @click="cancelGift" color="white">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Compact Content -->
      <v-card-text class="pa-4">
        <!-- Product Info (Minimal) -->
        <div class="d-flex align-center mb-3 pa-2 pink lighten-5 rounded">
          <v-icon color="pink" class="mr-2">mdi-gift</v-icon>
          <div class="flex-grow-1">
            <div class="font-weight-medium ">{{ item?.pro_name }}</div>
            <div class=" grey--text">
              {{ formatNumber(item?.localPrice || 0) }} × {{ item?.qty || 0 }}
            </div>
          </div>
        </div>

        <!-- Gift Mode (Compact Toggle) -->
        <v-btn-toggle
          v-model="giftMode"
          color="pink"
          dense
          mandatory
          class="mb-3 d-flex"
        >
          <v-btn value="partial" small class="flex-grow-1">
            <v-icon small left>mdi-gift-outline</v-icon>
            ບາງສ່ວນ
          </v-btn>
          <v-btn value="all" small class="flex-grow-1">
            <v-icon small left>mdi-gift</v-icon>
            ທັງໝົດ
          </v-btn>
          <v-btn value="none" small color="grey" class="flex-grow-1">
            <v-icon small left>mdi-close</v-icon>
            ຍົກເລີກ
          </v-btn>
        </v-btn-toggle>

        <!-- Gift Settings (Compact Form) -->
        <div v-if="giftMode !== 'none'">
          <!-- Quantity (Only for partial) -->
          <v-text-field
            v-if="giftMode === 'partial'"
            v-model.number="giftForm.quantity"
            label="ຈຳນວນ"
            type="number"
            dense
            outlined
            min="1"
            :max="item?.qty || 1"
            :rules="quantityRules"
            hide-details="auto"
            class="mb-2"
          >
            <template v-slot:append>
              <v-btn icon x-small @click="setMaxQuantity" color="pink">
                <v-icon x-small>mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-text-field>

          <!-- Gift Amount -->
          <v-text-field
            v-model.number="giftForm.giftAmount"
            label="ລາຄາຂອງຂວັນ"
            type="number"
            dense
            outlined
            min="0"
            :rules="amountRules"
            hide-details="auto"
            class="mb-2"
          >
            <template v-slot:append>
              <v-btn icon x-small @click="setZeroAmount" color="pink">
                <v-icon x-small>mdi-gift-outline</v-icon>
              </v-btn>
            </template>
          </v-text-field>

          <!-- Note (Optional) -->
          <v-text-field
            v-model="giftForm.giftNote"
            label="ໝາຍເຫດ (ບໍ່ບັງຄັບ)"
            dense
            outlined
            hide-details
            placeholder="ເຊັ່ນ: ຂອງຂວັນລູກຄ້າພິເສດ..."
            class="mb-3"
          ></v-text-field>

          <!-- Summary (Very Compact) -->
          <v-card color="pink lighten-5" flat class="pa-2 mb-3">
            <div class="d-flex justify-space-between ">
              <span>ຈຳນວນ:</span>
              <span class="pink--text font-weight-bold">
                {{ effectiveGiftQuantity }} / {{ item?.qty || 0 }}
              </span>
            </div>
            <div class="d-flex justify-space-between ">
              <span>ລວມ:</span>
              <span class="pink--text font-weight-bold">{{ getTotalPrice() }}</span>
            </div>
          </v-card>
        </div>

        <!-- Remove Confirmation (Minimal) -->
        <v-alert v-else type="warning" dense outlined class=" mb-3">
          ກັບໄປເປັນລາຄາປົກກະຕິ: <strong>{{ formatNumber((item?.qty || 0) * (item?.localPrice || 0)) }}</strong>
        </v-alert>
      </v-card-text>

      <!-- Compact Actions -->
      <v-card-actions class="pa-3">
        <v-btn
          text
          @click="cancelGift"
          class="flex-grow-1"
        >
          ຍົກເລີກ
        </v-btn>
        <v-btn
          :color="giftMode === 'none' ? 'orange' : 'pink'"
          @click="confirmGift"
          :disabled="!isValidGift"
          class="flex-grow-1 white--text"
        >
          <v-icon left small>{{ giftMode === 'none' ? 'mdi-delete' : 'mdi-gift' }}</v-icon>
          {{ giftMode === 'none' ? 'ຍົກເລີກຂອງຂວັນ' : 'ຢືນຢັນ' }}
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
      giftMode: 'partial',
      giftForm: {
        quantity: 1,
        giftAmount: 0,
        giftNote: ''
      },
      quantityRules: [
        v => !!v || 'ກະລຸນາໃສ່ຈຳນວນ',
        v => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0',
        v => v <= (this.item?.qty || 1) || `ສູງສຸດ ${this.item?.qty || 1}`
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
        giftData = {
          item: this.item,
          action: 'remove-gift'
        }
      } else {
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
      this.$emit('confirm-gift', giftData)
      this.dialog = false
      this.initializeGiftForm()
    }
  }
}
</script>

<style scoped>
/* Minimal styling */
.v-dialog > .v-card {
  border-radius: 12px;
}

.v-btn-toggle .v-btn {
  text-transform: none;
  font-size: 0.75rem;
}

.v-text-field--dense .v-input__control {
  min-height: 40px;
}

/* Smooth animations */
.v-enter-active, .v-leave-active {
  transition: all 0.3s ease;
}

.v-enter, .v-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>