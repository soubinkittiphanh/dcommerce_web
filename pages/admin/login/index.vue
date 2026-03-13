<template>
  <v-app>
    <div class="container">
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
        <v-card>
          <v-card-title>ເລືອກ Terminal </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-radio-group v-model="terminalSelected" column>
              <v-radio
                v-for="terminal in findAllTerminal.filter(terminal=>terminal.isActive)"
                :key="terminal.id"
                :label="terminal.name + ' - ' + terminal.description"
                :value="terminal.id"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="primary"
              rounded
              variant="text"
              @click="switchTerminal"
            >
              ເລືອກ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card class="login-card elevation-12">
        <div class="pa-16">
          <v-row>
            <v-col cols="12">
              <!-- Dynamic Company Logo Section -->
              <div class="text-center mb-4">
                <!-- Loading State -->
                <div v-if="companyLogo.loading" class="logo-loading-container">
                  <v-progress-circular
                    indeterminate
                    size="32"
                    color="primary"
                  ></v-progress-circular>
                  <p class="mt-2  grey--text">ກຳລັງໂຫຼດໂລໂກ້...</p>
                </div>
                <!-- Company Logo -->
                <img
                  v-else
                  :src="logoUrl"
                  alt="Company Logo"
                  class="logo-image"
                  @error="onLogoError"
                />
              </div>

              <h2 class="text-center" style="color: primary">{{ welcomeText }}</h2>
            </v-col>
          </v-row>
          <v-card-text>
            <notification v-if="errorMessage" :message="errorMessage" />
            <v-form>
              <v-text-field
                v-model="login.mem_id"
                label="ກະລຸນາ ໃສ່ໄອດີ"
                name="email"
                prepend-inner-icon="mdi-account-tie-hat"
                class="rounded-10 my-text-center"
                outlined
              >
              </v-text-field>
              <v-text-field
                v-model="login.mem_pwd"
                label="ລະຫັດຜ່ານ"
                type="password"
                name="password"
                prepend-inner-icon="mdi-lock"
                class="rounded-10 my-text-center"
                outlined
              ></v-text-field>
              <v-btn
                class="rounded-0 my-text-center"
                color="primary"
                x-large
                block
                dark
                @click.prevent="userLogin"
                type="submit"
              >
                ເຂົ້າສູ່ລະບົບ
                <v-icon> mdi mdi-login</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </div>

        <!-- Powered by DCOMMERCE Section -->
        <v-card-actions class="powered-by-section">
          <v-spacer></v-spacer>
          <div class="powered-by-container">
            <span class="powered-by-text">Powered by</span>
            <img
              :src="dcommerceLogoUrl"
              alt="DCOMMERCE Logo"
              class="dcommerce-logo"
            />
            <span class="dcommerce-text">DCOMMERCE</span>
          </div>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>

      <!-- Alternative: Footer Powered By (uncomment if preferred) -->
      <!--
      <div class="powered-by-footer">
        <div class="powered-by-container-footer">
          <span class="powered-by-text-footer">Powered by</span>
          <img
            :src="dcommerceLogoUrl"
            alt="DCOMMERCE Logo"
            class="dcommerce-logo-footer"
          />
          <span class="dcommerce-text-footer">DCOMMERCE</span>
        </div>
      </div>
      -->
    </div>
  </v-app>
</template>
<script>
import Notification from '../../../components/Notification.vue'
import { swalError2 } from '~/common'
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'login',

  data() {
    return {
      terminalDialog: false,
      email: '',
      password: '',
      spfList: [],
      errorMessage: '',
      terminalSelected: 1,
      isLoading: false,
      barcode: '',
      timer: null,
      login: {
        mem_id: '',
        mem_pwd: '',
      },
      // Company logo management
      companyLogo: {
        url: null,
        company: null,
        loading: false,
        error: false
      }
    }
  },

  components: {
    Notification,
  },

  computed: {
    ...mapGetters([
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
    ]),

    // Dynamic logo URL with fallback
    logoUrl() {
      if (this.companyLogo.url) {
        return this.companyLogo.url
      }
      // Fallback to default logo
      try {
        return require('~/assets/image/Dcommerce-Logo_DC.png')
      } catch {
        return '/static/images/default-logo.png'
      }
    },

    // DCOMMERCE logo URL
    dcommerceLogoUrl() {
      try {
        return require('~/assets/image/Dcommerce-Logo_DC.png')
      } catch {
        // Fallback to a default or online logo
        return '/static/images/dcommerce-logo.png'
      }
    },

    // Welcome text based on company data
    welcomeText() {
      if (this.companyLogo.company?.name) {
        return `ຍິນດີຕ້ອນຮັບສູ່ ${this.companyLogo.company.name}`
      }
      return 'ຍິນດີຕ້ອນຮັບ'
    }
  },

  mounted() {
    // Load company logo when component mounts
    this.loadCompanyLogo()
  },

  methods: {
    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
    ]),

    // Load first company with logo
    async loadCompanyLogo() {
      this.companyLogo.loading = true
      this.companyLogo.error = false

      try {
        // Get companies with active status
        const response = await this.$axios.get('/api/public/company/findAll')

        const companies = Array.isArray(response.data) ? response.data : []

        // Find first company with profile image
        const companyWithImage = companies.find(company =>
          company.profile_image_path && company.isActive
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
      console.warn('Company logo failed to load')
      this.companyLogo.url = null
      this.companyLogo.error = true
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

    switchTerminal() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(
        (el) =>
          el.id ==
          this.findAllTerminal.find((el) => el.id == this.terminalSelected)[
            'locationId'
          ]
      )
      this.setSelectedLocation(location)

      const homePage = this.spfList.find((spf) => spf.code === 'HOME')
      if (homePage?.value) {
        this.$router.push(homePage.value)
      } else {
        // Fallback route
        this.$router.push('/admin')
        // Or show error
        this.$toast.error('Home page configuration not found')
      }
      this.terminalDialog = false
    },

    async userLogin() {
      if (this.isLoading) return
      try {
        this.isLoading = true
        this.errorMessage = ''
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })

        if (response.status !== 200) {
          this.isLoading = false
          return swalError2(
            this.$swal,
            'Error',
            'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
          )
        }
        if (response.data.accessToken) {
          console.log(`LOGIN COMPLETED`)
          this.initData()
          await this.fetchSPFItems()

          const enableTerminal = this.spfList.find(
            (spf) => spf.code === 'E_TERMINAL'
          )
          if (enableTerminal?.value === 'Y') {
            this.terminalDialog = true
          } else {
            this.switchTerminal()
          }
        } else {
          console.log('No token')
          swalError2(this.$swal, 'Error', 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ')
        }
        console.log(response)
      } catch (err) {
        console.log(err)
      }
      this.isLoading = false
    },

    initData() {
      this.initiateData(this.$axios)
    },
  },
}
</script>
<style scoped>
h2 {
  font-family: 'noto sans lao';
  text-align: center;
}

.my-text-center {
  font-family: 'noto sans lao';
  text-align: center;
}

.logo-image {
  max-width: 300px;
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: opacity 0.3s ease;
}

.logo-loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 300px;
  margin: 0 auto;
  border: 2px dashed #ddd;
  border-radius: 8px;
  background-color: #fafafa;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #ccddd5;
}

.login-card {
  position: relative;
}

/* Powered by DCOMMERCE - Bottom of Card */
.powered-by-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-top: 1px solid #dee2e6;
  padding: 12px 24px;
  border-radius: 0 0 4px 4px;
}

.powered-by-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.powered-by-text {
  font-size: 12px;
  color: #6c757d;
  font-weight: 400;
  font-family: 'noto sans lao';
}

.dcommerce-logo {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.dcommerce-text {
  font-size: 14px;
  font-weight: 700;
  color: primary;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.5px;
}

/* Alternative Footer Style (commented out in template) */
.powered-by-footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.powered-by-container-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
}

.powered-by-text-footer {
  font-size: 11px;
  color: #6c757d;
  font-weight: 400;
  font-family: 'noto sans lao';
}

.dcommerce-logo-footer {
  height: 16px;
  width: auto;
  object-fit: contain;
}

.dcommerce-text-footer {
  font-size: 12px;
  font-weight: 700;
  color: primary;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.5px;
}

/* Hover effects */
.powered-by-container:hover .dcommerce-text,
.powered-by-container-footer:hover .dcommerce-text-footer {
  color: #0056b3;
  transition: color 0.3s ease;
}

.powered-by-container:hover .dcommerce-logo,
.powered-by-container-footer:hover .dcommerce-logo-footer {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>