import React from 'react';
import styles from './Resources.module.css';

const ResourceSneakySnake = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>SNEAKY SNAKE STORY</h1>
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto'}}>
        <p className={styles.storyContent}>
          In a world of neon corridors and pixelated shadows, the snake must devour to survive. 
          But each feast makes it more vulnerable to its own ever-growing past. 
          The neon lights flicker as the serpent winds through the digital maze, seeking the ultimate code that will grant it freedom from the endless loop of consumption.
        </p>
      </div>
    </div>
  );
};

export default ResourceSneakySnake;
