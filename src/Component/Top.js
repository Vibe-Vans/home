import React, { Component } from 'react';
import {Spring} from 'react-spring';
import '.././Assets/css/main.css';
import logo from '../Assets/images/logo192.png';
class Top extends Component {
    render () {
        return (
            <div className="row pd-tb">
                <div className="col-3" style={{textAlign:"right"}}>
                    <span>Fri Nov 1</span>
                </div>
                <div className="col-6 logo"  style={{textAlign:"center"}}>
                    < img src={logo} alt="logo.png"/>
                </div>
                <div className="col-3" style={{textAlign:"left"}}>
                    <span>8:00 pm</span>
                </div>
               
            </div>
        )
    }
}

export default Top