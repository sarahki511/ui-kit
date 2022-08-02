import React, { Component } from 'react';
import styles from './List.module.scss';
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
 * List referrences the user to certain data/ document by simple clicking or tapping
 * */
const List = ({ children, className, href, inline, ...props }) => {
  const classNames = cn(styles.List, {
    [styles[`List_inline}`]]: inline,
    [styles[`List_${className}`]]: className,
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
List.defaultProps = {
  inline: false,
};

export default List;
