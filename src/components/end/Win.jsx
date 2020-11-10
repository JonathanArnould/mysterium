import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../../styles/css/component/Win.css';
import loader from '../../styles/images/loader.gif';

/**
 * Component that displays when the player has won the game
 */
const Win = ({ killer, medium }) => {
  /**
   * Generate a div with the same content multiple times
   *
   * @param {number}   repeat   the number of repetitions
   */
  const generateDivText = (repeat) => {
    const output = [];
    for (let i = 0; i < repeat; i += 1) {
      output.push(<div className="text">The end</div>);
    }

    return output;
  };

  return (
    <div className="Win">
      <div className="mask" />
      <div className="cards">
        {medium && killer ? (
          <div className="cards-container">
            <Card className="medium" image={medium} />
            <Card className="killer" image={killer} />
          </div>
        ) : (
          <div>
            <img src={loader} className="loading" alt="loading..." />
            <p className="loading-text">Loading...</p>
          </div>
        )}
      </div>

      <div className="win-text">{generateDivText(40)}</div>
    </div>
  );
};

Win.defaultProps = {
  medium: null,
  killer: null,
};

Win.propTypes = {
  medium: PropTypes.string,
  killer: PropTypes.string,
};

export default Win;
