import React from 'react';
import { Chart } from 'react-google-charts';
import DataGrid from '../DataGrid/index';

const AffordableChildContentContainer = ({ text }) => (
  <div className='child-container'>
    <div className='introduction'>
      <h3>Introduction</h3>
      <p>
        According to the Los Angeles County Department of Public Health, in 2011 over half a million households in Los Angeles County experienced food insecurity, described as “reduced quality, variety or desirability of diet, or disrupted eating patterns and reduced intake of food” (United States Department of Agriculture, Economic Research Service [USDA, ERS], 2015; LADPH, 2015). This represents a 40% increase in food insecurity since 2011, even when adjusted for population growth. Food insecurity can lead to hunger and malnutrition, and has been associated with poorer health outcomes, increased odds of hospitalization especially for children, increased prevalence of chronic diseases, and greater risk of depression and other mental health conditions among adults (Los Angeles Department of Public Health [LADPH], 2015). Improving food security benefits everyone as increased hospitalizations and rates of chronic disease resulting from food insecurity negatively impact healthcare costs for all. Strategies that reduce the cost barrier to healthy food such as SNAP and WIC have successfully curbed food insecurity rates. Increasing participation in these federally funded programs can better ensure that more residents benefit from local food production and decrease burdens on our healthcare system. Food insecurity is just one of many symptoms of poverty. Housing insecurity and homelessness, inadequate transportation and education disparities also stem from poverty and are correlated with food insecurity as well. As we seek to makeGood Food more affordable in the region, we must consider food insecurity as one component of broader systemic problems rooted in poverty and develop solutions accordingly.
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
      In this section, we provide information that highlights progress towards improving the affordability of Good Food throughout the Los Angeles region, with a focus on highly impacted populations including low-income communities, children and senior citizens through the following categories:<br /> • Increased household food security<br /> • Increased healthy food access and consumption amongst low-income populations<br /> • Improved participation rates by eligible participants in food assistance programs<br /> • Improved participation rate by eligible students in school meal programs
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
  
  export default AffordableChildContentContainer;
