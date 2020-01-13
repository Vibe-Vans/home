import React, { Component } from 'react'
import logo from '../assets/images/VibeVans.svg';
import TweenOne from 'rc-tween-one';

class Branding extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const anim = [
            {
              repeatDelay: 1000,
              duration: 2000,
              scaleX: 0,
              scaleY: 1.5,
              repeat: -1,
              yoyo: true,
              ease:'easeInOutSine',
            },
            {
              repeatDelay: 1000,
              duration: 2000,
              y: 10,
              appearTo: 1,
              repeat: -1,
              yoyo: true,
            },
          ];
        return (
            <div className="logo">
                <TweenOne
                animation={anim}
                style={{
                  position: 'absolute',
                  opacity: 1,
                  height: 50,
                  width: 50,
                  transform: 'translate(10px,0px)',
                  transformOrigin: 'center top',
                }}
                >
                    <img src={logo} alt="logo.png" />
                </TweenOne>
               
            </div>
        )
    }
}
export default Branding
