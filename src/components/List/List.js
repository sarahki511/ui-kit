import React from 'react';
import styles from './List.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const types = ['unstyled', 'unordered', 'ordered'];

/**
 * List referrences the user to certain data/ document by simple clicking or tapping
 * */
const List = ({ children, className, type, ...props }) => {
  const classNames = cn(className, styles.List, {
    [styles[`List_${className}`]]: className,
    [styles[`List_${type}`]]: type,
  });
  return (
    <>
      {type === 'ordered' ? (
        <ol className={classNames} {...props}>
          {children}
        </ol>
      ) : (
        <ul className={classNames} {...props}>
          {children}
        </ul>
      )}
    </>
  );
};

/**
 * Defualt value is a list with no style
 * */
List.defaultProps = {
  type: 'unstyled',
};

List.propTypes = {
  /**
   * The children content of the component
   * Provide List as children
   * */
  children: PropTypes.node,
  /**
   * Custom Class names
   * */
  className: PropTypes.string,
  /**
   * Specifies if the list will be unstyled, unordered, ordered
   * */
  type: PropTypes.oneOf(types),
};

export default List;
