import React from 'react';
import styles from './Box.module.scss'

const Box = (props) => {
  return <div className={styles.Box}>{props.children}</div>
};

export default Box;