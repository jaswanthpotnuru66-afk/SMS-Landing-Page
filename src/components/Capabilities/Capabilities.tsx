import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Capabilities.module.css';
import { SpotlightCard } from '../ui/SpotlightCard';

const modules = [
  { id: 0, num: '01', label: 'Enrolment',       tag: 'Enrolment & Identity' },
  { id: 1, num: '02', label: 'Fees',             tag: 'Fee Management' },
  { id: 2, num: '03', label: 'Attendance',       tag: 'Daily Attendance' },
  { id: 3, num: '04', label: 'Examinations',     tag: 'Exams & Results' },
  { id: 4, num: '05', label: 'Parent Comms',     tag: 'Communication' },
  { id: 5, num: '06', label: 'Multi-Branch',     tag: 'Group Management' },
  { id: 6, num: '07', label: 'Reports',          tag: 'Reports & Controls' },
];

const content = [
  {
    title: 'Enrolment & Student Identity',
    body: 'A student is registered once: personal details, guardian contacts, previous academic records, programme selection, and branch assignment. Every subsequent operation references this identity — no re-entering, no cross-referencing.',
    details: [
      { key: 'Student ID Generation', val: 'Unique ID assigned on registration. Used across all modules.' },
      { key: 'Programme Mapping',     val: 'Branch, batch, course, and section assignment in one step.' },
      { key: 'TC Management',         val: 'Transfer certificate generated directly from verified records.' },
      { key: 'Promotion Engine',      val: 'Bulk year-end promotion with academic history preserved.' },
    ],
  },
  {
    title: 'Fee Management',
    body: 'Fee schedules are defined per batch. Payments are recorded against individual student accounts. Outstanding balances, receipt generation, and overdue follow-up SMS are all automated from a single source of truth.',
    details: [
      { key: 'Instalment Planning',   val: 'Custom fee schedules per student or per batch.' },
      { key: 'Digital Receipts',      val: 'Auto-generated PDF receipts on each payment.' },
      { key: 'Overdue Automation',    val: 'SMS reminders triggered by configured due dates.' },
      { key: 'Discount Approvals',    val: 'Structured workflow for fee concession requests.' },
    ],
  },
  {
    title: 'Daily Attendance',
    body: 'Attendance is marked via mobile app by the class teacher. The system calculates running totals, flags students below the shortage threshold, and dispatches absentee notifications to parents — all within the same session.',
    details: [
      { key: 'Mobile Entry',          val: 'Section-level marking via native Android/iOS app.' },
      { key: 'Absentee SMS',          val: 'Parent notification triggered within 2 hours of marking.' },
      { key: 'Shortage Report',       val: 'Monthly shortage list compiled automatically.' },
      { key: 'Backdated Correction',  val: 'Retroactive edits with approval and audit trail.' },
    ],
  },
  {
    title: 'Examinations & Results',
    body: 'Marks are entered or imported per subject. Totals, ranks, pass/fail determinations, and grade computations are automatic. Results are published from within the system — report cards generated as PDFs and pushed to parent contacts.',
    details: [
      { key: 'OMR / Manual Import',   val: 'Bulk marks upload from OMR files or manual entry.' },
      { key: 'Rank Computation',      val: 'Automated class and section ranking on submission.' },
      { key: 'Report Card Generation',val: 'Customisable PDF templates with institution header.' },
      { key: 'Parent Publication',    val: 'Direct SMS/WhatsApp push with PDF attachment.' },
    ],
  },
  {
    title: 'Parent Communication',
    body: 'Every SMS and notification sent to parents is triggered by an actual operational event in the system — not manually typed. Fee reminders, absentee alerts, result publications, and general broadcasts are all traceable with delivery receipts.',
    details: [
      { key: 'Event Triggers',        val: 'Automated on: payment, absent marking, result publish.' },
      { key: 'Bulk Broadcasts',       val: 'Filtered announcements by branch, batch, or section.' },
      { key: 'Delivery Logs',         val: 'Full SMS delivery status for accountability.' },
      { key: 'Multi-Language',        val: 'Telugu and English templates supported.' },
    ],
  },
  {
    title: 'Multi-Branch Group Management',
    body: 'Directors and board members can see consolidated data across all campuses without requesting compiled reports from each principal. Enrolment counts, fee collection status, and attendance health are visible in real time.',
    details: [
      { key: 'Branch Selector',       val: 'Switch between campuses or view consolidated group data.' },
      { key: 'Fee Aggregation',       val: 'Group-wide collection vs outstanding across all branches.' },
      { key: 'Cross-Campus Reports',  val: 'Comparative academic and operational analytics.' },
      { key: 'Principal Dashboard',   val: 'Branch-specific view for individual principals.' },
    ],
  },
  {
    title: 'Reports & Management Controls',
    body: 'Reports are not compiled manually — they are outputs of the operational data already in the system. Financial summaries, academic performance trends, attendance health, and pending approvals are available instantly.',
    details: [
      { key: 'Financial Reports',     val: 'Daily collection, dues summary, discount ledger.' },
      { key: 'Academic Reports',      val: 'Section-wise performance and year-on-year trends.' },
      { key: 'Approval Workflows',    val: 'Structured review for fee reversals, result changes.' },
      { key: 'Audit Trail',           val: 'Every data change logged with user, timestamp, reason.' },
    ],
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(2);

  return (
    <section className={styles.section} id="capabilities">
      <div className={`container ${styles.container}`}>

        <div className={styles.header}>
          <p className={styles.overline}>Seven Modules. One Student File.</p>
          <h2 className={styles.headline}>
            Everything an intermediate college<br />
            <span className={styles.mark}>needs to operate, connected.</span>
          </h2>
        </div>

        <SpotlightCard className={styles.platform}>

          {/* Module index */}
          <nav className={styles.index}>
            <div className={styles.indexLabel}>MODULE INDEX</div>
            {modules.map((mod) => (
              <button
                key={mod.id}
                className={`${styles.indexItem} ${active === mod.id ? styles.indexActive : ''}`}
                onClick={() => setActive(mod.id)}
              >
                <span className={styles.indexNum}>{mod.num}</span>
                <span className={styles.indexLabel2}>{mod.label}</span>
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.contentInner}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.contentHead}>
                  <div className={styles.contentNum}>{modules[active].num}</div>
                  <div className={styles.contentTag}>{modules[active].tag}</div>
                </div>
                <h3 className={styles.contentTitle}>{content[active].title}</h3>
                <p className={styles.contentBody}>{content[active].body}</p>

                <div className={styles.detailGrid}>
                  {content[active].details.map((d, i) => (
                    <div key={i} className={styles.detailRow}>
                      <div className={styles.detailKey}>{d.key}</div>
                      <div className={styles.detailVal}>{d.val}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </SpotlightCard>
      </div>
    </section>
  );
}
