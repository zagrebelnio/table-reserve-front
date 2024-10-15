import Link from 'next/link';
import styles from './page.module.css';
import StepProgress from '@/app/ui/stepProgress';
import ReservationForm from '@/app/ui/reservationForm';

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

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.links}>
          <Link className={styles.selected} href="/reservation/new">
            Забронювати
          </Link>
          <Link href="/reservation/cancel">Скасувати бронювання</Link>
        </div>
        <StepProgress steps={steps} current={1} />
        <ReservationForm />
      </section>
    </main>
  );
}
