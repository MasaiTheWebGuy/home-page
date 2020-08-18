import React, { Component } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'


class Navigation extends Component {
    render(){
    return(
        <div>
            <nav className="topNav">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/portfolio">
                     <li>Portfolio</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
}

export default Navigation