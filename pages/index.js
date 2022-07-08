import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import FrontCover from '../components/frontCover/FrontCover'
import Info from '../components/info/Info'
import Work from '../components/work/Work'
import Investors from '../components/investors/Investors'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>PlutoLab</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PlutoLab" />
        <meta property="og:image" content=""></meta>
        <meta property="og:description" content="With the theme of interactive music NFT, Pluto Lab is committed to developing a community of music lovers in the web3 and NFT world."></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      {/* <Header /> */}
      <FrontCover />
      <DndProvider backend={HTML5Backend}>

      <Info />
      </DndProvider>

      <Work />
      <Investors />
      <Contact />
      <Footer />
    </>
  )
}
