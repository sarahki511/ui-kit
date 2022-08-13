import React from 'react';
import Credits from './Credits';
import imageFile from './../../assets/knife-slices-a-zucchini-in-half.jpg';

export default {
  title: 'Components/UI Elements/Credits',
  component: Credits,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    children: {
      control: 'node',
      description: 'Includes an img tag',
    },
    classname: {
      control: 'text',
      description: 'Specify the custom class name (optional)',
    },
    info: {
      control: 'text',
      description: 'Gives credit/ source from where the image is from',
    },
  },
};

export const CreditsBasic = (args) => (
  <>
    <Credits {...args}>
      <img alt="Default" src={imageFile} />
    </Credits>
  </>
);

CreditsBasic.args = {
  info: 'Photo By: Avelino Calvar Martinez',
};
