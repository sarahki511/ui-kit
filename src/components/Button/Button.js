import React, { Component } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon'

const sizes = ["sm", "md", "lg"];
const radius = ["sm", "md", "lg", "xl", "xxl", "pill"];
const states = ["default", "hover", "active", "focus", "disabled"];
const type = ["submit", "reset", "button"]
const theme = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"]

Component.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.oneOf(theme),
  state: PropTypes.oneOf(states),
  size: PropTypes.oneOf(sizes),
  borderRadius: PropTypes.oneOf(radius),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.oneOf(type),
  href: PropTypes.string,
  iconInFront: PropTypes.bool,
  outline: PropTypes.bool
}


const Button = ({children, theme, state, size, borderRadius, icon, disabled, iconInFront, outline, props}) => {
  const classNames = cn(styles.Button, {
    [styles[`Button_${theme}`]]: theme,
    [styles[`Button_${size}`]]: size,
    [styles[`Button_borderRadius_${borderRadius}`]]: borderRadius,
    [styles[`Button_disabled`]]: disabled,
    [styles[`Button_icon`]]: icon,
    [styles[`Button_outline`]]: outline
  });

  const position = iconInFront ? "front" : "end"
  console.log(position);
  
  const icon_comp = <Icon iconName={icon} pos={position}/>
    
  console.log(classNames)
  if (icon) {
    if (!children) {
      return(
        <button className={classNames} {...props}><Icon iconName={icon}/></button>);
    }
    else if (position == "front") {
      return(<button className={classNames} {...props}><Icon iconName={icon} pos={position}/>{children}</button>);
    } else {
      return(<button className={classNames} {...props}>{children}<Icon iconName={icon} pos={position}/></button>);
    }
  }
  else {
    return (
      <button className={classNames} {...props}>{children}</button>
    );
  }
}

export default Button;