import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StepContext from '../../StepContext';
import StockcardContext from '../../StockcardContext';
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
  const { stockCardOpen, setStockCardOpen } = useContext(StockcardContext);

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
        className={
          stockCardOpen.stockcardright === 'stockcardright'
            ? 'stockcard-card show'
            : 'stockcard-card hide'
        }
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
        className={
          stockCardOpen.stockcardleft === 'stockcardleft'
            ? 'stockcard-card show'
            : 'stockcard-card hide'
        }
        id={`stockcard-choice-${index + 1}`}
        classNameImage={`stockcard-image ${
          leftCards.activeItem === card.name ? 'active' : ''
        }`}
      />
    ));
  };

  let stockcardVisions;
  let stockcardChoices;

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
        className="stockcardleft"
        content={stockcardChoices}
        gameOn={gameOn}
      />
      <ZoomCard
        className="zoomcardleft"
        content={zoomCardChoices && zoomCardChoices}
      />
      {gameOn && (
        <div className="validate">
          <button
            type="button"
            className="choiceButton"
            onClick={() => handleValidation()}
          >
            <span>
              <span>
                <span data-attr-span="Valider mon choix">
                  Valider mon choix
                </span>
              </span>
            </span>
          </button>
        </div>
      )}
      <ZoomCard
        className="zoomcardright"
        content={zoomCardVisions && zoomCardVisions}
      />
      <StockCard
        className="stockcardright"
        content={stockcardVisions}
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
