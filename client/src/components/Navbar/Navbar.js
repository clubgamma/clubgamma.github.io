import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import ClubGammaLogo from '../../components/ClubGammaLogo/ClubGammaLogo'

const navbar = props => {
  return (
    <nav
      className={styles.navbar}
      style={props.scrolled ? { boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)' } : null}>
      <div>
        <ClubGammaLogo size="32x32" hasText={true} />
      </div>
      <div>
        <Link to="#home">Home</Link>
        <Link to="#team">Team</Link>
        <Link to="#events">Events</Link>
        <Link to="#blogs">Blogs</Link>
        <Link to="#contactUs">Contact Us</Link>
      </div>
    </nav>
  )
}

export default navbar
