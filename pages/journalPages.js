import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Journal.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Link from 'next/link';
import { useState } from 'react';
import PasswordOverlay from '../components/passwordOverlay';

export default function JournalPage() {
  const [activeTab, setActiveTab] = useState('journal');
  const [isPasswordOverlayVisible, setPasswordOverlayVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleJournalClick = () => {
    // Open the password overlay when a journal entry is clicked
    setPasswordOverlayVisible(true);
  };

  const handleClosePasswordOverlay = () => {
    // Close the password overlay
    setPasswordOverlayVisible(false);
  };

  return (
    <>
      <Head>
        <title>InnerSight</title>
        <meta name="description" content="Innersight" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500&display=swap"
        />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.maincontent}>
          <h1 className={styles.header}>All Journals</h1>
          <div className={styles.toggle}>
            <Link href="journalPages" className={styles.togglelink}>
              <h3
                className={`${styles.page} ${activeTab === 'journal' ? styles.active : ''}`}
                onClick={() => handleTabClick('journal')}
              >
                Journal
              </h3>
            </Link>
            <Link href="entries" className={styles.togglelink}>
              <h3
                className={`${styles.page} ${activeTab === 'entries' ? styles.active : ''}`}
                onClick={() => handleTabClick('entries')}
              >
                Entries
              </h3>
            </Link>
          </div>
          <hr />
          <div className={styles.journalcontent}>
            <div className={styles.columns} onClick={handleJournalClick}>
              <Image src="/journalCovers/green.png" height={260} width={200} alt="green" />
              <h2 className={styles.subheaders}>My Emotions</h2>
              <p className={styles.description}>Getting Ahold of my emotions</p>
            </div>
            <div className={styles.columns} onClick={handleJournalClick}>
              <Image src="/journalCovers/orange.png" height={260} width={200} alt="orange" />
              <h2 className={styles.subheaders}>All my vents</h2>
              <p className={styles.description}>Need someone to talk to</p>
            </div>
            <div className={styles.columns} onClick={handleJournalClick}>
              <Image src="/journalCovers/blue.png" height={260} width={200} alt="blue" />
              <h2 className={styles.subheaders}>Work Life</h2>
              <p className={styles.description}>All the pains and pluses of my job</p>
            </div>
          </div>
          <div className={styles.journalcontent}>
            <div className={styles.columns} onClick={handleJournalClick}>
              <Image src="/journalCovers/green.png" height={260} width={200} alt="green" />
              <h2 className={styles.subheaders}>Doodling</h2>
              <p className={styles.description}>Emotions I can't quite put into words</p>
            </div>
            <div className={styles.columns} onClick={handleJournalClick}>
              <Image src="/journalCovers/orange.png" height={260} width={200} alt="orange" />
              <h2 className={styles.subheaders}>All Thoughts</h2>
              <p className={styles.description}>All of my thoughts, good and bad</p>
            </div>
            <div className={styles.columns} onClick={handleJournalClick}>
              <Image src="/journalCovers/blue.png" height={260} width={200} alt="blue" />
              <h2 className={styles.subheaders}>My Secrets</h2>
              <p className={styles.description}>For my eyes only</p>
            </div>
          </div>
        </div>
        {isPasswordOverlayVisible && (
          <PasswordOverlay title="Journal Entry Password" onClose={handleClosePasswordOverlay} />
        )}
      </main>
      <Footer />
    </>
  );
}
