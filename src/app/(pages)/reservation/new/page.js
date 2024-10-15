'use client';
import Link from 'next/link';
import styles from './page.module.css';
import StepProgress from '@/app/ui/stepProgress';
import ReservationForm from '@/app/ui/reservationForm';
import ReservationItem from '@/app/ui/reservationItem';
import RESERVATIONS from '@/app/store/reservations';
import { useState } from 'react';
import { CtaButton } from '@/app/ui/buttons';

export default function NewReservation() {
  const steps = [
    {
      number: 1,
      title: 'Заповоніть деталі замовлення',
    },
    {
      number: 2,
      title: 'Оберіть вільні місця',
    },
    {
      number: 3,
      title: 'Отримайте підтвердження',
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.links}>
          <Link className={styles.selected} href="/reservation/new">
            Забронювати
          </Link>
          <Link href="/reservation/cancel">Скасувати бронювання</Link>
        </div>
        <StepProgress steps={steps} current={currentStep} />
        {currentStep === 1 && (
          <ReservationForm onSubmit={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <div className={styles.tablesContainer}>
            <p>Вільні місця згідно деталей</p>
            <ul className={styles.tablesList}>
              {RESERVATIONS.map((reservation) => (
                <li key={reservation.id} className={styles.tableItem}>
                  <ReservationItem reservation={reservation} />
                  <CtaButton onClick={() => setCurrentStep(3)} type="reserve">
                    Забронювати
                  </CtaButton>
                </li>
              ))}
            </ul>
          </div>
        )}
        {currentStep === 3 && (
          <p className={styles.result}>
            Бронювання успішно оброблено! Деталі вислано на Вашу пошту!
          </p>
        )}
      </section>
    </main>
  );
}
