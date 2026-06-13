import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import MailerLiteForm from '../components/MailerLiteForm';

const FULL_TITLE = 'EXPERIENCE OUR UNIVERSE';

// Hero slides — all requested images
// Hero slides — all requested images
const heroSlides = [
  { src: '/images/phase-1-episode-6.png'   },
  { src: '/images/phase-1-episode-5.png'   },
  { src: '/images/phase-1-episode-5ii.png' },
  { src: '/images/phase-1-episode-2.png'   },

  { src: '/images/H2O-1.png'               },
  { src: '/images/techno-sorcery-4.png'    },
  { src: '/images/robocommando-main.png'   },
];

// Gallery slides (subset for the lower slideshow)
const galleryImages = [
  { id: 1, src: '/images/robocommando-main.png',   alt: 'Robocommando' },
  { id: 2, src: '/images/H2O-1.png',               alt: 'H2O' },
  { id: 3, src: '/images/techno-sorcery-4.png',    alt: 'Techno Sorcery' },

];

// SVG gaming device icons
const DeviceIcon = ({ type }) => {
  if (type === 'pc') return (
    <svg viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="70" height="45" rx="4" stroke="currentColor" strokeWidth="4" fill="none"/>
      <rect x="15" y="12" width="50" height="31" rx="2" fill="currentColor" opacity="0.15"/>
      <rect x="25" y="15" width="30" height="22" rx="1" fill="currentColor" opacity="0.3"/>
      {/* Screen glow lines */}
      <line x1="28" y1="20" x2="52" y2="20" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/>
      <line x1="28" y1="25" x2="48" y2="25" stroke="currentColor" strokeWidth="2.5" opacity="0.4"/>
      <line x1="28" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="2.5" opacity="0.3"/>
      {/* Stand */}
      <path d="M30 50 L32 58 L48 58 L50 50" stroke="currentColor" strokeWidth="3" fill="none"/>
      <line x1="28" y1="58" x2="52" y2="58" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
  if (type === 'xbox') return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="30" rx="35" ry="26" stroke="currentColor" strokeWidth="4" fill="none"/>
      <circle cx="40" cy="30" r="10" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.2"/>
      <circle cx="40" cy="30" r="6" fill="currentColor" opacity="0.4"/>
      {/* Xbox X */}
      <path d="M37 27 L43 33 M43 27 L37 33" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      {/* Bumpers */}
      <path d="M12 18 Q25 10 38 15" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M68 18 Q55 10 42 15" stroke="currentColor" strokeWidth="3" fill="none"/>
      {/* Thumbsticks */}
      <circle cx="25" cy="35" r="5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
      <circle cx="55" cy="35" r="5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
    </svg>
  );
  if (type === 'ps') return (
    <svg viewBox="0 0 80 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 35 C8 35 15 12 40 12 C65 12 72 35 72 35 L68 42 C65 47 57 50 50 48 L40 44 L30 48 C23 50 15 47 12 42 Z" stroke="currentColor" strokeWidth="4" fill="none"/>
      {/* Touch pad */}
      <rect x="30" y="24" width="20" height="12" rx="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
      {/* D-pad */}
      <path d="M20 32 L20 28 M18 30 L22 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      {/* Buttons */}
      <circle cx="57" cy="27" r="2.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="62" cy="32" r="2.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="57" cy="37" r="2.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="52" cy="32" r="2.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      {/* Thumbsticks */}
      <circle cx="25" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
      <circle cx="51" cy="40" r="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
    </svg>
  );
  if (type === 'phone') return (
    <svg viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="32" height="64" rx="6" stroke="currentColor" strokeWidth="4" fill="none"/>
      <rect x="8" y="10" width="24" height="42" rx="2" fill="currentColor" opacity="0.15"/>
      {/* Screen content */}
      <line x1="11" y1="18" x2="29" y2="18" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="11" y1="24" x2="25" y2="24" stroke="currentColor" strokeWidth="2.5" opacity="0.3"/>
      <rect x="11" y="30" width="18" height="14" rx="2" fill="currentColor" opacity="0.25"/>
      {/* Home button */}
      <circle cx="20" cy="60" r="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      {/* Camera */}
      <circle cx="20" cy="7" r="1.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
  return null;
};

// Floating particle component
const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div className={styles.particleField} aria-hidden="true">
      {particles.map(i => (
        <div
          key={i}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Scanlines overlay
const Scanlines = () => (
  <div className={styles.scanlines} aria-hidden="true" />
);

const Home = () => {
  const [heroSlide, setHeroSlide]       = useState(0);
  const [prevHeroSlide, setPrevHeroSlide] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  // Typing animation state
  const [typedTitle, setTypedTitle] = useState('');
  const [titleDone, setTitleDone]   = useState(false);
  const typingRef = useRef(null);

  // Countdown
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-06-13T19:57:32+01:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference > 0) {
      return {
        days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isLive: false,
      };
    }
    return { isLive: true };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Go to specific hero slide with crossfade
  const goToSlide = (index) => {
    if (transitioning || index === heroSlide) return;
    setTransitioning(true);
    setPrevHeroSlide(heroSlide);
    setHeroSlide(index);
    setTimeout(() => {
      setPrevHeroSlide(null);
      setTransitioning(false);
    }, 1000);
  };

  // Auto-advance hero every 5s
  useEffect(() => {
    const id = setInterval(() => {
      const next = (heroSlide + 1) % heroSlides.length;
      goToSlide(next);
    }, 5000);
    return () => clearInterval(id);
  }, [heroSlide, transitioning]);

  // Countdown tick
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Typing animation — type out FULL_TITLE once on mount
  useEffect(() => {
    let i = 0;
    setTypedTitle('');
    setTitleDone(false);
    typingRef.current = setInterval(() => {
      i++;
      setTypedTitle(FULL_TITLE.slice(0, i));
      if (i >= FULL_TITLE.length) {
        clearInterval(typingRef.current);
        setTitleDone(true);
      }
    }, 80);
    return () => clearInterval(typingRef.current);
  }, []);

  // Gallery auto-advance
  const nextGallerySlide = () => setCurrentSlide(p => (p + 1) % galleryImages.length);
  const prevGallerySlide = () => setCurrentSlide(p => (p === 0 ? galleryImages.length - 1 : p - 1));

  useEffect(() => {
    const id = setInterval(nextGallerySlide, 4000);
    return () => clearInterval(id);
  }, [currentSlide]);

  const devices = ['pc', 'xbox', 'ps', 'phone'];

  return (
    <div className={styles.homeContainer}>

      {/* ══════════════════════════════════════════════
          CINEMATIC HERO SECTION
      ══════════════════════════════════════════════ */}
      <div className={styles.heroSection} ref={heroRef}>

        {/* ── Background slide layers ── */}
        <div className={styles.heroBgStack}>
          {/* Previous slide (fading out) */}
          {prevHeroSlide !== null && (
            <div
              className={`${styles.heroBg} ${styles.heroBgOut}`}
              style={{ backgroundImage: `url('${heroSlides[prevHeroSlide].src}')` }}
            />
          )}
          {/* Current slide (fading in) */}
          <div
            key={heroSlide}
            className={`${styles.heroBg} ${styles.heroBgIn}`}
            style={{ backgroundImage: `url('${heroSlides[heroSlide].src}')` }}
          />
          {/* Dark cinematic overlay */}
          <div className={styles.heroBgOverlay} />
          {/* Bottom vignette */}
          <div className={styles.heroBgVignette} />
        </div>

        {/* ── Animated effects ── */}
        <Scanlines />
        <Particles />

        {/* ── Floating gaming device icons ── */}
        <div className={styles.deviceIcons} aria-hidden="true">
          {devices.map((d, i) => (
            <div
              key={d}
              className={styles.deviceIcon}
              style={{ animationDelay: `${i * 1.5}s` }}
              data-device={d}
            >
              <DeviceIcon type={d} />
            </div>
          ))}
        </div>

        {/* ── Slide progress bar ── */}
        <div className={styles.slideProgressBar} key={`progress-${heroSlide}`}>
          <div className={styles.slideProgressFill} />
        </div>

        {/* ── Main hero content ── */}
        <div className={styles.heroContent}>
          <h1 className={`${styles.mainTitle} title-glow ${titleDone ? styles.titleBounce : ''}`}>
            {typedTitle}
            {!titleDone && <span className={styles.cursor}>|</span>}
          </h1>
          <p className={styles.subtitle}>
            Explore our universe of upcoming 3D gaming titles, immersive shorts, and interactive worlds.
          </p>

          {timeLeft.isLive ? (
            <div className={styles.countdownWrapper}>
              <p className={styles.countdownTitle}>🔴 CODEX PHASE 1 EPISODE 6 IS LIVE!</p>
              <Link to="/resources/robocommando" className={styles.exploreBtn} style={{ marginTop: '20px', display: 'inline-block' }}>
                Read Now
              </Link>
            </div>
          ) : (
            <div className={styles.countdownWrapper}>
              <p className={styles.countdownTitle}>CODEX PHASE 1 EPISODE 6 RELEASE</p>
              <div className={styles.timer}>
                {[
                  { value: timeLeft.days,    label: 'DAYS'  },
                  { value: timeLeft.hours,   label: 'HOURS' },
                  { value: timeLeft.minutes, label: 'MIN'   },
                  { value: timeLeft.seconds, label: 'SEC'   },
                ].map(({ value, label }, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && <span className={styles.timeDivider}>:</span>}
                    <div className={styles.timeBox}>
                      <span className={styles.timeValue}>
                        {value !== undefined ? value.toString().padStart(2, '0') : '00'}
                      </span>
                      <span className={styles.timeLabel}>{label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          <Link to="/robocommando" className={styles.exploreBtn}>Explore Games</Link>
        </div>

        {/* ── Slide dot navigation ── */}
        <div className={styles.heroSlideNav}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.heroNavDot} ${i === heroSlide ? styles.heroNavDotActive : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Left / Right arrows ── */}
        <button
          className={`${styles.heroArrow} ${styles.heroArrowLeft}`}
          onClick={() => goToSlide((heroSlide - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className={`${styles.heroArrow} ${styles.heroArrowRight}`}
          onClick={() => goToSlide((heroSlide + 1) % heroSlides.length)}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      {/* ══════════════════════════════════════════════
          GAMES GRID
      ══════════════════════════════════════════════ */}
      <section className={styles.gamesGridSection}>
        <h2 className={`${styles.sectionTitle} title-glow`}>UPCOMING RELEASES</h2>
        <div className={styles.grid}>
          <Link to="/robocommando"    className={`${styles.gridCard} ${styles.roboCard}`}>
            <h3>ROBOCOMMANDO</h3>
          </Link>
          <Link to="/techno-sorcery" className={`${styles.gridCard} ${styles.technoCard}`}>
            <h3>Techno Sorcery</h3>
          </Link>
          <Link to="/h2o"            className={`${styles.gridCard} ${styles.h2oCard}`}>
            <h3>H2O</h3>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROJECT GALLERY SLIDESHOW
      ══════════════════════════════════════════════ */}
      <section className={styles.slideshowSection}>
        <h2 className={`${styles.sectionTitle} title-glow`}>PROJECT GALLERY</h2>
        <div className={styles.slideshowContainer}>
          <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevGallerySlide}>&#10094;</button>

          {galleryImages.map((img, index) => (
            <div key={img.id} className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
              {index === currentSlide && (
                img.src
                  ? <img src={img.src} alt={img.alt} className={styles.slideImage} />
                  : <div className={styles.placeholderSlide}>{img.alt}</div>
              )}
            </div>
          ))}

          <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextGallerySlide}>&#10095;</button>
        </div>

        <div className={styles.dotsContainer}>
          {galleryImages.map((img, index) => (
            <React.Fragment key={img.id}>
              <span
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
              {index < galleryImages.length - 1 && <div className={styles.navLine} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <MailerLiteForm />
    </div>
  );
};

export default Home;
