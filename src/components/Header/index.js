import React from 'react';
import { Head } from './style';

const Header = () =>  {
    return(
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
    )
}

export default Header;


