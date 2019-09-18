import React, { useState } from 'react';
import FairChildContentContainer from '../FairChildContentContainer';

const AffordableContentContainer = ({displayText, id}) => {
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
      {isOpen && <FairChildContentContainer text={displayText}/>}
    </div>
  );
}

export default AffordableContentContainer;