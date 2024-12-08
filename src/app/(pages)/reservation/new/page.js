'use client';
import Link from 'next/link';
import styles from './page.module.css';
import StepProgress from '@/app/ui/stepProgress';
import ReservationForm from '@/app/ui/reservationForm';
import { useState } from 'react';
import { reservationService } from '@/app/lib/reservation/reservationService';
import { CtaButton } from '@/app/ui/buttons';
import { useReservation } from '@/app/lib/reservation/reservationContext';

export default function NewReservation() {
  const steps = [
    {
      number: 1,
      title: 'Заповоніть деталі замовлення',
    },
    {
      number: 2,
      title: 'Отримайте підтвердження',
    },
    {
      number: 3,
      title: 'Ваше бронювання',
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: new Date(),
    capacity: 1,
  });
  const [tables, setTables] = useState([]);
  const [error, setError] = useState(null);

  const { setUserReservations } = useReservation();

  const handleSubmit = async (data) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await reservationService.getFreeTables(
        token,
        data.date,
        data.capacity
      );
      setTables(response);
      setFormData(data);
      setCurrentStep(2);
    } catch (error) {
      console.error('Failed to submit reservation:', error);
      setError(error);
    }
  };

  const handleReserve = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await reservationService.reserveTable(
        token,
        formData.date,
        formData.capacity,
        tables[0].id
      );
      console.log('Reservation confirmed:', response);
      const updatedReservations = await reservationService.getUserReservations(
        token
      );
      setUserReservations(updatedReservations);
      setError(null);
    } catch (error) {
      console.error('Failed to confirm reservation:', error);
      setError(error);
    } finally {
      setCurrentStep(3);
    }
  };

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
        {currentStep === 1 && <ReservationForm onSubmit={handleSubmit} />}
        {currentStep === 2 &&
          (tables.length > 0 ? (
            <div className={styles.result}>
              <p>Столик знайдено. Бажаєте підтвердити бронювання?</p>
              <CtaButton type="edit" onClick={handleReserve}>
                Підтвердити
              </CtaButton>
              <CtaButton type="delete" onClick={() => setCurrentStep(1)}>
                Скасувати
              </CtaButton>
            </div>
          ) : (
            <div className={styles.result}>
              <p>Вільного столика на задану дату не знайдено.</p>
              <CtaButton type="delete" onClick={() => setCurrentStep(1)}>
                Повернутися до деталей
              </CtaButton>
            </div>
          ))}
        {currentStep === 3 && (
          <div className={styles.result}>
            <p>
              {error
                ? `Помилка: ${error.response.data}`
                : 'Ваше бронювання підтверджено'}
            </p>
            <CtaButton type="delete" onClick={() => setCurrentStep(1)}>
              Повернутися до деталей
            </CtaButton>
          </div>
        )}
      </section>
    </main>
  );
}
