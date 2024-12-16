import axios from '@/lib/axios/axiosInstance';

export const reservationService = {
  async getUserReservations(token) {
    try {
      const response = await axios.get('/booking/byUserId', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      const response = await axios.get('/table/free-tables', {
        params: {
          date,
          numberOfGuests,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async reserveTable(token, date, numberOfGuests, tableId) {
    try {
      const response = await axios.post(
        '/booking',
        {
          date,
          numberOfGuests,
          tableId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async cancelReservation(token, reservationId) {
    try {
      const response = await axios.delete(`/booking`, {
        params: {
          bookingId: reservationId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getReservations(token, date) {
    try {
      const url = date ? `/booking/${date}` : '/booking';
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response.data.includes('No bookings found')) {
        return [];
      }
      console.error('Error fetching reservations:', error);
      throw error;
    }
  },
};
