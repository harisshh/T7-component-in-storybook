import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

export function Input (props) {
    const { size, caption, ...rest } = props
    return (
      <input className={`input ${size}`} placeholder = {caption} {...rest}/>
    );
  };

  Input.propTypes = {
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      caption: PropTypes.string.isRequired,
  }

  Input.defaultProps = {
      size: 'small',
      //label: 'search',
  }