'use client';
import { useAuth } from '@/lib/auth/authContext';
import Unauthorized from '@/ui/unauthorized';

export default function ProfileLayout({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return <>{user ? children : <Unauthorized />}</>;
}
