import styles from './Footer.module.css'
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.column}>
          <h1 className={styles.title}>About</h1>
          <h3 className={styles.link}>Our Story</h3>
          <h3 className={styles.link}>Meet the team</h3>
          <h3 className={styles.link}>Blog</h3>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Support</h1>
          <h3 className={styles.link}>Crisis Support Resources</h3>
          <h3 className={styles.link}>Terms of Service</h3>
          <h3 className={styles.link}>Privacy Policy</h3>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Contact Us</h1>
          <h3 className={styles.link}>hello@innersight.ca</h3>
        </div>
        <div className={styles.column2}>
          <div className={styles.socials}>
            <Image
              src='/icons/fb.png'
              height={35}
              width={35}
              alt='fb'
            />
            <Image
              src='/icons/insta.png'
              height={35}
              width={35}
              alt='insta'
            />
            <Image
              src='/icons/linked.png'
              height={35}
              width={35}
              alt='linked'
            />
            <Image
              src='/icons/twitter.png'
              height={35}
              width={35}
              alt='linked'
            />
          </div>
        </div>
      </div>
    </>
  );
}
