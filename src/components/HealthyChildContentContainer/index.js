import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const HealthyChildContentContainer = ({ text }) => (
  <div className='child-container'>
    <div className='introduction'>
      <h3>Introduction</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum lectus urna, sed sollicitudin odio sodales quis. Aliquam convallis purus sed bibendum finibus. Nulla fringilla vitae sapien in tincidunt. Maecenas leo purus, pharetra id malesuada eget, volutpat quis dui. Suspendisse fringilla pulvinar justo, a commodo lectus auctor eu. Suspendisse fermentum risus eu ex viverra, fermentum dignissim neque pulvinar. Nunc nisl dolor, aliquet lobortis vulputate sed, porttitor a sapien. Aliquam sagittis euismod ipsum, vel varius neque tincidunt vel. Donec at urna odio. Sed eget quam orci. Suspendisse a accumsan nisi. Nullam gravida ultricies sapien ac ornare.
      </p>
    </div>
    <div className='commentary'>
    <h3>Commentary</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum lectus urna, sed sollicitudin odio sodales quis. Aliquam convallis purus sed bibendum finibus. Nulla fringilla vitae sapien in tincidunt. Maecenas leo purus, pharetra id malesuada eget, volutpat quis dui. Suspendisse fringilla pulvinar justo, a commodo lectus auctor eu. Suspendisse fermentum risus eu ex viverra, fermentum dignissim neque pulvinar. Nunc nisl dolor, aliquet lobortis vulputate sed, porttitor a sapien. Aliquam sagittis euismod ipsum, vel varius neque tincidunt vel. Donec at urna odio. Sed eget quam orci. Suspendisse a accumsan nisi. Nullam gravida ultricies sapien ac ornare.
      </p>
    <div>
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
    </div>
    </div>
    <div className='chart'>
      <h3>Case Study</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum lectus urna, sed sollicitudin odio sodales quis. Aliquam convallis purus sed bibendum finibus. Nulla fringilla vitae sapien in tincidunt. Maecenas leo purus, pharetra id malesuada eget, volutpat quis dui. Suspendisse fringilla pulvinar justo, a commodo lectus auctor eu. Suspendisse fermentum risus eu ex viverra, fermentum dignissim neque pulvinar. Nunc nisl dolor, aliquet lobortis vulputate sed, porttitor a sapien. Aliquam sagittis euismod ipsum, vel varius neque tincidunt vel. Donec at urna odio. Sed eget quam orci. Suspendisse a accumsan nisi. Nullam gravida ultricies sapien ac ornare.
      </p>
    </div>
    <div className='key-findings flex-container'>
      <h3>Key Findings</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum lectus urna, sed sollicitudin odio sodales quis. Aliquam convallis purus sed bibendum finibus. Nulla fringilla vitae sapien in tincidunt. Maecenas leo purus, pharetra id malesuada eget, volutpat quis dui. Suspendisse fringilla pulvinar justo, a commodo lectus auctor eu. Suspendisse fermentum risus eu ex viverra, fermentum dignissim neque pulvinar. Nunc nisl dolor, aliquet lobortis vulputate sed, porttitor a sapien. Aliquam sagittis euismod ipsum, vel varius neque tincidunt vel. Donec at urna odio. Sed eget quam orci. Suspendisse a accumsan nisi. Nullam gravida ultricies sapien ac ornare.
      </p>
    </div>
    <div>
      <DataGrid displayText={text}/>
      {text}
    </div>
    <div className='tookit'>
      <h3>Toolkit</h3>
      <button className='container-buttons'>Download Report</button>
      <button className='container-buttons'>Download Data</button>
      <button className='container-buttons'>Download Fast Facts</button>
    </div>
  </div>
)

export default HealthyChildContentContainer;