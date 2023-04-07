import React from 'react';

import { SortTable } from '../Table/Table.stories';
import { SearchBarComponent } from "../Search Bar/SearchBar.stories";
import FilterTable from './FilterTable';


export default {
  title: 'Component/Filter Table',
  component: FilterTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//const Template = (args) => <FilterTable {...args} />;

export const Filter = (args) => {
    return (
      <div>
        <SearchBarComponent />
        <SortTable />
      </div>
    );
  };

 