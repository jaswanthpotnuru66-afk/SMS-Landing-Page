import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ROIHook.module.css';

export default function ROIHook() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const table = [
    { operation: 'Fee collection & reconciliation',  visibleHours: '8 hrs/wk',  hiddenHours: '+ 5 hrs chasing, re-checking, correcting' },
    { operation: 'Attendance compilation',            visibleHours: '4 hrs/wk',  hiddenHours: '+ 3 hrs shortage calculation, notices' },
    { operation: 'Exam results & report cards',       visibleHours: '12 hrs/cycle', hiddenHours: '+ 8 hrs totaling, ranking, corrections' },
    { operation: 'Parent communication',              visibleHours: '3 hrs/wk',  hiddenHours: '+ 4 hrs phone calls for missing info' },
    { operation: 'Management reporting',              visibleHours: '6 hrs/wk',  hiddenHours: '+ 6 hrs compiling data from other registers' },
  ];

  return (
    <section className={styles.section} id="roi">
      <div className={`container ${styles.container}`} ref={ref}>

        <div className={styles.header}>
          <p className={styles.overline}>The Hidden Cost</p>
          <h2 className={styles.headline}>
            What management sees is not<br />
            what administration actually does.
          </h2>
          <p className={styles.body}>
            The official workload is what appears on the surface. The hidden overhead is what staff actually spend their time on — and it consistently exceeds the official task.
          </p>
        </div>

        <motion.div
          className={styles.tableWrap}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div className={styles.tableHead}>
            <span>Operation</span>
            <span>Official Time</span>
            <span>Actual Hidden Overhead</span>
          </div>

          {table.map((row, i) => (
            <motion.div
              key={i}
              className={styles.tableRow}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
            >
              <span className={styles.cellOp}>{row.operation}</span>
              <span className={styles.cellVis}>{row.visibleHours}</span>
              <span className={styles.cellHidden}>{row.hiddenHours}</span>
            </motion.div>
          ))}

          <div className={styles.tableFooter}>
            <span className={styles.footerLabel}>Estimated institutional overhead</span>
            <span className={styles.footerNote}>Official hours visible to management</span>
            <span className={styles.footerTotal}>26+ additional staff-hours per week — untracked</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
