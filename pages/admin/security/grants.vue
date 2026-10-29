<template>
  <div class="security-grants pa-4">
    <div class="d-flex align-center mb-4 flex-wrap">
      <v-avatar color="primary lighten-5" size="44" class="mr-3">
        <v-icon color="primary">mdi-shield-key-outline</v-icon>
      </v-avatar>
      <div>
        <div class="text-h5 font-weight-black primary--text">ສິດການເຂົ້າເຖິງຂອງກຸ່ມຜູ້ໃຊ້</div>
        <div class="text-body-2 grey--text">User group access rights · function × action grant matrix</div>
      </div>
      <v-spacer />
      <v-select
        v-model="groupId"
        :items="groupItems"
        label="ກຸ່ມຜູ້ໃຊ້ (User group)"
        dense outlined hide-details
        style="max-width: 320px"
      />
      <v-select
        v-model="moduleCode"
        :items="moduleItems"
        label="ໂມດູນ (Module)"
        dense outlined hide-details clearable
        class="ml-2"
        style="max-width: 180px"
      />
    </div>

    <v-progress-linear v-if="loading" indeterminate color="primary" />
    <v-alert v-else-if="!canView" type="info" text>
      ທ່ານບໍ່ມີສິດເບິ່ງ (You do not have VIEW permission for SEC_GRANT).
    </v-alert>

    <v-card v-else outlined>
      <v-alert v-if="!canEdit" type="info" text dense class="ma-2">
        ເບິ່ງຢ່າງດຽວ (Read only: you do not have EDIT permission for SEC_GRANT).
      </v-alert>
      <v-simple-table dense fixed-header height="70vh">
        <thead>
          <tr>
            <th>ໂມດູນ (Module)</th>
            <th>ຟັງຊັນ (Function)</th>
            <th v-for="a in matrix.actions" :key="a.actionCode" class="text-center">{{ a.actionCode }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fn in visibleFunctions" :key="fn.functionCode">
            <td class="text-caption">{{ fn.moduleCode }}</td>
            <td>
              <div class="font-weight-bold text-body-2">{{ fn.functionCode }}</div>
              <div class="text-caption grey--text">{{ fn.llname }} ({{ fn.name }})</div>
            </td>
            <td v-for="a in matrix.actions" :key="a.actionCode" class="text-center">
              <v-simple-checkbox
                v-if="applicable(fn, a.actionCode)"
                :value="granted(fn.functionCode, a.actionCode)"
                :disabled="!canEdit || !groupId || busy === `${fn.functionCode}.${a.actionCode}`"
                @input="toggle(fn.functionCode, a.actionCode, $event)"
              />
              <span v-else class="grey--text">·</span>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import { errMsg } from '~/common/loan/loanApi'

// Generic RBAC screen: userGroup acts as the role; the API enforces grants on every route.
export default {
  name: 'SecurityGrants',
  layout: 'admin',
  middleware: 'auths',
  data () {
    return {
      loading: true,
      matrix: { actions: [], functions: [], groups: [], grants: [] },
      groupId: null,
      moduleCode: null,
      busy: null
    }
  },
  computed: {
    canView () { return this.$store.getters['loan/can']('SEC_GRANT', 'VIEW') },
    canEdit () { return this.$store.getters['loan/can']('SEC_GRANT', 'EDIT') },
    groupItems () {
      return this.matrix.groups.map(g => ({ value: g.id, text: `${g.name} (${g.code})${g.isActive ? '' : ' - inactive'}` }))
    },
    moduleItems () {
      return [...new Set(this.matrix.functions.map(f => f.moduleCode))]
    },
    visibleFunctions () {
      return this.matrix.functions.filter(f => !this.moduleCode || f.moduleCode === this.moduleCode)
    },
    grantSet () {
      return new Set(this.matrix.grants.filter(g => g.userGroupId === this.groupId).map(g => `${g.functionCode}.${g.actionCode}`))
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('loan/fetchPermissions', true)
      if (this.canView) {
        this.matrix = (await this.$axios.$get('/api/security/matrix')).data
        if (this.matrix.groups.length) this.groupId = this.matrix.groups[0].id
      }
    } catch (err) {
      this.$toast.error(errMsg(err))
    } finally {
      this.loading = false
    }
  },
  methods: {
    applicable (fn, action) {
      return fn.applicableActions.split(',').includes(action)
    },
    granted (functionCode, actionCode) {
      return this.grantSet.has(`${functionCode}.${actionCode}`)
    },
    async toggle (functionCode, actionCode, value) {
      this.busy = `${functionCode}.${actionCode}`
      try {
        const res = await this.$axios.$put('/api/security/grants', { userGroupId: this.groupId, functionCode, actionCode, granted: value })
        const others = this.matrix.grants.filter(g => !(g.userGroupId === this.groupId && g.functionCode === functionCode && g.actionCode === actionCode))
        this.matrix.grants = value ? [...others, { userGroupId: this.groupId, functionCode, actionCode }] : others
        this.$toast.success(`${res.message}: ${functionCode}.${actionCode}`)
        // The current user's own group may have changed
        await this.$store.dispatch('loan/fetchPermissions', true)
      } catch (err) {
        this.$toast.error(errMsg(err))
      } finally {
        this.busy = null
      }
    }
  }
}
</script>

<style scoped>
.security-grants {
  font-family: 'Noto Sans Lao', sans-serif;
}
</style>
