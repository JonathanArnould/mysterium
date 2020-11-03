import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../../styles/css/component/Lose.css';

/**
 * Component that displays when the player has lost the game
 */
const Lose = ({ medium }) => {
  return (
    <div className="Lose">
      <div className="mask" />
      <div className="cards">
        <Card className="medium" image={medium} />
      </div>

      <div className="replay">
        <h1>Rejouer</h1>
        <button type="button">
          <span>
            <span>
              <span data-attr-span="Start">Start</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

Lose.defaultProps = {
  medium: null,
};

Lose.propTypes = {
  medium: PropTypes.string,
};

export default Lose;
