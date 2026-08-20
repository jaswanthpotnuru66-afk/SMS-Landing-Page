import { ShieldCheck, Building2, ClipboardList, UsersRound } from 'lucide-react';
import styles from './UserPortals.module.css';

const portals = [
  {
    icon: ShieldCheck,
    title: 'Dean Portal',
    description: 'High-level consolidated dashboard across all branches. Track group-wide fee collections, admission health, and operational performance in real time.'
  },
  {
    icon: Building2,
    title: 'Principal Portal',
    description: 'Branch-specific management interface. Monitor daily attendance, class-wise academic progress, and pending approvals for your campus.'
  },
  {
    icon: ClipboardList,
    title: 'Staff Portal',
    description: 'Web interface for faculty to mark attendance in seconds, enter examination marks, and manage classroom activities without administrative overhead.'
  },
  {
    icon: UsersRound,
    title: 'Parent Portal',
    description: 'Direct communication channel for guardians. Receive instant alerts on attendance, view report cards, and pay fee installments securely online.'
  }
];

export default function UserPortals() {
  return (
    <section className={styles.section} id="portals">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <p className={styles.overline}>Role-Based Access</p>
          <h2 className={styles.headline}>
            Dedicated portals for <span className={styles.mark}>everyone involved.</span>
          </h2>
          <p className={styles.subtitle}>
            A single unified system with tailored interfaces for administration, staff, students, and parents to streamline collaboration.
          </p>
        </div>

        <div className={styles.grid}>
          {portals.map((portal, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <portal.icon className={styles.icon} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{portal.title}</h3>
              <p className={styles.cardDesc}>{portal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
