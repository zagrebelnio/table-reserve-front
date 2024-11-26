'use client';
import Link from 'next/link';
import styles from './page.module.css';
import StepProgress from '@/app/ui/stepProgress';
import ReservationForm from '@/app/ui/reservationForm';
import { useState } from 'react';
import { reservationService } from '@/app/lib/reservation/reservationService';
import { CtaButton } from '@/app/ui/buttons';

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
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    date: new Date(),
    capacity: 1,
  });
  const [tables, setTables] = useState([]);

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
    } catch (error) {
      console.error('Failed to reserve:', error);
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
      </section>
    </main>
  );
}
