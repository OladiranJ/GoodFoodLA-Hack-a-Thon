import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const HealthyChildContentContainer = ({ text }) => (
  <div className='child-container'>
    <div className='introduction'>
      <h3>Introduction</h3>
      <p>
      Health is a priority for Good Food advocates in Los Angeles, with a focus on eliminating disparities in diet-related disease face low-income communities and communities of color. Diets high in sugar, sodium, and saturated fats - typically from highly processed food products and limited in high-nutrient fresh produce and other whole foods-- has been linked to diabetes, heart disease, cancer and overweight and obesity. Not all communities live in neighborhoods where “the healthy choice is the easy choice,” and instead are surrounded by unhealthy food retail such as liquor stores, convenience stores and fast food restaurants. Through the numerous policy, systems and environmental changes led by stakeholders throughout the LAFPC network, we are collectively innovating solutions for overcoming systemic barriers to healthy food access-- tailoring these innovations to the unique dynamics of the communities that we serve. The impacts of our collective work to create a healthy food system take time to manifest. As we continue to evolve our local approaches to address the complex, global, systemic impediments to health in our food system, it is imperative that we synergize our efforts and arm ourselves with as much information as possible to help guide our work.
      </p>
    </div>
    <div className='commentary'>
    <h3>Expert Commentary</h3>
      <p>
      Context brings data to life. In the Dashboard, this context is provided through expert commentary contributed by food system leaders throughout the Los Angeles region. Each Dashboard section contains analyses from at least two experts on food system topic areas, leveraging both data and experiential knowledge to shed light on relevant trends and recommendations for future priorities.
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
      Often times the richest, most complex information derives from qualitative data- conveying important knowledge that typically cannot be effectively reduced to numbers. For this reason, the Dashboard also includes brief case studies that reveal pertinent information on relevant food system activities through numbers and stories that have yet to be uniformly measured or scaled at city and/or county levels. The case studies highlight notable projects, strategies and initiatives taking place throughout the Good Food Movement-- with perspectives of the residents and communities impacted by these nterventions incorporated throughout. The cases culminate with lessons learned which can help inform future interventions and strategies.
      </p>
    </div>
    <div className='key-findings flex-container'>
      <h3>Key Findings</h3>
      <p>
      In this section, we explore progress towards improving the health of ALL Angelenos by evaluating disparities and change over time in the following categories:<br /> • Increased healthy food access<br /> • Improved eating habits amongst adults and children <br/>• Decreased rates of obesity and overweight<br />• Decreased rates of diet-related disease
      </p>
    </div>
    <div>
      <DataGrid displayText={text}/>
    </div>
    <div className='tookit'>
      <button className='container-buttons'>Download Report</button>
      <button className='container-buttons'>Download Data</button>
      <button className='container-buttons'>Download Fast Facts</button>
    </div>
  </div>
)

export default HealthyChildContentContainer;