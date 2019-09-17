import React, { useState } from 'react';

const GrandChildContentComponent = ({displayText, bodyText}) => {
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
      {isOpen && <p>Display Some Text via a Component</p>}
    </div>
  );
}

export default GrandChildContentComponent;