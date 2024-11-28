'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { reservationService } from './reservationService';

const ReservationContext = createContext({});

export function ReservationProvider({ children }) {
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    const checkUserReservations = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        console.log([]);
        setUserReservations([]);
        return;
      }

      try {
        const reservations = await reservationService.getUserReservations(
          token
        );
        setUserReservations(reservations);
      } catch (error) {
        console.error('Error fetching user reservations:', error);
      }
    };

    checkUserReservations();
    window.addEventListener('storage', checkUserReservations);
    return () => window.removeEventListener('storage', checkUserReservations);
  }, []);

  return (
    <ReservationContext.Provider
      value={{ userReservations, setUserReservations }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservation = () => useContext(ReservationContext);
