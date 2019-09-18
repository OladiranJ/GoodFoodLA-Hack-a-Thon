import React, { useState } from 'react';
import ChildContentContainer from '../ChildContentContainer';

const ContentContainer = ({displayText, bodyText, id}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container' id={id}>
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