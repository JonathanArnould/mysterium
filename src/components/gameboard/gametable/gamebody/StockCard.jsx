import React, { useState, useEffect, useContext } from 'react';
import StockcardContext from '../../StockcardContext';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/StockCard.css';

const StockCard = ({ className, id, content, gameOn, openStockcard }) => {
  const {
    stockCardOpen,
    setStockCardOpen,
    displayStockcard,
    setDisplayStockcard,
  } = useContext(StockcardContext);

  const handleClick = (e) => {
    if (stockCardOpen[e.target.name] === e.target.name) {
      setStockCardOpen({ ...stockCardOpen, [e.target.name]: '' });
    } else {
      setStockCardOpen({ ...stockCardOpen, [e.target.name]: e.target.name });
    }
  };

  // when help modal is closed, visions stockcard is open:
  useEffect(() => {
    if (displayStockcard === true) {
      setStockCardOpen({ ...stockCardOpen, stockcardright: 'stockcardright' });
      setDisplayStockcard(false);
    }
  }, [displayStockcard]);

  const stateButton = gameOn ? 'open' : 'hide';

  const stateStockcard =
    stockCardOpen.stockcardright === className ||
    stockCardOpen.stockcardleft === className
      ? 'show'
      : '';

  return (
    <div className={`StockCard ${className} ${stateStockcard}`}>
      <div className="StockCard-container" id={id}>
        <button
          type="button"
          name={className}
          className={`stockcardButton ${stateButton}`}
          onClick={handleClick}
        >
          {stockCardOpen.stockcardright === className ||
          stockCardOpen.stockcardleft === className
            ? 'CLOSE'
            : 'OPEN'}
        </button>

        {content}
      </div>
    </div>
  );
};

StockCard.defaultProps = {
  className: null,
  id: null,
  content: null,
};

StockCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};

export default StockCard;
