export class ParkingApiService {
  constructor(axios) {
    this.axios = axios;
  }

  // --- Dashboard & Reports ---
  async getDashboardStats() {
    try {
      const res = await this.axios.get('/api/parking/dashboard/stats');
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async getParkedVehicles() {
    try {
      const res = await this.axios.get('/api/parking/reports/parked-vehicles');
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async getRevenueReport(params = {}) {
    try {
      const res = await this.axios.get('/api/parking/reports/revenue', { params });
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async getPeakHoursReport(params = {}) {
    try {
      const res = await this.axios.get('/api/parking/reports/peak-hours', { params });
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  // --- Zones & Slots ---
  async getZones() {
    try {
      const res = await this.axios.get('/api/parking/zones');
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async createZone(data) {
    try {
      const res = await this.axios.post('/api/parking/zones', data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async updateZone(id, data) {
    try {
      const res = await this.axios.put(`/api/parking/zones/${id}`, data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async deleteZone(id) {
    try {
      const res = await this.axios.delete(`/api/parking/zones/${id}`);
      return { success: true, data: res.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async getSlots(params = {}) {
    try {
      const res = await this.axios.get('/api/parking/slots', { params });
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async createSlot(data) {
    try {
      const res = await this.axios.post('/api/parking/slots', data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async updateSlot(id, data) {
    try {
      const res = await this.axios.put(`/api/parking/slots/${id}`, data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async updateSlotStatus(id, status) {
    try {
      const res = await this.axios.patch(`/api/parking/slots/${id}/status`, { status });
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  // --- Pricing Rules ---
  async getPricingRules() {
    try {
      const res = await this.axios.get('/api/parking/pricing-rules');
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async savePricingRule(data) {
    try {
      const res = await this.axios.post('/api/parking/pricing-rules', data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  // --- Monthly Passes ---
  async getMonthlyPasses(params = {}) {
    try {
      const res = await this.axios.get('/api/parking/monthly-passes', { params });
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async createMonthlyPass(data) {
    try {
      const res = await this.axios.post('/api/parking/monthly-passes', data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async renewMonthlyPass(id, data) {
    try {
      const res = await this.axios.post(`/api/parking/monthly-passes/${id}/renew`, data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  // --- Entry & Exit ---
  async processEntry(data) {
    try {
      const res = await this.axios.post('/api/parking/entry', data);
      return { success: true, data: res.data.data, message: res.data.message };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async calculateFee(data) {
    try {
      const res = await this.axios.post('/api/parking/exit/calculate-fee', data);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async processExit(data) {
    try {
      const res = await this.axios.post('/api/parking/exit/pay', data);
      return { success: true, data: res.data.data, message: res.data.message };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  // --- Tickets ---
  async getTickets(params = {}) {
    try {
      const res = await this.axios.get('/api/parking/tickets', { params });
      return { success: true, data: res.data.data, total: res.data.total };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async getTicketById(id) {
    try {
      const res = await this.axios.get(`/api/parking/tickets/${id}`);
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async markTicketLost(id) {
    try {
      const res = await this.axios.post(`/api/parking/tickets/${id}/lost`);
      return { success: true, data: res.data.data, message: res.data.message };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }

  async cancelTicket(id, reason) {
    try {
      const res = await this.axios.post(`/api/parking/tickets/${id}/cancel`, { reason });
      return { success: true, data: res.data.data, message: res.data.message };
    } catch (err) {
      return { success: false, error: err.response?.data?.message || err.message };
    }
  }
}

export function createParkingApiService(axios) {
  return new ParkingApiService(axios);
}
