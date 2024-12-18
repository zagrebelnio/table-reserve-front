import styles from './reservationItem.module.css';

export default function ReservationItem({ reservation }) {
  console.log(new Date(reservation.date));

  return (
    <li className={styles.item}>
      <div className={styles.column}>
        <p className={styles.title}>Дата</p>
        <p className={styles.value}>
          {new Date(reservation.date).toLocaleDateString('uk')}
        </p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>Час початку</p>
        <p className={styles.value}>
          {new Date(reservation.date).toLocaleTimeString('uk', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>Число людей</p>
        <p className={styles.value}>{reservation.numberOfGuests}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>№ столику</p>
        <p className={styles.value}>{reservation.number}</p>
      </div>
    </li>
  );
}
