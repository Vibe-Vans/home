
import React, { Component } from 'react';
import tunnel from'../Assets/images/Layers.mp4';
import hotelfront from '../Assets/images/hotel-view.jpg';
import movie2 from '../Assets/images/Tunnel-1_1.mp4';
import {Spring} from 'react-spring/renderprops';
import '../App.css';
import '../Assets/css/main.css';

class DisplayScreen extends Component {
    render () {
        return (
         
                    <div className="display_area">
                    {/* <img src={hotelfront} alt="hotel" style={{width:"100%",borderRadius:"20px"}}></img> */}
                        <video  loop autoPlay className="video">
                            <source src={tunnel} type="video/mp4" />
                        </video>
                </div>

        
          
            )}
    
            
        
    }


export default DisplayScreen