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
          <v-icon color="primary" large class="mr-2">mdi-account-group-outline</v-icon>
          Centers & Groups Management
        </h1>
        <p class="subtitle-2 grey--text text--darken-1">
          Configure geographic Centers and Joint Liability Groups (JLG), assign meeting frequencies, and link Credit Officers.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="text-sm-right">
        <v-btn color="primary" dark large class="rounded-xl" @click="openCreateDialog">
          <v-icon left>mdi-plus-circle</v-icon> Create Group or Center
        </v-btn>
      </v-col>
    </v-row>

    <!-- Data Table Card -->
    <v-card class="rounded-xl pa-6" outlined>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search by Name or Officer"
        single-line
        hide-details
        class="mb-6 rounded-lg"
        outlined
        dense
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="groups"
        :search="search"
        :loading="loading"
        class="elevation-0 rounded-lg"
      >
        <template v-slot:item.type="{ item }">
          <v-chip :color="item.type === 'CENTER' ? 'indigo darken-2' : 'purple darken-2'" text-color="white" small class="font-weight-bold">
            {{ item.type }}
          </v-chip>
        </template>
        <template v-slot:item.parentCenter="{ item }">
          <span v-if="item.parentCenter" class="primary--text font-weight-bold">
            {{ item.parentCenter.name }}
          </span>
          <span v-else class="grey--text">—</span>
        </template>
        <template v-slot:item.meeting="{ item }">
          {{ item.meetingFrequency }} on {{ item.meetingDay }}s
        </template>
        <template v-slot:item.members="{ item }">
          <v-avatar color="grey lighten-2" size="24" class="mr-2 primary--text font-weight-bold text-caption">
            {{ item.members ? item.members.length : 0 }}
          </v-avatar>
          <span>members</span>
        </template>
        <template v-slot:item.loanOfficer="{ item }">
          <span v-if="item.loanOfficer" class="secondary--text font-weight-bold">
            {{ item.loanOfficer.username }}
          </span>
          <span v-else class="grey--text">Not Assigned</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="secondary" @click="openEditDialog(item)">
            <v-icon>mdi-pencil-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Create/Edit Dialog (Fullscreen) -->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card class="rounded-0">
        <!-- Dialog Toolbar -->
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-bold">
            {{ isEdit ? 'Modify Group / Center' : 'New Group or Center definition' }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text :disabled="!formValid" @click="saveGroup" class="font-weight-bold">
              Save Configuration
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
                      Group / Center Attributes
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.type"
                          :items="['CENTER', 'GROUP']"
                          label="Type *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                          :disabled="isEdit"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.name"
                          label="Name *"
                          required
                          :rules="[v => !!v || 'Name is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" v-if="form.type === 'GROUP'">
                        <v-select
                          v-model="form.parentId"
                          :items="centersOnly"
                          item-text="name"
                          item-value="id"
                          label="Belongs to Center *"
                          required
                          :rules="[v => !!v || 'Parent Center is required for Groups']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.loanOfficerId"
                          :items="officers"
                          item-text="username"
                          item-value="id"
                          label="Assigned Credit Officer"
                          clearable
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6" class="mx-auto">
                  <v-card outlined class="pa-6 rounded-xl">
                    <h3 class="text-h6 font-weight-bold mb-4 secondary--text border-bottom pb-2">
                      Meeting Schedules
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.meetingDay"
                          :items="['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']"
                          label="Meeting Day *"
                          required
                          :rules="[v => !!v || 'Meeting Day is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.meetingFrequency"
                          :items="['WEEKLY', 'BI_WEEKLY']"
                          label="Meeting Frequency *"
                          required
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
        type: 'GROUP',
        name: '',
        parentId: null,
        meetingDay: 'MONDAY',
        meetingFrequency: 'WEEKLY',
        loanOfficerId: null
      },
      officers: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Parent Center', value: 'parentCenter' },
        { text: 'Meeting Schedule', value: 'meeting' },
        { text: 'Members Count', value: 'members' },
        { text: 'Credit Officer', value: 'loanOfficer' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('microfinance', ['groups', 'loading']),
    centersOnly() {
      return this.groups.filter(g => g.type === 'CENTER');
    }
  },
  created() {
    this.$store.dispatch('microfinance/fetchGroups');
    this.fetchOfficers();
  },
  methods: {
    async fetchOfficers() {
      try {
        const response = await this.$axios.get('/api/user/find');
        if (response.data && response.data.data) {
          this.officers = response.data.data;
        }
      } catch (err) {
        console.error('Error fetching users/officers:', err);
      }
    },
    openCreateDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        type: 'GROUP',
        name: '',
        parentId: null,
        meetingDay: 'MONDAY',
        meetingFrequency: 'WEEKLY',
        loanOfficerId: null
      };
      this.dialog = true;
    },
    openEditDialog(group) {
      this.isEdit = true;
      this.form = { ...group };
      this.dialog = true;
    },
    async saveGroup() {
      if (!this.$refs.form.validate()) return;

      let res;
      if (this.isEdit) {
        res = await this.$store.dispatch('microfinance/updateGroup', {
          id: this.form.id,
          groupData: this.form
        });
      } else {
        res = await this.$store.dispatch('microfinance/createGroup', this.form);
      }

      if (res.success) {
        this.dialog = false;
        this.$store.dispatch('microfinance/fetchGroups');
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
