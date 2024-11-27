'use client';
import { useAuth } from '@/app/lib/auth/authContext';
import Unauthorized from '@/app/ui/unauthorized';

export default function ProfileLayout({ children }) {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated ? children : <Unauthorized />}</>;
}
