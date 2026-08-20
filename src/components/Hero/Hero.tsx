import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Button } from '../ui/Button/Button';
import styles from './Hero.module.css';
import { ControlCenter } from './ControlCenter';

export default function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('register');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentColumn}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.eyebrow}
          >
            Built for educational institutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.headline}
          >
            Run every campus from one trusted operations platform.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.subhead}
          >
            Unify student records, fees, attendance, exams, parent communication and reporting—so leadership gets clear visibility across every campus.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.actions}
          >
            <Button onClick={scrollToForm} className={styles.primaryCta}>
              Request a Platform Demo
            </Button>
            <Button variant="secondary" className={styles.secondaryCta}>
              See How It Works
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.trustLayer}
          >
            <Lock size={14} className={styles.trustIcon} />
            <span>Secure student data &middot; Role-based access &middot; Audit-ready records</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={styles.capabilities}
          >
            <span>Student records</span>
            <span className={styles.separator}></span>
            <span>Fees & attendance</span>
            <span className={styles.separator}></span>
            <span>Parent communication</span>
            <span className={styles.separator}></span>
            <span>Multi-campus visibility</span>
          </motion.div>
          
        </div>

        <div className={styles.visualColumn}>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ControlCenter />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
