import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StepContext from '../../StepContext';
/* import ChoiceContext from '../../ChoiceContext'; */
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';
import Card from './Card';

const GameBody = ({
  visionCards,
  choicesCards,
  secondChance,
  handleValidation,
  gameOn,
}) => {
  const { weapons, places, characters } = visionCards;
  const [leftCards] = useState({ items: [], activeItem: null });
  const { setStep, ...step } = useContext(StepContext);

  /**
   * Show or hide the current stockcard
   *
   * @param {object} stockcard  Element with the StockCard class
   */
  const hideOrShowStockcard = (stockcard) => {
    stockcard.classList.toggle('hide');
    stockcard.classList.toggle('show');
  };

  /**
   * Show or hide the images of the current stockcard
   *
   * @param {HTMLCollection} stockcardCards  Container  Element of each image of the current stockard which have class stockcard-card
   */
  const hideOrShowCard = (stockcardCards) => {
    Object.values(stockcardCards).forEach((card) => {
      if (card.classList.contains('stockcard-card')) {
        card.classList.toggle('hide');
        card.classList.toggle('show');
      }
    });
  };

  /**
   * Change the label of the button that opens or closes the current stockcard
   *
   * @param {object} currentElement  The clicked item
   */
  const changeButtonLabel = (currentElement) => {
    if (currentElement.classList.contains('open')) {
      currentElement.nextSibling.classList.toggle('hide');
      currentElement.classList.toggle('hide');
    } else {
      currentElement.parentNode.children[0].classList.toggle('hide');
      currentElement.classList.toggle('hide');
    }
  };

  let firstImageVision;
  let firstImageChoice;

  if (step.step1) {
    firstImageVision = weapons[0];
    firstImageChoice = choicesCards.weapons[0];
  } else if (step.step2) {
    firstImageVision = places[0];
    firstImageChoice = choicesCards.places[0];
  } else if (step.step3) {
    firstImageVision = characters[0];
    firstImageChoice = choicesCards.characters[0];
  }

  const [zoomCardVisions, setZoomCardVisions] = useState({});
  const [zoomCardChoices, setZoomCardChoices] = useState({});

  useEffect(() => {
    setZoomCardVisions(firstImageVision);
  }, [firstImageVision]);

  useEffect(() => {
    setZoomCardChoices(firstImageChoice);
  }, [firstImageChoice]);

  const handleZoomVisions = (card) => {
    setZoomCardVisions(card);
  };

  const createStockcardVisions = (type) => {
    return type.map((card, index) => (
      <Card
        handleZoom={() => handleZoomVisions(card)}
        key={card.id}
        card={card}
        className="stockcard-card hide"
        id={`stockcard-vision-${index + 5}`}
        classNameImage="stockcard-image"
      />
    ));
  };

  const handleZoomChoices = (card) => {
    setZoomCardChoices(card);
  };

  const createStockcardChoices = (type) => {
    return type.map((card, index) => (
      <Card
        handleZoom={() => handleZoomChoices(card)}
        key={card.id}
        card={card}
        className="stockcard-card hide"
        id={`stockcard-choice-${index + 1}`}
        classNameImage={`stockcard-image ${
          leftCards.activeItem === card.name ? 'active' : ''
        }`}
      />
    ));
  };

  let stockcardVisions;
  let stockcardChoices;

  /* const { updateChoice, ...choices } = useContext(ChoiceContext); */

  if (step.step1) {
    stockcardVisions = !secondChance
      ? createStockcardVisions(weapons)[0]
      : createStockcardVisions(weapons);
    stockcardChoices = createStockcardChoices(choicesCards.weapons);
  } else if (step.step2) {
    stockcardVisions = !secondChance
      ? createStockcardVisions(places)[0]
      : createStockcardVisions(places);
    stockcardChoices = createStockcardChoices(choicesCards.places);
  } else if (step.step3) {
    stockcardVisions = !secondChance
      ? createStockcardVisions(characters)[0]
      : createStockcardVisions(characters);
    stockcardChoices = createStockcardChoices(choicesCards.characters);
  }

  return (
    <div className="GameBody">
      <StockCard
        className="stockcardleft hide"
        content={stockcardChoices}
        hideOrShowStockcard={hideOrShowStockcard}
        hideOrShowCard={hideOrShowCard}
        changeButtonLabel={changeButtonLabel}
        gameOn={gameOn}
      />
      <ZoomCard
        className="zoomcardleft"
        content={zoomCardChoices && zoomCardChoices}
      />
      <button
        type="button"
        className="choiceButton"
        onClick={() => handleValidation()}
      >
        Valider mon choix
      </button>
      <ZoomCard
        className="zoomcardright"
        content={zoomCardVisions && zoomCardVisions}
      />
      <StockCard
        className="stockcardright hide"
        content={stockcardVisions}
        hideOrShowStockcard={hideOrShowStockcard}
        hideOrShowCard={hideOrShowCard}
        changeButtonLabel={changeButtonLabel}
        gameOn={gameOn}
      />
    </div>
  );
};

GameBody.defaultProps = {
  visionCards: {},
  choicesCards: {},
};

GameBody.propTypes = {
  visionCards: PropTypes.string,
  choicesCards: PropTypes.string,
  secondChance: PropTypes.bool.isRequired,
  handleValidation: PropTypes.func.isRequired,
};

export default GameBody;
