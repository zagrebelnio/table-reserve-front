'use client';

import { PrimaryButton } from '@/ui/buttons';
import styles from './page.module.css';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { authService } from '@/lib/auth/authService';
import { signIn } from 'next-auth/react';

export default function Auth() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = searchParams.get('mode');
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setError(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (credentials) => {
    const result = await signIn('credentials', {
      redirect: false,
      userName: credentials.userName,
      password: credentials.password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  const handleSignup = async (userData) => {
    try {
      await authService.register(userData);
      const result = await signIn('credentials', {
        redirect: false,
        userName: userData.userName,
        password: userData.password,
      });

      if (result.error) {
        setError(result.error);
      } else {
        router.push('/');
      }
    } catch (error) {
      const msg =
        error.response?.data?.split('\n')[0].split(':')[1]?.trim() ??
        'Registration failed';
      setError(msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mode === 'login'
      ? handleLogin({
          userName: formData.userName,
          password: formData.password,
        })
      : handleSignup(formData);
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>{mode === 'login' ? 'З поверненням!' : 'Форма реєстрації'}</h1>
        {mode === 'signup' && (
          <>
            <label htmlFor="firstName">Введіть Ваше ім&apos;я</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName">Введіть Ваше прізвище</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </>
        )}
        <label htmlFor="userName">Введіть Ваш нікнейм</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        {mode === 'signup' && (
          <>
            <label htmlFor="email">Введіть Ваш email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </>
        )}
        <label htmlFor="password">Введіть Ваш пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <PrimaryButton type="submit">Підтвердити</PrimaryButton>
      </form>
    </main>
  );
}
