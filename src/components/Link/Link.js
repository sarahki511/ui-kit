import React from 'react';
import styles from './Link.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

/**
 * Link referrences the user to certain data/ document by simple clicking or tapping
 * */
const Link = ({ children, className, href, inline, ...props }) => {
  const classNames = cn(className, styles.Link, {
    [styles[`Link_inline}`]]: inline,
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

Link.propTypes = {
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

export default Link;
