import React, { useState } from 'react';
import styles from './ReadMore.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';

const ReadMoreLink = ({ handleToggleClick, showMore, text }) => {
  const iconName = showMore ? 'circle-down' : 'circle-up';
  const size = 10 / 16;
  return (
    <Link onClick={handleToggleClick}>
      {text}
      <Icon
        iconName={iconName}
        description={
          iconName === 'circle-down' ? 'icon arrow down' : 'icon arrow up'
        }
        size={size}
        pos="end"
      />
    </Link>
  );
};

/**
 *
 * ReadMore allows the users to collapse and expand certain content,
 * allowing the web page to have more space and flexibility.
 */
const ReadMore = ({
  children,
  className,
  collapseLinkText,
  expankLinkText,
  fade,
  maxCollapsedHeight,
  scrollIntoView,
  props,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(0);
  const handleToggleClick = (e) => {};

  const classNames = cn(styles.ReadMore, {
    // [styles[`ReadMore_${theme}`]]: theme,
    // [styles[`ReadMore_${size}`]]: size,
    // [styles[`ReadMore_borderRadius_${borderRadius}`]]: borderRadius,
    // [styles[`ReadMore_disabled`]]: disabled,
    // [styles[`ReadMore_icon`]]: icon,
  });
  return <ReadMoreLink handleToggleClick={handleToggleClick} />;
};

/**
 * icon default values
 */
ReadMore.defaultProps = {
  collapseLinkText: 'Read Less',
  expankLinkText: 'Read More',
  fade: false,
  scrollIntoView: true,
};

ReadMore.propTypes = {
  /**
   * content of the component
   */
  children: PropTypes.string.isRequired,
  /**
   * custom classname
   */
  className: PropTypes.string,
  /**
   * Optional custom text to collapse text.
   * Default will be 'Read Less'
   */
  collapseLinkText: PropTypes.string,
  /**
   * Optional custom text to expand text.
   * Default will be 'Read More'
   */
  expankLinkText: PropTypes.string,
  /**
   * Set fade
   */
  fade: PropTypes.bool,
  /**
   * Optional maximum height when the content is collapsed
   */
  maxCollapsedHeight: PropTypes.number,
  /**
   * Can enable or disable scroll into view when expanding text
   */
  scrollIntoView: PropTypes.bool,
};

export default ReadMore;
