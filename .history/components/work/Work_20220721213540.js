import React, { useState } from 'react'
import styles from '../work/Work.module.css'
import pluto from '../../assets/pluto.gif'
import gecko from '../../assets/gecko.gif'
import studio from '../../assets/studio.gif'
import demi from '../../assets/demi.png'
import parkpark from '../../assets/parkpark.png'
import plutoDefaultLogo from '../../assets/plutoDefaultLogo.png'
import geckoDefaultLogo from '../../assets/geckoDefaultLogo.png'
import studioDefaultLogo from '../../assets/studioDefaultLogo.png'
import demiDefaultLogo from '../../assets/demiDefaultLogo.png'
import parkparkDefaultLogo from "../../assets/parkparkDefaultLogo.png"
import plutoBg from '../../assets/plutoBg.png'
import geckoBg from '../../assets/geckoBg.png'
import studioBg from '../../assets/studioBg.png'
import demiBg from '../../assets/demiBg.png'
import Image from 'next/image'
import marqueeLogo from '../../assets/marqueeLogo.png'
import ImgCard from '../imgCard/ImgCard'

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
            <ImgCard src={gecko} defaultLogo={geckoDefaultLogo} bg={geckoBg} link="https://opensea.io/collection/lil-gecko" intro="Lil Gecko, reptiles living on Pluto. They are the cute little pets kept by genesis Pluto." width={250} height={250} alt=''/>
            <ImgCard src={studio} defaultLogo={studioDefaultLogo} bg={studioBg} link="https://opensea.io/collection/pluto-studio-nft" intro="Lil Pluto is making music! Pluto Studio is the exclusive studio for every Lil Pluto." width={250} height={250} alt=''/>
            <ImgCard src={demi} defaultLogo={demiDefaultLogo} bg={demiBg} link="https://opensea.io/assets/ethereum/0x0d2d8caaa06547c167f391b8c08f248a94b7b74d/1" intro="Pluto Lab x Demi-Human Studio" width={250} height={250} alt=''/>
  
            <ImgCard src={pluto} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Lil Pluto, the OG pass for the Pluto Metaverse, 3333 Unique Creatures living on Pluto." width={250} height={250} alt=''/>
            <ImgCard src={gecko} defaultLogo={geckoDefaultLogo} bg={geckoBg} link="https://opensea.io/collection/lil-gecko" intro="Lil Gecko, reptiles living on Pluto. They are the cute little pets kept by genesis Pluto." width={250} height={250} alt=''/>
            <ImgCard src={studio} defaultLogo={studioDefaultLogo} bg={studioBg} link="https://opensea.io/collection/pluto-studio-nft" intro="Lil Pluto is making music! Pluto Studio is the exclusive studio for every Lil Pluto." width={250} height={250} alt=''/>
            <ImgCard src={demi} defaultLogo={demiDefaultLogo} bg={demiBg} link="https://opensea.io/assets/ethereum/0x0d2d8caaa06547c167f391b8c08f248a94b7b74d/1" intro="Pluto Lab x Demi-Human Studio" width={250} height={250} alt=''/>
            {/* TODO: demi */}
            {/* <ImgCard src={pluto} defaultLogo={plutoDefaultLogo} bg={plutoBg} link="https://plutohiphopdept.com/" intro="Lil Pluto, the OG pass for the Pluto Metaverse, 3333 Unique Creatures living on Pluto." width={250} height={250} alt=''/> */}
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