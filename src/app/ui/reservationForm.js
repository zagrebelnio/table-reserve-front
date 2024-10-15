'use client';
import { CtaButton } from './buttons';
import styles from './reservationForm.module.css';
import { useState } from 'react';

export default function ReservationForm({ ...props }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    capacity: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form} {...props}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="date">Оберіть дату бронювання</label>
          <input
            onChange={handleChange}
            value={formData.date}
            name="date"
            id="date"
            type="date"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">Від коли?</label>
          <input
            onChange={handleChange}
            value={formData.time}
            id="time"
            name="time"
            type="time"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="capacity">Скільки людей прийде?</label>
          <input
            onChange={handleChange}
            value={formData.capacity}
            min="1"
            max="20"
            name="capacity"
            id="capacity"
            type="number"
          />
        </div>
      </div>
      <CtaButton type="delete">Продовжити</CtaButton>
    </form>
  );
}
