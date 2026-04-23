import React from 'react';
import styles from './ShortsAndThrillers.module.css';

const ShortsAndThrillers = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>SHORTS & THRILLERS</h1>

      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>SHORTS (9:16)</h2>
        <div className={styles.shortsShelf}>
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className={styles.shortCard}>
              <div className={styles.videoPlaceholder}>
                <span className={styles.playIcon}>▶</span>
              </div>
              <h3>Short #{id}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>THRILLERS (16:9)</h2>
        <div className={styles.thrillersShelf}>
          {[1, 2, 3].map((id) => (
            <div key={id} className={styles.thrillerCard}>
              <div className={styles.videoPlaceholder}>
                <span className={styles.playIcon}>▶</span>
              </div>
              <h3>Thriller #{id}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShortsAndThrillers;
