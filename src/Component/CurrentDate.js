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
                    { translateX: '20px', scale:1.4,rotateX:760,repeat: -1, duration: 7000, yoyo: true, ease: 'easeInQuint',
                    backgroundColor:'rgba(255,255,255,.2)', borderRadius:'4px', delay:2000},
                ]
                } style={{ opacity: .5 }}
            >
                {this.state.date.toLocaleDateString([],
                    { weekday: 'short', month: 'short', day: 'numeric' })}
            </TweenOne>
        )
    }
}

export default CurrentDate