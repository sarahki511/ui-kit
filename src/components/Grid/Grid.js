import React from 'react';
import styles from './Grid.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

/**
 * Cols are spread into 12 cols
 */
const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
/**
 * options to align content horizontally
 */
const justifyContent = ['flex-start', 'center', 'flex-end', 'space-between'];
/**
 * options to align content vertically
 */
const alignItems = ['flex-start', 'center', 'flex-end'];
/**
 * 3 spacing options
 */
const spacing = ['sm', 'md', 'lg'];

/**
 *
 * Grid createa a responsive layout of the content depending on the screen size/ breakpoints
 */
const Grid = (props) => {
  const classNames = cn(styles.Grid, {
    [styles.Grid_container]: props.container,
    [styles.Grid_item]: props.item,
    [styles[`Grid_xs_${props.xs}`]]: props.xs,
    [styles[`Grid_sm_${props.sm}`]]: props.sm,
    [styles[`Grid_md_${props.md}`]]: props.md,
    [styles[`Grid_lg_${props.lg}`]]: props.lg,
    [styles[`Grid_spacing_${props.spacing}`]]: props.spacing,
    [styles[`Grid_justifyContent_${props.justifyContent}`]]:
      props.justifyContent,
    [styles[`Grid_alignItems_${props.alignItems}`]]: props.alignItems,
  });
  return (
    <div className={classNames} {...props}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  /**
   * content of grid
   */
  children: PropTypes.bool,
  /**
   * bool val of whether the grid is a container of other divs
   */
  container: PropTypes.bool,
  /**
   * bool val that determines if this grid is an item that displays comp to user
   */
  item: PropTypes.bool,
  /**
   * when the screen is xs (mobile phone), determine how many grids
   * the content will take up
   */
  xs: PropTypes.oneOf(cols),
  /**
   * when the screen is sm, determine how many grids
   * the content will take up
   */
  sm: PropTypes.oneOf(cols),
  /**
   * when the screen is md, determine how many grids
   * the content will take up
   */
  md: PropTypes.oneOf(cols),
  /**
   * when the screen is lg, determine how many grids
   * the content will take up
   */
  lg: PropTypes.oneOf(cols),
  /**
   * determine how far apart the items will be from each other
   */
  spacing: PropTypes.oneOf(spacing),
  /**
   * align horizonatally
   */
  justifyContent: PropTypes.oneOf(justifyContent),
  /**
   * align vertically
   */
  alignItems: PropTypes.oneOf(alignItems),
};

export default Grid;
