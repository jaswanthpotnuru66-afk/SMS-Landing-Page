import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './BusinessOutcomeBand.module.css';

export default function BusinessOutcomeBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="outcomes">
      <div className={`container ${styles.container}`} ref={ref}>

        <div className={styles.layout}>

          {/* Left: Premise */}
          <div className={styles.premise}>
            <p className={styles.overline}>Why Institutions Choose Ottobon</p>
            <h2 className={styles.headline}>
              Management clarity without the{' '}
              <span className={styles.mark}>manual overhead.</span>
            </h2>
            <p className={styles.body}>
              Every management decision — fee status, attendance health, exam results — currently requires staff to first compile, verify, and reconcile records across separate registers. Ottobon eliminates that step.
            </p>

            {/* Outcome stats */}
            <div className={styles.stats}>
              {[
                { value: '40+', label: 'Institutions live on Ottobon' },
                { value: '18K+', label: 'Students across connected campuses' },
                { value: '7', label: 'Operational modules in one system' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className={styles.stat}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                >
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Product UI — Student record summary */}
          <motion.div
            className={styles.productFrame}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.frameBar}>
              <span className={styles.frameTitle}>Student Record Summary — Group View</span>
              <span className={styles.frameLive}>● Live</span>
            </div>

            <div className={styles.tableWrap}>
              <div className={styles.tableHead}>
                <span>Student</span>
                <span>Fees</span>
                <span>Attendance</span>
                <span>Action</span>
              </div>
              {[
                { name: 'K. Ravi Kumar',   fee: 'Paid',     feeColor: 'paid',    att: '96%',  attColor: 'good',  action: 'None' },
                { name: 'P. Sunita Devi',  fee: 'Pending',  feeColor: 'pending', att: '88%',  attColor: 'good',  action: 'Fee Follow-Up' },
                { name: 'M. Kiran Babu',   fee: 'Partial',  feeColor: 'partial', att: '71%',  attColor: 'risk',  action: 'Attendance Notice' },
                { name: 'G. Lakshmi',      fee: 'Paid',     feeColor: 'paid',    att: '93%',  attColor: 'good',  action: 'None' },
                { name: 'B. Srikanth',     fee: 'Overdue',  feeColor: 'overdue', att: '64%',  attColor: 'risk',  action: '2 Actions Required' },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  className={styles.tableRow}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                >
                  <span className={styles.cellName}>{row.name}</span>
                  <span className={`${styles.badge} ${styles[`badge_${row.feeColor}`]}`}>{row.fee}</span>
                  <span className={`${styles.attBadge} ${styles[`att_${row.attColor}`]}`}>{row.att}</span>
                  <span className={styles.cellAction}>{row.action}</span>
                </motion.div>
              ))}
            </div>

            <div className={styles.frameFooter}>
              Showing 5 of 1,240 students — North Campus · Batch 2025–27
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
