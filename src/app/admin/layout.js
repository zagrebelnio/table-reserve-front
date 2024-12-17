'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/authContext';
import { useEffect } from 'react';
import { decodeToken } from '@/util/decodeToken';

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const token = session?.accessToken;
  const router = useRouter();
  const isAdmin = token ? decodeToken(token) === 'Admin' : false;

  if (status === 'loading') {
    return null;
  }

  if (!isAdmin) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
}
