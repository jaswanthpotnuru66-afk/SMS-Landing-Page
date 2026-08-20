import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './CostValue.module.css';

export default function CostValue() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="cost">
      <div className={`container ${styles.container}`} ref={ref}>
        <div className={styles.header}>
          <p className={styles.overline}>Value Proposition</p>
          <h2 className={styles.headline}>
            The cost of software vs.<br />
            the cost of manual overhead.
          </h2>
          <p className={styles.body}>
            Many institutions view software as an added expense. But the manual processes you currently rely on are already costing you — in untracked staff hours, delayed fee collection, and operational friction.
          </p>
        </div>

        <div className={styles.comparison}>
          
          {/* Card 1: Ottobon */}
          <motion.div 
            className={styles.ledgerCard}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.ledgerHead}>
              <span className={styles.ledgerTitle}>With Ottobon</span>
              <span className={styles.badgeTracked}>Tracked Expense</span>
            </div>
            <div className={styles.ledgerRows}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Annual SaaS Subscription</span>
                <span className={styles.rowVal}>Fixed</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Staff Time on Core Tasks</span>
                <span className={styles.rowVal}>Optimized</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Manual Error Correction</span>
                <span className={styles.rowVal}>Near Zero</span>
              </div>
            </div>
            <div className={styles.ledgerTotal}>
              <span className={styles.totalLabel}>Total Operational Cost</span>
              <span className={styles.totalVal}>Predictable</span>
            </div>
          </motion.div>

          {/* Card 2: Status Quo */}
          <motion.div 
            className={`${styles.ledgerCard} ${styles.ledgerCardRed}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.ledgerHead}>
              <span className={styles.ledgerTitle}>Current Status Quo</span>
              <span className={styles.badgeUntracked}>Hidden Overhead</span>
            </div>
            <div className={styles.ledgerRows}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Staff time spent cross-checking</span>
                <span className={styles.rowValRed}>?</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Delayed fee collection follow-ups</span>
                <span className={styles.rowValRed}>?</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Cost of communication errors</span>
                <span className={styles.rowValRed}>?</span>
              </div>
            </div>
            <div className={`${styles.ledgerTotal} ${styles.ledgerTotalRed}`}>
              <span className={styles.totalLabel}>Total Operational Cost</span>
              <span className={styles.totalValRed}>Unknown & Compounding</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
