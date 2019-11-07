import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Assets/css/main.css";
import Top from "./Component/Top";
import Middle from "./Component/Middle";
import Bottom from "./Component/Bottom";
const serviceAreaSVG = {
    // <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.4 270.7"><defs><style>.cls-1{fill:none;stroke:#dcddde;stroke-miterlimit:10;opacity:0.55;}</style></defs><title>Screen Area-new-01</title><path id="SVG" class="cls-1" d="M381,263.3c-67.3,7.4-224.1,9.6-282.9.1-55.4-9.1-90.7-18.5-96.3-86.2C-.9,144.5-.4,112.1,2,87.7,8.1,28.1,42,12.8,97.8,6.4c79.5-9,213.7-7.9,283.5-.3,26.6,2.9,93.1,11.6,95.8,85.7.8,20.8,2.1,51.7.6,83C474.4,242,431.5,257.8,381,263.3Z" transform="translate(0.5 0.5)"/></svg>
}
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
                className='mask mast-new'
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
            
            
            
        //     <div className="svgpathmask" >
        //         <svg>
        //             <defs>
        //                 <clipPath id="svgPath">
        //                     <path  d="M381,263.3c-67.3,7.4-224.1,9.6-282.9.1-55.4-9.1-90.7-18.5-96.3-86.2C-.9,144.5-.4,112.1,2,87.7,8.1,28.1,42,12.8,97.8,6.4c79.5-9,213.7-7.9,283.5-.3,26.6,2.9,93.1,11.6,95.8,85.7.8,20.8,2.1,51.7.6,83C474.4,242,431.5,257.8,381,263.3Z"/>
        //                 </clipPath>
        //             </defs>
                
        //         </svg>
        // </div>
            
        );
    }
}

export default App;

