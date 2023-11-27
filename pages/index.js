import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Button from '../components/buttons'
import LoginForm from '../components/logIn/loginForm'
import { useState, useEffect } from 'react'


export default function Login() {
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
  setIsVisible(true);
}, []);



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
    <div className={styles.leftcontent}>
 
   <LoginForm/>
    
   </div>
    <Image  
        className={`${styles.slideIn} ${isVisible && styles.visible}`}
        src='/backgroundImages/panda.png'
        alt='panda'
        width={720}
        height={970}

            />


    </div>


   






      </main>
        </>
    )
}