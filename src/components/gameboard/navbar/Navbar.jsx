import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StepContext from '../StepContext';
import '../../../styles/css/Navbar.css';

import crystalBall from '../../../styles/images/image-678070.png';
import clock from '../../../styles/images/horloge.png';
import home from '../../../styles/images/home.png';
import clockhand from '../../../styles/images/aiguille-next.png';

const Navbar = ({ setModalIsOpen, timer }) => {
  const [player, setPlayer] = useState('');
  useEffect(() => {
    const avatar = localStorage.getItem('medium');
    setPlayer(JSON.parse(avatar));
  }, []);

  const [pseudo, setPseudo] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');
    setPseudo(username);
  }, []);

  const { setStep, ...step } = useContext(StepContext);
  let classClockHand = '';
  if (step.step1) {
    classClockHand = 'clockhand';
  } else if (step.step2) {
    classClockHand = 'clockhand place-step-rotation';
  } else if (step.step3) {
    classClockHand = 'clockhand murder-step-rotation';
  } else {
    classClockHand = 'clockhand first-step-rotation';
  }

  return (
    <div>
      <nav className="Navbar">
        <div className="avatar-container">
          {player ? (
            <img
              className="nav-item avatar"
              src={player.image}
              alt={player.name}
            />
          ) : (
            <p>Loading</p>
          )}
          <p className="nav-pseudo">{pseudo}</p>
        </div>

        <div className="nav-item counter">
          <span> {!timer ? 'Temps écoulé!' : `: ${timer}`}</span>
        </div>

        <div className="clock-container">
          <img className="clock" src={clock} alt="clock" />
          <img className={classClockHand} src={clockhand} alt="clockhand" />
        </div>

        <div
          className="nav-item home-container"
          onMouseEnter={() => setDescription('Home')}
          onMouseLeave={() => setDescription('')}
        >
          <Link to="/">
            <img className="nav-item icon-home" src={home} alt="home" />
          </Link>
          {description === 'Home' && (
            <div className="description-home">{description}</div>
          )}
        </div>

        <div
          className="nav-item crystalBall-container"
          onClick={setModalIsOpen}
          onMouseEnter={() => setDescription('Help')}
          onMouseLeave={() => setDescription('')}
        >
          <img id="crystalBall" src={crystalBall} alt="crystal ball" />
          <span className="interroMark">?</span>
          {description === 'Help' && (
            <div className="description-help">{description}</div>
          )}
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  timer: PropTypes.number.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};
export default Navbar;
