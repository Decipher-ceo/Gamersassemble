import React, { useState, useEffect } from 'react';
import styles from './Resources.module.css';

const ResourceRobocommando = () => {
  const [ep2Released, setEp2Released] = useState(false);

  useEffect(() => {
    // Episode 2 target date: 52 hours from 2026-05-11 20:43:42
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

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>ROBOCOMMANDO CODEX</h1>
      
      {/* Episode 1 - Already Released */}
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto 40px', textAlign: 'left', padding: '30px'}}>
        <h2 style={{color: 'var(--primary-accent)', marginBottom: '30px', textAlign: 'center', fontSize: '2rem'}}>Codex entry 01 : Age of control</h2>
        <div style={{ position: 'relative', margin: '30px 0', borderRadius: '8px', overflow: 'hidden' }}>
          <img src="/images/phase-1-episode-1.png" alt="Phase 1 Episode 1" style={{ width: '100%', display: 'block' }} />
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 15%, transparent 30%, transparent 80%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none'
          }}></div>
        </div>
        <div className={styles.storyContent} style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
          <p>Humanity had reached great heights.</p>
          <p>No natural force on Earth could challenge it.</p>
          <br/>
          <p>The feel of zenith planetary synchronization, the conceivable peak of biological synthesis. In this momentary apex of control, humanity had grasped a reasonable feat of civilization evolution.</p>
          <br/>
          <p>The year 2400 AD marked the official transition of humanity into yet another threshold of civilization-- Type 1.5.</p>
          <br/>
          <p>The Solaris Foundation, Earth's present overseers made up of the Solar rulers and protectors, were bodies who pioneered humanity's efforts to grow and evolve-- capable of fully harnessing energy on planet Earth and its own star.</p>
          <br/>
          <p>The eighth month of the Solaris calendar (Octsolaris) in the year 2400 witnessed humanity's transition completion. They conquered Earth, explored and exploited the entire solar system, and were ready to colonize more complex planetary forms.</p>
          <br/>
          <p>What more did they want to achieve? What more could they crave?</p>
          <p>No--</p>
          <p>The question is, 'What was waiting?</p>
          <p>What mystery was to be stumbled upon?'</p>
          <br/>
          <p>One truth remained--</p>
          <p>Humanity was never alone.</p>
        </div>
      </div>

      {/* Episode 2 - Upcoming */}
      <div className={styles.storyCard} style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '30px', border: ep2Released ? 'none' : '1px dashed var(--primary-accent)', marginBottom: '40px'}}>
        {ep2Released ? (
          <>
            <h2 style={{color: 'var(--primary-accent)', marginBottom: '30px', textAlign: 'center', fontSize: '2rem'}}>Codex Phase 1 Episode 2: The Solaris Foundation</h2>
            <div style={{ position: 'relative', margin: '30px 0', borderRadius: '8px', overflow: 'hidden' }}>
              <img src="/images/phase-1-episode-2.png" alt="Phase 1 Episode 2" style={{ width: '100%', display: 'block' }} />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 15%, transparent 30%, transparent 80%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none'
              }}></div>
            </div>
            <div className={styles.storyContent} style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
              <p>An era that had surpassed limits, broken natural orders, stood 'The Body'-- The Solaris Foundation.</p>
              <br/>
              <p>The Solaris Foundation was first founded in the year 2050 as the 'Cipher body'. Fifty years later (2100), it was renamed the Solaris Foundation.</p>
              <br/>
              <p>This marked humanity's conviction to thrive within the universe.</p>
              <br/>
              <p>They pioneered a three hundred year evolution plan for humanity. By the year 2400, the Solaris Foundation had been the driving force behind humanity's meteoric evolution pace. They built the present era through refining and redefining technology, biological and geological makeup of Earth and natural physics. The Solaris Foundation developed intelligence systems, effective health sustenance technology, food production systems and space travel.</p>
              <br/>
              <p>The Solaris Foundation were humanity's central governing authority, Earth's protectors through the Solar protectors arm. Inarguably, they were the portrayal of humanity's own will to survive and evolve; thus, they were regarded as 'Humanity's earthly gods'.</p>
              <br/>
              <p>The Solaris Foundation led deep space missions and were yet to encounter the other side of the universe's coin.</p>
            </div>
          </>
        ) : (
          <div style={{textAlign: 'center', padding: '40px 0'}}>
            <h2 style={{color: 'var(--text-secondary)', marginBottom: '20px'}}>CLASSIFIED: PHASE 1 EPISODE 2</h2>
            <p className={styles.storyContent}>This Codex entry is encrypted. Decryption will be completed on May 14th.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceRobocommando;
