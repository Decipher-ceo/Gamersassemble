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
          <h2 className={`${styles.sectionTitle} title-glow`}>H2O Alpha Squad</h2>
          <p className={styles.text}>
            Be part of that one elite team...<br/>
            Prove your worth from Intense gun fires, Epic tank battles, Peak ariel warfare, Rescue missions and so much more.
          </p>
          <div className={styles.placeholderBox}>Game play review coming soon</div>
        </section>
      </div>
    </div>
  );
};

export default H2O;
