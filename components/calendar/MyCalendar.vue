<!-- <template>
    <v-container>
      <v-calendar
        v-model="selectedDate"
        :events="bookedDates"
        @click:date="dateClicked"
      ></v-calendar>
    </v-container>
  </template> -->

<template>
    <v-container>
        <VCalendar v-model="selectedDate" :events="bookedDates" @click:date="dateClicked" :visible="visibleRange"/>
        <!-- <VDatePicker v-model="selectedDate" /> -->
        <VCalendar :rows="2" :step="1" />

    </v-container>
</template>
  
<script>

export default {
    data() {
        return {
            selectedDate: null,
            bookedDates: [],
            visibleRange: {
                start: '2024-01-01', // Adjust start date based on your requirements
                end: '2025-12-31',   // Adjust end date based on your requirements
            },
        };
    },
    methods: {
        dateClicked(date) {
            console.log('Clicked on date:', date);
        },
        fetchBookedDates() {
            // Simulated booked dates (replace with actual data fetching)
            this.bookedDates = [
                { start: '2024-02-10', end: '2024-02-14', name: 'Booking 1' },
                { start: '2024-02-20', end: '2024-02-22', name: 'Booking 2' },
                { start: '2025-02-20', end: '2025-02-22', name: 'Booking 3' },
                // Add more booked date ranges as needed
            ];
        }, generateCalendarTitle(range) {
            const startYear = new Date(range.start).getFullYear();
            const endYear = new Date(range.end).getFullYear();
            return `${startYear}-${endYear}`;
        },

    },
    mounted() {
        this.fetchBookedDates();
    },
};
</script>
  