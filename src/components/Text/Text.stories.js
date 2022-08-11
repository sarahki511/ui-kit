import React from 'react';
import Text from './Text';
import markdown from './README.mdx';

export default {
  title: 'Components/UI Elements/Text',
  component: Text,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
  argTypes: {
    children: {
      control: 'string',
      description: 'Specify the content of text',
    },
    className: {
      control: 'text',
      description: 'Specify the custom class name (optional)',
    },
    topSpacing: {
      control: 'text',
      description: 'Optional parameters to customize top margin',
    },
    bottomSpacing: {
      control: 'text',
      description: 'Optional parameters to customize bottom margin',
    },
    type: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'title',
        'subtitle',
        'p',
        'i',
        'bold',
        'strong',
        'sup',
        'a',
        'code',
        'inline-highlight',
        'caption',
      ],
      description: 'Specify the type of text',
    },
    center: {
      control: 'boolean',
      description: 'Option to center text',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export const TextBasic = (args) => (
  <>
    <Text {...args}>Body</Text>
    <Text type="caption">Type: paragraph, 16px</Text>
  </>
);

TextBasic.args = {
  type: 'p',
};

export const TextStyle = (args) => (
  <>
    <Text type="strong">Strong</Text>
    <Text type="caption">Type: Strong, 16px</Text>
    <Text type="bold">Bold</Text>
    <Text type="caption">Type: Bold, 16px</Text>
    <Text type="i">Italic</Text>
    <Text type="caption">Type: Italic, 16px</Text>
  </>
);

export const textHeadings = (args) => (
  <>
    <Text type="h1" style={{ margin: '0' }}>
      Heading 1
    </Text>
    <Text type="caption">Type: h1, 36px</Text>
    <Text type="h2" style={{ margin: '0' }}>
      Heading 2
    </Text>
    <Text type="caption">Type: h2, 30px</Text>
    <Text type="h3" style={{ margin: '0' }}>
      Heading 3
    </Text>
    <Text type="caption">Type: h3, 24px</Text>
    <Text type="h4" style={{ margin: '0' }}>
      Heading 4
    </Text>
    <Text type="caption">Type: h4, 18px</Text>
    <Text type="h5" style={{ margin: '0' }}>
      Heading 5
    </Text>
    <Text type="caption">Type: h5, 16px</Text>
    <Text type="h6" style={{ margin: '0' }}>
      Heading 6
    </Text>
    <Text type="caption">Type: h6, 14px</Text>
  </>
);
export const textTitles = (args) => (
  <>
    <Text type="title" bottomSpacing="2xs">
      Title
    </Text>
    <Text type="caption">Type: title, 60px</Text>
    <Text type="subtitle" bottomSpacing="xs">
      Subtitle
    </Text>
    <Text type="caption">Type: subtitle, 14px</Text>
  </>
);

export const texts = (args) => (
  <>
    <Text type="p">Body paragraph</Text>
    <Text type="caption">Type: paragraph, 16px</Text>
    <Text type="code">Code</Text>
    <Text type="caption">Type: code, 16px</Text>
    <Text type="sup">sup</Text>
    <Text type="caption">Type: sup, 10px</Text>
    <Text type="caption">caption</Text>
    <Text type="caption">Type: caption, 14px</Text>
    <Text type="inline-highlight">inline-highlight</Text>
    <Text type="caption">Type: inline-highlight, 14px</Text>
  </>
);

const textDesc = `
| Tag Type | Description | css class name|
| ---- | ----------- | ------- |
| \`h1\` | Main Heading | .Text_Text_type_h1 |
| \`h2\` | Sub Heading | .Text_Text_type_h2 |
| \`h3\` | h3 Heading | .Text_Text_type_h3 |
| \`h4\` | h4 Heading | .Text_Text_type_h4 |
| \`h5\` | h5 Heading | .Text_Text_type_h5 |
| \`h6\` | h6 Heading | .Text_Text_type_h6 |
| \`title\` | The main title of the page | .Text_Text_type_title |
| \`subtitle\` | Sub-title of the page | .Text_Text_type_subtitle |
| \`p\` | Regular body paragraph | .Text_Text_type_p |
| \`i\` | Italicize text | .Text_Text_type_i |
| \`bold\` | Boldest text | .Text_Text_type_bold |
| \`strong\` | Bold Text | .Text_Text_type_strong |
| \`sup\` | Superscript Text | .Text_Text_type_sup |
| \`a\` | Link | .Text_Text_type_a |
| \`code\` | Code block texts | .Text_Text_type_code |
| \`inline-highlight\` | Highlight texts | .Text_Text_type_inline-highlight |
| \`caption\` | Small caption after img | .Text_Text_type_caption |
`;

texts.story = {
  name: 'All texts',
  parameters: {
    docs: {
      storyDescription: textDesc,
    },
  },
};
