<!-- RESTAURANT & CAFE KITCHEN ORDER DISPLAY SYSTEM (KDS) -->
<template>
  <div class="kds-container text-left" :class="{ 'kds-fullscreen': isFullscreen }">
    <!-- Header Navigation Chips (Consistent with corporate dcommerce POS suite) -->
    <div class="d-flex flex-wrap align-center gap-2 mb-3">
      <v-chip class="pa-5 mr-2 mb-2 elevation-1" color="primary" label text-color="white">
        <v-icon start class="mr-2">mdi-chef-hat</v-icon>
        <h3>ຈໍຕິດຕາມອໍເດີໃນຄົວ (Kitchen Display System - KDS)</h3>
      </v-chip>
      <v-chip class="pa-5 mr-2 mb-2 elevation-1" color="primary" outlined label to="/admin/cafeTable">
        <v-icon start class="mr-2">mdi-table-chair</v-icon>
        <h3>ແຜນຜັງໂຕະ & ສັ່ງອາຫານ (Floor POS)</h3>
      </v-chip>
      <v-chip class="pa-5 mr-2 mb-2 elevation-1" color="primary" outlined label to="/admin/restaurant/ordersFromPos">
        <v-icon start class="mr-2">mdi-receipt-text-check</v-icon>
        <h3>ລາຍງານບິນຂາຍຮ້ານອາຫານ</h3>
      </v-chip>
    </div>

    <!-- Top Control Bar (Primary Theme Gradient) -->
    <v-card class="elevation-3 rounded-xl mb-4 kds-header-card primary-theme-header overflow-hidden" dark>
      <div class="pa-4 d-flex flex-wrap align-center justify-space-between">
        <!-- Title & Badges -->
        <div class="d-flex align-center flex-wrap gap-2 mb-2 mb-md-0">
          <v-avatar color="white" size="48" class="mr-3 elevation-2">
            <v-icon color="primary" large>mdi-chef-hat</v-icon>
          </v-avatar>
          <div>
            <div class="d-flex align-center">
              <h2 class="font-weight-bold white--text mb-0 mr-3">Kitchen Display System (KDS)</h2>
              <v-chip color="amber darken-1" small label text-color="black" class="font-weight-bold pulse-badge">
                <v-icon left x-small color="black">mdi-fire</v-icon> LIVE ORDERS
              </v-chip>
            </div>
            <div class="caption white--text text--lighten-3">
              ຈໍສະແດງຜົນ ແລະ ຕິດຕາມລາຍການສັ່ງອາຫານໃນຄົວ & ບາຣ໌ນ້ຳ
            </div>
          </div>
        </div>

        <!-- Quick Summary Stats (Frosted Glassmorphism) -->
        <div class="d-flex align-center flex-wrap gap-2 mb-2 mb-md-0">
          <div class="kds-stat-box px-3 py-1 rounded-lg text-center mr-2">
            <div class="caption white--text text--lighten-3 font-weight-bold">ລໍຖ້າປຸງ (Pending)</div>
            <div class="text-h6 font-weight-black white--text">{{ countPending }}</div>
          </div>
          <div class="kds-stat-box px-3 py-1 rounded-lg text-center mr-2" style="background: rgba(251, 191, 36, 0.25); border: 1px solid rgba(251, 191, 36, 0.5);">
            <div class="caption amber--text text--lighten-4 font-weight-bold">ກຳລັງປຸງ (Cooking)</div>
            <div class="text-h6 font-weight-black amber--text text--lighten-2">{{ countPreparing }}</div>
          </div>
          <div class="kds-stat-box px-3 py-1 rounded-lg text-center mr-2" style="background: rgba(52, 211, 153, 0.25); border: 1px solid rgba(52, 211, 153, 0.5);">
            <div class="caption green--text text--lighten-4 font-weight-bold">ພ້ອມເສີບ (Ready)</div>
            <div class="text-h6 font-weight-black green--text text--lighten-2">{{ countReady }}</div>
          </div>
        </div>

        <!-- Control Buttons -->
        <div class="d-flex align-center flex-wrap gap-2">
          <!-- Audio Toggle -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                :color="soundEnabled ? 'amber accent-2' : 'white'"
                @click="toggleSound"
                class="mr-1 frosted-btn"
              >
                <v-icon>{{ soundEnabled ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
              </v-btn>
            </template>
            <span>{{ soundEnabled ? 'ປິດສຽງແຈ້ງເຕືອນ (Mute Sound)' : 'ເປີດສຽງແຈ້ງເຕືອນ (Enable Sound)' }}</span>
          </v-tooltip>

          <!-- Auto Refresh Interval Selector -->
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn small outlined color="white" v-bind="attrs" v-on="on" class="mr-2 rounded-lg font-weight-medium">
                <v-icon left x-small>mdi-timer-refresh-outline</v-icon>
                {{ autoRefreshSeconds > 0 ? `${autoRefreshSeconds}s` : 'Off' }}
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="setRefreshInterval(5)">
                <v-list-item-title>Auto 5 ວິນາທີ</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setRefreshInterval(10)">
                <v-list-item-title>Auto 10 ວິນາທີ</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setRefreshInterval(20)">
                <v-list-item-title>Auto 20 ວິນາທີ</v-list-item-title>
              </v-list-item>
              <v-list-item @click="setRefreshInterval(0)">
                <v-list-item-title>ປິດ Auto Refresh (Off)</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- Refresh Now Button -->
          <v-btn small color="white" light @click="fetchTickets" :loading="isloading" class="mr-2 rounded-lg primary--text font-weight-bold">
            <v-icon left small color="primary">mdi-refresh</v-icon>
            ໂຫຼດໃໝ່
          </v-btn>

          <!-- Fullscreen Toggle -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" color="white" @click="toggleFullscreen" class="mr-1 frosted-btn">
                <v-icon>{{ isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}</v-icon>
              </v-btn>
            </template>
            <span>{{ isFullscreen ? 'ອອກຈາກ Fullscreen' : 'ເຕັມຈໍ Fullscreen' }}</span>
          </v-tooltip>

          <!-- Floor POS Shortcut -->
          <v-btn small color="secondary" dark to="/admin/cafeTable" class="mr-1 rounded-lg">
            <v-icon left small>mdi-table-chair</v-icon>
            ແຜນຜັງໂຕະ
          </v-btn>

          <!-- Sales Report Shortcut -->
          <v-btn small outlined color="white" to="/admin/restaurant/ordersFromPos" class="rounded-lg">
            <v-icon left small>mdi-receipt-text-check</v-icon>
            ລາຍງານບິນ
          </v-btn>
        </div>
      </div>

      <!-- Filter Tabs / Station Bar (Translucent Primary Tone) -->
      <v-divider style="border-color: rgba(255, 255, 255, 0.2);"></v-divider>
      <div class="px-4 py-2 d-flex flex-wrap align-center justify-space-between" style="background: rgba(0, 0, 0, 0.12);">
        <!-- Status Filter Tabs with Primary Active State -->
        <v-btn-toggle
          v-model="selectedStatusFilter"
          mandatory
          dense
          class="rounded-lg mr-3 my-1 elevation-1"
          active-class="primary white--text font-weight-bold"
        >
          <v-btn value="ALL" small class="font-weight-medium">
            ທັງໝົດ ({{ activeTickets.length }})
          </v-btn>
          <v-btn value="pending" small class="font-weight-bold">
            ລໍຖ້າປຸງ ({{ countPending }})
          </v-btn>
          <v-btn value="preparing" small class="font-weight-bold">
            ກຳລັງປຸງ ({{ countPreparing }})
          </v-btn>
          <v-btn value="ready" small class="font-weight-bold">
            ພ້ອມເສີບ ({{ countReady }})
          </v-btn>
        </v-btn-toggle>

        <!-- Station / Category Filter Chips -->
        <div class="d-flex align-center flex-wrap gap-1 my-1">
          <span class="caption white--text text--lighten-3 mr-2 font-weight-medium">Station:</span>
          <v-chip
            small
            filter
            :input-value="selectedStation === 'ALL'"
            @click="selectedStation = 'ALL'"
            :color="selectedStation === 'ALL' ? 'white' : 'transparent'"
            :text-color="selectedStation === 'ALL' ? 'primary' : 'white'"
            class="mr-1 font-weight-bold"
            :style="selectedStation === 'ALL' ? '' : 'border: 1px solid rgba(255, 255, 255, 0.4);'"
          >
            ທຸກສາຍ (All)
          </v-chip>
          <v-chip
            small
            filter
            :input-value="selectedStation === 'KITCHEN'"
            @click="selectedStation = 'KITCHEN'"
            :color="selectedStation === 'KITCHEN' ? 'white' : 'transparent'"
            :text-color="selectedStation === 'KITCHEN' ? 'primary' : 'white'"
            class="mr-1 font-weight-bold"
            :style="selectedStation === 'KITCHEN' ? '' : 'border: 1px solid rgba(255, 255, 255, 0.4);'"
          >
            <v-icon left x-small :color="selectedStation === 'KITCHEN' ? 'primary' : 'white'">mdi-food-fork-drink</v-icon>
            ຄົວອາຫານ (Kitchen)
          </v-chip>
          <v-chip
            small
            filter
            :input-value="selectedStation === 'BAR'"
            @click="selectedStation = 'BAR'"
            :color="selectedStation === 'BAR' ? 'white' : 'transparent'"
            :text-color="selectedStation === 'BAR' ? 'primary' : 'white'"
            class="font-weight-bold"
            :style="selectedStation === 'BAR' ? '' : 'border: 1px solid rgba(255, 255, 255, 0.4);'"
          >
            <v-icon left x-small :color="selectedStation === 'BAR' ? 'primary' : 'white'">mdi-glass-cocktail</v-icon>
            ບາຣ໌ນ້ຳ (Bar)
          </v-chip>
        </div>
      </div>
    </v-card>

    <!-- Loading State -->
    <v-dialog v-model="isloading && tickets.length === 0" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Thermal Print KOT Dialog -->
    <PrintTicketDialog 
      :show="showThermalPrint" 
      :ticket="ticketToPrint" 
      :restaurant-info="restaurantConfig"
      @close="showThermalPrint = false" 
    />

    <!-- Empty State -->
    <div v-if="filteredTickets.length === 0 && !isloading" class="text-center pa-12 my-8 rounded-xl elevation-1 empty-kds-box">
      <v-avatar size="96" color="rgba(1, 83, 43, 0.08)" class="mb-4">
        <v-icon size="48" color="primary">mdi-check-all</v-icon>
      </v-avatar>
      <h3 class="font-weight-bold grey--text text--darken-3 mb-1">ບໍ່ມີລາຍການອາຫານຄ້າງປຸງ</h3>
      <p class="grey--text mb-4">ທຸກອໍເດີຖືກປຸງ ແລະ ເສີບຄົບຮຽບຮ້ອຍແລ້ວ! (No pending orders)</p>
      <v-btn color="primary" outlined @click="fetchTickets" rounded class="font-weight-bold">
        <v-icon left small>mdi-refresh</v-icon>
        ກວດສອບອໍເດີໃໝ່
      </v-btn>
    </div>

    <!-- Active Orders KDS Grid -->
    <v-row v-else class="kds-grid" dense>
      <v-col
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="pa-2"
      >
        <v-card
          class="kds-order-card elevation-2 rounded-xl overflow-hidden d-flex flex-column"
          :class="getOrderCardClass(ticket)"
          style="min-height: 480px; height: 100%; border: 2px solid transparent;"
        >
          <!-- Card Header (Inherits Primary Theme based on status) -->
          <div class="kds-card-header pa-3 d-flex justify-space-between align-center" :style="getCardHeaderStyle(ticket)">
            <div>
              <div class="d-flex align-center">
                <span class="text-h6 font-weight-black white--text mr-2">
                  {{ getTableName(ticket) }}
                </span>
                <v-chip x-small color="white" text-color="primary" class="font-weight-bold">
                  #{{ ticket.ticketNumber || ticket.id }}
                </v-chip>
              </div>
              <div class="caption white--text text--lighten-3 mt-1">
                <v-icon x-small color="white" class="mr-1">mdi-account-outline</v-icon>
                {{ ticket.createUser?.cus_name || ticket.createUser?.name || 'Staff' }}
                <span class="ml-2">• {{ formatTime(ticket.createdAt) }}</span>
              </div>
            </div>

            <!-- Elapsed Timer Badge -->
            <div class="text-right">
              <v-chip
                small
                label
                :color="getTimerColor(ticket)"
                text-color="white"
                class="font-weight-black timer-badge elevation-1"
                :class="{ 'timer-blink': isUrgent(ticket) }"
              >
                <v-icon left x-small>mdi-clock-outline</v-icon>
                {{ getElapsedTime(ticket.createdAt) }}
              </v-chip>
            </div>
          </div>

          <!-- Customer Note Banner (if any) -->
          <div v-if="ticket.notes" class="pa-2 amber lighten-5 amber--text text--darken-4 caption font-weight-bold d-flex align-center" style="border-bottom: 1px solid #fef3c7;">
            <v-icon left x-small color="amber darken-3">mdi-alert</v-icon>
            <span>ໝາຍເຫດ: {{ ticket.notes }}</span>
          </div>

          <!-- Card Body: Line Items List -->
          <v-card-text class="pa-3 flex-grow-1 overflow-y-auto" style="max-height: 380px;">
            <div
              v-for="(line, lineIdx) in getStationFilteredLines(ticket)"
              :key="line.id || lineIdx"
              class="kds-line-item pa-2 mb-2 rounded-lg d-flex align-start justify-space-between"
              :class="{ 'kds-line-done': line.status === 'ready' || line.status === 'served' }"
              @click="toggleLineStatus(ticket, line)"
              style="background: #f8fafc; border: 1px solid #e2e8f0; cursor: pointer; transition: all 0.2s ease;"
            >
              <div class="d-flex align-start mr-2 flex-grow-1">
                <!-- Large Quantity Avatar (Primary Theme Badge) -->
                <v-avatar
                  size="32"
                  :color="line.status === 'ready' ? 'secondary' : 'primary'"
                  class="white--text font-weight-black mr-2 flex-shrink-0"
                >
                  {{ line.quantity }}x
                </v-avatar>

                <div>
                  <div class="font-weight-bold body-2 grey--text text--darken-4 line-dish-name" :class="{ 'line-completed': line.status === 'ready' || line.status === 'served' }">
                    {{ line.product?.pro_name || 'Food Item' }}
                  </div>
                  <!-- Special Instructions -->
                  <div v-if="line.specialInstructions || line.notes" class="caption red--text text--darken-2 font-weight-bold mt-1">
                    * {{ line.specialInstructions || line.notes }}
                  </div>
                  <!-- Category tag -->
                  <div class="caption grey--text mt-1">
                    {{ line.product?.category?.categ_name || 'Kitchen' }}
                  </div>
                </div>
              </div>

              <!-- Line Status Icon Indicator -->
              <v-btn icon x-small :color="line.status === 'ready' ? 'primary' : 'grey lighten-1'" class="flex-shrink-0">
                <v-icon>{{ line.status === 'ready' ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline' }}</v-icon>
              </v-btn>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <!-- Card Footer Actions (Primary Theme Buttons) -->
          <div class="pa-3 bg-white d-flex align-center justify-space-between">
            <!-- Action Button Based on Ticket Status -->
            <div class="flex-grow-1 mr-2">
              <v-btn
                v-if="ticket.status === 'pending'"
                block
                color="primary"
                dark
                class="font-weight-bold elevation-1 rounded-lg"
                @click="updateStatus(ticket, 'preparing')"
                :loading="updatingId === ticket.id"
              >
                <v-icon left small>mdi-chef-hat</v-icon>
                ເລີ່ມປຸງ (Start Cooking)
              </v-btn>

              <v-btn
                v-else-if="ticket.status === 'preparing'"
                block
                color="amber darken-2"
                dark
                class="font-weight-bold elevation-1 rounded-lg"
                @click="updateStatus(ticket, 'ready')"
                :loading="updatingId === ticket.id"
              >
                <v-icon left small>mdi-bell-ring</v-icon>
                ປຸງສຳເລັດ (Mark Ready)
              </v-btn>

              <v-btn
                v-else-if="ticket.status === 'ready'"
                block
                color="primary"
                dark
                class="font-weight-bold elevation-1 rounded-lg"
                @click="updateStatus(ticket, 'served')"
                :loading="updatingId === ticket.id"
              >
                <v-icon left small>mdi-tray-check</v-icon>
                ເສີບແລ້ວ (Mark Served)
              </v-btn>
            </div>

            <!-- Print KOT Thermal Receipt -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  outlined
                  small
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="printKotTicket(ticket)"
                  class="rounded-lg"
                >
                  <v-icon small color="primary">mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>ພິມໃບສັ່ງຄົວ (Print KOT)</span>
            </v-tooltip>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PrintTicketDialog from '@/components/CAFE/printdialog'
import { mainCompanyInfo, preloadCompanyData } from '~/common/api'
import { swalError2 } from '~/common'

export default {
  name: 'KitchenDisplaySystem',
  components: {
    PrintTicketDialog,
  },
  middleware: 'auths',
  data() {
    return {
      isloading: false,
      updatingId: null,
      tickets: [],
      previousTicketCount: 0,

      // Filters
      selectedStatusFilter: 'ALL',
      selectedStation: 'ALL',

      // Auto Refresh
      autoRefreshSeconds: 10,
      refreshTimer: null,
      currentTime: Date.now(),
      clockTimer: null,

      // Audio & UI
      soundEnabled: true,
      audioCtx: null,
      isFullscreen: false,

      // Thermal Print Dialog
      showThermalPrint: false,
      ticketToPrint: null,
    }
  },

  async created() {
    try {
      await preloadCompanyData(this.$axios)
    } catch (e) {
      console.warn('Company preload failed in KDS:', e)
    }

    await this.fetchTickets()
    this.startAutoRefresh()

    // Clock timer every second for live elapsed time updates
    this.clockTimer = setInterval(() => {
      this.currentTime = Date.now()
    }, 1000)
  },

  beforeDestroy() {
    if (this.refreshTimer) clearInterval(this.refreshTimer)
    if (this.clockTimer) clearInterval(this.clockTimer)
  },

  computed: {
    restaurantConfig() {
      const company = mainCompanyInfo()
      return {
        name: company?.name || 'Restaurant & Cafe',
        address: company?.address || '',
        phone: company?.tel || '',
        taxNumber: company?.taxId || '',
        receiptFooter: 'Kitchen Order Ticket (KOT)',
        wifiInfo: '',
        vatPercentage: 10,
        currencySymbol: 'LAK',
      }
    },

    activeTickets() {
      return this.tickets.filter((t) => {
        if (!t) return false
        return t.status === 'pending' || t.status === 'preparing' || t.status === 'ready'
      })
    },

    countPending() {
      return this.activeTickets.filter((t) => t.status === 'pending').length
    },

    countPreparing() {
      return this.activeTickets.filter((t) => t.status === 'preparing').length
    },

    countReady() {
      return this.activeTickets.filter((t) => t.status === 'ready').length
    },

    filteredTickets() {
      return this.activeTickets.filter((ticket) => {
        if (this.selectedStatusFilter !== 'ALL') {
          if (ticket.status !== this.selectedStatusFilter) return false
        }

        if (this.selectedStation !== 'ALL') {
          const lines = this.getStationFilteredLines(ticket)
          if (lines.length === 0) return false
        }

        return true
      })
    },
  },

  methods: {
    async fetchTickets() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/ticket/filter/pending')
        const newTickets = res.data?.data || res.data?.tickets || res.data || []
        
        const pendingCount = newTickets.filter((t) => t.status === 'pending').length
        if (pendingCount > this.previousTicketCount && this.previousTicketCount > 0 && this.soundEnabled) {
          this.playChime()
        }
        this.previousTicketCount = pendingCount

        this.tickets = newTickets
      } catch (err) {
        console.error('Error fetching KDS tickets:', err)
      } finally {
        this.isloading = false
      }
    },

    startAutoRefresh() {
      if (this.refreshTimer) clearInterval(this.refreshTimer)
      if (this.autoRefreshSeconds > 0) {
        this.refreshTimer = setInterval(() => {
          this.fetchTickets()
        }, this.autoRefreshSeconds * 1000)
      }
    },

    setRefreshInterval(seconds) {
      this.autoRefreshSeconds = seconds
      this.startAutoRefresh()
    },

    toggleSound() {
      this.soundEnabled = !this.soundEnabled
      if (this.soundEnabled) {
        this.playChime()
      }
    },

    playChime() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        if (!AudioContext) return
        if (!this.audioCtx) {
          this.audioCtx = new AudioContext()
        }
        const ctx = this.audioCtx
        const now = ctx.currentTime

        const osc1 = ctx.createOscillator()
        const gain1 = ctx.createGain()
        osc1.type = 'sine'
        osc1.frequency.setValueAtTime(587.33, now)
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15)
        gain1.gain.setValueAtTime(0.3, now)
        gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.4)
        osc1.connect(gain1)
        gain1.connect(ctx.destination)
        osc1.start(now)
        osc1.stop(now + 0.4)

        const osc2 = ctx.createOscillator()
        const gain2 = ctx.createGain()
        osc2.type = 'sine'
        osc2.frequency.setValueAtTime(1174.66, now + 0.18)
        gain2.gain.setValueAtTime(0.4, now + 0.18)
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.7)
        osc2.connect(gain2)
        gain2.connect(ctx.destination)
        osc2.start(now + 0.18)
        osc2.stop(now + 0.7)
      } catch (e) {
        console.warn('Audio chime error:', e)
      }
    },

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
          this.isFullscreen = true
        }).catch((err) => {
          console.warn('Fullscreen request failed:', err)
        })
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().then(() => {
            this.isFullscreen = false
          })
        }
      }
    },

    getTableName(ticket) {
      if (!ticket) return '-'
      if (ticket.table?.number || ticket.table?.name) {
        return `ໂຕະ ${ticket.table.number || ticket.table.name}`
      }
      return 'Takeaway'
    },

    formatTime(dateString) {
      if (!dateString) return ''
      return new Date(dateString).toLocaleTimeString('lo-LA', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    getElapsedTime(createdAt) {
      if (!createdAt) return '00:00'
      const created = new Date(createdAt).getTime()
      const diffSecs = Math.max(0, Math.floor((this.currentTime - created) / 1000))
      const mins = Math.floor(diffSecs / 60)
      const secs = diffSecs % 60
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    },

    isUrgent(ticket) {
      if (!ticket?.createdAt) return false
      const diffMins = (this.currentTime - new Date(ticket.createdAt).getTime()) / 60000
      return diffMins >= 20
    },

    getTimerColor(ticket) {
      if (!ticket?.createdAt) return 'primary'
      const diffMins = (this.currentTime - new Date(ticket.createdAt).getTime()) / 60000
      if (diffMins < 10) return 'secondary'
      if (diffMins < 20) return 'amber darken-2'
      return 'red darken-2'
    },

    getCardHeaderStyle(ticket) {
      switch (ticket.status) {
        case 'pending':
          // Primary Theme Gradient (Primary #01532B -> Secondary #337555)
          return 'background: linear-gradient(135deg, var(--v-primary-base, #01532B) 0%, var(--v-secondary-base, #337555) 100%);'
        case 'preparing':
          // Cooking Warm Amber Gradient
          return 'background: linear-gradient(135deg, #b45309 0%, #d97706 100%);'
        case 'ready':
          // Ready Crisp Green / Secondary Gradient
          return 'background: linear-gradient(135deg, var(--v-secondary-base, #337555) 0%, var(--v-primary-base, #01532B) 100%);'
        default:
          return 'background: var(--v-primary-base, #01532B);'
      }
    },

    getOrderCardClass(ticket) {
      return {
        'card-pending': ticket.status === 'pending',
        'card-preparing': ticket.status === 'preparing',
        'card-ready': ticket.status === 'ready',
        'urgent-order': this.isUrgent(ticket),
      }
    },

    getStationFilteredLines(ticket) {
      const lines = ticket.ticketLines || []
      if (this.selectedStation === 'ALL') return lines

      return lines.filter((line) => {
        const catName = (line.product?.category?.categ_name || '').toUpperCase()
        const proName = (line.product?.pro_name || '').toUpperCase()
        const isDrink =
          catName.includes('DRINK') ||
          catName.includes('BEV') ||
          catName.includes('BAR') ||
          catName.includes('COFFEE') ||
          catName.includes('TEA') ||
          proName.includes('BEER') ||
          proName.includes('JUICE')

        if (this.selectedStation === 'BAR') return isDrink
        if (this.selectedStation === 'KITCHEN') return !isDrink
        return true
      })
    },

    async updateStatus(ticket, newStatus) {
      this.updatingId = ticket.id
      try {
        await this.$axios.patch(`/api/ticket/${ticket.id}/status`, {
          status: newStatus,
        })
        ticket.status = newStatus

        if (this.$toast) {
          this.$toast.success(`ບິນ ${this.getTableName(ticket)} ປ່ຽນສະຖານະເປັນ: ${newStatus.toUpperCase()}`)
        }
        await this.fetchTickets()
      } catch (err) {
        console.error('Error updating ticket status in KDS:', err)
        swalError2(this.$swal, 'Error', 'Failed to update ticket status')
      } finally {
        this.updatingId = null
      }
    },

    async toggleLineStatus(ticket, line) {
      const nextStatus = line.status === 'ready' ? 'ordered' : 'ready'
      line.status = nextStatus

      try {
        if (line.id) {
          await this.$axios.put(`/api/ticketLine/ticket-lines/${line.id}`, {
            status: nextStatus,
          })
        }
      } catch (err) {
        console.warn('Could not update individual line status:', err)
      }

      const allLines = ticket.ticketLines || []
      if (allLines.length > 0 && allLines.every((l) => l.status === 'ready') && ticket.status !== 'ready') {
        await this.updateStatus(ticket, 'ready')
      }
    },

    printKotTicket(ticket) {
      this.ticketToPrint = {
        ...ticket,
        tableName: this.getTableName(ticket),
        ticketLines: (ticket.ticketLines || []).map((l) => ({
          ...l,
          product: l.product || { pro_name: 'Item' },
          quantity: l.quantity,
          unitPrice: l.unitPrice || 0,
          totalPrice: l.totalPrice || 0,
        })),
      }
      this.showThermalPrint = true
    },
  },
}
</script>

<style scoped>
.kds-container {
  min-height: 100vh;
  padding: 16px;
  background: #f8fafc;
  font-family: inherit;
}

.kds-fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  z-index: 9999 !important;
  background: #f1f5f9 !important;
  overflow-y: auto !important;
  padding: 16px !important;
}

/* Primary Theme Header with Lush Emerald Gradient */
.primary-theme-header {
  background: linear-gradient(135deg, var(--v-primary-base, #01532B) 0%, var(--v-secondary-base, #337555) 100%) !important;
}

.kds-stat-box {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
}

.frosted-btn {
  background: rgba(255, 255, 255, 0.15) !important;
}

.empty-kds-box {
  background: white;
  border: 2px dashed var(--v-primary-base, #01532B);
}

.kds-order-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #ffffff;
}

.kds-order-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(1, 83, 43, 0.15) !important;
}

.card-pending {
  border-color: var(--v-primary-base, #01532B) !important;
}

.card-preparing {
  border-color: #f59e0b !important;
}

.card-ready {
  border-color: var(--v-secondary-base, #337555) !important;
}

.urgent-order {
  animation: urgentGlow 1.5s infinite alternate ease-in-out;
}

.kds-line-done {
  background: #f0fdf4 !important;
  border-color: var(--v-lightprimary-base, #80a995) !important;
}

.line-completed {
  text-decoration: line-through;
  color: #94a3b8 !important;
}

.timer-badge {
  letter-spacing: 0.5px;
}

.timer-blink {
  animation: timerBlink 1s infinite alternate;
}

.pulse-badge {
  animation: pulse 1.5s infinite;
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}

@keyframes timerBlink {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes urgentGlow {
  0% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.4); border-color: #ef4444 !important; }
  100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.8); border-color: #dc2626 !important; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
</style>
