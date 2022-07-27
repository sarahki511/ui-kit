import React, { Component } from 'react';
import styles from './Tag.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const type = ['info', 'danger', 'success', 'warning', 'light', 'dark'];

Component.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(type),
  wrap: PropTypes.bool,
};

const Tag = ({ children, type, wrap, ...props }) => {
  const classNames = cn(styles.Tag, {
    [styles[`Tag_${type}`]]: type,
    [styles[`Tag_wrap}`]]: wrap,
  });
  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

Tag.defaultProps = {
  type: 'primary',
};

export default Tag;
