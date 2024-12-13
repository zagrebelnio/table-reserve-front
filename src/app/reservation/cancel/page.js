'use client';
import Link from 'next/link';
import styles from './page.module.css';
import StepProgress from '@/ui/stepProgress';
import ReservationItem from '@/ui/reservationItem';
import { useState } from 'react';
import { CtaButton } from '@/ui/buttons';
import { useReservation } from '@/lib/reservation/reservationContext';
import { reservationService } from '@/lib/reservation/reservationService';

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
  const [error, setError] = useState(null);
  const { userReservations, setUserReservations } = useReservation();

  async function handleCancel(id) {
    try {
      const token = localStorage.getItem('authToken');
      await reservationService.cancelReservation(token, id);
      const updatedReservations = await reservationService.getUserReservations(
        token
      );
      setUserReservations(updatedReservations);
      setCurrentStep(2);
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  }

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
        {currentStep === 1 && userReservations.length === 0 && (
          <p>Ви ще не забронювали жодного столика</p>
        )}
        {currentStep === 1 && userReservations.length > 0 && (
          <div className={styles.reservationsContainer}>
            <p>Ваші бронювання</p>
            <ul className={styles.reservationsList}>
              {userReservations.map((reservation) => (
                <div key={reservation.id} className={styles.reservationItem}>
                  <ReservationItem reservation={reservation} />
                  <CtaButton
                    onClick={async () => await handleCancel(reservation.id)}
                    type="delete"
                  >
                    Скасувати
                  </CtaButton>
                </div>
              ))}
            </ul>
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.result}>
            <p className={styles.result}>
              {error ? `Помилка: ${error}` : 'Бронювання скасовано успішно.'}
            </p>
            <CtaButton type="delete" onClick={() => setCurrentStep(1)}>
              Повернутися до скасування
            </CtaButton>
          </div>
        )}
      </section>
    </main>
  );
}
