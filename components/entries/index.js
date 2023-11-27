import styles from './JournalEntry.module.css';

export default function JournalEntry({ title, date, content }) {
    return (
        <>
            <div className={styles.background}>
                <h2 className={styles.types}>{title}</h2>
                <h4 className={styles.date}>{date}</h4>
                <p className={styles.content}>{content}</p>
            </div>
        </>
    );
}