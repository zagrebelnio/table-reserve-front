import axios from '@/lib/axios/axiosInstance';

export const authService = {
  async register(userData) {
    try {
      const response = await axios.post('/auth/register', userData);

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getUserData(token) {
    try {
      const response = await axios.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
