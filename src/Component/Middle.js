import React, { Component } from 'react';
import DisplayScreen from './DisplayScreen'
import '.././Assets/css/main.css';
import CurrentWeather from './CurrentWeather';
import DistanceTrack from './DistanceTrack';


class Middle extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            duration: "20 Min"
        }
    }
    
    render () {
        return (      
          
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",justifyItems:"center"}}>
                    <DistanceTrack duration={this.state.duration}/>
                    <DisplayScreen />
                    <CurrentWeather/>
                </div>
           
       
        )
    }
}

export default Middle