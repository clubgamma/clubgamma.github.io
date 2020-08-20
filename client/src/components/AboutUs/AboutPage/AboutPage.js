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
          Club Gamma envisages a conducive platform to explore student’s latent Tech talents
          and also to enable them to come out with their innovative ideas by arranging various Hackathons,
          workshops etc. For the all-round development of the students and to enrich their technical
          knowledge Club provides a platform with guidance and profound seminars with Industry experts.
          Club Gamma not only works for the students to explore their Technical skills but also help in areas
          such as personality development and inculcate the spirit of excelling by providing them with a
          platform for hosting their technical talents. The focus of the club primarily is to help the students
          gain practical as well as theoretical technical knowledge.
        </p>
      </div>
    </div>
    <div className={styles.abtRight}>
      <img src={groupSvg} alt="features" />
    </div>
  </div>

export default aboutPage
