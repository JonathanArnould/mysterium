import React, { useContext } from 'react';
import MurderContext from '../MurderContext';
import '../../../styles/css/component/GameFooter.css';

const GameFooter = () => {
  const { charWeaponPlace } = useContext(MurderContext);
  return (
    <div className="GameFooter">
      {Object.keys(charWeaponPlace).length !== 0 && (
        <div className="cardfooter-container">
          <div
            className={`card ${
              charWeaponPlace.weapon.isFound ? 'card-found' : 'card-not-found'
            }`}
          >
            <img
              src={charWeaponPlace.weapon.content.image}
              alt={charWeaponPlace.weapon.content.name}
            />
          </div>
          <div
            className={`card ${
              charWeaponPlace.character.isFound
                ? 'card-found'
                : 'card-not-found'
            }`}
          >
            <img
              src={charWeaponPlace.place.content.image}
              alt={charWeaponPlace.place.content.name}
            />
          </div>
          <div
            className={`card ${
              charWeaponPlace.place.isFound ? 'card-found' : 'card-not-found'
            }`}
          >
            <img
              src={charWeaponPlace.character.content.image}
              alt={charWeaponPlace.place.content.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameFooter;
