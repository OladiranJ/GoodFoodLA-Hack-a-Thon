// Imports

import React, {Component}   from 'react'


import './navbar.css'

import { text } from '../../Data';



// ------------------------------------------------------------------------------------------------------

// NavBar Function

const NavBar = () => {
    return (

        <header className='navbar'>
            <nav className='navigation'>
                <div className='spacer'></div>
                <div className='navbar-items'>
                     {text.map((t)=> { 
                         const url = `/#${t.id}`;
                         return <a href={url} key={t.id}>{t.id}</a>
                     })}
                </div>
                <div className='spacer'></div>
            </nav>
        </header>

    )

}



// ------------------------------------------------------------------------------------------------------

// Exports

export default NavBar