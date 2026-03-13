<template>
  <v-navigation-drawer
    app
    v-model="drawerModel"
    clipped
    width="300"
    class="drawer-left elevation-8"
  >
    <!-- Search Section -->
    <div class="drawer-header pa-4 ma-0">
      <v-row align="center" no-gutters>
        <v-col cols="auto" class="mr-3">
          <v-text-field
            v-model="searchModelLocal"
            clearable
            clear-icon="mdi-close"
            prepend-inner-icon="mdi-magnify"
            outlined
            dense
            label="ຄົ້ນຫາສິນຄ້າ..."
            solo-inverted
            hide-details
            class="search-field elevation-2"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Terminal Section -->
    <div class="drawer-header pa-4 ma-0">
      <v-card
        color="warning"
        outlined
        @click="$emit('open-terminal-dialog')"
        class="terminal-chip elevation-2"
        hover
      >
        <v-card-text class="pa-3">
          <v-row align="center" no-gutters>
            <v-col cols="auto" class="mr-3">
              <v-icon color="white darken-2" size="24">mdi-monitor</v-icon>
            </v-col>
            <v-col>
              <div class="font-weight-bold">
                {{ currentTerminal?.name || 'ເລືອກ Terminal' }}
              </div>
              <div class="">
                {{ currentTerminal?.description || 'ກະລຸນາເລືອກ Terminal' }}
              </div>
            </v-col>
            <v-col cols="auto">
              <v-icon color="orange darken-2">mdi-chevron-down</v-icon>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <v-divider class="mx-4"></v-divider>

    <!-- Categories List -->
    <div class="pa-4">
      <div class="font-weight-bold mb-3 primary--text">ໝວດໝູ່ສິນຄ້າ</div>

      <v-list dense nav class="transparent">
        <v-list-item-group v-model="selectedItemModel" color="primary">
          <v-list-item
            v-for="(item, i) in categoryList"
            :key="i"
            class="category-item mb-1"
            :class="{ 'active-category': selectedItemModel === i }"
            rounded
          >
            <v-list-item-icon class="mr-3">
              <v-icon :color="selectedItemModel === i ? 'primary' : 'grey'">
                mdi-tag
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-medium text-wrap"
                :class="{ 'primary--text': selectedItemModel === i }"
              >
                {{ item.categ_name }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="selectedItemModel === i">
              <v-icon color="primary" small>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'PosLeftDrawer',

  props: {
    modelValue: Boolean,
    searchModel: String,
    currentTerminal: Object,
    categoryList: Array,
    selectedItem: Number,
  },

  emits: [
    'update:modelValue',
    'update:search-model',
    'update:selected-item',
    'open-terminal-dialog'
  ],

  computed: {
    drawerModel: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },

    searchModelLocal: {
      get() {
        return this.searchModel
      },
      set(value) {
        this.$emit('update:search-model', value)
      }
    },

    selectedItemModel: {
      get() {
        return this.selectedItem
      },
      set(value) {
        this.$emit('update:selected-item', value)
      }
    }
  }
}
</script>

<style scoped>
.drawer-left {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%) !important;
  border-right: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.search-field {
  border-radius: 12px !important;
  transition: all 0.3s ease;
}

.search-field:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.terminal-chip {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px !important;
}

.terminal-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.3) !important;
}

.category-item {
  border-radius: 12px !important;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.category-item:hover {
  transform: translateX(4px);
}

.active-category {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform: translateX(6px);
}
</style>