import React from 'react';
import { Chart } from 'react-google-charts';
import ContentContainer from '../ContentContainer';

const Sustainable = () => {
  return(
    <div>SUSTAINABLE COMPONENT
      <Chart
        width={'700px'}
        height={'300px'}
        chartType="Table"
        spreadSheetUrl='https://docs.google.com/spreadsheets/d/17R5Z1siTkmKUIZAy8KdzdD7wNlvfpG9rk2pRq38nhcs/edit#gid=0'
        loader={<div>Loading Chart</div>}
        formatters={[
          {
            type: 'ArrowFormat',
            column: 3,
          },
        ]}
        options={{
          allowHtml: true,
          showRowNumber: true,
        }}
      />
    <ContentContainer id={'Sustainable'} displayText={'sustainable'} />
    </div>
  )
}

export default Sustainable;