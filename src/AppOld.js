import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Assets/css/main.css";
import 'mapbox-gl/dist/mapbox-gl.css';

import Top from "./Component/Top";
import Bottom from "./Component/Bottom";
import MapBox from './Component/MapBox';
import Map from './Component/Map';
import CurrentWeather from "./Component/CurrentWeather";
import DisplayScreen from './Component/DisplayScreen';
import background from './Assets/images/abstract-1.jpg';


const styles = {
    layout: {
        position: "absolute",
        top: 0,
        height: 'auto',
        width: '100%'
    },
    top: {
        height: '50px',
        width: '100%',
        zIndex: 2,
        top: '2%',
        position: "fixed",
    },
    left: {
        left: 0,
        bottom: 0,
        top: 0,
        maxWidth: '70px',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 'auto 0',
        position: 'fixed'
    },
    right: {
        right: 0,
        bottom: 0,
        top: 0,
        maxWidth: '70px',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 'auto 0',
        position: 'fixed'
    },
    middle: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        margin: '6.5% auto',
        borderRadius: '15px',

    },
    bottom: {
        height: '50px',
        right: 0,
        left: 0,
        width: '100%',
        top: '91%',
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
            latitudeFrom: 33.866669,
            longitudeFrom: -117.566666,
            latitudeTo: 34.052235,
            logitudeTo: -118.243683,
            isTV_ON: true
        };
    }
    render() {
        const { isTV_ON } = this.state;
        return (

            <div className='row'>
                <div className='col bg-mask' >

                    {/* <video loop autoPlay preload="true" className='clip_video'>
                        <source src={background} type='video/mp4' />
                        <source src={background} type='video/ogg' />
                    </video> */}

                    <img src={background} className='clip_img'/>

                    <div style={styles.layout} >
                        <div style={styles.top}>
                            <Top />
                        </div>
                        <div style={styles.left}>
                            <MapBox duration={this.state.latitudeFrom, this.state.latitudeFrom, this.state.latitudeTo, this.state.logitudeTo} />
                        </div>

                        <div style={styles.right}>
                            <CurrentWeather />
                        </div>
                        {isTV_ON ? 
                            (<div style={styles.middle}>
                                <DisplayScreen />
                            </div> )
                            : 
                            (<div style={styles.middle}>
                                <Map/>
                            </div> )
                        }
                        <div style={styles.bottom}>
                            <Bottom wifi= {'wifi: '+ this.state.wifi} />
                        </div>

                    </div>
                    <svg
                        width='100%'
                        viewBox="0 0 1920 1200"
                        fill='none'
                        preserveAspectRatio="none"
                        style={{
                            // x: 0,
                            // y: 0,
                            width: '100%',
                            height: '100%',
                            margin: 'auto 15px',
                            position: 'relative'
                        }}
                    >
                        <defs>
                            <clipPath
                                id='svgPath'
                                clipPathUnits='objectBoundingBox'
                                transform='scale(0.000522 0.00069)'
                            >
                                {/* <path d='M381,263.3c-67.3,7.4-224.1,9.6-282.9.1-55.4-9.1-90.7-18.5-96.3-86.2C-.9,144.5-.4,112.1,2,87.7,8.1,28.1,42,12.8,97.8,6.4c79.5-9,213.7-7.9,283.5-.3,26.6,2.9,93.1,11.6,95.8,85.7.8,20.8,2.1,51.7.6,83C474.4,242,431.5,257.8,381,263.3Z' /> */}

                                <path d='M1525.5,1171.3c-269.6,32.6-897.6,42.6-1133,.1-221.7-40-363-82-385.4-382-10.8-144.9-9-288.8.8-396.9C32,128.3,167.8,60.4,391.4,32.2,709.8-7.9,1247.3-2.9,1526.9,30.9c106.5,12.9,372.6,51.5,383.4,379.9,3.1,92.3,8.6,229,2.4,367.8C1899.5,1076.8,1727.8,1146.8,1525.5,1171.3Z'/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>

        );
    }
}

export default App;
