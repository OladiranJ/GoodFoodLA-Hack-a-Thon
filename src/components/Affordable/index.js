import React from 'react';
import { Chart } from 'react-google-charts';
import ContentContainer from '../ContentContainer';

const Affordable = () => {
  return(
    <div>AFFORDABLE COMPONENT
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        spreadSheetUrl='https://docs.google.com/spreadsheets/d/1ghBDOK8fT_u5_cQEEfPkVPX1qhxmbtBqG3F7c4Rfut4/edit#gid=0'
        loader={<div>Loading Chart</div>}
        options={{
          colors: ['#00b33c', '#ff3300'],
          title: 'Fruits/Veg Often Affordable in Neighborhood Amongst LA County',
          hAxis: {
            title: 'Percentage',
            minValue: 0
          },
          legend: {position: 'none'},
        }}
      />
    <ContentContainer id={'Affordable'} displayText={'affordable'} />
    </div>
  )
}

export default Affordable;