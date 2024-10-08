'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton } from './buttons';
import styles from './navbar.module.css';
import icon from '@/app/icon.svg';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={icon} width={65} height={65} alt="logo" />
      </Link>
      <Link
        href="/restaurant"
        className={pathname === '/restaurant' ? styles.active : ''}
      >
        Про ресторан
      </Link>
      <Link
        href="/reservation"
        className={pathname === '/reservation' ? styles.active : ''}
      >
        Бронювання
      </Link>
      <Link
        href="/how-it-works"
        className={pathname === '/how-it-works' ? styles.active : ''}
      >
        Як це працює
      </Link>
      <Link
        href="/about"
        className={pathname === '/about' ? styles.active : ''}
      >
        Про нас
      </Link>
      <Link
        href="/contacts"
        className={pathname === '/contacts' ? styles.active : ''}
      >
        Контакти
      </Link>
      <div className={styles.buttons}>
        <Link href="/auth?mode=login">
          <SecondaryButton>Увійти</SecondaryButton>
        </Link>
        <Link href="/auth?mode=signup">
          <PrimaryButton>Зареєструватися</PrimaryButton>
        </Link>
      </div>
    </nav>
  );
}
