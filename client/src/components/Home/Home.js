import React from 'react'

import styles from './Home.module.css'
import ellipseImg from '../../assets/images/Ellipse.png'
import fontPageSvg from '../../assets/images/Font_Page.svg'
import maskImg from '../../assets/images/Mask_Group.png'

const hero = props =>
  <main className={styles.dashboard} id="home">
    <img src={ellipseImg} className={styles.ellipse1} alt="ellipse" />
    <img src={fontPageSvg} className={styles.fontPage} alt="fontPage" />
    <img src={ellipseImg} className={styles.ellipse2} alt="ellipse" />
    <p className={styles.tagline}>
      THE MORE <span>DIVERSITY</span> THE BETTER <span>COMMUNITY</span>
    </p>
    <img src={maskImg} className={styles.mask} alt="maskImg" />
    <div className={styles.scrollDown}>
      <div className={styles.mousey}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  </main>

export default hero
