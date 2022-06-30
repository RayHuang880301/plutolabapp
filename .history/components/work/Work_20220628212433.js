import React from 'react'
import styles from '../work/Work.module.css'
import pluto from '../../assets/pluto.gif'
import Image from 'next/image'
import marqueeLogo from '../../assets/marqueeLogo.png'

const Work = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title} data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
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
      <div className={styles.marquee}>
        <div>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
          <Image src={marqueeLogo} width={187} height={30} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Work