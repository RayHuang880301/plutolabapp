import React from 'react'
import styles from '../work/Work.module.css'
import pluto from '../../assets/pluto.gif'
import Image from 'next/image'

const Work = () => {
  return (
    <div className={styles.section}>
      <div className={styles.item}>
        <Image src={pluto} width={350} height={350} alt=''/>
      </div>
      <div className={styles.item}>
        <Image src={pluto} width={350} height={350} alt=''/>
      </div>
      <div className={styles.item}>
        <Image src={pluto} width={350} height={350} alt=''/>
      </div>
    </div>
  )
}

export default Work