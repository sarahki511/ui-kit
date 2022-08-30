import React from 'react';
import cn from 'classnames';
import styles from './InfoBar.module.scss';
import PropTypes from 'prop-types';

/**
 * Information Bars are used to deliver important message to the users. (Usually at the top of the Page)
 * */
const InfoBar = ({ children, className, ...props }) => {
  const classNames = cn(styles.InfoBar, className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

InfoBar.propTypes = {
  /**
   * InfoBar content
   * */
  children: PropTypes.node,
  /**
   * Custom Class Name
   * */
  className: PropTypes.string,
};

export default InfoBar;
