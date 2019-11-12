import React, {Component, useState} from 'react'
import ReactMapboxGl, {Marker} from 'react-map-gl'
import pin from '../Assets/icons/map-pin.png'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamhldHBhdGVsIiwiYSI6ImNrMnJ4NWg5ZTB1dDAzbW96eGF3dTZnMTUifQ.GYOQrb1-b0wkaxtp8gbIqA';export default function Map() {


const [viewport, setViewport] = useState({
    latitude: 33.866669,
    longitude: -117.566666,
    height: 600,
    width: 250,
    zoom: 1,
    pitch: 2
})

return (
    <div className='map_expand'>
        <ReactMapboxGl {...viewport}
            latitude={33.866669}
            longitude
            ={-117.566666}
            width={400}
            height={300}
            zoom={16}
            // mapStyle='mapbox://styles/jhetpatel/ck2rx26ed3y1p1dnofu14im17'
            mapStyle='mapbox://styles/jhetpatel/ck2rx26ed3y1p1dnofu14im17'
            mapboxApiAccessToken={MAPBOX_TOKEN}
            // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={
                (viewport) => setViewport({viewport})
        }>
            <Marker latitude={33.866669}
                longitude={-117.566666}
                offsetLeft={-20}
                offsetTop={-10}>
                <img src={pin}
                    alt='You are here'/>
            </Marker>
        </ReactMapboxGl>
    </div>
)}

