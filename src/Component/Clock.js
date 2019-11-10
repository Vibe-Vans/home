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
                animation={[
                    { opacity: 1, duration: 5000},
                    { x: -80, duration: 4000 },
                    { translateX: '70px',repeat:-1, duration: 3000, yoyo: true,ease:'easeInQuint' },
                    {delay:2000}
                    
                  ]} style={{ opacity: 0 }}
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
