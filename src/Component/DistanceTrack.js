import React, { Component } from 'react'

class DistanceTrack extends Component {
    
    render () {
        return (
            <div style={{textAling:"center",margin:"auto"}}>

                <span>{this.props.travelTime}</span>
            </div>
        )
    }
}

export default DistanceTrack