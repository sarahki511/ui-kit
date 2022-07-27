import React from 'react';
import Tag from './Tag';

export default {
  title: 'Components/UI Elements/Tag',
  component: Tag,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Specify the content of the Tag',
    },
    type: {
      control: 'select',
      options: ['info', 'danger', 'success', 'warning', 'light', 'dark'],
      description: 'Specifiy the type of the Tag',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    wrap: {
      control: 'boolean',
      description: 'Optional prop to specify whether Tag content will wrap',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    shadow: {
      control: 'boolean',
      description: 'Optional prop to specify whether Tag will have box shadow',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const btnTypes = ['primary', 'primary-outline'];

export const TagWithIcon = (args) => (
  <>
    <Tag {...args} />
    <Tag type="danger">Tag</Tag>
    <Tag type="warning" shadow>
      Tag
    </Tag>
  </>
);

TagWithIcon.args = {
  children: 'Tag',
  type: 'info',
};

export const TagTypes = (args) => (
  <>
    {btnTypes.map((e) => (
      <div
        style={{
          display: 'inline-block',
          padding: '0.3rem',
        }}
      >
        <Tag {...args} type={e}>
          {e}
        </Tag>
      </div>
    ))}
  </>
);

TagTypes.args = {
  children: 'Tag',
};

const typesDesc = `
| Type | Description |
| ---- | ----------- |
| \`primary\` | Fill Tag with primary color |
| \`primary-outline\` | Primary color border with light fill |
`;

TagTypes.story = {
  name: 'Tag types',
  parameters: {
    docs: {
      storyDescription: typesDesc,
    },
  },
};

export const TagShadow = (args) => (
  <>
    <Tag type="primary" shadow>
      Tag
    </Tag>
    <Tag type="primary-outline" shadow>
      Tag
    </Tag>
  </>
);
