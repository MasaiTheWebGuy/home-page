import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>

                <div id="top">
                    <div id="Img">
                        <img src="IMG_2939.jpg" alt="Me" />
                    </div>
                    <div id="Bio">
                        <h3>Welcome</h3>
                        <p>Hey there! My name is Tyrone and I am a Web Developer and Photographer based out of
                            Charlotte, NC. I am extremely passionate about helping people achieve their goals. Be it that
                            they are looking to get their next start-up business off the ground or 
                            aid in launching the next big artist through their preferred platform. <br />
                            When I am not Photo-Gramming, I am building self-helping apps to aid my everyday woos or playing some of my favorite fighting video games online.
                            <br /> <br />
                            I would love to work with you on a future project. Whether you are looking for a new website for your brand, pictures for your next event and moments or both, you can contact me here and we can get started!
                            <br /> <br />
                            I look forward to working with you. Thank you for stopping by
                        </p>
                    </div>
                </div>
                <footer>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="far fa-envelope"></i>
                </footer> 
                <NavButton className="navi" onButtonClick={this.onButtonClick} />   
            </div>
        )
    }
}