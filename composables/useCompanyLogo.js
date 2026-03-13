// composables/useCompanyLogo.js
export default function useCompanyLogo() {
  const { $axios } = this

  // Get first company with profile image
  const getFirstCompanyLogo = async () => {
    try {
      const response = await $axios.get('/api/company', {
        params: {
          isActive: true,
          hasImage: true // You might need to add this filter to your API
        }
      })
      
      const companies = Array.isArray(response.data) ? response.data : []
      
      // Find first company with profile image
      const companyWithImage = companies.find(company => 
        company.profile_image_path && 
        company.isActive
      )
      
      if (companyWithImage) {
        return {
          company: companyWithImage,
          logoUrl: getImageUrl(companyWithImage.profile_image_path),
          hasLogo: true
        }
      }
      
      return {
        company: null,
        logoUrl: null,
        hasLogo: false
      }
      
    } catch (error) {
      console.error('Error fetching company logo:', error)
      return {
        company: null,
        logoUrl: null,
        hasLogo: false,
        error: error.message
      }
    }
  }

  // Get specific company logo
  const getCompanyLogo = async (companyId) => {
    try {
      const response = await $axios.get(`/api/company/find/${companyId}`)
      const company = response.data
      
      if (company && company.profile_image_path) {
        return {
          company,
          logoUrl: getImageUrl(company.profile_image_path),
          hasLogo: true
        }
      }
      
      return {
        company,
        logoUrl: null,
        hasLogo: false
      }
      
    } catch (error) {
      console.error('Error fetching specific company logo:', error)
      return {
        company: null,
        logoUrl: null,
        hasLogo: false,
        error: error.message
      }
    }
  }

  // Get primary/main company logo (first active company)
  const getPrimaryCompanyLogo = async () => {
    try {
      const response = await $axios.get('/api/company', {
        params: {
          isActive: true,
          limit: 1,
          orderBy: 'id',
          order: 'ASC'
        }
      })
      
      const companies = Array.isArray(response.data) ? response.data : []
      const primaryCompany = companies[0]
      
      if (primaryCompany) {
        return {
          company: primaryCompany,
          logoUrl: primaryCompany.profile_image_path ? getImageUrl(primaryCompany.profile_image_path) : null,
          hasLogo: !!primaryCompany.profile_image_path
        }
      }
      
      return {
        company: null,
        logoUrl: null,
        hasLogo: false
      }
      
    } catch (error) {
      console.error('Error fetching primary company logo:', error)
      return {
        company: null,
        logoUrl: null,
        hasLogo: false,
        error: error.message
      }
    }
  }

  // Build image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null
    
    const baseUrl = $axios.defaults.baseURL || ''
    return `${baseUrl}/${imagePath}`
  }

  // Get fallback logo
  const getFallbackLogo = () => {
    // You can customize this path based on your project structure
    try {
      return require('@/assets/image/MPWT/PWT.png')
    } catch {
      // If the require fails, return a placeholder
      return '/static/images/default-logo.png'
    }
  }

  // Get logo with fallback
  const getLogoWithFallback = async (companyId = null) => {
    let logoData
    
    if (companyId) {
      logoData = await getCompanyLogo(companyId)
    } else {
      logoData = await getFirstCompanyLogo()
    }
    
    return {
      ...logoData,
      fallbackUrl: getFallbackLogo(),
      finalUrl: logoData.logoUrl || getFallbackLogo()
    }
  }

  // Cache company logos for better performance
  const logoCache = new Map()
  
  const getCachedCompanyLogo = async (companyId = 'first') => {
    const cacheKey = companyId
    
    if (logoCache.has(cacheKey)) {
      return logoCache.get(cacheKey)
    }
    
    let logoData
    if (companyId === 'first') {
      logoData = await getFirstCompanyLogo()
    } else if (companyId === 'primary') {
      logoData = await getPrimaryCompanyLogo()
    } else {
      logoData = await getCompanyLogo(companyId)
    }
    
    // Cache for 5 minutes
    logoCache.set(cacheKey, logoData)
    setTimeout(() => logoCache.delete(cacheKey), 5 * 60 * 1000)
    
    return logoData
  }

  // Clear logo cache
  const clearLogoCache = () => {
    logoCache.clear()
  }

  return {
    getFirstCompanyLogo,
    getCompanyLogo,
    getPrimaryCompanyLogo,
    getImageUrl,
    getFallbackLogo,
    getLogoWithFallback,
    getCachedCompanyLogo,
    clearLogoCache
  }
}