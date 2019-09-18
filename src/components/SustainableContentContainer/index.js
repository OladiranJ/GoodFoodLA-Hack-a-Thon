import React, { useState } from 'react';
import SustainableChildContentContainer from '../SustainableChildContentContainer';

const SustainableContentContainer = ({displayText, id}) => {
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
      {isOpen && <SustainableChildContentContainer text={displayText}/>}
    </div>
  );
}

export default SustainableContentContainer;