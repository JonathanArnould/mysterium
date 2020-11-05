import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import GameTable from './gametable/GameTable';
import Navbar from './navbar/Navbar';
import '../../styles/css/component/GameBoard.css';

export const charWeaponPlace = {
  weapon: '',
  place: '',
  murder: '',
};

export const CharWeaponPlaceContext = createContext(charWeaponPlace);

const GameBoard = () => {
  useEffect(() => {
    axios('https://mysterium-game.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((data) => {
        const random = Math.floor(Math.random() * data.length);
        localStorage.setItem('murder', JSON.stringify(data[random]));
        // setCharWeaponPlace({ ...charWeaponPlace, murder: data[random] });
      });
    axios('https://mysterium-game.herokuapp.com/api/weapons')
      .then((response) => response.data)
      .then((data) => {
        const random = Math.floor(Math.random() * data.length);
        localStorage.setItem('weapon', JSON.stringify(data[random]));
        // setCharWeaponPlace({ ...charWeaponPlace, weapon: data[random] });
      });
    axios('https://mysterium-game.herokuapp.com/api/places')
      .then((response) => response.data)
      .then((data) => {
        const random = Math.floor(Math.random() * data.length);
        localStorage.setItem('place', JSON.stringify(data[random]));
        // setCharWeaponPlace({ ...charWeaponPlace, place: data[random] });
      });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="GameBoard">
      <CharWeaponPlaceContext.Provider value={charWeaponPlace}>
        <Navbar
          setModalIsOpen={handleSetModalIsOpen}
          modalIsOpen={modalIsOpen}
        />
        <GameTable modalIsOpen={modalIsOpen} />
      </CharWeaponPlaceContext.Provider>
    </div>
  );
};
export default GameBoard;
