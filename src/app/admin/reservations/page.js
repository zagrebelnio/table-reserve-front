'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingByDateForm from '@/ui/bookingByDateForm';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = async (date = null) => {
    setLoading(true);
    try {
      const response = date
        ? await axios.get(`https://localhost:7174/booking/${date}`)
        : await axios.get('https://localhost:7174/booking');
      setBookings(response.data);
    } catch (err) {
      setError('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <main>
      <h1>Manage Bookings</h1>
      <BookingByDateForm onDateSelected={fetchBookings} />
      {loading && <p>Loading bookings...</p>}
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Table</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.table}</td>
              <td>{booking.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default BookingsPage;
