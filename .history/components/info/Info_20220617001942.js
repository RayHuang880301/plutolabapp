import React from 'react'
import plutoLabLogo from '../../assets/plutoLabLogo.png'
import downArrow from '../../assets/downArrow.svg'
import styles from '../info/Info.module.css'
import Image from 'next/image'
import symbol from '../../assets/symbol.svg'

const Info = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topCard}>
          <div className={styles.topBox}>
            <Image src={symbol} width={95} height={15} alt=''/>
            <h2>Welcome to Pluto Mateverse</h2>
          </div>
        </div>
        {/* <div className={styles.title}>
          <h1>With the theme of interactive music NFT, Pluto Lab is committed to developing a community of music lovers in the web3 and NFT world. </h1>
        </div> */}
        <div className={styles.logo}>
          <Image src={plutoLabLogo} width={400} height={270} alt=''/>
        </div>
        <div className={styles.bottomCard}>
          <h2>Previous Work</h2>
          <div className={styles.arrow}><Image src={downArrow} width={30} height={30} alt=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Info