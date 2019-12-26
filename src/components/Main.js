import React from 'react';
import '../assets/styles/css/Main.css';
import Music from '../assets/images/music.svg';

const Main = () => {
  return (
    <main>
      <div>
        <h1>
          <span className="light">Feel</span>
          <br />
          <span className="bolder">the vibe.</span>
        </h1>
        <p>Join the group of elite dancers.</p>
        <p className="bold">
          Start from the begining and{' '}
          <span className="bolder">dance your way to the top.</span>
        </p>
        <p className="bolder">Let's get started!</p>
        <button type="button" className="btn">
          SIGN UP
        </button>
      </div>
      <div className="image">
        <img src={Music} alt="X" />
      </div>
    </main>
  );
};

export default Main;
