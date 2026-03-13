<template>
  <div class="text-center">
    <h1>ID: {{ this.$route.params.id }}</h1>
    <h1>PRODUCT ID: {{ product_id }}</h1>
    <v-dialog v-model="dialogMessage" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-select
        v-model="formData.pro_category"
        :items="category"
        :item-value="(item) => item.categ_id"
        :item-text="(item) => item.categ_id + ' - ' + item.categ_name"
        :rules="[(v) => !!v || 'Item is required']"
        label="ປະເພດສິນຄ້າ"
        required
      ></v-select>
      <v-text-field
        v-model="formData.pro_id"
        :counter="10"
        :rules="rules.nameRule"
        label="ໄອດີສິນຄ້າ"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.pro_name"
        :counter="10"
        :rules="rules.nameRule"
        label="ຊື້ສິນຄ້າ"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.pro_price"
        :counter="10"
        :rules="rules.nameRule"
        label="ລາຄາ"
        required
      ></v-text-field>
      <v-textarea
        outlined
        name="input-7-4"
        counter="5"
        label="ຄຳອະທິບາຍ"
        value="abc"
        v-model="formData.pro_desc"
      ></v-textarea>
      <v-file-input
        :rules="rules.imageRule"
        ref="filesfield"
        multiple
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="ຮູບພາບຫລາຍພາບ"
        @change="onFilesChange"
      ></v-file-input>
      <div v-if="1 == 0">
        <v-card class="pa-md-6 mx-lg-auto">
          <v-row justify="space-around">
            <v-card v-for="(imgUrl, idx) in imagesPreviewURL" :key="idx">
              <v-list-item-avatar>
                <v-img :src="imgUrl.IMG_URL"></v-img>
              </v-list-item-avatar>
              <v-card-title v-if="imgUrl.isvalid">
                <v-alert dense outlined type="error">
                  <div class="grey--text mb-2">
                    ຂະຫນາດຮູບພາບສູງກ່ອນກຳນົດ
                    <strong>{{ imgUrl.isvalid }}</strong>
                  </div>
                </v-alert>
              </v-card-title>
              <v-card-actions>
                <v-btn
                  text
                  color="blue darken-1"
                  @click.prevent="deleteFile(idx)"
                >
                  <i class="fas fa-trash-alt"></i>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-card>
      </div>
      <div>
        <v-list three-line>
          <template v-for="(item, index) in imagesPreviewURL">
            <v-list-item :key="index">
              <v-list-item-avatar>
                <v-img :src="item.IMG_URL"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.NAME"></v-list-item-title>
                <v-list-item-subtitle v-html="item.isvalid">
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="blue darken-1"
                @click.prevent="deleteFile(index)"
              >
                <i class="fas fa-trash-alt"></i>
              </v-btn>
            </v-list-item>
            <v-divider :key="index + item.NAME"></v-divider>
          </template>
        </v-list>
      </div>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        ກວດສອບຂໍ້ມູນ
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn>

      <v-btn color="warning" @click="resetValidation"> ບັນທຶກ </v-btn>
      <v-btn color="warning" @click.prevent="uploadFiles"> upload files </v-btn>
      <v-btn color="warning" @click.prevent="switchtoproduct">
        Product id
      </v-btn>
    </v-form>
    <nuxt-child />
  </div>
</template>
<script>
import ImagePreviewMixin from './product/mixins/ImagePreviewMixin.vue'
import IdIndex from './product/_id/index.vue'
export default {
  mixins: [ImagePreviewMixin, IdIndex],
  middleware: 'auths',
  data() {
    return {
      // product_id: this.$route.params.id,
      dialog: false,
      dialogMessage: false,
      isloading: false,
      message: '',
      valid: true,
      name: '',
      rules: {
        nameRule: [
          (v) => !!v || 'Name is required',
          (v) =>
            (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        // imageRule: [
        //   (files) =>
        //     !files ||
        //     !files.some((file) => file.size > 2_097_152) ||
        //     'Avatar size should be less than 2 MB!',
        // ],
      },
      category: [],
      formData: {
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_desc: '',
        pro_status: false,
      },
    }
  },
  mounted() {
    this.fetchCategory()
    console.log('Mounted: ')
    // this.product_id = this.$route.params.id
    this.$route.params.id && this.fetchProId(this.$route.params.id)
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
    // '$route.query': '$changeId',
  },
  methods: {
    changeId() {
      this.product_id = this.$route.params.id
    },
    switchtoproduct() {
      this.$router.push('/admin/product/' + 11)
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async fetchCategory() {
      await this.$axios
        .get('category_f')
        .then((res) => {
          console.log('=>category' + res.data)
          this.category = res.data.map((el) => {
            return {
              categ_id: el.categ_id,
              categ_name: el.categ_name,
              categ_desc: el.categ_desc,
            }
          })
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      console.log(this.category.length)
      console.log('CAT ID: ' + this.category[0].categ_id)
    },
    async fetchProId(id) {
      this.isloading = true
      await this.$axios
        .get('/product_f_id', { pro_id: id })
        .then((res) => {
          console.log('Product ID ' + res.data)
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
    async uploadFiles(event) {
      console.log('Files length: ' + this.files.length)
      console.log('Files name1: ' + this.files[0].name)
      console.log('Files name2: ' + this.files[1].name)
      this.isloading = true
      const formData = new FormData()
      formData.append('FORM', JSON.stringify(this.formData))
      this.files.forEach((element) => {
        formData.append('files', element)
      })
      await this.$axios
        .post('uploadmulti', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.isloading = false
          this.message = res.data
        })
        .catch((er) => {
          this.isloading = false
          this.message = er.response.data
        })
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