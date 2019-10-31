// Display temp, Time, Distance, Wifi;
//the most outter screen

import React, { Component } from 'react'
import '../App.css';

class OutterScreen extends Component {
    render () {
        return (
            <div className="outter-screen">
                {this.props.text}
            </div>
        )
    }
}

export default OutterScreen