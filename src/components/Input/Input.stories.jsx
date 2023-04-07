import React from 'react';

import { Input } from './Input';

export default {
  title: 'Component/Input',
  component: Input,
  caption: 'Type Here',
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  caption: 'Type Here',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  caption: 'Type Here',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  caption: 'Type Here',
};

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
