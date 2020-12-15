import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import '../../styles/css/component/Lose.css';
import loader from '../../styles/images/loader.gif';

/**
 * Component that displays when the player has lost the game
 */
const Lose = () => {
  const medium = JSON.parse(localStorage.getItem('medium'));

  const history = useHistory();
  const handleGameover = () => {
    history.push('/medium');
  };
  return (
    <div className="Lose">
      <div className="mask" />
      <div className="cards">
        {medium ? (
          <Card className="medium" image={medium.image} />
        ) : (
          <div>
            <img src={loader} className="loading" alt="loading..." />
            <p className="loading-text">Loading...</p>
          </div>
        )}
      </div>

      <div className="replay">
        <h1 className="end-title">
          Le coupable court toujours! <br /> L&apos;esprit qui hante ces lieux
          ne trouvera pas la paix!
        </h1>
        <button type="button" onClick={handleGameover}>
          <span>
            <span>
              <span data-attr-span="Start">Rejouer</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Lose;
