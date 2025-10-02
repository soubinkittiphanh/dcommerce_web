import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01ce5019 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7c1c4a90 = () => interopDefault(import('..\\pages\\fashion\\index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _133c890d = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _6ddb81db = () => interopDefault(import('..\\pages\\index.bk.vue' /* webpackChunkName: "pages/index.bk" */))
const _233c6e75 = () => interopDefault(import('..\\pages\\lion72\\index.vue' /* webpackChunkName: "pages/lion72/index" */))
const _2dccc2f9 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _0620e944 = () => interopDefault(import('..\\pages\\product-details.vue' /* webpackChunkName: "pages/product-details" */))
const _991b7e7a = () => interopDefault(import('..\\pages\\public\\index.vue' /* webpackChunkName: "pages/public/index" */))
const _51b0cf54 = () => interopDefault(import('..\\pages\\admin\\advertise\\index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _b1f6d4ec = () => interopDefault(import('..\\pages\\admin\\ap\\index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _60231bc8 = () => interopDefault(import('..\\pages\\admin\\applicants\\index.vue' /* webpackChunkName: "pages/admin/applicants/index" */))
const _93303f70 = () => interopDefault(import('..\\pages\\admin\\ar\\index.vue' /* webpackChunkName: "pages/admin/ar/index" */))
const _da5ab290 = () => interopDefault(import('..\\pages\\admin\\authority\\index.vue' /* webpackChunkName: "pages/admin/authority/index" */))
const _5a04f19d = () => interopDefault(import('..\\pages\\admin\\bank\\index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _cd337eac = () => interopDefault(import('..\\pages\\admin\\bankAccount\\index.vue' /* webpackChunkName: "pages/admin/bankAccount/index" */))
const _a4cddba8 = () => interopDefault(import('..\\pages\\admin\\barcodePrint\\index.vue' /* webpackChunkName: "pages/admin/barcodePrint/index" */))
const _f03344ba = () => interopDefault(import('..\\pages\\admin\\batch_job\\index.vue' /* webpackChunkName: "pages/admin/batch_job/index" */))
const _444e2524 = () => interopDefault(import('..\\pages\\admin\\benefit\\index.vue' /* webpackChunkName: "pages/admin/benefit/index" */))
const _51ca4422 = () => interopDefault(import('..\\pages\\admin\\booking\\index.vue' /* webpackChunkName: "pages/admin/booking/index" */))
const _bc5ebdec = () => interopDefault(import('..\\pages\\admin\\cafeTable\\index.vue' /* webpackChunkName: "pages/admin/cafeTable/index" */))
const _7e5bdac9 = () => interopDefault(import('..\\pages\\admin\\campaign\\index.vue' /* webpackChunkName: "pages/admin/campaign/index" */))
const _72a94970 = () => interopDefault(import('..\\pages\\admin\\cancel_order\\index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _3810f049 = () => interopDefault(import('..\\pages\\admin\\card\\index.vue' /* webpackChunkName: "pages/admin/card/index" */))
const _075203ca = () => interopDefault(import('..\\pages\\admin\\category\\index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _2b7af68a = () => interopDefault(import('..\\pages\\admin\\chartAccount\\index.vue' /* webpackChunkName: "pages/admin/chartAccount/index" */))
const _6b3364ee = () => interopDefault(import('..\\pages\\admin\\client\\index.vue' /* webpackChunkName: "pages/admin/client/index" */))
const _4fb97c98 = () => interopDefault(import('..\\pages\\admin\\cod_order\\index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _dfde5d04 = () => interopDefault(import('..\\pages\\admin\\company\\index.vue' /* webpackChunkName: "pages/admin/company/index" */))
const _c8e19db0 = () => interopDefault(import('..\\pages\\admin\\currency\\index.vue' /* webpackChunkName: "pages/admin/currency/index" */))
const _1188a18a = () => interopDefault(import('..\\pages\\admin\\customer\\index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _21137a2a = () => interopDefault(import('..\\pages\\admin\\customer_request\\index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _41de104a = () => interopDefault(import('..\\pages\\admin\\generalLedger\\index.vue' /* webpackChunkName: "pages/admin/generalLedger/index" */))
const _f9878b08 = () => interopDefault(import('..\\pages\\admin\\group\\index.vue' /* webpackChunkName: "pages/admin/group/index" */))
const _7042f0e6 = () => interopDefault(import('..\\pages\\admin\\inventory_value\\index.vue' /* webpackChunkName: "pages/admin/inventory_value/index" */))
const _b0d6a1a2 = () => interopDefault(import('..\\pages\\admin\\jobAdvertise\\index.vue' /* webpackChunkName: "pages/admin/jobAdvertise/index" */))
const _3a861304 = () => interopDefault(import('..\\pages\\admin\\location\\index.vue' /* webpackChunkName: "pages/admin/location/index" */))
const _dde5295c = () => interopDefault(import('..\\pages\\admin\\login\\index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _eb2bf462 = () => interopDefault(import('..\\pages\\admin\\logout\\index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _92a27282 = () => interopDefault(import('..\\pages\\admin\\member\\index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _4b486466 = () => interopDefault(import('..\\pages\\admin\\menuHeader\\index.vue' /* webpackChunkName: "pages/admin/menuHeader/index" */))
const _33250e06 = () => interopDefault(import('..\\pages\\admin\\menuLine\\index.vue' /* webpackChunkName: "pages/admin/menuLine/index" */))
const _6b780f3a = () => interopDefault(import('..\\pages\\admin\\ministry\\index.vue' /* webpackChunkName: "pages/admin/ministry/index" */))
const _73667156 = () => interopDefault(import('..\\pages\\admin\\minstock\\index.vue' /* webpackChunkName: "pages/admin/minstock/index" */))
const _2f52d512 = () => interopDefault(import('..\\pages\\admin\\moneyAdvance\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvance/index" */))
const _5430f2f8 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceByBank\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceByBank/index" */))
const _6ff82c09 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceDashboard\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceDashboard/index" */))
const _7e222c4e = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceSettlement\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceSettlement/index" */))
const _08f33fca = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceSettlementByBank\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceSettlementByBank/index" */))
const _63269166 = () => interopDefault(import('..\\pages\\admin\\moneyAdvanceTarget\\index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceTarget/index" */))
const _6da66194 = () => interopDefault(import('..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _755d67df = () => interopDefault(import('..\\pages\\admin\\ordersAll\\index.vue' /* webpackChunkName: "pages/admin/ordersAll/index" */))
const _a0ade1ae = () => interopDefault(import('..\\pages\\admin\\ordersFromAll\\index.vue' /* webpackChunkName: "pages/admin/ordersFromAll/index" */))
const _25e70ed4 = () => interopDefault(import('..\\pages\\admin\\ordersFromPos\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPos/index" */))
const _52cda8bc = () => interopDefault(import('..\\pages\\admin\\ordersFromPosCancel\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCancel/index" */))
const _03849246 = () => interopDefault(import('..\\pages\\admin\\ordersFromPosCredit\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCredit/index" */))
const _5367ef43 = () => interopDefault(import('..\\pages\\admin\\ordersFromPosOnline\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosOnline/index" */))
const _10f370ce = () => interopDefault(import('..\\pages\\admin\\ordersFromPosOnlineCOD\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosOnlineCOD/index" */))
const _40dd3b3a = () => interopDefault(import('..\\pages\\admin\\ordersFromPosSummaryByCustomer\\index.vue' /* webpackChunkName: "pages/admin/ordersFromPosSummaryByCustomer/index" */))
const _7fac48af = () => interopDefault(import('..\\pages\\admin\\ordersIn\\index.vue' /* webpackChunkName: "pages/admin/ordersIn/index" */))
const _5b382137 = () => interopDefault(import('..\\pages\\admin\\ordersOld231101\\index.vue' /* webpackChunkName: "pages/admin/ordersOld231101/index" */))
const _6fa6d412 = () => interopDefault(import('..\\pages\\admin\\ordersOut\\index.vue' /* webpackChunkName: "pages/admin/ordersOut/index" */))
const _1f0b1fd4 = () => interopDefault(import('..\\pages\\admin\\orderTracking\\index.vue' /* webpackChunkName: "pages/admin/orderTracking/index" */))
const _08723c55 = () => interopDefault(import('..\\pages\\admin\\payment\\index.vue' /* webpackChunkName: "pages/admin/payment/index" */))
const _fc293cc6 = () => interopDefault(import('..\\pages\\admin\\pl\\index.vue' /* webpackChunkName: "pages/admin/pl/index" */))
const _cdff5c8c = () => interopDefault(import('..\\pages\\admin\\po\\index.vue' /* webpackChunkName: "pages/admin/po/index" */))
const _498be5cc = () => interopDefault(import('..\\pages\\admin\\product\\index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _684d09c8 = () => interopDefault(import('..\\pages\\admin\\productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _5e9880cf = () => interopDefault(import('..\\pages\\admin\\quotation\\index.vue' /* webpackChunkName: "pages/admin/quotation/index" */))
const _0875c25e = () => interopDefault(import('..\\pages\\admin\\quotationList\\index.vue' /* webpackChunkName: "pages/admin/quotationList/index" */))
const _16b0d6fb = () => interopDefault(import('..\\pages\\admin\\receiving\\index.vue' /* webpackChunkName: "pages/admin/receiving/index" */))
const _083f9036 = () => interopDefault(import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _12548b80 = () => interopDefault(import('..\\pages\\admin\\report_card\\index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _a61d1b62 = () => interopDefault(import('..\\pages\\admin\\reservation\\index.vue' /* webpackChunkName: "pages/admin/reservation/index" */))
const _7e753fa1 = () => interopDefault(import('..\\pages\\admin\\rider\\index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _76de04a5 = () => interopDefault(import('..\\pages\\admin\\saleCost\\index.vue' /* webpackChunkName: "pages/admin/saleCost/index" */))
const _cbd99a66 = () => interopDefault(import('..\\pages\\admin\\saleReportDetail\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetail/index" */))
const _3cc83b10 = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByCustomer\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByCustomer/index" */))
const _89a4312e = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByHeader\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByHeader/index" */))
const _ea2c5222 = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByProduct\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByProduct/index" */))
const _bb18b32a = () => interopDefault(import('..\\pages\\admin\\saleReportDetailByUser\\index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByUser/index" */))
const _09ec8f6b = () => interopDefault(import('..\\pages\\admin\\shipping\\index.vue' /* webpackChunkName: "pages/admin/shipping/index" */))
const _4b1f6610 = () => interopDefault(import('..\\pages\\admin\\tax\\index.vue' /* webpackChunkName: "pages/admin/tax/index" */))
const _8d6b2446 = () => interopDefault(import('..\\pages\\admin\\terminal\\index.vue' /* webpackChunkName: "pages/admin/terminal/index" */))
const _218ee9e6 = () => interopDefault(import('..\\pages\\admin\\ticket\\index.vue' /* webpackChunkName: "pages/admin/ticket/index" */))
const _d25245e4 = () => interopDefault(import('..\\pages\\admin\\transfer\\index.vue' /* webpackChunkName: "pages/admin/transfer/index" */))
const _2641d3bb = () => interopDefault(import('..\\pages\\admin\\tutorial\\index.vue' /* webpackChunkName: "pages/admin/tutorial/index" */))
const _6bf485f1 = () => interopDefault(import('..\\pages\\admin\\txn\\index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _0c43b28a = () => interopDefault(import('..\\pages\\admin\\txn_type\\index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _1a40c155 = () => interopDefault(import('..\\pages\\admin\\unit\\index.vue' /* webpackChunkName: "pages/admin/unit/index" */))
const _8bb366a4 = () => interopDefault(import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _0946595e = () => interopDefault(import('..\\pages\\admin\\vendor\\index.vue' /* webpackChunkName: "pages/admin/vendor/index" */))
const _9c94ef8a = () => interopDefault(import('..\\pages\\admin\\walletin\\index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _7ec58606 = () => interopDefault(import('..\\pages\\admin\\walletout\\index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _0e2d5530 = () => interopDefault(import('..\\pages\\admin\\web_category\\index.vue' /* webpackChunkName: "pages/admin/web_category/index" */))
const _c6984fd2 = () => interopDefault(import('..\\pages\\admin\\web_product\\index.vue' /* webpackChunkName: "pages/admin/web_product/index" */))
const _d5c202e0 = () => interopDefault(import('..\\pages\\fashion\\about-us.vue' /* webpackChunkName: "pages/fashion/about-us" */))
const _828cf4fe = () => interopDefault(import('..\\pages\\fashion\\all-product.vue' /* webpackChunkName: "pages/fashion/all-product" */))
const _67aab7c6 = () => interopDefault(import('..\\pages\\fashion\\contact-us.vue' /* webpackChunkName: "pages/fashion/contact-us" */))
const _f317236c = () => interopDefault(import('..\\pages\\fashion\\index_20240429.vue' /* webpackChunkName: "pages/fashion/index_20240429" */))
const _0731ba96 = () => interopDefault(import('..\\pages\\fashion\\index copy.vue' /* webpackChunkName: "pages/fashion/index copy" */))
const _b99b8e64 = () => interopDefault(import('..\\pages\\fashion\\product-category.vue' /* webpackChunkName: "pages/fashion/product-category" */))
const _2e7660a1 = () => interopDefault(import('..\\pages\\fashion\\product-detail.vue' /* webpackChunkName: "pages/fashion/product-detail" */))
const _10408d69 = () => interopDefault(import('..\\pages\\lion72\\ticket\\index.vue' /* webpackChunkName: "pages/lion72/ticket/index" */))
const _69aa6b92 = () => interopDefault(import('..\\pages\\pos\\lottery\\index.vue' /* webpackChunkName: "pages/pos/lottery/index" */))
const _ac8894b2 = () => interopDefault(import('..\\pages\\pos\\minimart\\index.vue' /* webpackChunkName: "pages/pos/minimart/index" */))
const _444484d2 = () => interopDefault(import('..\\pages\\pos\\restaurant\\index.vue' /* webpackChunkName: "pages/pos/restaurant/index" */))
const _03cd8b68 = () => interopDefault(import('..\\pages\\pos\\ticket\\index.vue' /* webpackChunkName: "pages/pos/ticket/index" */))
const _1bf6067d = () => interopDefault(import('..\\pages\\admin\\ap\\invoice\\index.vue' /* webpackChunkName: "pages/admin/ap/invoice/index" */))
const _67448dd4 = () => interopDefault(import('..\\pages\\admin\\ap\\invoiceSettlement\\index.vue' /* webpackChunkName: "pages/admin/ap/invoiceSettlement/index" */))
const _2b2ca4d2 = () => interopDefault(import('..\\pages\\admin\\barcodePrint\\gianttTime.vue' /* webpackChunkName: "pages/admin/barcodePrint/gianttTime" */))
const _8b74de54 = () => interopDefault(import('..\\pages\\admin\\cafeTable\\customer.vue' /* webpackChunkName: "pages/admin/cafeTable/customer" */))
const _4befc9c9 = () => interopDefault(import('..\\pages\\admin\\customer_request\\topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _78cea6fe = () => interopDefault(import('..\\pages\\admin\\customer_request\\withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _7c1b320e = () => interopDefault(import('..\\pages\\admin\\job_fair\\agency\\index.vue' /* webpackChunkName: "pages/admin/job_fair/agency/index" */))
const _484d464e = () => interopDefault(import('..\\pages\\admin\\job_fair\\mou\\index.vue' /* webpackChunkName: "pages/admin/job_fair/mou/index" */))
const _7d992342 = () => interopDefault(import('..\\pages\\admin\\pos\\table\\index.vue' /* webpackChunkName: "pages/admin/pos/table/index" */))
const _b0e6f7f2 = () => interopDefault(import('..\\pages\\admin\\product\\productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _42c08ab8 = () => interopDefault(import('..\\pages\\admin\\web_category\\test.vue' /* webpackChunkName: "pages/admin/web_category/test" */))
const _473def14 = () => interopDefault(import('..\\pages\\admin\\accounting\\ar\\invoice\\index.vue' /* webpackChunkName: "pages/admin/accounting/ar/invoice/index" */))
const _648c1cc4 = () => interopDefault(import('..\\pages\\admin\\accounting\\ar\\receive\\index.vue' /* webpackChunkName: "pages/admin/accounting/ar/receive/index" */))
const _747609b8 = () => interopDefault(import('..\\pages\\admin\\advertise\\mixins\\ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _4eec259c = () => interopDefault(import('..\\pages\\admin\\product\\mixins\\ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _130e8fd9 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\bankSummary\\index.vue' /* webpackChunkName: "pages/admin/report/MA/bankSummary/index" */))
const _51a94aaf = () => interopDefault(import('..\\pages\\admin\\report\\MA\\master\\index.vue' /* webpackChunkName: "pages/admin/report/MA/master/index" */))
const _465ef39c = () => interopDefault(import('..\\pages\\admin\\report\\MA\\ministrySummary\\index.vue' /* webpackChunkName: "pages/admin/report/MA/ministrySummary/index" */))
const _7497029d = () => interopDefault(import('..\\pages\\admin\\report\\MA\\payment\\index.vue' /* webpackChunkName: "pages/admin/report/MA/payment/index" */))
const _3e36a3f0 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/index" */))
const _674d8828 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\targetAmount\\index.vue' /* webpackChunkName: "pages/admin/report/MA/targetAmount/index" */))
const _5d11f732 = () => interopDefault(import('..\\pages\\admin\\web_product\\mixins\\ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/web_product/mixins/ImagePreviewMixin" */))
const _21fee070 = () => interopDefault(import('..\\pages\\admin\\report\\MA\\mixin\\excel.js' /* webpackChunkName: "pages/admin/report/MA/mixin/excel" */))
const _434381ca = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\bankAccount\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/bankAccount/index" */))
const _f4fa738e = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\chartAccount\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/chartAccount/index" */))
const _04fde32e = () => interopDefault(import('..\\pages\\admin\\report\\MA\\settlement\\ministry\\index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/ministry/index" */))
const _1174ae9c = () => interopDefault(import('..\\pages\\admin\\PDFInvoice\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFInvoice/_id/index" */))
const _33d8676c = () => interopDefault(import('..\\pages\\admin\\PDFInvoiceSummary\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFInvoiceSummary/_id/index" */))
const _63921f3b = () => interopDefault(import('..\\pages\\admin\\PDFQuotation\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFQuotation/_id/index" */))
const _ab7d3ac6 = () => interopDefault(import('..\\pages\\admin\\PDFTicket\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFTicket/_id/index" */))
const _42e66588 = () => interopDefault(import('..\\pages\\admin\\PDFTransfer\\_id\\index.vue' /* webpackChunkName: "pages/admin/PDFTransfer/_id/index" */))
const _181026ce = () => interopDefault(import('..\\pages\\admin\\product\\_id\\index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _1eb59a96 = () => interopDefault(import('..\\pages\\admin\\stock\\_id\\index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _1a0aeb63 = () => interopDefault(import('..\\pages\\admin\\web_product\\_id\\index.vue' /* webpackChunkName: "pages/admin/web_product/_id/index" */))
const _479b7dc1 = () => interopDefault(import('..\\pages\\product\\_id\\index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _6c22fe93 = () => interopDefault(import('..\\pages\\product\\_id\\product-details.vue' /* webpackChunkName: "pages/product/_id/product-details" */))
const _c83f0768 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _01ce5019,
    name: "admin"
  }, {
    path: "/fashion",
    component: _7c1c4a90,
    name: "fashion"
  }, {
    path: "/home",
    component: _133c890d,
    name: "home"
  }, {
    path: "/index.bk",
    component: _6ddb81db,
    name: "index.bk"
  }, {
    path: "/lion72",
    component: _233c6e75,
    name: "lion72"
  }, {
    path: "/product",
    component: _2dccc2f9,
    name: "product"
  }, {
    path: "/product-details",
    component: _0620e944,
    name: "product-details"
  }, {
    path: "/public",
    component: _991b7e7a,
    name: "public"
  }, {
    path: "/admin/advertise",
    component: _51b0cf54,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _b1f6d4ec,
    name: "admin-ap"
  }, {
    path: "/admin/applicants",
    component: _60231bc8,
    name: "admin-applicants"
  }, {
    path: "/admin/ar",
    component: _93303f70,
    name: "admin-ar"
  }, {
    path: "/admin/authority",
    component: _da5ab290,
    name: "admin-authority"
  }, {
    path: "/admin/bank",
    component: _5a04f19d,
    name: "admin-bank"
  }, {
    path: "/admin/bankAccount",
    component: _cd337eac,
    name: "admin-bankAccount"
  }, {
    path: "/admin/barcodePrint",
    component: _a4cddba8,
    name: "admin-barcodePrint"
  }, {
    path: "/admin/batch_job",
    component: _f03344ba,
    name: "admin-batch_job"
  }, {
    path: "/admin/benefit",
    component: _444e2524,
    name: "admin-benefit"
  }, {
    path: "/admin/booking",
    component: _51ca4422,
    name: "admin-booking"
  }, {
    path: "/admin/cafeTable",
    component: _bc5ebdec,
    name: "admin-cafeTable"
  }, {
    path: "/admin/campaign",
    component: _7e5bdac9,
    name: "admin-campaign"
  }, {
    path: "/admin/cancel_order",
    component: _72a94970,
    name: "admin-cancel_order"
  }, {
    path: "/admin/card",
    component: _3810f049,
    name: "admin-card"
  }, {
    path: "/admin/category",
    component: _075203ca,
    name: "admin-category"
  }, {
    path: "/admin/chartAccount",
    component: _2b7af68a,
    name: "admin-chartAccount"
  }, {
    path: "/admin/client",
    component: _6b3364ee,
    name: "admin-client"
  }, {
    path: "/admin/cod_order",
    component: _4fb97c98,
    name: "admin-cod_order"
  }, {
    path: "/admin/company",
    component: _dfde5d04,
    name: "admin-company"
  }, {
    path: "/admin/currency",
    component: _c8e19db0,
    name: "admin-currency"
  }, {
    path: "/admin/customer",
    component: _1188a18a,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _21137a2a,
    name: "admin-customer_request"
  }, {
    path: "/admin/generalLedger",
    component: _41de104a,
    name: "admin-generalLedger"
  }, {
    path: "/admin/group",
    component: _f9878b08,
    name: "admin-group"
  }, {
    path: "/admin/inventory_value",
    component: _7042f0e6,
    name: "admin-inventory_value"
  }, {
    path: "/admin/jobAdvertise",
    component: _b0d6a1a2,
    name: "admin-jobAdvertise"
  }, {
    path: "/admin/location",
    component: _3a861304,
    name: "admin-location"
  }, {
    path: "/admin/login",
    component: _dde5295c,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _eb2bf462,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _92a27282,
    name: "admin-member"
  }, {
    path: "/admin/menuHeader",
    component: _4b486466,
    name: "admin-menuHeader"
  }, {
    path: "/admin/menuLine",
    component: _33250e06,
    name: "admin-menuLine"
  }, {
    path: "/admin/ministry",
    component: _6b780f3a,
    name: "admin-ministry"
  }, {
    path: "/admin/minstock",
    component: _73667156,
    name: "admin-minstock"
  }, {
    path: "/admin/moneyAdvance",
    component: _2f52d512,
    name: "admin-moneyAdvance"
  }, {
    path: "/admin/moneyAdvanceByBank",
    component: _5430f2f8,
    name: "admin-moneyAdvanceByBank"
  }, {
    path: "/admin/moneyAdvanceDashboard",
    component: _6ff82c09,
    name: "admin-moneyAdvanceDashboard"
  }, {
    path: "/admin/moneyAdvanceSettlement",
    component: _7e222c4e,
    name: "admin-moneyAdvanceSettlement"
  }, {
    path: "/admin/moneyAdvanceSettlementByBank",
    component: _08f33fca,
    name: "admin-moneyAdvanceSettlementByBank"
  }, {
    path: "/admin/moneyAdvanceTarget",
    component: _63269166,
    name: "admin-moneyAdvanceTarget"
  }, {
    path: "/admin/orders",
    component: _6da66194,
    name: "admin-orders"
  }, {
    path: "/admin/ordersAll",
    component: _755d67df,
    name: "admin-ordersAll"
  }, {
    path: "/admin/ordersFromAll",
    component: _a0ade1ae,
    name: "admin-ordersFromAll"
  }, {
    path: "/admin/ordersFromPos",
    component: _25e70ed4,
    name: "admin-ordersFromPos"
  }, {
    path: "/admin/ordersFromPosCancel",
    component: _52cda8bc,
    name: "admin-ordersFromPosCancel"
  }, {
    path: "/admin/ordersFromPosCredit",
    component: _03849246,
    name: "admin-ordersFromPosCredit"
  }, {
    path: "/admin/ordersFromPosOnline",
    component: _5367ef43,
    name: "admin-ordersFromPosOnline"
  }, {
    path: "/admin/ordersFromPosOnlineCOD",
    component: _10f370ce,
    name: "admin-ordersFromPosOnlineCOD"
  }, {
    path: "/admin/ordersFromPosSummaryByCustomer",
    component: _40dd3b3a,
    name: "admin-ordersFromPosSummaryByCustomer"
  }, {
    path: "/admin/ordersIn",
    component: _7fac48af,
    name: "admin-ordersIn"
  }, {
    path: "/admin/ordersOld231101",
    component: _5b382137,
    name: "admin-ordersOld231101"
  }, {
    path: "/admin/ordersOut",
    component: _6fa6d412,
    name: "admin-ordersOut"
  }, {
    path: "/admin/orderTracking",
    component: _1f0b1fd4,
    name: "admin-orderTracking"
  }, {
    path: "/admin/payment",
    component: _08723c55,
    name: "admin-payment"
  }, {
    path: "/admin/pl",
    component: _fc293cc6,
    name: "admin-pl"
  }, {
    path: "/admin/po",
    component: _cdff5c8c,
    name: "admin-po"
  }, {
    path: "/admin/product",
    component: _498be5cc,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _684d09c8,
    name: "admin-productInuse"
  }, {
    path: "/admin/quotation",
    component: _5e9880cf,
    name: "admin-quotation"
  }, {
    path: "/admin/quotationList",
    component: _0875c25e,
    name: "admin-quotationList"
  }, {
    path: "/admin/receiving",
    component: _16b0d6fb,
    name: "admin-receiving"
  }, {
    path: "/admin/report",
    component: _083f9036,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _12548b80,
    name: "admin-report_card"
  }, {
    path: "/admin/reservation",
    component: _a61d1b62,
    name: "admin-reservation"
  }, {
    path: "/admin/rider",
    component: _7e753fa1,
    name: "admin-rider"
  }, {
    path: "/admin/saleCost",
    component: _76de04a5,
    name: "admin-saleCost"
  }, {
    path: "/admin/saleReportDetail",
    component: _cbd99a66,
    name: "admin-saleReportDetail"
  }, {
    path: "/admin/saleReportDetailByCustomer",
    component: _3cc83b10,
    name: "admin-saleReportDetailByCustomer"
  }, {
    path: "/admin/saleReportDetailByHeader",
    component: _89a4312e,
    name: "admin-saleReportDetailByHeader"
  }, {
    path: "/admin/saleReportDetailByProduct",
    component: _ea2c5222,
    name: "admin-saleReportDetailByProduct"
  }, {
    path: "/admin/saleReportDetailByUser",
    component: _bb18b32a,
    name: "admin-saleReportDetailByUser"
  }, {
    path: "/admin/shipping",
    component: _09ec8f6b,
    name: "admin-shipping"
  }, {
    path: "/admin/tax",
    component: _4b1f6610,
    name: "admin-tax"
  }, {
    path: "/admin/terminal",
    component: _8d6b2446,
    name: "admin-terminal"
  }, {
    path: "/admin/ticket",
    component: _218ee9e6,
    name: "admin-ticket"
  }, {
    path: "/admin/transfer",
    component: _d25245e4,
    name: "admin-transfer"
  }, {
    path: "/admin/tutorial",
    component: _2641d3bb,
    name: "admin-tutorial"
  }, {
    path: "/admin/txn",
    component: _6bf485f1,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _0c43b28a,
    name: "admin-txn_type"
  }, {
    path: "/admin/unit",
    component: _1a40c155,
    name: "admin-unit"
  }, {
    path: "/admin/user",
    component: _8bb366a4,
    name: "admin-user"
  }, {
    path: "/admin/vendor",
    component: _0946595e,
    name: "admin-vendor"
  }, {
    path: "/admin/walletin",
    component: _9c94ef8a,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _7ec58606,
    name: "admin-walletout"
  }, {
    path: "/admin/web_category",
    component: _0e2d5530,
    name: "admin-web_category"
  }, {
    path: "/admin/web_product",
    component: _c6984fd2,
    name: "admin-web_product"
  }, {
    path: "/fashion/about-us",
    component: _d5c202e0,
    name: "fashion-about-us"
  }, {
    path: "/fashion/all-product",
    component: _828cf4fe,
    name: "fashion-all-product"
  }, {
    path: "/fashion/contact-us",
    component: _67aab7c6,
    name: "fashion-contact-us"
  }, {
    path: "/fashion/index_20240429",
    component: _f317236c,
    name: "fashion-index_20240429"
  }, {
    path: "/fashion/index%20copy",
    component: _0731ba96,
    name: "fashion-index copy"
  }, {
    path: "/fashion/product-category",
    component: _b99b8e64,
    name: "fashion-product-category"
  }, {
    path: "/fashion/product-detail",
    component: _2e7660a1,
    name: "fashion-product-detail"
  }, {
    path: "/lion72/ticket",
    component: _10408d69,
    name: "lion72-ticket"
  }, {
    path: "/pos/lottery",
    component: _69aa6b92,
    name: "pos-lottery"
  }, {
    path: "/pos/minimart",
    component: _ac8894b2,
    name: "pos-minimart"
  }, {
    path: "/pos/restaurant",
    component: _444484d2,
    name: "pos-restaurant"
  }, {
    path: "/pos/ticket",
    component: _03cd8b68,
    name: "pos-ticket"
  }, {
    path: "/admin/ap/invoice",
    component: _1bf6067d,
    name: "admin-ap-invoice"
  }, {
    path: "/admin/ap/invoiceSettlement",
    component: _67448dd4,
    name: "admin-ap-invoiceSettlement"
  }, {
    path: "/admin/barcodePrint/gianttTime",
    component: _2b2ca4d2,
    name: "admin-barcodePrint-gianttTime"
  }, {
    path: "/admin/cafeTable/customer",
    component: _8b74de54,
    name: "admin-cafeTable-customer"
  }, {
    path: "/admin/customer_request/topup",
    component: _4befc9c9,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _78cea6fe,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/job_fair/agency",
    component: _7c1b320e,
    name: "admin-job_fair-agency"
  }, {
    path: "/admin/job_fair/mou",
    component: _484d464e,
    name: "admin-job_fair-mou"
  }, {
    path: "/admin/pos/table",
    component: _7d992342,
    name: "admin-pos-table"
  }, {
    path: "/admin/product/productlist",
    component: _b0e6f7f2,
    name: "admin-product-productlist"
  }, {
    path: "/admin/web_category/test",
    component: _42c08ab8,
    name: "admin-web_category-test"
  }, {
    path: "/admin/accounting/ar/invoice",
    component: _473def14,
    name: "admin-accounting-ar-invoice"
  }, {
    path: "/admin/accounting/ar/receive",
    component: _648c1cc4,
    name: "admin-accounting-ar-receive"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _747609b8,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _4eec259c,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/report/MA/bankSummary",
    component: _130e8fd9,
    name: "admin-report-MA-bankSummary"
  }, {
    path: "/admin/report/MA/master",
    component: _51a94aaf,
    name: "admin-report-MA-master"
  }, {
    path: "/admin/report/MA/ministrySummary",
    component: _465ef39c,
    name: "admin-report-MA-ministrySummary"
  }, {
    path: "/admin/report/MA/payment",
    component: _7497029d,
    name: "admin-report-MA-payment"
  }, {
    path: "/admin/report/MA/settlement",
    component: _3e36a3f0,
    name: "admin-report-MA-settlement"
  }, {
    path: "/admin/report/MA/targetAmount",
    component: _674d8828,
    name: "admin-report-MA-targetAmount"
  }, {
    path: "/admin/web_product/mixins/ImagePreviewMixin",
    component: _5d11f732,
    name: "admin-web_product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/report/MA/mixin/excel",
    component: _21fee070,
    name: "admin-report-MA-mixin-excel"
  }, {
    path: "/admin/report/MA/settlement/bankAccount",
    component: _434381ca,
    name: "admin-report-MA-settlement-bankAccount"
  }, {
    path: "/admin/report/MA/settlement/chartAccount",
    component: _f4fa738e,
    name: "admin-report-MA-settlement-chartAccount"
  }, {
    path: "/admin/report/MA/settlement/ministry",
    component: _04fde32e,
    name: "admin-report-MA-settlement-ministry"
  }, {
    path: "/admin/PDFInvoice/:id",
    component: _1174ae9c,
    name: "admin-PDFInvoice-id"
  }, {
    path: "/admin/PDFInvoiceSummary/:id",
    component: _33d8676c,
    name: "admin-PDFInvoiceSummary-id"
  }, {
    path: "/admin/PDFQuotation/:id",
    component: _63921f3b,
    name: "admin-PDFQuotation-id"
  }, {
    path: "/admin/PDFTicket/:id",
    component: _ab7d3ac6,
    name: "admin-PDFTicket-id"
  }, {
    path: "/admin/PDFTransfer/:id",
    component: _42e66588,
    name: "admin-PDFTransfer-id"
  }, {
    path: "/admin/product/:id",
    component: _181026ce,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _1eb59a96,
    name: "admin-stock-id"
  }, {
    path: "/admin/web_product/:id",
    component: _1a0aeb63,
    name: "admin-web_product-id"
  }, {
    path: "/product/:id",
    component: _479b7dc1,
    name: "product-id"
  }, {
    path: "/product/:id/product-details",
    component: _6c22fe93,
    name: "product-id-product-details"
  }, {
    path: "/",
    component: _c83f0768,
    name: "index"
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
