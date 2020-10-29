import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/css/Home.css';
import titleLogo from '../../styles/images/titleLogo.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = { value: '' };
    this.hundleOnChange = this.hundleOnChange.bind(this);
    this.hundleOnClickHome = this.hundleOnClickHome.bind(this);
  }
  hundleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  hundleOnClickHome(event) {
    event.preventDefault();
    localStorage.setItem('username', this.state.value);
    this.props.history.push('/medium');
  }

  render() {
    const { value } = this.state;
    return (
      <div className="Home">
        <div className="titleHome">
          <img className="titleHomeStyle" src={titleLogo} alt="Game Title" />
        </div>
        <div className="inputHome">
          <input
            placeHolder="Entrez votre pseudo..."
            className="inputHomeStyle"
            onChange={this.hundleOnChange}
            value={value}
          ></input>
        </div>
        <div className="buttonHome">
          <button
            type="submit"
            onClick={this.hundleOnClickHome}
            className={`${
              value ? 'buttonHomeStyle' : 'buttonHomeStyleDisabled'
            }`}
            disabled={!value}
          >
            Commencer
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
