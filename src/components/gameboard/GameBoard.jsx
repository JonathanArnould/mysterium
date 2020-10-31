import React from 'react';
import GameTable from './gametable/GameTable';
import Navbar from '../navbar/Navbar';
import '../../styles/css/component/GameBoard.css';

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <Navbar />
      <GameTable />
    </div>
  );
};
export default GameBoard;
