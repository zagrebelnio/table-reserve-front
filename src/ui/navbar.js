'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton } from './buttons';
import styles from './navbar.module.css';
import { logoIcon, defaultAvatar } from '@/assets/media';
import { useAuth } from '@/lib/auth/authContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { decodeToken } from '@/util/decodeToken';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const token = session?.accessToken;
  const { user, loading, error } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAdmin = token ? decodeToken(token) === 'Admin' : false;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const renderCta = () => {
    if (loading) {
      return <Skeleton width={250} height={50} />;
    }

    if (user) {
      return (
        <Link href="/profile">
          <div className={styles.user}>
            <Image src={defaultAvatar} alt="avatar" />
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        </Link>
      );
    } else {
      return (
        <div className={styles.buttons}>
          <Link href="/auth?mode=login">
            <SecondaryButton>Увійти</SecondaryButton>
          </Link>
          <Link href="/auth?mode=signup">
            <PrimaryButton>Зареєструватися</PrimaryButton>
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <Image src={logoIcon} width={65} height={65} alt="logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className={styles.links}>
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
        {isAdmin && (
          <Link
            href="/admin"
            className={pathname === '/admin' ? styles.active : ''}
          >
            Адмін Панель
          </Link>
        )}
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
        <Link href="/restaurant">Про ресторан</Link>
        <Link href="/reservation">Бронювання</Link>
        <Link href="/how-it-works">Як це працює</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/contacts">Контакти</Link>
        {isAdmin && <Link href="/admin">Адмін Панель</Link>}
        {!user && (
          <>
            <Link href="/auth?mode=login">Увійти</Link>
            <Link href="/auth?mode=signup">Зареєструватися</Link>
          </>
        )}
      </div>

      {/* Call to Action */}
      {renderCta()}
    </nav>
  );
}
