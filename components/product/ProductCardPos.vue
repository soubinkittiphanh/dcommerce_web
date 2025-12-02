<template>
  <div>
    <v-hover v-slot:default="{ hover }" open-delay="100">
      <v-card 
        :elevation="hover ? 16 : 0" 
        outlined
        :class="{ 'disabled-card': stock <= 0 && product.validateStockOnSale == 1 }"
        @click="handleAddProduct"
      >
        <v-img
          max-height="200px"
          :src="`${host}/uploads/${imagePath}`"
          :lazy-src="`${host}/uploads/${imagePath}`"
        ></v-img>

        <v-card-text class="text-start">
          <div class="font-weight-medium primary--text">
            {{ productName }}
          </div>

          <div class="font-weight-medium primary--text">
            Stock: 
            <span :class="{ 'text-red': stock <= 0 }">
              {{ stock }} 
              <!-- {{ JSON.stringify(product) }} -->
            </span>
          </div>

          <div class="font-weight-medium primary--text">
            ລາຄາ: {{ formatNumber(product.localPrice) }}
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getFormatNum } from '../../common/index'
import { hostName } from '~/common/api'

export default {
  name: 'product-card-pos',

  props: {
    imagePath: { type: String, default: '' },
    productName: { type: String, default: '' },
    product: { type: Object, default: null },
    stock: { type: Number, default: 0 }
  },

  computed: {
    host() {
      return hostName()
    }
  },

  methods: {
    ...mapActions(['addProduct']),

    handleAddProduct() {
      if (this.stock <= 0) {
        // Use your toast or fallback to alert
        if (this.$toast) {
          this.$toast.error("Stock not enough")
        } else {
          alert("Stock not enough")
        }
        return
      }

      this.addProduct(this.product)
    },

    formatNumber(val) {
      return getFormatNum(val)
    }
  }
}
</script>

<style scoped>
.disabled-card {
  opacity: 0.5;
  cursor: not-allowed !important;
  pointer-events: none;
}

.text-red {
  color: red !important;
}
</style>
