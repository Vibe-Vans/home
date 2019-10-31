// Display temp, Time, Distance, Wifi;
//the most outter screen
import hotelview from'../Assets/hotel-view.jpg';

import React, { Component } from 'react';
import '../App.css';

class DisplayScreen extends Component {
    render () {
        return (
            <div className="mask-area">
                <img src={hotelview} id="service-area" alt="hotel"></img>

            </div>
        )
    }
}

export default DisplayScreen