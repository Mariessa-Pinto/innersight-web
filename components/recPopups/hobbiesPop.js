

import React from 'react';
import styles from './HobbiePop.module.css';
import Lottie from 'lottie-react';
import animationData from './sloth-hobbies.json';
import Button from '../buttons';
import Link from 'next/link';

export default function HobbiesPopup({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <div className={styles.closeButton} onClick={onClose}>
          X
        </div>
        <h1 className={styles.header}>Engage in Hobbies</h1>
    
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '600px', height: '400px',  margin: '0', padding: '0' }}
        />
                    <div className={styles.description}>
                <p className={styles.paragraph}>Engaging in hobbies offers many benefits for your overall well-being!</p>

                <p className={styles.paragraph}>It provides a constructive escape from daily stressors, allowing you to immerse yourself in activities that bring joy and fulfillment. Hobbies can be a powerful source of relaxation, helping to reduce anxiety and improve mental health. They also foster creativity, build a sense of accomplishment, and contribute to a balanced lifestyle. Whether it's a solo pursuit or a shared interest with others, hobbies enrich your life, 
                offering a valuable respite from the demands of everyday routine.</p>

                  <p className={styles.paragraph}>If you find yourself without a hobby, consider it an invitation to explore uncharted passions. Hobbies not only provide a delightful escape but also cultivate a sense of purpose, adding depth and richness to the tapestry of daily life.</p>
                     </div>
       <Link href="/insights" className={styles.linkbutton}>
        <Button buttonText="Go To Insights" onClick={onClose} />
        </Link>
      </div>
    </div>
  );
}
