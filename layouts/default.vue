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
            v-if="companyData && companyData.dcLogo"
            :src="require(`~/assets/image/${companyData.dcLogo}`)"
            style="max-height: 1400px"
          />
        </v-flex>
      </v-layout>
      <v-list>
        <!-- Home -->
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
          v-for="(menu, i) in safeMenu"
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
            v-for="(item, i) in (menu.menuLines || [])"
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
                v-for="terminal in safeTerminals"
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
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer app>
      <v-spacer></v-spacer>
      <span v-if="user">
        &copy;{{ new Date().getFullYear() }} Dcommerce: V.R23.0.5 user:
        {{ user.cus_name }} id: {{ user.id }}
      </span>
      <span v-else>
        &copy;{{ new Date().getFullYear() }} Dcommerce: V.R23.0.5
      </span>
      
      <v-chip
        v-if="currentTerminal"
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
      dataLoaded: false,
    }
  },

  async created() {
    // Initialize data and handle potential errors
    try {
      await this.initializeApp()
    } catch (error) {
      console.error('Error initializing app:', error)
    }
  },

  async mounted() {
    try {
      await this.checkAllInitData()
      await this.loadMenu()
      this.dataLoaded = true
    } catch (error) {
      console.error('Error in mounted:', error)
    }
    
    window.addEventListener('beforeunload', this.clearInterval)
  },

  beforeDestroy() {
    this.clearInterval()
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
      return this.$auth && this.$auth.user ? this.$auth.user : null
    },

    companyData() {
      try {
        return mainCompanyInfo() || {}
      } catch (error) {
        console.error('Error getting company data:', error)
        return {}
      }
    },

    safeTerminals() {
      return Array.isArray(this.findAllTerminal) ? this.findAllTerminal : []
    },

    safeMenu() {
      return Array.isArray(this.myMenu) ? this.myMenu : []
    },

    currentTerminal() {
      if (!this.safeTerminals.length || !this.findSelectedTerminal) {
        return null
      }
      
      return this.safeTerminals.find(
        (el) => el && el.id == this.findSelectedTerminal
      ) || null
    },
  },

  methods: {
    ...mapActions(['initiateData', 'setSelectedTerminal', 'setSelectedLocation']),

    async initializeApp() {
      // Set default terminal if available
      if (this.findSelectedTerminal) {
        this.terminalSelected = this.findSelectedTerminal
      }
    },

    isGranted(code) {
      if (!this.user || !this.user.userGroup || !this.user.userGroup.authorities) {
        return false
      }
      
      try {
        const grantedCodes = this.user.userGroup.authorities.map((el) => el.code)
        return grantedCodes.includes(code)
      } catch (error) {
        console.error('Error checking permissions:', error)
        return false
      }
    },

    clearInterval() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },

    async checkAllInitData() {
      console.info(
        `...loading ${this.safeTerminals.length}... ${new Date().toLocaleTimeString()}`
      )
      
      if (this.safeTerminals.length === 0) {
        console.error('Data missing, need to reload')
        await this.initData()
      }

      if (!this.currentSelectedLocation && this.safeTerminals.length > 0) {
        this.terminalSelected = this.safeTerminals[0].id
      }
    },

    async initData() {
      try {
        await this.initiateData(this.$axios)
      } catch (error) {
        console.error('Error initializing data:', error)
      }
    },

    async loadMenu() {
      if (!this.user || !this.user.userGroup || !this.user.userGroup.id) {
        console.warn('User or userGroup data is not available')
        this.myMenu = []
        return
      }

      try {
        const response = await this.$axios.get(
          `api/group/find/${this.user.userGroup.id}`
        )
        this.myMenu = response.data && response.data.menuHeaders 
          ? response.data.menuHeaders 
          : []
      } catch (error) {
        console.error('Error loading menu:', error)
        this.myMenu = []
      }
    },

    switchTerminal() {
      if (!this.terminalSelected || this.safeTerminals.length === 0) {
        console.error('Invalid terminal selection')
        return
      }

      try {
        this.setSelectedTerminal(this.terminalSelected)
        const selectedTerminal = this.safeTerminals.find(
          (el) => el.id == this.terminalSelected
        )

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
      } catch (error) {
        console.error('Error switching terminal:', error)
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'noto sans lao';
}

/* Fix potential scrolling issues */
.v-application {
  overflow: auto !important;
}

.v-main {
  overflow-y: auto !important;
  height: 100vh !important;
}

.v-container {
  min-height: calc(100vh - 64px);
  padding-bottom: 60px; /* Account for footer */
}

/* Ensure proper page flow */
html, body {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>