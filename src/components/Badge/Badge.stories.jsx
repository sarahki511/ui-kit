import React from 'react';
import Badge from './Badge';

export default {
  title: 'Components/UI Elements/Badge',
  component: Badge,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Specify the content of the Badge',
    },
    theme: {
      control: 'select',
      options: ['primary', 'primary-outline'],
      description: 'Specifiy the theme of the Badge',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    wrap: {
      control: 'boolean',
      description: 'Optional prop to specify whether badge content will wrap',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    shadow: {
      control: 'boolean',
      description:
        'Optional prop to specify whether badge will have box shadow',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const btnThemes = ['primary', 'primary-outline'];

export const BadgeWithIcon = (args) => (
  <>
    <Badge {...args} />
    <Badge theme="primary-outline">Badge</Badge>
    <Badge theme="primary-outline" shadow>
      Badge
    </Badge>
  </>
);

BadgeWithIcon.args = {
  children: 'Badge',
  theme: 'primary',
};

export const BadgeThemes = (args) => (
  <>
    {btnThemes.map((e) => (
      <div
        style={{
          display: 'inline-block',
          padding: '0.3rem',
        }}
      >
        <Badge {...args} theme={e}>
          {e}
        </Badge>
      </div>
    ))}
  </>
);

BadgeThemes.args = {
  children: 'Badge',
};

const themesDesc = `
| Theme | Description |
| ---- | ----------- |
| \`primary\` | Fill Badge with primary color |
| \`primary-outline\` | Primary color border with light fill |
`;

BadgeThemes.story = {
  name: 'Badge themes',
  parameters: {
    docs: {
      storyDescription: themesDesc,
    },
  },
};

export const BadgeShadow = (args) => (
  <>
    <Badge theme="primary" shadow>
      Badge
    </Badge>
    <Badge theme="primary-outline" shadow>
      Badge
    </Badge>
  </>
);
