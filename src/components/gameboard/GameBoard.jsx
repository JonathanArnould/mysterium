import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MurderContext from './MurderContext';
import ChoiceContext from './ChoiceContext';
import StepContext from './StepContext';
import Navbar from './navbar/Navbar';
import GameTable from './gametable/GameTable';
import GameFooter from './gamefooter/GameFooter';
import '../../styles/css/component/GameBoard.css';

const GameBoard = () => {
  // COMBINAISON GAGNANTE WEAPON PLACE CHARACTER

  const [charWeaponPlace, setCharWeaponPlace] = useState({});

  const murderContextValue = {
    charWeaponPlace,
  };

  const { weapon, place } = charWeaponPlace;

  const handleAxios = () => {
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
                    isFound: false,
                  },
                  place: {
                    content: dataPlace[randomPlace],
                    isFound: false,
                  },
                  character: {
                    content: dataCharacter[randomCharacter],
                    isFound: false,
                  },
                });
              });
          });
      });
  };

  useEffect(() => {
    handleAxios();
  }, []);

  // ETAT DE PARTIE
  const [gameOn, setGameOn] = useState(false);

  // ETAPES DE JEU
  const [step, setStep] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const [secondChance, setSecondChance] = useState(false);

  // TIMER (DEMARRE AU CLIC SUR BOUTON)
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (timeLeft && timerActive === true) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
    return timeLeft;
  }, [timeLeft, timerActive]);

  // 2 CARTES VISIONS GENEREES PAR ETAPE DE JEU WEAPON, PLACE, CHARACTER
  const [visionCards, setVisionCards] = useState({
    weapons: [],
    places: [],
    characters: [],
  });

  // 4 CARTES DE JEU GENEREES PAR ETAPE DE JEU WEAPON, PLACE, CHARACTER
  const [choicesCards, setChoicesCards] = useState({
    weapons: [],
    places: [],
    characters: [],
  });

  const handleVisions = (type, id, idType) => {
    axios
      .get(`https://mysterium-game.herokuapp.com/api/visions/${type}`)
      .then((response4) => response4.data)
      .then((data) =>
        setVisionCards({
          ...visionCards,
          [type]: data
            .filter((vision) => vision[idType] === id)
            .sort(() => 0.3 - Math.random())
            .slice(0, 2),
        })
      );
  };

  const handleChoices = (type) => {
    axios
      .get(`https://mysterium-game.herokuapp.com/api/${type}`)
      .then((response5) => response5.data)
      .then((data) =>
        setChoicesCards({
          ...choicesCards,
          [type]: data,
        })
      );
  };

  // FONCTION DE DEMARRAGE DU JEU AU CLIC
  // STEP 1

  const startGame = () => {
    setGameOn(true);
    setTimerActive(true);
    setStep({ ...step, step1: true });
    handleVisions('weapons', weapon.content.id, 'id_weapon');
    handleChoices('weapons');
  };

  // VERIFIER CHOIX DU JOUEUR

  const handleValidation = () => {};

  /* 
      2ème chance: const [secondTry, setSecondTry] = useState(false);
      Bouton valide le choix du joueur - présent tout au long de la partie
      + confirm du choix par le joueur - si confirmation => stop chrono

      onClick => compare ID de ZoomCard avec ID carte de charWeaponPlace

      si Id zoomCard === Id charWeaponPlace => handleStep2 + setCharWeaponPlace(isFound : true)

      sinon setSecondChance(true) => afficher la 2ème carte vision + reset chrono

      si isNotFound  => End/Lose
      
  */

  // STEP 2

  const handleStep2 = () => {
    setTimerActive(true);
    setStep({ ...step, step1: false, step2: true });
    handleVisions('places', place.content.id, 'id_place');
    handleChoices('places');
  };

  // STEP 3

  /*  const updateStepValue = (value) => {
    setStep(value);
  }; */

  // CONTEXTE CHOIX DU JOUEUR
  const [choices, setChoices] = useState({
    places: null,
    weapons: null,
    characters: null,
  });
  const choiceContextValue = {
    choices,
  };

  const updateChoice = (value) => {
    setChoices(value);
  };

  // GESTION MODALE TUTO
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className={`GameBoard${modalIsOpen ? ' is-open' : ''}`}>
      <MurderContext.Provider value={murderContextValue}>
        <ChoiceContext.Provider value={{ choiceContextValue, updateChoice }}>
          <StepContext.Provider value={{ ...step }}>
            <Navbar
              setModalIsOpen={handleSetModalIsOpen}
              modalIsOpen={modalIsOpen}
              timer={timeLeft}
            />
            {!gameOn && (
              <button type="button" className="button-1" onClick={startGame}>
                READY TO PLAY
              </button>
            )}
            <button type="button" className="button-2" onClick={handleStep2}>
              ETAPE 2
            </button>
            <button
              type="button"
              className="choiceButton"
              onClick={handleValidation}
            >
              Valider mon choix
            </button>
            <GameTable
              setModalIsOpen={handleSetModalIsOpen}
              modalIsOpen={modalIsOpen}
              visionCards={visionCards}
              choicesCards={choicesCards}
            />
            <GameFooter />
          </StepContext.Provider>
        </ChoiceContext.Provider>
      </MurderContext.Provider>
    </div>
  );
};

export default GameBoard;
