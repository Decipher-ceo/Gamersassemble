import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: 'Projects',
      type: 'dropdown',
      items: [
        { name: 'SNEAKY SNAKE', path: '/sneaky-snake' },
        { name: 'ROBOCOMMANDO', path: '/robocommando' },
        { name: 'TECHNO SORCERY', path: '/techno-sorcery' },
        { name: 'H2O', path: '/h2o' }
      ]
    },
    {
      title: 'Resources',
      type: 'dropdown',
      items: [
        { name: 'SNEAKY SNAKE STORY', path: '/resources/sneaky-snake' },
        { name: 'ROBOCOMMANDO LORE', path: '/resources/robocommando' },
        { name: 'TECHNO SORCERY ORIGINS', path: '/resources/techno-sorcery' },
        { name: 'H2O DEPTHS', path: '/resources/h2o' }
      ]
    },
    { title: 'Shorts & Thrillers', type: 'link', path: '/shorts-and-thrillers' },
    { title: 'News', type: 'link', path: '/news' },
    { title: 'Support', type: 'link', path: '/support' }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" onClick={closeMenu}>
          <img src="/images/logo.jpg" alt="Logo" className={styles.logoImage} />
        </Link>
        <h1 className={`${styles.studioName} title-glow`}>Gamers Assemble</h1>
      </div>

      <div 
        className={`${styles.hamburger} ${menuOpen ? styles.activeHamburger : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
             <Link to="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
          </li>
          {navItems.map((item, idx) => (
            <li 
              key={idx} 
              className={`${styles.navItem} ${item.type === 'dropdown' ? styles.dropdownContainer : ''}`}
              onMouseEnter={() => item.type === 'dropdown' && window.innerWidth > 1100 && setActiveDropdown(idx)}
              onMouseLeave={() => window.innerWidth > 1100 && setActiveDropdown(null)}
              onClick={() => item.type === 'dropdown' && setActiveDropdown(activeDropdown === idx ? null : idx)}
            >
              {item.type === 'link' ? (
                <Link to={item.path} className={styles.navLink} onClick={closeMenu}>{item.title}</Link>
              ) : (
                <>
                  <div className={styles.navLink}>
                    {item.title} <span className={styles.arrow}>▼</span>
                  </div>
                  {activeDropdown === idx && (
                    <div className={styles.dropdown}>
                      <ul className={styles.dropdownList}>
                        {item.items.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link to={subItem.path} onClick={closeMenu}>{subItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

