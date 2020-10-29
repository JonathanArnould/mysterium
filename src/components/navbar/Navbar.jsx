import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/css/Navbar.css';
import crystalBall from '../../styles/images/image-678070.png';
import clock from '../../styles/images/clock.resized.png';
import home from '../../styles/images/home.png';

const Navbar = () => {
  const [player, setPlayer] = useState('');

  useEffect(() => {
    axios
      .get('https://randomuser.me/api?nat=fr')
      .then((responses) => setPlayer(responses.data.results[0]));
  }, []);

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
    return timeLeft;
  }, [timeLeft]);

  return (
    <nav>
      <div className="nav-left">
        {player ? (
          <img
            className="nav-item avatar"
            src={player.picture.thumbnail}
            alt={player.name.first}
          />
        ) : (
          <p>Loading</p>
        )}
        <span className="nav-item counter">
          {!timeLeft ? 'Temps écoulé!' : `: ${timeLeft}`}
        </span>
      </div>

      <img className="clock" src={clock} alt="clock" />
      <div className="nav-right">
        <Link to="/">
          <img className="nav-item icon-home" src={home} alt="home" />
        </Link>
        <Link to="/help">
          <div className="nav-item crystalBall-container">
            <img id="crystalBall" src={crystalBall} alt="crystal ball" />
            <span className="interroMark">?</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
