import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';
import Card from './Card';

const GameBody = ({ visionCards, choicesCards }) => {
  const [leftCards] = useState({ items: [], activeItem: null });

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

  const createStockcardVisions = visionCards.places.map((card, index) => (
    <Card
      key={card.id}
      card={card}
      className="stockcard-card hide"
      id={`stockcard-vision-${index + 5}`}
      classNameImage="stockcard-image"
      handleClick={handleClick}
    />
  ));

  const createZoomcardVisions = visionCards.places.map((card, index) => (
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

  const createStockcardChoices = choicesCards.places.map((card, index) => (
    <Card
      key={card.id}
      card={card}
      className="stockcard-card hide"
      id={`stockcard-choice-${index + 1}`}
      classNameImage={`stockcard-image ${
        leftCards.activeItem === card.name ? 'active' : ''
      }`}
      handleClick={handleClick}
    />
  ));

  const createZoomcardChoices = choicesCards.places.map((card, index) => (
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

  return (
    <div className="GameBody">
      <StockCard
        className="stockcardleft hide"
        content={createStockcardChoices}
        hideOrShowStockcard={hideOrShowStockcard}
        hideOrShowCard={hideOrShowCard}
        changeButtonLabel={changeButtonLabel}
      />
      <ZoomCard className="zoomcardleft" content={createZoomcardChoices} />
      <ZoomCard className="zoomcardright" content={createZoomcardVisions} />
      <StockCard
        className="stockcardright hide"
        content={createStockcardVisions}
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
