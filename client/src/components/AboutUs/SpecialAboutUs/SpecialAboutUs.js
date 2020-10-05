import React from 'react'

import styles from './SpecialAboutUs.module.css'
import workshopsSvg from '../../../assets/images/SVGs/workshops.svg'
import hackathonsSvg from '../../../assets/images/SVGs/hackathons.svg'
import connectSvg from '../../../assets/images/SVGs/connect.svg'
import ellipse from '../../../assets/images/SVGs/Ellipse62.svg'
import mask from '../../../assets/images/SVGs/MaskGroup4.svg'

const specialAboutUs = props =>
  <div className={styles.specialPage}>
    <img src={ellipse} alt="Ellipse" className={styles.topRight} />
    <img src={mask} alt="Maskgroup" className={styles.mask} />
    <h1>What's <span>special</span> about us ?</h1>
    <div className={styles.centeredDiv}>
      <div className={styles.card}>
        <img src={workshopsSvg} alt="" />
        <h2>Learn</h2>
        <p>Club Gamma organizes <strong>workshops</strong> on the most modern technology with <strong>hands-on sessions</strong>. All workshops offer sound knowledge of the concerned domain and aid the balanced proposal for the best for the community.</p>
        {/* <a href="#">Learn More &rarr;</a> */}
      </div>
      <div className={styles.card}>
        <img src={hackathonsSvg} alt="" />
        <h2>Build</h2>
        <p>Club Gamma draws <strong>hackathons</strong> to boost learners to conceptualize &amp; originate their designs. It helps secure two-way connecting those that develop the technology and the people that use them.</p>
        <p style={{ paddingTop: 0 }}>Club Gamma also conducts multiple <strong>contests</strong> implanting learners about what they know in a fun context and building up their analytical and problem-solving skills.</p>
        {/* <a href="#">Learn More &rarr;</a> */}
      </div>
      <div className={styles.card}>
        <img src={connectSvg} alt="" />
        <h2>Make connections</h2>
        <p>Club Gamma plans exclusive <strong>seminars &amp; talks</strong> with Industry experts from <strong>FAANG</strong> so that learners can get the impulse. The direction from shone experts invariably marks a standard in career.</p>
        {/* <a href="#">Learn More &rarr;</a> */}
      </div>
    </div>
  </div>

export default specialAboutUs
