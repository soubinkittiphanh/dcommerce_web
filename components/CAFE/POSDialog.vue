<template>
  <v-dialog
    v-model="internalShow"
    fullscreen
    persistent
    transition="dialog-bottom-transition"
    :retain-focus="false"
  >
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>
          {{ toolbarTitle }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-chip v-if="ticket" color="white" text-color="primary" class="mr-2">
          <v-icon left small>mdi-ticket</v-icon>
          Ticket #{{ticket.ticketNumber || ticket.id }} 
        </v-chip>
        <v-chip v-if="hasTable" color="accent" text-color="white" class="mr-2">
          <v-icon left small>mdi-table-furniture</v-icon>
          Table {{ tableDisplay }}
        </v-chip>
        <v-btn icon dark @click="handleClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-0">
        <MenuPOSScreen
          v-if="internalShow"
          :table-id="effectiveTableId"
          :existing-ticket="ticket"
          :dialog-mode="true"
          @ticket-updated="handleTicketUpdated"
          @close-dialog="handleClose"
          @reload-data="handleReloadData"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import MenuPOSScreen from '~/components/CafePOSScreen/index.vue'

export default {
  name: 'POSDialog',

  components: {
    MenuPOSScreen
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },
    tableId: {
      type: [String, Number],
      default: null
    },
    ticket: {
      type: Object,
      default: null
    }
  },

  computed: {
    internalShow: {
      get() {
        return this.show
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },

    hasTable() {
      return this.tableId && this.tableId !== 'walk-in'
    },

    tableDisplay() {
      if (!this.tableId || this.tableId === 'walk-in') return 'Walk-in'
      return this.ticket?.table?.number || this.tableId
    },

    effectiveTableId() {
      return this.tableId || this.ticket?.tableId || 'walk-in'
    },

    toolbarTitle() {
      if (!this.ticket) return 'Add Items - New Order'
      const customer = this.ticket.client?.name || 'Walk-in'
      const table = this.hasTable ? `Table ${this.tableDisplay}` : 'Walk-in'
      return `Add Items - ${table} - ${customer}`
    }
  },
  mounted(){
    console.info(` from POS DIALOG ${JSON.stringify(this.ticket)}`)
  },

  methods: {
    handleClose() {
      console.log('POSDialog: Closing dialog')
      this.$emit('close')
    },

    handleTicketUpdated(ticket) {
      console.log('POSDialog: Ticket updated', ticket.id)
      this.$emit('ticket-updated', ticket)
      // ❌ DON'T close the dialog here - let user close it manually
      // this.$emit('close')
    },

    handleReloadData() {
      console.log('POSDialog: Reload data requested')
      this.$emit('reload-data')
    }
  }
}
</script>