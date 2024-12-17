'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '@/lib/auth/authService';
import { signOut, useSession } from 'next-auth/react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (!session?.accessToken) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userData = await authService.getUserData(session.accessToken);
      setUser(userData);
    } catch (error) {
      setError(error.message || 'Failed to fetch user data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  async function logout() {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    if (session?.accessToken) {
      fetchUserData();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [session, status]);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, refetchUser: fetchUserData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
