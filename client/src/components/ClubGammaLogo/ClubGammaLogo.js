import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ClubGammaLogo.module.css'
import Logo from '../../assets/images/gamma.png'

const logo = props => {
  const [height, width] = props.size.split('x')
  return (
    <div className={styles.logoContainer}>
      <img
        src={Logo}
        height={height}
        width={width}
        className={styles.logoImg}
        alt="logo"
      />
      {props.hasText
        ? <Link to="#home">Club Gamma</Link>
        : null}
    </div>
  )
}

export default logo
