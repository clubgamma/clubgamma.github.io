import React from 'react'

import styles from './AboutPage.module.css'
import groupSvg from '../../../assets/images/SVGs/Group195.svg'

const aboutPage = props =>
  <div className={styles.aboutUs}>
    <div className={styles.abtLeft}>
      <div className={styles.abtLeftCentered}>
        <h1><span>club</span> gamma</h1>
        <blockquote>the more diversity, the better community</blockquote>
        <p>
          Club Gamma is an official student tech community under GitHub campus Expert, it is to enrich
          the Technology enthusiastic students on the campus, ranging from newbie coders to experts in
          industry and other academic domains. The main objective of the club is to simplify the diverse
          nature and embrace it to form a better community. Club arranges various workshops, seminars,
          hands-on programs, personality building lectures by the best people in the domain to benefit the
          entire student community. Club Gamma dedicates itself for the empowerment of the student
          community and will keep doing efforts to enrich it.
        </p>
      </div>
    </div>
    <div className={styles.abtRight}>
      <img src={groupSvg} alt="features" />
    </div>
  </div>

export default aboutPage
