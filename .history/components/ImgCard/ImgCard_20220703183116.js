import React from 'react'
import Image from 'next/image'

export default function ImgCard(props) {
  const { children, src, width, height, alt } = props
  return (
    <div>
      <Image layout="fixed" src={src} width={width} height={height} alt={alt}/>
    </div>
  )
}
