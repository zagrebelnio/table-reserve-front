import { useState } from 'react';
import styles from './bookingByDateForm.module.css';

const BookingByDateForm = ({ onDateSelected }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelected(date);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Фільтрувати за датою</h2>
      <label className={styles.label}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Застосувати
      </button>
    </form>
  );
};

export default BookingByDateForm;
