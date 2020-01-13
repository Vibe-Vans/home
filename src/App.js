import React, { Component } from 'react'

import CurrentDate from './Component/CurrentDate'
import Branding from './Component/Branding'
import Clock from './Component/Clock'
import TravelTime from './Component/TravelTime'
import DisplayScreen from './Component/DisplayScreen'
import './App.scss'
import './assets/scss/main.scss'

import Texty from 'rc-texty'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            wifi: 'Pod',
            PW: 'Vibin',
            ETA: '20 Min',
            message:'Welcome, Mr. Chehada'
        }
    }
    render() {

        const {wifi, PW, ETA, message} = this.state
        return (
            <div className='main-content'>
                <div className='row'>
                    <div className='col-12 row-top-bottom'>
                        <div className='row row-top'>
                            <div className='col-4'>
                                <CurrentDate />

                            </div>
                            <div className='col-4 col-center'>
                            <Branding />
                            </div>
                            <div className='col-4 col-right'>
                            <Clock />
                            </div>

                        </div>
                    </div>
                    <div className='col-12'>
                    <DisplayScreen/>
                    <div  className='welcome'>
                       <h1> <Texty type='scaleBig' mode='smooth'>{message}</Texty></h1>
                    </div>
                   
                    </div>
                    <div className='col-12 row-top-bottom'>
                        <div className='row row-bottom'>
                            <div className='col-4'>
                            <Texty type='flash' mode='random'>{`ETA: ${ETA}`}</Texty> 
                              
                                <TravelTime/>
                            </div>
                            <div className='col-4 col-center'>
                            
                                <Texty type='alpha' mode='random'>{`WiFi: ${ wifi}`}</Texty> 
                        
                            </div>
                            <div className='col-4 col-right'>
                            <Texty type='swing-rotate' mode='random'>{`PW: ${ PW}`}</Texty> 
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
