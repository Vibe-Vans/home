import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'

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

        return (

            <TweenOne
                animation={[
                    { opacity: 1, duration: 5000 },
                    { x: 80, duration: 4000 },
                    { translateX: '-70px', repeat: -1, duration: 3000, yoyo: true, ease: 'easeInQuint' },
                    { delay: 2000 }
                ]
                } style={{ opacity: 0 }}
            >
                {this.state.date.toLocaleDateString([],
                    { weekday: 'short', month: 'short', day: 'numeric' })}
            </TweenOne>
        )
    }
}

export default CurrentDate