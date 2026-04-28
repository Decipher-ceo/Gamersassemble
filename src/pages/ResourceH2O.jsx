import React from 'react';
import styles from './Resources.module.css';

const ResourceH2O = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>H2O DEPTHS</h1>
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto'}}>
        <p className={styles.storyContent}>
          Humanity took to the oceans when the surface became a furnace. Down here, the pressure is constant, but so is the wonder. 
          Bioluminescent cities cling to the sides of underwater trenches, while sub-jets dart between hydrothermal vents. 
          Scientists monitor the cooling cores of the great domes, praying the pressure seals hold against the weight of a world reborn in salt and darkness.
        </p>
      </div>
    </div>
  );
};

export default ResourceH2O;
