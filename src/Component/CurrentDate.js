import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
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

            <TweenOne
                animation={[
                    {
                         scale: 1.2, rotateX: 360, repeat: -1, duration: 7000, yoyo: true, ease: 'easeInQuint',
                        delay: 2000
                    },
                ]
                }
            >

                {date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}


            </TweenOne>
        )
    }
}

export default CurrentDate