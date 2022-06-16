import React from 'react'
import styles from '../investors/Investors.module.css'
import sv from '../../assets/streetVoice.jpeg'
import svLogo from '../../assets/svLogo.svg'
import aceLogo from '../../assets/aceLogo.svg'
import Image from 'next/image'
import plutoLabLogo from '../../assets/plutoLabLogo.png'

const Investors = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>Investors</h1>
        <div className={styles.itemBox}>
          <div className={styles.item}>
            <Image src={svLogo} width={200} height={200} alt=''/>
          </div>
          <div className={styles.item}>
            <Image src={aceLogo} width={200} height={200} alt=''/>
          </div>
        </div>
        <Image src={plutoLabLogo} width={200} height={200} alt=''/>
      </div>
    </div>
  )
}

export default Investors