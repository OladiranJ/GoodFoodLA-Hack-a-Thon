import React, { useState } from 'react';
import HealthyChildContentContainer from '../HealthyChildContentContainer';

const HealthyContentContainer = ({displayText, id}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container healthy-container' id={id}>
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
      {isOpen && <HealthyChildContentContainer text={displayText}/>}
    </div>
  );
}

export default HealthyContentContainer;