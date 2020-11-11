import React from 'react';
import PropTypes from 'prop-types';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';

const GameBody = ({ visionCards, choicesCards }) => {
  /* eslint-disable */
  // const [cards, setCards] = useState([
  //   JSON.parse(localStorage.getItem('visonCard')),
  // ]);

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
  };

  const createStockcardVisions = visionCards.place.map((card) => (
    <div
      key={card.id}
      className="stockcard-card hide"
      id={`stockcard-vision-${card.id}`}
    >
      <img className="stockcard-image" src={card.image} alt={card.name} />
    </div>
  ));

  const createZoomcardVisions = visionCards.place.map((card) => (
    <div
      key={card.id}
      className="zoomcard-card"
      id={`zoomcard-vision-${card.id}`}
    >
      <img className="zoomcard-image" src={card.image} alt={card.name} />
    </div>
  ));

  const createStockcardChoices = choicesCards.place.map((card) => (
    <div
      key={card.id}
      className="stockcard-card hide"
      id={`stockcard-choice-${card.id}`}
    >
      <img
        onClick={(e) => handleClick(e)}
        className="stockcard-image"
        src={card.image}
        alt={card.name}
      />
    </div>
  ));

  const createZoomcardChoices = choicesCards.place.map((card) => (
    <div
      key={card.id}
      className={`zoomcard-card${card.id === 1 ? ' show' : ''}`}
      id={`zoomcard-choice-${card.id}`}
    >
      <img className="zoomcard-image" src={card.image} alt={card.name} />
    </div>
  ));

  return (
    <div className="GameBody">
      <StockCard
        className="stockcardleft hide"
        content={createStockcardVisions}
      />
      <ZoomCard className="zoomcardleft" content={createZoomcardVisions} />
      <ZoomCard className="zoomcardright" content={createZoomcardChoices} />
      <StockCard
        className="stockcardright hide"
        content={createStockcardChoices}
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
