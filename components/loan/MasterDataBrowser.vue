<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-card outlined>
        <v-list dense nav>
          <template v-for="g in groups">
            <v-subheader :key="`h-${g.key}`" class="font-weight-bold">{{ g.title }}</v-subheader>
            <v-list-item
              v-for="c in g.configs"
              :key="c.entity"
              :input-value="selected && selected.entity === c.entity"
              color="primary"
              @click="selected = c"
            >
              <v-list-item-content>
                <v-list-item-title class="text-body-2">{{ c.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <v-card-text v-if="!groups.length" class="text-caption">
          ທ່ານບໍ່ມີສິດເບິ່ງຂໍ້ມູນພື້ນຖານ (No master data you are allowed to view).
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="9">
      <master-data-table v-if="selected" :key="selected.entity" :config="selected" @changed="$emit('changed')" />
    </v-col>
  </v-row>
</template>

<script>
import MasterDataTable from './MasterDataTable.vue'
import { MASTER_GROUPS, MASTER_CONFIGS } from '~/common/loan/masterConfigs'

// Left: every parameter table the user may VIEW, grouped; right: the generic table for the selection
export default {
  name: 'MasterDataBrowser',
  components: { MasterDataTable },
  data () {
    return { selected: null }
  },
  computed: {
    groups () {
      const can = this.$store.getters['loan/can']
      return MASTER_GROUPS
        .map(g => ({ ...g, configs: MASTER_CONFIGS.filter(c => c.group === g.key && can(c.functionCode, 'VIEW')) }))
        .filter(g => g.configs.length)
    }
  },
  watch: {
    groups: {
      immediate: true,
      handler (groups) {
        if (!this.selected && groups.length) this.selected = groups[0].configs[0]
      }
    }
  }
}
</script>
