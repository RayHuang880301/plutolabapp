import React from 'react'
import styles from '../investors/Investors.module.css'
import sv from '../../assets/streetVoice.jpeg'
import Image from 'next/image'

const Investors = () => {
  return (
    <div className={styles.section}>
      <h1>Investors</h1>
      <div className={styles.itemBox}>
        <div className={styles.item}>
          <Image src={sv} width={200} height={200} alt=''/>
        </div>
        <div className={styles.item}>
          <Image src={sv} width={200} height={200} alt=''/>
        </div>
        <div className={styles.item}>
          <Image src={sv} width={200} height={200} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Investors