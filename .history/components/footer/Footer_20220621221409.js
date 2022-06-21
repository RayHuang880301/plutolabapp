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
        <Image className={styles.mediaIcon} src={twLogo} width={50} height={50} alt=''/>
        <Image className={styles.mediaIcon} src={dcLogo} width={50} height={50} alt=''/>
      </div>
      <div className={styles.copyright}></div>
    </div>
  )
}

export default Footer