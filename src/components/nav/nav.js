import React from 'react'
import Weather from './weather.js'
import Shows from './shows.js'
import Work from './work.js'


const Nav = (props) => {


    return (



        <div className={props.menu ? "nav open": "nav"}>
            {/* Navbar Shows */}
            <Shows />
            {/* Navbar weather */}
            <Weather />
            {/* Navbar work */}
            <Work />

        </div>
    )
}

export default Nav
