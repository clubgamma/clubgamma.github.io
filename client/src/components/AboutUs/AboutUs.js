import React from 'react'

import styles from './AboutUs.module.css'
import AppPage from './AppPage/AppPage'
import AboutPage from './AboutPage/AboutPage'
import SpecialAboutUs from './SpecialAboutUs/SpecialAboutUs'

const aboutUs = props =>
  <section id="aboutUs" className={styles.aboutUs}>
    <AppPage />
    <AboutPage />
    <SpecialAboutUs />
  </section>

export default aboutUs
