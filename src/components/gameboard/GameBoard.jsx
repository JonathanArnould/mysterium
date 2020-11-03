import React, { useState } from 'react';
import GameTable from './gametable/GameTable';
import Navbar from '../navbar/Navbar';
import '../../styles/css/component/GameBoard.css';

const GameBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className="GameBoard">
      <Navbar setModalIsOpen={handleSetModalIsOpen} modalIsOpen={modalIsOpen} />
      <GameTable modalIsOpen={modalIsOpen} />
    </div>
  );
};
export default GameBoard;
