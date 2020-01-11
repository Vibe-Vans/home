import React, { Component } from "react";
import ".././assets/css/main.css";
import { Spring, Keyframes } from "react-spring/renderprops";
import TweenOne from "rc-tween-one";
import Texty from 'rc-texty'
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
TweenOne.plugins.push(BezierPlugin);

class Bottom extends Component {
    constructor(props) {
        super(props);
        this.moment = null;
        this.animation = [
            {
                scale:.6
            },
            {   ease:'easeInSine'},
            {
                color: "#673ab7"
            },
            {   ease:'easeInSine'},
            {
                scale: 1
            },
            {
                opacity: 0.6
            },
            {   ease:'easeInSine'},
            {
                scale: 1.2
            },
            {   ease:'easeInSine'},
            {   perspective: '1000px'},
            {
                translate3d: ('20PX', 0, 0)
            },
            {
                color:'#e91e63'
            },
            {
                scale:1.2
            },
            {
                rotateX: (360)
            },
            {
                duration: 5000
            },
            {
                rotateX: (0)
            },
            {
                color: "#673ab7"
            },
            {   translateY: '-20x'},
            {
                ease: "easeInOutElastic"
            }
           
        ];
    }
    render() {
        return (
            <div className='bottom_elem'>
           
                    <Texty
                    type='swing-rotate'
                    mode='random'
                  
                    >{this.props.wifi}</Texty>
            </div>
        );
    }
}

export default Bottom;
