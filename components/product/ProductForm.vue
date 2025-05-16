<template>
  <div>
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="preview" hide-overlay width="400px">
      <dia-image :i-url="previewSrc" @closeDia="preview = false"> </dia-image>
    </v-dialog>
    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form
        :key="priceListFormKey"
        @close-dialog="priceListDialog = false"
        :record-id="pricingRecordId"
        @refresh="fetchData"
      >
      </price-list-form>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          {{ title }}
        </v-chip>
        <!-- <span class="headline">{{ title }}</span> -->
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="formLocal" v-model="validLocal" lazy-validation>
            <!-- Row 1 -->
            <v-row>
              <v-col cols="4" sm="6" md="4">
                <!-- {{ `company id ${formData.companyId}` }} -->
                <v-autocomplete
                  item-text="name"
                  item-value="id"
                  :items="companyList"
                  label="ຮ້ານ*"
                  v-model="formData.companyId"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-autocomplete
                  item-text="categ_name"
                  item-value="categ_id"
                  :items="category"
                  label="ປະເພດສິນຄ້າ*"
                  v-model="formData.pro_category"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="formData.pro_id"
                  :counter="10"
                  :disabled="!!formData.pro_id"
                  label="ໄອດີສິນຄ້າ"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Row 2 -->
            <v-row>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="formData.pro_name"
                  :counter="50"
                  :rules="rules.nameRule"
                  label="ຊື້ສິນຄ້າ*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-row>
                  <v-col cols="6" sm="6" md="6">
                    <v-text-field
                      v-model="formData.pro_price"
                      :counter="10"
                      :rules="rules.priceRule"
                      label="ລາຄາ*"
                      type="number"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <v-autocomplete
                      item-text="code"
                      item-value="id"
                      :items="findAllCurrency"
                      label="Currency*"
                      v-model="formData.saleCurrencyId"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-row>
                  <v-col cols="6" sm="6" md="6">
                    <v-text-field
                      v-model="formData.pro_cost_price"
                      :counter="10"
                      type="number"
                      :rules="rules.priceRule"
                      label="ຕົ້ນທຶນ*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <v-autocomplete
                      item-text="code"
                      item-value="id"
                      :items="findAllCurrency"
                      label="Currency*"
                      v-model="formData.costCurrencyId"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!-- Row 3 -->
            <v-row>
              <v-col cols="2">
                <v-text-field
                  v-model="formData.pro_retail_price"
                  :counter="10"
                  type="number"
                  :rules="rules.priceRule"
                  label="ລາຄາສົ່ງ %"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="2"
                style="
                  display: flex;
                  align-items: center;
                  /* justify-content: center; */
                "
              >
                <v-btn
                  style="border: 1px solid blue"
                  color="primary"
                  rounded
                  @click="triggerPriceListForm()"
                >
                  ຈັດການລາຄາ
                </v-btn>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-file-input
                  :rules="rules.imageRule"
                  ref="filesfield"
                  multiple
                  accept="image/png, image/jpeg, image/bmp, image/webp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="ຮູບພາບຫລາຍພາບ"
                  @change="onFilesChange"
                ></v-file-input>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="formData.minStock"
                  :counter="10"
                  type="number"
                  :rules="rules.minRule"
                  label="ສຕັອກຂັ້ນຕ່ຳ*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Row 4 -->
            <v-row>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="formData.barCode"
                  label="barcode"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-autocomplete
                  item-text="name"
                  item-value="id"
                  :items="unitList"
                  label="ຫົວຫນ່ວຍຮັບເຄື່ອງ*"
                  v-model="formData.receiveUnitId"
                ></v-autocomplete>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-autocomplete
                  item-text="name"
                  item-value="id"
                  :items="unitList"
                  label="ຫົວຫນ່ວຍນັບສາງ*"
                  v-model="formData.stockUnitId"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="formData.vendorName"
                  label="Vendor name"

                ></v-text-field>
              </v-col>
              <v-col cols="4" sm="6" md="4">
      
              </v-col>
              <v-col cols="4" sm="6" md="4">
   
              </v-col>
            </v-row>
            <!-- Row 5 -->
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-card class="mb-1">
                  <canvas ref="barcodeCanvas"></canvas>
                  <v-card-text>
                    ລາຄາ: {{ formatNumber(formData.pro_price) }}
                    <!-- <img :src="barcodeImage" /> -->
                  </v-card-text>
                </v-card>
                <v-row no-gutters justify="center" align="center">
                  <!-- <v-col cols="12"> -->
                  <v-btn
                    :disabled="formData.barCode.length > 0"
                    color="primary"
                    rounded
                    @click.prevent="generateBarcode"
                  >
                    <i class="mdi mdi-barcode"></i>
                    Generate
                  </v-btn>
                  <v-checkbox
                    v-model.number="threeColPaper"
                    label="3Col? "
                  ></v-checkbox>
                  <v-btn
                    :disabled="formData.barCode.length == 0"
                    color="primary"
                    rounded
                    @click.prevent="printBarcode"
                  >
                    <i class="mdi mdi-barcode"></i>
                    print
                  </v-btn>
                  <!-- </v-col> -->
                </v-row>
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-textarea
                  outlined
                  name="input-7-4"
                  counter="100"
                  label="ຄຳອະທິບາຍ"
                  value="abc"
                  v-model="formData.pro_desc"
                ></v-textarea>
              </v-col>
              <v-col cols="2" sm="2" md="2">
                <v-checkbox
                  v-model.number="formData.isActive"
                  label="Is Active"
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-divider class="mt-1"></v-divider>
            <div>
              <v-card
                class="pa-md-6 mx-lg-auto"
                v-for="(img, idx) in formData.pro_image"
                :key="idx"
              >
                <v-row justify="space-around">
                  <v-list-item-avatar
                    @click.prevent="previewImg(`${host}/uploads/${img.name}`)"
                  >
                    <v-img :src="`${host}/uploads/${img.name}`"> </v-img>
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
            <!-- Image list -->
            
            <div>
              <v-list three-line>
                <template v-for="(item, index) in imagesPreviewURL">
                 
                  <v-list-item :key="index">
                    <v-list-item-avatar
                      @click.prevent="previewImg(item.IMG_URL)"
                    >
                      <v-img :src="item.IMG_URL"></v-img>
                      {{item.IMG_URL}}
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
                      @click.prevent="deleteFileFrServ(index)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </v-btn>
                  </v-list-item>
                  <v-divider :key="index + item.NAME"></v-divider>
                </template>
              </v-list>
            </div>
          </v-form>
        </v-container>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          variant="text"
          rounded
          @click="$emit('close-dialog')"
        >
          Close
        </v-btn>
        <v-btn color="primary" variant="text" rounded @click="uploadFilesLocal">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'
import {
  swalSuccess,
  swalError2,
  confirmSwal,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common'
import ImagePreviewMixin from '../../pages/product/index.vue'
import { hostName } from '~/common/api'
import { mapActions, mapGetters } from 'vuex'
import JsBarcode from 'jsbarcode'
// import { Logger } from 'html2canvas/dist/types/core/logger'
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    headerId: {
      type: Number,
      default: null,
    },
  },
  middleware: 'auths',
  mixins: [ImagePreviewMixin],

  computed: {
    ...mapGetters([
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
    ]),
    unitList() {
      return this.findAllUnit
    },
    host() {
      return hostName()
    },
    barcode2by2cm() {
      const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <style>
        @font-face {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
        * {
          font-family: 'DM Sans';
        }
      </style>
    </head>
    <body>
      <div style="text-align: center;">
        <table style="width: 200px; text-align: center;">
          <tr>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
            <td style="width: 100px; height: 20px; font-size: 9px;">
              ລາຄາ: ${this.formatNumber(this.formData.pro_price)}
              <img src="${this.barcodeImage}">
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `
      return html
    },
    barcode3by2cm() {
      const html = `
      <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
              <div style="text-align: center;">
      <table style="width: 200px; text-align: center;" >
  <tr>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
    </td>
    <td style="width: 50px; height: 20px;font-size:9px;">
        ລາຄາ:${this.formatNumber(this.formData.pro_price)}
        <img src="${this.barcodeImage}">
       
    </td>
  
  </tr>
</table>
</div>
</body>
            </html>
`

      return html
    },
    barcodeNormal() {
      const html = `
          <!DOCTYPE html>
          <html>
          <head
          <title></title>
          <style>

          @font-face {
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
        }
          *{
            font-family: 'DM Sans';
          }
        </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <table style="width: 200px; text-align: center;" >
                        <tr>
                          <td style="width: 500px; height: 15px;font-size:8px;">
                            ລາຄາ:${this.formatNumber(this.formData.pro_price)}
                            </br>
                            <img src="${this.barcodeImage}">
                          </td>               
                        </tr>
                      </table>
                </div>
            </body>
            </html>
        `

      return html
    },
  },
  mounted() {
    console.log('FORMDATA ID: ' + this.formData.pro_id)
    this.pro_id = this.headerId
    this.formData.pro_id = this.headerId
    console.log('Mounted: ')
    this.fetchProId(this.headerId)
    this.fetchCategory()
    this.fetchCompany()
  },
  validate(data) {
    // this.formData.pro_id = data.params.id
    console.log('MIXIN ID: ' + data.params.id)
    console.log('PRO DEFUALT ID: ' + this.pro_id)
    return /^\d+$/.test(data.params.id)
  },
  data() {
    return {
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      barcodeValue: '',
      imagesPreviewURL: [],
      files: null,
      IMG_URL: '',
      NAME: '',
      barcodeImage: '',
      rules: {
        nameRule: [
          (v) => !!v || 'ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ ',
          (v) => (v && v.length <= 150) || 'ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ',
        ],
        priceRule: [
          // (v) => !!v || 'ກະລຸນາໃສ່ລາຄາ',
          (v) => +v >= 0 || 'ກະລຸນ ໃສ່ຈຳນວນ > 0',
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
              console.log(
                'File size: aaa' + files.length + ' Each: ' + totalSize || 0
              )
            } else {
              console.log('File: ' + files)
            }

            console.log('Total: ' + totalSize)
            return totalSize < 2000000 || 'ຂະຫນາດເກີນ'
          },
        ],
      },
      preview: false,
      previewSrc: null,
      title: 'ຈັດການສິນຄ້າ',
      valid: false,
      category: [],
      formData: {
        productId: null,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        companyId: 2,
        pro_cost_price: 0,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
        vendorName:'',
      },
      companyList: [],
      isLoading: false,
      validLocal: true,
      diaMessageTitle: 'ຄຳເຕືອນ',
      diaMessageBody: 'ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ',
      pro_id: null,
      dia_confirm: false,
      tempImgId: null,
      // formData: {}
    }
  },
  methods: {
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.formData.productId
      this.priceListFormKey += 1
      this.priceListDialog = true
    },
    formatNumber(val) {
      return getFormatNum(val)
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue = Math.floor(Math.random() * 900000000000) + 1000000000
      // Use jsbarcode library to generate the barcode SVG image
      // Get the canvas element
      let canvas = document.createElement('canvas')
      // canvas.width = 20 // Approximation for 3cm at 96dpi
      // canvas.height = 20 // Approximation for 2cm at 96dpi
      JsBarcode(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 10,
        // margin: 5,
        // width: 30, // Match canvas width
        // height: 20, // Match canvas height
      })
      this.formData.barCode = barcodeValue.toString()
      this.generateBarcodeImage(barcodeValue)
    },
    generateBarcodeImage(barcodeValue) {
      // Get the canvas element using the ref attribute
      if (!barcodeValue) return
      let canvas = this.$refs.barcodeCanvas
      console.log(`.....Canvas logger.....`)
      console.log(canvas)
      console.log(canvas.width, canvas.height)
      // Set the canvas width and height to match the paper size
      // canvas.width = 20
      // canvas.height = 10
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcodeValue, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10
        width: 1, // Match canvas width
        height: 13, // Match canvas height 35
      })

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL()
    },
    validateLocal() {
      console.log('VALIDATING...')
      this.$refs.formLocal.validate()
    },
    async fetchCategory() {
      this.isLoading = true
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
      this.isLoading = false
    },
    async fetchCompany() {
      this.isLoading = true
      await this.$axios
        .get('api/company/find')
        .then((res) => {
          console.log('=>Company' + res.data)
          this.companyList = res.data.map((el) => {
            return {
              id: el.id,
              name: el.name,
            }
          })
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },
    previewImg(url) {
      console.warn(`image preview ${url}`)
      this.previewSrc = url
      this.preview = true
    },
    onFilesChange(payload) {
      const file = payload // in case vuetify file input
      this.files = payload
      if (file) {
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
      this.deleteFileFrServ(idx)
    },
    sizeValidate(z) {
      console.log('SIZE' + z)
      const maxSize = 20000000
      if (z > maxSize) {
        return `Max size is ${maxSize / 1000}Kb`
      }
    },
    async fetchProId(id) {
      this.isLoading = true
      console.log('FECT ID:' + id)
      await this.$axios
        .post('/product_f_id', { proid: id })
        .then((res) => {
          console.log('Product ID ' + res.data)
          const el = res.data[0]
          console.log('===> Min stock', el.minStock)
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
            productId: el.id,
            pro_category: el.pro_category,
            pro_id: el.pro_id,
            pro_name: el.pro_name,
            pro_price: el.pro_price,
            pro_desc: el.pro_desc,
            pro_status: el.pro_status === 1 || false,
            pro_retail_price: el.retail_cost_percent,
            pro_cost_price: el.cost_price,
            companyId: el.companyId,
            minStock: el.minStock,
            barCode: el.barCode,
            receiveUnitId: el.receiveUnitId,
            stockUnitId: el.stockUnitId,
            costCurrencyId: el.costCurrencyId,
            saleCurrencyId: el.saleCurrencyId,
            pro_image: image,
            isActive: el.isActive,
            vendorName: el.vendorName,
          }
          if (!this.formData.barCode) {
            // ****** prevent error temporary *****
            this.formData.barCode = ''
          }
          this.generateBarcodeImage(this.formData.barCode)
        })
        .catch((er) => {
          console.log('Error: ' + er)
          this.message = er
        })
      this.isLoading = false
    },

    async deleteFileFrServ(idx) {
      //   v && this.deleteFileFrServ'

      confirmSwal(this.$swal, 'warning', async () => {
        console.log('Delete record function')
        this.isLoading = true
        await this.$axios
          .post('/unlink_file', {
            img_name: this.formData.pro_image[idx].name,
          })
          .then((res) => {
            res.data === 'Transaction completed' &&
              this.formData.pro_image.splice(idx, 1)
            // this.message = res.data
            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          })
          .catch((er) => {
            this.message = er.error
          })
        this.isLoading = false
      })
    },

    printBarcode() {
      const windowContent = this.threeColPaper
        ? this.barcode2by2cm
        : this.barcodeNormal
      const printWin = window.open(
        '',
        '',
        'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
      )
      printWin.document.open()
      printWin.document.write(windowContent)

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)
    },
    async uploadFilesLocal() {
      console.log('===> Upload data')
      if (!this.$refs.formLocal.validate()) {
        return
      }
      this.isLoading = true
      const formData = new FormData()
      formData.append('FORM', JSON.stringify(this.formData))
      if (this.files) {
        this.files.forEach((element) => {
          formData.append('files', element)
        })
      }

      await this.$axios
        .post('uploadmulti_update', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.$emit('close-dialog')
          this.$emit('refresh')
          swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
          // this.message = res.data
        })
        .catch((er) => {
          // this.message = er.response.data
          swalError2(this.$swal, 'Error', er.response.data)
        })
      this.isLoading = false
    },
  },
}
</script>

<style scoped>
.my-forn {
  font-weight: bo;
}
</style>