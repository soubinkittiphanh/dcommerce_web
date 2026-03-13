<template>
  <div class="text-center">
    <v-row>
      <v-col cols="6"></v-col>
      <v-col cols="6">
        <v-timeline v-if="entry">
          <!-- <v-timeline-item color="primary" small>
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold primary--text`"
                v-text="`${getFirstHistory['location']['name']}`"></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 primary--text`">
                {{ getFirstHistory['createdAt'].split('.')[0] }}
              </h2>
              <div>
                ສ້າງອໍເດີ
              </div>
            </div>
          </v-timeline-item> -->
          <v-timeline-item v-for="(location, i) in locationList" :key="i"
            :color="checkPoint(location['id']) ? `warning` : `primary`" small>
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold primary--text`" v-text="`ສາຂາ ${location.name}`"></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${checkPoint(location['id'])? `warning` : `primary`}--text`">
                <!-- {{ getHistoryByLocation(location.id)['updateTimestamp'].split('.')[0] }} -->
              </h2>
              <div>
                <!-- {{ getHistoryByLocation(location.id)['status'] }} -->
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>


  </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import ShippingForm from '~/components/ShippingForm.vue'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { ShippingForm },
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      entryFormDialog: false,
      guidelineDialog: false,
      dialog: false,
      isloading: false,
      entry: null,
      locationList: [],
      entrySelected: '',
    }
  },
  async mounted() {
    await this.loadData()
    await this.loadLocation()
  },
  computed: {
    getFirstHistory() {
      console.log(`FIRST VERIONS OF HISTORY ${this.entry.histories}`);
      if (this.entry.histories.length == 0) {
        console.log(`RETURN WITH NO HISTORY FOUND ${JSON.stringify(this.entry.location)}`);
        return this.entry
      }
      return this.entry.histories[0]
    },
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    checkPoint(locationId) {
      return locationId == this.getFirstHistory['location']['id']
    },
    getHistoryByLocation(locationId) {
      console.log(`LOCATION ID ${locationId}`);
      console.log(`LOCATION ID ${JSON.stringify(this.entry.histories)}`);
      return this.entry.histories.find(el => el.locationId == locationId)
    },
    async loadData() {
      if (this.isloading) return
      this.isloading = true
      try {
        const response = await this.$axios.get(`api/order/find/${31}`)
        this.entry = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
        console.log('Error ===>: ' + er)
      }
      this.isloading = false
    },
    async loadLocation() {
      if (this.isloading) return
      this.isloading = true
      try {
        const response = await this.$axios.get(`api/location/find`)
        this.locationList = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + error)
        console.log('Error ===>: ' + error)
      }
      this.isloading = false
    },
  }
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

/* .myelevation {
  background-color: '#f0f0f';
  color: red;
} */
</style>
