import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import Link from 'next/link'
import Header from '../components/header'

export default function Login() {



    return (
        <>
        <Head>
        <title>InnerSight</title>
        <meta name="description" content="Innersight" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500&display=swap" />

      </Head>


      <Header/>

      <main className={styles.main}>
   

        <div className={styles.maincontent}>
        
        <div className={styles.leftcontent}>
            <h1 className={styles.header}>Log In</h1>

        </div>

        <div className={styles.rightcontent}>

            <Image
                     src='/backgroundImages/panda.png'
                     alt='panda'
                     height={1000}
                     width={740}

            />


        </div>


        </div>






      </main>
        </>
    )
}