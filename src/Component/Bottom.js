import React, {Component} from 'react'
import '.././Assets/css/main.css';
import {Spring, Keyframes} from 'react-spring/renderprops';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

class Bottom extends Component {
    constructor(props) {
        super(props);
        this.moment = null;
        this.animation = [
            { left: '-40%' },
            { left: '40%' },
            { top: '60px' },
            { scale: 0.7 },
            { scale: 1 },
            { top: 0 },
            { left: '20%' },
            {ease:'easeInElastic'}
          ];
      }
    render() {
        return (
        
          
        <Spring 
            from={
                {
                    opacity: 0,
                    transform: 'translate3d(10px,0,0) scale(1.5) rotateX(5deg)'

                }
            }
            to={
                {opacity: 1,
                    transform: 'translate3d(0px,0,0) scale(1) rotateX(5deg)'}
            }
            config={
                {
                    delay: 100,
                    duration: 1000,
                }
              
        }>
            {
                fade => ( 
                 
                      <div style={fade}>
                        <TweenOne
                            animation={this.animation}
                            paused={this.props.paused}
                            repeat={-1} 
                            yoyo 
                            style={{ transform: 'scale(1.2)' }}>
                                <span>Wifi: {this.props.wifi }</span>
                        </TweenOne>
                        
                        </div>  
                )   
            }
        </Spring>


        )
            }
        }
        
        export default Bottom
