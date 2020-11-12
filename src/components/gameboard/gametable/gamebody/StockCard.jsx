import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/StockCard.css';

const StockCard = ({
  className,
  id,
  content,
  hideOrShowStockcard,
  hideOrShowCard,
  changeButtonLabel,
}) => {
  const handleClick = (e) => {
    const cards = e.target.parentNode.children;
    const stockcard = e.target.parentNode.parentNode;
    const currentElement = e.target;

    hideOrShowCard(cards);
    hideOrShowStockcard(stockcard);

    if (content === undefined) {
      stockcard.classList.add('immediately');
    }

    changeButtonLabel(currentElement);
  };

  return (
    <div className={`StockCard ${className}`}>
      <div className="StockCard-container" id={id}>
        <button type="button" className="open" onClick={handleClick}>
          OPEN
        </button>
        <button type="button" className="close hide" onClick={handleClick}>
          CLOSE
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
  hideOrShowStockcard: null,
  hideOrShowCard: null,
  changeButtonLabel: null,
};

StockCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  hideOrShowStockcard: PropTypes.func,
  hideOrShowCard: PropTypes.func,
  changeButtonLabel: PropTypes.func,
};

export default StockCard;
