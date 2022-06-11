//import logo from './logo.svg';
import './App.css';
import React from 'react';
import MenuAppBar from './components/MenuAppBar.jsx';
import Banner from './components/Banner.jsx';
import Clock from './components/Clock.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar />
      </header>
      <body className="App-body">
        <Banner />
        <Clock />
      </body>
    </div>
  );
}

export default App;
