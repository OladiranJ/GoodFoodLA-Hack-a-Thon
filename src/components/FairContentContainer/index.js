import React, { useState } from 'react';
import FairChildContentContainer from '../FairChildContentContainer';

const AffordableContentContainer = ({ displayText }) => {
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
        </div>
      </div>
      {isOpen && <FairChildContentContainer text={displayText}/>}
    </div>
  );
}

export default AffordableContentContainer;