import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Activity, Users, BookOpen, CreditCard } from 'lucide-react';
import styles from './ControlCenter.module.css';

type CampusData = {
  id: string;
  name: string;
  students: string;
  attendance: string;
  fees: string;
  exams: string;
  operations: { text: string; time: string }[];
};

const mockData: Record<string, CampusData> = {
  'all': {
    id: 'all',
    name: 'All Campuses',
    students: '2,450',
    attendance: '94%',
    fees: '₹12.45L',
    exams: '8',
    operations: [
      { text: 'Attendance synchronized', time: '09:12' },
      { text: 'Fee payment recorded', time: '09:28' },
      { text: 'Parent notification sent', time: '09:41' },
      { text: 'Examination report updated', time: '10:05' },
    ]
  },
  'campus_a': {
    id: 'campus_a',
    name: 'Campus A',
    students: '980',
    attendance: '96%',
    fees: '₹4.80L',
    exams: '2',
    operations: [
      { text: 'Morning attendance submitted', time: '08:45' },
      { text: 'Bus tracking updated', time: '09:10' },
      { text: 'Term fee received (Grade 10)', time: '09:55' },
      { text: 'Library books issued', time: '10:15' },
    ]
  },
  'campus_b': {
    id: 'campus_b',
    name: 'Campus B',
    students: '820',
    attendance: '92%',
    fees: '₹4.10L',
    exams: '3',
    operations: [
      { text: 'Lab equipment audit', time: '09:05' },
      { text: 'Fee reminder sent (Grade 8)', time: '09:30' },
      { text: 'Transport delay notification', time: '09:45' },
      { text: 'Staff meeting scheduled', time: '10:20' },
    ]
  },
  'campus_c': {
    id: 'campus_c',
    name: 'Campus C',
    students: '650',
    attendance: '95%',
    fees: '₹3.55L',
    exams: '3',
    operations: [
      { text: 'Sports day registration', time: '08:50' },
      { text: 'Attendance synchronized', time: '09:15' },
      { text: 'Cafeteria inventory updated', time: '10:00' },
      { text: 'Maintenance request closed', time: '10:10' },
    ]
  }
};

export function ControlCenter() {
  const [activeId, setActiveId] = useState('all');
  const [selectorOpen, setSelectorOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const currentData = mockData[activeId];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setSelectorOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.controlCenter} aria-label="Campus Operations Control Center">
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div className={styles.selectorWrapper} ref={selectorRef}>
            <button 
              className={styles.selector} 
              onClick={() => setSelectorOpen(!selectorOpen)}
              aria-expanded={selectorOpen}
              aria-haspopup="listbox"
            >
              <span className={styles.selectorText}>{currentData.name}</span>
              <span className={styles.selectorIcon}>▾</span>
            </button>
            
            {selectorOpen && (
              <ul className={styles.dropdownMenu} role="listbox">
                {Object.values(mockData).map(campus => (
                  <li 
                    key={campus.id} 
                    role="option" 
                    aria-selected={activeId === campus.id}
                    className={`${styles.dropdownItem} ${activeId === campus.id ? styles.dropdownItemActive : ''}`}
                    onClick={() => {
                      setActiveId(campus.id);
                      setSelectorOpen(false);
                    }}
                  >
                    {campus.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>
              {activeId === 'all' ? '3 campuses connected' : 'Live connection'}
            </span>
          </div>
        </div>
        <div className={styles.topBarRight}>
          <Activity size={14} className={styles.liveIcon} />
          <span className={styles.liveText}>Live operations</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.content}>
        
        {/* Metrics Grid */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <Users size={14} className={styles.metricIcon} />
              <span className={styles.metricTitle}>Students</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeId}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className={styles.metricValue}
              >
                {currentData.students}
              </motion.div>
            </AnimatePresence>
            <div className={styles.metricSub}>Active students</div>
          </div>
          
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <Activity size={14} className={styles.metricIcon} />
              <span className={styles.metricTitle}>Attendance Today</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeId}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className={styles.metricValue}
              >
                {currentData.attendance}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div 
                key={`sub-${activeId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.metricSub}
              >
                {activeId === 'all' ? 'Across all campuses' : 'Campus average'}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <CreditCard size={14} className={styles.metricIcon} />
              <span className={styles.metricTitle}>Fees Collected</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeId}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className={styles.metricValue}
              >
                {currentData.fees}
              </motion.div>
            </AnimatePresence>
            <div className={styles.metricSub}>This month</div>
          </div>
          
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <BookOpen size={14} className={styles.metricIcon} />
              <span className={styles.metricTitle}>Exams</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeId}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className={styles.metricValue}
              >
                {currentData.exams}
              </motion.div>
            </AnimatePresence>
            <div className={styles.metricSub}>Scheduled</div>
          </div>
        </div>

        <div className={styles.middleSection}>
          {/* Campus Status */}
          <div className={styles.campusStatus}>
            <h3 className={styles.sectionTitle}>Campus Status</h3>
            <div className={styles.campusList}>
              {['campus_a', 'campus_b', 'campus_c'].map(campusKey => {
                const isSelected = activeId === campusKey || activeId === 'all';
                return (
                  <div 
                    key={campusKey}
                    className={`${styles.campusRow} ${isSelected ? styles.campusActive : styles.campusInactive}`}
                    onClick={() => setActiveId(activeId === campusKey ? 'all' : campusKey)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={styles.campusName}>{mockData[campusKey].name}</div>
                    <div className={styles.campusState}>
                      <CheckCircle2 size={12} className={styles.checkIcon} /> Connected
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Operations */}
          <div className={styles.recentOperations}>
            <h3 className={styles.sectionTitle}>Recent Operations</h3>
            <div className={styles.activityList}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentData.operations.map((op, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.activityRow}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <div className={styles.activityDot}></div>
                      <div className={styles.activityText}>{op.text}</div>
                      <div className={styles.activityTime}>{op.time}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Security Status Footer */}
      <div className={styles.securityFooter}>
        <ShieldCheck size={16} className={styles.securityIcon} />
        <div className={styles.securityTextGroup}>
          <span className={styles.securityMain}>Student data protected</span>
          <span className={styles.securitySub}>Role-based access &middot; Audit trail active</span>
        </div>
      </div>
    </div>
  );
}
