import React, { Component } from 'react'
import Texty from 'rc-texty'


class CurrentDate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.date = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 13000
        );
    }

    componentWillUnmount() {
        clearInterval(this.date);
    }
    render() {
        const { date } = this.state

        return (
            <>

                <Texty type='left' mode='reverse'>

                    {date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                </Texty>
            </>
        )
    }
}

export default CurrentDate