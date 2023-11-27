import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Entries.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import { useState } from 'react'
import AllEntries from '../components/allEntries'

import Tags from '../components/tags/allTags'


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
          <div className={styles.tagcontent}>
               <Tags
                 TagText="Venting"
                 />
                  <Tags
                 TagText="Happiness"
                 />

                 <Tags
                 TagText="Excitement"
                 /> 
                  <Tags
                 TagText="Sad"
                 />
                  <Tags
                 TagText="Stressed"
                 />
                  <Tags
                 TagText="Surprised"
                 />
                

          </div>
          <div className={styles.journalcontent}>
          <AllEntries
                title="stressed"
                date="October 30, 2023"
                content="Today has been one of those days where the weight of the world seemed to settle on my shoulders. From the moment the alarm clock rudely interrupted my dreams, there was a sense of urgency in the air,"
               
            />
            <AllEntries
                  title="Lost in a Book"
                  date="November 5, 2023"
                  content="Dived into the pages of a captivating novel today. Time slipped away as the characters came to life, and the real world faded into the background. The power of storytelling is incredible — it has the ability to transport us to different realms and ignite the imagination."
                 
              />
          <AllEntries
                title="Unexpected Connections"
                date="November 10, 2023"
                content="Met a stranger today who felt like an old friend. Shared laughter, stories, and a cup of coffee. It's remarkable how, in the vast tapestry of life, we sometimes stumble upon threads that connect us in unexpected and beautiful ways."
               
            />
          
          </div>
          <div className={styles.journalcontent}>
          <AllEntries
              title="Dancing in the Rain"
              date="November 15, 2023"
              content="Embraced the childlike joy of dancing in the rain today. The rhythmic patter of droplets on leaves, the cool touch of water on skin — a reminder that sometimes, the most delightful moments come when we cast aside reservations and simply let ourselves be free."
              
          />
            <AllEntries
                  title="A Day of Productivity"
                  date="November 20, 2023"
                  content="Seized the day with a burst of productivity. Checked off tasks, accomplished goals, and felt the sweet satisfaction of a well-spent day. There's a certain magic in the momentum of productivity that propels us forward."
              
              />
            <AllEntries
                  title="Starry Night Reflections"
                  date="November 25, 2023"
                  content="Under a canvas of stars, I found myself lost in contemplation. The vastness of the universe above, the twinkling constellations — a humbling reminder of our place in the grand design. Sometimes, staring into the cosmos is the best form of meditation."
                 
              />
          
          </div>
          <div className={styles.journalcontent}>
          <AllEntries
                title="Lessons from Nature"
                date="November 28, 2023"
                content="Nature spoke to me today. Each leaf, every rustle of the wind carried a lesson. The cycle of growth, the resilience of a flower — profound wisdom hidden in the simplicity of the natural world. Grateful for the silent teachings of Mother Earth."
               
            />
           <AllEntries
                  title="Nostalgic Moments"
                  date="December 3, 2023"
                  content="Rediscovered old photographs today. Each image a portal to the past, a treasury of memories. Nostalgia, sweet and bittersweet, filled the room as I reminisced about moments that shaped who I am today."
               
              />
             <AllEntries
                  title="Embracing Imperfections"
                  date="December 8, 2023"
                  content="Today was a celebration of imperfections. Embraced flaws, both mine and others', as beautiful quirks that add character to life's canvas. In the midst of chaos, there's a certain charm in the imperfect, a reminder that perfection is an illusion worth letting go of."
                
              />
          
          </div>

            </div>
        
        </main>
        <Footer/>
        
        </>
    )
}