'use client';
import { PrimaryButton, SecondaryButton } from '@/app/ui/buttons';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';

export default function Auth() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h1>{mode === 'login' ? 'З поверненням!' : 'Форма реєстрації'}</h1>
        {mode === 'signup' && (
          <>
            <label>Введіть Ваше ім&apos;я</label>
            <input type="text" />
            <label>Введіть Ваше прізвище</label>
            <input type="text" />
          </>
        )}
        <label>Введіть Вашу пошту</label>
        <input type="email" />
        <label>Введіть Ваш пароль</label>
        <input type="password" />
        <PrimaryButton>Підтвердити</PrimaryButton>
      </form>
    </main>
  );
}
