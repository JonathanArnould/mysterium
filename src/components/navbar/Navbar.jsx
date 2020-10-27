import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/css/Navbar.css';
import crystalBall from '../../styles/images/image-678070.png';
import clock from '../../styles/images/clock.resized.png';

const Navbar = () => {
  const [player, setPlayer] = useState('');

  useEffect(() => {
    axios
      .get('https://randomuser.me/api?nat=fr')
      .then((responses) => setPlayer(responses.data.results[0]));
  }, []);

  return (
    <nav>
      {player ? (
        <img
          className="avatar"
          src={player.picture.thumbnail}
          alt={player.name.first}
        />
      ) : (
        <p>Loading</p>
      )}
      <span>Timer</span>
      <img className="clock" src={clock} alt="clock" />
      <Link to="/">Home</Link>
      <Link to="/help">
        <div className="crystalBall-container">
          <img id="crystalBall" src={crystalBall} alt="crystal ball" />
          <span className="interroMark">?</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
