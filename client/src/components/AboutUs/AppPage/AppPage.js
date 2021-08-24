import React from 'react'

import styles from './AppPage.module.css'
import playstoreSvg from '../../../assets/images/SVGs/playstore.svg'
// import appstoreSvg from '../../../assets/images/SVGs/appstore.svg'
import mobileSvg from '../../../assets/images/SVGs/mobile.svg'
import ellipseSvg from '../../../assets/images/SVGs/Ellipse51.svg'
import maskSvg from '../../../assets/images/SVGs/MaskGroup3.svg'

const appPage = props =>
  <div className={styles.appPage}>
    <div className={styles.colOne}>
      <div className={styles.centerDiv}>
        <h1><span>Club Gamma</span> App</h1>
        <p>A Full featured app made with latest technology which is available on both and android</p>
        <a href="https://play.google.com/store/apps/details?id=com.gce.clubgamma" rel="noopener noreferrer">See Features &rarr;</a>
      </div>
      <div className={styles.colThree}>
        <img style={{cursor: 'pointer'}} src={playstoreSvg} alt="googleplay" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gce.clubgamma')} />
        {/* <br />
        <img src={appstoreSvg} alt="appstore" /> */}
      </div>
    </div>
    <div className={styles.colTwo}>
      <img src={mobileSvg} alt="Club gamma app" />
    </div>
    <img src={ellipseSvg} className={styles.bottomLeft} alt="ellipse" />
    <img src={maskSvg} className={styles.bottomRight} alt="mask" />
  </div>

export default appPage
