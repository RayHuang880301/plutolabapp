import React, { useState } from 'react'
import styles from '../frontCover/FrontCover.module.css'
import Image from 'next/image'
import pImg from '../../assets/pImg.svg'
import Header from '../header/Header'
const initState = {
  init: false
}
const FrontCover = () => {
  const [isAppear, setIsAppear] = useState(1);
  const [init, setInit] = useState(0);
  if(!init) {
    console.log(init,isAppear)
    setInit(1);
    setTimeout(() => {
      setIsAppear(0);
      console.log(init,isAppear)
    }, 3000);
  }
  return (
    <>
    {isAppear ? <Header /> : ''}
    <div className={`${styles.section} ${isAppear ? '' : styles.sectionDisappear}`}>
      <div className={styles.container}>
        <div className={styles.p}><Image src={pImg} width={300} height={300} alt='' /></div>
      </div>
    </div>
    </>
  )
}

export default FrontCover