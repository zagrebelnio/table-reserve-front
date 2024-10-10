import styles from './reservationItem.module.css';

export default function ReservationItem({ reservation }) {
  return (
    <li className={styles.item}>
      <div className={styles.column}>
        <p className={styles.title}>Дата</p>
        <p className={styles.value}>{reservation.date}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>Час початку</p>
        <p className={styles.value}>{reservation.time}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>Число людей</p>
        <p className={styles.value}>{reservation.numberOfPeople}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>№ столику</p>
        <p className={styles.value}>{reservation.tableNumber}</p>
      </div>
    </li>
  );
}
