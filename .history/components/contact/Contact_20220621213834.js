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
          <button className={styles.item1}>
          </button>
          <button className={styles.item2}>
          </button>
          <button className={styles.item2}>
          </button>
          <button className={styles.item2}>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact