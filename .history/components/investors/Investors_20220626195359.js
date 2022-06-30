import React from 'react'
import styles from '../investors/Investors.module.css'
import Window from '../Window/Window'
import sv from '../../assets/streetVoice.jpeg'
import svLogo from '../../assets/svLogo.svg'
import aceLogo from '../../assets/aceLogo.svg'
import Image from 'next/image'
import plutoLabLogo from '../../assets/plutoLabLogo.png'

const Investors = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Investors</h1>
        </div>
        <div className={styles.windowBox}>
          <Window top="50px" left="50px" width="400px" height="185px"><Image src={svLogo} alt=''/></Window>
        </div>
        <div className={styles.bottomCard}>
          <div className={styles.hr}></div>
          <Image src={plutoLabLogo} width={120} height={80} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Investors