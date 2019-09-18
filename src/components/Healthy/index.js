import React from 'react';
import { Chart } from 'react-google-charts';
import HealthyContentContainer from '../HealthyContentContainer';


const Healthy = () => {
  return(
    <div id='Healthy'>
      <h1>Healthy</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum lectus urna, sed sollicitudin odio sodales quis. Aliquam convallis purus sed bibendum finibus. Nulla fringilla vitae sapien in tincidunt. Maecenas leo purus, pharetra id malesuada eget, volutpat quis dui. Suspendisse fringilla pulvinar justo, a commodo lectus auctor eu. Suspendisse fermentum risus eu ex viverra, fermentum dignissim neque pulvinar. Nunc nisl dolor, aliquet lobortis vulputate sed, porttitor a sapien. Aliquam sagittis euismod ipsum, vel varius neque tincidunt vel. Donec at urna odio. Sed eget quam orci. Suspendisse a accumsan nisi. Nullam gravida ultricies sapien ac ornare.
      </p>
    <HealthyContentContainer displayText={'healthy'} />
    </div>
  )
}

export default Healthy;