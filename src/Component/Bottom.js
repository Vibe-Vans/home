import React, { Component } from 'react'
import '.././Assets/css/main.css';

class Bottom extends Component {
    render () {
        return (
            <div className="pd-tb" style={{textAlign:"center", margin:"0 auto"}}>
                <span>Wifi: {this.props.wifi}</span>
            </div>
        )
    }
}

export default Bottom