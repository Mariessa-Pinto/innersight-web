import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default function Header() {



    return (
        <>

        <div className={styles.main}>
        
        <div className={styles.logo}>
        <Image
         src='/icons/logo.png'
         height={45}
         width={160}
         alt='logo'

        />

        </div>


        <div className={styles.links}>
        <Link href="/">
        <h3 className={styles.page}>Home</h3>
        </Link>

        <Link href="journalPage">
        <h3 className={styles.page}>Journal</h3>
        </Link>


        <Link href="insights">
        <h3 className={styles.page}>Insights</h3>
        </Link>

        



        </div>

        



        </div>
        
        
        
        </>
    )
}