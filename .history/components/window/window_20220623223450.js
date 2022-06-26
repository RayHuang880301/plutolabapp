import React from 'react'
import Image from 'next/image'
import styles from './window.module.css'

const Window = () => {
  return (
    <div className={styles.topCard}>
      <div className={styles.topBox}>
        <Image src={symbol} width={95} height={15} alt=''/>
      </div>
      <h1>Welcome to Pluto Mateverse</h1>
    </div>
  )
}

export default Window