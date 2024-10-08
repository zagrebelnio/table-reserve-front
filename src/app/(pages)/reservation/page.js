import { PrimaryButton, SecondaryButton } from '@/app/ui/buttons';
import styles from './page.module.css';
import Link from 'next/link';

export default function Reservation() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1>Бронювання доступне лише для зареєстрованих користувачів!</h1>
        <div className={styles.authorizationContainer}>
          <Link href="/auth?mode=login">
            <SecondaryButton>Увійти</SecondaryButton>
          </Link>
          <Link href="/auth?mode=signup">
            <PrimaryButton>Зареєструватися</PrimaryButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
