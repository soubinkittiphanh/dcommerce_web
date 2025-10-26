<template>
  <div class="spf-container">
    <v-card>
      <v-card-title>
        <span class="text-h5">SPF Management</span>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="openDialog()"
        >
          <v-icon left>mdi-plus</v-icon>
          Add SPF
        </v-btn>
      </v-card-title>

      <!-- Search and Filter -->
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search by code, value, or remark"
              single-line
              hide-details
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="Status"
              clearable
              hide-details
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Data Table -->
      <v-data-table
        :headers="headers"
        :items="filteredItems"
        :loading="loading"
        :search="search"
        class="elevation-1"
        item-key="id"
      >
        <!-- Status chip -->
        <template v-slot:item.isActive="{ item }">
          <v-chip
            :color="item.isActive ? 'success' : 'error'"
            text-color="white"
            small
          >
            {{ item.isActive ? 'Active' : 'Inactive' }}
          </v-chip>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="openDialog(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>

        <!-- Created date -->
        <template v-slot:item.createdAt="{ item }">
          {{ formatDate(item.createdAt) }}
        </template>

        <!-- Updated date -->
        <template v-slot:item.updateTimestamp="{ item }">
          {{ formatDate(item.updateTimestamp) }}
        </template>
      </v-data-table>
    </v-card>

    <!-- SPF Dialog -->
    <spf-dialog
      v-model="dialog"
      :item="selectedItem"
      @save="handleSave"
      @close="closeDialog"
    />

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Confirm Delete</v-card-title>
        <v-card-text>
          Are you sure you want to delete SPF "{{ itemToDelete?.code }}"?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">
            Cancel
          </v-btn>
          <v-btn color="red darken-1" text @click="confirmDelete">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SPFIndex',
  components: {
    SpfDialog: () => import('~/components/SpfDialog.vue')
  },
  
  data() {
    return {
      loading: false,
      search: '',
      statusFilter: null,
      dialog: false,
      deleteDialog: false,
      selectedItem: null,
      itemToDelete: null,
      items: [],
      
      headers: [
        { text: 'Code', value: 'code', sortable: true },
        { text: 'Value', value: 'value', sortable: true },
        { text: 'Remark', value: 'remark', sortable: true },
        { text: 'Status', value: 'isActive', sortable: true },
        { text: 'Created', value: 'createdAt', sortable: true },
        { text: 'Updated', value: 'updateTimestamp', sortable: true },
        { text: 'Actions', value: 'actions', sortable: false, width: '120px' }
      ],
      
      statusOptions: [
        { text: 'Active', value: true },
        { text: 'Inactive', value: false }
      ]
    }
  },

  computed: {
    filteredItems() {
      let filtered = this.items

      if (this.statusFilter !== null) {
        filtered = filtered.filter(item => item.isActive === this.statusFilter)
      }

      return filtered
    }
  },

  mounted() {
    this.fetchItems()
  },

  methods: {
    async fetchItems() {
      try {
        this.loading = true
        const response = await this.$axios.get('/api/spf/find')
        console.info(`SPF RES ${JSON.stringify(response)}`)
        this.items = response.data.data
      } catch (error) {
        this.$toast.error('Error fetching SPF data: ' + error.message)
      } finally {
        this.loading = false
      }
    },

    openDialog(item = null) {
      this.selectedItem = item ? { ...item } : null
      this.dialog = true
    },

    closeDialog() {
      this.dialog = false
      this.selectedItem = null
    },

    async handleSave(item) {
      try {
        if (item.id) {
          // Update existing item
          await this.$axios.put(`/api/spf/update/${item.id}`, item)
          this.$toast.success('SPF updated successfully')
        } else {
          // Create new item
          await this.$axios.post('/api/spf/create', item)
          this.$toast.success('SPF created successfully')
        }
        
        await this.fetchItems()
        this.closeDialog()
      } catch (error) {
        this.$toast.error('Error saving SPF: ' + error.message)
      }
    },

    deleteItem(item) {
      this.itemToDelete = item
      this.deleteDialog = true
    },

    async confirmDelete() {
      try {
        await this.$axios.delete(`/api/spf/${this.itemToDelete.id}`)
        this.$toast.success('SPF deleted successfully')
        await this.fetchItems()
      } catch (error) {
        this.$toast.error('Error deleting SPF: ' + error.message)
      } finally {
        this.deleteDialog = false
        this.itemToDelete = null
      }
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
.spf-container {
  padding: 20px;
}
</style>