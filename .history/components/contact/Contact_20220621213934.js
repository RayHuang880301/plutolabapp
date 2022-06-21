import React from 'react'
import styles from './Contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
        <h1>Contact Pluto</h1>
        </div>
        <div className={styles.itemBox}>
          <button className={styles.item}>Instagram</button>
          <button className={styles.item}>Discord</button>
          <button className={styles.item}>Twitter</button>
          <button className={styles.item}>E-mail</button>
        </div>
      </div>
    </div>
  )
}

export default Contact