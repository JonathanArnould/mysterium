import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import GameTable from './gametable/GameTable';
import GameFooter from './gamefooter/GameFooter';
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
      <GameFooter />
    </div>
  );
};
export default GameBoard;
