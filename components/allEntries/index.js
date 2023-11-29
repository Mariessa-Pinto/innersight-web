import styles from './AllEntries.module.css';
import Link from 'next/link';

export default function AllEntries({ title, date, content, entryLink }) {
    return (
        <>
            <Link href="/entryFull" className={styles.link}>
                <div className={styles.background}>
                    <h2 className={styles.types}>{title}</h2>
                    <h4 className={styles.date}>{date}</h4>
                    <p className={styles.content}>{content}</p>
                </div>
            </Link>
        </>
    );
}
