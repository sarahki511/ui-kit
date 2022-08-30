import React from 'react';
import Link from './../Link/Link';
import InfoBar from './InfoBar';

export default {
  title: 'Components/UI Elements/Info Bar',
  component: Link,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
};

export const InfoBarBasic = (args) => (
  <InfoBar {...args}>
    Info: <Link href="#">Click Here</Link> Use with Link component for more
    Information
  </InfoBar>
);

InfoBarBasic.args = {};
