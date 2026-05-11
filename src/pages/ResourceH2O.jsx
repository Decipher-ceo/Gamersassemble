import React from 'react';
import styles from './Resources.module.css';

const ResourceH2O = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>H2O Rogue Operative</h1>
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto'}}>
        <p className={styles.storyContent}>
          The best Navy squad rules the depths and widths of the sea, land and air. A fight for domination becomes a fight for survival.
        </p>
      </div>
    </div>
  );
};

export default ResourceH2O;
