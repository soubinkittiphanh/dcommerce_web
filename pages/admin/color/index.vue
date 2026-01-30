<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-palette</v-icon>
        <h3>ລາຍການ ສີສິນຄ້າ</h3>
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
      <color-form @reload-data="loadData(); entryFormDialog = false" 
                  :isCreate="isCreate" 
                  :key="componentKey" 
                  :recordId="entrySelected"
                  @close-dialog="entryFormDialog = false">
      </color-form>
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
                <!-- Filter by color type -->
                <v-select v-model="filterColorType"
                         :items="colorTypeOptions"
                         label="ປະເພດສີ"
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

        <!-- Color Name Column with Preview -->
        <template v-slot:[`item.color_name`]="{ item }">
          <div class="d-flex align-center">
            <div 
              v-if="item.hex_code"
              class="color-preview mr-2"
              :style="{ backgroundColor: item.hex_code }"
            ></div>
            <v-icon v-else small class="mr-2" color="grey">mdi-palette-outline</v-icon>
            {{ item.color_name }}
          </div>
        </template>

        <!-- Color Code Column with Badge -->
        <template v-slot:[`item.color_code`]="{ item }">
          <v-chip color="secondary" size="small" variant="outlined">
            {{ item.color_code }}
          </v-chip>
        </template>

        <!-- Hex Code Column -->
        <template v-slot:[`item.hex_code`]="{ item }">
          <div v-if="item.hex_code" class="d-flex align-center">
            <div 
              class="color-preview-small mr-2"
              :style="{ backgroundColor: item.hex_code }"
            ></div>
            <v-chip color="info" size="small" variant="flat">
              {{ item.hex_code }}
            </v-chip>
          </div>
          <span v-else class="text-grey">-</span>
        </template>

        <!-- RGB Code Column -->
        <template v-slot:[`item.rgb_code`]="{ item }">
          <span v-if="item.rgb_code">
            <v-chip color="orange" size="small" variant="outlined">
              RGB: {{ item.rgb_code }}
            </v-chip>
          </span>
          <span v-else class="text-grey">-</span>
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
import { swalSuccess, swalError2 } from '~/common'
import colorForm from '~/components/colorForm.vue'

export default {
  components: { colorForm },
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
      filterColorType: null,
      colorTypeOptions: [
        { title: 'ມີລະຫັດສີ Hex', value: 'hex' },
        { title: 'ມີລະຫັດສີ RGB', value: 'rgb' },
        { title: 'ບໍ່ມີລະຫັດສີ', value: 'none' }
      ],
      
      headers: [
        {
          text: '#',
          align: 'center',
          value: 'pk',
          sortable: true,
        },
        {
          text: 'ຊື່ສີ',
          align: 'center',
          value: 'color_name',
          sortable: true,
        },
        {
          text: 'ລະຫັດ',
          align: 'center',
          value: 'color_code',
          sortable: true,
        },
        {
          text: 'Hex Code',
          align: 'center',
          value: 'hex_code',
          sortable: true,
        },
        {
          text: 'RGB Code',
          align: 'center',
          value: 'rgb_code',
          sortable: false,
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
      
      // Apply color type filter
      if (this.filterColorType) {
        if (this.filterColorType === 'hex') {
          filtered = filtered.filter(item => item.hex_code && item.hex_code.trim() !== '');
        } else if (this.filterColorType === 'rgb') {
          filtered = filtered.filter(item => item.rgb_code && item.rgb_code.trim() !== '');
        } else if (this.filterColorType === 'none') {
          filtered = filtered.filter(item => (!item.hex_code || item.hex_code.trim() === '') && 
                                           (!item.rgb_code || item.rgb_code.trim() === ''));
        }
      }
      
      return filtered;
    }
  },

  methods: {
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
        .get(`api/color`)
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

/* Color preview styles */
.color-preview {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: inline-block;
}

.color-preview-small {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #ddd;
  display: inline-block;
}

/* Enhanced styling for chips and badges */
.v-chip {
  font-weight: 500;
}

.v-data-table {
  background-color: #fafafa;
}
</style>