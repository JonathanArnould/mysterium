import React from 'react';
import PropTypes from 'prop-types';
import GameBody from './gamebody/GameBody';
import '../../../styles/css/component/GameTable.css';
import Rule from '../../help/Rule';

const GameTable = ({ modalIsOpen, visionCards, choicesCards }) => {
  return (
    <div className="GameTable">
      <GameBody visionCards={visionCards} choicesCards={choicesCards} />{' '}
      {modalIsOpen && <Rule />}
    </div>
  );
};

GameTable.defaultProps = {
  visionCards: {},
  choicesCards: {},
};

GameTable.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  visionCards: PropTypes.string,
  choicesCards: PropTypes.string,
};

export default GameTable;
