import React from 'react'
import styles from '../investors/Investors.module.css'
import Window from '../Window/Window'
import sv from '../../assets/streetVoice.jpeg'
import svLogo from '../../assets/svLogo.svg'
import aceLogo from '../../assets/aceLogo.png'
import Image from 'next/image'
import plutoLabLogo from '../../assets/plutoLabLogo.png'

const Investors = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Investors</h1>
        </div>
        <div className={styles.windowBox}>
          {/* w : h = 400 :185 */}
          <Window top={0} left={0} width={400} height={185}><Image src={svLogo} alt=''/></Window>
          <Window top={55} left={15} width={240} height={111}><Image src={aceLogo} alt=''/></Window>
          <Window top={-10} left={45} width={320} height={148}><Image src={aceLogo} alt=''/></Window>
          <Window top={50} left={55} width={320} height={148}><Image src={aceLogo} alt=''/></Window>
        </div>
        <div className={styles.bottomCard}>
          <div className={styles.hr}></div>
          <Image src={plutoLabLogo} width={120} height={80} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Investors