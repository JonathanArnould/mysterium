import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar/Navbar';
import GameTable from './gametable/GameTable';
import GameFooter from './gamefooter/GameFooter';
import '../../styles/css/component/GameBoard.css';

const GameBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visionCards, setVisionCards] = useState({
    place: [],
    weapon: [],
  });
  const [choicesCards, setChoicesCards] = useState({
    place: [],
    weapon: [],
  });

  /*
   * Générer un nombre aléatoire
   *
   * @param {number} min  valeur minimale du nombre généré
   * @param {number} max  valeur maximale du nombre généré
   */
  const getRandomIntInclusive = (min, max) => {
    const minimale = Math.ceil(min);
    const maximale = Math.floor(max);
    return Math.floor(Math.random() * (maximale - minimale + 1)) + minimale;
  };

  /**
   * Extract API data related to weapons, locations or murderer
   *
   * @param {string} url  The url parameter : weapons, places or characters
   * @param {*} state  Name of the state
   * @param {string} key  place or weapon
   */
  const callAPIChoices = (url, state, key) => {
    axios
      .get(`https://mysterium-game.herokuapp.com/api/${url}`)
      .then((responses) => responses.data)
      .then((data) => {
        setChoicesCards({ ...state, [key]: data });
      });
  };

  /**
   * Extract API data related to visions of the weapon, location or murderer
   *
   * @param {string} url   The url parameter : weapons, places or characters
   * @param {string} placeWinStorage  localStorage key to use
   * @param {*} state  Name of the state
   * @param {string} key  place or weapon
   */
  const callAPIVisions = (url, placeWinStorage, state, key) => {
    axios
      .get(`https://mysterium-game.herokuapp.com/api/visions/${url}`)
      .then((responses) => responses.data)
      .then((data) => {
        const visionWin = JSON.parse(localStorage.getItem(placeWinStorage));
        const visions = data.filter(
          (vision) => vision.id_place === visionWin[0].id
        );

        const min = visions[0].id; // valeur minimale de l'id vision
        const max = visions[visions.length - 1].id; // valeur maximale de l'id vision

        /* eslint-disable */
        const randomVisionId = getRandomIntInclusive(min, max);
        const vision = visions.filter((vision) => vision.id === randomVisionId);

        setVisionCards({ ...state, [key]: vision });
      });
  };

  useEffect(() => {
    callAPIVisions('places', 'PlaceWin', visionCards, 'place');
    callAPIChoices('places', choicesCards, 'place');
  }, []);

  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="GameBoard">
      <Navbar setModalIsOpen={handleSetModalIsOpen} modalIsOpen={modalIsOpen} />
      <GameTable
        modalIsOpen={modalIsOpen}
        visionCards={visionCards}
        choicesCards={choicesCards}
      />
      <GameFooter />
    </div>
  );
};
export default GameBoard;
