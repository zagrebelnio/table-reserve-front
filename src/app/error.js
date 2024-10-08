'use client';
import styles from './error.module.css';
import { useEffect } from 'react';
import { PrimaryButton } from './ui/buttons';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <h1>От халепа! Щось пішло не так</h1>
      <p>Виникла невідома помилка. Спробуйте знову пізніше.</p>
      <PrimaryButton onClick={() => reset()}>Повторити запит</PrimaryButton>
    </main>
  );
}
