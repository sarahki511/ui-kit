import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Icon.module.scss';
import PropTypes from 'prop-types';

const positions = ['front', 'end'];

Component.propTypes = {
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
   * e.g. size 2 == 200%
   * */
  size: PropTypes.number,
};

/**
 * Icons is a representative of symbol displayed on the screen for better navigation and understanding
 * */
const Icon = ({ role, iconName, size, description, className, ...pos }) => {
  const classNames = cn(styles.Icon, {
    [styles[`Icon_${iconName}`]]: iconName,
    [styles[`Icon_${className}`]]: className,
    [styles[`Icon_${pos}`]]: pos,
    [styles[`Icon_size`]]: size,
  });

  return (
    <i
      role={role}
      aria-label={description}
      alt={description}
      className={classNames}
      {...pos}
    ></i>
  );
};

/**
 * Default value of Icon Component
 * */
Icon.defaultProps = {
  description: 'Provide a decription',
  iconName: 'home',
};

export default Icon;
