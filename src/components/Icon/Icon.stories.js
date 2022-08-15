import React from 'react';
import Icon from './Icon';

export default {
  title: 'Components/UI Elements/Icon',
  component: Icon,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    description: {
      control: 'text',
      description: 'Specify the Icon description',
    },
    iconName: {
      control: 'text',
      description: 'Specify the name of the Icon to display',
    },
    className: {
      control: 'text',
      description: 'Specify the custom class name (optional)',
    },
    role: {
      control: 'text',
      description: 'Specify the role attribute',
    },
    // size: {
    //   control: { type: 'number', min: 0, max: 30, step: 1 },
    //   description: 'Specify the size of Icon',
    // },
    pos: {
      control: 'select',
      options: ['front', 'end', 'none'],
      description:
        'specify if the icon will be in front or end of text (use only if text is involved)',
    },
  },
};

export const IconBasic = (args) => (
  <>
    <Icon {...args} />
  </>
);

IconBasic.args = {
  iconName: 'home',
  size: 1,
  description: 'Icon of a default home',
};
