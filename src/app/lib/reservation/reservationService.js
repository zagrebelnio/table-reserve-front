import axios from 'axios';

export const reservationService = {
  async getUserReservations(token) {
    try {
      const response = await axios.get(
        'https://localhost:7174/booking/byUserId',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      if (error.status === 404) {
        return [];
      }
      throw error;
    }
  },

  async getFreeTables(token, date, numberOfGuests) {
    try {
      const response = await axios.get(
        'https://localhost:7174/table/free-tables',
        {
          params: {
            date,
            numberOfGuests,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async reserveTable(token, date, numberOfGuests, tableId) {
    try {
      const response = await axios.post(
        'https://localhost:7174/booking',
        {
          date,
          numberOfGuests,
          tableId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
