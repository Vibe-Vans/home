
import React, { Component } from 'react';
import Slideshow from './SlideShow'

// import animation from '../assets/images/finalAnim.mp4';

// import animation from '../assets/images/finalAnim.mp4';

import '../App.scss';
import '../assets/scss/main.css';

class DisplayScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVideo:false
        }
    }
    render() {
        const {isVideo} = this.state
        return (
            <div className="display_area">

               {
                isVideo ?  
                <video loop autoPlay muted playsInline preload="true" controls className="display_video">
                    {/* <source src={animation} /> */}
                </video>
                :

                    <Slideshow/>
               } 
              

            

            </div>

        )
    }

}

// DisplayScreen = subscribe({
//     topic:'@demo/video'
//   })(DisplayScreen)
export default DisplayScreen