import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Trust.module.css';

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="trust">
      <div className={`container ${styles.container}`} ref={ref}>

        <div className={styles.header}>
          <div className={styles.badgeWrapper}>
            <span className={styles.guaranteeBadge}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L0 3.11111V7.77778C0 11.8996 3.00222 15.7022 7 16C10.9978 15.7022 14 11.8996 14 7.77778V3.11111L7 0ZM7 3.55556C8.55556 3.55556 9.72222 4.72222 9.72222 6.27778V7.11111H10.5C10.9667 7.11111 11.2778 7.42222 11.2778 7.88889V11.7778C11.2778 12.2444 10.9667 12.5556 10.5 12.5556H3.5C3.03333 12.5556 2.72222 12.2444 2.72222 11.7778V7.88889C2.72222 7.42222 3.03333 7.11111 3.5 7.11111H4.27778V6.27778C4.27778 4.72222 5.44444 3.55556 7 3.55556ZM7 4.72222C6.14444 4.72222 5.44444 5.42222 5.44444 6.27778V7.11111H8.55556V6.27778C8.55556 5.42222 7.85556 4.72222 7 4.72222Z" fill="currentColor"/>
              </svg>
              100% Data Privacy Guarantee
            </span>
          </div>
          <h2 className={styles.headline}>
            Your institutional data is<br />
            strictly yours. Period.
          </h2>
          <p className={styles.body}>
            We know student records, parent contacts, and financial ledgers are your most sensitive assets. Ottobon is built like a vault. Your data is isolated, strictly controlled by your administration, and guaranteed never to be shared or monetized.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {[
            {
              title: 'Institutional Isolation',
              desc: 'Your database is logically isolated. Student and fee data cannot bleed into other institutions, ensuring absolute confidentiality.',
              icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
            },
            {
              title: 'Zero Third-Party Access',
              desc: 'We are a software provider, not a data broker. Your student and parent information is never sold, shared, or used for advertising.',
              icon: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22'
            },
            {
              title: 'Strict Role-Based Control',
              desc: 'You decide who sees what. Clerks only see their assigned batches. Directors have full visibility. Every single action is tracked in an immutable audit log.',
              icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10 0v6m3-3h-6'
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              className={styles.pillarCard}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.15) }}
            >
              <div className={styles.iconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={pillar.icon} />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
