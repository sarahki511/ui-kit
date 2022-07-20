import React, { Component } from 'react';
import styles from './Grid.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types';

const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const justifyContent = ["flex-start", "center", "flex-end", "space-between"]
const alignItems = ["flex-start", "center", "flex-end"]


Component.propTypes = {
  children: PropTypes.bool,
  container: PropTypes.bool,
  item: PropTypes.bool,
  xs: PropTypes.oneOf(cols),
  sm: PropTypes.oneOf(cols),
  md: PropTypes.oneOf(cols),
  lg: PropTypes.oneOf(cols),
  spacing: PropTypes.oneOf(["sm", "md", "lg"]),
  justifyContent: PropTypes.oneOf(justifyContent),
  alignItems: PropTypes.oneOf(alignItems)
}

const Grid = (props) => {
  const classNames = cn({
    [styles.Grid_container]: props.container,
    [styles.Grid_item]: props.item,
    [styles[`Grid_xs_${props.xs}`]]: props.xs,
    [styles[`Grid_sm_${props.sm}`]]: props.sm,
    [styles[`Grid_md_${props.md}`]]: props.md,
    [styles[`Grid_lg_${props.lg}`]]: props.lg,
    [styles[`Grid_spacing_${props.spacing}`]]: props.spacing,
    [styles[`Grid_justifyContent_${props.justifyContent}`]]: props.justifyContent,
    [styles[`Grid_alignItems_${props.alignItems}`]]: props.alignItems
  });
  return <div className={classNames} {...props}>{props.children}</div>
}

export default Grid; 