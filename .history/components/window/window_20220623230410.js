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
    <div className="position: absolute;
    text-align: start;
    width: 400px;
    height: 185px;
    top: 50px;
    left: 50px;
    background: #E2E2E2;
    border: 1px solid #000000;">
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