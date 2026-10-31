<template>
  <v-dialog :value="value" fullscreen hide-overlay transition="dialog-bottom-transition" @input="$emit('input', $event)">
    <v-card class="grey lighten-3">
      <v-toolbar dense flat color="primary" dark class="no-print">
        <v-btn icon @click="$emit('input', false)"><v-icon>mdi-close</v-icon></v-btn>
        <v-toolbar-title class="text-subtitle-1">{{ title }}</v-toolbar-title>
        <v-spacer />
        <v-btn text class="text-none" :disabled="!printable" @click="print"><v-icon left>mdi-printer</v-icon>ພິມ (Print)</v-btn>
      </v-toolbar>
      <div class="pa-4 d-flex justify-center">
        <div class="loan-print-sheet white elevation-1">
          <slot />
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
// Browser print of a loan document (D11): only the sheet is printed, on A4
export default {
  name: 'PrintShell',
  props: {
    value: { type: Boolean, default: false },
    title: { type: String, default: '' },
    printable: { type: Boolean, default: true }
  },
  methods: {
    print () {
      document.body.classList.add('loan-printing')
      const done = () => { document.body.classList.remove('loan-printing'); window.removeEventListener('afterprint', done) }
      window.addEventListener('afterprint', done)
      this.$nextTick(() => window.print())
    }
  }
}
</script>

<style>
.loan-print-sheet {
  width: 210mm;
  min-height: 140mm;
  padding: 14mm;
  font-family: 'Noto Sans Lao', sans-serif;
  font-size: 12px;
  color: #000;
}
.loan-print-sheet table { width: 100%; border-collapse: collapse; }
.loan-print-sheet th, .loan-print-sheet td { border-bottom: 1px solid #ccc; padding: 3px 4px; text-align: left; }
.loan-print-sheet .num { text-align: right; white-space: nowrap; }
@media print {
  body.loan-printing * { visibility: hidden !important; }
  body.loan-printing .loan-print-sheet, body.loan-printing .loan-print-sheet * { visibility: visible !important; }
  body.loan-printing .loan-print-sheet { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none !important; padding: 0; }
  @page { size: A4; margin: 12mm; }
}
</style>
