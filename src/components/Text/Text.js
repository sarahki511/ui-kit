import React from 'react';
import cn from 'classnames';
import styles from './Text.module.scss';
import PropTypes from 'prop-types';

const spacings = [
  '4xs',
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
];
const textTypes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'title',
  'subtitle',
  'p',
  'i',
  'bold',
  'strong',
  'sup',
  'a',
  'code',
  'inline-highlight',
  'caption',
];

export const textDict = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h1',
  subtitle: 'h3',
  p: 'p',
  caption: 'div',
};

/**
 * Texts is a representative of symbol displayed on the screen for better navigation and understanding
 * */
const Text = ({
  children,
  className,
  topSpacing,
  bottomSpacing,
  type,
  ...pos
}) => {
  const textTag = {
    name: textDict[type] ? textDict[type] : textDict['caption'],
  };
  const classNames = cn(styles.Text, {
    [styles[`Text_topSpacing_${topSpacing}`]]: topSpacing,
    [styles[`Text_bottomSpacing_${bottomSpacing}`]]: bottomSpacing,
    [styles[`Text_type_${type}`]]: type,
    [styles[`Text_${className}`]]: className,
  });

  return (
    <textTag.name className={classNames} {...pos}>
      {children}
    </textTag.name>
  );
};

/**
 * Default value of Text Component
 * */
Text.defaultProps = {
  topSpacing: 'sm',
  bottomSpacing: 'sm',
  type: 'caption',
};

Text.propTypes = {
  /**
   * Text content
   * */
  children: PropTypes.string,
  /**
   * Custom Class Name
   * */
  className: PropTypes.string,
  /**
   * Specify the top spacings of the text
   * */
  topSpacing: PropTypes.oneOf(spacings),
  /**
   * Specify the bottom spacings of the text
   * */
  bottomSpacing: PropTypes.oneOf(spacings),
  /**
   * Specify the type of texts
   * */
  type: PropTypes.oneOf(textTypes),
  /**
   * Specify if text should be centered
   */
  center: PropTypes.bool,
};

export default Text;