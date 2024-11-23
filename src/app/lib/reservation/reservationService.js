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
};
