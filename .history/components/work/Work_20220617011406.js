import React from 'react'
import styles from '../work/Work.module.css'
import pluto from '../../assets/pluto.gif'
import Image from 'next/image'

const Work = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={pluto} width={300} height={300} alt=''/>
        </div>
        <div className={styles.item}>
          <Image src={pluto} width={300} height={300} alt=''/>
        </div>
        <div className={styles.item}>
          <Image src={pluto} width={300} height={300} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Work