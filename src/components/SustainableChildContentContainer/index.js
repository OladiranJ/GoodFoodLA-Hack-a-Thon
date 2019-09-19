import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const SustainableChildContentContainer = ({ text }) => (
  <div className='child-container'>
    <div className='introduction'>
      <h3>Introduction</h3>
      <p>
      California is home to one of the largest food producing regions in the country-- supplying fruit, nuts, vegetables, grains and livestock for not just much of the U.S but also the world. The strain of producing food for the world on local environmental resources, however, is cause for serious concern. Excessive use of synthetic pesticides, concentrated animal waste, monocrop farming, over tillage, global shipping, and extreme wastage are all some of the practices that have put our environment and the resiliency of our food supply in jeopardy. Soil health, water supplies and air quality can be jeopardized by agricultural practices more focused on mass production than protecting the ecosystem and sustaining local communities. Food waste generated from multiple points along the food supply chain contributes to approximately 9% of the world’s total greenhouse gas emissions 1 -- threatening our local resiliency and contributing to climate change. Local and sustainable food system strategies such as regenerative, community-supported and urban agriculture, farmers markets surplus food recovery, and community composting have all been identified as better alternatives for the health of people and the planet. As we strive to undo the negative environmental impacts of our food system and establish more responsible practices, it is important to ensure that those most impacted by these impacts are a part of the solution, including small farmers, agricultural workers, residents living adjacent to large industrial agriculture, women and people of color farmers and low-income families who benefit from surplus food distribution.
      </p>
    </div>
    <div className='commentary'>
    <h3>Epert Commentary</h3>
      <p>
      Context brings data to life. In the Dashboard, this context is provided through expert commentary contributed by food system leaders throughout the Los Angeles region. Each Dashboard section contains analyses from at least two experts on food system topic areas, leveraging both data and experiential knowledge to shed light on relevant trends and recommendations for future priorities.
      </p>
    <div>
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
        In this section, we provide information that highlights progress towards improving the environmental health of our food system, with a focus on highly impacted populations and communities in the following categories:<br /> • Sustainability in micro, small and mid-scale family farming in regional foodshed <br />• A growing regional food economy • Maintained use of farmland for agricultural production<br /> • Increased direct-to-consumer sales in regional foodshed<br /> • Increased organic production practices • Increased farming and gardening in LA County<br /> • Reduced air pollution and greenhouse gas emissions from food<br /> • Decreased water usage in food production
      </p>
    </div>
    <div>
      <DataGrid displayText={text}/>
    </div>
    <div className='toolkit'>
      <button className='container-buttons sustainable-button'>Download Report</button>
      <button className='container-buttons sustainable-button'>Download Data</button>
      <button className='container-buttons sustainable-button'>Download Fast Facts</button>
    </div>
  </div>
)

export default SustainableChildContentContainer;