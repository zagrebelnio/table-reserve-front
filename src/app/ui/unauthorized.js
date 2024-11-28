import Link from 'next/link';
import styles from './unauthorized.module.css';
import { PrimaryButton, SecondaryButton } from './buttons';

function Unauthorized() {
  return (
    <section className={styles.content}>
      <h1>
        Перегляд цієї сторінки доступний лише для зареєстрованих користувачів!
      </h1>
      <div className={styles.authorizationContainer}>
        <Link href="/auth?mode=login">
          <SecondaryButton>Увійти</SecondaryButton>
        </Link>
        <Link href="/auth?mode=signup">
          <PrimaryButton>Зареєструватися</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}

export default Unauthorized;
