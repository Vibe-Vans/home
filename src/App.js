import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Assets/css/main.css";
import Top from "./Component/Top";
import Middle from "./Component/Middle";
import Bottom from "./Component/Bottom";

const styles ={
    layout:{
        display: 'flex',
        flexDirection: "column"
    },
    top:{
        height:'5%',
        zIndex:2,
        position: "relative",
        marginBottom:'-20px'

    },
    middle:{
       
        zIndex:1,
        // position: "relative"
    },
    bottom:{
        height:'5%',
        zIndex:1,
        // position: "relative"
    }
    
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wifi: "Pod"
        };
    }

    render() {
        return (
            <div
                className='mask'
                style={styles.layout}
            >
                <div style={styles.top}>
                    <Top />
                </div>

                <div className='middle'>
                    <Middle />
                </div>
                
                <div style={styles.bottom} className="pd-tb bottom_area">
                    <Bottom wifi={this.state.wifi} />
                </div>
               
            </div>
        );
    }
}

export default App;
