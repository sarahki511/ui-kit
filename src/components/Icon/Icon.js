import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Icon.module.scss';
import PropTypes from 'prop-types';

const positions = ['front', 'end'];
const colors = [
  'primary',
  'primary-outline',
  'secondary',
  'secondary-outline',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

/**
 * Icons is a representative of symbol displayed on the screen for better navigation and understanding
 * */
const Icon = ({
  role,
  iconName,
  size,
  description,
  className,
  color,
  pos,
  ...prop
}) => {
  const classNames = cn(styles.Icon, {
    [styles[`Icon_${iconName}`]]: iconName,
    [styles[`Icon_${className}`]]: className,
    [styles[`Icon_${pos}`]]: pos,
    [styles[`Icon_color_${color}`]]: color,
  });

  return (
    <i
      role={role}
      aria-label={description}
      alt={description}
      className={classNames}
      style={{ fontSize: `${size}rem` }}
      {...prop}
    ></i>
  );
};

/**
 * Default value of Icon Component
 * */
Icon.defaultProps = {
  description: 'Provide a decription',
  iconName: 'home',
  size: 1,
};

Icon.propTypes = {
  /**
   * HTML role attribute
   * */
  role: PropTypes.string,
  /**
   * Icon Id name
   * */
  iconName: PropTypes.string,
  /**
   * HTML description attribue
   * */
  description: PropTypes.string.isRequired,
  /**
   * Custom Class Names
   * */
  className: PropTypes.string,
  /**
   * If used with text, specify whether the icon should be in front or end
   * */
  pos: PropTypes.oneOf(positions),
  /**
   * Specify the size of the icon (100%) based
   * e.g. size 2 == 2rem
   * */
  size: PropTypes.number,
  /**
   * Color the icon with theme colors
   */
  color: PropTypes.oneOf(colors),
};

export default Icon;
