'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { reservationService } from './reservationService';
import { useSession } from 'next-auth/react';

const ReservationContext = createContext({});

export function ReservationProvider({ children }) {
  const { data: session, status } = useSession();
  const [userReservations, setUserReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      if (status === 'loading') {
        setLoading(true);
        return;
      }

      if (!session?.accessToken) {
        setUserReservations([]);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const reservations = await reservationService.getUserReservations(
          session?.accessToken
        );
        setUserReservations(reservations);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user reservations:', err);
        setUserReservations([]);
        setError('Failed to fetch reservations');
        setLoading(false);
      }
    };

    fetchReservations();
  }, [session, status]);

  return (
    <ReservationContext.Provider
      value={{ userReservations, setUserReservations, loading, error }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservation = () => useContext(ReservationContext);
