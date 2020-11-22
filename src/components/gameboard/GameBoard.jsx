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
  const [step, setStep] = useState({
    step1: false,
    step2: true,
    step3: false,
  });
  const stepContextValue = {
    step,
  };

  const updateStepValue = (value) => {
    setStep(value);
  };

  const [visionCards, setVisionCards] = useState({
    places: [],
    weapons: [],
    characters: [],
  });

  const [choicesCards, setChoicesCards] = useState({
    places: [],
    weapons: [],
    characters: [],
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [charWeaponPlace, setCharWeaponPlace] = useState({});
  const murderContextValue = {
    charWeaponPlace,
  };

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

  const handleSetModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

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

                if (step.step1) {
                  handleVisions(
                    'weapons',
                    dataWeapon[randomWeapon].id,
                    'id_weapon'
                  );
                  handleChoices('weapons');
                } else if (step.step2) {
                  handleVisions(
                    'places',
                    dataPlace[randomPlace].id,
                    'id_place'
                  );
                  handleChoices('places');
                } else if (step.step3) {
                  handleVisions(
                    'characters',
                    dataCharacter[randomCharacter].id,
                    'id_character'
                  );
                  handleChoices('characters');
                }
              });
          });
      });
  }, []);

  return (
    <div className={`GameBoard${modalIsOpen ? ' is-open' : ''}`}>
      <MurderContext.Provider value={murderContextValue}>
        <ChoiceContext.Provider value={{ choiceContextValue, updateChoice }}>
          <StepContext.Provider value={{ stepContextValue, updateStepValue }}>
            <Navbar
              setModalIsOpen={handleSetModalIsOpen}
              modalIsOpen={modalIsOpen}
            />

            <GameTable
              setModalIsOpen={handleSetModalIsOpen}
              modalIsOpen={modalIsOpen}
              visionCards={visionCards}
              choicesCards={choicesCards}
              step={step}
            />
            <GameFooter />
          </StepContext.Provider>
        </ChoiceContext.Provider>
      </MurderContext.Provider>
    </div>
  );
};

export default GameBoard;
