import Link from 'next/link';
import styles from './page.module.css';

export default function AdminPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Панель адміністратора</h1>
      <div className={styles.cards}>
        <Link href="/admin/tables" className={styles.card}>
          <div>
            <h2>Керування столиками</h2>
            <p>Додавайте та видаляйте столики</p>
          </div>
        </Link>
        <Link href="/admin/reservations" className={styles.card}>
          <div>
            <h2>Керування бронюваннями</h2>
            <p>Переглядайте та видаляйте бронювання</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
