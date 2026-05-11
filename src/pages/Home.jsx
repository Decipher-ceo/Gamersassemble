import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

import { Link } from 'react-router-dom';

const images = [
  { id: 1, src: '/images/robocommando-main.png', alt: 'Robocommando' },
  { id: 2, src: '/images/H2O-1.png', alt: 'H2O' },
  { id: 3, src: '/images/techno-sorcery-4.png', alt: 'Techno Sorcery' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Target date: 52 hours from 2026-05-11 20:43:42
    const targetDate = new Date('2026-05-14T00:43:42').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow`}>THIS IS GAMERVERSE</h1>
          <p className={styles.subtitle}>
            Explore our universe of upcoming 3D gaming titles, immersive shorts, and interactive worlds.
          </p>
          
          <div className={styles.countdownWrapper}>
            <p className={styles.countdownTitle}>CODEX PHASE 1 EPISODE 2 RELEASE</p>
            <div className={styles.timer}>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.days}</span>
                <span className={styles.timeLabel}>DAYS</span>
              </div>
              <span className={styles.timeDivider}>:</span>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className={styles.timeLabel}>HOURS</span>
              </div>
              <span className={styles.timeDivider}>:</span>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className={styles.timeLabel}>MIN</span>
              </div>
              <span className={styles.timeDivider}>:</span>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className={styles.timeLabel}>SEC</span>
              </div>
            </div>
          </div>

          <Link to="/robocommando" className={styles.exploreBtn}>Explore Games</Link>
        </div>
      </div>

      <section className={styles.gamesGridSection}>
        <h2 className={`${styles.sectionTitle} title-glow`}>UPCOMING RELEASES</h2>
        <div className={styles.grid}>
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
