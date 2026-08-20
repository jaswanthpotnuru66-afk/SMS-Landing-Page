import React from 'react';
import styles from './OperatingModelShift.module.css';

const OperatingModelShift: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <h2 className={styles.headline}>
            A fundamentally different operational structure.
          </h2>
          <p className={styles.supportingCopy}>
            We don't just digitize your existing paperwork. Ottobon introduces a structured operating model where every workflow—from fee collection to daily attendance—references a single, unified student record.
          </p>
        </div>

        <div className={styles.diagram}>
          {/* LEFT: Old Segmented Records */}
          <div className={styles.columnLeft}>
            <div className={styles.columnLabel}>DIFFERENT WORKFLOWS</div>
            <div className={styles.legacyStack}>
              <div className={styles.legacyBox}>Fee Ledgers</div>
              <div className={styles.legacyBox}>Attendance Registers</div>
              <div className={styles.legacyBox}>Exam Records</div>
            </div>
          </div>

          <div className={styles.arrowArea}>
            <span className={styles.arrow}>→</span>
          </div>

          {/* CENTER: Unified Record */}
          <div className={styles.columnCenter}>
            <div className={styles.columnLabelYellow}>ONE STRUCTURED REFERENCE</div>
            <div className={styles.coreBox}>
              Student Operations Record
            </div>
          </div>

          <div className={styles.arrowArea}>
            <span className={styles.arrow}>→</span>
          </div>

          {/* RIGHT: Management Outcome */}
          <div className={styles.columnRight}>
            <div className={styles.columnLabelDark}>CLEARER VISIBILITY</div>
            <div className={styles.managementBox}>
              Management Brief
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingModelShift;
