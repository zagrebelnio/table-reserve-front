'use client';
import {
  GradientButton,
  PrimaryButton,
  SecondaryButton,
} from '@/app/ui/buttons';
import styles from './page.module.css';
import Link from 'next/link';

export default function Reservation() {
  return (
    <main className={styles.main}>
      <section className={styles.reservation}>
        <h1>Бронювання</h1>
        <p>
          Вітаємо, ви можете забронювати столик, переглянути ваші поточні
          бронювання та скасувати їх!
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
    </main>
  );
}
