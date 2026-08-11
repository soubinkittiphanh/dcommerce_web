<template>
  <v-dialog v-model="show" max-width="900px" scrollable persistent>
    <v-card class="rounded-lg shadow-lg">
      <v-card-title class="headline grey lighten-4 d-flex justify-between align-center px-6 py-4">
        <span class="font-weight-bold primary--text subtitle-1-lao">
          <v-icon color="primary" class="mr-2">mdi-playlist-plus</v-icon>
          ຕົວເລືອກພິເສດ ແລະ ຕົວດັດແກ້ (Options & Modifiers)
        </span>
        <v-btn icon @click="closeDialog" class="ml-auto">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-6" style="height: 600px; background-color: #f7f9fc;">
        <!-- Product Info Summary -->
        <v-card flat class="mb-6 rounded-lg pa-4 d-flex align-center border" style="background-color: #ffffff;">
          <v-icon large color="primary" class="mr-4">mdi-coffee</v-icon>
          <div>
            <div class="text-subtitle-2 grey--text">ເມນູອາຫານ:</div>
            <div class="text-h6 font-weight-bold black--text">{{ productName }}</div>
          </div>
          <v-btn
            color="primary"
            class="ml-auto rounded-lg text-none"
            depressed
            @click="openAddGroupForm"
          >
            <v-icon left>mdi-plus</v-icon>
            ເພີ່ມກຸ່ມຕົວເລືອກໃໝ່ (Add Group)
          </v-btn>
        </v-card>

        <!-- Loading State -->
        <div v-if="isloading" class="d-flex flex-column align-center justify-center py-12">
          <v-progress-circular indeterminate color="primary" size="64" width="6"></v-progress-circular>
          <span class="mt-4 grey--text text--darken-1 font-weight-medium">ກຳລັງໂຫຼດຂໍ້ມູນຕົວເລືອກ...</span>
        </div>

        <!-- Empty State -->
        <v-card
          v-else-if="groups.length === 0"
          flat
          class="rounded-lg pa-12 d-flex flex-column align-center border border-dashed"
          style="background: transparent; border: 2px dashed #d1d5db;"
        >
          <v-icon size="64" color="grey lighten-1">mdi-ballot-outline</v-icon>
          <div class="text-h6 font-weight-bold grey--text text--darken-1 mt-4">ບໍ່ມີກຸ່ມຕົວເລືອກເທື່ອ</div>
          <p class="grey--text text-center mt-2 max-w-sm">
            ທ່ານສາມາດເພີ່ມກຸ່ມຕົວເລືອກ ເຊັ່ນ: ເລືອກຊີ້ນ, ລະດັບຄວາມເຜັດ, ຫຼື ເພີ່ມໄຂ່ດາວ ເພື່ອໃຫ້ລູກຄ້າເລືອກຕອນສັ່ງຊື້.
          </p>
          <v-btn color="primary" class="mt-4 rounded-lg text-none" depressed @click="openAddGroupForm">
            <v-icon left>mdi-plus</v-icon>
            ເພີ່ມກຸ່ມຕົວເລືອກທຳອິດ
          </v-btn>
        </v-card>

        <!-- Options Groups List -->
        <div v-else>
          <v-card
            v-for="(group, idx) in groups"
            :key="group.id || idx"
            class="mb-6 rounded-lg border"
            flat
            style="border: 1px solid #e0e0e0; background-color: #ffffff;"
          >
            <!-- Card Header -->
            <v-card-title class="px-5 py-3 d-flex align-center border-bottom grey lighten-5">
              <div>
                <span class="text-h6 font-weight-bold text-primary">{{ group.groupName }}</span>
                <span class="ml-3">
                  <v-chip
                    small
                    :color="group.isRequired ? 'red lighten-5 red--text' : 'grey lighten-3 grey--text text--darken-2'"
                    class="font-weight-bold"
                  >
                    {{ group.isRequired ? 'ບັງຄັບເລືອກ' : 'ເລືອກກໍໄດ້' }}
                  </v-chip>
                  <v-chip small color="primary lighten-5 primary--text" class="ml-1 font-weight-medium">
                    ເລືອກໄດ້: {{ group.minSelections }} - {{ group.maxSelections }} ຢ່າງ
                  </v-chip>
                </span>
              </div>
              <div class="ml-auto">
                <v-btn icon color="primary" class="mr-1" @click="openEditGroupForm(group)">
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn icon color="error" @click="deleteOptionGroup(group.id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </div>
            </v-card-title>

            <v-divider></v-divider>

            <!-- Card Body -->
            <v-card-text class="pa-5">
              <!-- Choices List -->
              <v-simple-table v-if="group.options && group.options.length > 0" class="elevation-0 mb-4 border rounded-lg overflow-hidden">
                <thead>
                  <tr class="grey lighten-4">
                    <th class="text-left font-weight-bold">ຊື່ຕົວເລືອກ</th>
                    <th class="text-right font-weight-bold" style="width: 150px;">ລາຄາບວກເພີ່ມ (+Kip)</th>
                    <th class="text-left font-weight-bold" style="width: 280px;">ຕັດສະຕັອກວັດຖຸດິບ (Ingredient)</th>
                    <th class="text-center font-weight-bold" style="width: 100px;">ຈັດການ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="opt in group.options" :key="opt.id">
                    <td class="font-weight-medium">{{ opt.optionName }}</td>
                    <td class="text-right font-weight-bold success--text">+{{ formatNumber(opt.priceAdjustment) }}</td>
                    <td>
                      <span v-if="opt.ingredientProductId" class="grey--text text--darken-3 font-weight-medium">
                        📦 {{ getProductNameById(opt.ingredientProductId) }}
                      </span>
                      <span v-else class="grey--text caption-lao">ບໍ່ໄດ້ຕັດສະຕັອກ</span>
                    </td>
                    <td class="text-center">
                      <v-btn icon small color="error" @click="deleteOptionChoice(opt.id)">
                        <v-icon small>mdi-delete</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>

              <div v-else class="text-center py-4 grey--text caption-lao font-weight-medium">
                ບໍ່ມີຕົວເລືອກຍ່ອຍເທື່ອ. ກະລຸນາເພີ່ມຕົວເລືອກຍ່ອຍດ້ານລຸ່ມ:
              </div>

              <!-- Add Choice Inline Form -->
              <v-row dense class="align-center mt-2 grey lighten-5 pa-3 rounded-lg border">
                <v-col cols="4">
                  <v-text-field
                    v-model="newChoices[group.id].optionName"
                    label="ຊື່ຕົວເລືອກ (e.g. ໄຂ່ດາວ, ປາ)"
                    placeholder="ຊື່ຕົວເລືອກ..."
                    outlined
                    dense
                    hide-details
                    background-color="white"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model.number="newChoices[group.id].priceAdjustment"
                    label="ລາຄາບວກເພີ່ມ (+)"
                    type="number"
                    outlined
                    dense
                    hide-details
                    background-color="white"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-autocomplete
                    v-model="newChoices[group.id].ingredientProductId"
                    :items="findAllProduct"
                    item-text="pro_name"
                    item-value="id"
                    label="ເລືອກວັດຖຸດິບ (ຖ້າມີ)"
                    placeholder="ຄົ້ນຫາວັດຖຸດິບ..."
                    outlined
                    dense
                    clearable
                    hide-details
                    background-color="white"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="2">
                  <v-btn
                    color="primary"
                    block
                    depressed
                    class="rounded-lg text-none py-2"
                    @click="addOptionChoice(group.id)"
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

      <v-card-actions class="px-6 py-4 grey lighten-4">
        <v-btn outlined color="grey darken-1" class="rounded-lg text-none" @click="closeDialog">ປິດ (Close)</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Add/Edit Option Group Dialog -->
    <v-dialog v-model="groupDialog" max-width="500px" persistent>
      <v-card class="rounded-lg shadow-lg">
        <v-card-title class="headline px-6 py-4 border-bottom grey lighten-5 font-weight-bold">
          {{ isEditGroup ? 'ແກ້ໄຂກຸ່ມຕົວເລືອກ' : 'ເພີ່ມກຸ່ມຕົວເລືອກໃໝ່' }}
        </v-card-title>
        <v-card-text class="pa-6">
          <v-form ref="groupForm">
            <v-text-field
              v-model="groupForm.groupName"
              label="ຊື່ກຸ່ມຕົວເລືອກ (e.g. ເລືອກຊີ້ນ, Toppings)"
              outlined
              dense
              required
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ກຸ່ມຕົວເລືອກ']"
            ></v-text-field>

            <v-checkbox
              v-model="groupForm.isRequired"
              label="ບັງຄັບເລືອກ (Required)"
              color="primary"
              class="mt-1"
              hide-details
            ></v-checkbox>

            <v-row class="mt-4">
              <v-col cols="6">
                <v-text-field
                  v-model.number="groupForm.minSelections"
                  label="ເລືອກໜ້ອຍສຸດ (Min Selections)"
                  type="number"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model.number="groupForm.maxSelections"
                  label="ເລືອກຫຼາຍສຸດ (Max Selections)"
                  type="number"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="px-6 py-4 grey lighten-5">
          <v-btn outlined color="grey darken-1" class="rounded-lg" @click="closeGroupDialog">ຍົກເລີກ</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed class="rounded-lg px-4" @click="saveOptionGroup">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFormatNum } from '~/common'

export default {
  name: 'MenuOptionsDialog',
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
  },

  data() {
    return {
      groups: [],
      isloading: false,
      groupDialog: false,
      isEditGroup: false,
      groupForm: {
        id: null,
        groupName: '',
        isRequired: false,
        minSelections: 0,
        maxSelections: 1,
      },
      newChoices: {}, // Stores inline option form data keyed by groupId
    }
  },

  computed: {
    ...mapGetters(['findAllProduct']),
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
        this.fetchOptionGroups()
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

    async fetchOptionGroups() {
      this.isloading = true
      try {
        const res = await this.$axios.get(`/api/product-option-groups/product/${this.productId}`)
        if (res.data && res.data.success) {
          this.groups = res.data.data || []
          // Initialize empty new choices forms for each group
          this.groups.forEach((g) => {
            this.$set(this.newChoices, g.id, {
              optionName: '',
              priceAdjustment: 0,
              ingredientProductId: null,
            })
          })
        }
      } catch (error) {
        console.error('Error fetching option groups:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນກຸ່ມຕົວເລືອກ')
      } finally {
        this.isloading = false
      }
    },

    closeDialog() {
      this.show = false
    },

    openAddGroupForm() {
      this.isEditGroup = false
      this.groupForm = {
        id: null,
        groupName: '',
        isRequired: false,
        minSelections: 0,
        maxSelections: 1,
      }
      this.groupDialog = true
    },

    openEditGroupForm(group) {
      this.isEditGroup = true
      this.groupForm = {
        id: group.id,
        groupName: group.groupName,
        isRequired: group.isRequired,
        minSelections: group.minSelections,
        maxSelections: group.maxSelections,
      }
      this.groupDialog = true
    },

    closeGroupDialog() {
      this.groupDialog = false
    },

    async saveOptionGroup() {
      if (!this.$refs.groupForm.validate()) return

      try {
        const payload = {
          productId: this.productId,
          groupName: this.groupForm.groupName,
          isRequired: this.groupForm.isRequired,
          minSelections: this.groupForm.minSelections,
          maxSelections: this.groupForm.maxSelections,
        }

        if (this.isEditGroup && this.groupForm.id) {
          await this.$axios.put(`/api/product-option-groups/${this.groupForm.id}`, payload)
          this.$toast.success('ອັບເດດກຸ່ມຕົວເລືອກສຳເລັດ')
        } else {
          await this.$axios.post('/api/product-option-groups', payload)
          this.$toast.success('ເພີ່ມກຸ່ມຕົວເລືອກສຳເລັດ')
        }
        this.closeGroupDialog()
        this.fetchOptionGroups()
      } catch (error) {
        console.error('Error saving option group:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກກຸ່ມຕົວເລືອກ')
      }
    },

    async deleteOptionGroup(groupId) {
      if (!confirm('ທ່ານຕ້ອງການລຶບກຸ່ມຕົວເລືອກນີ້ແທ້ບໍ່? ຕົວເລືອກຍ່ອຍທັງໝົດຈະຖືກລຶບໄປນຳ.')) return

      try {
        await this.$axios.delete(`/api/product-option-groups/${groupId}`)
        this.$toast.success('ລຶບກຸ່ມຕົວເລືອກສຳເລັດ')
        this.fetchOptionGroups()
      } catch (error) {
        console.error('Error deleting option group:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການລຶບກຸ່ມຕົວເລືອກ')
      }
    },

    async addOptionChoice(groupId) {
      const choice = this.newChoices[groupId]
      if (!choice.optionName) {
        this.$toast.error('ກະລຸນາປ້ອນຊື່ຕົວເລືອກ')
        return
      }

      try {
        const payload = {
          groupId,
          optionName: choice.optionName,
          priceAdjustment: choice.priceAdjustment || 0,
          costAdjustment: 0, // Default to 0, can be extended later if needed
          ingredientProductId: choice.ingredientProductId || null,
        }

        await this.$axios.post('/api/product-options', payload)
        this.$toast.success('ເພີ່ມຕົວເລືອກຍ່ອຍສຳເລັດ')
        
        // Reset form
        choice.optionName = ''
        choice.priceAdjustment = 0
        choice.ingredientProductId = null

        this.fetchOptionGroups()
      } catch (error) {
        console.error('Error saving option choice:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການເພີ່ມຕົວເລືອກຍ່ອຍ')
      }
    },

    async deleteOptionChoice(optionId) {
      if (!confirm('ທ່ານຕ້ອງການລຶບຕົວເລືອກຍ່ອຍນີ້ແທ້ບໍ່?')) return

      try {
        await this.$axios.delete(`/api/product-options/${optionId}`)
        this.$toast.success('ລຶບຕົວເລືອກຍ່ອຍສຳເລັດ')
        this.fetchOptionGroups()
      } catch (error) {
        console.error('Error deleting option choice:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການລຶບຕົວເລືອກຍ່ອຍ')
      }
    },
  },
}
</script>

<style scoped>
.border-dashed {
  border-style: dashed !important;
}
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
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
