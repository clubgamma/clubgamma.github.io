import React from 'react'

import styles from './Heading.module.css'

const heading = props =>
  <h2 className={styles.heading}>{props.children}</h2>

export default heading
