'use client';
import Link from 'next/link';
import styles from './page.module.css';
import StepProgress from '@/app/ui/stepProgress';
import ReservationItem from '@/app/ui/reservationItem';
import RESERVATIONS from '@/app/store/reservations';
import { useState } from 'react';
import { CtaButton } from '@/app/ui/buttons';

export default function CancelReservation() {
  const steps = [
    {
      number: 1,
      title: 'Видаліть',
    },
    {
      number: 2,
      title: 'Отримайте підтвердження',
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.links}>
          <Link href="/reservation/new">Забронювати</Link>
          <Link className={styles.selected} href="/reservation/cancel">
            Скасувати бронювання
          </Link>
        </div>
        <StepProgress steps={steps} current={currentStep} />
        {currentStep === 1 && (
          <div className={styles.reservationsContainer}>
            <p>Ваші бронювання</p>
            <ul className={styles.reservationsList}>
              {RESERVATIONS.map((reservation) => (
                <li key={reservation.id} className={styles.reservationItem}>
                  <ReservationItem reservation={reservation} />
                  <CtaButton onClick={() => setCurrentStep(2)} type="delete">
                    Скасувати
                  </CtaButton>
                </li>
              ))}
            </ul>
          </div>
        )}
        {currentStep === 2 && (
          <p className={styles.result}>Бронювання успішно видалено!</p>
        )}
      </section>
    </main>
  );
}
