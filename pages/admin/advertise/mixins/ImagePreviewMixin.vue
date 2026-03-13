<script>
export default {
  data() {
    return {
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
    }
  },
  methods: {
    onFilesChange(payload) {
      const file = payload // in case vuetify file input

      this.files = payload
      if (file) {
        this.IMG_URL = URL.createObjectURL(file)
        this.NAME = file.name
        URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null
        this.files = null
      }
    },
    deleteFile(idx) {
      this.files=null
    },
    sizeValidate(z) {
      console.log('SIZE' + z)
      const maxSize = 200000
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`
      }
    },
  },
}
</script>