import React from 'react';
import Button from './Button'
import { withKnobs } from "@storybook/addon-controls"



export default {
  title: 'Components/UI Elements/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    state: { control: 'select', options: ["default", "hover", "active", "focus", "disabled"]},
    size: { control: 'radio', options: ["sm", "md", "lg"]},
    borderRadius: { control: 'select', options: ["sm", "md", "lg", "xl", "xxl", "pill"]},
    iconInFront: { control: 'boolean' }
  },
};




export const ButtonWithIcon = (args) =>
<>
  <Button {...args}/>
  {''} <Button state="default" size="lg" borderRadius="md" icon="info" pos="front"></Button>{' '}
  <Button state="default" size="md" theme="secondary" borderRadius="md" icon="info" iconInFront outline>Button</Button>
</>;

ButtonWithIcon.args = { children:"Button",  state:"default", size:"md", borderRadius:"md", icon:"info", iconInFront:false};