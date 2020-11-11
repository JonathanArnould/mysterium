import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';

const GameBody = () => {
  const [leftCards, setLeftCards] = useState({ items: [], activeItem: null });
  const [step] = useState({
    step1: true,
    step2: false,
    step3: false,
  });
  const [zoomCards, setZoomCards] = useState('');

  useEffect(() => {
    Axios('https://mysterium-game.herokuapp.com/api/weapons')
      .then((responses) => responses.data)
      .then((data) => {
        localStorage.setItem('weapons', JSON.stringify(data));
        const weapons = localStorage.getItem('weapons');
        return (
          step.step1 &&
          setLeftCards({ ...leftCards, items: JSON.parse(weapons) })
        );
      });

    Axios('https://mysterium-game.herokuapp.com/api/places')
      .then((responses) => responses.data)
      .then((data) => {
        localStorage.setItem('places', JSON.stringify(data));
        const places = localStorage.getItem('places');
        return (
          step.step2 &&
          setLeftCards({ ...leftCards, items: JSON.parse(places) })
        );
      });

    Axios('https://mysterium-game.herokuapp.com/api/characters')
      .then((responses) => responses.data)
      .then((data) => {
        localStorage.setItem('characters', JSON.stringify(data));
        const characters = localStorage.getItem('characters');
        return (
          step.step3 &&
          setLeftCards({ ...leftCards, items: JSON.parse(characters) })
        );
      });
  }, []);

  const createStockcard = leftCards.items.map((card) => (
    <div key={card.id} className="stockcard-card">
      <img
        onClick={() => {
          setZoomCards(card);
          setLeftCards({ ...leftCards, activeItem: card.name });
        }}
        aria-hidden="true"
        className={`stockcard-image ${
          leftCards.activeItem === card.name ? 'active' : ''
        }`}
        src={card.image}
        alt={card.name}
      />
    </div>
  ));

  const createZoomCardLeft = <img src={zoomCards.image} alt={zoomCards.name} />;

  return (
    <div className="GameBody">
      <StockCard className="stockcardleft" content={createStockcard} />
      <ZoomCard className="zoomcardleft" content={createZoomCardLeft} />
      <ZoomCard className="zoomcardright" />
      <StockCard className="stockcardright" />
    </div>
  );
};

export default GameBody;
