import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Resources.module.css';

const Resources = () => {
  const stories = [
    { 
      title: 'SNEAKY SNAKE STORY', 
      path: '/resources/sneaky-snake',
      content: 'In a world of neon corridors and pixelated shadows, the snake must devour to survive...' 
    },
    { 
      title: 'ROBOCOMMANDO LORE', 
      path: '/resources/robocommando',
      content: 'The year is 2084. Neo-Abeokuta is under siege by rogue AI. The Robocommandos are our last line...' 
    },
    { 
      title: 'TECHNO SORCERY ORIGINS', 
      path: '/resources/techno-sorcery',
      content: 'When the Great Server crashed, magic leaked into the fiber optic cables. Now, wizards wield laptops...' 
    },
    { 
      title: 'H2O DEPTHS', 
      path: '/resources/h2o',
      content: 'Humanity took to the oceans when the surface became a furnace. Down here, the pressure is constant...' 
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>RESOURCES & STORIES</h1>
      <div className={styles.storyGrid}>
        {stories.map((story, index) => (
          <Link key={index} to={story.path} className={styles.storyCard}>
            <h2 className={styles.storyTitle}>{story.title}</h2>
            <p className={styles.storyContent}>{story.content}</p>
            <span className={styles.readMore}>Read Full Story →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resources;
