import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { Button } from '../Button/Button';

export default function SearchBar (props) {
    const { primary, backgroundColor, sizeButton, label, size, caption, ...rest } = props
    return (
      <>
        <Input size = 'medium' caption = 'Type Here'/>
        <Button/>
      </>
    )
  }


SearchBar.propTypes = {

  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  sizeButton: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  caption: PropTypes.string.isRequired,

}

SearchBar.defaultProps = {

  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  size: 'small',
  }