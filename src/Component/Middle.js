import React, { Component } from 'react';
import DisplayScreen from './DisplayScreen'
import '.././Assets/css/main.css';
import CurrentWeather from './CurrentWeather';
import DistanceTrack from './DistanceTrack';


class Middle extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            travelTime: "20 Min"
        }
    }
    
    render () {
        return (     
                <div style={{textAlign:"center",display:"flex", alignItems:"center",justifyContent:"center"}}>
                    <DistanceTrack travelTime={this.state.travelTime}/>
                    <DisplayScreen />
                    <CurrentWeather/>
                </div>
           
       
        )
    }
}

export default Middle