import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationLinks.css'

const NavigationLinks = ({ navClick }) => {
        return (
            <div>
                <Link to="/"><div className="grid Book">Home</div></Link>
                <Link to="/about"><div className="grid About">About</div></Link>
                <Link to="/contact"><div className="grid Contact">Contact</div></Link>
                <Link to="/portfolio"><div className="grid Portfolio">Portfolio</div></Link>
            </div>
        )
    }


export default NavigationLinks