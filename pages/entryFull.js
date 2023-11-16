import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/FullScreen.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import { useState } from 'react'
import FullEntry from '../components/fullEntry'




export default function EntryFull() {
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
       
        <FullEntry/>
        </div>


      </main>
      <Footer/>
        </>
    )
}