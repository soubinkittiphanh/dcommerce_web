import { createMFApiService } from '~/services/mfApiService';

export const state = () => ({
  cifCustomers: [],
  groups: [],
  collaterals: [],
  products: [],
  accounts: [],
  journalEntries: [],
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
  SET_CIF_CUSTOMERS(state, customers) {
    state.cifCustomers = customers;
  },
  SET_GROUPS(state, groups) {
    state.groups = groups;
  },
  SET_COLLATERALS(state, collaterals) {
    state.collaterals = collaterals;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_ACCOUNTS(state, accounts) {
    state.accounts = accounts;
  },
  SET_JOURNAL_ENTRIES(state, entries) {
    state.journalEntries = entries;
  }
};

export const actions = {
  getApiService({ rootState }) {
    // Instantiates API service passing the Nuxt Axios instance
    return createMFApiService(this.$axios);
  },

  async fetchCifCustomers({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const result = await api.getCifCustomers();
    commit('SET_LOADING', false);
    if (result.success) {
      commit('SET_CIF_CUSTOMERS', result.data);
    } else {
      commit('SET_ERROR', result.error);
    }
    return result;
  },

  async createCifCustomer({ dispatch }, cifData) {
    const api = await dispatch('getApiService');
    return await api.createCifCustomer(cifData);
  },

  async updateCifCustomer({ dispatch }, { id, cifData }) {
    const api = await dispatch('getApiService');
    return await api.updateCifCustomer(id, cifData);
  },

  async fetchGroups({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const result = await api.getGroups();
    commit('SET_LOADING', false);
    if (result.success) {
      commit('SET_GROUPS', result.data);
    } else {
      commit('SET_ERROR', result.error);
    }
    return result;
  },

  async createGroup({ dispatch }, groupData) {
    const api = await dispatch('getApiService');
    return await api.createGroup(groupData);
  },

  async updateGroup({ dispatch }, { id, groupData }) {
    const api = await dispatch('getApiService');
    return await api.updateGroup(id, groupData);
  },

  async fetchCollaterals({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const result = await api.getCollaterals();
    commit('SET_LOADING', false);
    if (result.success) {
      commit('SET_COLLATERALS', result.data);
    } else {
      commit('SET_ERROR', result.error);
    }
    return result;
  },

  async createCollateral({ dispatch }, collateralData) {
    const api = await dispatch('getApiService');
    return await api.createCollateral(collateralData);
  },

  async fetchProducts({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const result = await api.getProducts();
    commit('SET_LOADING', false);
    if (result.success) {
      commit('SET_PRODUCTS', result.data);
    } else {
      commit('SET_ERROR', result.error);
    }
    return result;
  },

  async createProduct({ dispatch }, productData) {
    const api = await dispatch('getApiService');
    return await api.createProduct(productData);
  },

  async fetchAccounts({ commit, dispatch }) {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const result = await api.getAccounts();
    commit('SET_LOADING', false);
    if (result.success) {
      commit('SET_ACCOUNTS', result.data);
    } else {
      commit('SET_ERROR', result.error);
    }
    return result;
  },

  async createAccount({ dispatch }, accountData) {
    const api = await dispatch('getApiService');
    return await api.createAccount(accountData);
  },

  async makePayment({ dispatch }, { id, paymentData }) {
    const api = await dispatch('getApiService');
    return await api.makePayment(id, paymentData);
  },

  async fetchJournalEntries({ commit, dispatch }, loanAccountId = '') {
    commit('SET_LOADING', true);
    const api = await dispatch('getApiService');
    const result = await api.getJournalEntries(loanAccountId);
    commit('SET_LOADING', false);
    if (result.success) {
      commit('SET_JOURNAL_ENTRIES', result.data);
    } else {
      commit('SET_ERROR', result.error);
    }
    return result;
  },

  async runEod({ dispatch }) {
    const api = await dispatch('getApiService');
    return await api.runEod();
  }
};
