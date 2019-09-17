import React from 'react';
import GrandChildContentComponent from '../GrandChildContentContainer';
import DataGrid from '../DataGrid/index';

const ChildContentContainer = ({text}) => (
  <div className='child-container'>
    <DataGrid displayText={text}/>
    {text}
    <GrandChildContentComponent />
  </div>
)

export default ChildContentContainer;