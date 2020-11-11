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
  function getRandomIntInclusive(min, max) {
    const minimale = Math.ceil(min);
    const maximale = Math.floor(max);
    return Math.floor(Math.random() * (maximale - minimale + 1)) + minimale;
  }

  // stocker les cartes places du jeu
  // choisir une carte vision aléatoire dans le dernier tableau créé
  // afficher la carte sélectionnée

  useEffect(() => {
    axios
      .get('https://mysterium-game.herokuapp.com/api/visions/places')
      .then((responses) => responses.data)
      .then((data) => {
        const placeWin = JSON.parse(localStorage.getItem('PlaceWin'));
        const places = data.filter(
          (place) => place.id_place === placeWin[0].id
        );

        const min = places[0].id; // valeur minimale de l'id vision
        const max = places[places.length - 1].id; // valeur maximale de l'id vision
        /* eslint-disable */
        const randomVisionPlaceId = getRandomIntInclusive(min, max);
        const visionPlace = places.filter(
          (vision) => vision.id === randomVisionPlaceId
        );

        setVisionCards({ ...visionCards, place: visionPlace });
      });

    axios
      .get('https://mysterium-game.herokuapp.com/api/places')
      .then((responses) => responses.data)
      .then((data) => {
        setChoicesCards({ ...choicesCards, place: data });
      });
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
