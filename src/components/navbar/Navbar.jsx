import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/Navbar.css';
import crystalBall from '../../styles/images/image-678070.png';
import clock from '../../styles/images/horloge.png';
import home from '../../styles/images/home.png';
import clockhand from '../../styles/images/aiguille-next.png';

const Navbar = () => {
  const [player, setPlayer] = useState('');

  useEffect(() => {
    const avatar = localStorage.getItem('medium');
    setPlayer(JSON.parse(avatar));
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
            src={player.image}
            alt={player.name}
          />
        ) : (
          <p>Loading</p>
        )}
        <span className="nav-item counter">
          {!timeLeft ? 'Temps écoulé!' : `: ${timeLeft}`}
        </span>
      </div>

      <div className="clock-container">
        <img className="clock" src={clock} alt="clock" />
        <img className="clockhand" src={clockhand} alt="clockhand" />
      </div>

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
