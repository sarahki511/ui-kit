import React from 'react';
import { withKnobs } from '@storybook/addon-controls';
import Icon from '../Icon/Icon';

import './IconStories.scss';

export default {
  title: 'Components/UI Elements/Icon',
  component: Icon,
};

export const Basic = (args) => (
  <div className="container">
    <div className="iconWrapper">
      <Icon {...args} />
    </div>
  </div>
);
Basic.args = { iconName: 'home' };
