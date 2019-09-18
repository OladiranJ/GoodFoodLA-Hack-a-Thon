import React, { useState } from 'react';
import FairChildContentContainer from '../FairChildContentContainer';

const AffordableContentContainer = ({ displayText }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container fair-container'>
      <div className='flex-container'>
        
        <div className='flex-item'>
          <h1 class="content-header">{displayText}</h1>
        </div>
      </div>
      <div className="flex-item">
          <p className='displayText'>Fair food is produced, manufactured, distributed, sold and recycled through fair labor practices and humane treatment of animals. At every point in the food supply chain, workers should receive fair compensation regardless of their ethnicity, age, gender, ability, and documentation status and be free from exploitation.</p>
        </div>
      <div className='flex-item'>
          <button className='parent-button fair-button' onClick={() => {
            setOpen(!isOpen)
          }}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
      {isOpen && <FairChildContentContainer text={displayText}/>}
    </div>
  );
}

export default AffordableContentContainer;