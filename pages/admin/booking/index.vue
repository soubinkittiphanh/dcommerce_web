<template>
  <div class="ma-6 rounded-lg">
    <v-alert border="left" dense icon="mdi-calendar-month" type="white" text>
      ຕາຕະລາງຈອງຊຸດ
    </v-alert>

    <v-sheet height="500">
      <v-sheet tile height="54" class="d-flex">
        <v-btn class="ml-6 mt-2" color="primary" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
          ເດືອນກ່ອນໜ້າ
        </v-btn>
        <v-spacer></v-spacer>
        <span class="mt-2">
          ຈຳນວນການຈອງປະຈຳເດືອນ
          <v-chip class="white--text" color="primary" label>
            20
            ລາຍການ</v-chip
          ></span
        >
        <v-spacer></v-spacer>
        <v-btn class="mr-6 mt-2" color="primary" @click="$refs.calendar.next()">
          ເດືອນຕໍ່ໄປ
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-calendar ref="calendar" v-model="today" :type="type" color="primary">
        <template v-slot:day="{ date }">
          <template v-for="event in eventsMap[date]">
            <v-menu :key="event.title" v-model="event.open" offset-x>
              <template v-slot:activator="{ on }">
                <div
                  v-if="!event.time"
                  v-ripple
                  class="my-event"
                  v-on="on"
                  v-text="event.title"
                  :style="{ color: event.color }"
                ></div>
              </template>
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar color="primary" dark>
                  <v-spacer></v-spacer>
                  <v-toolbar-title class="white--text">
                    <h3>
                      {{
                        event.title && event.title.length > 0 ? event.title : ''
                      }}
                    </h3>
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-title primary-title>
                  <span v-html="event.details"></span>
                </v-card-title>
                <v-card-actions>
                  <v-btn block color="primary" small>Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </template>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: 'month',
    today: '2019-01-08',
    events: [
      {
        title: 'Vacation',
        details: 'Going to the beach!',
        date: '2018-12-30',
        color: 'orange',
        open: false,
      },
      {
        title: 'Vacation',
        details: 'Going to the beach!',
        date: '2018-12-31',
        color: 'orange',
        open: false,
      },
      {
        title: 'Vacation',
        details: 'Going to the beach!',
        date: '2019-01-01',
        color: 'orange',
        open: false,
      },
      {
        title: 'Meeting',
        details: 'Spending time on how we do not have enough time',
        date: '2019-01-07',
        color: 'orange',
        open: false,
      },
      {
        title: '30th Birthday',
        details: 'Celebrate responsibly',
        date: '2019-01-03',
        color: 'orange',
        open: false,
      },
      {
        title: 'New Year',
        details: 'Eat chocolate until you pass out',
        date: '2019-01-01',
        color: 'orange',
        open: false,
      },
      {
        title: 'Conference',
        details: 'Mute myself the whole time and wonder why I am on this call',
        date: '2019-01-21',
        color: 'orange',
        open: false,
      },
      {
        title: 'Hackathon',
        details: 'Code like there is no tommorrow',
        date: '2019-02-01',
        color: 'orange',
        open: false,
      },
    ],
  }),
  methods: {},
  computed: {
    eventsMap() {
      const map = {}
      this.events.forEach((e) => (map[e.date] = map[e.date] || []).push(e))
      return map
    },
  },
}
</script>

<style></style>
