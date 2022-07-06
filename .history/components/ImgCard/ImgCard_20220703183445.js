import React from 'react'
import Image from 'next/image'
import styles from './ImgCard.module.css'

export default function ImgCard(props) {
  const { children, src, width, height, alt } = props
  return (
    <div className={styles.item}>
      <Image layout="fixed" src={src} width={width} height={height} alt={alt}/>
    </div>
  )
}
