import React, { useState } from 'react';
import styles from './Home.module.css';

import { Link } from 'react-router-dom';

const images = [
  { id: 1, src: '/images/robocommando-1.jpg', alt: 'Robocommando' },
  { id: 2, src: '/images/H2O-1.png', alt: 'H2O' },
  { id: 3, src: '/images/techno-sorcery-4.png', alt: 'Techno Sorcery' },
  { id: 4, src: null, alt: 'Sneaky Snake (Coming Soon)' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow`}>THIS IS GAMERVERSE</h1>
          <p className={styles.subtitle}>
            Explore our universe of upcoming 3D gaming titles, immersive shorts, and interactive worlds.
          </p>
          <button className={styles.exploreBtn}>Explore Games</button>
        </div>
      </div>

      <section className={styles.gamesGridSection}>
        <h2 className={`${styles.sectionTitle} title-glow`}>UPCOMING RELEASES</h2>
        <div className={styles.grid}>
          <Link to="/sneaky-snake" className={`${styles.gridCard} ${styles.snakeCard}`}>
            <h3>Sneaky Snake</h3>
          </Link>
          <Link to="/robocommando" className={`${styles.gridCard} ${styles.roboCard}`}>
            <h3>ROBOCOMMANDO</h3>
          </Link>
          <Link to="/techno-sorcery" className={`${styles.gridCard} ${styles.technoCard}`}>
            <h3>Techno Sorcery</h3>
          </Link>
          <Link to="/h2o" className={`${styles.gridCard} ${styles.h2oCard}`}>
            <h3>H2O</h3>
          </Link>
        </div>
      </section>


      <section className={styles.slideshowSection}>
        <h2 className={`${styles.sectionTitle} title-glow`}>PROJECT GALLERY</h2>
        <div className={styles.slideshowContainer}>
          <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide}>
            &#10094;
          </button>
          
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            >
              {index === currentSlide && (
                img.src ? (
                  <img src={img.src} alt={img.alt} className={styles.slideImage} />
                ) : (
                  <div className={styles.placeholderSlide}>
                    {img.alt}
                  </div>
                )
              )}
            </div>
          ))}

          <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        
        <div className={styles.dotsContainer}>
          {images.map((img, index) => (
            <React.Fragment key={img.id}>
              <span 
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
              {index < images.length - 1 && <div className={styles.navLine}></div>}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
