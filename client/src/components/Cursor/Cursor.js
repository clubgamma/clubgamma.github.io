import React from 'react'

import styles from './Cursor.module.css'

const cursor = props =>
  window.screen.width >= 888
    ? <div className={styles.cursor} id="cursor"></div>
    : null

export default cursor
