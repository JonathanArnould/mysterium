import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import StepContext from '../../StepContext';
import ChoiceContext from '../../ChoiceContext';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';
import Card from './Card';

const GameBody = ({ visionCards, choicesCards }) => {
  const [leftCards] = useState({ items: [], activeItem: null });
  const { setStep, ...step } = useContext(StepContext);
  const { updateChoice, ...choices } = useContext(ChoiceContext);

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

  /**
   * Show or hide cards in zoomcard components
   *
   * @param {object} stockcardContainer  parent of the current element which has the StockCard-container class
   * @param {string} classZoomcard   zoomcardleft or zoomcardright
   * @param {number} idNumber   the last character of the id of the card to display
   * @param {object} imageToDisplay  The card to display
   */
  const showOrHideZoomcard = (
    stockcardContainer,
    classZoomcard,
    idNumber,
    imageToDisplay
  ) => {
    Object.values(stockcardContainer.parentNode.parentNode.children).forEach(
      (link) => {
        if (link.classList.contains(classZoomcard)) {
          Object.values(link.children).forEach((item) => {
            item.classList.remove('begin-hide');
            item.classList.remove('begin-show');
            item.classList.remove('show');
            item.classList.add('hide');

            if (item.id.slice(-1) === idNumber) {
              item.classList.remove('hide');
              item.classList.add('show');
            }
          });
        }
      }
    );
    imageToDisplay.classList.add('show');
  };

  /**
   * Show the 'zoomcard' which has the class show
   * Hide or show the stockcard
   *
   * @param {Event} e
   */
  const handleClick = (e) => {
    const currentElement = e.target;
    const stockcardContainer = currentElement.parentNode.parentNode;
    const cards = stockcardContainer.children;
    const stockcard = stockcardContainer.parentNode;
    let stockcardLeft = false;
    let stockcardRight = false;

    if (stockcardContainer.parentNode.classList.contains('stockcardleft')) {
      stockcardLeft = true;
    } else {
      stockcardRight = true;
    }

    Object.values(cards).forEach((link) => {
      if (link.classList.contains('stockcard-card')) {
        link.children[0].classList.remove('active');
      }
    });
    currentElement.classList.add('active');

    const idNumber = currentElement.parentNode.id.slice(-1);

    let imageToDisplay = '';
    if (idNumber <= '4') {
      imageToDisplay = document.getElementById(`zoomcard-choice-${idNumber}`);
    } else {
      imageToDisplay = document.getElementById(`zoomcard-vision-${idNumber}`);
    }

    if (stockcardLeft) {
      showOrHideZoomcard(
        stockcardContainer,
        'zoomcardleft',
        idNumber,
        imageToDisplay
      );
    } else if (stockcardRight) {
      showOrHideZoomcard(
        stockcardContainer,
        'zoomcardright',
        idNumber,
        imageToDisplay
      );
    }

    hideOrShowCard(cards);
    hideOrShowStockcard(stockcard);
    changeButtonLabel(currentElement);
  };

  const createStockcardVisions = (type) => {
    return type.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        className="stockcard-card hide"
        id={`stockcard-vision-${index + 5}`}
        classNameImage="stockcard-image"
        // handleClick={handleClick}
      />
    ));
  };

  const createZoomcardVisions = (type) => {
    return type.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        className={`zoomcard-card${
          index + 5 !== 5 ? ' begin-hide' : ' begin-show'
        }`}
        id={`zoomcard-vision-${index + 5}`}
        classNameImage="zoomcard-image"
      />
    ));
  };

  const createStockcardChoices = (type) =>
    type.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        className="stockcard-card hide"
        id={`stockcard-choice-${index + 1}`}
        classNameImage={`stockcard-image ${
          leftCards.activeItem === card.name ? 'active' : ''
        }`}
        // handleClick={handleClick}
      />
    ));

  const createZoomcardChoices = (type) =>
    type.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        className={`zoomcard-card${
          index + 1 !== 1 ? ' begin-hide' : ' begin-show'
        }`}
        id={`zoomcard-choice-${index + 1}`}
        classNameImage="zoomcard-image"
      />
    ));

  let stockcardVisions;
  let zoomcardVisions;
  let stockcardChoices;
  let zoomcardChoices;

  const secondChance = true;

  if (step.step1) {
    stockcardVisions = !secondChance
      ? createStockcardVisions(visionCards.weapons)[0]
      : createStockcardVisions(visionCards.weapons);
    zoomcardVisions = createZoomcardVisions(visionCards.weapons);
    stockcardChoices = createStockcardChoices(choicesCards.weapons);
    zoomcardChoices = createZoomcardChoices(choicesCards.weapons);
  } else if (step.step2) {
    stockcardVisions = !secondChance
      ? createStockcardVisions(visionCards.places)[0]
      : createStockcardVisions(visionCards.places);
    zoomcardVisions = createZoomcardVisions(visionCards.places);
    stockcardChoices = createStockcardChoices(choicesCards.places);
    zoomcardChoices = createZoomcardChoices(choicesCards.places);
  } else if (step.step3) {
    stockcardVisions = !secondChance
      ? createStockcardVisions(visionCards.characters)[0]
      : createStockcardVisions(visionCards.characters);
    zoomcardVisions = createZoomcardVisions(visionCards.characters);
    stockcardChoices = createStockcardChoices(choicesCards.characters);
    zoomcardChoices = createZoomcardChoices(choicesCards.characters);
  }
  console.log(zoomcardChoices);
  const handleValidation = () => {};

  return (
    <div className="GameBody">
      <StockCard
        className="stockcardleft hide"
        content={stockcardChoices}
        hideOrShowStockcard={hideOrShowStockcard}
        hideOrShowCard={hideOrShowCard}
        changeButtonLabel={changeButtonLabel}
      />
      <ZoomCard className="zoomcardleft" content={zoomcardChoices} />
      <button
        type="button"
        className="choiceButton"
        onClick={() => handleValidation()}
      >
        Valider mon choix
      </button>
      <ZoomCard className="zoomcardright" content={zoomcardVisions} />
      <StockCard
        className="stockcardright hide"
        content={stockcardVisions}
        hideOrShowStockcard={hideOrShowStockcard}
        hideOrShowCard={hideOrShowCard}
        changeButtonLabel={changeButtonLabel}
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
};

export default GameBody;
