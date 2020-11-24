import React /* , { useContext } */ from 'react';
import Card from './Card';
import '../../styles/css/component/Win.css';
import loader from '../../styles/images/loader.gif';
/* import MurderContext from '../gameboard/MurderContext'; */

/**
 * Component that displays when the player has won the game
 */
const Win = () => {
  /*   const { charWeaponPlace } = useContext(MurderContext); */

  const medium = JSON.parse(localStorage.getItem('medium'));
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
        {medium ? (
          <div className="cards-container">
            <Card className="medium" image={medium.image} />
            {/* <Card className="killer" image={killer} /> */}
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

export default Win;
