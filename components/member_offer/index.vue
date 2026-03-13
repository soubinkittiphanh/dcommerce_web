<template>
  <div>
    <!-- Member Offer Management Dialog -->
    <v-dialog v-model="dialogVisible" max-width="900px" persistent scrollable>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-gift</v-icon>
          Member Offers Management
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-tabs v-model="activeTab" background-color="grey lighten-4">
            <v-tab>
              <v-icon left>mdi-view-list</v-icon>
              Offers List
            </v-tab>
            <v-tab>
              <v-icon left>mdi-plus</v-icon>
              Add New Offer
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="activeTab">
            <!-- Tab 1: Offers List -->
            <v-tab-item>
              <div class="pa-4">
                <!-- Member Info Header -->
                <v-card v-if="selectedMember" outlined class="mb-4">
                  <v-card-text class="pa-3">
                    <div class="d-flex justify-space-between align-center">
                      <div>
                        <h3>{{ selectedMember.name }}</h3>
                        <p class="mb-0 grey--text">{{ selectedMember.company || 'No company' }}</p>
                      </div>
                      <div class="text-right">
                        <v-chip :color="getClassColor(selectedMember.class)" text-color="white" small>
                          <v-icon left x-small>mdi-star</v-icon>
                          {{ selectedMember.class || 'BRONZE' }}
                        </v-chip>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>

                <!-- Offers List -->
                <div class="d-flex justify-space-between align-center mb-3">
                  <h4>Active Offers</h4>
                  <v-btn color="success" small @click="activeTab = 1">
                    <v-icon left small>mdi-plus</v-icon>
                    Add New Offer
                  </v-btn>
                </div>

                <!-- Loading State -->
                <div v-if="loadingOffers" class="text-center pa-4">
                  <v-progress-circular color="primary" indeterminate></v-progress-circular>
                  <p class="mt-2">Loading offers...</p>
                </div>

                <!-- Offers Cards -->
                <div v-else-if="memberOffers.length > 0">
                  <v-card
                    v-for="offer in memberOffers"
                    :key="offer.id"
                    class="mb-3"
                    outlined
                    hover
                  >
                    <v-card-text class="pa-3">
                      <div class="d-flex justify-space-between align-center">
                        <div class="flex-grow-1">
                          <div class="d-flex align-center mb-2">
                            <h4>{{ offer.offerName }}</h4>
                            <v-chip
                              :color="offer.isActive ? 'success' : 'grey'"
                              text-color="white"
                              x-small
                              class="ml-2"
                            >
                              {{ offer.isActive ? 'Active' : 'Inactive' }}
                            </v-chip>
                          </div>
                          
                          <div class="caption grey--text mb-2">
                            <v-icon x-small>mdi-tag</v-icon>
                            {{ offer.category?.name || 'Unknown Category' }}
                          </div>

                          <div class="d-flex align-center">
                            <div class="mr-4">
                              <div class="caption grey--text">Used / Allowed</div>
                              <div class="font-weight-bold">
                                {{ offer.usedQty }} / {{ offer.allowedQty }}
                              </div>
                            </div>
                            <div class="mr-4">
                              <div class="caption grey--text">Remaining</div>
                              <div class="font-weight-bold" :class="getRemainingColor(offer)">
                                {{ offer.allowedQty - offer.usedQty }}
                              </div>
                            </div>
                            <div>
                              <div class="caption grey--text">Valid Until</div>
                              <div class="font-weight-medium">
                                {{ formatDate(offer.endDate) }}
                              </div>
                            </div>
                          </div>

                          <!-- Progress Bar -->
                          <v-progress-linear
                            :value="getUsagePercentage(offer)"
                            :color="getProgressColor(offer)"
                            height="6"
                            class="mt-2"
                          />
                        </div>

                        <!-- Actions -->
                        <div class="ml-3">
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn icon small v-bind="attrs" v-on="on">
                                <v-icon small>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>
                            <v-list dense>
                              <v-list-item @click="editOffer(offer)">
                                <v-list-item-icon>
                                  <v-icon small color="warning">mdi-pencil</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Edit</v-list-item-title>
                              </v-list-item>
                              <v-list-item @click="toggleOfferStatus(offer)">
                                <v-list-item-icon>
                                  <v-icon small :color="offer.isActive ? 'grey' : 'success'">
                                    {{ offer.isActive ? 'mdi-pause' : 'mdi-play' }}
                                  </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                  {{ offer.isActive ? 'Deactivate' : 'Activate' }}
                                </v-list-item-title>
                              </v-list-item>
                              <v-list-item @click="viewUsageHistory(offer)">
                                <v-list-item-icon>
                                  <v-icon small color="info">mdi-history</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Usage History</v-list-item-title>
                              </v-list-item>
                              <v-divider />
                              <v-list-item @click="deleteOffer(offer)" class="error--text">
                                <v-list-item-icon>
                                  <v-icon small color="error">mdi-delete</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Delete</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>

                <!-- No Offers -->
                <div v-else class="text-center pa-6">
                  <v-icon size="64" color="grey">mdi-gift-outline</v-icon>
                  <p class="mt-3 grey--text">No offers found for this member</p>
                  <v-btn color="primary" @click="activeTab = 1">
                    <v-icon left>mdi-plus</v-icon>
                    Create First Offer
                  </v-btn>
                </div>
              </div>
            </v-tab-item>

            <!-- Tab 2: Add/Edit Offer Form -->
            <v-tab-item>
              <div class="pa-4">
                <h3 class="mb-4">{{ editingOffer ? 'Edit Offer' : 'Create New Offer' }}</h3>
                
                <v-form ref="offerForm" v-model="offerFormValid">
                  <v-row dense>
                    <!-- Offer Name -->
                    <v-col cols="12">
                      <v-text-field
                        v-model="offerForm.offerName"
                        label="Offer Name *"
                        outlined
                        dense
                        :rules="[rules.required]"
                        placeholder="e.g. '10 Free Drinks'"
                      />
                    </v-col>

                    <!-- Category Selection -->
                    <v-col cols="6">
                      <v-select
                        v-model="offerForm.categoryId"
                        :items="categories"
                        item-text="categ_name"
                        item-value="categ_id"
                        label="Category *"
                        outlined
                        dense
                        :rules="[rules.required]"
                        :loading="loadingCategories"
                      />
                    </v-col>

                    <!-- Allowed Quantity -->
                    <v-col cols="6">
                      <v-text-field
                        v-model="offerForm.allowedQty"
                        label="Allowed Quantity *"
                        type="number"
                        outlined
                        dense
                        :rules="[rules.required, rules.positiveNumber]"
                        min="1"
                      />
                    </v-col>

                    <!-- Start Date -->
                    <v-col cols="6">
                      <v-text-field
                        v-model="offerForm.startDate"
                        label="Start Date *"
                        type="date"
                        outlined
                        dense
                        :rules="[rules.required]"
                      />
                    </v-col>

                    <!-- End Date -->
                    <v-col cols="6">
                      <v-text-field
                        v-model="offerForm.endDate"
                        label="End Date *"
                        type="date"
                        outlined
                        dense
                        :rules="[rules.required, rules.endDateAfterStart]"
                      />
                    </v-col>

                    <!-- Active Status -->
                    <v-col cols="12">
                      <v-switch
                        v-model="offerForm.isActive"
                        label="Offer is Active"
                        color="success"
                        inset
                      />
                    </v-col>
                  </v-row>
                </v-form>

                <!-- Form Actions -->
                <div class="d-flex justify-end mt-4">
                  <v-btn color="grey" text @click="cancelOfferForm" class="mr-2">
                    Cancel
                  </v-btn>
                  <v-btn
                    color="success"
                    @click="saveOffer"
                    :disabled="!offerFormValid"
                    :loading="savingOffer"
                  >
                    <v-icon left>mdi-content-save</v-icon>
                    {{ editingOffer ? 'Update Offer' : 'Create Offer' }}
                  </v-btn>
                </div>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Usage History Dialog -->
    <v-dialog v-model="showUsageHistory" max-width="700px" scrollable>
      <v-card>
        <v-card-title class="info white--text">
          <v-icon left color="white">mdi-history</v-icon>
          Usage History
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="showUsageHistory = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <div v-if="loadingUsageHistory" class="text-center pa-4">
            <v-progress-circular color="primary" indeterminate></v-progress-circular>
            <p class="mt-2">Loading usage history...</p>
          </div>

          <div v-else-if="usageHistory.length > 0">
            <v-list dense>
              <v-list-item
                v-for="usage in usageHistory"
                :key="usage.id"
                class="border-bottom"
              >
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between">
                    <span>{{ usage.product?.name || 'Product N/A' }}</span>
                    <span class="success--text font-weight-bold">
                      -{{ usage.qtyUsed }} items
                    </span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <div class="d-flex justify-space-between">
                      <span>{{ formatDateTime(usage.usedDate) }}</span>
                      <span v-if="usage.originalPrice" class="orange--text">
                        Saved: ${{ parseFloat(usage.originalPrice).toFixed(2) }}
                      </span>
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>

          <div v-else class="text-center pa-4">
            <v-icon size="48" color="grey">mdi-history</v-icon>
            <p class="mt-2 grey--text">No usage history found</p>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'MemberOfferDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    selectedMember: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      activeTab: 0,
      loadingOffers: false,
      loadingCategories: false,
      loadingUsageHistory: false,
      savingOffer: false,
      memberOffers: [],
      categories: [],
      usageHistory: [],
      showUsageHistory: false,
      selectedOfferForHistory: null,
      editingOffer: null,
      offerFormValid: false,
      offerForm: {
        offerName: '',
        categoryId: null,
        allowedQty: 1,
        startDate: '',
        endDate: '',
        isActive: true
      },
      rules: {
        required: (value) => !!value || 'This field is required',
        positiveNumber: (value) => (value > 0) || 'Must be greater than 0',
        endDateAfterStart: (value) => {
          if (!this.offerForm.startDate || !value) return true
          return new Date(value) > new Date(this.offerForm.startDate) || 'End date must be after start date'
        }
      }
    }
  },

  computed: {
    dialogVisible: {
      get() {
        return this.show
      },
      set(value) {
        if (!value) {
          this.closeDialog()
        }
      }
    }
  },

  watch: {
    show(newVal) {
      if (newVal && this.selectedMember) {
        this.loadMemberOffers()
        this.loadCategories()
        this.setDefaultDates()
      }
    }
  },

  methods: {
    async loadMemberOffers() {
      if (!this.selectedMember?.id) return

      this.loadingOffers = true
      try {
        const response = await this.$axios.get(`/api/member-offers/member/${this.selectedMember.id}/active`)
        this.memberOffers = response.data.data || []
      } catch (error) {
        console.error('Error loading member offers:', error)
        this.$toast.error('Error loading member offers')
      } finally {
        this.loadingOffers = false
      }
    },

    async loadCategories() {
      this.loadingCategories = true
      try {
        // Adjust the endpoint based on your API
        const response = await this.$axios.get('/api/category/find')
        this.categories = response.data.data || response.data || []
      } catch (error) {
        console.error('Error loading categories:', error)
        this.$toast.error('Error loading categories')
        this.categories = []
      } finally {
        this.loadingCategories = false
      }
    },

    async saveOffer() {
      if (!this.offerFormValid) return

      this.savingOffer = true
      try {
        const offerData = {
          memberId: this.selectedMember.id,
          ...this.offerForm,
          allowedQty: parseInt(this.offerForm.allowedQty)
        }

        let response
        if (this.editingOffer) {
          response = await this.$axios.put(`/api/member-offers/${this.editingOffer.id}`, offerData)
          this.$toast.success('Offer updated successfully')
        } else {
          response = await this.$axios.post('/api/member-offers', offerData)
          this.$toast.success('Offer created successfully')
        }

        this.cancelOfferForm()
        this.loadMemberOffers()
        this.activeTab = 0

      } catch (error) {
        console.error('Error saving offer:', error)
        this.$toast.error(error.response?.data?.message || 'Error saving offer')
      } finally {
        this.savingOffer = false
      }
    },

    editOffer(offer) {
      this.editingOffer = offer
      this.offerForm = {
        offerName: offer.offerName,
        categoryId: offer.categoryId,
        allowedQty: offer.allowedQty,
        startDate: offer.startDate,
        endDate: offer.endDate,
        isActive: offer.isActive
      }
      this.activeTab = 1
    },

    async toggleOfferStatus(offer) {
      try {
        await this.$axios.patch(`/api/member-offers/${offer.id}/toggle-status`)
        this.$toast.success(`Offer ${offer.isActive ? 'deactivated' : 'activated'} successfully`)
        this.loadMemberOffers()
      } catch (error) {
        console.error('Error toggling offer status:', error)
        this.$toast.error('Error updating offer status')
      }
    },

    async deleteOffer(offer) {
      const confirmed = await this.$swal.fire({
        title: 'Delete Offer?',
        text: `Are you sure you want to delete "${offer.offerName}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      })

      if (confirmed.isConfirmed) {
        try {
          await this.$axios.delete(`/api/member-offers/${offer.id}`)
          this.$toast.success('Offer deleted successfully')
          this.loadMemberOffers()
        } catch (error) {
          console.error('Error deleting offer:', error)
          this.$toast.error('Error deleting offer')
        }
      }
    },

    async viewUsageHistory(offer) {
      this.selectedOfferForHistory = offer
      this.showUsageHistory = true
      this.loadingUsageHistory = true

      try {
        const response = await this.$axios.get(`/api/member-offer-usage/offer/${offer.id}`)
        this.usageHistory = response.data.data || []
      } catch (error) {
        console.error('Error loading usage history:', error)
        this.$toast.error('Error loading usage history')
        this.usageHistory = []
      } finally {
        this.loadingUsageHistory = false
      }
    },

    cancelOfferForm() {
      this.editingOffer = null
      this.offerForm = {
        offerName: '',
        categoryId: null,
        allowedQty: 1,
        startDate: '',
        endDate: '',
        isActive: true
      }
      this.setDefaultDates()
      if (this.$refs.offerForm) {
        this.$refs.offerForm.resetValidation()
      }
    },

    setDefaultDates() {
      const today = new Date()
      const nextMonth = new Date(today)
      nextMonth.setMonth(nextMonth.getMonth() + 1)

      this.offerForm.startDate = today.toISOString().split('T')[0]
      this.offerForm.endDate = nextMonth.toISOString().split('T')[0]
    },

    closeDialog() {
      this.activeTab = 0
      this.cancelOfferForm()
      this.showUsageHistory = false
      this.$emit('close')
    },

    getClassColor(customerClass) {
      const colors = {
        BRONZE: 'brown',
        SILVER: 'grey',
        GOLD: 'amber',
        PLATINUM: 'blue-grey',
        DIAMOND: 'purple',
      }
      return colors[customerClass] || 'grey'
    },

    getRemainingColor(offer) {
      const remaining = offer.allowedQty - offer.usedQty
      const percentage = remaining / offer.allowedQty
      
      if (percentage <= 0.2) return 'red--text'
      if (percentage <= 0.5) return 'orange--text'
      return 'green--text'
    },

    getUsagePercentage(offer) {
      return (offer.usedQty / offer.allowedQty) * 100
    },

    getProgressColor(offer) {
      const percentage = this.getUsagePercentage(offer)
      if (percentage >= 80) return 'red'
      if (percentage >= 50) return 'orange'
      return 'green'
    },

    formatDate(date) {
      if (!date) return ''
      try {
        return new Date(date).toLocaleDateString('en-GB')
      } catch (error) {
        return date
      }
    },

    formatDateTime(date) {
      if (!date) return ''
      try {
        return new Date(date).toLocaleString('en-GB')
      } catch (error) {
        return date
      }
    }
  }
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
</style>