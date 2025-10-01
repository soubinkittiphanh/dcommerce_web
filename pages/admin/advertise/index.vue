<template>
  <div class="text-center">
    <v-dialog v-model="dialogMessage" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="preview" hide-overlay width="400px">
      <dia-image :i-url="previewSrc" @closeDia="preview = false"> </dia-image>
    </v-dialog>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-file-input
        :rules="rules.imageRule"
        ref="filesfield"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="ຮູບພາບຫລາຍພາບ"
        @change="onFilesChange"
      ></v-file-input>
      <v-textarea
        outlined
        name="input-7-4"
        counter="5"
        label="ໝາຍເຫດ"
        v-model="formData.desc"
      ></v-textarea>
      <div v-if="files">
        <v-list three-line>
          <template>
            <v-list-item-avatar @click.prevent="previewImg(IMG_URL)">
              <v-img :src="IMG_URL"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="NAME"></v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click.prevent="deleteFile(index)"
            >
              <i class="fas fa-trash-alt"></i>
            </v-btn>
            <v-divider :key="NAME"></v-divider>
          </template>
        </v-list>
      </div>
      <v-btn color="primary" dark class="mb-2" @click="uploadFile">
        ບັນທຶກ
      </v-btn>
    </v-form>
    <v-card>
      <v-data-table
        v-if="loadData"
        :headers="headers"
        :items="loadData"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title
              >ລາຍການໂຄສະນາ: {{ loadData.length }}</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
      
          </v-toolbar>
        </template>
        <!-- <template v-slot:[`item.img_function`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="
              editItem(item)
              isedit = true
            "
          >
            mdi-pencil
          </v-icon>
        </template> -->
        <template v-slot:[`item.img_active`]="{ item }">
          <v-btn
            small
            class="mr-2"
            @click="
              toggleActive(item)
              isedit = true
            "
          >
            {{ isactive ? 'ປິດໂຄສະນາ' : 'ເປີດໂຄສະນາ' }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <nuxt-child />
  </div>
</template>
<script>
import ImagePreviewMixin from './mixins/ImagePreviewMixin.vue'
export default {
  middleware: 'auths',
  mixins: [ImagePreviewMixin],
  middleware: 'auths',
  data() {
    return {
      search: '',
      preview: false,
      previewSrc: null,
      dialog: false,
      dialogMessage: false,
      message: '',
      isloading: false,
      valid: true,
      formData:{
        desc:'',
      },
      rules: {
        imageRule: [
          (files) =>
            !files ||
            files.size > 2000 ||
            'Avatar size should be less than 2 MB!',
        ],
      },
      isactive: null,
      category: [],
      loadData: [],
      headers: [
        {
          text: 'ລະຫັດ',
          align: 'center',
          sortable: false,
          value: 'img_id',
        },
        { text: 'name', align: 'center', value: 'img_name' },
        { text: 'path', align: 'center', value: 'img_path' },
        { text: 'ຫມາຍເຫດ', align: 'center', value: 'img_remark' },
    
        {
          text: 'ຟັງຊັ່ນ',
          align: 'end',
          value: 'img_active',
          sortable: false,
        },
      ],
    }
  },
  async created() {
    await this.fetchData()
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async toggleActive(item) {
      this.isloading = true
      console.log(item)
      const formData = { id: item.img_id, active: this.isactive ? 1 : 0 }
      this.isactive = !this.isactive
      console.log(formData + 'Formdata')
      await this.$axios
        .post('ad_u', formData)
        .then((res) => {
          if (!res.data.includes('completed')) {
            this.isactive = !this.isactive
          }
          this.isloading = false
          this.message = res.data
        })
        .catch((er) => {
          this.isloading = false
          this.isactive = !this.isactive
          this.message = er.response.data
        })
    },
    async uploadFile() {
      if (!this.files) return
      console.log('Files length: ' + this.files.length)
      this.isloading = true
      const formData = new FormData()
      formData.append('FORM', JSON.stringify(this.formData))
      formData.append('file', this.files)

      await this.$axios
        .post('uploadsingle', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.isloading = false
          this.message = res.data
           this.fetchData();
        })
        .catch((er) => {
          this.isloading = false
          this.message = er.response.data
        })
    },
    previewImg(url) {
      this.previewSrc = url
      this.preview = true
    },
    async fetchData() {
      this.isloading = true
      await this.$axios
        .get('/ad_f')
        .then((res) => {
          console.log('Data: ' + res.data[0])
          this.loadData = res.data.map((el) => {
            console.log('EL: ' + el.id)
            if (el.isactive === 1) {
              this.isactive = true
            } else {
              this.isactive = false
            }
            return {
              img_id: el.id,
              img_name: el.img_name,
              img_path: el.img_path,
              img_remark: el.remark,
              img_active: el.isactive,
              img_function: el.id,
            }
          })
          console.log('AFTER MAP: ' + this.loadData[0].categ_id)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isloading = false
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
</style>