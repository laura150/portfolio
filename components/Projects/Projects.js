import React, { useState } from 'react'
import styles from './Projects.module.css'

const Projects = () => {
  const [payloads, setpayloads] = useState([
      { 
          'id': 1,
          'file': '/images/linkedinblock.svg',
          'name': 'Linkedin-clone',
          'features': 'User Authentication, authenticated Routes, Multiple Page layout, Redux for state management',
          'featureTwo': 'Authenticated Routes',
          'git': ''
          
      },

      { 
          'id': 2,
          'file': '/images/ecommerceblock.jpg',
          'name': 'Ecommerce website and web application',
          'features': 'syx',
          'site':'',
          'git': ''
          
      }
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <div className={styles.container}>
            {
                payloads.map((payload)=>(
                    <>
                    <div className={styles.imgbox}>
                        <img src={payload.file} className={styles.image}/>
                    </div>
                    <div>{payload.name}</div>
                    <div>{payload.features}</div>
                    </>
                ))
            }
           
        </div>
    )
}

export default Projects
