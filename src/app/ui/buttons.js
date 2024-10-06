import styles from './buttons.module.css';

export function PrimaryButton({ children }) {
  return (
    <button className={`${styles.button} ${styles.primary}`}>{children}</button>
  );
}

export function SecondaryButton({ children }) {
  return (
    <button className={`${styles.button} ${styles.secondary}`}>
      {children}
    </button>
  );
}

export function GradientButton({ children }) {
  return (
    <button className={`${styles.button} ${styles.gradient}`}>
      {children}
    </button>
  );
}
