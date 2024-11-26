'use client';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton, IconButton } from '@/app/ui/buttons';
import { defaultAvatar, listIcon, logoutIcon } from '@/app/assets/media';
import ReservationItem from '@/app/ui/reservationItem';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/lib/auth/authContext';
import { useReservation } from '@/app/lib/reservation/reservationContext';

export default function Profile() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const { userReservations } = useReservation();

  function handleLogout() {
    router.push('/');
    logout();
  }

  return (
    <main className={styles.main}>
      {!isAuthenticated && (
        <section className={styles.content}>
          <h1>
            Перегляд профілю доступний лише для зареєстрованих користувачів!
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
      )}
      {isAuthenticated && (
        <section className={styles.profile}>
          <aside className={styles.sidebar}>
            <Image src={defaultAvatar} alt="avatar" />
            <Link href="/profile/reservations">
              <IconButton icon={listIcon}>Ваші бронювання</IconButton>
            </Link>
            <IconButton icon={logoutIcon} onClick={handleLogout}>
              Вийти
            </IconButton>
          </aside>
          <div className={styles.info}>
            <h1>Раді вітати, {user.firstName}!</h1>
            <div className={styles.header}>
              <p className={styles.title}>Ваші нещодавні бронювання</p>
              <p className={styles.count}>{userReservations.length}</p>
            </div>
            <div className={styles.reservations}>
              <p>Ваші бронювання</p>
              <ul className={styles.reservationsList}>
                {userReservations.map((reservation) => (
                  <ReservationItem
                    key={reservation.id}
                    reservation={reservation}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
