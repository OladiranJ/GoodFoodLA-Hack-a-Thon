import React, { useState } from 'react';
import HealthyChildContentContainer from '../HealthyChildContentContainer';

const HealthyContentContainer = ({displayText, id}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container healthy-container' id={id}>
      <div className='flex-container'>
        <div className='flex-item'>
          <h1 class="content-header">{displayText}</h1>
        </div>
        <div className="flex-item">
          <p>Food is integral to the health and quality of life of individuals and communities. Healthy food is nutritious, delicious and safe. Healthy food meets recommended dietary guidelines and supports the body’s ability to fight disease and heal. All people deserve access to healthy food that is affordable, conveniently availability and culturally relevant.</p>
        </div>
        <div className='flex-item'>
          <button className='parent-button healthy-button' onClick={() => {
            setOpen(!isOpen)
          }}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
        
        
      </div>
      {isOpen && <HealthyChildContentContainer text={displayText}/>}
    </div>
  );
}

export default HealthyContentContainer;