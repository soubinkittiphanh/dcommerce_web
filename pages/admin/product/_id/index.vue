<template>
  <div class="text-center">
    <h1>ແກ້ໄຂສິນຄ້າ</h1>
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
    <v-dialog v-model="dia_confirm" width="500" persistent>
      <dia-confirm
        :message-title="diaMessageTitle"
        :message-body="diaMessageBody"
        @react="reactDiaConfirm"
      ></dia-confirm>
    </v-dialog>

    <v-form ref="formLocal" v-model="validLocal" lazy-validation>
      <v-select
        v-model="formData.outlet"
        :items="outlet"
        :item-value="(item) => item.outlet_id"
        :item-text="(item) => item.outlet_id + ' - ' + item.outlet_name"
        :rules="[(v) => !!v || 'ກະລຸນາເລືອກຮ້ານ']"
        label="ຮ້ານ"
        required
      ></v-select>
      <v-select
        v-model="formData.pro_category"
        :items="category"
        :item-value="(item) => item.categ_id"
        :item-text="(item) => item.categ_id + ' - ' + item.categ_name"
        :rules="[(v) => !!v || 'ກະລຸນາເລືອກ ປະເພດສິນຄ້າ']"
        label="ປະເພດສິນຄ້າ"
        required
      ></v-select>
      <v-text-field
        v-model="formData.pro_id"
        :counter="10"
        :disabled="!!formData.pro_id"
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
        :rules="rules.priceRule"
        label="ລາຄາ"
        type="number"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.pro_cost_price"
        :counter="10"
        type="numbser"
        :rules="rules.priceRule"
        label="ຕົ້ນທຶນ"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.pro_retail_price"
        :counter="10"
        type="numbser"
        :rules="rules.priceRule"
        label="ລາຄາສົ່ງ %"
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
      <div>
        <v-card
          class="pa-md-6 mx-lg-auto"
          v-for="(img, idx) in formData.pro_image"
          :key="idx"
        >
          <v-row justify="space-around">
            <v-list-item-avatar
              @click.prevent="
                previewImg(`https://nodejsclusters-99563-0.cloudclusters.net/${img.name}`)
              "
            >
              <v-img :src="`https://nodejsclusters-99563-0.cloudclusters.net/${img.name}`">
              </v-img>
            </v-list-item-avatar>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="blue darken-1"
              @click.prevent="deleteFileFrServ(idx)"
            >
              <i class="fas fa-trash-alt"></i>
            </v-btn>
          </v-row>
        </v-card>
      </div>
      <div>
        <v-list three-line>
          <template v-for="(item, index) in imagesPreviewURL">
            <v-list-item :key="index">
              <v-list-item-avatar @click.prevent="previewImg(item.IMG_URL)">
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
      <v-btn color="error" class="mr-4" @click.prevent="hello">
        ລ້າງຂໍ້ມູນ
      </v-btn>
      <v-btn
        color="primary"
        dark
        class="mb-2"
        @click.prevent="uploadFilesLocal"
      >
        ບັນທຶກ
      </v-btn>
      <!-- <v-btn color="" @click.prevent="uploadFiles"> upload files </v-btn> -->
    </v-form>
    <nuxt-child />
  </div>
</template>
<script>
// import ImagePreviewMixin from '../mixins/ImagePreviewMixin.vue'
import ImagePreviewMixin from '../index.vue'
export default {
  middleware: 'auths',
  mixins: [ImagePreviewMixin],
  mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id)
    this.pro_id = this.$route.params.id
    this.formData.pro_id = this.$route.params.id
    console.log('Mounted: ')
    this.$route.params.id && this.fetchProId(this.$route.params.id)
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id)
    console.log('PRO DEFUALT ID: ' + this.pro_id)
    return /^\d+$/.test(data.params.id)
  },
  data() {
    return {
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null,
    }
  },
  methods: {
    validateLocal() {
      console.log('VALIDATING...')
      this.$refs.formLocal.validate()
    },
    updateData() {
      this.isloading = true
      this.$axios
        .put('/uploadmulti_update', this.formData)
        .then((res) => {
          this.message = res.data
        })
        .catch((er) => {
          this.message = er
        })
      this.isloading = false
    },
    async fetchProId(id) {
      this.isloading = true
      console.log('FECT ID:' + id)
      await this.$axios
        .post('/product_f_id', { proid: id })
        .then((res) => {
          console.log('Product ID ' + res.data)
          const el = res.data[0]
          const image =
            res.data[0].img_name == null
              ? []
              : res.data.map((el) => {
                  return {
                    name: el.img_name,
                    path: el.img_path,
                  }
                })
          this.formData = {
            pro_category: el.pro_category,
            pro_id: el.pro_id,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            pro_desc: el.pro_desc,
            pro_status: el.pro_status === 1 || false,
            pro_retail_price: el.retail_cost_percent,
            pro_cost_price: el.cost_price,
            outlet: el.outlet,
            pro_image: image,
          }
          console.log('IMAGE COUNT: ' + this.formData.pro_image.length)
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.message = er
        })
      this.isloading = false
    },
    deleteFileFrServ(idx) {
      console.log('IDX: ' + idx)
      this.tempImgId = idx
      this.dia_confirm = true
    },
    async reactDiaConfirm(v) {
      //   v && this.deleteFileFrServ'
      this.dia_confirm = false
      this.isloading = true
      v &&
        (await this.$axios
          .post('/unlink_file', {
            img_name: this.formData.pro_image[this.tempImgId].name,
          })
          .then((res) => {
            res.data === 'Transaction completed' &&
              this.formData.pro_image.splice(this.tempImgId, 1)
            this.message = res.data
          })
          .catch((er) => {
            this.message = er.error
          }))
      this.isloading = false
    },
    hello() {
      if (!this.$refs.formLocal.validate()) {
        console.log('VALIDATE...' + false)
      } else {
        console.log('VALIDATE...' + true)
      }

      // console.log('VALIDATE...')
    },
    async uploadFilesLocal() {
      if (!this.$refs.formLocal.validate()) {
        return
      }
      console.log('Files length: ' + this.files.length)
      this.isloading = true
      const formData = new FormData()
      formData.append('FORM', JSON.stringify(this.formData))
      this.files.forEach((element) => {
        formData.append('files', element)
      })
      await this.$axios
        .post('uploadmulti_update', formData, {
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