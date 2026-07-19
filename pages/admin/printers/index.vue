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
          <v-col cols="12" md="3">
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

          <v-col cols="12" md="3">
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

          <v-col cols="12" md="3">
            <v-card outlined>
              <v-card-text>
                <div class="text-overline mb-2">Bar Orders</div>
                <v-select
                  v-model="settings.barPrinter"
                  :items="printerList"
                  item-text="name"
                  item-value="name"
                  label="Select Bar Printer"
                  prepend-inner-icon="mdi-glass-cocktail"
                  outlined
                  @change="saveToDb('bar', settings.barPrinter)"
                ></v-select>
                <v-btn
                  block
                  color="secondary"
                  outlined
                  :disabled="!settings.barPrinter"
                  @click="testPrint('bar', settings.barPrinter)"
                >
                  <v-icon left>mdi-test-tube</v-icon> Test Bar Print
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
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

        <!-- Category-Specific Kitchen/Bar Routing -->
        <v-row class="mt-4" v-if="mainCategories.length > 0">
          <v-col cols="12">
            <v-card-title class="pl-0 pb-2">
              <v-icon left color="primary">mdi-router-wireless</v-icon>
              Category-Specific Kitchen/Bar Routing
            </v-card-title>
            <p class="text-subtitle-2 grey--text">
              Assign specific printers to main categories. Orders will automatically split and route to the respective printers.
            </p>
          </v-col>
        </v-row>
        <v-row v-if="mainCategories.length > 0">
          <v-col cols="12" md="4" v-for="mainCat in mainCategories" :key="mainCat.id">
            <v-card outlined>
              <v-card-text>
                <div class="text-overline mb-2">
                  {{ mainCat.categoryName }} Printer
                </div>
                <v-select
                  v-model="categoryPrinters[mainCat.id]"
                  :items="printerList"
                  item-text="name"
                  item-value="name"
                  :label="'Select Printer for ' + mainCat.categoryName"
                  prepend-inner-icon="mdi-printer"
                  outlined
                  clearable
                  @change="saveCategoryPrinter(mainCat.id, categoryPrinters[mainCat.id])"
                ></v-select>
                <v-btn
                  block
                  color="secondary"
                  outlined
                  :disabled="!categoryPrinters[mainCat.id]"
                  @click="testPrint(`main-cat-${mainCat.id}`, categoryPrinters[mainCat.id])"
                >
                  <v-icon left>mdi-test-tube</v-icon> Test Print
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
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      printerList: [],
      mainCategories: [],
      categoryPrinters: {},
      settings: {
        ticketPrinter: '',
        kitchenPrinter: '',
        barcodePrinter: '',
        barPrinter: '',
      },
    }
  },
  async mounted() {
    await this.fetchPrinters()
    await this.loadMainCategories()
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

    async loadMainCategories() {
      try {
        const res = await this.$axios.$get('/api/mainCategory/findAll')
        this.mainCategories = res || []
      } catch (e) {
        console.error('Failed to load main categories:', e)
      }
    },

    async loadFromDb() {
      try {
        const data = await this.$axios.$get('/api/printers')
        data.forEach((p) => {
          if (p.type === 'ticket') this.settings.ticketPrinter = p.printerName
          if (p.type === 'kitchen') this.settings.kitchenPrinter = p.printerName
          if (p.type === 'barcode') this.settings.barcodePrinter = p.printerName
          if (p.type === 'bar') this.settings.barPrinter = p.printerName
          
          if (p.type.startsWith('main-cat-')) {
            const catId = p.type.replace('main-cat-', '')
            this.$set(this.categoryPrinters, catId, p.printerName)
          }
        })
      } catch (e) {
        this.$toast.error('Failed to load printer settings from server')
      }
    },

    async saveToDb(type, name) {
      try {
        await this.$axios.$post('/api/printers/upsert', {
          type,
          printerName: name,
        })
        this.$toast.success(`${type} printer saved successfully`)
        await this.refreshPrintersAction()
      } catch (e) {
        this.$toast.error('Error saving to database')
      }
    },

    async saveCategoryPrinter(mainCatId, name) {
      const type = `main-cat-${mainCatId}`
      try {
        await this.$axios.$post('/api/printers/upsert', {
          type,
          printerName: name || '',
        })
        this.$toast.success(`Printer configuration updated`)
        await this.refreshPrintersAction()
      } catch (e) {
        this.$toast.error('Error saving to database')
      }
    },
    ...mapActions(['refreshPrintersAction']),

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