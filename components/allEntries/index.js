import styles from './AllEntries.module.css'
import Link from 'next/link'




export default function AllEntries() {



    return (
        <>
     <Link href ='/entryFull' className={styles.link}>
        <div className={styles.background}>
     
            <h2 className={styles.types}>Journal Title</h2>
            <h4 className={styles.date}>October 30, 2023</h4>
            <h4 className={styles.date}>Lorem ipsum dolor sit amet consectetur. 
            Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst.</h4>
          

          </div>
        </Link>
        
        </>
    )
}