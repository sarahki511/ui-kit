import React, { useState, useRef } from 'react';
import styles from './ReadMore.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';

const ReadMoreLink = ({ handleToggleClick, expanded, text }) => {
  const iconName = expanded ? 'circle-up' : 'circle-down';
  const size = 0.75;
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
 * ReadMore allows the users to collapse and expand content,
 * allowing the web page to have more space and flexibility.
 */
const ReadMore = ({
  children,
  className,
  collapseLinkText,
  expandLinkText,
  fade,
  maxCollapsedHeight,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [textHeight, setHeight] = useState(0);
  const readMoreRef = useRef();
  const handleToggleClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);

    const currHeight = readMoreRef.current.clientHeight;
    console.log(currHeight);
    setHeight(currHeight);
  };

  const classNames = cn(className, styles.ReadMore, {
    [styles[`ReadMore_fade`]]: fade && !expanded,
    [styles[`ReadMore_max_collapsed_height`]]: maxCollapsedHeight,
    [styles[`ReadMore_expandeded`]]: expanded,
  });

  // if maxCollapsedHeight is not defined by user, there is not maxHeight
  // if maxCollapsedHeight is defined and the content is collapsed, use user defined values
  // if maxCollapsedHeight is defined and the content is expandeded, use the expandeded height + some padding
  const contentHeight = !maxCollapsedHeight
    ? { undefined }
    : expanded
    ? { maxHeight: textHeight + 30 }
    : {
        maxHeight: maxCollapsedHeight,
        height: maxCollapsedHeight,
      };

  console.log(contentHeight);
  console.log(textHeight);

  const contentClassNames = cn({
    [styles.content]: true,
  });
  return (
    <div className={classNames}>
      <div className={contentClassNames} style={contentHeight}>
        <div ref={readMoreRef}>
          <Text type="p" topSpacing="3xs">
            {children}
          </Text>
        </div>
      </div>
      <ReadMoreLink
        handleToggleClick={handleToggleClick}
        expanded={expanded}
        text={expanded ? collapseLinkText : expandLinkText}
      />
    </div>
  );
};

/**
 * icon default values
 */
ReadMore.defaultProps = {
  collapseLinkText: 'Read Less',
  expandLinkText: 'Read More',
  fade: false,
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
   * Optional custom text to expanded text.
   * Default will be 'Read More'
   */
  expandLinkText: PropTypes.string,
  /**
   * Set fade
   */
  fade: PropTypes.bool,
  /**
   * Optional maximum height when the content is collapsed
   */
  maxCollapsedHeight: PropTypes.number,
};

export default ReadMore;
