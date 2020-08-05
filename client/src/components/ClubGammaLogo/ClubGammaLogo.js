import React from 'react'

import styles from './ClubGammaLogo.module.css'
import Logo from '../../assets/images/logo-square-small.png'

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
        ? <span>Club Gamma</span>
        : null}
    </div>
  )
}

export default logo
