import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton'
import './Portfolio.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
    

                <div className="container"> 

                    <div className="box">
                        <div className="left">
                            <h1>Generation Gates Girl</h1>
                            <h3>www.generationgatesgirl.com</h3>
                            
                        </div>  
                        
                        <div className="overlay">
                            <div className="overBox">
                                <h3>Languages used:</h3>
                                <ul>
                                    <li>Wordpress</li>
                                    <li>CSS</li>
                                </ul>
                            </div>"
                            <button><a href={"https://www.generationgatesgirl.com"}>visit site</a></button>
                        </div>
                    </div>


                    <div className="box">
                        <div className="left">
                            <h1>Trust Ur Tastebudz</h1>
                            <h3>www.trusturtastebudz.com</h3>
                        </div>  
                        
                        <div className="overlay">
                            <div className="overBox">
                                <h3>Languages used:</h3>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <a>visit site</a> 
                        </div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <h1>Robofriends</h1>
                            <h3>www.robofriends.com</h3>
                        </div>  
                        
                        <div className="overlay">
                            <div className="overBox">
                                <h3>Languages used:</h3>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>Rest API</li>
                                </ul>
                            </div>
                            <a>visit site</a> 
                        </div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <h1>Face Recognition App</h1>
                            <h3>www.trusturtastebudz.com</h3>
                        </div>  
                        
                        <div className="overlay">
                            <div className="overBox">
                                <ul>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            <a>visit site</a> 
                        </div>
                    </div>              
                    </div>
                </div>
                <NavButton className="navi" onButtonClick={this.onButtonClick} />
            </div>
            
        )
    }
}