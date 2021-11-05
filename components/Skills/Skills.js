import React from 'react'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titlegroup}>
                <h1 className={styles.t}>My Skill Set</h1>

                <div className={styles.imagegroup}>
                    <div className={styles.dot}></div>
                    <div className={styles.line}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
            <div>
                <div className={styles.skills}>
                    <div className={styles.box} >
                        <div className={styles.dot}></div>
                        <p>HTML</p>
                    </div>
                
                    <div  className={styles.box}>
                        <div  className={styles.dot}></div>
                        <p>CSS</p>
                    </div>

                    <div  className={styles.box}>
                        <div  className={styles.dot}></div>
                        <p>JAVASCRIPT</p>
                    </div>
                        
                    <div  className={styles.box}>
                        <div  className={styles.dot}></div>
                        <p>REACT</p>
                    </div>

                    <div  className={styles.box}>
                        <div  className={styles.dot}></div>
                        <p>REDUX</p>
                    </div>

                    <div  className={styles.box}>
                        <div  className={styles.dot}></div>
                        <p>GIT</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Skills
