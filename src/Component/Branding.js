import React, { Component, PropTypes } from 'react'
import '../Assets/css/main.css';
import logo from '../Assets/images/VibeVans.svg';


class Branding extends Component {
    constructor(props) {
        super(props)

    }
    render () {
        return (     
            <div className="logo"  style={{textAlign:"center"}}>
                <img src={logo} alt="logo.png"/>
            </div>
        )
    }
}



export default Branding
