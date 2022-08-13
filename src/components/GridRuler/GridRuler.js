import React, { Component } from 'react';
import styles from './GridRuler.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

const GridRuler = (props) => {
  const classNames = cn(styles.GridRuler, {
    [styles[`GridRuler_spacing_${props.spacing}`]]: props.spacing,
  });
  console.log(classNames);
  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div className={styles.GridRuler_item} key={number} />
      ))}
    </div>
  );
};

GridRuler.propTypes = {
  spacing: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default GridRuler;
