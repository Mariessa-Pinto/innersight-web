import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Insights.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'


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
      </div>
    
  

        <div className={styles.rightcontent}>
        <h2 className={styles.subheader}>Identified Entries</h2>
        <p className={styles.description}>3 entries were identified where you felt content</p>

        <div className={styles.mood}>
          <div className={styles.background}>
            <h2 className={styles.types}>Journal Title</h2>
            <h4 className={styles.date}>October 30, 2023</h4>
            <h4 className={styles.date}>Lorem ipsum dolor sit amet consectetur. 
            Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst.</h4>


          </div>

          <div className={styles.background}>
          <h2 className={styles.types}>Journal Title</h2>
          <h4 className={styles.date}>October 30, 2023</h4>
          <h4 className={styles.date}>Lorem ipsum dolor sit amet consectetur. 
            Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst.</h4>
      

          </div>

          <div className={styles.background}>
          <h2 className={styles.types}>Journal Title</h2>
          <h4 className={styles.date}>October 30, 2023</h4>
          <h4 className={styles.date}>Lorem ipsum dolor sit amet consectetur. 
            Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst.</h4>
      

          </div>


        </div>
      

        </div>
     

        </div>
  

        <h3 className={styles.secondheader}>Reccommendations</h3>
        <h4 className={styles.info}>Have a look at some recommendations that we suggest to keep up the emotion. </h4>
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
