<template>
  <div class="dashboard-menu-page pa-4">
    <!-- Top Action Bar -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <v-chip class="pa-4 font-weight-bold" color="primary" label text-color="white">
          <v-icon left>mdi-view-dashboard-edit</v-icon>
          <h3>ຈັດການເມນູດ່ວນ (Dashboard Shortcuts)</h3>
        </v-chip>
        <p class="text-caption grey--text mt-1 mb-0">
          ກຳນົດ ແລະ ຈັດການປຸ່ມກົດເມນູດ່ວນເທິງໜ້າ Dashboard ໃຫ້ສະດວກຕໍ່ການໃຊ້ງານ
        </p>
      </div>

      <div class="d-flex align-center mt-2 mt-sm-0">
        <v-btn
          outlined
          color="primary"
          class="mr-2 rounded-pill"
          to="/admin"
          exact
        >
          <v-icon left>mdi-view-dashboard</v-icon>
          ກັບໄປ Dashboard
        </v-btn>

        <v-btn
          outlined
          color="warning"
          class="mr-2 rounded-pill"
          @click="confirmResetDefaults"
        >
          <v-icon left>mdi-restore</v-icon>
          ຟື້ນຟູຄ່າເລີ່ມຕົ້ນ
        </v-btn>

        <v-btn
          color="primary"
          class="rounded-pill white--text font-weight-bold"
          @click="openCreateDialog"
        >
          <v-icon left>mdi-plus</v-icon>
          ເພີ່ມເມນູດ່ວນ
        </v-btn>
      </div>
    </div>

    <!-- Filter & Scope Tabs -->
    <v-card class="elevation-1 rounded-xl mb-4">
      <div class="d-flex flex-wrap justify-space-between align-center pa-3">
        <v-tabs v-model="activeTab" color="primary" hide-slider @change="loadData">
          <v-tab>
            <v-icon left small>mdi-view-grid</v-icon>
            ທັງໝົດ (All)
          </v-tab>
          <v-tab>
            <v-icon left small>mdi-earth</v-icon>
            ຄ່າເລີ່ມຕົ້ນລະບົບ (System Defaults)
          </v-tab>
          <v-tab>
            <v-icon left small>mdi-account-star</v-icon>
            ເມນູສ່ວນຕົວຂອງຂ້ອຍ (My Favorites)
          </v-tab>
        </v-tabs>

        <div style="min-width: 260px;" class="px-2">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="ຄົ້ນຫາເມນູ..."
            single-line
            hide-details
            dense
            outlined
            class="rounded-pill"
          ></v-text-field>
        </div>
      </div>
      <v-divider></v-divider>

      <!-- Shortcuts Data Table -->
      <v-data-table
        :headers="headers"
        :items="shortcuts"
        :search="search"
        :loading="isLoading"
        loading-text="ກຳລັງໂຫລດຂໍ້ມູນ..."
        no-data-text="ບໍ່ມີຂໍ້ມູນເມນູດ່ວນ"
        class="elevation-0 shortcuts-table"
      >
        <!-- Order Sequence & Move Buttons -->
        <template v-slot:[`item.order`]="{ item, index }">
          <div class="d-flex align-center">
            <span class="font-weight-bold mr-2 order-number">{{ item.order }}</span>
            <div class="d-flex flex-column">
              <v-btn
                icon
                x-small
                :disabled="index === 0"
                @click="moveOrder(index, -1)"
              >
                <v-icon x-small>mdi-chevron-up</v-icon>
              </v-btn>
              <v-btn
                icon
                x-small
                :disabled="index === shortcuts.length - 1"
                @click="moveOrder(index, 1)"
              >
                <v-icon x-small>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </div>
        </template>

        <!-- Icon Preview Column -->
        <template v-slot:[`item.icon`]="{ item }">
          <div class="shortcut-icon-badge" :style="iconBadgeStyle">
            <template v-if="getResolvedIcon(item).isSvg">
              <img :src="getResolvedIcon(item).src" alt="" />
            </template>
            <template v-else>
              <v-icon color="white" small>{{ getResolvedIcon(item).mdi }}</v-icon>
            </template>
          </div>
        </template>

        <!-- Titles Column -->
        <template v-slot:[`item.title`]="{ item }">
          <div>
            <div class="font-weight-bold primary--text">{{ item.llname || item.name }}</div>
            <div class="caption grey--text">{{ item.name }}</div>
          </div>
        </template>

        <!-- Route Path Column -->
        <template v-slot:[`item.path`]="{ item }">
          <v-chip small label outlined color="indigo">
            <v-icon left x-small>mdi-link-variant</v-icon>
            {{ item.path }}
          </v-chip>
        </template>

        <!-- Icon Type Column -->
        <template v-slot:[`item.iconType`]="{ item }">
          <v-chip x-small :color="item.iconType === 'svg' ? 'teal' : 'purple'" text-color="white">
            {{ item.iconType ? item.iconType.toUpperCase() : 'SVG' }}
          </v-chip>
        </template>

        <!-- Scope Column -->
        <template v-slot:[`item.scope`]="{ item }">
          <v-chip v-if="item.userId" x-small color="pink lighten-4" text-color="pink darken-3">
            <v-icon left x-small>mdi-account</v-icon>
            ສ່ວນຕົວ (User {{ item.user?.cus_name || item.userId }})
          </v-chip>
          <v-chip v-else-if="item.userGroupId" x-small color="amber lighten-4" text-color="amber darken-4">
            <v-icon left x-small>mdi-account-group</v-icon>
            ກຸ່ມ (Group {{ item.group?.name || item.userGroupId }})
          </v-chip>
          <v-chip v-else x-small color="blue lighten-4" text-color="blue darken-4">
            <v-icon left x-small>mdi-earth</v-icon>
            ຄ່າເລີ່ມຕົ້ນ (Default)
          </v-chip>
        </template>

        <!-- Status Active Column -->
        <template v-slot:[`item.isActive`]="{ item }">
          <v-switch
            v-model="item.isActive"
            color="success"
            dense
            hide-details
            class="ma-0 pa-0"
            @change="toggleStatus(item)"
          ></v-switch>
        </template>

        <!-- Action Buttons -->
        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex align-center">
            <v-btn icon small color="primary" @click="openEditDialog(item)">
              <v-icon small>mdi-square-edit-outline</v-icon>
            </v-btn>
            <v-btn icon small color="error" @click="confirmDelete(item)">
              <v-icon small>mdi-delete-outline</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog for Create / Edit -->
    <v-dialog v-model="formDialog" max-width="850" persistent>
      <dashboard-menu-form
        v-if="formDialog"
        :record-id="selectedRecordId"
        :is-create="isCreate"
        @reload-data="loadData"
        @close-dialog="formDialog = false"
      ></dashboard-menu-form>
    </v-dialog>
  </div>
</template>

<script>
import DashboardMenuForm from '~/components/DashboardMenuForm.vue'
import { resolveDashboardIcon } from '~/utils/dashboardIcons'
import { swalSuccess, swalError2 } from '~/common'

export default {
  components: { DashboardMenuForm },
  middleware: 'auths',
  data() {
    return {
      isLoading: false,
      search: '',
      activeTab: 0,
      shortcuts: [],
      formDialog: false,
      isCreate: true,
      selectedRecordId: null,
      headers: [
        { text: 'ລຳດັບ (Order)', value: 'order', width: '110px', sortable: true },
        { text: 'ໄອຄອນ (Icon)', value: 'icon', width: '80px', sortable: false, align: 'center' },
        { text: 'ຊື່ເມນູ (Title)', value: 'title', sortable: true },
        { text: 'Route Path', value: 'path', sortable: true },
        { text: 'ປະເພດ', value: 'iconType', width: '90px', sortable: true },
        { text: 'ຂອບເຂດ (Scope)', value: 'scope', width: '150px', sortable: true },
        { text: 'ສະຖານະ (Active)', value: 'isActive', width: '110px', sortable: true },
        { text: 'ຈັດການ', value: 'actions', width: '100px', sortable: false, align: 'center' },
      ]
    }
  },
  computed: {
    primaryGradient() {
      const theme = this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark : this.$vuetify.theme.themes.light
      return `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
    },
    iconBadgeStyle() {
      return { background: this.primaryGradient }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      try {
        let url = 'api/dashboardMenu/all'
        if (this.activeTab === 1) {
          url += '?scope=default'
        } else if (this.activeTab === 2) {
          url += '?scope=mine'
        }
        const res = await this.$axios.get(url)
        this.shortcuts = Array.isArray(res.data) ? res.data : []
      } catch (e) {
        console.error('Error loading shortcuts:', e)
        swalError2(this.$swal, 'Error', 'Failed to load dashboard shortcuts')
      } finally {
        this.isLoading = false
      }
    },
    getResolvedIcon(item) {
      return resolveDashboardIcon({
        icon: item.icon,
        iconType: item.iconType
      })
    },
    openCreateDialog() {
      this.isCreate = true
      this.selectedRecordId = null
      this.formDialog = true
    },
    openEditDialog(item) {
      this.isCreate = false
      this.selectedRecordId = item.id
      this.formDialog = true
    },
    async toggleStatus(item) {
      try {
        await this.$axios.put(`api/dashboardMenu/update/${item.id}`, {
          isActive: item.isActive
        })
      } catch (e) {
        item.isActive = !item.isActive
        swalError2(this.$swal, 'Error', 'Failed to update status')
      }
    },
    async moveOrder(index, direction) {
      const targetIndex = index + direction
      if (targetIndex < 0 || targetIndex >= this.shortcuts.length) return

      const currentItem = this.shortcuts[index]
      const targetItem = this.shortcuts[targetIndex]

      const tempOrder = currentItem.order
      currentItem.order = targetItem.order
      targetItem.order = tempOrder

      // Swap in local array
      this.$set(this.shortcuts, index, targetItem)
      this.$set(this.shortcuts, targetIndex, currentItem)

      try {
        await this.$axios.put('api/dashboardMenu/reorder', {
          items: [
            { id: currentItem.id, order: currentItem.order },
            { id: targetItem.id, order: targetItem.order }
          ]
        })
      } catch (e) {
        console.error('Failed to save reorder:', e)
        await this.loadData()
      }
    },
    confirmDelete(item) {
      this.$swal({
        title: 'ຢືນຢັນການລຶບ?',
        text: `ທ່ານຕ້ອງການລຶບເມນູດ່ວນ "${item.llname || item.name}" ແທ້ບໍ່?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ແມ່ນ, ລຶບເລີຍ!',
        cancelButtonText: 'ຍົກເລີກ'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$axios.delete(`api/dashboardMenu/delete/${item.id}`)
            swalSuccess(this.$swal, 'ສຳເລັດ', 'ລຶບເມນູດ່ວນສຳເລັດ!')
            await this.loadData()
          } catch (e) {
            swalError2(this.$swal, 'Error', 'Failed to delete shortcut')
          }
        }
      })
    },
    confirmResetDefaults() {
      this.$swal({
        title: 'ຟື້ນຟູຄ່າເລີ່ມຕົ້ນ?',
        text: 'ລະບົບຈະໂຫຼດຄ່າເລີ່ມຕົ້ນມາດຕະຖານ 10 ເມນູ POS ຄືນໃໝ່. ທ່ານຕ້ອງການດຳເນີນການຕໍ່ບໍ່?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#f59e0b',
        cancelButtonColor: '#64748b',
        confirmButtonText: 'ຢືນຢັນຟື້ນຟູ',
        cancelButtonText: 'ຍົກເລີກ'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$axios.post('api/dashboardMenu/seed-defaults?force=true')
            swalSuccess(this.$swal, 'ສຳເລັດ', 'ຟື້ນຟູຄ່າເລີ່ມຕົ້ນ 10 ເມນູດ່ວນສຳເລັດແລ້ວ!')
            await this.loadData()
          } catch (e) {
            swalError2(this.$swal, 'Error', 'Failed to reset default shortcuts')
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.dashboard-menu-page {
  max-width: 1400px;
  margin: 0 auto;
}
.order-number {
  min-width: 24px;
  text-align: center;
  font-size: 0.95rem;
}
.shortcut-icon-badge {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}
.shortcut-icon-badge img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}
.shortcuts-table ::v-deep tbody tr:hover {
  background-color: #f8fafc !important;
}
</style>
