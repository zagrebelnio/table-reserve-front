'use client';
import { useState, useEffect } from 'react';
import BookingByDateForm from '@/ui/bookingByDateForm';
import { reservationService } from '@/lib/reservation/reservationService';
import { useSession } from 'next-auth/react';
import styles from './page.module.css';

const BookingsPage = () => {
  const { data: session, status } = useSession();
  const token = session?.accessToken || '';
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = async (date = null) => {
    if (!token) {
      setBookings([]);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    try {
      const data = await reservationService.getReservations(token, date);
      setBookings(data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [token]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Керування бронюваннями</h1>
      <BookingByDateForm onDateSelected={fetchBookings} />
      {loading && <p className={styles.message}>Loading bookings...</p>}
      {error && <p className={styles.message}>{error}</p>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Користувач</th>
            <th>Пошта</th>
            <th>Дата</th>
            <th>Час</th>
            <th>№ Столика</th>
            <th>Гості</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>
                {booking.firstName} {booking.lastName}
              </td>
              <td>{booking.email}</td>
              <td>{new Date(booking.date).toLocaleDateString('uk')}</td>
              <td>
                {new Date(booking.date).toLocaleTimeString('uk', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td>{booking.number}</td>
              <td>{booking.numberOfGuests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default BookingsPage;
