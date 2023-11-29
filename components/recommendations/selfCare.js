import { useState } from 'react';
import styles from './SelfCare.module.css';
import Image from 'next/image';
import SelfCarePopup from '../recPopups/selfcarePop';

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
        <Image src='/mascots/selfcare.png' height={121} width={256} alt='care' />
        <h3 className={styles.title2}>Self Care</h3>
        <p className={styles.paragraph}>Elevate your well-being with deliberate acts of self-care. Begin by creating small moments in your day—sip herbal tea,
          bask in sunlight, or relish a quiet pause.</p>
        {isPopupOpen && <SelfCarePopup onClose={closePopup} />}
      </div>
    </>
  );
}
