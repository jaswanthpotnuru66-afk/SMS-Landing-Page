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
          <div className={styles.buildInfo}>
            <span className={styles.statusDot} />
            System Status: All systems operational
          </div>
        </div>

      </div>
    </footer>
  );
}
