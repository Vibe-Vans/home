
import movie from'../Assets/images/Layers.mp4';
import hotelfront from '../Assets/images/hotel-view.jpg';
import hotelview from '../Assets/images/Layers.mp4';

import React, { Component } from 'react';
import '../App.css';

class DisplayScreen extends Component {
    render () {
        return (
            <div style={{width:"92%", display:"inline-block", textAlign:"center"}}>
                {/* <img src={hotelfront} alt="hotel" style={{width:"100%",borderRadius:"20px"}}></img> */}
                <video  autoPlay style={{width:"100%",borderRadius:"15px", textAlign:"center"}}>
                    <source src={movie} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default DisplayScreen