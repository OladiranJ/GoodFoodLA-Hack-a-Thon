// Imports

import React, {Component}   from 'react'
import { NavLink }          from 'react-router-dom'
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
                            <NavLink>Healthy</NavLink>
                            <NavLink>Affordable</NavLink>
                            <NavLink>Fair</NavLink>
                            <NavLink>Sustainable</NavLink>
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