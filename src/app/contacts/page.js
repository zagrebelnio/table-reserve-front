import styles from './page.module.css';
import Image from 'next/image';
import tableImage from '@/app/assets/images/table.png';
import mapMarkerIcon from '@/app/assets/icons/map-marker.svg';
import phoneIcon from '@/app/assets/icons/phone.svg';
import emailIcon from '@/app/assets/icons/email.svg';
import SocialMedial from '../ui/socialMedia';
import facebookIcon from '@/app/assets/icons/facebook.svg';
import instagramIcon from '@/app/assets/icons/instagram.svg';
import twitterIcon from '@/app/assets/icons/twitter.svg';

export default function Contacts() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.info}>
          <h1>Контакти</h1>
          <div className={styles.address}>
            <Image src={mapMarkerIcon} alt="map marker icon" />
            <p>
              Київ, Україна,
              <br />
              вул. Монастирська (ран. Щучки), 4ж
            </p>
          </div>
          <div className={styles.workHours}>
            <p>Години роботи</p>
            <div className={styles.workHoursList}>
              <div>
                <p>Понеділок - П&apos;ятниця</p>
                <p>з 08:00 до 21:00</p>
              </div>
              <div>
                <p>Субота</p>
                <p>з 09:00 до 20:00</p>
              </div>
              <div>
                <p>Неділя</p>
                <p>Не працюємо</p>
              </div>
            </div>
          </div>
          <div className={styles.phone}>
            <Image src={phoneIcon} alt="phone icon" />
            <ul className={styles.phoneList}>
              <li>+380 67 766 91 39</li>
              <li>+380 50 103 71 82</li>
            </ul>
          </div>
          <div className={styles.email}>
            <Image src={emailIcon} alt="email icon" />
            <p>piznakrom@gmail.com</p>
          </div>
          <div className={styles.socials}>
            <p>Ми в соціальних мережах:</p>
            <div className={styles.socialsContainer}>
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
        </div>
        <Image src={tableImage} alt="table image" />
      </section>
    </main>
  );
}
