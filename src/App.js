import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/css/main.css';
import Top from './Component/Top';
import Middle from './Component/Middle';
import Bottom from './Component/Bottom';


function App() {

    return (
        <div className="container mask">
            <div className="row">
                <div className="col-12">
                    <Top />
                </div>
                <div className="col-12" >

                    {/* I have to pass lat and log based on the user current location to display weather */}
                    <Middle  />
                </div>
                <div className="col-12">
                    <Bottom  />
                </div>
            </div>
        </div>
    );
}

export default App;

