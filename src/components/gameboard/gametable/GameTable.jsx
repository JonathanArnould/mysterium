import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameBody from './gamebody/GameBody';
import '../../../styles/css/component/GameTable.css';
import Rule from '../../help/Rule';
import { CharWeaponPlaceContext } from '../GameBoard';

const GameTable = ({ modalIsOpen }) => {
  const murder = useContext(CharWeaponPlaceContext);

  console.log(murder);
  return (
    <div className="GameTable">
      <GameBody /> {modalIsOpen && <Rule />}
    </div>
  );
};

GameTable.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default GameTable;
