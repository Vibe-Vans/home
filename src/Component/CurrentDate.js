import React, { Component } from 'react'

class CurrentDate extends Component {

constructor (props) {
    super(props)
    this.state= {
        date: new Date().toLocaleDateString( [], 
            {weekday: 'short', month: 'short', day: 'numeric'} 
            )
        }
}
    render () {
        
        return (
            <div>
                {this.state.date}
            </div>
        )
    }
}

export default CurrentDate