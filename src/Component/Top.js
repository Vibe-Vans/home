import React, { Component } from 'react';
import {Spring} from 'react-spring';
import '.././Assets/css/main.css';
import logo from '../Assets/images/logo192.png';
import Clock   from './Clock';
import CurrentDate from './CurrentDate.js';

class Top extends Component {
    render () {
        return (
            <div className="row pd-tb">
                <div className="col-3" style={{textAlign:"right"}}>
                <CurrentDate/>
                </div>
                <div className="col-6 logo"  style={{textAlign:"center"}}>
                    < img src={logo} alt="logo.png"/>
                </div>
                <div className="col-3" style={{textAlign:"left"}}>
                    <Clock/>
                </div>
               
            </div>
        )
    }
}

export default Top