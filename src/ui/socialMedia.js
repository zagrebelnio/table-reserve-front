import Image from 'next/image';
import styles from './socialMedia.module.css';

export default function SocialMedial({ link, icon }) {
  return (
    <a className={styles.link} href={link}>
      <Image src={icon} alt="social media icon" />
    </a>
  );
}
