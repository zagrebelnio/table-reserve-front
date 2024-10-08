import styles from './buttons.module.css';

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
