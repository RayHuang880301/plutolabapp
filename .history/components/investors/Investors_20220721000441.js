import React from 'react'
import styles from '../investors/Investors.module.css'
import Window from '../window/Window'
import svLogo from '../../assets/svLogo.png'
import aceLogo from '../../assets/aceLogo.png'
import purestone from '../../assets/purestone.png'
import Image from 'next/image'
import plutoLabLogo from '../../assets/plutoLabLogo.png'

const Investors = (props) => {
  const { isAosOn } = props;

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.title} ${isAosOn ? 'aos-animate' : ''}`} data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
          <h1>Investors</h1>
        </div>
        <div className={styles.windowBox}>
          {/* w : h = 400 :185 */}
          <Window top={0} left={0} width={'26vw'} height={'13vw'}><Image src={svLogo} alt=''/></Window>
          <Window top={20} left={60} width={'26vw'} height={'13vw'}><Image src={aceLogo} alt=''/></Window>
          <Window top={60} left={15} width={'26vw'} height={'13vw'}><Image src={aceLogo} alt=''/></Window>
          
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