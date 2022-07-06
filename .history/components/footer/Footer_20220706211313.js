import React from 'react'
import styles from './Footer.module.css'
import plutoLabImg from '../../assets/plutoLabImg.svg'
import Image from 'next/image'
import twLogo from '../../assets/twLogo.svg'
import dcLogo from '../../assets/dcLogo.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.section}>
      <Image src={plutoLabImg} width={180} height={50} alt=''/>
      <div className={styles.mediaBox}>
        <div className={styles.mediaIcon}><Link href="https://discord.gg/plutolab"><a target="_blank" rel="noreferrer"><Image src={twLogo} width={50} height={50} alt=''/></a></Link></div>
        <div className={styles.mediaIcon}><Link href="https://discord.gg/plutolab"><a target="_blank" rel="noreferrer"><Image src={dcLogo} width={50} height={50} alt=''/></a></Link></div>
      </div>
      <div className={styles.copyright}>Copyright © 2022 Pluto Lab</div>
    </div>
  )
}

export default Footer