import React, { Component } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

/**
 * premade/ default sizes of the button
 */
const sizes = ['sm', 'md', 'lg'];
/**
 * Determines the roundness of the button
 */
const radius = ['sm', 'md', 'lg', 'xl', 'xxl', 'pill'];
/**
 * HTML type attribute
 * */
const type = ['submit', 'reset', 'button'];
/**
 * types of themes available for users to use
 */
const theme = [
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
 *
 * A button conveys a specific call to action, whether it is a submission or payment.
 * This component will make sure that the user knows exactly what will happen if the user clicks on the button.
 */
const Button = ({
  children,
  theme,
  size,
  borderRadius,
  icon,
  disabled,
  iconInFront,
  props,
}) => {
  const classNames = cn(styles.Button, {
    [styles[`Button_${theme}`]]: theme,
    [styles[`Button_${size}`]]: size,
    [styles[`Button_borderRadius_${borderRadius}`]]: borderRadius,
    [styles[`Button_disabled`]]: disabled,
    [styles[`Button_icon`]]: icon,
  });

  const position = iconInFront ? 'front' : 'end';

  //if the user desires to put an icon
  if (icon) {
    // if no text/ children is wanted
    if (!children) {
      return (
        <button className={classNames} {...props}>
          <Icon iconName={icon} />
        </button>
      );
    }
    // if user wants the icon to be in the front
    else if (position === 'front') {
      return (
        <button className={classNames} {...props}>
          <Icon iconName={icon} pos={position} />
          {children}
        </button>
      );
    }
    // else icon at the end
    else {
      return (
        <button className={classNames} {...props}>
          {children}
          <Icon iconName={icon} pos={position} />
        </button>
      );
    }
  }
  // if no icon, dont include icon attribute
  else {
    return (
      <button className={classNames} {...props}>
        {children}
      </button>
    );
  }
};

/**
 * icon default values
 */
Button.defaultProps = {
  iconInFront: false,
  type: 'button',
  theme: 'primary',
  size: 'md',
  borderRadius: 'md',
};

Button.propTypes = {
  /**
   * content of the component
   */
  children: PropTypes.string,
  /**
   * select of the theme of the button
   */
  theme: PropTypes.oneOf(theme),
  /**
   * size of the button
   */
  size: PropTypes.oneOf(sizes),
  /**
   * roundness of button
   */
  borderRadius: PropTypes.oneOf(radius),
  /**
   * determines wheter the button will be disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * icon name
   */
  icon: PropTypes.string,
  /**
   * HTML role attribute
   */
  role: PropTypes.string,
  /**
   * HTML type attribue
   */
  type: PropTypes.oneOf(type),
  /**
   * HTML href attribute
   */
  href: PropTypes.string,
  /**
   * True if icon in front else icon at the end
   */
  iconInFront: PropTypes.bool,
};

export default Button;
