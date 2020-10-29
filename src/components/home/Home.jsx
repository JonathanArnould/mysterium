import React, { Component } from 'react';
import '../../styles/css/Home.css';
import titleLogo from '../../styles/images/titleLogo.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hundleSubmitHome = this.hundleSubmitHome.bind(this);
    this.hundleOnChange = this.hundleOnChange.bind(this);
  }
  hundleOnChange(event) {
    this.setState();
  }
  hundleSubmitHome() {}

  render() {
    return (
      <div className="Home">
        <div className="titleHome">
          <img className="titleHomeStyle" src={titleLogo} alt="Game Title" />
        </div>
        <form className="inputHome" onSubmit={this.hundleSubmitHome}>
          <input
            placeholder="Entrez votre pseudo..."
            className="inputHomeStyle"
            onChange={this.hundleOnChange}
          ></input>
        </form>
        <div className="buttonHome">
          <button type="submit" className="buttonHomeStyle">
            Commencer
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
