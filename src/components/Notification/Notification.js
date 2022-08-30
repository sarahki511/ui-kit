import React from 'react';
import cn from 'classnames';
import styles from './Notification.module.scss';
import PropTypes from 'prop-types';
import Icon from './../Icon/Icon';
import Text from './../Text/Text';

/**
 * Information Bars are used to deliver important message to the notifications. (Usually at the top of the Page)
 * */
const Notification = ({
  className,
  ariaLable,
  onClick,
  iconDescription,
  iconName,
  description,
  notificationType,
  type,
  ...props
}) => {};

Notification.propTypes = {
  /**
   * Custom Class Name
   * */
  className: PropTypes.string,
  /**
   * Define a string value that labels an interactive element
   * */
  ariaLable: PropTypes.string,
  /**
   * Optional custom function to call when clicked
   * */
  onClick: PropTypes.func,
  /**
   * Notification image on profile
   * */
  iconDescription: PropTypes.string,
  /**
   * Specify Name of icon, if the default x icon is not desired
   * */
  iconName: PropTypes.string,
  /**
   * Description of the icon when no image is provided
   * */
  description: PropTypes.string,
  /**
   * Notification can be either inline or toast
   * */
  notificationType: PropTypes.oneOf(['inline', 'toast']),
  /**
   * Specify the type of button
   */
  type: PropTypes.string,
};

Notification.defaultProps = {
  ariaLable: 'Notification Close Button',
  iconName: 'cross',
  notificationType: 'inline',
  type: 'button',
  iconDescription: 'Notification close icon',
};

export default Notification;
