import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/StockCard.css';

const StockCard = ({ className }) => {
  return (
    <div className={`StockCard ${className}`}>
      <div className="Card1">CARD 1</div>
      <div className="Card2">CARD 2</div>
      <div className="Card3">CARD 3</div>
      <div className="Card4">CARD 4</div>
    </div>
  );
};
StockCard.propTypes = { className: PropTypes.string.isRequired };

export default StockCard;
