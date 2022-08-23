import React from 'react';
import ReadMore from './ReadMore';

export default {
  title: 'Components/UI Elements/Read More',
  component: ReadMore,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
};

export const ReadMoreBasic = (args) => (
  <>
    <ReadMore {...args} />
  </>
);

ReadMoreBasic.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare
  aenean euismod elementum nisi quis. Sapien pellentesque habitant morbi
  tristique senectus et. Nunc sed id semper risus. Eros in cursus turpis
  massa tincidunt. Eget mi proin sed libero enim sed. Suspendisse interdum
  consectetur libero id faucibus nisl tincidunt eget. Est sit amet facilisis
  magna. Massa enim nec dui nunc mattis. Nunc sed id semper risus in
  hendrerit. Nulla facilisi cras fermentum odio eu feugiat. Et netus et
  malesuada fames ac turpis. Enim eu turpis egestas pretium. Sit amet
  porttitor eget dolor morbi. Bibendum neque egestas congue quisque egestas
  diam in arcu. Tellus mauris a diam maecenas sed. Ornare arcu odio ut sem
  nulla pharetra. Viverra justo nec ultrices dui. Dolor purus non enim
  praesent elementum facilisis leo vel. Et netus et malesuada fames ac
  turpis. Id donec ultrices tincidunt arcu. Scelerisque eu ultrices vitae
  auctor. Suspendisse potenti nullam ac tortor vitae purus faucibus. Neque
  vitae tempus quam pellentesque nec nam aliquam sem. Enim praesent
  elementum facilisis leo vel fringilla est ullamcorper eget. Nunc
  scelerisque viverra mauris in aliquam sem. Quis eleifend quam adipiscing
  vitae proin sagittis nisl rhoncus mattis. Aliquam eleifend mi in nulla
  posuere sollicitudin aliquam. Iaculis nunc sed augue lacus viverra. In
  mollis nunc sed id semper risus in hendrerit. Libero justo laoreet sit
  amet cursus. Nunc mi ipsum faucibus vitae aliquet nec. Cursus euismod quis
  viverra nibh cras pulvinar. In nulla posuere sollicitudin aliquam.`,
  maxCollapsedHeight: 100,
  fade: true,
};
