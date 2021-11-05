import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
        <div className={styles.linediv}>
         <div className={styles.line}></div>
        <div className={styles.line}></div>
        </div>
        <div className={styles.heading}>
            <div className={styles.links}>Home</div>
            <div className={styles.links}>About</div>
            <div className={styles.links}>Skills</div>
            <div className={styles.links}>Projects</div>
            <div className={styles.links}>Contact Me</div>
        </div>
        </>
    )
}

export default Navbar
