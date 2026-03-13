<!-- <template>
    <div ref="ganttContainer"></div>
  </template>
  
  <script>
  import { Gantt } from 'gantt-elastic';
  
  export default {
    data() {
      return {
        ganttData: [
          {
            id: 'Task 1',
            name: 'Task 1',
            start: '2024-03-15',
            end: '2024-03-18',
          },
          {
            id: 'Task 2',
            name: 'Task 2',
            start: '2024-03-18',
            end: '2024-03-20',
            parent: 'Task 1',
          },
          {
            id: 'Task 3',
            name: 'Task 3',
            start: '2024-03-20',
            end: '2024-03-24',
          },
          // Add more tasks as needed
        ],
      };
    },
    mounted() {
      const gantt = new Gantt({
        container: this.$refs.ganttContainer,
        data: this.ganttData,
      });
    },
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles for your component */
  </style>
   -->