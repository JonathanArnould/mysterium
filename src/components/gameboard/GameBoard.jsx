import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar/Navbar';
import GameTable from './gametable/GameTable';
import GameFooter from './gamefooter/GameFooter';
import '../../styles/css/component/GameBoard.css';

const GameBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [visonCard, setVisionCard] = useState([]);

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
    // axios
    //   .get('https://mysterium-game.herokuapp.com/api/characters')
    //   .then((response) => response.data)
    //   .then((data) => {
    //     const randomMurderId = getRandomIntInclusive(1, data.length);
    //     const murder = data.filter((character) => console.log(character));

    //     console.log(murder);
    //   });
    axios
      .get('https://mysterium-game.herokuapp.com/api/visions/places')
      .then((responses) => responses.data)
      .then((data) => {
        // const medium = JSON.parse(localStorage.getItem('medium'));
        const randomPlaceId = getRandomIntInclusive(1, data.length);
        const randomPlace = data.filter((place) => place.id === randomPlaceId);

        const samePlacesIds = data.filter(
          (place) => place.id_place === randomPlace[0].id_place
        );

        const min = samePlacesIds[0].id; // valeur minimale de l'id vision
        const max = samePlacesIds[samePlacesIds.length - 1].id; // valeur maximale de l'id vision

        // /* eslint-disable */
        const randomPlaceToDisplay = getRandomIntInclusive(min, max);
        const placeToDisplay = samePlacesIds.filter(
          (vision) => vision.id === randomPlaceToDisplay
        );

        localStorage.setItem('visonCard', JSON.stringify(placeToDisplay[0]));
      });
  }, []);

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
