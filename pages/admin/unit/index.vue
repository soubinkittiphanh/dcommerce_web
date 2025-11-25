<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ຫົວໜ່ວຍສິນຄ້າ</h3>
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
    
    <v-dialog v-model="entryFormDialog" >
      <unit-form @reload-data="loadData(); entryFormDialog = false" 
                 :isCreate="isCreate" 
                 :key="componentKey" 
                 :recordId="entrySelected"
                 @close-dialog="entryFormDialog = false">
      </unit-form>
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
              <v-col cols="4">
                <!-- Filter by unit type -->
                <v-select v-model="filterUnitType"
                         :items="unitTypeOptions"
                         label="ປະເພດຫົວໜ່ວຍ"
                         clearable
                         @change="filterData">
                </v-select>
              </v-col>
              <v-col cols="4">
                <!-- Filter by base unit -->
                <v-select v-model="filterBaseUnit"
                         :items="baseUnitOptions"
                         item-title="name"
                         item-value="id"
                         label="ຫົວໜ່ວຍພື້ນຖານ"
                         clearable
                         @change="filterData">
                </v-select>
              </v-col>
              <v-col cols="4" justify="end">
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

        <!-- Unit Type Column with Badge -->
        <template v-slot:[`item.unitType`]="{ item }">
          <v-chip :color="item.unitType === 'base' ? 'primary' : 'secondary'" 
                  size="small" 
                  variant="outlined">
            {{ item.unitType === 'base' ? 'ພື້ນຖານ' : 'ອື່ນໆ' }}
          </v-chip>
        </template>

        <!-- Symbol Column -->
        <template v-slot:[`item.symbol`]="{ item }">
          <v-chip color="info" size="small" variant="flat">
            {{ item.symbol || '-' }}
          </v-chip>
        </template>

        <!-- Conversion Rate Column with Formatting -->
        <template v-slot:[`item.conversionRate`]="{ item }">
          <span v-if="item.unitType === 'base'">1.0</span>
          <span v-else>{{ getFormatNum(item.conversionRate || item.unitRate || 1) }}</span>
        </template>

        <!-- Base Unit Column -->
        <template v-slot:[`item.baseUnit`]="{ item }">
          <span v-if="item.baseUnit">
            {{ item.baseUnit.name }} ({{ item.baseUnit.symbol }})
          </span>
          <span v-else-if="item.unitType === 'base'">-</span>
          <span v-else class="text-red">ບໍ່ມີຂໍ້ມູນ</span>
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
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import unitForm from '~/components/unitForm.vue'

export default {
  components: { unitForm },
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
      
      // New filter options
      filterUnitType: null,
      filterBaseUnit: null,
      unitTypeOptions: [
        { title: 'ຫົວໜ່ວຍພື້ນຖານ', value: 'base' },
        { title: 'ຫົວໜ່ວຍອື່ນໆ', value: 'derived' }
      ],
      
      headers: [
        {
          text: '#',
          align: 'center',
          value: 'pk',
          sortable: true,
        },
        {
          text: 'ຊື່',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        {
          text: 'ສັນຍາລັກ',
          align: 'center',
          value: 'symbol',
          sortable: true,
        },
        {
          text: 'ປະເພດ',
          align: 'center',
          value: 'unitType',
          sortable: true,
        },
        {
          text: 'ອັດຕາການແປງ',
          align: 'center',
          value: 'conversionRate',
          sortable: true,
        },
        {
          text: 'ຫົວໜ່ວຍພື້ນຖານ',
          align: 'center',
          value: 'baseUnit',
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
      
      // Apply unit type filter
      if (this.filterUnitType) {
        filtered = filtered.filter(item => item.unitType === this.filterUnitType);
      }
      
      // Apply base unit filter
      if (this.filterBaseUnit) {
        filtered = filtered.filter(item => item.baseUnitId === this.filterBaseUnit);
      }
      
      return filtered;
    },
    
    baseUnitOptions() {
      // Get only base units for the filter dropdown
      return this.entries.filter(unit => unit.unitType === 'base').map(unit => ({
        id: unit.id,
        name: unit.name,
        symbol: unit.symbol
      }));
    }
  },

  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
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
        .get(`api/unit/findAll?includeBase=true`) // Include base unit relationships
        .then((res) => {
          // Clear Old Data
          this.entries = []
          
          // Handle both old format (direct array) and new format (with success wrapper)
          const data = res.data.success ? res.data.data : res.data;
          
          for (const iterator of data) {
            iterator.pk = iterator['id']
            
            // Ensure backward compatibility
            if (!iterator.symbol && iterator.name) {
              iterator.symbol = iterator.name.toLowerCase().substring(0, 3);
            }
            
            if (!iterator.conversionRate && iterator.unitRate) {
              iterator.conversionRate = iterator.unitRate;
            }
            
            if (!iterator.unitType) {
              iterator.unitType = iterator.unitRate === 1 ? 'base' : 'derived';
            }
            
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

.text-red {
  color: red;
}

/* Enhanced styling for chips and badges */
.v-chip {
  font-weight: 500;
}

.v-data-table {
  background-color: #fafafa;
}
</style>