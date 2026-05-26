import React, { useState, useEffect } from 'react';
import styles from './ResourceRobocommando.module.css';

const ResourceRobocommando = () => {
  const [ep2Released, setEp2Released] = useState(false);
  const [expanded, setExpanded] = useState({
    ep1: false,
    ep2: false,
    ep3: false
  });

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

  const toggleExpand = (key) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>ROBOCOMMANDO CODEX</h1>

      {/* Phase 1 - Collapsible List Container */}
      <div className={styles.phaseContainer}>
        <h2 className={styles.phaseTitle}>Robocommando Codex Phase 1</h2>

        <div className={styles.episodeList}>
          {/* Episode 1 */}
          <div className={`${styles.episodeItem} ${expanded.ep1 ? styles.episodeItemOpen : ''}`}>
            <div className={styles.episodeHeader} onClick={() => toggleExpand('ep1')}>
              <span className={styles.episodeTitle}>Robocommando Codex Phase 1 Episode 1</span>
              <span className={styles.episodeIcon}>▼</span>
            </div>
            {expanded.ep1 && (
              <div className={styles.episodeBody}>
                <h3 className={styles.storyTitle}>Codex entry 01 : Age of control</h3>
                <div className={styles.imageWrapper}>
                  <img src="/images/phase-1-episode-1.png" alt="Phase 1 Episode 1" />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.storyContent}>
                  <p>Humanity had reached great heights.</p>
                  <p>No natural force on Earth could challenge it.</p>
                  <p>The feel of zenith planetary synchronization, the conceivable peak of biological synthesis. In this momentary apex of control, humanity had grasped a reasonable feat of civilization evolution.</p>
                  <p>The year 2400 AD marked the official transition of humanity into yet another threshold of civilization-- Type 1.5.</p>
                  <p>The Solaris Foundation, Earth's present overseers made up of the Solar rulers and protectors, were bodies who pioneered humanity's efforts to grow and evolve-- capable of fully harnessing energy on planet Earth and its own star.</p>
                  <p>The eighth month of the Solaris calendar (Octsolaris) in the year 2400 witnessed humanity's transition completion. They conquered Earth, explored and exploited the entire solar system, and were ready to colonize more complex planetary forms.</p>
                  <p>What more did they want to achieve? What more could they crave?</p>
                  <p>No--</p>
                  <p>The question is, 'What was waiting?</p>
                  <p>What mystery was to be stumbled upon?'</p>
                  <p>One truth remained--</p>
                  <p>Humanity was never alone.</p>
                </div>
              </div>
            )}
          </div>

          {/* Episode 2 */}
          <div className={`${styles.episodeItem} ${expanded.ep2 ? styles.episodeItemOpen : ''}`}>
            <div className={styles.episodeHeader} onClick={() => toggleExpand('ep2')}>
              <span className={styles.episodeTitle}>Robocommando Codex Phase 1 Episode 2</span>
              <span className={styles.episodeIcon}>▼</span>
            </div>
            {expanded.ep2 && (
              <div className={styles.episodeBody}>
                {ep2Released ? (
                  <>
                    <h3 className={styles.storyTitle}>Codex Phase 1 Episode 2: The Solaris Foundation</h3>
                    <div className={styles.imageWrapper}>
                      <img src="/images/phase-1-episode-2.png" alt="Phase 1 Episode 2" />
                      <div className={styles.imageOverlay}></div>
                    </div>
                    <div className={styles.storyContent}>
                      <p>An era that had surpassed limits, broken natural orders, stood 'The Body'-- The Solaris Foundation.</p>
                      <p>The Solaris Foundation was first founded in the year 2050 as the 'Cipher body'. Fifty years later (2100), it was renamed the Solaris Foundation.</p>
                      <p>This marked humanity's conviction to thrive within the universe.</p>
                      <p>They pioneered a three hundred year evolution plan for humanity. By the year 2400, the Solaris Foundation had been the driving force behind humanity's meteoric evolution pace. They built the present era through refining and redefining technology, biological and geological makeup of Earth and natural physics. The Solaris Foundation developed intelligence systems, effective health sustenance technology, food production systems and space travel.</p>
                      <p>The Solaris Foundation were humanity's central governing authority, Earth's protectors through the Solar protectors arm. Inarguably, they were the portrayal of humanity's own will to survive and evolve; thus, they were regarded as 'Humanity's earthly gods'.</p>
                      <p>The Solaris Foundation led deep space missions and were yet to encounter the other side of the universe's coin.</p>
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <h3 className={styles.storyTitle} style={{ color: 'var(--text-secondary)' }}>CLASSIFIED: PHASE 1 EPISODE 2</h3>
                    <p className={styles.storyContent}>This Codex entry is encrypted. Decryption will be completed on May 14th.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Episode 3 */}
          <div className={`${styles.episodeItem} ${expanded.ep3 ? styles.episodeItemOpen : ''}`}>
            <div className={styles.episodeHeader} onClick={() => toggleExpand('ep3')}>
              <span className={styles.episodeTitle}>Robocommando Codex Phase 1 Episode 3</span>
              <span className={styles.episodeIcon}>▼</span>
            </div>
            {expanded.ep3 && (
              <div className={styles.episodeBody}>
                <h3 className={styles.storyTitle}>Codex Phase 1 Episode 3: The First Alien Race</h3>
                <div className={styles.imageWrapper}>
                  <img src="/images/phase-1-episode-3.png" alt="Phase 1 Episode 3" />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.storyContent}>
                  <p>During one of humanity's deep space missions, one encounter changed humanity's entire perception of the universe forever.</p>
                  <p>On the tenth month of 2420 AD, Space Eagle Gen-073 escorted by a fleet of Sol protector ships left Earth for yet another deep space mission.</p>
                  <p>In just 10 hours, they arrived at the Inner spiral arm now known as The Iron Meridian using a Resonance Gateway.</p>
                  <p>Spaceships relied on massive orbital mega-structures known as Resonance Gates built by the Solaris foundation. These gates created stable, localized wormholes linking specific sectors.</p>
                  <p>It was one of the usual missions; or so was thought.</p>
                  <p>After staying for a calculated amount of ten days (Earth's time) while collecting and experimenting on samples, something was stumbled upon. Sensors rocked, signals went violent. Someone or something was broadcasting and listening also on their broadcast channel. It couldn't have been any other space ship because the closest was 6000 light years away.</p>
                  <p>No life force was detected, no movement noticed or made. The chilling reality was that whatever was behind it was an advanced form of existence.</p>
                  <p>The channel was traced to the deeper parts of the Iron Meridian, suddenly, the entire radio system was jacked, Earth's ground crew observers froze, and instantly, the entire fleet of Sol protectors prepared to engage.</p>
                  <p>Whatever that was behind the radio jacking was on another level or totally beyond humanity's league.</p>
                  <p>The moment, out of the atmosphere filled with dense gases and dusk, heavily armored creatures proceeded.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Phase 2 - Coming Soon */}
      <div className={styles.phaseContainer}>
        <h2 className={styles.phaseTitle}>Robocommando Codex Phase 2</h2>
        <div className={styles.comingSoonBox}>
          <div className={styles.comingSoonText}>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};

export default ResourceRobocommando;
