//import logo from './logo.svg';
import './App.css';
import React from 'react';
import MenuAppBar from './components/MenuAppBar.jsx';
import Banner from './components/Banner.jsx';
import Clock from './components/Clock.jsx';
import Location from './components/Location.jsx';
//import Maps from './components/Maps.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar />
      </header>
      <body className="App-body">
        <Banner />
        <Clock />
        <Location />
        <div >
        <img id="droneImg" src="https://d1e70rtlfmc4ez.cloudfront.net/drne/Playbutton_Img.png" alt="drone" />
        </div>
      </body>
    </div>
  );
}

export default App;
