import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../window/Window.module.css'
import symbol from '../../assets/symbol.svg'
import substract from '../../assets/substract.svg'
import reactangle from '../../assets/rectangle.svg'
import close from '../../assets/close.svg'

const Window = (props) => {
  const { children, top, left, width, height, content, className } = props

  const [boxStyle, setBoxStyle] = useState({
    top: `${top}%`,
    left: `${left}%`,
  })


  const [windowStyle, setWindowStyle] = useState({
    // top: `${top}%`,
    // left: `${left}%`,
    width: `${width}`,
    height: `${height}`
  })

  const [cardStyle, setCardStyle] = useState({
    // top: `${top+2}%`,
    // left: `calc(${left}% + 10px)`,
    width: `${width}`,
    height: `${height}`
  })

  const popOver = () => {
    {/* w : h = 400 :185 */}
    top = Math.random() * 55;
    left = Math.random() * 60;
    width = 200 + Math.random() * 100;
    height = width * 185 / 400;
    // setBoxStyle({
    //   left: ``;
    // });
    setWindowStyle({
      // top: `${top}%`,
      // left: `${left}%`,
      width: `${width}`,
      height: `${height}`
    })

    setCardStyle({
      // top: `${top+2}%`,
      // left: `${left+0.6}%`,
      width: `${width}`,
      height: `${height}`
    })
  }

  return (
    <div className={styles.box} style={boxStyle}>
      <div className={styles.boxCont}>
        <div className={`${styles.window} ${className}`} style={windowStyle}>
          <div className={styles.topBox}>
            <div className={styles.img}><Image src={substract} width={14} height={14} alt='' /></div>
            <div className={styles.img}><Image src={reactangle} width={14} height={14} alt='' /></div>
            <div className={styles.img} onClick={() => popOver()}><Image src={close} width={14} height={14} alt='' /></div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
        {/* <div className={`${styles.cardShadow} ${className}`} style={cardStyle}>
          <div className={styles.boxShadow} />
        </div> */}
      </div>
    </div>
  )
}

export default Window