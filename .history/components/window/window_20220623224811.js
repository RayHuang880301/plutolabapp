import React from 'react'
import Image from 'next/image'
import styles from '../window/Window.module.css'
import symbol from '../../assets/symbol.svg'
import substract from '../../assets/substract.svg'
import reactangle from '../../assets/rectangle.svg'
import close from '../../assets/close.svg'

const Window = () => {
  return (
    <div className={styles.window}>
      <div className={styles.topBox}>
        <div className={styles.img}><Image src={substract} width={12} height={12} alt=''/></div>
        <div className={styles.img}><Image src={reactangle} width={12} height={12} alt=''/></div>
        <div className={styles.img}><Image src={close} width={12} height={12} alt=''/></div>
      </div>
      <h1>Welcome to Pluto Mateverse</h1>
    </div>
  )
}

export default Window