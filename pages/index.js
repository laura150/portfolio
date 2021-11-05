import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import Link from 'next/link'

export default function Home() {
  const [nav, setNav] = useState(false)
  const [show, setShow] = useState(false)
  const handleopen = ()=>{
    setNav(!nav)
  }
  return (
           <>
           {
             show? 
             <div>
             <div className={styles.circles}></div>
             <div className={styles.circless}></div>
             </div>
             :
             <div className={styles.backgroundCircles}>
             <div className={styles.circle1}></div>
             <div className={styles.circle2}></div>
             <div className={styles.circle3}></div>
             <div className={styles.circle4}></div>
             <div className={styles.circle5}></div>
             <div className={styles.circle6}></div>
           </div>
           }
        
        <div className={styles.container}>
         
         <div className={styles.box}>

          <div className={show? styles.navbackgroundactive : styles.navbackground} >
          <div className={styles.clickme} onClick={()=> setShow(!show)}></div>
          <div className={styles.nav} onClick={handleopen}>
            <div className={ styles.navline1 }></div>
            <div className={ styles.navline2 }></div>
            <div className={ styles.navline3 }></div>
          </div>

            <div className={ show? styles.active : styles.inactive}>
            <div className={styles.links}>Home</div>
            <Link href='/about'>
              <div className={styles.links}>About Me</div>
            </Link>
            <div className={styles.links}>Skills</div>
            <div className={styles.links}>Projects</div>
            <div className={styles.links}>Contact Me</div>
        </div>
          </div>
          
            <div className={styles.content}>
           <div>
              <h2 className={styles.intro}>Hello, i'm <br/> <span className={styles.name}>Laura Eguda</span> <br></br> I am a Frontend Developer.</h2>
              <div className={styles.line}></div>
              <p className={styles.text}>I transform ideas into beautiful, functional and responsive<br/> websites and web applications, I am sure you would absolutely love!</p>
              <button className={styles.button}>More about me</button>
              <button className={styles.button}>Portfolio</button>
            </div>

            <div className={styles.imgbox}>
                <img src='/images/beauty2.jpg' width='300' height='300' />
            </div>
          </div>
        
          
          </div> 
        </div>
     </> 
  )
}
