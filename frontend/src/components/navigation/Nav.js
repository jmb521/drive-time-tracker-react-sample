import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogin } from '../../actions/google'
import Login from '../Login'
import Logout from '../Logout'
const Nav = (props) => {
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
                <li>|</li>
                <li>
                   
                   <Login />
                   <Logout />
                </li>
            </ul>
        </div>
    )
}

export default connect(null, {handleLogin})(Nav)