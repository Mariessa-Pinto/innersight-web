import { useState } from 'react';
import styles from './SelfCare.module.css';
import Image from 'next/image';
import SleepingPop from '../recPopups/sleepingPop';

export default function SelfCare() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className={styles.activity} onClick={openPopup}>
        <Image src='/mascots/sleeping.png' height={121} width={256} alt='care' />
        <h3 className={styles.title2}>Sleep Early</h3>
        <p className={styles.paragraph}>Prioritizing early and sufficient sleep is a fundamental pillar of mental health.</p>
        {isPopupOpen && <SleepingPop onClose={closePopup} />}
      </div>
    </>
  );
}