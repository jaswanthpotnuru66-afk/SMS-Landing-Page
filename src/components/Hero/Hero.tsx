import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import heroBg from '../../assets/hero-bg.webp';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Image Layer */}
      <div className={styles.bgImage} style={{ backgroundImage: `url(${heroBg})` }}></div>
      
      {/* Static Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Static Radial Gradient to ensure center is slightly highlighted/darkened */}
      <div className={styles.radialOverlay}></div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.copyArea}>
          <div className={styles.textContent}>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.eyebrow}
            >
              BUILT FOR GROWING EDUCATIONAL INSTITUTIONS
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.headline}
            >
              Scale your campus operations<br />without the chaos.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.subhead}
            >
              Connect every branch into a single, secure source of truth. Make decisions faster with group-level intelligence and automated reporting.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.outcomes}
            >
              <span>UNIFIED STUDENT RECORDS</span>
              <span className={styles.bullet}>·</span>
              <span>AUTOMATED FEE COLLECTION</span>
              <span className={styles.bullet}>·</span>
              <span>INSTANT GROUP ANALYTICS</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={styles.actions}
            >
              <button className={styles.primaryCta}>REQUEST A PILOT DISCUSSION</button>
              <button className={styles.secondaryCta}>SEE HOW IT WORKS &rarr;</button>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
