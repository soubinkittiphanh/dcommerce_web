<template>
  <v-app light>
    <!-- <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed color="#01532B" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" :style="{ color: 'white' }" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-navigation-drawer class="elevation-6" :mini-variant="miniVariant" :clipped="clipped" dark v-model="drawer" fixed
      color="#01532B" app>
      <v-layout column align-center>
        <v-flex class="shadow mt-4 mb-4">
          <v-img :src="require(`~/assets/image/${this.companyData.dcLogo}`)" style="max-height: 1400px;" />
        </v-flex>
      </v-layout>
      <v-list>
        <!-- Home -->
        <v-list-item to="/admin" router exact>
          <v-list-item-action>
            <v-icon color="white">mdi mdi-home-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Home'" :style="{ color: 'white' }" />
          </v-list-item-content>
        </v-list-item>
        <!-- Group A -->
        <v-divider></v-divider>
        <!-- :disabled="!isGranted(menu.code)"  -->
        <v-list-group v-for="(menu, i) in myMenu" :key="i" :prepend-icon="menu.icon" color="white"
          v-model="menu.expand">
          <template v-slot:activator>
            <!-- <template #activator> -->
            <v-list-item-content>
              <v-list-item-title style="color: white">{{ menu.llname }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- Group A menu items -->
          <v-list-item v-for="(item, i) in menu.menuLines" :key="i" :to="item.path" router exact
            :style="{ 'background-color': '#337555' }">
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.llname" :style="{ color: 'white' }" />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>

        <!-- <v-list-group :disabled="!isGranted(menu.code)" v-for="(menu, i) in menuGroup2" :key="i" :prepend-icon="menu.icon"
          color="white" v-model="menu.expand">
          <template v-slot:activator>

            <v-list-item-content>
              <v-list-item-title style="color: white">{{ menu.name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          Group A menu items
          <v-list-item v-for="(item, i) in menu.menuList" :key="i" :to="item.to" router exact
            :style="{ 'background-color': '#004222' }">
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" :style="{ color: 'white' }" />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group> -->
        <v-list-item to="/admin/logout" router exact>
          <v-list-item-action>
            <v-icon color="white">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ອອກຈາກລະບົບ'" :style="{ color: 'white' }" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ************** => Header Appbar ************** -->
    <!-- <v-app-bar app light clipped-left clipped-right>
      <v-row no-gutters align="center">
        <v-col cols="2">

        </v-col>
        <v-col cols="4">
        </v-col>
        <v-col cols="6">
          <v-chip class="ml-10" color="primary" variant="outlined">
            Dcommerce
          </v-chip>
        </v-col>
      </v-row>
    </v-app-bar> -->
    <!-- ************** Header Appbar <= ************** -->
    <v-main :key="mainComponentKey">
      <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
        <v-card>
          <v-card-title>ເລືອກ Terminal </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="terminalSelected" column>
              <v-radio v-for="terminal in findAllTerminal" :key="terminal.id"
                :label="terminal.name + ' - ' + terminal.description" :value="terminal.id"></v-radio>
              <!-- <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio> -->
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="#01532B" rounded variant="text" @click="switchTerminal">
              ເລືອກ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-spacer></v-spacer>
      <span>&copy;{{ new Date().getFullYear() }} Dcommerce: V.R23.0.5 user: {{ user.cus_name }} id: {{ user.id }} </span>
      <v-chip v-if="findSelectedTerminal" class="ma-2" color="warning" variant="outlined" @click="terminalDialog = true">
        {{ currentTerminal['name'] }}
      </v-chip>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { hostName,mainCompanyInfo } from '~/common/api'
export default {
  // layout:"empty",
  data() {
    return {
      intervalId: null,
      terminalDialog: false,
      terminalSelected: 1,
      clipped: false,
      drawer: true,
      fixed: true,
      mainComponentKey: 1,
      groupAExpanded: false,
      menuGroup2: [
        {
          icon: "mdi mdi-chart-arc",
          name: 'ລາຍງານ',
          code: 'REPORT',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-file-chart',
              title: 'ຄົ້ນຫາຍຍອດຂາຍ ຕາມຜູ້ໃຊ້',
              to: '/admin/saleReportDetailByUser',
            },
            {
              icon: 'mdi mdi-file-chart',
              title: 'ຄົ້ນຫາຍອດຂາຍ ຕາມລູກຄ້າ',
              to: '/admin/saleReportDetailByCustomer',
            },
            {
              icon: 'mdi mdi-file-chart',
              title: 'ຄົ້ນຫາຍອດຂາຍ ຕາມສິນຄ້າ',
              to: '/admin/saleReportDetailByProduct',
            },
          ]
        },
        {
          icon: "mdi mdi-shopping",
          name: 'ຂົນສົ່ງ',
          code: 'SHIPPING',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-shopping',
              title: 'ຈັດການອໍເດີ',
              to: '/admin/orders',
            },
            {
              icon: 'mdi mdi-wardrobe',
              title: 'ເຄື່ອງເຂົ້າສາງ',
              to: '/admin/ordersIn',
            },
            {
              icon: 'mdi mdi-receipt-text-check',
              title: 'ອອກບິນຮັບເຄື່ອງ',
              to: '/admin/ordersOut',
            },
            {
              icon: 'mdi mdi-notebook-multiple',
              title: 'ອໍເດີທັງໝົດ',
              to: '/admin/ordersAll',
            },
            {
              icon: 'mdi-store-marker-outline',
              title: 'Vendor',
              to: '/admin/vendor',
            },
            // {
            //   icon: 'mdi mdi-tooltip-account',
            //   title: 'ລູກຄ້າ',
            //   to: '/admin/client',
            // },
          ]
        },
        {
          icon: "mdi mdi-printer",
          name: 'ການຂາຍ',
          code: 'POS',
          expand: false,
          menuList: [
            {
              icon: 'mdi-view-list',
              title: 'POS',
              to: '/pos',
            },
            {
              icon: 'mdi-receipt-text-arrow-right',
              title: 'ໃບສະເຫນີລາຄາ',
              to: '/admin/quotationList',
            },
            {
              icon: 'mdi-receipt-text-check-outline',
              title: 'ລາຍການບິນຂາຍ POS',
              to: '/admin/ordersFromPos',
            },
            {
              icon: 'mdi-receipt-text-check-outline',
              title: 'ລາຍການບິນຂາຍ Online',
              to: '/admin/ordersFromPosOnline',
            },
            {
              icon: 'mdi-receipt-text-check-outline',
              title: 'ຕິດຕາມ COD',
              to: '/admin/ordersFromPosOnlineCOD',
            },
            {
              icon: 'mdi-receipt-text-remove-outline',
              title: 'ຍົກເລີກ - ສົ່ງຄືນ',
              to: '/admin/ordersFromPosCancel',
            },
          ]
        },
        {
          icon: "mdi mdi-bottle-wine",
          name: 'ສິນຄ້າ',
          code: 'PRODUCT',
          expand: false,
          menuList: [
            {
              icon: 'mdi-view-list',
              title: 'ຈັດການໝວດສິນຄ້າ',
              to: '/admin/category',
            },
            {
              icon: 'mdi-barcode',
              title: 'ລາຍການສິນຄ້າ',
              to: '/admin/product/productlist',
            },
            {
              icon: 'mdi mdi-bottle-wine',
              title: 'ຫົວໜ່ວຍສິນຄ້າ',
              to: '/admin/unit',
            },

          ]
        },
        {
          icon: "mdi mdi-warehouse",
          name: 'ສາງສິນຄ້າ',
          code: 'INVENTORY',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-warehouse',
              title: 'ຈັດການສາງສິນຄ້າ',
              to: '/admin/location',
            },

            // {
            //   icon: 'mdi mdi-speedometer-slow',
            //   title: 'ສິນຄ້າໃກ້ໝົດ',
            //   to: '/admin/minstock',
            // },
            {
              icon: 'mdi mdi-transfer',
              title: 'ໂອນສາງ',
              to: '/admin/transfer',
            },
          ]
        },
        {
          icon: "mdi mdi-account-box-multiple-outline",
          name: 'ລູກຄ້າ',
          code: 'CLIENT',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-account-box-multiple-outline',
              title: 'ຈັດການລູກຄ້າ',
              to: '/admin/client',
            },
            {
              icon: 'mdi-receipt-text-clock-outline',
              title: 'ລູກຄ້າຕິດຫນີ້',
              to: '/admin/ordersFromPosCredit',
            },
            {
              icon: 'mdi mdi-file-search-outline',
              title: 'ລາຍງານ ລູກຄ້າຕິດຫນີ້',
              to: '/admin/ordersFromPosSummaryByCustomer',
            },
          ]
        },
        {
          icon: "mdi mdi-source-branch",
          name: 'ຮ້ານຄ້າ',
          code: 'BRANCH',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-source-branch',
              title: 'ຈັດການຮ້ານຄ້າ',
              to: '/admin/company',
            },
            {
              icon: 'mdi mdi-network-pos',
              title: 'ຈັດການສາຂາ',
              to: '/admin/terminal',
            },
          ]
        },

        {
          icon: "mdi mdi-calculator-variant",
          name: 'ບັນຊີ',
          code: 'ACCOUNT',
          expand: false,
          menuList: [
            {
              icon: 'mdi-currency-usd-off',
              title: 'ຈັດການອັດຕາແລກປ່ຽນ',
              to: '/admin/currency',
            },
            // {
            //   icon: 'mdi mdi-office-building',
            //   title: 'ຜັງບັນຊີ',
            //   to: '/admin/chartAccount',
            // },
            {
              icon: 'mdi mdi-cash-multiple',
              title: 'ຈັດການ ປະເພດຊຳລະ',
              to: '/admin/payment',
            },
            {
              icon: 'mdi-receipt-text-arrow-right-outline',
              title: 'ບັນຊີ ລາຍຈ່າຍ',
              to: '/admin/ap',
            },
            // {
            //   icon: 'mdi-receipt-text-arrow-left-outline',
            //   title: 'ບັນຊີ ລາຍຮັບ',
            //   to: '/admin/ar',
            // },
          ]
        },
        {
          icon: "mdi mdi-book-open-page-variant-outline",
          name: 'ຮຽນຮູ້',
          code: 'HELP',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-lifebuoy',
              title: 'ຄູ່ມືການນຳໃຊ້',
              to: '/admin/tutorial',
            },
          ]
        },
        {
          icon: "mdi mdi-database-arrow-up",
          name: 'Modules',
          code: 'MODULES',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-chevron-triple-up',
              title: 'ຟັງຊັ່ນເສີມ',
              to: '/admin/authoritysss',
            },
          ]
        },
        {
          icon: "mdi mdi-cog",
          name: 'ຕັ້ງຄ່າ',
          code: 'SETTING',
          expand: false,
          menuList: [
            {
              icon: 'mdi mdi-menu',
              title: 'ກຸ່ມເມນູ',
              to: '/admin/menuHeader',
            },
            {
              icon: 'mdi mdi-menu-close',
              title: 'ເມນູຍ່ອຍ',
              to: '/admin/menuLine',
            },
            {
              icon: 'mdi mdi-security',
              title: 'ສິດທີການໃຊ້ງານ',
              to: '/admin/authority',
            },
            {
              icon: 'mdi mdi-account-multiple',
              title: 'ກຸ່ມຜູ້ໃຊ້ງານ',
              to: '/admin/group',
            },
            {
              icon: 'mdi-account',
              title: 'ຜູ້ໃຊ້ງານ',
              to: '/admin/user',
            },
          ]
        },
      ],
      myMenu:[],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  created() {
    console.log(`TERMINAL SELECTED CREATED= >>>>>>>> ${this.findSelectedTerminal}`);
    this.terminalSelected = this.findSelectedTerminal
    this.checkAllInitData()
  },
  mounted() {
    //******** Check if all common variable is ready ******** */
    // this.intervalId = setInterval(this.checkAllInitData, 1000);
    //******** Listen for browser reload ******** */
    this.loadMenu()
    window.addEventListener('beforeunload', this.checkAllInitData);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.clearInterval);
  },
  computed: {
    ...mapGetters(['findSelectedTerminal', 'findAllTerminal', 'findAllLocation', 'currentSelectedLocation']),
    user() {
      return this.$auth.user || ''
    },
    companyData(){
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`);
      return mainCompanyInfo()
    },
    currentTerminal() {
      console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
    },
  },
  methods: {
    isGranted(code) {
      const grantedCodes = this.user.userGroup.authorities.map(el => el.code)
      console.log(`Grand code len: ${grantedCodes.length}`);
      if (grantedCodes.includes(code)) return true
      return false
    },

    clearInterval() {
      clearInterval(this.intervalId);
    },
    ...mapActions(['initiateData']),
    checkAllInitData() {
      // setInterval(() => {
      console.info(`...loading ${this.findAllTerminal.length}... ${new Date().toLocaleTimeString()}`);
      if (this.findAllTerminal.length == 0) {
        console.error(`Data missing need to reload`)
        this.initiateData(this.$axios)
      }
      if (!this.currentSelectedLocation) {
        this.terminalDialog = true
      }
      // }, 1000);
    },
    async loadMenu() {
      console.log(`===> Loadin user menu`);
      const response = await this.$axios.get(`api/group/find/${this.user.userGroup.id}`)
      this.myMenu = response.data['menuHeaders']
    },
    switchTerminal() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(el => el.id == this.findAllTerminal.find(el => el.id == this.terminalSelected)['locationId'])
      this.setSelectedLocation(location)
      //********** refresh component so the data will be update fresh **********//
      this.mainComponentKey += 1;
      this.terminalDialog = false
    },
    ...mapActions(['setSelectedTerminal', 'setSelectedLocation']),
  }
}
</script>
<style scoped>
* {
  font-family: 'noto sans lao';
}
</style>
