import React from 'react';
import GrandChildContentComponent from '../GrandChildContentContainer';
import DataGrid from '../DataGrid/index';

const ChildContentContainer = ({ text, bodyText }) => (
  <div className='child-container'>
    {bodyText}
    <DataGrid displayText={text}/>
    {text}
    <GrandChildContentComponent />
  </div>
)

export default ChildContentContainer;