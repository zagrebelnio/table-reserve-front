import styles from './stepProgress.module.css';
import React from 'react';

export default function StepProgress({ steps, current }) {
  return (
    <div className={styles.container}>
      {steps.map((step) => (
        <React.Fragment key={step.number}>
          <div className={styles.stepContainer}>
            <div
              className={`${styles.element} ${
                step.number === current ? styles.current : ''
              }`}
            >
              {step.number}
            </div>
            <p className={styles.title}>{step.title}</p>
          </div>
          {step.number !== steps.length && <hr className={styles.line} />}
        </React.Fragment>
      ))}
    </div>
  );
}
