import React from 'react';
import cn from 'classnames';
import styles from './User.module.scss';
import PropTypes from 'prop-types';
import Icon from './../Icon/Icon';
import Text from './../Text/Text';

/**
 * Information Bars are used to deliver important message to the users. (Usually at the top of the Page)
 * */
const User = ({
  className,
  name,
  showName,
  image,
  alt,
  description,
  extendedDescription,
  ...props
}) => {
  const classNames = cn(styles.User, styles.className);
  const imgClassName = cn(styles.User_img, {
    [styles.User_img_with_desc]: description,
  });
  const descClassNames = cn({ [styles.User_description]: description });
  const nameClassName = cn({ [styles.User_name]: description });
  const extendedDescClassNames = cn({
    [styles.User_extended_description]: extendedDescription,
  });
  let avatar;
  if (!image) {
    avatar = (
      <div className={imgClassName}>
        <Icon
          iconName="user"
          size={1}
          description="User default image"
          color="light"
        />
      </div>
    );
  } else {
    avatar = (
      <div className={imgClassName}>
        <img alt={alt} src={image} />
      </div>
    );
  }
  return (
    <div className={classNames} {...props}>
      {avatar}
      {showName && (
        <span>
          <Text className={nameClassName} type="bold">
            {name}
          </Text>
          {description && <div className={descClassNames}>{description}</div>}
        </span>
      )}
      {extendedDescription && (
        <div className={extendedDescClassNames}>{extendedDescription}</div>
      )}
    </div>
  );
};

User.propTypes = {
  /**
   * Custom Class Name
   * */
  className: PropTypes.string,
  /**
   * Name of the user
   * */
  name: PropTypes.string.isRequired,
  /**
   * Name of the user
   * */
  showName: PropTypes.bool,
  /**
   * User image on profile
   * */
  image: PropTypes.string,
  /**
   * Alternate text for the image
   * */
  alt: PropTypes.string,
  /**
   * Description of the icon when no image is provided
   * */
  description: PropTypes.string,
  /**
   * Any additional information about the user (optional)
   * */
  extendedDescription: PropTypes.node,
};

User.defaultProps = {
  showName: true,
  alt: 'User image',
};

export default User;
