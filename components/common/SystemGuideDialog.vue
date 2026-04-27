<template>
  <v-dialog v-model="internalValue" max-width="800px" transition="dialog-bottom-transition">
    <v-card class="loyalty-guide-card overflow-hidden">
      <!-- Premium Header -->
      <v-toolbar flat color="primary" dark class="px-4">
        <v-icon large class="mr-3">mdi-settings-transfer</v-icon>
        <v-toolbar-title class=" font-weight-bold">
          System Configuration Guide / ຄູ່ມືການຕັ້ງຄ່າລະບົບ
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="internalValue = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-6 grey lighten-5 lao-font">
        <div class="guide-content">
          <!-- Introduction -->
          <section class="mb-8">
            <div class="d-flex align-center mb-3">
              <v-icon color="primary" class="mr-2">mdi-information-outline</v-icon>
              <h3 class="text-h6 primary--text mb-0">Overview / ພາບລວມ</h3>
            </div>
            <p class="body-1 grey--text text--darken-3 mb-1">
              The System Parameters (SPF) control the behavior of your POS and Admin panel. Below is a guide to the
              available settings.
            </p>
            <p class="body-1 grey--text text--darken-3">
              ພາຣາມິເຕີລະບົບ (SPF) ແມ່ນໃຊ້ເພື່ອຄວບຄຸມການເຮັດວຽກຂອງ POS ແລະ ໜ້າ Admin ຂອງທ່ານ.
              ລຸ່ມນີ້ແມ່ນລາຍລະອຽດຂອງການຕັ້ງຄ່າຕ່າງໆ.
            </p>
          </section>

          <!-- SPF Settings -->
          <section class="mb-8">
            <div class="d-flex align-center mb-4">
              <v-icon color="primary" class="mr-2">mdi-cog-outline</v-icon>
              <h3 class="text-h6 primary--text mb-0">Parameter Dictionary / ລາຍລະອຽດພາຣາມິເຕີ</h3>
            </div>
            <v-alert border="left" colored-border color="primary" elevation="2" class="pa-0 overflow-hidden">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead class="grey lighten-3">
                    <tr>
                      <th class="text-left font-weight-bold">Code / ລະຫັດ</th>
                      <th class="text-left font-weight-bold">Description / ຄຳອະທິບາຍ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- General Settings -->
                    <tr class="blue lighten-5">
                      <td colspan="2" class="font-weight-bold text-center">General Settings / ການຕັ້ງຄ່າທົ່ວໄປ</td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">HOME</td>
                      <td>
                        <strong>Home page path / ເສັ້ນທາງໜ້າຫຼັກ:</strong><br>
                        Defines where the user is redirected after login (e.g., <code>/admin/ticket</code>).
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">E_TERMINAL</td>
                      <td>
                        <strong>Enable Terminal Popup / ເປີດປ໊ອບອັບເລືອກເຄົາເຕີ:</strong><br>
                        Set to <code>Y</code> to force terminal selection on first login.
                      </td>
                    </tr>
                    <!-- UI Customization -->
                    <tr class="purple lighten-5">
                      <td colspan="2" class="font-weight-bold text-center">UI Customization / ການປັບແຕ່ງໜ້າຕາ</td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">LABEL_AC_CUS</td>
                      <td>
                        <strong>Customer Label / ຊື່ເອີ້ນລູກຄ້າ:</strong><br>
                        Customizes the "Customer" label in invoices (e.g., <code> Agency</code> or
                        <code>ລູກຄ້າ </code>).
                      </td>
                    </tr>
                    <!-- Printing Settings -->
                    <tr class="grey lighten-3">
                      <td colspan="2" class="font-weight-bold text-center">Printing Settings / ການຕັ້ງຄ່າການພິມ</td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">TICKET_FORM</td>
                      <td>
                        <strong>Print Format / ຮູບແບບການພິມ:</strong><br>
                        <code>CLASSIC</code> = 80mm receipt, <code>FORMAL</code> = A4 document.
                      </td>
                    </tr>
                    <!-- Accounting Settings -->
                    <tr class="orange lighten-5">
                      <td colspan="2" class="font-weight-bold text-center">Accounting Settings / ການຕັ້ງຄ່າບັນຊີ</td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">AC_AR_BATCH_JOB</td>
                      <td>
                        <strong>AR Batch Job / ປຸ່ມ Batch Job AR:</strong><br>
                        Shows the batch job browse button in AR section if set to <code>Y</code>.
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">AC_AP_MOU_FETCH</td>
                      <td>
                        <strong>AP Batch Job / ປຸ່ມ Batch Job AP:</strong><br>
                        Enables batch job fetching from AP Payments if set to <code>Y</code>.
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">AC_AP_GL_ENABLE</td>
                      <td>
                        <strong>AP GL Integration / ເປີດໃຊ້ຜັງບັນຊີ AP:</strong><br>
                        Enables General Ledger integration for Accounts Payable.
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">AC_AR_GL_ENABLE</td>
                      <td>
                        <strong>AR GL Integration / ເປີດໃຊ້ຜັງບັນຊີ AR:</strong><br>
                        Enables General Ledger integration for Accounts Receivable.
                      </td>
                    </tr>
                    <!-- Loyalty Settings -->
                    <tr class="green lighten-5">
                      <td colspan="2" class="font-weight-bold text-center">Loyalty Program / ການສະສົມຄະແນນ</td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">LOYALTY_ENABLED</td>
                      <td>
                        <strong>Status / ສະຖານະ:</strong><br>
                        Set to <code>Y</code> to enable the loyalty program. / ຕັ້ງເປັນ <code>Y</code> ເພື່ອເປີດນຳໃຊ້.
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">LOYALTY_EARN_RATE</td>
                      <td>
                        <strong>Earn Rate / ອັດຕາການໄດ້ຮັບ:</strong><br>
                        Amount of money for 1 point (e.g., <code>10000</code>). / ຈຳນວນເງິນຕໍ່ 1 ຄະແນນ.
                      </td>
                    </tr>
                    <tr>
                      <td class="font-weight-medium">LOYALTY_REDEEM_RATE</td>
                      <td>
                        <strong>Redeem Rate / ອັດຕາການແລກ:</strong><br>
                        Discount value per 1 point (e.g., <code>10</code>). / ມູນຄ່າສ່ວນຫຼຸດຕໍ່ 1 ຄະແນນ.
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-alert>
          </section>

          <!-- Loyalty Logic (Visual Guide) -->
          <section class="mb-8 p-4 rounded-lg white elevation-1">
            <div class="d-flex align-center mb-4">
              <v-icon color="primary" class="mr-2">mdi-calculator</v-icon>
              <h3 class="text-h6 primary--text mb-0">Loyalty Examples / ຕົວຢ່າງການຄິດໄລ່</h3>
            </div>
            <v-row>
              <v-col cols="12" md="6">
                <v-card outlined class="pa-4 h-100 border-left-success">
                  <div class="text-subtitle-1 font-weight-bold success--text mb-1 d-block">Earning Points / ການສະສົມ
                  </div>
                  <div class="body-2 mb-2 d-block">If <strong>Earn Rate</strong> = 10,000:</div>
                  <div class="body-2 d-block">
                    Spend <strong>100,000 LAK</strong> = <strong>10 points</strong>.<br>
                    ຊື້ <strong>100,000 ກີບ</strong> = ໄດ້ຮັບ <strong>10 ຄະແນນ</strong>.
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card outlined class="pa-4 h-100 border-left-primary">
                  <div class="text-subtitle-1 font-weight-bold primary--text mb-1 d-block">Redeeming Points / ການນຳໃຊ້
                  </div>
                  <div class="body-2 mb-2 d-block">If <strong>Redeem Rate</strong> = 10:</div>
                  <div class="body-2 d-block">
                    Use <strong>1,000 points</strong> = <strong>10,000 LAK</strong> discount.<br>
                    ໃຊ້ <strong>1,000 ຄະແນນ</strong> = ໄດ້ສ່ວນຫຼຸດ <strong>10,000 ກີບ</strong>.
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <!-- Best Practices -->
          <section>
            <div class="d-flex align-center mb-3">
              <v-icon color="primary" class="mr-2">mdi-check-decagram-outline</v-icon>
              <h3 class="text-h6 primary--text mb-0">Pro Tips / ຄຳແນະນຳ</h3>
            </div>
            <v-list dense bg-color="transparent">
              <v-list-item class="px-0">
                <v-list-item-icon class="mr-2">
                  <v-icon color="success" small>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap body-2">
                    Register customers with phone numbers for easy tracking.<br>
                    ລົງທະບຽນລູກຄ້າດ້ວຍເບີໂທ ເພື່ອຄວາມສະດວກໃນການຕິດຕາມຄະແນນ.
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="px-0">
                <v-list-item-icon class="mr-2">
                  <v-icon color="success" small>mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap body-2">
                    Adjust points in <strong>Admin > Client</strong> if needed.<br>
                    ທ່ານສາມາດປັບປຸງຄະແນນໄດ້ຢູ່ໜ້າ <strong>Admin > Client</strong> ຖ້າຈຳເປັນ.
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </section>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn color="primary" depressed large rounded @click="internalValue = false"
          class="px-8 font-weight-bold lao-font">
          ຕົກລົງ / Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SystemGuideDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    internalValue: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Noto Sans Lao';
  src: url('/notosan/NotoSansLao-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.lao-font {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.lao-font * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.loyalty-guide-card {
  border-radius: 16px !important;
}

.border-left-success {
  border-left: 4px solid #4CAF50 !important;
}

.border-left-primary {
  border-left: 4px solid #1976D2 !important;
}

.guide-content section h3 {
  letter-spacing: 0.5px;
}
</style>
