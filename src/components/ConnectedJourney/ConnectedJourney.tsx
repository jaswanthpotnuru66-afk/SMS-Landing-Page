import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './ConnectedJourney.module.css';

const steps = [
  { id: 1, label: "Student Import", colorClass: styles.nodeSky },
  { id: 2, label: "Fees", colorClass: styles.nodeButter },
  { id: 3, label: "Attendance", colorClass: styles.nodeMint },
  { id: 4, label: "Examinations", colorClass: styles.nodeCoral },
  { id: 5, label: "Parent Updates", colorClass: styles.nodePeach }
];

export default function ConnectedJourney() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className={`section ${styles.journeySection}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <h2 className="headline-section">One connected student journey</h2>
          <p className="supporting-statement">
            Every operation works around the same student record.
          </p>
        </div>

        <div className={styles.pipelineContainer}>
          <motion.div 
            className={styles.pipeline}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* The continuous line structure */}
            <div className={styles.baseLine} />
            <motion.div 
              className={styles.progressLine} 
              variants={lineVariants} 
              style={{ transformOrigin: "left" }} 
            />

            {/* The steps */}
            <div className={styles.stepsWrapper}>
              {steps.map((step) => (
                <div key={step.id} className={styles.step}>
                  <motion.div className={`${styles.node} ${step.colorClass}`} variants={nodeVariants}>
                    <div className={styles.innerDot} />
                  </motion.div>
                  <motion.div className={styles.label} variants={nodeVariants}>
                    {step.label}
                  </motion.div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
