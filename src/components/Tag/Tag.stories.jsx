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
  },
};

const tagTypes = ['info', 'danger', 'success', 'warning', 'light', 'dark'];

export const TagBasic = (args) => (
  <>
    <Tag {...args} />
    <Tag type="success">Tag</Tag>
    <Tag type="danger" shadow>
      Tag
    </Tag>
  </>
);

TagBasic.args = {
  children: 'Tag',
  type: 'info',
};

export const TagTypes = (args) => (
  <>
    {tagTypes.map((e) => (
      <div
        style={{
          display: 'inline-block',
          background: e === 'light' ? '#614e6e' : '',
          padding: '0.2rem',
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
| \`info\` | Fill Tag with primary color |
| \`danger\` | Primary color border with light fill |
| \`success\` | Fill Tag with primary color |
| \`warning\` | Primary color border with light fill |
| \`light\` | Fill Tag with primary color |
| \`dark\` | Primary color border with light fill |
`;

TagTypes.story = {
  name: 'Tag types',
  parameters: {
    docs: {
      storyDescription: typesDesc,
    },
  },
};

// export const TagShadow = (args) => (
//   <>
//     <Tag type="primary" shadow>
//       Tag
//     </Tag>
//     <Tag type="primary-outline" shadow>
//       Tag
//     </Tag>
//   </>
// );
