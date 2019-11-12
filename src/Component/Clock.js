import React, {Component} from 'react';
import TweenOne from 'rc-tween-one/';
import {whileStatement} from '@babel/types';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            preTime: ''
        }
    }
    componentDidMount() {
        this.time = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);


    }

    componentWillUnmount() {

        clearInterval(this.time);
    }
    render() {

        return (
            <div>
                <TweenOne animation={
                    [{
                        translateY: '10px',
                        scale: 1.2,
                        rotateX: 360,
                        repeat: -1,
                        duration: 7000,
                        yoyo: true,
                        color:'#fff',
                        delay: 2000
                        },]
                    }
                    style={
                        {opacity: .5}
                }>

                    <span>{
                        this.state.time.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        })
                    }</span>
                </TweenOne>
            </div>
        );
    }
}

export default Clock;

