export class MFApiService {
  constructor(axios) {
    this.axios = axios;
  }

  // --- CIF ---
  async getCifCustomers() {
    try {
      const response = await this.axios.get('/api/mf/cif/find');
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async getCifCustomer(id) {
    try {
      const response = await this.axios.get(`/api/mf/cif/find/${id}`);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async createCifCustomer(cifData) {
    try {
      const response = await this.axios.post('/api/mf/cif/create', cifData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async updateCifCustomer(id, cifData) {
    try {
      const response = await this.axios.put(`/api/mf/cif/update/${id}`, cifData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  // --- Groups / Centers ---
  async getGroups() {
    try {
      const response = await this.axios.get('/api/mf/groups/find');
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async getGroup(id) {
    try {
      const response = await this.axios.get(`/api/mf/groups/find/${id}`);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async createGroup(groupData) {
    try {
      const response = await this.axios.post('/api/mf/groups/create', groupData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async updateGroup(id, groupData) {
    try {
      const response = await this.axios.put(`/api/mf/groups/update/${id}`, groupData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  // --- Collateral ---
  async getCollaterals() {
    try {
      const response = await this.axios.get('/api/mf/collateral/find');
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async createCollateral(collateralData) {
    try {
      const response = await this.axios.post('/api/mf/collateral/create', collateralData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  // --- Products ---
  async getProducts() {
    try {
      const response = await this.axios.get('/api/mf/products/find');
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async createProduct(productData) {
    try {
      const response = await this.axios.post('/api/mf/products/create', productData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  // --- Accounts ---
  async getAccounts() {
    try {
      const response = await this.axios.get('/api/mf/accounts/find');
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async getAccount(id) {
    try {
      const response = await this.axios.get(`/api/mf/accounts/find/${id}`);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async previewSchedule(params) {
    try {
      const response = await this.axios.post('/api/mf/accounts/preview-schedule', params);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async createAccount(accountData) {
    try {
      const response = await this.axios.post('/api/mf/accounts/create', accountData);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  async makePayment(id, paymentData) {
    try {
      const response = await this.axios.post(`/api/mf/accounts/pay/${id}`, paymentData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  // --- Journal ---
  async getJournalEntries(loanAccountId = '') {
    try {
      const response = await this.axios.get(`/api/mf/journal/find?loanAccountId=${loanAccountId}`);
      return { success: true, data: response.data.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }

  // --- Batch ---
  async runEod() {
    try {
      const response = await this.axios.post('/api/mf/batch/run-eod');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || error.message };
    }
  }
}

export function createMFApiService(axios) {
  return new MFApiService(axios);
}
