import React, { Component } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames'
import PropTypes from 'prop-types';

const sizes = ["sm", "md", "lg"];
const radius = ["sm", "md", "lg", "xl", "xxl", "pill"];
const states = ["default", "hover", "active", "focus", "disabled"];

Component.propTypes = {
  children: PropTypes.string,
  state: PropTypes.oneOf(states),
  size: PropTypes.oneOf(sizes),
  borderRadius: PropTypes.oneOf(radius)
}


const Button = ({children, state, size, borderRadius}) => {
  
  const classNames = cn(styles.Button, {
    [styles[`Button_state_${state}`]]: state,
    [styles[`Button_${size}`]]: size,
    [styles[`Button_borderRadius_${borderRadius}`]]: borderRadius,
  });

  
  
  console.log(classNames)
  return (
    <button className={classNames}>{children}</button>
  )
}

export default Button;