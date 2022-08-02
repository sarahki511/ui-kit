import React, { Component } from 'react';
import styles from './Link.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

Component.propTypes = {
  /**
   * The children/ content of the component
   * */
  children: PropTypes.string,
  /**
   * Custom Class names
   * */
  className: PropTypes.string,
  /**
   * HTML href attribute
   * */
  href: PropTypes.string,
  /**
   * stylistic choice of text-decoration with underline
   * */
  inline: PropTypes.string,
};

/**
 * Link referrences the user to certain data/ document by simple clicking or tapping
 * */
const Link = ({ children, className, href, inline, ...props }) => {
  const classNames = cn(styles.Link, {
    [styles[`Link_inline}`]]: inline,
    [styles[`Link_${className}`]]: className,
  });
  return (
    <a href={href} className={classNames} {...props}>
      {children}
    </a>
  );
};

/**
 * Defualt value includes a stylistic choice of no text decoration
 * */
Link.defaultProps = {
  inline: false,
};

export default Link;
