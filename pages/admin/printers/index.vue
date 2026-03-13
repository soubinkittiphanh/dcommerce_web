<template>
  <v-container>
    <v-card elevation="2">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Printer Maintenance</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="fetchPrinters">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-card outlined>
              <v-card-text>
                <div class="text-overline mb-2">Counter Receipt</div>
                <v-select
                  v-model="settings.ticketPrinter"
                  :items="printerList"
                  item-text="name"
                  item-value="name"
                  label="Select Ticket Printer"
                  prepend-inner-icon="mdi-printer"
                  outlined
                  @change="saveToDb('ticket', settings.ticketPrinter)"
                ></v-select>
                <v-btn
                  block
                  color="secondary"
                  outlined
                  :disabled="!settings.ticketPrinter"
                  @click="testPrint('ticket', settings.ticketPrinter)"
                >
                  <v-icon left>mdi-test-tube</v-icon> Test Ticket Print
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card outlined>
              <v-card-text>
                <div class="text-overline mb-2">Kitchen Orders</div>
                <v-select
                  v-model="settings.kitchenPrinter"
                  :items="printerList"
                  item-text="name"
                  item-value="name"
                  label="Select Kitchen Printer"
                  prepend-inner-icon="mdi-stove"
                  outlined
                  @change="saveToDb('kitchen', settings.kitchenPrinter)"
                ></v-select>
                <v-btn
                  block
                  color="secondary"
                  outlined
                  :disabled="!settings.kitchenPrinter"
                  @click="testPrint('kitchen', settings.kitchenPrinter)"
                >
                  <v-icon left>mdi-test-tube</v-icon> Test Kitchen Print
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card outlined border color="blue lighten-5">
              <v-card-text>
                <div class="text-overline mb-2 blue--text">
                  Barcode Labels (40x20mm)
                </div>
                <v-select
                  v-model="settings.barcodePrinter"
                  :items="printerList"
                  item-text="name"
                  item-value="name"
                  label="Select Barcode Printer"
                  prepend-inner-icon="mdi-barcode"
                  outlined
                  @change="saveToDb('barcode', settings.barcodePrinter)"
                ></v-select>
                <v-btn
                  block
                  color="primary"
                  outlined
                  :disabled="!settings.barcodePrinter"
                  @click="testBarcodePrint(settings.barcodePrinter)"
                >
                  <v-icon left>mdi-barcode-scan</v-icon> Test Barcode Print
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      printerList: [],
      settings: {
        ticketPrinter: '',
        kitchenPrinter: '',
        barcodePrinter: '', // Added barcodePrinter
      },
    }
  },
  async mounted() {
    await this.fetchPrinters()
    await this.loadFromDb()
  },
  methods: {
    async fetchPrinters() {
      if (window.posApi) {
        this.printerList = await window.posApi.getPrinters()
      } else {
        this.$toast.info('Running in Web Mode: Hardware detection disabled')
      }
    },

    async loadFromDb() {
      try {
        const data = await this.$axios.$get('/api/printers')
        data.forEach((p) => {
          if (p.type === 'ticket') this.settings.ticketPrinter = p.printerName
          if (p.type === 'kitchen') this.settings.kitchenPrinter = p.printerName
          if (p.type === 'barcode') this.settings.barcodePrinter = p.printerName // Added mapping
        })
      } catch (e) {
        this.$toast.error('Failed to load printer settings from server')
      }
    },

    async saveToDb(type, name) {
      try {
        await this.$axios.$post('/api/printers/upsert', {
          type: type,
          printerName: name,
        })
        this.$toast.success(`${type} printer saved successfully`)
      } catch (e) {
        this.$toast.error('Error saving to database')
      }
    },

    testPrint(type, name) {
      if (!window.posApi) return

      // Create a simple HTML template for testing
      const testHtml = `
    <div style="text-align:center; font-family: sans-serif;">
      <h2>TEST ${type.toUpperCase()}</h2>
      <p>Printer: ${name}</p>
      <hr>
      <div style="display:flex; justify-content:between;">
        <span>Item: TEST RECEIPT</span>
        <span>x1</span>
      </div>
      <p>Time: ${new Date().toLocaleString()}</p>
    </div>
  `

      window.posApi.printReceipt({
        html: testHtml, // Make sure you pass the HTML key!
        printerName: name,
        width: type === 'barcode' ? '58mm' : '80mm',
      })

      this.$toast.info(`Test signal sent to ${name}`)
    },

    // New specific test for Barcode labels
    testBarcodePrint(name) {
      if (!window.posApi) return

      // Simple test HTML for a 40x20mm label
      const testHtml = `
        <div style="text-align:center; font-family:sans-serif; width:40mm; height:20mm;">
          <div style="font-size:10pt; font-weight:bold;">TEST LABEL</div>
          <div style="font-size:8pt;">ID: 0000000</div>
          <div style="margin-top:2px;">|| ||| || ||| ||</div>
        </div>
      `

      window.posApi.printBarcode({
        html: testHtml,
        printerName: name,
        copies: 1,
      })

      this.$toast.info(`Test label sent to ${name}`)
    },
  },
}
</script>