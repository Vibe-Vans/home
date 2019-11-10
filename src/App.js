import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Assets/css/main.css";
import Top from "./Component/Top";
import Middle from "./Component/Middle";
import Bottom from "./Component/Bottom";
import DistanceTrack from './Component/DistanceTrack';
import tunnel from "./Assets/images/Layers.mp4";
import hotelfront from "./Assets/images/hotel-rooms.mp4";
import movie2 from "./Assets/images/Tunnel-1_1.mp4";
import CurrentWeather from "./Component/CurrentWeather";
import DisplayScreen from './Component/DisplayScreen.js';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
    layout: {
        position: "absolute",
        top: 0,
        height: 'auto',
        width: '100%'
    },
    top: {
        // paddingTop: '10px',
        height: '50px',
        width: '100%',
        zIndex: 2,
        top: '2%',
        position: "fixed",
        // marginBottom: "-20px"
    },
    left: {
        left: 0,
        bottom: 0,
        top: 0,
        width: '55px',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 'auto 0',
        position: 'fixed'
    },
    right: {
        right: 0,
        bottom: 0,
        top: 0,
        width: '55px',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 'auto 0',
        position: 'fixed'
    },
    middle: {
        position:'absolute',
        top: '5%',
        width: '100%',
        height:'auto',
        margin: '0 auto',
        borderRadius:'15px',
       
    },
    bottom: {
        height: '50px',
        right: 0,
        left: 0,
        width: '100%',
        top:'91%',
        zIndex: 1,
        bottom: 0,
        position: "fixed"
    }
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wifi: "Pod",
            latitudeFrom:33.866669,
            longitudeFrom: -117.566666,
            latitudeTo:34.052235,
            logitudeTo: -118.243683,
            isTV_ON:false
        };
    }

    render() {
        const isTV_ON = this.state.isTV_ON;
        return (
    
            <div className='row'>
                <div className='col bg-mask'>
                    <video loop autoPlay preload="true" className='video'>
                        <source src={movie2} type='video/mp4' />
                        <source src={movie2} type='video/ogg' />
                    </video>
                
                    <div style={styles.layout} >
                        <div style={styles.top}>
                            <Top />
                        </div>
                        <div style={styles.left}>
                            <DistanceTrack duration={this.state.latitudeFrom, this.state.latitudeFrom, this.state.latitudeTo, this.state.logitudeTo} />
                        </div>

                        <div style={styles.right}>
                            <CurrentWeather />
                        </div>
                           
                        <div style={styles.middle}>
                            <DisplayScreen/>
                        </div>

                        <div style={styles.bottom}>
                            <Bottom wifi={this.state.wifi} />
                        </div>

                    </div>
                    <svg 
                        width='100%'
                        viewBox="0 0 1280 950" 
                        preserveAspectRatio="none"
                        style={{ 
                            x:0,
                            y:0,
                            width: '100%', 
                            height: '100%' }} 
                            >
                        <defs>
                            <clipPath
                                id='svgPath'
                                clipPathUnits='objectBoundingBox'
                                transform='scale(0.00209 0.0036)'
                            >
                                <path d='M381,263.3c-67.3,7.4-224.1,9.6-282.9.1-55.4-9.1-90.7-18.5-96.3-86.2C-.9,144.5-.4,112.1,2,87.7,8.1,28.1,42,12.8,97.8,6.4c79.5-9,213.7-7.9,283.5-.3,26.6,2.9,93.1,11.6,95.8,85.7.8,20.8,2.1,51.7.6,83C474.4,242,431.5,257.8,381,263.3Z' />
                            </clipPath>
                        </defs>

                    </svg>

                    
                 </div>
            </div>

        );
    }
}

export default App;
