import React from 'react'

import styles from './Blog.module.css'
import rightArrow from '../../assets/images/right_arrow.svg'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'

const blogsTimeline = props => {
  const orderStyle = (props.order === 'R2L' ? styles.r2l : '')
  const date =
    <span>
      {props.data.date.slice(0, 2)}<sup>{props.data.date.slice(2, 4)}</sup> {props.data.date.slice(4)}
    </span>

  let timeline = null
  switch (props.current) {
    case 0:
      timeline =
        <div className={styles.timeline}>
          <div className={styles.startLine}></div>
          <div className={styles.circle}></div>
          {window.screen.width >= 888 ? <div className={styles.line}></div> : null}
        </div>
      break
    case (props.total - 1):
      timeline =
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
          {window.screen.width >= 888
            ? <div className={styles.solidLine}></div>
            : <div className={styles.line}></div>}
          <div className={styles.endLine}></div>
        </div>
      break
    default:
      timeline =
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
      break
  }

  return (
    <div className={styles.blog + ' ' + orderStyle}>
      <div className={styles.date}>
        {date}
      </div>
      {timeline}
      <div className={styles.description}>
        <Heading>{props.data.title}</Heading>
        <p>{props.data.description}</p>
        <Button onClick={() => props.onBtnClick(props.data.filename)}>
          Go to Event <img src={rightArrow} className={styles.rightArrow} alt="right arrow" />
        </Button>
      </div>
    </div>
  )
}

export default blogsTimeline
