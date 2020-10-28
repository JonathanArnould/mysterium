import React, { Component } from 'react';
import '../../styles/css/Home.css';
import titleLogo from '../../styles/images/titleLogo.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitHome = this.submitHome.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState();
  }
  submitHome() {}

  render() {
    return (
      <div>
        <div className="titleHome">
          <img className="titleStyle" src={titleLogo} alt="Game Title" />
        </div>
        <form className="inputHome" onSubmit={this.submitHome}>
          <input
            placeholder="Entrez votre pseudo..."
            className="inputStyle"
            onChange={this.onChange}
          ></input>
        </form>
        <div className="buttonHome">
          <button type="submit" className="buttonStyle">
            Commencer
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
