import React from 'react';
import PropTypes from 'prop-types';
import GameBody from './gamebody/GameBody';
import '../../../styles/css/component/GameTable.css';
import Rule from '../../help/Rule';

const GameTable = ({
  modalIsOpen,
  setModalIsOpen,
  visionCards,
  choicesCards,
}) => {
  return (
    <div className="GameTable">
      <GameBody visionCards={visionCards} choicesCards={choicesCards} />{' '}
      {modalIsOpen && <Rule setModalIsOpen={setModalIsOpen} />}
    </div>
  );
};

GameTable.defaultProps = {
  visionCards: {},
  choicesCards: {},
  setModalIsOpen: null,
};

GameTable.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func,
  visionCards: PropTypes.string,
  choicesCards: PropTypes.string,
};

export default GameTable;
