import React from 'react'
import Image from 'next/image'
import styles from '../window/Window.module.css'
import symbol from '../../assets/symbol.svg'
import substract from '../../assets/substract.svg'
import reactangle from '../../assets/rectangle.svg'
import close from '../../assets/close.svg'

const Window = (props) => {
  const { top, left } = props
  return (
    <div className={{position: absolute,
      textAlign: start,
      width: 400+'px',
      height: 185+'px',
      top: 50+'px',
      left: 50+'px',
      background: '#E2E2E2',
      border: "1+'px', solid, '#000000'"}}>
      <div className={styles.topBox}>
        <div className={styles.img}><Image src={substract} width={14} height={14} alt=''/></div>
        <div className={styles.img}><Image src={reactangle} width={14} height={14} alt=''/></div>
        <div className={styles.img}><Image src={close} width={14} height={14} alt=''/></div>
      </div>
      <h1>Welcome to Pluto Mateverse</h1>
    </div>
  )
}

export default Window