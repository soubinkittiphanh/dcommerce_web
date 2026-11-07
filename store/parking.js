import { createParkingApiService } from '~/services/parkingApiService';

export const state = () => ({
  dashboardStats: null,
  parkedVehicles: [],
  zones: [],
  slots: [],
  pricingRules: [],
  vehicleTypes: [], // active types, used by all parking forms
  allVehicleTypes: [], // incl. inactive, used by the vehicle-types admin page
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
  SET_VEHICLE_TYPES(state, types) {
    state.vehicleTypes = types;
  },
  SET_ALL_VEHICLE_TYPES(state, types) {
    state.allVehicleTypes = types;
  },
  SET_MONTHLY_PASSES(state, passes) {
    state.monthlyPasses = passes;
  },
  SET_TICKETS(state, { tickets, total }) {
    state.tickets = tickets;
    state.totalTickets = total;
  }
};

// Fallback when a code is not (or no longer) in the master list
const FALLBACK_TYPE = { icon: 'mdi-car', color: 'primary' };

export const getters = {
  // [{ label, value, icon, color }] for v-select / chip pickers (active types only)
  vehicleTypeOptions(state) {
    return (state.vehicleTypes || []).map(t => ({
      label: t.nameEn && t.nameEn !== t.nameLa ? `${t.nameLa} (${t.nameEn})` : t.nameLa,
      value: t.code,
      icon: t.icon || FALLBACK_TYPE.icon,
      color: t.color || FALLBACK_TYPE.color
    }));
  },
  defaultVehicleTypeCode(state) {
    const list = state.vehicleTypes || [];
    const def = list.find(t => t.isDefault) || list[0];
    return def ? def.code : 'car';
  },
  // vehicleTypeMeta(code) -> { code, label, nameLa, nameEn, icon, color } (works for inactive types too)
  vehicleTypeMeta(state) {
    return code => {
      const list = [...(state.allVehicleTypes || []), ...(state.vehicleTypes || [])];
      const t = list.find(x => x.code === code);
      if (!t) return { code, label: code || '-', nameLa: code || '-', nameEn: code || '-', ...FALLBACK_TYPE };
      return {
        code: t.code,
        label: t.nameLa,
        nameLa: t.nameLa,
        nameEn: t.nameEn || t.nameLa,
        icon: t.icon || FALLBACK_TYPE.icon,
        color: t.color || FALLBACK_TYPE.color
      };
    };
  }
};

export const actions = {
  getApiService({ rootState }) {
    return createParkingApiService(this.$axios);
  },

  // Active types for forms. Pass { force: true } to bypass the in-memory cache.
  async fetchVehicleTypes({ commit, dispatch, state }, { force = false } = {}) {
    if (!force && state.vehicleTypes && state.vehicleTypes.length) {
      return { success: true, data: state.vehicleTypes };
    }
    const api = await dispatch('getApiService');
    const res = await api.getVehicleTypes();
    if (res.success) {
      commit('SET_VEHICLE_TYPES', res.data);
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async fetchAllVehicleTypes({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const res = await api.getVehicleTypes({ includeInactive: 1 });
    commit('SET_LOADING', false);
    if (res.success) {
      commit('SET_ALL_VEHICLE_TYPES', res.data);
      commit('SET_VEHICLE_TYPES', res.data.filter(t => t.isActive));
    } else {
      commit('SET_ERROR', res.error);
    }
    return res;
  },

  async saveVehicleType({ dispatch }, data) {
    const api = await dispatch('getApiService');
    const res = data.id
      ? await api.updateVehicleType(data.id, data)
      : await api.createVehicleType(data);
    if (res.success) await dispatch('fetchAllVehicleTypes');
    return res;
  },

  async setVehicleTypeStatus({ dispatch }, { id, isActive }) {
    const api = await dispatch('getApiService');
    const res = await api.setVehicleTypeStatus(id, isActive);
    if (res.success) await dispatch('fetchAllVehicleTypes');
    return res;
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
