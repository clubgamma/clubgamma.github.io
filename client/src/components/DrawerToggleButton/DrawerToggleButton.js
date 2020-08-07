import React from 'react';

import styles from './DrawerToggleButton.module.css';

const drawerToggleButton = props => (
  <button className={styles.toggleBtn} onClick={props.click}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
  </button>
);

export default drawerToggleButton;
