import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Journal.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'


export default function journalPage() {



    return (

         <>
        <Head>
        <title>InnerSight</title>
        <meta name="description" content="Innersight" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500&display=swap" />

      </Head>
     
        <main className={styles.main}>
        <Header/>
        <div className={styles.maincontent}>
        <h1 className={styles.header}>All Journals</h1>
        <hr></hr>

        <div className={styles.journalcontent}>
        

        <div className={styles.columns}>
            <Image
            src='/journalCovers/green.png'
            height={260}
            width={200}
            alt='green'
            />

            <h2 className={styles.subheaders}>My Emotions</h2>
            <p className={styles.description}>Short description of 
            journal that user puts in beginning when they create journal.</p>

        </div>


        <div className={styles.columns}>
            <Image
            src='/journalCovers/orange.png'
            height={260}
            width={200}
            alt='orange'
            />

            <h2 className={styles.subheaders}>All my vents</h2>
            <p className={styles.description}>Short description of 
            journal that user puts in beginning when they create journal.</p>

        </div>


        <div className={styles.columns}>
            <Image
            src='/journalCovers/blue.png'
            height={260}
            width={200}
            alt='blue'
            />

            <h2 className={styles.subheaders}>Work Life</h2>
            <p className={styles.description}>Short description of 
            journal that user puts in beginning when they create journal.</p>

        </div>



        </div>


        <div className={styles.journalcontent}>
        

        <div className={styles.columns}>
            <Image
            src='/journalCovers/green.png'
            height={260}
            width={200}
            alt='green'
            />

            <h2 className={styles.subheaders}>Doodling</h2>
            <p className={styles.description}>Short description of 
            journal that user puts in beginning when they create journal.</p>

        </div>


        <div className={styles.columns}>
            <Image
            src='/journalCovers/orange.png'
            height={260}
            width={200}
            alt='orange'
            />

            <h2 className={styles.subheaders}>All Thoughts</h2>
            <p className={styles.description}>Short description of 
            journal that user puts in beginning when they create journal.</p>

        </div>


        <div className={styles.columns}>
            <Image
            src='/journalCovers/blue.png'
            height={260}
            width={200}
            alt='blue'
            />

            <h2 className={styles.subheaders}>My Secrets</h2>
            <p className={styles.description}>Short description of 
            journal that user puts in beginning when they create journal.</p>

        </div>



        </div>


        </div>

        </main>

        <Footer/>
        </>
    )
}