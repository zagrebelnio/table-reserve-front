'use client';
import { CtaButton } from './buttons';
import styles from './reservationForm.module.css';
import { useState } from 'react';
import formatDate from '../util/formatDate';

export default function ReservationForm({ onSubmit, ...props }) {
  const [formData, setFormData] = useState({
    date: new Date(),
    capacity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'date' ? new Date(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} {...props}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="date">Оберіть дату бронювання</label>
          <input
            onChange={handleChange}
            value={formatDate(formData.date)}
            name="date"
            id="date"
            type="datetime-local"
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
