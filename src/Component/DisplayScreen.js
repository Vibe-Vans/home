
import React, { Component } from 'react';
import tunnel from'../Assets/images/Layers.mp4';
import scifiTunnel from '../Assets/images/scifitunnel03.mp4';
import movie2 from '../Assets/images/Tunnel-1_1.mp4';
import hotelfront_img from '../Assets/images/hotel-view.jpg';
import {Spring} from 'react-spring/renderprops';
import '../App.css';
import '../Assets/css/main.css';

class DisplayScreen extends Component {
    render () {
        return (
            <div className="display_area">
                {/* <img src={hotelfront_img} alt="hotel" style={{width:"85%",borderRadius:"20px"}}></img> */}
                    <video  loop autoPlay playsInline preload="true"  controls className="display_video">
                        <source src={scifiTunnel} />
                        <source src='http://techslides.com/demos/sample-videos/small.webm' type='video/webm'/>> 
                        <source src='http://techslides.com/demos/sample-videos/small.ogv' type='video/ogg'/>> 
                        <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4'/>>
                        <source src='http://techslides.com/demos/sample-videos/small.3gp' type='video/3gp'/>>
                </video>
        </div>
      
        )}
            
    }


export default DisplayScreen