import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import DoughnutChart from '../components/doughnutChart'


export default function Home() {
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
        <h1 className={styles.title}>Good Afternoon, John!</h1>
        <h4 className={styles.subheader}>Your week so far</h4>
        <DoughnutChart/>

        </div>

        <div className={styles.rightcontent}>
        <p className={styles.description}>This week, you felt most content. We identified 3 journal entries where you mentioned you felt this way. Way to go! </p>
        <p className={styles.description}>Here’s an overview of what affected your moods:</p>

        <div className={styles.mood}>
          <div className={styles.background}>
            <h2 className={styles.types}>Mood Boosters</h2>

          </div>

          <div className={styles.background}>
            <h2 className={styles.types}>Mood Downers</h2>

          </div>


        </div>
      

        </div>
     

        </div>

        <h3 className={styles.secondheader}>Reccommendations</h3>
        <div className={styles.recs}>
          <div className={styles.activity}>
            <Image
            src='/mascots/sleeping.png'
            height={121}
            width={256}
            alt='sleeping'

            />

            <h3 className={styles.title2}>Sleeping Early</h3>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur. Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst. Lorem ipsum dolor sit amet. </p>


          </div>

          <div className={styles.activity}>

          <Image
            src='/mascots/selfcare.png'
            height={121}
            width={256}
            alt='care'

            />
         <h3 className={styles.title2}>Self Care</h3>
         <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur. Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst. Lorem ipsum dolor sit amet. </p>

          </div>


          <div className={styles.activity}>

          <Image
            src='/mascots/hobbies.png'
            height={121}
            width={256}
            alt='hobbies'

            />
            <h3 className={styles.title2}>Engage in Hobbies</h3>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur. Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst. Lorem ipsum dolor sit amet. </p>


          </div>

        </div>


     

      </main>
 
      <Footer/>
   
    </>
  )
}
