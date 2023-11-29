import { useState } from 'react';
import styles from './SelfCare.module.css';
import Image from 'next/image';
import HobbiesPopup from '../recPopups/hobbiesPop';

export default function Hobbies() {
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
        <Image src='/mascots/hobbies.png' height={121} width={256} alt='hobby' />
        <h3 className={styles.title2}>Engage in Hobbies</h3>
        <p className={styles.paragraph}>Engaging in hobbies offers many benefits for your overall well-being!</p>
        {isPopupOpen && <HobbiesPopup onClose={closePopup} />}
      </div>
    </>
  );
}
