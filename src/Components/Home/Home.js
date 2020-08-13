import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton'
import './Home.css'



export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="mobile-top main">
        
         <div className="Middle">
            <div className="top">
              <div className="logo">
                                    <img src="/Images/logo.svg" alt="CodeGrid Logo" />
                                </div>
                                <div className="name">
                                    <h1>Tyrone Combs</h1>
                                    <div className="job">
                                        <h4>Photographer</h4>
                                        <h4>Full Stack Developer</h4>
                                    
                                    </div>
                                </div>
                                <ul>
                                    <li><i className="fab fa-github"></i></li>
                                    <li><i className="fab fa-instagram"></i></li>
                                    <li><i className="fab fa-facebook"></i></li>
                                    <li><i className="far fa-envelope"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                    <NavButton className="navi" onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}
