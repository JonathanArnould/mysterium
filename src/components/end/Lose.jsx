import React from 'react';
import '../../styles/css/component/Lose.css';

const Lose = () => {
  return (
    <div className="Lose">
      <div className="mask" />
      <div className="cards">
        <div className="ghost" />
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

export default Lose;
