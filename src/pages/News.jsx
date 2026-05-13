import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

const News = () => {
  const [ep2Released, setEp2Released] = useState(false);

  useEffect(() => {
    const targetDateEp2 = new Date('2026-05-14T00:43:42').getTime();
    const checkRelease = () => {
      const now = new Date().getTime();
      if (now >= targetDateEp2) {
        setEp2Released(true);
      }
    };
    checkRelease();
    const interval = setInterval(checkRelease, 1000);
    return () => clearInterval(interval);
  }, []);

  const updates = [
    { 
      date: ep2Released ? 'MAY 14, 2026' : 'MAY 11, 2026', 
      title: ep2Released ? 'Phase 1 Episode 2: The Solaris Foundation' : 'Phase 1 episode 2 Launch', 
      content: ep2Released 
        ? 'Phase 1 Episode 2 of The Robocommando Codex is now live. Discover the origins of The Solaris Foundation on our Resource page.' 
        : 'Phase 1 episode 2 Launch of the ROBOCOMMANDO Codex is set to be released on the Gamers assemble resource page in the next 52 hours....Stay tuned' 
    },
    { date: 'APR 30, 2026', title: 'Major news (Codex launch)', content: 'Phase 1 Episode 1 of The Robocommando Codex is out. Visit our Resource page now' },
    { date: 'APR 15, 2026', title: 'GAMERVERSE RELAUNCH', content: 'Our new platform architecture is now live. Explore the new Projects and Resources sections!' },
    { date: 'APR 10, 2026', title: 'ROBOCOMMANDO SMOKE ENGINE', content: "We've optimized the cinematic smoke effects on the Robocommando page for smoother performance." }
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
