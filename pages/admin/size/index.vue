<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-ruler</v-icon>
        <h3>ລາຍການ ຂະໜາດສິນຄ້າ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="M8GsEpxydWI">
      </youtube-player>
    </v-dialog>
    
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>
    
    <v-dialog v-model="entryFormDialog" max-width="800">
      <size-form @reload-data="loadData(); entryFormDialog = false" 
                 :isCreate="isCreate" 
                 :key="componentKey" 
                 :recordId="entrySelected"
                 @close-dialog="entryFormDialog = false">
      </size-form>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <v-text-field v-model="search" 
                         append-icon="mdi-magnify" 
                         label="ຊອກຫາ" 
                         single-line 
                         hide-details />
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" 
                   variant="outlined" 
                   @click="createRecord" 
                   class="primary" 
                   rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" 
                   variant="outlined" 
                   @click="loadData" 
                   class="primary" 
                   rounded>
              <span class="mdi mdi-cloud-download"></span>
              ໂຫຼດຂໍ້ມູນ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      
      <v-divider></v-divider>
      
      <v-data-table v-if="entries" 
                    :headers="headers" 
                    :search="search" 
                    :items="filterEntries">
        <template v-slot:top>
          <v-toolbar flat class="pa-4">
            <v-row>
              <v-col cols="6">
                <!-- Filter by size order -->
                <v-select v-model="filterSizeOrder"
                         :items="sizeOrderOptions"
                         label="ເລົງລຳດັບຕາມຂະໜາດ"
                         clearable
                         @change="filterData">
                </v-select>
              </v-col>
              <v-col cols="6" justify="end">
                <v-row>
                  <v-spacer></v-spacer>
                  <v-checkbox v-model.number="showActive" 
                             label="ສະແດງລາຍການ inActive">
                  </v-checkbox>
                </v-row>
              </v-col>
            </v-row>
          </v-toolbar>
        </template>

        <!-- Size Name Column with Icon -->
        <template v-slot:[`item.size_name`]="{ item }">
          <div class="d-flex align-center">
            <v-icon small class="mr-2">mdi-ruler</v-icon>
            {{ item.size_name }}
          </div>
        </template>

        <!-- Size Code Column with Badge -->
        <template v-slot:[`item.size_code`]="{ item }">
          <v-chip color="secondary" size="small" variant="outlined">
            {{ item.size_code }}
          </v-chip>
        </template>

        <!-- Size Order Column -->
        <template v-slot:[`item.size_order`]="{ item }">
          <v-chip :color="getSizeOrderColor(item.size_order)" 
                  size="small" 
                  variant="flat">
            {{ item.size_order }}
          </v-chip>
        </template>

        <!-- Description Column -->
        <template v-slot:[`item.description`]="{ item }">
          <span v-if="item.description">{{ item.description }}</span>
          <span v-else class="text-grey">-</span>
        </template>

        <!-- Status Column -->
        <template v-slot:[`item.isActive`]="{ item }">
          <v-chip :color="item.isActive ? 'success' : 'error'" 
                  size="small" 
                  variant="flat">
            {{ item.isActive ? 'ເປີດໃຊ້' : 'ປິດໃຊ້' }}
          </v-chip>
        </template>

        <!-- Actions Column -->
        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" 
                 variant="text" 
                 size="small"
                 @click="viewRecord(item)">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import sizeForm from '~/components/sizeForm.vue'

export default {
  components: { sizeForm },
  middleware: 'auths',
  
  data() {
    return {
      componentKey: 0,
      entryFormDialog: false,
      guidelineDialog: false,
      isCreate: true,
      dialog: false,
      isloading: false,
      showActive: false,
      search: '',
      entries: [],
      entrySelected: '',
      
      // Filter options
      filterSizeOrder: null,
      sizeOrderOptions: [
        { title: 'ຂະໜາດນ້ອຍ (0-2)', value: 'small' },
        { title: 'ຂະໜາດກາງ (3-5)', value: 'medium' },
        { title: 'ຂະໜາດໃຫຍ່ (6+)', value: 'large' }
      ],
      
      headers: [
        {
          text: '#',
          align: 'center',
          value: 'pk',
          sortable: true,
        },
        {
          text: 'ຊື່ຂະໜາດ',
          align: 'center',
          value: 'size_name',
          sortable: true,
        },
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'size_code',
          sortable: true,
        },
        {
          text: 'ລຳດັບ',
          align: 'center',
          value: 'size_order',
          sortable: true,
        },
        {
          text: 'ລາຍລະອຽດ',
          align: 'center',
          value: 'description',
          sortable: false,
        },
        {
          text: 'ສະຖານະ',
          align: 'center',
          value: 'isActive',
          sortable: true,
        },
        {
          text: 'ແກ້ໄຂ',
          align: 'end',
          value: 'id',
          sortable: false,
        },
      ],
    }
  },
  
  async created() {
    await this.loadData()
  },
  
  computed: {
    filterEntries() {
      console.log(`Show inActive = ${this.showActive}`);
      let filtered = this.showActive ? this.entries : this.entries.filter(el => el['isActive'] == true) || [];
      
      // Apply size order filter
      if (this.filterSizeOrder) {
        if (this.filterSizeOrder === 'small') {
          filtered = filtered.filter(item => item.size_order >= 0 && item.size_order <= 2);
        } else if (this.filterSizeOrder === 'medium') {
          filtered = filtered.filter(item => item.size_order >= 3 && item.size_order <= 5);
        } else if (this.filterSizeOrder === 'large') {
          filtered = filtered.filter(item => item.size_order >= 6);
        }
      }
      
      return filtered;
    }
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },

    getSizeOrderColor(order) {
      if (order >= 0 && order <= 2) return 'info';
      if (order >= 3 && order <= 5) return 'warning';
      if (order >= 6) return 'success';
      return 'grey';
    },
    
    viewRecord(item) {
      this.componentKey += 1;
      this.entrySelected = item.id
      this.isCreate = false
      this.entryFormDialog = true;
    },
    
    createRecord() {
      this.componentKey += 1;
      this.entrySelected = 0
      this.isCreate = true
      this.entryFormDialog = true;
    },
    
    filterData() {
      // This method is called when filters change
      // The computed property filterEntries will automatically update
    },
    
    async loadData() {
      if (this.isloading) return
      this.isloading = true
      
      await this.$axios
        .get(`api/size`)
        .then((res) => {
          // Clear Old Data
          this.entries = []
          
          // Handle both old format (direct array) and new format (with success wrapper)
          const data = res.data.success ? res.data.data : res.data;
          
          for (const iterator of data) {
            iterator.pk = iterator['id']
            this.entries.push(iterator)
          }
          
          console.log("====> " + this.entries.length);
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could not load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
        
      this.isloading = false
    },
  },
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

.text-grey {
  color: grey;
}

/* Enhanced styling for chips and badges */
.v-chip {
  font-weight: 500;
}

.v-data-table {
  background-color: #fafafa;
}
</style>