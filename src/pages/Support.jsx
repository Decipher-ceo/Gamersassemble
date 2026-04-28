import React, { useState } from 'react';
import styles from './Support.module.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    isAnonymous: false,
    amount: '',
    project: 'robocommando',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your support! This is a simulation.');
  };

  return (
    <div className={styles.container}>
      <h1 className={`${styles.mainTitle} title-glow`}>SUPPORT OUR UNIVERSE</h1>
      
      <div className={styles.inactiveNotice}>
        <h2>Campaign status: Inactive.</h2>
        <p>Sorry but this Campaign is presently unavailable at the moment.</p>
      </div>
      
      <div className={styles.supportContent}>
        <div className={styles.formSection}>
          <h2>Fund Raising Campaign</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <fieldset disabled className={styles.disabledFieldset}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder={formData.isAnonymous ? "Displaying as Anonymous" : "Your Name"}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={formData.isAnonymous}
                required={!formData.isAnonymous}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                id="anon"
                checked={formData.isAnonymous}
                onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
              />
              <label htmlFor="anon">Post as Anonymous</label>
            </div>

            <div className={styles.inputGroup}>
              <label>Select Project</label>
              <select 
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
              >
                <option value="sneaky-snake">SNEAKY SNAKE</option>
                <option value="robocommando">ROBOCOMMANDO</option>
                <option value="techno-sorcery">TECHNO SORCERY</option>
                <option value="h2o">H2O</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Amount (USD)</label>
              <input 
                type="number" 
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Message of Encouragement</label>
              <textarea 
                placeholder="Write something nice..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled>Campaign Inactive</button>
            </fieldset>
          </form>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.goalInfo}>
            <span>Campaign Goal: 0.00</span>
            <span>Raised: 0.00</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{width: '25%'}}></div>
          </div>
          <div className={styles.protocols}>
            <h3>Our Protocols</h3>
            <ul>
              <li>🔒 Secure Encryption</li>
              <li>⚡ Instant Confirmation</li>
              <li>📅 Monthly Progress Reports</li>
              <li>🏆 Name in Game Credits (Optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
