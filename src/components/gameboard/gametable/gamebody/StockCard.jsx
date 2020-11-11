import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/StockCard.css';

const StockCard = ({ className, id, content }) => {
  const handleClick = (e) => {
    const cards = e.target.parentNode.children;
    const stockcard = e.target.parentNode.parentNode;

    Object.values(cards).forEach((card) => {
      if (card.classList.contains('stockcard-card')) {
        card.classList.toggle('hide');
        card.classList.toggle('show');
      }
    });

    stockcard.classList.toggle('hide');
    stockcard.classList.toggle('show');

    if (content === undefined) {
      stockcard.classList.add('immediately');
    }

    if (e.target.classList.contains('open')) {
      e.target.nextSibling.classList.toggle('hide');
      e.target.classList.toggle('hide');
    } else {
      e.target.parentNode.children[0].classList.toggle('hide');
      e.target.classList.toggle('hide');
    }
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
};

StockCard.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};

export default StockCard;
