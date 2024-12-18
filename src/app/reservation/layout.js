'use client';
import { useAuth } from '@/lib/auth/authContext';
import Unauthorized from '@/ui/unauthorized';

export default function ReservationLayout({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return <>{user ? children : <Unauthorized />}</>;
}
