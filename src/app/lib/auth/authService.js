import axios from 'axios';

export const authService = {
  async login(credentials) {
    try {
      const loginResponse = await axios.post(
        'https://localhost:7174/auth/login',
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const token = loginResponse.data;

      const userDataResponse = await axios.get('https://localhost:7174/user', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const userData = userDataResponse.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));

      return { token, userData };
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await axios.post(
        'https://localhost:7174/auth/register',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getUserData(token) {
    try {
      const response = await axios.get('https://localhost:7174/user', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
