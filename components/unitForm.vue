<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>
    
    <v-card class="pa-4">
      <v-card-title>
        <v-chip class="ma-0" color="primary" label text-color="white">
          <v-icon left>mdi-label</v-icon>
          ຈັດການຫົວໜ່ວຍສິນຄ້າ
        </v-chip>
      </v-card-title>
      
      <v-card-text>
        <v-form ref="form">
          <!-- ID Field -->
          <v-text-field
            disabled
            v-model="form.id"
            label="* Code"
            required>
          </v-text-field>

          <!-- Name Field -->
          <v-text-field
            v-model="form.name"
            label="* ຊື່"
            required
            :rules="nameRules">
          </v-text-field>

          <!-- Symbol Field -->
          <v-text-field
            v-model="form.symbol"
            label="* ສັນຍາລັກ (Symbol)"
            required
            :rules="symbolRules"
            hint="ຕົວຢ່າງ: pcs, kg, btl, case"
            persistent-hint>
          </v-text-field>

          <!-- Unit Type Selection with Autocomplete -->
          <v-autocomplete
            v-model="form.unitType"
            :items="unitTypeOptions"
            item-text="title"
            item-value="value"
            label="* ປະເພດຫົວໜ່ວຍ"
            required
            :rules="unitTypeRules"
            @change="onUnitTypeChange"
            clearable>
            <template v-slot:item="{ item }">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.value === 'base' ? 'ຫົວໜ່ວຍຫຼັກທີ່ໃຊ້ເປັນມາດຕະຖານ' : 'ຫົວໜ່ວຍທີ່ແປງຈາກຫົວໜ່ວຍພື້ນຖານ' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>

          <!-- Base Unit Selection (only for derived units) -->
          <v-autocomplete
            v-if="form.unitType === 'derived'"
            v-model="form.baseUnitId"
            :items="baseUnits"
            item-text="name"
            item-value="id"
            label="* ຫົວໜ່ວຍພື້ນຖານ"
            required
            :rules="baseUnitRules"
            clearable
            placeholder="ເລືອກຫົວໜ່ວຍພື້ນຖານ">
            <template v-slot:selection="{ item }">
              <v-chip small color="primary" outlined>
                <v-icon left small>mdi-label</v-icon>
                {{ item.symbol }} - {{ item.name }}
              </v-chip>
            </template>
            <template v-slot:item="{ item }">
              <v-list-item-avatar>
                <v-chip x-small color="primary" text-color="white">
                  {{ item.symbol }}
                </v-chip>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>Symbol: {{ item.symbol }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>

          <!-- Conversion Rate (only for derived units) -->
          <v-text-field
            v-if="form.unitType === 'derived'"
            v-model.number="form.conversionRate"
            label="* ອັດຕາການແປງ"
            type="number"
            step="0.0001"
            min="0.0001"
            required
            :rules="conversionRateRules"
            hint="ຈຳນວນຫົວໜ່ວຍພື້ນຖານ = 1 ຫົວໜ່ວຍນີ້"
            persistent-hint>
          </v-text-field>

          <!-- Unit Rate (backward compatibility - hidden but synced) -->
          <v-text-field
            v-show="false"
            v-model.number="form.unitRate"
            label="Unit Rate (Hidden)">
          </v-text-field>

          <!-- Description -->
          <v-textarea
            v-model="form.description"
            label="ຄຳອະທິບາຍ (ທາງເລືອກ)"
            rows="2"
            auto-grow
            clearable
            hint="ອະທິບາຍເພີ່ມເຕີມກ່ຽວກັບຫົວໜ່ວຍນີ້"
            persistent-hint>
          </v-textarea>

          <!-- Active Status -->
          <v-checkbox
            v-model="form.isActive"
            label="ເປີດໃຊ້ງານ"
            color="primary">
          </v-checkbox>

          <!-- Conversion Preview (for derived units) -->
          <v-card 
            v-if="form.unitType === 'derived' && form.baseUnitId && form.conversionRate" 
            outlined 
            class="mt-4 pa-3">
            <v-card-subtitle class="primary--text">ຕົວຢ່າງການແປງ:</v-card-subtitle>
            <v-card-text>
              <div class="body-1">
                <v-icon small color="primary">mdi-arrow-right-thick</v-icon>
                1 {{ form.name || 'ຫົວໜ່ວຍນີ້' }} = {{ getFormatNum(form.conversionRate) }} {{ getBaseUnitName() }}
              </div>
              <div class="body-2 grey--text">
                <v-icon small color="grey">mdi-arrow-left-thick</v-icon>
                {{ getFormatNum(form.conversionRate) }} {{ getBaseUnitName() }} = 1 {{ form.name || 'ຫົວໜ່ວຍນີ້' }}
              </div>
            </v-card-text>
          </v-card>

          <!-- Conversion Examples -->
          <v-expansion-panels 
            v-if="form.unitType === 'derived' && form.baseUnitId && form.conversionRate"
            flat>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-icon left small>mdi-calculator</v-icon>
                ຕົວຢ່າງການຄິດໄລ່
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>{{ form.name || 'ຫົວໜ່ວຍນີ້' }}</th>
                        <th>=</th>
                        <th>{{ getBaseUnitName() }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="example in conversionExamples" :key="example.input">
                        <td>{{ example.input }}</td>
                        <td>=</td>
                        <td>{{ getFormatNum(example.output) }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-form>
        
        <small class="grey--text">* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          rounded
          text
          @click="$emit('close-dialog')">
          ປິດ
        </v-btn>
        <v-btn 
          color="primary" 
          rounded
          text 
          @click="commitRecord"
          :disabled="!isFormValid">
          ບັນທຶກ
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import { mapActions } from 'vuex'

export default {
  props: {
    isCreate: {
      type: Boolean,
      require: true,
      default: true,
    },
    recordId: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  
  data() {
    return {
      form: {
        id: null,
        name: '',
        symbol: '',
        unitType: 'base',
        baseUnitId: null,
        conversionRate: 1.0000,
        unitRate: 1, // Keep for backward compatibility
        isActive: true,
        description: '',
      },
      isloading: false,
      baseUnits: [],
      
      unitTypeOptions: [
        { 
          title: 'ຫົວໜ່ວຍພື້ນຖານ (Base Unit)', 
          value: 'base',
          description: 'ຫົວໜ່ວຍຫຼັກທີ່ໃຊ້ເປັນມາດຕະຖານ'
        },
        { 
          title: 'ຫົວໜ່ວຍອື່ນໆ (Derived Unit)', 
          value: 'derived',
          description: 'ຫົວໜ່ວຍທີ່ແປງຈາກຫົວໜ່ວຍພື້ນຖານ'
        }
      ],
      
      nameRules: [
        (value) => !!value || 'ຊື່ຈຳເປັນຕ້ອງມີ',
        (value) => (value && value.length <= 50) || 'ຊື່ຕ້ອງສັ້ນກວ່າ 50 ຕົວອັກສອນ',
      ],
      
      symbolRules: [
        (value) => !!value || 'ສັນຍາລັກຈຳເປັນຕ້ອງມີ',
        (value) => (value && value.length <= 10) || 'ສັນຍາລັກຕ້ອງສັ້ນກວ່າ 10 ຕົວອັກສອນ',
        (value) => /^[a-zA-Z0-9_-]+$/.test(value) || 'ສັນຍາລັກສາມາດມີພຽງຕົວອັກສອນ, ຕົວເລກ, _ ແລະ -',
      ],
      
      unitTypeRules: [
        (value) => !!value || 'ປະເພດຫົວໜ່ວຍຈຳເປັນຕ້ອງເລືອກ',
      ],
      
      baseUnitRules: [
        (value) => {
          if (this.form.unitType === 'derived') {
            return !!value || 'ຫົວໜ່ວຍພື້ນຖານຈຳເປັນຕ້ອງເລືອກສຳລັບຫົວໜ່ວຍອື່ນໆ';
          }
          return true;
        },
      ],
      
      conversionRateRules: [
        (value) => {
          if (this.form.unitType === 'derived') {
            return (value && value > 0) || 'ອັດຕາການແປງຕ້ອງມີຄ່າຫຼາຍກວ່າ 0';
          }
          return true;
        },
      ],
    }
  },
  
  async created() {
    await this.loadBaseUnits();
    await this.loadEntry();
  },
  
  computed: {
    isFormValid() {
      return this.form.name && 
             this.form.symbol && 
             this.form.unitType &&
             (this.form.unitType === 'base' || (this.form.baseUnitId && this.form.conversionRate > 0));
    },
    
    conversionExamples() {
      if (!this.form.conversionRate || this.form.conversionRate <= 0) return [];
      
      return [
        { input: 1, output: this.form.conversionRate },
        { input: 2, output: this.form.conversionRate * 2 },
        { input: 5, output: this.form.conversionRate * 5 },
        { input: 10, output: this.form.conversionRate * 10 },
      ];
    }
  },
  
  watch: {
    // Auto-generate symbol when name changes
    'form.name'(newName) {
      if (newName && (!this.form.symbol || this.form.symbol === '')) {
        this.form.symbol = newName.toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, '')
          .substring(0, 8);
      }
    },
    
    // Sync conversionRate with unitRate for backward compatibility
    'form.conversionRate'(newRate) {
      this.form.unitRate = newRate;
    },
    
    'form.unitRate'(newRate) {
      if (newRate !== this.form.conversionRate) {
        this.form.conversionRate = newRate;
      }
    }
  },

  methods: {
    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
    ]),
    
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    
    initData() {
      this.initiateData(this.$axios)
    },
    
    onUnitTypeChange() {
      if (this.form.unitType === 'base') {
        this.form.baseUnitId = null;
        this.form.conversionRate = 1.0000;
        this.form.unitRate = 1;
      } else {
        // Reset to default values for derived units
        this.form.conversionRate = 1.0000;
        this.form.unitRate = 1;
      }
    },
    
    getBaseUnitName() {
      if (!this.form.baseUnitId) return '';
      const baseUnit = this.baseUnits.find(unit => unit.id === this.form.baseUnitId);
      return baseUnit ? baseUnit.name : '';
    },
    
    async loadBaseUnits() {
      try {
        const response = await this.$axios.get('api/unit/find?unitType=base');
        // Handle both old format (direct array) and new format (with success wrapper)
        const data = response.data.success ? response.data.data : response.data;
        this.baseUnits = data.filter(unit => 
          unit.unitType === 'base' || 
          unit.unitRate === 1 || 
          (!unit.baseUnitId && unit.isActive)
        );
        
        // Ensure all base units have symbols
        this.baseUnits = this.baseUnits.map(unit => ({
          ...unit,
          symbol: unit.symbol || unit.name.toLowerCase().substring(0, 3)
        }));
        
      } catch (error) {
        console.error('Error loading base units:', error);
        this.$toast?.error?.('ບໍ່ສາມາດໂຫຼດຫົວໜ່ວຍພື້ນຖານໄດ້');
      }
    },
    
    async commitRecord() {
      if (this.$refs.form.validate() && !this.isloading && this.isFormValid) {
        this.isloading = true
        
        // Prepare form data
        const formData = {
          ...this.form,
          // Ensure conversionRate and unitRate are synced
          conversionRate: this.form.unitType === 'base' ? 1.0000 : parseFloat(this.form.conversionRate),
          unitRate: this.form.unitType === 'base' ? 1 : parseFloat(this.form.conversionRate),
          baseUnitId: this.form.unitType === 'base' ? null : this.form.baseUnitId,
        };
        
        // Clean up data - remove empty description
        if (!formData.description || formData.description.trim() === '') {
          delete formData.description;
        }
        
        let api = this.isCreate
          ? 'api/unit/create'
          : `api/unit/update/${this.recordId}`
        
        console.log('API => ', api, 'Data => ', formData)
        
        try {
          let response;
          if (this.isCreate) {
            response = await this.$axios.post(api, formData);
          } else {
            response = await this.$axios.put(api, formData);
          }
          
          // Handle both old and new response formats
          if (response.data.success !== false) {
            this.refreshData();
            swalSuccess(this.$swal, 'ສຳເລັດ', 'ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ');
          } else {
            throw new Error(response.data.message || 'Unknown error');
          }
        } catch (error) {
          console.log('Error: ', error);
          const errorMessage = error.response?.data?.message || error.message || 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ';
          swalError2(this.$swal, 'ຂໍ້ຜິດພາດ', errorMessage);
        }
        
        this.isloading = false
      }
    },
    
    async loadEntry() {
      console.log(`===> Update form record load`)
      if (this.recordId && !this.isCreate) {
        try {
          const response = await this.$axios.get(`api/unit/find/${this.recordId}`);
          
          // Handle both old and new response formats
          const data = response.data.success ? response.data.data : response.data;
          
          // Map the data to form, ensuring backward compatibility
          this.form = {
            id: data.id,
            name: data.name || '',
            symbol: data.symbol || (data.name ? data.name.toLowerCase().substring(0, 3) : ''),
            unitType: data.unitType || (data.unitRate === 1 ? 'base' : 'derived'),
            conversionRate: data.conversionRate || data.unitRate || 1.0000,
            unitRate: data.unitRate || data.conversionRate || 1,
            baseUnitId: data.baseUnitId || null,
            description: data.description || '',
            isActive: data.isActive !== undefined ? data.isActive : true,
          };
          
        } catch (error) {
          console.log('Cannot fetch data ' + error);
          swalError2(this.$swal, 'ຂໍ້ຜິດພາດ', 'ບໍ່ສາມາດໂຫຼດຂໍ້ມູນໄດ້');
        }
      }
    },
    
    refreshData() {
      this.initData()
      this.$emit('reload-data')
    },
  },
}
</script>

<style scoped>
.v-card {
  max-width: 100%;
}

.v-textarea {
  margin-top: 16px;
}

/* Vuetify 2 compatible styles */
.grey--text {
  opacity: 0.7;
}

.v-text-field, 
.v-autocomplete, 
.v-textarea {
  margin-bottom: 8px;
}

.v-chip {
  margin-right: 8px;
}

.primary--text {
  color: #1976d2 !important;
}

.body-1 {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.body-2 {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
}

/* Custom expansion panel styling */
.v-expansion-panel-header {
  min-height: 48px;
}

.v-simple-table th,
.v-simple-table td {
  padding: 8px 16px;
}
</style>