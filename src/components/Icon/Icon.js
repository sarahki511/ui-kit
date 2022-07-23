import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Icon.module.scss';
import PropTypes from 'prop-types';

const positions = ["front", "end"]

Component.propTypes = {
  children: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
  pos: PropTypes.oneOf(positions)
};


const Icon = ({children, iconName, className, pos}) => {
  const classNames = cn(styles.Icon, {
    [styles[`Icon_${iconName}`]]: iconName,
    [styles[`${className}`]]: className,
    [styles[`Icon_${pos}`]]: pos
  });

  return (
    <i className = {classNames}></i>
  )
};

export default Icon;