import React from 'react'

import styles from './SpecialAboutUs.module.css'
import seminarsSvg from '../../../assets/images/SVGs/seminars.svg'
import workshopsSvg from '../../../assets/images/SVGs/workshops.svg'
import hackathonsSvg from '../../../assets/images/SVGs/hackathons.svg'
import ellipse from '../../../assets/images/SVGs/Ellipse62.svg'
import mask from '../../../assets/images/SVGs/MaskGroup4.svg'

const specialAboutUs = props =>
  <div className={styles.specialPage}>
    <img src={ellipse} alt="Ellipse" className={styles.topRight} />
    <img src={mask} alt="Maskgroup" className={styles.mask} />
    <h1>What's <span>special</span> about us ?</h1>
    <div className={styles.centeredDiv}>
      <div className={styles.card}>
        <img src={seminarsSvg} alt="" />
        <h2>Technical Workshop</h2>
        <p>We arrange workshops on latest technology with hands-on sessions. All workshops offer sound knowledge of the applied domain and serve justice to impart the best for the community.</p>
        {/* <a href="#">Learn More &rarr;</a> */}
      </div>
      <div className={styles.card}>
        <img src={workshopsSvg} alt="" />
        <h2>Seminar with Industry experts</h2>
        <p>We arrange special seminars with Industry experts from Facebook, Amazon etc so that students can get inspired from their journey and can ask questions for better knowledge. The guidance from already excelled experts always marks a benchmark in career.</p>
        {/* <a href="#">Learn More &rarr;</a> */}
      </div>
      <div className={styles.card}>
        <img src={hackathonsSvg} alt="" />
        <h2>Hackathons</h2>
        <p>Club Gamma actively arranges Hackathons to encourage students to brainstorm with their ideas and develop which makes them standout. To increase the excitement we credit winners and performers with goodies and schwags.</p>
        {/* <a href="#">Learn More &rarr;</a> */}
      </div>
    </div>
  </div>

export default specialAboutUs
