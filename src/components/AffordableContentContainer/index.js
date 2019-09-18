import React, { useState } from 'react';
import AffordableChildContentContainer from '../AffordableChildContentContainer';

const AffordableContentContainer = ({ displayText }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container affordable-container'>
      <div className='flex-container'>
        
        <div className='flex-item'>
          <h1 class="content-header">{displayText}</h1>
        </div>
      </div>
      <div className="flex-item">
          <p>Regardless of income, all Angelenos deserve access to Good Food. Accessible food is not only available but also affordable. Government nutrition programs such as the Supplemental Nutrition Assistance Program (SNAP) and Women, Infants and Children Supplemental Nutrition Program (WIC) increase the accessibility of food by expanding the food budgets of low-income children, families, and seniors.</p>
        </div>
      <div className='flex-item'>
          <button className='parent-button affordable-button' onClick={() => {
            setOpen(!isOpen)
          }}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
      {isOpen && <AffordableChildContentContainer text={displayText}/>}
    </div>
  );
}

export default AffordableContentContainer;