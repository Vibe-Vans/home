import React, { Component, PropTypes } from 'react'
import '../Assets/css/main.css';
import logo from '../Assets/images/VibeVans.svg';
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
            //   ease:'easeInOutSine',
            },
            {
              repeatDelay: 1000,
              duration: 2000,
              y: 0,
              appearTo: 0,
              repeat: -1,
              yoyo: true,
            //   ease:'eastInElastic'
            },
          ];
        return (
            <div className="logo" style={{ textAlign: "center" }}>
                <TweenOne
                animation={anim}
                style={{
                  position: 'absolute',
                  opacity: 1,
                  height: 50,
                  width: 50,
                  transform: 'translate(0px,0px)',
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
