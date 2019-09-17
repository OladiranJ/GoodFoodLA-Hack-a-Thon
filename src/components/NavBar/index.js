// Imports

import React, {Component}   from 'react'
import { NavLink }          from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import './navbar.css'



// ------------------------------------------------------------------------------------------------------

// NavBar Function

const NavBar = () => {

    return (

        <header className='navbar'>
            <nav className='navigation'>
                <div className='spacer'></div>
                <div className='navbar-items'>
                    {
                        <ul>
                            <NavLink to={ROUTES.HEALTHY}>Healthy</NavLink>
                            <NavLink to={ROUTES.AFFORDABLE}>Affordable</NavLink>
                            <NavLink to={ROUTES.FAIR}>Fair</NavLink>
                            <NavLink to={ROUTES.SUSTAINABLE}>Sustainable</NavLink>
                        </ul>
                    }
                </div>
                <div className='spacer'></div>
            </nav>
        </header>

    )

}



// ------------------------------------------------------------------------------------------------------

// Exports

export default NavBar