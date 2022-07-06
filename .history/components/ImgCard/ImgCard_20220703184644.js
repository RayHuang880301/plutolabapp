import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ImgCard.module.css'
import defaultLogo from '../../assets/defaultLogo.png'

export default function ImgCard(props) {
  const { children, src, width, height, alt } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className={styles.item} onMouseEnter={()=>setImgSrc(defaultLogo)}>
      <Image layout="fixed" src={imgSrc} width={width} height={height} alt={alt}/>
    </div>
  )
}
