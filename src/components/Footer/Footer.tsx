import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>

        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <img src="/logo.png" alt="Ottobon Logo" className={styles.logoImg} />
              <span className={styles.wordmark}>OTTOBON</span>
            </div>
            <p className={styles.brandDesc}>
              The connected operations platform for intermediate colleges across Andhra Pradesh and Telangana. Replace disconnected registers with a single source of truth.
            </p>
            <div className={styles.statsRow}>
              <span className={styles.statItem}>40+ Campuses</span>
              <span className={styles.statDot} />
              <span className={styles.statItem}>18,000+ Students</span>
              <span className={styles.statDot} />
              <span className={styles.statItem}>AY 2024–25</span>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <div className={styles.groupTitle}>Product</div>
              <a href="#capabilities" className={styles.footerLink}>One Student File</a>
              <a href="#capabilities" className={styles.footerLink}>Fee Operations</a>
              <a href="#capabilities" className={styles.footerLink}>Academic & Results</a>
              <a href="#multibranch" className={styles.footerLink}>Group Dashboard</a>
            </div>
            <div className={styles.linkGroup}>
              <div className={styles.groupTitle}>Trust</div>
              <a href="#trust" className={styles.footerLink}>Privacy Guarantee</a>
              <a href="#trust" className={styles.footerLink}>Data Isolation</a>
              <a href="#migration" className={styles.footerLink}>Data Migration</a>
            </div>
            <div className={styles.linkGroup}>
              <div className={styles.groupTitle}>Company</div>
              <a href="#register" className={styles.footerLink}>Request a Pilot</a>
              <a href="#" className={styles.footerLink}>Terms of Service</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>&copy; {currentYear} Ottobon Systems. All rights reserved.</div>
          <div className={styles.socialRow}>
            <a href="mailto:institution.management@ottobon.in" className={styles.socialIcon} aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/company/ottobon-academy-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/ottobon.verse?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          <div className={styles.buildInfo}>
            <span className={styles.statusDot} />
            System Status: All systems operational
          </div>
        </div>

      </div>
    </footer>
  );
}
