'use client';
import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import { listIcon } from '@/app/assets/media';
import ReservationItem from '@/app/ui/reservationItem';
import { CtaButton } from '@/app/ui/buttons';
import { useReservation } from '@/app/lib/reservation/reservationContext';
import Link from 'next/link';

export default function Reservations() {
  const { userReservations } = useReservation();

  return (
    <main className={styles.main}>
      <section className={styles.reservations}>
        <div className={styles.header}>
          <Image src={listIcon} alt="list icon" />
          <h1>Ваші бронювання</h1>
        </div>
        <div className={styles.actions}>
          <Link href="/reservation/new">
            <CtaButton type="edit">Забронювати</CtaButton>
          </Link>
          <Link href="/reservation/cancel">
            <CtaButton type="delete">Скасувати</CtaButton>
          </Link>
        </div>
        {userReservations.length === 0 && (
          <p className={styles.empty}>Ви ще не забронювали жодного столика</p>
        )}
        {userReservations.length > 0 && (
          <div className={styles.listContainer}>
            <p>Ваші бронювання</p>
            <ul className={styles.reservationsList}>
              {userReservations.map((reservation) => (
                <React.Fragment key={reservation.id}>
                  <ReservationItem reservation={reservation} />
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
