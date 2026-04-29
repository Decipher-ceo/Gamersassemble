import React, { useState, useEffect } from 'react';
import styles from './Resources.module.css';

const ResourceRobocommando = () => {
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-04-30T02:22:55').getTime();
    
    const checkRelease = () => {
      const now = new Date().getTime();
      if (now >= targetDate) {
        setIsReleased(true);
      }
    };

    checkRelease();
    const interval = setInterval(checkRelease, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>ROBOCOMMANDO CODEX</h1>
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '30px'}}>
        {isReleased ? (
          <>
            <h2 style={{color: 'var(--primary-accent)', marginBottom: '30px', textAlign: 'center', fontSize: '2rem'}}>Codex Phase 1 Episode 1</h2>
            <div className={styles.storyContent} style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
              <p>Humanity had reached great heights.</p>
              <p>No natural force on Earth could challenge it.</p>
              <br/>
              <p>The feel of zenith planetary synchronization, the conceivable peak of biological synthesis. In this momentary apex of control, humanity had grasped a reasonable feat of civilization evolution.</p>
              <br/>
              <p>The year 2400 AD marked the official transition of humanity into yet another threshold of civilization-- Type 1.5.</p>
              <br/>
              <p>The solaris foundation, Earth's present overseers made up of the Solar rulers and protectors, were bodies who pioneered humanity's efforts to grow and evolve-- capable of fully harnessing energy on planet Earth and its own star.</p>
              <br/>
              <p>The eighth month of the solaris calendar (Octsolaris) in the year 2400 witnessed humanity's transition completion. They conquered Earth, explored and exploited the entire solar system, and were ready to colonize more complex planetary forms.</p>
              <br/>
              <p>What more did they want to achieve?, what more could they crave??</p>
              <p>No--</p>
              <p>the question is, 'What was waiting?</p>
              <p>What mystery was to be stumbled upon?'</p>
              <br/>
              <p>One truth remained--,</p>
              <p>Humanity was never alone.</p>
            </div>
          </>
        ) : (
          <div style={{textAlign: 'center', padding: '40px 0'}}>
            <h2 style={{color: 'var(--text-secondary)', marginBottom: '20px'}}>CLASSIFIED</h2>
            <p className={styles.storyContent}>This Codex entry is encrypted. Decryption will be completed on April 30th.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceRobocommando;
