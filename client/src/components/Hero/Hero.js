import React from 'react'

import styles from './Hero.module.css'
import AtomGamma from '../AtomGamma/AtomGamma'

const hero = props =>
  <main className={styles.main}>
    <div className={styles.headingContainer}>
      <div className={styles.heading}>
        <h1>Club Gamma</h1>
        <p>The more Diversity, the better Community</p>
      </div>
    </div>
    <div className={styles.atom}>
      <AtomGamma size="720x720" />
    </div>
  </main>

export default hero
