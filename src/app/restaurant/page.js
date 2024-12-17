import styles from './page.module.css';
import Image from 'next/image';
import { restaurantImage } from '@/assets/media';

export default function Restaurant() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <Image src={restaurantImage} alt="restaurant image" />
        <div className={styles.text}>
          <h1>Про ресторан</h1>
          <h2>
            <span>La Terraza</span> — гастрономічний куточок середземноморської
            насолоди
          </h2>
          <p>
            Ласкаво просимо до <span>La Terraza</span>, ресторану, де
            поєднуються традиції середземноморської кухні та сучасні
            гастрономічні тенденції. Розташований у серці міста, цей заклад
            пропонує атмосферу спокою та комфорту, ідеально підходячи для
            романтичних вечорів, ділових зустрічей або сімейних святкувань
          </p>
          <br />
          <p>
            Меню <span>La Terraza</span> створене з любов&apos;ю до автентичних
            інгредієнтів: свіжі морепродукти, екологічні овочі та вишукані вина
            з кращих виноробень світу. Наш шеф-кухар привносить власну унікальну
            інтерпретацію класичних середземноморських страв, роблячи кожен
            візит незабутнім
          </p>
          <br />
          <p>
            <span>La Terraza</span> — це не просто ресторан, це місце, де кожен
            гість відчує себе особливим, завдяки теплій атмосфері та
            бездоганному обслуговуванню
          </p>
        </div>
      </section>
    </main>
  );
}
