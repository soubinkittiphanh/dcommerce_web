import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42c0a0dc = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _98a37e8a = () => interopDefault(import('../pages/fashion/index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _1447cf5c = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _a8b5a7d6 = () => interopDefault(import('../pages/index.bk.vue' /* webpackChunkName: "pages/index.bk" */))
const _6b23df6a = () => interopDefault(import('../pages/lion72/index.vue' /* webpackChunkName: "pages/lion72/index" */))
const _35489732 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _6bd6cbe4 = () => interopDefault(import('../pages/product-details.vue' /* webpackChunkName: "pages/product-details" */))
const _5a38e948 = () => interopDefault(import('../pages/public/index.vue' /* webpackChunkName: "pages/public/index" */))
const _5a2985aa = () => interopDefault(import('../pages/admin/advertise/index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _c081733c = () => interopDefault(import('../pages/admin/ap/index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _0aa72964 = () => interopDefault(import('../pages/admin/applicants/index.vue' /* webpackChunkName: "pages/admin/applicants/index" */))
const _6ceea838 = () => interopDefault(import('../pages/admin/ar/index.vue' /* webpackChunkName: "pages/admin/ar/index" */))
const _437d31c6 = () => interopDefault(import('../pages/admin/authority/index.vue' /* webpackChunkName: "pages/admin/authority/index" */))
const _4dc0be2f = () => interopDefault(import('../pages/admin/bank/index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _6ec13158 = () => interopDefault(import('../pages/admin/bankAccount/index.vue' /* webpackChunkName: "pages/admin/bankAccount/index" */))
const _25b7b8c0 = () => interopDefault(import('../pages/admin/barcodePrint/index.vue' /* webpackChunkName: "pages/admin/barcodePrint/index" */))
const _7cf1717b = () => interopDefault(import('../pages/admin/batch_job/index.vue' /* webpackChunkName: "pages/admin/batch_job/index" */))
const _3c041fcc = () => interopDefault(import('../pages/admin/benefit/index.vue' /* webpackChunkName: "pages/admin/benefit/index" */))
const _8dba0d48 = () => interopDefault(import('../pages/admin/booking/index.vue' /* webpackChunkName: "pages/admin/booking/index" */))
const _d2e4b598 = () => interopDefault(import('../pages/admin/cafeTable/index.vue' /* webpackChunkName: "pages/admin/cafeTable/index" */))
const _30e59403 = () => interopDefault(import('../pages/admin/campaign/index.vue' /* webpackChunkName: "pages/admin/campaign/index" */))
const _65e188fc = () => interopDefault(import('../pages/admin/cancel_order/index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _3c243a03 = () => interopDefault(import('../pages/admin/card/index.vue' /* webpackChunkName: "pages/admin/card/index" */))
const _1c2fbe71 = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _200e5ebc = () => interopDefault(import('../pages/admin/chartAccount/index.vue' /* webpackChunkName: "pages/admin/chartAccount/index" */))
const _da94a204 = () => interopDefault(import('../pages/admin/client/index.vue' /* webpackChunkName: "pages/admin/client/index" */))
const _1c6f474a = () => interopDefault(import('../pages/admin/cod_order/index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _79315f00 = () => interopDefault(import('../pages/admin/company/index.vue' /* webpackChunkName: "pages/admin/company/index" */))
const _10ce75c4 = () => interopDefault(import('../pages/admin/currency/index.vue' /* webpackChunkName: "pages/admin/currency/index" */))
const _f13f2d5e = () => interopDefault(import('../pages/admin/customer/index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _4dd908a1 = () => interopDefault(import('../pages/admin/customer_request/index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _09aa8974 = () => interopDefault(import('../pages/admin/generalLedger/index.vue' /* webpackChunkName: "pages/admin/generalLedger/index" */))
const _975dcbfc = () => interopDefault(import('../pages/admin/group/index.vue' /* webpackChunkName: "pages/admin/group/index" */))
const _df94d8de = () => interopDefault(import('../pages/admin/inventory_value/index.vue' /* webpackChunkName: "pages/admin/inventory_value/index" */))
const _cdba2146 = () => interopDefault(import('../pages/admin/jobAdvertise/index.vue' /* webpackChunkName: "pages/admin/jobAdvertise/index" */))
const _70c5e868 = () => interopDefault(import('../pages/admin/location/index.vue' /* webpackChunkName: "pages/admin/location/index" */))
const _54691328 = () => interopDefault(import('../pages/admin/login/index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _51a6edfd = () => interopDefault(import('../pages/admin/logout/index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _3a4e4f0d = () => interopDefault(import('../pages/admin/member/index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _b984ba82 = () => interopDefault(import('../pages/admin/menuHeader/index.vue' /* webpackChunkName: "pages/admin/menuHeader/index" */))
const _36ba8526 = () => interopDefault(import('../pages/admin/menuLine/index.vue' /* webpackChunkName: "pages/admin/menuLine/index" */))
const _a7aee51c = () => interopDefault(import('../pages/admin/ministry/index.vue' /* webpackChunkName: "pages/admin/ministry/index" */))
const _5fc23412 = () => interopDefault(import('../pages/admin/minstock/index.vue' /* webpackChunkName: "pages/admin/minstock/index" */))
const _50e72015 = () => interopDefault(import('../pages/admin/moneyAdvance/index.vue' /* webpackChunkName: "pages/admin/moneyAdvance/index" */))
const _c9889e56 = () => interopDefault(import('../pages/admin/moneyAdvanceDashboard/index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceDashboard/index" */))
const _526664c4 = () => interopDefault(import('../pages/admin/moneyAdvanceSettlement/index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceSettlement/index" */))
const _18a842f1 = () => interopDefault(import('../pages/admin/moneyAdvanceSettlementByBank/index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceSettlementByBank/index" */))
const _77349df4 = () => interopDefault(import('../pages/admin/moneyAdvanceTarget/index.vue' /* webpackChunkName: "pages/admin/moneyAdvanceTarget/index" */))
const _613d8598 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _63922fbf = () => interopDefault(import('../pages/admin/ordersAll/index.vue' /* webpackChunkName: "pages/admin/ordersAll/index" */))
const _69b69a96 = () => interopDefault(import('../pages/admin/ordersFromAll/index.vue' /* webpackChunkName: "pages/admin/ordersFromAll/index" */))
const _23b030b0 = () => interopDefault(import('../pages/admin/ordersFromPos/index.vue' /* webpackChunkName: "pages/admin/ordersFromPos/index" */))
const _32dea7fc = () => interopDefault(import('../pages/admin/ordersFromPosCancel/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCancel/index" */))
const _bc74547e = () => interopDefault(import('../pages/admin/ordersFromPosCredit/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosCredit/index" */))
const _0fdff89b = () => interopDefault(import('../pages/admin/ordersFromPosOnline/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosOnline/index" */))
const _efbac61a = () => interopDefault(import('../pages/admin/ordersFromPosOnlineCOD/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosOnlineCOD/index" */))
const _3b04a9e9 = () => interopDefault(import('../pages/admin/ordersFromPosSummaryByCustomer/index.vue' /* webpackChunkName: "pages/admin/ordersFromPosSummaryByCustomer/index" */))
const _627cd15d = () => interopDefault(import('../pages/admin/ordersIn/index.vue' /* webpackChunkName: "pages/admin/ordersIn/index" */))
const _2065c6b2 = () => interopDefault(import('../pages/admin/ordersOld231101/index.vue' /* webpackChunkName: "pages/admin/ordersOld231101/index" */))
const _5b20f12c = () => interopDefault(import('../pages/admin/ordersOut/index.vue' /* webpackChunkName: "pages/admin/ordersOut/index" */))
const _515d0028 = () => interopDefault(import('../pages/admin/orderTracking/index.vue' /* webpackChunkName: "pages/admin/orderTracking/index" */))
const _2f5ca26e = () => interopDefault(import('../pages/admin/payment/index.vue' /* webpackChunkName: "pages/admin/payment/index" */))
const _80d5a822 = () => interopDefault(import('../pages/admin/pl/index.vue' /* webpackChunkName: "pages/admin/pl/index" */))
const _7e434432 = () => interopDefault(import('../pages/admin/po/index.vue' /* webpackChunkName: "pages/admin/po/index" */))
const _03317a72 = () => interopDefault(import('../pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _8a051cfa = () => interopDefault(import('../pages/admin/productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _6b1838cf = () => interopDefault(import('../pages/admin/quotation/index.vue' /* webpackChunkName: "pages/admin/quotation/index" */))
const _38f40e0d = () => interopDefault(import('../pages/admin/quotationList/index.vue' /* webpackChunkName: "pages/admin/quotationList/index" */))
const _68c66d23 = () => interopDefault(import('../pages/admin/receiving/index.vue' /* webpackChunkName: "pages/admin/receiving/index" */))
const _1b91bdb2 = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _79f169be = () => interopDefault(import('../pages/admin/report_card/index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _4c7625e2 = () => interopDefault(import('../pages/admin/reservation/index.vue' /* webpackChunkName: "pages/admin/reservation/index" */))
const _0f005c3d = () => interopDefault(import('../pages/admin/rider/index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _966e82b2 = () => interopDefault(import('../pages/admin/saleCost/index.vue' /* webpackChunkName: "pages/admin/saleCost/index" */))
const _21cd947f = () => interopDefault(import('../pages/admin/saleReportDetail/index.vue' /* webpackChunkName: "pages/admin/saleReportDetail/index" */))
const _1fd61eb4 = () => interopDefault(import('../pages/admin/saleReportDetailByCustomer/index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByCustomer/index" */))
const _512f4563 = () => interopDefault(import('../pages/admin/saleReportDetailByHeader/index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByHeader/index" */))
const _6363e6a2 = () => interopDefault(import('../pages/admin/saleReportDetailByProduct/index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByProduct/index" */))
const _09851be1 = () => interopDefault(import('../pages/admin/saleReportDetailByUser/index.vue' /* webpackChunkName: "pages/admin/saleReportDetailByUser/index" */))
const _f00a79be = () => interopDefault(import('../pages/admin/shipping/index.vue' /* webpackChunkName: "pages/admin/shipping/index" */))
const _e5b9f3a4 = () => interopDefault(import('../pages/admin/tax/index.vue' /* webpackChunkName: "pages/admin/tax/index" */))
const _3b0e4e6f = () => interopDefault(import('../pages/admin/terminal/index.vue' /* webpackChunkName: "pages/admin/terminal/index" */))
const _f3186e02 = () => interopDefault(import('../pages/admin/ticket/index.vue' /* webpackChunkName: "pages/admin/ticket/index" */))
const _a4e295c4 = () => interopDefault(import('../pages/admin/transfer/index.vue' /* webpackChunkName: "pages/admin/transfer/index" */))
const _04c3b4d1 = () => interopDefault(import('../pages/admin/tutorial/index.vue' /* webpackChunkName: "pages/admin/tutorial/index" */))
const _6d29e62d = () => interopDefault(import('../pages/admin/txn/index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _1cb34022 = () => interopDefault(import('../pages/admin/txn_type/index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _43701777 = () => interopDefault(import('../pages/admin/unit/index.vue' /* webpackChunkName: "pages/admin/unit/index" */))
const _b9218604 = () => interopDefault(import('../pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _3443683b = () => interopDefault(import('../pages/admin/vendor/index.vue' /* webpackChunkName: "pages/admin/vendor/index" */))
const _19c77051 = () => interopDefault(import('../pages/admin/walletin/index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _e5ab9e90 = () => interopDefault(import('../pages/admin/walletout/index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _07cd053c = () => interopDefault(import('../pages/admin/web_category/index.vue' /* webpackChunkName: "pages/admin/web_category/index" */))
const _6e8aa372 = () => interopDefault(import('../pages/admin/web_product/index.vue' /* webpackChunkName: "pages/admin/web_product/index" */))
const _57d4d485 = () => interopDefault(import('../pages/fashion/about-us.vue' /* webpackChunkName: "pages/fashion/about-us" */))
const _6526ef6c = () => interopDefault(import('../pages/fashion/all-product.vue' /* webpackChunkName: "pages/fashion/all-product" */))
const _8e7a5e5c = () => interopDefault(import('../pages/fashion/contact-us.vue' /* webpackChunkName: "pages/fashion/contact-us" */))
const _45e58f02 = () => interopDefault(import('../pages/fashion/index_20240429.vue' /* webpackChunkName: "pages/fashion/index_20240429" */))
const _2e01612c = () => interopDefault(import('../pages/fashion/index copy.vue' /* webpackChunkName: "pages/fashion/index copy" */))
const _927d6c7a = () => interopDefault(import('../pages/fashion/product-category.vue' /* webpackChunkName: "pages/fashion/product-category" */))
const _f5e1aa54 = () => interopDefault(import('../pages/fashion/product-detail.vue' /* webpackChunkName: "pages/fashion/product-detail" */))
const _caaad3b2 = () => interopDefault(import('../pages/lion72/ticket/index.vue' /* webpackChunkName: "pages/lion72/ticket/index" */))
const _cdf0e3de = () => interopDefault(import('../pages/pos/lottery/index.vue' /* webpackChunkName: "pages/pos/lottery/index" */))
const _33c53d8a = () => interopDefault(import('../pages/pos/minimart/index.vue' /* webpackChunkName: "pages/pos/minimart/index" */))
const _2517700b = () => interopDefault(import('../pages/pos/restaurant/index.vue' /* webpackChunkName: "pages/pos/restaurant/index" */))
const _4b336acc = () => interopDefault(import('../pages/pos/ticket/index.vue' /* webpackChunkName: "pages/pos/ticket/index" */))
const _4d058200 = () => interopDefault(import('../pages/admin/ap/invoice/index.vue' /* webpackChunkName: "pages/admin/ap/invoice/index" */))
const _1b1605c9 = () => interopDefault(import('../pages/admin/ap/invoiceSettlement/index.vue' /* webpackChunkName: "pages/admin/ap/invoiceSettlement/index" */))
const _56d2fabe = () => interopDefault(import('../pages/admin/barcodePrint/gianttTime.vue' /* webpackChunkName: "pages/admin/barcodePrint/gianttTime" */))
const _ab5ae102 = () => interopDefault(import('../pages/admin/customer_request/topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _e852f9ea = () => interopDefault(import('../pages/admin/customer_request/withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _5fa81691 = () => interopDefault(import('../pages/admin/job_fair/agency/index.vue' /* webpackChunkName: "pages/admin/job_fair/agency/index" */))
const _f1108a54 = () => interopDefault(import('../pages/admin/pos/table/index.vue' /* webpackChunkName: "pages/admin/pos/table/index" */))
const _38fd842d = () => interopDefault(import('../pages/admin/product/productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _4183d918 = () => interopDefault(import('../pages/admin/web_category/test.vue' /* webpackChunkName: "pages/admin/web_category/test" */))
const _55b98a0c = () => interopDefault(import('../pages/admin/accounting/ar/invoice/index.vue' /* webpackChunkName: "pages/admin/accounting/ar/invoice/index" */))
const _51ce0e42 = () => interopDefault(import('../pages/admin/accounting/ar/receive/index.vue' /* webpackChunkName: "pages/admin/accounting/ar/receive/index" */))
const _0d56c4e2 = () => interopDefault(import('../pages/admin/advertise/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _78a0b872 = () => interopDefault(import('../pages/admin/product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _4e9a3466 = () => interopDefault(import('../pages/admin/report/MA/bankSummary/index.vue' /* webpackChunkName: "pages/admin/report/MA/bankSummary/index" */))
const _0167eed6 = () => interopDefault(import('../pages/admin/report/MA/master/index.vue' /* webpackChunkName: "pages/admin/report/MA/master/index" */))
const _731255ac = () => interopDefault(import('../pages/admin/report/MA/ministrySummary/index.vue' /* webpackChunkName: "pages/admin/report/MA/ministrySummary/index" */))
const _4c95f309 = () => interopDefault(import('../pages/admin/report/MA/payment/index.vue' /* webpackChunkName: "pages/admin/report/MA/payment/index" */))
const _2c804e9c = () => interopDefault(import('../pages/admin/report/MA/settlement/index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/index" */))
const _499294bc = () => interopDefault(import('../pages/admin/report/MA/targetAmount/index.vue' /* webpackChunkName: "pages/admin/report/MA/targetAmount/index" */))
const _e23a245c = () => interopDefault(import('../pages/admin/web_product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/web_product/mixins/ImagePreviewMixin" */))
const _614d3d46 = () => interopDefault(import('../pages/admin/report/MA/mixin/excel.js' /* webpackChunkName: "pages/admin/report/MA/mixin/excel" */))
const _0eb07144 = () => interopDefault(import('../pages/admin/report/MA/settlement/bankAccount/index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/bankAccount/index" */))
const _7e071c50 = () => interopDefault(import('../pages/admin/report/MA/settlement/chartAccount/index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/chartAccount/index" */))
const _226939a8 = () => interopDefault(import('../pages/admin/report/MA/settlement/ministry/index.vue' /* webpackChunkName: "pages/admin/report/MA/settlement/ministry/index" */))
const _30dc45ce = () => interopDefault(import('../pages/admin/PDFInvoice/_id/index.vue' /* webpackChunkName: "pages/admin/PDFInvoice/_id/index" */))
const _70237d99 = () => interopDefault(import('../pages/admin/PDFInvoiceSummary/_id/index.vue' /* webpackChunkName: "pages/admin/PDFInvoiceSummary/_id/index" */))
const _a3d2a890 = () => interopDefault(import('../pages/admin/PDFQuotation/_id/index.vue' /* webpackChunkName: "pages/admin/PDFQuotation/_id/index" */))
const _8ba954a8 = () => interopDefault(import('../pages/admin/PDFTicket/_id/index.vue' /* webpackChunkName: "pages/admin/PDFTicket/_id/index" */))
const _2987d1cb = () => interopDefault(import('../pages/admin/PDFTransfer/_id/index.vue' /* webpackChunkName: "pages/admin/PDFTransfer/_id/index" */))
const _37040c5d = () => interopDefault(import('../pages/admin/product/_id/index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _ce81df78 = () => interopDefault(import('../pages/admin/stock/_id/index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _2b15649c = () => interopDefault(import('../pages/admin/web_product/_id/index.vue' /* webpackChunkName: "pages/admin/web_product/_id/index" */))
const _1abec91d = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _7214c6ef = () => interopDefault(import('../pages/product/_id/product-details.vue' /* webpackChunkName: "pages/product/_id/product-details" */))
const _4600e75c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _42c0a0dc,
    name: "admin"
  }, {
    path: "/fashion",
    component: _98a37e8a,
    name: "fashion"
  }, {
    path: "/home",
    component: _1447cf5c,
    name: "home"
  }, {
    path: "/index.bk",
    component: _a8b5a7d6,
    name: "index.bk"
  }, {
    path: "/lion72",
    component: _6b23df6a,
    name: "lion72"
  }, {
    path: "/product",
    component: _35489732,
    name: "product"
  }, {
    path: "/product-details",
    component: _6bd6cbe4,
    name: "product-details"
  }, {
    path: "/public",
    component: _5a38e948,
    name: "public"
  }, {
    path: "/admin/advertise",
    component: _5a2985aa,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _c081733c,
    name: "admin-ap"
  }, {
    path: "/admin/applicants",
    component: _0aa72964,
    name: "admin-applicants"
  }, {
    path: "/admin/ar",
    component: _6ceea838,
    name: "admin-ar"
  }, {
    path: "/admin/authority",
    component: _437d31c6,
    name: "admin-authority"
  }, {
    path: "/admin/bank",
    component: _4dc0be2f,
    name: "admin-bank"
  }, {
    path: "/admin/bankAccount",
    component: _6ec13158,
    name: "admin-bankAccount"
  }, {
    path: "/admin/barcodePrint",
    component: _25b7b8c0,
    name: "admin-barcodePrint"
  }, {
    path: "/admin/batch_job",
    component: _7cf1717b,
    name: "admin-batch_job"
  }, {
    path: "/admin/benefit",
    component: _3c041fcc,
    name: "admin-benefit"
  }, {
    path: "/admin/booking",
    component: _8dba0d48,
    name: "admin-booking"
  }, {
    path: "/admin/cafeTable",
    component: _d2e4b598,
    name: "admin-cafeTable"
  }, {
    path: "/admin/campaign",
    component: _30e59403,
    name: "admin-campaign"
  }, {
    path: "/admin/cancel_order",
    component: _65e188fc,
    name: "admin-cancel_order"
  }, {
    path: "/admin/card",
    component: _3c243a03,
    name: "admin-card"
  }, {
    path: "/admin/category",
    component: _1c2fbe71,
    name: "admin-category"
  }, {
    path: "/admin/chartAccount",
    component: _200e5ebc,
    name: "admin-chartAccount"
  }, {
    path: "/admin/client",
    component: _da94a204,
    name: "admin-client"
  }, {
    path: "/admin/cod_order",
    component: _1c6f474a,
    name: "admin-cod_order"
  }, {
    path: "/admin/company",
    component: _79315f00,
    name: "admin-company"
  }, {
    path: "/admin/currency",
    component: _10ce75c4,
    name: "admin-currency"
  }, {
    path: "/admin/customer",
    component: _f13f2d5e,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _4dd908a1,
    name: "admin-customer_request"
  }, {
    path: "/admin/generalLedger",
    component: _09aa8974,
    name: "admin-generalLedger"
  }, {
    path: "/admin/group",
    component: _975dcbfc,
    name: "admin-group"
  }, {
    path: "/admin/inventory_value",
    component: _df94d8de,
    name: "admin-inventory_value"
  }, {
    path: "/admin/jobAdvertise",
    component: _cdba2146,
    name: "admin-jobAdvertise"
  }, {
    path: "/admin/location",
    component: _70c5e868,
    name: "admin-location"
  }, {
    path: "/admin/login",
    component: _54691328,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _51a6edfd,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _3a4e4f0d,
    name: "admin-member"
  }, {
    path: "/admin/menuHeader",
    component: _b984ba82,
    name: "admin-menuHeader"
  }, {
    path: "/admin/menuLine",
    component: _36ba8526,
    name: "admin-menuLine"
  }, {
    path: "/admin/ministry",
    component: _a7aee51c,
    name: "admin-ministry"
  }, {
    path: "/admin/minstock",
    component: _5fc23412,
    name: "admin-minstock"
  }, {
    path: "/admin/moneyAdvance",
    component: _50e72015,
    name: "admin-moneyAdvance"
  }, {
    path: "/admin/moneyAdvanceDashboard",
    component: _c9889e56,
    name: "admin-moneyAdvanceDashboard"
  }, {
    path: "/admin/moneyAdvanceSettlement",
    component: _526664c4,
    name: "admin-moneyAdvanceSettlement"
  }, {
    path: "/admin/moneyAdvanceSettlementByBank",
    component: _18a842f1,
    name: "admin-moneyAdvanceSettlementByBank"
  }, {
    path: "/admin/moneyAdvanceTarget",
    component: _77349df4,
    name: "admin-moneyAdvanceTarget"
  }, {
    path: "/admin/orders",
    component: _613d8598,
    name: "admin-orders"
  }, {
    path: "/admin/ordersAll",
    component: _63922fbf,
    name: "admin-ordersAll"
  }, {
    path: "/admin/ordersFromAll",
    component: _69b69a96,
    name: "admin-ordersFromAll"
  }, {
    path: "/admin/ordersFromPos",
    component: _23b030b0,
    name: "admin-ordersFromPos"
  }, {
    path: "/admin/ordersFromPosCancel",
    component: _32dea7fc,
    name: "admin-ordersFromPosCancel"
  }, {
    path: "/admin/ordersFromPosCredit",
    component: _bc74547e,
    name: "admin-ordersFromPosCredit"
  }, {
    path: "/admin/ordersFromPosOnline",
    component: _0fdff89b,
    name: "admin-ordersFromPosOnline"
  }, {
    path: "/admin/ordersFromPosOnlineCOD",
    component: _efbac61a,
    name: "admin-ordersFromPosOnlineCOD"
  }, {
    path: "/admin/ordersFromPosSummaryByCustomer",
    component: _3b04a9e9,
    name: "admin-ordersFromPosSummaryByCustomer"
  }, {
    path: "/admin/ordersIn",
    component: _627cd15d,
    name: "admin-ordersIn"
  }, {
    path: "/admin/ordersOld231101",
    component: _2065c6b2,
    name: "admin-ordersOld231101"
  }, {
    path: "/admin/ordersOut",
    component: _5b20f12c,
    name: "admin-ordersOut"
  }, {
    path: "/admin/orderTracking",
    component: _515d0028,
    name: "admin-orderTracking"
  }, {
    path: "/admin/payment",
    component: _2f5ca26e,
    name: "admin-payment"
  }, {
    path: "/admin/pl",
    component: _80d5a822,
    name: "admin-pl"
  }, {
    path: "/admin/po",
    component: _7e434432,
    name: "admin-po"
  }, {
    path: "/admin/product",
    component: _03317a72,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _8a051cfa,
    name: "admin-productInuse"
  }, {
    path: "/admin/quotation",
    component: _6b1838cf,
    name: "admin-quotation"
  }, {
    path: "/admin/quotationList",
    component: _38f40e0d,
    name: "admin-quotationList"
  }, {
    path: "/admin/receiving",
    component: _68c66d23,
    name: "admin-receiving"
  }, {
    path: "/admin/report",
    component: _1b91bdb2,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _79f169be,
    name: "admin-report_card"
  }, {
    path: "/admin/reservation",
    component: _4c7625e2,
    name: "admin-reservation"
  }, {
    path: "/admin/rider",
    component: _0f005c3d,
    name: "admin-rider"
  }, {
    path: "/admin/saleCost",
    component: _966e82b2,
    name: "admin-saleCost"
  }, {
    path: "/admin/saleReportDetail",
    component: _21cd947f,
    name: "admin-saleReportDetail"
  }, {
    path: "/admin/saleReportDetailByCustomer",
    component: _1fd61eb4,
    name: "admin-saleReportDetailByCustomer"
  }, {
    path: "/admin/saleReportDetailByHeader",
    component: _512f4563,
    name: "admin-saleReportDetailByHeader"
  }, {
    path: "/admin/saleReportDetailByProduct",
    component: _6363e6a2,
    name: "admin-saleReportDetailByProduct"
  }, {
    path: "/admin/saleReportDetailByUser",
    component: _09851be1,
    name: "admin-saleReportDetailByUser"
  }, {
    path: "/admin/shipping",
    component: _f00a79be,
    name: "admin-shipping"
  }, {
    path: "/admin/tax",
    component: _e5b9f3a4,
    name: "admin-tax"
  }, {
    path: "/admin/terminal",
    component: _3b0e4e6f,
    name: "admin-terminal"
  }, {
    path: "/admin/ticket",
    component: _f3186e02,
    name: "admin-ticket"
  }, {
    path: "/admin/transfer",
    component: _a4e295c4,
    name: "admin-transfer"
  }, {
    path: "/admin/tutorial",
    component: _04c3b4d1,
    name: "admin-tutorial"
  }, {
    path: "/admin/txn",
    component: _6d29e62d,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _1cb34022,
    name: "admin-txn_type"
  }, {
    path: "/admin/unit",
    component: _43701777,
    name: "admin-unit"
  }, {
    path: "/admin/user",
    component: _b9218604,
    name: "admin-user"
  }, {
    path: "/admin/vendor",
    component: _3443683b,
    name: "admin-vendor"
  }, {
    path: "/admin/walletin",
    component: _19c77051,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _e5ab9e90,
    name: "admin-walletout"
  }, {
    path: "/admin/web_category",
    component: _07cd053c,
    name: "admin-web_category"
  }, {
    path: "/admin/web_product",
    component: _6e8aa372,
    name: "admin-web_product"
  }, {
    path: "/fashion/about-us",
    component: _57d4d485,
    name: "fashion-about-us"
  }, {
    path: "/fashion/all-product",
    component: _6526ef6c,
    name: "fashion-all-product"
  }, {
    path: "/fashion/contact-us",
    component: _8e7a5e5c,
    name: "fashion-contact-us"
  }, {
    path: "/fashion/index_20240429",
    component: _45e58f02,
    name: "fashion-index_20240429"
  }, {
    path: "/fashion/index%20copy",
    component: _2e01612c,
    name: "fashion-index copy"
  }, {
    path: "/fashion/product-category",
    component: _927d6c7a,
    name: "fashion-product-category"
  }, {
    path: "/fashion/product-detail",
    component: _f5e1aa54,
    name: "fashion-product-detail"
  }, {
    path: "/lion72/ticket",
    component: _caaad3b2,
    name: "lion72-ticket"
  }, {
    path: "/pos/lottery",
    component: _cdf0e3de,
    name: "pos-lottery"
  }, {
    path: "/pos/minimart",
    component: _33c53d8a,
    name: "pos-minimart"
  }, {
    path: "/pos/restaurant",
    component: _2517700b,
    name: "pos-restaurant"
  }, {
    path: "/pos/ticket",
    component: _4b336acc,
    name: "pos-ticket"
  }, {
    path: "/admin/ap/invoice",
    component: _4d058200,
    name: "admin-ap-invoice"
  }, {
    path: "/admin/ap/invoiceSettlement",
    component: _1b1605c9,
    name: "admin-ap-invoiceSettlement"
  }, {
    path: "/admin/barcodePrint/gianttTime",
    component: _56d2fabe,
    name: "admin-barcodePrint-gianttTime"
  }, {
    path: "/admin/customer_request/topup",
    component: _ab5ae102,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _e852f9ea,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/job_fair/agency",
    component: _5fa81691,
    name: "admin-job_fair-agency"
  }, {
    path: "/admin/pos/table",
    component: _f1108a54,
    name: "admin-pos-table"
  }, {
    path: "/admin/product/productlist",
    component: _38fd842d,
    name: "admin-product-productlist"
  }, {
    path: "/admin/web_category/test",
    component: _4183d918,
    name: "admin-web_category-test"
  }, {
    path: "/admin/accounting/ar/invoice",
    component: _55b98a0c,
    name: "admin-accounting-ar-invoice"
  }, {
    path: "/admin/accounting/ar/receive",
    component: _51ce0e42,
    name: "admin-accounting-ar-receive"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _0d56c4e2,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _78a0b872,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/report/MA/bankSummary",
    component: _4e9a3466,
    name: "admin-report-MA-bankSummary"
  }, {
    path: "/admin/report/MA/master",
    component: _0167eed6,
    name: "admin-report-MA-master"
  }, {
    path: "/admin/report/MA/ministrySummary",
    component: _731255ac,
    name: "admin-report-MA-ministrySummary"
  }, {
    path: "/admin/report/MA/payment",
    component: _4c95f309,
    name: "admin-report-MA-payment"
  }, {
    path: "/admin/report/MA/settlement",
    component: _2c804e9c,
    name: "admin-report-MA-settlement"
  }, {
    path: "/admin/report/MA/targetAmount",
    component: _499294bc,
    name: "admin-report-MA-targetAmount"
  }, {
    path: "/admin/web_product/mixins/ImagePreviewMixin",
    component: _e23a245c,
    name: "admin-web_product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/report/MA/mixin/excel",
    component: _614d3d46,
    name: "admin-report-MA-mixin-excel"
  }, {
    path: "/admin/report/MA/settlement/bankAccount",
    component: _0eb07144,
    name: "admin-report-MA-settlement-bankAccount"
  }, {
    path: "/admin/report/MA/settlement/chartAccount",
    component: _7e071c50,
    name: "admin-report-MA-settlement-chartAccount"
  }, {
    path: "/admin/report/MA/settlement/ministry",
    component: _226939a8,
    name: "admin-report-MA-settlement-ministry"
  }, {
    path: "/admin/PDFInvoice/:id",
    component: _30dc45ce,
    name: "admin-PDFInvoice-id"
  }, {
    path: "/admin/PDFInvoiceSummary/:id",
    component: _70237d99,
    name: "admin-PDFInvoiceSummary-id"
  }, {
    path: "/admin/PDFQuotation/:id",
    component: _a3d2a890,
    name: "admin-PDFQuotation-id"
  }, {
    path: "/admin/PDFTicket/:id",
    component: _8ba954a8,
    name: "admin-PDFTicket-id"
  }, {
    path: "/admin/PDFTransfer/:id",
    component: _2987d1cb,
    name: "admin-PDFTransfer-id"
  }, {
    path: "/admin/product/:id",
    component: _37040c5d,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _ce81df78,
    name: "admin-stock-id"
  }, {
    path: "/admin/web_product/:id",
    component: _2b15649c,
    name: "admin-web_product-id"
  }, {
    path: "/product/:id",
    component: _1abec91d,
    name: "product-id"
  }, {
    path: "/product/:id/product-details",
    component: _7214c6ef,
    name: "product-id-product-details"
  }, {
    path: "/",
    component: _4600e75c,
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
