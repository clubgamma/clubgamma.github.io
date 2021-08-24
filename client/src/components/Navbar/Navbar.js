import React from 'react'

import styles from './Navbar.module.css'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'
import ClubGammaLogo from '../ClubGammaLogo/ClubGammaLogo'

const navbar = props => {
  let sections = [
    { id: "#home", name: 'Home' },
    { id: "#aboutUs", name: 'About Us' },
    { id: "#events", name: 'Events' },
    { id: "#teams", name: 'Team' },
    { id: "#contactUs", name: 'Faqs' }
  ]
  sections.forEach(section => {
    if (section.id === props.activeSection) {
      section.className = styles.activeSection
    }
  })

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navv").style.top = "0";
  } else {
    document.getElementById("navv").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <nav id="navv"
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
