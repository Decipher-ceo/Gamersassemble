import React from 'react';
import styles from './News.module.css';

const News = () => {
  const updates = [
    { date: 'APR 28, 2026', title: 'CODEX PHASE 1 ANNOUNCEMENT', content: 'Release of first phase of codex (lore series) is slated to be on the 30th of April. The countdown begins!' },
    { date: 'APR 15, 2026', title: 'GAMERVERSE RELAUNCH', content: 'Our new platform architecture is now live. Explore the new Projects and Resources sections!' },
    { date: 'APR 10, 2026', title: 'ROBOCOMMANDO SMOKE ENGINE', content: "We've optimized the cinematic smoke effects on the Robocommando page for smoother performance." },
    { date: 'APR 01, 2026', title: 'SNEAKY SNAKE 3D REVEAL', content: 'First look at the 3D assets for Sneaky Snake. The classic has never looked so good.' }
  ];

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>LATEST NEWS</h1>
      <div className={styles.newsFeed}>
        {updates.map((news, index) => (
          <div key={index} className={styles.newsCard}>
            <span className={styles.date}>{news.date}</span>
            <h2 className={styles.newsTitle}>{news.title}</h2>
            <p className={styles.newsContent}>{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
