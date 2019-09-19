import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const FairChildContentContainer = ({ text, bodyText }) => (
  <div className='child-container'>
  <div className='introduction'>
    <h3>Introduction</h3>
    <p>
      How food comes to us is often fraught with troubling injustices, ranging from unsafe conditions facing food workers, to broken immigration policies impacting our food system, to unequal access to healthy foods determined by which neighborhood one resides. Food workers are the backbone of our local food economy. The economic sustainability of Los Angeles’s foodshed hinges on prioritizing the health, safety and welfare of all workers throughout the food chain, and ensuring that each living being involved with bringing our food from farm to plate is treated with fairness, dignity and respect. The data show that we are moving in the right direction towards a more fair food system locally. Food workers generally are getting paid more as a result of policies to increase the minimum wage, more consumers are demanding food that is produced through ethical labor standards and more innovative economic opportunities are emerging in the food sector to meet growing demand. Despite this progress, injustices throughout our food system continue. Though minimum wage workers are now earning more, the disparity between the highest paid and lowest paid workers in the food system is still huge. Thousands of farm workers continue to operate in unsafe and underpaid working conditions. Sidewalk food vendors in the City of Los Angeles continue to receive costly fines for bring food to communities that need it most and lack a pathway to become a legal business. Food workers in the distribution, manufacturing, retail and food service sectors continue to face inequities in compensation based on gender, ethnicity or documentation status. Examples of strategies to overcome these persisting challenges include leveraging the procurement power of public institutions to support businesses that uphold fair labor standards and improved working conditions for food workers, developing a legal permitting system for sidewalk food vending in Los Angeles, and supporting partnerships between restaurant workers and chefs to create leadership opportunities for people with barriers to employment. Combined, these efforts to support innovation and build power in communities provide promising models for how we as Angelenos can create a fair food system for all.
    </p>
  </div>
  <div className='commentary'>
  <h3>Expert Commentary</h3>
    <p>
      Context brings data to life. In the Dashboard, this context is provided through expert commentary contributed by food system leaders throughout the Los Angeles region. Each Dashboard section contains analyses from at least two experts on food system topic areas, leveraging both data and experiential knowledge to shed light on relevant trends and recommendations for future priorities.
    </p>
  <div className="float-2">
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
  </div>
  </div>
  <div className='chart'>
    <h3>Case Study</h3>
    <p>
      Often times the richest, most complex information derives from qualitative data- conveying important knowledge that typically cannot be effectively reduced to numbers. For this reason, the Dashboard also includes brief case studies that reveal pertinent information on relevant food system activities through numbers and stories that have yet to be uniformly measured or scaled at city and/or county levels. The case studies highlight notable projects, strategies and initiatives taking place throughout the Good Food Movement-- with perspectives of the residents and communities impacted by these nterventions incorporated throughout. The cases culminate with lessons learned which can help inform future interventions and strategies.
    </p>
  </div>
  <div className='key-findings flex-container'>
    <h3>Key Findings</h3>
    <p>
      In this section, we provide information that highlights progress towards improving the fairness of Good Food throughout the Los Angeles region, with a focus on highly impacted populations including low-income and undocumented food workers through the following categories:<br /> • Humane treatment of animals<br /> • Increased health and safety of food system workers<br /> • Increase food system jobs in regional foodshed<br /> • Family-supporting wages for workers<br /> • Increased economic opportunity and job security through legalized sidewalk vending
    </p>
  </div>
  <div>
    <DataGrid displayText={text}/>
  </div>
  <div className='toolkit'>
    <button className='container-buttons fair-button'>Download Report</button>
    <button className='container-buttons fair-button'>Download Data</button>
    <button className='container-buttons fair-button'>Download Fast Facts</button>
  </div>
</div>
)

export default FairChildContentContainer;