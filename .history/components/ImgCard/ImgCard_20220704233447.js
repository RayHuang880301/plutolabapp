import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Image from 'next/image'
import styles from './ImgCard.module.css'

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
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  )
}
