import styles from './AiPopup.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function AiPopup({ onClose }) {

  const [isPopupOpen, setPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setPopupOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isPopupOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.main}>
              <h1 className={styles.title}>Insights</h1>
              <div className={styles.content}>
                <Image src='/mascots/panda.png' height={165} width={172} alt='panda' />
                <div className={styles.describer}>
                  <p className={styles.writing}>
                    From this journal entry, it looks like you were feeling rather negative. You indicated that you felt irritated, angry, and upset about all of the different kinds of work that you had to complete over the long weekend.
                  </p>
                  <p className={styles.writing}>These emotions made up 20 percent of this journal entry overall.</p>
                </div>
              </div>
              <button className={styles.AiButton} onClick={handleClosePopup}>
                <h4 className={styles.name}>Back to entry</h4>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
