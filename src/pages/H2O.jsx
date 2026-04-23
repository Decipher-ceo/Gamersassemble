import React from 'react';
import styles from './H2O.module.css';

const H2O = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow`}>H2O</h1>
          <p className={styles.subtitle}>
            Dive into the deep blue. Survival is just the beginning.
          </p>
        </div>
      </div>

      <div className={styles.contentSections}>
        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>The Abyss</h2>
          <p className={styles.text}>
            Explore vast underwater cities and battle monstrous sea creatures. Experience the fluid dynamics and breathtaking aquatic life in this 3D survival epic.
          </p>
          <div className={styles.placeholderBox}>Deep Sea Preview Coming Soon</div>
        </section>
      </div>
    </div>
  );
};

export default H2O;
