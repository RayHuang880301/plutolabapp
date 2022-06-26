import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../window/Window.module.css'
import symbol from '../../assets/symbol.svg'
import substract from '../../assets/substract.svg'
import reactangle from '../../assets/rectangle.svg'
import close from '../../assets/close.svg'

const Window = (props) => {
  const { children, top, left, width, height, content} = props

  // const windowStyle = {
  //   top: `${top}%`,
  //   left: `${left}%`,
  //   width: `${width}px`,
  //   height: `${height}px`
  // };

  // const cardStyle = {
  //   top: `${top+2}%`,
  //   left: `${left+1}%`,
  //   width: `${width}px`,
  //   height: `${height}px`
  // };

  const [windowStyle, setWindowStyle] = useState({
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}px`,
    height: `${height}px`
  })

  const [cardStyle, setCardStyle] = useState({
    top: `${top+2}%`,
    left: `${left+1}%`,
    width: `${width}px`,
    height: `${height}px`
  })

  const popOver = () => {
    top = Math.random() * 55;
    left = Math.random() * 60;
    setWindowStyle({
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}px`,
      height: `${height}px`
    })

    setCardStyle({
      top: `${top+2}%`,
      left: `${left+1}%`,
      width: `${width}px`,
      height: `${height}px`
    })
  }

  return (
    <>
      <div className={styles.cardShadow} style={cardStyle}>
        <div className={styles.boxShadow} />
      </div>
      <div className={styles.window} style={windowStyle}>
        <div className={styles.topBox}>
          <div className={styles.img}><Image src={substract} width={14} height={14} alt='' /></div>
          <div className={styles.img}><Image src={reactangle} width={14} height={14} alt='' /></div>
          <div className={styles.img} onClick={() => popOver()}><Image src={close} width={14} height={14} alt='' /></div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Window