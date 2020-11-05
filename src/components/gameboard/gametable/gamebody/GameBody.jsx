import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';

const GameBody = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios('https://mysterium-game.herokuapp.com/api/weapons')
      .then((responses) => responses.data)
      .then((data) => setCards(data));
  }, []);

  const createStockcard = cards.map((card) => (
    <div key={card.id} className="stockcard-card">
      <img className="stockcard-image" src={card.image} alt={card.name} />
    </div>
  ));

  return (
    <div className="GameBody">
      <StockCard className="stockcardleft" content={createStockcard} />
      <ZoomCard className="zoomcardleft" />
      <ZoomCard className="zoomcardright" />
      <StockCard className="stockcardright" />
    </div>
  );
};

export default GameBody;
