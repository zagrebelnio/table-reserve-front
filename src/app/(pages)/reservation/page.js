'use client';
import {
  GradientButton,
  PrimaryButton,
  SecondaryButton,
} from '@/app/ui/buttons';
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
      {isAuthenticated && (
        <section className={styles.reservation}>
          <h1>Бронювання</h1>
          <p>
            Вітаємо, ви можете забронювати столик, переглянути ваші поточні
            бронювання та скасовувати їх!
          </p>
          <div className={styles.cta}>
            <Link href="/reservation/new">
              <PrimaryButton>Перейти до бронювання</PrimaryButton>
            </Link>
            <Link href="/reservation/cancel">
              <SecondaryButton>Скасувати бронювання</SecondaryButton>
            </Link>
            <Link href="/profile/reservations">
              <GradientButton>Переглянути поточні бронювання</GradientButton>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
