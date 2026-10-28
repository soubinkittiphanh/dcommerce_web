<template>
  <v-card class="pa-4 dashboard-menu-form">
    <v-card-title class="dialog-header">
      <div class="d-flex align-center">
        <v-icon color="primary" class="mr-2">mdi-view-dashboard-edit</v-icon>
        <span class="text-h6 font-weight-bold">
          {{ isCreate ? 'ເພີ່ມເມນູດ່ວນໃໝ່ (Create Shortcut)' : 'ແກ້ໄຂເມນູດ່ວນ (Edit Shortcut)' }}
        </span>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon small @click="$emit('close-dialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Quick Route Picker from System Routes -->
        <v-card outlined class="pa-3 mb-4 route-picker-card">
          <div class="d-flex align-center mb-2">
            <v-icon small color="primary" class="mr-1">mdi-auto-fix</v-icon>
            <span class="font-weight-medium">ເລືອກຈາກເມນູລະບົບທີ່ມີແລ້ວ (Quick Route Select)</span>
          </div>
          <v-autocomplete
            v-model="selectedMenuLine"
            :items="menuLineList"
            item-text="name"
            item-value="id"
            return-object
            placeholder="ຄົ້ນຫາ ແລະ ເລືອກເມນູລະບົບ..."
            dense
            outlined
            hide-details
            clearable
            @change="onMenuLineSelected"
          >
            <template #selection="{ item }">
              <span>{{ item.llname || item.name }} ({{ item.path }})</span>
            </template>
            <template #item="{ item }">
              <v-list-item-avatar size="32" color="indigo lighten-5">
                <v-icon small color="indigo">{{ item.icon || 'mdi-link' }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">
                  {{ item.llname || item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="caption grey--text">
                  {{ item.path }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-card>

        <v-row dense>
          <!-- Title Lao -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.llname"
              label="* ຊື່ເມນູ (ລາວ / Lao Title)"
              outlined
              dense
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ເມນູ']"
              required
            ></v-text-field>
          </v-col>

          <!-- Title English -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.name"
              label="* ຊື່ເມນູ (English Title)"
              outlined
              dense
              :rules="[v => !!v || 'Please enter English title']"
              required
            ></v-text-field>
          </v-col>

          <!-- Route Path -->
          <v-col cols="12" md="8">
            <v-text-field
              v-model="form.path"
              label="* Route Path (e.g. /pos/minimart)"
              outlined
              dense
              prefix=""
              :rules="[v => !!v || 'ກະລຸນາປ້ອນ Route Path']"
              required
            ></v-text-field>
          </v-col>

          <!-- Order Sequence -->
          <v-col cols="6" md="2">
            <v-text-field
              v-model.number="form.order"
              label="ລຳດັບ (Order)"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <!-- Badge -->
          <v-col cols="6" md="2">
            <v-text-field
              v-model="form.badge"
              label="Badge (e.g. HOT)"
              outlined
              dense
              placeholder="NEW"
            ></v-text-field>
          </v-col>

          <!-- Scope Selection -->
          <v-col cols="12" md="6">
            <v-select
              v-model="scopeType"
              :items="scopeOptions"
              label="ຂອບເຂດການນຳໃຊ້ (Scope)"
              outlined
              dense
              @change="onScopeChange"
            ></v-select>
          </v-col>

          <!-- Group selector if group scope -->
          <v-col v-if="scopeType === 'group'" cols="12" md="6">
            <v-autocomplete
              v-model="form.userGroupId"
              :items="groupList"
              item-text="displayName"
              item-value="id"
              label="ເລືອກກຸ່ມຜູ້ໃຊ້ (User Group)*"
              placeholder="ຄົ້ນຫາ ແລະ ເລືອກກຸ່ມ..."
              outlined
              dense
              clearable
              :rules="[v => !!v || 'ກະລຸນາເລືອກກຸ່ມຜູ້ໃຊ້']"
            >
              <template #selection="{ item }">
                <span>{{ item.displayName || item.name || item.code }}</span>
              </template>
              <template #item="{ item }">
                <v-list-item-avatar size="28" color="amber lighten-4">
                  <v-icon small color="amber darken-3">mdi-account-group</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-medium">
                    {{ item.code }} - {{ item.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>

          <!-- Active switch -->
          <v-col cols="12" md="6">
            <v-switch
              v-model="form.isActive"
              color="success"
              :label="form.isActive ? 'ສະຖານະ: ເປີດໃຊ້ງານ (Active)' : 'ສະຖານະ: ປິດໃຊ້ງານ (Inactive)'"
              dense
              hide-details
            ></v-switch>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Icon Selection Tabs -->
        <div class="mb-3">
          <div class="text-subtitle-2 font-weight-bold mb-2">ເລືອກໄອຄອນ (Icon Selection)</div>
          <v-tabs v-model="iconTab" background-color="transparent" color="primary" dense @change="onTabChanged">
            <v-tab>
              <v-icon small left>mdi-file-image-outline</v-icon>
              Built-in SVG Icons ({{ svgIcons.length }})
            </v-tab>
            <v-tab>
              <v-icon small left>mdi-material-design</v-icon>
              Material Design Icons (MDI 7,400+)
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="iconTab" class="mt-3">
            <!-- SVG Tab -->
            <v-tab-item>
              <div class="svg-picker-grid">
                <div
                  v-for="svg in svgIcons"
                  :key="svg.key"
                  class="svg-option-card"
                  :class="{ selected: form.iconType === 'svg' && form.icon === svg.key }"
                  @click="selectSvgIcon(svg.key)"
                >
                  <div class="svg-thumb">
                    <img :src="svg.icon" :alt="svg.name" />
                  </div>
                  <span class="svg-title">{{ svg.name }}</span>
                  <v-icon v-if="form.iconType === 'svg' && form.icon === svg.key" class="check-badge" small color="primary">
                    mdi-check-circle
                  </v-icon>
                </div>
              </div>
            </v-tab-item>

            <!-- MDI Tab: Full 7,400+ Free Icons with Category Filter & Search -->
            <v-tab-item>
              <!-- Selected Icon Summary Bar -->
              <v-card outlined class="pa-3 mb-3 mdi-selected-summary">
                <v-row dense align="center">
                  <v-col cols="12" sm="7">
                    <v-text-field
                      v-model="form.icon"
                      label="ໄອຄອນທີ່ເລືອກ (Selected Icon Name)"
                      placeholder="mdi-cart"
                      outlined
                      dense
                      hide-details
                      prepend-inner-icon="mdi-pencil-outline"
                      @input="form.iconType = 'mdi'"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="5" class="d-flex align-center justify-end mt-2 mt-sm-0">
                    <div class="mdi-preview-box mr-3">
                      <v-icon size="30" color="primary">{{ form.icon || 'mdi-star' }}</v-icon>
                    </div>
                    <div>
                      <div class="font-weight-bold text-caption primary--text">
                        {{ form.icon || 'ບໍ່ທັນເລືອກ' }}
                      </div>
                      <span class="caption grey--text">Active MDI Icon</span>
                    </div>
                  </v-col>
                </v-row>
              </v-card>

              <!-- Category Filter Chips -->
              <div class="mdi-categories-wrapper mb-2">
                <div class="caption grey--text text--darken-1 font-weight-medium mb-1">ໝວດໝູ່ໄອຄອນ (Categories):</div>
                <div class="d-flex flex-wrap align-center">
                  <v-chip
                    v-for="cat in mdiCategories"
                    :key="cat.id"
                    small
                    class="mr-1 mb-1 font-weight-medium"
                    :color="selectedMdiCategory === cat.id ? 'primary' : ''"
                    :outlined="selectedMdiCategory !== cat.id"
                    @click="onSelectMdiCategory(cat.id)"
                  >
                    <v-icon left small>{{ cat.icon }}</v-icon>
                    {{ cat.title }}
                  </v-chip>
                </div>
              </div>

              <!-- Search Bar with Live Count -->
              <v-text-field
                v-model="mdiSearch"
                label="ຄົ້ນຫາໄອຄອນ MDI (Search 7,400+ Icons)..."
                prepend-inner-icon="mdi-magnify"
                placeholder="ພິມຊື່ໄອຄອນ ເຊັ່ນ: cart, box, receipt, cash, coffee, report..."
                dense
                outlined
                clearable
                class="mb-2"
                @input="mdiDisplayLimit = 96"
              >
                <template #append>
                  <v-chip x-small color="grey lighten-3" class="grey--text text--darken-2 font-weight-bold">
                    {{ filteredMdiIcons.length }} ໄອຄອນ
                  </v-chip>
                </template>
              </v-text-field>

              <!-- Loading Indicator -->
              <div v-if="isLoadingMdi" class="text-center pa-8">
                <v-progress-circular indeterminate color="primary" size="32"></v-progress-circular>
                <div class="caption grey--text mt-2">ກຳລັງໂຫລດຖານຂໍ້ມູນໄອຄອນ MDI (7,440+ ໄອຄອນ)...</div>
              </div>

              <!-- Empty State -->
              <div v-else-if="filteredMdiIcons.length === 0" class="text-center pa-6 grey--text">
                <v-icon size="40" color="grey lighten-1">mdi-emoticon-sad-outline</v-icon>
                <div class="mt-1">ບໍ່ພົບໄອຄອນທີ່ກົງກັບ "{{ mdiSearch }}"</div>
                <v-btn small text color="primary" class="mt-1" @click="resetMdiFilters">
                  ລ້າງການຄົ້ນຫາ
                </v-btn>
              </div>

              <!-- 7,400+ Icons Interactive Visual Grid -->
              <div v-else>
                <div class="mdi-picker-grid">
                  <div
                    v-for="iconName in displayedMdiIcons"
                    :key="iconName"
                    class="mdi-option-card"
                    :class="{ selected: form.iconType === 'mdi' && (form.icon === 'mdi-' + iconName || form.icon === iconName) }"
                    :title="'mdi-' + iconName"
                    @click="selectMdiIcon(iconName)"
                  >
                    <v-icon size="26" :color="form.icon === 'mdi-' + iconName ? 'primary' : 'grey darken-3'">
                      {{ 'mdi-' + iconName }}
                    </v-icon>
                    <span class="mdi-name">{{ iconName }}</span>
                    <v-icon v-if="form.icon === 'mdi-' + iconName || form.icon === iconName" class="mdi-check-badge" x-small color="primary">
                      mdi-check-circle
                    </v-icon>
                  </div>
                </div>

                <!-- Load More Button -->
                <div v-if="displayedMdiIcons.length < filteredMdiIcons.length" class="text-center mt-3">
                  <v-btn
                    small
                    outlined
                    color="primary"
                    class="rounded-pill px-4"
                    @click="loadMoreMdi"
                  >
                    <v-icon left small>mdi-chevron-down</v-icon>
                    ສະແດງຕື່ມອີກ ({{ filteredMdiIcons.length - displayedMdiIcons.length }} ຍັງເຫຼືອ)
                  </v-btn>
                </div>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>

        <v-divider class="my-4"></v-divider>

        <!-- Live Preview Section -->
        <div class="live-preview-section">
          <div class="caption grey--text text--darken-1 font-weight-bold mb-2">
            ຕົວຢ່າງການສະແດງຜົນໃນໜ້າ Dashboard (Live Real-Time Preview):
          </div>
          <div class="preview-wrapper">
            <div class="action-card preview-card">
              <div class="card-icon" :style="cardIconStyle">
                <img v-if="currentResolvedIcon.isSvg" :src="currentResolvedIcon.src" alt="" />
                <v-icon v-else size="26" color="white">{{ currentResolvedIcon.mdi }}</v-icon>
              </div>
              <div class="card-content">
                <h3>{{ form.llname || form.name || 'ຊື່ເມນູດ່ວນ' }}</h3>
                <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
              </div>
              <div v-if="form.badge" class="preview-badge">
                {{ form.badge }}
              </div>
              <div class="card-overlay"></div>
            </div>
          </div>
        </div>
      </v-form>
    </v-card-text>

    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn text @click="$emit('close-dialog')">
        ຍົກເລີກ (Cancel)
      </v-btn>
      <v-btn
        color="primary"
        class="px-6 white--text"
        :loading="isSaving"
        :disabled="!valid || isSaving"
        @click="saveShortcut"
      >
        <v-icon left>mdi-content-save</v-icon>
        ບັນທຶກ (Save)
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { SYSTEM_SVG_ICONS, COMMON_MDI_ICONS, resolveDashboardIcon } from '~/utils/dashboardIcons'
import { swalSuccess, swalError2 } from '~/common'

export default {
  props: {
    recordId: { type: [Number, String], default: null },
    isCreate: { type: Boolean, default: true }
  },
  data() {
    return {
      valid: true,
      isSaving: false,
      selectedMenuLine: null,
      menuLineList: [],
      groupList: [],
      iconTab: 0,
      svgIcons: SYSTEM_SVG_ICONS,
      commonMdiIcons: COMMON_MDI_ICONS,

      // MDI All Icons State
      allMdiIcons: [],
      isLoadingMdi: false,
      mdiSearch: '',
      selectedMdiCategory: 'all',
      mdiDisplayLimit: 96,
      mdiCategories: [
        { id: 'all', title: 'ທັງໝົດ (All)', icon: 'mdi-view-grid' },
        { id: 'pos', title: 'ການຂາຍ & POS', icon: 'mdi-cart' },
        { id: 'inventory', title: 'ສາງ & ສິນຄ້າ', icon: 'mdi-warehouse' },
        { id: 'report', title: 'ລາຍງານ & ການເງິນ', icon: 'mdi-chart-bar' },
        { id: 'food', title: 'ອາຫານ & ເຄື່ອງດື່ມ', icon: 'mdi-coffee' },
        { id: 'user', title: 'ຜູ້ໃຊ້ & ລູກຄ້າ', icon: 'mdi-account-group' },
        { id: 'system', title: 'ລະບົບ & ອຸປະກອນ', icon: 'mdi-cog' }
      ],
      categoryPatterns: {
        pos: /cart|cash|sale|receipt|tag|wallet|store|credit|currency|coin|basket|shop|barcode|pos|payment|money/i,
        inventory: /warehouse|package|box|archive|pallet|truck|shipping|inventory|stock|dolly|barcode|cube|forklift/i,
        report: /chart|finance|bank|calculator|file|document|clipboard|poll|table|analytics|graph|trending|calendar|invoice/i,
        food: /coffee|food|silverware|glass|cup|bottle|pot|cake|restaurant|pizza|beer|tea|cookie|bowl|dish/i,
        user: /account|user|person|school|patient|doctor|face|human|badge|card-account|supervisor/i,
        system: /cog|printer|cellphone|laptop|computer|server|database|wifi|shield|tune|tools|wrench|devices|lock/i
      },

      scopeType: 'default',
      scopeOptions: [
        { text: 'ຄ່າເລີ່ມຕົ້ນລະບົບ (System Default - ທຸກຄົນເຫັນ)', value: 'default' },
        { text: 'ເມນູສ່ວນຕົວຂອງຂ້ອຍ (My Personal Shortcut)', value: 'personal' },
        { text: 'ສະເພາະກຸ່ມຜູ້ໃຊ້ (User Group Only)', value: 'group' }
      ],
      form: {
        id: null,
        name: '',
        llname: '',
        path: '',
        icon: 'cashier_2.svg',
        iconType: 'svg',
        color: '',
        badge: '',
        order: 0,
        target_systems: 'ALL',
        userGroupId: null,
        userId: null,
        isActive: true
      }
    }
  },
  computed: {
    currentResolvedIcon() {
      return resolveDashboardIcon({
        icon: this.form.icon,
        iconType: this.form.iconType
      })
    },
    filteredMdiIcons() {
      let list = this.allMdiIcons
      if (this.selectedMdiCategory !== 'all') {
        const pattern = this.categoryPatterns[this.selectedMdiCategory]
        if (pattern) {
          list = list.filter(name => pattern.test(name))
        }
      }
      if (this.mdiSearch && this.mdiSearch.trim()) {
        const q = this.mdiSearch.toLowerCase().trim().replace(/^mdi-/, '')
        list = list.filter(name => name.toLowerCase().includes(q))
      }
      return list
    },
    displayedMdiIcons() {
      return this.filteredMdiIcons.slice(0, this.mdiDisplayLimit)
    },
    primaryGradient() {
      const theme = this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark : this.$vuetify.theme.themes.light
      return `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
    },
    cardIconStyle() {
      return { background: this.primaryGradient }
    }
  },
  watch: {
    iconTab(val) {
      if (val === 1) {
        this.loadAllMdiIcons()
      }
    }
  },
  async created() {
    await Promise.all([
      this.loadMenuLines(),
      this.loadGroups()
    ])
    if (!this.isCreate && this.recordId) {
      await this.loadShortcut(this.recordId)
    }
  },
  methods: {
    async loadAllMdiIcons() {
      if (this.allMdiIcons.length > 0) return
      this.isLoadingMdi = true
      try {
        const res = await fetch('/mdi-icons.json')
        if (res.ok) {
          this.allMdiIcons = await res.json()
        } else {
          const apiRes = await this.$axios.get('api/dashboardMenu/mdi-icons?limit=7500')
          this.allMdiIcons = apiRes.data?.icons || []
        }
      } catch (e) {
        try {
          const apiRes = await this.$axios.get('api/dashboardMenu/mdi-icons?limit=7500')
          this.allMdiIcons = apiRes.data?.icons || []
        } catch (err) {
          console.warn('Could not load MDI icons list:', err)
        }
      } finally {
        this.isLoadingMdi = false
      }
    },
    onTabChanged(index) {
      if (index === 1) {
        this.loadAllMdiIcons()
      }
    },
    onSelectMdiCategory(catId) {
      this.selectedMdiCategory = catId
      this.mdiDisplayLimit = 96
    },
    loadMoreMdi() {
      this.mdiDisplayLimit += 96
    },
    resetMdiFilters() {
      this.mdiSearch = ''
      this.selectedMdiCategory = 'all'
      this.mdiDisplayLimit = 96
    },
    async loadMenuLines() {
      try {
        const res = await this.$axios.get('api/menuLine/find')
        this.menuLineList = Array.isArray(res.data) ? res.data : []
      } catch (e) {
        console.error('Failed to load menu lines:', e)
      }
    },
    async loadGroups() {
      try {
        const res = await this.$axios.get('api/dashboardMenu/groups')
        if (Array.isArray(res.data) && res.data.length > 0) {
          this.groupList = res.data
          return
        }
      } catch (e) {
        // Continue to fallback
      }

      try {
        const res = await this.$axios.get('api/group/findAll')
        const data = Array.isArray(res.data) ? res.data : []
        if (data.length > 0) {
          this.groupList = data.map(g => ({
            id: g.id,
            code: g.code,
            name: g.name,
            displayName: `${g.code ? g.code + ' - ' : ''}${g.name || 'Group ' + g.id}`
          }))
          return
        }
      } catch (e) {
        // Continue to fallback
      }

      try {
        const res = await this.$axios.get('api/group/find')
        const data = Array.isArray(res.data) ? res.data : []
        this.groupList = data.map(g => ({
          id: g.id,
          code: g.code,
          name: g.name,
          displayName: `${g.code ? g.code + ' - ' : ''}${g.name || 'Group ' + g.id}`
        }))
      } catch (e) {
        console.error('Failed to load groups:', e)
      }
    },
    async loadShortcut(id) {
      try {
        const res = await this.$axios.get(`api/dashboardMenu/find/${id}`)
        if (res.data) {
          this.form = { ...this.form, ...res.data }
          if (this.form.userId) {
            this.scopeType = 'personal'
          } else if (this.form.userGroupId) {
            this.scopeType = 'group'
          } else {
            this.scopeType = 'default'
          }
          if (this.form.iconType === 'mdi') {
            this.iconTab = 1
            this.loadAllMdiIcons()
          } else {
            this.iconTab = 0
          }
        }
      } catch (e) {
        swalError2(this.$swal, 'Error', 'Failed to load shortcut details')
      }
    },
    onMenuLineSelected(item) {
      if (!item) return
      this.form.name = item.name || this.form.name
      this.form.llname = item.llname || item.name || this.form.llname
      this.form.path = item.path || this.form.path
      if (item.icon && (item.icon.startsWith('mdi-') || item.icon.startsWith('mdi '))) {
        this.form.icon = item.icon
        this.form.iconType = 'mdi'
        this.iconTab = 1
        this.loadAllMdiIcons()
      }
    },
    onScopeChange(val) {
      const currentUserId = this.$auth.user?.id || this.$auth.user?.userId || null
      if (val === 'default') {
        this.form.userId = null
        this.form.userGroupId = null
      } else if (val === 'personal') {
        this.form.userId = currentUserId
        this.form.userGroupId = null
      } else if (val === 'group') {
        this.form.userId = null
      }
    },
    selectSvgIcon(key) {
      this.form.icon = key
      this.form.iconType = 'svg'
    },
    selectMdiIcon(name) {
      const full = name.startsWith('mdi-') ? name : `mdi-${name}`
      this.form.icon = full
      this.form.iconType = 'mdi'
    },
    async saveShortcut() {
      if (!this.$refs.form.validate()) return
      this.isSaving = true
      try {
        if (this.isCreate) {
          await this.$axios.post('api/dashboardMenu/create', this.form)
          swalSuccess(this.$swal, 'ສຳເລັດ', 'ສ້າງເມນູດ່ວນສຳເລັດແລ້ວ!')
        } else {
          await this.$axios.put(`api/dashboardMenu/update/${this.recordId}`, this.form)
          swalSuccess(this.$swal, 'ສຳເລັດ', 'ອັບເດດເມນູດ່ວນສຳເລັດແລ້ວ!')
        }
        this.$emit('reload-data')
        this.$emit('close-dialog')
      } catch (e) {
        console.error('Save shortcut failed:', e)
        swalError2(this.$swal, 'ຜິດພາດ', e?.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກເມນູດ່ວນໄດ້')
      } finally {
        this.isSaving = false
      }
    }
  }
}
</script>

<style scoped>
.dashboard-menu-form {
  border-radius: 16px;
}
.dialog-header {
  border-bottom: 1px solid #f1f5f9;
}
.route-picker-card {
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
}
.svg-picker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 12px;
  max-height: 240px;
  overflow-y: auto;
  padding: 8px 4px;
}
.svg-option-card {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 10px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  background: white;
}
.svg-option-card:hover {
  border-color: #6366f1;
  transform: translateY(-2px);
}
.svg-option-card.selected {
  border-color: #6366f1;
  background: #f5f3ff;
}
.svg-thumb {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
}
.svg-thumb img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.svg-title {
  font-size: 0.72rem;
  text-align: center;
  color: #475569;
  line-height: 1.2;
}
.check-badge {
  position: absolute;
  top: 4px;
  right: 4px;
}

/* MDI Browser Styling */
.mdi-selected-summary {
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.mdi-preview-box {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: white;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mdi-picker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  padding: 8px 4px;
}
.mdi-option-card {
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.18s ease;
  background: white;
  text-align: center;
  position: relative;
}
.mdi-option-card:hover {
  border-color: #6366f1;
  transform: translateY(-2px);
  background: #f8fafc;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
}
.mdi-option-card.selected {
  border-color: #6366f1;
  background: #eef2ff;
}
.mdi-name {
  font-size: 0.65rem;
  color: #475569;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 76px;
}
.mdi-check-badge {
  position: absolute;
  top: 2px;
  right: 2px;
}

.live-preview-section {
  background: #f8fafc;
  padding: 16px;
  border-radius: 14px;
}
.preview-wrapper {
  max-width: 260px;
}
.preview-card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}
.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.card-icon img {
  width: 22px;
  height: 22px;
  filter: brightness(0) invert(1);
}
.card-content h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}
.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.arrow-icon {
  color: #94a3b8;
  font-size: 1.1rem;
}
.preview-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}
</style>
