import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../window/Window.module.css'
import symbol from '../../assets/symbol.svg'
import substract from '../../assets/substract.svg'
import reactangle from '../../assets/rectangle.svg'
import close from '../../assets/close.svg'

const Window = (props) => {
  const { top, left, width, height, content} = props

  return (
    <div className={styles.window}>
      <div className={styles.topBox}>
        <div className={styles.img}><Image src={substract} width={14} height={14} alt=''/></div>
        <div className={styles.img}><Image src={reactangle} width={14} height={14} alt=''/></div>
        <div className={styles.img}><Image src={close} width={14} height={14} alt=''/></div>
      </div>
      <h1>{text}</h1>
    </div>
  )
}

export default Window