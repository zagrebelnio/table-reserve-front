'use client';
import { useAuth } from '@/app/lib/auth/authContext';
import Unauthorized from '@/app/ui/unauthorized';

export default function ReservationLayout({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return <>{isAuthenticated ? children : <Unauthorized />}</>;
}
