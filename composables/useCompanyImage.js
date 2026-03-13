// composables/useCompanyImage.js
export default function useCompanyImage() {
  const { $axios, $toast, $swal } = this

  // Validate image file
  const validateImageFile = (file) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!allowedTypes.includes(file.type)) {
      throw new Error('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ (JPG, PNG, GIF)')
    }

    if (file.size > maxSize) {
      throw new Error('ຂະໜາດໄຟລ໌ໃຫຍ່ເກີນໄປ (ສູງສຸດ 5MB)')
    }

    return true
  }

  // Upload profile image
  const uploadProfileImage = async (companyId, file) => {
    try {
      validateImageFile(file)

      const formData = new FormData()
      formData.append('profile_image', file)

      const response = await $axios.post(
        `api/company/upload-profile-image/${companyId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      $toast.success('ອັບໂຫລດຮູບສຳເລັດແລ້ວ')
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'ອັບໂຫລດຮູບບໍ່ສຳເລັດ'
      $toast.error(errorMessage)
      throw error
    }
  }

  // Update profile image (replace existing)
  const updateProfileImage = async (companyId, file) => {
    try {
      validateImageFile(file)

      const formData = new FormData()
      formData.append('profile_image', file)

      const response = await $axios.put(
        `api/company/update-profile-image/${companyId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      $toast.success('ອັບເດດຮູບສຳເລັດແລ້ວ')
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'ອັບເດດຮູບບໍ່ສຳເລັດ'
      $toast.error(errorMessage)
      throw error
    }
  }

  // Delete profile image
  const deleteProfileImage = async (companyId) => {
    try {
      const result = await $swal.fire({
        title: 'ຢືນຢັນການລຶບ',
        text: 'ທ່ານຕ້ອງການລຶບຮູບໂປຣໄຟລ໌ນີ້ແທ້ບໍ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ລຶບ',
        cancelButtonText: 'ຍົກເລີກ'
      })

      if (result.isConfirmed) {
        await $axios.delete(`api/company/delete-profile-image/${companyId}`)
        $toast.success('ລຶບຮູບສຳເລັດແລ້ວ')
        return true
      }
      
      return false
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'ລຶບຮູບບໍ່ສຳເລັດ'
      $toast.error(errorMessage)
      throw error
    }
  }

  // Get image URL
  const getImageUrl = (imagePath, baseUrl = null) => {
    if (!imagePath) return null
    
    const base = baseUrl || $axios.defaults.baseURL || ''
    return `${base}/${imagePath}`
  }

  // Create preview URL for selected file
  const createPreviewUrl = (file) => {
    try {
      validateImageFile(file)
      return URL.createObjectURL(file)
    } catch (error) {
      $toast.error(error.message)
      return null
    }
  }

  // Clean up preview URL
  const revokePreviewUrl = (url) => {
    if (url) {
      URL.revokeObjectURL(url)
    }
  }

  return {
    validateImageFile,
    uploadProfileImage,
    updateProfileImage,
    deleteProfileImage,
    getImageUrl,
    createPreviewUrl,
    revokePreviewUrl
  }
}