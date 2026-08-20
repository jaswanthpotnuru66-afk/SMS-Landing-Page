import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Checkpoints.module.css';

export default function Checkpoints() {
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, amount: 0.2 });

  const registers = [
    { name: 'Admission Register', desc: 'Manual entry of student personal & academic details', friction: 'COPY TO FEE LEDGER' },
    { name: 'Fee Ledger',         desc: 'Cross-referenced from register, manually updated', friction: 'VERIFY AGAINST BANK' },
    { name: 'Attendance Register',desc: 'Marked daily per class, totaled monthly manually', friction: 'RECHECK FOR SHORTAGE' },
    { name: 'Exam Result Sheet',  desc: 'Marks entered, totals calculated, ranks derived', friction: 'UPDATE PARENT RECORDS' },
    { name: 'Management Report',  desc: 'Compiled from all above by principal or clerk', friction: null },
  ];

  return (
    <section className={styles.section} id="checkpoints">
      <div className={`container ${styles.container}`} ref={inViewRef}>

        <div className={styles.layout}>
          <div className={styles.header}>
            <p className={styles.overline}>The Paper Trail</p>
            <h2 className={styles.headline}>
              Five separate registers.<br />
              One management report.
            </h2>
            <p className={styles.body}>
              Every piece of management information passes through at least four manual handoffs before a Principal or Director can act on it. Each handoff is a point of delay, error, and duplication. Scroll to follow the friction.
            </p>
          </div>

          <div className={styles.chainWrap}>
            <div className={styles.chain}>
              {registers.map((reg, i) => {
                // Calculate dynamic sticky top position so they stack on top of each other
                const topOffset = 100 + (i * 24); 
                
                return (
                  <motion.div
                    key={i}
                    className={styles.step}
                    style={{ 
                      top: `${topOffset}px`,
                      zIndex: i 
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {/* Register Document */}
                    <div className={`${styles.doc} ${i === registers.length - 1 ? styles.docGoal : ''}`}
                         style={{ 
                           boxShadow: i > 0 ? '0 -10px 20px rgba(0,0,0,0.4)' : 'none' 
                         }}
                    >
                      <div className={styles.docRuling}>
                        {[...Array(3)].map((_, l) => (
                          <div key={l} className={styles.docLine} />
                        ))}
                      </div>
                      <div className={styles.docLabel}>{reg.name}</div>
                      <div className={styles.docDesc}>{reg.desc}</div>
                    </div>

                    {/* Friction connector badge */}
                    {reg.friction && (
                      <div className={styles.connector}>
                        <div className={styles.connBadge}>{reg.friction}</div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Small spacer to let the stack finish before moving on */}
            <div style={{ height: '10vh' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
