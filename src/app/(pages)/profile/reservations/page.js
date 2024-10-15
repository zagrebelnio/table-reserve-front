import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { listIcon } from '@/app/assets/media';
import RESERVATIONS from '@/app/store/reservations';
import ReservationItem from '@/app/ui/reservationItem';
import { CtaButton } from '@/app/ui/buttons';

export default function Reservations() {
  return (
    <main className={styles.main}>
      <section className={styles.reservations}>
        <div className={styles.header}>
          <Image src={listIcon} alt="list icon" />
          <h1>Ваші бронювання</h1>
        </div>
        <div className={styles.listContainer}>
          <p>Ваші бронювання</p>
          <ul className={styles.reservationsList}>
            {RESERVATIONS.map((reservation) => (
              <React.Fragment key={reservation.id}>
                <ReservationItem reservation={reservation} />
                <div className={styles.cta}>
                  <Link href="/reservation/edit">
                    <CtaButton type="edit">Редагувати</CtaButton>
                  </Link>
                  <CtaButton type="delete">Скасувати</CtaButton>
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
