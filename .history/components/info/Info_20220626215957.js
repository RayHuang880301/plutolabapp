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
        <Window top={10} left={5} width={400} height={185}>Welcome to Pluto Mateverse</Window>
        <div className={styles.logo} data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
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