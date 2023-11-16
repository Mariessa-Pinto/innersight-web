import styles from './FullEntry.module.css'
import Button from '../buttons'
import Prompts from '../prompts'
import Image from 'next/image'
import Link from 'next/link'



export default function FullEntry() {



    return (
        <>
        <div className={styles.main}>
            
            <Link href='entries' className={styles.link}>
            <Image
            src= '/icons/arrow.png'
            width={18}
            height={10}
            alt='arrow'
            
            />
            <h4 className={styles.back}>Back to entries</h4>
            </Link>
           
            <h1 className={styles.header}>Example Title</h1>
            <h4 className={styles.date}>October 30, 2023</h4>
            <div className={styles.tagcontent}>
                
                
             
                <Button buttonText="View AI insights" /> 
                <Button buttonText="Download Insights" /> 
            
         

            </div>
            <Prompts/>
            <div className={styles.entry}>
                <p className={styles.writing}>Lorem ipsum dolor sit amet consectetur. Felis luctus amet condimentum nulla eu. Vel diam metus amet dictumst. Id enim etiam venenatis suspendisse nec bibendum semper eu. 
                Et enim tincidunt quam gravida orci tempus lacus.</p>

                <p className={styles.writing}>Nisi lorem arcu montes metus morbi. Urna arcu pulvinar nisi metus ultrices ut pulvinar non gravida. In volutpat sit felis eu. Cursus consectetur ipsum quis sit id. Purus facilisis erat in et. Dictumst at vel et nam vulputate. Malesuada tellus vitae nisi a pretium tortor vitae. Est felis risus nisi felis cursus. 
                Bibendum odio volutpat morbi et nec consequat nibh molestie.</p>

                <p className={styles.writing}>Habitasse et vel sollicitudin facilisi nibh id feugiat et. Sed varius ut adipiscing a tortor massa quis sit. Tellus porta malesuada cum volutpat malesuada massa purus vestibulum sit. Pharetra fringilla vestibulum augue nunc enim convallis ridiculus sed nec. Volutpat donec nascetur condimentum in egestas aliquam orci nibh. Suspendisse bibendum magna ornare tortor fames quis. Etiam aenean accumsan adipiscing sit non dignissim. Enim pulvinar urna hendrerit parturient. Scelerisque laoreet sit cras vitae. Tellus dolor volutpat tortor sed tempor consectetur neque. 
                Risus elit lacus condimentum aliquet bibendum enim dolor ipsum. Varius elementum consequat aliquam gravida massa praesent sed sapien. In velit elementum pellentesque massa erat ut nullam eu. Molestie ac ante felis id netus vestibulum elit.</p>

            </div>


        </div>
        
        </>
    )
}