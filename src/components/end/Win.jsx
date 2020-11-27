import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import '../../styles/css/component/Win.css';
import loader from '../../styles/images/loader.gif';
import MurderContext from '../gameboard/MurderContext';

/**
 * Component that displays when the player has won the game
 */
const Win = () => {
  const { charWeaponPlace, setCharWeaponPlace } = useContext(MurderContext);

  const medium = JSON.parse(localStorage.getItem('medium'));
  const killer =
    charWeaponPlace.character && charWeaponPlace.character.content.image;

  const history = useHistory();
  const handleGameover = () => {
    setCharWeaponPlace({
      ...charWeaponPlace,
      weapon: { ...charWeaponPlace.weapon, isFound: false },
      place: { ...charWeaponPlace.place, isFound: false },
      character: { ...charWeaponPlace.character, isFound: false },
    });
    history.push('/medium');
  };
  /**
   * Generate a div with the same content multiple times
   *
   * @param {number}   repeat   the number of repetitions
   */
  const generateDivText = (repeat) => {
    const output = [];
    for (let i = 0; i < repeat; i += 1) {
      output.push(
        <div className="text">
          Vous avez démasqué l&apos;auteur du crime !<br />
          L&apos;esprit qui hante ces lieux a enfin trouvé le repos...
        </div>
      );
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
      <div className="replay">
        <button type="button" onClick={handleGameover}>
          <span>
            <span>
              <span data-attr-span="Start">Rejouer ?</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Win;
