import React, { Component } from 'react'

import styles from './AboutPage.module.css'
import logo from '../../../assets/images/SVGs/logo.svg'
import ring1 from '../../../assets/images/atomRings/ring1.png'
import ring2 from '../../../assets/images/atomRings/ring2.png'
import ring3 from '../../../assets/images/atomRings/ring3.png'
import ring from '../../../assets/images/atomRings/ring.png'

class AboutPage extends Component {
  componentDidMount() {
    const rOne = document.getElementById("fOne")
    const rTwo = document.getElementById("fTwo")
    const rThree = document.getElementById("fThree")

    window.addEventListener("scroll", function () {
      rOne.style.transform = "rotate(" + window.pageYOffset + "deg)"
      rTwo.style.transform = "rotate(-" + (window.pageYOffset * 0.5) + "deg)"
      rThree.style.transform = "rotate(" + (window.pageYOffset * 0.5) + "deg)"
    })
  }
  render() {
    return (
      <div className={styles.aboutUs}>
        <div className={styles.abtLeft}>
          <div className={styles.abtLeftCentered}>
            <h1><span>club</span> gamma</h1>
            <blockquote>The more diversity, the better community</blockquote>
            <p>
              <strong>Club Gamma</strong> formulates a contributory platform to scrutinize learner's potential talents with profound guidance. The club assists in both technical and non-technical spheres.
              The pivot of the club fundamentally is to promote the inclusive growth of the learners and help the learners attain analytical knowledge.
            </p>
          </div>
        </div>
        <div className={styles.abtRight}>
          <img src={logo} className={styles.logo} alt="logo" />
          <img src={ring1} id="fOne" className={styles.fOne} alt="ring one" />
          <img src={ring2} id="fTwo" className={styles.fTwo} alt="ring two" />
          <img src={ring3} id="fThree" className={styles.fThree} alt="ring three" />
          <img src={ring} id="fFour" className={styles.fFour} alt="ring four" />
        </div>
      </div>
    )
  }
}

export default AboutPage
