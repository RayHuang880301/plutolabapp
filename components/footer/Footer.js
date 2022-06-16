import React from 'react'
import styles from './Footer.module.css'
import plutoLabImg from '../../assets/plutoLabImg.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.section}>
      <Image src={plutoLabImg} width={150} height={50} alt=''/>
    </div>
  )
}

export default Footer