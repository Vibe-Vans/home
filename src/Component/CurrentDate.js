import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'

class CurrentDate extends Component {
  
    constructor (props) {
        super(props)
        this.state= {
            date: new Date()}
    }
    componentDidMount(){
        this.date = setInterval (() => {
                this.setState({
                date: new Date() })
        }, 13000
        );
    }

    componentWillUnmount(){
        clearInterval(this.date);
}
    render () {
        
        return (

            <TweenOne 
                animation={
                    {
                        x: -210,
                        opacity: 0,                 
                        scale: 1,
                        scale:.5,
                        color:'#fff',
                        yoyo: true,
                        repeat: -1,
                        delay: 500,
                        repeatDelay:1000,
                        ease:"easeInSine",
                        duration: 2000
                }}

            >
                    {this.state.date.toLocaleDateString( [], 
                    {weekday: 'short', month: 'short', day: 'numeric'} )}
                </TweenOne>
             
           
        )
          
            
    }
}

export default CurrentDate