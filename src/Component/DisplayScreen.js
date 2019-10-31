// Display temp, Time, Distance, Wifi;
//the most outter screen
import movie from'../Assets/Layers.mp4';
import hotelview from '../Assets/hotel-view.jpg'

import React, { Component } from 'react';
import '../App.css';

class DisplayScreen extends Component {
    render () {
        return (
            <div className="mask-area">
                {/* <img src={hotelview} id="service-area" alt="hotel"></img> */}
                <video className="display-area" autoPlay>
                    <source src={movie} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default DisplayScreen