import React from 'react';

import { Button } from './Button';


export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  sizeButton: 'large',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  sizeButton: 'large',
  label: 'Button',
};

// export const SearchBar = (args) => (
//     <Button {...args}>
//       <Medium {...Medium.args} />
//     </Button>
//   );

 