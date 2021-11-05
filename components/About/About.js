import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
        <div className={styles.imgbox}>
            <img src='/images/beauty.jpg' width='200' height='200' alt=''/>
        </div>

        <div className={styles.text}>
            <div>
                <p className={styles.heading}>About Me</p>
                <div className={styles.images}>
                <div className={styles.dots}></div>
                <div className={styles.line}></div>
                <div className={styles.dots}></div>
               
                </div>
            </div>
            <p>
            I transform ideas into beautiful, functional and responsive websites and web applications, I am sure you would absolutely love!
            I transform ideas into beautiful, functional and responsive websites and web applications, I am sure you would absolutely love!
            I transform ideas into beautiful, functional and responsive websites and web applications, I am sure you would absolutely love!
            I transform ideas into beautiful, functional and responsive websites and web applications, I am sure you would absolutely love!
           
            </p>
        </div>
        </div>
    )
}

export default About
