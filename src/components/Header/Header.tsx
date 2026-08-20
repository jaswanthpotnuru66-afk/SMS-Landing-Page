import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button/Button';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Keep header transparent during the Hero sticky scroll phase
      const triggerHeight = window.innerHeight * 0.5; // lower trigger height so it becomes solid earlier
      setScrolled(window.scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    const formSection = document.getElementById('register');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#" className={styles.logoGroup} aria-label="Ottobon Home">
          <img src="/logo.png" alt="" className={styles.logoImg} aria-hidden="true" />
          <div className={styles.brandText}>
            <span className={styles.wordmark}>OTTOBON</span>
            <span className={styles.productName}>Student Operations</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          <a href="#capabilities" className={styles.navLink}>Platform</a>
          <a href="#multibranch" className={styles.navLink}>Multi-Campus</a>
          <a href="#trust" className={styles.navLink}>Data Privacy</a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopCtaWrapper}>
            <Button onClick={scrollToForm} className={styles.desktopCta}>
              Request a Platform Demo
            </Button>
          </div>
          
          <button 
            className={styles.mobileMenuTrigger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu} id="mobile-menu" role="dialog" aria-label="Mobile Navigation">
          <nav className={styles.mobileNavLinks}>
            <a href="#capabilities" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#multibranch" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Multi-Campus</a>
            <a href="#trust" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Data Privacy</a>
            <Button onClick={scrollToForm} className={styles.mobileCta}>
              Request a Platform Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
