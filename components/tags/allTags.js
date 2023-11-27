
import styles from './Tags.module.css'


export default function Tags({TagText}) {



    return (

        <>
    
        <div className={styles.tag}>
          
            <h4 className={styles.tagtext}>{TagText}</h4>
        

        </div>
        </>
    )
}