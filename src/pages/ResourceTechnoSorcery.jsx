import React from 'react';
import styles from './Resources.module.css';

const ResourceTechnoSorcery = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>TECHNO SORCERY ORIGINS</h1>
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto'}}>
        <p className={styles.storyContent}>
          When the Great Server crashed, magic leaked into the fiber optic cables. Now, wizards wield laptops and spells are written in C++. 
          The air is thick with the scent of ozone and ancient parchment. 
          A young initiate types a command that summons a firewall of literal flame, while an arch-dev bug-fixes the reality-warping glitches threatening to delete the physical world.
        </p>
      </div>
    </div>
  );
};

export default ResourceTechnoSorcery;
