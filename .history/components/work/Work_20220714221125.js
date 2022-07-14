import React, { useState } from 'react'
import styles from '../work/Work.module.css'
import pluto from '../../assets/pluto.gif'
import gecko from '../../assets/gecko.gif'
import studio from '../../assets/studio.gif'
import plutoDefaultLogo from '../../assets/plutoDefaultLogo.png'
import geckoDefaultLogo from '../../assets/geckoDefaultLogo.png'
import plutoBg from '../../assets/plutoBg.png'
import Image from 'next/image'
import marqueeLogo from '../../assets/marqueeLogo.png'
import ImgCard from '../ImgCard/ImgCard'

const Work = (props) => {
  const { isAosOn } = props;
  const [duration, setDuration] = useState('12s')
  const itemsStyle = {
    animationDuration: duration,
  }
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.title} ${isAosOn ? 'aos-animate' : ''}`} data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
          <h1>Previous Work</h1>
        </div>
        <div className={styles.itemsMarquee}>
          <div className={styles.items} style={itemsStyle}>
            <ImgCard src={pluto} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Lil Pluto, the OG pass for the Pluto Metaverse, 3333 Unique Creatures living on Pluto." width={250} height={250} alt=''/>
            <ImgCard src={gecko} defaultLogo={geckoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Lil Gecko, reptiles living on Pluto. They are the cute little pets kept by genesis Pluto." width={250} height={250} alt=''/>
            <ImgCard src={studio} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Lil Pluto is making music! Pluto Studio is the exclusive studio for every Lil Pluto." width={250} height={250} alt=''/>
            {/* <ImgCard src={demi} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Pluto Lab x Demi-Human Studio" width={250} height={250} alt=''/> */}
            {/* TODO: demi */}
            <ImgCard src={pluto} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Pluto Lab x Demi-Human Studio" width={250} height={250} alt=''/>
            <ImgCard src={pluto} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="" width={250} height={250} alt=''/>
            <ImgCard src={gecko} defaultLogo={geckoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="" width={250} height={250} alt=''/>
            <ImgCard src={studio} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="" width={250} height={250} alt=''/>
            {/* TODO: demi */}
            <ImgCard src={pluto} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Pluto Lab x Demi-Human Studio" width={250} height={250} alt=''/>
        
          </div>
        </div>
        <div className={styles.intro}>
          <h3>With the theme of interactive music NFT, Pluto Lab is committed to developing a community of music lovers in the web3 and NFT world.</h3>
        </div>
      </div>
      <div className={styles.marquee}>
        <div>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
          <Image layout="fixed" src={marqueeLogo} width={187} height={30} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Work