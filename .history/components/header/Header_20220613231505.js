import React from 'react'
import styles from '../navbar/Navbar.module.css'
import pStarImg from '../../assets/pStarImg.svg'
import pImg from '../../assets/pImg.svg'
import plutoLabImg from '../../assets/plutoLabImg.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src={pImg} width={50} height={50} alt=''/>
      <Image src={plutoLabImg} width={150} height={50} alt=''/>
      <Image src={pStarImg} width={50} height={50} alt=''/>
    </div>
  )
}

export default Navbar