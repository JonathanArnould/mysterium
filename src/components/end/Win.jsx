import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/css/component/Win.css';

const Win = ({ murder, medium }) => {
  return (
    <div className="Win">
      <div className="mask" />
      <div className="cards">
        <div className="medium">
          <img src={medium.image} alt="" />
        </div>
        <div className="murderer">
          <img src={murder.image} alt="" />
        </div>
      </div>

      <div className="win-text">
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
        <div className="text">The end</div>
      </div>
    </div>
  );
};

Win.propTypes = {
  medium: PropTypes.isRequired,
  murder: PropTypes.isRequired,
};

export default Win;
