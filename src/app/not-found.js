import styles from './not-found.module.css';

export default function Error() {
  return (
    <main className={styles.main}>
      <h1>
        <span>404</span> - Сторінку не знайдено
      </h1>
      <p>Вибачте, але сторінки, що ви шукаєте, не існує</p>
    </main>
  );
}
