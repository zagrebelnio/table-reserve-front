import styles from './page.module.css';
import { GradientButton, PrimaryButton } from '../ui/buttons';
import Image from 'next/image';
import SocialMedial from '../ui/socialMedia';
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  heroImage,
  timeIcon,
  tableIcon,
  doneIcon,
} from '@/app/assets/media';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.info}>
          <h1>
            <span>Легко</span> знайдіть, забронюйте та насолоджуйтесь!
          </h1>
          <p>
            Зручно забронюйте столик онлайн за кілька кліків - швидко, просто і
            без турбот
          </p>
          <GradientButton>Переглянути вільні місця</GradientButton>
          <div className={styles.socials}>
            <SocialMedial
              link="https://www.facebook.com/"
              icon={facebookIcon}
            />
            <SocialMedial
              link="https://www.instagram.com/"
              icon={instagramIcon}
            />
            <SocialMedial link="https://x.com/" icon={twitterIcon} />
          </div>
        </div>
        <Image src={heroImage} alt="hero image" />
      </section>
      <section className={styles.overview}>
        <div className={styles.overviewItem}>
          <Image src={timeIcon} alt="time icon" />
          <div>
            <h4>Час</h4>
            <p>Оберіть потрібний час</p>
          </div>
        </div>
        <div className={styles.overviewItem}>
          <Image src={tableIcon} alt="table icon" />
          <div>
            <h4>Місце</h4>
            <p>Знайдіть вільний столик</p>
          </div>
        </div>
        <div className={styles.overviewItem}>
          <Image src={doneIcon} alt="done icon" />
          <div>
            <h4>Час</h4>
            <p>Приходьте та насолоджуйтесь</p>
          </div>
        </div>
        <PrimaryButton>Пошук</PrimaryButton>
      </section>
    </main>
  );
}
