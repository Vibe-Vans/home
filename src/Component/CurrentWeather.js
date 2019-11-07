// Openweather API Key: 5cf13fa84fd84e451af3a321489eb3aa

import React, { Component } from 'react'

import PartlyCloudy from '../Assets/icons/cloudy-day-1.svg';
import PartlyCloudy_n from '../Assets/icons/cloudy-night-1.svg';
import ClearSky from '../Assets/icons/day.svg';
import ClearSky_n from '../Assets/icons/night.svg';
import Cloudy from '../Assets/icons/cloudy-day-2.svg';
import Cloudy_n from '../Assets/icons/cloudy-night-2.svg';
import LightRain from '../Assets/icons/rainy-1.svg';
import Rain from '../Assets/icons/rainy-6.svg';
import Thunder from '../Assets/icons/thunder.svg';
import Snow from '../Assets/icons/snowy-1.svg';
import Foggy from '../Assets/icons/cloudy-day-3.svg';
import Weather from '../Assets/icons/weather.svg';
import {Spring} from 'react-spring/renderprops';

const API_KEY = 'ebcfef84503df0b471b23283d3709251';
const API_KEY_2= '5cf13fa84fd84e451af3a321489eb3aa'; /* Personal KEY*/

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state ={
            latitude:34.0522,
            longitude: 118.2437,
            currentTemp: 0,
            formate: 'F',
            icon: '',
            error: ''
        }
    }

    componentDidMount(){
         
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&APPID=${API_KEY}`;
        // https://api.openweathermap.org/data/2.5/weather?lat=34.0522&lon=118.2437&units=imperial&APPID=ebcfef84503df0b471b23283d3709251
         // Call the API, and set the state of the weather forecast
         fetch(url) 
         .then(response => response.json())
         .then(data => {
            this.weather = setInterval(() => {
                this.setState({
                    currentTemp: Math.round(data.main.temp),
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon
                  });
                //   this.props.setTemp(Math.round(data.main.temp));
               })
               }, 1000);
                 
    }

     
    componentWillUnmount(){
        clearInterval(this.weather);
    }

    render () {
        let icon;
        switch (this.state.icon) {
            case "01d":
            icon = ClearSky;
            break;

            case "01n":
            icon = ClearSky_n;
            break;

            case "02d":
            icon = PartlyCloudy;
            break;

            case "02n":
            icon = PartlyCloudy_n;
            break;

            case "03d": case "03n": case "04d": case "04n":
            icon = Cloudy;
            break;

            case "09d": case "09n":
            icon = LightRain;
            break;

            case "10d": case "10n":
            icon = Rain;
            break;

            case "11d": case "11n":
            icon = Thunder;
            break;

            case "13d": case "13n":
            icon = Snow;
            break;

            case "50d": case "50n":
            icon = Foggy;
            break;

            default:
                icon = ClearSky;
                break;

        this.setState({icon:this.state.icon});
    }
        return (
            <Spring 
            from={{
                opacity:0,
                marginRight:'-10px',  
            }}
            to={{
                opacity:1,
                marginRight:'0px',
            
            }}
            config={{
                delay:100,
                duration:1000,
                
            }}>

                {
                    animate => (
                    <div className="half-cir half-cir-right" style={animate}>
                       
                        <img src={icon} width="75px"/>
                        <span>
                            {/* {this.state.currentTemp }<sup>o</sup>F */}
                            {this.state.currentTemp }<sup>o</sup>
                        </span> 
                        </div>
                    )

                }
            </Spring>
       

                )}    
}

export default CurrentWeather