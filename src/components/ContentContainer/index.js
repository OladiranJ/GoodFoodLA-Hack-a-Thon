import React, { useState } from 'react';
import ChildContentContainer from '../ChildContentContainer';

const ContentContainer = ({displayText, bodyText}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container'>
      <div className='flex-container'>
        <div className='flex-item'>
          <button className='parent-button' onClick={() => {
            setOpen(!isOpen)
          }}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
        <div className='flex-item'>
          <p>{displayText}</p>
        </div>
      </div>
      {isOpen && <ChildContentContainer text={displayText}/>}
    </div>
  );
}

export default ContentContainer;