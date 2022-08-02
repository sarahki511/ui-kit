import React, { Component } from 'react';
import styles from './Tag.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

/**
 * Different designs of Tags available
 */
const type = ['info', 'danger', 'success', 'warning', 'light', 'dark'];

Component.propTypes = {
  /**
   * Content of the tag
   */
  children: PropTypes.string,
  /**
   * Design of tag
   */
  type: PropTypes.oneOf(type),
  /**
   * determines if the content of the tag will wrap or not
   */
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

/**
 * Default props of tag
 */
Tag.defaultProps = {
  type: 'primary',
};

export default Tag;
