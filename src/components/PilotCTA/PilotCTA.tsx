import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './PilotCTA.module.css';

export default function PilotCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      title: 'Scoping', 
      desc: 'We map your current registers to Ottobon.',
      details: 'Our implementation team works with your administration to understand your current fee structures, attendance policies, and exam grading logic. We create a custom configuration plan that maps perfectly to your existing workflows.'
    },
    { 
      title: 'Migration', 
      desc: 'Secure import of one batch or branch.',
      details: 'We take your existing Excel sheets or legacy database exports and safely migrate the historical data into the new schema. Your staff doesn\'t have to manually re-enter a single record.'
    },
    { 
      title: 'Training', 
      desc: 'Half-day onboarding for staff.',
      details: 'Ottobon is designed to be as intuitive as a modern consumer app. We conduct a focused half-day training session for your clerks, principals, and admins to ensure they are completely confident using the system.'
    },
    { 
      title: 'Go Live', 
      desc: 'Run parallel or switch entirely.',
      details: 'You can choose to run Ottobon in parallel with your physical registers for the first two weeks to build trust, or do a hard cutover. Either way, our engineering support is on standby 24/7 during launch.'
    },
  ];

  return (
    <section className={styles.section} id="pilot">
      <div className={`container ${styles.container}`} ref={ref}>
        
        <div className={styles.header}>
          <h2 className={styles.headline}>Prove the value on one campus.</h2>
          <p className={styles.body}>
            You don't need to commit your entire group on day one. We regularly deploy Ottobon as a pilot in a single branch or for a single batch to prove the operational efficiency.
          </p>
        </div>

        <div className={styles.interactiveRoadmap}>
          {/* Timeline Tracker */}
          <div className={styles.timeline}>
            <div className={styles.timelineTrack} />
            <motion.div 
              className={styles.timelineProgress}
              initial={{ width: 0 }}
              animate={inView ? { width: `${(activeStep / (steps.length - 1)) * 100}%` } : { width: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className={styles.pulse} />
            </motion.div>

            <div className={styles.timelineNodes}>
              {steps.map((s, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                
                return (
                  <button 
                    key={i} 
                    className={`${styles.nodeBtn} ${isActive ? styles.activeNode : ''} ${isPast ? styles.pastNode : ''}`}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Go to step ${i + 1}: ${s.title}`}
                  >
                    <div className={styles.nodeDot} />
                    <span className={styles.nodeTitle}>0{i + 1}. {s.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Content */}
          <div className={styles.activeContentWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className={styles.contentCard}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.cardTitle}>{steps[activeStep].title}</h3>
                <h4 className={styles.cardSubtitle}>{steps[activeStep].desc}</h4>
                <p className={styles.cardDetails}>{steps[activeStep].details}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.action}>
          <a href="#register" className={styles.button}>
            <span className={styles.btnText}>Request a Pilot Deployment</span>
            <div className={styles.shimmer} />
          </a>
        </div>

      </div>
    </section>
  );
}
