<template>
  <v-app light>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      class="elevation-6"
      :mini-variant="miniVariant"
      :clipped="clipped"
      dark
      v-model="drawer"
      fixed
      color="#01532B"
      app
    >
      <v-layout column align-center>
        <v-flex class="shadow mt-4 mb-4">
          <v-img
            :src="require(`~/assets/image/${this.companyData.dcLogo}`)"
            style="max-height: 1400px"
          />
        </v-flex>
      </v-layout>
      <v-list>
        <!-- Home -->
        <!-- <v-list-item to="/admin/moneyAdvance" router exact>  -->
        <v-list-item to="/admin" router exact>
          <v-list-item-action>
            <v-icon color="white">mdi mdi-home-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              v-text="'ຫນ້າຫຼັກ'"
              :style="{ color: 'white' }"
            />
          </v-list-item-content>
        </v-list-item>
        <!-- Group A -->
        <v-divider></v-divider>
        <v-list-group
          v-for="(menu, i) in myMenu"
          :key="i"
          :prepend-icon="menu.icon"
          color="white"
          v-model="menu.expand"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style="color: white">{{
                menu.llname
              }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- Group A menu items -->
          <v-list-item
            v-for="(item, i) in menu.menuLines"
            :key="i"
            :to="item.path"
            router
            exact
            :style="{ 'background-color': '#337555' }"
          >
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.llname"
                :style="{ color: 'white' }"
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>

        <v-list-item to="/admin/logout" router exact>
          <v-list-item-action>
            <v-icon color="white">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              v-text="'ອອກຈາກລະບົບ'"
              :style="{ color: 'white' }"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main :key="mainComponentKey">
      <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
        <v-card>
          <v-card-title>ເລືອກ Terminal </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-radio-group v-model="terminalSelected" column>
              <v-radio
                v-for="terminal in findAllTerminal"
                :key="terminal.id"
                :label="terminal.name + ' - ' + terminal.description"
                :value="terminal.id"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="#01532B"
              rounded
              variant="text"
              @click="switchTerminal"
            >
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
      <span
        >&copy;{{ new Date().getFullYear() }} Dcommerce: V.R23.0.5 user:
        {{ user.cus_name }} id: {{ user.id }}
      </span>
      <!-- FIX 1: Add null check for currentTerminal -->
      <v-chip
        v-if="findSelectedTerminal && currentTerminal"
        class="ma-2"
        color="warning"
        variant="outlined"
        @click="terminalDialog = true"
      >
        {{ currentTerminal.name }}
      </v-chip>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { hostName, mainCompanyInfo } from '~/common/api'
export default {
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
      myMenu: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  created() {
    // FIX 2: Add null check before setting terminalSelected
    if (this.findSelectedTerminal) {
      this.terminalSelected = this.findSelectedTerminal
    }
  },
  mounted() {
    this.checkAllInitData()
    this.loadMenu()
    window.addEventListener('beforeunload', this.checkAllInitData)
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.clearInterval)
  },
  computed: {
    ...mapGetters([
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
      'currentSelectedLocation',
    ]),
    user() {
      return this.$auth.user || ''
    },
    companyData() {
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`)
      return mainCompanyInfo()
    },
    currentTerminal() {
      console.log(
        `ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`
      )
      // FIX 3: Add proper null checks
      if (!this.findAllTerminal || this.findAllTerminal.length === 0 || !this.findSelectedTerminal) {
        return null
      }
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      ) || null
    },
  },
  methods: {
    isGranted(code) {
      // FIX 4: Add null checks for user data
      if (!this.user || !this.user.userGroup || !this.user.userGroup.authorities) {
        return false
      }
      const grantedCodes = this.user.userGroup.authorities.map((el) => el.code)
      console.log(`Grand code len: ${grantedCodes.length}`)
      return grantedCodes.includes(code)
    },

    clearInterval() {
      clearInterval(this.intervalId)
    },
    ...mapActions(['initiateData']),
    checkAllInitData() {
      console.info(
        `...loading ${
          this.findAllTerminal.length
        }... ${new Date().toLocaleTimeString()}`
      )
      if (this.findAllTerminal.length == 0) {
        console.error(`Data missing need to reload`)
        this.initData()
      }
      
      // FIX 5: Add proper null checks before accessing array
      if (!this.currentSelectedLocation && this.findAllTerminal.length > 0) {
        this.terminalSelected = this.findAllTerminal[0]['id']
      }
    },
    initData() {
      this.initiateData(this.$axios)
    },
    async loadMenu() {
      try {
        console.log(`===> Loading user menu`)
        // FIX 6: Add null check for user data
        if (!this.user || !this.user.userGroup || !this.user.userGroup.id) {
          console.error('User or userGroup data is not available')
          return
        }
        const response = await this.$axios.get(
          `api/group/find/${this.user.userGroup.id}`
        )
        this.myMenu = response.data['menuHeaders'] || []
      } catch (error) {
        console.error('Error loading menu:', error)
        this.myMenu = []
      }
    },
    switchTerminal() {
      // FIX 7: Add validation before switching terminal
      if (!this.terminalSelected || this.findAllTerminal.length === 0) {
        console.error('Invalid terminal selection')
        return
      }
      
      this.setSelectedTerminal(this.terminalSelected)
      const selectedTerminal = this.findAllTerminal.find((el) => el.id == this.terminalSelected)
      
      if (selectedTerminal && selectedTerminal.locationId) {
        const location = this.findAllLocation.find(
          (el) => el.id == selectedTerminal.locationId
        )
        if (location) {
          this.setSelectedLocation(location)
        }
      }
      
      this.mainComponentKey += 1
      this.terminalDialog = false
    },
    ...mapActions(['setSelectedTerminal', 'setSelectedLocation']),
  },
}
</script>

<style scoped>
* {
  font-family: 'noto sans lao';
}
</style>