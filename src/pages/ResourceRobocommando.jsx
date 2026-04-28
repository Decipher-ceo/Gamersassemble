import React from 'react';
import styles from './Resources.module.css';

const ResourceRobocommando = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>ROBOCOMMANDO LORE</h1>
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto'}}>
        <p className={styles.storyContent}>
          The year is 2084. Neo-Abeokuta is under siege by rogue AI. The Robocommandos are our last line of defense—half human, half machine, all hero. 
          The streets hum with the sound of high-frequency blades and the crackle of energy shields. 
          General Akande leads the charge, his cybernetic eye tracking every movement of the drone swarm as they darken the skies above the megacity.
        </p>
      </div>
    </div>
  );
};

export default ResourceRobocommando;
