import styles from './buttons.module.css';
import Image from 'next/image';

export function PrimaryButton({ children, ...props }) {
  return (
    <button className={`${styles.button} ${styles.primary}`} {...props}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, ...props }) {
  return (
    <button className={`${styles.button} ${styles.secondary}`} {...props}>
      {children}
    </button>
  );
}

export function GradientButton({ children, ...props }) {
  return (
    <button className={`${styles.button} ${styles.gradient}`} {...props}>
      {children}
    </button>
  );
}

export function IconButton({ icon, children, ...props }) {
  return (
    <button className={styles.iconButton} {...props}>
      <Image src={icon} alt=" button icon" />
      {children}
    </button>
  );
}
