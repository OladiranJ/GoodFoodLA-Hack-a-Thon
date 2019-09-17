import React from 'react';
import { Head, Container } from './style';

const Header = () =>  {
    return(
        <div>
        <Head>
            <img src="/Logo 2_hi res.png" alt="logo" height="100px"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Issues and Impact</li>
                <li>Programs</li>
                <li>Announcements</li>
                <li>Join Us</li>
                <li>Donate</li>
            </ul>
            
        </Head>
        <Container>
            <h1>Dashboard</h1>
        
            <p>
                The Los Angeles Food Policy Council recognizes that there are multiple ways of knowing. Numerical data offers one view onreality, but some may understand and assessthe world through stories, narratives and lived experiences. The 2017 Food SystemDashboard utilizes multiple researchmethods-- including descriptive statistics and data visualization, GIS mapping, qualitative case studies with stories from impacted populations and expert analysis to provide a more comprehensive assessment of our progress towards ensuring Los Angeles is a Good Food region for all.
            </p>
        </Container>
        
        </div>
    )
}

export default Header;


