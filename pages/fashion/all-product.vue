<template>
  <div>
    <!-- category bar -->
    <v-row justify="center" class="text-center mt-0">
      <v-col cols="12" sm="2" md="2">
        <v-navigation-drawer v-model="drawer">
          <v-list color="#F2F2F2" class="category-list">
            <h2>ໝວດໝູ່ສິນຄ້າ {{ productList.length }}</h2>
            <template v-for="(item, i) in categoryItems">
              <v-list-item v-if="!item.subGroup" :key="i" class="text-start">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-group
                v-else
                :key="item.text"
                v-model="item.subGroupOpen"
                class="text-start"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="(subItem, j) in item.subItems"
                  :key="j"
                  class="ml-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ subItem.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="12" sm="10" md="10">
        <!-- breadcrumb -->
        <v-row>
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-arrow-right-thin</v-icon>
            </template>
          </v-breadcrumbs>
        </v-row>
        <!-- product card -->
        <v-row justify="center" class="text-center">
          <v-col v-for="product in productList" :key="product.id" cols="12" sm="3" md="3">
            <all-product :product-name="product['pro_name']" :category-name="product['pro_name']" :productPrice="product['pro_price']" :productImage="product['images'][0].img_path">
            </all-product>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { hostName } from '~/common/api'
export default {
  layout: "fashion",
  name: 'IndexPage',
  data() {
    return {
      drawer: true,
      items: [
        {
          text: 'ໜ້າຫຼັກ',
          disabled: false,
          href: 'index',
        },
        {
          text: 'ສິນຄ້າທັງໝົດ',
          disabled: true,
          href: 'all-product',
        },
      ],
      selectedItem: 1,
      categoryItems: [
        { text: 'ຊຸດແບນ POEM' },
        { text: 'ຊຸດ Dress' },
        { text: 'ຊຸດ ລາຕີຍາວ' },
        { text: 'ຊຸດ ເຊັດ' },
        {
          text: 'ຊຸດ ສູດ',
          subGroup: true,
          subGroupOpen: false,
          subItems: [{ text: 'ຊຸດຜູ້ຊາຍ' }, { text: 'ຊຸດຜູ້ຍິງ' }],
        },
        { text: 'ຊຸດ ງານປ້າຍ' },
        { text: 'ເສື້ອ' },
        {
          text: 'ສິນຄ້າອື່ນໆ',
          subGroup: true,
          subGroupOpen: false,
          subItems: [{ text: 'ເກີບ' }, { text: 'ໝວກ' }, { text: 'ກະເປົາ' }],
        },
      ],
      webCategoryList:[]
    }
  },
  async created() {
    await this.loadCategory()
  },
  computed:{
    host() {
      return hostName()
    },
    productList(){
      const proList = []
      for (const iterator of this.webCategoryList) {
        for (const product of iterator.products) {
          proList.push(product)
        }
      }
      return proList;
    }
  },
  methods: {
    async loadCategory() {
      try {
        // this.isloading = true
        const response = await this.$axios.get('/webproductgroup/find')
        // this.isloading = false
        console.info(`Category found ${JSON.stringify(response)}`)
        this.webCategoryList = response.data
        console.info(`Category found ${JSON.stringify(this.webCategoryList)}`)
      } catch (error) {
        // swalError2(this.$swal, 'Error', 'Could no load category ' + JSON.stringify(error))
      }
    },
  },
}
</script>

<style>
.category-list {
  height: 100%;
}
</style>
