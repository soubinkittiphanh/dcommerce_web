<script>
export default {
  data() {
    return {
      imagesPreviewURL: [],
      files: [],
    }
  },
  methods: {
    onFilesChange(payload) {
      const file = payload // in case vuetify file input
      this.files = payload
      if (file) {
        console.log('FILE LEN: ' + file.length)
        for (let i = 0; i < file.length; i++) {
          this.imagesPreviewURL.push({
            IMG_URL: URL.createObjectURL(file[i]),
            NAME: file[i].name,
            isvalid: this.sizeValidate(file[i].size),
          })
        }
        // URL.revokeObjectURL(file) // free memory
      } else {
        this.imagesPreviewURL = null
      }
    },
    deleteFile(idx) {
      this.imagesPreviewURL.splice(idx, 1)
      this.files.splice(idx, 1)
    },
    sizeValidate(z) {
      console.log('SIZE'+z);
      const maxSize = 20000000
      if (z > maxSize) {
        return `Max size is ${maxSize/1000}Kb`
      }
    },
    
  },
}
</script>