import React from 'react'

import styles from './AtomGamma.module.css'
import GammaOrbits from '../../assets/images/gamma_orbits.png'
import InnerElectrons from '../../assets/images/inner_electrons.png'
import OuterElectrons from '../../assets/images/outer_electrons.png'

const atomGamma = props => {
  const [height, width] = props.size.split('x')
  return (
    <div style={{ width: width + 'px', height: height + 'px' }} className={styles.atomGamma}>
      <img src={GammaOrbits} alt="gamma orbits" className={styles.gammaOrbits} />
      <img src={InnerElectrons} alt="inner electrons" className={styles.innerElectrons} />
      <img src={OuterElectrons} alt="outer electrons" className={styles.outerElectrons} />
    </div>
  )
}

export default atomGamma
