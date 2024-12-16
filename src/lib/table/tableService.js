import axios from '@/lib/axios/axiosInstance';

export const tableService = {
  async getTables(token) {
    try {
      const response = await axios.get('/table', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteTable(token, tableId) {
    try {
      await axios.delete('/table', {
        params: {
          tableId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async createTable(token, tableData) {
    try {
      const response = await axios.post('/table', tableData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
