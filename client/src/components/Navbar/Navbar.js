import React from 'react'

import styles from './Navbar.module.css'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'
import ClubGammaLogo from '../ClubGammaLogo/ClubGammaLogo'

const navbar = props => {
  let sections = [
    { id: "#home", name: 'Home' },
    { id: "#aboutUs", name: 'About Us' },
    { id: "#teams", name: 'Teams' },
    { id: "#blogs", name: 'Blogs' },
    { id: "#contactUs", name: 'Contact Us' }
  ]
  sections.forEach(section => {
    if (section.id === props.activeSection) {
      section.className = styles.activeSection
    }
  })

  return (
    <nav
      className={styles.navigation}
      style={props.scrolled ? { boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)' } : null}>
      <div className={styles.drawer}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <ClubGammaLogo size="54x54" hasText={true} />
      </div>
      <div className={styles.navItems} id="navItemsContainer">
        {sections.map((section, index) =>
          <a href={section.id} className={section.className} key={index}>
            {section.name}
          </a>
        )}
      </div>
    </nav>
  )
}

export default navbar
