import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Robocommando.module.css';

const Robocommando = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className={styles.container}>
      <div className={styles.smokeEffect}></div>
      <div className={styles.smokeEffect2}></div>
      
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow`}>ROBOCOMMANDO</h1>
          <p className={styles.subtitle}>
            A neon-drenched metropolis under siege. Gear up and fight back.
          </p>
        </div>
      </div>

      <div className={styles.contentSections}>
        <section id="characters" className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>Characters & Models</h2>
          <p className={styles.text}>
            Explore the vast array of metallic warriors. Designed with cutting-edge 3D technology, each model boasts unique weaponry and abilities.
          </p>
          <div className={styles.placeholderBox}></div>
        </section>

        <section id="story" className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>The Story</h2>
          <p className={styles.text}>
            In the year 2084, the cybernetic rebellion began. Only the Robocommandos stand between humanity and total annihilation. Traverse through beautifully rendered 3D shorts and experience the lore.
          </p>
        </section>

        <section id="support" className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>Support (Fund Raising)</h2>
          <p className={styles.text}>
            Help us bring the next explosive chapter to life. Back our campaign to fund the development of new levels, characters, and high-fidelity CGI shorts.
          </p>
          <button className={styles.neonBtn}>Support Now</button>
        </section>

        <section id="shorts" className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>Cinematic Shorts</h2>
          <p className={styles.text}>
            Watch the latest 3D animated shorts expanding the Robocommando universe.
          </p>
          <div className={styles.placeholderBox}></div>
        </section>

        <section id="get-game" className={styles.section}>
          <h2 className={`${styles.sectionTitle} title-glow`}>Get the Game</h2>
          <p className={styles.text}>
            Available soon on all major platforms. Pre-order now to receive exclusive neon skins.
          </p>
          <button className={styles.neonBtn}>Pre-Order</button>
        </section>
      </div>
    </div>
  );
};

export default Robocommando;
