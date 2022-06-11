//import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/MenuAppBar.jsx';
import Banner from './components/Banner.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar />
      </header>
      <body className="App-body">
        <Banner />
      </body>
    </div>
  );
}

export default App;
