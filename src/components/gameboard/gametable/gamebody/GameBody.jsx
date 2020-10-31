import React from 'react';
import StockCard from './StockCard';
import ZoomCard from './ZoomCard';
import '../../../../styles/css/component/GameBody.css';

const GameBody = () => {
  return (
    <div className="GameBody">
      <StockCard className="stockcardleft" />
      <ZoomCard className="zoomcardleft" />
      <ZoomCard className="zoomcardright" />
      <StockCard className="stockcardright" />
    </div>
  );
};

export default GameBody;
