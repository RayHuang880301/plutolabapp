import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Image from 'next/image'
import styles from './ImgCard.module.css'
import substract from '../../assets/substract.svg'
import reactangle from '../../assets/rectangle.svg'
import close from '../../assets/close.svg'

export default function ImgCard(props) {
  const { children, src, defaultLogo, width, height, alt } = props
  const [imgSrc, setImgSrc] = useState(src)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      // borderRadius: '16px',
      // background: 'transparent',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.item} onClick={openModal} onMouseOver={() => setImgSrc(defaultLogo)} onMouseOut={() => setImgSrc(src)}>
        <Image layout="fixed" src={imgSrc} width={width} height={height} alt={alt} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.window}>
          <div className={styles.topBox}>
            <div className={styles.img}><Image src={substract} width={14} height={14} alt='' /></div>
            <div className={styles.img}><Image src={reactangle} width={14} height={14} alt='' /></div>
            <div className={styles.img} onClick={closeModal}><Image src={close} width={14} height={14} alt='' /></div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </Modal>
    </>
  )
}
