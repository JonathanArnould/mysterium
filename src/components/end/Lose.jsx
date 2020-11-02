import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/css/component/Lose.css';

const Lose = ({ medium }) => {
  return (
    <div className="Lose">
      <div className="mask" />
      <div className="cards">
        <div className="medium">
          <img src={medium.image} alt="" />
        </div>
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

Lose.propTypes = {
  medium: PropTypes.isRequired,
};

export default Lose;
