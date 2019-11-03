
import movie from'../Assets/images/Layers.mp4';
import hotelfront from '../Assets/images/hotel-view.jpg';
import hotelview from '../Assets/images/Layers.mp4';

import React, { Component } from 'react';
import '../App.css';

class DisplayScreen extends Component {
    render () {
        return (
            <div>
                {/* <img src={hotelfront} alt="hotel" style={{width:"100%",borderRadius:"20px"}}></img> */}
                <video  autoPlay style={{width:"96%", height:"auto",borderRadius:"20px"}}>
                    <source src={movie} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default DisplayScreen