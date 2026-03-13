<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການສິນຄ້າ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <v-dialog v-model="editProductForm" max-width="1200px">
      <CategoryForm :key="productFormKey" @close-dialog="editProductForm = false" 
        @refresh="fetchData" :product="selectedProduct"></CategoryForm>
    </v-dialog>
    <v-dialog v-model="productFormCreate" max-width="1200px">
      <product-form-create @close-dialog="productFormCreate = false" @refresh="fetchData">
      </product-form-create>
    </v-dialog>

    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form :key="priceListFormKey" @close-dialog="priceListDialog = false" :record-id="pricingRecordId"
        @refresh="fetchData">
      </price-list-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn class="primary" size="large" variant="outlined" @click="rebuildStock" rounded>
              <span class="mdi mdi-update"></span>
              Rebuild stock
            </v-btn>
          </v-col>
        </v-row>


      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="loaddata" :items-per-page="pageLine">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ສິນຄ້າທັງຫມົດ: {{ loaddata.length }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn size="large" variant="outlined" @click="productFormCreate = true" class="primary" rounded>
              <span class="mdi mdi-note-plus-outline"></span>
              ສ້າງສິນຄ້າໃຫມ່
            </v-btn>


          </v-toolbar>
        </template>

        <template v-slot:[`item.functionEdit`]="{ item }">


          <v-btn color="primary" text @click="editItem(item)
      wallet = true
        ">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
        <!-- <template v-slot:[`item.functionStock`]="{ item }">
          <v-btn color="primary" text @click="triggerCardForm(item)
          wallet = true
            ">
            <i class="fa fa-cart-plus"></i>
          </v-btn>
        </template> -->
        <!-- <template v-slot:[`item.pricing`]="{ item }">
          <v-btn color="primary" text @click="triggerPriceListForm(item)
          wallet = true
            ">
            <v-icon>mdi mdi-currency-usd</v-icon>
          </v-btn>
        </template> -->
        <!-- <template v-slot:[`item.functionStockView`]="{ item }">
          <v-btn color="primary" text @click="editStock(item)
          wallet = true
            ">
            <i class="fa fa-eye"></i>
          </v-btn>
        </template> -->

        <template v-slot:[`item.webProductGroups`]="{ item }">
          {{ item.webProductGroups.length > 0 ? item.webProductGroups[0]['name'] : '' }}
        </template>

        <template v-slot:[`item.cost_price`]="{ item }">
          {{ formatNumber(item.cost_price) }}
        </template>

        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatNumber(item.pro_price) }}
        </template>

        <template v-slot:[`item.pro_card_count`]="{ item }">
          {{ item.pro_card_count }}
        </template>
        <!-- <template v-slot:[`item.minStock`]="{ item }">
          {{ formatNumber(item.minStock) }}
        </template> -->
        <!-- <template v-slot:[`item.status`]="{ item }">
          <v-chip class="ma-2"
            :color="verifyStockStatus(item.minStock, item.pro_card_count).includes(`In`) ? `green` : verifyStockStatus(item.minStock, item.pro_card_count).includes(`Out`) ? `red` : `orange`"
            text-color="white">
            {{ verifyStockStatus(item.minStock, item.pro_card_count) }}
          </v-chip>

        </template> -->
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import { getFormatNum } from '~/common'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapActions, mapGetters } from 'vuex'
import CategoryForm from '@/components/WebProductCategoryForm.vue';
export default {
  components: { ProductForm, CategoryForm, PriceListForm },
  middleware: 'auths',
  data() {
    return {
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      editProductForm: false,
      selectedProduct: null,
      stockFormKey: 1,
      timer: null,
      headers: [
        {
          text: 'RECID',
          align: 'center',
          value: 'id',
        },
        {
          text: 'Company',
          align: 'center',
          value: 'company.mnemonic',
        },
        {
          text: 'CODE',
          align: 'center',
          value: 'pro_id',
        },
        { text: 'ຊື່ສິນຄ້າ', align: 'center', value: 'pro_name' },
        // { text: 'ຮ້ານ', align: 'center', value: 'pro_outlet_name' },
        { text: 'ຫມວດສິນຄ້າ', align: 'center', value: 'category.categ_name' },
        { text: 'ຫມວດສິນຄ້າ ໜ້າເວັບ', align: 'center', value: 'webProductGroups' },
        { text: 'ລາຄາ', align: 'center', value: 'pro_price' },
        // { text: 'ສະຖານະ', align: 'center', value: 'pro_status' },
        // { text: 'minStock', align: 'center', value: 'minStock' },
        // { text: 'Stock', align: 'center', value: 'pro_card_count' },
        // { text: 'Status', align: 'center', value: 'status' },
        { text: 'cost', align: 'center', value: 'cost_price' },
        // {
        //   text: 'ເພີ່ມສະຕັອກ',
        //   align: 'center',
        //   value: 'functionStock',
        //   sortable: false,
        // },
        // {
        //   text: 'ເບິ່ງສະຕັອກ',
        //   align: 'center',
        //   value: 'functionStockView',
        //   sortable: false,
        // },
        // {
        //   text: 'ຈັດການລາຄາ',
        //   align: 'center',
        //   value: 'pricing',
        //   sortable: false,
        // },
        {
          text: 'ແກ້ໄຂ',
          align: 'center',
          value: 'functionEdit',
          sortable: false,
        },
      ],
    }
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
  },
  async mounted() {
    await this.loadCardCategory()
    await this.fetchData()
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),

  },
  methods: {
    async importStock() {
      const stockImportList = [{ 'inputter': 1000, 'product_id': 1001, 'stockCardQty': 4, 'totalCost': 320000, 'productId': 1, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1002, 'stockCardQty': 1, 'totalCost': 230000, 'productId': 2, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1003, 'stockCardQty': 8, 'totalCost': 0, 'productId': 3, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1004, 'stockCardQty': 1, 'totalCost': 457000, 'productId': 4, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1005, 'stockCardQty': 12, 'totalCost': 0, 'productId': 5, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1006, 'stockCardQty': 2, 'totalCost': 358000, 'productId': 6, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1007, 'stockCardQty': 2, 'totalCost': 348000, 'productId': 7, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1008, 'stockCardQty': 2, 'totalCost': 400000, 'productId': 8, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1009, 'stockCardQty': 2, 'totalCost': 380000, 'productId': 9, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1010, 'stockCardQty': 2, 'totalCost': 577000, 'productId': 10, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1011, 'stockCardQty': 2, 'totalCost': 636000, 'productId': 11, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1012, 'stockCardQty': 2, 'totalCost': 636000, 'productId': 12, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1013, 'stockCardQty': 6, 'totalCost': 307000, 'productId': 13, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1014, 'stockCardQty': 6, 'totalCost': 307000, 'productId': 14, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1015, 'stockCardQty': 9, 'totalCost': 307000, 'productId': 15, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1016, 'stockCardQty': 2, 'totalCost': 0, 'productId': 16, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1017, 'stockCardQty': 4, 'totalCost': 0, 'productId': 17, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1018, 'stockCardQty': 12, 'totalCost': 0, 'productId': 18, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1019, 'stockCardQty': 4, 'totalCost': 0, 'productId': 19, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1020, 'stockCardQty': 4, 'totalCost': 0, 'productId': 20, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1021, 'stockCardQty': 2, 'totalCost': 250000, 'productId': 21, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1022, 'stockCardQty': 4, 'totalCost': 655000, 'productId': 22, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1023, 'stockCardQty': 6, 'totalCost': 0, 'productId': 23, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1024, 'stockCardQty': 12, 'totalCost': 0, 'productId': 24, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1025, 'stockCardQty': 3, 'totalCost': 0, 'productId': 25, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1026, 'stockCardQty': 9, 'totalCost': 0, 'productId': 26, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1027, 'stockCardQty': 2, 'totalCost': 0, 'productId': 27, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1028, 'stockCardQty': 2, 'totalCost': 240000, 'productId': 28, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1029, 'stockCardQty': 0, 'totalCost': 0, 'productId': 29, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1030, 'stockCardQty': 0, 'totalCost': 0, 'productId': 30, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1031, 'stockCardQty': 1, 'totalCost': 520000, 'productId': 31, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1032, 'stockCardQty': 4, 'totalCost': 355000, 'productId': 32, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1033, 'stockCardQty': 1, 'totalCost': 587000, 'productId': 33, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1034, 'stockCardQty': 18, 'totalCost': 0, 'productId': 34, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1035, 'stockCardQty': 8, 'totalCost': 0, 'productId': 35, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1036, 'stockCardQty': 2, 'totalCost': 447000, 'productId': 36, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1037, 'stockCardQty': 2, 'totalCost': 0, 'productId': 37, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1038, 'stockCardQty': 2, 'totalCost': 385000, 'productId': 38, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1039, 'stockCardQty': 2, 'totalCost': 0, 'productId': 39, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1040, 'stockCardQty': 36, 'totalCost': 0, 'productId': 40, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1041, 'stockCardQty': 1, 'totalCost': 0, 'productId': 41, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1042, 'stockCardQty': 6, 'totalCost': 0, 'productId': 42, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1043, 'stockCardQty': 6, 'totalCost': 254000, 'productId': 43, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1044, 'stockCardQty': 24, 'totalCost': 0, 'productId': 44, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1045, 'stockCardQty': 36, 'totalCost': 283000, 'productId': 45, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1046, 'stockCardQty': 4, 'totalCost': 0, 'productId': 46, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1047, 'stockCardQty': 1, 'totalCost': 925000, 'productId': 47, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1048, 'stockCardQty': 1, 'totalCost': 925000, 'productId': 48, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1049, 'stockCardQty': 6, 'totalCost': 0, 'productId': 49, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1050, 'stockCardQty': 2, 'totalCost': 450000, 'productId': 50, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1051, 'stockCardQty': 1, 'totalCost': 475000, 'productId': 51, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1052, 'stockCardQty': 1, 'totalCost': 400000, 'productId': 52, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1053, 'stockCardQty': 1, 'totalCost': 400000, 'productId': 53, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1054, 'stockCardQty': 0, 'totalCost': 0, 'productId': 54, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1055, 'stockCardQty': 2, 'totalCost': 705000, 'productId': 55, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1056, 'stockCardQty': 10, 'totalCost': 0, 'productId': 56, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1057, 'stockCardQty': 1, 'totalCost': 741000, 'productId': 57, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1058, 'stockCardQty': 1, 'totalCost': 705000, 'productId': 58, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1059, 'stockCardQty': 1, 'totalCost': 708000, 'productId': 59, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1060, 'stockCardQty': 4, 'totalCost': 567000, 'productId': 60, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1061, 'stockCardQty': 1, 'totalCost': 0, 'productId': 61, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1062, 'stockCardQty': 6, 'totalCost': 0, 'productId': 62, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1063, 'stockCardQty': 2, 'totalCost': 735000, 'productId': 63, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1064, 'stockCardQty': 1, 'totalCost': 512000, 'productId': 64, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1065, 'stockCardQty': 4, 'totalCost': 0, 'productId': 65, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1066, 'stockCardQty': 1, 'totalCost': 320000, 'productId': 66, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1067, 'stockCardQty': 12, 'totalCost': 0, 'productId': 67, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1068, 'stockCardQty': 6, 'totalCost': 0, 'productId': 68, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1069, 'stockCardQty': 2, 'totalCost': 795000, 'productId': 69, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1070, 'stockCardQty': 2, 'totalCost': 0, 'productId': 70, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1071, 'stockCardQty': 10, 'totalCost': 0, 'productId': 71, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1072, 'stockCardQty': 1, 'totalCost': 225000, 'productId': 72, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1073, 'stockCardQty': 8, 'totalCost': 0, 'productId': 73, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1074, 'stockCardQty': 12, 'totalCost': 0, 'productId': 74, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1075, 'stockCardQty': 4, 'totalCost': 300000, 'productId': 75, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1076, 'stockCardQty': 2, 'totalCost': 362000, 'productId': 76, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1077, 'stockCardQty': 1, 'totalCost': 358000, 'productId': 77, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1078, 'stockCardQty': 1, 'totalCost': 358000, 'productId': 78, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1079, 'stockCardQty': 6, 'totalCost': 414000, 'productId': 79, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1080, 'stockCardQty': 8, 'totalCost': 0, 'productId': 80, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1081, 'stockCardQty': 8, 'totalCost': 0, 'productId': 81, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1082, 'stockCardQty': 20, 'totalCost': 0, 'productId': 82, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1083, 'stockCardQty': 2, 'totalCost': 0, 'productId': 83, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1084, 'stockCardQty': 2, 'totalCost': 0, 'productId': 84, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1085, 'stockCardQty': 4, 'totalCost': 0, 'productId': 85, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1086, 'stockCardQty': 2, 'totalCost': 0, 'productId': 86, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1087, 'stockCardQty': 2, 'totalCost': 0, 'productId': 87, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1088, 'stockCardQty': 2, 'totalCost': 342000, 'productId': 88, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1089, 'stockCardQty': 2, 'totalCost': 400000, 'productId': 89, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1090, 'stockCardQty': 2, 'totalCost': 0, 'productId': 90, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1091, 'stockCardQty': 1, 'totalCost': 335000, 'productId': 91, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1092, 'stockCardQty': 4, 'totalCost': 328000, 'productId': 92, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1093, 'stockCardQty': 0, 'totalCost': 285000, 'productId': 93, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1094, 'stockCardQty': 2, 'totalCost': 580000, 'productId': 94, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1095, 'stockCardQty': 6, 'totalCost': 263000, 'productId': 95, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1096, 'stockCardQty': 18, 'totalCost': 330000, 'productId': 96, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1097, 'stockCardQty': 4, 'totalCost': 320000, 'productId': 97, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1098, 'stockCardQty': 0, 'totalCost': 0, 'productId': 98, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1099, 'stockCardQty': 60, 'totalCost': 0, 'productId': 99, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1100, 'stockCardQty': 6, 'totalCost': 0, 'productId': 100, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1101, 'stockCardQty': 20, 'totalCost': 0, 'productId': 101, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1102, 'stockCardQty': 6, 'totalCost': 290000, 'productId': 102, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1103, 'stockCardQty': 12, 'totalCost': 0, 'productId': 103, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1104, 'stockCardQty': 4, 'totalCost': 0, 'productId': 104, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1105, 'stockCardQty': 2, 'totalCost': 307000, 'productId': 105, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1106, 'stockCardQty': 2, 'totalCost': 533000, 'productId': 106, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1107, 'stockCardQty': 4, 'totalCost': 360000, 'productId': 107, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1108, 'stockCardQty': 6, 'totalCost': 240000, 'productId': 108, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1109, 'stockCardQty': 4, 'totalCost': 240000, 'productId': 109, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1110, 'stockCardQty': 4, 'totalCost': 0, 'productId': 110, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1111, 'stockCardQty': 6, 'totalCost': 0, 'productId': 111, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1112, 'stockCardQty': 2, 'totalCost': 725000, 'productId': 112, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1113, 'stockCardQty': 10, 'totalCost': 370000, 'productId': 113, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1114, 'stockCardQty': 36, 'totalCost': 125000, 'productId': 114, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1115, 'stockCardQty': 36, 'totalCost': 0, 'productId': 115, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1116, 'stockCardQty': 4, 'totalCost': 537000, 'productId': 116, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1117, 'stockCardQty': 2, 'totalCost': 480000, 'productId': 117, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1118, 'stockCardQty': 4, 'totalCost': 219000, 'productId': 118, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1119, 'stockCardQty': 2, 'totalCost': 239000, 'productId': 119, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1120, 'stockCardQty': 1, 'totalCost': 1231000, 'productId': 120, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1121, 'stockCardQty': 1, 'totalCost': 934000, 'productId': 121, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1122, 'stockCardQty': 1, 'totalCost': 900000, 'productId': 122, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1123, 'stockCardQty': 1, 'totalCost': 600000, 'productId': 123, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1124, 'stockCardQty': 2, 'totalCost': 0, 'productId': 124, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1125, 'stockCardQty': 12, 'totalCost': 0, 'productId': 125, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1126, 'stockCardQty': 1, 'totalCost': 785000, 'productId': 126, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1127, 'stockCardQty': 1, 'totalCost': 985000, 'productId': 127, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1128, 'stockCardQty': 12, 'totalCost': 0, 'productId': 128, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1129, 'stockCardQty': 1, 'totalCost': 0, 'productId': 129, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1130, 'stockCardQty': 6, 'totalCost': 0, 'productId': 130, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1131, 'stockCardQty': 2, 'totalCost': 0, 'productId': 131, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1132, 'stockCardQty': 0, 'totalCost': 0, 'productId': 132, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1133, 'stockCardQty': 1, 'totalCost': 507000, 'productId': 133, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1134, 'stockCardQty': 1, 'totalCost': 616000, 'productId': 134, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1135, 'stockCardQty': 4, 'totalCost': 0, 'productId': 135, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1136, 'stockCardQty': 1, 'totalCost': 400000, 'productId': 136, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1137, 'stockCardQty': 2, 'totalCost': 374000, 'productId': 137, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1138, 'stockCardQty': 2, 'totalCost': 374000, 'productId': 138, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1139, 'stockCardQty': 2, 'totalCost': 374000, 'productId': 139, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1140, 'stockCardQty': 2, 'totalCost': 384000, 'productId': 140, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1141, 'stockCardQty': 2, 'totalCost': 420000, 'productId': 141, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1142, 'stockCardQty': 2, 'totalCost': 390000, 'productId': 142, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1143, 'stockCardQty': 2, 'totalCost': 383000, 'productId': 143, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1144, 'stockCardQty': 2, 'totalCost': 440000, 'productId': 144, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1145, 'stockCardQty': 2, 'totalCost': 715000, 'productId': 145, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1146, 'stockCardQty': 2, 'totalCost': 527000, 'productId': 146, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1147, 'stockCardQty': 2, 'totalCost': 710000, 'productId': 147, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1148, 'stockCardQty': 2, 'totalCost': 0, 'productId': 148, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1149, 'stockCardQty': 2, 'totalCost': 378000, 'productId': 149, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1150, 'stockCardQty': 2, 'totalCost': 0, 'productId': 150, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1151, 'stockCardQty': 2, 'totalCost': 307000, 'productId': 151, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1152, 'stockCardQty': 2, 'totalCost': 0, 'productId': 152, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1153, 'stockCardQty': 2, 'totalCost': 0, 'productId': 153, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1154, 'stockCardQty': 2, 'totalCost': 0, 'productId': 154, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1155, 'stockCardQty': 12, 'totalCost': 0, 'productId': 155, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1156, 'stockCardQty': 6, 'totalCost': 0, 'productId': 156, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1157, 'stockCardQty': 2, 'totalCost': 0, 'productId': 157, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1158, 'stockCardQty': 12, 'totalCost': 0, 'productId': 158, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1159, 'stockCardQty': 2, 'totalCost': 396000, 'productId': 159, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1160, 'stockCardQty': 6, 'totalCost': 0, 'productId': 160, 'srcLocation': 1 },

      { 'inputter': 1000, 'product_id': 1161, 'stockCardQty': 20, 'totalCost': 0, 'productId': 161, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1162, 'stockCardQty': 12, 'totalCost': 0, 'productId': 162, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1163, 'stockCardQty': 48, 'totalCost': 0, 'productId': 163, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1164, 'stockCardQty': 0, 'totalCost': 0, 'productId': 164, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1165, 'stockCardQty': 6, 'totalCost': 0, 'productId': 165, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1166, 'stockCardQty': 18, 'totalCost': 0, 'productId': 166, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1167, 'stockCardQty': 2, 'totalCost': 0, 'productId': 167, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1168, 'stockCardQty': 4, 'totalCost': 0, 'productId': 168, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1169, 'stockCardQty': 2, 'totalCost': 0, 'productId': 169, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1170, 'stockCardQty': 2, 'totalCost': 0, 'productId': 170, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1171, 'stockCardQty': 2, 'totalCost': 0, 'productId': 171, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1172, 'stockCardQty': 1, 'totalCost': 0, 'productId': 172, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1173, 'stockCardQty': 4, 'totalCost': 0, 'productId': 173, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1174, 'stockCardQty': 24, 'totalCost': 0, 'productId': 174, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1175, 'stockCardQty': 4, 'totalCost': 0, 'productId': 175, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1176, 'stockCardQty': 1, 'totalCost': 0, 'productId': 176, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1177, 'stockCardQty': 2, 'totalCost': 0, 'productId': 177, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1178, 'stockCardQty': 6, 'totalCost': 0, 'productId': 178, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1179, 'stockCardQty': 2, 'totalCost': 0, 'productId': 179, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1180, 'stockCardQty': 2, 'totalCost': 0, 'productId': 180, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1181, 'stockCardQty': 4, 'totalCost': 0, 'productId': 181, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1182, 'stockCardQty': 4, 'totalCost': 0, 'productId': 182, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1183, 'stockCardQty': 0, 'totalCost': 0, 'productId': 183, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1184, 'stockCardQty': 4, 'totalCost': 0, 'productId': 184, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1185, 'stockCardQty': 2, 'totalCost': 0, 'productId': 185, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1186, 'stockCardQty': 4, 'totalCost': 0, 'productId': 186, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1187, 'stockCardQty': 4, 'totalCost': 0, 'productId': 187, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1188, 'stockCardQty': 1, 'totalCost': 0, 'productId': 188, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1189, 'stockCardQty': 2, 'totalCost': 525000, 'productId': 189, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1190, 'stockCardQty': 2, 'totalCost': 959000, 'productId': 190, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1191, 'stockCardQty': 2, 'totalCost': 0, 'productId': 191, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1192, 'stockCardQty': 2, 'totalCost': 238500, 'productId': 192, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1193, 'stockCardQty': 4, 'totalCost': 250000, 'productId': 193, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1194, 'stockCardQty': 6, 'totalCost': 0, 'productId': 194, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1195, 'stockCardQty': 2, 'totalCost': 0, 'productId': 195, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1196, 'stockCardQty': 1, 'totalCost': 636000, 'productId': 196, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1197, 'stockCardQty': 1, 'totalCost': 636000, 'productId': 197, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1198, 'stockCardQty': 1, 'totalCost': 700000, 'productId': 198, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1199, 'stockCardQty': 1, 'totalCost': 800000, 'productId': 199, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1200, 'stockCardQty': 1, 'totalCost': 775000, 'productId': 200, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1201, 'stockCardQty': 1, 'totalCost': 850000, 'productId': 201, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1202, 'stockCardQty': 1, 'totalCost': 795000, 'productId': 202, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1203, 'stockCardQty': 1, 'totalCost': 1300000, 'productId': 203, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1204, 'stockCardQty': 6, 'totalCost': 1700000, 'productId': 204, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1205, 'stockCardQty': 1, 'totalCost': 1150000, 'productId': 205, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1206, 'stockCardQty': 2, 'totalCost': 1100000, 'productId': 206, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1207, 'stockCardQty': 2, 'totalCost': 1092500, 'productId': 207, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1208, 'stockCardQty': 2, 'totalCost': 2345000, 'productId': 208, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1209, 'stockCardQty': 1, 'totalCost': 845000, 'productId': 209, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1210, 'stockCardQty': 1, 'totalCost': 993000, 'productId': 210, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1211, 'stockCardQty': 1, 'totalCost': 1033000, 'productId': 211, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1212, 'stockCardQty': 1, 'totalCost': 954000, 'productId': 212, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1213, 'stockCardQty': 1, 'totalCost': 0, 'productId': 213, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1214, 'stockCardQty': 1, 'totalCost': 965000, 'productId': 214, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1215, 'stockCardQty': 1, 'totalCost': 834000, 'productId': 215, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1216, 'stockCardQty': 1, 'totalCost': 1172300, 'productId': 216, 'srcLocation': 1 },

      { 'inputter': 1000, 'product_id': 1217, 'stockCardQty': 1, 'totalCost': 577000, 'productId': 217, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1218, 'stockCardQty': 1, 'totalCost': 0, 'productId': 218, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1219, 'stockCardQty': 1, 'totalCost': 616000, 'productId': 219, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1220, 'stockCardQty': 1, 'totalCost': 487500, 'productId': 220, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1221, 'stockCardQty': 1, 'totalCost': 948000, 'productId': 221, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1222, 'stockCardQty': 0, 'totalCost': 620500, 'productId': 222, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1223, 'stockCardQty': 4, 'totalCost': 600000, 'productId': 223, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1224, 'stockCardQty': 10, 'totalCost': 616000, 'productId': 224, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1225, 'stockCardQty': 36, 'totalCost': 530000, 'productId': 225, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1226, 'stockCardQty': 1, 'totalCost': 420000, 'productId': 226, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1227, 'stockCardQty': 1, 'totalCost': 557000, 'productId': 227, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1228, 'stockCardQty': 1, 'totalCost': 497000, 'productId': 228, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1229, 'stockCardQty': 1, 'totalCost': 378100, 'productId': 229, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1230, 'stockCardQty': 8, 'totalCost': 270000, 'productId': 230, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1231, 'stockCardQty': 8, 'totalCost': 338200, 'productId': 231, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1232, 'stockCardQty': 4, 'totalCost': 497000, 'productId': 232, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1233, 'stockCardQty': 2, 'totalCost': 290000, 'productId': 233, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1234, 'stockCardQty': 2, 'totalCost': 457000, 'productId': 234, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1235, 'stockCardQty': 2, 'totalCost': 457000, 'productId': 235, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1236, 'stockCardQty': 2, 'totalCost': 440000, 'productId': 236, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1237, 'stockCardQty': 2, 'totalCost': 330000, 'productId': 237, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1238, 'stockCardQty': 2, 'totalCost': 513000, 'productId': 238, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1239, 'stockCardQty': 1, 'totalCost': 446000, 'productId': 239, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1240, 'stockCardQty': 1, 'totalCost': 417000, 'productId': 240, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1241, 'stockCardQty': 2, 'totalCost': 397000, 'productId': 241, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1242, 'stockCardQty': 12, 'totalCost': 490000, 'productId': 242, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1243, 'stockCardQty': 1, 'totalCost': 642000, 'productId': 243, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1244, 'stockCardQty': 1, 'totalCost': 0, 'productId': 244, 'srcLocation': 1 },

      { 'inputter': 1000, 'product_id': 1245, 'stockCardQty': 1, 'totalCost': 450000, 'productId': 245, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1246, 'stockCardQty': 1, 'totalCost': 650000, 'productId': 246, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1247, 'stockCardQty': 2, 'totalCost': 315000, 'productId': 247, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1248, 'stockCardQty': 6, 'totalCost': 200000, 'productId': 248, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1249, 'stockCardQty': 12, 'totalCost': 185000, 'productId': 249, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1250, 'stockCardQty': 12, 'totalCost': 185000, 'productId': 250, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1251, 'stockCardQty': 8, 'totalCost': 540000, 'productId': 251, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1252, 'stockCardQty': 4, 'totalCost': 540000, 'productId': 252, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1253, 'stockCardQty': 8, 'totalCost': 500000, 'productId': 253, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1254, 'stockCardQty': 2, 'totalCost': 500000, 'productId': 254, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1255, 'stockCardQty': 6, 'totalCost': 420000, 'productId': 255, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1256, 'stockCardQty': 1, 'totalCost': 540000, 'productId': 256, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1257, 'stockCardQty': 1, 'totalCost': 610000, 'productId': 257, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1258, 'stockCardQty': 8, 'totalCost': 470000, 'productId': 258, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1259, 'stockCardQty': 8, 'totalCost': 410000, 'productId': 259, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1260, 'stockCardQty': 4, 'totalCost': 325000, 'productId': 260, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1261, 'stockCardQty': 2, 'totalCost': 360000, 'productId': 261, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1262, 'stockCardQty': 2, 'totalCost': 340000, 'productId': 262, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1263, 'stockCardQty': 2, 'totalCost': 220000, 'productId': 263, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1264, 'stockCardQty': 6, 'totalCost': 210000, 'productId': 264, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1265, 'stockCardQty': 6, 'totalCost': 130000, 'productId': 265, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1266, 'stockCardQty': 6, 'totalCost': 130000, 'productId': 266, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1267, 'stockCardQty': 6, 'totalCost': 130000, 'productId': 267, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1268, 'stockCardQty': 6, 'totalCost': 130000, 'productId': 268, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1269, 'stockCardQty': 6, 'totalCost': 140000, 'productId': 269, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1270, 'stockCardQty': 6, 'totalCost': 140000, 'productId': 270, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1271, 'stockCardQty': 6, 'totalCost': 140000, 'productId': 271, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1272, 'stockCardQty': 0, 'totalCost': 0, 'productId': 272, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1273, 'stockCardQty': 0, 'totalCost': 0, 'productId': 273, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1274, 'stockCardQty': 0, 'totalCost': 0, 'productId': 274, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1275, 'stockCardQty': 0, 'totalCost': 0, 'productId': 275, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1276, 'stockCardQty': 0, 'totalCost': 0, 'productId': 276, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1277, 'stockCardQty': 0, 'totalCost': 0, 'productId': 277, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1278, 'stockCardQty': 0, 'totalCost': 0, 'productId': 278, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1279, 'stockCardQty': 0, 'totalCost': 0, 'productId': 279, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1280, 'stockCardQty': 0, 'totalCost': 0, 'productId': 280, 'srcLocation': 1 },
      { 'inputter': 1000, 'product_id': 1281, 'stockCardQty': 0, 'totalCost': 0, 'productId': 281, 'srcLocation': 1 },
      ]
      this.isloading = true
      for (const iterator of stockImportList) {
        let isError = false
        await this.$axios
          .post('/api/card/bulkCreate', iterator)
          .then((res) => {
            console.log(res.data)
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          })
          .catch((error) => {
            console.log(error)
            swalError2(this.$swal, "Error", error.response.data)
            isError = true
            this.isloading = false
          });
        if (isError) break;
        this.isloading = false
      }
    },
    triggerPriceListForm(item) {
      this.pricingRecordId = item.id
      this.priceListFormKey += 1;
      this.priceListDialog = true;
    },
    formatNumber(value) {
      return getFormatNum(value)
    },
    verifyStockStatus(minStock, CurStock) {
      let statusStock = '';
      CurStock == 0 ? statusStock = 'Out of stock' : minStock < CurStock ? statusStock = 'In stock' : statusStock = 'Low stock'
      return statusStock;
    },

    async fetchData() {
      console.log(`PRODUCT LIST ===>`);
      this.isloading = true
      // https://nodejsclusters-124154-0.cloudclusters.net/product_f
      await this.$axios
        .get(`/api/product/find`)
        .then((res) => {
          this.loaddata = res.data
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
    editItem(item) {
      this.productFormKey += 1
      this.selectedProduct = item
      this.editProductForm = true;
      // const obj=JSON.stringify(idx)
      // this.$router.push(`/admin/product/${idx.pro_id}`)
    },
    editStock(idx) {
      console.log('ID ' + idx.pro_id)
      console.log('NAME ' + idx.pro_name)
      console.log('OBJ ' + Object.keys(idx))
      // const obj=JSON.stringify(idx)
      this.$router.push(`/admin/stock/${idx.pro_id}`)
    },

    attachFile(payload) {
      this.carddata.length = 0
      const file = payload // in case vuetify file input
      // this.files = payload
      const reader = new FileReader()
      if (file) {
        console.log('FILE LEN: ' + file)
        reader.onload = (res) => {
          this.content = res.target.result
          console.log('Data content => : ' + this.content)
          const arr = this.content.replace(/\r\n/g, '\n').split('\n') // filter text line by line
          const tempCardData = arr.filter((el) => el !== '' && el.length >= 10) // filter only useable value and trim out null line
          let i = 0
          tempCardData.forEach((element) => {
            // loop and push to real datacart
            i++
            console.log(`Data loop ${i} ${element}`)
            this.carddata.push(
              element.replace('	', '|').replace('	', '|').split("'").pop()
            ) // filter only valid number after ' and push to cartdata
            console.log(element.split("'").pop())
          })
          console.log('CARD DATA: ' + this.carddata)
        }
        reader.onerror = (err) => console.log(err)
        reader.readAsText(file)
        // URL.revokeObjectURL(file) // free memory
      }
      // var file = FileReader.FileReader()
    },

    loadCardCategory() {
      this.isloading = true
      this.$axios
        .get('stockcate_f')
        .then((res) => {
          this.cardType = res.data.map((el) => {
            return {
              card_type_code: el.card_type_code,
              card_type_name: el.card_type_name,
            }
          })
          this.selectedCardType = this.cardType[0].card_type_code
          console.log('CARD LEN: ' + this.cardType.length)
          console.log('CARD LEN: ' + this.cardType[0].card_type_code)
          this.isloading = false
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.isloading = false
        })
    },
    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true
        await this.$axios.put("/api/product/stockcount").then(response => {
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          this.fetchData()
        }).catch(error => {
          swalError2(this.$swal, "Error", error.response.data)
        })
        this.isloading = false
      }
    }
  },
}
</script>