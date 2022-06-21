import React from 'react'
import styles from './Footer.module.css'
import plutoLabImg from '../../assets/plutoLabImg.svg'
import Image from 'next/image'
import twLogo from '../../assets/twLogo.svg'
import dcLogo from '../../assets/dcLogo.svg'

const Footer = () => {
  return (
    <div className={styles.section}>
      <Image src={plutoLabImg} width={150} height={50} alt=''/>
      <div className={styles.mediaBox}>
        <div className={styles.mediaIcon}><a><Image src={twLogo} width={50} height={50} alt=''/></a></div>
        <div className={styles.mediaIcon}><a><Image src={dcLogo} width={50} height={50} alt=''/></a></div>
      </div>
      <div className={styles.copyright}></div>
    </div>
  )
}

export default Footer