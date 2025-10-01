<template>
  <v-container fluid>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center mb-4">
          <div>
            <h1 class="text-h4 font-weight-bold">Table Management</h1>
            <p class="text-subtitle-1 text-medium-emphasis">
              Manage restaurant tables and their status
            </p>
          </div>
          <v-btn color="primary" prepend-icon="mdi-plus" @click="openDialog()">
            Add New Table
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Filters and Search -->
    <v-row class="mb-4">
      <v-col cols="12" md="4">
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search tables..."
          variant="outlined"
          density="compact"
          clearable
        />
      </v-col>
      <v-col cols="12" md="3">
        <v-autocomplete
          v-model="statusFilter"
          :items="statusOptions"
          item-text="title"
          item-value="value"
          label="Filter by Status"
          variant="outlined"
          prepend-inner-icon="mdi-table-chair"
        />
      </v-col>

      <v-col cols="12" md="3">
        <v-autocomplete
          v-model="capacityFilter"
          :items="capacityOptions"
          item-text="title"
          item-value="value"
          label="Filter by Capacity"
          variant="outlined"
          prepend-inner-icon="mdi-table-chair"
        />
      </v-col>
      <v-col cols="12" md="2">
        <v-btn
          variant="outlined"
          @click="refreshTables"
          :loading="loading"
          block
        >
          <v-icon>mdi-refresh</v-icon>
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tables Grid View -->
    <v-row>
      <v-col
        v-for="table in filteredTables"
        :key="table.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="table-card"
          :class="getTableCardClass(table.status)"
          elevation="2"
          hover
        >
          <v-card-title class="d-flex justify-space-between align-center">
            <div>
              <h3>{{ table.name || `Table ${table.number}` }}</h3>
              <v-chip
                :color="getStatusColor(table.status)"
                size="small"
                variant="flat"
              >
                {{ table.status.toUpperCase() }}
              </v-chip>
            </div>
            <div class="d-flex">
              <v-btn
                icon
                variant="text"
                size="small"
                color="primary"
                @click="openDialog(table)"
                class="mr-1"
              >
                <v-icon>mdi-pencil</v-icon>
                <v-tooltip activator="parent" location="top">
                  Edit Table Details
                </v-tooltip>
              </v-btn>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn icon variant="text" size="small" v-bind="props">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="updateTableStatus(table)">
                    <v-list-item-title>
                      <v-icon start>mdi-update</v-icon>
                      Update Status Only
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider />
                  <v-list-item @click="confirmDelete(table)" class="text-error">
                    <v-list-item-title>
                      <v-icon start>mdi-delete</v-icon>
                      Delete Table
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-card-title>

          <v-card-text>
            <div class="d-flex align-center mb-2">
              <v-icon start color="primary">mdi-account-group</v-icon>
              <span>Capacity: {{ table.capacity }} people</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon start color="primary">mdi-tag</v-icon>
              <span>Number: {{ table.number }}</span>
            </div>
            <div v-if="table.timeOccupied" class="d-flex align-center mb-2">
              <v-icon start color="warning">mdi-clock</v-icon>
              <span>Since: {{ formatTime(table.timeOccupied) }}</span>
            </div>
            <div v-if="table.currentOrderId" class="d-flex align-center">
              <v-icon start color="success">mdi-receipt</v-icon>
              <span>Order #{{ table.currentOrderId }}</span>
            </div>
          </v-card-text>

          <v-card-actions class="justify-space-between">
            <div>
              <v-btn
                v-if="table.status === 'available'"
                color="success"
                variant="text"
                size="small"
                @click="occupyTable(table)"
              >
                Mark Occupied
              </v-btn>
              <v-btn
                v-if="table.status === 'occupied'"
                color="warning"
                variant="text"
                size="small"
                @click="freeTable(table)"
              >
                Free Table
              </v-btn>
              <v-btn
                v-if="table.status === 'cleaning'"
                color="primary"
                variant="text"
                size="small"
                @click="markAvailable(table)"
              >
                Mark Available
              </v-btn>
            </div>
            <v-btn
              color="primary"
              variant="outlined"
              size="small"
              prepend-icon="mdi-pencil"
              @click="openDialog(table)"
            >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Add/Edit Dialog -->
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon :color="editingTable ? 'warning' : 'success'" class="mr-3">
            {{ editingTable ? 'mdi-pencil' : 'mdi-plus' }}
          </v-icon>
          <div>
            <span class="text-h5">
              {{ editingTable ? 'Edit Table' : 'Add New Table' }}
            </span>
            <div v-if="editingTable" class="text-caption text-medium-emphasis">
              Editing Table #{{ editingTable.number }}
            </div>
          </div>
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="formValid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.name"
                  label="Table Name (Optional)"
                  variant="outlined"
                  prepend-inner-icon="mdi-table-furniture"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.number"
                  label="Table Number"
                  variant="outlined"
                  prepend-inner-icon="mdi-numeric"
                  :rules="numberRules"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-slider
                  v-model="formData.capacity"
                  label="Capacity"
                  :min="1"
                  :max="20"
                  :step="1"
                  thumb-label="always"
                  prepend-icon="mdi-account-group"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="formData.status"
                  :items="statusItems"
                  item-text="title"
                  item-value="value"
                  label="Status"
                  variant="outlined"
                  prepend-inner-icon="mdi-table-chair"
                />
              </v-col>
              <v-col cols="12" v-if="formData.status === 'occupied'">
                <v-text-field
                  v-model="formData.currentOrderId"
                  label="Current Order ID (Optional)"
                  variant="outlined"
                  type="number"
                  prepend-inner-icon="mdi-receipt"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="grey-darken-1" variant="text" @click="closeDialog">
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="flat"
            @click="saveTable"
            :loading="saving"
            :disabled="!formValid"
          >
            {{ editingTable ? 'Update' : 'Create' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Status Update Dialog -->
    <v-dialog v-model="statusDialog" max-width="400px">
      <v-card>
        <v-card-title>Update Table Status</v-card-title>
        <v-card-text>
          <v-autocomplete
            v-model="newStatus"
            :items="statusItems"
            item-text="title"
            item-value="value"
            label="New Status"
            variant="outlined"
          />
          <v-text-field
            v-if="newStatus === 'occupied'"
            v-model="newOrderId"
            label="Order ID (Optional)"
            variant="outlined"
            type="number"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            variant="text"
            @click="statusDialog = false"
            :disabled="loading"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            @click="confirmStatusUpdate"
            :loading="loading"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400px">
      <v-card>
        <v-card-title class="text-error">Confirm Deletion</v-card-title>
        <v-card-text>
          Are you sure you want to delete "{{
            tableToDelete?.name || `Table ${tableToDelete?.number}`
          }}"? This action cannot be undone.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" @click="deleteTable" :loading="deleting"
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Loading Overlay -->
    <v-overlay v-model="loading" class="align-center justify-center">
      <v-progress-circular color="primary" indeterminate size="64" />
    </v-overlay>

    <!-- Snackbar for Messages -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      location="top right"
      variant="elevated"
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2">{{ snackbar.icon }}</v-icon>
        {{ snackbar.message }}
      </div>
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

// Reactive data
const tables = ref([])
const dialog = ref(false)
const statusDialog = ref(false)
const deleteDialog = ref(false)
const loading = ref(false)
const saving = ref(false)
const deleting = ref(false)
const formValid = ref(false)
const search = ref('')
const statusFilter = ref('')
const capacityFilter = ref('')

// Snackbar for notifications
const snackbar = ref({
  show: false,
  message: '',
  color: 'success',
  icon: 'mdi-check-circle',
  timeout: 4000,
})

// Form data
const formData = ref({
  name: '',
  number: '',
  capacity: 4,
  status: 'available',
  currentOrderId: null,
})

// Editing states
const editingTable = ref(null)
const tableToDelete = ref(null)
const tableToUpdate = ref(null)
const newStatus = ref('')
const newOrderId = ref('')

// Form validation rules
const numberRules = [
  (v) => !!v || 'Table number is required',
  (v) => /^\d+$/.test(v) || 'Table number must be numeric',
]

// Options for dropdowns
const statusItems = [
  { title: 'Available', value: 'available' },
  { title: 'Occupied', value: 'occupied' },
  { title: 'Cleaning', value: 'cleaning' },
  { title: 'Reserved', value: 'reserved' },
]

const statusOptions = [
  { title: 'Available', value: 'available' },
  { title: 'Occupied', value: 'occupied' },
  { title: 'Cleaning', value: 'cleaning' },
  { title: 'Reserved', value: 'reserved' },
]

const capacityOptions = [
  { title: '1-2 people', value: '1-2' },
  { title: '3-4 people', value: '3-4' },
  { title: '5-8 people', value: '5-8' },
  { title: '9+ people', value: '9+' },
]

// Computed properties
const filteredTables = computed(() => {
  let filtered = tables.value

  // Search filter
  if (search.value) {
    const searchTerm = search.value.toLowerCase()
    filtered = filtered.filter(
      (table) =>
        (table.name && table.name.toLowerCase().includes(searchTerm)) ||
        table.number.toString().includes(searchTerm)
    )
  }

  // Status filter
  if (statusFilter.value && statusFilter.value) {
    filtered = filtered.filter((table) => table.status === statusFilter.value)
  }

  // Capacity filter
  if (capacityFilter.value) {
    const [min, max] = capacityFilter.value
      .split('-')
      .map((n) => n.replace('+', ''))
    filtered = filtered.filter((table) => {
      if (capacityFilter.value === '9+') {
        return table.capacity >= 9
      }
      return (
        table.capacity >= parseInt(min) &&
        table.capacity <= parseInt(max || min)
      )
    })
  }

  return filtered.sort((a, b) => parseInt(a.number) - parseInt(b.number))
})

// Methods
const showMessage = (message, color = 'success', icon = 'mdi-check-circle') => {
  snackbar.value = {
    show: true,
    message,
    color,
    icon,
    timeout: 4000,
  }
}
const fetchTables = async () => {
  loading.value = true
  await $nuxt.$axios
    .get('api/tables')
    .then((res) => {
      console.log('=>tables: ' + JSON.stringify(res.data))

      // 🔧 FIX: Extract the actual array from the nested response
      const tableData = res.data.data // Get the array from res.data.data

      tables.value = tableData.map((el) => {
        return {
          id: el.id,
          name: el.name,
          number: el.number,
          capacity: el.capacity,
          status: el.status,
          timeOccupied: el.timeOccupied,
          currentOrderId: el.currentOrderId,
          createdAt: el.createdAt,
          updateTimestamp: el.updateTimestamp,
        }
      })
    })
    .catch((er) => {
      console.log('error fetching tables: ' + er.response?.data)
      showMessage(
        'Failed to load tables. Using demo data.',
        'warning',
        'mdi-alert'
      )
      // Mock data for demonstration when API fails
      tables.value = [
        {
          id: 1,
          name: 'VIP Table',
          number: '1',
          capacity: 8,
          status: 'occupied',
          timeOccupied: new Date('2025-06-23T12:00:00'),
          currentOrderId: 123,
        },
        {
          id: 2,
          name: null,
          number: '2',
          capacity: 4,
          status: 'available',
          timeOccupied: null,
          currentOrderId: null,
        },
        {
          id: 3,
          name: 'Corner Table',
          number: '3',
          capacity: 2,
          status: 'cleaning',
          timeOccupied: null,
          currentOrderId: null,
        },
      ]
    })
    .finally(() => {
      loading.value = false
    })
}

const refreshTables = () => {
  fetchTables()
}

const openDialog = (table = null) => {
  if (table) {
    editingTable.value = table
    formData.value = {
      name: table.name || '',
      number: table.number,
      capacity: table.capacity,
      status: table.status, // This will be a string like 'available'
      currentOrderId: table.currentOrderId,
    }
  } else {
    editingTable.value = null
    formData.value = {
      name: '',
      number: '',
      capacity: 4,
      status: 'available', // This is a string, which is correct
      currentOrderId: null,
    }
  }
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
  editingTable.value = null
}

const saveTable = async () => {
  saving.value = true
  const payload = {
    ...formData.value,
    timeOccupied: formData.value.status === 'occupied' ? new Date() : null,
  }

  if (editingTable.value) {
    // Update existing table
    await $nuxt.$axios
      .put(`/api/tables/${editingTable.value.id}`, payload)
      .then((res) => {
        console.log('=>table updated: ' + JSON.stringify(res.data))
        fetchTables()
        closeDialog()
      })
      .catch((er) => {
        console.log('error updating table: ' + er.response?.data)
        // Handle error (show notification, etc.)
      })
      .finally(() => {
        saving.value = false
      })
  } else {
    // Create new table
    await $nuxt.$axios
      .post('/api/tables', payload)
      .then((res) => {
        console.log('=>table created: ' + JSON.stringify(res.data))
        fetchTables()
        closeDialog()
      })
      .catch((er) => {
        console.log('error creating table: ' + er.response?.data)
        // Handle error (show notification, etc.)
      })
      .finally(() => {
        saving.value = false
      })
  }
}

const updateTableStatus = (table) => {
  tableToUpdate.value = table
  newStatus.value = table.status
  newOrderId.value = table.currentOrderId || ''
  statusDialog.value = true
}

const confirmStatusUpdate = async () => {
  const payload = {
    status: newStatus.value,
    timeOccupied: newStatus.value === 'occupied' ? new Date() : null,
    currentOrderId: newStatus.value === 'occupied' ? newOrderId.value : null,
  }

  await $nuxt.$axios
    .patch(`tables/${tableToUpdate.value.id}`, payload)
    .then((res) => {
      console.log('=>table status updated: ' + JSON.stringify(res.data))
      fetchTables()
      statusDialog.value = false
    })
    .catch((er) => {
      console.log('error updating table status: ' + er.response?.data)
    })
}

const occupyTable = async (table) => {
  await updateTableStatusQuick(table.id, 'occupied')
}

const freeTable = async (table) => {
  await updateTableStatusQuick(table.id, 'cleaning')
}

const markAvailable = async (table) => {
  await updateTableStatusQuick(table.id, 'available')
}

const updateTableStatusQuick = async (tableId, status) => {
  const payload = {
    status,
    timeOccupied: status === 'occupied' ? new Date() : null,
    currentOrderId: status === 'occupied' ? null : null,
  }

  await $nuxt.$axios
    .patch(`tables/${tableId}`, payload)
    .then((res) => {
      console.log('=>table status updated quickly: ' + JSON.stringify(res.data))
      fetchTables()
    })
    .catch((er) => {
      console.log('error updating table status quickly: ' + er.response?.data)
    })
}

const confirmDelete = (table) => {
  tableToDelete.value = table
  deleteDialog.value = true
}

const deleteTable = async () => {
  deleting.value = true
  await $nuxt.$axios
    .delete(`tables/${tableToDelete.value.id}`)
    .then((res) => {
      console.log('=>table deleted: ' + JSON.stringify(res.data))
      fetchTables()
      deleteDialog.value = false
      tableToDelete.value = null
    })
    .catch((er) => {
      console.log('error deleting table: ' + er.response?.data)
    })
    .finally(() => {
      deleting.value = false
    })
}

const getStatusColor = (status) => {
  const colors = {
    available: 'success',
    occupied: 'error',
    cleaning: 'warning',
    reserved: 'info',
  }
  return colors[status] || 'grey'
}

const getTableCardClass = (status) => {
  return `table-card--${status}`
}

const formatTime = (date) => {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(date))
}

// Lifecycle
onMounted(() => {
  fetchTables()
})
</script>

<style scoped>
.table-card {
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.table-card--available {
  border-left-color: #4caf50;
}

.table-card--occupied {
  border-left-color: #f44336;
}

.table-card--cleaning {
  border-left-color: #ff9800;
}

.table-card--reserved {
  border-left-color: #2196f3;
}

.table-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}
</style>