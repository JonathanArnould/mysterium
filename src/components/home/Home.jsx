import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/css/Home.css';
import titleLogo from '../../styles/images/titleLogo.png';
import cadreImage from '../../styles/images/cadreBouton.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', open: true };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClickHome = this.handleOnClickHome.bind(this);
    this.handleOnClickPopUp = this.handleOnClickPopUp.bind(this);
  }

  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  handleOnClickHome(event) {
    event.preventDefault();
    localStorage.setItem('username', this.state.value);
    this.props.history.push('/medium');
  }

  handleOnClickPopUp(event) {
    event.preventDefault();
    this.setState({ open: false });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="Home">
        {this.state.open && (
          <div className="homePopUpPosition">
            <div className="blurHome"></div>
            <div className="homePopUp">
              <span className="buttonSpan" onClick={this.handleOnClickPopUp}>
                X
              </span>
              <p>
                Pour une meilleure expérience, nous vous conseillons d'activer
                le son en haut à droite 😊 ➚  
              </p>
            </div>
          </div>
        )}
        <div className="titleHome">
          <img className="titleHomeStyle" src={titleLogo} alt="Game Title" />
        </div>
        <form>
          <div className="inputHome">
            <input
              placeHolder="Entrez votre pseudo ..."
              className="inputHomeStyle"
              onChange={this.handleOnChange}
              value={value}
            ></input>
          </div>
          <div className="buttonHome">
            <img className="buttonImage" src={cadreImage} alt="Cadre" />
            <div
              className={`buttonBackground ${
                !value && 'buttonBackgroundDisabled'
              }`}
            />
            <button
              type="submit"
              onClick={this.handleOnClickHome}
              className="buttonHomeStyle"
              disabled={!value}
            >
              Commencer
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
