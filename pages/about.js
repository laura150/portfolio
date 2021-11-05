import React from 'react'
import About from '../components/About/About'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import styles from '../styles/about.module.css'

const Aboutpage = () => {
    return (
        <div className={styles.all}>
           <Navbar/>
           <About/>
           <Skills/>
           <Projects/>
        </div>
    )
}

export default Aboutpage
