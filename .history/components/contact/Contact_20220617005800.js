import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h1>Contact Pluto Lab</h1>
        <div className={styles.itemBox}>
          <div className={styles.item}>
            <Image src={svLogo} width={200} height={200} alt=''/>
          </div>
          <div className={styles.item}>
            <Image src={aceLogo} width={200} height={200} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact