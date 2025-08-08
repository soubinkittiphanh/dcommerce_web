<template>
  <v-app>
    <div class="container">
      <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <loading-indicator> </loading-indicator>
      </v-dialog>
      <v-dialog v-model="terminalDialog" scrollable max-width="1200" persistent>
        <v-card>
          <v-card-title>ເລືອກ Terminal </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="terminalSelected" column>
              <v-radio v-for="terminal in findAllTerminal" :key="terminal.id"
                :label="terminal.name + ' - ' + terminal.description" :value="terminal.id"></v-radio>
              <!-- <v-radio label="Bahrain" value="bahrain"></v-radio>
                        <v-radio label="Bangladesh" value="bangladesh"></v-radio> -->
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" rounded variant="text" @click="switchTerminal">
              ເລືອກ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card>
        <div class="pa-16">
          <v-row>
            <v-col cols="12">
              <!-- <p class="text-center"
                style="color: #01532B; font-weight:900;font-family: Arial, Helvetica, sans-serif; font-size: xx-large;">
                DCOMMERCE </p> -->
              <p class="text-center"
                style="color: #01532B; font-weight:900;font-family: Arial, Helvetica, sans-serif; font-size: xx-large;">
                ລະບົບລາຍຮັບ ແລະ ລາຍຈ່າຍ </p>
              <!-- <h2 class="text-center" style="color: #01532B;">ຍິນດີຕ້ອນຮັບ ເຂົ້າສູ່ລະບົບການຂາຍ </h2> -->
            </v-col>
          </v-row>
          <v-card-text>
            <notification v-if="errorMessage" :message="errorMessage" />
            <v-card-title class="my-text-center">
              ເຂົ້າສູ່ລະບົບ
            </v-card-title>
            <v-form>
              <v-text-field v-model="login.mem_id" label="ກະລຸນາ ໃສ່ໄອດີ" name="email"
                prepend-inner-icon="mdi-account-tie-hat" class="rounded-10 my-text-center" outlined>
              </v-text-field>
              <v-text-field v-model="login.mem_pwd" label="ລະຫັດຜ່ານ" type="password" name="password"
                prepend-inner-icon="mdi-lock" class="rounded-10 my-text-center" outlined></v-text-field>
              <v-btn class="rounded-0 my-text-center" color="#01532B" x-large block dark @click.prevent="userLogin"
                type="submit">
                ເຂົ້າສູ່ລະບົບ
                <v-icon> mdi mdi-login</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import Notification from '../../../components/Notification.vue'
import { swalError2 } from '~/common'
import { mapActions, mapGetters } from 'vuex'
export default {
  layout: "login",
  data() {
    return {
      terminalDialog: false,
      email: '',
      password: '',
      errorMessage: '',
      terminalSelected: 1,
      isLoading: false,
      barcode: '',
      timer: null,
      login: {
        mem_id: '',
        mem_pwd: ''
      }
    }
  },

  components: {
    Notification,
  },
  computed: {
    ...mapGetters(['findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
  },
  methods: {
    ...mapActions(['initiateData', 'setSelectedTerminal', 'setSelectedLocation']),
    switchTerminal() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(el => el.id == this.findAllTerminal.find(el => el.id == this.terminalSelected)['locationId'])
      this.setSelectedLocation(location)
      //********** refresh component so the data will be update fresh **********//
      this.terminalDialog = false
      // this.$router.push('/admin') // Main screen for minimart business
      this.$router.push('/admin/moneyAdvance') // Main screen for minimart business
      // this.$router.push('/admin/orders') // Main screen for shipping bussiness
    },
    async userLogin() {
      if(this.isLoading) return
      try {
        this.isLoading = true
        this.errorMessage = ''
        const response = await this.$auth.loginWith('local', { data: this.login })

        if (response.status !== 200) {
          this.isLoading = false
          return swalError2(this.$swal, 'Error', 'ບໍ່ສາມາດ ລັອກອິນ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ')

        }
        if (response.data.accessToken) {
          console.log(`LOGIN COMPLETED`);
          this.initData()
          this.terminalDialog = false // Disable for THIS PROJECT
          this.switchTerminal() // Auto select for this project only
        } else {
          console.log('No token')
          swalError2(this.$swal, 'Error', 'ໄອດີ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ')
        }
        console.log(response)
      } catch (err) {
        console.log(err)
      }
      this.isLoading = false
    },
    initData() {
        // Call the method directly
        this.initiateData(
          this.$axios
        );
    },

  },
}
</script>
<style scoped>
h2 {
  font-family: 'noto sans lao';
  text-align: center;
}

.my-text-center {
  font-family: 'noto sans lao';
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  /* background: #EFF2F9; */
  background: #CCDDD5;
  /* color: red; */

}

/* *:not(h1) { */
/* CSS styles here */
/* font-family: 'noto sans lao'; */
/* } */
</style>