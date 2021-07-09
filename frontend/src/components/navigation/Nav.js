import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const link = {
        color: "lightgrey", 

    }
    const activeLink = {
        color: "white", 
        fontWeight: "bold"
    }
    return(
        <div className="navbar">
            <ul>
                <li>
                <NavLink 
                exact
                to="/drivers"
                style={link}
                activeStyle={activeLink}
                >
                    Drivers
                </NavLink>
                </li>
                <li>|</li>
                <li>
                <NavLink 
                exact
                to="/drivers/new"
                style={link}
                activeStyle={activeLink}
                >
                    Add Driver
              </NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default Nav