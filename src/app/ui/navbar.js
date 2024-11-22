'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton } from './buttons';
import styles from './navbar.module.css';
import { logoIcon, defaultAvatar } from '@/app/assets/media';
import { useAuth } from '../lib/auth/authContext';

export default function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={logoIcon} width={65} height={65} alt="logo" />
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
      {!isAuthenticated && (
        <div className={styles.buttons}>
          <Link href="/auth?mode=login">
            <SecondaryButton>Увійти</SecondaryButton>
          </Link>
          <Link href="/auth?mode=signup">
            <PrimaryButton>Зареєструватися</PrimaryButton>
          </Link>
        </div>
      )}
      {isAuthenticated && (
        <Link href="/profile">
          <div className={styles.user}>
            <Image src={defaultAvatar} alt="avatar" />
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        </Link>
      )}
    </nav>
  );
}
