import React from 'react';

import { Table } from './Table';


export default {
  title: 'Component/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Table {...args} />;

export const SortTable = Template.bind({});
SortTable.args = {
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   sizeButton: 'large',
//   label: 'Button',
// };

// export const Success = Template.bind({});
// Success.args = {
//   sizeButton: 'large',
//   label: 'Button',
// };

// export const SearchBar = (args) => (
//     <Button {...args}>
//       <Medium {...Medium.args} />
//     </Button>
//   );

 