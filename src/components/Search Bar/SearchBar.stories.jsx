import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Secondary } from '../Button/Button.stories';
import { Success } from '../Button/Button.stories';
import { Danger } from '../Button/Button.stories';
import { Small } from '../Input/Input.stories';
import { Medium } from '../Input/Input.stories';
import { Large } from '../Input/Input.stories';

import SearchBar  from './SearchBar';

export default {
    title: 'Component/Search Bar',
    component: SearchBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
    
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
  };

export const SearchBarComponent = (args) => {
    return (
      <div>
        <Medium />
        <Success />
      </div>
    );
  };
