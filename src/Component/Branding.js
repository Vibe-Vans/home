import React, { Component } from 'react'
import logo from '../assets/images/VibeVans.svg';

class Branding extends Component {

    render() {
        
        return (
            <div className="logo">
               
               <img src={logo} alt="logo.png" />
           
            </div>
        )
    }
}
export default Branding
