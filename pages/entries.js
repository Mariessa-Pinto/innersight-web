import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Entries.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import { useState } from 'react'
import AllEntries from '../components/allEntries'


export default function Entries() {
    const [activeTab, setActiveTab] = useState('journal');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
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
            <Header/>
            <div className={styles.maincontent}>
            <h1 className={styles.header}>All Journal Entries</h1>
          <div className={styles.toggle}>
            <Link href="journalPages"  className={styles.togglelink}>
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
          <hr></hr>
          <div className={styles.journalcontent}>
            <AllEntries/>
            <AllEntries/>
            <AllEntries/>
          
          </div>
          <div className={styles.journalcontent}>
            <AllEntries/>
            <AllEntries/>
            <AllEntries/>
          
          </div>
          <div className={styles.journalcontent}>
            <AllEntries/>
            <AllEntries/>
            <AllEntries/>
          
          </div>

            </div>
        </main>
        <Footer/>
        
        </>
    )
}