

import React from 'react';
import styles from './SleepingPop.module.css';
import Lottie from 'lottie-react';
import animationData from './otter-sleeping.json';
import Button from '../buttons';
import Link from 'next/link';

export default function SleepingPop({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        
      <div className={styles.closeButton} onClick={onClose}>
          X
        </div>
        <h1 className={styles.header}>Sleeping Early</h1>
        <div>
    
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '600px', height: '300px'}}
        />

</div>
                    <div className={styles.description}>
                <p className={styles.paragraph}>Prioritizing early and sufficient sleep is a fundamental pillar of mental health. </p>

                <p className={styles.paragraph}>Adequate sleep supports cognitive function, emotional resilience, and stress management, fostering a positive impact on mood and overall mental well-being. By establishing a consistent sleep routine, you empower your mind to recharge, consolidate memories, and effectively navigate the challenges of each day, contributing to a healthier and more resilient mental state.</p>

                     <p className={styles.paragraph}>Deep, quality sleep is essential for the brain's ability to process emotions and regulate stress hormones. In contrast, chronic sleep deprivation has been associated with increased irritability, heightened stress levels, and a greater susceptibility to anxiety and depression. Embracing the practice of sleeping early is not just a simple routine; it's a proactive investment in your mental and emotional well-being, 
                     providing a solid foundation for a more vibrant and resilient life. </p>
                     </div>
       <Link href="/insights" className={styles.linkbutton}>
        <Button buttonText="Go To Insights" onClick={onClose} />
        </Link>
      </div>
    </div>
  );
}
