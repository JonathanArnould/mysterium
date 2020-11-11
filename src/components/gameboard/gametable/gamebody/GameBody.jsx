import React, { useState } from 'react';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';

const GameBody = () => {
  /* eslint-disable */
  const [cards, setCards] = useState([
    JSON.parse(localStorage.getItem('visonCard')),
  ]);

  const createStockcard = cards.map((card) => (
    <div key={card.id} className="stockcard-card hide">
      <img className="stockcard-image" src={card.image} alt={card.name} />
    </div>
  ));

  const createZoomcard = cards.map((card) => (
    <div key={card.id} className="stockcard-card">
      <img className="stockcard-image" src={card.image} alt={card.name} />
    </div>
  ));

  return (
    <div className="GameBody">
      <StockCard className="stockcardleft hide" content={createStockcard} />
      <ZoomCard className="zoomcardleft" content={createZoomcard} />
      <ZoomCard className="zoomcardright" />
      <StockCard className="stockcardright hide" />
    </div>
  );
};

export default GameBody;
