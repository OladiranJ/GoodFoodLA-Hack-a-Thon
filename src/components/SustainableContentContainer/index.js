import React, { useState } from 'react';
import SustainableChildContentContainer from '../SustainableChildContentContainer';

const SustainableContentContainer = ({displayText, id}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container sustainable-container' id={id}>
      <div className='flex-container'>
        
        <div className='flex-item'>
          <h1 class="content-header">{displayText}</h1>
        </div>
      </div>
      <div className="flex-item">
          <p>Sustainable food systems ensure that food is grown, processed, distributed and recycled in ways that are environmentally responsible, equitable and economically viable for current and future generations. Environmental stewardship and regenerative agriculture is practiced through food growing and business practices that avoid harm to our air, soil, seeds, and water, and renew the resources needed to feed our population.</p>
        </div>
      <div className='flex-item'>
          <button className='parent-button sustainable-button' onClick={() => {
            setOpen(!isOpen)
          }}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
      {isOpen && <SustainableChildContentContainer text={displayText}/>}
    </div>
  );
}

export default SustainableContentContainer;