import React from 'react'
import styles from '../frontCover/FrontCover.module.css'
import Image from 'next/image'
import pImg from '../../assets/pImg.svg'
import Header from '../header/Header'

const FrontCover = () => {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.container}>
        <Image src={pImg} width={300} height={300} flex={none} alt='' />
      </div>
    </div>
  )
}

export default FrontCover