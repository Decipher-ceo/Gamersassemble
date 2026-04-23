import React from 'react';
import styles from './Resources.module.css';

const Resources = () => {
  const stories = [
    { title: 'SNEAKY SNAKE STORY', content: 'In a world of neon corridors and pixelated shadows, the snake must devour to survive. But each feast makes it more vulnerable to its own ever-growing past.' },
    { title: 'ROBOCOMMANDO LORE', content: 'The year is 2084. Neo-Abeokuta is under siege by rogue AI. The Robocommandos are our last line of defense—half human, half machine, all hero.' },
    { title: 'TECHNO SORCERY ORIGINS', content: 'When the Great Server crashed, magic leaked into the fiber optic cables. Now, wizards wield laptops and spells are written in C++.' },
    { title: 'H2O DEPTHS', content: 'Humanity took to the oceans when the surface became a furnace. Down here, the pressure is constant, but so is the wonder.' }
  ];

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>RESOURCES & STORIES</h1>
      <div className={styles.storyGrid}>
        {stories.map((story, index) => (
          <div key={index} id={story.title.toLowerCase().replace(/ /g, '-')} className={styles.storyCard}>
            <h2 className={styles.storyTitle}>{story.title}</h2>
            <p className={styles.storyContent}>{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
