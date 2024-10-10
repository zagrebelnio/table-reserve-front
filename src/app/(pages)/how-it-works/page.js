import { PrimaryButton } from '../../ui/buttons';
import styles from './page.module.css';
import Image from 'next/image';
import { tableIcon, detailsIcon, likeIcon } from '@/app/assets/media';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <main className={styles.main}>
      <section className={styles.steps}>
        <h1>Як це працює</h1>
        <h2>Забронюйте місце за допомогою наступних кроків</h2>
        <div className={styles.stepsList}>
          <div className={styles.stepsItem}>
            <Image src={tableIcon} alt="table icon" />
            <h3>Оберіть вільні місця</h3>
            <p>Вибирайте столик чи столики, що сподобалися</p>
          </div>
          <div className={styles.stepsItem}>
            <Image src={detailsIcon} alt="details icon" />
            <h3>Заповніть деталі замовлення</h3>
            <p>Інформацію про дату/час, кількість людей</p>
          </div>
          <div className={styles.stepsItem}>
            <Image src={likeIcon} alt="like icon" />
            <h3>Отримайте підтвердження</h3>
            <p>На сайті, а також листом на пошті</p>
          </div>
        </div>
        <Link href="/reservation">
          <PrimaryButton>Перейти до бронювання</PrimaryButton>
        </Link>
      </section>
    </main>
  );
}
