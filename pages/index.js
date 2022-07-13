import React, { useEffect, useState, } from 'react'
import dynamic from 'next/dynamic'
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
import ReactPageScroller from "../lib/pageScroller";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import debounce from 'lodash/debounce'

import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/frontCover/FrontCover'), {
  ssr: false
})

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const onWheelHandler =  debounce(event => {
    event.preventDefault();
    event.stopPropagation();
    const delta = Math.sign(event.deltaY);
    console.info('wheel', delta);
  }, 200, {
    leading: true,
    trailing: false
  });
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
    window.addEventListener("wheel", onWheelHandler, { passive: false });
    return () => {
      console.log('remove wheel')
      window.removeEventListener('wheel', onWheelHandler);
    }
  }, []);
  
  const handlePageChange = (number) => {
    console.log(number)
    setPageNumber(number);
  };
  
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
      <DndProvider backend={HTML5Backend}>
        <Fullpage>

          <FullPageSections>
            {/* <FullpageSection>
              <FrontCover />
            </FullpageSection> */}
            <FullpageSection>
              <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
            </FullpageSection>
            <FullpageSection>
              <Info />
            </FullpageSection>
            <FullpageSection>
              <Work />
            </FullpageSection>
            <FullpageSection>
              <Investors />
            </FullpageSection>
            <FullpageSection>
              <Contact />
            </FullpageSection>
          </FullPageSections>

        </Fullpage>
      </DndProvider>
      {/* <DndProvider backend={HTML5Backend}>
        <ReactPageScroller
          pageOnChange={handlePageChange}
        >
          <FrontCover isAosOn={pageNumber === 0} />
          <Info isAosOn={pageNumber === 1} />
          <Work isAosOn={pageNumber === 2} />
          <Investors isAosOn={pageNumber === 3} />
          <Contact isAosOn={pageNumber === 4} />
        </ReactPageScroller>
        {pageNumber === 4 && <Footer />}
      </DndProvider> */}

    </>
  )
}
