import React from 'react';
import PropTypes from 'prop-types';
import GameBody from './gamebody/GameBody';
import '../../../styles/css/component/GameTable.css';
import Rule from '../../help/Rule';

const GameTable = ({
  modalIsOpen,
  visionCards,
  choicesCards,
  getRandomIntInclusive,
  callAPIChoices,
  callAPIVisions,
}) => {
  return (
    <div className="GameTable">
      <GameBody
        visionCards={visionCards}
        choicesCards={choicesCards}
        getRandomIntInclusive={getRandomIntInclusive}
        callAPIChoices={callAPIChoices}
        callAPIVisions={callAPIVisions}
      />{' '}
      {modalIsOpen && <Rule />}
    </div>
  );
};

GameTable.defaultProps = {
  visionCards: {},
  choicesCards: {},
  getRandomIntInclusive: null,
  callAPIChoices: null,
  callAPIVisions: null,
};

GameTable.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  visionCards: PropTypes.string,
  choicesCards: PropTypes.string,
  getRandomIntInclusive: PropTypes.func,
  callAPIChoices: PropTypes.func,
  callAPIVisions: PropTypes.func,
};

export default GameTable;
