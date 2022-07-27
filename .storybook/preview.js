import '../src/scss/_global.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Documentation', 'Example', 'Components'],
    },
  },
};

import './reset.css';
