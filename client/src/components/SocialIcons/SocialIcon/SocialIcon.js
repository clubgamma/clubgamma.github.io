import React from 'react'

import styles from './SocialIcon.module.css'

const socailIcon = props =>
  <div className={styles.icon}>
    <a href={props.href} rel="noopener noreferrer" target="_blank">
      <img src={props.src} alt="icon" />
    </a>
  </div>

export default socailIcon
