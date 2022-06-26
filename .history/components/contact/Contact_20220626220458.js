import React from 'react'
import styles from './Contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title} data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
          <h1>Contact Pluto</h1>
        </div>
        <div className={styles.itemBox}>
          <a><button className={styles.item}>Instagram</button></a>
          <a><button className={styles.item}>Discord</button></a>
          <a><button className={styles.item}>Twitter</button></a>
          <a><button className={styles.item}>E-mail</button></a>
        </div>
      </div>
    </div>
  )
}

export default Contact