'use client';
import { PrimaryButton } from '@/app/ui/buttons';
import styles from './page.module.css';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import useUserStore from '@/app/store/userStore';

export default function Auth() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = searchParams.get('mode');
  const login = useUserStore((state) => state.login);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    router.push('/');
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
        <label htmlFor="email">Введіть Вашу пошту</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Введіть Ваш пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        />
        <PrimaryButton type="submit">Підтвердити</PrimaryButton>
      </form>
    </main>
  );
}
