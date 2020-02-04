
import React, { Component } from 'react';
// import animation from '../assets/images/finalAnim.mp4';
import animation from '../assets/images/animation_2.mp4'

import '../App.scss';
import '../assets/scss/main.css';

class DisplayScreen extends Component {
    render() {
        return (
            <div className="display_area">
                <video loop autoPlay="true" playsInline preload="true" controls className="display_video">
                    <source src={animation} />
                    {/* <source src='http://techslides.com/demos/sample-videos/small.webm' type='video/webm' />
                    <source src='http://techslides.com/demos/sample-videos/small.ogv' type='video/ogg' />
                    <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4' />
                    <source src='http://techslides.com/demos/sample-videos/small.3gp' type='video/3gp' /> */}
                </video>
            </div>

        )
    }

}
export default DisplayScreen