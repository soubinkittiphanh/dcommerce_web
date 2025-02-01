<template>
  <div>
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
        <v-chip class="ma-2" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          {{ title }}
        </v-chip>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- Row 1 -->
          <v-row>
            <v-col cols="4">
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="companyList"
                label="ຮ້ານ*"
                v-model="formData.companyId"
              ></v-autocomplete>
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                item-text="categ_name"
                item-value="categ_id"
                :items="category"
                label="ປະເພດສິນຄ້າ*"
                v-model="formData.pro_category"
              ></v-autocomplete>
            </v-col>
            <v-col cols="4">
              <v-text-field
                :value="formData.pro_id || '1XXX'"
                :counter="10"
                label="ໄອດີສິນຄ້າ"
                disabled
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Row 2 -->
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="formData.pro_name"
                :counter="50"
                :rules="rules.nameRule"
                label="ຊື້ສິນຄ້າ*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
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
            <v-col cols="4">
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
                @click="triggerPriceListForm"
              >
                ຈັດການລາຄາ
              </v-btn>
            </v-col>
            <v-col cols="4">
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
            </v-col>
            <v-col cols="4">
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
          <!-- <v-row v-if="0 == 0">
            <v-col cols="6">
              <v-btn color="primary" rounded @click="triggerPriceListForm">
                <v-icon>mdi mdi-currency-usd</v-icon>

              </v-btn>
            </v-col>
          </v-row> -->
          <!-- Row 4 -->
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="formData.barCode"
                label="barcode"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="unitList"
                label="ຫົວຫນ່ວຍຮັບເຄື່ອງ*"
                v-model="formData.receiveUnitId"
              ></v-autocomplete>
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="unitList"
                label="ຫົວຫນ່ວຍນັບສາງ*"
                v-model="formData.stockUnitId"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <!-- Row 5 -->
          <v-row>
            <v-col cols="6">
              <v-card class="mb-1">
                <canvas ref="barcodeCanvas"></canvas>
                <v-card-text>
                  ລາຄາ: {{ formatNumber(formData.pro_price) }}
                  <!-- <img :src="barcodeImage" /> -->
                </v-card-text>
              </v-card>
              <v-row no-gutters justify="center" align="center">
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
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-textarea
                outlined
                name="input-7-4"
                counter="100"
                label="ຄຳອະທິບາຍ"
                value="abc"
                v-model="formData.pro_desc"
              ></v-textarea>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model.number="formData.isActive"
                label="Is Active"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-divider class="mt-1"></v-divider>
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
                      color="primary"
                      rounded
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
        </v-form>
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
        <v-btn color="primary" variant="text" rounded @click="uploadFiles">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- <nuxt-child /> -->
  </div>
</template>
<script>
// import ImagePreviewMixin from '../m/mixins/ImagePreviewMixin.vue'
// import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common'
import ImagePreviewMixin from '../../pages/admin/product/mixins/ImagePreviewMixin.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: 'auths',
  mixins: [ImagePreviewMixin],

  data() {
    return {
      priceListFormKey: 1,
      pricingRecordId: null,
      priceListDialog: false,
      threeColPaper: false,
      preview: false,
      previewSrc: null,
      dialog: false,
      dialogMessage: false,
      message: '',
      isloading: false,
      valid: true,
      barcodeImage: '',
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
      category: [],
      formData: {
        companyId: 1,
        pro_category: 1001,
        pro_id: null,
        pro_name: '',
        pro_price: 0,
        pro_retail_price: 0,
        pro_desc: '',
        pro_status: false,
        pro_cost_price: 0,
        createdAt: null,
        minStock: 0,
        barCode: '',
        receiveUnitId: 1,
        stockUnitId: 1,
        saleCurrencyId: 1,
        costCurrencyId: 1,
        isActive: true,
      },
      companyList: [],
    }
  },
  mounted() {
    this.fetchCategory()
    this.fetchCompany()
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
    ...mapGetters([
      'findAllProductPriceListToCreate',

      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
    ]),
    unitList() {
      return this.findAllUnit
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
  methods: {
    ...mapActions([
      'clearProductPricesToCreate',
      'addProductPricesToCreate',
      'deleteProductPricesToCreate',
    ]),
    fetchData() {},
    triggerPriceListForm() {
      this.pricingRecordId = this.headerId
      this.priceListFormKey += 1
      this.priceListDialog = true
    },
    validate() {
      this.$refs.form.validate()
    },
    formatNumber(val) {
      return getFormatNum(val)
    },
    generateBarcode() {
      // Generate a random 12-digit number as the barcode value
      const barcodeValue =
        Math.floor(Math.random() * 900000000000) + 100000000000
      const canvas = document.createElement('canvas')
      // Use jsbarcode library to generate the barcode SVG image
      JsBarcode(canvas, barcodeValue.toString(), {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        margin: 10,
      })
      this.formData.barCode = barcodeValue.toString()
      this.generateBarcodeImage(barcodeValue)
    },
    generateBarcodeImage(barcode) {
      // Generate a random 12-digit number as the barcode value
      // Get the canvas element using the ref attribute
      const canvas = this.$refs.barcodeCanvas
      console.log(`.....Canvas logger.....`)
      console.log(canvas)
      console.log(canvas.width, canvas.height)
      // Set the canvas width and height to match the paper size
      // canvas.width = 40
      // canvas.height = 20
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcode, {
        format: 'code128',
        displayValue: true,
        fontSize: 12,
        // margin: 10,
        width: 1, // Match canvas width
        height: 13, // Match canvas height 35
      })

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL()
    },
    printBarcode() {
      const windowContent = this.threeColPaper
        ? this.barcode3by2cm
        : this.barcodeNormal

      //*********** No story 20240502 ********* */
      // const windowContent = `
      //     <!DOCTYPE html>
      //     <html>
      //     <head
      //     <title></title>
      //     <style>

      //     @font-face {
      //       font-family: 'DM Sans';
      //       font-style: normal;
      //       font-weight: 400;
      //       font-display: swap;
      //       src: url('/notosan/NotoSansLao-Bold.ttf') format('truetype');
      //   }
      //     *{
      //       font-family: 'DM Sans';
      //     }

      //   </style>
      //       </head>
      //       <body>

      //           <div style="text-align: center;">
      //             <div style="text-align: center;">
      //                   ລາຄາ:${this.formatNumber(this.formData.pro_price)}
      //                   </div>
      //               <img src="${this.barcodeImage}">

      //           </div>
      //       </body>
      //       </html>
      //   `

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
          this.formData.pro_category = this.category[0]['categ_id']
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isloading = false
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
          this.formData.companyId = this.companyList[0]['id'] // Auto assign default company
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },
    async uploadFiles() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.isloading = true
      const formData = new FormData()
      formData.append('FORM', JSON.stringify(this.formData))

      this.files.forEach((element) => {
        formData.append('files', element)
      })

      try {
        const response = await this.$axios.post('uploadmulti', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        const productIdCreated = response.data.split('|')[1]
        console.log(`Product ID created: ${productIdCreated}`)
        const commResponse = await this.commitPriceListRecord(productIdCreated)
        console.info(`Commit response ${commResponse}`)
        this.isloading = false
        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        console.info(
          `Create product complete: response => ${JSON.stringify(response)}`
        )

        this.$emit('refresh')
        this.$emit('close-dialog')
      } catch (error) {
        this.isloading = false
        swalError2(this.$swal, 'Error', error)
        console.error('Error response:', error.response)
      }
    },

    async commitPriceListRecord(productId) {
      this.isloading = true
      let api = 'api/priceList/create'
      console.log(`API => ProductId='${productId}'`, api)

      try {
        // Use Promise.all to handle multiple API calls concurrently
        const requests = this.findAllProductPriceListToCreate.map((item) => {
          // item.productId = productId
          // Create a new object instead of modifying Vuex state directly
          const newItem = { ...item, productId }

          return this.$axios.post(api, newItem)
        })

        // Wait for all requests to complete
        const responses = await Promise.all(requests)

        // Log the responses
        responses.forEach((response) => {
          console.log(`Load data: ${JSON.stringify(response)}`)
        })
        this.clearProductPricesToCreate()
        return responses
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ໃນການເພີ່ມ price list'
        )
        console.error('Error during price list commit:', error)
        return null
      }
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