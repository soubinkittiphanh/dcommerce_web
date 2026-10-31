<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການລູກຄ້າຕິດຫນີ້</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>

    <!-- Existing Dialogs -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="lduzK_oVV_g">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="loadData(); dialogOrderDetail = false" :is-quotation="false" :key="componentKey"
        :is-update="viewTransaction" :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()">
      </cancel-ticket-form>
    </v-dialog>

    <!-- NEW: Add TicketDetailsDialog for credit transactions -->
    <ticket-details-dialog v-model="ticketDetailsDialog" :ticket-data="selectedTicketForDetails"
      :company-logo="companyLogo" :ticket-common="ticketCommon" :show-print-button="true" @close="onTicketDialogClose"
      @print-ticket="onPrintTicket" @print-payment-details="onPrintPaymentDetails" />

    <!-- Post to AR Dialog -->
    <v-dialog v-model="postToArDialog" persistent max-width="720px">
      <v-card v-if="selectedOrderForAr" class="rounded-xl overflow-hidden elevation-8">
        <!-- Dialog Header -->
        <div class="px-6 py-4 white--text primary">
          <div class="d-flex align-center">
            <v-avatar color="white" size="42" class="mr-3 elevation-2">
              <v-icon color="primary">mdi-file-invoice-dollar</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h3 class="text-h6 font-weight-bold mb-0 white--text">ສ້າງໃບແຈ້ງໜີ້ AR ຈາກບິນຂາຍຕິດໜີ້</h3>
              <span class="caption white--text" style="opacity: 0.85;">Post Order to Accounts Receivable Invoice</span>
            </div>
            <v-btn icon dark @click="closePostToArDialog" :disabled="postingToAr">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>

        <v-card-text class="pa-6 pt-5">
          <!-- Order & Customer Highlights Card -->
          <v-card outlined class="rounded-lg pa-4 mb-4" style="background-color: #f8fafc; border-color: #e2e8f0;">
            <v-row dense>
              <v-col cols="12" sm="6">
                <div class="caption grey--text text--darken-1 font-weight-medium">ລູກຄ້າ (Customer)</div>
                <div class="text-subtitle-1 font-weight-bold primary--text">
                  <v-icon small color="primary" class="mr-1">mdi-account</v-icon>
                  {{ selectedOrderForAr.client?.name || 'N/A' }}
                </div>
                <div v-if="selectedOrderForAr.client?.company" class="caption grey--text">
                  {{ selectedOrderForAr.client?.company }}
                </div>
                <div v-if="selectedOrderForAr.client?.telephone" class="caption grey--text">
                  <v-icon x-small class="mr-1">mdi-phone</v-icon>{{ selectedOrderForAr.client?.telephone }}
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="text-sm-right">
                <div class="caption grey--text text--darken-1 font-weight-medium">ເລກທີບິນ / ຍອດລວມ</div>
                <div class="d-flex align-center justify-sm-end my-1">
                  <v-chip small color="primary" outlined class="font-weight-bold mr-2">
                    Order #{{ selectedOrderForAr.id }}
                  </v-chip>
                  <v-chip small color="orange darken-1" dark class="font-weight-bold">
                    {{ selectedOrderForAr.payment?.payment_name || 'ຕິດໜີ້' }}
                  </v-chip>
                </div>
                <div class="text-h5 font-weight-black success--text mt-1">
                  {{ numberWithCommas(selectedOrderForAr.total) }}
                  <small class="caption font-weight-bold grey--text">{{ selectedOrderForAr.currency?.code || 'LAK' }}</small>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- Input Controls -->
          <v-row dense class="mb-3">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="arInvoiceDate"
                type="date"
                label="ວັນທີໃບແຈ້ງໜີ້ (Invoice Date)*"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-calendar"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="arDueDate"
                type="date"
                label="ວັນທີຄົບກຳນົດ (Due Date)*"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-calendar-clock"
                :hint="`ຄິດໄລ່ຕາມສິນເຊື່ອ ${selectedOrderForAr.client?.credit || 30} ມື້`"
                persistent-hint
              />
            </v-col>

            <v-col cols="12" class="mt-2">
              <v-text-field
                v-model="arDescription"
                label="ຄຳອະທິບາຍ (Description / Remarks)"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-comment-text-outline"
              />
            </v-col>
          </v-row>

          <!-- Order Lines Preview -->
          <div class="text-subtitle-2 font-weight-bold grey--text text--darken-2 mb-2">
            <v-icon small color="grey darken-2" class="mr-1">mdi-format-list-bulleted</v-icon>
            ລາຍການສິນຄ້າ ({{ selectedOrderForAr.lines?.length || 0 }} ລາຍການ)
          </div>
          <v-simple-table dense class="mb-4 rounded-lg" style="border: 1px solid #e2e8f0;">
            <template v-slot:default>
              <thead>
                <tr class="grey lighten-4">
                  <th class="text-left py-2">ສິນຄ້າ</th>
                  <th class="text-center py-2" style="width: 80px;">ຈຳນວນ</th>
                  <th class="text-right py-2" style="width: 110px;">ລາຄາ</th>
                  <th class="text-right py-2" style="width: 120px;">ລວມ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(line, idx) in (selectedOrderForAr.lines || [])" :key="idx">
                  <td class="text-left font-weight-medium py-1">
                    {{ line.product?.pro_name || `Product #${line.productId}` }}
                  </td>
                  <td class="text-center py-1">{{ line.quantity }}</td>
                  <td class="text-right py-1">{{ numberWithCommas(line.price) }}</td>
                  <td class="text-right font-weight-bold py-1">{{ numberWithCommas(line.total) }}</td>
                </tr>
                <tr v-if="!selectedOrderForAr.lines || selectedOrderForAr.lines.length === 0">
                  <td colspan="4" class="text-center grey--text py-2">
                    ລາຍການລວມບິນ Order #{{ selectedOrderForAr.id }} ({{ numberWithCommas(selectedOrderForAr.total) }})
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <!-- Double-entry Accounting Notice -->
          <v-card outlined class="rounded-lg pa-3" style="background: #f0fdf4; border-color: #bbf7d0;">
            <div class="d-flex align-center">
              <v-icon color="success" class="mr-2">mdi-shield-check</v-icon>
              <div>
                <div class="caption font-weight-bold success--text text--darken-2">
                  ການບັນທຶກບັນຊີຄູ່ອັດຕະໂນມັດ (Automatic Double-Entry Posting)
                </div>
                <div class="caption grey--text text--darken-2">
                  <strong>Debit (DR):</strong> 1131 - ລູກໜີ້ການຄ້າ (AR) &nbsp;|&nbsp;
                  <strong>Credit (CR):</strong> 4111 - ລາຍຮັບຈາກການຂາຍ (Revenue)
                </div>
              </div>
            </div>
          </v-card>
        </v-card-text>

        <v-divider />

        <!-- Dialog Footer Actions -->
        <v-card-actions class="pa-4 bg-light">
          <v-spacer />
          <v-btn text large class="rounded-lg mr-2 font-weight-medium" @click="closePostToArDialog" :disabled="postingToAr">
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-btn
            color="primary"
            dark
            large
            depressed
            class="rounded-lg font-weight-bold px-6 shadow-sm"
            :loading="postingToAr"
            @click="confirmPostToAr"
          >
            <v-icon left>mdi-file-export</v-icon>
            ຢືນຢັນສ້າງໃບແຈ້ງໜີ້ AR (Confirm & Post)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Settle AR Dialog -->
    <v-dialog v-model="settleArDialog" persistent max-width="680px">
      <v-card v-if="selectedOrderForSettle" class="rounded-xl overflow-hidden elevation-8">
        <!-- Dialog Header -->
        <div class="px-6 py-4 white--text success darken-1">
          <div class="d-flex align-center">
            <v-avatar color="white" size="42" class="mr-3 elevation-2">
              <v-icon color="success darken-1">mdi-cash-register</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h3 class="text-h6 font-weight-bold mb-0 white--text">ຮັບຊຳລະໃບແຈ້ງໜີ້ AR</h3>
              <span class="caption white--text" style="opacity: 0.9;">
                AR Invoice Settlement | Order #{{ selectedOrderForSettle.id }}
              </span>
            </div>
            <v-btn icon dark @click="closeSettleArDialog" :disabled="submittingSettle">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>

        <v-card-text class="pa-6 pt-5">
          <v-progress-linear v-if="settleLoading" indeterminate color="success" class="mb-4" />

          <!-- Order & AR Highlights Card -->
          <v-card outlined class="rounded-lg pa-4 mb-4" style="background-color: #f8fafc; border-color: #e2e8f0;">
            <v-row dense>
              <v-col cols="12" sm="6">
                <div class="caption grey--text text--darken-1 font-weight-medium">ລູກຄ້າ (Customer)</div>
                <div class="text-subtitle-1 font-weight-bold primary--text">
                  <v-icon small color="primary" class="mr-1">mdi-account</v-icon>
                  {{ selectedOrderForSettle.client?.name || 'N/A' }}
                </div>
                <div v-if="selectedOrderForSettle.client?.company" class="caption grey--text">
                  {{ selectedOrderForSettle.client?.company }}
                </div>
                <div v-if="selectedOrderForSettle.client?.telephone" class="caption grey--text">
                  <v-icon x-small class="mr-1">mdi-phone</v-icon>{{ selectedOrderForSettle.client?.telephone }}
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="text-sm-right">
                <div class="caption grey--text text--darken-1 font-weight-medium">ໃບແຈ້ງໜີ້ AR</div>
                <div class="d-flex align-center justify-sm-end my-1">
                  <v-chip small color="primary" outlined class="font-weight-bold mr-2">
                    {{ settleInvoiceNumber }}
                  </v-chip>
                  <v-chip small color="orange darken-1" dark class="font-weight-bold">
                    Order #{{ selectedOrderForSettle.id }}
                  </v-chip>
                </div>
                <div class="caption grey--text">ຍອດເຕັມ: {{ numberWithCommas(settleTotalAmount) }} {{ selectedOrderForSettle.currency?.code || 'LAK' }}</div>
                <div v-if="settleAlreadyPaid > 0" class="caption grey--text">
                  ຊຳລະແລ້ວ: <span class="success--text font-weight-bold">{{ numberWithCommas(settleAlreadyPaid) }}</span>
                </div>
                <div class="text-h6 font-weight-black error--text mt-1">
                  ຍອດຄ້າງຊຳລະ: {{ numberWithCommas(settleOutstandingAmount) }}
                  <small class="caption font-weight-bold grey--text">{{ selectedOrderForSettle.currency?.code || 'LAK' }}</small>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- Input Controls -->
          <v-row dense class="mb-3">
            <v-col cols="12" sm="6">
              <v-select
                v-model="settlePaymentId"
                :items="availablePaymentMethods"
                item-text="payment_name"
                item-value="id"
                label="ວິທີການຊຳລະ (Payment Method)*"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-credit-card"
              >
                <template v-slot:selection="{ item }">
                  <div class="d-flex align-center">
                    <v-chip x-small :color="getPaymentMethodColor(item.payment_code)" dark class="mr-2">
                      {{ item.payment_code }}
                    </v-chip>
                    <span>{{ item.payment_name || item.payment_code }}</span>
                  </div>
                </template>
                <template v-slot:item="{ item }">
                  <div class="d-flex align-center">
                    <v-chip x-small :color="getPaymentMethodColor(item.payment_code)" dark class="mr-2">
                      {{ item.payment_code }}
                    </v-chip>
                    <span>{{ item.payment_name || item.payment_code }}</span>
                  </div>
                </template>
              </v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model.number="settleAmount"
                type="number"
                label="ຈຳນວນເງິນຮັບຊຳລະ (Amount to Settle)*"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-currency-usd"
                :hint="`ຍອດຄ້າງຊຳລະ: ${numberWithCommas(settleOutstandingAmount)}`"
                persistent-hint
              />
            </v-col>

            <v-col cols="12" sm="6" class="mt-2">
              <v-text-field
                v-model="settleDate"
                type="date"
                label="ວັນທີຮັບຊຳລະ (Payment Date)*"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-calendar"
              />
            </v-col>

            <v-col cols="12" sm="6" class="mt-2">
              <v-text-field
                v-model="settleNotes"
                label="ໝາຍເຫດ (Notes / Reference)"
                outlined
                dense
                hide-details="auto"
                prepend-inner-icon="mdi-comment-text-outline"
              />
            </v-col>
          </v-row>

          <v-alert
            v-if="settleAmount >= settleOutstandingAmount && settleOutstandingAmount > 0"
            dense
            outlined
            type="info"
            color="success"
            class="rounded-lg mb-0"
          >
            <div class="caption">
              <strong>ແຈ້ງເຕືອນ:</strong> ການຊຳລະນີ້ຈະເຮັດໃຫ້ໃບແຈ້ງໜີ້ AR ນີ້<strong>ຄົບຖ້ວນ 100%</strong>. ລະບົບຈະຖາມເພື່ອປ່ຽນວິທີການຊຳລະຂອງບິນຂາຍ POS ເພື່ອຍ້າຍອອກຈາກລາຍການຕິດໜີ້.
            </div>
          </v-alert>
        </v-card-text>

        <v-divider />

        <!-- Dialog Footer Actions -->
        <v-card-actions class="pa-4 bg-light">
          <v-spacer />
          <v-btn text large class="rounded-lg mr-2 font-weight-medium" @click="closeSettleArDialog" :disabled="submittingSettle">
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-btn
            color="success darken-1"
            dark
            large
            depressed
            class="rounded-lg font-weight-bold px-6 shadow-sm"
            :loading="submittingSettle"
            @click="confirmSettleAr"
          >
            <v-icon left>mdi-check</v-icon>
            ຢືນຢັນຮັບຊຳລະ (Confirm Settlement)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Prompt User to Change SaleHeader Payment Dialog -->
    <v-dialog v-model="promptChangePaymentDialog" persistent max-width="600px">
      <v-card v-if="orderToChangePayment" class="rounded-xl overflow-hidden elevation-8">
        <!-- Dialog Header -->
        <div class="px-6 py-4 white--text success darken-1">
          <div class="d-flex align-center">
            <v-avatar color="white" size="42" class="mr-3 elevation-2">
              <v-icon color="success darken-1">mdi-check-decagram</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h3 class="text-h6 font-weight-bold mb-0 white--text">AR ຊຳລະຄົບຖ້ວນແລ້ວ!</h3>
              <span class="caption white--text" style="opacity: 0.9;">
                AR Invoice Settled Completely | Order #{{ orderToChangePayment.id }}
              </span>
            </div>
          </div>
        </div>

        <v-card-text class="pa-6 pt-5">
          <!-- Summary Alert Card -->
          <v-card outlined class="rounded-lg pa-4 mb-4" style="background-color: #f0fdf4; border-color: #bbf7d0;">
            <div class="d-flex align-start">
              <v-icon color="success" class="mr-3 mt-1">mdi-information</v-icon>
              <div>
                <div class="text-subtitle-1 font-weight-bold success--text text--darken-2 mb-1">
                  ໃບແຈ້ງໜີ້ AR ເລກທີ {{ orderToChangePayment.arInvoice?.invoiceNumber || (orderToChangePayment.arInvoiceId ? `AR-INV-${orderToChangePayment.arInvoiceId}` : 'AR') }} ໄດ້ຖືກຊຳລະຄົບຖ້ວນ 100% ແລ້ວ!
                </div>
                <div class="body-2 grey--text text--darken-2">
                  ທ່ານຕ້ອງການປ່ຽນວິທີການຊຳລະຂອງບິນຂາຍ <strong>Order #{{ orderToChangePayment.id }}</strong> ຈາກ <strong>"ຕິດໜີ້" (Credit)</strong> ໃຫ້ເປັນວິທີການຊຳລະຕົວຈິງນຳບໍ່?
                </div>
                <div class="caption grey--text mt-2">
                  💡 <strong>ໝາຍເຫດ:</strong> ເມື່ອປ່ຽນວິທີການຊຳລະແລ້ວ, ບິນນີ້ຈະຖືກຍ້າຍອອກຈາກລາຍການລູກຄ້າຕິດໜີ້ໂດຍອັດຕະໂນມັດ ແລະ ບັນທຶກເປັນຍອດຂາຍທີ່ຊຳລະແລ້ວໃນລາຍງານ POS.
                </div>
              </div>
            </div>
          </v-card>

          <!-- Highlights -->
          <div class="d-flex justify-space-between align-center px-2 mb-4">
            <div>
              <span class="caption grey--text">ລູກຄ້າ:</span>
              <strong class="ml-1">{{ orderToChangePayment.client?.name || 'N/A' }}</strong>
            </div>
            <div>
              <span class="caption grey--text">ຍອດລວມບິນ:</span>
              <strong class="ml-1 success--text">{{ numberWithCommas(orderToChangePayment.total) }} {{ orderToChangePayment.currency?.code || 'LAK' }}</strong>
            </div>
          </div>

          <!-- Payment Selector -->
          <v-select
            v-model="targetPaymentId"
            :items="availablePaymentMethods"
            item-text="payment_name"
            item-value="id"
            label="ເລືອກວິທີການຊຳລະຂອງບິນຂາຍ (Target Payment Method)*"
            outlined
            dense
            hide-details="auto"
            prepend-inner-icon="mdi-credit-card-check"
          >
            <template v-slot:selection="{ item }">
              <div class="d-flex align-center">
                <v-chip x-small :color="getPaymentMethodColor(item.payment_code)" dark class="mr-2">
                  {{ item.payment_code }}
                </v-chip>
                <span class="font-weight-bold">{{ item.payment_name || item.payment_code }}</span>
              </div>
            </template>
            <template v-slot:item="{ item }">
              <div class="d-flex align-center">
                <v-chip x-small :color="getPaymentMethodColor(item.payment_code)" dark class="mr-2">
                  {{ item.payment_code }}
                </v-chip>
                <span>{{ item.payment_name || item.payment_code }}</span>
              </div>
            </template>
          </v-select>
        </v-card-text>

        <v-divider />

        <!-- Dialog Footer Actions -->
        <v-card-actions class="pa-4 bg-light">
          <v-btn text large class="rounded-lg mr-2 font-weight-medium grey--text text--darken-1" @click="cancelChangeSalePayment" :disabled="changingSalePayment">
            ຮັກສາຕິດໜີ້ (Keep As Credit)
          </v-btn>
          <v-spacer />
          <v-btn
            color="success darken-1"
            dark
            large
            depressed
            class="rounded-lg font-weight-bold px-6 shadow-sm"
            :loading="changingSalePayment"
            @click="confirmChangeSalePayment"
          >
            <v-icon left>mdi-check-all</v-icon>
            ຢືນຢັນປ່ຽນວິທີຊຳລະ (Confirm & Update)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx />
            <v-autocomplete item-text="name" item-value="id" :items="customTerminalList" label="ເລືອກຕາມ ຮ້ານ*"
              v-model="terminalId"></v-autocomplete>
          </v-col>

          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
              <span class="mdi mdi-microsoft-excel"></span>Generate excel file
            </v-btn>
          </v-col>

          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary mr-2" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
            <v-btn size="large" variant="outlined" @click="printSummaryA4" class="success" rounded>
              <span class="mdi mdi-printer"></span>
              ພິມລາຍງານສະຫຼຸບ A4
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Enhanced Credit Summary Section -->
      <v-card-text>
        <!-- Grand Summary Cards -->
        <v-row class="mb-4">
          <v-col cols="12" md="4">
            <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);">
              <v-card-text class="d-flex align-center pa-4">
                <v-avatar color="blue" size="48" class="elevation-1 mr-3">
                  <v-icon color="white">mdi-cart-outline</v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຂາຍລວມ (Gross Credit)</div>
                  <div class="text-h6 font-weight-black blue--text text--darken-3">
                    {{ getFormatNum(totalSale + totalDiscount) }}
                    <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);">
              <v-card-text class="d-flex align-center pa-4">
                <v-avatar color="red" size="48" class="elevation-1 mr-3">
                  <v-icon color="white">mdi-tag-outline</v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ສ່ວນຫຼຸດລວມ (Discount)</div>
                  <div class="text-h6 font-weight-black red--text text--darken-3">
                    {{ getFormatNum(totalDiscount) }}
                    <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto elevation-2" style="border-radius: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);">
              <v-card-text class="d-flex align-center pa-4">
                <v-avatar color="green" size="48" class="elevation-1 mr-3">
                  <v-icon color="white">mdi-cash-multiple</v-icon>
                </v-avatar>
                <div>
                  <div class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">ຍອດຕິດໜີ້ສຸດທິ (Net Credit)</div>
                  <div class="text-h6 font-weight-black green--text text--darken-3">
                    {{ getFormatNum(totalSale) }}
                    <small class="caption">{{ localCurrency?.code || 'LAK' }}</small>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <!-- Bill Count Card -->
          <v-col cols="12" lg="4">
            <v-card outlined class="pa-4 d-flex align-center" style="border-radius: 12px; height: 100%;">
              <v-avatar color="orange" size="48" class="mr-4">
                <v-icon color="white">mdi-file-document-outline</v-icon>
              </v-avatar>
              <div>
                <h4 class="grey--text text--darken-1 mb-1">ຈຳນວນບິນຕິດໜີ້</h4>
                <div class="text-h5 font-weight-black">{{ creditOrder.length }} <small class="caption">ບິນ</small></div>
              </div>
            </v-card>
          </v-col>

          <!-- Credit Analytics Card -->
          <v-col cols="12" lg="8">
            <v-card outlined class="pa-4" style="border-radius: 12px;">
              <h4 class="mb-3">
                <v-icon left color="warning">mdi-clock-alert</v-icon>
                ສະຖານະໜີ້ສິນ
              </h4>
              <v-row class="text-center">
                <v-col cols="6" sm="3">
                  <div class="text-h6 error--text">{{ getOverdueCount() }}</div>
                  <div class="caption grey--text">ເກີນກຳນົດ</div>
                  <v-progress-circular :value="getOverduePercentage()" color="error" size="36" width="3" class="mt-1">
                    <small>{{ getOverduePercentage().toFixed(0) }}%</small>
                  </v-progress-circular>
                </v-col>

                <v-col cols="6" sm="3">
                  <div class="text-h6 warning--text">{{ getPendingCount() }}</div>
                  <div class="caption grey--text">ຍັງຊຳລະໄດ້</div>
                  <v-progress-circular :value="getPendingPercentage()" color="warning" size="36" width="3" class="mt-1">
                    <small>{{ getPendingPercentage().toFixed(0) }}%</small>
                  </v-progress-circular>
                </v-col>

                <v-col cols="12" sm="3" class="pt-4">
                  <div class="text-subtitle-2 error--text font-weight-bold">{{ getFormatNum(getOverdueAmount()) }}</div>
                  <div class="caption grey--text">ຍອດເກີນກຳນົດ ({{ localCurrency?.code || 'LAK' }})</div>
                </v-col>
                
                <v-col cols="12" sm="3" class="pt-4">
                  <div class="text-subtitle-2 warning--text font-weight-bold">{{ getFormatNum(getPendingAmount()) }}</div>
                  <div class="caption grey--text">ຍອດຍັງຊຳລະໄດ້ ({{ localCurrency?.code || 'LAK' }})</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Enhanced Data Table -->
      <v-data-table v-if="creditOrder" :headers="headers" :search="search" :items="creditOrder" class="elevation-1">
        <template v-slot:[`item.bookingDate`]="{ item }">
          <div>
            {{ safeSplitDate(item.bookingDate) }}
            <div>
              <v-chip small
                :color="countDay(safeSplitDate(item.bookingDate)) > item.client.credit ? 'error' : 'success'" dark>
                <v-icon left small>mdi-calendar-clock</v-icon>
                {{ countDay(safeSplitDate(item.bookingDate)) }} ມື້
              </v-chip>
            </div>
          </div>
        </template>

        <template v-slot:[`item.client.credit`]="{ item }">
          <v-chip
            :color="isOverdue(item) ? 'error' : 'success'"
            class="ma-2" text-color="white">
            <v-icon left small>
              {{ isOverdue(item) ? 'mdi-alert-circle' : 'mdi-check-circle' }}
            </v-icon>
            {{ getDueDateFormatted(item) }}
          </v-chip>
        </template>

        <!-- NEW: Enhanced Client Information -->
        <template v-slot:[`item.client.name`]="{ item }">
          <div>
            <div class="font-weight-medium">{{ item.client.name }}</div>
            <div class=" text--secondary">ID: {{ item.client.id }}</div>
            <div class=" text--secondary">{{ item.client.company }}</div>
          </div>
        </template>

        <!-- NEW: Enhanced Payment Method Display -->
        <template v-slot:[`item.payment.payment_code`]="{ item }">
          <div v-if="isMultiPayment(item)">
            <v-chip color="teal darken-1" small dark class="font-weight-medium">
              <v-icon left small>mdi-credit-card-multiple</v-icon>
              ຫຼາຍວິທີ ({{ getPaymentMethodsCount(item) }})
            </v-chip>
          </div>
          <div v-else>
            <v-chip :color="getPaymentMethodColor(getPaymentCode(item))" small dark>
              <v-icon left small>{{ getPaymentMethodIcon(getPaymentCode(item)) }}</v-icon>
              {{ getPaymentName(item) }}
            </v-chip>
          </div>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          <div class="text-right">
            <span v-if="item.discount > 0" class="error--text">
              -{{ numberWithCommas(item.discount) }}
            </span>
            <span v-else class="text--secondary">-</span>
          </div>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <div class="text-right">
            <strong :class="getAmountColor(item)">
              {{ numberWithCommas(item.total) }}
            </strong>
          </div>
        </template>

        <template v-slot:[`item.createdAt`]="{ item }">
          <v-chip color="info" small dark>
            <v-icon left small>mdi-clock</v-icon>
            {{ formatDateTime(item.createdAt) }}
          </v-chip>
        </template>

        <!-- AR Posting Status Slot -->
        <template v-slot:[`item.isPostedToAR`]="{ item }">
          <div v-if="item.isPostedToAR || item.arInvoiceId">
            <v-chip
              v-if="isArSettled(item)"
              small
              color="success lighten-5"
              class="success--text font-weight-bold"
              style="cursor: pointer;"
              @click="openArInvoiceView(item)"
            >
              <v-icon left small color="success">mdi-check-decagram</v-icon>
              {{ item.arInvoice ? item.arInvoice.invoiceNumber : (item.arInvoiceId ? `AR #${item.arInvoiceId}` : 'AR') }} (ຊຳລະແລ້ວ)
            </v-chip>
            <v-chip
              v-else
              small
              color="primary lighten-5"
              class="primary--text font-weight-bold"
              style="cursor: pointer;"
              @click="openArInvoiceView(item)"
            >
              <v-icon left small color="primary">mdi-file-document-check</v-icon>
              {{ item.arInvoice ? item.arInvoice.invoiceNumber : (item.arInvoiceId ? `AR #${item.arInvoiceId}` : 'Posted') }}
            </v-chip>
          </div>
          <div v-else>
            <v-chip small color="grey lighten-3" class="grey--text text--darken-2">
              <v-icon left small color="grey">mdi-clock-outline</v-icon>
              ຍັງບໍ່ Post
            </v-chip>
          </div>
        </template>

        <!-- Action Buttons -->
        <template v-slot:[`item.id`]="{ item }">
          <div class="d-flex align-center">
            <!-- Unposted: Post to AR Button -->
            <v-btn
              v-if="!item.isPostedToAR && !item.arInvoiceId"
              color="primary"
              depressed
              small
              dark
              class="mr-1 font-weight-bold"
              style="border-radius: 8px;"
              @click="openPostToArDialog(item)"
            >
              <v-icon left small>mdi-file-export</v-icon>
              Post to AR
            </v-btn>

            <!-- Posted & AR completely settled: Prompt Change Payment -->
            <v-btn
              v-else-if="isArSettled(item)"
              color="success"
              depressed
              small
              dark
              class="mr-1 font-weight-bold"
              style="border-radius: 8px;"
              @click="openPromptChangePayment(item)"
            >
              <v-icon left small>mdi-cash-check</v-icon>
              ປ່ຽນການຊຳລະ
            </v-btn>

            <!-- Posted & Pending settlement: Quick Settle AR & View Invoice -->
            <template v-else>
              <v-btn
                color="orange darken-2"
                depressed
                small
                dark
                class="mr-1 font-weight-bold"
                style="border-radius: 8px;"
                @click="openSettleArDialog(item)"
              >
                <v-icon left small>mdi-cash-register</v-icon>
                ຊຳລະ AR
              </v-btn>
              <v-btn
                color="primary"
                outlined
                small
                class="mr-1 font-weight-bold"
                style="border-radius: 8px;"
                @click="openArInvoiceView(item)"
              >
                <v-icon left small>mdi-receipt-text</v-icon>
                ໃບແຈ້ງໜີ້
              </v-btn>
            </template>

            <!-- View/Edit Button -->
            <v-btn color="primary" text small @click="viewItem(item)" class="mr-1">
              <v-icon small>mdi-pencil</v-icon>
              <span class="d-none d-md-inline ml-1">ແກ້ໄຂ</span>
            </v-btn>

            <!-- NEW: Ticket Details Button -->
            <v-btn color="info" text small @click="showTicketDetails(item)" class="mr-1">
              <v-icon small>mdi-receipt</v-icon>
              <span class="d-none d-md-inline ml-1">ລາຍລະອຽດ</span>
            </v-btn>

            <!-- Print Button -->
            <v-btn color="success" text small @click="printTicket(item)">
              <v-icon small>mdi-printer</v-icon>
              <span class="d-none d-md-inline ml-1">ພິມ</span>
            </v-btn>
          </div>
        </template>

        <template v-slot:[`item.client.telephone`]="{ item }">
          <div>
            <div>{{ item.client.telephone }}</div>
            <v-btn color="success" text small @click="whatsappLink(item)" class="pa-0">
              <v-icon left small>mdi-whatsapp</v-icon>
              <a :href="whatsappContactLink" target="_blank" class="text-decoration-none">
                WhatsApp
              </a>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getLocalDate, ticketHtml } from '~/common'
import { mainCompanyInfo } from '~/common/api'
import { generateInvoiceHTML, generateReceiptSummaryReportHTML } from '~/common/printTemplates'
import { defaultTicketReprint } from '~/common/ticket.js'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
import TicketDetailsDialog from '~/components/pos/dialogs/TicketDetailsDialog.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    OrderDetailPos,
    OrderSumaryCardPos,
    OrderDetailPosCRUD,
    TicketDetailsDialog  // NEW: Add the TicketDetailsDialog component
  },
  middleware: 'auths',

  data() {
    return {
      terminalId: 999,
      viewTransaction: false,
      guidelineDialog: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      valid: true,
      name: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',

      // Post to AR state
      postToArDialog: false,
      postingToAr: false,
      selectedOrderForAr: null,
      arDueDate: '',
      arInvoiceDate: '',
      arDescription: '',

      // Settle AR state
      settleArDialog: false,
      settleLoading: false,
      submittingSettle: false,
      selectedOrderForSettle: null,
      selectedArInvoiceFull: null,
      settlePaymentId: 1,
      settleAmount: 0,
      settleDate: '',
      settleNotes: '',
      settleTotalAmount: 0,
      settleAlreadyPaid: 0,
      settleOutstandingAmount: 0,
      settleInvoiceNumber: '',
      currentInvoiceLines: [],

      // Prompt change sale payment state
      promptChangePaymentDialog: false,
      changingSalePayment: false,
      orderToChangePayment: null,
      targetPaymentId: 1,

      // NEW: Ticket Details Dialog
      ticketDetailsDialog: false,
      selectedTicketForDetails: null,

      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'ID ລູກຄ້າ',
          align: 'center',
          value: 'client.id',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'client.telephone',
          sortable: true,
        },
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
        {
          text: 'Due date',
          align: 'center',
          value: 'client.credit',
          sortable: true,
        },
        {
          text: 'ສະກຸນເງິນ',
          align: 'center',
          value: 'currency.code',
          sortable: true,
        },
        {
          text: 'ອັດຕາແລກປ່ຽນ',
          align: 'center',
          value: 'exchangeRate',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'end',
          value: 'total',
          sortable: false,
        },
        {
          text: 'ຜູ້ລົງທຸລະກຳ',
          align: 'end',
          value: 'user.cus_name',
          sortable: false,
        },
        {
          text: 'ເວລາລົງ',
          align: 'end',
          value: 'createdAt',
          sortable: false,
        },
        {
          text: 'ສະຖານະ AR',
          align: 'center',
          value: 'isPostedToAR',
          sortable: true,
          width: '160px',
        },
        {
          text: 'ການດຳເນີນການ',
          align: 'center',
          value: 'id',
          sortable: false,
          width: '320px',
        },
      ],

      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },

  async created() {
    await this.loadData()
  },

  mounted() {
    this.terminalId = this.findSelectedTerminal
  },

  watch: {
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },

  computed: {
    ...mapGetters([
      'findAllPayment',
      'findLocalCurrency',
      'findAllCurrency',
      'findAllprinters',
      'findAllProduct',
      'findSPF',
      'findAllCompany',
      'findSelectedTerminal',
      'findAllTerminal'
    ]),

    availablePaymentMethods() {
      return (this.findAllPayment || []).filter(
        (p) => p.id !== 2 && (p.payment_code || '').toUpperCase() !== 'CREDIT'
      )
    },

    customTerminalList() {
      let originalTerminalListVanilla = JSON.stringify(this.findAllTerminal)
      let originalTerminalList = JSON.parse(originalTerminalListVanilla)
      const extraTerminal = {
        id: 999,
        code: 1999,
        name: 'ທັງໝົດ',
        description: '',
        locationId: 1,
      }
      originalTerminalList.push(extraTerminal)
      return originalTerminalList
    },

    localCurrency() {
      return this.findLocalCurrency
    },

    companyLogo() {
      const company = mainCompanyInfo()
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${company.apiData.profile_image_path}`
      }
      return '/static/images/default-logo.png'
    },

    ticketCommon() {
      return ticketHtml()
    },

    totalSale() {
      let total = 0
      this.creditOrder.forEach((el) => {
        total += el.total
      })
      return total
    },

    totalDiscount() {
      let total = 0
      this.creditOrder.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
    },

    creditOrder() {
      const terminal = this.findAllTerminal.find(
        (el) => el['id'] == this.terminalId
      )
      if (!terminal) {
        return this.orderHeaderList.filter(
          (el) => el['paymentId'] == 2 && el['isActive'] == true
        )
      }
      return this.orderHeaderList.filter(
        (el) =>
          el['paymentId'] == 2 &&
          el['isActive'] == true &&
          el['locationId'] == terminal['locationId']
      )
    },

    getSPF() {
      return this.findSPF || []
    },

    paperSize() {
      const item = this.getSPF.find((spf) => spf.code == 'PAPER_SIZE')
      return item?.value || '80mm'
    },

    companyData() {
      const baseCompany = mainCompanyInfo()
      const baseUrl = this.$axios.defaults.baseURL || ''
      const storeCompany = this.findAllCompany?.[0] || {}

      const resolvedProfileImagePath =
        baseCompany?.profile_image_path ||
        baseCompany?.apiData?.profile_image_path ||
        storeCompany?.profile_image_path ||
        null

      const resolvedBankQrImagePath =
        baseCompany?.bank_qr_image_path ||
        baseCompany?.apiData?.bank_qr_image_path ||
        storeCompany?.bank_qr_image_path ||
        null

      const resolvedBankQrImagePath2 =
        baseCompany?.bank_qr_image_path_2 ||
        baseCompany?.apiData?.bank_qr_image_path_2 ||
        storeCompany?.bank_qr_image_path_2 ||
        null

      const ticketLogo = resolvedProfileImagePath 
        ? `${baseUrl}/${resolvedProfileImagePath.replace(/^\//, '')}` 
        : 'default-logo.png'

      const qrCode = resolvedBankQrImagePath 
        ? `${baseUrl}/${resolvedBankQrImagePath.replace(/^\//, '')}` 
        : null

      const qrCode2 = resolvedBankQrImagePath2 
        ? `${baseUrl}/${resolvedBankQrImagePath2.replace(/^\//, '')}` 
        : null

      return {
        name: baseCompany?.name || 'DCOMMERCE MART',
        address:
          this.formatCompanyAddress(baseCompany) ||
          baseCompany?.address ||
          '123 Main Street',
        tel: baseCompany?.tel || '',
        email: baseCompany?.email || '',
        bank: baseCompany?.bank || '',
        accountName: baseCompany?.accountName || '',
        accounts: baseCompany?.accounts || '',
        taxId: baseCompany?.taxId || '',
        remark: baseCompany?.remark || '',
        term_condition: baseCompany?.term_condition || '',
        showLogoOnTicket: baseCompany?.showLogoOnTicket || '',
        ticketQRcode: baseCompany?.ticketQRcode || false,
        ticketLayout: baseCompany?.ticketLayout || 'classic',
        ticket_logo_size: baseCompany?.ticket_logo_size ?? 65,
        ticketLogoSize: baseCompany?.ticket_logo_size ?? 65,
        profile_image_path: resolvedProfileImagePath,
        bank_qr_image_path: resolvedBankQrImagePath,
        bank_qr_image_path_2: resolvedBankQrImagePath2,
        ticketLogo,
        qrCode,
        qrCode2,
      }
    }
  },

  methods: {
    // NEW: Ticket Details Dialog Methods
    showTicketDetails(item) {
      this.selectedTicketForDetails = item
      this.ticketDetailsDialog = true
      console.info('SELECTED CREDIT TICKET:', JSON.stringify(item))
    },

    onTicketDialogClose() {
      this.ticketDetailsDialog = false
      this.selectedTicketForDetails = null
    },

    onPrintTicket(ticketData) {
      this.printTicket(ticketData)
    },

    onPrintPaymentDetails(ticketData) {
      console.log('Payment details printed for credit ticket:', ticketData.id)
    },

    // NEW: Credit Analytics Methods
    getOverdueCount() {
      return this.creditOrder.filter(item =>
        new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()
      ).length
    },

    getPendingCount() {
      return this.creditOrder.length - this.getOverdueCount()
    },

    getOverduePercentage() {
      const total = this.creditOrder.length
      return total > 0 ? (this.getOverdueCount() / total) * 100 : 0
    },

    getPendingPercentage() {
      const total = this.creditOrder.length
      return total > 0 ? (this.getPendingCount() / total) * 100 : 0
    },

    getOverdueAmount() {
      return this.creditOrder
        .filter(item =>
          new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()
        )
        .reduce((sum, item) => sum + item.total, 0)
    },

    getPendingAmount() {
      return this.creditOrder
        .filter(item =>
          new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) >= new Date()
        )
        .reduce((sum, item) => sum + item.total, 0)
    },

    getAmountColor(item) {
      const isOverdue = new Date(this.dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()
      return isOverdue ? 'error--text' : 'warning--text'
    },

    // Payment Resolution & Helper Methods
    isMultiPayment(item) {
      return item && item.payments && Array.isArray(item.payments) && item.payments.length > 1
    },

    getPaymentMethodsCount(item) {
      if (!item) return 0
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        return item.payments.length
      }
      return (item.payment || item.paymentId) ? 1 : 0
    },

    getPaymentCode(item) {
      if (!item) return 'N/A'
      if (this.isMultiPayment(item)) {
        return 'MULTI'
      }
      // Priority 1: Check salePayment table first
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        const p0 = item.payments[0]
        const paymentId = p0.paymentId || p0.paymentMethodId || p0.payment_id || p0.paymentMethod?.id
        const pMethod = p0.paymentMethod || (paymentId && this.findAllPayment?.find((p) => p.id === paymentId))
        if (pMethod?.payment_code) return pMethod.payment_code
        if (p0.payment_code) return p0.payment_code
      }
      // Priority 2: Fallback to saleHeader
      if (item.payment?.payment_code) return item.payment.payment_code
      if (item.paymentId && this.findAllPayment) {
        const found = this.findAllPayment.find((p) => p.id === item.paymentId)
        if (found?.payment_code) return found.payment_code
      }
      if (typeof item.payment === 'string') return item.payment
      return 'N/A'
    },

    getPaymentName(item) {
      if (!item) return 'N/A'
      // Priority 1: Check salePayment table first
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        if (item.payments.length > 1) {
          const names = item.payments
            .map((p) => {
              const paymentId = p.paymentId || p.paymentMethodId || p.payment_id || p.paymentMethod?.id
              const pMethod = p.paymentMethod || (paymentId && this.findAllPayment?.find((pay) => pay.id === paymentId))
              return pMethod?.payment_name || p.payment_name || pMethod?.payment_code || p.payment_code
            })
            .filter(Boolean)
          return names.length > 0 ? names.join(' + ') : 'ຫຼາຍວິທີ'
        } else {
          const p0 = item.payments[0]
          const paymentId = p0.paymentId || p0.paymentMethodId || p0.payment_id || p0.paymentMethod?.id
          const pMethod = p0.paymentMethod || (paymentId && this.findAllPayment?.find((p) => p.id === paymentId))
          if (pMethod?.payment_name) return pMethod.payment_name
          if (p0.payment_name) return p0.payment_name
          if (pMethod?.payment_code) return pMethod.payment_code
          if (p0.payment_code) return p0.payment_code
        }
      }
      // Priority 2: Fallback to saleHeader
      if (item.payment?.payment_name) return item.payment.payment_name
      if (item.payment?.payment_code) return item.payment.payment_code
      if (item.paymentId && this.findAllPayment) {
        const found = this.findAllPayment.find((p) => p.id === item.paymentId)
        if (found?.payment_name) return found.payment_name
        if (found?.payment_code) return found.payment_code
      }
      if (typeof item.payment === 'string') return item.payment
      return 'N/A'
    },

    // NEW: Enhanced Payment Method Methods
    getPaymentMethodColor(paymentCode) {
      if (!paymentCode) return 'grey'
      const colorMap = {
        'CASH': 'green',
        'QR': 'purple',
        'TRANSFER': 'blue',
        'TRANSFER_BCEL': 'blue',
        'BCEL': 'blue',
        'COD': 'orange',
        'CREDIT': 'red',
        'CARD': 'indigo',
        'MULTI': 'teal darken-1',
      }

      if (colorMap[paymentCode]) {
        return colorMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH')) return 'green'
      if (code.includes('QR')) return 'purple'
      if (code.includes('TRANSFER') || code.includes('BANK')) return 'blue'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
      if (code.includes('COD')) return 'orange'

      return 'primary'
    },

    getPaymentMethodIcon(paymentCode) {
      if (!paymentCode) return 'mdi-help-circle'
      const iconMap = {
        'CASH': 'mdi-cash',
        'QR': 'mdi-qrcode',
        'TRANSFER': 'mdi-bank-transfer',
        'TRANSFER_BCEL': 'mdi-bank-transfer',
        'BCEL': 'mdi-bank',
        'COD': 'mdi-truck-delivery',
        'CREDIT': 'mdi-credit-card-outline',
        'CARD': 'mdi-credit-card',
        'MULTI': 'mdi-credit-card-multiple',
      }

      if (iconMap[paymentCode]) {
        return iconMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH')) return 'mdi-cash'
      if (code.includes('QR')) return 'mdi-qrcode'
      if (code.includes('TRANSFER') || code.includes('BANK')) return 'mdi-bank-transfer'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
      if (code.includes('COD')) return 'mdi-truck-delivery'

      return 'mdi-cash-multiple'
    },

    // Enhanced Formatting Methods
    formatDateTime(dateString) {
      if (!dateString) return 'N/A'
      try {
        const d = new Date(dateString)
        if (isNaN(d.getTime())) return dateString
        
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const hours = String(d.getHours()).padStart(2, '0')
        const minutes = String(d.getMinutes()).padStart(2, '0')
        const seconds = String(d.getSeconds()).padStart(2, '0')
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      } catch (e) {
        return dateString
      }
    },

    safeSplitDate(dateString) {
      if (!dateString) return ''
      if (typeof dateString !== 'string') {
        if (dateString instanceof Date) {
          return dateString.toISOString().split('T')[0]
        }
        return dateString
      }
      return dateString.split('T')[0]
    },

    isOverdue(item) {
      if (!item || !item.client) return false
      try {
        const due = this.dueDate(item.bookingDate, item.client.credit)
        const dueStr = this.safeSplitDate(due instanceof Date ? due.toISOString() : String(due))
        return new Date(dueStr) < new Date()
      } catch (e) {
        return false
      }
    },

    getDueDateFormatted(item) {
      if (!item || !item.client) return ''
      try {
        const due = this.dueDate(item.bookingDate, item.client.credit)
        return this.safeSplitDate(due instanceof Date ? due.toISOString() : String(due))
      } catch (e) {
        return ''
      }
    },

    async printTicket(item) {
      console.log('Printing credit ticket:', item.id)
      const PRINTFORMAT = (this.getSPF || []).find(
        (spf) => spf.code === 'TICKET_FORM'
      )
      if (PRINTFORMAT && PRINTFORMAT.value === 'FORMAL') {
        this.isloading = true
        try {
          const response = await this.$axios.get(`api/sale/find/${item.id}`)
          const invoiceData = {
            ...item,
            ...response.data,
            referenceNo: (response.data?.referenceNo && response.data.referenceNo.trim()) 
              ? response.data.referenceNo 
              : (item?.referenceNo || ''),
            location: response.data?.location || item?.location || null,
            payments: (response.data?.payments && response.data.payments.length > 0) 
              ? response.data.payments 
              : (item?.payments || [])
          }
          const companyData = this.companyData
          const htmlContent = generateInvoiceHTML(
            invoiceData,
            companyData,
            this.findAllCurrency
          )
          this.openPrintWindow(htmlContent)
        } catch (error) {
          console.error('Error printing A4 invoice:', error)
          swalError2(this.$swal, 'Error', 'Failed to print A4 invoice')
        } finally {
          this.isloading = false
        }
        return
      }

      // Fallback POS Thermal printer reprint
      console.info('PRINTING CREDIT TICKET FOR POS PRINTER:', JSON.stringify(item))
      let paymentCode = 'UNKNOWN'
      if (this.isMultiPayment(item)) {
        paymentCode = 'MULTI-PAYMENT'
      } else if (item.payment) {
        paymentCode = item.payment.payment_code
      }

      const transformedLines = (item.lines || []).map((line) => ({
        id: line.product?.id || line.productId,
        pro_name: line.product?.pro_name || 'Unknown Product',
        qty: line.quantity,
        localPrice: line.price,
        pro_price: line.price,
        isGift: line.isGift || false,
        saleCurrencyId: line.currencyId,
        total: line.total,
        discount: line.discount || 0,
        exchangeRate: line.exchangeRate || 1,
        priceListId: line.priceListId || null,
        priceLists: line.priceLists || [],
        taxRate: line.taxRate || 0,
        taxAmount: line.taxAmount || 0,
        taxType: line.taxType || 'INC',
        tax: line.tax || (line.taxRate ? { rate: line.taxRate, taxType: line.taxType || 'INC' } : null),
      }))

      defaultTicketReprint({
        printers: this.findAllprinters || [],
        productCart: { lines: transformedLines },
        findAllProduct: this.findAllProduct || [],
        formatNumber: this.getFormatNum,
        discount: item.discount,
        currencyList: this.findAllCurrency || [],
        grandTotal: item.total,
        lastTransactionSaleHeaderId: item.id,
        currentTerminal: {
          baseURL: this.$axios.defaults.baseURL,
        },
        user: this.$store.state.auth?.user || {},
        ticketCommon: this.ticketCommon,
        currentPaymentCode: paymentCode,
        cashReceived: item.total,
        changes: 0,
        bookingDate: item.createdAt,
        axios: this.$axios,
        companyData: this.companyData,
        paperWidth: this.paperSize || '80mm',
        client: item.client,
      })
    },

    async printSummaryA4() {
      try {
        console.log('🖨️ Printing credit detailed summary report...')
        this.isloading = true

        // Eagerly load currencies if not already loaded, to prevent print crashes or incorrect currency conversion
        if (!this.findAllCurrency || this.findAllCurrency.length === 0) {
          try {
            const response = await this.$axios.get('api/currency/findAll')
            let data = response.data?.data ?? response.data
            if (Array.isArray(data)) {
                data = data.filter(c => c.isActive === true || c.isActive === 1)
            }
            await this.$store.dispatch('initCurrency', data)
          } catch (error) {
            console.error('Failed to load currencies in credit summary print:', error)
          }
        }

        const terminalInfo =
          this.terminalId === 999
            ? { name: 'ທັງໝົດ', id: 999 }
            : this.customTerminalList.find(
              (terminal) => terminal.id === this.terminalId
            )

        const companyData = this.companyData
        const filters = {
          fromDate: this.dateFormatted,
          toDate: this.dateFormatted2,
          terminalName: terminalInfo?.name || 'ທັງໝົດ',
          userName: this.$store.state.auth?.user?.cus_name || '-'
        }

        const htmlContent = generateReceiptSummaryReportHTML(
          this.creditOrder,
          companyData,
          this.findAllCurrency,
          filters
        )

        this.openPrintWindow(htmlContent)
      } catch (error) {
        console.error('Error printing detailed summary report:', error)
        swalError2(this.$swal, 'Error', 'ເກີດຂໍ້ຜິດພາດໃນການພິມລາຍງານ')
      } finally {
        this.isloading = false
      }
    },

    openPrintWindow(htmlContent) {
      try {
        const printWindow = window.open('', '_blank', 'width=800,height=600')
        if (!printWindow) {
          swalError2(
            this.$swal,
            'Error',
            'Unable to open print window. Please check popup blocker settings.'
          )
          return
        }

        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print()
              setTimeout(() => {
                printWindow.close()
              }, 100)
            } catch (e) {
              console.error('Print trigger error:', e)
            }
          }, 500)
        }
      } catch (e) {
        console.error('Print window error:', e)
      }
    },

    isMultiPayment(item) {
      return (
        item.payments &&
        Array.isArray(item.payments) &&
        item.payments.length > 1
      )
    },

    hasPaymentDetails(item) {
      return (item.payments && item.payments.length > 0) || item.payment
    },

    formatCompanyAddress(company) {
      if (!company) return ''
      let formattedAddress = ''
      if (company.address) formattedAddress += company.address
      if (company.village) formattedAddress += `<br>${company.village}`
      if (company.district) formattedAddress += `, ${company.district}`
      if (company.province) formattedAddress += `, ${company.province}`

      return formattedAddress || company.address || ''
    },

    // Existing Methods
    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(this.creditOrder)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Credit Report')
      this.$xlsx.writeFile(workbook, 'credit-report.xlsx')
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    dueDate(startDate, day) {
      console.log("DATE ", startDate, " to ", day)
      return getNextDate(startDate, day)
    },
numberWithCommas(value) {
  return (Math.round(Number(value) || 0)).toLocaleString('en-US')
},
    // numberWithCommas(value) {
    //   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // },

    whatsappLink(item) {
      const tel = item.client.telephone.trim()
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`
    },

    // getFormatNum(val) {
    //   return new Intl.NumberFormat().format(val)
    // },
getFormatNum(val) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(Number(val) || 0)
},
    editItem(item) {
      this.componentKey += 1
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail
    },

    viewItem(item) {
      this.componentKey += 1
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true
    },

    cancelItem(payload) {
      console.log("Order id", payload.orderId)
      this.componentCancelFormKey += 1
      this.OrderIdSelected = payload.orderId
      this.cancelForm = true
    },

    handleEvent() {
      this.dialogOrderDetail = false
    },

    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
        userId: this.userId
      }
      let apiLine = 'api/sale/findByDate'
      if (date.userId) {
        apiLine = 'api/sale/findByDateAndUser'
      }
      await this.$axios
        .get(apiLine, { params: { date } })
        .then((res) => {
          this.orderHeaderList = []
          for (const iterator of res.data) {
            this.orderHeaderList.push(iterator)
          }
          console.log("====> " + this.orderHeaderList.length)
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could not load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },

    openPostToArDialog(item) {
      this.selectedOrderForAr = item
      this.arInvoiceDate = this.safeSplitDate(item.bookingDate) || new Date().toISOString().slice(0, 10)
      
      // Calculate due date based on client.credit days (defaults to 30)
      const creditDays = item.client?.credit && parseInt(item.client.credit, 10) > 0 
        ? parseInt(item.client.credit, 10) 
        : 30
      const d = new Date(this.arInvoiceDate)
      d.setDate(d.getDate() + creditDays)
      this.arDueDate = d.toISOString().slice(0, 10)

      this.arDescription = `Created from POS Credit Order #${item.id}${item.referenceNo ? ` (${item.referenceNo})` : ''}`
      this.postToArDialog = true
    },

    closePostToArDialog() {
      if (!this.postingToAr) {
        this.postToArDialog = false
        this.selectedOrderForAr = null
      }
    },

    async confirmPostToAr() {
      if (!this.selectedOrderForAr) return
      this.postingToAr = true
      try {
        const payload = {
          invoiceDate: this.arInvoiceDate,
          dueDate: this.arDueDate,
          description: this.arDescription,
          status: 'sent'
        }
        const { data } = await this.$axios.post(
          `/api/ar-invoices/from-order/${this.selectedOrderForAr.id}`,
          payload
        )
        if (data && data.success) {
          swalSuccess(
            this.$swal,
            'ສຳເລັດ',
            data.message || `ສ້າງໃບແຈ້ງໜີ້ AR ເລກທີ ${data.data?.invoice?.invoiceNumber} ສຳເລັດແລ້ວ!`
          )
          this.postToArDialog = false
          this.selectedOrderForAr = null
          await this.loadData()
        } else {
          swalError2(this.$swal, 'Error', data?.message || 'ບໍ່ສາມາດ Post ເຂົ້າ AR ໄດ້')
        }
      } catch (err) {
        console.error('Post to AR error:', err)
        const errMsg = err.response?.data?.message || err.message || 'ເກີດຂໍ້ຜິດພາດ'
        swalError2(this.$swal, 'Error', errMsg)
      } finally {
        this.postingToAr = false
      }
    },

    openArInvoiceView(item) {
      const query = item.arInvoice?.invoiceNumber || item.arInvoiceId || item.id
      this.$router.push({
        path: '/admin/accounting/ar/invoice',
        query: { search: String(query) }
      })
    },

    isArSettled(item) {
      if (!item) return false
      if (item.arInvoice?.status === 'paid') return true
      if (item.arInvoice?.receiveHeaders && Array.isArray(item.arInvoice.receiveHeaders)) {
        const activeReceipts = item.arInvoice.receiveHeaders.filter(
          r => r.status === 'active' || (!r.status && r.status !== 'cancelled' && r.status !== 'voided')
        )
        const totalPaid = activeReceipts.reduce((sum, r) => sum + parseFloat(r.totalReceivedAmount || 0), 0)
        const invTotal = parseFloat(item.arInvoice.totalAmount || item.total || 0)
        if (totalPaid >= invTotal && invTotal > 0) return true
      }
      return false
    },

    closeSettleArDialog() {
      if (!this.submittingSettle) {
        this.settleArDialog = false
        this.selectedOrderForSettle = null
      }
    },

    async openSettleArDialog(item) {
      this.selectedOrderForSettle = item
      this.settleLoading = true
      this.settleArDialog = true

      this.settlePaymentId = this.availablePaymentMethods[0]?.id || 1
      this.settleDate = new Date().toISOString().slice(0, 10)
      this.settleNotes = `Settlement for POS Credit Order #${item.id}${item.referenceNo ? ` (${item.referenceNo})` : ''}`
      this.settleTotalAmount = parseFloat(item.total || 0)
      this.settleOutstandingAmount = parseFloat(item.total || 0)
      this.settleAlreadyPaid = 0
      this.settleInvoiceNumber = item.arInvoice?.invoiceNumber || (item.arInvoiceId ? `AR-INV-${item.arInvoiceId}` : `Order #${item.id}`)
      this.currentInvoiceLines = []

      try {
        const invoiceId = item.arInvoiceId || item.arInvoice?.id
        if (invoiceId) {
          const { data } = await this.$axios.get(`/api/ar-invoices/${invoiceId}`)
          const inv = data?.data || data
          if (inv) {
            this.selectedArInvoiceFull = inv
            this.settleInvoiceNumber = inv.invoiceNumber || this.settleInvoiceNumber
            this.settleTotalAmount = parseFloat(inv.totalAmount || item.total || 0)
            this.currentInvoiceLines = inv.invoiceLines || []

            const activeReceipts = (inv.receiveHeaders || []).filter(
              r => r.status === 'active' || (!r.status && r.status !== 'cancelled' && r.status !== 'voided')
            )
            const totalPaid = activeReceipts.reduce((sum, r) => sum + parseFloat(r.totalReceivedAmount || 0), 0)
            this.settleAlreadyPaid = totalPaid
            this.settleOutstandingAmount = Math.max(0, this.settleTotalAmount - totalPaid)
            this.settleAmount = this.settleOutstandingAmount

            if (this.settleOutstandingAmount <= 0 || inv.status === 'paid') {
              this.settleArDialog = false
              this.openPromptChangePayment(item)
              return
            }
          }
        } else {
          this.settleAmount = this.settleOutstandingAmount
        }
      } catch (err) {
        console.warn('Could not fetch AR invoice details, using order total:', err)
        this.settleAmount = this.settleOutstandingAmount
      } finally {
        this.settleLoading = false
      }
    },

    async confirmSettleAr() {
      if (!this.selectedOrderForSettle) return
      if (!this.settleAmount || parseFloat(this.settleAmount) <= 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາປ້ອນຈຳນວນເງິນທີ່ຖືກຕ້ອງ')
        return
      }

      this.submittingSettle = true
      try {
        const invoiceId = this.selectedOrderForSettle.arInvoiceId || this.selectedOrderForSettle.arInvoice?.id
        let receiptNumber = `AR-RCP-${new Date().getFullYear()}-${Date.now().toString().slice(-5)}`
        try {
          const seqRes = await this.$axios.get('/api/ar-receive-headers/sequence')
          if (seqRes.data?.data?.receiptNumber) {
            receiptNumber = seqRes.data.data.receiptNumber
          } else if (typeof seqRes.data?.data === 'string') {
            receiptNumber = seqRes.data.data
          }
        } catch (e) {
          console.warn('Using fallback receipt sequence:', receiptNumber)
        }

        const pm = this.findAllPayment?.find(p => p.id === this.settlePaymentId)
        const pmCode = (pm?.payment_code || '').toUpperCase()
        let paymentMethodStr = 'cash'
        if (pmCode.includes('BCEL') || pmCode.includes('TRANSFER') || pmCode.includes('BANK') || pmCode.includes('QR')) {
          paymentMethodStr = 'bank_transfer'
        } else if (pmCode.includes('CARD') || pmCode.includes('CREDIT')) {
          paymentMethodStr = 'credit_card'
        } else if (pmCode.includes('CHECK')) {
          paymentMethodStr = 'check'
        }

        const settleAmt = parseFloat(this.settleAmount)
        let allocationLines = []
        if (this.currentInvoiceLines && this.currentInvoiceLines.length > 0) {
          let remaining = settleAmt
          allocationLines = this.currentInvoiceLines.map((line, idx) => {
            const lineTotal = parseFloat(line.lineTotal || line.unitPrice || 0)
            const alloc = (idx === this.currentInvoiceLines.length - 1)
              ? remaining
              : Math.min(lineTotal, remaining)
            remaining = Math.max(0, remaining - alloc)
            return {
              lineNumber: idx + 1,
              invoiceLineId: line.id,
              txnId: 1,
              DRglAccountId: line.DRglAccountId || null,
              CRglAccountId: line.CRglAccountId || null,
              allocatedAmount: alloc,
              allocationDate: this.settleDate,
              description: line.description || `Item #${line.id}`
            }
          }).filter(al => al.allocatedAmount > 0)
        }

        if (allocationLines.length === 0) {
          allocationLines = [{
            lineNumber: 1,
            invoiceLineId: null,
            isManual: true,
            allocatedAmount: settleAmt,
            allocationDate: this.settleDate,
            description: `Settlement for POS Credit Order #${this.selectedOrderForSettle.id}`
          }]
        }

        const payload = {
          receiptNumber,
          bookingDate: this.settleDate,
          receivedDate: this.settleDate,
          invoiceHeaderId: invoiceId || null,
          totalReceivedAmount: settleAmt,
          paymentId: this.settlePaymentId,
          paymentMethod: paymentMethodStr,
          exchangeRate: 1,
          currencyId: this.selectedOrderForSettle.currencyId || 1,
          notes: this.settleNotes,
          allocationLines
        }

        const { data } = await this.$axios.post('/api/ar-receive-headers', payload)

        if (data && data.success) {
          this.settleArDialog = false
          const isCompletelySettled = (this.settleAlreadyPaid + settleAmt) >= this.settleTotalAmount || settleAmt >= this.settleOutstandingAmount

          if (isCompletelySettled) {
            this.openPromptChangePayment(this.selectedOrderForSettle, this.settlePaymentId)
          } else {
            swalSuccess(
              this.$swal,
              'ສຳເລັດ',
              `ບັນທຶກການຮັບຊຳລະ AR ເລກທີ ${receiptNumber} ຈຳນວນ ${this.numberWithCommas(settleAmt)} ສຳເລັດແລ້ວ (ຍອດຍັງເຫຼືອ: ${this.numberWithCommas(Math.max(0, this.settleOutstandingAmount - settleAmt))})`
            )
            await this.loadData()
          }
        } else {
          swalError2(this.$swal, 'Error', data?.message || 'ບໍ່ສາມາດບັນທຶກການຊຳລະ AR ໄດ້')
        }
      } catch (err) {
        console.error('Settle AR error:', err)
        const msg = err.response?.data?.message || err.message || 'ເກີດຂໍ້ຜິດພາດໃນການຮັບຊຳລະ'
        swalError2(this.$swal, 'Error', msg)
      } finally {
        this.submittingSettle = false
      }
    },

    openPromptChangePayment(item, suggestedPaymentId = null) {
      this.orderToChangePayment = item
      this.targetPaymentId = suggestedPaymentId || (this.availablePaymentMethods[0]?.id || 1)
      this.promptChangePaymentDialog = true
    },

    cancelChangeSalePayment() {
      this.promptChangePaymentDialog = false
      this.orderToChangePayment = null
      this.loadData()
    },

    async confirmChangeSalePayment() {
      if (!this.orderToChangePayment || !this.targetPaymentId) return
      this.changingSalePayment = true
      try {
        const selectedMethod = this.findAllPayment?.find(p => p.id === this.targetPaymentId)
        const paymentName = selectedMethod?.payment_name || selectedMethod?.payment_code || `Payment #${this.targetPaymentId}`

        await this.$axios.put(`/api/sale/update/${this.orderToChangePayment.id}`, {
          paymentId: this.targetPaymentId
        })

        swalSuccess(
          this.$swal,
          'ສຳເລັດ',
          `ປ່ຽນວິທີການຊຳລະຂອງບິນຂາຍ #${this.orderToChangePayment.id} ເປັນ "${paymentName}" ສຳເລັດແລ້ວ! ບິນນີ້ໄດ້ຖືກຍ້າຍອອກຈາກລາຍການຕິດໜີ້.`
        )
        this.promptChangePaymentDialog = false
        this.orderToChangePayment = null
        await this.loadData()
      } catch (err) {
        console.error('Update sale payment error:', err)
        const msg = err.response?.data?.message || err.message || 'ເກີດຂໍ້ຜິດພາດໃນການປ່ຽນວິທີການຊຳລະ'
        swalError2(this.$swal, 'Error', msg)
      } finally {
        this.changingSalePayment = false
      }
    },

    formatDate(date) {
      if (!date) return null
      // If it's already a Date object, format it directly
      if (date instanceof Date) {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${month}/${day}/${year}`
      }
      // If it's not a string, return as is (or handle as needed)
      if (typeof date !== 'string') return date

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      if (typeof date !== 'string') return date
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

/* Credit status styling */
.v-chip.error {
  animation: urgentPulse 2s infinite;
}

@keyframes urgentPulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4);
  }

  50% {
    box-shadow: 0 0 0 8px rgba(244, 67, 54, 0);
  }
}

/* Enhanced action buttons */
.d-flex .v-btn {
  min-width: auto !important;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .d-none.d-md-inline {
    display: none !important;
  }
}

.caption {
  font-size: 12px !important;
  font-family: NotoSansLaoUI-Regular, Roboto-Regular !important;
}
</style>