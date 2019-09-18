import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const FairChildContentContainer = ({ text, bodyText }) => (
  <div className='child-container'>
    {bodyText}
    <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        spreadSheetUrl='https://docs.google.com/spreadsheets/d/1YoMma-F7do3zacEuIOX6nGMLxd_CkJJFQfLzwaaqbO8/edit#gid=0'
        loader={<div>Loading Chart</div>}
        options={{
          title: 'Number of LA City stores engaged in the Healthy Neighborhood Market Network',
          is3D: true,
          legend: {position:'right'}
        }}
      />
    <DataGrid displayText={text}/>
    {text}
  </div>
)

export default FairChildContentContainer;