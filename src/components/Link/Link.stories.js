import React from 'react';
import Link from './Link';

export default {
  title: 'Components/UI Elements/Link',
  component: Link,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Specify the content of the Link',
    },
    className: {
      control: 'text',
      description: 'Specify the custom class name (optional)',
    },
    href: {
      control: 'text',
      description: 'Specify the href to navigate to some link',
    },
    inline: {
      control: 'boolean',
      description: 'Specify whether the link will be underlined at all state',
    },
  },
};

const linkStates = ['link-hover', 'link-visited', 'link-focus', 'link-active'];

export const LinkBasic = (args) => (
  <>
    <Link {...args} />
  </>
);

LinkBasic.args = {
  children: 'Link',
};

export const LinkStates = (args) => (
  <>
    {linkStates.map((e) => (
      <div
        style={{
          display: 'inline-block',
          padding: '0.2rem',
        }}
      >
        <Link {...args} className={e}>
          {e}
        </Link>
      </div>
    ))}
  </>
);

LinkStates.args = {
  children: 'Link',
};

const stateDesc = `
| Type | Description |
| ---- | ----------- |
| \`hover\` | Underline and darken the link when the cursor is on the component |
| \`visited\` | Indicate that the link has been visited before by using a darker color |
| \`focus\` | When the user clicks on the link, the link will darken |
| \`active\` | Currently active link will darken |
`;

LinkStates.story = {
  name: 'Link States',
  parameters: {
    docs: {
      storyDescription: stateDesc,
    },
  },
};
