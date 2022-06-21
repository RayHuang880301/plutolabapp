import React from 'react'
import styles from '../work/Work.module.css'
import pluto from '../../assets/pluto.gif'
import Image from 'next/image'
import CarouselLogo from '../../assets/carouselLogo.svg'

const Work = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Previous Work</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image src={pluto} width={250} height={250} alt=''/>
          </div>
          <div className={styles.item}>
            <Image src={pluto} width={250} height={250} alt=''/>
          </div>
          <div className={styles.item}>
            <Image src={pluto} width={250} height={250} alt=''/>
          </div>
        </div>
        <div className={styles.intro}>
          <h3>With the theme of interactive music NFT, Pluto Lab is committed to developing a community of music lovers in the web3 and NFT world.</h3>
        </div>
      </div>
      <div className={styles.carousel}><Image src={CarouselLogo} width={180} height={50} alt=''/></div>
    </div>
  )
}

export default Work