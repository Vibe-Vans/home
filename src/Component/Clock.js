import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date()}
    }
    componentDidMount(){
        this.timeID = setInterval(
            () => this.tick(), 1000
        );
    }
 
    componentWillMount(){
        clearInterval(this.timeID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div>
                <span>{this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            </div>
        );
    }
}

export default Clock;