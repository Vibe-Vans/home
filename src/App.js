import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/css/main.css';
import Top from './Component/Top';
import Middle from './Component/Middle';
import Bottom from './Component/Bottom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            wifi: "Pod"
        }
    }
    
    render(){
        return (
            <div className="mask" style={{display:"flex", flexDirection:"column"}}>
                {/* <div className="row">
                    <div className="col-12" style={{zIndex:2}}>
                        <Top />
                    </div>
                    <div className="col-12" >
    
                        <Middle  />
                    </div>
                    <div className="col-12">
                        <Bottom  wifi={this.state.wifi}/>
                    </div>
                </div> */}

                    <div style={{zIndex:2, height:"5%", position:"relative"}}>
                        <Top />
                    </div>
                    <div style={{zIndex:1, height:"90%", marginTop:"-3%", position:"relative"}} >
    
                        <Middle  />
                    </div>
                    <div style={{zIndex:1, height:"5%", position:"relative"}} >
                        <Bottom  wifi={this.state.wifi}/>
                    </div>
            </div>
        );
    }
 
    
}

export default App;

