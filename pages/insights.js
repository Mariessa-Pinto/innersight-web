import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Insights.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import JournalEntry from '../components/entries'
import DoughnutChart from '../components/doughnutChart'
import Sleeping from '../components/recommendations/sleeping'
import SelfCare from '../components/recommendations/selfCare'
import Hobbies from '../components/recommendations/hobbies'



export default function Insights() {
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
     
        <div className={styles.top}>
        <div className={styles.leftcontent}>
        <h1 className={styles.title}>Your Week in Review</h1>
        <DoughnutChart/>
       </div>
     
   
    
  

        <div className={styles.rightcontent}>
        <h2 className={styles.subheader}>Identified Entries</h2>
        <p className={styles.description}>3 entries were identified where you felt content</p>

        <div className={styles.mood}>
    
          <JournalEntry/>
          <JournalEntry/>
          <JournalEntry/>
     

    


        </div>
     
      

        </div>
     

        </div>
  

        <h3 className={styles.secondheader}>Recommendations</h3>
        <h4 className={styles.info}>Have a look at some recommendations that we suggest to keep up the emotion. </h4>
        <div className={styles.recs}>
          <Sleeping/>
          <SelfCare/>
          <Hobbies/>
          
     


        </div>


     

      </main>
 
      <Footer/>
   
    </>
  )
}
