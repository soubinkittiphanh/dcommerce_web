<template>
  <v-dialog v-model="show" max-width="900px" scrollable persistent>
    <v-card class="rounded-lg shadow-lg noto-sans-lao">
      <v-card-title class="headline grey lighten-4 d-flex justify-between align-center px-6 py-4">
        <span class="font-weight-bold primary--text subtitle-1-lao">
          <v-icon color="primary" class="mr-2">mdi-book-open-variant</v-icon>
          ຈັດການສູດອາຫານ (Recipe Management)
        </span>
        <v-btn icon @click="closeDialog" class="ml-auto">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-6" style="height: 600px; background-color: #f7f9fc;">
        <!-- Product Info Summary -->
        <v-card flat class="mb-6 rounded-lg pa-4 border" style="background-color: #ffffff;">
          <v-row align="center">
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-icon large color="primary" class="mr-4">mdi-coffee</v-icon>
              <div>
                <div class="text-subtitle-2 grey--text">ເມນູອາຫານ / Product:</div>
                <div class="text-h6 font-weight-bold black--text">{{ productName }}</div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="text-md-right">
              <div class="d-inline-block text-left mr-4">
                <div class="caption-lao grey--text">ລາຄາຂາຍ (Price)</div>
                <div class="text-subtitle-1 font-weight-bold success--text">{{ formatNumber(productPrice) }} Kip</div>
              </div>
              <div class="d-inline-block text-left">
                <div class="caption-lao grey--text">ຕົ້ນທຶນສູດ (Cost)</div>
                <div class="text-subtitle-1 font-weight-bold error--text">{{ formatNumber(calculatedTotalCost) }} Kip</div>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- Loading State -->
        <div v-if="isloading" class="d-flex flex-column align-center justify-center py-12">
          <v-progress-circular indeterminate color="primary" size="64" width="6"></v-progress-circular>
          <span class="mt-4 grey--text text--darken-1 font-weight-medium">ກຳລັງໂຫຼດຂໍ້ມູນສູດອາຫານ...</span>
        </div>

        <div v-else>
          <v-card
            class="mb-6 rounded-lg border"
            flat
            style="border: 1px solid #e0e0e0; background-color: #ffffff;"
          >
            <!-- Card Header -->
            <v-card-title class="px-5 py-3 d-flex align-center border-bottom grey lighten-5">
              <div>
                <span class="text-h6 font-weight-bold text-primary">ລາຍການວັດຖຸດິບໃນສູດ (Recipe Ingredients)</span>
                <span class="ml-3">
                  <v-chip small color="primary lighten-5 primary--text" class="font-weight-medium">
                    ວັດຖຸດິບທັງໝົດ: {{ recipeItems.length }} ລາຍການ
                  </v-chip>
                </span>
              </div>
            </v-card-title>

            <v-divider></v-divider>

            <!-- Card Body -->
            <v-card-text class="pa-5">
              <!-- Choices List -->
              <v-simple-table v-if="recipeItems.length > 0" class="elevation-0 mb-4 border rounded-lg overflow-hidden">
                <thead>
                  <tr class="grey lighten-4">
                    <th class="text-left font-weight-bold">ຊື່ວັດຖຸດິບ (Ingredient)</th>
                    <th class="text-center font-weight-bold" style="width: 140px;">ຈຳນວນ (Qty)</th>
                    <th class="text-left font-weight-bold" style="width: 180px;">ຫົວໜ່ວຍ (Unit)</th>
                    <th class="text-right font-weight-bold" style="width: 140px;">ລາຄາ/ໜ່ວຍ (Unit Cost)</th>
                    <th class="text-right font-weight-bold" style="width: 140px;">ຕົ້ນທຶນລວມ (Total Cost)</th>
                    <th class="text-center font-weight-bold" style="width: 80px;">ລຶບ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in recipeItems" :key="index">
                    <td class="font-weight-medium">
                      {{ item.ingredientName || getProductNameById(item.ingredientId) }}
                    </td>
                    <td>
                      <v-text-field
                        v-model.number="item.quantity"
                        type="number"
                        dense
                        outlined
                        hide-details
                        class="text-center"
                        @input="calculateTotalCost"
                      ></v-text-field>
                    </td>
                    <td>
                      <v-select
                        v-model="item.unitId"
                        :items="units"
                        item-text="symbol"
                        item-value="id"
                        dense
                        outlined
                        hide-details
                        placeholder="ຫົວໜ່ວຍ"
                      ></v-select>
                    </td>
                    <td class="text-right font-weight-medium">
                      {{ formatNumber(getIngredientPrice(item.ingredientId)) }} Kip
                    </td>
                    <td class="text-right font-weight-bold primary--text">
                      {{ formatNumber(getIngredientPrice(item.ingredientId) * item.quantity) }} Kip
                    </td>
                    <td class="text-center">
                      <v-btn icon small color="error" @click="removeRecipeItem(index)">
                        <v-icon small>mdi-delete</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>

              <div v-else class="text-center py-8 grey--text text-subtitle-1 font-weight-medium">
                <v-icon size="48" color="grey lighten-1" class="mb-2 d-block mx-auto">mdi-clipboard-text-outline</v-icon>
                ບໍ່ມີວັດຖຸດິບໃນສູດເທື່ອ. ກະລຸນາເພີ່ມວັດຖຸດິບດ້ານລຸ່ມ:
              </div>

              <!-- Add Choice Inline Form -->
              <v-row dense class="align-center mt-2 grey lighten-5 pa-3 rounded-lg border">
                <v-col cols="5">
                  <v-autocomplete
                    v-model="newIngredient.ingredientId"
                    :items="stockProducts"
                    item-text="pro_name"
                    item-value="id"
                    label="ເລືອກວັດຖຸດິບ"
                    placeholder="ຄົ້ນຫາວັດຖຸດິບ..."
                    outlined
                    dense
                    hide-details
                    background-color="white"
                    @change="onNewIngredientChange"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model.number="newIngredient.quantity"
                    label="ຈຳນວນ"
                    type="number"
                    outlined
                    dense
                    hide-details
                    background-color="white"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-select
                    v-model="newIngredient.unitId"
                    :items="units"
                    item-text="symbol"
                    item-value="id"
                    label="ຫົວໜ່ວຍ"
                    outlined
                    dense
                    hide-details
                    background-color="white"
                  ></v-select>
                </v-col>
                <v-col cols="2">
                  <v-btn
                    color="primary"
                    block
                    depressed
                    class="rounded-lg text-none py-2"
                    style="height: 40px;"
                    @click="addRecipeItem"
                  >
                    <v-icon left>mdi-plus</v-icon>
                    ເພີ່ມ
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="px-6 py-4 grey lighten-4 d-flex">
        <v-btn outlined color="grey darken-1" class="rounded-lg text-none" @click="closeDialog">ຍົກເລີກ (Cancel)</v-btn>
        <v-spacer></v-spacer>
        <div class="mr-4 align-self-center font-weight-medium">
          Margin: <span :class="profitMargin >= 0 ? 'success--text' : 'error--text'" class="font-weight-bold">{{ formatNumber(profitMargin) }} Kip</span>
        </div>
        <v-btn color="primary" depressed class="rounded-lg px-6 text-none" :loading="isSaving" @click="saveRecipe">
          <v-icon left>mdi-content-save</v-icon>
          ບັນທຶກສູດ (Save Recipe)
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFormatNum } from '~/common'

export default {
  name: 'ProductRecipeDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      default: '',
    },
    productPrice: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      recipeItems: [],
      units: [],
      isloading: false,
      isSaving: false,
      calculatedTotalCost: 0,
      profitMargin: 0,
      newIngredient: {
        ingredientId: null,
        quantity: 1,
        unitId: null,
      },
    }
  },

  computed: {
    ...mapGetters(['findAllProduct']),
    stockProducts() {
      return (this.findAllProduct || []).filter(p => p._category === 'stock')
    },
    show: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  watch: {
    show(val) {
      if (val && this.productId) {
        this.initData()
      }
    },
  },

  methods: {
    formatNumber(val) {
      return getFormatNum(val)
    },

    getProductNameById(id) {
      const prod = this.findAllProduct.find((p) => p.id === id)
      return prod ? prod.pro_name : `ID: ${id}`
    },

    getIngredientPrice(id) {
      const prod = this.findAllProduct.find((p) => p.id === id)
      return prod ? (prod.pro_price || 0) : 0
    },

    async initData() {
      this.isloading = true
      this.recipeItems = []
      try {
        await this.loadUnits()
        await this.fetchRecipe()
      } catch (error) {
        console.error('Error initializing recipe dialog:', error)
      } finally {
        this.isloading = false
      }
    },

    async loadUnits() {
      try {
        const response = await this.$axios.get('/api/unit/find')
        this.units = response.data.data || response.data
      } catch (error) {
        console.error('Error loading units:', error)
      }
    },

    async fetchRecipe() {
      try {
        const res = await this.$axios.get(`/api/recipes/product/${this.productId}`)
        if (res.data && res.data.success) {
          const rawRecipes = res.data.data.recipes || []
          this.recipeItems = rawRecipes.map((r) => ({
            id: r.id,
            ingredientId: r.ingredientId,
            ingredientName: r.ingredient?.pro_name,
            quantity: r.quantity,
            unitId: r.unitId,
          }))
          this.calculateTotalCost()
        }
      } catch (error) {
        console.error('Error fetching recipes:', error)
        // 404 is expected if no recipe is set yet
        if (error.response && error.response.status !== 404) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນສູດອາຫານ')
        }
      }
    },

    calculateTotalCost() {
      this.calculatedTotalCost = this.recipeItems.reduce((total, item) => {
        const price = this.getIngredientPrice(item.ingredientId)
        return total + (price * (item.quantity || 0))
      }, 0)
      this.profitMargin = this.productPrice - this.calculatedTotalCost
    },

    onNewIngredientChange(val) {
      if (!val) return
      const prod = this.findAllProduct.find((p) => p.id === val)
      if (prod && prod.stockUnitId) {
        this.newIngredient.unitId = prod.stockUnitId
      }
    },

    addRecipeItem() {
      const { ingredientId, quantity, unitId } = this.newIngredient
      if (!ingredientId) {
        this.$toast.error('ກະລຸນາເລືອກວັດຖຸດິບ')
        return
      }
      if (!quantity || quantity <= 0) {
        this.$toast.error('ກະລຸນາປ້ອນຈຳນວນທີ່ຖືກຕ້ອງ')
        return
      }

      // Check duplicate
      const exists = this.recipeItems.some((item) => item.ingredientId === ingredientId)
      if (exists) {
        this.$toast.error('ວັດຖຸດິບນີ້ມີຢູ່ໃນສູດແລ້ວ')
        return
      }

      const prod = this.findAllProduct.find((p) => p.id === ingredientId)

      this.recipeItems.push({
        ingredientId,
        ingredientName: prod ? prod.pro_name : '',
        quantity,
        unitId,
      })

      // Reset new ingredient form
      this.newIngredient = {
        ingredientId: null,
        quantity: 1,
        unitId: null,
      }

      this.calculateTotalCost()
      this.$toast.success('ເພີ່ມວັດຖຸດິບເຂົ້າໃນລາຍການແລ້ວ')
    },

    removeRecipeItem(index) {
      this.recipeItems.splice(index, 1)
      this.calculateTotalCost()
    },

    closeDialog() {
      this.show = false
    },

    async saveRecipe() {
      this.isSaving = true
      try {
        const payload = {
          productId: this.productId,
          recipes: this.recipeItems.map((item) => ({
            name: `${this.productName} Recipe Ingredient`,
            ingredientId: item.ingredientId,
            quantity: item.quantity,
            unitId: item.unitId,
          })),
        }

        const res = await this.$axios.post('/api/recipes/bulk', payload)
        if (res.data && res.data.success) {
          this.$toast.success('ບັນທຶກສູດອາຫານສຳເລັດ')
          this.$emit('saved')
          this.closeDialog()
        }
      } catch (error) {
        console.error('Error saving recipe:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກສູດອາຫານ')
      } finally {
        this.isSaving = false
      }
    },
  },
}
</script>

<style scoped>
.border {
  border: 1px solid #e0e0e0 !important;
}
.border-dashed {
  border-style: dashed !important;
}
.caption-lao {
  font-family: 'Noto Sans Lao', sans-serif !important;
  font-size: 0.75rem !important;
  font-weight: 400;
  letter-spacing: 0.0333333333em !important;
  line-height: 1.25rem;
}
.subtitle-1-lao {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
