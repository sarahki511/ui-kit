import React from 'react';
import List from './List';
import ListItem from './ListItem';

export default {
  title: 'Components/UI Elements/List',
  component: List,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
  argTypes: {
    children: {
      control: 'object',
      description: 'Specify the ListItem components',
    },
    iconName: {
      control: 'text',
      description:
        'Specify the name of the Icon to display as the bullet points (type should be unordered)',
    },
    className: {
      control: 'text',
      description: 'Specify the custom class name (optional)',
    },
    type: {
      control: 'select',
      options: ['unstyled', 'unordered', 'ordered'],
      description: 'Specify the type of list',
    },
  },
};

export const ListBasic = (args) => (
  <>
    <List {...args}>
      <ListItem title={'title'}>hello</ListItem>
      <ListItem title={'title'}>hello</ListItem>
      <ListItem title={'title'}>hello</ListItem>
    </List>
  </>
);

ListBasic.args = {
  type: 'unstyled',
  // iconName: 'cross',
  // size: 1,
  // description: 'List of a default home',
};

export const ListWithIcon = (args) => (
  <>
    <List {...args}>
      <ListItem title={'title'} iconName={'cancel-circle'}>
        List Item 1
      </ListItem>
      <ListItem title={'title'} iconName={'cancel-circle'}>
        List Item 2
      </ListItem>
      <ListItem title={'title'} iconName={'cancel-circle'}>
        List Item 3
      </ListItem>
    </List>
  </>
);
