import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ImgCard.module.css'

export default function ImgCard(props) {
  const { children, src, defaultLogo, width, height, alt } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className={styles.item} onMouseOver={()=>setImgSrc(defaultLogo)} onMouseOut={()=>setImgSrc(src)}>
      <Image layout="fixed" src={imgSrc} width={width} height={height} alt={alt}/>
    </div>
  )
}
