import React from 'react';
import Button from './Button';
import { withKnobs } from '@storybook/addon-controls';

export default {
  title: 'Components/UI Elements/Button',
  component: Button,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Specify the content of the Button',
    },
    theme: {
      control: 'select',
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark',
      ],
      description: 'Specifiy the theme of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Optional prop to specify the type of the Button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    borderRadius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl', 'pill'],
      description: 'Specify the amount of Border radius to apply',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      control: 'text',
      description: 'Optional prop to specify the type of the Icon',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    iconInFront: {
      control: 'boolean',
      description:
        'Optional prop to specify whether icon will be in front or not',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    role: {
      control: 'text',
      description: 'Optional prop to specify the role of the Button',
    },
    type: {
      control: 'radio',
      options: ['button', 'reset', 'submit'],
      description: 'Optional prop to specify the type of the Button',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    href: {
      control: 'text',
      description: 'Optional prop to specify the href of the Button',
    },
  },
};

const btnThemes = [
  'primary',
  'primary-outline',
  'secondary',
  'secondary-outline',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

export const ButtonWithIcon = (args) => (
  <>
    <Button {...args} />
    {''}{' '}
    <Button
      size="md"
      theme="primary-outline"
      borderRadius="md"
      icon="info"
      pos="front"
    ></Button>{' '}
    <Button
      size="md"
      theme="info"
      borderRadius="md"
      icon="info"
      iconInFront
      outline
    >
      Button
    </Button>
  </>
);

ButtonWithIcon.args = {
  children: 'Button',
  theme: 'primary',
  size: 'md',
  borderRadius: 'md',
  icon: 'info',
  iconInFront: false,
  type: 'button',
};

export const ButtonThemes = (args) => (
  <>
    {btnThemes.map((e) => (
      <div
        style={{
          display: 'inline-block',
          padding: '0.3rem',
        }}
      >
        <Button {...args} theme={e}>
          {e}
        </Button>
      </div>
    ))}
  </>
);

ButtonThemes.args = {
  children: 'Button',
  size: 'md',
  borderRadius: 'md',
};

const themesDesc = `
| Theme | Description |
| ---- | ----------- |
| \`primary\` | Name of the resource |
| \`primary-outline\` | Path to the resource |
| \`secondary\` | Path to the resource |
| \`secondary-outline\` | Path to the resource |
| \`success\` | Path to the resource |
| \`info\` | Path to the resource |
| \`warning\` | Path to the resource |
| \`danger\` | Path to the resource |
| \`light\` | Path to the resource |
| \`dark\` | Path to the resource |
`;

ButtonThemes.story = {
  name: 'Button themes',
  parameters: {
    layout: 'centered',
    docs: {
      storyDescription: themesDesc,
    },
  },
};

export const ButtonRegular = (args) => (
  <>
    <Button {...args} />
  </>
);

ButtonRegular.args = {
  children: 'Regular Button',
  size: 'md',
  borderRadius: 'md',
  theme: 'primary',
};

export const ButtonSmall = (args) => (
  <>
    <Button {...args} />
  </>
);

ButtonSmall.args = {
  children: 'Small Button',
  size: 'sm',
  borderRadius: 'sm',
  theme: 'primary',
};

const smallBtnDesc = `Small buttons may be used when there is not enough space for a
regular sized button. Small button should have three wordsor less.`;

ButtonSmall.story = {
  name: 'Small Button',
  parameters: {
    docs: {
      storyDescription: smallBtnDesc,
    },
  },
};

export const LargeButton = (args) => (
  <>
    <Button {...args} />
  </>
);

LargeButton.args = {
  children: 'Large Button',
  size: 'lg',
  borderRadius: 'lg',
  theme: 'primary',
};

const lgBtnDesc = `Increase button size to bring prominence to buttons that have major impact. Use large buttons sparingly, as layouts should generally have only one large button.`;

LargeButton.story = {
  name: 'Large Button',
  parameters: {
    docs: {
      storyDescription: lgBtnDesc,
    },
  },
};
