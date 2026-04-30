import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Resources.module.css';

const Resources = () => {
  const stories = [
    { 
      title: 'Sneaky Snake', 
      path: '/resources/sneaky-snake',
      content: 'Arcane series coming soon' 
    },
    { 
      title: 'Robocommando Codex', 
      path: '/resources/robocommando',
      content: 'The year is 2084. Neo-Abeokuta is under siege by rogue AI. The Robocommandos are our last line...' 
    },
    { 
      title: 'Techno Sorcery chronicles', 
      path: '/resources/techno-sorcery',
      content: 'Chronicles coming soon' 
    },
    { 
      title: 'H2O Rogue Operative Codex', 
      path: '/resources/h2o',
      content: 'Codex coming soon' 
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
