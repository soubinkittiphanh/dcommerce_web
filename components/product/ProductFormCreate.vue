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
    <!-- SELECTED OUTLET {{ formData.outlet }} -->
    <v-card>
      <v-card-title>
        <v-chip class="ma-2" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          {{ title }}
        </v-chip>
      </v-card-title>
      <v-card-text>

        <v-form ref="form" v-model="valid" lazy-validation>

          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete item-text="outlet_name" item-value="outlet_id" :items="outlet" label="ຮ້ານ*"
                v-model="formData.outlet"></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete item-text="categ_name" item-value="categ_id" :items="category" label="ປະເພດສິນຄ້າ*"
                v-model="formData.pro_category"></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field :value="formData.pro_id || '1XXX'" :counter="10" label="ໄອດີສິນຄ້າ" disabled
                required></v-text-field>
            </v-col>


            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="formData.pro_name" :counter="50" :rules="rules.nameRule" label="ຊື້ສິນຄ້າ*"
                required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <!-- <v-text-field v-model="formData.pro_price" :counter="10" :rules="rules.priceRule" label="ລາຄາ*"
                type="number" required></v-text-field> -->
              <v-row>
                <v-col cols="6" sm="6" md="6">
                  <v-text-field v-model="formData.pro_price" :counter="10" :rules="rules.priceRule" label="ລາຄາ*"
                    type="number" required></v-text-field>

                </v-col>
                <v-col cols="6" sm="6" md="6">
                  <v-autocomplete item-text="code" item-value="id" :items="findAllCurrency" label="Currency*"
                    v-model="formData.saleCurrencyId"></v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <!-- <v-text-field v-model="formData.pro_cost_price" :counter="10" type="number" :rules="rules.priceRule"
                label="ຕົ້ນທຶນ*" required></v-text-field> -->
              <v-row>
                <v-col cols="6" sm="6" md="6">
                  <v-text-field v-model="formData.pro_cost_price" :counter="10" type="number" :rules="rules.priceRule"
                    label="ຕົ້ນທຶນ*" required></v-text-field>

                </v-col>
                <v-col cols="6" sm="6" md="6">
                  <v-autocomplete item-text="code" item-value="id" :items="findAllCurrency" label="Currency*"
                    v-model="formData.costCurrencyId"></v-autocomplete>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="formData.pro_retail_price" :counter="10" type="number" :rules="rules.priceRule"
                label="ລາຄາສົ່ງ %" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-file-input :rules="rules.imageRule" ref="filesfield" multiple accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar" prepend-icon="mdi-camera" label="ຮູບພາບຫລາຍພາບ"
                @change="onFilesChange"></v-file-input>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="formData.minStock" :counter="10" type="number" :rules="rules.minRule"
                label="ສຕັອກຂັ້ນຕ່ຳ*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="formData.barCode" label="barcode" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete item-text="name" item-value="id" :items="unitList" label="ຫົວຫນ່ວຍຮັບເຄື່ອງ*"
                v-model="formData.receiveUnitId"></v-autocomplete>
              <!-- <v-text-field v-model="formData.receiveUnitId" :counter="10" type="number" :rules="rules.minRule"
                label="ຫົວຫນ່ວຍຮັບເຄື່ອງ" required></v-text-field> -->
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete item-text="name" item-value="id" :items="unitList" label="ຫົວຫນ່ວຍນັບສາງ*"
                v-model="formData.stockUnitId"></v-autocomplete>
              <!-- <v-text-field v-model="formData.stockUnitId" :counter="10" type="number" :rules="rules.minRule"
                label="ຫົວຫນ່ວຍນັບສາງ" required></v-text-field> -->
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-textarea outlined name="input-7-4" counter="100" label="ຄຳອະທິບາຍ" value="abc"
                v-model="formData.pro_desc"></v-textarea>
            </v-col>



          </v-row>

          <!-- <v-select v-model="formData.outlet" :items="outlet" :item-value="(item) => item.outlet_id"
        :item-text="(item) => item.outlet_id + ' - ' + item.outlet_name" :rules="[(v) => !!v || 'ກະລຸນາເລືອກຮ້ານ']"
        label="ຮ້ານ" required></v-select>
      <v-select v-model="formData.pro_category" :items="category" :item-value="(item) => item.categ_id"
        :item-text="(item) => item.categ_id + ' - ' + item.categ_name" :rules="[(v) => !!v || 'ກະລຸນາເລືອກປະເພດສິນຄ້າ']"
        label="ປະເພດສິນຄ້າ" required></v-select>
      <v-text-field :value="formData.pro_id || '1XXX'" :counter="10" label="ໄອດີສິນຄ້າ" disabled required></v-text-field>
       -->
          <!-- <v-text-field v-model="formData.pro_name" :counter="10" :rules="rules.nameRule" label="ຊື້ສິນຄ້າ"
        required></v-text-field>
      <v-text-field v-model="formData.pro_price" :counter="10" type="number" :rules="rules.priceRule" label="ລາຄາ"
        required></v-text-field>
      <v-text-field v-model="formData.pro_cost_price" :counter="10" :rules="rules.costPrice" type="number" label="ຕົ້ນທືນ"
        required></v-text-field> -->
          <!-- <v-text-field v-model="formData.pro_retail_price" :counter="10" :rules="rules.retailRule" type="number"
        label="ລາຄາສົ່ງ %" required></v-text-field>
      <v-textarea outlined name="input-7-4" counter="5" label="ຄຳອະທິບາຍ" value="abc"
        v-model="formData.pro_desc"></v-textarea>
      <v-file-input :rules="rules.imageRule" ref="filesfield" multiple accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar" prepend-icon="mdi-camera" label="ຮູບພາບຫລາຍພາບ"
        @change="onFilesChange"></v-file-input> -->
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
                    <v-btn text color="blue darken-1" @click.prevent="deleteFile(idx)">
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
                  <v-list-item-avatar @click.prevent="previewImg(item.IMG_URL)">
                    <v-img :src="item.IMG_URL"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.NAME"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.isvalid">
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-btn text color="blue darken-1" @click.prevent="deleteFile(index)">
                    <i class="fas fa-trash-alt"></i>
                  </v-btn>
                </v-list-item>
                <v-divider :key="index + item.NAME"></v-divider>
              </template>
            </v-list>
          </div>

          <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        ກວດສອບຂໍ້ມູນ
      </v-btn> -->

          <!-- <v-btn color="error" class="mr-4" @click="reset"> ລ້າງຂໍ້ມູນ </v-btn> -->
          <!-- <v-btn color="primary" dark class="mb-2" @click="uploadFiles">
            ບັນທຶກ
          </v-btn> -->
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="$emit('close-dialog')">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="uploadFiles">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <nuxt-child />
  </div>
</template>
<script>
// import ImagePreviewMixin from '../m/mixins/ImagePreviewMixin.vue'
import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'
import ImagePreviewMixin from '../../pages/admin/product/mixins/ImagePreviewMixin.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: 'auths',
  mixins: [ImagePreviewMixin],

  data() {
    return {
      preview: false,
      previewSrc: null,
      dialog: false,
      dialogMessage: false,
      message: '',
      isloading: false,
      valid: true,
      name: '',
      title: 'ເພີ່ມສິນຄ້າ',
      rules: {
        nameRule: [
          (v) => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ',
          (v) => (v && v.length <= 150) || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ',
        ],
        priceRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
          (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        minRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
          // (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວ > 0',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        costPrice: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາຕົ້ນທຶນ',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        retailRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ເປີເຊັນ ສ່ວນຫລຸດ ສຳລັບຂາຍສົ່ງ',
          (v) => +v >= 0 || 'ກະລຸນ ໃສ່ເປີເຊັນ > 0',
          (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
        ],
        imageRule: [
          (files) => {
            let fileSize = 0
            let totalSize = 0
            if (files) {
              files.forEach((el) => {
                fileSize += el.size
                console.log('Size: ' + el.size)
              })
              totalSize = fileSize / files.length
              console.log('File size: aaa' + files.length + " Each: " + totalSize || 0);
            } else {
              console.log('File: ' + files)
            }

            console.log('Total: ' + totalSize)
            return totalSize < 2000000 || "ຂະຫນາດເກີນ"
          },
        ],
      },
      category: [],
      formData: {
        outlet: 1,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        pro_outlet: 1,
        pro_cost_price: 0,
        createdAt: null,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
      },
      outlet: [],
    }
  },
  mounted() {
    this.fetchCategory();
    this.fetchOutlet();
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
    formData(obj) {
      console.log('Watch fromData' + obj)
    },
  },
  computed: {
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    unitList() {
      return this.findAllUnit
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
    async fetchCategory() {
      this.isloading = true
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
      this.isloading = false
    },
    async fetchOutlet() {
      this.isloading = true
      await this.$axios
        .get('outlet')
        .then((res) => {
          console.log('=>outlet' + res.data)
          this.outlet = res.data.map((el) => {
            return {
              outlet_id: el.id,
              outlet_name: el.name,
              outlet_tel: el.tel,
            }
          })
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isloading = false
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return
      }
      console.log('Outlet: ' + this.formData.outlet)

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
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          this.$emit('refresh')
          this.$emit('close-dialog')
          // this.message = res.data
        })
        .catch((er) => {
          this.isloading = false
          swalError2(this.$swal, "Error", er)
          // this.message = er.response.data
        })
    },
    previewImg(url) {
      this.previewSrc = url
      this.preview = true
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