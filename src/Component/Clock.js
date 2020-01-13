import React, { Component } from 'react';
import Texty from 'rc-texty'

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
            this.setState({ time: new Date() })
        }, 1000);
    }

    componentWillUnmount() {

        clearInterval(this.time);
    }
    render() {

        return (
            <div>

                <Texty type='right' mode='reverse'>
                    {
                        this.state.time.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        })
                    }
                </Texty>
            </div>
        );
    }
}

export default Clock;

