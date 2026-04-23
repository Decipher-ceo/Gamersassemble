import React from 'react';
import styles from './TechnoSorcery.module.css';

const TechnoSorcery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow`}>TECHNO SORCERY</h1>
          <p className={styles.subtitle}>
            Where high-tech gear meets ancient mysticism.
          </p>
        </div>
      </div>

      <div className={styles.contentSections}>
        <section className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>The Convergence</h2>
          <p className={styles.text}>
            Harness the power of digital spells and cybernetic enchantments. Explore a world where code and magic are one and the same.
          </p>
          <div className={styles.placeholderBox}>Magic Preview Coming Soon</div>
        </section>
      </div>
    </div>
  );
};

export default TechnoSorcery;
