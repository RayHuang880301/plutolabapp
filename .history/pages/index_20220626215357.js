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
      </Head>
      {/* <Header /> */}
      <FrontCover />
      <Info />
      <Work />
      <Investors />
      <Contact />
      <Footer />
    </>
  )
}