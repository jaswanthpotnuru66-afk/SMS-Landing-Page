import { useState } from 'react';
import { ShieldCheck, Cloud, Lock, Database } from 'lucide-react';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate validation error if email isn't perfectly valid
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      setEmailError('Please enter a valid institution email address.');
      return;
    }
    
    setEmailError('');
    setSubmitError('');
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // TODO: Replace with the Access Key sent to ottobonacademy@gmail.com
    formData.append('access_key', '77cb2fa8-5672-4a48-8df1-3fbd529bcc41');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setSubmitError(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setSubmitError("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      setSubmitError("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} id="register">
      <div className={`container ${styles.container}`}>
        
        <div className={styles.layout}>
          
          <div className={styles.copy}>
            <p className={styles.overline}>Get Started</p>
            <h2 className={styles.headline}>Connect your campus.</h2>
            <p className={styles.body}>
              Leave behind the disconnected registers and unverified ledgers. Move to a single source of operational truth.
            </p>
            
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepText}>Tell us about your institution setup.</div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepText}>We configure a pilot environment.</div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepText}>Run operations in parallel to verify.</div>
              </div>
            </div>

            <div className={styles.migrationHighlight}>
              <Database size={20} />
              <div>
                <strong>Zero-Hassle Onboarding</strong>
                Seamless Data Migration from your existing systems.
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h3>Request Received</h3>
                <p>We'll be in touch within 24 hours to schedule your platform walkthrough.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" name="firstName" required placeholder="Ravi" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input type="text" name="lastName" required placeholder="Kumar" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Institution Name</label>
                  <input type="text" name="institution" required placeholder="Sri Chaitanya Jr College" />
                </div>

                <div className={styles.formGroup}>
                  <label>Official Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="director@institution.edu.in" 
                    value={emailValue}
                    onChange={(e) => {
                      setEmailValue(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    className={emailError ? styles.inputError : ''}
                  />
                  {emailError && <div className={styles.errorText}>{emailError}</div>}
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+91" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Role</label>
                    <select name="role" required>
                      <option value="">Select Role</option>
                      <option value="director">Director / Founder</option>
                      <option value="principal">Principal / Dean</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Number of Branches</label>
                    <select name="branches" required>
                      <option value="">Select Branches</option>
                      <option value="1">Single Campus</option>
                      <option value="2-5">2 - 5 Branches</option>
                      <option value="6-10">6 - 10 Branches</option>
                      <option value="10+">10+ Branches</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Student Enrollment</label>
                    <select name="enrollment" required>
                      <option value="">Select Size</option>
                      <option value="<500">Less than 500</option>
                      <option value="500-2000">500 - 2,000</option>
                      <option value="2000+">2,000+</option>
                    </select>
                  </div>
                </div>

                {submitError && <div className={styles.errorText} style={{ textAlign: 'center', marginBottom: '8px' }}>{submitError}</div>}
                
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Request Platform Demo'}
                </button>
                <p className={styles.formDisclaimer}>
                  By requesting access, you agree to our terms of service and privacy policy.
                </p>
                
                <div className={styles.securityBadges}>
                  <span><Lock size={14} /> Bank-grade Security</span>
                  <span><Cloud size={14} /> Cloud Backups</span>
                  <span><ShieldCheck size={14} /> Data Privacy Compliant</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
