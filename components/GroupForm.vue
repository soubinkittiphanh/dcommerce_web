<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon start>mdi-label</v-icon>
          ຈັດການກຸ່ມຜູ້ໃຊ້ງານ
        </v-chip>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            :disabled="!isCreate"
            v-model="form.code"
            label="* Code"
            required
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            v-model="form.name"
            label="* ຊື່"
            required
            :rules="nameRules"
          ></v-text-field>
          <v-autocomplete
            item-text="name"
            item-value="id"
            :items="authorityList"
            label="Authority*"
            v-model="authoritySelected"
          >
            <template v-slot:selection="{ item }">
              {{ item.name }} (code: {{ item.code }}) (: {{ item.llname }})
            </template>
            <template v-slot:item="{ item }">
              {{ item.name }} (code: {{ item.code }}) (: {{ item.llname }})
            </template>
          </v-autocomplete>
          <v-btn
            size="large"
            variant="outlined"
            @click="addAuthority"
            class="primary"
            rounded
          >
            <span class="mdi mdi-note-plus-outline"></span>
            ເພີ່ມ Authority
          </v-btn>
          <v-checkbox
            v-model.number="form.isActive"
            label="Is Active"
          ></v-checkbox>
        </v-form>

        <div>
          <v-row justify="center" align="center" class="mt-4">
            <v-divider></v-divider>
            <div class="mx-2">ສິດທິ ອານຸຍາດໃນການນຳໃຊ້</div>
            <v-divider></v-divider>
          </v-row>
          <v-row no-gutters>
            <v-chip
              v-for="menu in form.menuHeaders"
              :key="menu.id"
              class="ma-2"
              color="warning"
              variant="outlined"
              @click="removeAuthority(menu)"
            >
              {{ menu.code }} - {{ menu.llname }}
            </v-chip>
          </v-row>
        </div>
        <!-- Ticket Permissions Section -->
        <div>
          <v-row justify="center" align="center" class="mt-4">
            <v-divider></v-divider>
            <div class="mx-2">ສິດທິການຈັດການ Ticket</div>
            <v-divider></v-divider>
          </v-row>
          <v-row no-gutters class="mt-2">
            <v-col cols="12">
              <v-switch
                v-model="form.ticketCancel"
                :label="
                  form.ticketCancel
                    ? 'ອະນຸຍາດໃຫ້ຍົກເລີກ Ticket'
                    : 'ບໍ່ອະນຸຍາດໃຫ້ຍົກເລີກ Ticket'
                "
                color="primary"
                hide-details
                inset
              >
                <template v-slot:prepend>
                  <v-icon :color="form.ticketCancel ? 'success' : 'error'">
                    {{
                      form.ticketCancel
                        ? 'mdi-ticket-confirmation'
                        : 'mdi-ticket-outline'
                    }}
                  </v-icon>
                </template>
              </v-switch>
              <div class=" text-grey mt-1 ml-10">
                {{
                  form.ticketCancel
                    ? 'ກຸ່ມນີ້ສາມາດຍົກເລີກ ticket ໄດ້'
                    : 'ກຸ່ມນີ້ບໍ່ສາມາດຍົກເລີກ ticket ໄດ້'
                }}
              </div>
            </v-col>
          </v-row>
        </div>
        <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          rounded
          variant="text"
          @click="$emit('close-dialog')"
        >
          Close
        </v-btn>
        <v-btn color="primary" rounded variant="text" @click="commitRecord">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2 } from '~/common'
export default {
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true,
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  data() {
    return {
      form: {
        code: '',
        name: '',
        menuHeaders: [],
        isActive: true,
        ticketCancel: false, // Add this new field
      },
      authorityList: [],
      authoritySelected: 1,
      isloading: false,
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) =>
          (value && value.length <= 100) ||
          'Name must be less than 20 characters',
      ],
    }
  },
  async created() {
    this.loadEntry()
    this.loadAuthority()
  },
  methods: {
    removeAuthority(menu) {
      const idx = this.form.menuHeaders.indexOf(menu)
      this.form.menuHeaders.splice(idx, 1)
    },
    addAuthority() {
      if (!this.authoritySelected) return
      const newAuthority = this.authorityList.find(
        (el) => el.id == this.authoritySelected
      )
      console.log(`Authority ${newAuthority.code}`)
      if (this.form.menuHeaders.length == 0) {
        console.log(`TEHERE IS NO TERMINAL`)
        this.form.menuHeaders.push(newAuthority)
      } else if (this.form.menuHeaders == 'undefined') {
        this.form.menuHeaders.push(newAuthority)
      } else {
        const authority = this.form.menuHeaders.find(
          (el) => el.id == this.authoritySelected
        )
        console.log(`ADD TERMINAL ${authority}`)
        if (!authority) this.form.menuHeaders.push(newAuthority)
      }
    },
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading) {
        this.isloading = true
        let api = this.isCreate
          ? 'api/group/create'
          : `api/group/update/${this.recordId}`
        console.log('API => ', api)
        if (this.isCreate) {
          await this.$axios
            .post(api, this.form)
            .then((response) => {
              this.refreshData()
              return swalSuccess(
                this.$swal,
                'Succeed',
                'Your transaction completed'
              )
            })
            .catch((error) => {
              console.log('Error: ', error)
              return swalError2(
                this.$swal,
                'Error',
                'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
              )
            })
        } else {
          await this.$axios
            .put(api, this.form)
            .then((response) => {
              this.refreshData()
              return swalSuccess(
                this.$swal,
                'Succeed',
                'Your transaction completed'
              )
            })
            .catch((error) => {
              console.log('Error: ', error)
              return swalError2(
                this.$swal,
                'Error',
                'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ'
              )
            })
        }
        this.isloading = false
      }
    },
    async loadEntry() {
      console.log(`===> Update form record load`)
      if (this.recordId && !this.isCreate) {
        await this.$axios
          .get(`api/group/find/${this.recordId}`)
          .then((response) => {
            this.form = response.data
            // Ensure ticketCancel has a default value if not present in response
            if (this.form.ticketCancel === undefined) {
              this.form.ticketCancel = false
            }
          })
          .catch((error) => {
            console.log('Cannot fetch data ' + error)
          })
      }
    },
    async loadAuthority() {
      if (this.isloading) return
      this.isloading = true
      await this.$axios
        .get(`api/menuHeader/find`)
        .then((res) => {
          this.authorityList = res.data
          this.authoritySelected = this.authorityList[0]['id']
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
    refreshData() {
      this.$emit('reload-data')
    },
  },
  computed: {
    // Add any necessary computed properties here
  },
}
</script>