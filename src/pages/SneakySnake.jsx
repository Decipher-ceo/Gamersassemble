import React from 'react';
import styles from './SneakySnake.module.css';

const SneakySnake = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow`}>SNEAKY SNAKE</h1>
          <p className={styles.subtitle}>
            A classic reinvented with breathtaking 3D visuals and treacherous traps.
          </p>
        </div>
      </div>

      <div className={styles.contentSections}>
        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>The Evolution</h2>
          <p className={styles.text}>
            Master the art of the slither in a world where danger lurks around every corner. Collect power-ups, avoid your own trail, and outsmart the environment.
          </p>
          <div className={styles.placeholderBox}>Game play review coming soon</div>
        </section>
      </div>
    </div>
  );
};

export default SneakySnake;
