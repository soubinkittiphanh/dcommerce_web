<template>
  <v-app id="laundry-minimal">
    <v-main class="grey lighten-5">
      <v-container fill-height justify-center>
        <v-card width="500" class="rounded-xl overflow-hidden shadow-sm" outlined>
          
          <v-list-item class="primary white--text py-3">
            <v-list-item-avatar color="white" size="48">
              <v-icon color="primary">mdi-washing-machine</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-lao font-weight-bold text-h6">
                ຊັກຜ້າອັດສະລິຍະ
              </v-list-item-title>
              <v-list-item-subtitle class="white--text opacity-70 font-lao">
                ເລືອກເມນູເພື່ອເລີ່ມເຮັດວຽກ
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text class="pa-4">
            <v-row dense>
              <v-col v-for="item in menu" :key="item.id" cols="6">
                <v-card
                  flat
                  outlined
                  :color="selectedProgram === item.id ? 'blue lighten-5' : 'white'"
                  :class="['rounded-lg text-center pa-3 transition-swing selection-card', 
                           selectedProgram === item.id ? 'border-primary' : '']"
                  @click="selectProgram(item)"
                >
                  <div class="text-h4 mb-1">{{ item.icon }}</div>
                  <div class="font-lao font-weight-bold primary--text caption mb-0">
                    {{ item.name }}
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <v-expand-transition>
              <div v-if="selectedProgram === '39'" class="mt-4 pa-3 rounded-lg grey lighten-4">
                <div class="font-lao caption grey--text text--darken-2 text-center mb-2">
                  ເລືອກເວລາອົບແຫ້ງ
                </div>
                <v-btn-toggle
                  v-model="selectedTime"
                  mandatory
                  color="primary"
                  class="d-flex justify-space-between"
                  dense
                  group
                >
                  <v-btn v-for="time in dryTimes" :key="time" :value="time" x-small class="rounded-md">
                    {{ time }}m
                  </v-btn>
                </v-btn-toggle>
              </div>
            </v-expand-transition>

            <v-btn
              block
              large
              color="primary"
              class="mt-5 rounded-lg font-lao elevation-0"
              :disabled="loading || !selectedProgram"
              :loading="loading"
              @click="startWash"
            >
              ເລີ່ມເຄື່ອງດຽວນີ້
            </v-btn>

            <v-alert
              v-if="statusMessage"
              :type="statusType"
              dense
              text
              class="mt-3 font-lao caption rounded-lg mb-0"
            >
              {{ statusMessage }}
            </v-alert>
          </v-card-text>

          <v-divider></v-divider>
          <v-footer class="white pa-2 justify-center">
            <span class="font-lao grey--text caption">ກົດ Smart Control ກ່ອນທຸກຄັ້ງ</span>
          </v-footer>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'login',
  head() {
    return {
      title: 'Smart Laundry',
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap' }]
    }
  },
  data() {
    return {
      apiBaseUrl: 'http://192.168.1.7:8000', 
      deviceId: '1e008816-50fb-ea87-b2c1-e98ee3306e1a',
      selectedProgram: null,
      selectedTime: 60,
      loading: false,
      statusMessage: '',
      statusType: 'info',
      dryTimes: [30, 60, 90, 120],
      menu: [
        { id: '1B', name: 'ຊັກແບບ AI', icon: '👕' },
        { id: '1E', name: 'ຊັກດ່ວນ', icon: '⚡' },
        { id: '21', name: 'ຜ້າປູບ່ອນ', icon: '🛏️' },
        { id: '20', name: 'ຜ້າເຊັດຕົວ', icon: '🧖' },
        { id: '36', name: 'ຊັກ+ອົບ AI', icon: '🔄' },
        { id: '39', name: 'ອົບແຫ້ງ', icon: '☀️' },
      ]
    }
  },
  methods: {
    selectProgram(item) {
      this.selectedProgram = item.id;
      this.statusMessage = '';
    },
    async startWash() {
      this.loading = true;
      try {
        const payload = {
          program: this.selectedProgram,
          dryTime: this.selectedProgram === '39' ? this.selectedTime : null
        };
        const response = await this.$axios.$post(`${this.apiBaseUrl}/api/smartthings/start/${this.deviceId}`, payload);
        if (response.success) {
          this.statusType = 'success';
          this.statusMessage = 'ເລີ່ມເຮັດວຽກສຳເລັດ!';
        }
      } catch (error) {
        this.statusType = 'error';
        this.statusMessage = 'ເຊື່ອມຕໍ່ເຄື່ອງບໍ່ໄດ້';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.font-lao { font-family: 'Noto Sans Lao', sans-serif !important; }
.selection-card { border-width: 1px !important; transition: all 0.2s ease; cursor: pointer; }
.border-primary { border: 2px solid #1976D2 !important; }
.opacity-70 { opacity: 0.7; }
.rounded-md { border-radius: 6px !important; }
</style>