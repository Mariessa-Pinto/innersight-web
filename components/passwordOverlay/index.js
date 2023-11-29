import { useState } from 'react';
import styles from './PasswordOverlay.module.css';
import Image from 'next/image';
import Button from '../buttons';

export default function PasswordOverlay({ title, onClose }) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopup = () => {
    setIsPopupOpen(false);
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <>
      {isPopupOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.closeButton} onClick={onClose}>
              X
            </div>
            <h2 className={styles.types}>{title}</h2>
            <p>This journal is password protected. Please enter the password associated to continue.</p>
            <div className={styles.journalsection}>
              <Image src='/journalCovers/orange.png' height={196} width={150} alt='journal' className={styles.pic} />
            </div>
            <div className={styles.bottom}>
              <h2 className={styles.secondtitle}>Password</h2>
              <label className={styles.label}>
                Password:
                <input className={styles.inputbox} type="password" />
              </label>
            </div>
            <div className={styles.last}>
              <Button buttonText="Unlock Journal" onClick={closePopup} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
