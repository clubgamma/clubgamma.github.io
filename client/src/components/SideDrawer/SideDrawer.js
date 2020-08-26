import React, { Fragment } from 'react'

import styles from './SideDrawer.module.css'
import Logo from '../../assets/images/logo-square.png'

const sideDrawer = props => {
  let sideDrawerStyle = styles.sideDrawer
  if (props.show) {
    sideDrawerStyle = styles.sideDrawerOpen
  }

  let sections = [
    { id: "#home", name: 'Home' },
    { id: "#aboutUs", name: 'About Us' },
    { id: "#events", name: 'Events' },
    { id: "#teams", name: 'Teams' },
    { id: "#contactUs", name: 'Contact Us' }
  ]
  sections.forEach(section => {
    if (section.id === props.activeSection) {
      section.className = styles.activeSection
    }
  })

  return (
    <Fragment>
      <nav className={sideDrawerStyle}>
        <div className={styles.logoContainer}>
          <img
            src={Logo}
            className={styles.logoImg}
            alt="logo"
          />
          <span>Club Gamma</span>
        </div>
        <div className={styles.navItems}>
          {sections.map((section, index) =>
            <a href={section.id} className={section.className} key={index}>
              {section.name}
            </a>
          )}
        </div>
      </nav>
    </Fragment>
  )
}

export default sideDrawer
