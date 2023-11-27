import styles from './FullEntry.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tags from '../tags/allTags';
import AiPopup from '../aiPopup/AiPopup';
import Prompts from '../prompts';
import Button from '../buttons';

export default function FullEntry() {
  const [isAiPopupVisible, setAiPopupVisible] = useState(false);

  // Function to open the AI insights pop-up
  const handleOpenAiPopup = () => {
    setAiPopupVisible(true);
  };

  // Function to close the AI insights pop-up
  const handleCloseAiPopup = () => {
    setAiPopupVisible(false);
  };

  return (
    <>
      <div className={styles.main}>
        <Link href='entries' className={styles.link}>
          <Image src='/icons/arrow.png' width={18} height={10} alt='arrow' />
          <h4 className={styles.back}>Back to entries</h4>
        </Link>

        <h1 className={styles.header}>Stressed</h1>
        <h4 className={styles.date}>October 30, 2023</h4>
        <div className={styles.tagcontent}>
          <label className={styles.label}>Tags:</label>
          <Tags TagText="stress" />
          <Tags TagText="Confusing" />
          <Tags TagText="Venting" />

          {/* Button to open AI insights pop-up */}
          <button className={styles.AiButton} onClick={handleOpenAiPopup}>
           <h4 className={styles.buttontext}> View AI insights</h4>
          </button>

          <Button buttonText="Download Insights" />
        </div>

        {isAiPopupVisible && <AiPopup onClose={handleCloseAiPopup} />}
            
         

            </div>
            <Prompts/>
            <div className={styles.entry}>
                <p className={styles.writing}>Today has been one of those days where the weight of the world seemed to settle on my shoulders. From the moment the alarm clock rudely interrupted my dreams, there was a sense of urgency in the air, a feeling that time was slipping through my fingers faster than I could grasp..</p>

                <p className={styles.writing}>Work unfolded in a whirlwind of deadlines and emails. The to-do list seemed to multiply with each passing hour, and the constant hum of activity left me feeling a bit breathless. It's funny how, on some days, the simplest tasks can transform into towering mountains..</p>

                <p className={styles.writing}>The coffee that usually brings me comfort felt more like a lifeline today. Each sip carried with it a brief respite, a moment of solace in the midst of the chaos. The stack of papers on my desk, however, remained a looming reminder of tasks yet to be conquered.</p>

            </div>


        </>
        
       
    )
}