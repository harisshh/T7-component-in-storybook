import React from "react";
import SearchBar from "../Search Bar/SearchBar";
import { Table } from "../Table/Table";
import PropTypes from 'prop-types';

export default function FilterTable (props) {
    const { primary, backgroundColor, sizeButton, label, size, caption, ...rest } = props
    return (
      <>
        <SearchBar size = 'medium' caption = 'Type Here'/>
        <Table/>
      </>
    )
  }

  FilterTable.propTypes = {

    // primary: PropTypes.bool,
    // backgroundColor: PropTypes.string,
    // sizeButton: PropTypes.oneOf(['small', 'medium', 'large']),
    // label: PropTypes.string.isRequired,
    // onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    caption: PropTypes.string.isRequired,
  
  }
  
  FilterTable.defaultProps = {
  
    // backgroundColor: null,
    // primary: false,
    size: 'medium',
    //onClick: undefined,
    }