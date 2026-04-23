import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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
        { name: 'SNEAKY SNAKE STORY', path: '/resources#sneaky-snake-story' },
        { name: 'ROBOCOMMANDO LORE', path: '/resources#robocommando-lore' },
        { name: 'TECHNO SORCERY ORIGINS', path: '/resources#techno-sorcery-origins' },
        { name: 'H2O DEPTHS', path: '/resources#h2o-depths' }
      ]
    },
    { title: 'Shorts & Thrillers', type: 'link', path: '/shorts-and-thrillers' },
    { title: 'News', type: 'link', path: '/news' },
    { title: 'Support', type: 'link', path: '/support' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src="/images/logo.jpg" alt="Logo" className={styles.logoImage} />
        </Link>
        <h1 className={`${styles.studioName} title-glow`}>GAMERVERSE</h1>
      </div>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
             <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          {navItems.map((item, idx) => (
            <li 
              key={idx} 
              className={`${styles.navItem} ${item.type === 'dropdown' ? styles.dropdownContainer : ''}`}
              onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.type === 'link' ? (
                <Link to={item.path} className={styles.navLink}>{item.title}</Link>
              ) : (
                <>
                  <span className={styles.navLink}>
                    {item.title} <span className={styles.arrow}>▼</span>
                  </span>
                  {activeDropdown === idx && (
                    <div className={styles.dropdown}>
                      <ul className={styles.dropdownList}>
                        {item.items.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link to={subItem.path}>{subItem.name}</Link>
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
