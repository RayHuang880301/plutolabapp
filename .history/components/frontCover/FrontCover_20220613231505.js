import React from 'react'
import styles from '../frontCover/FrontCover.module.css'
import Image from 'next/image'
import pImg from '../../assets/pImg.svg'

const FrontCover = () => {
  return (
    <div className={styles.section}>
      <Image src={pImg} width={300} height={300} alt=''/>
    </div>
  )
}

export default FrontCover