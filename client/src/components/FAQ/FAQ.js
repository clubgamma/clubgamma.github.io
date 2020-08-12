import React from 'react'

import styles from './FAQ.module.css'
import arrow from '../../assets/images/arrow.svg'

const faq = props => {
  let descClassOpen = props.open ? styles.faqDescOpen : ''

  return (
    <div className={styles.faq}>
      <div className={styles.headingContainer}>
        <p
          onClick={() => props.toggleExpand(props.index)}
          className={styles.heading + ' ' + (props.open ? styles.headingOpen : '')}>
          {props.title}
        </p>
        <img
          src={arrow}
          className={styles.arrow + ' ' + (props.open ? styles.arrowOpen : ' ')}
          alt="arrow"
        />
      </div>
      <div className={descClassOpen + ' ' + styles.faqDesc}>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default faq
