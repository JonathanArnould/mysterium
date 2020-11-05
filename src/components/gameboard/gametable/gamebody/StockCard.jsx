import React from 'react';
import PropTypes from 'prop-types';
import '../../../../styles/css/component/StockCard.css';

const StockCard = ({ className, id }) => {
  const handleClick = (e) => {
    e.target.parentNode.parentNode.classList.toggle('show');

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

        <div className="Card Card1">CARD 1</div>
        <div className="Card Card2">CARD 2</div>
        <div className="Card Card3">CARD 3</div>
        <div className="Card Card4">CARD 4</div>
      </div>
    </div>
  );
};
StockCard.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StockCard;
