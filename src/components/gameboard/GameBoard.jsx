import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MurderContext from './MurderContext';
import ChoiceContext from './ChoiceContext';
import StepContext from './StepContext';
import Navbar from './navbar/Navbar';
import GameFooter from './gamefooter/GameFooter';
import '../../styles/css/component/GameBoard.css';
import GameBody from './gametable/gamebody/GameBody';
import Rule from '../help/Rule';

const GameBoard = () => {
  // COMBINAISON GAGNANTE WEAPON PLACE CHARACTER

  const { charWeaponPlace, setCharWeaponPlace } = useContext(MurderContext);

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

  const [count, setCount] = useState(1);

  // const [secondChance, setSecondChance] = useState(false);

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
    handleVisions('weapons', charWeaponPlace.weapon.content.id, 'id_weapon');
    handleChoices('weapons');
  };

  // VERIFIER CHOIX DU JOUEUR
  const [secondChance, setSecondChance] = useState(false);
  const [choices, setChoices] = useState({});
  const choiceContextValue = {
    choices,
  };

  const history = useHistory();

  // SECOND CHANCE
  const handleSecondChance = () => {
    setTimerActive(false);
    setTimeLeft(60);
    setSecondChance(true);
    setTimerActive(true);
  };
  // STEP 2

  const handleStep2 = () => {
    setCharWeaponPlace({
      ...charWeaponPlace,
      weapon: { ...charWeaponPlace.weapon, isFound: true },
    });
    setTimerActive(false);
    setTimeLeft(60);
    setTimerActive(true);
    setStep({ ...step, step1: false, step2: true });
    handleVisions('places', charWeaponPlace.place.content.id, 'id_place');
    handleChoices('places');
  };

  // STEP 3
  const handleStep3 = () => {
    setCharWeaponPlace({
      ...charWeaponPlace,
      place: { ...charWeaponPlace.place, isFound: true },
    });
    setTimerActive(false);
    setTimeLeft(60);
    setTimerActive(true);
    setStep({ ...step, step2: false, step3: true });
    handleVisions(
      'characters',
      charWeaponPlace.character.content.id,
      'id_character'
    );
    handleChoices('characters');
  };

  // STEP 4
  const handleStep4 = () => {
    setCharWeaponPlace({
      ...charWeaponPlace,
      character: { ...charWeaponPlace.character, isFound: true },
    });
    setTimerActive(false);
    history.push('/win');
  };

  const handleValidation = () => {
    if (count === 1) {
      if (choices === charWeaponPlace.weapon.content.id) {
        handleStep2();
        setCount(2);
        setSecondChance(false);
      } else {
        if (secondChance) {
          history.push('/lose');
        } else {
          handleSecondChance();
        }
      }
    } else if (count === 2) {
      if (choices === charWeaponPlace.place.content.id) {
        handleStep3();
        setCount(3);
        setSecondChance(false);
      } else {
        if (secondChance) {
          history.push('/lose');
        } else {
          handleSecondChance();
        }
      }
    } else if (count === 3) {
      if (choices === charWeaponPlace.character.content.id) {
        handleStep4();
        setCount(4);
        setSecondChance(false);
      } else {
        if (secondChance) {
          history.push('/lose');
        } else {
          handleSecondChance();
        }
      }
    }

    // step.step1 && !secondChance && choices.id === weapon.id
    //   ? handleStep2()
    //   : handleSecondChance();

    // step.step1 && secondChance && choices.id === weapon.id && handleStep2(); // écran lose;
    // step.step2 && !secondChance && choices.id === place.id
    //   ? handleStep3()
    //   : handleSecondChance();
    // step.step2 && secondChance && choices.id === place.id ? handleStep3() : ''; // écran lose;
    // step.step3 && !secondChance && choices.id === character.id
    //   ? handleStep4()
    //   : handleSecondChance();
    // step.step3 && secondChance && choices.id === character.id
    //   ? handleStep4()
    //   : ''; // écran lose;
  };

  // CONTEXTE CHOIX DU JOUEUR

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
      <ChoiceContext.Provider value={{ choiceContextValue, updateChoice }}>
        <StepContext.Provider value={{ ...step, setStep }}>
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
          <GameBody
            visionCards={visionCards && visionCards}
            choicesCards={choicesCards && choicesCards}
            secondChance={secondChance}
            handleValidation={handleValidation}
            gameOn={gameOn}
          />{' '}
          {modalIsOpen && <Rule setModalIsOpen={handleSetModalIsOpen} />}
          <GameFooter />
        </StepContext.Provider>
      </ChoiceContext.Provider>
    </div>
  );
};

export default GameBoard;
