import React, { Component } from 'react';
import DisplayScreen from './DisplayScreen'
import '.././Assets/css/main.css';


class Middle extends Component {
    render () {
        return (
            <div className="row" style={{textAlign:"center"}}>
                <div className="col-1"  style={{textAlign:"center",margin:"20% auto"}}>
                <h6>GPS Tracking</h6>
                </div>
                <div className="col-10">
                    <DisplayScreen/>
                </div>
                <div className="col-1"  style={{textAlign:"center", margin:"20% auto"}}>
                Weather
                </div>
                
            </div>
        )
    }
}

export default Middle