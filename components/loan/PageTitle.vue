<template>
  <div class="d-flex align-center mb-4 flex-wrap">
    <v-btn v-if="back" icon :to="back" class="mr-1"><v-icon>mdi-arrow-left</v-icon></v-btn>
    <v-avatar color="primary lighten-5" size="40" class="mr-3">
      <v-icon color="primary">{{ icon }}</v-icon>
    </v-avatar>
    <div>
      <div class="text-h6 font-weight-black primary--text">{{ title }}</div>
      <div class="text-body-2 grey--text">{{ subtitle }}</div>
    </div>
    <v-spacer />
    <branch-bar :selector="branchSelector" class="mr-2" />
    <slot />
  </div>
</template>

<script>
import BranchBar from './BranchBar.vue'

export default {
  name: 'PageTitle',
  components: { BranchBar },
  props: {
    icon: { type: String, default: 'mdi-car-key' },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    back: { type: String, default: null },
    // Phase 6 Stage 3: show the branch selector (LN_ALL_BRANCHES users only) instead of the chip
    branchSelector: { type: Boolean, default: false }
  }
}
</script>
