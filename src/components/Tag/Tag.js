import React from 'react';
import styles from './Tag.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

/**
 * Different designs of Tags available
 */
const type = ['info', 'danger', 'success', 'warning', 'light', 'dark'];

/**
 *
 * Tag is a short piece of phrase that conveys what the overall web page or documentation is.
 */
const Tag = ({ children, className, type, wrap, ...props }) => {
  const classNames = cn(className, styles.Tag, {
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

Tag.propTypes = {
  /**
   * Content of the tag
   */
  children: PropTypes.string,
  /**
   * Optional Custom Class Names
   */
  className: PropTypes.string,
  /**
   * Design of tag
   */
  type: PropTypes.oneOf(type),
  /**
   * determines if the content of the tag will wrap or not
   */
  wrap: PropTypes.bool,
};

export default Tag;
