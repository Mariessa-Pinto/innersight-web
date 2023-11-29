import styles from './Prompts.module.css'

export default function Prompts() {
    return (
        <>
        <div className={styles.background}>
            <h1 className={styles.title}>Prompt of the day</h1>
            <p className={styles.prompt}> What is one positive change you can make in your daily routine that would contribute to a more fulfilling and balanced life?</p>
        </div>
        </>
    )
}