import React from 'react';
import styles from './List.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

/**
 * List are used to group and specify lists of information
 * */
const ListItem = ({ children, className, title, iconName, ...props }) => {
  const classNames = cn(styles[`List_list_item`]);
  return (
    <li className={classNames} {...props}>
      {iconName && (
        <Icon
          style={{ 'line-height': '1.6rem', 'margin-right': '3px' }}
          iconName={iconName}
        ></Icon>
      )}
      {title && (
        <span className={cn(styles[`List_element_title`])}>{title}</span>
      )}
      <span className={cn(styles[`List_element_content`])}>{children}</span>
    </li>
  );
};

ListItem.propTypes = {
  /**
   * The children content of the list item
   * */
  children: PropTypes.node,
  /**
   * Custom Class names
   * */
  className: PropTypes.string,
  /**
   * Custom iconName to replace bullet points
   */
  iconName: PropTypes.string,
  /**
   * Specifies the the color of icon (hexcode)
   */
  // iconColor: PropTypes.string,
};

export default ListItem;
