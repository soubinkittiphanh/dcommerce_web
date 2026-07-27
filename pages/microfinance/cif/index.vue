<template>
  <v-container fluid class="pa-6 font-outfit">
    <!-- Navigation Back -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-btn text color="secondary" to="/microfinance">
          <v-icon left>mdi-arrow-left</v-icon> Back to Dashboard
        </v-btn>
      </v-col>
    </v-row>

    <!-- Header Actions -->
    <v-row class="mb-6 align-center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon color="primary" large class="mr-2">mdi-card-account-details</v-icon>
          Central CIF Customers Registry
        </h1>
        <p class="subtitle-2 grey--text text--darken-1">
          Manage Customer Information Files, verify KYC status, and assign JLG group links.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="text-sm-right">
        <v-btn color="primary" dark large class="rounded-xl" @click="openCreateDialog">
          <v-icon left>mdi-plus-circle</v-icon> Create New CIF Profile
        </v-btn>
      </v-col>
    </v-row>

    <!-- Data Table Card -->
    <v-card class="rounded-xl pa-6" outlined>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search by CIF No, Name, or KYC status"
        single-line
        hide-details
        class="mb-6 rounded-lg"
        outlined
        dense
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="cifCustomers"
        :search="search"
        :loading="loading"
        class="elevation-0 rounded-lg"
      >
        <template v-slot:item.cifNo="{ item }">
          <span class="font-weight-bold primary--text">{{ item.cifNo }}</span>
        </template>
        <template v-slot:item.cifType="{ item }">
          <v-chip :color="getTypeColor(item.cifType)" text-color="white" small class="font-weight-bold text-caption">
            {{ item.cifType }}
          </v-chip>
        </template>
        <template v-slot:item.fullName="{ item }">
          <span v-if="item.cifType === 'INDIVIDUAL'">{{ item.firstName }} {{ item.lastName }}</span>
          <span v-else class="font-weight-bold secondary--text">{{ item.companyName }}</span>
        </template>
        <template v-slot:item.kycStatus="{ item }">
          <v-chip :color="getKycColor(item.kycStatus)" text-color="white" small class="font-weight-bold">
            {{ item.kycStatus }}
          </v-chip>
        </template>
        <template v-slot:item.riskCategory="{ item }">
          <v-chip :color="getRiskColor(item.riskCategory)" text-color="white" outlined small class="font-weight-bold">
            {{ item.riskCategory }}
          </v-chip>
        </template>
        <template v-slot:item.group="{ item }">
          <span v-if="item.group" class="secondary--text font-weight-bold">
            {{ item.group.name }} ({{ item.roleInGroup }})
          </span>
          <span v-else class="grey--text">No JLG Group</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="secondary" @click="openEditDialog(item)">
            <v-icon>mdi-pencil-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Create/Edit CIF Dialog (Fullscreen) -->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card class="rounded-0">
        <!-- Dialog Toolbar -->
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-bold">
            {{ isEdit ? 'Modify CIF Profile' : 'New Customer CIF Profile' }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text :disabled="!formValid" @click="saveCif" class="font-weight-bold">
              Save Profile
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <!-- Dialog Content -->
        <v-card-text class="pa-6">
          <v-container>
            <v-form ref="form" v-model="formValid">
              <v-row>
                <v-col cols="12" md="6" class="mx-auto">
                  <v-card outlined class="pa-6 rounded-xl">
                    <h3 class="text-h6 font-weight-bold mb-4 primary--text border-bottom pb-2">
                      General Demographics
                    </h3>
                    <v-row>
                      <v-col cols="12">
                        <v-select
                          v-model="form.cifType"
                          :items="['INDIVIDUAL', 'CORPORATE', 'BANK']"
                          label="CIF Customer Type *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>

                      <!-- Individual Customer Fields -->
                      <template v-if="form.cifType === 'INDIVIDUAL'">
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.firstName"
                            label="First Name *"
                            required
                            :rules="[v => !!v || 'First Name is required']"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.lastName"
                            label="Last Name *"
                            required
                            :rules="[v => !!v || 'Last Name is required']"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.dob"
                            label="Date of Birth (YYYY-MM-DD)"
                            placeholder="YYYY-MM-DD"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            v-model="form.gender"
                            :items="['MALE', 'FEMALE', 'OTHER']"
                            label="Gender"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-select>
                        </v-col>
                      </template>

                      <!-- Corporate Customer Fields -->
                      <template v-else-if="form.cifType === 'CORPORATE'">
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.companyName"
                            label="Company Name *"
                            required
                            :rules="[v => !!v || 'Company Name is required']"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.registrationNo"
                            label="Registration Number *"
                            required
                            :rules="[v => !!v || 'Registration No is required']"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.incorporationDate"
                            label="Incorporation Date (YYYY-MM-DD)"
                            placeholder="YYYY-MM-DD"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.businessType"
                            label="Business Type (e.g. LLC, Partnership)"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                      </template>

                      <!-- Bank Customer Fields -->
                      <template v-else-if="form.cifType === 'BANK'">
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.companyName"
                            label="Bank Name *"
                            required
                            :rules="[v => !!v || 'Bank Name is required']"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.swiftCode"
                            label="SWIFT Code *"
                            required
                            :rules="[v => !!v || 'SWIFT Code is required']"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.licenseNo"
                            label="Banking License Number"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="form.countryCode"
                            label="Country Code (e.g., LA, TH, US)"
                            outlined
                            dense
                            class="rounded-lg"
                          ></v-text-field>
                        </v-col>
                      </template>
                    </v-row>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6" class="mx-auto">
                  <v-card outlined class="pa-6 rounded-xl">
                    <h3 class="text-h6 font-weight-bold mb-4 secondary--text border-bottom pb-2">
                      System Settings & Groups
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.kycStatus"
                          :items="['PENDING', 'APPROVED', 'REJECTED']"
                          label="KYC Status *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.riskCategory"
                          :items="['LOW', 'MEDIUM', 'HIGH']"
                          label="Risk Category *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.groupId"
                          :items="groups"
                          item-text="name"
                          item-value="id"
                          label="Assign JLG Group"
                          clearable
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" v-if="form.groupId">
                        <v-select
                          v-model="form.roleInGroup"
                          :items="['MEMBER', 'LEADER', 'NONE']"
                          label="Role in JLG Group"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      search: '',
      dialog: false,
      isEdit: false,
      formValid: false,
      form: {
        id: null,
        cifType: 'INDIVIDUAL',
        firstName: '',
        lastName: '',
        companyName: '',
        registrationNo: '',
        incorporationDate: '',
        businessType: '',
        swiftCode: '',
        licenseNo: '',
        countryCode: '',
        dob: '',
        gender: 'FEMALE',
        kycStatus: 'PENDING',
        riskCategory: 'LOW',
        groupId: null,
        roleInGroup: 'NONE'
      },
      headers: [
        { text: 'CIF Number', value: 'cifNo' },
        { text: 'Type', value: 'cifType' },
        { text: 'Name / Company', value: 'fullName' },
        { text: 'KYC Status', value: 'kycStatus' },
        { text: 'Risk Rating', value: 'riskCategory' },
        { text: 'JLG Group Link', value: 'group' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('microfinance', ['cifCustomers', 'groups', 'loading'])
  },
  created() {
    this.$store.dispatch('microfinance/fetchCifCustomers');
    this.$store.dispatch('microfinance/fetchGroups');
  },
  methods: {
    getTypeColor(type) {
      const colors = {
        INDIVIDUAL: 'teal darken-2',
        CORPORATE: 'purple darken-2',
        BANK: 'indigo darken-2'
      };
      return colors[type] || 'grey';
    },
    getKycColor(status) {
      const colors = {
        PENDING: 'orange darken-1',
        APPROVED: 'green darken-1',
        REJECTED: 'red darken-1'
      };
      return colors[status] || 'grey';
    },
    getRiskColor(risk) {
      const colors = {
        LOW: 'green darken-2',
        MEDIUM: 'orange darken-2',
        HIGH: 'red darken-2'
      };
      return colors[risk] || 'grey';
    },
    openCreateDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        cifType: 'INDIVIDUAL',
        firstName: '',
        lastName: '',
        companyName: '',
        registrationNo: '',
        incorporationDate: '',
        businessType: '',
        swiftCode: '',
        licenseNo: '',
        countryCode: '',
        dob: '',
        gender: 'FEMALE',
        kycStatus: 'PENDING',
        riskCategory: 'LOW',
        groupId: null,
        roleInGroup: 'NONE'
      };
      this.dialog = true;
    },
    openEditDialog(customer) {
      this.isEdit = true;
      this.form = { ...customer };
      this.dialog = true;
    },
    async saveCif() {
      if (!this.$refs.form.validate()) return;
      
      let res;
      if (this.isEdit) {
        res = await this.$store.dispatch('microfinance/updateCifCustomer', {
          id: this.form.id,
          cifData: this.form
        });
      } else {
        res = await this.$store.dispatch('microfinance/createCifCustomer', this.form);
      }

      if (res.success) {
        this.dialog = false;
        this.$store.dispatch('microfinance/fetchCifCustomers');
      } else {
        alert(`Error: ${res.error}`);
      }
    }
  }
};
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif !important;
}
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
