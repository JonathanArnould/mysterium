import React, { Component } from 'react';
import '../../styles/css/Home.css';
import titleLogo from '../../styles/images/titleLogo.png';

function Home() {
  return (
    <div>
      <div className="titleHome">
        <img className="titleStyle" src={titleLogo} alt="Game Title" />
      </div>
      <div className="inputHome">
        <input className="inputStyle"></input>
      </div>
      <div className="buttonHome">
        <button className="buttonStyle">Commencer</button>
      </div>
    </div>
  );
}
export default Home;
