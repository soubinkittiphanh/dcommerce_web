<template>
    <div>
      <table>
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in weeksOfMonth" :key="index">
            <td v-for="day in week" :key="day.date">
              {{ day.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      year: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      };
    },
    computed: {
      weeksOfMonth() {
        const weeks = [];
        const firstDayOfMonth = new Date(this.year, this.month, 1);
        const lastDayOfMonth = new Date(this.year, this.month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        let dayOfWeek = firstDayOfMonth.getDay();
        let week = Array(7).fill({ date: '' });
  
        for (let day = 1; day <= daysInMonth; day++) {
          week[dayOfWeek] = { date: day };
          dayOfWeek++;
          if (dayOfWeek > 6 || day === daysInMonth) {
            weeks.push(week);
            week = Array(7).fill({ date: '' });
            dayOfWeek = 0;
          }
        }
  
        return weeks;
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
  }
  </style>
  