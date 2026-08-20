import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './MultiBranch.module.css';
import { SpotlightCard } from '../ui/SpotlightCard';

// Reusable CountUp component for metrics
function CountUp({ target, suffix = '', duration = 1, delay = 0, inView = false }: { target: number, suffix?: string, duration?: number, delay?: number, inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate: (v) => {
          setValue(Math.round(v));
        }
      });
      return controls.stop;
    }
  }, [target, duration, delay, inView]);

  return <span>{value.toLocaleString()}{suffix}</span>;
}

export default function MultiBranch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const branches = [
    { name: 'North Campus', students: 3240, fee: 88, att: 92 },
    { name: 'South Campus', students: 2850, fee: 94, att: 95 },
    { name: 'East Campus', students: 1920, fee: 76, att: 88 },
  ];

  return (
    <section className={styles.section} id="multibranch">
      <div className={`container ${styles.container}`} ref={ref}>
        <div className={styles.header}>
          <p className={styles.overline}>Group Management</p>
          <h2 className={styles.headline}>
            Group-level intelligence.<br />
            Zero compilation required.
          </h2>
          <p className={styles.body}>
            For directors overseeing multiple campuses, Ottobon provides a consolidated real-time view. No more waiting for end-of-day Excel sheets from individual branch principals.
          </p>
        </div>

        <div className={styles.dashboard}>
          {/* Mac OS Window Controls */}
          <div className={styles.macTitlebar}>
            <div className={styles.macDot} style={{ backgroundColor: '#FF5F56' }}></div>
            <div className={styles.macDot} style={{ backgroundColor: '#FFBD2E' }}></div>
            <div className={styles.macDot} style={{ backgroundColor: '#27C93F' }}></div>
          </div>

          <div className={styles.dashHeader}>
            <div className={styles.dashTitle}>Group Overview — Real-time Operations</div>
            <div className={styles.dashFilters}>
              <span className={styles.filterActive}>All Branches</span>
              <span>Academic Year 25-26</span>
            </div>
          </div>

          {/* Branch Tiles */}
          <div className={styles.tileGrid}>
            {branches.map((b, i) => (
              <SpotlightCard
                key={i}
                className={styles.tile}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
              >
                <div className={styles.tileName}>{b.name}</div>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Enrolment</div>
                    <div className={styles.metricVal}>
                      <CountUp target={b.students} inView={inView} delay={0.4 + (i * 0.1)} />
                    </div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Fee Collection</div>
                    <div className={styles.metricVal}>
                      <CountUp target={b.fee} suffix="%" inView={inView} delay={0.45 + (i * 0.1)} />
                    </div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Avg. Attendance</div>
                    <div className={styles.metricVal}>
                      <CountUp target={b.att} suffix="%" inView={inView} delay={0.5 + (i * 0.1)} />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Consolidated Analytics Card */}
          <motion.div
            className={styles.analyticsCard}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className={styles.analyticsHead}>Fee Collection Velocity — Current Month</div>
            <div className={styles.chartArea}>
              <div className={styles.chartY}>
                <span>100%</span><span>50%</span><span>0%</span>
              </div>
              <div className={styles.chartBars}>
                {branches.map((b, i) => (
                  <div key={i} className={styles.barCol}>
                    <motion.div
                      className={styles.bar}
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${b.fee}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + (i * 0.1), ease: "easeOut" }}
                    />
                    <div className={styles.barLabel}>{b.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
