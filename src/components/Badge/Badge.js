import React from 'react';
import styles from './Badge.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

/**
 * Two different theme available for badge
 */
const theme = ['primary', 'primary-outline'];

/**
 *
 * A badge gives more information to the uer of the current status or
 * information about user or events.
 */
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

/**
 * Default values of badge
 */
Badge.defaultProps = {
  theme: 'primary',
};

Badge.propTypes = {
  /**
   * content of the badge
   */
  children: PropTypes.string,
  /**
   * theme of the badge
   */
  theme: PropTypes.oneOf(theme),
  /**
   * determines whether the content of component will wrap or not
   */
  wrap: PropTypes.bool,
  /**
   * determines if the badge will have a shadow or not
   */
  shadow: PropTypes.bool,
};

export default Badge;
