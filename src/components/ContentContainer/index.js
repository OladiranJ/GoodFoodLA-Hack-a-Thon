import React, { useState } from 'react';
import ChildContentContainer from '../ChildContentContainer';

const ContentComponent = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container'>
      <p>Click to Expand</p>
      <button className="parent-button" onClick={() => {
        setOpen(!isOpen)
      }}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && <ChildContentContainer/>}
    </div>
  );
}

export default ContentComponent;