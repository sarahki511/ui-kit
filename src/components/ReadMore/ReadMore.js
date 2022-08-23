import React, { useState, useRef } from 'react';
import styles from './ReadMore.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';

const ReadMoreLink = ({ handleToggleClick, showMore, text }) => {
  const iconName = showMore ? 'circle-up' : 'circle-down';
  const size = 1;
  return (
    <Link style={{ display: 'block' }} onClick={handleToggleClick}>
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
}) => {
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(0);
  const readMoreRef = useRef();
  const handleToggleClick = (e) => {
    e.preventDefault();
    const textHeight = readMoreRef.current.clientHeight;
    console.log(textHeight);
    setShowMore(!showMore);
    setHeight(textHeight);
  };

  const classNames = cn(styles.ReadMore, {
    [styles[`ReadMore_${className}`]]: className,
    [styles[`ReadMore_fade`]]: fade,
    [styles[`ReadMore_max_collapsed_height`]]: maxCollapsedHeight,
    [styles[`ReadMore_expanded`]]: showMore,
  });

  // if maxCollapsedHeight is not defined by user, there is not maxHeight
  // if maxCollapsedHeight is defined and the content is collapsed, use user defined values
  // if maxCollapsedHeight is defined and the content is expanded, use the expanded height + some padding
  const contentHeight = !maxCollapsedHeight
    ? { undefined }
    : !showMore
    ? { maxHeight: maxCollapsedHeight }
    : { maxHeight: height + 30 };

  const contentClassNames = cn({
    [styles.content]: true,
  });
  return (
    <div className={classNames}>
      <div className={contentClassNames} style={contentHeight}>
        <div ref={readMoreRef}>{showMore && children}</div>
      </div>
      <ReadMoreLink
        handleToggleClick={handleToggleClick}
        showMore={showMore}
        text={showMore ? collapseLinkText : expankLinkText}
      />
    </div>
  );
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
