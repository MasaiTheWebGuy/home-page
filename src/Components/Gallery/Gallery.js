import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation.js'
import './Gallery.css'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="main-top">
                    <div class="center">
                        <div class="g1 box">DJ Polo DaVinshe</div>
                        <div class="g3 box">Siren</div>
                        <div class="g3 box">Neo</div>
                    </div>
                </div>
            </div>
        )
    }
}