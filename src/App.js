import React from 'react';

import './App.css';
import DisplayScreen from './Component/DisplayScreen'
import OutterScreen from './Component/OutterScreen';

function App() {

  return (
    <div className="Main">
      <OutterScreen classname="out-screen" text={'LOGO'}/>
     <DisplayScreen/>
    </div>
  );
}

export default App;
