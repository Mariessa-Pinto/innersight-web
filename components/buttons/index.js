import styles from './Buttons.module.css'

export default function Button({buttonText}) {


    return (
        <>
        <button className={styles.button}>
       <h4 className={styles.buttontext}>{buttonText}</h4>
        </button>
        </>
    )
}