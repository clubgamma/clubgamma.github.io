import React from 'react'
import Marked from 'marked'

import styles from './Modal.module.css'
import closeIcon from '../../assets/images/close.png'

const modal = props =>
  <div className={styles.modal}>
    <div dangerouslySetInnerHTML={{ __html: Marked(props.description) }}></div>
    <button onClick={() => props.close()} className={styles.close}>
      <img src={closeIcon} alt="close" />
    </button>
  </div>

export default modal
