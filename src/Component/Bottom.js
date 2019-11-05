import React, {Component} from 'react'
import '.././Assets/css/main.css';
import {Spring} from 'react-spring/renderprops';

class Bottom extends Component {
    render() {
        return (
        <Spring 
            from={
                {
                    opacity: 0,
                    height: "5%",
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    margin: "0 auto",
                    transform: 'translate3d(10px,0,0) scale(2) rotateX(10deg)'

                }
            }
            to={
                {opacity: 1,
                    transform: 'translate3d(0px,0,0) scale(1) rotateX(10deg)'}
            }
            config={
                {
                    delay: 100,
                    duration: 1000
                }
        }>
            {
                fade => ( 
                    <div style={fade} className="pd-tb">
                      
                        <span>Wifi: {this.props.wifi }</span>
                        
                    </div>
                )   
            }
        </Spring>


        )
            }
        }
        
        export default Bottom
