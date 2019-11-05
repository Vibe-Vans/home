import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import '.././Assets/css/main.css';
import logo from '../Assets/images/logo192.png';
import Clock   from './Clock';
import CurrentDate from './CurrentDate.js';

class Top extends Component {
    render () {
        return (
            // <div className="row pd-tb">
            //     <div className="col-3" style={{textAlign:"right"}}>
            //     <CurrentDate/>
            //     </div>
            //     <div className="col-6 logo"  style={{textAlign:"center"}}>
            //         < img src={logo} alt="logo.png"/>
            //     </div>
            //     <div className="col-3" style={{textAlign:"left"}}>
            //         <Clock/>
            //     </div>
               
            // </div>

            <Spring 
                    from={{
                        opacity:0,
                        transform: 'translate3d(5px,0,0) scale(3) rotateX(10deg)'
                        }
                    }
                    to={{
                        opacity: 1,
                        transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
                        }
                    }
                    config={{
                        delay: 100,
                        duration: 1000, 
                        
                    }}
                    >

                    {
                    animate => (
                       
                            <div className="pd-tb top_area" style={animate}>
                                <CurrentDate/>
            
                                <div className="logo"  style={{textAlign:"center"}}>
                                    <img src={logo} alt="logo.png"/>
                                </div>

                                <Clock/>
                            </div>    
                    )}
                    </Spring>

            
        )
    }
}

export default Top