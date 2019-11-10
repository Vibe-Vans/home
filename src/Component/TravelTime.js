import React, { Component } from 'react'
// const DIRECTION_API =`https://api.mapbox.com/directions/v5/mapbox/driving/-73.989%2C40.733%3B-74%2C40.733.json?access_token=pk.eyJ1IjoiamhldHBhdGVsIiwiYSI6ImNrMnI4aDY5MzA3c3Yzbmw3MW0xN3NudzcifQ.tcHchw_NUIskjzVQqJ921g&geometries=polyline`;
class TravelTime
 extends Component {

    constructor (props) {
        super(props)
        this.state={
            latiFrom:'',
            longFrom:'',
            latiTo:'',
            longTo:'',
            duration:'null'
        }
    }
//     componentDidMount (){
//         let url = DIRECTION_API;
// ;        fetch(url)
//         .then(responce => responce.json())
//         .then(data =>{
//             this.duration = setInterval(()=> {
//                 this.setState({
//                     duration: data.routes[0].legs.duration
//                 });   
//                 console.log("duration", this.state.duration);   
//             })
//         });
//     }
  
//     componentWillUnmount(){
//         clearInterval(this.duration);
//     }

    render () {
        return (
            <div>
              {this.props.traveltime}
            </div>
        )
    }
}

export default TravelTime
