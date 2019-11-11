import React, { Component } from 'react'
const DIRECTION_API =`https://api.mapbox.com/directions/v5/mapbox/driving/-73.989%2C40.733%3B-74%2C40.733.json?access_token=pk.eyJ1IjoiamhldHBhdGVsIiwiYSI6ImNrMnI4aDY5MzA3c3Yzbmw3MW0xN3NudzcifQ.tcHchw_NUIskjzVQqJ921g&geometries=polyline`;
class TravelTime
 extends Component {

    constructor (props) {
        super(props)
        this.state={
            latiFrom:'',
            longFrom:'',
            latiTo:'',
            longTo:'',
            legs:[],
            duration:''
        }
    }
    componentDidMount (){
        let url = DIRECTION_API;
;        fetch(url)
        .then(responce => responce.json())
        .then(data =>{
            this.duration = setInterval(()=> {
                this.setState({
                    legs: data.routes.legs
                   
                })  
                console.log("duration", this.state.legs) 
            })
        })
        .catch((error) =>   console.log(error) )  

    }
  
    componentWillUnmount(){
        clearInterval(this.duration);
    }

    render () {
        return (
            <div>
              {this.props.traveltime}
            </div>
        )
    }
}

export default TravelTime
