// SelfCarePopup.js

import React from 'react';
import styles from './SelfCarePop.module.css';
import Lottie from 'lottie-react';
import animationData from './yoga-frog.json';
import Button from '../buttons';
import Link from 'next/link';

export default function SelfCarePopup({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <div className={styles.closeButton} onClick={onClose}>
          X
        </div>
        <h1 className={styles.header}>Practice Self-Care</h1>
    
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '600px', height: '400px',  margin: '0', padding: '0' }}
        />
                    <div className={styles.description}>
                <p className={styles.paragraph}>Elevate your well-being with deliberate acts of self-care. Begin by creating small moments 
                in your day—sip herbal tea, bask in sunlight, or relish a quiet pause. </p>

                <p className={styles.paragraph}>Unplug from screens periodically, indulge in a favourite hobby, and prioritize quality sleep. Nourish your body with wholesome foods, and exercise when you can.
                     Cultivate mindfulness, embrace solitude, and surround yourself with positive influences. Remember, 
                     self-care isn't a luxury but a vital investment in your overall happiness and resilience.</p>

                     <p className={styles.paragraph}>Take it one step at a time. You can do it! </p>
                     </div>
       <Link href="/insights" className={styles.linkbutton}>
        <Button buttonText="Go To Insights" onClick={onClose} />
        </Link>
      </div>
    </div>
  );
}
