import React, { useState } from 'react'
import{Spring, Transition, config} from 'react-spring/renderprops';
import ReactMapboxGl from 'react-map-gl'
import TravelTime from './TravelTime'
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamhldHBhdGVsIiwiYSI6ImNrMnJ4NWg5ZTB1dDAzbW96eGF3dTZnMTUifQ.GYOQrb1-b0wkaxtp8gbIqA';
// coordinates={[33.866669, -117.566666],[34.052235,-118.243683]}
export default function MapBox() {

    const[viewport, setViewport]=useState({
        latitude:33.866669,
        longitude: -117.566666,
        height:60,
        width:25, 
        zoom:1,
        pitch: 2
    }
        )

        return (
            <Spring
            from={{
                opacity:0,
                marginLeft:'-10px',  
            }}
            to={{
                opacity:1,
                marginLeft:'0px',
            
            }}
            config={{
                delay:100,
                duration:1000,
             
            }}>

                {
                    animate => (
                    <div className="half-cir half-cir-left" style={animate}>
                        {/* <div style={{position:'relative', height:'65px', width: '30px', background:'#f8bbd0', borderRadius:'8px'}}> */}
                        <div style={{display:'block', postition:'relative',width:'30px', height:'70px', backgroundColor:'#f48fb1', borderRadius:'8px', textAlign:'center'}}>
                            <ReactMapboxGl 
                                {...viewport} 
                               
                                // mapStyle='mapbox://styles/jhetpatel/ck2rx26ed3y1p1dnofu14im17'
                                mapStyle='mapbox://styles/jhetpatel/ck2rx26ed3y1p1dnofu14im17'
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                                // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                                onViewportChange={(viewport) => setViewport({viewport})}
                            >                              
                            </ReactMapboxGl>
                        </div>
                         
                        <span><TravelTime traveltime={'20 min'}/></span>

                    </div>
                    )
                }
            </Spring>
            
        )
    }

