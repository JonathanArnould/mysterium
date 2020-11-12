import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MurderContext from './MurderContext';
import Navbar from './navbar/Navbar';
import GameTable from './gametable/GameTable';
import GameFooter from './gamefooter/GameFooter';
import '../../styles/css/component/GameBoard.css';

const GameBoard = () => {
  const [charWeaponPlace, setCharWeaponPlace] = useState({});

  const murderContextValue = {
    charWeaponPlace,
  };

  useEffect(() => {
    axios('https://mysterium-game.herokuapp.com/api/characters')
      .then((response) => response.data)
      .then((dataCharacter) => {
        const randomCharacter = Math.floor(
          Math.random() * dataCharacter.length
        );
        axios('https://mysterium-game.herokuapp.com/api/weapons')
          .then((response2) => response2.data)
          .then((dataWeapon) => {
            const randomWeapon = Math.floor(Math.random() * dataWeapon.length);
            axios('https://mysterium-game.herokuapp.com/api/places')
              .then((response3) => response3.data)
              .then((dataPlace) => {
                const randomPlace = Math.floor(
                  Math.random() * dataPlace.length
                );
                setCharWeaponPlace({
                  weapon: {
                    content: dataWeapon[randomWeapon],
                    isFound: true,
                  },
                  place: {
                    content: dataPlace[randomPlace],
                    isFound: true,
                  },
                  character: {
                    content: dataCharacter[randomCharacter],
                    isFound: true,
                  },
                });
              });
          });
      });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className="GameBoard">
      <MurderContext.Provider value={murderContextValue}>
        <Navbar
          setModalIsOpen={handleSetModalIsOpen}
          modalIsOpen={modalIsOpen}
        />
        <GameTable modalIsOpen={modalIsOpen} />
        <GameFooter />
      </MurderContext.Provider>
    </div>
  );
};

export default GameBoard;
