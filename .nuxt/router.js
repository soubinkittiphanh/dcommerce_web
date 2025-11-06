import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _91dcc936 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _bea1864e = () => interopDefault(import('..\\pages\\e-menu\\index.vue' /* webpackChunkName: "pages/e-menu/index" */))
const _248c1a48 = () => interopDefault(import('..\\pages\\fashion\\index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _9406b77e = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _2fc05327 = () => interopDefault(import('..\\pages\\index.bk.vue' /* webpackChunkName: "pages/index.bk" */))
const _16628ca9 = () => interopDefault(import('..\\pages\\lion72\\index.vue' /* webpackChunkName: "pages/lion72/index" */))
const _c12b2976 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _81f226dc = () => interopDefault(import('..\\pages\\product-details.vue' /* webpackChunkName: "pages/product-details" */))
const _b2cf4212 = () => interopDefault(import('..\\pages\\public\\index.vue' /* webpackChunkName: "pages/public/index" */))
const _18bdbc88 = () => interopDefault(import('..\\pages\\admin\\advertise\\index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _27d95ad6 = () => interopDefault(import('..\\pages\\admin\\ap\\index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _7ab3d514 = () => interopDefault(import('..\\pages\\admin\\applicants\\index.vue' /* webpackChunkName: "pages/admin/applicants/index" */))
const _373ca594 = () => interopDefault(import('..\\pages\\admin\\ar\\index.vue' /* webpackChunkName: "pages/admin/ar/index" */))
const _59df93ec = () => interopDefault(import('..\\pages\\admin\\authority\\index.vue' /* webpackChunkName: "pages/admin/authority/index" */))
const _0e84d82e = () => interopDefault(import('..\\pages\\admin\\bank\\index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _5e269e44 = () => interopDefault(import('..\\pages\\admin\\bankAccount\\index.vue' /* webpackChunkName: "pages/admin/bankAccount/index" */))
const _66e0a878 = () => interopDefault(import('..\\pages\\admin\\barcodePrint\\index.vue' /* webpackChunkName: "pages/admin/barcodePrint/index" */))
const _4ef34ad7 = () => interopDefault(import('..\\pages\\admin\\batch_job\\index.vue' /* webpackChunkName: "pages/admin/batch_job/index" */))
const _57466150 = () => interopDefault(import('..\\pages\\admin\\benefit\\index.vue' /* webpackChunkName: "pages/admin/benefit/index" */))
const _3c4e2354 = () => interopDefault(import('..\\pages\\admin\\booking\\index.vue' /* webpackChunkName: "pages/admin/booking/index" */))
const _68dd8e3e = () => interopDefault(import('..\\pages\\admin\\cafeTable\\index.vue' /* webpackChunkName: "pages/admin/cafeTable/index" */))
const _1fbb11d6 = () => interopDefault(import('..\\pages\\admin\\campaign\\index.vue' /* webpackChunkName: "pages/admin/campaign/index" */))
const _2bf0dfbc = () => interopDefault(import('..\\pages\\admin\\cancel_order\\index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _526cdad6 = () => interopDefault(import('..\\pages\\admin\\card\\index.vue' /* webpackChunkName: "pages/admin/card/index" */))
const _6e1d9a67 = () => interopDefault(import('..\\pages\\admin\\category\\index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _367ae654 = () => interopDefault(import('..\\pages\\admin\\chartAccount\\index.vue' /* webpackChunkName: "pages/admin/chartAccount/index" */))
const _3e4ca43a = () => interopDefault(import('..\\pages\\admin\\client\\index.vue' /* webpackChunkName: "pages/admin/client/index" */))
const _c19fa230 = () => interopDefault(import('..\\pages\\admin\\cod_order\\index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _201f7bb2 = () => interopDefault(import('..\\pages\\admin\\company\\index.vue' /* webpackChunkName: "pages/admin/company/index" */))
const _0d55cd74 = () => interopDefault(import('..\\pages\\admin\\currency\\index.vue' /* webpackChunkName: "pages/admin/currency/index" */))
const _69024b87 = () => interopDefault(import('..\\pages\\admin\\customer\\index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _199c5992 = () => interopDefault(import('..\\pages\\admin\\customer_request\\index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _9ced7904 = () => interopDefault(import('..\\pages\\admin\\generalLedger\\index.vue' /* webpackChunkName: "pages/admin/generalLedger/index" */))
const _88d03ca0 = () => interopDefault(import('..\\pages\\admin\\group\\index.vue' /* webpackChunkName: "pages/admin/group/index" */))
const _0cec847e = () => interopDefault(import('..\\pages\\admin\\inventory_value\\index.vue' /* webpackChunkName: "pages/admin/inventory_value/index" */))
const _60dc457b = () => interopDefault(import('..\\pages\\admin\\jobAdvertise\\index.vue' /* webpackChunkName: "pages/admin/jobAdvertise/index" */))
const _a766a160 = () => interopDefault(import('..\\pages\\admin\\location\\index.vue' /* webpackChunkName: "pages/admin/location/index" */))
const _6d2ddaf4 = () => interopDefault(import('..\\pages\\admin\\login\\index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _5d83451b = () => interopDefault(import('..\\pages\\admin\\logout\\index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _ec6ff3ea = () => interopDefault(import('..\\pages\\admin\\member\\index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _1626f1ce = () => interopDefault(import('..\\pages\\admin\\menuHeader\\index.vue' /* webpackChunkName: "pages/admin/menuHeader/index" */))
const _b628ab5c = () => interopDefault(import('..\\pages\\admin\\menuLine\\index.vue' /* webpackChunkName: "pages/admin/menuLine/index" */))
const _4582a8f4 = () => interopDefault(import('..\\pages\\admin\\ministry\\index.vue' /* webpackChunkName: "pages/admin/ministry/index" */))
const _381363a1 = () => interopDefault(import('..\\pages\\admin\\minstock\\index.vue' /* webpackChunkName: "pages/admin/minstock/index" */))
const _bcc3a87a = () => interopDefault(import('..\\pages\\admin\\moneyAdvance\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvance/index" */))
const _4dff9860 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceByBank\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceByBank/index" */))
const _76b22986 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceDashboard\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceDashboard/index" */))
const _816958cc = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceSettlement\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceSettlement/index" */))
const _7d604332 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceSettlementByBank\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceSettlementByBank/index" */))
const _663f3eb2 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceTarget\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceTarget/index" */))
const _40bfa0e0 = () => interopDefault(import('..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _3c6a5513 = () => interopDefault(import('..\\pages\\admin\\ordersAll\\index.vue' /* webpackChunkName: "pages/admin/ordersAll/index" */))
const _1f54425d = () => interopDefault(import('..\\pages\\admin\\ordersFromAll\\index.vue' /* webpackChunkName: "pages/admin/ordersFromAll/index" */))
const _5cb7abca = () => interopDefault(import('..\\pages\\admin\\ordersFromPos\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPos/index" */))
const _9a6ab620 = () => interopDefault(import('..\\pages\\admin\\ordersFromPosCancel\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCancel/index" */))
const _5e3ab311 = () => interopDefault(import('..\\pages\\admin\\ordersFromPosCredit\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCredit/index" */))
const _99362912 = () => interopDefault(import('..\\pages\\admin\\ordersFromPosOnline\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosOnline/index" */))
const _38af6ee5 = () => interopDefault(import('..\\pages\\admin\\ordersFromPosOnlineCOD\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosOnlineCOD/index" */))
const _58f47daf = () => interopDefault(import('..\\pages\\admin\\ordersFromPosSummaryByCustomer\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosSummaryByCustomer/index" */))
const _1d1a360a = () => interopDefault(import('..\\pages\\admin\\ordersIn\\index.vue' /* webpackChunkName: "pages/admin/ordersIn/index" */))
const _e639512a = () => interopDefault(import('..\\pages\\admin\\ordersOld231101\\index.vue' /* webpackChunkName: "pages/admin/ordersOld231101/index" */))
const _36b3c146 = () => interopDefault(import('..\\pages\\admin\\ordersOut\\index.vue' /* webpackChunkName: "pages/admin/ordersOut/index" */))
const _6025a34a = () => interopDefault(import('..\\pages\\admin\\orderTracking\\index.vue' /* webpackChunkName: "pages/admin/orderTracking/index" */))
const _cefe32ee = () => interopDefault(import('..\\pages\\admin\\payment\\index.vue' /* webpackChunkName: "pages/admin/payment/index" */))
const _02c026e9 = () => interopDefault(import('..\\pages\\admin\\pl\\index.vue' /* webpackChunkName: "pages/admin/pl/index" */))
const _19d51706 = () => interopDefault(import('..\\pages\\admin\\po\\index.vue' /* webpackChunkName: "pages/admin/po/index" */))
const _4ccae000 = () => interopDefault(import('..\\pages\\admin\\product\\index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _04352250 = () => interopDefault(import('..\\pages\\admin\\productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _25a56e03 = () => interopDefault(import('..\\pages\\admin\\quotation\\index.vue' /* webpackChunkName: "pages/admin/quotation/index" */))
const _6b705205 = () => interopDefault(import('..\\pages\\admin\\quotationList\\index.vue' /* webpackChunkName: "pages/admin/quotationList/index" */))
const _448477a2 = () => interopDefault(import('..\\pages\\admin\\receiving\\index.vue' /* webpackChunkName: "pages/admin/receiving/index" */))
const _620d119e = () => interopDefault(import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _49dafbb4 = () => interopDefault(import('..\\pages\\admin\\report_card\\index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _37103afa = () => interopDefault(import('..\\pages\\admin\\reservation\\index.vue' /* webpackChunkName: "pages/admin/reservation/index" */))
const _925e3256 = () => interopDefault(import('..\\pages\\admin\\rider\\index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _2eb6be1e = () => interopDefault(import('..\\pages\\admin\\saleCost\\index.vue' /* webpackChunkName: "pages/admin/saleCost/index" */))
const _4a80d882 = () => interopDefault(import('..\\pages\\admin\\saleDashBoard\\index.vue' /* webpackChunkName: "pages/admin/saleDashBoard/index" */))
const _c46279ce = () => interopDefault(import('..\\pages\\admin\\saleReportDetail\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetail/index" */))
const _dfeef878 = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByCustomer\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByCustomer/index" */))
const _56aa6bb5 = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByHeader\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByHeader/index" */))
const _5efddc23 = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByProduct\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByProduct/index" */))
const _38c66492 = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByUser\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByUser/index" */))
const _cfdffb62 = () => interopDefault(import('..\\pages\\admin\\saleTicketReportDetailByProduct\\index.vue' /* webpackChunkName: "pages/admin/saleTicketReportDetailByProduct/index" */))
const _7bb32bb7 = () => interopDefault(import('..\\pages\\admin\\shipping\\index.vue' /* webpackChunkName: "pages/admin/shipping/index" */))
const _72354186 = () => interopDefault(import('..\\pages\\admin\\spf\\index.vue' /* webpackChunkName: "pages/admin/spf/index" */))
const _36396b78 = () => interopDefault(import('..\\pages\\admin\\tax\\index.vue' /* webpackChunkName: "pages/admin/tax/index" */))
const _2b110a29 = () => interopDefault(import('..\\pages\\admin\\terminal\\index.vue' /* webpackChunkName: "pages/admin/terminal/index" */))
const _7b5c6b4e = () => interopDefault(import('..\\pages\\admin\\ticket\\index.vue' /* webpackChunkName: "pages/admin/ticket/index" */))
const _3c076092 = () => interopDefault(import('..\\pages\\admin\\transaction_code\\index.vue' /* webpackChunkName: "pages/admin/transaction_code/index" */))
const _089d795a = () => interopDefault(import('..\\pages\\admin\\transfer\\index.vue' /* webpackChunkName: "pages/admin/transfer/index" */))
const _cfef1ff2 = () => interopDefault(import('..\\pages\\admin\\tutorial\\index.vue' /* webpackChunkName: "pages/admin/tutorial/index" */))
const _05b86a25 = () => interopDefault(import('..\\pages\\admin\\txn\\index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _7e0a4ed6 = () => interopDefault(import('..\\pages\\admin\\txn_type\\index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _8e0d38be = () => interopDefault(import('..\\pages\\admin\\unit\\index.vue' /* webpackChunkName: "pages/admin/unit/index" */))
const _58deeefa = () => interopDefault(import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _6313dac6 = () => interopDefault(import('..\\pages\\admin\\vendor\\index.vue' /* webpackChunkName: "pages/admin/vendor/index" */))
const _237c2487 = () => interopDefault(import('..\\pages\\admin\\walletin\\index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _45d2733a = () => interopDefault(import('..\\pages\\admin\\walletout\\index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _71162908 = () => interopDefault(import('..\\pages\\admin\\web_category\\index.vue' /* webpackChunkName: "pages/admin/web_category/index" */))
const _578b6f6a = () => interopDefault(import('..\\pages\\admin\\web_product\\index.vue' /* webpackChunkName: "pages/admin/web_product/index" */))
const _2ee2e2c4 = () => interopDefault(import('..\\pages\\fashion\\about-us.vue' /* webpackChunkName: "pages/fashion/about-us" */))
const _dc5a7666 = () => interopDefault(import('..\\pages\\fashion\\all-product.vue' /* webpackChunkName: "pages/fashion/all-product" */))
const _04864b51 = () => interopDefault(import('..\\pages\\fashion\\contact-us.vue' /* webpackChunkName: "pages/fashion/contact-us" */))
const _4d815b7e = () => interopDefault(import('..\\pages\\fashion\\index_20240429.vue' /* webpackChunkName: "pages/fashion/index_20240429" */))
const _34c2c9e9 = () => interopDefault(import('..\\pages\\fashion\\index copy.vue' /* webpackChunkName: "pages/fashion/index copy" */))
const _4a8eadfc = () => interopDefault(import('..\\pages\\fashion\\product-category.vue' /* webpackChunkName: "pages/fashion/product-category" */))
const _14f96456 = () => interopDefault(import('..\\pages\\fashion\\product-detail.vue' /* webpackChunkName: "pages/fashion/product-detail" */))
const _bf6190c6 = () => interopDefault(import('..\\pages\\lion72\\ticket\\index.vue' /* webpackChunkName: "pages/lion72/ticket/index" */))
const _0386716b = () => interopDefault(import('..\\pages\\pos\\lottery\\index.vue' /* webpackChunkName: "pages/pos/lottery/index" */))
const _7cd4f4f3 = () => interopDefault(import('..\\pages\\pos\\minimart\\index.vue' /* webpackChunkName: "pages/pos/minimart/index" */))
const _4fa459e3 = () => interopDefault(import('..\\pages\\pos\\restaurant\\index.vue' /* webpackChunkName: "pages/pos/restaurant/index" */))
const _baf3a498 = () => interopDefault(import('..\\pages\\pos\\ticket\\index.vue' /* webpackChunkName: "pages/pos/ticket/index" */))
const _537c76b1 = () => interopDefault(import('..\\pages\\admin\\ap\\invoice\\index.vue' /* webpackChunkName: "pages/admin/ap/invoice/index" */))
const _881965f0 = () => interopDefault(import('..\\pages\\admin\\ap\\invoiceSettlement\\index.vue' /* webpackChunkName: "pages/admin/ap/invoiceSettlement/index" */))
const _d11c8c90 = () => interopDefault(import('..\\pages\\admin\\applicants\\index-1.vue' /* webpackChunkName: "pages/admin/applicants/index-1" */))
const _c239c3f4 = () => interopDefault(import('..\\pages\\admin\\barcodePrint\\gianttTime.vue' /* webpackChunkName: "pages/admin/barcodePrint/gianttTime" */))
const _003f1429 = () => interopDefault(import('..\\pages\\admin\\cafe\\promotion\\index.vue' /* webpackChunkName: "pages/admin/cafe/promotion/index" */))
const _738d2722 = () => interopDefault(import('..\\pages\\admin\\cafeTable\\customer.vue' /* webpackChunkName: "pages/admin/cafeTable/customer" */))
const _4fab5a15 = () => interopDefault(import('..\\pages\\admin\\customer_request\\topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _2395a8b5 = () => interopDefault(import('..\\pages\\admin\\customer_request\\withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _7fd6c25a = () => interopDefault(import('..\\pages\\admin\\job_fair\\agency\\index.vue' /* webpackChunkName: "pages/admin/job_fair/agency/index" */))
const _05e87a06 = () => interopDefault(import('..\\pages\\admin\\job_fair\\broker\\index.vue' /* webpackChunkName: "pages/admin/job_fair/broker/index" */))
const _54e412d1 = () => interopDefault(import('..\\pages\\admin\\job_fair\\employee\\index.vue' /* webpackChunkName: "pages/admin/job_fair/employee/index" */))
const _128608ac = () => interopDefault(import('..\\pages\\admin\\job_fair\\login\\index.vue' /* webpackChunkName: "pages/admin/job_fair/login/index" */))
const _900f0cfc = () => interopDefault(import('..\\pages\\admin\\job_fair\\mou\\index.vue' /* webpackChunkName: "pages/admin/job_fair/mou/index" */))
const _4877b0aa = () => interopDefault(import('..\\pages\\admin\\pos\\table\\index.vue' /* webpackChunkName: "pages/admin/pos/table/index" */))
const _1737b73b = () => interopDefault(import('..\\pages\\admin\\product\\productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _4b2f26e2 = () => interopDefault(import('..\\pages\\admin\\settings\\system.vue' /* webpackChunkName: "pages/admin/settings/system" */))
const _0c4ca241 = () => interopDefault(import('..\\pages\\admin\\settings\\userRole.vue' /* webpackChunkName: "pages/admin/settings/userRole" */))
const _16262ad8 = () => interopDefault(import('..\\pages\\admin\\web_category\\test.vue' /* webpackChunkName: "pages/admin/web_category/test" */))
const _2b39b148 = () => interopDefault(import('..\\pages\\admin\\accounting\\ar\\invoice\\index.vue' /* webpackChunkName: "pages/admin/accounting/ar/invoice/index" */))
const _9c94985c = () => interopDefault(import('..\\pages\\admin\\accounting\\ar\\receive\\index.vue' /* webpackChunkName: "pages/admin/accounting/ar/receive/index" */))
const _8da97350 = () => interopDefault(import('..\\pages\\admin\\advertise\\mixins\\ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _6e13add0 = () => interopDefault(import('..\\pages\\admin\\product\\mixins\\ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _11eb5be6 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\bankSummary\\index.vue' /* webpackChunkName: "pages/admin/report/MA/bankSummary/index" */))
const _54c1f7fb = () => interopDefault(import('..\\pages\\admin\\report\\MA\\master\\index.vue' /* webpackChunkName: "pages/admin/report/MA/master/index" */))
const _65867bd0 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\ministrySummary\\index.vue' /* webpackChunkName: "pages/admin/report/MA/ministrySummary/index" */))
const _56d8025e = () => interopDefault(import('..\\pages\\admin\\report\\MA\\payment\\index.vue' /* webpackChunkName: "pages/admin/report/MA/payment/index" */))
const _220dd554 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/index" */))
const _02ca0c74 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\targetAmount\\index.vue' /* webpackChunkName: "pages/admin/report/MA/targetAmount/index" */))
const _f7115aca = () => interopDefault(import('..\\pages\\admin\\web_product\\mixins\\ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/web_product/mixins/ImagePreviewMixin" */))
const _1a87bfd8 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\mixin\\excel.js' /* webpackChunkName: "pages/admin/report/MA/mixin/excel" */))
const _5f64534f = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\bankAccount\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/bankAccount/index" */))
const _253f3885 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\chartAccount\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/chartAccount/index" */))
const _aaeaf296 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\ministry\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/ministry/index" */))
const _2a5be300 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _431fe4d0 = () => interopDefault(import('..\\pages\\admin\\PDFInvoice\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFInvoice/_id/index" */))
const _273cf396 = () => interopDefault(import('..\\pages\\admin\\PDFInvoiceSummary\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFInvoiceSummary/_id/index" */))
const _516ecf22 = () => interopDefault(import('..\\pages\\admin\\PDFQuotation\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFQuotation/_id/index" */))
const _2ffc95e9 = () => interopDefault(import('..\\pages\\admin\\PDFTicket\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFTicket/_id/index" */))
const _3b6f44f0 = () => interopDefault(import('..\\pages\\admin\\PDFTransfer\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFTransfer/_id/index" */))
const _5d5085cc = () => interopDefault(import('..\\pages\\admin\\product\\_id\\index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _0b35ec01 = () => interopDefault(import('..\\pages\\admin\\stock\\_id\\index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _1dc67baf = () => interopDefault(import('..\\pages\\admin\\web_product\\_id\\index.vue' /* webpackChunkName: "pages/admin/web_product/_id/index" */))
const _7ff724f5 = () => interopDefault(import('..\\pages\\product\\_id\\index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _c4639672 = () => interopDefault(import('..\\pages\\product\\_id\\product-details.vue' /* webpackChunkName: "pages/product/_id/product-details" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _91dcc936,
    name: "admin"
  }, {
    path: "/e-menu",
    component: _bea1864e,
    name: "e-menu"
  }, {
    path: "/fashion",
    component: _248c1a48,
    name: "fashion"
  }, {
    path: "/home",
    component: _9406b77e,
    name: "home"
  }, {
    path: "/index.bk",
    component: _2fc05327,
    name: "index.bk"
  }, {
    path: "/lion72",
    component: _16628ca9,
    name: "lion72"
  }, {
    path: "/product",
    component: _c12b2976,
    name: "product"
  }, {
    path: "/product-details",
    component: _81f226dc,
    name: "product-details"
  }, {
    path: "/public",
    component: _b2cf4212,
    name: "public"
  }, {
    path: "/admin/advertise",
    component: _18bdbc88,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _27d95ad6,
    name: "admin-ap"
  }, {
    path: "/admin/applicants",
    component: _7ab3d514,
    name: "admin-applicants"
  }, {
    path: "/admin/ar",
    component: _373ca594,
    name: "admin-ar"
  }, {
    path: "/admin/authority",
    component: _59df93ec,
    name: "admin-authority"
  }, {
    path: "/admin/bank",
    component: _0e84d82e,
    name: "admin-bank"
  }, {
    path: "/admin/bankAccount",
    component: _5e269e44,
    name: "admin-bankAccount"
  }, {
    path: "/admin/barcodePrint",
    component: _66e0a878,
    name: "admin-barcodePrint"
  }, {
    path: "/admin/batch_job",
    component: _4ef34ad7,
    name: "admin-batch_job"
  }, {
    path: "/admin/benefit",
    component: _57466150,
    name: "admin-benefit"
  }, {
    path: "/admin/booking",
    component: _3c4e2354,
    name: "admin-booking"
  }, {
    path: "/admin/cafeTable",
    component: _68dd8e3e,
    name: "admin-cafeTable"
  }, {
    path: "/admin/campaign",
    component: _1fbb11d6,
    name: "admin-campaign"
  }, {
    path: "/admin/cancel_order",
    component: _2bf0dfbc,
    name: "admin-cancel_order"
  }, {
    path: "/admin/card",
    component: _526cdad6,
    name: "admin-card"
  }, {
    path: "/admin/category",
    component: _6e1d9a67,
    name: "admin-category"
  }, {
    path: "/admin/chartAccount",
    component: _367ae654,
    name: "admin-chartAccount"
  }, {
    path: "/admin/client",
    component: _3e4ca43a,
    name: "admin-client"
  }, {
    path: "/admin/cod_order",
    component: _c19fa230,
    name: "admin-cod_order"
  }, {
    path: "/admin/company",
    component: _201f7bb2,
    name: "admin-company"
  }, {
    path: "/admin/currency",
    component: _0d55cd74,
    name: "admin-currency"
  }, {
    path: "/admin/customer",
    component: _69024b87,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _199c5992,
    name: "admin-customer_request"
  }, {
    path: "/admin/generalLedger",
    component: _9ced7904,
    name: "admin-generalLedger"
  }, {
    path: "/admin/group",
    component: _88d03ca0,
    name: "admin-group"
  }, {
    path: "/admin/inventory_value",
    component: _0cec847e,
    name: "admin-inventory_value"
  }, {
    path: "/admin/jobAdvertise",
    component: _60dc457b,
    name: "admin-jobAdvertise"
  }, {
    path: "/admin/location",
    component: _a766a160,
    name: "admin-location"
  }, {
    path: "/admin/login",
    component: _6d2ddaf4,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _5d83451b,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _ec6ff3ea,
    name: "admin-member"
  }, {
    path: "/admin/menuHeader",
    component: _1626f1ce,
    name: "admin-menuHeader"
  }, {
    path: "/admin/menuLine",
    component: _b628ab5c,
    name: "admin-menuLine"
  }, {
    path: "/admin/ministry",
    component: _4582a8f4,
    name: "admin-ministry"
  }, {
    path: "/admin/minstock",
    component: _381363a1,
    name: "admin-minstock"
  }, {
    path: "/admin/moneyAdvance",
    component: _bcc3a87a,
    name: "admin-moneyAdvance"
  }, {
    path: "/admin/moneyAdvanceByBank",
    component: _4dff9860,
    name: "admin-moneyAdvanceByBank"
  }, {
    path: "/admin/moneyAdvanceDashboard",
    component: _76b22986,
    name: "admin-moneyAdvanceDashboard"
  }, {
    path: "/admin/moneyAdvanceSettlement",
    component: _816958cc,
    name: "admin-moneyAdvanceSettlement"
  }, {
    path: "/admin/moneyAdvanceSettlementByBank",
    component: _7d604332,
    name: "admin-moneyAdvanceSettlementByBank"
  }, {
    path: "/admin/moneyAdvanceTarget",
    component: _663f3eb2,
    name: "admin-moneyAdvanceTarget"
  }, {
    path: "/admin/orders",
    component: _40bfa0e0,
    name: "admin-orders"
  }, {
    path: "/admin/ordersAll",
    component: _3c6a5513,
    name: "admin-ordersAll"
  }, {
    path: "/admin/ordersFromAll",
    component: _1f54425d,
    name: "admin-ordersFromAll"
  }, {
    path: "/admin/ordersFromPos",
    component: _5cb7abca,
    name: "admin-ordersFromPos"
  }, {
    path: "/admin/ordersFromPosCancel",
    component: _9a6ab620,
    name: "admin-ordersFromPosCancel"
  }, {
    path: "/admin/ordersFromPosCredit",
    component: _5e3ab311,
    name: "admin-ordersFromPosCredit"
  }, {
    path: "/admin/ordersFromPosOnline",
    component: _99362912,
    name: "admin-ordersFromPosOnline"
  }, {
    path: "/admin/ordersFromPosOnlineCOD",
    component: _38af6ee5,
    name: "admin-ordersFromPosOnlineCOD"
  }, {
    path: "/admin/ordersFromPosSummaryByCustomer",
    component: _58f47daf,
    name: "admin-ordersFromPosSummaryByCustomer"
  }, {
    path: "/admin/ordersIn",
    component: _1d1a360a,
    name: "admin-ordersIn"
  }, {
    path: "/admin/ordersOld231101",
    component: _e639512a,
    name: "admin-ordersOld231101"
  }, {
    path: "/admin/ordersOut",
    component: _36b3c146,
    name: "admin-ordersOut"
  }, {
    path: "/admin/orderTracking",
    component: _6025a34a,
    name: "admin-orderTracking"
  }, {
    path: "/admin/payment",
    component: _cefe32ee,
    name: "admin-payment"
  }, {
    path: "/admin/pl",
    component: _02c026e9,
    name: "admin-pl"
  }, {
    path: "/admin/po",
    component: _19d51706,
    name: "admin-po"
  }, {
    path: "/admin/product",
    component: _4ccae000,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _04352250,
    name: "admin-productInuse"
  }, {
    path: "/admin/quotation",
    component: _25a56e03,
    name: "admin-quotation"
  }, {
    path: "/admin/quotationList",
    component: _6b705205,
    name: "admin-quotationList"
  }, {
    path: "/admin/receiving",
    component: _448477a2,
    name: "admin-receiving"
  }, {
    path: "/admin/report",
    component: _620d119e,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _49dafbb4,
    name: "admin-report_card"
  }, {
    path: "/admin/reservation",
    component: _37103afa,
    name: "admin-reservation"
  }, {
    path: "/admin/rider",
    component: _925e3256,
    name: "admin-rider"
  }, {
    path: "/admin/saleCost",
    component: _2eb6be1e,
    name: "admin-saleCost"
  }, {
    path: "/admin/saleDashBoard",
    component: _4a80d882,
    name: "admin-saleDashBoard"
  }, {
    path: "/admin/saleReportDetail",
    component: _c46279ce,
    name: "admin-saleReportDetail"
  }, {
    path: "/admin/saleReportDetailByCustomer",
    component: _dfeef878,
    name: "admin-saleReportDetailByCustomer"
  }, {
    path: "/admin/saleReportDetailByHeader",
    component: _56aa6bb5,
    name: "admin-saleReportDetailByHeader"
  }, {
    path: "/admin/saleReportDetailByProduct",
    component: _5efddc23,
    name: "admin-saleReportDetailByProduct"
  }, {
    path: "/admin/saleReportDetailByUser",
    component: _38c66492,
    name: "admin-saleReportDetailByUser"
  }, {
    path: "/admin/saleTicketReportDetailByProduct",
    component: _cfdffb62,
    name: "admin-saleTicketReportDetailByProduct"
  }, {
    path: "/admin/shipping",
    component: _7bb32bb7,
    name: "admin-shipping"
  }, {
    path: "/admin/spf",
    component: _72354186,
    name: "admin-spf"
  }, {
    path: "/admin/tax",
    component: _36396b78,
    name: "admin-tax"
  }, {
    path: "/admin/terminal",
    component: _2b110a29,
    name: "admin-terminal"
  }, {
    path: "/admin/ticket",
    component: _7b5c6b4e,
    name: "admin-ticket"
  }, {
    path: "/admin/transaction_code",
    component: _3c076092,
    name: "admin-transaction_code"
  }, {
    path: "/admin/transfer",
    component: _089d795a,
    name: "admin-transfer"
  }, {
    path: "/admin/tutorial",
    component: _cfef1ff2,
    name: "admin-tutorial"
  }, {
    path: "/admin/txn",
    component: _05b86a25,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _7e0a4ed6,
    name: "admin-txn_type"
  }, {
    path: "/admin/unit",
    component: _8e0d38be,
    name: "admin-unit"
  }, {
    path: "/admin/user",
    component: _58deeefa,
    name: "admin-user"
  }, {
    path: "/admin/vendor",
    component: _6313dac6,
    name: "admin-vendor"
  }, {
    path: "/admin/walletin",
    component: _237c2487,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _45d2733a,
    name: "admin-walletout"
  }, {
    path: "/admin/web_category",
    component: _71162908,
    name: "admin-web_category"
  }, {
    path: "/admin/web_product",
    component: _578b6f6a,
    name: "admin-web_product"
  }, {
    path: "/fashion/about-us",
    component: _2ee2e2c4,
    name: "fashion-about-us"
  }, {
    path: "/fashion/all-product",
    component: _dc5a7666,
    name: "fashion-all-product"
  }, {
    path: "/fashion/contact-us",
    component: _04864b51,
    name: "fashion-contact-us"
  }, {
    path: "/fashion/index_20240429",
    component: _4d815b7e,
    name: "fashion-index_20240429"
  }, {
    path: "/fashion/index%20copy",
    component: _34c2c9e9,
    name: "fashion-index copy"
  }, {
    path: "/fashion/product-category",
    component: _4a8eadfc,
    name: "fashion-product-category"
  }, {
    path: "/fashion/product-detail",
    component: _14f96456,
    name: "fashion-product-detail"
  }, {
    path: "/lion72/ticket",
    component: _bf6190c6,
    name: "lion72-ticket"
  }, {
    path: "/pos/lottery",
    component: _0386716b,
    name: "pos-lottery"
  }, {
    path: "/pos/minimart",
    component: _7cd4f4f3,
    name: "pos-minimart"
  }, {
    path: "/pos/restaurant",
    component: _4fa459e3,
    name: "pos-restaurant"
  }, {
    path: "/pos/ticket",
    component: _baf3a498,
    name: "pos-ticket"
  }, {
    path: "/admin/ap/invoice",
    component: _537c76b1,
    name: "admin-ap-invoice"
  }, {
    path: "/admin/ap/invoiceSettlement",
    component: _881965f0,
    name: "admin-ap-invoiceSettlement"
  }, {
    path: "/admin/applicants/index-1",
    component: _d11c8c90,
    name: "admin-applicants-index-1"
  }, {
    path: "/admin/barcodePrint/gianttTime",
    component: _c239c3f4,
    name: "admin-barcodePrint-gianttTime"
  }, {
    path: "/admin/cafe/promotion",
    component: _003f1429,
    name: "admin-cafe-promotion"
  }, {
    path: "/admin/cafeTable/customer",
    component: _738d2722,
    name: "admin-cafeTable-customer"
  }, {
    path: "/admin/customer_request/topup",
    component: _4fab5a15,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _2395a8b5,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/job_fair/agency",
    component: _7fd6c25a,
    name: "admin-job_fair-agency"
  }, {
    path: "/admin/job_fair/broker",
    component: _05e87a06,
    name: "admin-job_fair-broker"
  }, {
    path: "/admin/job_fair/employee",
    component: _54e412d1,
    name: "admin-job_fair-employee"
  }, {
    path: "/admin/job_fair/login",
    component: _128608ac,
    name: "admin-job_fair-login"
  }, {
    path: "/admin/job_fair/mou",
    component: _900f0cfc,
    name: "admin-job_fair-mou"
  }, {
    path: "/admin/pos/table",
    component: _4877b0aa,
    name: "admin-pos-table"
  }, {
    path: "/admin/product/productlist",
    component: _1737b73b,
    name: "admin-product-productlist"
  }, {
    path: "/admin/settings/system",
    component: _4b2f26e2,
    name: "admin-settings-system"
  }, {
    path: "/admin/settings/userRole",
    component: _0c4ca241,
    name: "admin-settings-userRole"
  }, {
    path: "/admin/web_category/test",
    component: _16262ad8,
    name: "admin-web_category-test"
  }, {
    path: "/admin/accounting/ar/invoice",
    component: _2b39b148,
    name: "admin-accounting-ar-invoice"
  }, {
    path: "/admin/accounting/ar/receive",
    component: _9c94985c,
    name: "admin-accounting-ar-receive"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _8da97350,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _6e13add0,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/report/MA/bankSummary",
    component: _11eb5be6,
    name: "admin-report-MA-bankSummary"
  }, {
    path: "/admin/report/MA/master",
    component: _54c1f7fb,
    name: "admin-report-MA-master"
  }, {
    path: "/admin/report/MA/ministrySummary",
    component: _65867bd0,
    name: "admin-report-MA-ministrySummary"
  }, {
    path: "/admin/report/MA/payment",
    component: _56d8025e,
    name: "admin-report-MA-payment"
  }, {
    path: "/admin/report/MA/settlement",
    component: _220dd554,
    name: "admin-report-MA-settlement"
  }, {
    path: "/admin/report/MA/targetAmount",
    component: _02ca0c74,
    name: "admin-report-MA-targetAmount"
  }, {
    path: "/admin/web_product/mixins/ImagePreviewMixin",
    component: _f7115aca,
    name: "admin-web_product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/report/MA/mixin/excel",
    component: _1a87bfd8,
    name: "admin-report-MA-mixin-excel"
  }, {
    path: "/admin/report/MA/settlement/bankAccount",
    component: _5f64534f,
    name: "admin-report-MA-settlement-bankAccount"
  }, {
    path: "/admin/report/MA/settlement/chartAccount",
    component: _253f3885,
    name: "admin-report-MA-settlement-chartAccount"
  }, {
    path: "/admin/report/MA/settlement/ministry",
    component: _aaeaf296,
    name: "admin-report-MA-settlement-ministry"
  }, {
    path: "/",
    component: _2a5be300,
    name: "index"
  }, {
    path: "/admin/PDFInvoice/:id",
    component: _431fe4d0,
    name: "admin-PDFInvoice-id"
  }, {
    path: "/admin/PDFInvoiceSummary/:id",
    component: _273cf396,
    name: "admin-PDFInvoiceSummary-id"
  }, {
    path: "/admin/PDFQuotation/:id",
    component: _516ecf22,
    name: "admin-PDFQuotation-id"
  }, {
    path: "/admin/PDFTicket/:id",
    component: _2ffc95e9,
    name: "admin-PDFTicket-id"
  }, {
    path: "/admin/PDFTransfer/:id",
    component: _3b6f44f0,
    name: "admin-PDFTransfer-id"
  }, {
    path: "/admin/product/:id",
    component: _5d5085cc,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _0b35ec01,
    name: "admin-stock-id"
  }, {
    path: "/admin/web_product/:id",
    component: _1dc67baf,
    name: "admin-web_product-id"
  }, {
    path: "/product/:id",
    component: _7ff724f5,
    name: "product-id"
  }, {
    path: "/product/:id/product-details",
    component: _c4639672,
    name: "product-id-product-details"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
