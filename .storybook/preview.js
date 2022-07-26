import '../src/scss/_global.scss';
import { styled } from '@storybook/theming';
import './storybook.scss';

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
      order: [
        'Getting Started',
        ['Introduction', 'Credits'],
        'Documentation',
        'Example',
        'Components',
      ],
    },
  },
  viewMode: 'docs',
};

import './reset.css';
