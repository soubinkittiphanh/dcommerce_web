<template>
  <v-app light>
    <!-- Navigation Drawer -->
    <v-navigation-drawer class="elevation-6" :mini-variant="miniVariant" :clipped="clipped" dark v-model="drawer" fixed
      color="primary" app permanent mobile-breakpoint="0" :touchless="true">
      <v-layout column align-center>
        <v-flex class="shadow mt-4 mb-4">
          <!-- Dynamic Company Logo Section -->
          <div v-if="companyLogo.loading" class="logo-loading-container">
            <v-progress-circular indeterminate size="24" color="white"></v-progress-circular>
            <p class="mt-2  white--text">ກຳລັງໂຫຼດ...</p>
          </div>

          <!-- Company Logo -->
          <v-img v-else :src="finalLogoUrl" style="max-height: 140px; max-width: 200px" contain @error="onLogoError" />
        </v-flex>
      </v-layout>

      <v-list>
        <!-- Home -->
        <v-list-item :to="homePage" router exact>
          <v-list-item-action>
            <v-icon color="white">mdi mdi-home-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'ຫນ້າຫຼັກ'" :style="{ color: 'white' }" />
          </v-list-item-content>
        </v-list-item>

        <!-- Group A -->
        <v-divider></v-divider>
        <v-list-group v-for="(menu, i) in safeMenu" :key="i" :prepend-icon="menu.icon" color="white"
          v-model="menu.expand">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style="color: white">{{
                menu.llname
              }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- Group A menu items -->
          <v-list-item v-for="(item, i) in menu.menuLines.filter(line => line.isActive === true) || []" :key="i"
            :to="item.path" router exact :style="{ 'background-color': 'secondary' }">
            <v-list-item-action>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.llname" :style="{ color: 'white' }" />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>

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

    <v-main :key="mainComponentKey">
      <!-- Terminal Selection Dialog -->
      <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
        <v-card>
          <v-card-title>ເລືອກ Terminal </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-radio-group v-model="terminalSelected" column>
              <v-radio v-for="terminal in safeTerminals" :key="terminal.id"
                :label="terminal.name + ' - ' + terminal.description" :value="terminal.id"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" rounded variant="text" @click="switchTerminal">
              ເລືອກ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Change Password Dialog -->
      <v-dialog v-model="changePasswordDialog" max-width="500px" persistent>
        <v-card>
          <v-card-title class="headline" style="background-color: primary; color: white">
            <v-icon left color="white">mdi-lock-reset</v-icon>
            ປ່ຽນລະຫັດຜ່ານ
          </v-card-title>

          <v-form ref="passwordForm" v-model="passwordFormValid" lazy-validation>
            <v-card-text class="pt-4">
              <v-container>
                <v-row>
                  <!-- Current Password -->
                  <v-col cols="12">
                    <v-text-field v-model="currentPassword" :type="showCurrentPassword ? 'text' : 'password'"
                      :append-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'
                        " @click:append="showCurrentPassword = !showCurrentPassword" label="ລະຫັດຜ່ານປັດຈຸບັນ *"
                      :rules="currentPasswordRules" required outlined dense :loading="passwordLoading"
                      :disabled="passwordLoading" />
                  </v-col>

                  <!-- New Password -->
                  <v-col cols="12">
                    <v-text-field v-model="newPassword" :type="showNewPassword ? 'text' : 'password'"
                      :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showNewPassword = !showNewPassword" label="ລະຫັດຜ່ານໃໝ່ *"
                      :rules="newPasswordRules" required outlined dense :loading="passwordLoading"
                      :disabled="passwordLoading" />
                  </v-col>

                  <!-- Confirm New Password -->
                  <v-col cols="12">
                    <v-text-field v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
                      :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                        " @click:append="showConfirmPassword = !showConfirmPassword" label="ຢືນຢັນລະຫັດຜ່ານໃໝ່ *"
                      :rules="confirmPasswordRules" required outlined dense :loading="passwordLoading"
                      :disabled="passwordLoading" />
                  </v-col>
                </v-row>

                <!-- Password Requirements -->
                <v-alert type="info" outlined dense class="mt-2">
                  <div class="">
                    <strong>ຂໍ້ກຳນົດລະຫັດຜ່ານ:</strong><br />
                    • ຢ່າງໜ້ອຍ 4 ຕົວອັກສອນ<br />
                    • ບໍ່ຄວນໃຊ້ລະຫັດຜ່ານງ່າຍໆ ເຊັ່ນ: 1234, abcd
                  </div>
                </v-alert>
              </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-4">
              <v-spacer></v-spacer>

              <v-btn color="grey darken-1" text @click="closePasswordDialog" :disabled="passwordLoading">
                <v-icon left>mdi-close</v-icon>
                ຍົກເລີກ
              </v-btn>

              <v-btn color="primary" :loading="passwordLoading" :disabled="!passwordFormValid || passwordLoading"
                @click="changePassword">
                <v-icon left>mdi-check</v-icon>
                ປ່ຽນລະຫັດຜ່ານ
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <!-- Terms And Conditions Dialog -->
      <TermsAndConditionsDialog v-model="termsDialog" :finalLogoUrl="finalLogoUrl" />

      <v-container fluid class="pb-16">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <v-spacer></v-spacer>
      <span v-if="user">
        &copy;{{ new Date().getFullYear() }} {{ companyDisplayName }}: V.R{{ appVersion }}
        user: {{ user.cus_name }} id: {{ user.id }}
      </span>
      <span v-else>
        &copy;{{ new Date().getFullYear() }} {{ companyDisplayName }}: V.R{{ appVersion }}
      </span>

      <v-chip v-if="businessDate" small color="info" outlined class="ma-1 font-weight-bold">
        <v-icon small left>mdi-calendar-clock</v-icon>
        ວັນທີເຮັດວຽກ: {{ businessDate }}
      </v-chip>

      <!-- Refresh Button -->
      <v-btn small text color="primary" class="ma-1" @click="refreshStoreData" :loading="isRefreshing">
        <v-icon small left>mdi-refresh</v-icon>
        ໂຫຼດຂໍ້ມູນໃໝ່ (Refresh)
      </v-btn>

      <!-- Change Password Button -->
      <v-btn v-if="user" small text color="primary" class="ma-1" @click="openPasswordDialog">
        <v-icon small left>mdi-lock-reset</v-icon>
        ປ່ຽນລະຫັດຜ່ານ
      </v-btn>

      <!-- Terms and Conditions Button -->
      <v-btn small text color="primary" class="ma-1" @click="termsDialog = true">
        <v-icon small left>mdi-file-document-check-outline</v-icon>
        ເງື່ອນໄຂການນຳໃຊ້
      </v-btn>

      <v-chip v-if="currentTerminal" class="ma-0" color="warning" variant="outlined" @click="terminalDialog = true">
        {{ currentTerminal.name }}
      </v-chip>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mainCompanyInfo } from '~/common/api'
import TermsAndConditionsDialog from '~/components/TermsAndConditionsDialog.vue'

export default {
  data() {
    return {
      isRefreshing: false,
      spfList: [],
      intervalId: null,
      terminalDialog: false,
      termsDialog: false,
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
      businessDate: null,
      // Company logo management
      companyLogo: {
        url: null,
        company: null,
        loading: false,
        error: false,
      },
      // Password change dialog data
      changePasswordDialog: false,
      passwordFormValid: false,
      passwordLoading: false,
      showCurrentPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      // Password validation rules
      currentPasswordRules: [
        (v) => !!v || 'ກະລຸນາໃສ່ລະຫັດຜ່ານປັດຈຸບັນ',
        (v) => (v && v.length >= 1) || 'ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ',
      ],
      newPasswordRules: [
        (v) => !!v || 'ກະລຸນາໃສ່ລະຫັດຜ່ານໃໝ່',
        (v) => (v && v.length >= 4) || 'ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ້ອຍ 4 ຕົວອັກສອນ',
        (v) => v !== this.currentPassword || 'ລະຫັດຜ່ານໃໝ່ຕ້ອງແຕກຕ່າງຈາກເກົ່າ',
      ],
      confirmPasswordRules: [
        (v) => !!v || 'ກະລຸນາຢືນຢັນລະຫັດຜ່ານໃໝ່',
        (v) => v === this.newPassword || 'ລະຫັດຜ່ານບໍ່ກົງກັນ',
      ],
    }
  },

  components: {
    TermsAndConditionsDialog
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
    if (window.posApi) {
      const url = await window.posApi.getBaseUrl()
      this.$axios.setBaseURL(url)
      console.log('Frontend connected to Electron Dynamic IP:', url)
    }
    try {
      await this.checkAllInitData()
      await this.loadMenu()
      await this.fetchSPFItems()
      await this.loadCompanyLogo() // Load company logo
      await this.fetchBusinessDate()
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
  watch: {
    drawer(val) {
      if (!val) {
        // If something (like a swipe) tries to set drawer to false,
        // force it back to true immediately.
        this.drawer = true
      }
    },
  },

  computed: {
    isTablet() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    homePage() {
      const userGroup = this.$auth.user?.userGroup;

      if (userGroup && userGroup.homePage) {
        return userGroup.homePage;
      } else {
        // Fallback route
        return '/admin';
      }
    },

    ...mapGetters([
      'findSelectedTerminal',
      'findSPF',
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

    // Dynamic logo URL with fallback
    finalLogoUrl() {
      // Enable this below code for dynamic Company logo
      if (this.companyLogo.url) {
        return this.companyLogo.url
      }

      // Try using the company data logo
      if (this.companyData?.dcLogo) {
        try {
          return require(`~/assets/image/${this.companyData.dcLogo}`)
        } catch (error) {
          console.warn(
            'Static company logo not found:',
            this.companyData.dcLogo
          )
        }
      }

      // Final fallback
      try {
        return require('~/assets/image/MPWT/PWT.png')
      } catch {
        return '/static/images/default-logo.png'
      }
    },

    // Company display name for footer
    companyDisplayName() {
      if (this.companyLogo.company?.name) {
        return this.companyLogo.company.name
      }
      if (this.companyData?.name) {
        return this.companyData.name
      }
      return 'Dcommerce'
    },

    safeTerminals() {
      return Array.isArray(this.findAllTerminal) ? this.findAllTerminal : []
    },

    safeMenu() {
      return Array.isArray(this.myMenu) ? this.myMenu.filter(menu => menu.isActive === true) : []
    },
    getSPF() {
      return this.findSPF
    },
    appVersion() {
      // In Nuxt 2, env variables are available on process.env
      // We use dcAppVersion to avoid collision with standard npm vars
      const version = process.env.dcAppVersion || '26.3.1'
      console.log('Current App Version:', version)
      return version
    },
    currentTerminal() {
      if (!this.safeTerminals.length || !this.findSelectedTerminal) {
        return null
      }

      return (
        this.safeTerminals.find(
          (el) => el && el.id == this.findSelectedTerminal
        ) || null
      )
    },
  },

  methods: {
    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
    ]),

    async refreshStoreData() {
      if (this.isRefreshing) return;
      this.isRefreshing = true;
      try {
        await this.initData();
        await this.fetchBusinessDate();
        if (this.$toast) {
          this.$toast.success('ໂຫຼດຂໍ້ມູນໃໝ່ສຳເລັດແລ້ວ (Data refreshed successfully)');
        }
      } catch (error) {
        console.error('Error refreshing data:', error);
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ (Error refreshing data)');
        }
      } finally {
        this.isRefreshing = false;
      }
    },

    async initializeApp() {
      // Set default terminal if available
      if (this.findSelectedTerminal) {
        this.terminalSelected = this.findSelectedTerminal
      }
    },

    // Password dialog methods
    openPasswordDialog() {
      this.resetPasswordForm()
      this.changePasswordDialog = true
    },

    closePasswordDialog() {
      this.changePasswordDialog = false
      this.resetPasswordForm()
    },

    resetPasswordForm() {
      this.currentPassword = ''
      this.newPassword = ''
      this.confirmPassword = ''
      this.showCurrentPassword = false
      this.showNewPassword = false
      this.showConfirmPassword = false

      if (this.$refs.passwordForm) {
        this.$refs.passwordForm.resetValidation()
      }
    },

    async changePassword() {
      // Validate form first
      if (!this.$refs.passwordForm.validate()) {
        return
      }

      this.passwordLoading = true

      try {
        // Prepare the request payload
        const payload = {
          userId: this.user.id || this.user.cus_id,
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        }

        // Make API call to change password
        const response = await this.$axios.post(
          '/api/user/change-password',
          payload
        )

        if (response.data && response.data.success) {
          this.$toast.success('ປ່ຽນລະຫັດຜ່ານສຳເລັດແລ້ວ')
          this.closePasswordDialog()

          // Optional: Force re-login after password change
          // setTimeout(() => {
          //   this.$router.push('/admin/logout')
          // }, 2000)
        } else {
          throw new Error(
            response.data?.message || 'ເກີດຂໍ້ຜິດພາດໃນການປ່ຽນລະຫັດຜ່ານ'
          )
        }
      } catch (error) {
        console.error('Password change error:', error)

        // Handle different error types
        if (error.response?.status === 401) {
          this.$toast.error('ລະຫັດຜ່ານປັດຈຸບັນບໍ່ຖືກຕ້ອງ')
        } else if (error.response?.status === 400) {
          this.$toast.error('ຂໍ້ມູນທີ່ສົ່ງມາບໍ່ຖືກຕ້ອງ')
        } else {
          this.$toast.error(
            error.response?.data?.message ||
            error.message ||
            'ເກີດຂໍ້ຜິດພາດໃນການປ່ຽນລະຫັດຜ່ານ'
          )
        }
      } finally {
        this.passwordLoading = false
      }
    },

    async fetchBusinessDate() {
      try {
        const response = await this.$axios.get('/api/businessDate/current')
        if (response.data && response.data.success && response.data.data) {
          this.businessDate = response.data.data.currentDate
        }
      } catch (error) {
        console.error('Error fetching business date:', error)
      }
    },

    // Load company logo from API
    async loadCompanyLogo() {
      this.companyLogo.loading = true
      this.companyLogo.error = false

      try {
        // Get companies with active status using your public API
        const response = await this.$axios.get('/api/public/company/findAll')
        const companies = Array.isArray(response.data) ? response.data : []

        // Find first company with profile image
        const companyWithImage = companies.find(
          (company) => company.profile_image_path && company.isActive
        )

        if (companyWithImage) {
          this.companyLogo.company = companyWithImage
          const baseUrl = this.$axios.defaults.baseURL || ''
          this.companyLogo.url = `${baseUrl}/${companyWithImage.profile_image_path}`
        }
      } catch (error) {
        console.error('Error loading company logo:', error)
        this.companyLogo.error = true
      } finally {
        this.companyLogo.loading = false
      }
    },

    // Handle logo loading error
    onLogoError() {
      console.warn('Company logo failed to load, using fallback')
      this.companyLogo.url = null
      this.companyLogo.error = true
    },

    isGranted(code) {
      if (
        !this.user ||
        !this.user.userGroup ||
        !this.user.userGroup.authorities
      ) {
        return false
      }

      try {
        const grantedCodes = this.user.userGroup.authorities.map(
          (el) => el.code
        )
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
        `...loading ${this.safeTerminals.length
        }... ${new Date().toLocaleTimeString()}`
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

    async fetchSPFItems() {
      try {
        this.loading = true
        const response = await this.$axios.get('/api/spf/find')
        console.info(`SPF RES ${JSON.stringify(response)}`)
        this.spfList = response.data.data
      } catch (error) {
        this.$toast.error('Error fetching SPF data: ' + error.message)
      } finally {
        this.loading = false
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
        this.myMenu =
          response.data && response.data.menuHeaders
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

        if (selectedTerminal?.locationId) {
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

.v-main {
  overflow-y: auto !important;
  height: 100vh !important;
}

/* Ensure proper page flow */
html,
body {
  overflow-x: hidden;
  overflow-y: auto;
}

/* Logo loading container */
.logo-loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 180px;
  margin: 0 auto;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
}

/* Improve logo display */
.v-image {
  border-radius: 8px;
  transition: opacity 0.3s ease;
}

/* Password dialog specific styles */
.v-card-title {
  font-family: 'noto sans lao';
  font-weight: 500;
}

.v-text-field {
  font-family: 'noto sans lao';
}

.v-btn {
  font-family: 'noto sans lao';
}

/* Loading overlay styles */
.v-text-field--is-disabled {
  opacity: 0.7;
}
</style>