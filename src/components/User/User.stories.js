import React from 'react';
import User from './User';
import List from './../List/List';
import ListItem from './../List/ListItem';

export default {
  title: 'Components/UI Elements/User',
  component: User,
  docs: {},
  parameters: {
    componentSubtitle: 'Component',
  },
};

export const UserBasic = (args) => (
  <>
    <User {...args} />
  </>
);

UserBasic.args = {
  name: 'John Doe',
  showName: true,
};

export const UserWithImage = (args) => (
  <>
    <User
      alt="Image Alt text"
      description={
        <List kind="simple" small>
          <ListItem>Regional Manager of Dunder Mifflin</ListItem>
          <ListItem>Scranton, Pennsylvania</ListItem>
        </List>
      }
      extendedDescription={
        <List kind="simple" small>
          <ListItem title="Show">The Office</ListItem>
          <ListItem title="Assistant Regional Manager">Dwight Schrute</ListItem>
        </List>
      }
      name="Michael Scott"
      image="https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png"
    />
  </>
);
