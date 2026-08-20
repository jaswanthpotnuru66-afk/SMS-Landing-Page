import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Keep header transparent during the Hero sticky scroll phase
      // 150vh roughly corresponds to when the Hero section starts unpinning
      const triggerHeight = window.innerHeight * 1.5;
      setScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('register');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#" className={styles.logoGroup}>
          <img src="/logo.png" alt="Ottobon Logo" className={styles.logoImg} />
          <div className={styles.brandText}>
            <span className={styles.wordmark}>OTTOBON</span>
            <span className={styles.productName}>Student Operations</span>
          </div>
        </a>
        
        <nav className={styles.navLinks}>
          <a href="#capabilities" className={styles.navLink}>Platform</a>
          <a href="#multibranch" className={styles.navLink}>Group Scale</a>
          <a href="#trust" className={styles.navLink}>Privacy</a>
        </nav>

        <div className={styles.actions}>
          <button onClick={scrollToForm} className={`btn-primary ${styles.cta}`}>
            Book Pilot
          </button>
        </div>
      </div>
    </header>
  );
}
