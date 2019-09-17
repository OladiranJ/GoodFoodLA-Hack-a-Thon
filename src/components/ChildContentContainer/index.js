import React from 'react';
import GrandChildContentComponent from '../GrandChildContentContainer';

const ChildContentContainer = ({bodyText}) => (
  <div className='child-container'>
    {bodyText}
    <GrandChildContentComponent />
  </div>
)

export default ChildContentContainer;