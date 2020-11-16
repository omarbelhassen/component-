import React from 'react';
import logo from './logo.svg';
import './App.css';
import photo from './Component/Profile/ProfilePhoto';
import Full from "./Compoenet/Profile/FullName";
import Adress from "./Component/Profile/Adress";
export default App;


function App () {

  return (
    <div className="App-header">

      <header className="App">
        <Photo/>
        <Full/>
        <Adress/>
        
      </header>
    </div>
  );
}