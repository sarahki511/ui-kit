import React from 'react';
import styles from './Credits.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

/**
 *
 * The Credits component Gives credit to the author of the image.
 */
const Credits = ({ children, classname, info, ...props }) => {
  const classNames = cn(styles.Credits, styles.classname);
  return (
    <div>
      <div className={classNames} {...props}>
        <div className={cn({ [styles[`Credits_info`]]: info })}>{info}</div>
        {children}
      </div>
    </div>
  );
};

Credits.propTypes = {
  /**
   * Image in which the credit goes to
   */
  children: PropTypes.node,
  /**
   * Custom classname
   */
  classname: PropTypes.string,
  /**
   * Content that gives credit to author
   */
  info: PropTypes.string,
};

export default Credits;
