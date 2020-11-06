import React from 'react';
import PropTypes from 'prop-types';
import GameBody from './gamebody/GameBody';
import '../../../styles/css/component/GameTable.css';
import Rule from '../../help/Rule';

const GameTable = ({ modalIsOpen }) => {
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
