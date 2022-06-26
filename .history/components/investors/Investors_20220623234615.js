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
        {/* <Window>{svLogo}</Window> */}
        {/* <hr/> */}
        {/* <div className={styles.bottomCard}>
          
          <Image src={plutoLabLogo} width={120} height={80} alt=''/>
        </div> */}
      </div>
      <div>
        <br/>
        <Image src={plutoLabLogo} width={120} height={80} alt=''/>
      </div>
    </div>
  )
}

export default Investors