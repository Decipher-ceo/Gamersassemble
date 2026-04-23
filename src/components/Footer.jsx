import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.privacy}>
            © {currentYear} GAMERVERSE. All rights reserved.
          </p>
          <p className={styles.branding}>
            A cypher cooperation engine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
