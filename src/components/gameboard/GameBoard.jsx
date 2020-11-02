import React, { useState } from 'react';
import GameTable from './gametable/GameTable';
import Navbar from '../navbar/Navbar';
import '../../styles/css/component/GameBoard.css';
import Rule from '../help/Rule';

const GameBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className="GameBoard">
      <Navbar setModalIsOpen={handleSetModalIsOpen} modalIsOpen={modalIsOpen} />
      <GameTable />
      {modalIsOpen && <Rule />}
    </div>
  );
};
export default GameBoard;
