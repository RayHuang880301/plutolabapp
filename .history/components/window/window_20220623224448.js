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
      <div><Image src={substract} width={15} height={15} alt=''/></div>
      <div><Image src={reactangle} width={15} height={15} alt=''/></div>
      <div><Image src={close} width={15} height={15} alt=''/></div>
      </div>
      <h1>Welcome to Pluto Mateverse</h1>
    </div>
  )
}

export default Window