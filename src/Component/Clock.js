import React, {Component} from 'react';
import TweenOne from 'rc-tween-one/';
import { whileStatement } from '@babel/types';


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
                <TweenOne 
                animation={
                    {
                        x: 210,
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
                    }
                }

                >

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
