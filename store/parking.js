import { createParkingApiService } from '~/services/parkingApiService';

export const state = () => ({
  dashboardStats: null,
  parkedVehicles: [],
  zones: [],
  slots: [],
  pricingRules: [],
  monthlyPasses: [],
  tickets: [],
  totalTickets: 0,
  loading: false,
  error: null
});

export const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_DASHBOARD_STATS(state, stats) {
    state.dashboardStats = stats;
  },
  SET_PARKED_VEHICLES(state, vehicles) {
    state.parkedVehicles = vehicles;
  },
  SET_ZONES(state, zones) {
    state.zones = zones;
  },
  SET_SLOTS(state, slots) {
    state.slots = slots;
  },
  SET_PRICING_RULES(state, rules) {
    state.pricingRules = rules;
  },
  SET_MONTHLY_PASSES(state, passes) {
    state.monthlyPasses = passes;
  },
  SET_TICKETS(state, { tickets, total }) {
    state.tickets = tickets;
    state.totalTickets = total;
  }
};

export const actions = {
  getApiService({ rootState }) {
    return createParkingApiService(this.$axios);
  },

  async fetchDashboardStats({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getDashboardStats();
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_DASHBOARD_STATS', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchParkedVehicles({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getParkedVehicles();
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_PARKED_VEHICLES', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchZones({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getZones();
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_ZONES', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchSlots({ commit, dispatch }, params = {}) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getSlots(params);
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_SLOTS', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchPricingRules({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getPricingRules();
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_PRICING_RULES', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchMonthlyPasses({ commit, dispatch }, params = {}) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getMonthlyPasses(params);
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_MONTHLY_PASSES', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchTickets({ commit, dispatch }, params = {}) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getTickets(params);
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_TICKETS', { tickets: res.data, total: res.total });
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async createEntry({ dispatch }, data) {
    const api = await dispatch('getApiService');
    return await api.processEntry(data);
  },

  async calculateFee({ dispatch }, data) {
    const api = await dispatch('getApiService');
    return await api.calculateFee(data);
  },

  async processExit({ dispatch }, data) {
    const api = await dispatch('getApiService');
    return await api.processExit(data);
  }
};
