import React from 'react'
import plutoLabLogo from '../../assets/plutoLabLogo.png'
import downArrow from '../../assets/downArrow.svg'
import styles from '../info/Info.module.css'
import Image from 'next/image'
import Window from '../Window/Window'

const Info = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cardShadow}>
          <div className={styles.boxShadow}>
          </div>
        </div>
        <Window top="50px" left="50px" width="400px" height="185">Welcome to Pluto Mateverse</Window>
        <div className={styles.logo}>
          <Image src={plutoLabLogo} width={400} height={270} alt=''/>
        </div>
        <div className={styles.bottomCard}>
          <h2>Previous Work</h2>
          <div className={styles.arrow}><Image src={downArrow} width={30} height={30} alt=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Info