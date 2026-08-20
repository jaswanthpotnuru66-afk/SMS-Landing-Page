import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Migration.module.css';

export default function Migration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="migration">
      <div className={`container ${styles.container}`} ref={ref}>
        <div className={styles.header}>
          <p className={styles.overline}>Onboarding & Migration</p>
          <h2 className={styles.headline}>
            Your existing data.<br />
            Our structured schema.
          </h2>
          <p className={styles.body}>
            Moving to Ottobon does not require manual data entry. We ingest your existing Excel registers, validate them against our structural schema, and flag any inconsistencies before committing them to the database.
          </p>
        </div>

        <div className={styles.dashboard}>
          {/* Mac OS Window Controls */}
          <div className={styles.macTitlebar}>
            <div className={styles.macDot} style={{ backgroundColor: '#FF5F56' }}></div>
            <div className={styles.macDot} style={{ backgroundColor: '#FFBD2E' }}></div>
            <div className={styles.macDot} style={{ backgroundColor: '#27C93F' }}></div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressNav}>
            {['Upload CSV', 'Map Fields', 'Validation Run', 'Review Errors', 'Commit Data'].map((step, i) => (
              <div key={i} className={`${styles.navStep} ${i === 2 ? styles.navActive : ''} ${i < 2 ? styles.navDone : ''}`}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepLabel}>{step}</div>
              </div>
            ))}
          </div>

          <div className={styles.importPanel}>
            <div className={styles.panelHead}>
              <span>Data Import — Admission_Register_2025.csv</span>
              <span className={styles.badgeWarn}>Validation Complete: 2 Issues Found</span>
            </div>

            <div className={styles.splitView}>
              {/* Left: Source Data */}
              <div className={styles.dataView}>
                <div className={styles.viewLabel}>SOURCE: RAW CSV</div>
                <div className={styles.codeBlock}>
                  <div className={styles.codeRow}>stu_id,name,prog,phone,fee_due</div>
                  <div className={styles.codeRow}>101,Ravi K,MPC,9884512,8500</div>
                  <motion.div
                    className={styles.codeRowError}
                    initial={{ backgroundColor: 'transparent' }}
                    animate={inView ? { backgroundColor: 'rgba(239, 68, 68, 0.1)' } : {}}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    102,Sunita P,M.P.C,,4250
                  </motion.div>
                  <motion.div
                    className={styles.codeRowError}
                    initial={{ backgroundColor: 'transparent' }}
                    animate={inView ? { backgroundColor: 'rgba(239, 68, 68, 0.1)' } : {}}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    103,Kiran M,BIPC,?,8500
                  </motion.div>
                </div>
              </div>

              <div className={styles.divider}>→</div>

              {/* Right: Ottobon Schema */}
              <div className={styles.dataView}>
                <div className={styles.viewLabel}>TARGET: OTTOBON SCHEMA</div>
                <div className={styles.schemaGrid}>
                  <div className={styles.schemaHeader}>
                    <span>Field</span><span>Mapped Type</span><span>Status</span>
                  </div>
                  {[
                    { field: 'studentId', type: 'String (Unique)', status: 'Valid', color: 'green' },
                    { field: 'fullName', type: 'String', status: 'Valid', color: 'green' },
                    { field: 'programme', type: 'Enum Reference', status: 'Warning: M.P.C (Auto-mapped to MPC)', color: 'amber' },
                    { field: 'guardianPhone', type: 'String (Phone)', status: 'Error: Missing/Invalid format', color: 'red' },
                  ].map((row, i) => (
                    <motion.div
                      key={i}
                      className={styles.schemaRow}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                    >
                      <span className={styles.schemaField}>{row.field}</span>
                      <span className={styles.schemaType}>{row.type}</span>
                      <span className={`${styles.schemaStatus} ${styles[`status_${row.color}`]}`}>{row.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
