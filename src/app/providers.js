'use client';
import { SessionProvider } from 'next-auth/react';
import { ReservationProvider } from '@/lib/reservation/reservationContext';
import { AuthProvider } from '@/lib/auth/authContext';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <ReservationProvider>{children}</ReservationProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
