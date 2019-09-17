import React from 'react';
import DataGrid from '../DataGrid/index';

const ChildContentContainer = ({text}) => (
  <div className='child-container'>
    <DataGrid displayText={text}/>
    {text}
  </div>
)

export default ChildContentContainer;