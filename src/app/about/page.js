import styles from './page.module.css';
import Image from 'next/image';
import {
  inquiryIcon,
  trophyIcon,
  qaIcon,
  countdownIcon,
  restaurantHallImage,
} from '@/assets/media';

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <Image src={restaurantHallImage} alt="restaurant hall image" />
        <div className={styles.text}>
          <h1>Про нас</h1>
          <h2>Ми надаємо неперевершені послуги бронювання</h2>
          <div className={styles.featuresList}>
            <div className={styles.featuresItem}>
              <Image src={inquiryIcon} alt="inquiry icon" />
              <div className={styles.featuresItemText}>
                <h3>Швидке та просте бронювання</h3>
                <p>
                  Забронюйте столик всього за кілька кліків. Обирайте найкращі
                  ресторани зручніше, ніж будь-коли.
                </p>
              </div>
            </div>
            <div className={styles.featuresItem}>
              <Image src={trophyIcon} alt="trophy icon" />
              <div className={styles.featuresItemText}>
                <h3>Знайшли вигіднішу пропозицію?</h3>
                <p>
                  Ми завжди прагнемо забезпечити найкращі умови. Якщо знайдете
                  зручніший варіант бронювання — ми допоможемо покращити ваш
                  досвід.
                </p>
              </div>
            </div>
            <div className={styles.featuresItem}>
              <Image src={qaIcon} alt="QA icon" />
              <div className={styles.featuresItemText}>
                <h3>Експертна допомога у виборі ресторану</h3>
                <p>
                  Не можете обрати ідеальне місце? Наша команда допоможе знайти
                  місце відповідно до ваших побажань.
                </p>
              </div>
            </div>
            <div className={styles.featuresItem}>
              <Image src={countdownIcon} alt="countdown icon" />
              <div className={styles.featuresItemText}>
                <h3>Цілодобова підтримка</h3>
                <p>
                  Забронювати столик можна у будь-який зручний час — наш сервіс
                  доступний 24/7 для вас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
