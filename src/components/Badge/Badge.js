import React, { Component } from 'react';
import styles from './Badge.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const theme = ['primary', 'primary-outline'];

Component.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.oneOf(theme),
  wrap: PropTypes.bool,
  shadow: PropTypes.bool,
};

const Badge = ({ children, theme, wrap, shadow, ...props }) => {
  const classNames = cn(styles.Badge, {
    [styles[`Badge_${theme}`]]: theme,
    [styles[`Badge_wrap}`]]: wrap,
    [styles[`Badge_shadow`]]: shadow,
  });
  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

Badge.defaultProps = {
  theme: 'primary',
};

export default Badge;
