import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const HealthyChildContentContainer = ({ text, bodyText }) => (
  <div className='child-container'>
    {bodyText}
    <Chart
        width={'500px'}
        height={'300px'}
        chartType='PieChart'
        spreadSheetUrl='https://docs.google.com/spreadsheets/d/11QlO8VnnCc8J2BwDmG5eFvLVe3IqwyUnUQRHYoTU108/edit#gid=0'
        spreadSheetQueryParameters={{
          headers: 1,
          query: 'SELECT B, C LIMIT 2 OFFSET 1'
        }}
        loader={<div>Loading Chart</div>}
        options={{
          title: 'Number of Grocery Stores in LA County',
          pieHole: 0.4,
          legend: {position:'right'}
        }}
      />
      
    
    <DataGrid displayText={text}/>
    {text}
  </div>
)

export default HealthyChildContentContainer;