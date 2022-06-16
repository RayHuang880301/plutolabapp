import React from 'react'
import plutoLabLogo from '../../assets/plutoLabLogo.png'
import downArrow from '../../assets/downArrow.svg'
import styles from '../info/Info.module.css'
import Image from 'next/image'
import symbol from '../../assets/symbol.svg'

const Info = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topCard}>
          <div className={styles.topBox}>
            <Image src={symbol} width={95} height={15} alt=''/>
          </div>
          <h1>Welcome to Pluto Mateverse</h1>
        </div>
        <div className={styles.topCard}>
          <div className={styles.topBox}>
          </div>
        </div>
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