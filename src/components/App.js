import React from 'react';
import '../assets/styles/css/main.css';
import NavBar from './NavBar';
import Music from '../assets/images/music.svg';
import Main from './Main';

function App() {
  return (
    <div className="Main">
      <div className="App">
        <NavBar />
        <Main />
      </div>
      <div
        className="purple"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <img src={Music} alt="X" className="firstImg" />
        <img src={Music} alt="X" className="secondImg" />
      </div>
    </div>
  );
}

export default App;
