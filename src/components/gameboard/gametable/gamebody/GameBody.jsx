import React from 'react';
import PropTypes from 'prop-types';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';
import Card from './Card';

const GameBody = ({ visionCards, choicesCards }) => {
  /* eslint-disable */
  // const [cards, setCards] = useState([
  //   JSON.parse(localStorage.getItem('visonCard')),
  // ]);

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

  const handleClick = (e) => {
    Object.values(e.target.parentNode.parentNode.children).forEach((link) => {
      if (link.classList.contains('stockcard-card')) {
        link.children[0].classList.remove('active');
      }
    });
    e.target.classList.add('active');

    const idNumber = e.target.parentNode.id.slice(-1);
    const imageToDisplay = document.getElementById(
      `zoomcard-choice-${idNumber}`
    );

    Object.values(
      e.target.parentNode.parentNode.parentNode.parentNode.children
    ).forEach((link) => {
      if (link.classList.contains('zoomcardright')) {
        Object.values(link.children).forEach((item) => {
          item.classList.remove('show');

          if (item.id.slice(-1) === idNumber) {
            item.classList.add('show');
          }
        });
      }
    });
    imageToDisplay.classList.add('show');

    const cards = e.target.parentNode.parentNode.children;
    const stockcard = e.target.parentNode.parentNode.parentNode;
    const currentElement = e.target;
    hideOrShowCard(cards);
    hideOrShowStockcard(stockcard);
    changeButtonLabel(currentElement);
  };

  const createStockcardVisions = visionCards.place.map((card) => (
    <Card
      key={card.id}
      card={card}
      className="stockcard-card hide"
      id={`stockcard-vision-${card.id}`}
      classNameImage="stockcard-image"
      handleClick={handleClick}
    />
  ));

  const createZoomcardVisions = visionCards.place.map((card) => (
    <Card
      key={card.id}
      card={card}
      className="zoomcard-card"
      id={`zoomcard-vision-${card.id}`}
      classNameImage="zoomcard-image"
    />
  ));

  const createStockcardChoices = choicesCards.place.map((card) => (
    <Card
      key={card.id}
      card={card}
      className="stockcard-card hide"
      id={`stockcard-choice-${card.id}`}
      classNameImage="stockcard-image"
      handleClick={handleClick}
    />
  ));

  const createZoomcardChoices = choicesCards.place.map((card) => (
    <Card
      key={card.id}
      card={card}
      className={`zoomcard-card${card.id === 1 ? ' show' : ''}`}
      id={`zoomcard-choice-${card.id}`}
      classNameImage="zoomcard-image"
    />
  ));

  return (
    <div className="GameBody">
      <StockCard
        className="stockcardleft hide"
        content={createStockcardVisions}
        hideOrShowStockcard={hideOrShowStockcard}
        hideOrShowCard={hideOrShowCard}
        changeButtonLabel={changeButtonLabel}
      />
      <ZoomCard className="zoomcardleft" content={createZoomcardVisions} />
      <ZoomCard className="zoomcardright" content={createZoomcardChoices} />
      <StockCard
        className="stockcardright hide"
        content={createStockcardChoices}
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
