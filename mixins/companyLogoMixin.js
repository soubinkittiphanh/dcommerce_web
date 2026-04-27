// mixins/companyLogoMixin.js
export default {
  data() {
    return {
      companyLogo: {
        url: null,
        bankQrUrl: null,
        bankQrUrl2: null,
        company: null,
        loading: false,
        error: null,
        fallbackUrl: null
      }
    }
  },

  computed: {
    // Get the final logo URL (with fallback)
    finalLogoUrl() {
      return this.companyLogo.url || this.companyLogo.fallbackUrl || this.getDefaultLogo()
    },

    // Check if logo is available
    hasCompanyLogo() {
      return !!this.companyLogo.url
    },

    // Check if bank QR is available
    hasBankQr() {
      return !!(this.companyLogo.bankQrUrl || this.companyLogo.bankQrUrl2)
    },

    // Get company name from logo data
    logoCompanyName() {
      return this.companyLogo.company?.name || 'Company Name'
    }
  },

  methods: {
    // Load first company logo
    async loadFirstCompanyLogo() {
      this.companyLogo.loading = true
      this.companyLogo.error = null
      
      try {
        const response = await this.$axios.get('/api/company/findAll', {
          params: { isActive: true }
        })
        
        const companies = Array.isArray(response.data) ? response.data : []
        const companyWithImage = companies.find(company => 
           company.isActive
        )
        
        if (companyWithImage) {
          this.companyLogo.company = companyWithImage
          if (companyWithImage.profile_image_path) {
            this.companyLogo.url = this.buildImageUrl(companyWithImage.profile_image_path)
          }

          if (companyWithImage.bank_qr_image_path) {
            this.companyLogo.bankQrUrl = this.buildImageUrl(companyWithImage.bank_qr_image_path)
          }

          if (companyWithImage.bank_qr_image_path_2) {
            this.companyLogo.bankQrUrl2 = this.buildImageUrl(companyWithImage.bank_qr_image_path_2)
          }
        }
        
        this.companyLogo.fallbackUrl = this.getDefaultLogo()
        
      } catch (error) {
        console.error('Error loading company logo:', error)
        this.companyLogo.error = error.message
        this.companyLogo.fallbackUrl = this.getDefaultLogo()
      } finally {
        this.companyLogo.loading = false
      }
    },

    // Load specific company logo
    async loadCompanyLogo(companyId) {
      this.companyLogo.loading = true
      this.companyLogo.error = null
      
      try {
        const response = await this.$axios.get(`/api/company/find/${companyId}`)
        const company = response.data
        
        this.companyLogo.company = company
        
        if (company.profile_image_path) {
          this.companyLogo.url = this.buildImageUrl(company.profile_image_path)
        } else {
          this.companyLogo.url = null
        }

        if (company.bank_qr_image_path) {
          this.companyLogo.bankQrUrl = this.buildImageUrl(company.bank_qr_image_path)
        } else {
          this.companyLogo.bankQrUrl = null
        }

        if (company.bank_qr_image_path_2) {
          this.companyLogo.bankQrUrl2 = this.buildImageUrl(company.bank_qr_image_path_2)
        } else {
          this.companyLogo.bankQrUrl2 = null
        }
        
        this.companyLogo.fallbackUrl = this.getDefaultLogo()
        
      } catch (error) {
        console.error('Error loading specific company logo:', error)
        this.companyLogo.error = error.message
        this.companyLogo.fallbackUrl = this.getDefaultLogo()
      } finally {
        this.companyLogo.loading = false
      }
    },

    // Build image URL
    buildImageUrl(imagePath) {
      if (!imagePath) return null
      const baseUrl = this.$axios.defaults.baseURL || ''
      return `${baseUrl}/${imagePath}`
    },

    // Get default/fallback logo
    getDefaultLogo() {
      try {
        return require('@/assets/image/MPWT/PWT.png')
      } catch {
        return '/static/images/default-logo.png'
      }
    },

    // Handle logo load error
    onLogoError() {
      console.warn('Company logo failed to load')
      this.companyLogo.url = null
    },

    // Reset logo data
    resetCompanyLogo() {
      this.companyLogo = {
        url: null,
        company: null,
        loading: false,
        error: null,
        fallbackUrl: null
      }
    }
  }
}