import React from 'react'

import styles from './SpecialAboutUs.module.css'
import oneSvg from '../../../assets/images/SVGs/one.svg'
import twoSvg from '../../../assets/images/SVGs/two.svg'
import threeSvg from '../../../assets/images/SVGs/three.svg'
import ellipse from '../../../assets/images/SVGs/Ellipse62.svg'
import mask from '../../../assets/images/SVGs/MaskGroup4.svg'

const specialAboutUs = props =>
  <div className={styles.specialPage}>
    <img src={ellipse} alt="Ellipse" className={styles.topRight} />
    <img src={mask} alt="Maskgroup" className={styles.mask} />
    <h1>What's <span>special</span> about us ?</h1>
    <div className={styles.centeredDiv}>
      <div className={styles.card}>
        <img src={oneSvg} alt="" />
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eos hic, quam animi debitis ab.</p>
        <a href="#">Learn More &rarr;</a>
      </div>
      <div className={styles.card}>
        <img src={twoSvg} alt="" />
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eos hic, quam animi debitis ab.</p>
        <a href="#">Learn More &rarr;</a>
      </div>
      <div className={styles.card}>
        <img src={threeSvg} alt="" />
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eos hic, quam animi debitis ab.</p>
        <a href="#">Learn More &rarr;</a>
      </div>
    </div>
  </div>

export default specialAboutUs
