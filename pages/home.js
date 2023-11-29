import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import DoughnutChart from '../components/doughnutChart'
import Hobbies from '../components/recommendations/hobbies'
import SelfCare from '../components/recommendations/selfCare'
import Sleeping from '../components/recommendations/sleeping'

export default function HomePage() {
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
        <Header />
        <div className={styles.top}>
          <div className={styles.leftcontent}>
            <h1 className={styles.title}>Good Afternoon, John!</h1>
            <h4 className={styles.subheader}>Your week so far</h4>
            <DoughnutChart />
          </div>
          <div className={styles.rightcontent}>
            <p className={styles.description}>This week, you felt most content. We identified 3 journal entries where you mentioned you felt this way. Way to go! </p>
            <p className={styles.description}>Here’s an overview of what affected your moods:</p>
            <div className={styles.mood}>
              <div className={styles.background}>
                <h2 className={styles.types}>Mood Boosters</h2>
                <p className={styles.boosters}>hanging out with friends</p>
                <p className={styles.boosters}>Working out</p>
                <p className={styles.boosters}>Sleeping Early</p>
              </div>
              <div className={styles.background}>
                <h2 className={styles.types}>Mood Downers</h2>
                <p className={styles.boosters}>Too much homework</p>
                <p className={styles.boosters}>Waking up early</p>
                <p className={styles.boosters}>Fight with a friend</p>
              </div>
            </div>
            <Link href='insights' className={styles.link}>
              <h4>View AI Insights</h4>
              <Image
                src='/icons/arrow2.png'
                width={18}
                height={10}
                alt='arrow'
              />
            </Link>
          </div>
        </div>
        <h3 className={styles.secondheader}>Recommendations</h3>
        <div className={styles.recs}>
          <Sleeping />
          <SelfCare />
          <Hobbies />
        </div>
      </main>
      <Footer />
    </>
  )
}
