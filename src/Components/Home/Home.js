import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton'
import './Home.css'



export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="mobile-top">
                    <div className="Middle">
                        <div className="top">
                            <div className="logo">
                                <img src="/Images/TCLogo.svg" alt="TC Logo" />
                            </div>
                            <div className="name">
                                <h1>Tyrone Combs</h1>
                                <div className="job">    
                                    <h4>Full-Stack Web Developer</h4>
                                </div>
                            </div>
                            <ul>
                                <li><a href={"https://github.com/MasaiTheWebGuy/"}><i className="fab fa-github"></i></a></li>
                                <li><a href={"https://instagram.com/masaithewebguy"}><i className="fab fa-instagram"></i></a></li>
                                <li><a href={"mailto: tyrcombs@gmail.com"}><i className="far fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
                <NavButton className="navi" onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}
