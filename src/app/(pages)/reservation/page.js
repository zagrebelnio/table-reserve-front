'use client';
import { PrimaryButton, SecondaryButton } from '@/app/ui/buttons';
import styles from './page.module.css';
import Link from 'next/link';
import useUserStore from '@/app/store/userStore';

export default function Reservation() {
  const { isAuthenticated } = useUserStore();

  return (
    <main className={styles.main}>
      {!isAuthenticated && (
        <section className={styles.content}>
          <h1>Бронювання доступне лише для зареєстрованих користувачів!</h1>
          <div className={styles.authorizationContainer}>
            <Link href="/auth?mode=login">
              <SecondaryButton>Увійти</SecondaryButton>
            </Link>
            <Link href="/auth?mode=signup">
              <PrimaryButton>Зареєструватися</PrimaryButton>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
